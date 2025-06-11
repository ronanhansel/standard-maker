/**
 * This service handles CSV operations with Supabase Storage
 */

import { createClient } from '@supabase/supabase-js';

// Configure the Supabase client
const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL || '',
  process.env.SUPABASE_SERVICE_ROLE_KEY || ''
);

// Storage configuration
const BUCKET_NAME = 'audiences';
const CSV_FILE_KEY = 'newsletter.csv';

// Interface for subscriber data
export interface SubscriberData {
  email: string;
  name: string;
  attributes?: string; // JSON string of attributes
}

/**
 * Fetches the current CSV content from Supabase Storage
 */
export async function fetchCurrentCsv(): Promise<string> {
  try {
    // Get the file from Supabase Storage
    const { data, error } = await supabase.storage.from(BUCKET_NAME).download(CSV_FILE_KEY);

    if (error) {
      if (error.message.includes('not found')) {
        // If file doesn't exist, return empty CSV with headers
        return 'email,name,attributes';
      }
      throw error;
    }

    // Convert the blob to string
    const text = await data.text();
    return text;
  } catch (error) {
    console.error('Error fetching CSV from Supabase:', error);
    return 'email,name,attributes';
  }
}

/**
 * Parses CSV content into an array of subscriber data
 */
export function parseCsv(csvContent: string): SubscriberData[] {
  const lines = csvContent.split('\n');
  const headers = lines[0].split(',');

  return lines.slice(1).map((line) => {
    // Handle quoted fields with commas inside them
    const values: string[] = [];
    let currentValue = '';
    let insideQuotes = false;

    for (let i = 0; i < line.length; i++) {
      const char = line[i];

      if (char === '"' && (i === 0 || line[i - 1] !== '\\')) {
        insideQuotes = !insideQuotes;
      } else if (char === ',' && !insideQuotes) {
        values.push(currentValue);
        currentValue = '';
      } else {
        currentValue += char;
      }
    }

    values.push(currentValue); // Add the last value

    return {
      email: values[0],
      name: values[1].replace(/^"|"$/g, ''), // Remove surrounding quotes
      attributes: values[2]
    };
  });
}

/**
 * Converts subscriber data array back to CSV format
 */
export function convertToCsv(subscribers: SubscriberData[]): string {
  const headers = 'email,name,attributes';
  const rows = subscribers.map((sub) => {
    const name = sub.name.includes(',') ? `"${sub.name}"` : sub.name;
    return `${sub.email},${name},${sub.attributes || '{}'}`;
  });

  return [headers, ...rows].join('\n');
}

/**
 * Adds a new subscriber to the CSV data
 */
export async function addSubscriberToCsv(newSubscriber: SubscriberData): Promise<boolean> {
  try {
    // 1. Fetch current CSV
    const currentCsv = await fetchCurrentCsv();

    // 2. Parse CSV to array
    const subscribers = parseCsv(currentCsv);

    // 3. Check if email already exists
    const emailExists = subscribers.some((sub) => sub.email === newSubscriber.email);
    if (emailExists) {
      throw new Error('Email already exists');
    }

    // 4. Add new subscriber
    subscribers.push({
      ...newSubscriber,
      attributes: '{}' // Empty object for attributes as specified
    });

    // 5. Convert back to CSV
    const updatedCsv = convertToCsv(subscribers);

    // 6. Upload to Supabase Storage
    await uploadToSupabase(updatedCsv);

    return true;
  } catch (error) {
    console.error('Error in Supabase service:', error);
    throw error;
  }
}

/**
 * Uploads CSV content to Supabase Storage
 */
async function uploadToSupabase(csvContent: string): Promise<void> {
  try {
    // Upload the file to Supabase Storage
    const { error } = await supabase.storage.from(BUCKET_NAME).upload(CSV_FILE_KEY, csvContent, {
      contentType: 'text/csv',
      upsert: true // This will overwrite the file if it exists
    });

    if (error) {
      throw error;
    }

    console.log('Successfully uploaded CSV to Supabase Storage');
  } catch (error) {
    console.error('Error uploading CSV to Supabase:', error);
    throw error;
  }
}

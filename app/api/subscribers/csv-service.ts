import fs from 'fs/promises';
import path from 'path';

// Interface for subscriber data
export interface SubscriberData {
  email: string;
  name: string;
  attributes?: string;
}

const CSV_FILE_PATH = path.join(process.cwd(), 'data', 'subscribers.csv');

/**
 * Fetches the current CSV content
 */
export async function fetchCurrentCsv(): Promise<string> {
  try {
    const content = await fs.readFile(CSV_FILE_PATH, 'utf-8');
    return content;
  } catch (error) {
    // If file doesn't exist, return empty CSV with headers
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
 * Adds a new subscriber to the CSV file
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

    // 6. Write to file
    await fs.writeFile(CSV_FILE_PATH, updatedCsv, 'utf-8');

    return true;
  } catch (error) {
    console.error('Error in CSV service:', error);
    throw error;
  }
}

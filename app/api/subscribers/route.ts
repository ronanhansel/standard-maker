import type { NextRequest } from 'next/server';
import { NextResponse } from 'next/server';

import type { SubscriberData } from './s3-service';
import { addSubscriberToCsv } from './s3-service';

// This is a temporary implementation for adding subscribers to a CSV file in S3 bucket
// It can be easily removed when no longer needed

export const runtime = 'edge';

// Function to handle POST requests
export async function POST(request: NextRequest) {
  try {
    // Parse the request body
    const data: SubscriberData = await request.json();

    // Basic validation
    if (!data.email || !data.name) {
      return NextResponse.json({ error: 'Email and name are required' }, { status: 400 });
    }

    // Validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(data.email)) {
      return NextResponse.json({ error: 'Invalid email format' }, { status: 400 });
    }

    // Add subscriber to CSV file
    await addSubscriberToCsv({
      email: data.email,
      name: data.name
    });

    return NextResponse.json(
      { success: true, message: 'Subscriber added successfully' },
      { status: 200 }
    );
  } catch (error) {
    console.error('Error adding subscriber:', error);
    const errorMessage = error instanceof Error ? error.message : 'Failed to add subscriber';

    return NextResponse.json({ error: errorMessage }, { status: 500 });
  }
}

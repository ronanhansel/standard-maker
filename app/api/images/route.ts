import type { NextRequest } from 'next/server';
import { NextResponse } from 'next/server';

export const runtime = 'edge';

export async function GET(request: NextRequest) {
  const { searchParams } = new URL(request.url);
  const folder = searchParams.get('folder');

  // Validate folder parameter
  if (!folder) {
    return NextResponse.json({ error: 'Folder parameter is required' }, { status: 400 });
  }

  // Security check - prevent path traversal attacks
  if (folder.includes('..') || folder.includes('/')) {
    return NextResponse.json({ error: 'Invalid folder path' }, { status: 400 });
  }

  try {
    // Get R2 bucket from environment
    const R2 = (process.env as any).R2;
    if (!R2) {
      return NextResponse.json({ error: 'R2 storage not configured' }, { status: 500 });
    }

    // List objects in the folder
    const objects = await R2.list({ prefix: folder });

    // Filter for image files and format the response
    const images = objects.objects
      .filter((obj: any) => /\.(jpg|jpeg|png|webp|avif|svg|gif)$/i.test(obj.key))
      .map((obj: any) => ({
        src: `/${obj.key}`,
        alt: obj.key.split('/').pop()?.split('.')[0] || ''
      }));

    return NextResponse.json(images);
  } catch (error) {
    console.error('Error reading folder:', error);
    return NextResponse.json({ error: 'Failed to read folder' }, { status: 500 });
  }
}

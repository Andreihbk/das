import { NextResponse } from 'next/server';

export async function POST(req: Request) {
  const { name, email, message } = await req.json();

  if (!name || !email || !message) {
    return NextResponse.json({ error: 'Missing fields' }, { status: 400 });
  }

  // Log the data for now (you can connect it to a DB later)
  console.log('Form submission:', { name, email, message });

  // Send success response
  return NextResponse.json({ message: 'Form submitted successfully' });
}

import { type NextRequest, NextResponse } from 'next/server';
import { headers } from 'next/headers';

export const POST = async (request: NextRequest) => {
  const body = await request.json();

  const searchParams = request.nextUrl.searchParams.get('id');
  // const headers = new Headers(request.headers);
  console.log({ body, headers: headers().get('Content-Type'), searchParams });

  const response = NextResponse.json({ create: true }, { status: 201 });

  response.cookies.set('cookies-example', 'this is cookie example', {
    httpOnly: true,
  });

  console.log({ cookie: request.cookies.get('cookies-example') });

  return response;
};

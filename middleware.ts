import type { NextRequest } from 'next/server';
import { NextResponse } from 'next/server';
export async function middleware(request: NextRequest) {
  const jwt = request.cookies.get('token');
  if (!jwt) {
    return NextResponse.redirect(new URL('/sign-in', request.url));
  }
  return NextResponse.next();
}
export const config = {
  matcher: ['/profile/:path*'],
};

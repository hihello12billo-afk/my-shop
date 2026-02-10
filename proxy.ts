import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';
import { getToken } from 'next-auth/jwt';

// CHANGE 1: Function name is now "proxy"
export async function proxy(request: NextRequest) {
  const path = request.nextUrl.pathname;

  const session = await getToken({ 
    req: request, 
    secret: process.env.NEXTAUTH_SECRET 
  });

  const isLogged = !!session;

  // 1. PROTECT CHECKOUT
  if (path.startsWith('/checkout') && !isLogged) {
    return NextResponse.redirect(new URL('/login', request.url));
  }

  // 2. PROTECT AUTH PAGES
  if ((path.startsWith('/login') || path.startsWith('/register')) && isLogged) {
    return NextResponse.redirect(new URL('/', request.url));
  }

  return NextResponse.next();
}

export const config = {
  matcher: ['/checkout', '/login', '/register'],
};
import { NextRequest, NextResponse } from 'next/server';

export function middleware(request: NextRequest) {
	if (request.url.includes('/auth') && request.cookies.has('session_token'))
		return NextResponse.redirect(new URL('/app/dashboard', request.url));

	if (
		request.url.includes('/app') &&
		!request.cookies.has('session_token')
	)
		return NextResponse.redirect(new URL('/auth/login', request.url));
}

export const config = {
	matcher: ['/((?!_next).*)(.+)'],
};

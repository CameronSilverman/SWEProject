import { NextRequest, NextResponse } from 'next/server';

export function middleware(request: NextRequest) {
	if (request.url.includes('/auth') && request.cookies.has('session_token'))
		return NextResponse.redirect(new URL('/dashboard_page', request.url));

	if (
		request.url.includes('/dashboard_page') &&
		!request.cookies.has('session_token')
	)
		return NextResponse.redirect(new URL('/auth/login', request.url));
}

export const config = {
	matcher: ['/((?!_next).*)(.+)'],
};

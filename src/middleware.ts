import {
	clerkMiddleware,
	ClerkMiddlewareAuth,
	createRouteMatcher,
} from '@clerk/nextjs/server';
import { NextRequest, NextResponse } from 'next/server';
import { userProfileExists } from './lib/users';

const isProtectedRoute = createRouteMatcher(['/core(.*)']);
const isOnboarding = createRouteMatcher(['/onboarding']);

export default clerkMiddleware(async (auth, req) => {
	if (isProtectedRoute(req) || isOnboarding(req)) await auth.protect();

	return userProfileMiddleware(auth, req);
});

async function userProfileMiddleware(
	auth: ClerkMiddlewareAuth,
	req: NextRequest
) {
	const authObj = await auth();
	const exists = await userProfileExists(authObj.userId!);
	if (!exists && isProtectedRoute(req)) {
		return NextResponse.redirect(new URL('/onboarding', req.url));
	}

	return onboardingMiddleware(req, exists);
}

function onboardingMiddleware(req: NextRequest, exists: boolean) {
	// do not want to allow access to onboarding route if already onboarded
	if (isOnboarding(req) && exists) {
		return NextResponse.redirect(new URL('/', req.url));
	}
}

export const config = {
	matcher: [
		// Skip Next.js internals and all static files, unless found in search params
		'/((?!_next|[^?]*\\.(?:html?|css|js(?!on)|jpe?g|webp|png|gif|svg|ttf|woff2?|ico|csv|docx?|xlsx?|zip|webmanifest)).*)',
		// Always run for API routes
		'/(api|trpc)(.*)',
	],
};

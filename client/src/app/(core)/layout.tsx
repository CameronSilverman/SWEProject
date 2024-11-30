import { RedirectToSignIn, SignedIn, SignedOut } from '@clerk/nextjs';

export default function CoreLayout({ children }: { children: React.ReactNode }) {
	return (
		<>
			<SignedIn>{children}</SignedIn>
			<SignedOut>
				<RedirectToSignIn />
			</SignedOut>
		</>
	);
}

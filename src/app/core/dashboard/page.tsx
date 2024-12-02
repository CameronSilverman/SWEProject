import { IssueDisplay } from '@/components/display/issue-display';
import { Suspense } from 'react';

export default function Page() {
	return (
		<main className="min-h-screen w-screen pt-32 pb-12 px-6 md:px-12 lg:px-80">
			<Suspense fallback={<div>Loading issue data...</div>}>
				<IssueDisplay />
			</Suspense>
		</main>
	);
}

import { ProjectDisplay } from '@/components/display/project-display';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Suspense } from 'react';

export default function Page() {
	return (
		<main className="min-h-screen pt-32 pb-12 px-6 md:px-12 lg:px-24">
			<Card className="w-full mx-auto">
				<CardHeader>
					<CardTitle className="text-3xl font-bold">Projects</CardTitle>
				</CardHeader>
				<CardContent>
					<Suspense fallback={<div>Loading project data...</div>}>
						<ProjectDisplay />
					</Suspense>
				</CardContent>
			</Card>
		</main>
	);
}

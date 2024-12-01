import {
	Card,
	CardContent,
	CardDescription,
	CardHeader,
	CardTitle,
} from '@/components/ui/card';

export default function Page() {
	return (
		<div className="w-full max-w-3xl">
			<Card>
				<CardHeader>
					<CardTitle>Create Issue</CardTitle>
					<CardDescription>
						Create an issue for any one of your projects here.
					</CardDescription>
				</CardHeader>
				<CardContent>
					{/* <IssueCreateForm userProjects={userProjects} /> */}
				</CardContent>
			</Card>
		</div>
	);
}

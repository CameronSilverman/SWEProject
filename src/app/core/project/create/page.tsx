import { ProjectCreateForm } from '@/components/form/project/project-create-form';
import {
	Card,
	CardContent,
	CardDescription,
	CardHeader,
	CardTitle,
} from '@/components/ui/card';

export default function Page() {
	return (
		<div className="min-h-screen flex items-center w-full max-w-3xl">
			<Card>
				<CardHeader>
					<CardTitle>Create Project</CardTitle>
					<CardDescription>
						Create a project to start building something amazing with fellow
						Gators.
					</CardDescription>
				</CardHeader>
				<CardContent>
					<ProjectCreateForm />
				</CardContent>
			</Card>
		</div>
	);
}

import { getUserProjects } from '@/lib/projects';
import { ProjectCard } from '../card/project-card';
import { Card, CardContent, CardHeader, CardTitle } from '../ui/card';

export async function ProjectDisplay({ userId }: { userId: string }) {
	const projects = await getUserProjects(userId);

	return (
		<Card>
			<CardHeader>
				<CardTitle>Recent Projects</CardTitle>
			</CardHeader>
			<CardContent>
				<div className="space-y-4 w-full">
					{projects.map((project, index) => (
						<ProjectCard
							key={index}
							name={project.projects.name!}
							featured={project.projects.featured!}
							archived={project.projects.archived!}
							description={project.projects.description!}
						/>
					))}
				</div>
			</CardContent>
		</Card>
	);
}

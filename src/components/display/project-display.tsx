import { getAllProjects } from '@/lib/projects';
import { ProjectCard } from '../card/project-card';
import { getUserProfile } from '@/lib/users';

export async function ProjectDisplay() {
	const projects = await getAllProjects();

	return (
		<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
			{projects.map(async (project, index) => {
				const userData = (
					await getUserProfile(project.project_contributors.userId!)
				)[0];

				return (
					<ProjectCard
						key={index}
						name={project.projects.name!}
						featured={project.projects.featured!}
						archived={project.projects.archived!}
						description={project.projects.description!}
						owner={{
							firstName: userData.firstName,
							lastName: userData.lastName,
						}}
					/>
				);
			})}
		</div>
	);
}

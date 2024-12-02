import React from 'react';

interface ProjectCardProps {
	project: {
		id: number;
		name: string;
		tags: string[];
		description: string;
		status: string;
		statusColor: string;
		lastUpdated: string;
		stars: number;
		collaborators: number;
	};
}

const ProjectCard: React.FC<ProjectCardProps> = ({ project }) => {
	return (
		<div className="bg-gray-50 rounded-lg p-6 shadow-md overflow-hidden border border-gray-200 transition-transform duration-200 ease-in-out hover:scale-[1.02] hover:shadow-lg">
			<div className="flex justify-between items-start mb-2">
				<h3 className="font-bold text-lg">{project.name}</h3>
				<span
					className={`text-xs ${project.statusColor} text-white px-2 py-1 rounded-lg`}
				>
					{project.status}
				</span>
			</div>

			<div className="flex flex-wrap gap-2 mb-3">
				{project.tags.map(tag => (
					<span
						key={tag}
						className="text-xs bg-gray-200 text-gray-700 px-2 py-1 rounded-full"
					>
						{tag}
					</span>
				))}
			</div>

			<p className="text-sm text-gray-600 mb-4">{project.description}</p>

			<div className="flex justify-between items-center text-sm text-gray-500">
				<div className="flex items-center gap-4">
					<span>⭐ {project.stars}</span>
					<span>👥 {project.collaborators}</span>
				</div>
				<span>Updated {project.lastUpdated}</span>
			</div>
		</div>
	);
};

export default ProjectCard;

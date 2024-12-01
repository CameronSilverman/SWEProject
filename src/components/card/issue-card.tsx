import React from 'react';
import { DifficultyBadge } from '../badge/difficulty-badge';
import { Badge } from '../ui/badge';
import { Card, CardContent, CardHeader, CardTitle } from '../ui/card';
import { Avatar, AvatarFallback, AvatarImage } from '../ui/avatar';
import { projectTechnologies } from '@/lib/db/schema';

type TechnologyEnum = (typeof projectTechnologies.enumValues)[number];

interface IssueCardProps {
	title: string;
	assignee: string;
	difficulty: 'easy' | 'medium' | 'hard';
	technologies: TechnologyEnum[];
	description: string;
}

export function IssueCard({
	title,
	assignee,
	difficulty,
	technologies = [],
	description,
}: IssueCardProps) {
	return (
		<Card className="w-full flex flex-col transition-all duration-300 ease-in-out transform hover:scale-105 hover:shadow-lg cursor-pointer">
			<CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
				<CardTitle className="text-xl font-bold">{title}</CardTitle>
				<DifficultyBadge difficulty={difficulty} />
			</CardHeader>
			<CardContent>
				<p className="text-sm text-gray-500 mb-4">{description}</p>
				<div className="flex flex-wrap gap-2 mb-4">
					{technologies.map((tech, index) => (
						<Badge key={index} variant="secondary">
							{tech}
						</Badge>
					))}
				</div>
				<div className="flex items-center justify-end text-sm text-gray-500">
					<Avatar className="h-8 w-8">
						<AvatarImage />
						<AvatarFallback>
							{assignee
								.split(' ')
								.map(n => n[0])
								.join('')}
						</AvatarFallback>
					</Avatar>
					<span className="ml-2 font-medium">{assignee}</span>
				</div>
			</CardContent>
		</Card>
	);
}

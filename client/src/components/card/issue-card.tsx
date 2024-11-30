import React from 'react';
import { DifficultyBadge } from '../badge/difficulty-badge';
import { Badge } from '../ui/badge';
import { Card, CardContent, CardHeader, CardTitle } from '../ui/card';
import { Avatar, AvatarFallback, AvatarImage } from '../ui/avatar';

interface IssueCardProps {
	title: string;
	assignee: string;
	difficulty: 'easy' | 'medium' | 'hard';
	technologies?: string[];
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
		<Card className="h-[300px] w-10/12 flex flex-col transition-all duration-300 ease-in-out transform hover:scale-105 hover:shadow-lg cursor-pointer">
			<CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
				<CardTitle className="text-2xl font-bold">{title}</CardTitle>
				<DifficultyBadge difficulty={difficulty} />
			</CardHeader>
			<CardContent className="flex-grow">
				<p className="text-sm text-gray-500 dark:text-gray-400 mb-4">
					{description}
				</p>
				<div className="flex items-center mb-4">
					<Avatar className="h-8 w-8">
						<AvatarImage />
						<AvatarFallback>
							{assignee
								.split(' ')
								.map(n => n[0])
								.join('')}
						</AvatarFallback>
					</Avatar>
					<span className="ml-2 text-sm font-medium">{assignee}</span>
				</div>
				<div className="flex flex-wrap gap-2">
					{technologies.slice(0, 3).map((tech, index) => (
						<Badge key={index} variant="secondary">
							{tech}
						</Badge>
					))}
				</div>
			</CardContent>
		</Card>
	);
}

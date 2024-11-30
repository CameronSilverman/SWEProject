import { IssueCard } from '../card/issue-card';

interface IssueCardProps {
	title: string;
	assignee: string;
	difficulty: 'easy' | 'medium' | 'hard';
	technologies?: string[];
	description: string;
}

export function IssueDisplay({ issues } : { issues: IssueCardProps[]}) {
	return (
		<div className='space-y-4'>
			{issues.map((issue, index) => (
				<IssueCard key={index} {...issue} />	
			))}
		</div>
	)
}
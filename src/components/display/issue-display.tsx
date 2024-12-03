'use server';
export const dynamic = 'force-dynamic';

import { getIssues } from '@/lib/issues';
import { IssueCard } from '../card/issue-card';

export async function IssueDisplay() {
	const issues = await getIssues();

	return (
		<div className="space-y-4 w-full">
			{issues.map((issue, index) => (
				<IssueCard
					key={index}
					assignee={`${issue.creatorFirstName} ${issue.creatorLastName}`}
					title={issue.title}
					difficulty={issue.difficulty}
					description={issue.description!}
					technologies={issue.technologies!}
				/>
			))}
		</div>
	);
}

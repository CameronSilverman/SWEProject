import { Avatar, AvatarFallback, AvatarImage } from '../ui/avatar';
import { Badge } from '../ui/badge';
import {
	Card,
	CardContent,
	CardFooter,
	CardHeader,
	CardTitle,
} from '../ui/card';

export function ProjectCard({
	name,
	description,
	archived,
	featured,
	owner,
}: {
	name: string;
	description: string;
	archived: boolean;
	featured: boolean;
	owner?: {
		firstName: string;
		lastName: string;
	};
}) {
	return (
		<Card className="overflow-hidden transition-all hover:shadow-lg">
			<CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
				<CardTitle className="text-lg font-bold">{name}</CardTitle>
				<div className="flex items-center gap-2">
					{archived && (
						<Badge variant="destructive" className="text-xs">
							Archived
						</Badge>
					)}
					{featured && (
						<Badge variant="default" className="text-xs">
							Featured
						</Badge>
					)}
				</div>
			</CardHeader>
			<CardContent>
				<p className="text-sm text-muted-foreground mb-4">{description}</p>
			</CardContent>
			{owner && (
				<CardFooter className="w-full flex justify-end">
					<div className="flex items-center justify-end text-sm text-gray-500">
						<Avatar className="h-8 w-8">
							<AvatarImage />
							<AvatarFallback>
								{`${owner.firstName} ${owner.lastName}`
									.split(' ')
									.map(n => n[0])
									.join('')}
							</AvatarFallback>
						</Avatar>
						<span className="ml-2 font-medium">{`${owner.firstName} ${owner.lastName}`}</span>
					</div>
				</CardFooter>
			)}
		</Card>
	);
}

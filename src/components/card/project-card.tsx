import { Badge } from '../ui/badge';
import { Card, CardContent, CardHeader, CardTitle } from '../ui/card';

export function ProjectCard({
	name,
	description,
	archived,
	featured,
}: {
	name: string;
	description:string;
	archived: boolean;
	featured: boolean;
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
		</Card>
	);
}

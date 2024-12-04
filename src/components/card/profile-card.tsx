import { Avatar, AvatarFallback } from '@radix-ui/react-avatar';
import { Card, CardContent, CardHeader } from '../ui/card';
import { programmingLanguages, technicalInterests } from '@/lib/db/schema';
import { Badge } from '../ui/badge';

type TechnologyInterestsEnum = (typeof technicalInterests.enumValues)[number];

type ProgrammingLanguagesEnum =
	(typeof programmingLanguages.enumValues)[number];

export function ProfileCard({
	firstName,
	lastName,
	username,
	biography,
	techInterests,
	programmingLanguages,
}: {
	firstName: string;
	lastName: string;
	username: string;
	biography: string;
	techInterests: TechnologyInterestsEnum[];
	programmingLanguages: ProgrammingLanguagesEnum[];
}) {
	return (
		<Card className="w-full max-w-md">
			<CardHeader className="flex flex-row items-center gap-4">
				<Avatar className="h-16 w-16">
					<AvatarFallback className="flex items-center justify-center text-lg font-semibold">
						{`${firstName} ${lastName}`
							.split(' ')
							.map(n => n[0])
							.join('')}
					</AvatarFallback>
				</Avatar>
				<div className="flex flex-col">
					<h2 className="text-2xl font-bold">{`${firstName} ${lastName}`}</h2>
					<p className="text-sm text-muted-foreground">@{username}</p>
				</div>
			</CardHeader>
			<CardContent className="space-y-4">
				<p className="text-sm text-muted-foreground">{biography}</p>
				<div>
					<h3 className="text-sm font-semibold mb-2">Tech Interests</h3>
					<div className="flex flex-wrap gap-2">
						{techInterests.map((tech, index) => (
							<Badge key={index} variant="secondary">
								{tech}
							</Badge>
						))}
					</div>
				</div>
				<div>
					<h3 className="text-sm font-semibold mb-2">Programming Languages</h3>
					<div className="flex flex-wrap gap-2">
						{programmingLanguages.map((lang, index) => (
							<Badge key={index} variant="outline">
								{lang}
							</Badge>
						))}
					</div>
				</div>
			</CardContent>
		</Card>
	);
}

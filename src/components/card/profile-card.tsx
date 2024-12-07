import { Avatar, AvatarFallback } from '@radix-ui/react-avatar';
import { Card, CardContent } from '../ui/card';
import { programmingLanguages, technicalInterests } from '@/lib/db/schema';
import { Badge } from '../ui/badge';

type TechnologyInterestsEnum = (typeof technicalInterests.enumValues)[number];
type ProgrammingLanguagesEnum = (typeof programmingLanguages.enumValues)[number];

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
		<Card className="w-full lg:w-96">
			<CardContent className="pt-8">
				<div className="flex flex-col items-center mb-6">
					<Avatar className="h-24 w-24 mb-4 rounded-full">
						<AvatarFallback className="text-2xl font-semibold bg-secondary rounded-full w-full h-full flex items-center justify-center">
							{`${firstName} ${lastName}`
								.split(' ')
								.map(n => n[0])
								.join('')}
						</AvatarFallback>
					</Avatar>
					<div className="text-center">
						<h1 className="text-3xl font-semibold">{`${firstName} ${lastName}`}</h1>
						<p className="text-muted-foreground">@{username}</p>
					</div>
				</div>

				<p className="text-sm text-muted-foreground mb-6">
					{biography}
				</p>

				<hr className="my-4 border-border" />

				<div className="space-y-4">
					<div>
						<h3 className="text-sm font-semibold mb-2">Tech Interests</h3>
						<div className="flex flex-wrap gap-2">
							{techInterests.map((tech) => (
								<Badge key={tech} variant="secondary">
									{tech}
								</Badge>
							))}
						</div>
					</div>

					<div>
						<h3 className="text-sm font-semibold mb-2">Programming Languages</h3>
						<div className="flex flex-wrap gap-2">
							{programmingLanguages.map((lang) => (
								<Badge key={lang} variant="outline">
									{lang}
								</Badge>
							))}
						</div>
					</div>
				</div>
			</CardContent>
		</Card>
	);
}
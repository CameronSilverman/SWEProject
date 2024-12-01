import { cn } from '@/lib/utils';
import { Badge } from '../ui/badge';

export function DifficultyBadge({
	difficulty,
}: {
	difficulty: 'easy' | 'medium' | 'hard';
}) {
	const colorClasses = {
		easy: 'bg-green-50 text-green-700 hover:bg-green-100',
		medium: 'bg-amber-50 text-amber-700 hover:bg-amber-100',
		hard: 'bg-red-50 text-red-700 hover:bg-red-100'
	  }

	return (
		<Badge
			variant="outline"
			className={cn(colorClasses[difficulty], 'transition-colors', 'capitalize')}
		>
			{difficulty}
		</Badge>
	);
}

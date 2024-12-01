import { OnboardingForm } from '@/components/form/onboarding/onboarding-form';
import {
	Card,
	CardContent,
	CardDescription,
	CardHeader,
	CardTitle,
} from '@/components/ui/card';

export default function Page() {
	return (
		<div className="w-full max-w-3xl">
			<Card>
				<CardHeader>
					<CardTitle>Welcome!</CardTitle>
					<CardDescription>
						Before we get started, we need to know a little bit about you. Please fill out the form below.
					</CardDescription>
				</CardHeader>
				<CardContent>
					<OnboardingForm />
				</CardContent>
			</Card>
		</div>
	);
}

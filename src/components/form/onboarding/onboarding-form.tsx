'use client';

import { Button } from '@/components/ui/button';
import {
	Form,
	FormControl,
	FormDescription,
	FormField,
	FormItem,
	FormLabel,
	FormMessage,
} from '@/components/ui/form';
import { ButtonLoading } from '@/components/ui/loading-button';
import MultipleSelector from '@/components/ui/multiselect';
import { Textarea } from '@/components/ui/textarea';
import { useToast } from '@/hooks/use-toast';
import { programmingLanguages, technicalInterests } from '@/lib/db/schema';
import { createUserProfileWithData } from '@/lib/users';
import { useAuth, useUser } from '@clerk/nextjs';
import { zodResolver } from '@hookform/resolvers/zod';
import { useRouter } from 'next/navigation';
import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { z } from 'zod';

const formSchema = z.object({
	biography: z
		.string()
		.min(1, { message: 'Biography is required' })
		.max(500, { message: 'Biography cannot be more than 500 characters' }),
	technologies: z
		.array(
			z.object({
				label: z.enum(technicalInterests.enumValues),
				value: z.enum(technicalInterests.enumValues),
			})
		)
		.min(3, { message: 'Select at least 3 technologies' })
		.max(5, { message: 'Only 5 technologies can be selected' }),
	programmingLanguages: z
		.array(
			z.object({
				label: z.enum(programmingLanguages.enumValues),
				value: z.enum(programmingLanguages.enumValues),
			})
		)
		.min(3, { message: 'Select at least 3 languages' })
		.max(5, { message: 'Only 5 languages can be selected' }),
});

export type OnboardingFormData = z.infer<typeof formSchema>;

export function OnboardingForm() {
	const form = useForm<OnboardingFormData>({
		resolver: zodResolver(formSchema),
		defaultValues: {
			biography: '',
			technologies: [],
			programmingLanguages: [],
		},
	});

	const router = useRouter();
	const auth = useAuth();
	const { user } = useUser();
	const [loading, setLoading] = useState(false);
	const { toast } = useToast();

	async function onSubmit(data: OnboardingFormData) {
		setLoading(true);

		try {
			await createUserProfileWithData(
				auth.userId!,
				user!.firstName!,
				user!.lastName!,
				data
			);
			router.push('/core/dashboard');
		} catch (err) {
			toast({ title: 'Error Creating Profile', description: err as string });
		} finally {
			setLoading(false);
		}
	}

	return (
		<Form {...form}>
			<form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
				<FormField
					control={form.control}
					name="programmingLanguages"
					render={({ field }) => (
						<FormItem>
							<FormLabel>Programming Languages</FormLabel>
							<FormControl>
								<MultipleSelector
									defaultOptions={programmingLanguages.enumValues.map(v => {
										return { label: v, value: v };
									})}
									placeholder="Select your favorite programming languages"
									{...field}
								/>
							</FormControl>
							<FormDescription>
								Select at 3 to 5 of your favorite programming languages.
							</FormDescription>
							<FormMessage />
						</FormItem>
					)}
				/>
				<FormField
					control={form.control}
					name="technologies"
					render={({ field }) => (
						<FormItem>
							<FormLabel>Technical Interests</FormLabel>
							<FormControl>
								<MultipleSelector
									defaultOptions={technicalInterests.enumValues.map(v => {
										return { label: v, value: v };
									})}
									placeholder="Select your favorite technical interests"
									{...field}
								/>
							</FormControl>
							<FormDescription>
								Select at 3 to 5 of your favorite technical interests.
							</FormDescription>
							<FormMessage />
						</FormItem>
					)}
				/>
				<FormField
					control={form.control}
					name="biography"
					render={({ field }) => (
						<FormItem>
							<FormLabel>Biography</FormLabel>
							<FormControl>
								<Textarea
									placeholder="I am a Software Engineer at the University of Florida and I really hate Florida State University."
									{...field}
								/>
							</FormControl>
							<FormDescription>
								Write a short biography about yourself. Max 500 characters.
							</FormDescription>
							<FormMessage />
						</FormItem>
					)}
				/>
				{loading ? <ButtonLoading /> : <Button type="submit">Submit</Button>}
			</form>
		</Form>
	);
}

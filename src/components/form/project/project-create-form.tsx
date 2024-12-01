'use client'

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
import { Input } from '@/components/ui/input';
import { ButtonLoading } from '@/components/ui/loading-button';
import { Textarea } from '@/components/ui/textarea';
import { useToast } from '@/hooks/use-toast';
import { createProjectWithData } from '@/lib/projects';
import { useAuth } from '@clerk/nextjs';
import { zodResolver } from '@hookform/resolvers/zod';
import { useRouter } from 'next/navigation';
import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { z } from 'zod';

const formSchema = z.object({
	title: z
		.string()
		.min(1, { message: 'Title is required' })
		.max(50, { message: 'Title cannot be more than 50 characters' }),
	description: z
		.string()
		.min(1, { message: 'Description is required' })
		.max(500, { message: 'Description cannot be more than 500 characters' }),
});

export type ProjectCreateFormData = z.infer<typeof formSchema>;

export function ProjectCreateForm() {
	const form = useForm<ProjectCreateFormData>({
		resolver: zodResolver(formSchema),
		defaultValues: {
			title: '',
			description: '',
		},
	});

	const router = useRouter();
	const auth = useAuth();
	const [loading, setLoading] = useState(false);
	const { toast } = useToast();

	async function handleSubmit(data: ProjectCreateFormData) {
		setLoading(true);

		try {
			const projectId = await createProjectWithData(auth.userId!, data);
			router.push(`/projects/${projectId}`);
		} catch (err) {
			toast({ title: 'Error Creating Project', description: err as string });
		} finally {
			setLoading(false);
		}
	}

	return (
		<Form {...form}>
			<form onSubmit={form.handleSubmit(handleSubmit)} className="space-y-8">
				<FormField
					control={form.control}
					name="title"
					render={({ field }) => (
						<FormItem>
							<FormLabel>Title</FormLabel>
							<FormControl>
								<Input placeholder="Awesome Project" {...field} />
							</FormControl>
							<FormDescription>
								This is the name of your project. Try being creative!
							</FormDescription>
							<FormMessage />
						</FormItem>
					)}
				/>
				<FormField
					control={form.control}
					name="description"
					render={({ field }) => (
						<FormItem>
							<FormLabel>Description</FormLabel>
							<FormControl>
								<Textarea
									placeholder="This is my super awesome project where we do awesome things! :D"
									{...field}
								/>
							</FormControl>
							<FormDescription>
								This is where you describe your project. You have 500 characters
								to do so.
							</FormDescription>
							<FormMessage />
						</FormItem>
					)}
				/>
				{loading ? (
					<ButtonLoading />
				) : (
					<Button type="submit">Create Project</Button>
				)}
			</form>
		</Form>
	);
}

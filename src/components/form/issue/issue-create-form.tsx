'use client';

import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import z from 'zod';
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
import { projectTechnologies } from '@/lib/db/schema';
import {
	Select,
	SelectContent,
	SelectItem,
	SelectTrigger,
	SelectValue,
} from '@/components/ui/select';
import MultipleSelector from '@/components/ui/multiselect';
import { Textarea } from '@/components/ui/textarea';
import { useState } from 'react';
import { createIssueWithData } from '@/lib/issues';
import { useRouter } from 'next/navigation';
import { Button } from '@/components/ui/button';
import { ButtonLoading } from '@/components/ui/loading-button';
import { useToast } from '@/hooks/use-toast';

const formSchema = z.object({
	title: z
		.string()
		.min(1, { message: 'Title is required' })
		.max(50, { message: 'Title cannot be more than 50 characters' }),
	description: z
		.string()
		.min(1, { message: 'Description is required' })
		.max(500, { message: 'Description cannot be more than 500 characters' }),
	project: z.string().min(1, { message: 'Project is required' }), // this shouldn't even be empty
	technologies: z
		.array(
			z.object({
				label: z.enum(projectTechnologies.enumValues),
				value: z.enum(projectTechnologies.enumValues),
			})
		)
		.min(1, { message: 'Select at least 1 technology' })
		.max(3, { message: 'Only 3 technologies can be selected' }),
	difficulty: z.enum(['easy', 'medium', 'hard']).default('easy'),
});

export type IssueCreateFormData = z.infer<typeof formSchema>;

export function IssueCreateForm({
	userProjects,
}: {
	userProjects: { id: number; name: string }[];
}) {
	const form = useForm<z.infer<typeof formSchema>>({
		resolver: zodResolver(formSchema),
		defaultValues: {
			title: '',
			description: '',
			project: '',
		},
	});

	const [loading, setLoading] = useState(false);
	const router = useRouter();
	const { toast } = useToast();

	async function onSubmit(data: z.infer<typeof formSchema>) {
		setLoading(true);

		try {
			const id = await createIssueWithData(data);
			router.push(`/issues/${id}`);
		} catch (err) {
			toast({ title: 'Error Creating Issue', description: err as string });
		} finally {
			setLoading(false);
		}
	}

	return (
		<Form {...form}>
			<form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
				<FormField
					control={form.control}
					name="title"
					render={({ field }) => (
						<FormItem>
							<FormLabel>Issue Title</FormLabel>
							<FormControl>
								<Input placeholder="Not Enough Awesomeness" {...field} />
							</FormControl>
							<FormDescription>
								This is your issue title, make it short and sweet.
							</FormDescription>
							<FormMessage />
						</FormItem>
					)}
				/>
				<FormField
					control={form.control}
					name="project"
					render={({ field }) => (
						<FormItem>
							<FormLabel>Project</FormLabel>
							<Select onValueChange={field.onChange} defaultValue={field.value}>
								<FormControl>
									<SelectTrigger>
										<SelectValue placeholder='Select a project' />
									</SelectTrigger>
								</FormControl>
								<SelectContent>
									{userProjects.map(project => (
										<SelectItem key={project.id} value={project.id.toString()}>
											{project.name}
										</SelectItem>
									))}
								</SelectContent>
							</Select>
						</FormItem>
					)}
				/>
				<FormField
					control={form.control}
					name="technologies"
					render={({ field }) => (
						<FormItem>
							<FormLabel>Project</FormLabel>
							<FormControl>
								<MultipleSelector
									options={projectTechnologies.enumValues.map(v => {
										return {
											label: v,
											value: v,
										};
									})}
									placeholder="Select the technologies used in this project"
									{...field}
								/>
							</FormControl>
							<FormDescription>
								Select the technologies used in this project, only 3 can be
								selected.
							</FormDescription>
							<FormMessage />
						</FormItem>
					)}
				/>
				<FormField
					control={form.control}
					name="difficulty"
					render={({ field }) => (
						<FormItem>
							<FormLabel>Difficulty</FormLabel>
							<Select onValueChange={field.onChange} defaultValue={field.value}>
								<FormControl>
									<SelectTrigger>
										<SelectValue placeholder='Select a difficulty' />
									</SelectTrigger>
								</FormControl>
								<SelectContent>
									<SelectItem value="easy">Easy</SelectItem>
									<SelectItem value="medium">Medium</SelectItem>
									<SelectItem value="hard">Hard</SelectItem>
								</SelectContent>
							</Select>
						</FormItem>
					)}
				/>
				<FormField
					control={form.control}
					name="description"
					render={({ field }) => (
						<FormItem>
							<FormLabel>Issue Description</FormLabel>
							<FormControl>
								<Textarea
									placeholder="Awesome project needs some more awesomeness... :("
									{...field}
								/>
							</FormControl>
							<FormMessage />
						</FormItem>
					)}
				/>
				{loading ? (
					<ButtonLoading />
				) : (
					<Button type="submit">Create Issue</Button>
				)}
			</form>
		</Form>
	);
}

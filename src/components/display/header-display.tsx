import Header from '@/components/header';
import { currentUser } from '@clerk/nextjs/server';

export async function HeaderDisplay() {
	const user = await currentUser();

	return (
		<Header firstName={user?.firstName} lastName={user?.lastName} />
	);
}

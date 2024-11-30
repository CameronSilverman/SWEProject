'use client';

import ProjectForm from './project_creation_form';
import Link from 'next/link';

export default function Page() {
	return (
		<main>
			<div className="background-div-style">
				<div className="link-div-style">
					<div>
						<Link href="/">Home</Link>
					</div>
				</div>
				{/* <ProjectForm></ProjectForm> */}
			</div>
		</main>
	);
}

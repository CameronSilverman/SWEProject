import {
	boolean,
	integer,
	pgEnum,
	pgTable,
	text,
	varchar,
} from 'drizzle-orm/pg-core';

export const programmingLanguages = pgEnum('programming_languages', [
	'javascript',
	'typescript',
	'python',
	'java',
	'c++',
	'c#',
	'php',
	'ruby',
	'go',
	'swift',
	'kotlin',
	'rust',
	'other',
]);

export const technicalInterests = pgEnum('technical_interests', [
	'web',
	'mobile',
	'game',
	'embedded',
	'network',
	'data',
	'other',
]);

export const projectTechnologies = pgEnum('project_technologies', [
	'HTML',
	'CSS',
	'JavaScript',
	'TypeScript',
	'React',
	'Angular',
	'Vue.js',
	'Svelte',
	'Next.js',
	'Nuxt.js',
	'Gatsby',
	'Ember.js',
	'Backbone.js',
	'jQuery',
	'Bootstrap',
	'Tailwind CSS',
	'Sass',
	'Less',
	'Node.js',
	'Express.js',
	'Django',
	'Flask',
	'Ruby on Rails',
	'ASP.NET Core',
	'Spring Boot',
	'Laravel',
	'Symfony',
	'Phoenix',
	'FastAPI',
	'GraphQL',
	'RESTful APIs',
	'WebSockets',
	'JSON',
	'XML',
	'AJAX',
	'Webpack',
	'Parcel',
	'Babel',
	'ESLint',
	'Prettier',
	'Docker',
	'Kubernetes',
	'Nginx',
	'Apache HTTP Server',
	'AWS',
	'Azure',
	'Google Cloud Platform',
	'Firebase',
	'MongoDB',
	'PostgreSQL',
	'MySQL',
	'SQLite',
	'Redis',
	'PHP',
	'Python',
	'Ruby',
	'Java',
	'C#',
	'Go',
	'Rust',
	'Kotlin',
	'Swift',
	'Perl',
	'Elixir',
	'Scala',
	'Clojure',
	'Haskell',
	'Objective-C',
	'Lua',
	'MATLAB',
	'Visual Basic .NET',
	'F#',
	'Erlang',
	'Julia',
	'Shell',
	'Assembly Language',
	'SQL',
	'Delphi/Object Pascal',
	'Ada',
	'COBOL',
	'Fortran',
	'Lisp',
	'Scheme',
	'Prolog',
	'OCaml',
	'Groovy',
	'VHDL',
	'Verilog',
	'ABAP',
	'ActionScript',
	'Apex',
	'AWK',
	'Bash',
	'ColdFusion',
	'Crystal',
	'D',
	'Forth',
	'Hack',
	'Icon',
	'IDL',
	'Io',
	'J',
	'LabVIEW',
	'Ladder Logic',
	'Mercury',
	'ML',
	'Modula-2',
	'Nim',
	'OpenCL',
	'PL/I',
	'PostScript',
	'REXX',
	'Smalltalk',
	'SPARK',
	'SPSS',
	'Tcl',
	'VimL',
	'Wolfram',
	'Zig',
]);

export const contributorRoles = pgEnum('contributor_roles', [
	'owner',
	'admin',
	'contributor',
]);

export const difficulty = pgEnum('difficulty', ['easy', 'medium', 'hard']);

export const userProfiles = pgTable('user_profiles', {
	id: varchar({ length: 256 }).primaryKey(),
	biography: text(),
	programmingLanguages: programmingLanguages().array(),
	technicalInterests: technicalInterests().array(),
});

export const projects = pgTable('projects', {
	id: integer().primaryKey().generatedAlwaysAsIdentity(),
	name: varchar({ length: 256 }),
	description: text(),
	archived: boolean().default(false),
	featured: boolean().default(false),
});

export const projectContributors = pgTable('project_contributors', {
	id: integer().primaryKey().generatedAlwaysAsIdentity(),
	projectId: integer()
		.references(() => projects.id)
		.notNull(),
	userId: varchar()
		.references(() => userProfiles.id)
		.notNull(),
	role: contributorRoles().default('contributor'),
});

export const projectTasks = pgTable('project_tasks', {
	id: integer().primaryKey().generatedAlwaysAsIdentity(),
	projectId: integer()
		.references(() => projects.id)
		.notNull(),
	assigned: varchar()
		.references(() => userProfiles.id)
		.array(),
	title: varchar({ length: 256 }).notNull(),
	description: text(),
	difficulty: difficulty().notNull(),
	technologies: projectTechnologies().array(),
	completed: boolean().default(false),
});

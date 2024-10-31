"use client";
import IssueCard from "@/app/_components/cards/IssueCard";

// Mock data type
interface Issue {
  id: string;
  title: string;
  assignee: string;
  difficulty: 'Easy' | 'Medium' | 'Hard';
  technologies: string[];
  description: string;
}

// Mock data
const mockIssues: Issue[] = [
  {
    id: '1',
    title: 'CollabraGator',
    assignee: 'John Doe',
    difficulty: 'Easy',
    technologies: ['javascript', 'react'],
    description: 'Issue description Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
  },
  {
    id: '2',
    title: 'CollabraGator',
    assignee: 'John Doe',
    difficulty: 'Medium',
    technologies: ['javascript', 'react'],
    description: 'Issue description Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
  },
  {
    id: '3',
    title: 'CollabraGator',
    assignee: 'John Doe',
    difficulty: 'Hard',
    technologies: ['javascript', 'react'],
    description: 'Issue description Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
  },
  {
    id: '1',
    title: 'CollabraGator',
    assignee: 'John Doe',
    difficulty: 'Easy',
    technologies: ['javascript', 'react'],
    description: 'Issue description Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
  },
  {
    id: '2',
    title: 'CollabraGator',
    assignee: 'John Doe',
    difficulty: 'Medium',
    technologies: ['javascript', 'react'],
    description: 'Issue description Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
  },
  {
    id: '3',
    title: 'CollabraGator',
    assignee: 'John Doe',
    difficulty: 'Hard',
    technologies: ['javascript', 'react'],
    description: 'Issue description Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
  }
];

const DashboardPage: React.FC = () => {
  return (
    <main className="min-h-screen pt-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {mockIssues.map((issue) => (
            <IssueCard
              key={issue.id}
              title={issue.title}
              assignee={issue.assignee}
              difficulty={issue.difficulty}
              technologies={issue.technologies}
              description={issue.description}
            />
          ))}
        </div>
      </div>
    </main>
  );
};

export default DashboardPage;
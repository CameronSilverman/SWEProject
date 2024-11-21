import React from 'react';

interface IssueCardProps {
  title: string;
  assignee: string;
  difficulty: 'Easy' | 'Medium' | 'Hard';
  technologies?: string[];
  description: string;
}

const DifficultyBadge: React.FC<{ difficulty: IssueCardProps['difficulty'] }> = ({ difficulty }) => {
  const colors = {
    Easy: 'bg-green-200 text-green-800',
    Medium: 'bg-yellow-200 text-yellow-800',
    Hard: 'bg-red-200 text-red-800'
  };

  return (
    <span className={`px-2 py-1 rounded-full text-sm font-medium ${colors[difficulty]}`}>
      {difficulty}
    </span>
  );
};

const IssueCard: React.FC<IssueCardProps> = ({
  title,
  assignee,
  difficulty,
  technologies = [],
  description
}) => {
  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden border border-gray-200 h-56 transition-transform duration-200 ease-in-out hover:scale-[1.02] hover:shadow-lg">
      <div className="p-4 h-full flex flex-col">
        {/* Header */}
        <div className="flex justify-between items-center mb-3">
          <div className="text-lg font-semibold text-gray-900 truncate max-w-[60%]">{title}</div>
          <div className="flex items-center gap-2 shrink-0">
            <span className="w-8 h-8 bg-gray-200 rounded-full flex items-center justify-center">
              <svg
                className="w-5 h-5 text-gray-500"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path
                  fillRule="evenodd"
                  d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z"
                  clipRule="evenodd"
                />
              </svg>
            </span>
            <span className="text-sm text-gray-600">{assignee}</span>
          </div>
        </div>

        {/* Labels */}
        <div className="flex flex-wrap gap-2 mb-3">
          <DifficultyBadge difficulty={difficulty} />
          {technologies.map(tag => (
            <span key={tag} className="text-xs bg-gray-200 text-gray-700 px-2 py-1 rounded-full">
              {tag}
            </span>
          ))}
        </div>

        {/* Description */}
        <p className="text-gray-700 text-sm overflow-hidden line-clamp-5">
          {description}
        </p>
      </div>
    </div>
  );
};

export default IssueCard;
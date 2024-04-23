import React from 'react';

const TaskHistoryTimeline = ({ history }) => {
  return (
    <div className="max-w-xl mx-auto">
      <ul className="timeline">
        {history.map((entry, index) => (
          <li key={index} className="relative">
            <div className="w-3 h-3 bg-gray-200 rounded-full mt-2.5 -start-1 border border-white dark:border-gray-900 dark:bg-gray-700"></div>
            {index !== history.length - 1 && (
              <div className="w-1 h-0.5 bg-gray-200 top-3.5 -start-0.5 absolute"></div>
            )}
            <time className="mb-1 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">{entry.date}</time>
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white">{entry.title}</h3>
            <p className="mb-4 text-base font-normal text-gray-500 dark:text-gray-400">{entry.description}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TaskHistoryTimeline;

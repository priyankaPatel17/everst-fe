import React from 'react';
import TaskHistoryTimeline from './TaskHistoryTimeline';

const TaskList = ({ tasks }) => {
    return (
        <div className="max-w-xl mx-auto">
            {tasks.map((task, index) => (
                <div key={index} className="flex mb-8">
                    <div className="flex-grow">
                        <h3 className="text-lg font-semibold mb-2">{task.title}</h3>
                        <p className="font-normal text-gray-500">{task.description}</p>
                    </div>
                    <div className="w-1/2">
                        <TaskHistoryTimeline history={task.history} />
                    </div>
                </div>
            ))}
        </div>
    );
};

export default TaskList;

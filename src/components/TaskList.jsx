import React from 'react';
import TaskItem from './TaskItem';
import './TaskList.css';

const TaskList = ({ tasks, onEdit, onDelete, onComplete }) => {
    return (
        <div className="task-list">
            {tasks.map(task => (
                <TaskItem
                    key={task.id}
                    task={task}
                    onEdit={onEdit}
                    onDelete={onDelete}
                    onComplete={onComplete}
                />
            ))}
        </div>
    );
};

export default TaskList;

import React from 'react';
import './TaskItem.css';

const TaskItem = ({ task, onEdit, onDelete, onComplete }) => {
    return (
        <div className={`task-item ${task.completed ? 'completed' : ''}`}>
            <div>
                <h3>{task.name}</h3>
                <p>{task.description}</p>
            </div>
            <div className="task-actions">
                <button onClick={() => onEdit(task)}>Edit</button>
                <button onClick={() => onDelete(task
)}>Delete</button>
<button onClick={() => onComplete(task.id)}>
    {task.completed ? 'Undo' : 'Complete'}
</button>
</div>
</div>
);
};

export default TaskItem;

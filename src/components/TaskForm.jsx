import React, { useState, useEffect } from 'react';
import './TaskForm.css';

const TaskForm = ({ onSubmit, currentTask }) => {
    const [name, setName] = useState('');
    const [description, setDescription] = useState('');

    useEffect(() => {
        if (currentTask) {
            setName(currentTask.name);
            setDescription(currentTask.description);
        }
    }, [currentTask]);

    const handleSubmit = (e) => {
        e.preventDefault();
        if (name && description) {
            onSubmit({ name, description });
            setName('');
            setDescription('');
        } else {
            alert('Please fill out both fields.');
        }
    };

    return (
        <form onSubmit={handleSubmit} className="task-form">
            <input
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="Task Name"
            />
            <textarea
                value={description}
                onChange={(e) => setDescription(e.target.value)}
                placeholder="Task Description"
            />
            <button type="submit">Submit</button>
        </form>
    );
};

export default TaskForm;

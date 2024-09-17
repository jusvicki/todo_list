import React, { useState, useEffect } from 'react';
import TaskList from './components/TaskList';
import TaskForm from './components/TaskForm';
import './App.css';

const App = () => {
    const [tasks, setTasks] = useState([]);
    const [editingTask, setEditingTask] = useState(null);

    useEffect(() => {
        // Load tasks from localStorage
        const savedTasks = JSON.parse(localStorage.getItem('tasks')) || [];
        setTasks(savedTasks);
    }, []);

    useEffect(() => {
        // Save tasks to localStorage
        localStorage.setItem('tasks', JSON.stringify(tasks));
    }, [tasks]);

    const addTask = (task) => {
        setTasks([...tasks, { ...task, id: Date.now(), completed: false }]);
        setEditingTask(null);
    };

    const editTask = (task) => {
        setTasks(tasks.map(t => (t.id === task.id ? task : t)));
        setEditingTask(null);
    };

    const deleteTask = (task) => {
        if (window.confirm('Are you sure you want to delete this task?')) {
            setTasks(tasks.filter(t => t.id !== task.id));
        }
    };

    const completeTask = (taskId) => {
        setTasks(tasks.map(t => (t.id === taskId ? { ...t, completed: !t.completed } : t)));
    };

    return (
        <div className="app">
            <h1>To-Do List</h1>
            <TaskForm onSubmit={editingTask ? editTask : addTask} currentTask={editingTask} />
            <TaskList
                tasks={tasks}
                onEdit={(task) => setEditingTask(task)}
                onDelete={deleteTask}
                onComplete={completeTask}
            />
        </div>
    );
};

export default App;

import React, { useState } from 'react';

function TODOlist() {
    const [tasks, setTasks] = useState(["Eat", "Sleep", "Code", "Live"]);
    const [newTask, setNewTask] = useState("");

    function addTask() {
        if (newTask.trim() !== "") {
            setTasks(t => [...t, newTask]);
            setNewTask("");
        }
    }

    function deleteTask(index) {
        const updatedTasks = tasks.filter((_, i) => i !== index);
        setTasks(updatedTasks);
    }

    function handleInputChange(event) {
        setNewTask(event.target.value);
    }

    function moveTaskUp(index) {
        if (index > 0) {
            const updatedTasks = [...tasks];
            [updatedTasks[index], updatedTasks[index - 1]] = 
            [updatedTasks[index - 1], updatedTasks[index]];
            setTasks(updatedTasks);
        }
    }

    function moveTaskDown(index) {
        if (index < tasks.length - 1) {
            const updatedTasks = [...tasks];
            [updatedTasks[index], updatedTasks[index + 1]] = 
            [updatedTasks[index + 1], updatedTasks[index]];
            setTasks(updatedTasks);
        }
    }

    const styles = {
       

        container: {
            backgroundColor: '#333',
            color: '#fff',
            padding: '20px',
            borderRadius: '8px',
            width: '300px',
            margin: '0 auto',
            textAlign: 'center',
            fontFamily: 'Arial, sans-serif'
        },
        input: {
            padding: '10px',
            borderRadius: '4px',
            border: 'none',
            marginBottom: '10px',
            width: 'calc(100% - 22px)' // Adjusting for padding
        },
        button: {
            padding: '10px 15px',
            borderRadius: '4px',
            border: 'none',
            cursor: 'pointer',
            margin: '5px'
        },
        addButton: {
            backgroundColor: '#4CAF50',
            color: '#fff'
        },
        deleteButton: {
            backgroundColor: '#f44336',
            color: '#fff'
        },
        moveButton: {
            backgroundColor: '#008CBA',
            color: '#fff'
        },
        taskList: {
            listStyleType: 'none',
            padding: '0'
        },
        taskItem: {
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            padding: '10px',
            borderBottom: '1px solid #444'
        },
        taskText: {
            flexGrow: '1',
            textAlign: 'left'
        }
    };

    return (
        <div style={styles.container}>
            <h1>TO-DO LIST</h1>
            <input
                type="text"
                placeholder="Enter a task..."
                value={newTask}
                onChange={handleInputChange}
                style={styles.input}
            />
            <button
                className="add-btn"
                onClick={addTask}
                style={{ ...styles.button, ...styles.addButton }}>
                Add
            </button>
            <ol style={styles.taskList}>
                {tasks.map((task, index) =>
                    <li key={index} style={styles.taskItem}>
                        <span className="task" style={styles.taskText}>{task}</span>
                        <button
                            className="delete-btn"
                            onClick={() => deleteTask(index)}
                            style={{ ...styles.button, ...styles.deleteButton }}>
                            Delete
                        </button>
                        <button
                            className="move-up-btn"
                            onClick={() => moveTaskUp(index)}
                            style={{ ...styles.button, ...styles.moveButton }}>
                            👆
                        </button>
                        <button
                            className="move-down-btn"
                            onClick={() => moveTaskDown(index)}
                            style={{ ...styles.button, ...styles.moveButton }}>
                            👇
                        </button>
                    </li>
                )}
            </ol>
        </div>
    );
}

export default TODOlist;

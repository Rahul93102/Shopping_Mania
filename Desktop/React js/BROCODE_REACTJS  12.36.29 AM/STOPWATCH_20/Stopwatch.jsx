import React, { useState, useRef, useEffect } from 'react';

function Stopwatch() { 
    const [isRunning, setIsRunning] = useState(false);
    const [elapsedTime, setElapsedTime] = useState(0);
    const intervalIdRef = useRef(null);
    const startTimerRef = useRef(0);

    useEffect(() => { 
        if (isRunning) { 
            intervalIdRef.current = setInterval(() => { 
                setElapsedTime(Date.now() - startTimerRef.current);
            }, 10);
        }

        return () => { 
            clearInterval(intervalIdRef.current);
        };

    }, [isRunning]);

    function Start() { 
        setIsRunning(true);
        startTimerRef.current = Date.now() - elapsedTime;
    }

    function Stop() { 
        setIsRunning(false);
    }

    function Reset() { 
        setElapsedTime(0);
        setIsRunning(false);
    }

    function format() { 
        let hours = Math.floor(elapsedTime / (1000 * 60 * 60));
        let minutes = Math.floor((elapsedTime / (1000 * 60)) % 60);
        let seconds = Math.floor((elapsedTime / 1000) % 60);
        let milliseconds = Math.floor((elapsedTime % 1000) / 10); // to not get all four digits of milliseconds

        hours = String(hours).padStart(2, "0");
        minutes = String(minutes).padStart(2, "0");
        seconds = String(seconds).padStart(2, "0");
        milliseconds = String(milliseconds).padStart(2, "0");

        return `${minutes}:${seconds}:${milliseconds}`;
    }

    const styles = {
        stopwatch: {
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            fontFamily: 'Arial, sans-serif',
            margin: '20px'
        },
        display: {
            fontSize: '2em',
            marginBottom: '20px',
            padding: '10px',
            border: '2px solid #333',
            borderRadius: '5px',
            backgroundColor: '#f0f0f0'
        },
        controls: {
            display: 'flex',
            gap: '10px'
        },
        button: {
            padding: '10px 20px',
            fontSize: '1em',
            border: 'none',
            borderRadius: '5px',
            cursor: 'pointer',
            transition: 'background-color 0.3s'
        },
        startBtn: {
            backgroundColor: '#4caf50',
            color: 'white'
        },
        startBtnHover: {
            backgroundColor: '#45a049'
        },
        resetBtn: {
            backgroundColor: '#f44336',
            color: 'white'
        },
        resetBtnHover: {
            backgroundColor: '#e53935'
        },
        stopBtn: {
            backgroundColor: '#ff9800',
            color: 'white'
        },
        stopBtnHover: {
            backgroundColor: '#fb8c00'
        }
    };

    return (
        <div style={styles.stopwatch}>
            <div style={styles.display}>
                {format()}
            </div>
            <div style={styles.controls}>
                <button 
                    style={{ ...styles.button, ...styles.startBtn }} 
                    onMouseEnter={e => e.target.style.backgroundColor = styles.startBtnHover.backgroundColor}
                    onMouseLeave={e => e.target.style.backgroundColor = styles.startBtn.backgroundColor}
                    onClick={Start}
                >
                    Start
                </button>
                <button 
                    style={{ ...styles.button, ...styles.resetBtn }} 
                    onMouseEnter={e => e.target.style.backgroundColor = styles.resetBtnHover.backgroundColor}
                    onMouseLeave={e => e.target.style.backgroundColor = styles.resetBtn.backgroundColor}
                    onClick={Reset}
                >
                    Reset
                </button>
                <button 
                    style={{ ...styles.button, ...styles.stopBtn }} 
                    onMouseEnter={e => e.target.style.backgroundColor = styles.stopBtnHover.backgroundColor}
                    onMouseLeave={e => e.target.style.backgroundColor = styles.stopBtn.backgroundColor}
                    onClick={Stop}
                >
                    Stop
                </button>
            </div>
        </div>
    );
}

export default Stopwatch;

import React, { useState, useEffect } from 'react';
import background from '../assets/background.jpg';
function Clock() {
  const [time, setTime] = useState(new Date().toLocaleTimeString());

  useEffect(() => {
    const timer = setInterval(() => {
      setTime(new Date().toLocaleTimeString());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const styles = { 
    body: { 
      backgroundImage: `url(${background})`,
      backgroundPosition: 'center',
      backgroundRepeat: 'no-repeat',
      backgroundSize: 'cover',
      backgroundAttachment: 'fixed',
      margin: 0,
      display:'flex',
      justifyContent:'center',
      minHeight:'100vh',
      alignItem:'center'
    },
    clockContainer: { 
      backdropFilter: 'blur(5px)',
      width: '100vw',
      padding: '10px 0'
    },
    clock: { 
      color: 'white',
      fontSize: '6em',
      textAlign:'center',
      fontWeight: 'bold',
      fontFamily: 'monospace',
      textShadow: '3px 3px 5px black'
    }
  };

  return (
    <div style={styles.body}>
      <div style={styles.clockContainer}>
        <div style={styles.clock}>
          <span>{time}</span>
        </div>
      </div>
    </div>
  );
}


export default Clock;
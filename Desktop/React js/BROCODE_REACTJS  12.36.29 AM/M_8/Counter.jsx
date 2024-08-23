import React, { useState } from 'react';

function Counter() {
    const [count, setcount] = useState(0);

    const incrcount = () => {
        setcount(count + 1);
    }

    const decrcount = () => {
        setcount(count - 1);
    }

    const resetcount = () => {
        setcount(0);
    }

    return (
        <div style={{ textAlign: 'center', margin: '20px' }}>
            <p style={{ fontSize: '24px', fontWeight: 'bold', marginBottom: '10px' }}>{count}</p>
            <button style={{ marginRight: '10px', padding: '5px 10px', fontSize: '16px', backgroundColor: '#4CAF50', color: 'white', border: 'none', borderRadius: '5px', cursor: 'pointer' }} onClick={incrcount}>Increment</button>
            <button style={{ marginRight: '10px', padding: '5px 10px', fontSize: '16px', backgroundColor: '#f44336', color: 'white', border: 'none', borderRadius: '5px', cursor: 'pointer' }} onClick={resetcount}>Reset</button>
            <button style={{ padding: '5px 10px', fontSize: '16px', backgroundColor: '#008CBA', color: 'white', border: 'none', borderRadius: '5px', cursor: 'pointer' }} onClick={decrcount}>Decrease</button>
        </div>
    );
}

export default Counter;

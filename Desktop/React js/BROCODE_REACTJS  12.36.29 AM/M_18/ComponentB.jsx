import React from 'react';
import ComponentC from './ComponentC.jsx';

function ComponentB() {
    const style = {
        box: {
          border: '1px solid',
        }
    };

    return (
        <div className="box" style={style.box}>
            <h1>Component B</h1>
            <ComponentC />
        </div>
    );
}

export default ComponentB;

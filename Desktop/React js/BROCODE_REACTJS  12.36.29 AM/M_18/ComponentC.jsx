import React, { useContext } from 'react';
import { UserContext } from './ComponentA';
import ComponentD from './ComponentD.jsx';

function ComponentC() {
    const user = useContext(UserContext);
    const style = {
        box: {
          border: '2px solid red',
          backgroundColor: 'lightcoral'
        }
    };

    return (
        <div className="box" style={style.box}>
            <h1>Component C</h1>
            <h2>{`Hello again ${user}`}</h2>
            <ComponentD />
        </div>
    );
}

export default ComponentC;

import React, { useContext } from 'react';
import { UserContext } from './ComponentA';

function ComponentD() {
    const user = useContext(UserContext);
    const style = {
        box: {
          border: '2px solid purple',
          backgroundColor: 'plum'
        }
    };

    return (
        <div className="box" style={style.box}>
            <h1>Component D</h1>
            <h2>{`Bye ${user}`}</h2>
        </div>
    );
}

export default ComponentD;

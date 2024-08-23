import { createContext } from 'preact';
import { useState } from 'react';
import ComponentB from './ComponentB.jsx';

export const UserContext = createContext();

function ComponentA() {
    const [user, setUser] = useState("BroCode");
    
    const style = {
        box: {
          border: '1px solid',
        }
    };

    return (
        <div className="box" style={style.box}>
            <h1>Component A</h1>
            <h2>{`Hello ${user}`}</h2>
            <UserContext.Provider value={user}>
                <ComponentB />
            </UserContext.Provider>
        </div>
    );
}

export default ComponentA;

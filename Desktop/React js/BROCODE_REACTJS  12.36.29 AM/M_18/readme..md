useContext() ==> React Node that allows you to share values between multiple levels of components
without passing props


PROVIDER COMPONENTS
1) import {createContext} from 'react'
2) export const MyContext = createContext();
3) <MyContext.Provider value={value}>
    <Child>
    </MyContext.Provider>

CONSUMER PROVIDER
1) import React,{useContext} from 'react'
2) import {MyContext} from ./ComponentA
const value = useContext(MyContext);

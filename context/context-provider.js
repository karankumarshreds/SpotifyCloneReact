import { createContext, useReducer } from 'react';

export const DataContext = createContext();

const DataContextProvider = ({ initialState, reducer, children }) => {

    return (
        <DataContext.Provider value={useReducer(reducer, initialState)}>
            {children}
        </DataContext.Provider>
    )

};

export default DataContextProvider;




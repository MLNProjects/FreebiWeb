//ref: https://medium.com/simply/state-management-with-react-hooks-and-context-api-at-10-lines-of-code-baf6be8302c

import React, { createContext, useReducer } from 'react';

export const GlobalState = createContext();
export const GlobalStateProvider = ({ reducer, initialState, children }) => (
	<GlobalState.Provider value={useReducer(reducer, initialState)}>{children}</GlobalState.Provider>
);

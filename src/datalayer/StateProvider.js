import React, { createContext, useContext, useReducer } from "react";

// Preparing the data layer
export const StateContext = createContext();

//initial state is what data layer looks like when the app is loaded
//reducer listens to changes in data layer
export const StateProvider = ({ reducer, initialState, children }) => (
  <StateContext.Provider value={useReducer(reducer, initialState)}>
    {children} {/*children is the app*/}
  </StateContext.Provider>
);

// Hook which allows you to pull information from the daya layer
export const useStateProviderValue = () => useContext(StateContext);

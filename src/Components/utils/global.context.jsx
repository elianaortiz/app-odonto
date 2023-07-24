import React, { createContext, useReducer, useEffect, useMemo } from "react";

const initialState = {theme: "light", users: []}

const reducerActions = {
  SET_THEME: "SET_THEME",
  SET_DATA: "SET_DATA",
};

export const contextReducer = (state, action) => {
  switch (action.type) {
    case reducerActions.SET_THEME:
      return {...state, theme: action.payload};

    case reducerActions.SET_DATA:
      return{...state, users: action.payload};

    default:
      return state;
  }
};

export const ContextGlobal = createContext();

export const ContextProvider = ({children}) => {
  const [state, dispatch] = useReducer(contextReducer, initialState);

  const toggleTheme = () => {
      dispatch({
        type: reducerActions.SET_THEME, 
        payload: state.theme === 'light' ? 'dark' : 'light',});
  };

  const getUsersData = async () => {
    try{
      const response = await fetch(`https://jsonplaceholder.typicode.com/users`);
      const usersData = await response.json();
      dispatch({
        type: reducerActions.SET_DATA, 
        payload: usersData});
    } catch (error) {
      console.error('Ocurrió un error al obtener los usuarios.', error);
    }
  };

  useEffect(() => {
    getUsersData();
  }, []);

  const value = useMemo(() => {
    return {
      theme: state.theme,
      toggleTheme,
      users: state.users,
      getUsersData,
    };
  }, [state]);

  return (
    <ContextGlobal.Provider value={value}>
        {children}
    </ContextGlobal.Provider>
  )
}
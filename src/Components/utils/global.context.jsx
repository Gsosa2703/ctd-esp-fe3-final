import { createContext, useContext, useMemo, useReducer } from "react";

const ContextGlobal = createContext();

const themes = {
  dark: {
    theme: false,
    bgColor: "black",
    color: "white",
  },
  light: {
    theme: true,
    bgColor: "white",
    color: "black",
  },
};

const initialState = { theme: themes.light, data: [] };

const globalStateReducer = (state, action) => {
  switch (action.type) {
    case "GET_USERS":
      return { ...state, data: action.payload };
    case "SWITCH_DARK":
      return { ...state, theme: themes.dark };
    case "SWITCH_LIGHT":
      return { ...state, theme: themes.light };
    default:
      throw new Error();
  }
};

export const ContextProvider = ({ children }) => {
  const [globalState, globalStateDispatch] = useReducer(
    globalStateReducer,
    initialState
  );

  const url = "https://jsonplaceholder.typicode.com/users";

  useMemo(() => {
    fetch(url)
      .then((res) => res.json())
      .then((data) =>
        globalStateDispatch({
          type: "GET_USERS",
          payload: data,
        })
      );
  }, []);

  return (
    <ContextGlobal.Provider
      value={{
        globalState,
        globalStateDispatch,
      }}
    >
      {children}
    </ContextGlobal.Provider>
  );
};

export const useGlobalContext = () => useContext(ContextGlobal);

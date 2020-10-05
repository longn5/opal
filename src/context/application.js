import React, { createContext, useReducer } from "react";

export const ApplicationContext = createContext();

const reducer = (state, action) => {
  switch (action.type) {
    case "save-menu":
      return {
        ...state,
        menu: {
          items: action.items,
        },
      };
    case "add-to-cart":
      return{
        ...state,
        cart: {
          items: action.items
        }
      }
    default:
      throw new Error(`Unhandled action type: $#{action.type}`);
  }
};

const initState = {
  menu: {
    items: [],
  },
  cart: {
    items: []
  }
};

export const ApplicationProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initState);

  return (
    <ApplicationContext.Provider value={[state, dispatch]}>
      {children}
    </ApplicationContext.Provider>
  );
};

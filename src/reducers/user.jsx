import React, { createContext, useReducer  } from 'react';

const initialState = {
  email: 'budi@gmail.com',
  name: 'budi',
};

const StateUserContext = createContext(initialState);
const DispatchUserContext = createContext(() => { });

const reducer = (state, action) => {
  switch (action.type) {
    case 'set_email': {
      return {
        ...state,
        email: action.payload
      };
    }
    case 'set_name': {
      return {
        ...state,
        name: action.payload,
      }
    }
    case 'remove_email': {
      return {
        ...state,
        email: '',
      };
    }
    default:
      throw new Error('No action type was given');
  }
};

const UserProvider = (props) => {
  const [state, dispatch] = useReducer(reducer, initialState);
  return (
    <StateUserContext.Provider value={state}>
      <DispatchUserContext.Provider value={dispatch}>
        {props.children}
      </DispatchUserContext.Provider>
    </StateUserContext.Provider>
  );
};

export {
  UserProvider, // Wrapper untuk component yang akan memakai reducer tersebut.
  StateUserContext, // Getter Nilai dari state nya
  DispatchUserContext, // Setter dari state nya
};


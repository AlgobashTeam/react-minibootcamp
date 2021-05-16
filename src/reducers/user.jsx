import React, { createContext, useReducer, FunctionComponent, ReactNode } from 'react';

const initialState = {
  email: '',
};

const StateNotificationContext = createContext(initialState);
const DispatchNotificationContext = createContext(() => { });

const reducer = (state, action) => {
  switch (action.type) {
    case 'set_email': {
      return {
        ...state,
        email: action.payload
      };
    }
    case 'remove_email': {
      return {
        ...state,
        token: '',
      };
    }
    default:
      throw new Error('No action type was given');
  }
};

const NotificationProvider = (props) => {
  const [state, dispatch] = useReducer(reducer, initialState);
  return (
    <StateNotificationContext.Provider value={state}>
      <DispatchNotificationContext.Provider value={dispatch}>
        {props.children}
      </DispatchNotificationContext.Provider>
    </StateNotificationContext.Provider>
  );
};

export {
  NotificationProvider,
  StateNotificationContext,
  DispatchNotificationContext
};

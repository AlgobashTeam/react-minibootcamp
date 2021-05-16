import { useContext } from 'react';

import { StateUserContext } from '../reducers/user';

export default function AddUserInfo() {
  const stateUser = useContext(StateUserContext);

  return (
    <p>You will be creating new user for: {stateUser.email}</p>
  );  
}

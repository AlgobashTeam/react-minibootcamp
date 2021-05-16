import { useContext, useEffect } from 'react';

import Authenticated from '../layouts/Authenticated';
import { StateUserContext, DispatchUserContext } from '../reducers/user';

export default function AddUser() {
  const stateUser = useContext(StateUserContext);
  const dispatchUser = useContext(DispatchUserContext);

  return (
    <Authenticated>
      <h3>Add New User</h3>
      <p>Name</p>
      <input
        value={stateUser.name}
        onChange={(e) => {
          const { value } = e.target;
          dispatchUser({
            type: 'set_name',
            payload: value,
          });
        }}
      />
      <br /><br />
      <p>Email</p>
      <input
        value={stateUser.email}
        onChange={(e) => {
          const { value } = e.target;
          dispatchUser({
            type: 'set_email',
            payload: value,
          });
        }}
      />
      <br /><br />
      <button>
        Add User
      </button>
    </Authenticated>
  );
}

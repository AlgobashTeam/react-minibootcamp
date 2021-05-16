import { useEffect, useState } from 'react';
import { Redirect, useHistory } from 'react-router-dom';
import axios from 'axios';

export default function Authenticated(props) {
  const [redirectPath, setRedirectPath] = useState('');
  const history = useHistory();

  async function checkAuthentication() {
    const res = await axios.post('https://jsonplaceholder.typicode.com/posts', {
      title: 'email@gmail.com',
      body: 'Password123123',
    });

    if (res.status !== 200 && res.status !== 201) {
      setRedirectPath('/login');
      history.push('/login');
      console.log('diset ke login');
    }
    // console.log(res.data);
    // console.log(res);
    return res.data;
  }

  // DidMount check authentication.
  // If no authenticated, redirect to Login
  useEffect(() => {
    checkAuthentication()
  });

  if (redirectPath) {
    return (
      <Redirect
        to={{
          pathname: "/login",
          state: { from: "/" }
        }}
      />
    );
  }

  return (
    <>
      {props.children}
    </>
  );
}

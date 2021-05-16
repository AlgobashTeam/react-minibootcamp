import { useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import axios from 'axios';

import AddUserInfo from '../components/AddUserInfo';

export default function Authenticated (props) {
  //const [redirectPath, setRedirectPath] = useState('');
  const history = useHistory();

  async function checkAuthentication () {
    const res = await axios.post('https://jsonplaceholder.typicode.com/posts', {
      title: 'email@gmail.com',
      body: 'Password123123',
    });

    if (!res) {
      //setRedirectPath('/login');
      history.push('/login');
    }
    return res.data;
  }

  // DidMount check authentication.
  // If no authenticated, redirect to Login
  useEffect( () => {
    checkAuthentication()
  }, []);

  //if (redirectPath) {
    //return (
      //<Redirect
        //to={{
          //pathname: "/login",
          //state: { from: "/" }
        //}}
      ///>
    //);
  //}

  return (
    <>
      <AddUserInfo/>
      {props.children}
    </>
  );
}

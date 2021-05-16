import axios from 'axios';
import { useState, useContext, useEffect } from 'react';

import { StateUserContext, DispatchUserContext } from '../reducers/user';

export default function CreateBlog() {

  const stateUser = useContext(StateUserContext);
  const dispatchUser = useContext(DispatchUserContext);

  useEffect(() => {
    console.log(stateUser);
  }, [stateUser]);

  const [title, setTitle] = useState('');
  const [body, setBody] = useState('');
  const [status, setStatus] = useState({
    loading: false,
    success: false,
  });

  // Sebelum ambil data, set status menjadi loading sehingga kita bisa memunculkan loading component
  // Jika data berhasil didapat maka set success menjadi true, dan juga kebalikannya.
  async function sendDataToServer(title, body) {
    setStatus({
      ...status,
      loading: true,
    })
    const res = await axios.post('https://jsonplaceholder.typicode.com/posts', {
      title: title,
      body: body,
    });
    if (!res) {
      setStatus({
        ...status,
        loading: false,
        success: false,
      });
      return;
    }
    setStatus({
      ...status,
      loading: false,
      success: true,
    });
  }

  // Sebelum form disubmit, cancel event form dan isi event dengan fungsi yang kita buat.
  function onSubmitForm(event) {
    event.preventDefault();
    sendDataToServer(title, body);
  }
  

  // Loading component ketika status menjadi loading
  if (status.loading) {
    return <p>Loading</p>;
  }

  return (
    <>
      <form onSubmit={onSubmitForm}>
        <h3>Create Blog</h3>
        <p>Title</p>
        <input
          placeholder="title here"
          value={title}
          onChange={(event) => setTitle(event.target.value)}
        />
        <p>Body</p>
        <input
          placeholder="body here"
          value={body}
          onChange={(event) => setBody(event.target.value)}
        />
        <br />
        <br />
        <button type="submit">
          Save
        </button>
        </form>
    </>
  );
}

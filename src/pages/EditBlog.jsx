import Authenticated from '../layouts/Authenticated';
import axios from 'axios';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router';

export default function EditBlog() {

  const [title, setTitle] = useState('');
  const [body, setBody] = useState('');

  const { id } = useParams();

  const [status, setStatus] = useState({
    loading: false,
    success: false,
  });

  // buat tempat penyimpanan single data
  const [blogData, setBlogData] = useState({});

  // Ambil data dan simpan
  async function fetchData(id) {
    const res = await axios.get('https://jsonplaceholder.typicode.com/posts/' + id);

    // Simpan di tempat yang disediakan
    setBlogData(res.data);
  }

  // Sebelum ambil data, set status menjadi loading sehingga kita bisa memunculkan loading component
  // Jika data berhasil didapat maka set success menjadi true, dan juga kebalikannya.
  async function updateDataToServer(title, body, id) {
    setStatus({
      ...status,
      loading: true,
    })

    // console.log(status);

    const res = await axios.put('https://jsonplaceholder.typicode.com/posts/' + id, {
      title: title,
      body: body,
      id: id,
    });

    console.log(res.status);

    if (res.status !== 200) {
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
    updateDataToServer(title, body, id);
  }

  // Ketika ada perubahan pada id maka ambil data dan simpan
  useEffect(() => {
    if (id) {
      fetchData(id);
    }
  }, [id]);

  // Loading component ketika status menjadi loading
  if (status.loading) {
    return <p>Loading</p>;
  }

  let statusEdit = status.success ? 'berhasil' : '';

  console.log('status-success: ' + status.success);


  return (
    <>
      <Authenticated>


        {/* Render single data*/}
        <p>Edit Data From: Id {id}</p>
        <h2>Title: </h2>
        <p>{blogData.title}</p>
        <h2>Body: </h2>
        <p>{blogData.body}</p>

        {/* <p>PUT url:https://jsonplaceholder.typicode.com/posts/1</p>
        <p>Edit Ya</p> */}

        <p>To</p>


        <form onSubmit={onSubmitForm}>
          <h3>Edit Blog</h3>
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

          <br />
          <button type="submit">
            Save
        </button>
          <br /><br />
          <p>Status edit: {statusEdit}</p>
        </form>

      </Authenticated>
    </>
  );
}

import { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';

import Authenticated from '../layouts/Authenticated';

export default function EditBlog() {
  const { id } = useParams();
  
  const [title, setTitle] = useState('');
  const [body, setBody] = useState('');

  // buat tempat penyimpanan single data
  const [blogData, setBlogData] = useState({});

  // Ambil data dan simpan
  async function fetchData (id) {
    const res = await axios.get('https://jsonplaceholder.typicode.com/posts/' + id);
    console.log(res.data)
    // Simpan di tempat yang disediakan
    setBlogData(res.data);
  }

  async function onSubmitForm (e) {
    e.preventDefault();
    const res = await axios.put('https://jsonplaceholder.typicode.com/posts/' + id, {
      title,
      body,
    });
    console.log(res.data)
  }

  useEffect(() => {
    if (id) {
      fetchData(id);   
    }
  }, [id]);

  // Ketika terjadi perubahan pada blogData maka set nilai baru untuk body dan title
  useEffect(() => {
    if (blogData) {
      if (blogData.title) {
        setTitle(blogData.title);
      }
      if (blogData.body) {
        setBody(blogData.body)
      }
    }
  }, [blogData]);

  return (
    <Authenticated>
      <form onSubmit={onSubmitForm}>
        <p>PUT url:https://jsonplaceholder.typicode.com/posts/1</p>
        <p>title</p>
        <textarea
          rows={10}
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <br />
        <p>body</p>
        <textarea
          rows={10}
          value={body}
          onChange={(e) => setBody(e.target.value)}
        />
        <br />
        <button type="submit">
          Edit
        </button>
      </form>
    </Authenticated>
  );  
}

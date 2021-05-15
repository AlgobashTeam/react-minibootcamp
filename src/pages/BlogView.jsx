import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import axios from 'axios';

import Global from '../layouts/Global';

export default function BlogView () {
  // Ambil dynamic router/ params
  const { id } = useParams();

  // buat tempat penyimpanan single data
  const [blogData, setBlogData] = useState({});

  // Ambil data dan simpan
  async function fetchData (id) {
    const res = await axios.get('https://jsonplaceholder.typicode.com/posts/' + id);

    // Simpan di tempat yang disediakan
    setBlogData(res.data);
  }

  // Ketika ada perubahan pada id maka ambil data dan simpan
  useEffect(() => {
    if (id) {
      fetchData(id);
    }
  }, [id]);  

  return (
    <Global>
      {/* Render single data*/}
      <p>This is Blog View for id: {id}</p>
      <h3>{blogData.title}</h3>
      <h4>{blogData.body}</h4>
    </Global>
  );
}

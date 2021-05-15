import axios from 'axios';
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

export default function BlogList() {
  // Tempat untuk menyimpan data yang akan kita ambil.
  const [blogList, setBlogList] = useState([]);

  // Aksi untuk mendapatkan data tersebut
  async function fetchData () {
    const res = await axios.get('https://jsonplaceholder.typicode.com/posts');

    // Simpan data pada tempat yang sudah disediakan
    setBlogList(res.data);
  }

  // Saat halaman diload pertama kali ambil data dan simpan pada tempatnya
  useEffect(() => {
    fetchData();
  }, []);

  return (
    <>
      <h3>BlogList</h3>

      {/* Render data sesuai dengan format*/}
      {blogList.map((item) => {
        return (
          <>
            <Link to={"/blog/" + item.id} >{item.title}</Link>
            <Link to={"/blog/edit/" + item.id} > Edit</Link>
            <br />
          </>
        );
      })}
    </>
  );
}

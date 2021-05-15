import { Link } from 'react-router-dom';

import Authenticated from '../layouts/Authenticated';

export default function Home () {
  return (
    <Authenticated>
      <p>This is home</p>

      <Link to="/login">Login Benar</Link>
      <br />
      <a href="/login">Login Salah</a>
      <br />
      <a href="/blog">Blog</a>
  </Authenticated>
);
}

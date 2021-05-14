import { useEffect, useState } from 'react';
import axios from 'axios';

function Lifecycle() {
  const [number, setNumber] = useState('2');
  const [result, setResult] = useState({});
  
  async function fetchData(id) {
    const fetchResult = await axios.get('https://jsonplaceholder.typicode.com/posts/' + id);
    setResult(fetchResult.data);
  }

  // DidMount
  // Function yang akan tereksekusi ketika Component dirender. Biasanya dipakai untuk mengecek
  // authentikasi atau load data mula-mula;
  // Ditandai dengan adanya empty array pada parameter kedua useEffect.
  useEffect(() => {
    console.log('mounted');
  }, []);

  // WillUnmount
  // Function yang akan dieksekusi ketika komponen dihapus atau dibuang.
  // Ditandai dengan return function.
  useEffect(() => {
    return () => {
      console.log('will unmount')
    };
  }, []);

  // DidChange
  // Function yang akan dieksekusi ketika nilai dari variable yang dipantau berubah.
  // Ditandai dengan adanya variable yang dipantau yang dimasukkan dalam array.
  useEffect(() => {
    if (number) {
      fetchData(number);
    }
  }, [number]);

  // Change the id on input.
  function onChangeID (e) {
    setNumber(e.target.value);
  }

  // Render
  // Function yang akan menunjukkan bentuk/ html dari suatu komponen.
  return (
    <>
      <h3>Lifecycle</h3>
      <input onChange={onChangeID} value={number} />
      <p>{result.title}</p>
    </>
  );
}

export default Lifecycle;


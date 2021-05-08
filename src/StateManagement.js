import { useState } from 'react';

function StateManagement(props) {
  const { initialValue } = props;
  
  const [numberOfClick, setNumberOfClick] = useState(initialValue);
  
  // Return hanya berisikan render (tampilan UI)

  // Ambil props yang bernama initialValue
  // Inial value bertipe number
  // Akan ada 3 button
  // Button pertama ketika diclick akan membagi dengan angka 5, angka tersebut
  // Button kedua akan membagi 3 angka tersebut
  // Button ketiga akan mereset kembali sesuai dengan props
  return (
    <>
      <p>Anda sudah mengclick {numberOfClick}</p> 
      <button
        onClick={() => setNumberOfClick(numberOfClick + 1)}
      >
        Click
      </button>
      <button
        onClick={() => setNumberOfClick(0)}
      >
        Reset
      </button>
    </>
  );
}

StateManagement.defaultProps = {
  initialValue: 2000,
}

export default StateManagement;

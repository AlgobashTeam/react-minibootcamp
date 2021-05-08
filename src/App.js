import './App.css';
import KTP from './KTP';
import StateManagement from './StateManagement';

function App() {
  return (
    <div className="App">
      <KTP
        namaDepan="Budi"
        namaBelakang="H"
        tahunKelahiran={1990}
      />
      <KTP
        namaDepan="Handoko"
        namaBelakang="Halim"
        tahunKelahiran={1970}
        alamat="Semarang"
      />
      <StateManagement
        initialValue=""
      />
    </div>
  );
}

export default App;

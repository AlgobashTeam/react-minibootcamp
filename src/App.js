import './App.css';
import KTP from './KTP';
import StateManagement from './StateManagement';
import ID from './ID';

function App() {
  return (
    <div className="App">
      <ID
        fullName = "Agung Handoko"
        gender = "male"
        birthday = {1998}
        address = {
          {
            street: 'Jl. Penuh Makna',
            city: 'Malang',
            province: 'East Java',
          }
        }
      />
      <ID
        fullName = "Dinda Mareta"
        gender = "female"
        birthday = {2004}
        address = {
          {
            street: 'Jl. Hati',
            city: 'Blitar',
            province: '',
          }
        }
      />
      <ID
        fullName = "Anak Agung Istri Dinda Pradnya Dewi"
        gender = "female"
        birthday = {1998}
      />
    </div>
  );
}

export default App;

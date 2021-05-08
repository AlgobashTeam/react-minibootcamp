import { useState } from 'react';

function ID(props) {
  let { fullName, gender, birthday, address } = props;
  const namaPanggilan = (gender === 'male' ? 'Pak' : 'Bu') + " " + fullName.split(" ").pop();
  const ageBirthday = [(2021-birthday).toString() + " tahun", birthday] // list of age and birthday
  const [toggleAgeBirthday, setToggleAgeBirthday] = useState(0); // age index will be the initial value

  var x;
  for (x in address){
    if (address[x] == ''){
      address = null;
      break;
    }
  }
  /**
   * Render full name dalam <p>
   * Render nama panggilan, menggunakan gender + nama belakang contoh: Sulam Hari + 'male' => Pak Hari
   * Toggle Birthday/Age
   * Jika address null: <p>Not Available</p>
   * Jika salah satu bagian dari address null atau empty maka print <p>Not Available</p>
   *
   * <p>Nama: Roni Bagus</p>
   * <p>Panggilan: Pak Bagus</p>
   * <p>{age/birthday}</p>
   * <button onClick={toggleAntaraUmurDanTanggal}/>
   * <p>Alamat: </p>
   * <p>Jalan: <p>
   * <p>Kota: <p>
   * <p>Provinsi: <p>
   * Jika alamat lengkap tulis notavailable
   **/

  return (
    <>
      <p>Nama: {fullName}</p>
      <p>Panggilan: {namaPanggilan}</p>
      <p>{ageBirthday[toggleAgeBirthday]}</p>
      <button onClick={() => (toggleAgeBirthday === 0 ? setToggleAgeBirthday(1) : setToggleAgeBirthday(0))}>
      Toggle Age/Birthday
      </button>
      <p>Alamat: {address !== null ? '' : 'Not Available'}</p>
      <p>Jalan: {address !== null ? address['street'] : ''}</p>
      <p>Kota: {address !== null ? address['city'] : ''}</p>
      <p>Provinsi: {address !== null ? address['province'] : ''}</p>
      <hr/>
    </>
  )
}

ID.defaultProps = {
  fullName: '',
  gender: '',
  birthday: new Date(),
  address: {
    street: '',
    city: '',
    province: '',
  },
}

export default ID;

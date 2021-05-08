function ID(props) {
  const { fullName, gender, birthday, address } = props;

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
   * /

  return (
    <>
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

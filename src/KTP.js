// Mempunyai
// Nama Depan
// Nama Belakang
// Tahun Kelahiran
// Alamat
// Tapi yang dirender adalah
// <p> Nama Depan
// <p> Nama Belakang
// <p> Umur 2021 - tahun kelahira
// <p> Tapi jika nanti value nya kosong saat alamat
// maka diberikan "Tidak Berdomisi"
// 9.45
// Input pertama selalu props
function KTP(props) {
  const { namaDepan, namaBelakang, tahunKelahiran, alamat } = props;

  return (
    <>
      <p>{namaDepan}</p>
      <p>{namaBelakang}</p>
      <p>{2021 - tahunKelahiran}</p>
      <p>{alamat}</p>
    </>
  );
}

// Kurang menghargai defaultProps
KTP.defaultProps = {
  namaDepan: '',
  namaBelakang: '',
  tahunKelahiran: 0,
  alamat: 'Tidak Berdomisi',
};

export default KTP;

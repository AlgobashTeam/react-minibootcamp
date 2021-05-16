# Prequisites:
* Learn basic javascript

# Steps:

## Props and States

### What is React

### What is React Component and What is state/reactive programming?
React component adalah suatu fungsi(atau kelas) javascript yang ditulis menggunakan Virtual DOM.
Virtual DOM sendiri adalah tiruan dari HTML yang akan diubah menjadi HTML oleh React.

Reactive programming adalah kemudahan untuk mengubah User Interface dengan cara mengubah
state yang mengacu pada UI komponen tersebut.

React Component Terdiri dari 2 tipe:
1. Bawaan
  Memiliki cara penulisan yang sama persis dengan HTML, contoh <p>Ini adalah contohnya</p>
2. Buatan
  Ditandai dengan Huruf Besar, merupakan buatan source sendiri ataupun didownload dari NPM.
  Contoh <Router/>
3. Fragment
  Ditandai dengan lambang <></> tidak akan dirender menjadi apapun, hanyalah berupa wrapper untuk
  component lainnya.

### React Property and HTML Tags

Props setiap Component harus diberikan defaultValuenya sehingga:
* Menghindari Error
* Memudahkan developer lain untuk membaca custom component yang saya buat

### React State
React State terdiri dari 2 hal
1. Getter: untuk mendapatkan nilai dari state tersebut.
2. Setter: Untuk mengubah nilai dari state tersebut

Contoh:
```js
const [getter, setter] = useState('ini adalah default value dari state');
// Untuk mengubah nilai getter kita tinggal memanggil setter.
setter('ini adalah nilai terbaru');

// maka nilai getter akan berubah menjadi 'ini adalah nilai terbaru'
```

## Render +  Fetch and event + Form (Lifecycle)
React lifecycle pada hooks akan mengikuti runutan seperti ini
1. Panggil fungsi Component
2. Jalankan render (component yang berada di dalam return)
3. Jalankan useEffect (didmount dan didChange)
4. Jalankan return function dari useEffect (willUnmount) jika komponen akan dihapus


## Routing and Lifecycle for Authentication
## Global State & Custom Hooks
Global State -> State yang dapat diakses oleh 2 komponen sekaligus
Global State vs State:
1. State cuma bisa diakses oleh 1 komponen, global state banyak
2. State akan selalu lebih performing dibandingkan global state
3. Membutuhkan custom hook untuk melakukan global state
4. State hanya punya 1 setter tetapi global state punya beberapa setter
Global state juga disebut dengan reducer

## Custom Hooks & Testing



Imperative vs Declarative

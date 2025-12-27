//Wadah utama semua komponen React,Mengatur tampilan utama,Memanggil halaman / komponen lain

import Siswa from "./pages/Siswa";

function App() {
  return (
    <div className="container mt-4">
      <h3 className="mb-4">CRUD Data Siswa</h3>
      <Siswa />
    </div>
  );
}

export default App;
import axios from "axios";
//Mengambil library Axios untuk menghubungkan frontend dengan backend.
const api = axios.create({
//Membuat koneksi API khusus agar lebih rapi dan terpusat.
  baseURL: "http://localhost:5000"
});
//Menentukan alamat server backend.
export default api;

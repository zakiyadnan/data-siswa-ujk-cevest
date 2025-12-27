//Menjalankan Express, Mengatur middleware,Menghubungkan routes,Menentukan port server

import express from "express";
// Mengimpor modul Express untuk membuat aplikasi server.
import cors from "cors";
// Mengimpor modul CORS untuk mengizinkan permintaan lintas domain.
import siswaRoutes from "./routes/siswaRoutes.js";
// Mengimpor rute siswa yang berisi endpoint terkait siswa.
const app = express();
// Membuat instance aplikasi Express.
app.use(cors());
// Menggunakan middleware CORS untuk mengizinkan permintaan lintas domain.
app.use(express.json());
// Menggunakan middleware untuk mengurai permintaan dengan format JSON.
app.use("/", siswaRoutes);
// Menggunakan rute siswa untuk menangani permintaan ke root path.
app.listen(5000, () => {
  console.log("🚀 Server berjalan di http://localhost:5000");
});
// Menjalankan server pada port 5000 dan menampilkan pesan ketika server berjalan.


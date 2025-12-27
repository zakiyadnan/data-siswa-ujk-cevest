//Menentukan URL API dan menghubungkannya ke controller

import express from "express";
// Mengimpor modul Express untuk membuat router.
import siswaController from "../controllers/siswaController.js";
// Mengimpor controller siswa yang berisi logika untuk menangani permintaan terkait siswa.
const router = express.Router();
// Membuat instance router dari Express.
router.get("/siswa", siswaController.getSiswa);
// Mendefinisikan rute GET untuk mengambil semua data siswa
router.post("/siswa", siswaController.addSiswa);
// Mendefinisikan rute POST untuk menambahkan data siswa baru
router.put("/siswa/:kode_siswa", siswaController.updateSiswa);
// Mendefinisikan rute PUT untuk mengupdate data siswa berdasarkan kode_siswa
router.delete("/siswa/:kode_siswa", siswaController.deleteSiswa);
// Mendefinisikan rute DELETE untuk menghapus data siswa berdasarkan kode_siswa
export default router;

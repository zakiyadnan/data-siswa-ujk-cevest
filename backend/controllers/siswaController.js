//Query database (SELECT, INSERT, UPDATE, DELETE),Logika CRUD,Validasi sederhana,Response JSON

import db from "../config/db.js";
// agar terhubung ke database

const siswaController = {
  //menampilkan semua data siswa
  getSiswa: (req, res) => {
  // fungsi untuk mengambil data siswa dari database
    db.query("SELECT * FROM siswa", (err, result) => {
  // menjalankan query SQL untuk mengambil semua data dari tabel siswa
      if (err) return res.status(500).json(err);
    // jika terjadi error, mengirimkan respons dengan status 500 dan pesan error
      res.json(result);
      // jika berhasil, mengirimkan data siswa dalam format JSON
    });
  },

  addSiswa: (req, res) => {
  //menambahkan data siswa baru ke database
    const data = req.body;
  //mengambil data siswa dari body permintaan
    const sql = "INSERT INTO siswa SET ?";
  //menyiapkan query SQL untuk menyisipkan data baru ke tabel siswa
    db.query(sql, data, (err, result) => {
    //menjalankan query SQL dengan data yang diberikan
      if (err) return res.status(500).json(err);
      //jika terjadi error, mengirimkan respons dengan status 500 dan pesan error
      res.json({ message: "Data siswa berhasil ditambahkan" });
      //jika berhasil, mengirimkan pesan sukses
    });
  },

  updateSiswa: (req, res) => {
  //mengupdate data siswa yang sudah ada di database
    const { kode_siswa } = req.params;
  //mengambil kode_siswa dari parameter URL
    const data = req.body;
  //mengambil data siswa yang akan diupdate dari body permintaan
    const sql = "UPDATE siswa SET ? WHERE kode_siswa = ?";
  //menyiapkan query SQL untuk mengupdate data siswa berdasarkan kode_siswa
    db.query(sql, [data, kode_siswa], (err, result) => {
  //menjalankan query SQL dengan data yang diberikan dan kode_siswa
      if (err) return res.status(500).json(err);
  //jika terjadi error, mengirimkan respons dengan status 500 dan pesan error
      if (result.affectedRows === 0) {
        return res.status(404).json({
          message: "Kode siswa tidak ditemukan"
        });
    //jika tidak ada baris yang terpengaruh, mengirimkan respons dengan status 404 dan pesan bahwa kode siswa tidak ditemukan
      }

      res.json({ message: "Data siswa berhasil diupdate" });
    });
    //jika berhasil, mengirimkan pesan sukses
  },

  deleteSiswa: (req, res) => {
  //menghapus data siswa dari database
    const { kode_siswa } = req.params;
  //mengambil kode_siswa dari parameter URL
    db.query(
      "DELETE FROM siswa WHERE kode_siswa = ?",
    //menjalankan query SQL untuk menghapus data siswa berdasarkan kode_siswa
      kode_siswa,
      (err, result) => {
        if (err) return res.status(500).json(err);
    //jika terjadi error, mengirimkan respons dengan status 500 dan pesan error
        if (result.affectedRows === 0) {
          return res.status(404).json({
            message: "Kode siswa tidak ditemukan"
          });
      //jika tidak ada baris yang terpengaruh, mengirimkan respons dengan status 404 dan pesan bahwa kode siswa tidak ditemukan
        }

        res.json({ message: "Data siswa berhasil dihapus" });
      //jika berhasil, mengirimkan pesan sukses
      }
    );
  }
};

export default siswaController;

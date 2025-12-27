import mysql from "mysql2";
//Mengambil library MySQL agar Node.js bisa terhubung ke database.
import dotenv from "dotenv";
//Mengambil library dotenv untuk membaca file .env.
dotenv.config();
//Mengaktifkan .env supaya variabel di dalamnya bisa digunakan di program.
const db = mysql.createConnection({
  //Membuat koneksi database.
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME,
  port: process.env.DB_PORT
});

db.connect((err) => {
  //Menguji apakah database bisa dihubungkan.
  if (err) {
    console.log("❌ Database gagal terhubung:", err.message);
  //Menampilkan pesan error agar mudah diperbaiki
  } else {
    console.log("✅ Database terhubung");
  }// Jika berhasil, tampil pesan sukses.
});

export default db;

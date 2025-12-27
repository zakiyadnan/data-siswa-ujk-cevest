CREATE DATABASE data_siswa;
USE data_siswa;
CREATE TABLE siswa (
  kode_siswa VARCHAR(20) PRIMARY KEY,
  nama_siswa VARCHAR(100) NOT NULL,
  alamat_siswa TEXT NOT NULL,
  tgl_siswa DATE NOT NULL,
  jurusan_siswa VARCHAR(100) NOT NULL
);

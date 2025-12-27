//Mengelola form tambah & edit siswa

import { useEffect, useState } from "react";
//useState → untuk menyimpan data form
//useEffect → untuk menjalankan kode otomatis saat data berubah
import api from "../services/api";
//Mengambil file API (Axios) untuk komunikasi dengan backend.
const SiswaForm = ({ getSiswa, editData, setEditData }) => {
//getSiswa → fungsi refresh data
//editData → data yang mau diedit
//setEditData → untuk mengosongkan mode edit
  const [form, setForm] = useState({
    kode_siswa: "",
    nama_siswa: "",
    alamat_siswa: "",
    tgl_siswa: "",
    jurusan_siswa: ""
  });
  //Menyimpan semua input form siswa
  useEffect(() => {
    if (editData) setForm(editData);
  }, [editData]);
  //Kalau tombol edit ditekan, maka data lama otomatis masuk ke form.
  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };
  //Mengubah isi form saat user mengetik.
  const handleSubmit = async (e) => {
    e.preventDefault();
  //Mencegah halaman reload saat tombol submit ditekan.
    if (editData) {
      await api.put(`/siswa/${form.kode_siswa}`, form);
    } else {
      await api.post("/siswa", form);
    }
    //Jika edit → update data
    //Jika tambah → simpan data baru
    setForm({
      kode_siswa: "",
      nama_siswa: "",
      alamat_siswa: "",
      tgl_siswa: "",
      jurusan_siswa: ""
    });
    //Mengosongkan form setelah data disimpan.
    setEditData(null);
    getSiswa();
  };
  //Keluar dari mode edit dan refresh tabel data siswa.
  return (
    <form onSubmit={handleSubmit}>
      <input
        className="form-control mb-2"
        name="kode_siswa"
        placeholder="Kode Siswa"
        value={form.kode_siswa}
        onChange={handleChange}
        disabled={editData}
      />

      <input
        className="form-control mb-2"
        name="nama_siswa"
        placeholder="Nama Siswa"
        value={form.nama_siswa}
        onChange={handleChange}
      />

      <input
        className="form-control mb-2"
        name="alamat_siswa"
        placeholder="Alamat"
        value={form.alamat_siswa}
        onChange={handleChange}
      />

      <input
        type="date"
        className="form-control mb-2"
        name="tgl_siswa"
        value={form.tgl_siswa}
        onChange={handleChange}
      />

      <input
        className="form-control mb-2"
        name="jurusan_siswa"
        placeholder="Jurusan"
        value={form.jurusan_siswa}
        onChange={handleChange}
      />

      <button className="btn btn-primary">
        {editData ? "Update" : "Simpan"}
      </button>
    </form>
  );
};

export default SiswaForm;

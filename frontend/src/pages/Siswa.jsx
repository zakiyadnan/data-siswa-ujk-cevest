//Mengelola dan menampilkan data siswa

import { useEffect, useState } from "react";
//Mengambil fitur React untuk menyimpan data dan menjalankan kode otomatis
import api from "../services/api";
//Mengambil koneksi API (Axios) ke backend.
import SiswaForm from "../components/SiswaForm";
//Mengambil komponen Form input siswa.

const Siswa = () => {
  //Membuat halaman utama data siswa

  const [siswa, setSiswa] = useState([]);
  //Menyimpan semua data siswa dari database.

  const [editData, setEditData] = useState(null);
  //Menyimpan data siswa yang sedang diedit.

  const getSiswa = async () => {
    const res = await api.get("/siswa");
    setSiswa(res.data);
  };
  //Mengambil semua data siswa dari backend lalu disimpan ke state

  const deleteSiswa = async (kode) => {
    await api.delete(`/siswa/${kode}`);
    getSiswa();
  };
  //Menghapus data siswa berdasarkan kode lalu refresh tabel

  useEffect(() => {
    getSiswa();
  }, []);
  //Saat halaman pertama kali dibuka, data otomatis dimuat.

  return (
    <>
      <SiswaForm
        getSiswa={getSiswa}
        editData={editData}
        setEditData={setEditData}
      />

      <table className="table table-bordered mt-4">
        <thead>
          <tr>
            <th>Kode</th>
            <th>Nama</th>
            <th>Alamat</th>
            <th>Tanggal</th>
            <th>Jurusan</th>
            <th>Aksi</th>
          </tr>
        </thead>
        <tbody>
          {siswa.map((s) => (
            <tr key={s.kode_siswa}>
              <td>{s.kode_siswa}</td>
              <td>{s.nama_siswa}</td>
              <td>{s.alamat_siswa}</td>

              {/* Perbaikan format tanggal agar tidak tampil ISO */}
              <td>
                {new Date(s.tgl_siswa).toLocaleDateString("id-ID")}
              </td>

              <td>{s.jurusan_siswa}</td>
              <td>
                <button
                  className="btn btn-warning btn-sm me-2"
                  onClick={() => setEditData(s)}
                >
                  Edit
                </button>
                <button
                  className="btn btn-danger btn-sm"
                  onClick={() => deleteSiswa(s.kode_siswa)}
                >
                  Hapus
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
};

export default Siswa;

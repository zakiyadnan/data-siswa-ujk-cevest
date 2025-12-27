//Menjalankan aplikasi React ke browser

import React from "react";
//Mengambil library utama React.
import ReactDOM from "react-dom/client";
//Digunakan untuk menampilkan aplikasi React ke halaman web.
import App from "./App";
//Mengambil komponen utama aplikasi (root component).
import "bootstrap/dist/css/bootstrap.min.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  //Menentukan bahwa aplikasi React akan ditampilkan di elemen HTML dengan id root.
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

import axios from "axios"; // Impor modul axios untuk melakukan permintaan HTTP
import errorHandler from "./errorHandler"; // Impor fungsi errorHandler untuk menangani kesalahan respons

// Membuat instansi axios dengan konfigurasi baseURL yang diambil dari variabel lingkungan NEXT_PUBLIC_API
const instance = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API,
});

// Menggunakan interceptor untuk menangani respons dari permintaan HTTP
// Jika respons berhasil, hanya data respons yang akan diteruskan
// Jika terjadi kesalahan, errorHandler akan menangani kesalahan tersebut
instance.interceptors.response.use((response) => response.data, errorHandler);

export default instance; // Ekspor instansi axios yang telah dikonfigurasi

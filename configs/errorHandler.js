import { toast } from "react-toastify"; // Impor modul toast dari react-toastify untuk menampilkan pesan kesalahan

// Fungsi errorHandler untuk menangani kesalahan dari respons server
export default function errorHandler(error) {
  if (error) {
    // Memeriksa apakah terjadi kesalahan
    let message;
    if (error.response) {
      // Memeriksa apakah respons dari server tersedia
      message = error.response.data.msg; // Mengambil pesan kesalahan dari respons server

      if (typeof message === "string") toast.error(message); // Menampilkan pesan kesalahan menggunakan toast jika pesan berupa string

      return Promise.reject(error); // Melemparkan kesalahan kembali untuk ditangani oleh fungsi lain
    }
  }
}

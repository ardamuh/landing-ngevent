import axios from "../configs";
import Cookies from "js-cookie";

// Fungsi untuk melakukan permintaan GET ke server
export function getData(url, params, token) {
  return axios.get(`${url}`, {
    // Menggunakan Axios untuk melakukan permintaan GET
    params, // Menyertakan parameter opsional dalam permintaan GET
    headers: {
      // Menambahkan header Authorization untuk menyertakan token otentikasi
      Authorization: `Bearer ${token}`, // Format token otentikasi Bearer Token
    },
  });
}

// Fungsi untuk melakukan permintaan POST ke server
export async function postData(url, payload, token) {
  return await axios.post(`${url}`, payload, {
    // Menggunakan Axios untuk melakukan permintaan POST
    headers: {
      // Menambahkan header Authorization untuk menyertakan token otentikasi
      Authorization: `Bearer ${token}`, // Format token otentikasi Bearer Token
    },
  });
}

// Fungsi untuk melakukan permintaan PUT ke server
export async function putData(url, payload, token) {
  return await axios.put(`${url}`, payload, {
    // Menggunakan Axios untuk melakukan permintaan PUT
    headers: {
      // Menambahkan header Authorization untuk menyertakan token otentikasi
      Authorization: `Bearer ${token}`, // Format token otentikasi Bearer Token
    },
  });
}

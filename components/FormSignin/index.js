import React, { useState } from "react";
import Button from "../Button";
import TextInput from "../TextInput";
import { useRouter } from "next/router";
import { postData } from "../../utils/fetchData";
import Cookies from "js-cookie";
import { toast } from "react-toastify";

// Komponen FormSignin
export default function FormSignin() {
  // Dapatkan instance useRouter
  const router = useRouter();

  // State untuk menyimpan data formulir
  const [form, setForm] = useState({
    email: "",
    password: "",
  });

  // Fungsi untuk menangani perubahan input pada formulir
  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value }); // Atur nilai input pada state formulir
  };

  // Fungsi untuk menangani pengiriman formulir login
  const handleSubmit = async () => {
    const res = await postData("/api/v1/auth/signin", form); // Kirim data login ke server

    // Tampilkan pemberitahuan bahwa login berhasil dan simpan token pada cookie
    toast.success("berhasil signin", {
      position: "top-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    });
    Cookies.set("token", res.data.token); // Simpan token pada cookie untuk autentikasi
    router.push("/"); // Arahkan pengguna ke halaman utama setelah login berhasil
  };

  return (
    <form className="form-login d-flex flex-column mt-4 mt-md-0 p-30">
      <TextInput
        label={"Email"}
        type={"email"}
        name="email"
        value={form.email}
        placeholder={"your@email.com"}
        onChange={handleChange}
      />

      <TextInput
        label={"Password"}
        type={"password"}
        name="password"
        value={form.password}
        placeholder="Type your password"
        onChange={handleChange}
      />

      <div className="d-grid mt-2 gap-4">
        <Button variant={"btn-green"} action={() => handleSubmit()}>
          Sign In
        </Button>

        <Button action={() => router.push("/signup")} variant="btn-navy">
          Create New Account
        </Button>
      </div>
    </form>
  );
}

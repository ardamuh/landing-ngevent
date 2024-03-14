import React, { useEffect, useState } from "react";
import Head from "next/head";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Statistics from "../components/Statistics";
import CardEvent from "../components/CardEvent";
import styles from "../styles/Home.module.css";
import { getData } from "../utils/fetchData";
import { useRouter } from "next/router"; // Impor useRouter

export default function Browse({ data }) {
  const [filteredData, setFilteredData] = useState(data); // State untuk menyimpan data acara yang telah difilter
  const router = useRouter(); // Inisialisasi useRouter untuk mendapatkan parameter pencarian
  const { search } = router.query; // Ambil parameter search dari query URL

  useEffect(() => {
    if (search) {
      const lowercasedTerm = search.toLowerCase(); // Ubah parameter pencarian menjadi lowercase
      const filtered = data.filter((event) => {
        // Filter data events berdasarkan pencarian
        const titleMatch = event.title.toLowerCase().includes(lowercasedTerm); // Cek apakah judul mengandung pencarian
        const categoryMatch =
          event.category &&
          event.category.name.toLowerCase().includes(lowercasedTerm); // Cek apakah kategori mengandung pencarian
        const venueMatch =
          event.venueName &&
          event.venueName.toLowerCase().includes(lowercasedTerm); // Cek apakah nama tempat acara mengandung pencarian
        return titleMatch || categoryMatch || venueMatch; // Kembalikan true jika salah satu kriteria pencarian terpenuhi
      });

      setFilteredData(filtered); // Simpan data yang telah difilter ke dalam state
    } else {
      setFilteredData(data); // Jika tidak ada pencarian, gunakan semua data
    }
  }, [search, data]); // Efek ini dijalankan setiap kali nilai search atau data berubah

  return (
    <>
      <Head>
        <title>Ngevent || Browse Events</title>
        <meta name="description" content="Find and join exciting events" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Navbar onSearch={(term) => router.push(`/browse?search=${term}`)} />

      {/* Komponen CardEvent untuk menampilkan daftar acara */}
      <CardEvent
        data={filteredData} // Kirim data yang sudah difilter ke CardEvent
        title="Browse Events"
        subTitle="Find and join exciting events"
      />

      <Statistics />
      <Footer />
    </>
  );
}

{
  /* Fungsi getServerSideProps akan dipanggil pada sisi server sebelum halaman di-render */
}
export async function getServerSideProps(context) {
  const req = await getData("api/v1/events"); // Ambil data events dari API
  const res = req.data; // Data events yang berhasil diambil

  return {
    props: { data: res }, // Kirim data events sebagai properti ke dalam komponen Browse
  };
}

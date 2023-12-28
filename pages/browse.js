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
  const [filteredData, setFilteredData] = useState(data);
  const router = useRouter();
  const { search } = router.query; // Ambil parameter search dari query URL

  useEffect(() => {
    if (search) {
      const lowercasedTerm = search.toLowerCase();
      const filtered = data.filter((event) => {
        const titleMatch = event.title.toLowerCase().includes(lowercasedTerm);
        const categoryMatch =
          event.category &&
          event.category.name.toLowerCase().includes(lowercasedTerm);
        const venueMatch =
          event.venueName &&
          event.venueName.toLowerCase().includes(lowercasedTerm); // Menambahkan pencarian berdasarkan venueName
        return titleMatch || categoryMatch || venueMatch;
      });

      setFilteredData(filtered);
    } else {
      setFilteredData(data);
    }
  }, [search, data]); // Efek ini akan dijalankan setiap kali ada perubahan pada 'search' atau 'data'

  return (
    <>
      <Head>
        <title>Ngevent || Browse Events</title>
        <meta name="description" content="Find and join exciting events" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Navbar onSearch={(term) => router.push(`/browse?search=${term}`)} />

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

export async function getServerSideProps(context) {
  const req = await getData("api/v1/events");
  const res = req.data;

  return {
    props: { data: res },
  };
}

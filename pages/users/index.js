import Router from "next/router";
import Head from "next/head";
import React from "react";

// Import Components
import Navbar from "../../components/Navbar";

// Import CSS
import styles from "../../styles/Home.module.css";

export default function UsersPage({ data }) {
  // Handle Detail User
  const handleDetailUser = (id) => {
    Router.push(`users/${id}`);
  };

  return (
    <div className={styles.container}>
      <Head>
        <title>NgeventKuy || User Page</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Navbar />
      <h1 className={styles.title}>
        <a>User Page</a>
      </h1>

      <ul>
        {data.map((user) => (
          <div key={user.id} onClick={() => handleDetailUser(user.id)}>
            <li>
              <b>Nama</b> : {user.name}
              <br /> Email : {user.email}
            </li>
          </div>
        ))}
      </ul>
    </div>
  );
}

// Fetching Data with getServerSideProps()
// getServerSideProps() untuk Dynamic Data
export async function getServerSideProps(context) {
  // Fetch API
  const res = await fetch("https://jsonplaceholder.typicode.com/users"),
    // Covert API Data to JSON
    data = await res.json();

  // if (!data) return { notFound: true };

  return { props: { data } };
}

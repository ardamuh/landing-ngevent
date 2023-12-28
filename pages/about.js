import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Stories from "../components/Stories";
import Statistics from "../components/Statistics";

export default function About() {
  return (
    <div>
      <Navbar />
      <Stories />
      <Statistics />
      <Footer />
    </div>
  );
}

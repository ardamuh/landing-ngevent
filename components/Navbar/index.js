/* eslint-disable @next/next/no-img-element */
import React, { useEffect, useState } from "react";
import Link from "next/link";
import NavLink from "../NavLink";
import { useRouter } from "next/router";
import Cookies from "js-cookie";
import Button from "../Button";

export default function Navbar({ onSearch }) {
  const router = useRouter();
  const [token, setToken] = useState("");
  const [searchTerm, setSearchTerm] = useState("");
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    setToken(Cookies.get("token"));

    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleLogout = () => {
    console.log("click");
    Cookies.remove("token");
    router.push("/");
  };

  const handleSearch = (e) => {
    if (e.key === "Enter" || e.type === "click") {
      // Melakukan navigasi ke halaman browse dengan parameter pencarian
      router.push({
        pathname: "/browse",
        query: { search: searchTerm },
      });
    }
  };

  return (
    <nav
      className={`navbar navbar-expand-lg navbar-dark bg-navy ${
        isScrolled ? "scrolled-navbar" : ""
      }`}
      style={{
        position: isScrolled ? "fixed" : "relative", // Menjadikan navbar fixed ketika di-scroll
        width: "100%", // Mengatur lebar menjadi 100%
        top: 0, // Menempatkan navbar di bagian atas
        zIndex: 999, // Memastikan navbar berada di atas konten lain
      }}
    >
      <div className="container-fluid d-flex justify-content-between align-items-center">
        <Link href={"/"}>
          <a className="navbar-brand">
            <img src="/images/NgeventKuy.svg" alt="ngevent" />
          </a>
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNavAltMarkup"
          aria-controls="navbarNavAltMarkup"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
          <div
            className={`navbar-nav justify-content-center ${
              router.pathname !== "/signin" ? "mx-auto" : "ms-auto"
            } my-3 my-lg-0`}
          >
            <NavLink href={"/"}>Home</NavLink>
            <NavLink href={"/browse"}>Browse</NavLink>
            <NavLink href={"/about"}>About</NavLink>
          </div>

          {/* Search Bar */}
          <div className="d-flex flex-lg-row align-items-center ms-auto me-3 my-3">
            <input
              type="text"
              className="form-control"
              placeholder="Cari event..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              onKeyPress={handleSearch}
            />
            <button
              className="btn btn-outline-success ms-2"
              type="button"
              onClick={handleSearch}
            >
              Search
            </button>
          </div>

          {router.pathname !== "/signin" && (
            <>
              {token ? (
                <div className="navbar-nav">
                  <div className="nav-item dropdown d-flex flex-column flex-lg-row align-items-lg-center authenticated gap-3">
                    <span className="text-light d-none d-lg-block">
                      Welcome!
                    </span>

                    <a
                      className="nav-link dropdown-toggle mx-0 d-none d-lg-block"
                      href="#"
                      id="navbarDropdown"
                      role="button"
                      data-bs-toggle="dropdown"
                      aria-expanded="false"
                    >
                      <img src="/images/avatar1.png" alt="semina" width="60" />
                    </a>

                    <a
                      className="d-block d-lg-none dropdown-toggle text-light text-decoration-none"
                      data-bs-toggle="collapse"
                      href="#collapseExample"
                      role="button"
                      aria-expanded="false"
                      aria-controls="collapseExample"
                    >
                      <img src="/images/avatar1.png" alt="ngevent" width="60" />
                    </a>

                    <ul
                      className="dropdown-menu"
                      aria-labelledby="navbarDropdown"
                    >
                      <li>
                        <Link href={"/dashboard"}>
                          <a className="dropdown-item">Dashboard</a>
                        </Link>
                      </li>
                      <li onClick={() => handleLogout()}>
                        <a className="dropdown-item">Sign Out</a>
                      </li>
                    </ul>

                    <div className="collapse" id="collapseExample">
                      <ul className="list-group">
                        <li>
                          <a className="list-group-item" href="#">
                            Dashboard
                          </a>
                        </li>
                        <li onClick={() => handleLogout()}>
                          <a className="list-group-item">Sign Out</a>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              ) : (
                <div className="d-grid">
                  <Link href={"/signin"}>
                    <a className="btn-navy">Sign In</a>
                  </Link>
                </div>
              )}
            </>
          )}
        </div>
      </div>
    </nav>
  );
}

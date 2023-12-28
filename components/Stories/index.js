/* eslint-disable @next/next/no-img-element */
import React from "react";

export default function Stories() {
  return (
    <section className="stories bg-white">
      <div className="d-flex flex-row justify-content-center align-items-center container">
        <img
          src="/images/event ilustrasi 1.jpg"
          alt="semina"
          className="d-none d-lg-block"
          width="515"
        />
        <div className="d-flex flex-column">
          <div>
            <div className="sub-title">
              <span className="text-gradient-pink">About</span>
            </div>
            <div className="title">
              One Great Event. <br className="d-none d-lg-block" />
              For The Better Happiness.
            </div>
          </div>
          <p className="paragraph">
            NgeventKuy! merupakan website event organizer yang menyajikan
            pengalaman perencanaan event online yang tanpa ribet.Dengan
            antarmuka yang user-friendly, pengguna dapat menjelajahi pilihan
            event sesukanya.
            <br className="d-none d-lg-block" />
            <br className="d-none d-lg-block" />
            Rencanakan acaramu tanpa repot bersama Ngeventkuy!
          </p>
          <a href="about" className="btn-navy">
            Read
          </a>
        </div>
      </div>
    </section>
  );
}

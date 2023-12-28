import React from "react";

export default function Hero() {
  return (
    <>
      <div className="hero">
        <div className="hero-headline">
          Elevate Your Interest{" "}
          <span className="text-gradient-blue">and Entertainment</span>{" "}
          <br className="d-none d-lg-block" />
          with <span className="text-gradient-pink">Our Special </span> Events
        </div>
        <p className="hero-paragraph">
          Rangkaian event pilihan kami siap memanjakan kegemaran Anda dengan
          berbagai pengalaman yang dirancang{" "}
          <br className="d-none d-lg-block" />
          untuk meningkatkan keseruan dan kepuasan Anda dalam menjalani setiap
          hari
        </p>
        <a href="#grow-today" className="btn-green">
          Browse Now
        </a>
      </div>

      <div className="d-flex flex-row flex-nowrap justify-content-center align-items-center gap-5 header-image">
        <img src="/images/akurat-header.png" alt="semina" className="img-1" />
        <img src="/images/jkt48-header.png" alt="semina" className="img-2" />
        <img src="/images/sod-header.png" alt="semina" className="img-1" />
      </div>
    </>
  );
}

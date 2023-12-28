import React from "react";

export default function Statistics() {
  return (
    <section className="statistics statistics-center container">
      <div className="d-flex flex-row flex-wrap justify-content-center align-items-center gap-5 mt-5">
        <div className="d-flex flex-column align-items-center gap-1">
          <div className="title">1K+</div>
          <p>Events Created</p>
        </div>
        <div className="vr"></div>
        <div className="d-flex flex-column align-items-center gap-1">
          <div className="title">50K+</div>
          <p>People Joined</p>
        </div>
        <div className="vr d-none d-md-block"></div>
        <div className="d-flex flex-column align-items-center gap-1">
          <div className="title">1K+</div>
          <p>Success EO</p>
        </div>
        <div className="vr"></div>
        <div className="d-flex flex-column align-items-center gap-1">
          <div className="title">10K+</div>
          <p>Top Guest Star</p>
        </div>
      </div>
    </section>
  );
}

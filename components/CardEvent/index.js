/* eslint-disable @next/next/no-img-element */
import React from "react";
import CardTitle from "../CardTitle";
import Link from "next/link";
import { formatDate } from "../../utils/formatDate";

export default function CardEvent({ data, title, subTitle }) {
  // Fungsi untuk memformat harga
  const formatPrice = (price) => {
    return price.toLocaleString("id-ID", {
      style: "currency",
      currency: "IDR",
    });
  };

  return (
    <section className="grow-today">
      <div className="container">
        <CardTitle title={title} subTitle={subTitle} />
        <div className="mt-5 row gap">
          {data.map((data, index) => (
            <div className="col-lg-3 col-md-6 col-12" key={index}>
              <div className="card-grow h-100">
                <span className="badge-pricing">
                  {data.tickets[0].price === 0
                    ? "free"
                    : formatPrice(data.tickets[0].price)}
                </span>
                <img
                  src={`${process.env.NEXT_PUBLIC_API}/${data.image.name}`}
                  alt="semina"
                />
                <div className="card-content">
                  <div className="card-title">{data.title}</div>
                  <div className="card-subtitle">{data.category.name}</div>
                  <div className="description">{data.venueName}</div>
                  <div className="description">{formatDate(data.date)}</div>
                  <Link href={`/detail/${data._id}`}>
                    <a className="stretched-link"></a>
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

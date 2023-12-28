import Head from "next/head";
import Brand from "../components/Brand";
import Navbar from "../components/Navbar";
import FormSignup from "../components/FormSignup";
import { useRouter } from "next/router";
import TextInput from "../components/TextInput";
import Button from "../components/Button";

export default function Signin() {
  return (
    <>
      <Head>
        <title>NgeventKuy || Signup</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <section className="bg-navy">
        <Navbar />
      </section>

      <section className="login header bg-navy">
        <div className="container">
          <div className="row row-cols-md-12 row-cols-1 d-flex justify-content-center align-items-center hero">
            <div className="col-md-6">
              <div className="hero-headline text-start">
                Expand Your <br className="d-none d-md-block" />
                Passion and Entertain
              </div>
              <p className="hero-paragraph text-start">
                Kami menyediakan berbagai acara terbaik untuk membantu{" "}
                <br className="d-none d-lg-block" />
                dalam memenuhi passion dan meningkatkan hiburan Anda
              </p>
            </div>
            <div className="col-md-6">
              <FormSignup />
            </div>
          </div>
        </div>
      </section>

      <Brand className="pt-0 bg-navy" />
    </>
  );
}

export async function getServerSideProps(context) {
  const { token } = context.req.cookies;

  if (token) {
    return {
      redirect: {
        destination: "/",
        permanent: false,
      },
    };
  }

  return {
    props: {},
  };
}

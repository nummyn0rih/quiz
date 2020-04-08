import Head from "next/head";
import Header from "./Header";
import Footer from "./Footer";

export default function Layout(props) {
  return (
    <div>
      <Head>
        <title>{props.title}</title>
        <meta charSet="utf-8" />
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <link
          rel="preload"
          href="/fonts/Montserrat-Regular.ttf"
          as="font"
          crossOrigin=""
        />
      </Head>
      <Header />
      {props.children}
      <Footer />
      <style jsx global>{`
        @font-face {
          font-family: "Montserrat", sans-serif;
          src: url("/fonts/Montserrat-Regular.ttf");
          font-weight: normal;
          font-style: normal;
          font-display: swap;
        }
        body {
          margin: 0;
          font-family: Montserrat, Arial, Helvetica, sans-serif;
        }
      `}</style>
    </div>
  );
}

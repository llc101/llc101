import Head from "next/head";
import Footer from "./Footer";
import Navbar from "./Navbar";

function Layout({ children }) {
  return (
    <div>
      <Head>
        <title>Creativity | 101</title>
        <meta
          name="description"
          content="Learn web development, 2d & 3d graphic design and Photo & Video Editing."
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Navbar />

      <div className="min-h-[92vh]">{children}</div>

      <Footer />
    </div>
  );
}

export default Layout;

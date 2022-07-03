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
          content="Learn programming, web development, mobile Development, 2d & 3d graphic design and Photo & Video Editing."
        />
        <meta
          name="keywords"
          content="learn, programming, mobile, desktop, webapp, app, application, web, development, 2d, 3d, graphic, design, photo, video, editing, guide"
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

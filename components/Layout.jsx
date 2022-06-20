import Footer from "./Footer";
import Navbar from "./Navbar";

function Layout({ children }) {
  return (
    <div>
      <Navbar />

      <div className="min-h-[92vh]">{children}</div>

      <Footer />
    </div>
  );
}

export default Layout;

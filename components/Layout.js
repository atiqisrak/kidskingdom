import Header from "./Header";
import Footer from "./Footer";

const Layout = ({ children }) => {
  return (
    <>
      <Header />
      <main className="container mx-auto py-8">{children}</main>
      <Footer />
    </>
  );
};

export default Layout;

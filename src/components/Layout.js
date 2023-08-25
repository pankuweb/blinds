import Footer from "./Footer";
import Header from "./Header";

const Layout = (props) => {
  return (
    <section>
      <Header />
      {props.children}
      <Footer />
    </section>
  );
};
export default Layout;

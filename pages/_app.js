import "@/styles/globals.css";
// import "@/styles/globals.mini.css";
import "bootstrap/dist/css/bootstrap.css";
import { useEffect } from "react";
import "@/styles/responsive.css";
import { Provider } from "react-redux";
import store from "@/store";
export default function App({ Component, pageProps }) {
  useEffect(() => {
    require("bootstrap/dist/js/bootstrap.bundle.min.js");
  }, []);
  // return <Component {...pageProps} />;
  return (
    <Provider store={store}>
      <Component {...pageProps} />
    </Provider>
  );
}

import Head from "next/head";
import Contact from "@/src/old-screens/Contact";

const index = () => {
  return (
    <section>
      <Head>
        <title>Blinds | Contact</title>
        <meta
          name="description"
          content="width=device-width, initial-scale=1.0"
        />
      </Head>
      <Contact />
    </section>
  );
};
export default index;

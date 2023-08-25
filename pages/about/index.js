import About from "@/src/old-screens/About";
import Head from "next/head";

const index = () => {
  return (
    <section>
      <Head>
        <title>Blinds | About</title>
        <meta
          name="description"
          content="width=device-width, initial-scale=1.0"
        />
      </Head>
      <About />
    </section>
  );
};

export default index;

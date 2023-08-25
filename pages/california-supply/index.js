import California from "@/src/old-screens/California/California";
import Head from "next/head";

const index = () => {
  return (
    <section>
      <Head>
        <title>Blinds | California Supply</title>
        <meta
          name="description"
          content="width=device-width, initial-scale=1.0"
        />
      </Head>
      <California />
    </section>
  );
};

export default index;

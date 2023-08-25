import Sitemap from "@/src/old-screens/Sitemap/Sitemap";
import Head from "next/head";

const index = () => {
  return (
    <section>
      <Head>
        <title>Blinds | Sitemap</title>
        <meta
          name="description"
          content="width=device-width, initial-scale=1.0"
        />
      </Head>
      <Sitemap />
    </section>
  );
};
export default index;

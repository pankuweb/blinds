import Head from "next/head";
import Commercial from "@/src/old-screens/Commercial/index";
const index = () => {
  return (
    <section>
      <Head>
        <title>Blinds | Commercial</title>
        <meta
          name="description"
          content="width=device-width, initial-scale=1.0"
        />
      </Head>
      <Commercial />
    </section>
  );
};
export default index;

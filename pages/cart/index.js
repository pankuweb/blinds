import Card from "@/src/old-screens/Card/Card";
import Head from "next/head";

const index = () => {
  return (
    <section>
      <Head>
        <title>Blinds | Card</title>
        <meta
          name="description"
          content="width=device-width, initial-scale=1.0"
        />
      </Head>
      <Card />
    </section>
  );
};
export default index;

import Head from "next/head";
import Affiliates from "@/src/old-screens/Affiliates";
const index = () => {
  return (
    <section>
      <Head>
        <title>Blinds | Affiliates</title>
        <meta
          name="description"
          content="width=device-width, initial-scale=1.0"
        />
      </Head>
      <Affiliates />
    </section>
  );
};
export default index;

import Privacy from "@/src/old-screens/Privacy/Privacy";
import Head from "next/head";

const index = () => {
  return (
    <section>
      <Head>
        <title>Blinds | Privacy Policy</title>
        <meta
          name="description"
          content="width=device-width, initial-scale=1.0"
        />
      </Head>
      <Privacy />
    </section>
  );
};
export default index;

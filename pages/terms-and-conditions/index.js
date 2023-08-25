import Terms from "@/src/old-screens/Terms/Terms";
import Head from "next/head";

const index = () => {
  return (
    <section>
      <Head>
        <title>Blinds | Terms and Conditions</title>
        <meta
          name="description"
          content="width=device-width, initial-scale=1.0"
        />
      </Head>
      <Terms />
    </section>
  );
};
export default index;

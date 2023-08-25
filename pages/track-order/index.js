import TrackOrder from "@/src/old-screens/TrackOrder/TrackOrder";
import Head from "next/head";

const index = () => {
  return (
    <section>
      <Head>
        <title>Blinds | Track your order</title>
        <meta
          name="description"
          content="width=device-width, initial-scale=1.0"
        />
      </Head>
      <TrackOrder />
    </section>
  );
};
export default index;

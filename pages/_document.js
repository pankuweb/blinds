import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <title> Blind Design</title>
        <meta
          name="description"
          content="width=device-width, initial-scale=1.0"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Barlow:wght@400;500;600;700;900&display=swap"
          rel="stylesheet"
        ></link>
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}

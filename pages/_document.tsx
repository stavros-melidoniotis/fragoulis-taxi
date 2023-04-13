import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <meta property="og:url" content="https://www.fragoulis-taxi.gr" />
        <meta property="og:title" content="Fragoulis Giannis - Taxi Services" />
        <meta
          property="og:description"
          content="Safe, affordable rides to every destination."
        />
        {/* <meta
          property="og:image"
          content="https://www.example.com/og-image.jpg"
        /> */}
        <meta property="og:type" content="website" />

        <meta name="twitter:card" content="summary_large_image" />
        <meta property="twitter:url" content="https://fragoulis-taxi.gr" />
        <meta
          property="twitter:title"
          content="Fragoulis Giannis - Taxi Services"
        />
        <meta
          property="twitter:description"
          content="Safe, affordable rides to every destination."
        />
        {/* <meta
          property="twitter:image"
          content="https://metatags.io/assets/meta-tags-16a33a6a8531e519cc0936fbba0ad904e52d35f34a46c97a2c9f6f7dd7d336f2.png"
        /> */}
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}

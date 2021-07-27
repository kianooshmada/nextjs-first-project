import Head from "next/head";
const Meta = ({ title, keyword, description }) => {
  return (
    <Head>
      <title>WebDev News</title>
      <meta name="keywords" content="web-development, programmer" />
    </Head>
  );
};

export default Meta;

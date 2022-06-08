import type { NextPage } from "next";
import Head from "next/head";

const Home: NextPage = () => {
  return (
    <div>
      <Head>
        <meta name="description" content="Todo app" />
        <title>Todo App</title>
        <link rel="icon" href="favicon-32x32.png" />
      </Head>

      <h1 className="text-3xl font-bold underline">Todo App</h1>
    </div>
  );
};

export default Home;

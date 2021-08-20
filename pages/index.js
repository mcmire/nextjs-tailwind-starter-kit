import Head from "next/head";

export default function Home() {
  return (
    <>
      <Head>
        <title>NextJS + Tailwind Starter Kit</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="text-red-500">This is the home page</main>
    </>
  );
}

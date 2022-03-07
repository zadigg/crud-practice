import Head from "next/head";
import Image from "next/image";
import Login from "../components/Login";
import Mukera from "../components/Mukera";

export default function Home() {
  return (
    <div className="">
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="bg-[#1A202C] h-screen">
        {/* <Login /> */}
        <Mukera />
      </main>
    </div>
  );
}

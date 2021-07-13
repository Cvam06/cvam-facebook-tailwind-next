import { getSession } from 'next-auth/client';
import Head from 'next/head';
import Feed from '../components/Feed.js';
import Header from "../components/Header/Header.js";
import Login from "../components/Login";
import Sidebar from '../components/Sidebar.js';
import Widgets from '../components/Widgets.js';

export default function Home({ session }) {
  if (!session) {
    return <Login />
  }
  return (
    <div>
      <Head>
        <title>Facebook</title>
      </Head>

      {/* Header */}
      <Header />
      <main className="flex">
        <Sidebar />
        <Feed />
        <Widgets />
      </main>
    </div>
  )
}

export async function getServerSideProps(context) {
  // Get the user
  const session = await getSession(context);

  return {
    props: {
      session
    }
  }
}
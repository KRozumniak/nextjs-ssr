import Head from "next/head";
import {MainLayout} from "../components/MainLayout";

export default function Posts() {
  return (
    <MainLayout>
      <Head>
        <title>Posts page | Next</title>
        <meta name="keywords" content="next, javascript, nextjs, react"></meta>
        <meta name="description" content="this is next js"></meta>
        <meta charSet="utf-8"/>
      </Head>
      <h1>Posts Page</h1>
    </MainLayout>
  )
}

// /posts
// /post/42
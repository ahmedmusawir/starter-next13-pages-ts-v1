import Image from "next/image";
import { Inter } from "next/font/google";
import Head from "next/head";
import Layout from "@/components/Layout";
import { Box, Container, Row } from "@/components/layouts";
import Spinner from "@/components/ui-ux/Spinner";
import { useGetPostsQuery } from "@/features/posts/apiPosts";
import Posts, { PostData } from "@/features/posts/Posts";

const inter = Inter({ subsets: ["latin"] });

export default function Blog() {
  const { data, isLoading, error } = useGetPostsQuery({});
  // console.log("Posts:", data?.posts);
  const posts: PostData[] = data?.posts;

  return (
    <Layout>
      <Head>
        <title>Next Page Template</title>
        <meta name="description" content="This is the demo page" />
      </Head>
      {/* <Container className={"border border-gray-500"} FULL={false}> */}
      <Container className={""} FULL={false}>
        <Row className="prose max-w-3xl mx-auto bg-purple-200 p-12">
          <h1 className="h1">The Blog</h1>
          <h2 className="h2">Blog with RTK Query on Next.js</h2>
        </Row>
        <Row className="prose max-w-3xl">
          <div className=" mx-auto">{isLoading && <Spinner />}</div>
          <Posts posts={posts} />
        </Row>
      </Container>
    </Layout>
  );
}

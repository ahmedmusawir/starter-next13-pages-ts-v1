import Image from "next/image";
import { Inter } from "next/font/google";
import Head from "next/head";
import Layout from "@/components/Layout";
import { Box, Container, Row } from "@/components/layouts";

const inter = Inter({ subsets: ["latin"] });

export default function PageTemplate() {
  return (
    <Layout>
      <Head>
        <title>Next Page Template</title>
        <meta name="description" content="This is the demo page" />
      </Head>
      {/* <Container className={"border border-gray-500"} FULL={false}> */}
      <Container className={""} FULL={false}>
        <Row className="prose max-w-3xl mx-auto">
          <h1 className="h1">This is the Page Template (Copy Me)</h1>
          <h2 className="h2">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit
          </h2>
          <h3 className="h3">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit
          </h3>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Est
            molestias pariatur earum praesentium tempore natus asperiores alias
            facere delectus ullam? At in ducimus et delectus, autem veniam quas
            natus quam?
          </p>
        </Row>
      </Container>
    </Layout>
  );
}

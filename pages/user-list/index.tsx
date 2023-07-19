import Image from "next/image";
import { Inter } from "next/font/google";
import Head from "next/head";
import Layout from "@/components/Layout";
import { Box, Container, Row } from "@/components/layouts";
import { FiUsers } from "react-icons/fi";
import Link from "next/link";

const inter = Inter({ subsets: ["latin"] });

export interface StaicProps {
  id: number;
  name: string;
  email: string;
  phone: string;
  city: string;
  zipcode: string;
}

export interface UserList {
  ninjas: StaicProps[];
}

export const getStaticProps = async () => {
  const res = await fetch("https://jsonplaceholder.typicode.com/users");
  const data = await res.json();

  return {
    props: { ninjas: data },
  };
};

export default function UserList({ ninjas }: UserList) {
  return (
    <Layout>
      <Head>
        <title>User List</title>
        <meta name="description" content="This is the User List" />
      </Head>
      {/* <Container className={"border border-gray-500"} FULL={false}> */}
      <Container className={""} FULL={false}>
        <Row className="prose max-w-3xl mx-auto">
          <h1 className="h1">The User List</h1>
          <h2 className="h2">Using Fetch in getStaticProps</h2>
        </Row>
        <hr />
        <Row className={"prose"}>
          {/* p-5 CLASS WILL BREAK EVERYTHING */}
          <h2 className="text-center">All Users</h2>
          {/* <Box className={"p-3 w-[32rem]  flex flex-wrap justify-around"}> */}
          <Box className={"flex flex-wrap justify-center"}>
            {ninjas.map((ninja) => (
              <div className="card p-6 m-2 border shadow-lg">
                <Link
                  href={"/user-list/" + ninja.id}
                  key={ninja.id}
                  className=""
                >
                  <FiUsers size={50} className="mx-auto text-primary" />
                  <h3>{ninja.name}</h3>
                </Link>
              </div>
            ))}
          </Box>
        </Row>
      </Container>
    </Layout>
  );
}

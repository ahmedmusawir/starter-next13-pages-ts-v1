import Image from "next/image";
import { Inter } from "next/font/google";
import Head from "next/head";
import Layout from "@/components/Layout";
import { Box, Container, Row } from "@/components/layouts";
import { GetStaticPaths, GetStaticProps } from "next";
import { FiUsers } from "react-icons/fi";
import Link from "next/link";

const inter = Inter({ subsets: ["latin"] });

export interface User {
  id: number;
  firstName: string;
  email: string;
  phone: string;
  age: number;
  gender: string;
  birthDate: string;
}

export interface UserList {
  users: User[];
}

export interface NinjaList {
  ninjas: UserList;
}

export const getStaticProps = async () => {
  const res = await fetch("https://dummyjson.com/users?limit=5");
  const data = await res.json();

  return {
    props: { ninjas: data },
  };
};

export default function UserList({ ninjas }: NinjaList) {
  // console.log("Ninjas List:", ninjas.users); // THIS IS GIVING ME THE USERS ARRAY I NEEDED NOT JUST ninjas ... IS THIS OK?
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
            {ninjas.users.map((ninja) => (
              <div className="card p-6 m-2 border shadow-lg" key={ninja.id}>
                <Link
                  href={"/user-list/" + ninja.id}
                  key={ninja.id}
                  className=""
                >
                  <FiUsers size={50} className="mx-auto text-primary" />
                  <h3>{ninja.firstName}</h3>
                </Link>
              </div>
            ))}
          </Box>
        </Row>
      </Container>
    </Layout>
  );
}

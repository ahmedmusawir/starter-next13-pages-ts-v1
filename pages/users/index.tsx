import Image from "next/image";
import { Inter } from "next/font/google";
import Head from "next/head";
import Layout from "@/components/Layout";
import { Box, Container, Row } from "@/components/layouts";
import Link from "next/link";
import Spinner from "@/components/ui-ux/Spinner";
import { UserSearchBar } from "@/components/ui-ux/UserSearchBar";
import { RadioGroupGender } from "@/components/ui-ux/RadioGroupGender";
import { RadioGroupCreditCard } from "@/components/ui-ux/RadioGroupCreditCard";
import { RadioGroupCurrency } from "@/components/ui-ux/RadioGroupCurrency";
import { useGetUsersQuery } from "@/features/users/apiUsers";
import Users from "@/features/users/Users";
import { RootState, User } from "@/global-interfaces";
import { useSelector } from "react-redux";

const UsersPage = () => {
  const filter = useSelector((state: RootState) => state.user.filter);

  const { data, isLoading } = useGetUsersQuery({ filter });
  const clients: User[] = data?.users;
  // console.log("Users Data", data);

  return (
    <Layout>
      <Head>
        <title>Next Redux Template</title>
        <meta name="description" content="This is the demo page" />
      </Head>
      <Container className={""} FULL={false}>
        <Row className="prose max-w-3xl mx-auto bg-indigo-200 py-10 px-16 rounded-xl">
          <h1 className="h1">The Robot List</h1>
          <UserSearchBar />
          <Box className={"grid gap-3 grid-auto-fit p-3"}>
            <RadioGroupGender />
            <RadioGroupCreditCard />
            <RadioGroupCurrency />
          </Box>
        </Row>
        <Row className="prose max-w-3xl bg-gray-50 rounded-xl">
          <div className=" mx-auto">{isLoading && <Spinner />}</div>
          <Users people={clients} />
        </Row>
      </Container>
    </Layout>
  );
};

export default UsersPage;

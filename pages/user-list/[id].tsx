import Layout from "@/components/Layout";
import Head from "next/head";
import React from "react";
import {
  GetStaticPaths,
  GetStaticProps,
  GetStaticPathsContext,
  GetStaticPropsContext,
} from "next";

export interface UserDetailProps {
  id: number;
  name: string;
  email: string;
  phone: string;
  address: {
    city: string;
    zipcode: string;
  };
}

export interface UserDetailPageProps {
  ninja: UserDetailProps;
}

// define the return type for getStaticPaths
export const getStaticPaths: GetStaticPaths = async () => {
  const res = await fetch("https://jsonplaceholder.typicode.com/users");
  const data: UserDetailProps[] = await res.json();

  const paths = data.map((ninja) => {
    return {
      params: { id: ninja.id.toString() },
    };
  });

  return {
    paths,
    fallback: false,
  };
};

// define the return type and the context parameter type for getStaticProps
export const getStaticProps: GetStaticProps<
  UserDetailPageProps,
  { id: string }
> = async (context) => {
  const id = context?.params?.id;
  const res = await fetch("https://jsonplaceholder.typicode.com/users/" + id);
  const data: UserDetailProps = await res.json();

  console.log("data:", data);

  return {
    props: { ninja: data },
  };
};

const SingleUser = ({ ninja }: UserDetailPageProps) => {
  return (
    <Layout>
      <Head>
        <title>User List</title>
        <meta name="description" content="This is the User List" />
      </Head>
      <div className="bg-white relative shadow rounded-lg w-5/6 md:w-5/6  lg:w-4/6 xl:w-3/6 mx-auto">
        <div className="flex justify-center">
          <img
            src="https://avatars0.githubusercontent.com/u/35900628?v=4"
            alt=""
            className="rounded-full mx-auto  w-32 h-32 shadow-md border-4 border-white transition duration-200 transform hover:scale-110"
          />
        </div>

        <div className="mt-16">
          <h1 className="font-bold text-center text-3xl text-gray-900">
            Cyberize Software
          </h1>
          <p className="text-center text-sm text-gray-400 font-medium">
            Restaurant Software Factory
          </p>
          <p>
            <span></span>
          </p>
          <div className="my-5 px-6">
            <a
              href="#"
              className="text-gray-200 block rounded-lg text-center px-6 py-3 bg-gray-900 hover:bg-black hover:text-white"
            >
              <h2>
                Connect with <span className="font-bold">{ninja.name}</span>
              </h2>
            </a>
          </div>
          <div className="flex justify-between items-center my-5 px-6">
            <a
              href=""
              className="text-gray-500 hover:text-gray-900 hover:bg-gray-100 rounded transition duration-150 ease-in font-medium text-sm text-center w-full py-3"
            >
              Facebook
            </a>
            <a
              href=""
              className="text-gray-500 hover:text-gray-900 hover:bg-gray-100 rounded transition duration-150 ease-in font-medium text-sm text-center w-full py-3"
            >
              Twitter
            </a>
            <a
              href=""
              className="text-gray-500 hover:text-gray-900 hover:bg-gray-100 rounded transition duration-150 ease-in font-medium text-sm text-center w-full py-3"
            >
              Instagram
            </a>
            <a
              href=""
              className="text-gray-500 hover:text-gray-900 hover:bg-gray-100 rounded transition duration-150 ease-in font-medium text-sm text-center w-full py-3"
            >
              Email
            </a>
          </div>

          <div className="w-full">
            <h3 className="font-medium text-gray-900 text-left px-6">
              Recent activites
            </h3>
            <div className="mt-5 w-full flex flex-col items-center overflow-hidden text-sm">
              <a
                href="#"
                className="w-full border-t border-gray-100 text-gray-600 py-4 pl-6 pr-3 w-full block hover:bg-gray-100 transition duration-150"
              >
                <img
                  src="https://avatars0.githubusercontent.com/u/35900628?v=4"
                  alt=""
                  className="rounded-full h-6 shadow-md inline-block mr-2"
                />
                Email: {ninja.email}
                {/* <span className="text-gray-500 text-xs">24 min ago</span> */}
              </a>
            </div>
            <div className="mt-5 w-full flex flex-col items-center overflow-hidden text-sm">
              <a
                href="#"
                className="w-full border-t border-gray-100 text-gray-600 py-4 pl-6 pr-3 w-full block hover:bg-gray-100 transition duration-150"
              >
                <img
                  src="https://avatars0.githubusercontent.com/u/35900628?v=4"
                  alt=""
                  className="rounded-full h-6 shadow-md inline-block mr-2"
                />
                Phone: {ninja.phone}
                {/* <span className="text-gray-500 text-xs">24 min ago</span> */}
              </a>
            </div>
            <div className="mt-5 w-full flex flex-col items-center overflow-hidden text-sm">
              <a
                href="#"
                className="w-full border-t border-gray-100 text-gray-600 py-4 pl-6 pr-3 w-full block hover:bg-gray-100 transition duration-150"
              >
                <img
                  src="https://avatars0.githubusercontent.com/u/35900628?v=4"
                  alt=""
                  className="rounded-full h-6 shadow-md inline-block mr-2"
                />
                City: {ninja.address.city}
                {/* <span className="text-gray-500 text-xs">24 min ago</span> */}
              </a>
            </div>
            <div className="mt-5 w-full flex flex-col items-center overflow-hidden text-sm">
              <a
                href="#"
                className="w-full border-t border-gray-100 text-gray-600 py-4 pl-6 pr-3 w-full block hover:bg-gray-100 transition duration-150"
              >
                <img
                  src="https://avatars0.githubusercontent.com/u/35900628?v=4"
                  alt=""
                  className="rounded-full h-6 shadow-md inline-block mr-2"
                />
                Zip Code: {ninja.address.zipcode}
                {/* <span className="text-gray-500 text-xs">24 min ago</span> */}
              </a>
            </div>
            <div className="mt-5 w-full flex flex-col items-center overflow-hidden text-sm">
              <a
                href="#"
                className="w-full border-t border-gray-100 text-gray-600 py-4 pl-6 pr-3 w-full block hover:bg-gray-100 transition duration-150"
              >
                <img
                  src="https://avatars0.githubusercontent.com/u/35900628?v=4"
                  alt=""
                  className="rounded-full h-6 shadow-md inline-block mr-2"
                />
                ID: {ninja.id}
                {/* <span className="text-gray-500 text-xs">24 min ago</span> */}
              </a>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default SingleUser;

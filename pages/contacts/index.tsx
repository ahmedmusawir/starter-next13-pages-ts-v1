import Image from "next/image";
import { Inter } from "next/font/google";
import Head from "next/head";
import Layout from "@/components/Layout";
import { Box, Container, Row } from "@/components/layouts";
import datasource from "@/data-layer";
import { ContactData } from "@/data-layer/strapi/contacts";

const inter = Inter({ subsets: ["latin"] });

export const getStaticProps = async () => {
  if (!datasource.getContacts) {
    // handle the error, perhaps by throwing it
    throw new Error("Data source not configured correctly");
  }

  const contacts = await datasource.getContacts();
  //   console.log("Contacts: ", contacts);
  console.dir(contacts, { depth: null });

  return {
    props: {
      contacts,
    },
    revalidate: 5,
  };
};

export default function ContactListPage({
  contacts,
}: {
  contacts: ContactData[];
}) {
  return (
    <Layout>
      <Head>
        <title>Next Page Template</title>
        <meta name="description" content="This is the demo page" />
      </Head>
      {/* <Container className={"border border-gray-500"} FULL={false}> */}
      <Container className={""} FULL={false}>
        <Row className="prose max-w-3xl mx-auto flex">
          <Box>
            <h1 className="h1">This is the Contacts Page</h1>
            <h2 className="h2">This is done with:</h2>
            <ul>
              <li>
                Axios apiClient w/ auth header including Strapi v4 Local Token
              </li>
              <li>Data layer: </li>
              <ul>
                <h3>/strapi</h3>
                <li>contact.ts</li>
                <li>company.ts</li>
                <li>index.ts (has the datasource)</li>
              </ul>
            </ul>
          </Box>
          <Box className="p-8 border border-gray-400 mx-auto">
            <hr />
            {contacts.map((contact) => (
              <li key={contact.id}>{contact.attributes.firstName}</li>
            ))}
          </Box>
        </Row>
      </Container>
    </Layout>
  );
}

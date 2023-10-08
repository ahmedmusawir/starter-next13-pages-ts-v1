import Image from "next/image";
import Head from "next/head";
import Layout from "@/components/Layout";
import { Box, Container, Row } from "@/components/layouts";
import Spinner from "@/components/ui-ux/Spinner";
import { useGetProductsQuery } from "@/features/products/apiProducts";
import Products from "@/features/products/Products";
import { useSelector } from "react-redux";
import { ProductsData, RootState } from "@/global-interfaces";
import { ProductSearchBar } from "@/components/ui-ux/ProductSearchBar";
import { RadioButtonCategoryGroup } from "@/components/ui-ux/RadioButtonCategoryGroup";

export default function ProductsPage() {
  const searchTerm = useSelector(
    (state: RootState) => state.product.searchTerm
  );
  const categoryTerm = useSelector(
    (state: RootState) => state.product.categoryTerm
  );

  const { data, isLoading, error } = useGetProductsQuery({
    searchTerm,
    categoryTerm,
  });
  const products: ProductsData[] = data?.products;

  console.log("Products:", data);

  return (
    <Layout>
      <Head>
        <title>Next Redux Template</title>
        <meta name="description" content="This is the demo page" />
      </Head>
      <Container className={""} FULL={false}>
        <Row className="prose max-w-3xl mx-auto bg-indigo-200 py-10 px-16 rounded-xl">
          <h1 className="h1">The Products</h1>
          <ProductSearchBar />
          <RadioButtonCategoryGroup />
        </Row>
        <Row className="prose max-w-3xl bg-gray-100 rounded-xl">
          <div className=" mx-auto">{isLoading && <Spinner />}</div>
          <Products products={products} />
        </Row>
      </Container>
    </Layout>
  );
}

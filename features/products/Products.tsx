import { Box } from "@/components/layouts";
import { ProductsData } from "@/global-interfaces";
import React from "react";

const Products = ({ products }: { products: ProductsData[] }) => {
  return (
    // <Box className="flex flex-wrap">
    <Box className="grid gap-3 grid-auto-fit p-3 border-8">
      {products &&
        products?.map((products) => (
          <article
            key={products.id}
            className="flex max-w-xl flex-col items-start justify-between  shadow-lg p-8 m-5 bg-white"
          >
            <div className="flex items-center gap-x-4 text-xs">
              <time dateTime={"July 20, 2023"} className="text-gray-500">
                {"July 20, 2023"}
              </time>

              <span className="relative z-10 rounded-full bg-indigo-100 px-3 py-1.5 font-medium text-gray-600 hover:bg-gray-100">
                {products.category}
              </span>
            </div>
            <div className="group relative">
              <h3 className="mt-3 text-lg font-semibold leading-6 text-red-600 group-hover:text-gray-600">
                <a href={`Products/${products.id}`}>
                  <span className="absolute inset-0" />
                  {products.title}
                </a>
              </h3>
              <p className="mt-5 line-clamp-3 text-sm leading-6 text-gray-600">
                {products.description}
              </p>
            </div>
            <figure>
              <img
                src={products.thumbnail}
                alt=""
                className="w-full rounded-xl bg-gray-50"
              />
            </figure>
            <div className="relative mt-8 flex items-center gap-x-4">
              <div className="text-sm leading-6">
                <p className="font-semibold text-gray-900">
                  <a>
                    <span className="absolute inset-0" />
                    {products.title}
                  </a>
                </p>
                <span className="relative z-10 rounded-full bg-purple-200 px-3 py-1.5 font-medium text-gray-600 hover:bg-gray-100">
                  {products.brand}
                </span>
              </div>
            </div>
          </article>
        ))}
    </Box>
  );
};

export default Products;

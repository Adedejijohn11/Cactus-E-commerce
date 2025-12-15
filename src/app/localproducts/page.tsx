"use client";

import { useQuery } from "convex/react";
import { api } from "@/convex/_generated/api";
import ProductCard from "@/components/Ui/ProductCard";
import { useQueryWithTimeout } from "@/hooks/useQueryWithTimeout";

const LocalProductsPage = () => {
  const products = useQuery(api.frontend.products.getLocal);
  const { isLoading, isTimedOut } = useQueryWithTimeout(products);

  return (
    <div className="min-h-screen w-full px-5 mt-[90px] py-10">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-3xl font-bold text-greencolor mb-8">Local Products</h1>
        {isLoading ? (
          <div className="text-center py-20">
            <p className="text-gray-600">Loading products...</p>
          </div>
        ) : products === undefined ? (
          <div className="text-center py-20">
            <p className="text-lg text-gray-600 mb-2">No local products available</p>
            <p className="text-sm text-gray-500">Check back soon for new products!</p>
          </div>
        ) : products.length === 0 ? (
          <div className="text-center py-20">
            <p className="text-lg text-gray-600 mb-2">No local products available</p>
            <p className="text-sm text-gray-500">Check back soon for new products!</p>
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {products.map((product) => (
              <ProductCard key={product._id} product={product} />
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default LocalProductsPage;

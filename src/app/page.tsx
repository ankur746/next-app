import FilteredProductList from "@/components/products/FilteredProductList";
import PageWrapper from "@/components/ui/PageWrapper";
import { BASE_PATH, PRODUCTS_ENDPOINTS } from "@/constants/Endpoints";
import { PRODUCTS_SELECTION_QUERY } from "@/constants/products";
import { Suspense } from "react";
const LIMIT = 30;

const fetchInitialProducts = async () => {
  const res = await fetch(
    `${BASE_PATH}/${PRODUCTS_ENDPOINTS}?limit=${LIMIT}&skip=0&${PRODUCTS_SELECTION_QUERY}`,
    {
      cache: "no-store",
    }
  );
  const data = await res.json();
  return data.products;
};

export default async function HomePage() {
  const initialProducts = await fetchInitialProducts();
  return (
    <PageWrapper>
      <Suspense fallback={<div>Loading...</div>}>
        <FilteredProductList initialProducts={initialProducts} />
      </Suspense>
    </PageWrapper>
  );
}

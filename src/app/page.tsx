import FilteredProductList from "@/components/FilteredProductList";
import PageWrapper from "@/components/ui/PageWrapper";
import { Suspense } from "react";

export default function HomePage() {
  return (
    <PageWrapper>
      <Suspense fallback={<div>Loading...</div>}>
        <FilteredProductList />
      </Suspense>
    </PageWrapper>
  );
}

import FilteredProductList from "@/components/FilteredProductList";
import { Suspense } from "react";

export default function HomePage() {
  return (
    <div className="py-10 px-6 max-w-6xl mx-auto">
      <Suspense fallback={<div>Loading...</div>}>
        <FilteredProductList />
      </Suspense>
    </div>
  );
}

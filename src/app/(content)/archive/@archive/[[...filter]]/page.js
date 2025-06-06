import { Suspense } from "react";
import FilteredHeader from "@/component/filteredHeader";
import FilteredNews from "@/component/filteredNews";

export default async function ArchiveFilterPage({ params }) {
  const { filter } = await params;

  let selectedYear;
  let selectedMonth;

  if (filter?.length > 0) {
    selectedYear = filter[0];
  }

  if (filter?.length > 1) {
    selectedMonth = filter[1];
  }

  return (
    <>
      <Suspense fallback={<p>Loading filters...</p>}>
        <FilteredHeader year={selectedYear} month={selectedMonth} />
      </Suspense>
      <Suspense fallback={<p>Loading news...</p>}>
        <FilteredNews year={selectedYear} month={selectedMonth} />
      </Suspense>
    </>
  );
}

"use client";

import { useEffect, useState } from "react";
import Results from "./results/Results";
import Pagination from "./Pagination";
import { useRouter, usePathname } from "next/navigation";
import queryString from "query-string";
import Filters from "./Filters";

const Propertysearch = () => {
  const [properties, setproperties] = useState([]);
  const [totalResults, settotalResults] = useState(0);
  const router = useRouter();
  const pathname = usePathname();

  const pageSize = 3;

  const search = async () => {
    const { page, minPrice, maxPrice, petFriendly, hasParking } =
      queryString.parse(window.location.search);
    const filters = {};

    if (minPrice) {
      filters.minPrice = parseInt(minPrice);
    }
    if (maxPrice) {
      filters.maxPrice = parseInt(maxPrice);
    }

    if (petFriendly === "true") {
      filters.petFriendly = true;
    }
    if (hasParking === "true") {
      filters.hasParking = true;
    }
    const response = await fetch("/api/search", {
      method: "post",
      body: JSON.stringify({
        page: parseInt(page || "1"),
        ...filters,
      }),
    });

    const data = await response.json();
    setproperties(data.properties);
    settotalResults(data.total);
  };

  const handlePageClick = async (pageNumber) => {
    const { petFriendly, hasParking, minPrice, maxPrice } = queryString.parse(
      window.location.search
    );

    router.push(
      `${pathname}?page=${pageNumber}&petFriendly=${
        petFriendly === "true"
      }&hasParking=${
        hasParking === "true"
      }&minPrice=${minPrice}&maxPrice=${maxPrice}`
    );
  };

  useEffect(() => {
    search();
  }, [router.query]);

  const handleSearch = async ({
    petFriendly,
    hasParking,
    minPrice,
    maxPrice,
  }) => {
    router.push(
      `${pathname}?page=1&petFriendly=${!!petFriendly}&hasParking=${!!hasParking}&minPrice=${minPrice}&maxPrice=${maxPrice}`
    );
  };
  return (
    <div>
      <Filters onSearch={handleSearch} />
      <Results properties={properties} />
      <Pagination
        onPageClick={handlePageClick}
        totalPages={Math.ceil(totalResults / pageSize)}
      />
    </div>
  );
};

export default Propertysearch;

"use client";

import { useEffect, useState } from "react";
import Results from "./results/Results";
import Pagination from "./pagination/Pagination";
import { useRouter } from "next/router";
import queryString from "query-string";
import Filters from "./filters/Filters";

const Propertysearch = () => {
  const [properties, setproperties] = useState([]);
  const [totalResults, settotalResults] = useState(0);

  const pageSize = 3;
  const router = useRouter();

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

    await router.push(
      `${router.query.slug.join("/")}?page=${pageNumber}&petFriendly=${
        petFriendly === "true"
      }&hasParking=${
        hasParking === "true"
      }&minPrice=${minPrice}&maxPrice=${maxPrice}`,
      null,
      {
        shallow: true,
      }
    );
    search();
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
    await router.push(
      `${router.query.slug.join(
        "/"
      )}?page=1&petFriendly=${!!petFriendly}&hasParking=${!!hasParking}&minPrice=${minPrice}&maxPrice=${maxPrice}`,
      undefined,
      {
        shallow: true,
      }
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

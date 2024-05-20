import { useEffect, useState } from "react";
import Results from "./results/Results";
import Pagination from "./Pagination/Pagination";
import { useRouter } from "next/router";
import queryString from "query-string";

const Propertysearch = () => {
  const [properties, setproperties] = useState([]);
  const [totalResults, settotalResults] = useState(0);

  const pageSize = 3;
  const router = useRouter();
  const search = async () => {
    const { page } = queryString.parse(window.location.search);
    const response = await fetch("/api/search", {
      method:"post",
      body: JSON.stringify({
        page: parseInt(page || "1"),
      }),
    });
    const data = await response.json();
    console.log("search data: ", data);
    setproperties(data.properties);
    settotalResults(data.total);
  };

  const handlePageClick = async (pageNumber) => {
    await router.push(
      `${router.query.slug.join("/")}?page=${pageNumber}`,
      null,
      {
        shallow: true,
      }
    );
    search();
  };

  useEffect(() => {
    search();
  }, []);

  return (
    <div>
      <Results properties={properties} />
      <Pagination
        onPageClick={handlePageClick}
        totalPages={Math.ceil(totalResults / pageSize)}
      />
    </div>
  );
};

export default Propertysearch;

import { gql } from "@apollo/client";
import client from "client";

const handler = async (req, res) => {
  try {
    const filters = JSON.parse(req.body);
    let hasParkingFilter = ``;
    let petFriendlyFilter = ``;
    let minPriceFilter = ``;
    let maxPriceFilter = ``;
    if (filters.hasParking) {
      hasParkingFilter = `
      {
        key: "has_parking",
        compare: EQUAL_TO,
        value: "1"
      }
      `;
    }
    if (filters.petFriendly) {
      petFriendlyFilter = `
      {
        key: "pet_friendly",
        compare: EQUAL_TO,
        value: "1"
      }
      `;
    }
    if (filters.minPrice) {
      minPriceFilter = `
      {
        key: "price",
        compare: ,GREATER_THAN_OR_EQUAL_TO
        value: "${filters.minPrice}"
        type:NUMERIC
      }
      `;
    }
    if (filters.maxPrice) {
      maxPriceFilter = `
      {
        key: "price",
        compare: ,LESS_THAN_OR_EQUAL_TO
        value: "${filters.maxPrice}"
        type:NUMERIC
      }
      `;
    }
    const { data } = await client.query({
      query: gql`
        query AllPropertiesQuery {
          properties(where: {
             offsetPagination: { size: 3, offset: ${
               ((filters.page || 1) - 1) * 3
             } } 
          metaQuery: {
            relation:AND
            metaArray: [
              ${hasParkingFilter}
              ${petFriendlyFilter}
              ${minPriceFilter}
              ${maxPriceFilter}
            ]}
        }) {
            pageInfo {
              offsetPagination {
                total
              }
            }
            nodes {
              databaseId
              uri
              title
              featuredImage {
                node {
                  uri
                  sourceUrl
                }
              }
              propertyFeatures {
                petFriendly
                hasParking
                bedrooms
                bathrooms
                price
              }
            }
          }
        }
      `,
    });
    return res.status(200).json({
      total: data.properties.pageInfo.offsetPagination.total,
      properties: data.properties.nodes,
    });
  } catch (err) {
    console.error("error", err);
  }
};

export default handler;

import PropertyCard from "./PropertyCard";

const Results = ({ properties }) => {
  return (
    <div className="max-w-5xl mx-auto grid grid-cols-3 gap-5 mb-10">
      {properties.map((property) => (
        <PropertyCard key={property.databaseId} property={property} />
      ))}
    </div>
  );
};

export default Results;

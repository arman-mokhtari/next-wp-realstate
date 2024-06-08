import {
  faBathtub,
  faBed,
  faCar,
  faDog,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Image from "next/image";
import Link from "next/link";
import numeral from "numeral";

const PropertyCard = ({ property }) => {
  const { databaseId, title, uri, propertyFeatures, featuredImage } =
    property || {};

  const { petFriendly, hasParking, price, bedrooms, bathrooms } =
    propertyFeatures || {};

  return (
    <Link
      className="border-2 border-slate-300 p-5 block bg-slate-100 hover:bg-slate-200"
      href={uri}
    >
      <div>
        <Image
          width={300}
          height={200}
          className="object-cover w-[300px] h-[200px]"
          src={featuredImage?.node?.sourceUrl}
          alt=""
        />
      </div>
      <div className="mt-3 text-lg font-bold">
        £{numeral(price).format("0,0")}
      </div>
      <div className="flex justify-between text-sm mt-3">
        <FontAwesomeIcon icon={faBathtub} />
        <span className="pl-2">{bathrooms} bathrooms</span>
      </div>
      <div className="flex justify-between text-sm mt-3">
        <FontAwesomeIcon icon={faBed} />
        <span className="pl-2">{bedrooms} bedrooms</span>
      </div>
      <div>
        {(!!hasParking || !!petFriendly) && (
          <div className="flex justify-between text-sm mt-3">
            <div>
              {!!hasParking && (
                <>
                  <FontAwesomeIcon icon={faCar} /> parking available
                </>
              )}
            </div>
            <div>
              {!!petFriendly && (
                <>
                  <FontAwesomeIcon icon={faDog} /> pet friendly
                </>
              )}
            </div>
          </div>
        )}
      </div>
    </Link>
  );
};

export default PropertyCard;

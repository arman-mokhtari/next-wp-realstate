import Link from "next/link";
import React from "react";

const ButtonLink = ({ destination, label }) => {
  return (
    <Link className="btn" href={destination}>
      {label}
    </Link>
  );
};

export default ButtonLink;

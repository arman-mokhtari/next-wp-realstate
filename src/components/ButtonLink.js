import Link from "next/link";

const ButtonLink = ({ destination, label }) => {
  return (
    <Link className="btn" href={destination}>
      {label}
    </Link>
  );
};

export default ButtonLink;

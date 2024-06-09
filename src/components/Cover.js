import Image from "next/image";

const Cover = ({ children, background }) => {
  return (
    <div className="h-screen text-white bg-slate-800 relative min-h-[400px] flex justify-center items-center">
      <Image
        className="object-cover mix-blend-soft-light"
        alt="cover"
        src={background}
        fill
        sizes="100vw"
      />
      <div className="max-w-5xl z-10">{children}</div>
    </div>
  );
};

export default Cover;

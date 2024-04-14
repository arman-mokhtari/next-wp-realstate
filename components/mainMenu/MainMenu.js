import { FaHouseUser, FaHeart } from "react-icons/fa";

export const MainMenu = (props) => {
  console.log(props);
  return (
    <div className="bg-slate-800 text-white px-5 h-[64px] sticky top-0 z-20 flex">
      <div className="flex py-4 pl-5 text-pink-600">
        <FaHouseUser size={30} />
        <FaHeart size={30} />
      </div>
    </div>
  );
};

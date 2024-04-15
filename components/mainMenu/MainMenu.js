import Link from "next/link";
import { FaHouseUser, FaHeart } from "react-icons/fa";

export const MainMenu = ({
  items,
  callToActionDestination,
  callToActionLabel,
}) => {
  return (
    <div className="bg-slate-800 text-white px-5 h-[64px] sticky top-0 z-20 flex">
      <div className="flex py-4 pl-5 text-pink-600">
        <FaHouseUser size={30} />
        <FaHeart size={30} />
      </div>
      <div className="flex flex-1 justify-end">
        {Array.isArray(items) &&
          items.map((item) => (
            <div
              className="hover:bg-slate-700 cursor-pointer relative group"
              key={item.id}
            >
              <div>
                <Link className="p-5 block" href={item.destination}>
                  {item.label}
                </Link>
                {!!item.subMenuItems?.length && (
                  <div className="group-hover:block hidden bg-slate-800 text-right absolute right-0 top-full -mt-3 ">
                    {item.subMenuItems.map((subMenuItem) => (
                      <Link
                        className="whitespace-nowrap block p-5 hover:bg-slate-700"
                        href={subMenuItem.destination}
                        key={subMenuItem.id}
                      >
                        {subMenuItem.label}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            </div>
          ))}
        <div className="ml-3 my-auto">
          <div className="bg-pink-500 hover:bg-pink-700 inline-block my-2 px-4 py-2 uppercase rounded-md cursor-pointer font-bold text-white">
            <Link href={callToActionDestination}>{callToActionLabel}</Link>
          </div>
        </div>
      </div>
    </div>
  );
};

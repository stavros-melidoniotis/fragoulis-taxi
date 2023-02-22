import Image, { StaticImageData } from "next/image";
import Link from "next/link";
import { MouseEventHandler } from "react";

import arrowIcon from "@/assets/images/arrow.svg";

interface IPopularPlace {
  place: {
    name: string;
    lat: number;
    lng: number;
    type: string;
    showInSection?: boolean;
    mainImage?: StaticImageData;
    url?: string;
  };
  isExpanded: boolean;
  clickHandler: MouseEventHandler;
}

const PopularPlace = ({ place, isExpanded, clickHandler }: IPopularPlace) => {
  return (
    <div
      className={`${
        isExpanded
          ? "h-[500px] md:w-full justify-start"
          : "w-full md:w-20 md:hover:w-28 justify-center after:bg-black/40 hover:cursor-pointer"
      } 
        md:h-[500px] 
        flex 
        items-end 
        p-4 
        rounded-md 
        shadow-lg 
        transition-all
        duration-500
        bg-cover
        bg-center
        after:absolute 
        after:bg-gradient-to-t from-[#0000008d] to-transparent
        after:pointer-events-none 
        after:top-0 
        after:left-0 
        after:w-full 
        after:h-full 
        after:rounded-md
        after:block 
        after:z-10
        relative
      `}
      onClick={clickHandler}
      style={{ backgroundImage: `url(${place.mainImage?.src})` }}
    >
      <div
        className={`z-20 flex flex-col md:flex-row md:items-center w-full ${
          isExpanded ? "justify-between" : "justify-center"
        }`}
      >
        <h2
          className={`${
            isExpanded ? "mb-2 text-2xl" : "md:-rotate-90 py-8 text-xl"
          } flex justify-start pointer-events-none transition-all duration-500 text-white`}
        >
          {place.name}
        </h2>

        <Link
          href={place.url ?? ""}
          target="_blank"
          className={`${
            isExpanded ? "" : "hidden"
          } text-white text-xl flex items-center gap-2`}
        >
          Find out more
          <Image width={40} height={40} src={arrowIcon} alt="arrow" />
        </Link>
      </div>
    </div>
  );
};

export default PopularPlace;

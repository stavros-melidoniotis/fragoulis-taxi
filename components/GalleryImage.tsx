import Image, { StaticImageData } from "next/image";
import { MouseEventHandler } from "react";

interface IGalleryImageProps {
  src: StaticImageData;
  alt: string;
  isMain?: boolean;
  clickHandler?: MouseEventHandler;
  isOpenInMainImage?: boolean;
}

const GalleryImage = ({
  src,
  alt,
  isMain = false,
  clickHandler,
  isOpenInMainImage,
}: IGalleryImageProps) => {
  if (isMain) {
    return (
      <div>
        <Image
          src={src}
          alt={alt}
          className="w-full md:h-[700px] rounded-lg object-contain md:object-cover md:shadow-lg"
        />
      </div>
    );
  }

  return (
    <div className="w-28 h-28">
      <div
        className={`${
          isOpenInMainImage
            ? ""
            : "after:absolute after:pointer-events-none after:top-0 after:w-full after:h-full after:bg-white/60 after:hover:bg-white/30 after:transition-all after:block relative"
        } w-28 h-28`}
      >
        <Image
          src={src}
          alt={alt}
          className="w-28 h-28 hover:cursor-pointer rounded-lg object-cover shadow-lg transition-all"
          onClick={clickHandler}
        />
      </div>
    </div>
  );
};

export default GalleryImage;

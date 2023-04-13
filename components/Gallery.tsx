import { useState } from "react";
import SectionTitle from "./SectionTitle";
import GalleryImage from "./GalleryImage";

import taxi1 from "../assets/images/taxi/taxi-1.jpg";
import taxi2 from "../assets/images/taxi/taxi-2.jpg";
import taxi3 from "../assets/images/taxi/taxi-3.jpg";
import taxi4 from "../assets/images/taxi/taxi-4.jpg";
import taxi5 from "../assets/images/taxi/taxi-5.jpg";
import taxi6 from "../assets/images/taxi/taxi-6.jpg";
import taxi7 from "../assets/images/taxi/taxi-7.jpg";
import taxi8 from "../assets/images/taxi/taxi-8.jpg";
import taxi9 from "../assets/images/taxi/taxi-9.jpg";
import taxi10 from "../assets/images/taxi/taxi-10.jpg";

const Gallery = () => {
  const [mainImage, setMainImage] = useState(taxi1);
  const taxiImages = [
    taxi1,
    taxi2,
    taxi3,
    taxi4,
    taxi5,
    taxi6,
    taxi8,
    taxi7,
    taxi9,
    taxi10,
  ];

  return (
    <section id="gallery" className="my-20 container mx-auto">
      <div className="mb-10">
        <SectionTitle title="Gallery" />
      </div>

      <GalleryImage src={mainImage} alt="main-image" isMain={true} />

      <div className="mt-6 flex items-center gap-4 md:flex-wrap overflow-x-auto">
        {taxiImages.map((image, index) => {
          return (
            <GalleryImage
              key={index}
              src={image}
              alt={`gallery-image-${index}`}
              clickHandler={() => setMainImage(image)}
              isOpenInMainImage={mainImage === image}
            />
          );
        })}
      </div>
    </section>
  );
};

export default Gallery;

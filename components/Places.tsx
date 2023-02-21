import SectionTitle from "./SectionTitle";

import places from "@/data/places";
import PopularPlace from "./PopularPlace";
import { useState } from "react";

const Places = () => {
  const placesToVisit = places.filter((place) => place.showInSection);

  const [expandedPlace, setExpanedPlace] = useState(placesToVisit[0]);

  return (
    <section id="places" className="container mx-auto my-20">
      <SectionTitle title="Places worth visiting" />

      <div className="flex flex-col md:flex-row gap-4 md:gap-1">
        {placesToVisit.map((place, index) => {
          return (
            <PopularPlace
              key={index}
              place={place}
              isExpanded={expandedPlace === place}
              clickHandler={() => {
                setExpanedPlace(place);
              }}
            />
          );
        })}
      </div>
    </section>
  );
};

export default Places;

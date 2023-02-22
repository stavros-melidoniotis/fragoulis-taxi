import dynamic from "next/dynamic";

const MapWithNoSSR = dynamic(() => import("./Map"), {
  ssr: false,
  loading: () => <p>A map is loading</p>,
});

const Hero = () => {
  return (
    <section
      id="hero"
      className="container mx-auto min-h-[90vh] flex flex-col lg:flex-row py-10"
    >
      <div className="w-full lg:w-1/2 flex flex-col justify-center py-8 gap-4">
        <span className="text-6xl lg:text-8xl font-bold">I&apos;ll take you places</span>
        <span className="text-5xl lg:text-7xl font-semibold text-dark-gray">wherever,</span>
        <span className="text-5xl lg:text-7xl font-semibold text-dark-gray">whenever.</span>

        <p className="text-xl lg:text-2xl font-light mt-6">
          Safe, affordable rides to every destination.
        </p>
      </div>

      <div className="w-full lg:w-1/2 h-[500px] lg:h-auto">
        <MapWithNoSSR />
      </div>
    </section>
  );
};

export default Hero;

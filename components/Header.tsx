import Image from "next/image";
import headerImage from "../assets/images/fragoulis.jpg";

const Header = () => {
  return (
    <header className="flex items-center justify-between py-8 container mx-auto">
      <div className="flex items-center gap-5">
        <Image
          width={80}
          height={80}
          src={headerImage}
          alt="Giannis Fragoulis"
          className="rounded-full"
        />

        <h1 className="text-xl">
          Giannis <br /> Fragoulis
        </h1>
      </div>

      <nav>
        <ul className="flex gap-4 text-xl">
          <li>Home</li>
          <li>Gallery</li>
          <li>Places</li>
          <li>Pricing</li>
          <li>Contact</li>
        </ul>
      </nav>

      <button className="text-xl bg-black text-light-gray rounded-lg py-4 px-10">
        Book a ride
      </button>
    </header>
  );
};

export default Header;

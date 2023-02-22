import Image from "next/image";
import Link from "next/link";
import headerImage from "../assets/images/fragoulis.jpg";
import NavMenu from "./NavMenu";

const Header = () => {
  return (
    <header className="flex items-center justify-between px-8 md:px-0 py-8 container mx-auto">
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

      <div>
        <NavMenu />
      </div>
    </header>
  );
};

export default Header;

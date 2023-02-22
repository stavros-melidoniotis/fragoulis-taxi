import useMediaQuery from "@/hooks/useMediaQuery";
import Link from "next/link";
import { useEffect, useState } from "react";
import { HiOutlineMenu } from "react-icons/hi";
import { CgClose } from "react-icons/cg";

const NavMenu = () => {
  const isMobile = useMediaQuery("(max-width: 1024px)");
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const body = document.body;

    if (menuOpen && isMobile) {
      body.style.overflowY = "hidden";
    }

    return () => {
      body.style.overflowY = "auto";
    };
  }, [menuOpen, isMobile]);

  const navMenuContent = (
    <div className="flex flex-col lg:flex-row items-center justify-center gap-8 fixed top-0 left-0 bg-white lg:bg-transparent z-[9999] h-full w-full lg:relative">
      <button
        className="absolute top-4 right-4 text-5xl lg:hidden"
        onClick={() => setMenuOpen(false)}
      >
        <CgClose />
      </button>

      <nav>
        <ul className="flex flex-col lg:flex-row items-center gap-4 text-xl">
          <li>
            <Link href="#" scroll={false} onClick={() => setMenuOpen(false)}>
              Home
            </Link>
          </li>
          <li>
            <Link
              href="#places"
              scroll={false}
              onClick={() => setMenuOpen(false)}
            >
              Places
            </Link>
          </li>
          <li>
            <Link
              href="#gallery"
              scroll={false}
              onClick={() => setMenuOpen(false)}
            >
              Gallery
            </Link>
          </li>
          <li>
            <Link
              href="#testimonials"
              scroll={false}
              onClick={() => setMenuOpen(false)}
            >
              Testimonials
            </Link>
          </li>
        </ul>
      </nav>

      <Link href="#contact" scroll={false} onClick={() => setMenuOpen(false)}>
        <button className="text-xl bg-black text-light-gray rounded-lg py-4 px-10">
          Book a ride
        </button>
      </Link>
    </div>
  );

  return (
    <>
      <button
        className="lg:hidden text-5xl"
        onClick={() => setMenuOpen(!menuOpen)}
      >
        <HiOutlineMenu />
      </button>

      {isMobile ? (menuOpen ? navMenuContent : null) : navMenuContent}
    </>
  );
};

export default NavMenu;

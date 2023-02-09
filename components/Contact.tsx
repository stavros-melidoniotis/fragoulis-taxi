import SectionTitle from "./SectionTitle";
import { FaLocationArrow } from "react-icons/fa";
import { HiOutlineMail } from "react-icons/hi";
import { BsTelephone } from "react-icons/bs";
import viberIcon from "@/assets/images/viber.svg";
import whatsappIcon from "@/assets/images/whatsapp.svg";

import ContactBox from "./ContactBox";
import Link from "next/link";
import Image from "next/image";

const Contact = () => {
  return (
    <section id="contact" className="container mx-auto my-10">
      <div className="">
        <SectionTitle title="Let's get in touch!" />
      </div>

      <div className="flex justify-center gap-8 pt-8">
        <ContactBox
          icon={<BsTelephone />}
          link={<Link href="tel:+306944521800">+30 6944521800</Link>}
        />

        <ContactBox
          icon={<HiOutlineMail />}
          link={
            <Link href="mailto:fragoulis_giannis@hotmail.com">
              fragoulis_giannis@hotmail.com
            </Link>
          }
        />

        <ContactBox
          icon={<FaLocationArrow />}
          link={
            <Link href="https://goo.gl/maps/6MNLrr75KxgDfqyc7" target="_blank">
              Timbaki, 70200 Crete
            </Link>
          }
        />
      </div>

      <div className="flex items-center justify-center gap-3 mt-5">
        <p className="text-xl">Also on</p>

        <Link href="viber://chat/?number=%2B306944521800">
          <Image width={30} height={30} src={viberIcon} alt="Viber" />
        </Link>

        <Link href="https://wa.me/306944521800" target="_blank">
          <Image width={40} height={40} src={whatsappIcon} alt="WhatsApp" />
        </Link>
      </div>
    </section>
  );
};

export default Contact;

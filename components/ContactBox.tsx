import { ReactElement } from "react";

interface IContactBoxProps {
  icon: ReactElement;
  link: ReactElement;
}

const ContactBox = ({ icon, link }: IContactBoxProps) => {
  return (
    <div className="rounded-lg p-6 text-xl flex flex-col items-center gap-8">
      <div className="bg-black text-light-gray w-20 h-20 rounded-full flex items-center justify-center text-3xl">
        {icon}
      </div>

      {link}
    </div>
  );
};

export default ContactBox;

import React from "react";
import { Instagram, Linkedin, Twitter } from "lucide-react";
import Image from "next/image";
import PropTypes from "prop-types";

const ContactsList = [
  {
    img: "/AboutContacts/Contact1.png",
    name: "Tom Cruise",
    position: "Founder & Chairman",
  },
  {
    img: "/AboutContacts/Contact2.png",
    name: "Emma Watson",
    position: "Managing Director",
  },
  {
    img: "/AboutContacts/Contact3.png",
    name: "Will Smith",
    position: "Product Designer",
  },
  {
    img: "/AboutContacts/Contact4.png",
    name: "Thai VG",
    position: "CEO",
  },
  {
    img: "/AboutContacts/Contact5.png",
    name: "Bo Left Hand",
    position: "CTO",
  },
  {
    img: "/AboutContacts/Contact6.png",
    name: "HIEUTHUBAR",
    position: "Eating&Drinking",
  },
  {
    img: "/AboutContacts/Contact7.png",
    name: "YUHAH202",
    position: "Staff",
  },
];
function AboutContacts({ id }) {
  return (
    <div className="cursor-pointer">
      <div className="mb-8 max-h-[26.875rem]">
        <Image
          src={ContactsList[id - 1].img}
          alt="contacts"
          width={370}
          height={430}
          style={{ width: 370, height: 430 }}
          priority
        />
      </div>
      <div className="text-[2rem] font-semibold mb-2">
        {ContactsList[id - 1].name}
      </div>
      <div className="mb-4">{ContactsList[id - 1].position}</div>
      <div className="flex gap-x-4">
        <Twitter />
        <Instagram />
        <Linkedin />
      </div>
    </div>
  );
}

AboutContacts.propTypes = {
  id: PropTypes.number.isRequired,
};

export default AboutContacts;

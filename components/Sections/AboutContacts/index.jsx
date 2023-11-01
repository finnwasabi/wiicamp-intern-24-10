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
];
function AboutContacts({ id }) {
  return (
    <div>
      <div className="mb-8">
        <Image
          src={ContactsList[id - 1].img}
          alt="contacts"
          width={370}
          height={430}
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

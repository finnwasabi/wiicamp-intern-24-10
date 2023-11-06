import React from "react";
import Image from "next/image";
import PropTypes from "prop-types";

const TopSectionImgList = [
  {
    id: 1,
    path: "/TopSectionImg/TopSection1.jpg",
  },
  {
    id: 2,
    path: "/TopSectionImg/TopSection2.jpg",
  },
  {
    id: 3,
    path: "/TopSectionImg/TopSection3.jpg",
  },
  {
    id: 4,
    path: "/TopSectionImg/TopSection4.jpg",
  },
  {
    id: 5,
    path: "/TopSectionImg/TopSection5.jpg",
  },
];

function TopSectionImg({ id }) {
  return (
    <div className=" bg-black">
      <Image
        src={TopSectionImgList[id - 1].path}
        width={892}
        height={344}
        alt="Picture of the author"
        priority
      />
    </div>
  );
}

TopSectionImg.propTypes = {
  id: PropTypes.number.isRequired,
};

export default TopSectionImg;

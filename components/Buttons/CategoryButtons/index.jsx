import React from "react";
import clsx from "clsx";
import { Mouse, PaintBucket, Wrench } from "lucide-react";
import PropTypes from "prop-types";

import s from "./CategoryButtons.module.scss";

const CategoryButtonsList = [
  {
    illu: (
      <svg
        width="56"
        height="56"
        viewBox="0 0 56 56"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <g clipPath="url(#clip0_879_868)">
          <path
            d="M38.9375 6.125H17.0625C15.5523 6.125 14.3281 7.34922 14.3281 8.85938V47.1406C14.3281 48.6508 15.5523 49.875 17.0625 49.875H38.9375C40.4477 49.875 41.6719 48.6508 41.6719 47.1406V8.85938C41.6719 7.34922 40.4477 6.125 38.9375 6.125Z"
            stroke="black"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M25.6667 7H31.1354"
            stroke="black"
            strokeWidth="3"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M28 44.0052V44.0305"
            stroke="black"
            strokeWidth="2.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <line
            x1="15.1667"
            y1="39.8334"
            x2="40.8333"
            y2="39.8334"
            stroke="black"
            strokeWidth="2"
          />
        </g>
        <defs>
          <clipPath id="clip0_879_868">
            <rect width="56" height="56" fill="white" />
          </clipPath>
        </defs>
      </svg>
    ),
    name: "Phones",
  },
  {
    illu: (
      <svg
        width="56"
        height="56"
        viewBox="0 0 56 56"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <g clipPath="url(#clip0_138_1641)">
          <path
            d="M46.6667 9.33334H9.33333C8.04467 9.33334 7 10.378 7 11.6667V35C7 36.2887 8.04467 37.3333 9.33333 37.3333H46.6667C47.9553 37.3333 49 36.2887 49 35V11.6667C49 10.378 47.9553 9.33334 46.6667 9.33334Z"
            stroke="black"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M16.3334 46.6667H39.6667"
            stroke="black"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M21 37.3333V46.6667"
            stroke="black"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M35 37.3333V46.6667"
            stroke="black"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M8 32H48"
            stroke="black"
            strokeWidth="2"
            strokeLinecap="round"
          />
        </g>
        <defs>
          <clipPath id="clip0_138_1641">
            <rect width="56" height="56" fill="white" />
          </clipPath>
        </defs>
      </svg>
    ),
    name: "Computers",
  },
  {
    illu: (
      <svg
        width="56"
        height="56"
        viewBox="0 0 56 56"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <g clipPath="url(#clip0_138_1655)">
          <path
            d="M35 14H21C17.134 14 14 17.134 14 21V35C14 38.866 17.134 42 21 42H35C38.866 42 42 38.866 42 35V21C42 17.134 38.866 14 35 14Z"
            stroke="black"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M21 42V49H35V42"
            stroke="black"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M21 14V7H35V14"
            stroke="black"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <line
            x1="24"
            y1="23"
            x2="24"
            y2="34"
            stroke="black"
            strokeWidth="2"
            strokeLinecap="round"
          />
          <line
            x1="28"
            y1="28"
            x2="28"
            y2="34"
            stroke="black"
            strokeWidth="2"
            strokeLinecap="round"
          />
          <line
            x1="32"
            y1="26"
            x2="32"
            y2="34"
            stroke="black"
            strokeWidth="2"
            strokeLinecap="round"
          />
        </g>
        <defs>
          <clipPath id="clip0_138_1655">
            <rect width="56" height="56" fill="white" />
          </clipPath>
        </defs>
      </svg>
    ),
    name: "SmartWatch",
  },
  {
    illu: (
      <svg
        width="56"
        height="56"
        viewBox="0 0 56 56"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <g clipPath="url(#clip0_138_1667)">
          <path
            d="M11.6667 16.3333H14C15.2377 16.3333 16.4247 15.8417 17.2998 14.9665C18.175 14.0913 18.6667 12.9044 18.6667 11.6667C18.6667 11.0478 18.9125 10.4543 19.3501 10.0168C19.7877 9.57918 20.3812 9.33334 21 9.33334H35C35.6188 9.33334 36.2123 9.57918 36.6499 10.0168C37.0875 10.4543 37.3333 11.0478 37.3333 11.6667C37.3333 12.9044 37.825 14.0913 38.7002 14.9665C39.5753 15.8417 40.7623 16.3333 42 16.3333H44.3333C45.571 16.3333 46.758 16.825 47.6332 17.7002C48.5083 18.5753 49 19.7623 49 21V42C49 43.2377 48.5083 44.4247 47.6332 45.2998C46.758 46.175 45.571 46.6667 44.3333 46.6667H11.6667C10.429 46.6667 9.242 46.175 8.36683 45.2998C7.49167 44.4247 7 43.2377 7 42V21C7 19.7623 7.49167 18.5753 8.36683 17.7002C9.242 16.825 10.429 16.3333 11.6667 16.3333"
            stroke="black"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M28 37.3333C31.866 37.3333 35 34.1993 35 30.3333C35 26.4674 31.866 23.3333 28 23.3333C24.134 23.3333 21 26.4674 21 30.3333C21 34.1993 24.134 37.3333 28 37.3333Z"
            stroke="black"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </g>
        <defs>
          <clipPath id="clip0_138_1667">
            <rect width="56" height="56" fill="white" />
          </clipPath>
        </defs>
      </svg>
    ),
    name: "Camera",
  },
  {
    illu: (
      <svg
        width="56"
        height="56"
        viewBox="0 0 56 56"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <g clipPath="url(#clip0_138_1699)">
          <path
            d="M16.3334 30.3333H14C11.4227 30.3333 9.33337 32.4227 9.33337 35V42C9.33337 44.5773 11.4227 46.6666 14 46.6666H16.3334C18.9107 46.6666 21 44.5773 21 42V35C21 32.4227 18.9107 30.3333 16.3334 30.3333Z"
            stroke="black"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M42 30.3333H39.6667C37.0893 30.3333 35 32.4227 35 35V42C35 44.5773 37.0893 46.6666 39.6667 46.6666H42C44.5773 46.6666 46.6667 44.5773 46.6667 42V35C46.6667 32.4227 44.5773 30.3333 42 30.3333Z"
            stroke="black"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M9.33337 35V28C9.33337 23.0493 11.3 18.3013 14.8007 14.8007C18.3014 11.3 23.0493 9.33331 28 9.33331C32.9507 9.33331 37.6987 11.3 41.1994 14.8007C44.7 18.3013 46.6667 23.0493 46.6667 28V35"
            stroke="black"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </g>
        <defs>
          <clipPath id="clip0_138_1699">
            <rect width="56" height="56" fill="white" />
          </clipPath>
        </defs>
      </svg>
    ),
    name: "HeadPhones",
  },
  {
    illu: (
      <svg
        width="56"
        height="56"
        viewBox="0 0 56 56"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <g clipPath="url(#clip0_138_1677)">
          <path
            d="M46.6666 14H9.33329C6.75596 14 4.66663 16.0893 4.66663 18.6667V37.3333C4.66663 39.9107 6.75596 42 9.33329 42H46.6666C49.244 42 51.3333 39.9107 51.3333 37.3333V18.6667C51.3333 16.0893 49.244 14 46.6666 14Z"
            stroke="black"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M14 28H23.3333M18.6667 23.3333V32.6666"
            stroke="black"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M35 25.6667V25.6909"
            stroke="black"
            strokeWidth="3"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M42 30.3333V30.3574"
            stroke="black"
            strokeWidth="3"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </g>
        <defs>
          <clipPath id="clip0_138_1677">
            <rect width="56" height="56" fill="white" />
          </clipPath>
        </defs>
      </svg>
    ),
    name: "Gaming",
  },
  {
    illu: <PaintBucket size={48} absoluteStrokeWidth />,
    name: "Paint",
  },
  {
    illu: <Wrench size={56} absoluteStrokeWidth />,
    name: "Tools",
  },
  {
    illu: <Mouse size={56} absoluteStrokeWidth />,
    name: "Mouses",
  },
];
function CategoryButtons({ id }) {
  return (
    <div
      className={clsx(
        s.CategoryItem,
        "w-[170px] h-[145px] border-black border-opacity-30 border-2 rounded flex items-center justify-center",
      )}
    >
      <div className="block py-6">
        <div className={clsx(s.svg, "flex justify-center")}>
          {CategoryButtonsList[id - 1].illu}
        </div>
        {CategoryButtonsList[id - 1].name}
      </div>
    </div>
  );
}

CategoryButtons.propTypes = {
  id: PropTypes.number.isRequired,
};

export default CategoryButtons;

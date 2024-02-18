import React from "react";
import { Link } from "react-scroll";
import { CgMouse } from "react-icons/cg";
import { IoArrowDownOutline } from "react-icons/io5";

const ScrollDown = ({ targetSectionId }) => {
  return (
    <div className="home__scroll">
      <Link
        to={targetSectionId}
        spy={true}
        smooth={true}
        offset={-100}
        duration={500}
        className="home__scroll-button button--flex flex flex-row p-x-2 items-center transition hover:translate-y-1 cursor-pointer"
      >
        <CgMouse className="text-2xl mr-[8px] text-green-700" />
        <span className="home__scroll-name mr-[8px] flex flex-row text-sm font-semibold">
          Scroll Down
        </span>
        <IoArrowDownOutline className="text-base mr-[8px] text-green-700" />
      </Link>
    </div>
  );
};

export default ScrollDown;

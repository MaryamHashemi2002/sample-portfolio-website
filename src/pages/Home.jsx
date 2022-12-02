import React, { useEffect, useState } from "react";

import { useStateContext } from "../contexts/ContextProvider";
import { useRef } from "react";
import { socialMedia } from "../data/dummy";
import { Link, NavLink } from "react-router-dom";

const Home = () => {
  const [localMousePos, setLocalMousePos] = useState({});
  const bgMove = useRef();

  const handleMouseMove = (event) => {
    const moveStretch = 25;
    const width = moveStretch / window.innerWidth;
    const height = moveStretch / window.innerHeight;

    const localX = event.clientX - width / 2;
    const localY = event.clientY - height / 2;

    const newvalueX = width * localX * -1 - 25;
    const newvalueY = height * localY * -1 - 50;

    bgMove.current.style.backgroundPositionX = ` ${newvalueX}px`;
    bgMove.current.style.backgroundPositionY = `${newvalueY}px`;

    setLocalMousePos({
      x: newvalueX,
      y: newvalueY,
    });
  };

  useEffect(() => {
    window.addEventListener("mousemove", handleMouseMove);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);
  return (
    <div
      ref={bgMove}
      onMouseMove={handleMouseMove}
      className="bg-sky bg-slate-800 h-110 bg-cover w-screen top-0 fixed text-white "
    >
      <div className="cursor-pointer lg:mr-24 mr-0">
        <div className="flex flex-wrap lg:flex-nowrap justify-between py-14 px-11 ">
          <span className=" text-xl">Blaise Posmyou</span>
          <div
            className="flex gap-5 text-xl white
               hover:shadow
                mt-2
                text-white"
          >
            {socialMedia.map((item) => (
              <a href={item.address} key={item.key}>
                {item.icon}
              </a>
            ))}
          </div>
        </div>
        <div className="flex flex-col ml-28">
          <h1 className="text-9xl font-bold  underline-offset-8 before:content-[_hi]">Hello</h1>
          <p className="text-xl">I specialize in responsive web design. , secure, fully personalized, with simple and intuitive cms .</p>
        </div>
        <div className="footer"></div>

        <div></div>
        <div></div>
        <div></div>
      </div>
    </div>
  );
};

export default Home;

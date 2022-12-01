import React, { useEffect, useState } from "react";
import { FaFacebookF } from "react-icons/fa";
import { AiFillLinkedin } from "react-icons/ai";
import { FaTelegramPlane } from "react-icons/fa";
import { BsMedium } from "react-icons/bs";
import { useStateContext } from "../contexts/ContextProvider";
import { useRef } from "react";

const Home = () => {
  const [localMousePos, setLocalMousePos] = useState({});
  const bgMove = useRef();
  
  
  const handleMouseMove = (event) => {
    const moveStretch = 25;
    const width = moveStretch / (window.innerWidth);
    const height = moveStretch / (window.innerHeight);


    const localX = event.clientX - (width/ 2);
    const localY = event.clientY - (height/ 2);

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
      className="dark:bg-sky bg-slate-800 h-110 bg-cover w-screen top-0 fixed dark:text-white "
    >
      <div className="flex flex-wrap lg:flex-nowrap justify-center pt-9 ">
        <span>Blaise Posmyou</span>
        <div>
        </div>
        <div>
          <a
            className="text-xl border white p-3
               hover:shadow
                mt-4
                text-white"
          >
            <FaFacebookF />
          </a>
          <a></a>
          <a></a>
          <a></a>
        </div>
      </div>
      <div className="content"></div>
      <div className="footer">
        <div></div>
        <div></div>
        <div></div>
      </div>
    </div>
  );
};

export default Home;

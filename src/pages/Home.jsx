import React, { useEffect, useState } from "react";

import { useStateContext } from "../contexts/ContextProvider";
import { useRef } from "react";
import { socialMedia } from "../data/dummy";
import { Link, NavLink } from "react-router-dom";

const Home = () => {
  const { animatePage,localMousePos, setLocalMousePos} = useStateContext(); 
  const bgMove = useRef();

  const handleMouseMove = (event) => {
    const moveStretch = 10;
    const width = moveStretch / window.innerWidth;
    const height = moveStretch / window.innerHeight;

    const localX = event.clientX - width / 2;
    const localY = event.clientY - height / 2;

    const newvalueX = width * localX * -1 - 25;
    const newvalueY = height * localY * -1 - 50;

    bgMove.current.style.backgroundPositionX = ` ${newvalueX}px`;
    bgMove.current.style.backgroundPositionY = `${newvalueY / 5}px`;

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
      <div className="relative mr-24">
        <div className="flex flex-wrap lg:flex-nowrap justify-between py-14 px-11 duration-500 transform transition-all translate-y-0 ease-out"
          data-replace='{ "translate-y-0": "translate-y-24" }'
        >
          <span className="text-md">Alireza Janbaz</span>
          <div
            className="gap-5 text-xl white
               hover:shadow
                mt-2
                md:flex
                hidden
                text-white
                before:content-[''] before:border-01 before:bg-light-gray before:rotate-90 before:block before:mr-4 before:opacity-50"
          >
            {socialMedia.map((item) => (
              <a
                className="cursor-pointer transition hover:rotate-45 delay-300 ease-in-out"
                href={item.address}
                key={item.key}
              >
                {item.icon}
              </a>
            ))}
          </div>
        </div>
        <div className="flex flex-col m-28">
          <h1 className="text-9xl font-bold tracking-widest  after:content-[''] after:border-05 after:bg-white after:rotate-180 after:w-96 after:block after:m-6">
            Hello
          </h1>

          <p className="text-xl">
            I specialize in responsive web design. , secure, fully personalized,
            with simple and intuitive cms .
          </p>
        </div>
        <div className="flex justify-between py-9 px-11">
          <div>
            <h2>E-mail :</h2>
            <span>b.posmyouck@gmail.com</span>
          </div>
          <div>
            <h2>Téléphone :</h2>
            <span>(+33).6.77.67.67.27</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;

import React from "react";

import gambar from "../../assets/sungai.jpg";
import { Gambar } from "./Gambar";

const dataGambar = [
  {
    id: 1,
    img: gambar,
    desc: "River on China",
  },
  {
    id: 2,
    img: gambar,
    desc: "River on China",
  },
];

export const Content2 = () => {
  const listGambar = dataGambar.map((data) => {
    return <Gambar key={data.id} img={data.img} desc={data.desc} />;
  });

  return (
    <section className="w-full h-screen relative mt-20">
      <div className="flex flex-col justify-between h-full z-10 absolute inset-0">
        <div className="w-full h-20 bg-gradient-to-b from-primary" />
        <div className="w-full h-20 bg-gradient-to-t from-primary" />
      </div>
      <div className=" w-full h-full text-abu px-16 relative">
        <h1 className="text-xl font-Fabulous absolute top-5 z-20">
          Photografi
        </h1>
        <div className="w-full h-full flex justify-between">
          <aside className="w-4/12 flex flex-col h-full justify-center gap-8 text-sm font-Runs">
            <p>
              Je fais de la photo depuis environ 4 ans : paysages, portraits,
              couverture d'événements, pack shots, food... de tout ! Je shoote
              sur un Sony A7 III avec un objectif Zeiss 24-70mm f/4.0.
            </p>
            <p>
              #Adobe Photoshop <br /> #Adobe Lightroom <br /> #Adobe Camera Raw
            </p>
          </aside>
          <aside className="w-7/12 h-full flex justify-between">
            <div className="w-[49%] h-full flex-col overflow-hidden">
              {dataGambar.map((data) => {
                return <Gambar key={data.id} img={data.img} desc={data.desc} />;
              })}
            </div>
            <div className="w-[49%] h-full flex-col overflow-hidden">
              {dataGambar.map((data) => {
                return <Gambar key={data.id} img={data.img} desc={data.desc} />;
              })}
            </div>
          </aside>
        </div>
      </div>
    </section>
  );
};

import React from "react";

import gambar from "../../assets/sungai.jpg";

export const Content4 = () => {
  return (
    <section className="w-full h-screen relative mt-20">
      <div className="flex flex-col justify-between h-full z-10 absolute inset-0">
        <div className="w-full h-20 bg-gradient-to-b from-primary" />
        <div className="w-full h-20 bg-gradient-to-t from-primary" />
      </div>
      <div className=" w-full h-full text-abu px-16 relative">
        <h1 className="text-xl font-Fabulous absolute top-5 z-20">
          Web Design
        </h1>
        <div className="w-full h-full flex justify-between">
          <aside className="w-4/12 flex flex-col h-full justify-center gap-8 text-sm font-Runs">
            <p>
              Et voici une mini-version responsive de Google Chrome mettant en
              avant deux header de sites que j'ai conçus sur WordPress. Mon site
              a été développé sur Webflow, meilleur outil web design (et je ne
              suis même pas #sponsored) !
            </p>
            <p>
              #HTML/CSS <br /> #ReactJS <br /> #TailwindCSS
            </p>
          </aside>
          <aside className="w-7/12 h-full flex justify-between pt-16">
            <img src={gambar} alt="" className="w-full h-full rounded-xl"/>
          </aside>
        </div>
      </div>
    </section>
  );
};

import React from "react";
import gambar from "../../assets/sungai.jpg";

export const Portofolio = () => {
  return (
    <section className="w-full h-[300vh] relative mt-20 flex flex-col justify-between items-center py-48 ">
      <h1 className="text-xl font-Fabulous text-abu">Bon, et maintenant ?</h1>
      <p className="w-4/12 text-sm font-Runs text-abu">
        Maintenant, je vous laisse découvrir une de mes expériences
        professionnelles et voir par vous-même ce que je sais faire sur des
        projets concrets !
      </p>
      <div className="w-7/12 h-[38%] relative grid place-items-center overflow-auto">
        <div className="absolute inset-0 flex flex-col items-center w-4/12 h-24 left-[33%] top-[37%] text-abu gap-y-4 z-30">
          <h2 className="text-lg font-Fabulous font-bold tracking-wider">
            Pngky
          </h2>
          <p className="text-sm font-Runs">signature and happy</p>
        </div>
        <div className="grid grid-cols-12 grid-rows-6 gap-4 w-[100%] h-[100%]">
          <div className="flex bg-red-400 col-span-3 row-span-3">
            <img src={gambar} alt="" className="object-cover" />
          </div>
          <div className="flex bg-red-400 col-span-3 row-span-2">
            {" "}
            <img src={gambar} alt="" className="object-cover" />
          </div>
          <div className="flex bg-red-400 col-span-3 row-span-4">
            {" "}
            <img src={gambar} alt="" className="object-cover" />
          </div>
          <div className="flex col-span-3 row-span-2">
            <h3 className="text-justify font-bold text-sm text-abu">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum
              tempore labore molestias cum vitae quia vero dolor voluptate error
              ab doloremque rerum libe
            </h3>
          </div>
          <div className="flex bg-red-400 col-span-3 row-span-2">
            <img src={gambar} alt="" className="object-cover" />
          </div>
          <div className="flex bg-red-400 col-span-3 row-span-2">
            {" "}
            <img src={gambar} alt="" className="object-cover" />
          </div>
          <div className="flex bg-red-400 col-span-3 row-span-3">
            {" "}
            <img src={gambar} alt="" className="object-cover" />
          </div>
          <div className="flex col-span-6 row-span-2 overflow-hidden box-content">
            <h3 className="text-justify font-bold text-sm text-abu">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum
              tempore labore molestias cum vitae quia vero dolor voluptate error
              ab doloremque rerum libero numquam odio, est alias obcaecati
              soluta magni tenetur saepe quasi explicabo rem? Totam,
              dignissimos. Impedit eligendi dolore iusto culpa obcaecati
              accusamus illo, ad et praesentium ducimus iste.
            </h3>
          </div>
          <div className="flex bg-red-400 col-span-3 row-span-2">
            {" "}
            <img src={gambar} alt="" className="object-cover" />
          </div>
        </div>
      </div>
      <p className="w-4/12 text-sm font-Runs text-abu">
        Pour résumer, je suis à la recherche d'un nouveau projet où je pourrais
        intervenir de manière polyvalente sur plein d'aspects différents :
        contenus, réseaux sociaux, communication, design, et plus encore !{" "}
        <br /> <br /> Vous souhaitez travailler avec quelqu'un de passionné,
        d'expérimenté, de polyvalent, en apprentissage constant et qui connaît
        internet comme sa poche ..? <br /> <br /> 👋 Alors voici une petite
        synthèse en format A4 :
      </p>
    </section>
  );
};

import React from "react";

const kelass = "w-full h-[450px] flex mb-7 relative items-center";
export const Gambar = (props) => {
  return (
    <div className={kelass}>
      <img
        src={props.img}
        alt=""
        className="w-11/12 h-full object-cover object-center rounded-xl"
      />
      <p className="absolute rotate-90 -right-12 text-sm font-Runs">{props.desc}</p>
    </div>
  );
};

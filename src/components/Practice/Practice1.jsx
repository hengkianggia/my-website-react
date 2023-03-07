import React, { Fragment, useRef, useState } from "react";
import { delay, motion } from "framer-motion";

const Practice1 = () => {
  const container = {
    initial: { opacity: 0 },
    animate: {
      opacity: 1,
      transition: {
        duration: 0.5,
        staggerChildren: 1.3,
        staggerDirection: -1,
      },
    },
  };

  const variants = {
    initial: { opacity: 0, x: "-100vw" },
    animate: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 1,
        // ease: [0.17, 0.67, 0.83, 0.67],
        times: [0, 0.8, 0.8, 1],
        type: "spring",
        // type: "tween",
        // damping: 70,
        // mass: 1.2,
        // stiffness: 300,
        // velocity:4,
        restSpeed: 1,
        // stiffness: 50,
        // repeat: Infinity,
        repeatType: "reverse",
        repeatDelay: 1,
      },
    },
  };

  const [isOn, setIsOn] = useState(false);

  const toggleSwitch = () => setIsOn(!isOn);

  const spring = {
    type: "spring",
    stiffness: 800,
    damping: 40,
    x:"100px"
  };

  return (
    <Fragment>
      <motion.div
        variants={container}
        initial="initial"
        animate="animate"
        className="w-full space-y-5"
      >
        <motion.div
          variants={variants}
          className="w-full h-44 text-abu grid place-items-center"
        >
          <h1 className="text-xl font-Fabulous">MAKMUKIPER</h1>
        </motion.div>
        <motion.div
          variants={variants}
          className="w-full h-44 text-abu grid place-items-center"
        >
          <h1 className="text-xl font-Fabulous">MAKMUKIPER</h1>
        </motion.div>
        <motion.div
          variants={variants}
          className="w-full h-44 text-abu grid place-items-center"
        >
          <h1 className="text-xl font-Fabulous">MAKMUKIPER</h1>
        </motion.div>
      </motion.div>

      <div className="w-full bg-orange-400 h-[100vh] flex flex-col items-center justify-center gap-y-5">
        <motion.div
          data-isOn={isOn}
          onClick={toggleSwitch}
          className={
            !isOn
              ? "w-96 h-40 bg-red-400 rounded-full flex justify-start items-center px-5"
              : "w-96 h-40 bg-red-400 rounded-full flex justify-end items-center px-5"
          }
        >
          <motion.div
            layout
            transition={spring}
            className="w-28 h-28 rounded-full bg-white"
          ></motion.div>
        </motion.div>
        {/* <button className="px-10 py-4 text-md font-bold bg-white rounded-lg">click</button> */}
      </div>
    </Fragment>
  );
};

export default Practice1;

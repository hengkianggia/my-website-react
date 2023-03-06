import React from "react";
import { motion } from "framer-motion";

import sungai from "../../assets/sungai.jpg";

export const Header = () => {
  return (
    <header className="grid w-full h-screen place-items-center relative bg-primary">
      <motion.img
        src={sungai}
        alt=""
        className="w-72 h-96 object-cover object-center rounded-lg"
        whileHover={{ scale: 1.1 }}
        initial={{ y: "-400px" }}
        animate={{ y: 0 }}
      />
      <motion.h1
        className="text-xl font-semibold text-center text-abu font-Fabulous tracking-wider z-10 absolute"
        initial={{ y: "-400px" }}
        animate={{ y: 0 }}
        transition={{ delay: .1 }}
      >
        Frontend Developer <br /> Indonesia 2023*{" "}
      </motion.h1>
    </header>
  );
};

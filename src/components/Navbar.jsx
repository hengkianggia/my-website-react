import React, { useState } from "react";
import { motion } from "framer-motion";

export const Navbar = () => {
  const [open, setOpen] = useState(false);

  const openHandler = () => {
    setOpen(!open);
  };

  const navbar = (
    <div className="flex gap-x-5 pr-5 text-sm text-white">
      <button>Portofolio</button>
      <button>Experience</button>
      <button>Skills</button>
      <button>Contact</button>
    </div>
  );

  return (
    <nav className="flex relative z-40">
      <div className="fixed top-10 left-10 py-3 px-3 flex gap-x-5 shadow-md">
        <motion.div
          className="w-10 h-10 bg-gray-100 rounded-full grid place-items-center font-semibold cursor-pointer"
          initial={{ y: "-400px" }}
          animate={{ y: 0 }}
          onClick={openHandler}
          whileHover={{ scale: 1.2 }}
          whileTap={{ scale: 0.7 }}
        >
          {" "}
          hi
        </motion.div>
        {open ? navbar : ""}
      </div>
    </nav>
  );
};

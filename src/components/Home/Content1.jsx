import React, { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { useInView } from "framer-motion";

export const Content1 = () => {
  const ref = useRef(null);
  const reff = useRef(null);
  const refff = useRef(null);
  const isInView = useInView(ref, {once: true});
  const isInVieww = useInView(reff, {once: true});
  const isInViewww = useInView(refff, {once: true});

  return (
    <section className="flex bg-primary flex-col items-center w-full py-32">
      <p
        ref={ref}
        style={{
          transform: isInView ? "none" : "translatey(100px)",
          opacity: isInView ? 1 : 0,
          transition: "all 1.2s cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s",
        }}
        className="w-4/12 text-abu text-sm font-Runs"
      >
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Vel hic
        incidunt commodi velit dolore assumenda eos nobis odio rem aliquid
        consequatur facilis, ipsam perferendis quasi quibusdam earum dignissimos
        dicta omnis.
      </p>
      <div
        ref={reff}
        style={{
          transform: isInVieww ? "none" : "translateX(-200px)",
          opacity: isInVieww ? 1 : 0,
          transition: "all 1.2s cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s",
        }}
        className="flex flex-col items-center my-64 relative"
      >
        <h1 className="text-lg w-4/12 text-center font-Fabulous text-abu">
          Develop interactive website with much happy:)
        </h1>
      </div>
      <p
        ref={refff}
        style={{
          transform: isInViewww ? "none" : "translateX(200px)",
          opacity: isInViewww ? 1 : 0,
          transition: "all 1.2s cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s",
        }}
        className="w-4/12 text-abu text-sm font-Runs"
      >
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Facere cum
        <br /> <br />
        pariatur exercitationem corporis rerum ea et voluptatum, cumque
        laboriosam dolorum modi odio illum fuga consequuntur repellendus? Itaque
        sequi eius natus repudiandae quod dicta! Delectus error ipsum est earum
        <br /> <br />
        quam officiis molestias similique reiciendis, perspiciatis eveniet ad
        nesciunt eum atque unde!
      </p>
    </section>
  );
};

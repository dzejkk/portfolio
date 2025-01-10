"use client";

import React, { useEffect } from "react";
import SectionHeading from "./section-heading";
import { motion } from "motion/react";
import { useInView } from "react-intersection-observer";
import { useActiveSectionContext } from "@/context/active-section-context";

export default function About() {

  /* animation */
  const {ref, inView} = useInView();
  const {setActiveSection} = useActiveSectionContext();

  useEffect(() => {
    if (inView) {
      setActiveSection("About");
    }
  }, [inView, setActiveSection]);
  
 /* animation */

  
  return (
    <motion.section
      ref={ref}
      className="mb-28 max-w-[45rem] text-center leading-8 sm:mb-40 scroll-mt-28"
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.175 }}
      id="about"
    >
      <SectionHeading>About me</SectionHeading>
      <p className="mb-3">
        After graduating with a degree in{" "}
        <span className="font-medium">Public Health</span>, I decided to pursue
        my passion for programming. I enrolled in a coding bootcamp and learned{" "}
        <span className="font-medium">Front-end web development</span>.{" "}
        <span className="italic">My favorite part of programming</span> is the
        process of creation new things and seeing them come to life. I{" "}
        <span className="underline">love</span> the feeling of creating new
        stuff. My core stack is{" "}
        <span className="font-medium">
          React, Next.js, Node.js, and PostgreSQL
        </span>
        . I am also familiar with TypeScript and Prisma. I am always looking to
        learn new technologies. I am currently looking for a{" "}
        <span className="font-medium">Full-time or Part-time position</span> as
        a Front-end software developer.
      </p>

      <p>
        <span className="italic">When I'm not coding</span>, I enjoy exercises,
        watching movies, listening to music. I also enjoy{" "}
        <span className="font-medium">learning new things</span>. I am currently
        learning about{" "}
        <span className="font-medium">Music production and photo editing</span>.
        I'm also playing my guitars.
      </p>
    </motion.section>
  );
}

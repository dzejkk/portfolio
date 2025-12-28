"use client";

import React from "react";
import Image from "next/image";
import { motion } from "motion/react";
import Link from "next/link";
import { BsArrowRight, BsDownload, BsLinkedin } from "react-icons/bs";
import { FaGitSquare } from "react-icons/fa";
import { useSectionInView } from "@/lib/hooks";
import { useActiveSectionContext } from "@/context/active-section-context";

export default function Intro() {
  const { setActiveSection, setTimeOfLastClick } = useActiveSectionContext();

  /*animaton*/
  const { ref } = useSectionInView("Home", 0.5);
  /*animaton*/

  return (
    <section
      ref={ref}
      id="home"
      className="mb-28 max-w-[50rem] text-center sm:mb-0 pt-12"
    >
      <div className="flex items-center justify-center">
        <div className="relative">
          <motion.div
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ type: "tween", duration: 0.2 }}
          >
            <Image
              src="/profile.jpg"
              alt="profile picture"
              width="192"
              height="192"
              quality="95"
              priority={true}
              className="h-24 w-24 rounded-full border-[0.35rem]
                          border-white shadow-xl object-cover"
            />
          </motion.div>
          <motion.span
            className="absolute bottom-0 right-0 text-3xl"
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{
              type: "spring",
              stiffness: 125,
              delay: 0.1,
              duration: 0.7,
            }}
          >
            👋
          </motion.span>
        </div>
      </div>

      <motion.h1
        className="mb-10 mt-4 px-4 text-2xl font-medium !leading-[1.5] sm:text-4xl"
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
      >
        <span className="font-bold">Hello, I'm Jakub.</span> I'm a{" "}
        <span className="font-bold">Front-end developer</span> with{" "}
        <span className="font-bold">2 years</span> of experience. I enjoy
        building <span className="italic">sites & apps</span>. My focus is{" "}
        <span className="underline">React.js</span>.
      </motion.h1>

      <motion.div
        className="flex flex-col sm:flex-row gap-3 justify-center items-center font-medium text-lg"
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.1 }}
      >
        <Link
          href="#contact"
          className="group bg-gray-900 text-white px-7 py-3 flex items-center gap-2
                     rounded-full outline-none focus:scale-110 hover:scale-110
                     hover:bg-gray-950 active:scale-105 transition"
          onClick={() => {
            setActiveSection("Contact");
            setTimeOfLastClick(Date.now());
          }}
        >
          Contact me here{" "}
          <BsArrowRight className="opacity-70 group-hover:translate-x-1 transition" />{" "}
        </Link>

        <a
          className="group bg-white text-gray-900 px-7 py-3 flex items-center
                     gap-2 rounded-full outline-none focus:scale-110 hover:scale-110
                     active:scale-105 transition cursor-pointer border border-black/10
                     dark:bg-white/10 dark:text-white/60"
          href="/CV.pdf"
          download={true}
        >
          Download CV{" "}
          <BsDownload className="ocpacity-60 group-hover:translate-y-1 transition" />
        </a>

        <a
          title="soc-link"
          rel="noopener"
          href="https://www.linkedin.com"
          target="_blank"
          className="bg-white text-gray-700 p-4 flex items-center
                      gap-2 rounded-full outline-none focus:scale-110 hover:scale-110
                      active:scale-105 transition cursor-pointer border border-black/10
                      hover:text-gray-950 dark:bg-white/10 dark:text-white/60"
        >
          <BsLinkedin />
        </a>
        <a
          title="soc-link"
          rel="noopener"
          href="https://github.com/dzejkk"
          target="_blank"
          className="bg-white text-gray-700 p-4 flex items-center
                       gap-2 text-[1.35rem] rounded-full outline-none focus:scale-110 hover:scale-110
                       active:scale-105 transition cursor-pointer border
                       border-black/10 hover:text-gray-950 dark:bg-white/10 dark:text-white/60"
        >
          <FaGitSquare />
        </a>
      </motion.div>
    </section>
  );
}

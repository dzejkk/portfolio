"use client";

import React from "react";
import SectionHeading from "./section-heading";
import { FaPaperPlane } from "react-icons/fa";
import { motion } from "framer-motion";
import { useSectionInView } from "@/lib/hooks";
import {sendEmail} from "@/actions/sendEmail";

export default function Contact() {
  const { ref } = useSectionInView("Contact");


  return (
    <motion.section
      id="contact"
      ref={ref}
      className="mb-28 sm:mb-28 w-[min(100%, 38rem)]"
      initial={{ opacity: 0, y: 100 }}
      whileInView={{ opacity: 1, y: 0 }}
    >
      <SectionHeading>Contact me</SectionHeading>
      <p className="text-grey-700">
        Please contact me directly at{" "}
        <a className="underline" href="mailto:kontrajakub2@gmail.com">
          mailto:kontrajakub2@gmail.com
        </a>{" "}
        or use the form below.
      </p>

      <form className="mt-10 flex flex-col" action={sendEmail}>

        <input
          type="email"
          name="senderEmail"
          className="h-14 rounded-lg border-black px-4"
          placeholder="email"
          required
          maxLength={500}
        />
        <textarea
          className="h-52 border-black p-4 my-3 rounded-lg"
          placeholder="message"
          name="message"
          required
          maxLength={500}
        />
        <button
          type="submit"
          className="group h-[3rem] w-[8rem] bg-gray-900
           text-white rounded-full outline-none
           transition-all flex justify-center 
           items-center gap-4 focus:scale-110
            hover:scale-110 hover:bg-gray-950
            active:scale-105 "
        >
          Submit
          <FaPaperPlane
            className="text-xs opacit-70 transition-all
             group-hover:translate-x-1 group-hover:-translate-y-1"
          ></FaPaperPlane>
        </button>
      </form>
    </motion.section>
  );
}

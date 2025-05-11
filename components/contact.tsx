"use client";

import React from "react";
import SectionHeading from "./section-heading";
import { motion } from "framer-motion";
import { useSectionInView } from "@/lib/hooks";
import { sendEmail } from "@/actions/sendEmail";

import SubmitBtn from "./submit-btn";
import toast from "react-hot-toast";

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
      <p className="text-grey-700 dark:text-white/75">
        Please contact me directly at{" "}
        <a className="underline" href="mailto:kontrajakub2@gmail.com">
          kontrajakub2@gmail.com
        </a>{" "}
        or use the form below.
      </p>

      <form
        className="mt-10 flex flex-col dark:text-gray-950"
        action={async (formData) => {
          const { data, error } = await sendEmail(formData);

          if (error) {
            toast.error(error);
            return;
          }
          toast.success("Email was sent successfully");
        }}
      >
        <input
          type="email"
          name="senderEmail"
          className="h-14 rounded-lg border-black px-4 dark:bg-white dark:bg-opacity-80
          dark:focus:bg-opacity-100 transition-all dark:outline-none"
          placeholder="email"
          required
          maxLength={500}
        />
        <textarea
          className="h-52 border-black p-4 my-3 rounded-lg dark:bg-white dark:bg-opacity-80
          dark:focus:bg-opacity-100 transition-all dark:outline-none"
          placeholder="message"
          name="message"
          required
          maxLength={5000}
        />

        <SubmitBtn />
      </form>
    </motion.section>
  );
}

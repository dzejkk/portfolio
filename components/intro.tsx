"use client";

import React from "react";
import Image from "next/image";
import { motion } from "motion/react";

export default function Intro() {
  return (
    <section>
      <div className="flex items-center justify-center">
        <div className="relative">
          <motion.div
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ type: "tween", duration: 0.2 }}>
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
          <motion.span className="absolute bottom-0 right-0 text-3xl"
                        initial={{ opacity: 0, scale: 0 }}
                         animate={{ opacity: 1, scale: 1 }}
                         transition={{ type: "spring", stiffness: 125, delay: 0.1, duration: 0.7 }}>👋</motion.span>
        </div>
      </div>
    </section>
  );
}

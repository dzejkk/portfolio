import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import { FaReact } from "react-icons/fa";
import { LuGraduationCap } from "react-icons/lu";
import noiseCalculatorImg from "@/public/NoiseCals.png";
import toDoImg from "@/public/ToDo.png";
import documentGeneratorImg from "@/public/DocumentGenerator.png";

export const links = [
  {
    name: "Home",
    hash: "#home",
  },
  {
    name: "About",
    hash: "#about",
  },
  {
    name: "Projects",
    hash: "#projects",
  },
  {
    name: "Skills",
    hash: "#skills",
  },
  {
    name: "Experience",
    hash: "#experience",
  },
  {
    name: "Contact",
    hash: "#contact",
  },
] as const;

export const experiencesData = [
  {
    title: "Graduated bootcamp",
    location: "Miami, FL",
    description:
      "I graduated after 6 months of studying. I immediately found a job as a front-end developer.",
    icon: React.createElement(LuGraduationCap),
    date: "2019",
  },
  {
    title: "Front-End Developer",
    location: "Orlando, FL",
    description:
      "I worked as a front-end developer for 2 years in 1 job and 1 year in another job. I also upskilled to the full stack.",
    icon: React.createElement(CgWorkAlt),
    date: "2019 - 2021",
  },
  {
    title: "Full-Stack Developer",
    location: "Houston, TX",
    description:
      "I'm now a full-stack developer working as a freelancer. My stack includes React, Next.js, TypeScript, Tailwind, Prisma and MongoDB. I'm open to full-time opportunities.",
    icon: React.createElement(FaReact),
    date: "2021 - present",
  },
] as const;

export const projectsData = [
  {
    title: "NoiseCalculator",
    description:
      "I worked as occupational health specialist and we needed tool that is calculating normalised sounds levels in working conditions, so i made one",
    tags: ["React", "Zod", "Vite", "CSS.modules", "LocalStorage"],
    imageUrl: noiseCalculatorImg,
    link: "https://noise-calc-ver-2.vercel.app/",
  },
  {
    title: "ToDo list app, with audio UX",
    description:
      "Simple To Do app with Auth, and Sounds for  Great User Experience",
    tags: ["React", "TypeScript", "Vite", "Tailwind"],
    imageUrl: toDoImg,
    link: "https://react-to-do-seven-alpha.vercel.app/",
  },
  {
    title: "Document generator App from .xlsx",
    description:
      "A public web app for quick analytics on text. It shows word count, character count and social media post limits.",
    tags: ["React", "CSS.modules", "react/pdf", "xlsx.js"],
    imageUrl: documentGeneratorImg,
    link: "https://react-document-generator-from-excel.vercel.app/",
  },
] as const;

export const skillsData = [
  "HTML",
  "CSS",
  "JavaScript",
  "React",
  "Node",
  "Git",
  "Tailwind",
  "MongoDB",
  "CSS.modules",
  "Postman",
  "Playwright",

  "Express",
  "PostgreSQL",

  "Framer Motion",
] as const;

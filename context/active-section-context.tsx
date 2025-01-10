"use client"

import React from 'react'
import { useState, createContext } from "react";
import { links } from '@/lib/data';

/* TS */

type SectionName = (typeof links)[number]["name"];
type ActiveSectionContextProviderProps = {
    children: React.ReactNode
}
type ActiveSectionContextType = {
    activeSection: SectionName;
    setActiveSection: React.Dispatch<React.SetStateAction<SectionName>>;
}
/**/

/* React Context API */

export const ActiveSectionContext = createContext<ActiveSectionContextType | null>(null);

export default function ActiveSectionContextProvider({children}: ActiveSectionContextProviderProps) {

    const [activeSection, setActiveSection] = useState<SectionName>("Home");



  return (
       <ActiveSectionContext.Provider value={{activeSection, setActiveSection}}>{children}
       </ActiveSectionContext.Provider>
   ) 
}


/* custom Hooks */


export function useActiveSectionContext() {
    const context = React.useContext(ActiveSectionContext);
    if (context === null) {
      throw new Error(
        "useActiveSectionContext must be used within an ActiveSectionContextProvider"
      );
    }
    return context;
}
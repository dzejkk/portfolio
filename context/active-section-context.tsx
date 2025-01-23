"use client"

import React from 'react'
import { useState, createContext } from "react";
import { links } from '@/lib/data';
import type { SectionName } from '@/lib/types';

/* TS */

type ActiveSectionContextProviderProps = {
    children: React.ReactNode
}
type ActiveSectionContextType = {
    activeSection: SectionName;
    setActiveSection: React.Dispatch<React.SetStateAction<SectionName>>;
    timeOfLastClick: number;
    setTimeOfLastClick: React.Dispatch<React.SetStateAction<number>>
}
/**/

/* React Context API */

export const ActiveSectionContext = createContext<ActiveSectionContextType | null>(null);

export default function ActiveSectionContextProvider({children}:
     ActiveSectionContextProviderProps) {

    const [activeSection, setActiveSection] = useState<SectionName>("Home");
    const [timeOfLastClick, setTimeOfLastClick] = useState(0); // we need keep track of this to disable observer temporarerly

  return (
       <ActiveSectionContext.Provider
        value={{activeSection, setActiveSection, timeOfLastClick, setTimeOfLastClick}}>{children}
       </ActiveSectionContext.Provider>
   ) 
}


/* custom Hook kvoli typu null*/


export function useActiveSectionContext() {
    const context = React.useContext(ActiveSectionContext);
    if (context === null) {
      throw new Error(
        "useActiveSectionContext must be used within an ActiveSectionContextProvider"
      );
    }
    return context;
}
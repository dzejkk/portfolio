import React from "react";
import { useFormStatus } from "react-dom";
import { FaPaperPlane } from "react-icons/fa";

export default function SubmitBtn() {
  const { pending } = useFormStatus();
  return (
    <button
      type="submit"
      className="group h-[3rem] w-[8rem] bg-gray-900
               text-white rounded-full outline-none
               transition-all flex justify-center 
               items-center gap-4 focus:scale-110
                hover:scale-110 hover:bg-gray-950
                active:scale-105 disabled:scale-100 disabled:bg-opacity-75
               dark:bg-gray-100 dark:bg-opacity-75 dark:text-gray-950"
      disabled={pending}
    >
      {pending ? (
        <div className="h-5 w-5 animate-spin rounded-full border-b-2 border-white"></div>
      ) : (
        <FaPaperPlane
          className="text-xs opacit-70 transition-all
                 group-hover:translate-x-1 group-hover:-translate-y-1"
        ></FaPaperPlane>
      )}
      Submit
    </button>
  );
}

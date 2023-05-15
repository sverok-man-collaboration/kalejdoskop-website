"use client";

import React, { useEffect } from "react";

interface Props {
  showObject: boolean;
  setShowObject: (arg0: boolean) => void;
}

function MilouBook({ showObject, setShowObject }: Props) {
  useEffect(() => {
    const element = document.getElementById("milou-book");

    if (showObject === true) {
      element?.scrollIntoView({ behavior: "smooth" });
    } else {
      return;
    }
  }, [showObject]);

  return (
    <>
      {showObject ? (
        <div
          id="milou-book"
          className="fixed top-0 left-0 right-0 bottom-0 z-50 overflow-auto md:absolute md:top-[40%] md:left-[43%] md:min-h-0 md:max-w-[290px]"
        >
          <ul className="min-h-full bg-secondary p-4 md:h-auto md:min-h-0 md:rounded-2xl md:border-b-[6px] md:border-b-accent">
            <li>
              <button
                className="mt-1 ml-auto mr-1 block rounded-full bg-accent py-2 px-4 font-['Documan_heavy'] text-white"
                onClick={() => {
                  setShowObject(!showObject);
                }}
              >
                STÄNG
              </button>
            </li>
            <li>
              <p>Hello from object 3</p>
            </li>
          </ul>
        </div>
      ) : (
        ""
      )}
    </>
  );
}

export default MilouBook;
"use client";

import PinkStar from "../_assets/icons";
import { useCursor } from "../_hooks/useCursor";

const Cursor = () => {
  const {
    position: { x, y },
    isClicked,
  } = useCursor();

  return (
    <>
      {/* <div
        className={`fixed w-[100px] h-[100px] bg-white rounded-full mix-blend-difference z-20 pointer-events-none transition-transform duration-200 ease-in-out ${
          isClicked && "scale-150"
        }`}
        style={{
          left: `${x - 50}px`,
          top: `${y - 50}px`,
        }}
      ></div> */}
      {/* {Array(6)
        .fill(0)
        .map((el, i) => {
          return (
            <div
              className="ease-linear duration-100 absolute inset-0 translate-x-0 group-hover:translate-y-[00px]"
              style={{
                transitionDelay: `${i * 100}ms`,
              }}
              key={i}
            >
              <PinkStar />
            </div>
          );
        })} */}
      <div
        className={`fixed w-[140px] z-50 pointer-events-none transition-transform duration-200 ease-in-out ${
          isClicked && "scale-150 mix-blend-difference"
        }`}
        style={{
          left: `${x - 50}px`,
          top: `${y - 50}px`,
        }}
      >
        <PinkStar />
      </div>
    </>
  );
};

export default Cursor;

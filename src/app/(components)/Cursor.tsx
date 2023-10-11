"use client";

import { useCursor } from "../_hooks/useCursor";

const Cursor = () => {
  const {
    position: { x, y },
    isClicked,
  } = useCursor();

  return (
    <>
      <div
        className={`fixed w-[100px] h-[100px] bg-white rounded-full mix-blend-difference z-20 pointer-events-none transition-transform duration-200 ease-in-out ${
          isClicked && "scale-150"
        }`}
        style={{
          left: `${x - 50}px`,
          top: `${y - 50}px`,
        }}
      ></div>
    </>
  );
};

export default Cursor;

//@ts-nocheck
import React, { CSSProperties, FC, useEffect, useRef, useState } from "react";
type propTypes = {
  scrollableRef?: React.RefObject;
  root?: React.RefObject;
  style?: CSSProperties;
};
function mapper(
  input: number,
  minIn: number,
  maxIn: number,
  minOut: number,
  maxOut: number
) {
  if (input > maxIn) {
    return maxOut;
  } else if (input < minIn) {
    return minOut;
  } else {
    return ((input - minIn) * (maxOut - minOut)) / (maxIn - minIn) + minOut;
  }
}
const Scrollbar: FC<propTypes> = function Scrollbar({
  root,
  scrollableRef,
  style,
}) {
  const mouseDown = useRef(null);
  const thumbRef = useRef(null);
  const start = useRef(null);
  const now = useRef(null);
  const scrollbarRef = useRef(null);

  useEffect(() => {
    thumbRef.current.addEventListener("mousedown", (e) => {
      start.current = e.clientY;
      mouseDown.current = true;
    });
    window.addEventListener("mouseup", () => (mouseDown.current = false));
    window.addEventListener("mousemove", (e) => {
      if (mouseDown.current) {
        now.current = e.clientY;
        const rootHeight = root.current.getBoundingClientRect().height;
        const scrollHeight =
          scrollableRef.current.getBoundingClientRect().height;
        console.log({ rootHeight });
        const movie = now.current - start.current;
        const thumbMaxTransform =
          scrollbarRef.current.getBoundingClientRect().height -
          thumbRef.current.getBoundingClientRect().height;
        const contentMaxTransform = Math.abs(
          root.current.getBoundingClientRect().height -
            scrollableRef.current.getBoundingClientRect().height
        );
        const tr = mapper(movie, 0, thumbMaxTransform, 0, contentMaxTransform);
        const trThumb = mapper(
          movie,
          0,
          thumbMaxTransform,
          0,
          thumbMaxTransform
        );
        console.log({ pos: movie });
        if (scrollableRef && scrollableRef.current) {
          scrollableRef.current.style.transform = `translateY(-${tr}px)`;
        }
        thumbRef.current.style.transform = `translateY(${trThumb}px)`;
      }
    });
  }, []);

  return (
    <div
      draggable={false}
      ref={scrollbarRef}
      style={{
        height: "270px",
        width: "4px",
        alignSelf: "center",
        backgroundColor: "#242F3F",
        ...style,
      }}>
      <div
        draggable={false}
        ref={thumbRef}
        className="thumb"
        style={{
          height: "40px",
          width: "4px",
          backgroundColor: "#EAC016",
          cursor: "pointer",
        }}></div>
    </div>
  );
};
export default Scrollbar;

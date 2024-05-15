"use client";

import React, { useRef } from "react";

const isTouchScreen = typeof window !== "undefined" && "ontouchstart" in window;

const handleListItemMouseDown = isTouchScreen
  ? undefined
  : (ev: React.MouseEvent<HTMLLIElement>) => {
      const item = ev.currentTarget;
      const itemAnchor = item.querySelector("a");
      const handleMouseMove = () => {
        if (itemAnchor) itemAnchor.style.pointerEvents = "none";
        item.style.cursor = "grabbing";
      };
      item.addEventListener("mousemove", handleMouseMove);

      const handleMouseUp = () => {
        if (itemAnchor) itemAnchor.style.pointerEvents = "";
        item.style.cursor = "";
        item.removeEventListener("mousemove", handleMouseMove);
        item.removeEventListener("mouseup", handleMouseUp);
      };
      item.addEventListener("mouseup", handleMouseUp);
    };

const useMouseDrag = () => {
  const sliderRef = useRef<HTMLUListElement>(null);

  const handleListMouseDown = isTouchScreen
    ? undefined
    : (rootEv: React.MouseEvent<HTMLUListElement>) => {
        if (!sliderRef.current) return;

        const initialPos = rootEv.clientX;
        const initialScrollLeft = sliderRef.current.scrollLeft;

        sliderRef.current.style.cursor = "grabbing";
        sliderRef.current.style.userSelect = "none";
        sliderRef.current.querySelector("li a");

        const handleMouseMove = (ev: MouseEvent) => {
          if (!sliderRef.current) return;
          const dx = ev.clientX - initialPos;
          sliderRef.current.scrollTo(initialScrollLeft - dx, 0);
        };
        sliderRef.current.addEventListener("mousemove", handleMouseMove);

        const handleMouseUp = () => {
          if (!sliderRef.current) return;
          sliderRef.current.style.cursor = "grab";
          sliderRef.current.style.removeProperty("user-select");
          sliderRef.current.removeEventListener("mousemove", handleMouseMove);
          sliderRef.current.removeEventListener("mouseup", handleMouseUp);
        };
        sliderRef.current.addEventListener("mouseup", handleMouseUp);
      };

  const slide = (direction: "left" | "right") => {
    let dx = sliderRef.current!.offsetWidth;
    if (direction === "left") dx *= -1;
    sliderRef.current!.scrollTo({
      left: sliderRef.current!.scrollLeft + dx,
      behavior: "smooth",
    });
  };

  return {
    sliderRef,
    handleListMouseDown,
    handleListItemMouseDown,
    slide,
  };
};

export default useMouseDrag;

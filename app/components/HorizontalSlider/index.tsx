/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
"use client";

import React from "react";
import styles from "./styles.module.scss";
import useMouseDrag from "./useMouseDrag";
import ArrowLeft from "@/app/icons/ArrowLeft";
import ArrowRight from "@/app/icons/ArrowRight";

export type HorizontalSliderPropsType<ItemType> = {
  data?: ItemType[];
  gap?: number;
  keyExtractor: (item: ItemType) => string | number;
  renderItem: ({
    item,
    index,
  }: {
    item: ItemType;
    index?: number;
  }) => React.ReactNode;
};

const HorizontalSlider = <ItemType,>({
  data,
  keyExtractor,
  gap,
  renderItem,
}: HorizontalSliderPropsType<ItemType>) => {
  const { sliderRef, slide, handleListMouseDown, handleListItemMouseDown } =
    useMouseDrag();

  return (
    <div className={styles.sliderContainer}>
      <ul
        ref={sliderRef}
        className={styles.sliderList}
        onMouseDown={handleListMouseDown}
      >
        {data?.map((item, index) => (
          <li
            key={keyExtractor(item)}
            style={{ marginRight: gap }}
            onMouseDown={handleListItemMouseDown}
            className={styles.sliderItem}
          >
            {renderItem({ item, index })}
          </li>
        ))}
      </ul>
      <button
        className={styles.prevButton}
        type="button"
        onClick={() => slide("left")}
        aria-label="previous"
      >
        <ArrowLeft size="md" />
      </button>
      <button
        className={styles.nextButton}
        type="button"
        onClick={() => slide("right")}
        aria-label="next"
      >
        <ArrowRight size="md" />
      </button>
    </div>
  );
};

export default HorizontalSlider;

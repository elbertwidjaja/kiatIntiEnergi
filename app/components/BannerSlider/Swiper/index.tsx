"use client";

import {
  forwardRef,
  useRef,
  PointerEvent,
  useImperativeHandle,
  useEffect,
  useState,
  MutableRefObject,
} from "react";
import styles from "./styles.module.scss";
import { SwiperPropsType } from "./types";

const Swiper = forwardRef<any, SwiperPropsType>(
  (
    {
      data,
      renderItem,
      keyExtractor,
      gap,
      slidesPerView = "auto",
      onReady,
      onActiveIndexChange,
      overflow = true,
      enableSwipe = true,
    },
    ref
  ) => {
    const [, setUpdateCount] = useState(0);
    const sliderRef = useRef<HTMLDivElement>(
      null
    ) as MutableRefObject<HTMLDivElement>;
    const trackRef = useRef<HTMLUListElement>(
      null
    ) as MutableRefObject<HTMLUListElement>;
    const currPosition = useRef<number>(0);
    const startPointerPosition = useRef<number>(0);
    const activeIndex = useRef<number>(0);
    const currPositionStart = useRef(0);
    const startSwipeTime = useRef(0);

    const checkSwipe = (
      ev: PointerEvent<HTMLDivElement>
    ): { isSwipe: boolean; direction: "left" | "right" } => {
      const timeInterval = new Date().getTime() - startSwipeTime.current;
      const distance = ev.clientX - startPointerPosition.current;

      return {
        isSwipe: timeInterval < 200 && Math.abs(distance) > 70,
        direction: distance > 0 ? "left" : "right",
      };
    };

    const moveTo = (
      position: number,
      { withAnimation }: { withAnimation?: boolean } = {}
    ) => {
      currPosition.current = position;

      if (position > 0) {
        currPositionStart.current = 0;
        currPosition.current = 0;
      }

      if (
        position <
        sliderRef.current.clientWidth - trackRef.current.clientWidth
      ) {
        currPositionStart.current =
          sliderRef.current.clientWidth - trackRef.current.clientWidth;
        currPosition.current = currPositionStart.current;
      }

      trackRef.current.style.cssText = `transition-duration: ${
        withAnimation ? 300 : 0
      }ms; transform: translate3d(${currPosition.current}px, 0px, 0px);`;
    };

    const moveToIndex = (index: number) => {
      const slides = trackRef.current.children;

      if (index < 0 || index >= slides.length) return null;

      const slide = slides[index] as HTMLDivElement;

      moveTo(-slide.offsetLeft, { withAnimation: true });

      activeIndex.current = index;

      return null;
    };

    const moveToNearestPoint = () => {
      const slides = trackRef.current?.children;
      let result;
      let distance;
      for (let i = 0; i < slides.length; i += 1) {
        const slide = slides[i] as HTMLElement;
        const newDistance = Math.abs(
          slide.offsetLeft + currPositionStart.current
        );

        if (distance !== undefined && newDistance > distance) break;

        result = -slide.offsetLeft;
        distance = newDistance;
        activeIndex.current = i;
        if (onActiveIndexChange) onActiveIndexChange(i);
      }

      const maxOffset =
        sliderRef.current.clientWidth - trackRef.current.clientWidth;
      if (Math.abs(currPositionStart.current - maxOffset) < Number(distance)) {
        result = maxOffset;
        activeIndex.current = Math.min(
          activeIndex.current + 1,
          slides.length - 1
        );
      }

      moveTo(Number(result), { withAnimation: true });
    };

    useImperativeHandle(ref, () => ({
      setActiveIndex: (index: number) => moveToIndex(index),
    }));

    const handlePointerMove = (ev: PointerEvent<HTMLDivElement>) => {
      const distance = ev.clientX - startPointerPosition.current;
      const newPosition = distance + currPositionStart.current;
      if (newPosition > 0) startPointerPosition.current = ev.clientX;

      if (
        newPosition <
        sliderRef.current.clientWidth - trackRef.current.clientWidth
      )
        startPointerPosition.current = ev.clientX;

      moveTo(newPosition);
    };

    const handlePointerDown = (ev: PointerEvent<HTMLDivElement>) => {
      startSwipeTime.current = new Date().getTime();
      startPointerPosition.current = ev.clientX;
      currPositionStart.current = currPosition.current;

      if (sliderRef.current) {
        // @ts-ignore
        sliderRef.current.onpointermove = handlePointerMove;
        sliderRef.current.setPointerCapture(ev.pointerId);
      }
    };

    const handlePointerUp = (ev: PointerEvent<HTMLDivElement>) => {
      if (!sliderRef.current) return;

      sliderRef.current.style.touchAction = "";
      currPositionStart.current = currPosition.current;

      sliderRef.current.onpointermove = null;
      sliderRef.current.releasePointerCapture(ev.pointerId);

      const { isSwipe, direction } = checkSwipe(ev);
      if (isSwipe)
        return moveToIndex(
          direction === "left"
            ? activeIndex.current - 1
            : activeIndex.current + 1
        );

      return moveToNearestPoint();
    };

    useEffect(() => {
      setUpdateCount((curr) => curr + 1);
    }, [sliderRef]);

    useEffect(() => {
      if (trackRef.current && onReady) onReady();
    }, [onReady, trackRef]);

    const swiperWidth =
      slidesPerView === "auto" || !sliderRef.current
        ? undefined
        : sliderRef.current.clientWidth / slidesPerView;

    const gestureEvents = enableSwipe
      ? {
          onPointerDown: handlePointerDown,
          onPointerUp: handlePointerUp,
        }
      : {};

    return (
      <div
        {...gestureEvents}
        ref={sliderRef}
        className={`swiper-container disable-select ${styles.swiperContainer}`}
        style={{ width: swiperWidth, overflow: overflow ? "unset" : "hidden" }}
      >
        <ul ref={trackRef} className={styles.swiperTrack}>
          {data?.map((item, index) => (
            <li
              className={styles.listItem}
              key={keyExtractor(item) || index}
              onDragStart={(ev) => ev.preventDefault()} // prevent dragging image or link
              style={{
                marginRight: gap,
                width: swiperWidth || "fit-content",
              }}
            >
              {renderItem({ item, index })}
            </li>
          ))}
        </ul>
      </div>
    );
  }
);

Swiper.displayName = "Swiper";

export default Swiper;

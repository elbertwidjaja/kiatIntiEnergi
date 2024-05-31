"use client";

import { useEffect, useRef, useState } from "react";
import ArrowRight from "@/app/icons/ArrowRight";
import ArrowLeft from "@/app/icons/ArrowLeft";
import useFn from "./useFn";
import styles from "./styles.module.scss";
import Swiper from "./Swiper";

const BannerSwiper = ({ data, autoScrollingTime = 5000 }) => {
  const [activeIndex, setActiveIndex] = useState(0);
  const swiperRef = useRef<any>(null);
  const autoScrollTimeout = useRef<number>();

  const moveToPrevious = () => {
    const prevIndex = activeIndex === 0 ? data.length - 1 : activeIndex - 1;
    setActiveIndex(prevIndex);
    swiperRef.current?.setActiveIndex(prevIndex);
  };

  const moveToNext = () => {
    const nextIndex = activeIndex + 1 >= data.length ? 0 : activeIndex + 1;
    setActiveIndex(nextIndex);
    swiperRef.current?.setActiveIndex(nextIndex);
  };

  const autoScrollHandler = useFn(moveToNext);

  useEffect(() => {
    if (!swiperRef.current) return;

    window.clearTimeout(autoScrollTimeout.current);
    autoScrollTimeout.current = window.setTimeout(
      autoScrollHandler,
      autoScrollingTime
    );

    return () => {
      window.clearInterval(autoScrollTimeout.current);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [autoScrollHandler, activeIndex]);

  return (
    <div className={styles.swiperContainer}>
      <div className={styles.controllerContainer}>
        <button type="button" onClick={moveToPrevious} aria-label="previous">
          <ArrowLeft />
        </button>
        <button type="button" onClick={moveToNext} aria-label="next">
          <ArrowRight />
        </button>
      </div>
      <ol className={styles.paginationContainer}>
        {data.map((banner, idx) => (
          <li key={banner.id}>
            <button
              className={`${styles.pagination} ${
                idx === activeIndex && styles.active
              }`}
              type="button"
              onClick={() => {
                setActiveIndex(idx);
                swiperRef.current?.setActiveIndex(idx);
              }}
            >
              Page {idx}
            </button>
          </li>
        ))}
      </ol>
      <div className={styles.bannerSwiperContainer}>
        <div className={styles.content}>
          <Swiper
            enableSwipe={false}
            ref={swiperRef}
            slidesPerView={1}
            data={data}
            renderItem={({ item, index }) => (
              <a href={item.detail_path}>
                <picture>
                  <source
                    srcSet={item.image_urls.large}
                    media="(min-width: 768px)"
                  />
                  <img
                    className={[
                      styles.image,
                      index === activeIndex && "active",
                    ].join(" ")}
                    src={item.image_urls.small}
                    alt={item.name}
                    loading={index === 0 ? "eager" : "lazy"}
                  />
                </picture>
              </a>
            )}
            onActiveIndexChange={(index) => setActiveIndex(index)}
            keyExtractor={(item) => item.id}
          />
        </div>
      </div>
    </div>
  );
};

export default BannerSwiper;

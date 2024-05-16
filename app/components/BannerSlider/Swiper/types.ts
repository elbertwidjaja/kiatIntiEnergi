import React from "react";

export type SwiperPropsType = {
  data: any[];
  renderItem: (params: { item: any; index: number }) => React.ReactNode;
  keyExtractor: (item: any) => number;
  gap?: number;
  slidesPerView?: number | "auto";
  onReady?: () => any;
  onActiveIndexChange?: (index: number) => void;
  overflow?: boolean;
  enableSwipe?: boolean;
};

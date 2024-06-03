import React, { useRef } from "react";

const useFn = <Fn extends (...params: any[]) => unknown>(fn?: Fn): Fn => {
  const ref = useRef<{ fnRef?: Fn; memoFn?: unknown }>({});
  ref.current.fnRef = fn;

  if (!ref.current.memoFn && ref.current.fnRef) {
    ref.current.memoFn = (...params: any[]) => ref.current.fnRef?.(...params);
  }

  return ref.current.memoFn as Fn;
};

export default useFn;

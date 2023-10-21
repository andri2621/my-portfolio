import { RefObject, useEffect, useRef, useState } from 'react';

interface IOptions {
  root?: Element | null;
  rootMargin?: string;
  thresholds?: ReadonlyArray<number>;
}

type useInViewType<T extends Element> = {
  inView: boolean;
  ref: RefObject<T> | null;
  observe: (
    element: RefObject<T>,
    callback: (entries: IntersectionObserverEntry[]) => void
  ) => IntersectionObserver | null;
  unObserve: (observer: IntersectionObserver) => void;
};

function useInView<T extends Element>(options: IOptions): useInViewType<T> {
  const [inView, setInView] = useState(false);
  const containerRef = useRef<T | null>(null);

  const callback = (entries: IntersectionObserverEntry[]) => {
    const [entry] = entries;
    setInView(entry.isIntersecting);
  };

  useEffect(() => {
    const _observer = new IntersectionObserver(callback, options);
    if (containerRef.current) _observer.observe(containerRef.current);

    return () => {
      if (containerRef.current) _observer.unobserve(containerRef.current);
    };
  }, [containerRef, options]);

  const observe = (
    element: RefObject<T>,
    callback: (entries: IntersectionObserverEntry[]) => void
  ) => {
    const _observer = new IntersectionObserver(callback, options);
    if (element.current) {
      containerRef.current = element.current;
      _observer.observe(containerRef.current);
    }
    return _observer;
  };

  const unObserve = (observer: IntersectionObserver) => {
    if (containerRef.current) observer.unobserve(containerRef.current);
  };

  return {
    inView,
    ref: containerRef,
    observe,
    unObserve,
  };
}

export default useInView;

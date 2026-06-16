import { useEffect, useState, useCallback } from "react";

interface UseScrollAnimationOptions {
  threshold?: number;
  triggerOnce?: boolean;
  key?: string;
}

export const useScrollAnimation = (options: UseScrollAnimationOptions = {}) => {
  const { threshold = 0.1, triggerOnce = true, key } = options;
  const [element, setElement] = useState<HTMLElement | null>(null);
  const [isVisible, setIsVisible] = useState(false);

  // Callback ref that handles late-mounted elements
  const ref = useCallback((node: HTMLElement | null) => {
    setElement(node);
  }, []);

  // Reset visibility when key changes
  useEffect(() => {
    if (key !== undefined) {
      setIsVisible(false);
    }
  }, [key]);

  useEffect(() => {
    if (!element) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          if (triggerOnce) {
            observer.unobserve(element);
          }
        } else if (!triggerOnce) {
          setIsVisible(false);
        }
      },
      { threshold, rootMargin: '50px' }
    );

    observer.observe(element);

    return () => observer.disconnect();
  }, [element, threshold, triggerOnce, key]);

  return { ref, isVisible };
};

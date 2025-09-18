import { useEffect, useState } from 'react';

export const useParallax = () => {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return scrollY;
};

export const useScrollTrigger = (threshold = 100) => {
  const [isTriggered, setIsTriggered] = useState(false);
  const scrollY = useParallax();

  useEffect(() => {
    setIsTriggered(scrollY > threshold);
  }, [scrollY, threshold]);

  return { isTriggered, scrollY };
};
import { useEffect, useRef, ReactNode } from 'react';

interface ScrollAnimationWrapperProps {
  children: ReactNode;
  className?: string;
  animationType?: 'fade-up' | 'fade-in' | 'slide-left' | 'slide-right' | 'scale-in';
  delay?: number;
}

export const ScrollAnimationWrapper = ({ 
  children, 
  className = '', 
  animationType = 'fade-up',
  delay = 0 
}: ScrollAnimationWrapperProps) => {
  const elementRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setTimeout(() => {
              entry.target.classList.add('animate-in');
            }, delay);
          }
        });
      },
      { threshold: 0.1, rootMargin: '0px 0px -50px 0px' }
    );

    if (elementRef.current) {
      observer.observe(elementRef.current);
    }

    return () => observer.disconnect();
  }, [delay]);

  const animationClass = {
    'fade-up': 'scroll-fade-up',
    'fade-in': 'scroll-fade-in',
    'slide-left': 'scroll-slide-left',
    'slide-right': 'scroll-slide-right',
    'scale-in': 'scroll-scale-in'
  }[animationType];

  return (
    <div 
      ref={elementRef} 
      className={`${animationClass} ${className}`}
    >
      {children}
    </div>
  );
};
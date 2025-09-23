import { useParallax } from "@/hooks/useParallax";

interface ParallaxImageProps {
  src: string;
  alt: string;
  className?: string;
  parallaxOffset?: number;
  children?: React.ReactNode;
}

export const ParallaxImage = ({ 
  src, 
  alt, 
  className = "", 
  parallaxOffset = 0.2,
  children 
}: ParallaxImageProps) => {
  const scrollY = useParallax();

  return (
    <div className={`relative overflow-hidden ${className}`}>
      <img 
        src={src}
        alt={alt}
        className="w-full h-full object-cover"
        style={{
          transform: `translateY(${scrollY * parallaxOffset}px)`,
        }}
      />
      {children && (
        <div className="absolute inset-0">
          {children}
        </div>
      )}
    </div>
  );
};
import React, { useState, useEffect, useRef } from 'react';

// Animated gradient text component
export const GradientText = ({ children, className = '', ...props }) => {
  return (
    <span className={`gradient-text ${className}`} {...props}>
      {children}
    </span>
  );
};

// Glass morphism card component
export const GlassCard = ({ children, className = '', hover = true, ...props }) => {
  return (
    <div className={`glass-card ${hover ? 'hover' : ''} ${className}`} {...props}>
      {children}
    </div>
  );
};

// Animated CTA button
export const CTAButton = ({ children, href, onClick, className = '', ...props }) => {
  const Component = href ? 'a' : 'button';
  return (
    <Component 
      href={href}
      onClick={onClick}
      className={`cta-button ${className}`}
      {...props}
    >
      {children}
    </Component>
  );
};

// Feature card with spotlight effect
export const FeatureCard = ({ children, className = '', spotlight = true, ...props }) => {
  const cardRef = useRef(null);
  const [mousePos, setMousePos] = useState({ x: 50, y: 50 });

  useEffect(() => {
    const card = cardRef.current;
    if (!card || !spotlight) return;

    const handleMouseMove = (e) => {
      const rect = card.getBoundingClientRect();
      const x = ((e.clientX - rect.left) / rect.width) * 100;
      const y = ((e.clientY - rect.top) / rect.height) * 100;
      setMousePos({ x, y });
    };

    const handleMouseLeave = () => {
      setMousePos({ x: 50, y: 50 });
    };

    card.addEventListener('mousemove', handleMouseMove);
    card.addEventListener('mouseleave', handleMouseLeave);

    return () => {
      card.removeEventListener('mousemove', handleMouseMove);
      card.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, [spotlight]);

  return (
    <div 
      ref={cardRef}
      className={`feature-card ${spotlight ? 'spotlight-card' : ''} ${className}`}
      style={spotlight ? {
        '--mouse-x': `${mousePos.x}%`,
        '--mouse-y': `${mousePos.y}%`,
        '--glow-x': `${mousePos.x}%`,
        '--glow-y': `${mousePos.y}%`,
        '--glow-intensity': '1'
      } : {}}
      {...props}
    >
      {children}
    </div>
  );
};

// Bento grid layout component
export const BentoGrid = ({ children, className = '', ...props }) => {
  return (
    <div className={`bento-grid ${className}`} {...props}>
      {children}
    </div>
  );
};

// Floating animation wrapper
export const Floating = ({ children, className = '', ...props }) => {
  return (
    <div className={`floating ${className}`} {...props}>
      {children}
    </div>
  );
};

// Pulse animation wrapper
export const Pulse = ({ children, className = '', ...props }) => {
  return (
    <div className={`pulse ${className}`} {...props}>
      {children}
    </div>
  );
};

// Glow hover effect wrapper
export const GlowHover = ({ children, className = '', ...props }) => {
  return (
    <div className={`glow-hover ${className}`} {...props}>
      {children}
    </div>
  );
};

// Loading skeleton component
export const Skeleton = ({ width, height, className = '', ...props }) => {
  const style = {
    width: width || '100%',
    height: height || '20px',
    ...props.style
  };

  return (
    <div 
      className={`skeleton ${className}`}
      style={style}
      {...props}
    />
  );
};

// Animated counter component
export const AnimatedCounter = ({ 
  target, 
  duration = 2000, 
  className = '',
  prefix = '',
  suffix = '',
  ...props 
}) => {
  const [count, setCount] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const counterRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (counterRef.current) {
      observer.observe(counterRef.current);
    }

    return () => {
      if (counterRef.current) {
        observer.unobserve(counterRef.current);
      }
    };
  }, []);

  useEffect(() => {
    if (!isVisible) return;

    const startTime = Date.now();
    const endTime = startTime + duration;

    const animate = () => {
      const now = Date.now();
      const progress = Math.min((now - startTime) / duration, 1);
      
      // Easing function
      const easeOutQuart = 1 - Math.pow(1 - progress, 4);
      const currentCount = Math.floor(target * easeOutQuart);
      
      setCount(currentCount);

      if (progress < 1) {
        requestAnimationFrame(animate);
      } else {
        setCount(target);
      }
    };

    requestAnimationFrame(animate);
  }, [isVisible, target, duration]);

  return (
    <span ref={counterRef} className={className} {...props}>
      {prefix}{count.toLocaleString()}{suffix}
    </span>
  );
};

// Fade in animation component
export const FadeIn = ({ 
  children, 
  delay = 0, 
  duration = 600, 
  className = '',
  ...props 
}) => {
  const [isVisible, setIsVisible] = useState(false);
  const elementRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setTimeout(() => setIsVisible(true), delay);
        }
      },
      { threshold: 0.1 }
    );

    if (elementRef.current) {
      observer.observe(elementRef.current);
    }

    return () => {
      if (elementRef.current) {
        observer.unobserve(elementRef.current);
      }
    };
  }, [delay]);

  return (
    <div
      ref={elementRef}
      className={className}
      style={{
        opacity: isVisible ? 1 : 0,
        transform: isVisible ? 'translateY(0)' : 'translateY(20px)',
        transition: `opacity ${duration}ms ease, transform ${duration}ms ease`,
        ...props.style
      }}
      {...props}
    >
      {children}
    </div>
  );
};

// Rotating text component
export const RotatingText = ({ words, interval = 3000, className = '', ...props }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % words.length);
    }, interval);

    return () => clearInterval(timer);
  }, [words.length, interval]);

  return (
    <span className={className} {...props}>
      {words[currentIndex]}
    </span>
  );
};

// Custom scrollbar wrapper
export const CustomScrollbar = ({ children, className = '', ...props }) => {
  return (
    <div className={`custom-scrollbar ${className}`} {...props}>
      {children}
    </div>
  );
};

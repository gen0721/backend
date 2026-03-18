import React, { useState, useEffect, useRef, useCallback } from 'react';

// Premium gradient text with advanced animations
export const PremiumGradientText = ({ 
  children, 
  className = '', 
  colors = ['#5227ff', '#7c3aed', '#8b5cf6', '#a78bfa'],
  animationSpeed = 4,
  ...props 
}) => {
  const gradientStyle = {
    background: `linear-gradient(135deg, ${colors.join(', ')}, ${colors[0]})`,
    backgroundSize: '200% 200%',
    WebkitBackgroundClip: 'text',
    backgroundClip: 'text',
    WebkitTextFillColor: 'transparent',
    animation: `gradientShift ${animationSpeed}s ease-in-out infinite`,
  };

  return (
    <span 
      className={`premium-gradient-text ${className}`}
      style={gradientStyle}
      {...props}
    >
      {children}
    </span>
  );
};

// Premium glass card with advanced effects
export const PremiumGlassCard = ({ 
  children, 
  className = '', 
  hover = true,
  spotlight = true,
  borderGlow = false,
  ...props 
}) => {
  const cardRef = useRef(null);
  const [mousePos, setMousePos] = useState({ x: 50, y: 50 });

  const handleMouseMove = useCallback((e) => {
    if (!spotlight || !cardRef.current) return;
    
    const rect = cardRef.current.getBoundingClientRect();
    const x = ((e.clientX - rect.left) / rect.width) * 100;
    const y = ((e.clientY - rect.top) / rect.height) * 100;
    setMousePos({ x, y });
  }, [spotlight]);

  const handleMouseLeave = useCallback(() => {
    setMousePos({ x: 50, y: 50 });
  }, []);

  useEffect(() => {
    const card = cardRef.current;
    if (!card) return;

    card.addEventListener('mousemove', handleMouseMove);
    card.addEventListener('mouseleave', handleMouseLeave);

    return () => {
      card.removeEventListener('mousemove', handleMouseMove);
      card.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, [handleMouseMove, handleMouseLeave]);

  const cardStyle = spotlight ? {
    '--mouse-x': `${mousePos.x}%`,
    '--mouse-y': `${mousePos.y}%`,
    '--glow-x': `${mousePos.x}%`,
    '--glow-y': `${mousePos.y}%`,
  } : {};

  return (
    <div
      ref={cardRef}
      className={`premium-glass-card ${hover ? 'hover-enabled' : ''} ${spotlight ? 'spotlight-enabled' : ''} ${borderGlow ? 'border-glow' : ''} ${className}`}
      style={cardStyle}
      {...props}
    >
      {children}
    </div>
  );
};

// Premium button with multiple animation layers
export const PremiumButton = ({ 
  children, 
  variant = 'primary',
  size = 'md',
  href,
  onClick,
  loading = false,
  disabled = false,
  className = '',
  icon,
  iconPosition = 'right',
  ...props 
}) => {
  const [isHovered, setIsHovered] = useState(false);
  const [ripples, setRipples] = useState([]);
  
  const createRipple = (e) => {
    const button = e.currentTarget;
    const rect = button.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    
    const newRipple = {
      id: Date.now(),
      x,
      y,
    };
    
    setRipples(prev => [...prev, newRipple]);
    
    setTimeout(() => {
      setRipples(prev => prev.filter(r => r.id !== newRipple.id));
    }, 600);
  };

  const handleClick = (e) => {
    if (!disabled && !loading) {
      createRipple(e);
      onClick?.(e);
    }
  };

  const Component = href ? 'a' : 'button';
  
  const baseClasses = `premium-btn ${variant} ${size} ${loading ? 'loading' : ''} ${disabled ? 'disabled' : ''} ${className}`;
  
  return (
    <Component
      href={href}
      className={baseClasses}
      onClick={handleClick}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      disabled={disabled}
      {...props}
    >
      {/* Ripple effects */}
      {ripples.map(ripple => (
        <span
          key={ripple.id}
          className="premium-btn-ripple"
          style={{
            left: ripple.x,
            top: ripple.y,
          }}
        />
      ))}
      
      {/* Button content */}
      <span className="premium-btn-content">
        {icon && iconPosition === 'left' && (
          <span className="premium-btn-icon premium-btn-icon-left">{icon}</span>
        )}
        
        <span className="premium-btn-text">{children}</span>
        
        {loading ? (
          <span className="premium-btn-spinner" />
        ) : icon && iconPosition === 'right' ? (
          <span className="premium-btn-icon premium-btn-icon-right">{icon}</span>
        ) : null}
      </span>
      
      {/* Hover glow effect */}
      {isHovered && !disabled && !loading && (
        <span className="premium-btn-glow" />
      )}
    </Component>
  );
};

// Premium feature card with 3D effects
export const PremiumFeatureCard = ({ 
  children, 
  className = '',
  tilt = true,
  glow = true,
  delay = 0,
  ...props 
}) => {
  const cardRef = useRef(null);
  const [transform, setTransform] = useState({ rotateX: 0, rotateY: 0 });

  const handleMouseMove = useCallback((e) => {
    if (!tilt || !cardRef.current) return;
    
    const card = cardRef.current;
    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;
    
    const rotateX = ((y - centerY) / centerY) * -10;
    const rotateY = ((x - centerX) / centerX) * 10;
    
    setTransform({ rotateX, rotateY });
  }, [tilt]);

  const handleMouseLeave = useCallback(() => {
    setTransform({ rotateX: 0, rotateY: 0 });
  }, []);

  return (
    <div
      ref={cardRef}
      className={`premium-feature-card ${tilt ? 'tilt-enabled' : ''} ${glow ? 'glow-enabled' : ''} ${className}`}
      style={{
        transform: `perspective(1000px) rotateX(${transform.rotateX}deg) rotateY(${transform.rotateY}deg)`,
        transition: 'transform 0.1s ease-out',
        animationDelay: `${delay}ms`,
      }}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      {...props}
    >
      {children}
    </div>
  );
};

// Premium animated counter
export const PremiumCounter = ({ 
  target, 
  duration = 2000, 
  prefix = '',
  suffix = '',
  decimals = 0,
  className = '',
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
      
      // Advanced easing function
      const easeOutElastic = (t) => {
        const p = 0.3;
        return Math.pow(2, -10 * t) * Math.sin((t - p / 4) * (2 * Math.PI) / p) + 1;
      };
      
      const easedProgress = easeOutElastic(progress);
      const currentCount = target * easedProgress;
      
      setCount(currentCount);

      if (progress < 1) {
        requestAnimationFrame(animate);
      } else {
        setCount(target);
      }
    };

    requestAnimationFrame(animate);
  }, [isVisible, target, duration]);

  const displayValue = decimals > 0 
    ? count.toFixed(decimals) 
    : Math.floor(count).toLocaleString();

  return (
    <span 
      ref={counterRef} 
      className={`premium-counter ${className}`}
      {...props}
    >
      {prefix}{displayValue}{suffix}
    </span>
  );
};

// Premium floating animation wrapper
export const PremiumFloat = ({ 
  children, 
  intensity = 1,
  duration = 3,
  delay = 0,
  className = '',
  ...props 
}) => {
  return (
    <div
      className={`premium-float ${className}`}
      style={{
        animation: `float ${duration}s ease-in-out ${delay}s infinite`,
        '--float-intensity': intensity,
      }}
      {...props}
    >
      {children}
    </div>
  );
};

// Premium fade in with stagger
export const PremiumFadeIn = ({ 
  children, 
  delay = 0,
  duration = 600,
  direction = 'up',
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

  const getTransform = () => {
    switch (direction) {
      case 'up': return 'translateY(30px)';
      case 'down': return 'translateY(-30px)';
      case 'left': return 'translateX(30px)';
      case 'right': return 'translateX(-30px)';
      default: return 'translateY(30px)';
    }
  };

  return (
    <div
      ref={elementRef}
      className={`premium-fade-in ${className}`}
      style={{
        opacity: isVisible ? 1 : 0,
        transform: isVisible ? 'translate(0, 0)' : getTransform(),
        transition: `opacity ${duration}ms cubic-bezier(0.16, 1, 0.3, 1), transform ${duration}ms cubic-bezier(0.16, 1, 0.3, 1)`,
      }}
      {...props}
    >
      {children}
    </div>
  );
};

// Premium grid layout
export const PremiumGrid = ({ 
  children, 
  cols = { default: 1, md: 2, lg: 3 },
  gap = 'md',
  className = '',
  ...props 
}) => {
  const gridClass = `premium-grid grid-cols-${cols.default} md:grid-cols-${cols.md} lg:grid-cols-${cols.lg} gap-${gap} ${className}`;
  
  return (
    <div className={gridClass} {...props}>
      {children}
    </div>
  );
};

// Premium loading skeleton
export const PremiumSkeleton = ({ 
  width, 
  height, 
  variant = 'rect',
  className = '',
  ...props 
}) => {
  return (
    <div
      className={`premium-skeleton premium-skeleton-${variant} ${className}`}
      style={{
        width: width || '100%',
        height: height || '1rem',
      }}
      {...props}
    />
  );
};

import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { 
  PremiumGradientText, 
  PremiumGlassCard, 
  PremiumButton, 
  PremiumCounter,
  PremiumFadeIn,
  PremiumFloat
} from './PremiumComponents';
import { 
  ArrowRight, 
  Shield, 
  Zap, 
  Users, 
  Star,
  TrendingUp,
  Sparkles,
  ChevronDown
} from 'lucide-react';

const PremiumHero = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <section className="premium-hero">
      {/* Animated background gradient */}
      <div 
        className="premium-hero-bg"
        style={{
          background: `
            radial-gradient(circle at ${mousePosition.x}px ${mousePosition.y}px, rgba(82, 39, 255, 0.15), transparent 50%),
            radial-gradient(circle at 80% 20%, rgba(124, 58, 237, 0.12), transparent 50%),
            radial-gradient(circle at 20% 80%, rgba(139, 92, 246, 0.08), transparent 50%),
            linear-gradient(180deg, #060010 0%, #0d0716 100%)
          `
        }}
      />
      
      {/* Floating particles */}
      <div className="premium-hero-particles">
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="premium-particle"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 5}s`,
              animationDuration: `${15 + Math.random() * 10}s`
            }}
          />
        ))}
      </div>

      <div className="premium-hero-content">
        <div className="premium-hero-container">
          {/* Top badge */}
          <PremiumFadeIn delay={200}>
            <PremiumGlassCard className="premium-hero-badge" borderGlow>
              <div className="flex items-center gap-2">
                <Sparkles className="w-4 h-4 text-purple-400" />
                <span className="text-sm font-medium text-white">Премиум маркетплейс</span>
              </div>
            </PremiumGlassCard>
          </PremiumFadeIn>

          {/* Main heading */}
          <PremiumFadeIn delay={400}>
            <h1 className="premium-hero-title">
              <span className="text-white">Minions</span>
              <br />
              <PremiumGradientText 
                colors={['#5227ff', '#7c3aed', '#8b5cf6', '#a78bfa', '#b19eef']}
                animationSpeed={3}
              >
                Market
              </PremiumGradientText>
            </h1>
          </PremiumFadeIn>

          {/* Subtitle */}
          <PremiumFadeIn delay={600}>
            <p className="premium-hero-subtitle">
              Безопасный маркетплейс цифровых товаров с 
              <span className="text-purple-400 font-semibold"> гарантией сделок</span> и 
              <span className="text-purple-400 font-semibold"> защитой покупателей</span>
            </p>
          </PremiumFadeIn>

          {/* CTA buttons */}
          <PremiumFadeIn delay={800}>
            <div className="premium-hero-buttons">
              <PremiumButton 
                variant="primary" 
                size="lg"
                href="/catalog"
                icon={<ArrowRight className="w-5 h-5" />}
              >
                Начать покупки
              </PremiumButton>
              
              <PremiumButton 
                variant="secondary" 
                size="lg"
                href="/sell"
              >
                Стать продавцом
              </PremiumButton>
            </div>
          </PremiumFadeIn>

          {/* Stats */}
          <div className="premium-hero-stats">
            <PremiumFadeIn delay={1000}>
              <PremiumFloat intensity={0.5} duration={4}>
                <PremiumGlassCard className="premium-stat-card">
                  <div className="premium-stat-icon">
                    <Users className="w-6 h-6 text-purple-400" />
                  </div>
                  <div className="premium-stat-number">
                    <PremiumCounter target={10000} suffix="+" />
                  </div>
                  <div className="premium-stat-label">Активных пользователей</div>
                </PremiumGlassCard>
              </PremiumFloat>
            </PremiumFadeIn>

            <PremiumFadeIn delay={1200}>
              <PremiumFloat intensity={0.5} duration={4} delay={0.5}>
                <PremiumGlassCard className="premium-stat-card">
                  <div className="premium-stat-icon">
                    <Shield className="w-6 h-6 text-blue-400" />
                  </div>
                  <div className="premium-stat-number">
                    <PremiumCounter target={50000} suffix="+" />
                  </div>
                  <div className="premium-stat-label">Успешных сделок</div>
                </PremiumGlassCard>
              </PremiumFloat>
            </PremiumFadeIn>

            <PremiumFadeIn delay={1400}>
              <PremiumFloat intensity={0.5} duration={4} delay={1}>
                <PremiumGlassCard className="premium-stat-card">
                  <div className="premium-stat-icon">
                    <Star className="w-6 h-6 text-yellow-400" />
                  </div>
                  <div className="premium-stat-number">4.9/5</div>
                  <div className="premium-stat-label">Средний рейтинг</div>
                </PremiumGlassCard>
              </PremiumFloat>
            </PremiumFadeIn>
          </div>

          {/* Trust indicators */}
          <PremiumFadeIn delay={1600}>
            <div className="premium-hero-trust">
              <div className="premium-trust-item">
                <Shield className="w-5 h-5 text-green-400" />
                <span>100% безопасность</span>
              </div>
              <div className="premium-trust-item">
                <Zap className="w-5 h-5 text-blue-400" />
                <span>Мгновенная доставка</span>
              </div>
              <div className="premium-trust-item">
                <TrendingUp className="w-5 h-5 text-purple-400" />
                <span>Растущее сообщество</span>
              </div>
            </div>
          </PremiumFadeIn>
        </div>

        {/* Scroll indicator */}
        <div 
          className="premium-scroll-indicator"
          style={{ transform: `translateY(${scrollY * 0.5}px)` }}
        >
          <ChevronDown className="w-6 h-6 text-purple-400 animate-bounce" />
        </div>
      </div>
    </section>
  );
};

export default PremiumHero;

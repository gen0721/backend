import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import PremiumHero from './PremiumHero';
import PremiumFeatures from './PremiumFeatures';
import { 
  PremiumCounter, 
  PremiumFadeIn,
  PremiumFloat,
  PremiumGlassCard,
  PremiumButton
} from './PremiumComponents';
import { 
  Users, 
  ShoppingCart, 
  Shield, 
  TrendingUp,
  Star,
  ArrowRight,
  Zap,
  Heart,
  Award,
  ChevronRight
} from 'lucide-react';

const PremiumHomePage = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [scrollY, setScrollY] = useState(0);
  const [activeTestimonial, setActiveTestimonial] = useState(0);

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

  const testimonials = [
    {
      name: "Александр К.",
      role: "Покупатель",
      content: "Отличный маркетплейс! Купил аккаунт, доставка была мгновенной. Все прошло безопасно.",
      rating: 5,
      avatar: "👤"
    },
    {
      name: "Мария С.",
      role: "Продавец",
      content: "Продавала здесь несколько месяцев. Отличная платформа, хорошая защита продавцов.",
      rating: 5,
      avatar: "👩"
    },
    {
      name: "Дмитрий П.",
      role: "VIP клиент",
      content: "VIP статус стоит каждого рубля. Персональный менеджер и эксклюзивные предложения.",
      rating: 5,
      avatar: "👨"
    }
  ];

  const stats = [
    {
      icon: Users,
      value: 10000,
      suffix: "+",
      label: "Активных пользователей",
      description: "Сообщество доверенных покупателей и продавцов"
    },
    {
      icon: ShoppingCart,
      value: 50000,
      suffix: "+",
      label: "Успешных сделок",
      description: "Ежедневно проводятся сотни транзакций"
    },
    {
      icon: Shield,
      value: 99.9,
      suffix: "%",
      label: "Безопасность",
      description: "Процент успешных и безопасных сделок"
    },
    {
      icon: TrendingUp,
      value: 4.9,
      suffix: "/5",
      label: "Средний рейтинг",
      description: "Высокая оценка от нашего сообщества"
    }
  ];

  return (
    <div className="premium-homepage">
      {/* Hero Section */}
      <PremiumHero />

      {/* Features Section */}
      <PremiumFeatures />

      {/* Stats Section */}
      <section className="premium-stats">
        <div 
          className="premium-stats-bg"
          style={{
            background: `
              radial-gradient(circle at ${mousePosition.x}px ${mousePosition.y}px, rgba(82, 39, 255, 0.08), transparent 50%),
              linear-gradient(180deg, #170d27 0%, #271e37 100%)
            `
          }}
        />
        
        <div className="premium-stats-container">
          <PremiumFadeIn delay={200}>
            <div className="premium-stats-header">
              <PremiumGlassCard className="premium-stats-badge">
                <TrendingUp className="w-4 h-4 text-purple-400" />
                <span className="text-sm font-medium text-white">Статистика</span>
              </PremiumGlassCard>
              
              <h2 className="premium-stats-title">
                Наша платформа в <span className="text-purple-400">цифрах</span>
              </h2>
              
              <p className="premium-stats-subtitle">
                Статистика, которая говорит о нашем доверии и надежности
              </p>
            </div>
          </PremiumFadeIn>

          <div className="premium-stats-grid">
            {stats.map((stat, index) => (
              <PremiumFadeIn key={index} delay={300 + index * 100}>
                <PremiumFloat intensity={0.3} duration={4} delay={index * 0.5}>
                  <PremiumGlassCard className="premium-stat-card" borderGlow>
                    <div className="premium-stat-icon">
                      <stat.icon className="w-6 h-6 text-purple-400" />
                    </div>
                    
                    <div className="premium-stat-number">
                      <PremiumCounter 
                        target={stat.value} 
                        suffix={stat.suffix}
                        className="text-3xl md:text-4xl font-bold text-white"
                      />
                    </div>
                    
                    <h3 className="premium-stat-label">
                      {stat.label}
                    </h3>
                    
                    <p className="premium-stat-description">
                      {stat.description}
                    </p>
                  </PremiumGlassCard>
                </PremiumFloat>
              </PremiumFadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="premium-testimonials">
        <div className="premium-testimonials-container">
          <PremiumFadeIn delay={200}>
            <div className="premium-testimonials-header">
              <PremiumGlassCard className="premium-testimonials-badge">
                <Heart className="w-4 h-4 text-purple-400" />
                <span className="text-sm font-medium text-white">Отзывы</span>
              </PremiumGlassCard>
              
              <h2 className="premium-testimonials-title">
                Что говорят наши <span className="text-purple-400">пользователи</span>
              </h2>
              
              <p className="premium-testimonials-subtitle">
                Реальные отзывы от реальных пользователей
              </p>
            </div>
          </PremiumFadeIn>

          <div className="premium-testimonials-content">
            <PremiumFadeIn delay={400}>
              <div className="premium-testimonial-main">
                <PremiumGlassCard className="premium-testimonial-card">
                  <div className="premium-testimonial-content">
                    <div className="premium-testimonial-rating">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                      ))}
                    </div>
                    
                    <p className="premium-testimonial-text">
                      "{testimonials[activeTestimonial].content}"
                    </p>
                    
                    <div className="premium-testimonial-author">
                      <div className="premium-testimonial-avatar">
                        {testimonials[activeTestimonial].avatar}
                      </div>
                      <div className="premium-testimonial-info">
                        <div className="premium-testimonial-name">
                          {testimonials[activeTestimonial].name}
                        </div>
                        <div className="premium-testimonial-role">
                          {testimonials[activeTestimonial].role}
                        </div>
                      </div>
                    </div>
                  </div>
                </PremiumGlassCard>
              </div>
            </PremiumFadeIn>

            <div className="premium-testimonials-nav">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  className={`premium-testimonial-dot ${activeTestimonial === index ? 'active' : ''}`}
                  onClick={() => setActiveTestimonial(index)}
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="premium-cta">
        <div 
          className="premium-cta-bg"
          style={{
            background: `
              radial-gradient(circle at ${mousePosition.x}px ${mousePosition.y}px, rgba(82, 39, 255, 0.15), transparent 50%),
              linear-gradient(135deg, #5227ff 0%, #7c3aed 100%)
            `
          }}
        />
        
        <div className="premium-cta-container">
          <PremiumFadeIn delay={200}>
            <div className="premium-cta-content">
              <PremiumGlassCard className="premium-cta-badge">
                <Zap className="w-4 h-4 text-white" />
                <span className="text-sm font-medium text-white">Начните сейчас</span>
              </PremiumGlassCard>
              
              <h2 className="premium-cta-title">
                Готовы начать безопасные покупки?
              </h2>
              
              <p className="premium-cta-subtitle">
                Присоединяйтесь к тысячам довольных пользователей уже сегодня
              </p>
              
              <div className="premium-cta-buttons">
                <PremiumButton 
                  variant="primary" 
                  size="lg"
                  href="/catalog"
                  icon={<ArrowRight className="w-5 h-5" />}
                >
                  Начать покупки
                </PremiumButton>
                
                <PremiumButton 
                  variant="ghost" 
                  size="lg"
                  href="/register"
                  className="text-white border-white hover:bg-white hover:text-purple-600"
                >
                  Создать аккаунт
                </PremiumButton>
              </div>
              
              <div className="premium-cta-trust">
                <div className="premium-cta-trust-item">
                  <Shield className="w-5 h-5 text-white" />
                  <span>100% безопасность</span>
                </div>
                <div className="premium-cta-trust-item">
                  <Award className="w-5 h-5 text-white" />
                  <span>Гарантия качества</span>
                </div>
                <div className="premium-cta-trust-item">
                  <Zap className="w-5 h-5 text-white" />
                  <span>Мгновенная доставка</span>
                </div>
              </div>
            </div>
          </PremiumFadeIn>
        </div>
      </section>
    </div>
  );
};

export default PremiumHomePage;

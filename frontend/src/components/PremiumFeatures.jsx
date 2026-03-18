import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { 
  PremiumFeatureCard, 
  PremiumGrid, 
  PremiumFadeIn,
  PremiumFloat,
  PremiumGlassCard
} from './PremiumComponents';
import { 
  Shield, 
  Zap, 
  Users, 
  TrendingUp, 
  Clock, 
  Award,
  Gamepad2,
  Coins,
  KeyRound,
  Gift,
  Heart,
  Rocket,
  Star,
  CheckCircle,
  ArrowRight
} from 'lucide-react';

const PremiumFeatures = () => {
  const [activeTab, setActiveTab] = useState('features');
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  const features = [
    {
      icon: Shield,
      title: "Эскроу защита",
      description: "Все сделки проходят через защищенный эскроу сервис с гарантией возврата средств.",
      gradient: "from-purple-500 to-pink-500",
      badge: "100% безопасно",
      delay: 100
    },
    {
      icon: Zap,
      title: "Мгновенная доставка",
      description: "Автоматическая доставка цифровых товаров сразу после подтверждения оплаты.",
      gradient: "from-blue-500 to-cyan-500",
      badge: "Автоматически",
      delay: 200
    },
    {
      icon: Users,
      title: "Проверенные продавцы",
      description: "Только верифицированные пользователи с высоким рейтингом и положительными отзывами.",
      gradient: "from-green-500 to-emerald-500",
      badge: "Верифицировано",
      delay: 300
    },
    {
      icon: TrendingUp,
      title: "Растущий рейтинг",
      description: "Повышайте свой рейтинг с каждой успешной сделкой и получайте дополнительные бонусы.",
      gradient: "from-orange-500 to-red-500",
      badge: "Бонусы",
      delay: 400
    },
    {
      icon: Clock,
      title: "24/7 Поддержка",
      description: "Круглосуточная техническая поддержка и оперативное разрешение спорных ситуаций.",
      gradient: "from-indigo-500 to-purple-500",
      badge: "Онлайн",
      delay: 500
    },
    {
      icon: Award,
      title: "Программа лояльности",
      description: "Участвуйте в акциях, получайте кэшбэк и эксклюзивные предложения.",
      gradient: "from-yellow-500 to-orange-500",
      badge: "Кэшбэк",
      delay: 600
    }
  ];

  const categories = [
    {
      icon: Gamepad2,
      title: "Игровые аккаунты",
      count: "1000+",
      description: "Аккаунты популярных игр с гарантией безопасности",
      href: "/catalog?category=game-accounts",
      color: "purple"
    },
    {
      icon: Coins,
      title: "Игровая валюта",
      count: "500+",
      description: "Виртуальная валюта и ресурсы для любых игр",
      href: "/catalog?category=game-currency",
      color: "blue"
    },
    {
      icon: KeyRound,
      title: "Цифровые ключи",
      count: "300+",
      description: "Лицензионные ключи для игр и ПО",
      href: "/catalog?category=keys",
      color: "green"
    },
    {
      icon: Gift,
      title: "Подарочные карты",
      count: "200+",
      description: "Подарочные карты для популярных сервисов",
      href: "/catalog?category=gift-cards",
      color: "orange"
    },
    {
      icon: Heart,
      title: "Подписки",
      count: "150+",
      description: "Месячные подписки на стриминговые сервисы",
      href: "/catalog?category=subscriptions",
      color: "pink"
    },
    {
      icon: Rocket,
      title: "Софт и программы",
      count: "100+",
      description: "Лицензионное программное обеспечение",
      href: "/catalog?category=software",
      color: "indigo"
    }
  ];

  const benefits = [
    "Полная безопасность сделок",
    "Мгновенная доставка 24/7",
    "Поддержка всех платежных систем",
    "Персональный менеджер для VIP клиентов",
    "Эксклюзивные скидки и акции"
  ];

  return (
    <section className="premium-features">
      {/* Animated background */}
      <div 
        className="premium-features-bg"
        style={{
          background: `
            radial-gradient(circle at ${mousePosition.x}px ${mousePosition.y}px, rgba(82, 39, 255, 0.08), transparent 50%),
            linear-gradient(180deg, #0d0716 0%, #170d27 100%)
          `
        }}
      />

      <div className="premium-features-container">
        {/* Section header */}
        <PremiumFadeIn delay={200}>
          <div className="premium-features-header">
            <PremiumGlassCard className="premium-features-badge">
              <Star className="w-4 h-4 text-purple-400" />
              <span className="text-sm font-medium text-white">Возможности</span>
            </PremiumGlassCard>
            
            <h2 className="premium-features-title">
              Почему выбирают <span className="text-purple-400">Minions Market</span>
            </h2>
            
            <p className="premium-features-subtitle">
              Современная платформа с продвинутой защитой, удобным интерфейсом и премиум функциями
            </p>
          </div>
        </PremiumFadeIn>

        {/* Tabs */}
        <PremiumFadeIn delay={400}>
          <div className="premium-features-tabs">
            <button
              className={`premium-tab ${activeTab === 'features' ? 'active' : ''}`}
              onClick={() => setActiveTab('features')}
            >
              Возможности
            </button>
            <button
              className={`premium-tab ${activeTab === 'categories' ? 'active' : ''}`}
              onClick={() => setActiveTab('categories')}
            >
              Категории
            </button>
            <button
              className={`premium-tab ${activeTab === 'benefits' ? 'active' : ''}`}
              onClick={() => setActiveTab('benefits')}
            >
              Преимущества
            </button>
          </div>
        </PremiumFadeIn>

        {/* Features grid */}
        {activeTab === 'features' && (
          <div className="premium-features-content">
            <PremiumGrid cols={{ default: 1, md: 2, lg: 3 }} gap="lg">
              {features.map((feature, index) => (
                <PremiumFadeIn key={index} delay={feature.delay}>
                  <PremiumFeatureCard 
                    tilt={true} 
                    glow={true}
                    delay={feature.delay}
                  >
                    <div className="premium-feature-content">
                      <div className={`premium-feature-icon ${feature.gradient}`}>
                        <feature.icon className="w-6 h-6 text-white" />
                      </div>
                      
                      <div className="premium-feature-badge">
                        {feature.badge}
                      </div>
                      
                      <h3 className="premium-feature-title">
                        {feature.title}
                      </h3>
                      
                      <p className="premium-feature-description">
                        {feature.description}
                      </p>
                      
                      <div className="premium-feature-action">
                        <span className="text-purple-400 text-sm font-medium flex items-center gap-1">
                          Подробнее <ArrowRight className="w-4 h-4" />
                        </span>
                      </div>
                    </div>
                  </PremiumFeatureCard>
                </PremiumFadeIn>
              ))}
            </PremiumGrid>
          </div>
        )}

        {/* Categories grid */}
        {activeTab === 'categories' && (
          <div className="premium-categories-content">
            <PremiumGrid cols={{ default: 1, md: 2, lg: 3 }} gap="lg">
              {categories.map((category, index) => (
                <PremiumFadeIn key={index} delay={100 + index * 100}>
                  <Link to={category.href} className="block">
                    <PremiumGlassCard className="premium-category-card hover-enabled" spotlight>
                      <div className="premium-category-content">
                        <div className={`premium-category-icon bg-${category.color}-500/10`}>
                          <category.icon className={`w-8 h-8 text-${category.color}-400`} />
                        </div>
                        
                        <h3 className="premium-category-title">
                          {category.title}
                        </h3>
                        
                        <div className="premium-category-count">
                          {category.count}
                        </div>
                        
                        <p className="premium-category-description">
                          {category.description}
                        </p>
                        
                        <div className="premium-category-action">
                          <span className={`text-${category.color}-400 font-medium flex items-center gap-1`}>
                            Перейти <ArrowRight className="w-4 h-4" />
                          </span>
                        </div>
                      </div>
                    </PremiumGlassCard>
                  </Link>
                </PremiumFadeIn>
              ))}
            </PremiumGrid>
          </div>
        )}

        {/* Benefits section */}
        {activeTab === 'benefits' && (
          <div className="premium-benefits-content">
            <PremiumGrid cols={{ default: 1, md: 2 }} gap="xl">
              <PremiumFadeIn delay={200}>
                <div className="premium-benefits-left">
                  <h3 className="premium-benefits-title">
                    Премиум преимущества для всех пользователей
                  </h3>
                  <p className="premium-benefits-description">
                    Мы создали идеальные условия для безопасных и удобных покупок цифровых товаров
                  </p>
                  
                  <div className="premium-benefits-list">
                    {benefits.map((benefit, index) => (
                      <PremiumFadeIn key={index} delay={300 + index * 100}>
                        <div className="premium-benefit-item">
                          <CheckCircle className="w-5 h-5 text-green-400 flex-shrink-0" />
                          <span>{benefit}</span>
                        </div>
                      </PremiumFadeIn>
                    ))}
                  </div>
                </div>
              </PremiumFadeIn>

              <PremiumFadeIn delay={400}>
                <PremiumFloat intensity={0.3} duration={5}>
                  <PremiumGlassCard className="premium-benefits-card" borderGlow>
                    <div className="premium-benefits-stats">
                      <div className="premium-benefit-stat">
                        <div className="premium-benefit-number">99.9%</div>
                        <div className="premium-benefit-label">Успешных сделок</div>
                      </div>
                      
                      <div className="premium-benefit-stat">
                        <div className="premium-benefit-number">
                          <span className="text-3xl">4.9</span>/5
                        </div>
                        <div className="premium-benefit-label">Средний рейтинг</div>
                      </div>
                      
                      <div className="premium-benefit-stat">
                        <div className="premium-benefit-number">2мин</div>
                        <div className="premium-benefit-label">Среднее время доставки</div>
                      </div>
                    </div>
                  </PremiumGlassCard>
                </PremiumFloat>
              </PremiumFadeIn>
            </PremiumGrid>
          </div>
        )}
      </div>
    </section>
  );
};

export default PremiumFeatures;

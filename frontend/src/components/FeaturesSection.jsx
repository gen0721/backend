import React from 'react';
import { Link } from 'react-router-dom';
import { 
  FeatureCard, 
  BentoGrid, 
  FadeIn 
} from './ReactBitsComponents';
import { 
  Shield, 
  Zap, 
  Users, 
  TrendingUp, 
  Clock, 
  Award,
  Gamepad2,
  Coins,
  KeyRound
} from 'lucide-react';

const FeaturesSection = () => {
  const features = [
    {
      icon: Shield,
      title: "Безопасные сделки",
      description: "Все сделки проходят через эскроу сервис. Гарантия возврата средств.",
      gradient: "from-purple-500 to-pink-500",
      delay: 100
    },
    {
      icon: Zap,
      title: "Мгновенные доставки",
      description: "Автоматическая доставка после подтверждения оплаты.",
      gradient: "from-blue-500 to-cyan-500",
      delay: 200
    },
    {
      icon: Users,
      title: "Проверенные продавцы",
      description: "Только проверенные пользователи с высоким рейтингом.",
      gradient: "from-green-500 to-emerald-500",
      delay: 300
    },
    {
      icon: TrendingUp,
      title: "Рост рейтинга",
      description: "Повышайте рейтинг с каждой успешной сделкой.",
      gradient: "from-orange-500 to-red-500",
      delay: 400
    },
    {
      icon: Clock,
      title: "24/7 Поддержка",
      description: "Круглосуточная поддержка и разрешение споров.",
      gradient: "from-indigo-500 to-purple-500",
      delay: 500
    },
    {
      icon: Award,
      title: "Бонусы и акции",
      description: "Участвуйте в акциях и получайте бонусы.",
      gradient: "from-yellow-500 to-orange-500",
      delay: 600
    }
  ];

  const categories = [
    {
      icon: Gamepad2,
      title: "Игровые аккаунты",
      count: "1000+",
      description: "Аккаунты популярных игр",
      href: "/catalog?category=game-accounts"
    },
    {
      icon: Coins,
      title: "Валюта",
      count: "500+",
      description: "Игровая валюта и ресурсы",
      href: "/catalog?category=game-currency"
    },
    {
      icon: KeyRound,
      title: "Ключи и лицензии",
      count: "300+",
      description: "Цифровые ключи и лицензии",
      href: "/catalog?category=keys"
    }
  ];

  return (
    <section className="py-20 relative">
      <div className="max-w-7xl mx-auto px-6">
        <FadeIn>
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Почему выбирают <span className="text-purple-400">Minions Market</span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Современная платформа с продвинутой защитой и удобным интерфейсом
            </p>
          </div>
        </FadeIn>

        <BentoGrid className="mb-20">
          {features.map((feature, index) => (
            <FadeIn key={index} delay={feature.delay}>
              <FeatureCard spotlight>
                <div className="flex items-start space-x-4">
                  <div className={`p-3 rounded-xl bg-gradient-to-r ${feature.gradient}`}>
                    <feature.icon className="w-6 h-6 text-white" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-semibold text-white mb-2">
                      {feature.title}
                    </h3>
                    <p className="text-gray-400 leading-relaxed">
                      {feature.description}
                    </p>
                  </div>
                </div>
              </FeatureCard>
            </FadeIn>
          ))}
        </BentoGrid>

        <FadeIn delay={700}>
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Популярные категории
            </h2>
            <p className="text-lg text-gray-300">
              Найдите то, что ищете, среди тысяч товаров
            </p>
          </div>
        </FadeIn>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {categories.map((category, index) => (
            <FadeIn key={index} delay={800 + index * 100}>
              <Link 
                to={category.href}
                className="block group"
              >
                <FeatureCard spotlight className="h-full text-center">
                  <div className="flex flex-col items-center space-y-4">
                    <div className="p-4 rounded-full bg-purple-500/10 group-hover:bg-purple-500/20 transition-colors">
                      <category.icon className="w-8 h-8 text-purple-400" />
                    </div>
                    <h3 className="text-xl font-semibold text-white">
                      {category.title}
                    </h3>
                    <p className="text-2xl font-bold text-purple-400">
                      {category.count}
                    </p>
                    <p className="text-gray-400">
                      {category.description}
                    </p>
                  </div>
                </FeatureCard>
              </Link>
            </FadeIn>
          ))}
        </div>
      </div>

      {/* Background decorations */}
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-purple-500 to-transparent" />
      <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-purple-500 to-transparent" />
    </section>
  );
};

export default FeaturesSection;

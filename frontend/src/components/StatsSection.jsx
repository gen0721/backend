import React from 'react';
import { 
  AnimatedCounter, 
  FadeIn, 
  Floating 
} from './ReactBitsComponents';
import { 
  Users, 
  ShoppingCart, 
  Shield, 
  TrendingUp,
  Clock,
  Award
} from 'lucide-react';

const StatsSection = () => {
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
      value: 4.8,
      suffix: "/5",
      label: "Средний рейтинг",
      description: "Высокая оценка от нашего сообщества"
    },
    {
      icon: Clock,
      value: 24,
      suffix: "/7",
      label: "Поддержка",
      description: "Круглосуточная помощь пользователям"
    },
    {
      icon: Award,
      value: 1000,
      suffix: "+",
      label: "Проверенных продавцов",
      description: "Только надежные и проверенные партнеры"
    }
  ];

  return (
    <section className="py-20 relative overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-r from-purple-900/10 via-blue-900/10 to-pink-900/10" />
      
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <FadeIn>
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Наша платформа в <span className="text-purple-400">цифрах</span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Статистика, которая говорит о нашем доверии и надежности
            </p>
          </div>
        </FadeIn>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {stats.map((stat, index) => (
            <FadeIn key={index} delay={index * 100}>
              <Floating className="text-center" style={{ animationDelay: `${index * 0.2}s` }}>
                <div className="bg-gradient-to-br from-purple-500/10 to-pink-500/10 rounded-2xl p-8 border border-purple-500/20 hover:border-purple-500/40 transition-all duration-300">
                  <div className="flex justify-center mb-4">
                    <div className="p-3 rounded-full bg-gradient-to-r from-purple-500 to-pink-500">
                      <stat.icon className="w-6 h-6 text-white" />
                    </div>
                  </div>
                  
                  <div className="mb-2">
                    <AnimatedCounter 
                      target={stat.value} 
                      suffix={stat.suffix}
                      className="text-3xl md:text-4xl font-bold text-white"
                    />
                  </div>
                  
                  <h3 className="text-xl font-semibold text-white mb-2">
                    {stat.label}
                  </h3>
                  
                  <p className="text-gray-400 text-sm leading-relaxed">
                    {stat.description}
                  </p>
                </div>
              </Floating>
            </FadeIn>
          ))}
        </div>

        <FadeIn delay={700}>
          <div className="mt-16 text-center">
            <div className="inline-flex items-center gap-4 bg-purple-500/10 border border-purple-500/20 rounded-full px-6 py-3">
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
                <span className="text-green-400 text-sm font-medium">Система работает</span>
              </div>
              <div className="w-px h-4 bg-purple-500/30" />
              <span className="text-purple-300 text-sm">
                Обновлено: {new Date().toLocaleTimeString('ru-RU')}
              </span>
            </div>
          </div>
        </FadeIn>
      </div>

      {/* Animated background elements */}
      <div className="absolute top-10 left-10 w-32 h-32 bg-purple-500/10 rounded-full blur-3xl animate-pulse" />
      <div className="absolute bottom-10 right-10 w-40 h-40 bg-blue-500/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }} />
      <div className="absolute top-1/2 left-1/3 w-24 h-24 bg-pink-500/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '2s' }} />
    </section>
  );
};

export default StatsSection;

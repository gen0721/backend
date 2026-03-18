import React from 'react';
import { Link } from 'react-router-dom';
import { 
  GradientText, 
  CTAButton, 
  FadeIn, 
  Floating 
} from './ReactBitsComponents';
import { ArrowRight, Shield, Zap, Users } from 'lucide-react';

const HeroSection = () => {
  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Background gradient effects */}
      <div className="absolute inset-0 bg-gradient-to-br from-purple-900/20 via-blue-900/10 to-pink-900/20" />
      
      <div className="relative z-10 text-center max-w-6xl mx-auto px-6">
        <FadeIn delay={100}>
          <div className="inline-flex items-center gap-2 bg-purple-500/10 border border-purple-500/20 rounded-full px-4 py-2 mb-6">
            <Shield className="w-4 h-4 text-purple-400" />
            <span className="text-purple-300 text-sm font-medium">Безопасные сделки</span>
          </div>
        </FadeIn>

        <FadeIn delay={200}>
          <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
            <span className="text-white">Minions</span>
            <br />
            <GradientText>Market</GradientText>
          </h1>
        </FadeIn>

        <FadeIn delay={300}>
          <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-3xl mx-auto leading-relaxed">
            Безопасный маркетплейс цифровых товаров с гарантией сделок и 
            <span className="text-purple-400 font-semibold"> защитой покупателей</span>
          </p>
        </FadeIn>

        <FadeIn delay={400}>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
            <CTAButton href="/catalog" className="text-lg px-8 py-4">
              Начать покупки
              <ArrowRight className="w-5 h-5" />
            </CTAButton>
            
            <CTAButton 
              href="/sell" 
              className="text-lg px-8 py-4 bg-transparent border-2 border-purple-500 hover:bg-purple-500/10"
            >
              Стать продавцом
            </CTAButton>
          </div>
        </FadeIn>

        <FadeIn delay={500}>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <Floating className="text-center">
              <div className="bg-purple-500/10 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <Users className="w-8 h-8 text-purple-400" />
              </div>
              <h3 className="text-xl font-semibold text-white mb-2">
                <AnimatedCounter target={10000} suffix="+" />
              </h3>
              <p className="text-gray-400">Активных пользователей</p>
            </Floating>

            <Floating className="text-center" style={{ animationDelay: '0.5s' }}>
              <div className="bg-blue-500/10 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <Shield className="w-8 h-8 text-blue-400" />
              </div>
              <h3 className="text-xl font-semibold text-white mb-2">
                <AnimatedCounter target={50000} suffix="+" />
              </h3>
              <p className="text-gray-400">Успешных сделок</p>
            </Floating>

            <Floating className="text-center" style={{ animationDelay: '1s' }}>
              <div className="bg-pink-500/10 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <Zap className="w-8 h-8 text-pink-400" />
              </div>
              <h3 className="text-xl font-semibold text-white mb-2">24/7</h3>
              <p className="text-gray-400">Поддержка</p>
            </Floating>
          </div>
        </FadeIn>
      </div>

      {/* Animated background elements */}
      <div className="absolute top-20 left-10 w-32 h-32 bg-purple-500/20 rounded-full blur-3xl animate-pulse" />
      <div className="absolute bottom-20 right-10 w-48 h-48 bg-blue-500/20 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '2s' }} />
      <div className="absolute top-1/2 left-1/4 w-24 h-24 bg-pink-500/20 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }} />
    </section>
  );
};

// Import AnimatedCounter locally to avoid circular imports
import { AnimatedCounter } from './ReactBitsComponents';

export default HeroSection;

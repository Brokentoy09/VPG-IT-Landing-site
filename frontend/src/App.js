import React, { useEffect, useState } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { 
  Code, 
  Cpu, 
  Zap, 
  Shield, 
  Settings, 
  ChevronRight,
  CheckCircle,
  Mail,
  Phone,
  MapPin,
  ArrowRight,
  Monitor,
  Database,
  Cloud,
  Users,
  Award,
  Target
} from 'lucide-react';
import './App.css';

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { scrollYProgress } = useScroll();
  const yRange = useTransform(scrollYProgress, [0, 1], [0, 100]);

  useEffect(() => {
    const handleScroll = () => {
      const scrolled = window.pageYOffset;
      const parallax = document.querySelector('.parallax');
      if (parallax) {
        const speed = scrolled * 0.5;
        parallax.style.transform = `translateY(${speed}px)`;
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Navigation Component
  const Navigation = () => (
    <motion.nav 
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className="fixed top-0 left-0 right-0 z-50 glass-dark"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          <motion.div 
            className="flex items-center space-x-2"
            whileHover={{ scale: 1.05 }}
          >
            <div className="w-10 h-10 gradient-orange rounded-lg flex items-center justify-center">
              <Code className="w-6 h-6 text-white" />
            </div>
            <span className="text-2xl font-bold text-white">VPG IT</span>
          </motion.div>
          
          <div className="hidden md:flex items-center space-x-8">
            {['Услуги', 'Технологии', 'Отрасли', 'О нас', 'Контакты'].map((item) => (
              <motion.a
                key={item}
                href={`#${item.toLowerCase()}`}
                className="text-white hover:text-vpg-orange transition-colors duration-300"
                whileHover={{ y: -2 }}
              >
                {item}
              </motion.a>
            ))}
            <motion.button
              className="gradient-orange px-6 py-2 rounded-lg text-white font-semibold hover-scale"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Связаться
            </motion.button>
          </div>
        </div>
      </div>
    </motion.nav>
  );

  // Hero Section
  const HeroSection = () => (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-vpg-dark">
      <div 
        className="parallax absolute inset-0 bg-cover bg-center opacity-30"
        style={{
          backgroundImage: 'url(https://images.unsplash.com/photo-1597733336794-12d05021d510)',
        }}
      />
      <div className="absolute inset-0 gradient-overlay" />
      
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          <motion.h1 
            className="text-5xl md:text-7xl font-bold text-white mb-6 text-glow"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1.2, delay: 0.2 }}
          >
            Программное обеспечение для
            <span className="text-vpg-orange"> лазерных систем</span>
          </motion.h1>
          
          <motion.p 
            className="text-xl md:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.5 }}
          >
            Разрабатываем высокопроизводительное ПО для управления лазерными системами. 
            30 лет опыта в индустрии лазерных технологий.
          </motion.p>
          
          <motion.div 
            className="flex flex-col sm:flex-row gap-4 justify-center items-center"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.8 }}
          >
            <motion.button
              className="gradient-orange px-8 py-4 rounded-lg text-white font-semibold text-lg glow-orange flex items-center gap-2 hover-scale"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              Получить консультацию
              <ArrowRight className="w-5 h-5" />
            </motion.button>
            
            <motion.button
              className="glass px-8 py-4 rounded-lg text-white font-semibold text-lg flex items-center gap-2 hover-scale"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              Наши решения
              <ChevronRight className="w-5 h-5" />
            </motion.button>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );

  // Services Section
  const ServicesSection = () => {
    const services = [
      {
        icon: <Code className="w-8 h-8" />,
        title: "Разработка ПО для лазерных систем",
        description: "Создаем специализированное программное обеспечение для управления лазерными установками любой сложности",
        image: "https://images.unsplash.com/photo-1484417894907-623942c8ee29"
      },
      {
        icon: <Settings className="w-8 h-8" />,
        title: "Системная интеграция",
        description: "Интегрируем лазерные системы в существующие производственные процессы с полной автоматизацией",
        image: "https://images.unsplash.com/photo-1542831371-29b0f74f9713"
      },
      {
        icon: <Shield className="w-8 h-8" />,
        title: "Техническая поддержка",
        description: "Обеспечиваем круглосуточную поддержку и обновления для бесперебойной работы оборудования",
        image: "https://images.unsplash.com/photo-1484417894907-623942c8ee29"
      }
    ];

    return (
      <section id="услуги" className="py-20 bg-vpg-dark-light">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Наши <span className="text-vpg-orange">услуги</span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Комплексные решения для разработки и сопровождения программного обеспечения лазерных систем
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                viewport={{ once: true }}
                className="glass-dark rounded-2xl p-8 hover-scale group"
                whileHover={{ y: -10 }}
              >
                <div 
                  className="w-full h-48 bg-cover bg-center rounded-lg mb-6 opacity-80 group-hover:opacity-100 transition-opacity duration-300"
                  style={{ backgroundImage: `url(${service.image})` }}
                />
                <div className="text-vpg-orange mb-4 group-hover:text-vpg-orange-light transition-colors duration-300">
                  {service.icon}
                </div>
                <h3 className="text-xl font-bold text-white mb-4">{service.title}</h3>
                <p className="text-gray-300 leading-relaxed">{service.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    );
  };

  // Technology Stack Section
  const TechnologySection = () => {
    const technologies = [
      { name: "C++", description: "Высокопроизводительные системы реального времени" },
      { name: "Python", description: "Машинное обучение и анализ данных" },
      { name: "C#/.NET", description: "Пользовательские интерфейсы и интеграция" },
      { name: "MATLAB", description: "Математическое моделирование и симуляция" },
      { name: "LabVIEW", description: "Системы сбора и обработки данных" },
      { name: "Qt", description: "Кроссплатформенные приложения" }
    ];

    return (
      <section id="технологии" className="py-20 bg-vpg-dark">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Наш <span className="text-vpg-orange">технологический стек</span>
              </h2>
              <p className="text-xl text-gray-300 mb-8">
                Используем передовые технологии для создания надежных и эффективных решений
              </p>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {technologies.map((tech, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className="glass-dark rounded-lg p-4 hover-scale"
                    whileHover={{ scale: 1.02 }}
                  >
                    <h4 className="text-vpg-orange font-bold text-lg mb-2">{tech.name}</h4>
                    <p className="text-gray-300 text-sm">{tech.description}</p>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div 
                className="w-full h-96 bg-cover bg-center rounded-2xl glass-dark p-8"
                style={{ backgroundImage: 'url(https://images.pexels.com/photos/577585/pexels-photo-577585.jpeg)' }}
              >
                <div className="absolute inset-0 gradient-overlay rounded-2xl" />
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    );
  };

  // Industries Section
  const IndustriesSection = () => {
    const industries = [
      {
        title: "Промышленное производство",
        description: "Автоматизированные системы лазерной резки, сварки и маркировки для промышленных предприятий",
        image: "https://images.unsplash.com/photo-1647427060118-4911c9821b82",
        features: ["Лазерная резка", "Робототехника", "Контроль качества", "Автоматизация"]
      },
      {
        title: "Медицинские применения",
        description: "Специализированное ПО для медицинских лазерных установок и диагностических систем",
        image: "https://images.pexels.com/photos/7108123/pexels-photo-7108123.jpeg",
        features: ["Хирургические лазеры", "Диагностика", "Терапия", "Безопасность"]
      }
    ];

    return (
      <section id="отрасли" className="py-20 bg-vpg-dark-light">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Отрасли <span className="text-vpg-orange">применения</span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Наши решения работают в различных сферах, от промышленности до медицины
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {industries.map((industry, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                viewport={{ once: true }}
                className="glass-dark rounded-2xl overflow-hidden hover-scale group"
                whileHover={{ y: -5 }}
              >
                <div 
                  className="h-64 bg-cover bg-center group-hover:scale-105 transition-transform duration-500"
                  style={{ backgroundImage: `url(${industry.image})` }}
                />
                <div className="p-8">
                  <h3 className="text-2xl font-bold text-white mb-4">{industry.title}</h3>
                  <p className="text-gray-300 mb-6">{industry.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {industry.features.map((feature, idx) => (
                      <span 
                        key={idx}
                        className="px-3 py-1 bg-vpg-orange bg-opacity-20 text-vpg-orange rounded-full text-sm"
                      >
                        {feature}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    );
  };

  // Why Choose Us Section
  const WhyChooseUsSection = () => {
    const reasons = [
      { icon: <Award className="w-6 h-6" />, title: "30 лет опыта", description: "Три десятилетия работы с лазерными технологиями" },
      { icon: <Shield className="w-6 h-6" />, title: "ISO 9001:2015", description: "Сертифицированные процессы разработки" },
      { icon: <Target className="w-6 h-6" />, title: "Специализация", description: "Фокус на лазерных системах и их ПО" },
      { icon: <Users className="w-6 h-6" />, title: "Поддержка 24/7", description: "Круглосуточная техническая поддержка" }
    ];

    return (
      <section id="о нас" className="py-20 bg-vpg-dark">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Почему выбирают <span className="text-vpg-orange">VPG IT</span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Мы объединяем глубокую экспертизу в лазерных технологиях с современными подходами к разработке ПО
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {reasons.map((reason, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="glass-dark rounded-2xl p-6 text-center hover-scale group"
                whileHover={{ y: -5 }}
              >
                <div className="text-vpg-orange mb-4 flex justify-center group-hover:text-vpg-orange-light transition-colors duration-300">
                  {reason.icon}
                </div>
                <h3 className="text-xl font-bold text-white mb-2">{reason.title}</h3>
                <p className="text-gray-300">{reason.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    );
  };

  // Contact Section
  const ContactSection = () => (
    <section id="контакты" className="py-20 bg-vpg-dark-light relative overflow-hidden">
      <div 
        className="absolute inset-0 bg-cover bg-center opacity-10"
        style={{ backgroundImage: 'url(https://images.unsplash.com/photo-1556691421-cf15fe27a0b6)' }}
      />
      <div className="absolute inset-0 gradient-overlay" />
      
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Готовы к <span className="text-vpg-orange">сотрудничеству?</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Свяжитесь с нами для обсуждения вашего проекта
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="glass-dark rounded-2xl p-8"
          >
            <h3 className="text-2xl font-bold text-white mb-6">Свяжитесь с нами</h3>
            <div className="space-y-4">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 gradient-orange rounded-lg flex items-center justify-center">
                  <Mail className="w-6 h-6 text-white" />
                </div>
                <div>
                  <p className="text-gray-300">Email</p>
                  <p className="text-white font-semibold">info@vpg-it.ru</p>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 gradient-orange rounded-lg flex items-center justify-center">
                  <Phone className="w-6 h-6 text-white" />
                </div>
                <div>
                  <p className="text-gray-300">Телефон</p>
                  <p className="text-white font-semibold">+7 (495) 123-45-67</p>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 gradient-orange rounded-lg flex items-center justify-center">
                  <MapPin className="w-6 h-6 text-white" />
                </div>
                <div>
                  <p className="text-gray-300">Адрес</p>
                  <p className="text-white font-semibold">Москва, Россия</p>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="glass-dark rounded-2xl p-8"
          >
            <h3 className="text-2xl font-bold text-white mb-6">Отправить сообщение</h3>
            <form className="space-y-4">
              <div>
                <input
                  type="text"
                  placeholder="Ваше имя"
                  className="w-full px-4 py-3 bg-vpg-dark-medium text-white rounded-lg border border-gray-600 focus:border-vpg-orange focus:outline-none transition-colors duration-300"
                />
              </div>
              <div>
                <input
                  type="email"
                  placeholder="Email"
                  className="w-full px-4 py-3 bg-vpg-dark-medium text-white rounded-lg border border-gray-600 focus:border-vpg-orange focus:outline-none transition-colors duration-300"
                />
              </div>
              <div>
                <textarea
                  placeholder="Сообщение"
                  rows="4"
                  className="w-full px-4 py-3 bg-vpg-dark-medium text-white rounded-lg border border-gray-600 focus:border-vpg-orange focus:outline-none transition-colors duration-300 resize-none"
                ></textarea>
              </div>
              <motion.button
                type="submit"
                className="w-full gradient-orange py-3 rounded-lg text-white font-semibold hover-scale"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                Отправить сообщение
              </motion.button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );

  // Footer
  const Footer = () => (
    <footer className="bg-vpg-dark py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="flex items-center space-x-2 mb-4 md:mb-0">
            <div className="w-10 h-10 gradient-orange rounded-lg flex items-center justify-center">
              <Code className="w-6 h-6 text-white" />
            </div>
            <span className="text-2xl font-bold text-white">VPG IT</span>
          </div>
          <div className="text-gray-300 text-center md:text-right">
            <p>© 2024 VPG IT. Все права защищены.</p>
            <p className="text-sm mt-1">Разработка и сопровождение ПО для лазерных систем</p>
          </div>
        </div>
      </div>
    </footer>
  );

  return (
    <div className="overflow-x-hidden">
      <Navigation />
      <HeroSection />
      <ServicesSection />
      <TechnologySection />
      <IndustriesSection />
      <WhyChooseUsSection />
      <ContactSection />
      <Footer />
    </div>
  );
}

export default App;

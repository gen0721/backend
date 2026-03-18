# 🎮 Minions Market - Premium Digital Marketplace

![License](https://img.shields.io/badge/license-MIT-blue.svg)
![Node.js](https://img.shields.io/badge/node.js-20.x-green.svg)
![React](https://img.shields.io/badge/react-18.x-blue.svg)
![Railway](https://img.shields.io/badge/deployment-railway-purple.svg)

Безопасный маркетплейс цифровых товаров с премиум дизайном в стиле ReactBits. Полностью готов к развертыванию на Railway.

## ✨ Особенности

### 🎨 **Премиум UI/UX**
- **Современный дизайн** в стиле ReactBits
- **Анимированные градиенты** и glassmorphism эффекты
- **Интерактивные компоненты** с hover эффектами
- **PWA поддержка** для мобильных устройств
- **Адаптивный дизайн** для всех экранов

### 🛡️ **Безопасность**
- **Эскроу сервис** для защиты сделок
- **JWT аутентификация** с безопасными токенами
- **Rate limiting** и защита от атак
- **Автоматическая блокировка** подозрительных IP

### ⚡ **Функционал**
- **Категории товаров**: аккаунты, валюта, ключи, подписки
- **Платежные системы**: CryptoCloud, RuKassa, Telegram Bot
- **Рейтинг пользователей** и система отзывов
- **Автоматическая доставка** цифровых товаров
- **24/7 поддержка** и арбитраж споров

### 🚀 **Технологии**
- **Frontend**: React 18, Vite, TailwindCSS, Lucide Icons
- **Backend**: Node.js, Express, PostgreSQL
- **Deployment**: Railway, Nixpacks
- **PWA**: Service Worker, Web App Manifest

## 📦 Структура проекта

```
minions-market/
├── frontend/
│   ├── src/
│   │   ├── components/
│   │   │   ├── PremiumComponents.jsx    # UI компоненты
│   │   │   ├── PremiumHero.jsx          # Hero секция
│   │   │   └── PremiumFeatures.jsx     # Возможности
│   │   ├── styles/
│   │   │   ├── premium-global.css       # Глобальные стили
│   │   │   ├── premium-components.css    # Компоненты
│   │   │   └── premium-*.css           # Другие стили
│   │   └── pages/
│   │       └── HomePage.jsx              # Главная страница
│   ├── vite.config.js                   # Vite конфиг
│   └── package.json
├── backend/
│   ├── routes/                          # API маршруты
│   ├── models/                          # Модели БД
│   ├── utils/                           # Утилиты
│   └── server.js                        # Express сервер
├── railway.toml                         # Railway конфиг
├── .env.railway                         # Переменные окружения
├── .gitignore                           # Исключения Git
└── README.md                            # Этот файл
```

## 🚀 Быстрый старт

### 1. Клонирование и установка
```bash
# Клонирование репозитория
git clone https://github.com/YOUR_USERNAME/minions-market.git
cd minions-market

# Установка зависимостей
cd frontend && npm install
cd ../backend && npm install
```

### 2. Настройка переменных окружения
```bash
# Копирование шаблона
cp backend/.env.example backend/.env

# Настройка DATABASE_URL и других переменных
# См. .env.example для примера
```

### 3. Запуск в разработке
```bash
# Запуск бэкенда (порт 5000)
cd backend && npm start

# Запуск фронтенда (порт 5175)
cd frontend && npm run dev
```

### 4. Доступ к приложению
- **Frontend**: http://localhost:5175
- **Backend API**: http://localhost:5000
- **Health Check**: http://localhost:5000/api/health

## 🌐 Развертывание на Railway

### 1. Подготовка
```bash
# Коммит изменений
git add .
git commit -m "Ready for Railway deployment"
git push origin main
```

### 2. Railway настройки
1. [Создайте проект на Railway](https://railway.app/new)
2. Подключите GitHub репозиторий
3. Добавьте переменные окружения:

#### Обязательные:
```
RAILWAY_DATABASE_URL=postgresql://...
RAILWAY_JWT_SECRET=your-super-secret-jwt-key-32-chars
RAILWAY_ADMIN_LOGIN=admin
RAILWAY_ADMIN_PASSWORD=secure-password-123
```

#### Опциональные:
```
RAILWAY_TELEGRAM_BOT_TOKEN=123456789:AABB...
RAILWAY_CRYPTOCLOUD_API_KEY=your-key
RAILWAY_RUKASSA_SHOP_ID=your-shop-id
```

### 3. Деплой
- Railway автоматически соберет и развернет проект
- Frontend и Backend будут доступны по одному домену
- Health checks обеспечат надежность

## 📱 PWA Установка

После развертывания:
1. Откройте сайт в мобильном браузере
2. Нажмите "Добавить на главный экран"
3. Приложение будет работать как нативное

## 🎨 Компоненты

### PremiumComponents
- **PremiumGradientText** - анимированный градиентный текст
- **PremiumGlassCard** - glassmorphism карточки
- **PremiumButton** - интерактивные кнопки
- **PremiumFeatureCard** - карточки с 3D эффектами
- **PremiumCounter** - анимированные счетчики

### Секции
- **PremiumHero** - главный экран с анимациями
- **PremiumFeatures** - возможности с вкладками
- **PremiumStats** - статистика с счетчиками

## 🛠️ API Эндпоинты

### Аутентификация
- `POST /api/auth/login` - вход
- `POST /api/auth/register` - регистрация
- `GET /api/auth/me` - профиль пользователя

### Товары
- `GET /api/products` - список товаров
- `POST /api/products` - создание товара
- `GET /api/products/:id` - детальная информация

### Сделки
- `POST /api/deals` - создание сделки
- `GET /api/deals` - список сделок
- `PUT /api/deals/:id` - обновление статуса

## 🔧 Конфигурация

### Frontend (vite.config.js)
```javascript
export default defineConfig({
  plugins: [react()],
  build: {
    outDir: 'dist',
    rollupOptions: {
      output: {
        manualChunks: {
          vendor: ['react', 'react-dom'],
          router: ['react-router-dom'],
          three: ['three', 'postprocessing']
        }
      }
    }
  }
})
```

### Backend (server.js)
- Express сервер с middleware
- Автоматическая раздача статики
- Health checks и мониторинг
- Cron jobs для автоматизации

## 📊 Мониторинг

### Railway Dashboard
- Метрики производительности
- Логи ошибок
- Статус сборок
- Использование ресурсов

### Health Checks
- `/api/health` - проверка работоспособности
- Автоматический перезапуск при ошибках
- Мониторинг базы данных

## 🔐 Безопасность

- **HTTPS** автоматически от Railway
- **Environment Variables** защищены
- **CORS** настроен для домена
- **Rate Limiting** для защиты от DDoS
- **Input Validation** для всех API

## 🤝 Участие в разработке

1. Fork репозитория
2. Создайте ветку `git checkout -b feature/amazing-feature`
3. Коммит изменений `git commit -m 'Add amazing feature'`
4. Push в ветку `git push origin feature/amazing-feature`
5. Создайте Pull Request

## 📄 Лицензия

Этот проект лицензирован под MIT License - см. [LICENSE](LICENSE) файл для деталей.

## 🙏 Благодарности

- [ReactBits](https://reactbits.dev) за вдохновение дизайна
- [Railway](https://railway.app) за удобный деплой
- [Vite](https://vite.dev) за быструю сборку
- [TailwindCSS](https://tailwindcss.com) за утилитарные стили

---

**🚀 Готов к продакшену! Разверните на Railway за 5 минут.**

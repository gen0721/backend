# Railway Deployment Guide

## 🚀 Развертывание Minions Market на Railway

### 📋 Требования
- Аккаунт Railway
- GitHub репозиторий
- PostgreSQL база данных

### 🔧 Настройка проекта

#### 1. Подготовка репозитория
```bash
git add .
git commit -m "Premium UI with Railway deployment support"
git push origin main
```

#### 2. Создание проекта на Railway
1. Зайдите в [Railway Dashboard](https://railway.app/dashboard)
2. Нажмите "New Project" → "Deploy from GitHub repo"
3. Выберите репозиторий с проектом

#### 3. Настройка переменных окружения
В настройках проекта Railway добавьте переменные:

**Обязательные:**
```
RAILWAY_DATABASE_URL=postgresql://user:password@host:port/database
RAILWAY_JWT_SECRET=your-super-secret-jwt-key-min-32-chars
RAILWAY_ADMIN_LOGIN=admin
RAILWAY_ADMIN_PASSWORD=secure-password-123
```

**Telegram Bot (опционально):**
```
RAILWAY_TELEGRAM_BOT_TOKEN=123456789:AABBCCDDEEFF
RAILWAY_BOT_USERNAME=MinionsMarketBot
```

**Платежные системы (опционально):**
```
RAILWAY_CRYPTOCLOUD_API_KEY=your-cryptocloud-key
RAILWAY_RUKASSA_SHOP_ID=your-shop-id
RAILWAY_RUKASSA_SECRET_KEY=your-secret-key
```

#### 4. Настройка базы данных
1. Railway автоматически создаст PostgreSQL сервис
2. Скопируйте DATABASE_URL из настроек базы данных
3. Добавьте в переменные окружения

#### 5. Настройка домена (опционально)
1. В настройках проекта → "Custom Domains"
2. Добавьте свой домен
3. Настройте DNS записи

### 📦 Структура развертывания

```
railway.toml              # Конфигурация Railway
.env.railway             # Шаблон переменных окружения
frontend/
  ├── vite.config.js     # Оптимизированная сборка
  └── dist/              # Собранный фронтенд
backend/
  ├── server.js          # Express сервер
  └── .env               # Переменные окружения
```

### 🔥 Особенности конфигурации

#### Railway.toml:
- **Nixpacks** для сборки
- **Node.js 20** runtime
- **Автоматический рестарт** при ошибках
- **Health checks** для мониторинга
- **Разделение frontend/backend** сервисов

#### Vite Config:
- **Code splitting** для оптимизации
- **Production оптимизации**
- **Правильные пути** для Railway

### 🚀 Процесс развертывания

1. **Push в GitHub:**
   ```bash
   git push origin main
   ```

2. **Railway автоматически:**
   - Соберет фронтенд
   - Установит зависимости бэкенда
   - Запустит сервер
   - Настроит health checks

3. **Мониторинг:**
   - Logs в Railway Dashboard
   - Health checks: `/api/health`
   - Статус сборки в реальном времени

### 📊 Структура URL после развертывания

```
https://your-app.railway.app/          # Фронтенд
https://your-app.railway.app/api/health # Health check
https://your-app.railway.app/api/*      # API endpoints
```

### 🔧 Настройка PWA для Railway

#### Обновление manifest.json:
```json
{
  "start_url": "/",
  "scope": "/",
  "display": "standalone"
}
```

#### Service Worker для Railway:
```javascript
// Обновите кэш URLs для production
const CACHE_NAME = 'minions-market-v1';
const urlsToCache = [
  '/',
  '/static/js/bundle.js',
  '/static/css/main.css'
];
```

### 🛠️ Траблшутинг

#### Ошибка сборки:
```bash
# Проверьте package.json
npm run build

# Проверьте зависимости
npm install
```

#### Ошибка базы данных:
```bash
# Проверьте DATABASE_URL
echo $DATABASE_URL

# Тест подключения
node -e "require('./backend/models/db.js')"
```

#### Health check не работает:
```bash
# Проверьте endpoint
curl https://your-app.railway.app/api/health
```

### 📱 PWA установка

После развертывания:
1. Откройте сайт в мобильном браузере
2. Нажмите "Добавить на главный экран"
3. PWA будет работать как нативное приложение

### 🔐 Безопасность

- **HTTPS** автоматически от Railway
- **Environment variables** защищены
- **CORS** настроен для домена
- **JWT secret** уникальный

### 📈 Мониторинг

1. **Railway Dashboard:**
   - Метрики использования
   - Логи ошибок
   - Статус сборок

2. **Health checks:**
   - Автоматический перезапуск
   - Мониторинг доступности
   - Алерты при проблемах

### 💰 Стоимость

- **Hobby plan:** ~$5/месяц
- **PostgreSQL:** ~$5/месяц
- **Итого:** ~$10/месяц

### 🚀 Быстрый старт

1. Fork репозиторий
2. Подключите к Railway
3. Добавьте переменные окружения
4. Деплой готов! 🎉

---

**Готово к развертыванию на Railway! 🎯**

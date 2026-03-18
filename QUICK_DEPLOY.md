# 🚀 Быстрый деплой на Railway

## 📋 Что нужно сделать ПЕРЕД пушем:

### 1. Установить Git (если не установлен)
**Windows:**
- Скачайте с https://git-scm.com/download/win
- Или через команды в PowerShell (с правами админа):
```powershell
winget install --id Git.Git -e --source winget
```

### 2. Настроить Git
```bash
git config --global user.name "Your Name"
git config --global user.email "your.email@example.com"
```

### 3. Создать GitHub репозиторий
1. Зайдите на https://github.com
2. Нажмите "New repository"
3. Название: `minions-market`
4. Public или Private
5. НЕ отмечайте "Initialize with README"
6. "Create repository"

## 🔥 Команды для пуша:

```bash
# Переход в папку проекта
cd c:/Users/iSSGamer/Downloads/mini2-main

# Инициализация Git (только один раз)
git init

# Добавление всех файлов
git add .

# Первый коммит
git commit -m "Premium Minions Market ready for Railway deployment"

# Добавление remote (замените YOUR_USERNAME)
git remote add origin https://github.com/YOUR_USERNAME/minions-market.git

# Пуш на GitHub
git push -u origin main

# Если будет ошибка с веткой master/main:
git branch -M main
git push -u origin main
```

## 🌐 Развертывание на Railway:

### 1. Создание проекта
1. Зайдите на https://railway.app
2. "New Project" → "Deploy from GitHub repo"
3. Выберите репозиторий `minions-market`

### 2. Настройка переменных окружения
В настройках проекта Railway добавьте:

**Обязательные:**
```
RAILWAY_DATABASE_URL=postgresql://user:password@host:port/database
RAILWAY_JWT_SECRET=your-super-secret-jwt-key-32-chars-minimum
RAILWAY_ADMIN_LOGIN=admin
RAILWAY_ADMIN_PASSWORD=secure-password-123
```

**Опциональные:**
```
RAILWAY_TELEGRAM_BOT_TOKEN=123456789:AABBCCDDEEFFGGHH
RAILWAY_BOT_USERNAME=MinionsMarketBot
```

### 3. Получение DATABASE_URL
1. Railway автоматически создаст PostgreSQL сервис
2. В настройках базы данных скопируйте Connection URL
3. Вставьте в RAILWAY_DATABASE_URL

## ⚡ После деплоя:

- **Frontend**: https://your-app.railway.app
- **API**: https://your-app.railway.app/api/*
- **Health**: https://your-app.railway.app/api/health

## 📱 PWA установка:
1. Откройте сайт в мобильном браузере
2. Нажмите "Добавить на главный экран"
3. Готово! 🎉

## 🔧 Если что-то пошло не так:

### Git не установлен:
```powershell
# Проверка
git --version

# Установка
winget install --id Git.Git -e --source winget
```

### Ошибка пуша:
```bash
# Проверка remote
git remote -v

# Добавление remote снова
git remote add origin https://github.com/YOUR_USERNAME/minions-market.git

# Форсированный пуш (осторожно!)
git push -u origin main --force
```

### Railway не собирается:
1. Проверьте логи в Railway Dashboard
2. Убедитесь что все переменные окружения настроены
3. Проверьте что DATABASE_URL правильный

---

**🎯 Всё готово к деплою! Просто выполните команды выше.**

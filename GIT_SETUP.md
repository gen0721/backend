# Git Setup Instructions

## 🚀 Установка Git и настройка репозитория

### 1. Установка Git
**Windows:**
```bash
# Скачайте Git с официального сайта
# https://git-scm.com/download/win

# Или через Chocolatey
choco install git

# Или через winget
winget install --id Git.Git -e --source winget
```

### 2. Настройка Git
```bash
# Настройка имени пользователя
git config --global user.name "Your Name"

# Настройка email
git config --global user.email "your.email@example.com"

# Проверка настроек
git config --list
```

### 3. Инициализация репозитория
```bash
# Перейдите в папку проекта
cd c:/Users/iSSGamer/Downloads/mini2-main

# Инициализация Git репозитория
git init

# Добавление всех файлов
git add .

# Первый коммит
git commit -m "Initial commit: Premium Minions Market with Railway deployment"
```

### 4. Создание GitHub репозитория

1. Откройте [GitHub](https://github.com)
2. Нажмите "New repository"
3. Назовите репозиторий: `minions-market`
4. Выберите "Public" или "Private"
5. Не отмечайте "Initialize with README"
6. Нажмите "Create repository"

### 5. Подключение к GitHub
```bash
# Добавление remote репозитория
git remote add origin https://github.com/YOUR_USERNAME/minions-market.git

# Отправка на GitHub
git push -u origin main

# Если нужно форсировать (осторожно!)
# git push -u origin main --force
```

### 6. Проверка статуса
```bash
# Проверка статуса файлов
git status

# Просмотр коммитов
git log --oneline

# Просмотр веток
git branch -a
```

## 📦 Файлы для коммита

### Основные файлы:
- ✅ `railway.toml` - конфигурация Railway
- ✅ `.env.railway` - шаблон переменных окружения
- ✅ `RAILWAY_DEPLOY.md` - инструкция по развертыванию
- ✅ `.gitignore` - исключения из Git
- ✅ `frontend/` - премиум фронтенд
- ✅ `backend/` - Node.js бэкенд

### Исключенные файлы (.gitignore):
- ❌ `node_modules/` - зависимости
- ❌ `.env` - локальные переменные окружения
- ❌ `frontend/dist/` - сборка фронтенда
- ❌ `*.log` - логи
- ❌ `.DS_Store` - системные файлы

## 🚀 После пуша на GitHub

### 1. Развертывание на Railway:
1. Зайдите в [Railway](https://railway.app)
2. Нажмите "New Project"
3. "Deploy from GitHub repo"
4. Выберите репозиторий `minions-market`
5. Настройте переменные окружения

### 2. Обязательные переменные на Railway:
```
RAILWAY_DATABASE_URL=postgresql://...
RAILWAY_JWT_SECRET=your-super-secret-jwt-key-32-chars
RAILWAY_ADMIN_LOGIN=admin
RAILWAY_ADMIN_PASSWORD=secure-password-123
```

### 3. Деплой:
- Railway автоматически соберет проект
- Настроит базу данных
- Запустит сервер
- Проверит health checks

## 🛠️ Команды Git

### Основные команды:
```bash
git status                    # Статус файлов
git add .                     # Добавить все файлы
git add filename              # Добавить конкретный файл
git commit -m "message"       # Сделать коммит
git push                      # Отправить на сервер
git pull                      # Получить изменения
git log                       # История коммитов
git branch                    # Ветки
```

### Полезные команды:
```bash
git diff                      # Показать изменения
git checkout -- filename     # Отменить изменения файла
git reset HEAD filename       # Убрать из индекса
git clean -fd                 # Удалить незакоммиченные файлы
```

## 🔄 Работа с ветками

```bash
# Создание новой ветки
git checkout -b feature/new-design

# Переключение между ветками
git checkout main
git checkout feature/new-design

# Слияние веток
git checkout main
git merge feature/new-design

# Удаление ветки
git branch -d feature/new-design
```

## 📱 PWA для Railway

После деплоя на Railway:
1. Обновите `manifest.json` с новым доменом
2. Проверьте работу service worker
3. Протестируйте PWA функционал

## 🔐 Безопасность

- ✅ `.env` файлы в `.gitignore`
- ✅ Секреты в Railway variables
- ✅ HTTPS автоматически
- ✅ Безопасные CORS настройки

---

**Готово к работе с Git и Railway! 🎯**

# 🚀 Команды для пуша на GitHub

## 📋 Установка Git (если не установлен)

### Windows:
1. **Скачайте Git с официального сайта:**
   - https://git-scm.com/download/win
   - Скачайте и установите с настройками по умолчанию

2. **Или через PowerShell (с правами админа):**
```powershell
winget install --id Git.Git -e --source winget
```

3. **Перезапустите PowerShell/терминал после установки**

## 🔧 Настройка Git
```bash
git config --global user.name "Your Name"
git config --global user.email "your.email@example.com"
```

## 🚀 Команды для пуша

### 1. Инициализация репозитория
```bash
cd c:/Users/iSSGamer/Downloads/mini2-main
git init
```

### 2. Добавление всех файлов
```bash
git add .
```

### 3. Первый коммит
```bash
git commit -m "Premium Minions Market ready for Railway deployment"
```

### 4. Добавление remote репозитория
```bash
git remote add origin https://github.com/gen0721/backend.git
```

### 5. Пуш на GitHub
```bash
git push -u origin main
```

### Если будет ошибка с веткой master/main:
```bash
git branch -M main
git push -u origin main
```

## 🔥 Все команды одной строкой:
```bash
cd c:/Users/iSSGamer/Downloads/mini2-main && git init && git add . && git commit -m "Premium Minions Market ready for Railway deployment" && git remote add origin https://github.com/gen0721/backend.git && git branch -M main && git push -u origin main
```

## 🌐 После пуша:

### 1. Railway развертывание:
1. Зайдите на https://railway.app
2. "New Project" → "Deploy from GitHub repo"
3. Выберите репозиторий `gen0721/backend`
4. Настройте переменные окружения

### 2. Обязательные переменные на Railway:
```
RAILWAY_DATABASE_URL=postgresql://...
RAILWAY_JWT_SECRET=your-super-secret-jwt-key-32-chars
RAILWAY_ADMIN_LOGIN=admin
RAILWAY_ADMIN_PASSWORD=secure-password-123
```

### 3. Результат:
- **Frontend**: https://your-app.railway.app
- **API**: https://your-app.railway.app/api/*
- **Health**: https://your-app.railway.app/api/health

## 🛠️ Если что-то пошло не так:

### Git не найден:
```powershell
# Проверка установки
git --version

# Если не установлен, установите:
winget install --id Git.Git -e --source winget
# И перезапустите терминал
```

### Ошибка аутентификации на GitHub:
```bash
# Настройка GitHub token
git config --global credential.helper store
# Или используйте GitHub Desktop
```

### Ошибка пуша:
```bash
# Проверка remote
git remote -v

# Если remote неправильный:
git remote remove origin
git remote add origin https://github.com/gen0721/backend.git

# Форсированный пуш (осторожно!):
git push -u origin main --force
```

### Railway не собирается:
1. Проверьте логи в Railway Dashboard
2. Убедитесь что все переменные окружения настроены
3. Проверьте что DATABASE_URL правильный

---

**🎯 Целевой репозиторий: https://github.com/gen0721/backend.git**

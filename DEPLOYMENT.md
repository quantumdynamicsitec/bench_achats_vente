# 🚀 Guide de Déploiement

Ce document fournit des instructions détaillées pour déployer MarketBot AI sur différentes plateformes.

---

## 📋 Table des Matières

- [Prérequis](#-prérequis)
- [Build de Production](#-build-de-production)
- [Vercel](#-vercel-recommandé)
- [Netlify](#-netlify)
- [GitHub Pages](#-github-pages)
- [Docker](#-docker)
- [Serveur VPS](#-serveur-vps)
- [Variables d'Environnement](#-variables-denvironnement)
- [Monitoring](#-monitoring)

---

## 🔧 Prérequis

Avant de déployer, assurez-vous que :

- ✅ Le projet build sans erreur (`npm run build`)
- ✅ Tous les tests passent
- ✅ Le fichier `.env` est configuré (si nécessaire)
- ✅ Les dépendances sont à jour (`npm install`)

---

## 🏗️ Build de Production

```bash
# Installer les dépendances
npm install

# Build pour production
npm run build

# Les fichiers optimisés seront dans dist/
ls -la dist/
```

Structure du build :
```
dist/
├── index.html
├── assets/
│   ├── index-[hash].js
│   └── index-[hash].css
└── ...
```

---

## ▲ Vercel (Recommandé)

### Installation CLI

```bash
npm install -g vercel
```

### Déploiement

```bash
# Se connecter à Vercel
vercel login

# Déployer
vercel

# Suivez les instructions interactives
# - Project name: marketbot-ai
# - Directory: ./
# - Override settings: No
```

### Déploiement Automatique

1. Connectez votre repository GitHub à Vercel
2. Vercel détectera automatiquement Vite
3. Chaque push sur `main` déclenchera un déploiement

### Configuration Vercel

Créez `vercel.json` :

```json
{
  "buildCommand": "npm run build",
  "outputDirectory": "dist",
  "framework": "vite",
  "rewrites": [
    { "source": "/(.*)", "destination": "/index.html" }
  ]
}
```

---

## 🟢 Netlify

### Installation CLI

```bash
npm install -g netlify-cli
```

### Déploiement

```bash
# Build
npm run build

# Déployer
netlify deploy --prod --dir=dist
```

### Déploiement Automatique

1. Connectez votre repository GitHub à Netlify
2. Configurez :
   - **Build command** : `npm run build`
   - **Publish directory** : `dist`
   - **Node version** : `18`

### Configuration Netlify

Créez `netlify.toml` :

```toml
[build]
  command = "npm run build"
  publish = "dist"

[[redirects]]
  from = "/*"
  to = "/index.html"
  status = 200

[build.environment]
  NODE_VERSION = "18"
```

---

## 📄 GitHub Pages

### Méthode 1 : GitHub Actions (Recommandé)

Créez `.github/workflows/deploy.yml` :

```yaml
name: Deploy to GitHub Pages

on:
  push:
    branches: [main]

jobs:
  deploy:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v3
      
      - name: Setup Node
        uses: actions/setup-node@v3
        with:
          node-version: '18'
      
      - name: Install dependencies
        run: npm install
      
      - name: Build
        run: npm run build
      
      - name: Deploy
        uses: peaceiris/actions-gh-pages@v3
        with:
          github_token: ${{ secrets.GITHUB_TOKEN }}
          publish_dir: ./dist
```

### Méthode 2 : Manuel

```bash
# Build
npm run build

# Installer gh-pages
npm install -D gh-pages

# Déployer
npx gh-pages -d dist
```

### Configuration Vite pour GitHub Pages

Modifiez `vite.config.js` :

```javascript
export default defineConfig({
  base: '/marketbot-ai/', // Nom du repository
  // ... reste de la config
})
```

---

## 🐳 Docker

### Dockerfile

```dockerfile
# Build stage
FROM node:18-alpine AS builder

WORKDIR /app

COPY package*.json ./
RUN npm ci

COPY . .
RUN npm run build

# Production stage
FROM nginx:alpine

COPY --from=builder /app/dist /usr/share/nginx/html
COPY nginx.conf /etc/nginx/conf.d/default.conf

EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]
```

### nginx.conf

```nginx
server {
    listen 80;
    server_name localhost;
    root /usr/share/nginx/html;
    index index.html;

    location / {
        try_files $uri $uri/ /index.html;
    }

    location /assets {
        expires 1y;
        add_header Cache-Control "public, immutable";
    }
}
```

### Build et Run

```bash
# Build l'image
docker build -t marketbot-ai .

# Run le container
docker run -p 80:80 marketbot-ai

# Ou avec docker-compose
docker-compose up -d
```

### docker-compose.yml

```yaml
version: '3.8'

services:
  marketbot:
    build: .
    ports:
      - "80:80"
    restart: unless-stopped
```

---

## 🖥️ Serveur VPS

### Installation

```bash
# SSH vers votre serveur
ssh user@your-server.com

# Installer Node.js
curl -fsSL https://deb.nodesource.com/setup_18.x | sudo -E bash -
sudo apt-get install -y nodejs

# Installer Nginx
sudo apt-get install -y nginx

# Cloner le repository
cd /var/www
git clone https://github.com/your-username/marketbot-ai.git
cd marketbot-ai

# Build
npm install
npm run build

# Copier les fichiers vers Nginx
sudo cp -r dist/* /var/www/html/

# Configurer Nginx
sudo nano /etc/nginx/sites-available/marketbot
```

### Configuration Nginx

```nginx
server {
    listen 80;
    server_name your-domain.com;
    root /var/www/html;
    index index.html;

    location / {
        try_files $uri $uri/ /index.html;
    }

    location /assets {
        expires 1y;
        add_header Cache-Control "public, immutable";
    }

    # Gzip
    gzip on;
    gzip_types text/plain text/css application/json application/javascript;
}
```

### Activer le site

```bash
sudo ln -s /etc/nginx/sites-available/marketbot /etc/nginx/sites-enabled/
sudo nginx -t
sudo systemctl reload nginx
```

### SSL avec Let's Encrypt

```bash
sudo apt-get install certbot python3-certbot-nginx
sudo certbot --nginx -d your-domain.com
```

---

## 🔐 Variables d'Environnement

Pour une version production avec de vraies APIs, créez `.env.production` :

```bash
# eBay API
VITE_EBAY_APP_ID=your_ebay_app_id
VITE_EBAY_CERT_ID=your_ebay_cert_id

# Analytics
VITE_ANALYTICS_ID=your_analytics_id

# Feature Flags
VITE_ENABLE_LIVE_DATA=true
VITE_ENABLE_ALERTS=true
```

⚠️ **Ne commitez jamais `.env` dans Git !**

---

## 📊 Monitoring

### Vercel Analytics

```bash
npm install @vercel/analytics
```

Dans `main.tsx` :

```typescript
import { inject } from '@vercel/analytics';
inject();
```

### Google Analytics

Ajoutez dans `index.html` :

```html
<!-- Google Analytics -->
<script async src="https://www.googletagmanager.com/gtag/js?id=GA_MEASUREMENT_ID"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());
  gtag('config', 'GA_MEASUREMENT_ID');
</script>
```

---

## ✅ Checklist de Déploiement

Avant de déployer en production :

- [ ] Build réussi sans erreurs
- [ ] Tests manuels effectués
- [ ] Variables d'environnement configurées
- [ ] DNS configuré (si domaine personnalisé)
- [ ] SSL/HTTPS activé
- [ ] Monitoring mis en place
- [ ] Backup planifié
- [ ] Documentation mise à jour

---

## 🆘 Support

Si vous rencontrez des problèmes lors du déploiement :

1. Consultez les logs de build
2. Vérifiez la configuration de votre plateforme
3. Ouvrez une Issue sur GitHub

---

<div align="center">

**Bon déploiement ! 🚀**

</div>

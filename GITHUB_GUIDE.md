# 📤 Guide de Publication sur GitHub

Ce guide vous accompagne étape par étape pour publier MarketBot AI sur GitHub.

---

## 📋 Prérequis

- ✅ Compte GitHub (https://github.com/signup)
- ✅ Git installé sur votre machine
- ✅ Node.js 18+ installé
- ✅ Le projet build sans erreur localement

---

## 🚀 Étapes de Publication

### 1. Créer un Repository GitHub

1. Connectez-vous à GitHub
2. Cliquez sur le bouton **"New"** (ou allez sur https://github.com/new)
3. Remplissez les informations :
   - **Repository name** : `marketbot-ai`
   - **Description** : `Agent IA de veille marché multi-plateformes (Vinted, Leboncoin, eBay)`
   - **Public** ou **Private** (selon votre choix)
   - **NE cochez PAS** "Initialize this repository with a README"
4. Cliquez sur **"Create repository"**

### 2. Initialiser Git Localement

Ouvrez un terminal dans le dossier du projet :

```bash
# Initialiser Git
git init

# Ajouter tous les fichiers
git add .

# Premier commit
git commit -m "Initial commit: MarketBot AI v1.0.0"
```

### 3. Connecter au Repository GitHub

```bash
# Ajouter le remote (remplacez VOTRE-USERNAME par votre nom d'utilisateur GitHub)
git remote add origin https://github.com/VOTRE-USERNAME/marketbot-ai.git

# Vérifier le remote
git remote -v
```

### 4. Pousser vers GitHub

```bash
# Renommer la branche en main (si nécessaire)
git branch -M main

# Pousser vers GitHub
git push -u origin main
```

### 5. Vérifier sur GitHub

Rafraichissez la page GitHub. Vous devriez voir tous vos fichiers !

---

## 🎨 Améliorer votre Repository

### Ajouter des Topics

1. Allez sur la page de votre repository
2. Cliquez sur l'icône ⚙️ (Settings) en haut à droite
3. Dans la section "About", ajoutez des topics :
   - `react`
   - `typescript`
   - `tailwindcss`
   - `vite`
   - `marketplace`
   - `ai-agent`
   - `ecommerce`
   - `web-scraping`

### Ajouter une Description

Dans la section "About", ajoutez :
```
Agent IA de veille marché multi-plateformes (Vinted, Leboncoin, eBay) spécialisé dans l'analyse des tendances, composants PC et petits objets électroniques
```

### Ajouter un Site Web

Si vous déployez l'application :
1. Déployez sur Vercel/Netlify
2. Ajoutez l'URL dans la section "Website" de votre repository

---

## 🔄 Workflow GitHub Actions (Optionnel)

### Build Automatique

Créez `.github/workflows/build.yml` :

```yaml
name: Build

on:
  push:
    branches: [main]
  pull_request:
    branches: [main]

jobs:
  build:
    runs-on: ubuntu-latest
    
    steps:
    - uses: actions/checkout@v3
    
    - name: Setup Node.js
      uses: actions/setup-node@v3
      with:
        node-version: '18'
        cache: 'npm'
    
    - name: Install dependencies
      run: npm ci
    
    - name: Build
      run: npm run build
    
    - name: Type check
      run: npm run typecheck
```

### Déploiement Automatique

Créez `.github/workflows/deploy.yml` :

```yaml
name: Deploy to GitHub Pages

on:
  push:
    branches: [main]

permissions:
  contents: read
  pages: write
  id-token: write

jobs:
  deploy:
    environment:
      name: github-pages
      url: ${{ steps.deployment.outputs.page_url }}
    runs-on: ubuntu-latest
    
    steps:
    - uses: actions/checkout@v3
    
    - name: Setup Node.js
      uses: actions/setup-node@v3
      with:
        node-version: '18'
        cache: 'npm'
    
    - name: Install dependencies
      run: npm ci
    
    - name: Build
      run: npm run build
    
    - name: Setup Pages
      uses: actions/configure-pages@v3
    
    - name: Upload artifact
      uses: actions/upload-pages-artifact@v2
      with:
        path: './dist'
    
    - name: Deploy to GitHub Pages
      id: deployment
      uses: actions/deploy-pages@v2
```

---

## 📊 Statistiques et Badges

### Ajouter des Badges

Ajoutez ces badges en haut de votre README.md :

```markdown
![GitHub stars](https://img.shields.io/github/stars/VOTRE-USERNAME/marketbot-ai?style=social)
![GitHub forks](https://img.shields.io/github/forks/VOTRE-USERNAME/marketbot-ai?style=social)
![GitHub issues](https://img.shields.io/github/issues/VOTRE-USERNAME/marketbot-ai)
![GitHub pull requests](https://img.shields.io/github/issues-pr/VOTRE-USERNAME/marketbot-ai)
![GitHub license](https://img.shields.io/github/license/VOTRE-USERNAME/marketbot-ai)
```

---

## 🔒 Sécurité

### Protéger la Branche Main

1. Allez dans Settings > Branches
2. Cliquez sur "Add rule"
3. Configurez :
   - **Branch name pattern** : `main`
   - ✅ Require pull request reviews before merging
   - ✅ Require status checks to pass before merging
   - ✅ Include administrators

### Ajouter un Security Policy

Créez `SECURITY.md` :

```markdown
# Security Policy

## Supported Versions

| Version | Supported          |
| ------- | ------------------ |
| 1.0.x   | :white_check_mark: |

## Reporting a Vulnerability

If you discover a security vulnerability, please email security@example.com instead of opening a public issue.

We will acknowledge your email within 48 hours and provide a detailed timeline within 5 days.
```

---

## 📝 Checklist Finale

Avant de partager votre repository :

- [ ] README.md complet et attrayant
- [ ] LICENSE choisi (MIT recommandé)
- [ ] .gitignore configuré
- [ ] Code build sans erreur
- [ ] Screenshots/démo ajoutés
- [ ] Description du repository remplie
- [ ] Topics ajoutés
- [ ] Issues et PR templates configurés
- [ ] Documentation complète

---

## 🎉 Partager votre Projet

### Réseaux Sociaux

Partagez votre projet sur :
- Twitter/X avec #GitHub #React #TypeScript
- LinkedIn
- Reddit (r/reactjs, r/typescript)
- Discord (communautés React/TypeScript)
- Dev.to
- Hashnode

### Plateformes de Projets

Soumettez votre projet sur :
- Product Hunt
- Hacker News
- Indie Hackers
- Dev.to

---

## 🆘 Support

Si vous rencontrez des problèmes :

1. Consultez la documentation GitHub : https://docs.github.com
2. Vérifiez les logs d'erreur
3. Ouvrez une Issue sur votre propre repository pour tracker le problème

---

## 📚 Ressources

- [GitHub Docs](https://docs.github.com)
- [GitHub Actions Docs](https://docs.github.com/en/actions)
- [GitHub Pages Docs](https://docs.github.com/en/pages)
- [Markdown Guide](https://www.markdownguide.org)

---

<div align="center">

**Félicitations ! Votre projet est maintenant sur GitHub ! 🎊**

</div>

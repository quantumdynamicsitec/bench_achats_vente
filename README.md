# MarketBot AI - Agent de Veille Marché

Agent IA de veille marché multi-plateformes (Vinted, Leboncoin, eBay) spécialisé dans l'analyse des tendances, composants PC et petits objets électroniques.

## 🎯 Fonctionnalités Principales

### 1. **Dashboard Complet**
- Métriques en temps réel (11.45M annonces analysées)
- Cartes détaillées par plateforme avec fiabilité, fréquence de scan, sources
- Graphiques interactifs (prix, volumes, catégories)
- Flux d'alertes intelligentes

### 2. **Onglet Tendances**
- Top objets en tendance avec détails complets
- Filtres par plateforme (Vinted, Leboncoin, eBay)
- Tri dynamique (volume, prix, ROI, demande, tendance)
- **Filtres temporels** : 7 jours, 30 jours, historique complet
- Modale de détails avec scores (demande, compétition, confiance)

### 3. **Onglet Électronique (NOUVEAU)**
- Analyse dédiée aux composants PC :
  - **GPU** : RTX 4070 Super, RTX 3060 Ti, RTX 4060, RX 7600
  - **CPU** : Ryzen 7 5800X3D, i5-13600K, Ryzen 5 5600, i7-12700K
  - **RAM** : DDR5 32GB, DDR4 32GB, DDR4 16GB
  - **SSD** : Samsung 990 Pro, WD Black SN850X, Kingston NV2, Crucial MX500
- Statistiques par catégorie (volume, prix moyen, tendance)
- Spécifications techniques détaillées
- Insight marché avec analyse des baisses de prix

### 4. **Onglet Alertes**
- Alertes intelligentes en temps réel
- Configuration personnalisable :
  - Baisse composants PC > 5%
  - Nouveaux objets tendance (volume > 5K)
  - Alertes de catégorie (croissance > 20%)
  - ROI minimum 30%
  - Focus Leboncoin - petits objets < 50€
  - Exclusion automatique objets volumineux
  - Alertes GPU spécifiques

### 5. **Agent IA Conversationnel**
- Chat interactif avec réponses contextuelles
- Commandes rapides :
  - `tendance` - Analyse des tendances actuelles
  - `prix` - Analyse des prix par plateforme
  - `volume` - Volumes de vente par catégorie
  - `meilleur` - Meilleures opportunités d'investissement
  - `gpu` - Analyse détaillée GPU
  - `cpu` - Analyse détaillée CPU
  - `ram` - Analyse détaillée RAM
  - `ssd` - Analyse détaillée SSD
  - `leboncoin` - Focus petits objets électroniques

### 6. **Onglet Méthodologie**
- Pipeline d'analyse en 6 étapes :
  1. Collecte des données (APIs, scraping)
  2. Nettoyage & Normalisation
  3. Analyse statistique
  4. Intelligence Artificielle (XGBoost, TensorFlow)
  5. Génération d'insights
  6. Validation & Confiance
- Détails techniques par étape (outils, fréquence)
- Qualité des données par plateforme

## 🛒 Stratégie Leboncoin

**Focus sur petits objets électroniques accessibles (< 50€) :**
- ✅ Écouteurs (AirPods Pro 2, Sony WF-1000XM5)
- ✅ Chargeurs (MagSafe Apple)
- ✅ Câbles (USB-C/Lightning)
- ✅ Coques (iPhone 15 Pro)
- ✅ Stockage (Clés USB 128GB)
- ✅ Périphériques (Souris Logitech MX Master 3)
- ✅ Accessoires (Hubs USB-C 7-en-1)

**Évitons volontairement :**
- ❌ Meubles
- ❌ Vélos
- ❌ Objets > 150€
- ❌ Objets volumineux

## 📊 Filtres Temporels

Trois modes d'analyse disponibles sur tous les onglets :
- **7 jours** : Données des 7 derniers jours
- **30 jours** : Données des 30 derniers jours (par défaut)
- **Tout** : Historique complet

Les tendances (prix et volume) s'adaptent automatiquement au filtre sélectionné.

## 🖥️ Composants PC - Marché Actuel

**Tendance générale : Baisse des prix (-8% à -18%)**

### GPU
- RTX 4070 Super : 580€ (-4.2%)
- RTX 3060 Ti : 260€ (-6.8%) 🔥 Meilleur rapport perf/prix
- RTX 4060 : 290€ (-5.1%)
- RX 7600 : 240€ (-3.5%)

### CPU
- Ryzen 7 5800X3D : 280€ (-2.8%) 🔥 Meilleur CPU gaming AM4
- i5-13600K : 240€ (-7.2%)
- Ryzen 5 5600 : 110€ (-8.5%) 🔥 CPU budget #1
- i7-12700K : 220€ (-9.2%)

### RAM
- DDR5 32GB 6000MHz : 95€ (-12.5%) 🔥
- DDR4 32GB 3600MHz : 52€ (-15.2%)
- DDR4 16GB 3200MHz : 28€ (-18.3%) 🔥 Prix plancher

### SSD
- Samsung 990 Pro 2TB : 145€ (-8.5%)
- WD Black SN850X 1TB : 78€ (-11.2%)
- Kingston NV2 1TB : 48€ (-14.8%) 🔥 SSD budget #1
- Crucial MX500 1TB : 62€ (-6.2%)

**Opportunité** : C'est le moment d'acheter des composants PC !

## 🎯 Meilleures Opportunités

### Composants PC (eBay)
1. **DDR4 16GB 3200MHz** - ROI: +42% - Prix: 28€ - Volume: 12,500/mois
2. **SSD Kingston NV2 1TB** - ROI: +38% - Prix: 48€ - Volume: 11,800/mois
3. **Ryzen 5 5600** - ROI: +32% - Prix: 110€ - Volume: 8,900/mois

### Leboncoin (petits objets)
4. **Câbles USB-C Lightning** - ROI: +65% - Prix: 8€ - Volume: 15,200/mois
5. **Coques iPhone 15** - ROI: +60% - Prix: 15€ - Volume: 12,400/mois
6. **Hub USB-C 7-en-1** - ROI: +48% - Prix: 22€ - Volume: 5,600/mois

## 🔧 Technologies Utilisées

- **Frontend** : React 18, TypeScript, Tailwind CSS
- **Graphiques** : Recharts
- **Icônes** : Lucide React
- **Build** : Vite

## 📈 Métriques Clés

- **11.45M** annonces analysées/jour
- **50+** données extraites par annonce
- **5 min** latence moyenne de scan
- **94%** précision des prédictions
- **3 plateformes** surveillées en continu

## 🚀 Démarrage

```bash
# Installation
npm install

# Développement
npm run dev

# Build production
npm run build
```

## 📝 Notes

- Les données sont simulées pour démonstration
- En production, connecter aux APIs réelles (eBay Developer, scraping Vinted/Leboncoin)
- Modèle IA à entraîner sur données historiques réelles
- Système d'alertes à connecter à un service de notifications (email, push, SMS)

---

**MarketBot AI © 2026** - Agent de veille marché intelligent

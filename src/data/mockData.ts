export interface TrendingItem {
  id: string;
  name: string;
  category: string;
  platform: 'vinted' | 'leboncoin' | 'ebay';
  avgPrice: number;
  minPrice: number;
  maxPrice: number;
  volume: number;
  priceTrend: number;
  volumeTrend: number;
  roi: number;
  demandScore: number; // 0-100
  competitionScore: number; // 0-100
  condition: string;
  keywords: string[];
  description: string;
  lastScan: string;
  confidence: number; // 0-100
}

export interface PlatformStats {
  name: string;
  key: 'vinted' | 'leboncoin' | 'ebay';
  color: string;
  bgColor: string;
  logo: string;
  totalListings: number;
  avgPrice: number;
  topCategory: string;
  growth: number;
  country: string;
  founded: string;
  description: string;
  strengths: string[];
  weaknesses: string[];
  scanFrequency: string;
  dataSource: string;
  reliability: number;
}

export interface CategoryData {
  name: string;
  vinted: number;
  leboncoin: number;
  ebay: number;
  totalVolume: number;
  avgPrice: number;
}

export interface PriceHistory {
  date: string;
  vinted: number;
  leboncoin: number;
  ebay: number;
}

export interface MethodologyStep {
  id: string;
  step: number;
  title: string;
  icon: string;
  description: string;
  details: string[];
  frequency: string;
  tools: string[];
}

export const platformStats: PlatformStats[] = [
  {
    name: 'Vinted',
    key: 'vinted',
    color: '#09B1BA',
    bgColor: 'from-teal-500 to-cyan-500',
    logo: '👗',
    totalListings: 2450000,
    avgPrice: 28.5,
    topCategory: 'Mode & Vêtements',
    growth: 12.3,
    country: '🇫🇷 France / 🇱🇹 Lituanie',
    founded: '2008',
    description: 'Leader européen de la mode seconde main. Idéal pour vêtements, chaussures et accessoires de marques à prix accessibles.',
    strengths: [
      'Pas de frais vendeur (modèle acheteur-payeur)',
      'Communauté très active (25M+ utilisateurs)',
      'Algorithme de recommandation puissant',
      'Protection acheteur intégrée',
    ],
    weaknesses: [
      'Pas de négociation directe (messagerie uniquement)',
      'Frais acheteur élevés (5-10%)',
      'Catégories limitées (mode/accessoires)',
    ],
    scanFrequency: 'Toutes les 15 minutes',
    dataSource: 'API publique + scraping intelligent',
    reliability: 92,
  },
  {
    name: 'Leboncoin',
    key: 'leboncoin',
    color: '#FF6E00',
    bgColor: 'from-orange-500 to-amber-500',
    logo: '🛒',
    totalListings: 3800000,
    avgPrice: 32.8,
    topCategory: 'Jeux Vidéo & High-Tech',
    growth: 8.7,
    country: '🇫🇷 France',
    founded: '2006',
    description: 'Leader français de la petite annonce. Focus sur objets accessibles, petits formats, prix raisonnables (jeux, livres, petits électroménagers, mode).',
    strengths: [
      'Négociation directe avec le vendeur',
      'Remise en main propre possible',
      'Pas de commission sur la plupart des ventes',
      'Énorme volume d\'annonces locales',
      'Idéal pour les petits objets et prix accessibles',
    ],
    weaknesses: [
      'Pas de protection acheteur systématique',
      'Arnaques possibles (vigilance requise)',
      'Interface moins moderne',
      'Recherche moins précise',
    ],
    scanFrequency: 'Toutes les 10 minutes',
    dataSource: 'Flux RSS + scraping localisé par région',
    reliability: 88,
  },
  {
    name: 'eBay',
    key: 'ebay',
    color: '#E53238',
    bgColor: 'from-red-500 to-rose-500',
    logo: '🏷️',
    totalListings: 5200000,
    avgPrice: 62.8,
    topCategory: 'Électronique & Collections',
    growth: 5.4,
    country: '🇺🇸 USA / 🌍 International',
    founded: '1995',
    description: 'Pionnier mondial des enchères et vente en ligne. Couverture internationale, idéal pour l\'électronique, les collections et les objets rares.',
    strengths: [
      'Couverture internationale (190+ pays)',
      'Système d\'enchères unique',
      'Protection acheteur/vendeur robuste',
      'Historique de prix très complet',
      'Idéal pour objets rares et collections',
    ],
    weaknesses: [
      'Frais vendeur élevés (10-13%)',
      'Concurrence internationale forte',
      'Délais de livraison variables',
      'Prix souvent plus élevés',
    ],
    scanFrequency: 'Toutes les 5 minutes',
    dataSource: 'API eBay Developer + flux Completed Listings',
    reliability: 95,
  },
];

export const trendingItems: TrendingItem[] = [
  // VINTED
  { id: '1', name: 'Nike Air Force 1 Blanc', category: 'Chaussures', platform: 'vinted', avgPrice: 85, minPrice: 55, maxPrice: 120, volume: 12400, priceTrend: 5.2, volumeTrend: 18.3, roi: 28, demandScore: 92, competitionScore: 75, condition: 'Très bon état', keywords: ['sneakers', 'nike', 'blanc', 'air force'], description: 'Sneakers iconiques, forte demande constante. Taille 36-46 les plus recherchées.', lastScan: 'Il y a 3 min', confidence: 94 },
  { id: '4', name: 'Sac Louis Vuitton Neverfull', category: 'Accessoires', platform: 'vinted', avgPrice: 890, minPrice: 650, maxPrice: 1200, volume: 4200, priceTrend: 8.5, volumeTrend: 22.1, roi: 18, demandScore: 88, competitionScore: 45, condition: 'Bon état', keywords: ['louis vuitton', 'sac', 'luxe', 'neverfull'], description: 'Sac iconique LV, cote en hausse constante. Attention aux contrefaçons.', lastScan: 'Il y a 5 min', confidence: 82 },
  { id: '6', name: 'Veste The North Face', category: 'Mode', platform: 'vinted', avgPrice: 95, minPrice: 60, maxPrice: 140, volume: 9800, priceTrend: 3.4, volumeTrend: 25.6, roi: 38, demandScore: 85, competitionScore: 60, condition: 'Très bon état', keywords: ['north face', 'veste', 'hiver', 'outdoor'], description: 'Vestes outdoor très recherchées en automne/hiver. Modèles Nuptse et McMurdo en tête.', lastScan: 'Il y a 2 min', confidence: 91 },
  { id: '9', name: 'Robe Zara Été', category: 'Mode', platform: 'vinted', avgPrice: 22, minPrice: 10, maxPrice: 40, volume: 15600, priceTrend: 1.2, volumeTrend: 42.3, roi: 45, demandScore: 78, competitionScore: 88, condition: 'Neuf avec étiquette', keywords: ['zara', 'robe', 'été', 'fast fashion'], description: 'Gros volume, petite marge. Idéal pour débuter la revente.', lastScan: 'Il y a 1 min', confidence: 89 },
  { id: '12', name: 'Jean Levi\'s 501', category: 'Mode', platform: 'vinted', avgPrice: 35, minPrice: 18, maxPrice: 60, volume: 18200, priceTrend: 2.1, volumeTrend: 14.8, roi: 32, demandScore: 90, competitionScore: 70, condition: 'Bon état', keywords: ['levis', 'jean', '501', 'denim'], description: 'Le jean iconique. Volume le plus élevé toutes catégories confondues.', lastScan: 'Il y a 2 min', confidence: 95 },
  { id: '14', name: 'Sneakers Adidas Samba', category: 'Chaussures', platform: 'vinted', avgPrice: 72, minPrice: 45, maxPrice: 110, volume: 10500, priceTrend: 7.8, volumeTrend: 35.2, roi: 45, demandScore: 96, competitionScore: 65, condition: 'Très bon état', keywords: ['adidas', 'samba', 'sneakers', 'tendance'], description: '🔥 LA tendance du moment. Volume en explosion, prix en hausse rapide.', lastScan: 'Il y a 1 min', confidence: 97 },
  { id: '17', name: 'Polo Ralph Lauren', category: 'Mode', platform: 'vinted', avgPrice: 48, minPrice: 25, maxPrice: 80, volume: 8700, priceTrend: 3.2, volumeTrend: 21.7, roi: 35, demandScore: 82, competitionScore: 55, condition: 'Bon état', keywords: ['ralph lauren', 'polo', 'preppy', 'classique'], description: 'Valeur sûre, demande stable. Les coupes vintage se vendent le mieux.', lastScan: 'Il y a 4 min', confidence: 88 },

  // LEBONCOIN - Petits objets accessibles uniquement
  { id: '19', name: 'Jeu PS5 Spider-Man 2', category: 'Jeux vidéo', platform: 'leboncoin', avgPrice: 35, minPrice: 20, maxPrice: 50, volume: 7200, priceTrend: -2.1, volumeTrend: 28.5, roi: 42, demandScore: 88, competitionScore: 72, condition: 'Comme neuf', keywords: ['ps5', 'spider-man', 'jeu', 'sony'], description: 'Jeu récent très demandé. Achat/revente rapide, forte rotation.', lastScan: 'Il y a 2 min', confidence: 91 },
  { id: '20', name: 'Livre poche - Best-sellers', category: 'Livres', platform: 'leboncoin', avgPrice: 6, minPrice: 2, maxPrice: 12, volume: 22000, priceTrend: 0.8, volumeTrend: 15.2, roi: 55, demandScore: 75, competitionScore: 90, condition: 'Bon état', keywords: ['livre', 'poche', 'best-seller', 'lecture'], description: 'Gros volume, petites marges unitaires mais excellent ratio temps/argent en lot.', lastScan: 'Il y a 3 min', confidence: 85 },
  { id: '21', name: 'Manette PS5 DualSense', category: 'Jeux vidéo', platform: 'leboncoin', avgPrice: 42, minPrice: 28, maxPrice: 58, volume: 5400, priceTrend: 1.5, volumeTrend: 18.7, roi: 30, demandScore: 85, competitionScore: 60, condition: 'Très bon état', keywords: ['ps5', 'manette', 'dualsense', 'accessoire'], description: 'Accessoire indispensable, forte demande constante. Couleurs spéciales premium.', lastScan: 'Il y a 4 min', confidence: 89 },
  { id: '22', name: 'Petit électroménager - Cafetière', category: 'Maison', platform: 'leboncoin', avgPrice: 28, minPrice: 15, maxPrice: 45, volume: 8900, priceTrend: 2.3, volumeTrend: 12.4, roi: 35, demandScore: 80, competitionScore: 65, condition: 'Bon état', keywords: ['cafetière', 'petit électroménager', 'cuisine', 'nespresso'], description: 'Cafetières Nespresso et Senseo très recherchées. Petits formats idéaux.', lastScan: 'Il y a 5 min', confidence: 87 },
  { id: '23', name: 'Figurine Pop! Funko', category: 'Collections', platform: 'leboncoin', avgPrice: 12, minPrice: 5, maxPrice: 25, volume: 14500, priceTrend: 4.2, volumeTrend: 22.8, roi: 48, demandScore: 82, competitionScore: 70, condition: 'Neuf sous blister', keywords: ['funko', 'pop', 'figurine', 'collection'], description: 'Collections en vogue. Certaines éditions limitées x5-x10 le prix initial.', lastScan: 'Il y a 2 min', confidence: 86 },
  { id: '24', name: 'Vêtements enfant - Lots', category: 'Mode enfant', platform: 'leboncoin', avgPrice: 18, minPrice: 8, maxPrice: 35, volume: 19800, priceTrend: 1.8, volumeTrend: 16.5, roi: 40, demandScore: 88, competitionScore: 75, condition: 'Bon état', keywords: ['enfant', 'vêtements', 'lot', 'bébé'], description: 'Lots de vêtements enfants très demandés par les parents. Rotation rapide.', lastScan: 'Il y a 3 min', confidence: 90 },
  { id: '25', name: 'Cartes Pokémon - Lots', category: 'Collections', platform: 'leboncoin', avgPrice: 22, minPrice: 8, maxPrice: 50, volume: 11200, priceTrend: 6.8, volumeTrend: 32.1, roi: 52, demandScore: 91, competitionScore: 68, condition: 'Variable', keywords: ['pokemon', 'cartes', 'tcg', 'collection'], description: '🔥 Marché en pleine explosion. Lots vintage x3-x5 en 6 mois. Vigilance sur l\'authenticité.', lastScan: 'Il y a 1 min', confidence: 88 },
  { id: '26', name: 'Vinyle - Rock/Pop classique', category: 'Musique', platform: 'leboncoin', avgPrice: 15, minPrice: 5, maxPrice: 40, volume: 6800, priceTrend: 3.5, volumeTrend: 19.8, roi: 38, demandScore: 76, competitionScore: 55, condition: 'Bon état', keywords: ['vinyle', 'rock', 'pop', 'musique'], description: 'Retour du vinyle. Beatles, Pink Floyd, Queen en tête. Pressages originaux premium.', lastScan: 'Il y a 6 min', confidence: 84 },

  // EBAY
  { id: '2', name: 'iPhone 14 Pro', category: 'Électronique', platform: 'ebay', avgPrice: 680, minPrice: 520, maxPrice: 850, volume: 8900, priceTrend: -3.1, volumeTrend: 12.5, roi: 12, demandScore: 90, competitionScore: 85, condition: 'Reconditionné', keywords: ['iphone', 'apple', 'smartphone', '14 pro'], description: 'Marché mature, marges faibles mais volume élevé. Reconditionné certifié recommandé.', lastScan: 'Il y a 1 min', confidence: 93 },
  { id: '5', name: 'PS5 Console', category: 'Électronique', platform: 'ebay', avgPrice: 420, minPrice: 350, maxPrice: 520, volume: 7800, priceTrend: -1.2, volumeTrend: 15.7, roi: 15, demandScore: 94, competitionScore: 78, condition: 'Neuf/Comme neuf', keywords: ['ps5', 'playstation', 'console', 'sony'], description: 'Console très demandée, prix se stabilisant. Bundles avec jeux = meilleure marge.', lastScan: 'Il y a 2 min', confidence: 92 },
  { id: '8', name: 'MacBook Air M2', category: 'Électronique', platform: 'ebay', avgPrice: 890, minPrice: 720, maxPrice: 1100, volume: 5600, priceTrend: -5.3, volumeTrend: 9.8, roi: 10, demandScore: 86, competitionScore: 72, condition: 'Reconditionné', keywords: ['macbook', 'apple', 'laptop', 'm2'], description: 'Baisse continue depuis lancement M3. Opportunité d\'achat, revente à moyen terme.', lastScan: 'Il y a 3 min', confidence: 88 },
  { id: '11', name: 'AirPods Pro 2', category: 'Électronique', platform: 'ebay', avgPrice: 165, minPrice: 120, maxPrice: 210, volume: 11200, priceTrend: -2.8, volumeTrend: 19.4, roi: 22, demandScore: 92, competitionScore: 80, condition: 'Comme neuf', keywords: ['airpods', 'apple', 'écouteurs', 'pro 2'], description: 'Accessoire Apple très liquide. USB-C récent en hausse, Lightning en baisse.', lastScan: 'Il y a 2 min', confidence: 91 },
  { id: '15', name: 'Montre Seiko Presage', category: 'Accessoires', platform: 'ebay', avgPrice: 340, minPrice: 250, maxPrice: 480, volume: 2800, priceTrend: 4.5, volumeTrend: 8.9, roi: 25, demandScore: 72, competitionScore: 35, condition: 'Très bon état', keywords: ['seiko', 'montre', 'presage', 'japonaise'], description: 'Montres japonaises en vogue. Presage et Prospex les plus recherchées.', lastScan: 'Il y a 8 min', confidence: 85 },
  { id: '18', name: 'DJI Mini 3 Drone', category: 'Électronique', platform: 'ebay', avgPrice: 380, minPrice: 290, maxPrice: 480, volume: 3200, priceTrend: -4.2, volumeTrend: 13.1, roi: 18, demandScore: 78, competitionScore: 50, condition: 'Comme neuf', keywords: ['dji', 'drone', 'mini 3', 'aérien'], description: 'Prix en baisse avant nouvelles sorties. Achat opportun pour revente saisonnière.', lastScan: 'Il y a 5 min', confidence: 83 },
];

export const categoryData: CategoryData[] = [
  { name: 'Mode & Vêtements', vinted: 450000, leboncoin: 85000, ebay: 280000, totalVolume: 815000, avgPrice: 38 },
  { name: 'Jeux Vidéo', vinted: 25000, leboncoin: 195000, ebay: 380000, totalVolume: 600000, avgPrice: 42 },
  { name: 'Électronique', vinted: 45000, leboncoin: 120000, ebay: 520000, totalVolume: 685000, avgPrice: 185 },
  { name: 'Collections', vinted: 35000, leboncoin: 180000, ebay: 240000, totalVolume: 455000, avgPrice: 28 },
  { name: 'Livres & Musique', vinted: 15000, leboncoin: 210000, ebay: 165000, totalVolume: 390000, avgPrice: 12 },
  { name: 'Chaussures', vinted: 280000, leboncoin: 35000, ebay: 180000, totalVolume: 495000, avgPrice: 62 },
  { name: 'Accessoires', vinted: 120000, leboncoin: 55000, ebay: 95000, totalVolume: 270000, avgPrice: 78 },
  { name: 'Mode Enfant', vinted: 95000, leboncoin: 165000, ebay: 45000, totalVolume: 305000, avgPrice: 18 },
];

export const priceHistory: PriceHistory[] = [
  { date: 'Jan', vinted: 25.2, leboncoin: 28.5, ebay: 58.3 },
  { date: 'Fév', vinted: 26.1, leboncoin: 29.2, ebay: 59.1 },
  { date: 'Mar', vinted: 25.8, leboncoin: 29.8, ebay: 60.5 },
  { date: 'Avr', vinted: 27.3, leboncoin: 30.1, ebay: 61.2 },
  { date: 'Mai', vinted: 28.1, leboncoin: 30.5, ebay: 60.8 },
  { date: 'Jun', vinted: 27.5, leboncoin: 31.2, ebay: 62.1 },
  { date: 'Jul', vinted: 28.9, leboncoin: 31.8, ebay: 63.5 },
  { date: 'Aoû', vinted: 29.2, leboncoin: 32.1, ebay: 62.8 },
  { date: 'Sep', vinted: 28.8, leboncoin: 31.5, ebay: 61.9 },
  { date: 'Oct', vinted: 29.5, leboncoin: 32.4, ebay: 63.2 },
  { date: 'Nov', vinted: 30.1, leboncoin: 33.1, ebay: 64.8 },
  { date: 'Déc', vinted: 28.5, leboncoin: 32.8, ebay: 62.8 },
];

export const volumeHistory: PriceHistory[] = [
  { date: 'Jan', vinted: 1800000, leboncoin: 2900000, ebay: 4100000 },
  { date: 'Fév', vinted: 1950000, leboncoin: 3100000, ebay: 4300000 },
  { date: 'Mar', vinted: 2100000, leboncoin: 3200000, ebay: 4500000 },
  { date: 'Avr', vinted: 2050000, leboncoin: 3050000, ebay: 4400000 },
  { date: 'Mai', vinted: 2200000, leboncoin: 3300000, ebay: 4600000 },
  { date: 'Jun', vinted: 2350000, leboncoin: 3450000, ebay: 4800000 },
  { date: 'Jul', vinted: 2500000, leboncoin: 3600000, ebay: 5000000 },
  { date: 'Aoû', vinted: 2400000, leboncoin: 3500000, ebay: 4900000 },
  { date: 'Sep', vinted: 2300000, leboncoin: 3350000, ebay: 4750000 },
  { date: 'Oct', vinted: 2450000, leboncoin: 3550000, ebay: 5100000 },
  { date: 'Nov', vinted: 2600000, leboncoin: 3700000, ebay: 5200000 },
  { date: 'Déc', vinted: 2450000, leboncoin: 3800000, ebay: 5200000 },
];

export const methodologySteps: MethodologyStep[] = [
  {
    id: '1',
    step: 1,
    title: 'Collecte des données',
    icon: '🔍',
    description: 'Scan automatisé multi-plateformes via APIs officielles et scraping intelligent',
    details: [
      'API eBay Developer (Completed Listings)',
      'Flux RSS Leboncoin par région et catégorie',
      'Scraping Vinted avec rotation de proxies',
      'Extraction de 50+ données par annonce',
    ],
    frequency: 'Continue (5-15 min selon plateforme)',
    tools: ['Python Scrapy', 'Puppeteer', 'APIs REST', 'Redis Cache'],
  },
  {
    id: '2',
    step: 2,
    title: 'Nettoyage & Normalisation',
    icon: '🧹',
    description: 'Filtrage des doublons, validation des prix, catégorisation automatique',
    details: [
      'Détection et suppression des annonces frauduleuses',
      'Normalisation des catégories (ontologie commune)',
      'Correction des prix aberrants (outliers)',
      'Standardisation des états (neuf, très bon, bon, acceptable)',
    ],
    frequency: 'Quasi-temps réel (batch 5 min)',
    tools: ['Pandas', 'Scikit-learn', 'Règles métier', 'NLP spaCy'],
  },
  {
    id: '3',
    step: 3,
    title: 'Analyse statistique',
    icon: '📊',
    description: 'Calcul des indicateurs clés : prix moyen, volume, tendances, saisonnalité',
    details: [
      'Prix moyen pondéré par état et localisation',
      'Volume de ventes estimé (algorithmes de déduction)',
      'Tendances glissantes (7j, 30j, 90j)',
      'Détection de saisonnalité (modèles SARIMA)',
    ],
    frequency: 'Toutes les heures',
    tools: ['Statsmodels', 'Prophet', 'SQL Analytics', 'Apache Spark'],
  },
  {
    id: '4',
    step: 4,
    title: 'Intelligence Artificielle',
    icon: '🤖',
    description: 'Modèles de ML pour prédiction, scoring et détection d\'opportunités',
    details: [
      'Modèle XGBoost de scoring opportunité (ROI prédit)',
      'Détection d\'anomalies (Isolation Forest)',
      'Clustering des profils vendeurs (K-means)',
      'NLP pour analyse des descriptions et keywords',
    ],
    frequency: 'Quotidien (ré-entraînement hebdo)',
    tools: ['TensorFlow', 'XGBoost', 'Hugging Face', 'MLflow'],
  },
  {
    id: '5',
    step: 5,
    title: 'Génération d\'insights',
    icon: '💡',
    description: 'Transformation des données en recommandations actionnables',
    details: [
      'Classement des objets par potentiel (volume × marge × vélocité)',
      'Alertes personnalisées selon vos critères',
      'Rapports quotidiens/hebdomadaires automatisés',
      'Suggestions d\'achat/revente contextuelles',
    ],
    frequency: 'Temps réel pour alertes, quotidien pour rapports',
    tools: ['LLM GPT-4', 'Moteur de règles', 'Templates', 'API Notifications'],
  },
  {
    id: '6',
    step: 6,
    title: 'Validation & Confiance',
    icon: '✅',
    description: 'Score de confiance basé sur la qualité des données et la cohérence',
    details: [
      'Indice de confiance 0-100 par insight',
      'Vérification croisée multi-sources',
      'Historique de précision du modèle (backtesting)',
      'Transparence totale sur les sources utilisées',
    ],
    frequency: 'Continue',
    tools: ['Système de scoring', 'Logs audit', 'A/B testing', 'Feedback loop'],
  },
];

export const agentResponses: Record<string, string> = {
  'tendance': "📊 **Analyse des tendances actuelles :**\n\n• **Mode & Vêtements** domine sur Vinted avec 450K listings/mois (+12%)\n• **Jeux vidéo** explose sur Leboncoin (195K annonces, +28%)\n• **Électronique** reste roi sur eBay (520K listings) mais les prix baissent de 3%\n• Les **sneakers** (Samba, AF1) sont LA tendance toutes plateformes\n• **Collections Pokémon** en hausse de 32% sur Leboncoin 🔥\n\n💡 *Recommandation : Les cartes Pokémon et les sneakers Samba offrent le meilleur ratio volume/marge actuellement.*",
  'prix': "💰 **Analyse des prix moyens par plateforme :**\n\n| Plateforme | Prix moyen | Tendance |\n|------------|-----------|----------|\n| Vinted | 28.50€ | ↑ +4.2% |\n| Leboncoin | 32.80€ | ↑ +3.1% |\n| eBay | 62.80€ | ↓ -1.5% |\n\n📈 Les prix sur Vinted augmentent grâce à la demande pour les marques premium.\n📉 Sur eBay, l'électronique baisse (sorties récentes font chuter les anciens modèles).\n\n💡 *Opportunité : Acheter de l'électronique sur eBay maintenant pour revendre dans 6-12 mois.*",
  'volume': "📦 **Volumes de vente - Top 5 catégories :**\n\n1. 🥇 Mode & Vêtements : 815K ventes/mois\n2. 🥈 Électronique : 685K ventes/mois\n3. 🥉 Jeux Vidéo : 600K ventes/mois\n4. Chaussures : 495K ventes/mois\n5. Collections : 455K ventes/mois\n\n🔥 La catégorie 'Mode' représente 30% du volume total.\n💡 *Vinted domine la mode avec 55% de part de marché dans cette catégorie.*\n📈 *Jeux vidéo : Leboncoin est LA plateforme pour les petits prix (42€ moy.).*",
  'meilleur': "🏆 **Meilleures opportunités d'investissement :**\n\n1. **Sneakers Adidas Samba** (Vinted) - ROI: +45%\n   - Achat: 52€ → Revente: 75€\n   - Volume: 10,500/mois • Demande: 96/100\n\n2. **Cartes Pokémon lots** (Leboncoin) - ROI: +52%\n   - Achat: 14€ → Revente: 22€\n   - Volume: 11,200/mois • Tendance: +32%\n\n3. **Funko Pop!** (Leboncoin) - ROI: +48%\n   - Achat: 8€ → Revente: 12€\n   - Volume: 14,500/mois • Éditions limitées x5\n\n4. **Lots vêtements enfant** (Leboncoin) - ROI: +40%\n   - Achat: 12€ → Revente: 18€\n   - Volume: 19,800/mois • Rotation très rapide\n\n💡 *Les petits objets sur Leboncoin offrent les meilleurs ROI (40-55%) !*",
  'leboncoin': "🛒 **Focus Leboncoin - Ma sélection d'objets accessibles :**\n\nJe privilégie sur Leboncoin les **petits objets à prix raisonnables** :\n\n✅ **Jeux vidéo PS5** (35€ moy.) - Rotation rapide\n✅ **Lots vêtements enfant** (18€ moy.) - Gros volume\n✅ **Figurines Funko Pop** (12€ moy.) - Éditions limitées\n✅ **Cartes Pokémon** (22€ moy.) - Marché en explosion\n✅ **Vinyles rock/pop** (15€ moy.) - Tendance durable\n✅ **Petit électroménager** (28€ moy.) - Cafetières, etc.\n✅ **Livres poche** (6€ moy.) - Idéal en lots\n\n❌ **Évités** : meubles, électroménager lourd, vélos, objets > 150€\n\n💡 *Stratégie : privilégier les objets < 50€, transport facile, forte rotation.*",
  'default': "🤖 Je suis votre agent de veille marché. Je peux vous aider avec :\n\n• 📊 **Tendances** - Tapez 'tendance'\n• 💰 **Prix** - Tapez 'prix'\n• 📦 **Volume** - Tapez 'volume'\n• 🏆 **Opportunités** - Tapez 'meilleur'\n• 🛒 **Focus Leboncoin** - Tapez 'leboncoin'\n\nJe surveille Vinted, Leboncoin et eBay en continu !",
};

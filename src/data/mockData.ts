export interface TrendingItem {
  id: string;
  name: string;
  category: string;
  platform: 'vinted' | 'leboncoin' | 'ebay';
  avgPrice: number;
  volume: number;
  priceTrend: number; // % change
  volumeTrend: number; // % change
  image?: string;
}

export interface PlatformStats {
  name: string;
  key: 'vinted' | 'leboncoin' | 'ebay';
  color: string;
  bgColor: string;
  totalListings: number;
  avgPrice: number;
  topCategory: string;
  growth: number;
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

export const platformStats: PlatformStats[] = [
  {
    name: 'Vinted',
    key: 'vinted',
    color: '#09B1BA',
    bgColor: 'from-teal-500 to-cyan-500',
    totalListings: 2450000,
    avgPrice: 28.5,
    topCategory: 'Mode & Vêtements',
    growth: 12.3,
  },
  {
    name: 'Leboncoin',
    key: 'leboncoin',
    color: '#FF6E00',
    bgColor: 'from-orange-500 to-amber-500',
    totalListings: 3800000,
    avgPrice: 45.2,
    topCategory: 'Maison & Déco',
    growth: 8.7,
  },
  {
    name: 'eBay',
    key: 'ebay',
    color: '#E53238',
    bgColor: 'from-red-500 to-rose-500',
    totalListings: 5200000,
    avgPrice: 62.8,
    topCategory: 'Électronique',
    growth: 5.4,
  },
];

export const trendingItems: TrendingItem[] = [
  { id: '1', name: 'Nike Air Force 1 Blanc', category: 'Chaussures', platform: 'vinted', avgPrice: 85, volume: 12400, priceTrend: 5.2, volumeTrend: 18.3 },
  { id: '2', name: 'iPhone 14 Pro', category: 'Électronique', platform: 'ebay', avgPrice: 680, volume: 8900, priceTrend: -3.1, volumeTrend: 12.5 },
  { id: '3', name: 'Canapé Convertible 3 places', category: 'Maison', platform: 'leboncoin', avgPrice: 320, volume: 6700, priceTrend: 2.8, volumeTrend: 8.2 },
  { id: '4', name: 'Sac Louis Vuitton Neverfull', category: 'Accessoires', platform: 'vinted', avgPrice: 890, volume: 4200, priceTrend: 8.5, volumeTrend: 22.1 },
  { id: '5', name: 'PS5 Console', category: 'Électronique', platform: 'ebay', avgPrice: 420, volume: 7800, priceTrend: -1.2, volumeTrend: 15.7 },
  { id: '6', name: 'Veste The North Face', category: 'Mode', platform: 'vinted', avgPrice: 95, volume: 9800, priceTrend: 3.4, volumeTrend: 25.6 },
  { id: '7', name: 'Vélo Électrique', category: 'Sports', platform: 'leboncoin', avgPrice: 750, volume: 3400, priceTrend: 6.7, volumeTrend: 31.2 },
  { id: '8', name: 'MacBook Air M2', category: 'Électronique', platform: 'ebay', avgPrice: 890, volume: 5600, priceTrend: -5.3, volumeTrend: 9.8 },
  { id: '9', name: 'Robe Zara Été', category: 'Mode', platform: 'vinted', avgPrice: 22, volume: 15600, priceTrend: 1.2, volumeTrend: 42.3 },
  { id: '10', name: 'Table Basse Design', category: 'Maison', platform: 'leboncoin', avgPrice: 145, volume: 4100, priceTrend: 4.1, volumeTrend: 11.5 },
  { id: '11', name: 'AirPods Pro 2', category: 'Électronique', platform: 'ebay', avgPrice: 165, volume: 11200, priceTrend: -2.8, volumeTrend: 19.4 },
  { id: '12', name: 'Jean Levi\'s 501', category: 'Mode', platform: 'vinted', avgPrice: 35, volume: 18200, priceTrend: 2.1, volumeTrend: 14.8 },
  { id: '13', name: 'Machine à Café Nespresso', category: 'Maison', platform: 'leboncoin', avgPrice: 85, volume: 5800, priceTrend: 3.9, volumeTrend: 7.6 },
  { id: '14', name: 'Sneakers Adidas Samba', category: 'Chaussures', platform: 'vinted', avgPrice: 72, volume: 10500, priceTrend: 7.8, volumeTrend: 35.2 },
  { id: '15', name: 'Montre Seiko Presage', category: 'Accessoires', platform: 'ebay', avgPrice: 340, volume: 2800, priceTrend: 4.5, volumeTrend: 8.9 },
  { id: '16', name: 'Trottinette Xiaomi Pro 2', category: 'Sports', platform: 'leboncoin', avgPrice: 280, volume: 3900, priceTrend: -1.8, volumeTrend: 16.3 },
  { id: '17', name: 'Polo Ralph Lauren', category: 'Mode', platform: 'vinted', avgPrice: 48, volume: 8700, priceTrend: 3.2, volumeTrend: 21.7 },
  { id: '18', name: 'DJI Mini 3 Drone', category: 'Électronique', platform: 'ebay', avgPrice: 380, volume: 3200, priceTrend: -4.2, volumeTrend: 13.1 },
];

export const categoryData: CategoryData[] = [
  { name: 'Mode & Vêtements', vinted: 450000, leboncoin: 120000, ebay: 280000, totalVolume: 850000, avgPrice: 38 },
  { name: 'Électronique', vinted: 45000, leboncoin: 180000, ebay: 520000, totalVolume: 745000, avgPrice: 185 },
  { name: 'Maison & Déco', vinted: 30000, leboncoin: 350000, ebay: 120000, totalVolume: 500000, avgPrice: 95 },
  { name: 'Chaussures', vinted: 280000, leboncoin: 45000, ebay: 180000, totalVolume: 505000, avgPrice: 62 },
  { name: 'Sports & Loisirs', vinted: 85000, leboncoin: 210000, ebay: 150000, totalVolume: 445000, avgPrice: 120 },
  { name: 'Accessoires', vinted: 120000, leboncoin: 65000, ebay: 95000, totalVolume: 280000, avgPrice: 78 },
];

export const priceHistory: PriceHistory[] = [
  { date: 'Jan', vinted: 25.2, leboncoin: 42.1, ebay: 58.3 },
  { date: 'Fév', vinted: 26.1, leboncoin: 43.5, ebay: 59.1 },
  { date: 'Mar', vinted: 25.8, leboncoin: 44.2, ebay: 60.5 },
  { date: 'Avr', vinted: 27.3, leboncoin: 43.8, ebay: 61.2 },
  { date: 'Mai', vinted: 28.1, leboncoin: 44.9, ebay: 60.8 },
  { date: 'Jun', vinted: 27.5, leboncoin: 45.3, ebay: 62.1 },
  { date: 'Jul', vinted: 28.9, leboncoin: 46.1, ebay: 63.5 },
  { date: 'Aoû', vinted: 29.2, leboncoin: 45.8, ebay: 62.8 },
  { date: 'Sep', vinted: 28.8, leboncoin: 44.5, ebay: 61.9 },
  { date: 'Oct', vinted: 29.5, leboncoin: 46.2, ebay: 63.2 },
  { date: 'Nov', vinted: 30.1, leboncoin: 47.1, ebay: 64.8 },
  { date: 'Déc', vinted: 28.5, leboncoin: 45.2, ebay: 62.8 },
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

export const agentResponses: Record<string, string> = {
  'tendance': "📊 **Analyse des tendances actuelles :**\n\n• **Mode & Vêtements** domine sur Vinted avec 450K listings/mois (+12%)\n• **Électronique** reste roi sur eBay (520K listings) mais les prix baissent de 3%\n• **Maison & Déco** explose sur Leboncoin (+25% en volume)\n• Les **sneakers** sont la catégorie la plus dynamique toutes plateformes confondues\n\n💡 *Recommandation : Les sneakers Adidas Samba voient leur volume augmenter de 35% sur Vinted.*",
  'prix': "💰 **Analyse des prix moyens par plateforme :**\n\n| Plateforme | Prix moyen | Tendance |\n|------------|-----------|----------|\n| Vinted | 28.50€ | ↑ +4.2% |\n| Leboncoin | 45.20€ | ↑ +2.8% |\n| eBay | 62.80€ | ↓ -1.5% |\n\n📈 Les prix sur Vinted augmentent régulièrement grâce à la demande croissante pour les marques premium en seconde main.\n\n💡 *Opportunité : Les articles électroniques sur eBay sont 30% moins chers qu'il y a 6 mois.*",
  'volume': "📦 **Volumes de vente - Top 5 catégories :**\n\n1. 🥇 Mode & Vêtements : 850K ventes/mois\n2. 🥈 Électronique : 745K ventes/mois\n3. 🥉 Chaussures : 505K ventes/mois\n4. Maison & Déco : 500K ventes/mois\n5. Sports & Loisirs : 445K ventes/mois\n\n🔥 La catégorie 'Mode' représente 35% du volume total sur les 3 plateformes.\n\n💡 *Vinted domine la mode avec 53% de part de marché dans cette catégorie.*",
  'meilleur': "🏆 **Meilleures opportunités d'investissement :**\n\n1. **Sneakers Adidas Samba** - ROI potentiel: +45%\n   - Prix achat moyen: 52€ → Revente: 75€\n   - Volume: 10,500/mois sur Vinted\n\n2. **Veste The North Face** - ROI potentiel: +38%\n   - Prix achat moyen: 69€ → Revente: 95€\n   - Volume: 9,800/mois\n\n3. **Jean Levi's 501** - ROI potentiel: +32%\n   - Prix achat moyen: 26€ → Revente: 35€\n   - Volume: 18,200/mois (le + élevé !)\n\n💡 *Le jean Levi's 501 offre le meilleur ratio volume/marge.*",
  'default': "🤖 Je suis votre agent de veille marché. Je peux vous aider avec :\n\n• 📊 **Tendances** - Tapez 'tendance' pour voir les tendances actuelles\n• 💰 **Prix** - Tapez 'prix' pour l'analyse des prix\n• 📦 **Volume** - Tapez 'volume' pour les volumes de vente\n• 🏆 **Opportunités** - Tapez 'meilleur' pour les meilleures opportunités\n\nJe surveille en continu Vinted, Leboncoin et eBay pour vous fournir les meilleures insights !",
};

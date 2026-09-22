export interface TrendingItem {
  id: string;
  name: string;
  category: string;
  platform: 'vinted' | 'leboncoin' | 'ebay';
  avgPrice: number;
  minPrice: number;
  maxPrice: number;
  volume: number;
  volume7d: number;
  volume30d: number;
  priceTrend: number;
  priceTrend7d: number;
  priceTrend30d: number;
  volumeTrend: number;
  volumeTrend7d: number;
  volumeTrend30d: number;
  roi: number;
  demandScore: number;
  competitionScore: number;
  condition: string;
  keywords: string[];
  description: string;
  lastScan: string;
  confidence: number;
  isComponent?: boolean; // For PC components
  specs?: string;
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
      'Pas de négociation directe',
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
    avgPrice: 24.5,
    topCategory: 'High-Tech & Accessoires',
    growth: 8.7,
    country: '🇫🇷 France',
    founded: '2006',
    description: 'Focus sur petits objets électroniques et accessoires : écouteurs, chargeurs, câbles, coques, clés USB, petits gadgets. Pas de meubles ni objets encombrants.',
    strengths: [
      'Négociation directe avec le vendeur',
      'Remise en main propre possible',
      'Pas de commission',
      'Énorme volume d\'annonces locales',
      'Idéal pour petits objets électroniques',
    ],
    weaknesses: [
      'Pas de protection acheteur systématique',
      'Arnaques possibles (vigilance requise)',
      'Interface moins moderne',
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
    topCategory: 'Composants PC & Électronique',
    growth: 5.4,
    country: '🇺🇸 USA / 🌍 International',
    founded: '1995',
    description: 'Pionnier mondial. Couverture internationale, idéal pour composants PC (GPU, CPU, RAM, SSD), électronique et objets rares.',
    strengths: [
      'Couverture internationale (190+ pays)',
      'Système d\'enchères unique',
      'Protection acheteur/vendeur robuste',
      'Historique de prix très complet',
      'Leader pour composants PC',
    ],
    weaknesses: [
      'Frais vendeur élevés (10-13%)',
      'Concurrence internationale forte',
      'Délais de livraison variables',
    ],
    scanFrequency: 'Toutes les 5 minutes',
    dataSource: 'API eBay Developer + flux Completed Listings',
    reliability: 95,
  },
];

// Composants PC (GPU, CPU, RAM, SSD)
export const componentItems: TrendingItem[] = [
  // GPU
  { id: 'gpu1', name: 'RTX 4070 Super', category: 'GPU', platform: 'ebay', avgPrice: 580, minPrice: 480, maxPrice: 680, volume: 4200, volume7d: 980, volume30d: 4200, priceTrend: -4.2, priceTrend7d: -1.8, priceTrend30d: -4.2, volumeTrend: 12.5, volumeTrend7d: 8.2, volumeTrend30d: 12.5, roi: 18, demandScore: 92, competitionScore: 70, condition: 'Comme neuf', keywords: ['nvidia', 'rtx', '4070', 'gpu', 'carte graphique'], description: 'GPU haut de gamme excellent rapport perf/prix. RTX 4070 Super très demandée.', lastScan: 'Il y a 2 min', confidence: 93, isComponent: true, specs: '12GB GDDR6X • 256-bit • 220W' },
  { id: 'gpu2', name: 'RTX 3060 Ti', category: 'GPU', platform: 'ebay', avgPrice: 260, minPrice: 200, maxPrice: 320, volume: 7800, volume7d: 1820, volume30d: 7800, priceTrend: -6.8, priceTrend7d: -2.5, priceTrend30d: -6.8, volumeTrend: 18.4, volumeTrend7d: 12.1, volumeTrend30d: 18.4, roi: 25, demandScore: 88, competitionScore: 75, condition: 'Bon état', keywords: ['nvidia', 'rtx', '3060', 'ti', 'gpu'], description: '🔥 Meilleur rapport qualité/prix du marché. Très forte demande en occasion.', lastScan: 'Il y a 1 min', confidence: 95, isComponent: true, specs: '8GB GDDR6 • 256-bit • 200W' },
  { id: 'gpu3', name: 'RX 7600', category: 'GPU', platform: 'ebay', avgPrice: 240, minPrice: 190, maxPrice: 290, volume: 3500, volume7d: 820, volume30d: 3500, priceTrend: -3.5, priceTrend7d: -1.2, priceTrend30d: -3.5, volumeTrend: 15.2, volumeTrend7d: 9.8, volumeTrend30d: 15.2, roi: 22, demandScore: 82, competitionScore: 60, condition: 'Comme neuf', keywords: ['amd', 'radeon', 'rx', '7600', 'gpu'], description: 'Alternative AMD performante. Prix en baisse suite à la sortie des RTX 5000.', lastScan: 'Il y a 3 min', confidence: 90, isComponent: true, specs: '8GB GDDR6 • 128-bit • 165W' },
  { id: 'gpu4', name: 'RTX 4060', category: 'GPU', platform: 'ebay', avgPrice: 290, minPrice: 240, maxPrice: 350, volume: 5600, volume7d: 1310, volume30d: 5600, priceTrend: -5.1, priceTrend7d: -2.1, priceTrend30d: -5.1, volumeTrend: 14.8, volumeTrend7d: 10.5, volumeTrend30d: 14.8, roi: 20, demandScore: 86, competitionScore: 68, condition: 'Comme neuf', keywords: ['nvidia', 'rtx', '4060', 'gpu', 'carte graphique'], description: 'GPU milieu de gamme très populaire. Bonne revente, forte demande.', lastScan: 'Il y a 2 min', confidence: 92, isComponent: true, specs: '8GB GDDR6 • 128-bit • 115W' },

  // CPU
  { id: 'cpu1', name: 'Ryzen 7 5800X3D', category: 'CPU', platform: 'ebay', avgPrice: 280, minPrice: 220, maxPrice: 340, volume: 3200, volume7d: 750, volume30d: 3200, priceTrend: -2.8, priceTrend7d: -0.9, priceTrend30d: -2.8, volumeTrend: 22.5, volumeTrend7d: 15.2, volumeTrend30d: 22.5, roi: 28, demandScore: 94, competitionScore: 55, condition: 'Comme neuf', keywords: ['amd', 'ryzen', '5800x3d', 'cpu', 'processeur'], description: '🔥 Meilleur CPU gaming AM4. Demande en explosion, stock limité.', lastScan: 'Il y a 1 min', confidence: 96, isComponent: true, specs: '8 cores / 16 threads • 3.4 GHz • 105W • AM4' },
  { id: 'cpu2', name: 'i5-13600K', category: 'CPU', platform: 'ebay', avgPrice: 240, minPrice: 190, maxPrice: 290, volume: 4800, volume7d: 1120, volume30d: 4800, priceTrend: -7.2, priceTrend7d: -3.1, priceTrend30d: -7.2, volumeTrend: 16.3, volumeTrend7d: 11.8, volumeTrend30d: 16.3, roi: 22, demandScore: 88, competitionScore: 72, condition: 'Comme neuf', keywords: ['intel', 'i5', '13600k', 'cpu', 'processeur'], description: 'CPU Intel très polyvalent gaming/productivité. Prix en forte baisse.', lastScan: 'Il y a 2 min', confidence: 91, isComponent: true, specs: '14 cores / 20 threads • 3.5 GHz • 125W • LGA1700' },
  { id: 'cpu3', name: 'Ryzen 5 5600', category: 'CPU', platform: 'ebay', avgPrice: 110, minPrice: 85, maxPrice: 140, volume: 8900, volume7d: 2080, volume30d: 8900, priceTrend: -8.5, priceTrend7d: -3.8, priceTrend30d: -8.5, volumeTrend: 25.1, volumeTrend7d: 18.4, volumeTrend30d: 25.1, roi: 32, demandScore: 90, competitionScore: 80, condition: 'Bon état', keywords: ['amd', 'ryzen', '5600', 'cpu', 'processeur'], description: '🔥 Le CPU budget par excellence. Volume énorme, prix très accessible.', lastScan: 'Il y a 1 min', confidence: 94, isComponent: true, specs: '6 cores / 12 threads • 3.5 GHz • 65W • AM4' },
  { id: 'cpu4', name: 'i7-12700K', category: 'CPU', platform: 'ebay', avgPrice: 220, minPrice: 170, maxPrice: 270, volume: 3600, volume7d: 840, volume30d: 3600, priceTrend: -9.2, priceTrend7d: -4.1, priceTrend30d: -9.2, volumeTrend: 13.8, volumeTrend7d: 9.2, volumeTrend30d: 13.8, roi: 18, demandScore: 82, competitionScore: 65, condition: 'Comme neuf', keywords: ['intel', 'i7', '12700k', 'cpu', 'processeur'], description: 'CPU haut de gamme génération précédente. Forte baisse = opportunité achat.', lastScan: 'Il y a 3 min', confidence: 89, isComponent: true, specs: '12 cores / 20 threads • 3.6 GHz • 125W • LGA1700' },

  // RAM
  { id: 'ram1', name: 'DDR5 32GB (2x16) 6000MHz', category: 'RAM', platform: 'ebay', avgPrice: 95, minPrice: 75, maxPrice: 120, volume: 6200, volume7d: 1450, volume30d: 6200, priceTrend: -12.5, priceTrend7d: -5.2, priceTrend30d: -12.5, volumeTrend: 32.8, volumeTrend7d: 22.1, volumeTrend30d: 32.8, roi: 35, demandScore: 91, competitionScore: 78, condition: 'Neuf', keywords: ['ddr5', 'ram', '32gb', '6000mhz', 'mémoire'], description: '🔥 DDR5 en forte baisse. Kit 32GB 6000MHz = standard actuel. Achat recommandé.', lastScan: 'Il y a 1 min', confidence: 93, isComponent: true, specs: '2x16GB • DDR5 • 6000MHz • CL30 • 1.35V' },
  { id: 'ram2', name: 'DDR4 32GB (2x16) 3600MHz', category: 'RAM', platform: 'ebay', avgPrice: 52, minPrice: 38, maxPrice: 68, volume: 9800, volume7d: 2290, volume30d: 9800, priceTrend: -15.2, priceTrend7d: -6.8, priceTrend30d: -15.2, volumeTrend: 28.5, volumeTrend7d: 19.2, volumeTrend30d: 28.5, roi: 38, demandScore: 88, competitionScore: 85, condition: 'Neuf', keywords: ['ddr4', 'ram', '32gb', '3600mhz', 'mémoire'], description: 'DDR4 toujours très demandée. Prix plancher historique = opportunité.', lastScan: 'Il y a 2 min', confidence: 92, isComponent: true, specs: '2x16GB • DDR4 • 3600MHz • CL16 • 1.35V' },
  { id: 'ram3', name: 'DDR4 16GB (2x8) 3200MHz', category: 'RAM', platform: 'ebay', avgPrice: 28, minPrice: 20, maxPrice: 38, volume: 12500, volume7d: 2920, volume30d: 12500, priceTrend: -18.3, priceTrend7d: -8.2, priceTrend30d: -18.3, volumeTrend: 22.1, volumeTrend7d: 15.8, volumeTrend30d: 22.1, roi: 42, demandScore: 85, competitionScore: 88, condition: 'Neuf', keywords: ['ddr4', 'ram', '16gb', '3200mhz', 'mémoire'], description: 'Kit DDR4 budget. Volume le plus élevé, prix très bas. Revente rapide.', lastScan: 'Il y a 1 min', confidence: 90, isComponent: true, specs: '2x8GB • DDR4 • 3200MHz • CL16 • 1.35V' },

  // SSD
  { id: 'ssd1', name: 'Samsung 990 Pro 2TB NVMe', category: 'SSD', platform: 'ebay', avgPrice: 145, minPrice: 115, maxPrice: 180, volume: 4800, volume7d: 1120, volume30d: 4800, priceTrend: -8.5, priceTrend7d: -3.5, priceTrend30d: -8.5, volumeTrend: 28.2, volumeTrend7d: 18.5, volumeTrend30d: 28.2, roi: 30, demandScore: 90, competitionScore: 70, condition: 'Neuf', keywords: ['samsung', '990 pro', 'ssd', 'nvme', '2tb'], description: '🔥 SSD NVMe haut de gamme. PCIe 4.0, vitesses exceptionnelles. Forte demande.', lastScan: 'Il y a 2 min', confidence: 94, isComponent: true, specs: '2TB • NVMe PCIe 4.0 • 7450/6900 MB/s' },
  { id: 'ssd2', name: 'WD Black SN850X 1TB', category: 'SSD', platform: 'ebay', avgPrice: 78, minPrice: 60, maxPrice: 98, volume: 7200, volume7d: 1680, volume30d: 7200, priceTrend: -11.2, priceTrend7d: -4.8, priceTrend30d: -11.2, volumeTrend: 24.5, volumeTrend7d: 16.2, volumeTrend30d: 24.5, roi: 32, demandScore: 88, competitionScore: 75, condition: 'Neuf', keywords: ['wd', 'black', 'sn850x', 'ssd', 'nvme', '1tb'], description: 'SSD NVMe excellent rapport qualité/prix. Très populaire.', lastScan: 'Il y a 1 min', confidence: 93, isComponent: true, specs: '1TB • NVMe PCIe 4.0 • 7300/6300 MB/s' },
  { id: 'ssd3', name: 'Kingston NV2 1TB NVMe', category: 'SSD', platform: 'ebay', avgPrice: 48, minPrice: 35, maxPrice: 62, volume: 11800, volume7d: 2750, volume30d: 11800, priceTrend: -14.8, priceTrend7d: -6.5, priceTrend30d: -14.8, volumeTrend: 35.2, volumeTrend7d: 24.1, volumeTrend30d: 35.2, roi: 38, demandScore: 86, competitionScore: 82, condition: 'Neuf', keywords: ['kingston', 'nv2', 'ssd', 'nvme', '1tb'], description: '🔥 SSD budget #1. Volume énorme, prix plancher. Revente très rapide.', lastScan: 'Il y a 1 min', confidence: 91, isComponent: true, specs: '1TB • NVMe PCIe 4.0 • 3500/2100 MB/s' },
  { id: 'ssd4', name: 'Crucial MX500 1TB SATA', category: 'SSD', platform: 'ebay', avgPrice: 62, minPrice: 48, maxPrice: 78, volume: 5400, volume7d: 1260, volume30d: 5400, priceTrend: -6.2, priceTrend7d: -2.8, priceTrend30d: -6.2, volumeTrend: 18.5, volumeTrend7d: 12.2, volumeTrend30d: 18.5, roi: 25, demandScore: 82, competitionScore: 68, condition: 'Neuf', keywords: ['crucial', 'mx500', 'ssd', 'sata', '1tb'], description: 'SSD SATA fiable et endurant. Idéal pour upgrades de vieux PCs.', lastScan: 'Il y a 3 min', confidence: 89, isComponent: true, specs: '1TB • SATA III • 560/510 MB/s • TLC' },
];

// Objets Vinted (mode)
export const vintedItems: TrendingItem[] = [
  { id: '1', name: 'Nike Air Force 1 Blanc', category: 'Chaussures', platform: 'vinted', avgPrice: 85, minPrice: 55, maxPrice: 120, volume: 12400, volume7d: 2900, volume30d: 12400, priceTrend: 5.2, priceTrend7d: 2.1, priceTrend30d: 5.2, volumeTrend: 18.3, volumeTrend7d: 12.5, volumeTrend30d: 18.3, roi: 28, demandScore: 92, competitionScore: 75, condition: 'Très bon état', keywords: ['sneakers', 'nike', 'blanc', 'air force'], description: 'Sneakers iconiques, forte demande constante.', lastScan: 'Il y a 3 min', confidence: 94 },
  { id: '6', name: 'Veste The North Face Nuptse', category: 'Mode', platform: 'vinted', avgPrice: 95, minPrice: 60, maxPrice: 140, volume: 9800, volume7d: 2290, volume30d: 9800, priceTrend: 3.4, priceTrend7d: 1.5, priceTrend30d: 3.4, volumeTrend: 25.6, volumeTrend7d: 18.2, volumeTrend30d: 25.6, roi: 38, demandScore: 85, competitionScore: 60, condition: 'Très bon état', keywords: ['north face', 'veste', 'hiver', 'nuptse'], description: 'Vestes outdoor très recherchées en automne/hiver.', lastScan: 'Il y a 2 min', confidence: 91 },
  { id: '12', name: 'Jean Levi\'s 501', category: 'Mode', platform: 'vinted', avgPrice: 35, minPrice: 18, maxPrice: 60, volume: 18200, volume7d: 4250, volume30d: 18200, priceTrend: 2.1, priceTrend7d: 0.8, priceTrend30d: 2.1, volumeTrend: 14.8, volumeTrend7d: 10.2, volumeTrend30d: 14.8, roi: 32, demandScore: 90, competitionScore: 70, condition: 'Bon état', keywords: ['levis', 'jean', '501', 'denim'], description: 'Le jean iconique. Volume le plus élevé toutes catégories.', lastScan: 'Il y a 2 min', confidence: 95 },
  { id: '14', name: 'Sneakers Adidas Samba', category: 'Chaussures', platform: 'vinted', avgPrice: 72, minPrice: 45, maxPrice: 110, volume: 10500, volume7d: 2450, volume30d: 10500, priceTrend: 7.8, priceTrend7d: 3.2, priceTrend30d: 7.8, volumeTrend: 35.2, volumeTrend7d: 25.8, volumeTrend30d: 35.2, roi: 45, demandScore: 96, competitionScore: 65, condition: 'Très bon état', keywords: ['adidas', 'samba', 'sneakers', 'tendance'], description: '🔥 LA tendance du moment. Volume en explosion.', lastScan: 'Il y a 1 min', confidence: 97 },
  { id: '17', name: 'Polo Ralph Lauren', category: 'Mode', platform: 'vinted', avgPrice: 48, minPrice: 25, maxPrice: 80, volume: 8700, volume7d: 2030, volume30d: 8700, priceTrend: 3.2, priceTrend7d: 1.4, priceTrend30d: 3.2, volumeTrend: 21.7, volumeTrend7d: 15.3, volumeTrend30d: 21.7, roi: 35, demandScore: 82, competitionScore: 55, condition: 'Bon état', keywords: ['ralph lauren', 'polo', 'preppy'], description: 'Valeur sûre, demande stable. Coupes vintage premium.', lastScan: 'Il y a 4 min', confidence: 88 },
];

// Objets Leboncoin - Petits objets électroniques uniquement
export const leboncoinItems: TrendingItem[] = [
  { id: 'lb1', name: 'AirPods Pro 2 (USB-C)', category: 'Écouteurs', platform: 'leboncoin', avgPrice: 145, minPrice: 110, maxPrice: 180, volume: 3200, volume7d: 750, volume30d: 3200, priceTrend: -2.8, priceTrend7d: -1.2, priceTrend30d: -2.8, volumeTrend: 19.4, volumeTrend7d: 13.2, volumeTrend30d: 19.4, roi: 22, demandScore: 90, competitionScore: 72, condition: 'Comme neuf', keywords: ['airpods', 'apple', 'écouteurs', 'usb-c'], description: 'Écouteurs Apple très demandés. Version USB-C en hausse.', lastScan: 'Il y a 2 min', confidence: 91 },
  { id: 'lb2', name: 'Chargeur MagSafe Apple', category: 'Accessoires', platform: 'leboncoin', avgPrice: 25, minPrice: 15, maxPrice: 38, volume: 4800, volume7d: 1120, volume30d: 4800, priceTrend: 1.5, priceTrend7d: 0.6, priceTrend30d: 1.5, volumeTrend: 24.2, volumeTrend7d: 16.8, volumeTrend30d: 24.2, roi: 45, demandScore: 85, competitionScore: 65, condition: 'Comme neuf', keywords: ['magsafe', 'chargeur', 'apple', 'iphone'], description: 'Chargeur sans fil Apple. Petit, facile à expédier, forte demande.', lastScan: 'Il y a 3 min', confidence: 89 },
  { id: 'lb3', name: 'Clé USB 3.0 128GB SanDisk', category: 'Stockage', platform: 'leboncoin', avgPrice: 12, minPrice: 6, maxPrice: 18, volume: 8500, volume7d: 1980, volume30d: 8500, priceTrend: -3.2, priceTrend7d: -1.4, priceTrend30d: -3.2, volumeTrend: 28.5, volumeTrend7d: 19.8, volumeTrend30d: 28.5, roi: 55, demandScore: 82, competitionScore: 80, condition: 'Neuf', keywords: ['usb', 'sandisk', '128gb', 'stockage'], description: 'Petit objet, fort volume. Achat en gros possible.', lastScan: 'Il y a 1 min', confidence: 87 },
  { id: 'lb4', name: 'Coque iPhone 15 Pro', category: 'Accessoires', platform: 'leboncoin', avgPrice: 15, minPrice: 8, maxPrice: 25, volume: 12400, volume7d: 2890, volume30d: 12400, priceTrend: 0.8, priceTrend7d: 0.3, priceTrend30d: 0.8, volumeTrend: 32.1, volumeTrend7d: 22.5, volumeTrend30d: 32.1, roi: 60, demandScore: 88, competitionScore: 85, condition: 'Neuf', keywords: ['coque', 'iphone', '15 pro', 'protection'], description: 'Volume énorme, petite marge unitaire. Lots = rentabilité.', lastScan: 'Il y a 2 min', confidence: 86 },
  { id: 'lb5', name: 'Câble USB-C vers Lightning', category: 'Câbles', platform: 'leboncoin', avgPrice: 8, minPrice: 4, maxPrice: 14, volume: 15200, volume7d: 3550, volume30d: 15200, priceTrend: -1.2, priceTrend7d: -0.5, priceTrend30d: -1.2, volumeTrend: 38.5, volumeTrend7d: 28.2, volumeTrend30d: 38.5, roi: 65, demandScore: 80, competitionScore: 88, condition: 'Neuf', keywords: ['câble', 'usb-c', 'lightning', 'apple'], description: 'Accessoire indispensable. Volume le + élevé Leboncoin.', lastScan: 'Il y a 1 min', confidence: 85 },
  { id: 'lb6', name: 'Souris Logitech MX Master 3', category: 'Périphériques', platform: 'leboncoin', avgPrice: 55, minPrice: 35, maxPrice: 75, volume: 2800, volume7d: 650, volume30d: 2800, priceTrend: -4.5, priceTrend7d: -1.8, priceTrend30d: -4.5, volumeTrend: 18.2, volumeTrend7d: 12.5, volumeTrend30d: 18.2, roi: 35, demandScore: 86, competitionScore: 58, condition: 'Comme neuf', keywords: ['logitech', 'mx master', 'souris', 'sans fil'], description: 'Souris pro très demandée. Compacte, facile à revendre.', lastScan: 'Il y a 4 min', confidence: 90 },
  { id: 'lb7', name: 'Écouteurs Sony WF-1000XM5', category: 'Écouteurs', platform: 'leboncoin', avgPrice: 180, minPrice: 140, maxPrice: 220, volume: 1800, volume7d: 420, volume30d: 1800, priceTrend: -5.8, priceTrend7d: -2.5, priceTrend30d: -5.8, volumeTrend: 22.5, volumeTrend7d: 15.8, volumeTrend30d: 22.5, roi: 28, demandScore: 88, competitionScore: 62, condition: 'Comme neuf', keywords: ['sony', 'wf-1000xm5', 'écouteurs', 'bluetooth'], description: 'Meilleurs écouteurs ANC du marché. Forte revente.', lastScan: 'Il y a 3 min', confidence: 92 },
  { id: 'lb8', name: 'Hub USB-C 7-en-1', category: 'Accessoires', platform: 'leboncoin', avgPrice: 22, minPrice: 12, maxPrice: 35, volume: 5600, volume7d: 1310, volume30d: 5600, priceTrend: 2.1, priceTrend7d: 0.9, priceTrend30d: 2.1, volumeTrend: 28.8, volumeTrend7d: 20.2, volumeTrend30d: 28.8, roi: 48, demandScore: 84, competitionScore: 70, condition: 'Neuf', keywords: ['hub', 'usb-c', '7-en-1', 'adaptateur'], description: 'Accessoire indispensable laptops modernes. Petit et rentable.', lastScan: 'Il y a 2 min', confidence: 88 },
];

// Tous les items combinés
export const trendingItems: TrendingItem[] = [...vintedItems, ...leboncoinItems, ...componentItems];

export const categoryData: CategoryData[] = [
  { name: 'Mode & Vêtements', vinted: 450000, leboncoin: 25000, ebay: 180000, totalVolume: 655000, avgPrice: 38 },
  { name: 'Composants PC', vinted: 5000, leboncoin: 15000, ebay: 420000, totalVolume: 440000, avgPrice: 145 },
  { name: 'Écouteurs/Audio', vinted: 35000, leboncoin: 85000, ebay: 195000, totalVolume: 315000, avgPrice: 85 },
  { name: 'Chaussures', vinted: 280000, leboncoin: 15000, ebay: 120000, totalVolume: 415000, avgPrice: 62 },
  { name: 'Accessoires Tech', vinted: 25000, leboncoin: 165000, ebay: 145000, totalVolume: 335000, avgPrice: 28 },
  { name: 'Stockage', vinted: 8000, leboncoin: 45000, ebay: 280000, totalVolume: 333000, avgPrice: 68 },
];

export const priceHistory: PriceHistory[] = [
  { date: 'Jan', vinted: 25.2, leboncoin: 22.5, ebay: 58.3 },
  { date: 'Fév', vinted: 26.1, leboncoin: 23.1, ebay: 59.1 },
  { date: 'Mar', vinted: 25.8, leboncoin: 23.5, ebay: 60.5 },
  { date: 'Avr', vinted: 27.3, leboncoin: 23.8, ebay: 61.2 },
  { date: 'Mai', vinted: 28.1, leboncoin: 24.1, ebay: 60.8 },
  { date: 'Jun', vinted: 27.5, leboncoin: 24.3, ebay: 62.1 },
  { date: 'Jul', vinted: 28.9, leboncoin: 24.5, ebay: 63.5 },
  { date: 'Aoû', vinted: 29.2, leboncoin: 24.4, ebay: 62.8 },
  { date: 'Sep', vinted: 28.8, leboncoin: 24.2, ebay: 61.9 },
  { date: 'Oct', vinted: 29.5, leboncoin: 24.5, ebay: 63.2 },
  { date: 'Nov', vinted: 30.1, leboncoin: 24.8, ebay: 64.8 },
  { date: 'Déc', vinted: 28.5, leboncoin: 24.5, ebay: 62.8 },
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
      'Standardisation des états',
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
      'NLP pour analyse des descriptions',
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
      'Classement par potentiel (volume × marge × vélocité)',
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
      'Historique de précision du modèle',
      'Transparence totale sur les sources',
    ],
    frequency: 'Continue',
    tools: ['Système de scoring', 'Logs audit', 'A/B testing', 'Feedback loop'],
  },
];

export const agentResponses: Record<string, string> = {
  'tendance': "📊 **Analyse des tendances actuelles :**\n\n• **Mode** domine sur Vinted (450K listings/mois, +12%)\n• **Composants PC** en forte baisse de prix sur eBay (-8% à -18%)\n• **Écouteurs/Audio** très demandés sur Leboncoin\n• **Sneakers Samba** : +35% volume sur Vinted 🔥\n• **DDR5 et SSD NVMe** : prix plancher, opportunité d'achat\n\n💡 *Recommandation : Acheter GPU/RAM/SSD maintenant sur eBay (prix au plus bas).*",
  'prix': "💰 **Analyse des prix par plateforme :**\n\n| Plateforme | Prix moyen | Tendance |\n|------------|-----------|----------|\n| Vinted | 28.50€ | ↑ +4.2% |\n| Leboncoin | 24.50€ | ↑ +3.1% |\n| eBay | 62.80€ | ↓ -5.8% |\n\n📉 **Composants PC** : baisse généralisée (-8% à -18% sur 30j)\n• DDR5 32GB : -12.5%\n• RTX 3060 Ti : -6.8%\n• SSD NVMe 1TB : -11% à -15%\n\n💡 *C'est le moment d'acheter des composants !*",
  'volume': "📦 **Volumes de vente - Top catégories :**\n\n1. 🥇 Mode & Vêtements : 655K/mois\n2. 🥈 Composants PC : 440K/mois\n3. 🥉 Chaussures : 415K/mois\n4. Accessoires Tech : 335K/mois\n5. Stockage : 333K/mois\n\n🔥 **Sur 7 derniers jours :**\n• Câbles USB-C : +38.5% (Leboncoin)\n• DDR4 16GB : +22.1% (eBay)\n• SSD Kingston NV2 : +35.2% (eBay)\n\n💡 *Les composants PC dominent les volumes sur eBay.*",
  'meilleur': "🏆 **Meilleures opportunités du moment :**\n\n**Composants PC (eBay) :**\n1. **DDR4 16GB 3200MHz** - ROI: +42%\n   - Prix: 28€ • Volume: 12,500/mois\n\n2. **SSD Kingston NV2 1TB** - ROI: +38%\n   - Prix: 48€ • Volume: 11,800/mois\n\n3. **Ryzen 5 5600** - ROI: +32%\n   - Prix: 110€ • Volume: 8,900/mois\n\n**Leboncoin (petits objets) :**\n4. **Câbles USB-C Lightning** - ROI: +65%\n   - Prix: 8€ • Volume: 15,200/mois\n\n5. **Coques iPhone 15** - ROI: +60%\n   - Prix: 15€ • Volume: 12,400/mois\n\n💡 *Les accessoires tech sur Leboncoin offrent les meilleurs ROI !*",
  'gpu': "🎮 **Analyse GPU - Marché actuel :**\n\n| Modèle | Prix moy. | Tendance 30j | Volume |\n|--------|-----------|--------------|--------|\n| RTX 4070 Super | 580€ | -4.2% | 4,200/mois |\n| RTX 3060 Ti | 260€ | -6.8% | 7,800/mois 🔥 |\n| RTX 4060 | 290€ | -5.1% | 5,600/mois |\n| RX 7600 | 240€ | -3.5% | 3,500/mois |\n\n📉 **Tendance** : Baisse généralisée suite à l'annonce des RTX 5000\n💡 **Recommandation** : RTX 3060 Ti = meilleur rapport perf/prix actuel\n🎯 **Opportunité** : Acheter maintenant, revendre dans 3-6 mois",
  'cpu': "🖥️ **Analyse CPU - Marché actuel :**\n\n| Modèle | Prix moy. | Tendance 30j | Volume |\n|--------|-----------|--------------|--------|\n| Ryzen 7 5800X3D | 280€ | -2.8% | 3,200/mois 🔥 |\n| i5-13600K | 240€ | -7.2% | 4,800/mois |\n| Ryzen 5 5600 | 110€ | -8.5% | 8,900/mois 🔥 |\n| i7-12700K | 220€ | -9.2% | 3,600/mois |\n\n📉 **Tendance** : Baisse forte sur Intel (-7% à -9%)\n💡 **Recommandation** : Ryzen 5 5600 = CPU budget #1\n🎯 **Opportunité** : 5800X3D = meilleur CPU gaming AM4, stock limité",
  'ram': "💾 **Analyse RAM - Marché actuel :**\n\n| Modèle | Prix moy. | Tendance 30j | Volume |\n|--------|-----------|--------------|--------|\n| DDR5 32GB 6000MHz | 95€ | -12.5% | 6,200/mois 🔥 |\n| DDR4 32GB 3600MHz | 52€ | -15.2% | 9,800/mois |\n| DDR4 16GB 3200MHz | 28€ | -18.3% | 12,500/mois 🔥 |\n\n📉 **Tendance** : Chute des prix DDR4 et DDR5\n💡 **Recommandation** : DDR4 16GB = prix plancher historique\n🎯 **Opportunité** : Acheter en lots pour revente, ROI +38-42%",
  'ssd': "💿 **Analyse SSD - Marché actuel :**\n\n| Modèle | Prix moy. | Tendance 30j | Volume |\n|--------|-----------|--------------|--------|\n| Samsung 990 Pro 2TB | 145€ | -8.5% | 4,800/mois |\n| WD Black SN850X 1TB | 78€ | -11.2% | 7,200/mois |\n| Kingston NV2 1TB | 48€ | -14.8% | 11,800/mois 🔥 |\n| Crucial MX500 1TB | 62€ | -6.2% | 5,400/mois |\n\n📉 **Tendance** : Baisse continue des NVMe\n💡 **Recommandation** : Kingston NV2 = SSD budget #1\n🎯 **Opportunité** : Volume énorme, prix plancher, ROI +38%",
  'leboncoin': "🛒 **Focus Leboncoin - Petits objets électroniques :**\n\n✅ **Écouteurs** : AirPods Pro 2 (145€), Sony WF-1000XM5 (180€)\n✅ **Chargeurs** : MagSafe Apple (25€), chargeurs rapides\n✅ **Câbles** : USB-C/Lightning (8€), forts volumes\n✅ **Coques** : iPhone 15 (15€), volume 12,400/mois\n✅ **Stockage** : Clés USB 128GB (12€)\n✅ **Périphériques** : Souris MX Master 3 (55€)\n✅ **Accessoires** : Hubs USB-C (22€)\n\n❌ **Évitons** : meubles, vélos, objets > 150€, volumineux\n\n💡 *Stratégie : petits objets < 50€, transport facile, forte rotation.*",
  'default': "🤖 Je suis votre agent de veille marché. Je peux vous aider avec :\n\n• 📊 **Tendances** - Tapez 'tendance'\n• 💰 **Prix** - Tapez 'prix'\n• 📦 **Volume** - Tapez 'volume'\n• 🏆 **Opportunités** - Tapez 'meilleur'\n• 🎮 **GPU** - Tapez 'gpu'\n• 🖥️ **CPU** - Tapez 'cpu'\n• 💾 **RAM** - Tapez 'ram'\n• 💿 **SSD** - Tapez 'ssd'\n• 🛒 **Leboncoin** - Tapez 'leboncoin'",
};

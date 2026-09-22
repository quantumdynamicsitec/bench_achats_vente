import React, { useState, useEffect } from 'react';
import { Cpu, HardDrive, MemoryStick, Monitor, TrendingUp, TrendingDown, Eye, Filter } from 'lucide-react';
import { componentItems, TrendingItem } from '../data/mockData';
import ItemDetailModal from './ItemDetailModal';

interface Props {
  timeFilter: string;
}

const categoryIcons: Record<string, any> = {
  'GPU': Monitor,
  'CPU': Cpu,
  'RAM': MemoryStick,
  'SSD': HardDrive,
};

const categoryColors: Record<string, string> = {
  'GPU': 'bg-blue-500/10 text-blue-400 border-blue-500/20',
  'CPU': 'bg-purple-500/10 text-purple-400 border-purple-500/20',
  'RAM': 'bg-green-500/10 text-green-400 border-green-500/20',
  'SSD': 'bg-orange-500/10 text-orange-400 border-orange-500/20',
};

export default function ElectronicsTab({ timeFilter }: Props) {
  const [selectedItem, setSelectedItem] = useState<TrendingItem | null>(null);
  const [categoryFilter, setCategoryFilter] = useState<string>('all');
  const [sortBy, setSortBy] = useState<string>('volume');
  const [liveComponents, setLiveComponents] = useState(componentItems);

  // Simulation de données live - mise à jour toutes les 8 secondes
  useEffect(() => {
    const interval = setInterval(() => {
      setLiveComponents(prev => prev.map(item => ({
        ...item,
        volume: Math.floor(item.volume * (0.98 + Math.random() * 0.04)),
        volume7d: Math.floor(item.volume7d * (0.97 + Math.random() * 0.06)),
        volume30d: Math.floor(item.volume30d * (0.98 + Math.random() * 0.04)),
        avgPrice: Math.round(item.avgPrice * (0.99 + Math.random() * 0.02)),
      })));
    }, 8000);
    return () => clearInterval(interval);
  }, []);

  const getVolume = (item: TrendingItem) => {
    switch (timeFilter) {
      case '7d': return item.volume7d;
      case '30d': return item.volume30d;
      default: return item.volume;
    }
  };

  const getPriceTrend = (item: TrendingItem) => {
    switch (timeFilter) {
      case '7d': return item.priceTrend7d;
      case '30d': return item.priceTrend30d;
      default: return item.priceTrend;
    }
  };

  const getVolumeTrend = (item: TrendingItem) => {
    switch (timeFilter) {
      case '7d': return item.volumeTrend7d;
      case '30d': return item.volumeTrend30d;
      default: return item.volumeTrend;
    }
  };

  const filteredItems = categoryFilter === 'all'
    ? liveComponents
    : liveComponents.filter(item => item.category === categoryFilter);

  const sortedItems = [...filteredItems].sort((a, b) => {
    switch (sortBy) {
      case 'volume': return getVolume(b) - getVolume(a);
      case 'price': return b.avgPrice - a.avgPrice;
      case 'roi': return b.roi - a.roi;
      case 'demand': return b.demandScore - a.demandScore;
      case 'trend': return getVolumeTrend(b) - getVolumeTrend(a);
      case 'priceTrend': return getPriceTrend(b) - getPriceTrend(a);
      default: return getVolume(b) - getVolume(a);
    }
  });

  // Stats par catégorie
  const categoryStats = ['GPU', 'CPU', 'RAM', 'SSD'].map(cat => {
    const items = liveComponents.filter(i => i.category === cat);
    const totalVolume = items.reduce((sum, i) => sum + getVolume(i), 0);
    const avgPrice = items.reduce((sum, i) => sum + i.avgPrice, 0) / items.length;
    const avgTrend = items.reduce((sum, i) => sum + getPriceTrend(i), 0) / items.length;
    return { category: cat, totalVolume, avgPrice, avgTrend };
  });

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="bg-gradient-to-r from-blue-900/30 to-purple-900/30 rounded-2xl border border-blue-500/20 p-6">
        <h2 className="text-white font-bold text-xl mb-2">🖥️ Composants PC & Électronique</h2>
        <p className="text-gray-400 text-sm leading-relaxed">
          Analyse détaillée du marché des composants PC : <strong className="text-white">GPU, CPU, RAM, SSD</strong>.
          Données en temps réel depuis eBay, leader mondial pour ces catégories.
        </p>
        <div className="flex flex-wrap gap-2 mt-4">
          <span className="text-xs bg-blue-500/10 text-blue-400 px-2 py-1 rounded-full border border-blue-500/20">
            📊 {liveComponents.length} produits analysés
          </span>
          <span className="text-xs bg-green-500/10 text-green-400 px-2 py-1 rounded-full border border-green-500/20">
            📉 Prix en baisse générale
          </span>
          <span className="text-xs bg-purple-500/10 text-purple-400 px-2 py-1 rounded-full border border-purple-500/20">
            🎯 Opportunités d'achat
          </span>
          <span className="text-xs bg-orange-500/10 text-orange-400 px-2 py-1 rounded-full border border-orange-500/20 flex items-center gap-1">
            <span className="w-1.5 h-1.5 rounded-full bg-orange-400 animate-pulse"></span>
            Mise à jour live
          </span>
        </div>
      </div>

      {/* Category Stats */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {categoryStats.map((stat) => {
          const Icon = categoryIcons[stat.category];
          return (
            <div key={stat.category} className="bg-gray-900/50 rounded-xl border border-gray-700/50 p-4 backdrop-blur-sm">
              <div className="flex items-center gap-2 mb-2">
                <div className={`w-8 h-8 rounded-lg flex items-center justify-center ${categoryColors[stat.category]}`}>
                  <Icon size={16} />
                </div>
                <span className="text-white font-bold">{stat.category}</span>
              </div>
              <div className="space-y-1">
                <div className="flex justify-between text-xs">
                  <span className="text-gray-500">Volume</span>
                  <span className="text-white font-medium">{stat.totalVolume.toLocaleString('fr-FR')}</span>
                </div>
                <div className="flex justify-between text-xs">
                  <span className="text-gray-500">Prix moy.</span>
                  <span className="text-white font-medium">{stat.avgPrice.toFixed(0)}€</span>
                </div>
                <div className="flex justify-between text-xs">
                  <span className="text-gray-500">Tendance</span>
                  <span className={`font-medium ${stat.avgTrend > 0 ? 'text-green-400' : 'text-red-400'}`}>
                    {stat.avgTrend > 0 ? '+' : ''}{stat.avgTrend.toFixed(1)}%
                  </span>
                </div>
              </div>
            </div>
          );
        })}
      </div>

      {/* Filters */}
      <div className="bg-gray-900/50 rounded-xl border border-gray-700/50 p-4 backdrop-blur-sm">
        <div className="flex flex-wrap items-center gap-4">
          <div className="flex items-center gap-2 text-gray-400">
            <Filter size={16} />
            <span className="text-sm font-medium">Catégorie :</span>
          </div>
          <div className="flex gap-2">
            {[
              { key: 'all', label: '🌐 Toutes', icon: null },
              { key: 'GPU', label: '🎮 GPU', icon: Monitor },
              { key: 'CPU', label: '🖥️ CPU', icon: Cpu },
              { key: 'RAM', label: '💾 RAM', icon: MemoryStick },
              { key: 'SSD', label: '💿 SSD', icon: HardDrive },
            ].map((f) => (
              <button
                key={f.key}
                onClick={() => setCategoryFilter(f.key)}
                className={`px-3 py-1.5 rounded-lg text-xs font-medium transition-all ${
                  categoryFilter === f.key
                    ? 'bg-purple-600 text-white shadow-lg shadow-purple-500/20'
                    : 'bg-gray-800/50 text-gray-400 hover:text-white border border-gray-700/50'
                }`}
              >
                {f.label}
              </button>
            ))}
          </div>

          <div className="hidden sm:block w-px h-6 bg-gray-700"></div>

          <div className="flex items-center gap-2 text-gray-400">
            <span className="text-sm">Tri :</span>
            <select
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value)}
              className="bg-gray-800 border border-gray-700 rounded-lg px-3 py-1.5 text-xs text-white focus:outline-none focus:ring-2 focus:ring-purple-500/50"
            >
              <option value="volume">Volume</option>
              <option value="price">Prix</option>
              <option value="roi">ROI</option>
              <option value="demand">Demande</option>
              <option value="trend">Tendance volume</option>
              <option value="priceTrend">Tendance prix</option>
            </select>
          </div>
        </div>
      </div>

      {/* Table */}
      <div className="bg-gray-900/50 rounded-2xl border border-gray-700/50 backdrop-blur-sm overflow-hidden">
        <div className="p-5 border-b border-gray-700/50">
          <h3 className="text-white font-bold text-lg flex items-center gap-2 flex-wrap">
            🔥 Composants en Tendance
            <span className="text-xs bg-gray-800 text-gray-400 px-2 py-0.5 rounded-full">
              {sortedItems.length} produits
            </span>
            <span className="text-xs bg-purple-500/10 text-purple-400 px-2 py-0.5 rounded-full border border-purple-500/20">
              {timeFilter === '7d' && '📅 7 derniers jours'}
              {timeFilter === '30d' && '📆 30 derniers jours'}
              {timeFilter === 'all' && '📊 Historique complet'}
            </span>
            <span className="text-xs bg-green-500/10 text-green-400 px-2 py-0.5 rounded-full border border-green-500/20 flex items-center gap-1">
              <span className="w-1.5 h-1.5 rounded-full bg-green-400 animate-pulse"></span>
              LIVE
            </span>
          </h3>
          <p className="text-gray-500 text-xs mt-1">Cliquez sur un produit pour voir les détails • Données mises à jour automatiquement</p>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="text-xs text-gray-500 uppercase tracking-wider">
                <th className="text-left px-5 py-3">#</th>
                <th className="text-left px-5 py-3">Produit</th>
                <th className="text-left px-5 py-3">Catégorie</th>
                <th className="text-left px-5 py-3">Spécifications</th>
                <th className="text-right px-5 py-3">Prix moy.</th>
                <th className="text-right px-5 py-3">Volume</th>
                <th className="text-right px-5 py-3">ROI</th>
                <th className="text-right px-5 py-3">Tendance prix</th>
                <th className="text-right px-5 py-3">Tendance vol.</th>
                <th className="text-center px-5 py-3"></th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-800/50">
              {sortedItems.map((item, index) => {
                const Icon = categoryIcons[item.category];
                const priceTrend = getPriceTrend(item);
                const volumeTrend = getVolumeTrend(item);
                const volume = getVolume(item);

                return (
                  <tr
                    key={item.id}
                    onClick={() => setSelectedItem(item)}
                    className="hover:bg-gray-800/30 transition-colors cursor-pointer group"
                  >
                    <td className="px-5 py-3">
                      <span className={`text-sm font-bold ${index < 3 ? 'text-yellow-400' : 'text-gray-500'}`}>
                        {index + 1}
                      </span>
                    </td>
                    <td className="px-5 py-3">
                      <div>
                        <p className="text-white text-sm font-medium group-hover:text-purple-300 transition-colors">{item.name}</p>
                        <p className="text-gray-500 text-xs">{item.condition}</p>
                      </div>
                    </td>
                    <td className="px-5 py-3">
                      <span className={`inline-flex items-center gap-1 px-2 py-0.5 rounded-full text-xs font-medium border ${categoryColors[item.category]}`}>
                        <Icon size={12} />
                        {item.category}
                      </span>
                    </td>
                    <td className="px-5 py-3">
                      <p className="text-gray-400 text-xs">{item.specs}</p>
                    </td>
                    <td className="px-5 py-3 text-right">
                      <span className="text-white text-sm font-medium">{item.avgPrice}€</span>
                    </td>
                    <td className="px-5 py-3 text-right">
                      <span className="text-white text-sm font-medium">{volume.toLocaleString('fr-FR')}</span>
                    </td>
                    <td className="px-5 py-3 text-right">
                      <span className={`text-sm font-medium ${
                        item.roi >= 35 ? 'text-green-400' : item.roi >= 25 ? 'text-yellow-400' : 'text-gray-300'
                      }`}>
                        +{item.roi}%
                      </span>
                    </td>
                    <td className="px-5 py-3 text-right">
                      <span className={`inline-flex items-center gap-0.5 text-xs font-medium ${
                        priceTrend > 0 ? 'text-green-400' : 'text-red-400'
                      }`}>
                        {priceTrend > 0 ? <TrendingUp size={12} /> : <TrendingDown size={12} />}
                        {priceTrend > 0 ? '+' : ''}{priceTrend.toFixed(1)}%
                      </span>
                    </td>
                    <td className="px-5 py-3 text-right">
                      <span className={`inline-flex items-center gap-0.5 text-xs font-medium ${
                        volumeTrend > 0 ? 'text-green-400' : 'text-red-400'
                      }`}>
                        {volumeTrend > 0 ? <TrendingUp size={12} /> : <TrendingDown size={12} />}
                        {volumeTrend > 0 ? '+' : ''}{volumeTrend.toFixed(1)}%
                      </span>
                    </td>
                    <td className="px-5 py-3 text-center">
                      <Eye size={14} className="text-gray-600 group-hover:text-purple-400 transition-colors inline" />
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>

      {/* Market Insight */}
      <div className="bg-gradient-to-r from-red-900/20 to-orange-900/20 rounded-2xl border border-red-500/20 p-5">
        <h3 className="text-white font-bold mb-2">📉 Insight Marché</h3>
        <p className="text-gray-300 text-sm leading-relaxed">
          Le marché des composants PC est en <strong className="text-red-300">baisse généralisée</strong> suite à l'annonce des nouvelles générations (RTX 5000, Intel Arrow Lake, AMD Zen 5).
          C'est une <strong className="text-green-300">excellente opportunité d'achat</strong> pour les composants actuels.
          Les prix devraient se stabiliser dans 2-3 mois avant une potentielle remontée.
        </p>
        <div className="flex flex-wrap gap-2 mt-3">
          <span className="text-xs bg-red-500/10 text-red-400 px-2 py-1 rounded-full">📉 GPU -5% à -7%</span>
          <span className="text-xs bg-red-500/10 text-red-400 px-2 py-1 rounded-full">📉 CPU -3% à -9%</span>
          <span className="text-xs bg-red-500/10 text-red-400 px-2 py-1 rounded-full">📉 RAM -12% à -18%</span>
          <span className="text-xs bg-red-500/10 text-red-400 px-2 py-1 rounded-full">📉 SSD -6% à -15%</span>
          <span className="text-xs bg-green-500/10 text-green-400 px-2 py-1 rounded-full">✅ Opportunité d'achat</span>
        </div>
      </div>

      {/* Modal */}
      {selectedItem && (
        <ItemDetailModal item={selectedItem} onClose={() => setSelectedItem(null)} />
      )}
    </div>
  );
}

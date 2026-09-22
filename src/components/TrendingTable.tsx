import React, { useState } from 'react';
import { TrendingUp, TrendingDown, ArrowUpRight, ArrowDownRight, Eye, Filter } from 'lucide-react';
import { TrendingItem } from '../data/mockData';
import ItemDetailModal from './ItemDetailModal';

interface Props {
  items: TrendingItem[];
  filter: string;
  sortBy: string;
  onSortChange: (sort: string) => void;
}

const platformColors: Record<string, string> = {
  vinted: 'bg-teal-500/10 text-teal-400 border-teal-500/20',
  leboncoin: 'bg-orange-500/10 text-orange-400 border-orange-500/20',
  ebay: 'bg-red-500/10 text-red-400 border-red-500/20',
};

const platformNames: Record<string, string> = {
  vinted: 'Vinted',
  leboncoin: 'Leboncoin',
  ebay: 'eBay',
};

export default function TrendingTable({ items, filter, sortBy, onSortChange }: Props) {
  const [selectedItem, setSelectedItem] = useState<TrendingItem | null>(null);

  const filteredItems = filter === 'all'
    ? items
    : items.filter(item => item.platform === filter);

  const sortedItems = [...filteredItems].sort((a, b) => {
    switch (sortBy) {
      case 'volume': return b.volume - a.volume;
      case 'price': return b.avgPrice - a.avgPrice;
      case 'roi': return b.roi - a.roi;
      case 'demand': return b.demandScore - a.demandScore;
      case 'trend': return b.volumeTrend - a.volumeTrend;
      default: return b.volume - a.volume;
    }
  });

  const sortOptions = [
    { key: 'volume', label: 'Volume' },
    { key: 'price', label: 'Prix' },
    { key: 'roi', label: 'ROI' },
    { key: 'demand', label: 'Demande' },
    { key: 'trend', label: 'Tendance' },
  ];

  return (
    <>
      <div className="bg-gray-900/50 rounded-2xl border border-gray-700/50 backdrop-blur-sm overflow-hidden">
        <div className="p-5 border-b border-gray-700/50 flex flex-wrap items-center justify-between gap-3">
          <div>
            <h3 className="text-white font-bold text-lg flex items-center gap-2">
              🔥 Top Objets en Tendance
              <span className="text-xs bg-gray-800 text-gray-400 px-2 py-0.5 rounded-full">
                {sortedItems.length} résultats
              </span>
            </h3>
            <p className="text-gray-500 text-xs mt-1">Cliquez sur un objet pour voir les détails complets</p>
          </div>
          <div className="flex items-center gap-2">
            <Filter size={14} className="text-gray-500" />
            <span className="text-xs text-gray-500">Trier par :</span>
            <div className="flex gap-1">
              {sortOptions.map((opt) => (
                <button
                  key={opt.key}
                  onClick={() => onSortChange(opt.key)}
                  className={`px-2 py-1 rounded text-xs font-medium transition-all ${
                    sortBy === opt.key
                      ? 'bg-purple-600 text-white'
                      : 'bg-gray-800/50 text-gray-400 hover:text-white'
                  }`}
                >
                  {opt.label}
                </button>
              ))}
            </div>
          </div>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="text-xs text-gray-500 uppercase tracking-wider">
                <th className="text-left px-5 py-3">#</th>
                <th className="text-left px-5 py-3">Objet</th>
                <th className="text-left px-5 py-3">Plateforme</th>
                <th className="text-right px-5 py-3">Prix moy.</th>
                <th className="text-right px-5 py-3">Volume/mois</th>
                <th className="text-right px-5 py-3">ROI</th>
                <th className="text-right px-5 py-3">Demande</th>
                <th className="text-right px-5 py-3">Tendance</th>
                <th className="text-center px-5 py-3"></th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-800/50">
              {sortedItems.map((item, index) => (
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
                      <p className="text-gray-500 text-xs">{item.category}</p>
                    </div>
                  </td>
                  <td className="px-5 py-3">
                    <span className={`inline-flex items-center px-2 py-0.5 rounded-full text-xs font-medium border ${platformColors[item.platform]}`}>
                      {platformNames[item.platform]}
                    </span>
                  </td>
                  <td className="px-5 py-3 text-right">
                    <span className="text-white text-sm font-medium">{item.avgPrice}€</span>
                  </td>
                  <td className="px-5 py-3 text-right">
                    <span className="text-white text-sm font-medium">{item.volume.toLocaleString('fr-FR')}</span>
                  </td>
                  <td className="px-5 py-3 text-right">
                    <span className={`text-sm font-medium ${
                      item.roi >= 40 ? 'text-green-400' : item.roi >= 25 ? 'text-yellow-400' : 'text-gray-300'
                    }`}>
                      +{item.roi}%
                    </span>
                  </td>
                  <td className="px-5 py-3 text-right">
                    <div className="flex items-center justify-end gap-1.5">
                      <div className="w-12 h-1.5 bg-gray-700 rounded-full overflow-hidden">
                        <div
                          className="h-full bg-gradient-to-r from-purple-500 to-pink-500 rounded-full"
                          style={{ width: `${item.demandScore}%` }}
                        ></div>
                      </div>
                      <span className="text-xs text-gray-400">{item.demandScore}</span>
                    </div>
                  </td>
                  <td className="px-5 py-3 text-right">
                    <span className={`inline-flex items-center gap-0.5 text-xs font-medium ${
                      item.volumeTrend > 0 ? 'text-green-400' : 'text-red-400'
                    }`}>
                      {item.volumeTrend > 0 ? <TrendingUp size={12} /> : <TrendingDown size={12} />}
                      {item.volumeTrend > 0 ? '+' : ''}{item.volumeTrend}%
                    </span>
                  </td>
                  <td className="px-5 py-3 text-center">
                    <Eye size={14} className="text-gray-600 group-hover:text-purple-400 transition-colors inline" />
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Modal */}
      {selectedItem && (
        <ItemDetailModal item={selectedItem} onClose={() => setSelectedItem(null)} />
      )}
    </>
  );
}

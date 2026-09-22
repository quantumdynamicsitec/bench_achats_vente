import React from 'react';
import { X, TrendingUp, TrendingDown, Target, Zap, Shield, Clock, Tag, BarChart3 } from 'lucide-react';
import { TrendingItem } from '../data/mockData';

interface Props {
  item: TrendingItem;
  onClose: () => void;
}

const platformConfig: Record<string, { name: string; color: string; bg: string }> = {
  vinted: { name: 'Vinted', color: 'text-teal-400', bg: 'bg-teal-500/10 border-teal-500/20' },
  leboncoin: { name: 'Leboncoin', color: 'text-orange-400', bg: 'bg-orange-500/10 border-orange-500/20' },
  ebay: { name: 'eBay', color: 'text-red-400', bg: 'bg-red-500/10 border-red-500/20' },
};

export default function ItemDetailModal({ item, onClose }: Props) {
  const platform = platformConfig[item.platform];

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 animate-fade-in" onClick={onClose}>
      {/* Backdrop */}
      <div className="absolute inset-0 bg-black/70 backdrop-blur-sm"></div>

      {/* Modal */}
      <div
        className="relative w-full max-w-2xl max-h-[90vh] overflow-y-auto bg-gray-900 rounded-2xl border border-gray-700/50 shadow-2xl"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="sticky top-0 bg-gray-900/95 backdrop-blur-sm border-b border-gray-800 p-5 flex items-start justify-between z-10">
          <div className="flex-1">
            <div className="flex items-center gap-2 mb-2">
              <span className={`text-xs px-2 py-0.5 rounded-full border ${platform.bg} ${platform.color}`}>
                {platform.name}
              </span>
              <span className="text-xs px-2 py-0.5 rounded-full bg-gray-800 text-gray-400">
                {item.category}
              </span>
              <span className={`text-xs px-2 py-0.5 rounded-full ${
                item.confidence >= 90 ? 'bg-green-500/10 text-green-400' :
                item.confidence >= 80 ? 'bg-yellow-500/10 text-yellow-400' :
                'bg-red-500/10 text-red-400'
              }`}>
                Confiance: {item.confidence}%
              </span>
            </div>
            <h2 className="text-xl font-bold text-white">{item.name}</h2>
            <p className="text-sm text-gray-400 mt-1">{item.description}</p>
          </div>
          <button
            onClick={onClose}
            className="w-8 h-8 rounded-lg bg-gray-800 flex items-center justify-center hover:bg-gray-700 transition-colors"
          >
            <X size={16} className="text-gray-400" />
          </button>
        </div>

        {/* Content */}
        <div className="p-5 space-y-5">
          {/* Price Section */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
            <div className="bg-gray-800/50 rounded-xl p-3 border border-gray-700/30">
              <p className="text-xs text-gray-500 mb-1">Prix moyen</p>
              <p className="text-lg font-bold text-white">{item.avgPrice}€</p>
            </div>
            <div className="bg-gray-800/50 rounded-xl p-3 border border-gray-700/30">
              <p className="text-xs text-gray-500 mb-1">Prix min</p>
              <p className="text-lg font-bold text-green-400">{item.minPrice}€</p>
            </div>
            <div className="bg-gray-800/50 rounded-xl p-3 border border-gray-700/30">
              <p className="text-xs text-gray-500 mb-1">Prix max</p>
              <p className="text-lg font-bold text-red-400">{item.maxPrice}€</p>
            </div>
            <div className="bg-gray-800/50 rounded-xl p-3 border border-gray-700/30">
              <p className="text-xs text-gray-500 mb-1">ROI estimé</p>
              <p className="text-lg font-bold text-purple-400">+{item.roi}%</p>
            </div>
          </div>

          {/* Trends */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
            <div className="bg-gray-800/30 rounded-xl p-4 border border-gray-700/30">
              <div className="flex items-center gap-2 mb-3">
                <TrendingUp size={16} className={item.priceTrend > 0 ? 'text-green-400' : 'text-red-400'} />
                <span className="text-sm font-medium text-white">Tendance Prix</span>
              </div>
              <div className="flex items-end gap-2">
                <span className={`text-2xl font-bold ${item.priceTrend > 0 ? 'text-green-400' : 'text-red-400'}`}>
                  {item.priceTrend > 0 ? '+' : ''}{item.priceTrend}%
                </span>
                <span className="text-xs text-gray-500 mb-1">sur 30 jours</span>
              </div>
            </div>
            <div className="bg-gray-800/30 rounded-xl p-4 border border-gray-700/30">
              <div className="flex items-center gap-2 mb-3">
                <BarChart3 size={16} className={item.volumeTrend > 0 ? 'text-green-400' : 'text-red-400'} />
                <span className="text-sm font-medium text-white">Tendance Volume</span>
              </div>
              <div className="flex items-end gap-2">
                <span className={`text-2xl font-bold ${item.volumeTrend > 0 ? 'text-green-400' : 'text-red-400'}`}>
                  {item.volumeTrend > 0 ? '+' : ''}{item.volumeTrend}%
                </span>
                <span className="text-xs text-gray-500 mb-1">sur 30 jours</span>
              </div>
            </div>
          </div>

          {/* Scores */}
          <div className="bg-gray-800/30 rounded-xl p-4 border border-gray-700/30">
            <h4 className="text-sm font-medium text-white mb-3 flex items-center gap-2">
              <Target size={14} className="text-purple-400" />
              Scores d'analyse
            </h4>
            <div className="space-y-3">
              <div>
                <div className="flex justify-between text-xs mb-1">
                  <span className="text-gray-400">Demande</span>
                  <span className="text-white font-medium">{item.demandScore}/100</span>
                </div>
                <div className="w-full h-2 bg-gray-700 rounded-full overflow-hidden">
                  <div
                    className="h-full bg-gradient-to-r from-purple-500 to-pink-500 rounded-full transition-all duration-1000"
                    style={{ width: `${item.demandScore}%` }}
                  ></div>
                </div>
              </div>
              <div>
                <div className="flex justify-between text-xs mb-1">
                  <span className="text-gray-400">Competition</span>
                  <span className="text-white font-medium">{item.competitionScore}/100</span>
                </div>
                <div className="w-full h-2 bg-gray-700 rounded-full overflow-hidden">
                  <div
                    className="h-full bg-gradient-to-r from-orange-500 to-red-500 rounded-full transition-all duration-1000"
                    style={{ width: `${item.competitionScore}%` }}
                  ></div>
                </div>
              </div>
              <div>
                <div className="flex justify-between text-xs mb-1">
                  <span className="text-gray-400">Confiance IA</span>
                  <span className="text-white font-medium">{item.confidence}%</span>
                </div>
                <div className="w-full h-2 bg-gray-700 rounded-full overflow-hidden">
                  <div
                    className="h-full bg-gradient-to-r from-green-500 to-emerald-500 rounded-full transition-all duration-1000"
                    style={{ width: `${item.confidence}%` }}
                  ></div>
                </div>
              </div>
            </div>
          </div>

          {/* Details */}
          <div className="grid grid-cols-2 gap-3">
            <div className="flex items-center gap-2 text-sm">
              <Tag size={14} className="text-gray-500" />
              <span className="text-gray-400">État :</span>
              <span className="text-white">{item.condition}</span>
            </div>
            <div className="flex items-center gap-2 text-sm">
              <Zap size={14} className="text-gray-500" />
              <span className="text-gray-400">Volume :</span>
              <span className="text-white">{item.volume.toLocaleString('fr-FR')}/mois</span>
            </div>
            <div className="flex items-center gap-2 text-sm">
              <Clock size={14} className="text-gray-500" />
              <span className="text-gray-400">Dernier scan :</span>
              <span className="text-white">{item.lastScan}</span>
            </div>
            <div className="flex items-center gap-2 text-sm">
              <Shield size={14} className="text-gray-500" />
              <span className="text-gray-400">Fiabilité :</span>
              <span className="text-white">{item.confidence}%</span>
            </div>
          </div>

          {/* Keywords */}
          <div>
            <h4 className="text-xs text-gray-500 uppercase tracking-wider mb-2">Mots-clés surveillés</h4>
            <div className="flex flex-wrap gap-2">
              {item.keywords.map((kw) => (
                <span key={kw} className="text-xs px-2 py-1 rounded-full bg-gray-800 text-gray-300 border border-gray-700/50">
                  #{kw}
                </span>
              ))}
            </div>
          </div>

          {/* Action buttons */}
          <div className="flex gap-3 pt-2">
            <button className="flex-1 py-2.5 rounded-xl bg-gradient-to-r from-purple-600 to-indigo-600 text-white text-sm font-medium hover:from-purple-500 hover:to-indigo-500 transition-all">
              📊 Voir l'historique complet
            </button>
            <button className="flex-1 py-2.5 rounded-xl bg-gray-800 border border-gray-700 text-white text-sm font-medium hover:bg-gray-700 transition-all">
              🔔 Créer une alerte
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

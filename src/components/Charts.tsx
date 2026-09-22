import { useState } from 'react';
import {
  LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer,
  BarChart, Bar, Legend
} from 'recharts';
import { priceHistory, volumeHistory, categoryData } from '../data/mockData';

export default function Charts() {
  const [activeChart, setActiveChart] = useState<'price' | 'volume' | 'category'>('price');

  const formatVolume = (value: number) => {
    if (value >= 1000000) return `${(value / 1000000).toFixed(1)}M`;
    if (value >= 1000) return `${(value / 1000).toFixed(0)}K`;
    return value.toString();
  };

  return (
    <div className="bg-gray-900/50 rounded-2xl border border-gray-700/50 backdrop-blur-sm overflow-hidden">
      {/* Chart Tabs */}
      <div className="p-5 border-b border-gray-700/50 flex flex-wrap items-center justify-between gap-3">
        <h3 className="text-white font-bold text-lg">📈 Analyse Comparative</h3>
        <div className="flex gap-1 bg-gray-800 rounded-lg p-1">
          {[
            { key: 'price', label: 'Prix moyens' },
            { key: 'volume', label: 'Volumes' },
            { key: 'category', label: 'Catégories' },
          ].map((tab) => (
            <button
              key={tab.key}
              onClick={() => setActiveChart(tab.key as any)}
              className={`px-3 py-1.5 rounded-md text-xs font-medium transition-all ${
                activeChart === tab.key
                  ? 'bg-purple-600 text-white'
                  : 'text-gray-400 hover:text-white'
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>
      </div>

      <div className="p-5">
        {activeChart === 'price' && (
          <div>
            <p className="text-gray-400 text-xs mb-4">Évolution du prix moyen de vente (€) sur 12 mois</p>
            <ResponsiveContainer width="100%" height={300}>
              <LineChart data={priceHistory}>
                <CartesianGrid strokeDasharray="3 3" stroke="#374151" />
                <XAxis dataKey="date" stroke="#6B7280" fontSize={12} />
                <YAxis stroke="#6B7280" fontSize={12} tickFormatter={(v) => `${v}€`} />
                <Tooltip
                  contentStyle={{ backgroundColor: '#1F2937', border: '1px solid #374151', borderRadius: '12px' }}
                  labelStyle={{ color: '#9CA3AF' }}
                  itemStyle={{ color: '#E5E7EB' }}
                  formatter={(value: number) => [`${value}€`, '']}
                />
                <Legend />
                <Line type="monotone" dataKey="vinted" stroke="#09B1BA" strokeWidth={2} dot={false} name="Vinted" />
                <Line type="monotone" dataKey="leboncoin" stroke="#FF6E00" strokeWidth={2} dot={false} name="Leboncoin" />
                <Line type="monotone" dataKey="ebay" stroke="#E53238" strokeWidth={2} dot={false} name="eBay" />
              </LineChart>
            </ResponsiveContainer>
          </div>
        )}

        {activeChart === 'volume' && (
          <div>
            <p className="text-gray-400 text-xs mb-4">Volume d'annonces actives par plateforme sur 12 mois</p>
            <ResponsiveContainer width="100%" height={300}>
              <BarChart data={volumeHistory}>
                <CartesianGrid strokeDasharray="3 3" stroke="#374151" />
                <XAxis dataKey="date" stroke="#6B7280" fontSize={12} />
                <YAxis stroke="#6B7280" fontSize={12} tickFormatter={formatVolume} />
                <Tooltip
                  contentStyle={{ backgroundColor: '#1F2937', border: '1px solid #374151', borderRadius: '12px' }}
                  labelStyle={{ color: '#9CA3AF' }}
                  itemStyle={{ color: '#E5E7EB' }}
                  formatter={(value: number) => [formatVolume(value), '']}
                />
                <Legend />
                <Bar dataKey="vinted" fill="#09B1BA" name="Vinted" radius={[4, 4, 0, 0]} />
                <Bar dataKey="leboncoin" fill="#FF6E00" name="Leboncoin" radius={[4, 4, 0, 0]} />
                <Bar dataKey="ebay" fill="#E53238" name="eBay" radius={[4, 4, 0, 0]} />
              </BarChart>
            </ResponsiveContainer>
          </div>
        )}

        {activeChart === 'category' && (
          <div>
            <p className="text-gray-400 text-xs mb-4">Répartition des volumes par catégorie et par plateforme</p>
            <ResponsiveContainer width="100%" height={300}>
              <BarChart data={categoryData} layout="vertical">
                <CartesianGrid strokeDasharray="3 3" stroke="#374151" />
                <XAxis type="number" stroke="#6B7280" fontSize={12} tickFormatter={formatVolume} />
                <YAxis type="category" dataKey="name" stroke="#6B7280" fontSize={11} width={120} />
                <Tooltip
                  contentStyle={{ backgroundColor: '#1F2937', border: '1px solid #374151', borderRadius: '12px' }}
                  labelStyle={{ color: '#9CA3AF' }}
                  itemStyle={{ color: '#E5E7EB' }}
                  formatter={(value: number) => [formatVolume(value), '']}
                />
                <Legend />
                <Bar dataKey="vinted" stackId="a" fill="#09B1BA" name="Vinted" />
                <Bar dataKey="leboncoin" stackId="a" fill="#FF6E00" name="Leboncoin" />
                <Bar dataKey="ebay" stackId="a" fill="#E53238" name="eBay" />
              </BarChart>
            </ResponsiveContainer>
          </div>
        )}
      </div>
    </div>
  );
}

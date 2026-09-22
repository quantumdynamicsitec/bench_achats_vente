import { TrendingUp, TrendingDown, ArrowUpRight, ArrowDownRight } from 'lucide-react';
import { TrendingItem } from '../data/mockData';

interface Props {
  items: TrendingItem[];
  filter: string;
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

export default function TrendingTable({ items, filter }: Props) {
  const filteredItems = filter === 'all' 
    ? items 
    : items.filter(item => item.platform === filter);

  const sortedItems = [...filteredItems].sort((a, b) => b.volume - a.volume);

  return (
    <div className="bg-gray-900/50 rounded-2xl border border-gray-700/50 backdrop-blur-sm overflow-hidden">
      <div className="p-5 border-b border-gray-700/50">
        <h3 className="text-white font-bold text-lg flex items-center gap-2">
          🔥 Top Objets en Tendance
          <span className="text-xs bg-gray-800 text-gray-400 px-2 py-0.5 rounded-full">
            {sortedItems.length} résultats
          </span>
        </h3>
        <p className="text-gray-500 text-xs mt-1">Classés par volume de ventes - Données des dernières 24h</p>
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
              <th className="text-right px-5 py-3">Tendance prix</th>
              <th className="text-right px-5 py-3">Tendance vol.</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-800/50">
            {sortedItems.map((item, index) => (
              <tr key={item.id} className="hover:bg-gray-800/30 transition-colors">
                <td className="px-5 py-3">
                  <span className={`text-sm font-bold ${index < 3 ? 'text-yellow-400' : 'text-gray-500'}`}>
                    {index + 1}
                  </span>
                </td>
                <td className="px-5 py-3">
                  <div>
                    <p className="text-white text-sm font-medium">{item.name}</p>
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
                  <span className={`inline-flex items-center gap-0.5 text-xs font-medium ${
                    item.priceTrend > 0 ? 'text-green-400' : 'text-red-400'
                  }`}>
                    {item.priceTrend > 0 ? <ArrowUpRight size={12} /> : <ArrowDownRight size={12} />}
                    {item.priceTrend > 0 ? '+' : ''}{item.priceTrend}%
                  </span>
                </td>
                <td className="px-5 py-3 text-right">
                  <span className={`inline-flex items-center gap-0.5 text-xs font-medium ${
                    item.volumeTrend > 0 ? 'text-green-400' : 'text-red-400'
                  }`}>
                    {item.volumeTrend > 0 ? <TrendingUp size={12} /> : <TrendingDown size={12} />}
                    {item.volumeTrend > 0 ? '+' : ''}{item.volumeTrend}%
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

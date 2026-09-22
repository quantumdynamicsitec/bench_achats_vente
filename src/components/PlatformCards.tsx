import { TrendingUp, TrendingDown, ShoppingBag, DollarSign, BarChart3 } from 'lucide-react';
import { PlatformStats } from '../data/mockData';

interface Props {
  stats: PlatformStats[];
}

export default function PlatformCards({ stats }: Props) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
      {stats.map((platform) => (
        <div
          key={platform.key}
          className="relative overflow-hidden rounded-2xl bg-gray-900/50 border border-gray-700/50 p-5 backdrop-blur-sm hover:border-gray-600/50 transition-all group"
        >
          {/* Gradient accent */}
          <div className={`absolute top-0 left-0 right-0 h-1 bg-gradient-to-r ${platform.bgColor}`}></div>
          
          <div className="flex items-start justify-between mb-4">
            <div>
              <h3 className="text-white font-bold text-lg">{platform.name}</h3>
              <p className="text-gray-400 text-xs mt-0.5">{platform.topCategory}</p>
            </div>
            <div className={`px-2.5 py-1 rounded-full text-xs font-medium flex items-center gap-1 ${
              platform.growth > 0 ? 'bg-green-500/10 text-green-400' : 'bg-red-500/10 text-red-400'
            }`}>
              {platform.growth > 0 ? <TrendingUp size={12} /> : <TrendingDown size={12} />}
              {platform.growth > 0 ? '+' : ''}{platform.growth}%
            </div>
          </div>

          <div className="space-y-3">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 rounded-lg bg-gray-800 flex items-center justify-center">
                <ShoppingBag size={14} className="text-gray-400" />
              </div>
              <div>
                <p className="text-xs text-gray-500">Annonces actives</p>
                <p className="text-white font-semibold">{(platform.totalListings / 1000000).toFixed(1)}M</p>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 rounded-lg bg-gray-800 flex items-center justify-center">
                <DollarSign size={14} className="text-gray-400" />
              </div>
              <div>
                <p className="text-xs text-gray-500">Prix moyen</p>
                <p className="text-white font-semibold">{platform.avgPrice.toFixed(2)}€</p>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 rounded-lg bg-gray-800 flex items-center justify-center">
                <BarChart3 size={14} className="text-gray-400" />
              </div>
              <div>
                <p className="text-xs text-gray-500">Croissance mensuelle</p>
                <p className={`font-semibold ${platform.growth > 0 ? 'text-green-400' : 'text-red-400'}`}>
                  {platform.growth > 0 ? '+' : ''}{platform.growth}%
                </p>
              </div>
            </div>
          </div>

          {/* Hover glow */}
          <div className={`absolute -bottom-20 -right-20 w-40 h-40 rounded-full bg-gradient-to-br ${platform.bgColor} opacity-0 group-hover:opacity-10 transition-opacity duration-500`}></div>
        </div>
      ))}
    </div>
  );
}

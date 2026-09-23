import { Package, DollarSign, TrendingUp, Zap } from 'lucide-react';

export default function MetricsBar() {
  const metrics = [
    {
      icon: Package,
      label: 'Total Annonces Surveillées',
      value: '11.45M',
      change: '+8.2%',
      positive: true,
    },
    {
      icon: DollarSign,
      label: 'Prix Moyen Global',
      value: '45.50€',
      change: '+2.1%',
      positive: true,
    },
    {
      icon: TrendingUp,
      label: 'Catégorie #1',
      value: 'Mode',
      change: '850K/mois',
      positive: true,
    },
    {
      icon: Zap,
      label: 'Objet le + Tendance',
      value: 'Samba',
      change: '+35.2%',
      positive: true,
    },
  ];

  return (
    <div className="grid grid-cols-2 lg:grid-cols-4 gap-3">
      {metrics.map((metric, index) => (
        <div
          key={index}
          className="bg-gray-900/50 rounded-xl border border-gray-700/50 p-4 backdrop-blur-sm"
        >
          <div className="flex items-center gap-2 mb-2">
            <div className="w-8 h-8 rounded-lg bg-purple-500/10 flex items-center justify-center">
              <metric.icon size={16} className="text-purple-400" />
            </div>
            <span className={`text-xs font-medium px-1.5 py-0.5 rounded ${
              metric.positive ? 'bg-green-500/10 text-green-400' : 'bg-red-500/10 text-red-400'
            }`}>
              {metric.change}
            </span>
          </div>
          <p className="text-white font-bold text-xl">{metric.value}</p>
          <p className="text-gray-500 text-xs mt-0.5">{metric.label}</p>
        </div>
      ))}
    </div>
  );
}

import { AlertTriangle, TrendingUp, Bell, Clock } from 'lucide-react';

interface Alert {
  id: string;
  type: 'opportunity' | 'warning' | 'info';
  title: string;
  description: string;
  platform: string;
  time: string;
  roi?: string;
  category?: string;
}

const alerts: Alert[] = [
  {
    id: '1',
    type: 'opportunity',
    title: 'DDR4 16GB 3200MHz - Prix plancher',
    description: 'Baisse de -18.3% sur 30 jours. Prix moyen: 28€. Volume: 12,500/mois. ROI potentiel +42%.',
    platform: 'eBay',
    time: 'Il y a 5 min',
    roi: '+42%',
    category: 'RAM',
  },
  {
    id: '2',
    type: 'opportunity',
    title: 'SSD Kingston NV2 1TB - Forte demande',
    description: 'Volume +35.2% sur 30 jours. Prix en baisse -14.8%. SSD budget #1, revente très rapide.',
    platform: 'eBay',
    time: 'Il y a 12 min',
    roi: '+38%',
    category: 'SSD',
  },
  {
    id: '3',
    type: 'opportunity',
    title: 'Ryzen 5 5600 - CPU budget #1',
    description: 'Volume +25.1%, prix -8.5%. 8,900 ventes/mois. Meilleur CPU budget du marché.',
    platform: 'eBay',
    time: 'Il y a 25 min',
    roi: '+32%',
    category: 'CPU',
  },
  {
    id: '4',
    type: 'warning',
    title: 'RTX 5000 annoncées - Baisse GPU en cours',
    description: 'Les RTX 3060 Ti et 4060 baissent de 5-7%. Opportunité d\'achat, mais attendre la stabilisation.',
    platform: 'eBay',
    time: 'Il y a 45 min',
    category: 'GPU',
  },
  {
    id: '5',
    type: 'opportunity',
    title: 'Câbles USB-C/Lightning - ROI +65%',
    description: '15,200 ventes/mois sur Leboncoin. Prix moyen 8€. Volume +38.5% sur 30 jours.',
    platform: 'Leboncoin',
    time: 'Il y a 1h',
    roi: '+65%',
    category: 'Accessoires',
  },
  {
    id: '6',
    type: 'opportunity',
    title: 'Coques iPhone 15 Pro - Volume en hausse',
    description: '12,400 ventes/mois. Prix moyen 15€. ROI +60%. Petits objets, transport facile.',
    platform: 'Leboncoin',
    time: 'Il y a 1h',
    roi: '+60%',
    category: 'Accessoires',
  },
  {
    id: '7',
    type: 'info',
    title: 'RTX 3060 Ti - Meilleur rapport perf/prix',
    description: '7,800 ventes/mois, prix moyen 260€. Baisse -6.8% mais demande stable. GPU recommandé.',
    platform: 'eBay',
    time: 'Il y a 2h',
    category: 'GPU',
  },
  {
    id: '8',
    type: 'opportunity',
    title: 'Ryzen 7 5800X3D - Stock limité',
    description: 'Meilleur CPU gaming AM4. Volume +22.5%, demande 94/100. Prix stable à 280€.',
    platform: 'eBay',
    time: 'Il y a 3h',
    roi: '+28%',
    category: 'CPU',
  },
  {
    id: '9',
    type: 'opportunity',
    title: 'Sneakers Adidas Samba - Tendance Vinted',
    description: 'Volume +35.2% sur Vinted. Prix moyen 72€, en hausse de 7.8%. ROI +45%.',
    platform: 'Vinted',
    time: 'Il y a 4h',
    roi: '+45%',
    category: 'Mode',
  },
  {
    id: '10',
    type: 'opportunity',
    title: 'Hub USB-C 7-en-1 - Accessoire rentable',
    description: '5,600 ventes/mois sur Leboncoin. Prix 22€. ROI +48%. Indispensable laptops modernes.',
    platform: 'Leboncoin',
    time: 'Il y a 5h',
    roi: '+48%',
    category: 'Accessoires',
  },
];

const typeStyles = {
  opportunity: {
    bg: 'bg-green-500/5 border-green-500/20',
    icon: TrendingUp,
    iconColor: 'text-green-400',
    badge: 'bg-green-500/10 text-green-400',
    badgeText: 'Opportunité',
  },
  warning: {
    bg: 'bg-amber-500/5 border-amber-500/20',
    icon: AlertTriangle,
    iconColor: 'text-amber-400',
    badge: 'bg-amber-500/10 text-amber-400',
    badgeText: 'Alerte',
  },
  info: {
    bg: 'bg-blue-500/5 border-blue-500/20',
    icon: Bell,
    iconColor: 'text-blue-400',
    badge: 'bg-blue-500/10 text-blue-400',
    badgeText: 'Info',
  },
};

const categoryBadgeColors: Record<string, string> = {
  'GPU': 'bg-blue-500/10 text-blue-400 border-blue-500/20',
  'CPU': 'bg-purple-500/10 text-purple-400 border-purple-500/20',
  'RAM': 'bg-green-500/10 text-green-400 border-green-500/20',
  'SSD': 'bg-orange-500/10 text-orange-400 border-orange-500/20',
  'Accessoires': 'bg-cyan-500/10 text-cyan-400 border-cyan-500/20',
  'Mode': 'bg-pink-500/10 text-pink-400 border-pink-500/20',
};

export default function AlertsFeed() {
  return (
    <div className="bg-gray-900/50 rounded-2xl border border-gray-700/50 backdrop-blur-sm overflow-hidden">
      <div className="p-5 border-b border-gray-700/50 flex items-center justify-between">
        <h3 className="text-white font-bold text-lg flex items-center gap-2">
          🔔 Alertes Agent IA
          <span className="w-5 h-5 rounded-full bg-red-500 text-white text-[10px] flex items-center justify-center font-bold">
            {alerts.length}
          </span>
        </h3>
        <span className="text-xs text-gray-500 flex items-center gap-1">
          <Clock size={12} />
          Temps réel
        </span>
      </div>

      <div className="divide-y divide-gray-800/50 max-h-[500px] overflow-y-auto">
        {alerts.map((alert) => {
          const style = typeStyles[alert.type];
          const Icon = style.icon;

          return (
            <div key={alert.id} className={`p-4 border-l-2 ${style.bg} hover:bg-gray-800/20 transition-colors`}>
              <div className="flex items-start gap-3">
                <div className="w-8 h-8 rounded-lg bg-gray-800 flex items-center justify-center flex-shrink-0">
                  <Icon size={14} className={style.iconColor} />
                </div>
                <div className="flex-1 min-w-0">
                  <div className="flex items-center gap-2 flex-wrap">
                    <h4 className="text-white text-sm font-medium">{alert.title}</h4>
                    <span className={`text-[10px] px-1.5 py-0.5 rounded-full font-medium ${style.badge}`}>
                      {style.badgeText}
                    </span>
                    {alert.category && (
                      <span className={`text-[10px] px-1.5 py-0.5 rounded-full font-medium border ${categoryBadgeColors[alert.category] || 'bg-gray-700/50 text-gray-300 border-gray-600/30'}`}>
                        {alert.category}
                      </span>
                    )}
                    {alert.roi && (
                      <span className="text-[10px] px-1.5 py-0.5 rounded-full font-medium bg-purple-500/10 text-purple-400 border border-purple-500/20">
                        ROI {alert.roi}
                      </span>
                    )}
                  </div>
                  <p className="text-gray-400 text-xs mt-1 leading-relaxed">{alert.description}</p>
                  <div className="flex items-center gap-3 mt-2">
                    <span className="text-xs text-gray-500">{alert.platform}</span>
                    <span className="text-xs text-gray-600">•</span>
                    <span className="text-xs text-gray-500">{alert.time}</span>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

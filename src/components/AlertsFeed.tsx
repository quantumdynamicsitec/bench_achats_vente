import { AlertTriangle, TrendingUp, TrendingDown, Bell, Clock } from 'lucide-react';

interface Alert {
  id: string;
  type: 'opportunity' | 'warning' | 'info';
  title: string;
  description: string;
  platform: string;
  time: string;
}

const alerts: Alert[] = [
  {
    id: '1',
    type: 'opportunity',
    title: 'Sneakers Adidas Samba en hausse',
    description: 'Volume +35% sur Vinted, prix moyen en hausse de 7.8%. Forte demande détectée.',
    platform: 'Vinted',
    time: 'Il y a 12 min',
  },
  {
    id: '2',
    type: 'warning',
    title: 'Baisse des prix iPhone 14 Pro',
    description: 'Les prix baissent de 3.1% sur eBay. Le marché se stabilise après le lancement du 15.',
    platform: 'eBay',
    time: 'Il y a 45 min',
  },
  {
    id: '3',
    type: 'opportunity',
    title: 'Vélos électriques en explosion',
    description: 'Volume +31% sur Leboncoin. Saisonnalité favorable, prix moyen en hausse.',
    platform: 'Leboncoin',
    time: 'Il y a 1h',
  },
  {
    id: '4',
    type: 'info',
    title: 'Nouveau pic de ventes détecté',
    description: 'La catégorie Mode atteint un pic historique sur Vinted avec 18.2K ventes de Levi\'s 501.',
    platform: 'Vinted',
    time: 'Il y a 2h',
  },
  {
    id: '5',
    type: 'opportunity',
    title: 'Drone DJI Mini 3 - Prix plancher',
    description: 'Prix en baisse de 4.2% sur eBay. Potentiel d\'achat intéressant avant la saison.',
    platform: 'eBay',
    time: 'Il y a 3h',
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
      
      <div className="divide-y divide-gray-800/50 max-h-[400px] overflow-y-auto">
        {alerts.map((alert) => {
          const style = typeStyles[alert.type];
          const Icon = style.icon;
          
          return (
            <div key={alert.id} className={`p-4 border-l-2 ${style.bg} hover:bg-gray-800/20 transition-colors`}>
              <div className="flex items-start gap-3">
                <div className={`w-8 h-8 rounded-lg bg-gray-800 flex items-center justify-center flex-shrink-0`}>
                  <Icon size={14} className={style.iconColor} />
                </div>
                <div className="flex-1 min-w-0">
                  <div className="flex items-center gap-2 flex-wrap">
                    <h4 className="text-white text-sm font-medium">{alert.title}</h4>
                    <span className={`text-[10px] px-1.5 py-0.5 rounded-full font-medium ${style.badge}`}>
                      {style.badgeText}
                    </span>
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

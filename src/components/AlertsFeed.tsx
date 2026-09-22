import { AlertTriangle, TrendingUp, Bell, Clock } from 'lucide-react';

interface Alert {
  id: string;
  type: 'opportunity' | 'warning' | 'info';
  title: string;
  description: string;
  platform: string;
  time: string;
  roi?: string;
}

const alerts: Alert[] = [
  {
    id: '1',
    type: 'opportunity',
    title: 'Sneakers Adidas Samba en hausse',
    description: 'Volume +35% sur Vinted, prix moyen +7.8%. ROI potentiel: +45%. Forte demande détectée.',
    platform: 'Vinted',
    time: 'Il y a 12 min',
    roi: '+45%',
  },
  {
    id: '2',
    type: 'opportunity',
    title: 'Cartes Pokémon - lots en explosion',
    description: 'Volume +32% sur Leboncoin. ROI potentiel +52%. Éditions vintage x3-x5 en 6 mois.',
    platform: 'Leboncoin',
    time: 'Il y a 25 min',
    roi: '+52%',
  },
  {
    id: '3',
    type: 'warning',
    title: 'Baisse des prix iPhone 14 Pro',
    description: 'Les prix baissent de 3.1% sur eBay. Le marché se stabilise après le lancement du 16.',
    platform: 'eBay',
    time: 'Il y a 45 min',
  },
  {
    id: '4',
    type: 'opportunity',
    title: 'Funko Pop! - Éditions limitées',
    description: 'Certaines éditions limitées se revendent x5 sur Leboncoin. Volume +22.8%.',
    platform: 'Leboncoin',
    time: 'Il y a 1h',
    roi: '+48%',
  },
  {
    id: '5',
    type: 'info',
    title: 'Pic de ventes Levi\'s 501',
    description: 'La catégorie Mode atteint un pic historique sur Vinted avec 18.2K ventes de Levi\'s 501 ce mois.',
    platform: 'Vinted',
    time: 'Il y a 2h',
  },
  {
    id: '6',
    type: 'opportunity',
    title: 'Lots vêtements enfant - forte rotation',
    description: '19.800 ventes/mois sur Leboncoin. ROI +40%. Petits prix, transport facile.',
    platform: 'Leboncoin',
    time: 'Il y a 2h',
    roi: '+40%',
  },
  {
    id: '7',
    type: 'warning',
    title: 'Drone DJI Mini 3 - Prix plancher',
    description: 'Prix en baisse de 4.2% sur eBay. Achat opportun avant la saison estivale.',
    platform: 'eBay',
    time: 'Il y a 3h',
  },
  {
    id: '8',
    type: 'opportunity',
    title: 'Vinyles Rock/Pop - retour en force',
    description: 'Volume +19.8% sur Leboncoin. Beatles, Pink Floyd, Queen en tête. Pressages originaux premium.',
    platform: 'Leboncoin',
    time: 'Il y a 4h',
    roi: '+38%',
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
                    {alert.roi && (
                      <span className="text-[10px] px-1.5 py-0.5 rounded-full font-medium bg-purple-500/10 text-purple-400">
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

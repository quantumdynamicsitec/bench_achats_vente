import { useState } from 'react';
import { 
  Bot, LayoutDashboard, TrendingUp, Bell, MessageSquare, 
  Filter, RefreshCw, Activity, Globe
} from 'lucide-react';
import PlatformCards from './components/PlatformCards';
import TrendingTable from './components/TrendingTable';
import Charts from './components/Charts';
import AgentChat from './components/AgentChat';
import MetricsBar from './components/MetricsBar';
import AlertsFeed from './components/AlertsFeed';
import { platformStats, trendingItems } from './data/mockData';

type Tab = 'dashboard' | 'trending' | 'alerts' | 'agent';

export default function App() {
  const [activeTab, setActiveTab] = useState<Tab>('dashboard');
  const [platformFilter, setPlatformFilter] = useState<string>('all');
  const [isRefreshing, setIsRefreshing] = useState(false);

  const handleRefresh = () => {
    setIsRefreshing(true);
    setTimeout(() => setIsRefreshing(false), 2000);
  };

  const tabs = [
    { key: 'dashboard', label: 'Dashboard', icon: LayoutDashboard },
    { key: 'trending', label: 'Tendances', icon: TrendingUp },
    { key: 'alerts', label: 'Alertes', icon: Bell },
    { key: 'agent', label: 'Agent IA', icon: MessageSquare },
  ];

  return (
    <div className="min-h-screen bg-gray-950 text-white">
      {/* Background gradient */}
      <div className="fixed inset-0 bg-gradient-to-br from-gray-950 via-gray-900 to-gray-950 pointer-events-none"></div>
      <div className="fixed top-0 left-1/4 w-96 h-96 bg-purple-600/5 rounded-full blur-3xl pointer-events-none"></div>
      <div className="fixed bottom-0 right-1/4 w-96 h-96 bg-blue-600/5 rounded-full blur-3xl pointer-events-none"></div>

      <div className="relative z-10">
        {/* Header */}
        <header className="border-b border-gray-800/50 backdrop-blur-xl bg-gray-950/80 sticky top-0 z-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 py-4">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-purple-600 to-indigo-600 flex items-center justify-center shadow-lg shadow-purple-500/20">
                  <Bot size={20} className="text-white" />
                </div>
                <div>
                  <h1 className="text-xl font-bold bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
                    MarketBot
                  </h1>
                  <p className="text-xs text-gray-500">Agent IA de Veille Marché</p>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <div className="hidden sm:flex items-center gap-2 px-3 py-1.5 rounded-lg bg-gray-800/50 border border-gray-700/50">
                  <Globe size={14} className="text-gray-400" />
                  <span className="text-xs text-gray-400">Vinted • Leboncoin • eBay</span>
                </div>
                <div className="hidden sm:flex items-center gap-2 px-3 py-1.5 rounded-lg bg-green-500/10 border border-green-500/20">
                  <Activity size={14} className="text-green-400" />
                  <span className="text-xs text-green-400">Scan actif</span>
                </div>
                <button
                  onClick={handleRefresh}
                  className={`w-9 h-9 rounded-lg bg-gray-800/50 border border-gray-700/50 flex items-center justify-center hover:bg-gray-700/50 transition-all ${
                    isRefreshing ? 'animate-spin' : ''
                  }`}
                >
                  <RefreshCw size={16} className="text-gray-400" />
                </button>
              </div>
            </div>

            {/* Tabs */}
            <nav className="flex gap-1 mt-4 -mb-px overflow-x-auto">
              {tabs.map((tab) => (
                <button
                  key={tab.key}
                  onClick={() => setActiveTab(tab.key as Tab)}
                  className={`flex items-center gap-2 px-4 py-2.5 rounded-t-lg text-sm font-medium transition-all whitespace-nowrap ${
                    activeTab === tab.key
                      ? 'bg-gray-800/50 text-white border-b-2 border-purple-500'
                      : 'text-gray-500 hover:text-gray-300 hover:bg-gray-800/30'
                  }`}
                >
                  <tab.icon size={16} />
                  {tab.label}
                </button>
              ))}
            </nav>
          </div>
        </header>

        {/* Main Content */}
        <main className="max-w-7xl mx-auto px-4 sm:px-6 py-6 space-y-6">
          {/* Dashboard Tab */}
          {activeTab === 'dashboard' && (
            <>
              {/* Metrics */}
              <MetricsBar />

              {/* Platform Cards */}
              <PlatformCards stats={platformStats} />

              {/* Charts + Agent side by side */}
              <div className="grid grid-cols-1 xl:grid-cols-3 gap-6">
                <div className="xl:col-span-2">
                  <Charts />
                </div>
                <div className="xl:col-span-1">
                  <AgentChat />
                </div>
              </div>

              {/* Alerts Preview */}
              <AlertsFeed />
            </>
          )}

          {/* Trending Tab */}
          {activeTab === 'trending' && (
            <>
              {/* Filter Bar */}
              <div className="flex flex-wrap items-center gap-3">
                <div className="flex items-center gap-2 text-gray-400">
                  <Filter size={16} />
                  <span className="text-sm">Filtrer par plateforme :</span>
                </div>
                <div className="flex gap-2">
                  {[
                    { key: 'all', label: 'Toutes' },
                    { key: 'vinted', label: 'Vinted' },
                    { key: 'leboncoin', label: 'Leboncoin' },
                    { key: 'ebay', label: 'eBay' },
                  ].map((filter) => (
                    <button
                      key={filter.key}
                      onClick={() => setPlatformFilter(filter.key)}
                      className={`px-3 py-1.5 rounded-lg text-xs font-medium transition-all ${
                        platformFilter === filter.key
                          ? 'bg-purple-600 text-white'
                          : 'bg-gray-800/50 text-gray-400 hover:text-white border border-gray-700/50'
                      }`}
                    >
                      {filter.label}
                    </button>
                  ))}
                </div>
              </div>

              {/* Trending Table */}
              <TrendingTable items={trendingItems} filter={platformFilter} />

              {/* Charts below */}
              <Charts />
            </>
          )}

          {/* Alerts Tab */}
          {activeTab === 'alerts' && (
            <div className="space-y-6">
              <div className="bg-gray-900/50 rounded-2xl border border-gray-700/50 p-6 backdrop-blur-sm">
                <h2 className="text-white font-bold text-xl mb-2">🔔 Centre d'Alertes</h2>
                <p className="text-gray-400 text-sm">
                  L'agent IA surveille en continu les 3 plateformes et vous alerte sur les opportunités, 
                  les baisses de prix et les tendances émergentes.
                </p>
              </div>
              <AlertsFeed />
              
              {/* Alert Settings */}
              <div className="bg-gray-900/50 rounded-2xl border border-gray-700/50 p-6 backdrop-blur-sm">
                <h3 className="text-white font-bold mb-4">⚙️ Configuration des Alertes</h3>
                <div className="space-y-4">
                  {[
                    { label: 'Opportunités de prix (baisse > 5%)', enabled: true },
                    { label: 'Nouveaux objets tendance (volume > 10K)', enabled: true },
                    { label: 'Alertes de catégorie (croissance > 20%)', enabled: true },
                    { label: 'Surveillance mots-clés personnalisés', enabled: false },
                    { label: 'Notifications push en temps réel', enabled: false },
                  ].map((setting, i) => (
                    <div key={i} className="flex items-center justify-between py-2 border-b border-gray-800/50 last:border-0">
                      <span className="text-gray-300 text-sm">{setting.label}</span>
                      <div className={`w-10 h-5 rounded-full relative cursor-pointer transition-colors ${
                        setting.enabled ? 'bg-purple-600' : 'bg-gray-700'
                      }`}>
                        <div className={`absolute top-0.5 w-4 h-4 rounded-full bg-white transition-transform ${
                          setting.enabled ? 'translate-x-5' : 'translate-x-0.5'
                        }`}></div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )}

          {/* Agent Tab */}
          {activeTab === 'agent' && (
            <div className="grid grid-cols-1 xl:grid-cols-2 gap-6">
              <div className="space-y-6">
                <AgentChat />
                
                {/* Agent Status */}
                <div className="bg-gray-900/50 rounded-2xl border border-gray-700/50 p-5 backdrop-blur-sm">
                  <h3 className="text-white font-bold mb-4">🤖 Statut de l'Agent</h3>
                  <div className="space-y-3">
                    {[
                      { label: 'Dernier scan Vinted', value: 'Il y a 3 min', status: 'ok' },
                      { label: 'Dernier scan Leboncoin', value: 'Il y a 7 min', status: 'ok' },
                      { label: 'Dernier scan eBay', value: 'Il y a 5 min', status: 'ok' },
                      { label: 'Base de données', value: '2.3M entrées', status: 'ok' },
                      { label: 'Modèle IA', value: 'v2.4 (à jour)', status: 'ok' },
                    ].map((item, i) => (
                      <div key={i} className="flex items-center justify-between py-1">
                        <span className="text-gray-400 text-sm">{item.label}</span>
                        <div className="flex items-center gap-2">
                          <span className="text-gray-300 text-sm">{item.value}</span>
                          <span className="w-2 h-2 rounded-full bg-green-400"></span>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Agent Capabilities */}
              <div className="space-y-6">
                <div className="bg-gray-900/50 rounded-2xl border border-gray-700/50 p-5 backdrop-blur-sm">
                  <h3 className="text-white font-bold mb-4">⚡ Capacités de l'Agent</h3>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    {[
                      { icon: '📊', title: 'Analyse de tendances', desc: 'Détection automatique des patterns de marché' },
                      { icon: '💰', title: 'Suivi des prix', desc: 'Monitoring en temps réel des prix moyens' },
                      { icon: '📦', title: 'Analyse de volume', desc: 'Quantification des ventes par catégorie' },
                      { icon: '🎯', title: 'Scoring opportunités', desc: 'Identification des meilleurs deals' },
                      { icon: '🔔', title: 'Alertes intelligentes', desc: 'Notifications contextuelles personnalisées' },
                      { icon: '📈', title: 'Prédictions', desc: 'Projections basées sur l\'historique' },
                    ].map((cap, i) => (
                      <div key={i} className="bg-gray-800/50 rounded-xl p-3 border border-gray-700/30">
                        <span className="text-2xl">{cap.icon}</span>
                        <h4 className="text-white text-sm font-medium mt-2">{cap.title}</h4>
                        <p className="text-gray-500 text-xs mt-1">{cap.desc}</p>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="bg-gradient-to-br from-purple-900/30 to-indigo-900/30 rounded-2xl border border-purple-500/20 p-5">
                  <h3 className="text-white font-bold mb-2">💡 Conseil du jour</h3>
                  <p className="text-gray-300 text-sm leading-relaxed">
                    Les sneakers Adidas Samba connaissent une hausse de 35% en volume sur Vinted. 
                    C'est le moment idéal pour revendre si vous en possédez. Le prix moyen est passé 
                    de 52€ à 72€ en 30 jours.
                  </p>
                  <div className="mt-3 flex items-center gap-2">
                    <span className="text-xs bg-green-500/10 text-green-400 px-2 py-1 rounded-full">+35% volume</span>
                    <span className="text-xs bg-green-500/10 text-green-400 px-2 py-1 rounded-full">+38% prix</span>
                  </div>
                </div>
              </div>
            </div>
          )}
        </main>

        {/* Footer */}
        <footer className="border-t border-gray-800/50 mt-12">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 py-4 flex flex-wrap items-center justify-between gap-4">
            <p className="text-xs text-gray-600">
              MarketBot AI © 2026 — Agent de veille marché multi-plateformes
            </p>
            <div className="flex items-center gap-4">
              <span className="text-xs text-gray-600">Données actualisées il y a 3 min</span>
              <div className="flex items-center gap-1">
                <span className="w-1.5 h-1.5 rounded-full bg-green-400 animate-pulse"></span>
                <span className="text-xs text-green-400">Systèmes opérationnels</span>
              </div>
            </div>
          </div>
        </footer>
      </div>
    </div>
  );
}

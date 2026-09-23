import React, { useState, useEffect } from 'react';
import {
  Bot, LayoutDashboard, TrendingUp, Bell, MessageSquare,
  RefreshCw, Activity, Globe, FlaskConical, Cpu, Calendar
} from 'lucide-react';
import PlatformCards from './components/PlatformCards';
import PlatformDetails from './components/PlatformDetails';
import TrendingTable from './components/TrendingTable';
import Charts from './components/Charts';
import AgentChat from './components/AgentChat';
import MetricsBar from './components/MetricsBar';
import AlertsFeed from './components/AlertsFeed';
import MethodologyPanel from './components/MethodologyPanel';
import ElectronicsTab from './components/ElectronicsTab';
import { platformStats, trendingItems } from './data/mockData';

type Tab = 'dashboard' | 'trending' | 'electronics' | 'alerts' | 'agent' | 'methodology';
type TimeFilter = '7d' | '30d' | 'all';

export default function App() {
  const [activeTab, setActiveTab] = useState<Tab>('dashboard');
  const [platformFilter, setPlatformFilter] = useState<string>('all');
  const [sortBy, setSortBy] = useState<string>('volume');
  const [timeFilter, setTimeFilter] = useState<TimeFilter>('30d');
  const [isRefreshing, setIsRefreshing] = useState(false);
  const [scanProgress, setScanProgress] = useState(0);
  const [lastUpdate, setLastUpdate] = useState(new Date());
  const [liveData, setLiveData] = useState(trendingItems);

  // Simulation de données live - mise à jour toutes les 10 secondes
  useEffect(() => {
    const interval = setInterval(() => {
      setLiveData(prev => prev.map(item => ({
        ...item,
        volume: Math.floor(item.volume * (0.98 + Math.random() * 0.04)),
        volume7d: Math.floor(item.volume7d * (0.97 + Math.random() * 0.06)),
        volume30d: Math.floor(item.volume30d * (0.98 + Math.random() * 0.04)),
        avgPrice: Math.round(item.avgPrice * (0.99 + Math.random() * 0.02)),
      })));
    }, 10000);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setScanProgress((prev) => {
        if (prev >= 100) return 0;
        return prev + Math.random() * 15;
      });
    }, 2000);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    if (scanProgress >= 100) {
      setLastUpdate(new Date());
    }
  }, [scanProgress]);

  const handleRefresh = () => {
    setIsRefreshing(true);
    setScanProgress(0);
    setTimeout(() => {
      setIsRefreshing(false);
      setScanProgress(100);
    }, 2000);
  };

  const tabs = [
    { key: 'dashboard', label: 'Dashboard', icon: LayoutDashboard },
    { key: 'trending', label: 'Tendances', icon: TrendingUp },
    { key: 'electronics', label: 'Électronique', icon: Cpu },
    { key: 'alerts', label: 'Alertes', icon: Bell },
    { key: 'agent', label: 'Agent IA', icon: MessageSquare },
    { key: 'methodology', label: 'Méthodologie', icon: FlaskConical },
  ];

  const timeFilterOptions: { key: TimeFilter; label: string; desc: string }[] = [
    { key: '7d', label: '7 jours', desc: 'Derniers 7 jours' },
    { key: '30d', label: '30 jours', desc: 'Derniers 30 jours' },
    { key: 'all', label: 'Tout', desc: 'Historique complet' },
  ];

  return (
    <div className="min-h-screen bg-gray-950 text-white">
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
                <div className="hidden md:flex items-center gap-2 px-3 py-1.5 rounded-lg bg-gray-800/50 border border-gray-700/50">
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
                  title="Rafraîchir les données"
                >
                  <RefreshCw size={16} className="text-gray-400" />
                </button>
              </div>
            </div>

            {/* Scan progress */}
            <div className="mt-3 h-0.5 bg-gray-800 rounded-full overflow-hidden">
              <div
                className="h-full bg-gradient-to-r from-purple-500 to-indigo-500 rounded-full transition-all duration-500"
                style={{ width: `${Math.min(scanProgress, 100)}%` }}
              ></div>
            </div>

            {/* Tabs */}
            <nav className="flex gap-1 mt-3 -mb-px overflow-x-auto">
              {tabs.map((tab) => (
                <button
                  key={tab.key}
                  onClick={() => setActiveTab(tab.key as Tab)}
                  className={`flex items-center gap-2 px-4 py-2.5 rounded-t-lg text-sm font-medium transition-all whitespace-nowrap relative ${
                    activeTab === tab.key
                      ? 'bg-gray-800/50 text-white border-b-2 border-purple-500'
                      : 'text-gray-500 hover:text-gray-300 hover:bg-gray-800/30'
                  }`}
                >
                  <tab.icon size={16} />
                  {tab.label}
                  {tab.key === 'electronics' && (
                    <span className="absolute -top-1 -right-1 bg-red-500 text-white text-[9px] px-1 py-0.5 rounded-full font-bold animate-pulse">
                      NEW
                    </span>
                  )}
                </button>
              ))}
            </nav>
          </div>
        </header>

        {/* Time Filter Bar - visible on most tabs */}
        {activeTab !== 'methodology' && activeTab !== 'agent' && (
          <div className="max-w-7xl mx-auto px-4 sm:px-6 pt-4">
            <div className="flex flex-wrap items-center gap-3 bg-gradient-to-r from-purple-900/20 to-indigo-900/20 rounded-xl border border-purple-500/30 p-4 backdrop-blur-sm">
              <div className="flex items-center gap-2">
                <div className="flex items-center gap-1.5">
                  <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse"></span>
                  <span className="text-xs text-green-400 font-medium">LIVE</span>
                </div>
                <div className="w-px h-4 bg-gray-700"></div>
                <Calendar size={16} className="text-purple-400" />
                <span className="text-sm font-semibold text-white">Visualisation temporelle :</span>
              </div>
              <div className="flex gap-2">
                {timeFilterOptions.map((opt) => (
                  <button
                    key={opt.key}
                    onClick={() => setTimeFilter(opt.key)}
                    className={`px-4 py-2 rounded-lg text-sm font-semibold transition-all ${
                      timeFilter === opt.key
                        ? 'bg-gradient-to-r from-purple-600 to-indigo-600 text-white shadow-lg shadow-purple-500/30 scale-105'
                        : 'bg-gray-800/70 text-gray-300 hover:text-white hover:bg-gray-700/70 border border-gray-600/50'
                    }`}
                    title={opt.desc}
                  >
                    {opt.key === '7d' && '📅 '}
                    {opt.key === '30d' && '📆 '}
                    {opt.key === 'all' && '📊 '}
                    {opt.label}
                  </button>
                ))}
              </div>
              <div className="hidden sm:block ml-auto text-xs text-purple-300 font-medium">
                {timeFilter === '7d' && '✨ Affichage : 7 derniers jours'}
                {timeFilter === '30d' && '✨ Affichage : 30 derniers jours'}
                {timeFilter === 'all' && '✨ Affichage : Historique complet'}
              </div>
            </div>
          </div>
        )}

        {/* Main Content */}
        <main className="max-w-7xl mx-auto px-4 sm:px-6 py-6 space-y-6">
          {/* Dashboard */}
          {activeTab === 'dashboard' && (
            <>
              <MetricsBar />
              <PlatformCards stats={platformStats} />
              <PlatformDetails platforms={platformStats} />
              <div className="grid grid-cols-1 xl:grid-cols-3 gap-6">
                <div className="xl:col-span-2">
                  <Charts />
                </div>
                <div className="xl:col-span-1">
                  <AgentChat />
                </div>
              </div>
              <AlertsFeed />
            </>
          )}

          {/* Trending */}
          {activeTab === 'trending' && (
            <>
              <div className="bg-gray-900/50 rounded-xl border border-gray-700/50 p-4 backdrop-blur-sm">
                <div className="flex flex-wrap items-center gap-4">
                  <div className="flex items-center gap-2 text-gray-400">
                    <span className="text-sm font-medium">Plateforme :</span>
                  </div>
                  <div className="flex gap-2">
                    {[
                      { key: 'all', label: '🌐 Toutes' },
                      { key: 'vinted', label: '👗 Vinted' },
                      { key: 'leboncoin', label: '🛒 Leboncoin' },
                      { key: 'ebay', label: '🏷️ eBay' },
                    ].map((f) => (
                      <button
                        key={f.key}
                        onClick={() => setPlatformFilter(f.key)}
                        className={`px-3 py-1.5 rounded-lg text-xs font-medium transition-all ${
                          platformFilter === f.key
                            ? 'bg-purple-600 text-white shadow-lg shadow-purple-500/20'
                            : 'bg-gray-800/50 text-gray-400 hover:text-white border border-gray-700/50'
                        }`}
                      >
                        {f.label}
                      </button>
                    ))}
                  </div>
                </div>
              </div>

              <TrendingTable
                items={liveData}
                filter={platformFilter}
                sortBy={sortBy}
                onSortChange={setSortBy}
                timeFilter={timeFilter}
              />

              <Charts />
            </>
          )}

          {/* Electronics */}
          {activeTab === 'electronics' && (
            <ElectronicsTab timeFilter={timeFilter} />
          )}

          {/* Alerts */}
          {activeTab === 'alerts' && (
            <div className="space-y-6">
              <div className="bg-gray-900/50 rounded-2xl border border-gray-700/50 p-6 backdrop-blur-sm">
                <h2 className="text-white font-bold text-xl mb-2">🔔 Centre d'Alertes Intelligentes</h2>
                <p className="text-gray-400 text-sm leading-relaxed">
                  L'agent IA surveille en continu les 3 plateformes. Focus sur les <strong className="text-white">petits objets électroniques</strong> et <strong className="text-white">composants PC</strong> avec fort potentiel de revente.
                </p>
              </div>
              <AlertsFeed />
              <div className="bg-gray-900/50 rounded-2xl border border-gray-700/50 p-6 backdrop-blur-sm">
                <h3 className="text-white font-bold mb-4">⚙️ Configuration des Alertes</h3>
                <div className="space-y-3">
                  {[
                    { label: 'Baisse composants PC > 5%', enabled: true, desc: 'Alerte sur les baisses GPU/CPU/RAM/SSD' },
                    { label: 'Nouveaux objets tendance (volume > 5K)', enabled: true, desc: 'Détection automatique des objets en hausse' },
                    { label: 'Alertes de catégorie (croissance > 20%)', enabled: true, desc: 'Surveillance des catégories en explosion' },
                    { label: 'ROI minimum 30%', enabled: true, desc: 'Filtrer uniquement les objets rentables' },
                    { label: 'Focus Leboncoin - petits objets < 50€', enabled: true, desc: 'Priorité aux accessoires électroniques' },
                    { label: 'Exclure objets volumineux', enabled: true, desc: 'Filtre automatique meubles, vélos, etc.' },
                    { label: 'Alertes GPU spécifiques', enabled: true, desc: 'Suivi RTX 3060 Ti, 4060, 4070 Super' },
                    { label: 'Notifications push en temps réel', enabled: false, desc: 'Recevoir les alertes instantanément' },
                  ].map((setting, i) => (
                    <div key={i} className="flex items-center justify-between py-3 px-4 rounded-xl bg-gray-800/30 border border-gray-700/30 hover:bg-gray-800/50 transition-colors">
                      <div>
                        <span className="text-gray-200 text-sm font-medium">{setting.label}</span>
                        <p className="text-gray-500 text-xs mt-0.5">{setting.desc}</p>
                      </div>
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

          {/* Agent */}
          {activeTab === 'agent' && (
            <div className="grid grid-cols-1 xl:grid-cols-2 gap-6">
              <div className="space-y-6">
                <AgentChat />
                <div className="bg-gray-900/50 rounded-2xl border border-gray-700/50 p-5 backdrop-blur-sm">
                  <h3 className="text-white font-bold mb-4">🤖 Statut de l'Agent</h3>
                  <div className="space-y-3">
                    {[
                      { label: 'Dernier scan Vinted', value: 'Il y a 3 min', items: '2.4M analysées' },
                      { label: 'Dernier scan Leboncoin', value: 'Il y a 7 min', items: '3.8M analysées' },
                      { label: 'Dernier scan eBay', value: 'Il y a 5 min', items: '5.2M analysées' },
                      { label: 'Base de données', value: '2.3M entrées', items: 'Mise à jour continue' },
                      { label: 'Modèle IA', value: 'v2.4 (à jour)', items: 'Précision: 94%' },
                    ].map((item, i) => (
                      <div key={i} className="flex items-center justify-between py-2 px-3 rounded-lg bg-gray-800/30 border border-gray-700/20">
                        <div>
                          <span className="text-gray-300 text-sm">{item.label}</span>
                          <p className="text-gray-500 text-xs">{item.items}</p>
                        </div>
                        <div className="flex items-center gap-2">
                          <span className="text-white text-sm font-medium">{item.value}</span>
                          <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse"></span>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              <div className="space-y-6">
                <div className="bg-gray-900/50 rounded-2xl border border-gray-700/50 p-5 backdrop-blur-sm">
                  <h3 className="text-white font-bold mb-4">⚡ Capacités de l'Agent</h3>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    {[
                      { icon: '📊', title: 'Analyse de tendances', desc: 'Détection automatique des patterns' },
                      { icon: '💰', title: 'Suivi des prix', desc: 'Monitoring temps réel multi-plateformes' },
                      { icon: '🖥️', title: 'Composants PC', desc: 'GPU, CPU, RAM, SSD - suivi dédié' },
                      { icon: '🎯', title: 'Scoring opportunités', desc: 'ROI prédit par modèle XGBoost' },
                      { icon: '🔔', title: 'Alertes intelligentes', desc: 'Notifications contextuelles' },
                      { icon: '📈', title: 'Prédictions', desc: 'Projections SARIMA 30-90 jours' },
                      { icon: '🛒', title: 'Focus Leboncoin', desc: 'Petits objets électroniques < 50€' },
                      { icon: '📅', title: 'Filtres temporels', desc: 'Analyse 7j / 30j / historique' },
                    ].map((cap, i) => (
                      <div key={i} className="bg-gray-800/50 rounded-xl p-3 border border-gray-700/30 hover:border-purple-500/30 transition-colors group">
                        <span className="text-2xl group-hover:scale-110 transition-transform inline-block">{cap.icon}</span>
                        <h4 className="text-white text-sm font-medium mt-2">{cap.title}</h4>
                        <p className="text-gray-500 text-xs mt-1">{cap.desc}</p>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="bg-gradient-to-br from-purple-900/30 to-indigo-900/30 rounded-2xl border border-purple-500/20 p-5">
                  <h3 className="text-white font-bold mb-2">💡 Conseil du jour</h3>
                  <p className="text-gray-300 text-sm leading-relaxed">
                    Les <strong>composants PC sont en baisse</strong> (-8% à -18% sur 30j).
                    C'est le moment d'acheter : <strong>DDR4 16GB à 28€</strong>, <strong>SSD Kingston NV2 à 48€</strong>,
                    <strong> Ryzen 5 5600 à 110€</strong>. Sur Leboncoin, les accessoires tech (câbles, coques) offrent les meilleurs ROI (+60-65%).
                  </p>
                  <div className="mt-3 flex flex-wrap items-center gap-2">
                    <span className="text-xs bg-red-500/10 text-red-400 px-2 py-1 rounded-full border border-red-500/20">📉 Composants -12%</span>
                    <span className="text-xs bg-green-500/10 text-green-400 px-2 py-1 rounded-full border border-green-500/20">✅ Opportunité achat</span>
                    <span className="text-xs bg-purple-500/10 text-purple-400 px-2 py-1 rounded-full border border-purple-500/20">🎯 ROI +42%</span>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* Methodology */}
          {activeTab === 'methodology' && (
            <div className="space-y-6">
              <div className="bg-gray-900/50 rounded-2xl border border-gray-700/50 p-6 backdrop-blur-sm">
                <h2 className="text-white font-bold text-xl mb-2">🔬 Méthodologie & Transparence</h2>
                <p className="text-gray-400 text-sm leading-relaxed">
                  MarketBot utilise un pipeline d'analyse en 6 étapes pour transformer les données brutes en insights actionnables.
                  Chaque insight est accompagné d'un <strong className="text-white">score de confiance</strong>.
                </p>
              </div>
              <MethodologyPanel />
              <div className="bg-gray-900/50 rounded-2xl border border-gray-700/50 p-6 backdrop-blur-sm">
                <h3 className="text-white font-bold mb-4">📊 Qualité des Données</h3>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  {[
                    { platform: 'Vinted', reliability: 92, scanned: '2.4M', frequency: '15 min', color: 'from-teal-500 to-cyan-500' },
                    { platform: 'Leboncoin', reliability: 88, scanned: '3.8M', frequency: '10 min', color: 'from-orange-500 to-amber-500' },
                    { platform: 'eBay', reliability: 95, scanned: '5.2M', frequency: '5 min', color: 'from-red-500 to-rose-500' },
                  ].map((p) => (
                    <div key={p.platform} className="bg-gray-800/30 rounded-xl p-4 border border-gray-700/30">
                      <div className="flex items-center justify-between mb-3">
                        <h4 className="text-white font-medium">{p.platform}</h4>
                        <span className="text-xs bg-green-500/10 text-green-400 px-2 py-0.5 rounded-full">{p.reliability}%</span>
                      </div>
                      <div className="space-y-2">
                        <div className="flex justify-between text-xs">
                          <span className="text-gray-500">Annonces scannées</span>
                          <span className="text-white">{p.scanned}</span>
                        </div>
                        <div className="flex justify-between text-xs">
                          <span className="text-gray-500">Fréquence</span>
                          <span className="text-white">Toutes les {p.frequency}</span>
                        </div>
                      </div>
                      <div className="mt-3 h-1.5 bg-gray-700 rounded-full overflow-hidden">
                        <div
                          className={`h-full bg-gradient-to-r ${p.color} rounded-full`}
                          style={{ width: `${p.reliability}%` }}
                        ></div>
                      </div>
                    </div>
                  ))}
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

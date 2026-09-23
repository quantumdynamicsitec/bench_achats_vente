import React, { useState } from 'react';
import { ChevronDown, ChevronUp, Check, X, Globe, Clock, Database, Shield } from 'lucide-react';
import { PlatformStats } from '../data/mockData';

interface Props {
  platforms: PlatformStats[];
}

export default function PlatformDetails({ platforms }: Props) {
  const [expanded, setExpanded] = useState<string | null>(null);

  return (
    <div className="space-y-4">
      <div className="flex items-center justify-between">
        <h3 className="text-white font-bold text-lg">🌐 Détails par Plateforme</h3>
        <span className="text-xs text-gray-500">Cliquez pour plus de détails</span>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {platforms.map((platform) => {
          const isExpanded = expanded === platform.key;

          return (
            <div
              key={platform.key}
              className={`relative overflow-hidden rounded-2xl bg-gray-900/50 border backdrop-blur-sm transition-all duration-300 ${
                isExpanded ? 'border-purple-500/50 md:col-span-3' : 'border-gray-700/50 hover:border-gray-600/50'
              }`}
            >
              {/* Top accent */}
              <div className={`absolute top-0 left-0 right-0 h-1 bg-gradient-to-r ${platform.bgColor}`}></div>

              {/* Header - always visible */}
              <button
                onClick={() => setExpanded(isExpanded ? null : platform.key)}
                className="w-full p-5 text-left"
              >
                <div className="flex items-start justify-between">
                  <div className="flex items-center gap-3">
                    <span className="text-3xl">{platform.logo}</span>
                    <div>
                      <h4 className="text-white font-bold text-lg">{platform.name}</h4>
                      <p className="text-gray-500 text-xs">{platform.country} • Fondé en {platform.founded}</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="flex items-center gap-1 px-2 py-1 rounded-full bg-gray-800/80">
                      <Shield size={12} className="text-green-400" />
                      <span className="text-xs text-green-400 font-medium">{platform.reliability}%</span>
                    </div>
                    {isExpanded ? <ChevronUp size={16} className="text-gray-400" /> : <ChevronDown size={16} className="text-gray-400" />}
                  </div>
                </div>

                {/* Quick stats */}
                <div className="grid grid-cols-3 gap-3 mt-4">
                  <div>
                    <p className="text-xs text-gray-500">Annonces</p>
                    <p className="text-white font-semibold">{(platform.totalListings / 1000000).toFixed(1)}M</p>
                  </div>
                  <div>
                    <p className="text-xs text-gray-500">Prix moyen</p>
                    <p className="text-white font-semibold">{platform.avgPrice.toFixed(1)}€</p>
                  </div>
                  <div>
                    <p className="text-xs text-gray-500">Croissance</p>
                    <p className={`font-semibold ${platform.growth > 0 ? 'text-green-400' : 'text-red-400'}`}>
                      {platform.growth > 0 ? '+' : ''}{platform.growth}%
                    </p>
                  </div>
                </div>
              </button>

              {/* Expanded content */}
              {isExpanded && (
                <div className="px-5 pb-5 border-t border-gray-800 pt-4 animate-fade-in">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {/* Description & Strategy */}
                    <div>
                      <h5 className="text-sm font-medium text-white mb-2">📝 Description</h5>
                      <p className="text-gray-400 text-sm leading-relaxed">{platform.description}</p>

                      <h5 className="text-sm font-medium text-white mt-4 mb-2">✅ Points forts</h5>
                      <ul className="space-y-1.5">
                        {platform.strengths.map((s, i) => (
                          <li key={i} className="flex items-start gap-2 text-sm text-gray-300">
                            <Check size={14} className="text-green-400 mt-0.5 flex-shrink-0" />
                            {s}
                          </li>
                        ))}
                      </ul>

                      <h5 className="text-sm font-medium text-white mt-4 mb-2">⚠️ Points faibles</h5>
                      <ul className="space-y-1.5">
                        {platform.weaknesses.map((w, i) => (
                          <li key={i} className="flex items-start gap-2 text-sm text-gray-300">
                            <X size={14} className="text-red-400 mt-0.5 flex-shrink-0" />
                            {w}
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Technical Details */}
                    <div>
                      <h5 className="text-sm font-medium text-white mb-3">⚙️ Configuration du Scan</h5>
                      <div className="space-y-3">
                        <div className="flex items-center gap-3 bg-gray-800/50 rounded-xl p-3 border border-gray-700/30">
                          <div className="w-8 h-8 rounded-lg bg-blue-500/10 flex items-center justify-center">
                            <Clock size={14} className="text-blue-400" />
                          </div>
                          <div>
                            <p className="text-xs text-gray-500">Fréquence de scan</p>
                            <p className="text-sm text-white font-medium">{platform.scanFrequency}</p>
                          </div>
                        </div>
                        <div className="flex items-center gap-3 bg-gray-800/50 rounded-xl p-3 border border-gray-700/30">
                          <div className="w-8 h-8 rounded-lg bg-purple-500/10 flex items-center justify-center">
                            <Database size={14} className="text-purple-400" />
                          </div>
                          <div>
                            <p className="text-xs text-gray-500">Source de données</p>
                            <p className="text-sm text-white font-medium">{platform.dataSource}</p>
                          </div>
                        </div>
                        <div className="flex items-center gap-3 bg-gray-800/50 rounded-xl p-3 border border-gray-700/30">
                          <div className="w-8 h-8 rounded-lg bg-green-500/10 flex items-center justify-center">
                            <Shield size={14} className="text-green-400" />
                          </div>
                          <div>
                            <p className="text-xs text-gray-500">Indice de fiabilité</p>
                            <div className="flex items-center gap-2">
                              <p className="text-sm text-white font-medium">{platform.reliability}%</p>
                              <div className="flex-1 h-1.5 bg-gray-700 rounded-full overflow-hidden">
                                <div
                                  className="h-full bg-gradient-to-r from-green-500 to-emerald-500 rounded-full"
                                  style={{ width: `${platform.reliability}%` }}
                                ></div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="flex items-center gap-3 bg-gray-800/50 rounded-xl p-3 border border-gray-700/30">
                          <div className="w-8 h-8 rounded-lg bg-orange-500/10 flex items-center justify-center">
                            <Globe size={14} className="text-orange-400" />
                          </div>
                          <div>
                            <p className="text-xs text-gray-500">Zone géographique</p>
                            <p className="text-sm text-white font-medium">{platform.country}</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
}

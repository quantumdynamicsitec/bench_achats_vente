import React, { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';
import { methodologySteps } from '../data/mockData';

export default function MethodologyPanel() {
  const [expandedStep, setExpandedStep] = useState<string | null>('1');

  return (
    <div className="bg-gray-900/50 rounded-2xl border border-gray-700/50 backdrop-blur-sm overflow-hidden">
      <div className="p-5 border-b border-gray-700/50">
        <h3 className="text-white font-bold text-lg flex items-center gap-2">
          🔬 Méthodologie de l'Agent
        </h3>
        <p className="text-gray-400 text-sm mt-1">
          Comment MarketBot collecte, analyse et transforme les données en insights actionnables
        </p>
      </div>

      <div className="p-5">
        {/* Pipeline visualization */}
        <div className="flex items-center gap-1 mb-6 overflow-x-auto pb-2">
          {methodologySteps.map((step, i) => (
            <React.Fragment key={step.id}>
              <button
                onClick={() => setExpandedStep(expandedStep === step.id ? null : step.id)}
                className={`flex flex-col items-center gap-1 px-3 py-2 rounded-xl transition-all min-w-[80px] ${
                  expandedStep === step.id
                    ? 'bg-purple-600/20 border border-purple-500/30'
                    : 'bg-gray-800/50 border border-gray-700/30 hover:bg-gray-800'
                }`}
              >
                <span className="text-xl">{step.icon}</span>
                <span className="text-[10px] text-gray-400 text-center leading-tight">{step.title}</span>
              </button>
              {i < methodologySteps.length - 1 && (
                <div className="w-4 h-0.5 bg-gray-700 flex-shrink-0"></div>
              )}
            </React.Fragment>
          ))}
        </div>

        {/* Steps detail */}
        <div className="space-y-3">
          {methodologySteps.map((step) => {
            const isExpanded = expandedStep === step.id;

            return (
              <div
                key={step.id}
                className={`rounded-xl border transition-all duration-300 ${
                  isExpanded
                    ? 'bg-gray-800/50 border-purple-500/30'
                    : 'bg-gray-800/20 border-gray-700/30 hover:bg-gray-800/40'
                }`}
              >
                <button
                  onClick={() => setExpandedStep(isExpanded ? null : step.id)}
                  className="w-full p-4 flex items-center gap-3 text-left"
                >
                  <span className="text-2xl">{step.icon}</span>
                  <div className="flex-1">
                    <div className="flex items-center gap-2">
                      <span className="text-xs px-1.5 py-0.5 rounded bg-gray-700 text-gray-400 font-mono">
                        #{step.step}
                      </span>
                      <h4 className="text-white font-medium text-sm">{step.title}</h4>
                    </div>
                    <p className="text-gray-500 text-xs mt-0.5">{step.description}</p>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="text-[10px] text-gray-600 hidden sm:inline">{step.frequency}</span>
                    {isExpanded ? <ChevronUp size={14} className="text-gray-400" /> : <ChevronDown size={14} className="text-gray-400" />}
                  </div>
                </button>

                {isExpanded && (
                  <div className="px-4 pb-4 border-t border-gray-700/30 pt-3 animate-fade-in">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <h5 className="text-xs text-gray-500 uppercase tracking-wider mb-2">Détails techniques</h5>
                        <ul className="space-y-1.5">
                          {step.details.map((detail, i) => (
                            <li key={i} className="flex items-start gap-2 text-xs text-gray-300">
                              <span className="text-purple-400 mt-0.5">▸</span>
                              {detail}
                            </li>
                          ))}
                        </ul>
                      </div>
                      <div>
                        <h5 className="text-xs text-gray-500 uppercase tracking-wider mb-2">Outils & Technologies</h5>
                        <div className="flex flex-wrap gap-1.5">
                          {step.tools.map((tool) => (
                            <span key={tool} className="text-[10px] px-2 py-1 rounded-full bg-gray-700/50 text-gray-300 border border-gray-600/30">
                              {tool}
                            </span>
                          ))}
                        </div>
                        <div className="mt-3 p-2 rounded-lg bg-gray-900/50 border border-gray-700/30">
                          <p className="text-[10px] text-gray-500">⏱️ Fréquence</p>
                          <p className="text-xs text-white font-medium">{step.frequency}</p>
                        </div>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Summary */}
        <div className="mt-6 p-4 rounded-xl bg-gradient-to-r from-purple-900/20 to-indigo-900/20 border border-purple-500/20">
          <h5 className="text-sm font-medium text-white mb-2">📊 Résumé du pipeline</h5>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
            <div>
              <p className="text-lg font-bold text-white">11.45M</p>
              <p className="text-xs text-gray-400">Annonces analysées/jour</p>
            </div>
            <div>
              <p className="text-lg font-bold text-white">50+</p>
              <p className="text-xs text-gray-400">Données par annonce</p>
            </div>
            <div>
              <p className="text-lg font-bold text-white">5 min</p>
              <p className="text-xs text-gray-400">Latence moyenne</p>
            </div>
            <div>
              <p className="text-lg font-bold text-white">94%</p>
              <p className="text-xs text-gray-400">Précision prédictions</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

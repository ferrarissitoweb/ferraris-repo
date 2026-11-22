import React from 'react';
import { Disc, Cpu, Flame, CheckCircle2, Check, ArrowRight } from 'lucide-react';
import { SERVICES } from '../data/companyData';

interface ServicesProps {
  onNavigate: (sectionId: string) => void;
}

export const Services: React.FC<ServicesProps> = ({ onNavigate }) => {
  const getIcon = (name: string) => {
    switch (name) {
      case 'Disc': return <Disc className="w-8 h-8 text-red-500" />;
      case 'Cpu': return <Cpu className="w-8 h-8 text-amber-500" />;
      case 'Flame': return <Flame className="w-8 h-8 text-orange-500" />;
      case 'CheckCircle2': return <CheckCircle2 className="w-8 h-8 text-emerald-500" />;
      default: return <Disc className="w-8 h-8 text-red-500" />;
    }
  };

  return (
    <section id="servizi" className="py-20 bg-slate-950 text-white relative border-b border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-xs font-bold uppercase tracking-widest text-red-500 mb-2">I Nostri Servizi</h2>
          <h3 className="text-3xl sm:text-4xl font-extrabold text-white">
            Soluzioni di Precisione Complete per la Tua Produzione
          </h3>
          <p className="mt-4 text-slate-400 text-base sm:text-lg">
            Dalla lavorazione grezza al pezzo finito e collaudato, garantiamo massima flessibilità e rispetto dei requisiti di progetto.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {SERVICES.map((service) => (
            <div 
              key={service.id}
              className="bg-slate-900 rounded-2xl p-8 border border-slate-800 hover:border-slate-700 hover:shadow-2xl hover:shadow-red-900/10 transition-all group flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-6">
                  <div className="p-4 rounded-xl bg-slate-950 border border-slate-700 group-hover:scale-105 transition-transform">
                    {getIcon(service.iconName)}
                  </div>
                  <span className="text-xs font-mono font-bold text-slate-300 uppercase tracking-wider">
                    {service.id.replace('-', ' ')}
                  </span>
                </div>

                <h4 className="text-2xl font-bold text-white mb-3 group-hover:text-red-400 transition-colors">
                  {service.title}
                </h4>

                <p className="text-slate-200 text-sm leading-relaxed mb-6">
                  {service.fullDesc}
                </p>

                {/* Key Features List */}
                <div className="space-y-2 mb-8 bg-slate-950/80 p-4 rounded-xl border border-slate-700/80">
                  <div className="text-xs font-bold text-slate-200 uppercase tracking-wider mb-2">Caratteristiche Principali:</div>
                  {service.features.map((feature, idx) => (
                    <div key={idx} className="flex items-start gap-2 text-xs text-slate-100">
                      <Check className="w-4 h-4 text-red-500 shrink-0 mt-0.5" />
                      <span>{feature}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="pt-4 border-t border-slate-700 flex items-center justify-between">
                <span className="text-xs text-slate-300">Garanzia di Conformità 100%</span>
                <button
                  onClick={() => onNavigate('contatti')}
                  className="text-xs font-bold text-red-400 hover:text-red-300 flex items-center gap-1 group/btn"
                >
                  <span>Richiedi info servizio</span>
                  <ArrowRight className="w-3.5 h-3.5 group-hover/btn:translate-x-1 transition-transform" />
                </button>
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

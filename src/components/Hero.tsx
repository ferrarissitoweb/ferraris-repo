import React from 'react';
import { ArrowRight, Award, ShieldCheck, Clock, Settings2, Cpu } from 'lucide-react';
import { COMPANY_INFO } from '../data/companyData';
import { IndustrialIcon } from './IndustrialIcon';

interface HeroProps {
  onNavigate: (sectionId: string) => void;
}

export const Hero: React.FC<HeroProps> = ({ onNavigate }) => {
  return (
    <div className="relative overflow-hidden bg-slate-950 text-white min-h-[85vh] flex items-center border-b border-slate-800">
      {/* Background Decorative Grids & Glow */}
      <div className="absolute inset-0 bg-[radial-gradient(#334155_1px,transparent_1px)] [background-size:24px_24px] opacity-25 pointer-events-none"></div>
      <div className="absolute -top-40 -right-40 w-96 h-96 bg-red-600/10 rounded-full blur-3xl pointer-events-none"></div>
      <div className="absolute -bottom-40 -left-40 w-96 h-96 bg-blue-600/10 rounded-full blur-3xl pointer-events-none"></div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-24">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">

          {/* Left Column: Text & CTAs */}
          <div className="lg:col-span-7 space-y-6 text-center lg:text-left">

            {/* Tagline Badge */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-red-500/10 border border-red-500/30 text-red-400 text-xs sm:text-sm font-semibold tracking-wide">
              <Award className="w-4 h-4 text-red-500" />
              <span>{COMPANY_INFO.tagline}</span>
            </div>

            {/* Main Headline */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white leading-tight">
              Ferraris Meccanica lavorazioni di <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-500 to-amber-400">Alta Precisione</span>
            </h1>

            {/* Subtitle */}
            <p className="text-lg sm:text-xl text-slate-300 max-w-2xl font-light leading-relaxed">
              Oltre <strong className="text-white font-semibold">25 anni di esperienza</strong> al servizio dell'industria <strong className="text-white font-semibold">metalmeccanica</strong>.
              Dalla prototipazione alla produzione di grandi serie programmate, garantiamo massima affidabilità e rispetto rigoroso dei tempi.
            </p>

            {/* Quick Specs Badges */}
            <div className="pt-2 grid grid-cols-2 sm:grid-cols-4 gap-3 text-left">
              <div className="bg-slate-900/80 p-3 rounded-lg border border-slate-800">
                <div className="text-red-400 font-bold text-lg">25+ Anni</div>
                <div className="text-slate-400 text-xs">Esperienza sul campo</div>
              </div>
              <div className="bg-slate-900/80 p-3 rounded-lg border border-slate-800">
                <div className="text-red-400 font-bold text-lg">10 Tavole</div>
                <div className="text-slate-400 text-xs">Centro Orizzontale</div>
              </div>
              <div className="bg-slate-900/80 p-3 rounded-lg border border-slate-800">
                <div className="text-red-400 font-bold text-lg">Ø 650 mm</div>
                <div className="text-slate-400 text-xs">Max Tornitura</div>
              </div>
              <div className="bg-slate-900/80 p-3 rounded-lg border border-slate-800">
                <div className="text-red-400 font-bold text-lg">Metalmeccanico</div>
                <div className="text-slate-400 text-xs">Specializzati</div>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="pt-4 flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4">
              <button
                onClick={() => onNavigate('contatti')}
                className="w-full sm:w-auto px-8 py-4 rounded-xl text-base font-bold text-white bg-gradient-to-r from-red-600 to-red-700 hover:from-red-500 hover:to-red-600 shadow-xl shadow-red-900/40 transition-all transform hover:-translate-y-0.5 flex items-center justify-center gap-2 group"
              >
                <span>Richiedi un Preventivo</span>
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </button>

              <button
                onClick={() => onNavigate('parco-macchine')}
                className="w-full sm:w-auto px-6 py-4 rounded-xl text-base font-medium text-slate-200 bg-slate-900 hover:bg-slate-800 border border-slate-700 transition-all flex items-center justify-center gap-2"
              >
                <Cpu className="w-5 h-5 text-slate-400" />
                <span>Scopri Parco Macchine</span>
              </button>
            </div>

            {/* Trust Highlights */}
            <div className="pt-6 border-t border-slate-800/80 flex flex-wrap items-center justify-center lg:justify-start gap-6 text-xs text-slate-400 font-medium">
              <div className="flex items-center gap-2">
                <ShieldCheck className="w-4 h-4 text-emerald-400" />
                <span>Rigorosi Controlli Metrologici</span>
              </div>
              <div className="flex items-center gap-2">
                <Clock className="w-4 h-4 text-amber-400" />
                <span>Consegne nei Tempi Stabiliti</span>
              </div>
              <div className="flex items-center gap-2">
                <Settings2 className="w-4 h-4 text-blue-400" />
                <span>Fornitura Completa Chiavi in Mano</span>
              </div>
            </div>

          </div>

          {/* Right Column: Visual Machinery/Product Card Showcase */}
          <div className="lg:col-span-5 relative">
            <div className="relative mx-auto max-w-md lg:max-w-none">
              <div className="relative rounded-2xl bg-slate-900/50 border border-slate-800 p-8 flex items-center justify-center">
                <IndustrialIcon />
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};

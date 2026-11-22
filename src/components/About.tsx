import React from 'react';
import { ShieldCheck, Target, History, Users, Layers, CheckCircle } from 'lucide-react';
import { COMPANY_INFO } from '../data/companyData';

export const About: React.FC = () => {
  return (
    <section id="chi-siamo" className="py-20 bg-slate-900 text-white relative border-b border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-xs font-bold uppercase tracking-widest text-red-500 mb-2">Chi Siamo</h2>
          <h3 className="text-3xl sm:text-4xl font-extrabold text-white">
            Esperienza, Precisione e Affidabilità nelle Lavorazioni di Precisione
          </h3>
          <p className="mt-4 text-slate-400 text-base sm:text-lg">
            Un punto di riferimento tecnico per l'industria delle lavorazioni da oltre un quarto di secolo.
          </p>
        </div>

        {/* Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">

          {/* Left: Presentation & Story */}
          <div className="lg:col-span-7 space-y-6">
            <div className="bg-slate-950 p-8 rounded-2xl border border-slate-800 shadow-xl relative">
              <div className="absolute top-0 right-0 transform translate-x-2 -translate-y-2 bg-red-600 text-white font-extrabold text-xs px-3 py-1 rounded-full uppercase tracking-wider shadow-md">
                25+ Anni sul campo
              </div>

              <h4 className="text-xl font-bold text-white mb-4 flex items-center gap-2">
                <History className="w-5 h-5 text-red-500" />
                <span>La Nostra Storia & Missione</span>
              </h4>

              <p className="text-slate-300 leading-relaxed text-sm sm:text-base">
                La <strong className="text-white">FERRARIS MECCANICA S.a.s.</strong> ha maturato un'esperienza di oltre 25 anni, con una forte specializzazione nella produzione di componenti critici per il settore <strong className="text-red-400 font-semibold"> metalmeccanico</strong>.
              </p>

              <p className="text-slate-300 leading-relaxed text-sm sm:text-base mt-4">
                Lavoriamo quotidianamente con attrezzature complesse per risolvere le sfide produttive dei nostri clienti.
                Che si tratti di grandi quantità programmate, di piccole serie o di singoli pezzi prototipo, mettiamo a disposizione un'organizzazione snella, efficiente e altamente qualificata.
              </p>

              {/* Quote / Direction Note */}
              <div className="mt-6 pt-6 border-t border-slate-800 bg-slate-900/60 p-4 rounded-xl border-l-4 border-l-red-500">
                <blockquote className="text-slate-200 italic text-sm">
                  "Nel contesto produttivo attuale, la chiave del successo è la collaborazione stretta tra fornitore e cliente finale per soddisfare tempestivamente le caratteristiche ed i tempi richiesti. Il nostro obiettivo constante è guidarvi dal disegno alla fornitura completa nei tempi stabiliti."
                </blockquote>
                <div className="mt-3 text-right">
                  <span className="text-white font-bold text-sm block">Paolo Ferraris</span>
                  <span className="text-xs text-red-400 uppercase tracking-wider">Direzione Tecnica • Ferraris Meccanica</span>
                </div>
              </div>
            </div>
          </div>

          {/* Right: Key Strengths Grid */}
          <div className="lg:col-span-5 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 gap-4">

            <div className="p-5 rounded-xl bg-slate-950/70 border border-slate-800 hover:border-slate-700 transition-all flex items-start gap-4">
              <div className="p-3 rounded-lg bg-red-500/10 text-red-400 border border-red-500/20 shrink-0">
                <Target className="w-6 h-6" />
              </div>
              <div>
                <h5 className="font-bold text-white text-base">Flessibilità Produttiva</h5>
                <p className="text-slate-400 text-xs mt-1">
                  Capacità di passare da prototipi singoli a lotti di produzione programmata senza perdere efficienza.
                </p>
              </div>
            </div>

            <div className="p-5 rounded-xl bg-slate-950/70 border border-slate-800 hover:border-slate-700 transition-all flex items-start gap-4">
              <div className="p-3 rounded-lg bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 shrink-0">
                <ShieldCheck className="w-6 h-6" />
              </div>
              <div>
                <h5 className="font-bold text-white text-base">Competenze Settore Metalmeccanico</h5>
                <p className="text-slate-400 text-xs mt-1">
                  Profonda conoscenza dei materiali critici, delle tolleranze di tenuta e dei capitolati di settore.
                </p>
              </div>
            </div>

            <div className="p-5 rounded-xl bg-slate-950/70 border border-slate-800 hover:border-slate-700 transition-all flex items-start gap-4">
              <div className="p-3 rounded-lg bg-blue-500/10 text-blue-400 border border-blue-500/20 shrink-0">
                <Layers className="w-6 h-6" />
              </div>
              <div>
                <h5 className="font-bold text-white text-base">Fornitura Completa</h5>
                <p className="text-slate-400 text-xs mt-1">
                  Gestione integrata: dal disegno tecnico al pezzo lavorato, collaudato e pronto per il montaggio.
                </p>
              </div>
            </div>

            <div className="p-5 rounded-xl bg-slate-950/70 border border-slate-800 hover:border-slate-700 transition-all flex items-start gap-4">
              <div className="p-3 rounded-lg bg-amber-500/10 text-amber-400 border border-amber-500/20 shrink-0">
                <Users className="w-6 h-6" />
              </div>
              <div>
                <h5 className="font-bold text-white text-base">Relazione Diretta</h5>
                <p className="text-slate-400 text-xs mt-1">
                  Contatto costante con la direzione tecnica per risolvere tempestivamente ogni problematica.
                </p>
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};

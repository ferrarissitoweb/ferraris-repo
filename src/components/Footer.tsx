import React from 'react';
import { ArrowUp, Phone, Mail, MapPin } from 'lucide-react';
import { COMPANY_INFO } from '../data/companyData';

interface FooterProps {
  onNavigate: (sectionId: string) => void;
}

export const Footer: React.FC<FooterProps> = ({ onNavigate }) => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-slate-950 text-slate-400 text-sm border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">

          {/* Col 1: Branding & Tagline */}
          <div className="space-y-4 md:col-span-1">
            <div className="flex items-center gap-2">
              <span className="text-lg font-bold text-white tracking-tight">
                FERRARIS <span className="text-red-500 font-extrabold">MECCANICA</span>
              </span>
            </div>
            <p className="text-xs text-slate-400 leading-relaxed">
              {COMPANY_INFO.subtitle}
            </p>
            <p className="text-xs text-red-400 font-medium italic">
              "{COMPANY_INFO.tagline}"
            </p>
          </div>

          {/* Col 2: Quick Links */}
          <div>
            <h5 className="text-xs font-bold text-white uppercase tracking-wider mb-4">Navigazione Rapida</h5>
            <ul className="space-y-2 text-xs">
              <li>
                <button onClick={() => onNavigate('home')} className="hover:text-red-400 transition-colors">
                  Home Page
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate('chi-siamo')} className="hover:text-red-400 transition-colors">
                  Chi Siamo (Storia & Missione)
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate('servizi')} className="hover:text-red-400 transition-colors">
                  Lavorazioni & Servizi
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate('parco-macchine')} className="hover:text-red-400 transition-colors">
                  Parco Macchine & Metrologia
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate('galleria')} className="hover:text-red-400 transition-colors">
                  Galleria Foto (20 Campioni)
                </button>
              </li>
            </ul>
          </div>

          {/* Col 3: Services Summary */}
          <div>
            <h5 className="text-xs font-bold text-white uppercase tracking-wider mb-4">Specializzazioni</h5>
            <ul className="space-y-2 text-xs">
              <li>Tornitura CNC Ø 650 mm</li>
              <li>Centro di Lavoro 10 Pallet</li>
              <li>Metalmeccanico</li>
              <li>Prototipazione & Piccole Serie</li>
              <li>Grandi Quantità Programmate</li>
            </ul>
          </div>

          {/* Col 4: Contact summary */}
          <div className="space-y-3">
            <h5 className="text-xs font-bold text-white uppercase tracking-wider mb-4">Sede Legale & Operativa</h5>
            <div className="flex items-start gap-2 text-xs">
              <MapPin className="w-4 h-4 text-red-500 shrink-0 mt-0.5" />
              <span>{COMPANY_INFO.address}, {COMPANY_INFO.postalCode} {COMPANY_INFO.city} ({COMPANY_INFO.province})</span>
            </div>
            <div className="flex items-center gap-2 text-xs">
              <Phone className="w-4 h-4 text-red-500 shrink-0" />
              <span>{COMPANY_INFO.phone}</span>
            </div>
            <div className="flex items-center gap-2 text-xs">
              <Mail className="w-4 h-4 text-red-500 shrink-0" />
              <span className="font-mono">{COMPANY_INFO.email}</span>
            </div>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-slate-900 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs">
          <p>© {new Date().getFullYear()} {COMPANY_INFO.name}. Tutti i diritti riservati.</p>

          <div className="flex items-center gap-6">
            <button onClick={scrollToTop} className="flex items-center gap-1 hover:text-white transition-colors">
              <span>Torna Su</span>
              <ArrowUp className="w-3.5 h-3.5 text-red-500" />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};

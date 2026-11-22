import React, { useState } from 'react';
import { GALLERY_IMAGES } from '../data/companyData';
import { LightboxModal } from './LightboxModal';
import { ChevronLeft, ChevronRight, Maximize2, Grid, Images } from 'lucide-react';

export const Gallery: React.FC = () => {
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);
  const [carouselIndex, setCarouselIndex] = useState<number>(0);
  const [viewMode, setViewMode] = useState<'grid' | 'carousel'>('carousel');

  const handleNextCarousel = () => {
    setCarouselIndex((prev) => (prev + 1) % GALLERY_IMAGES.length);
  };

  const handlePrevCarousel = () => {
    setCarouselIndex((prev) => (prev - 1 + GALLERY_IMAGES.length) % GALLERY_IMAGES.length);
  };

  const openLightbox = (index: number) => {
    setLightboxIndex(index);
  };

  const closeLightbox = () => {
    setLightboxIndex(null);
  };

  const handleNextLightbox = () => {
    if (lightboxIndex !== null) {
      setLightboxIndex((lightboxIndex + 1) % GALLERY_IMAGES.length);
    }
  };

  const handlePrevLightbox = () => {
    if (lightboxIndex !== null) {
      setLightboxIndex((lightboxIndex - 1 + GALLERY_IMAGES.length) % GALLERY_IMAGES.length);
    }
  };

  return (
    <section id="galleria" className="py-20 bg-slate-950 text-white relative border-b border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h2 className="text-xs font-bold uppercase tracking-widest text-red-500 mb-2">Galleria Lavorazioni</h2>
          <h3 className="text-3xl sm:text-4xl font-extrabold text-white">
            Esempi di Componenti & Particolari Meccanici
          </h3>
          <p className="mt-4 text-slate-400 text-base sm:text-lg">
            Una rassegna di 20 lavorazioni rappresentative della nostra produzione: componenti complessi per i settori Energetici, valvolame di precisione e particolari torniti e fresati su disegno.
          </p>

          {/* View Mode Toggle */}
          <div className="mt-6 inline-flex items-center p-1 bg-slate-900 rounded-xl border border-slate-800">
            <button
              onClick={() => setViewMode('carousel')}
              className={`flex items-center gap-2 px-4 py-2 rounded-lg text-xs font-semibold transition-all ${
                viewMode === 'carousel'
                  ? 'bg-red-600 text-white shadow-md'
                  : 'text-slate-400 hover:text-white'
              }`}
            >
              <Images className="w-4 h-4" />
              <span>Carosello Interactive</span>
            </button>
            <button
              onClick={() => setViewMode('grid')}
              className={`flex items-center gap-2 px-4 py-2 rounded-lg text-xs font-semibold transition-all ${
                viewMode === 'grid'
                  ? 'bg-red-600 text-white shadow-md'
                  : 'text-slate-400 hover:text-white'
              }`}
            >
              <Grid className="w-4 h-4" />
              <span>Griglia Completa (20)</span>
            </button>
          </div>
        </div>

        {/* Carousel View */}
        {viewMode === 'carousel' && (
          <div className="relative max-w-4xl mx-auto">
            <div className="relative h-96 sm:h-[500px] bg-slate-900 rounded-2xl overflow-hidden border border-slate-800 shadow-2xl group">
              <img
                src={GALLERY_IMAGES[carouselIndex].src}
                alt={GALLERY_IMAGES[carouselIndex].title}
                loading="lazy"
                className="w-full h-full object-cover object-center cursor-pointer transform group-hover:scale-105 transition-transform duration-500"
                onClick={() => openLightbox(carouselIndex)}
              />
              
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-transparent to-transparent pointer-events-none"></div>

              {/* Title Overlay */}
              <div className="absolute bottom-6 left-6 right-6 flex items-center justify-between">
                <div>
                  <span className="text-xs font-mono font-bold text-red-400 uppercase tracking-wider block">
                    Campione {carouselIndex + 1} / {GALLERY_IMAGES.length}
                  </span>
                  <h4 className="text-xl sm:text-2xl font-bold text-white mt-1">
                    {GALLERY_IMAGES[carouselIndex].title}
                  </h4>
                  <p className="text-sm text-slate-300 mt-1 line-clamp-2">
                    {GALLERY_IMAGES[carouselIndex].description}
                  </p>
                  </div>
                <button
                  onClick={() => openLightbox(carouselIndex)}
                  className="p-3 rounded-xl bg-slate-900/90 text-white hover:bg-red-600 border border-slate-700 transition-colors flex items-center gap-2 text-xs font-semibold"
                >
                  <Maximize2 className="w-4 h-4" />
                  <span className="hidden sm:inline">Ingrandisci</span>
                </button>
              </div>

              {/* Controls */}
              <button
                onClick={handlePrevCarousel}
                className="absolute left-4 top-1/2 -translate-y-1/2 p-3 rounded-full bg-slate-900/80 text-white hover:bg-red-600 border border-slate-700 transition-colors shadow-lg"
                aria-label="Precedente"
              >
                <ChevronLeft className="w-6 h-6" />
              </button>

              <button
                onClick={handleNextCarousel}
                className="absolute right-4 top-1/2 -translate-y-1/2 p-3 rounded-full bg-slate-900/80 text-white hover:bg-red-600 border border-slate-700 transition-colors shadow-lg"
                aria-label="Successivo"
              >
                <ChevronRight className="w-6 h-6" />
              </button>
            </div>

            {/* Thumbnail Indicators */}
            <div className="mt-6 flex justify-center items-center gap-2 overflow-x-auto py-2 w-full max-w-full">
              {GALLERY_IMAGES.map((img, idx) => (
                <button
                  key={img.id}
                  onClick={() => setCarouselIndex(idx)}
                  className={`w-10 h-10 rounded-lg overflow-hidden border-2 shrink-0 transition-all ${
                    carouselIndex === idx ? 'border-red-500 scale-110' : 'border-slate-800 opacity-50 hover:opacity-100'
                  }`}
                >
                  <img src={img.src} alt={img.title} loading="lazy" className="w-full h-full object-cover" />
                </button>
              ))}
            </div>
          </div>
        )}

        {/* Grid View */}
        {viewMode === 'grid' && (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {GALLERY_IMAGES.map((img, index) => (
              <div
                key={img.id}
                onClick={() => openLightbox(index)}
                className="group relative h-64 bg-slate-900 rounded-xl overflow-hidden border border-slate-800 hover:border-red-500/50 cursor-pointer shadow-lg transition-all"
              >
                <img
                  src={img.src}
                  alt={img.title}
                  loading="lazy"
                  className="w-full h-full object-cover object-center group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/20 to-transparent opacity-80 group-hover:opacity-90 transition-opacity"></div>

                <div className="absolute bottom-3 left-3 right-3 flex items-center justify-between">
                  <span className="text-xs font-medium text-white truncate">{img.title}</span>
                  <div className="p-1.5 rounded-lg bg-red-600/80 text-white opacity-0 group-hover:opacity-100 transition-opacity">
                    <Maximize2 className="w-3.5 h-3.5" />
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}

        {/* Lightbox Modal */}
        {lightboxIndex !== null && (
          <LightboxModal
            isOpen={lightboxIndex !== null}
            imageSrc={GALLERY_IMAGES[lightboxIndex].src}
            imageTitle={GALLERY_IMAGES[lightboxIndex].title}
            imageDescription={GALLERY_IMAGES[lightboxIndex].description}
            currentIndex={lightboxIndex}
            totalCount={GALLERY_IMAGES.length}
            onClose={closeLightbox}
            onPrev={handlePrevLightbox}
            onNext={handleNextLightbox}
          />
        )}

      </div>
    </section>
  );
};

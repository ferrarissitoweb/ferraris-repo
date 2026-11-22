export interface Machine {
  id: string;
  name: string;
  category: 'Tornitura' | 'Fresatura/Centri di Lavoro' | 'Controllo Qualità' | 'Attrezzature Ausiliarie';
  specs: string[];
  description: string;
}

export interface Service {
  id: string;
  title: string;
  shortDesc: string;
  fullDesc: string;
  iconName: string;
  features: string[];
}

export const COMPANY_INFO = {
  name: "FERRARIS MECCANICA S.a.s.",
  subtitle: "Lavorazioni Meccaniche di Alta Precisione",
  tagline: "...dal disegno alla fornitura completa nei tempi stabiliti",
  experienceYears: 25,
  specialization: "Settore Metalmeccanico, Prototipazione e Serie",
  address: "Via Gritti, 11",
  postalCode: "24020",
  city: "Pradalunga",
  province: "Bergamo",
  country: "Italia",
  email: "info@ferrarismeccanica.com",
  website: "https://ferrarismeccanica.com",
  phone: "327 2061798",
  owner: "Paolo Ferraris",
  mapsUrl: "https://maps.google.com/?q=Via+Gritti+11+Pradalunga+Bergamo"
};

export const SERVICES: Service[] = [
  {
    id: "tornitura-cnc",
    title: "Tornitura di Precisione",
    shortDesc: "Tornitura ad alta precisione per componenti fino a 650mm di diametro.",
    fullDesc: "Specializzati nella lavorazione al tornio di componenti complessi per il settore metalmeccanico e industriale. Garantiamo tolleranze ristrette e finiture superficiali di alto livello.",
    iconName: "Disc",
    features: [
      "Tornitura massima diametro 650 mm",
      "Lunghezza massima di lavoro 1900 mm",
      "Lavorazione leghe speciali (Inconel, Duplex, Inox)",
      "Pezzi singoli, prototipi e serie"
    ]
  },
  {
    id: "fresatura-centri-lavoro",
    title: "Centri di Lavoro Orizzontali Multi-Pallet",
    shortDesc: "Centri di lavoro ad elevata produttività con sistemi multi-pallet a 10 tavole.",
    fullDesc: "Grazie al nostro centro di lavoro MATSUURA a 10 tavole, siamo in grado di gestire produzione continua e flessibile di particolari ad alta complessità geometrica.",
    iconName: "Cpu",
    features: [
      "10 tavole 500x500 mm in continuo",
      "Corse assi X: 750mm | Y: 640mm | Z: 600mm",
      "Teste D'Andrea per barenature e scanalature di precisione",
      "Riduzione drastica dei tempi di fermo macchina"
    ]
  },
  {
    id: "oil-gas-specialization",
    title: "Specializzazione Settore Metalmeccanico",
    shortDesc: "Componenti per l'industria energetica e valvolame ad alte prestazioni.",
    fullDesc: "Esperienza pluridecennale nella realizzazione di corpi valvole, componenti per attuatori e flange destinate agli impianti energetici più esigenti.",
    iconName: "Flame",
    features: [
      "Componentistica per valvole e attuatori",
      "Conformità alle normative stringenti di settore",
      "Tracciabilità completa materiali e lavorazioni",
      "Fornitura completa chiavi in mano"
    ]
  },
  {
    id: "controllo-qualita",
    title: "Controllo Qualità e Metrologia",
    shortDesc: "Collaudo e misurazioni di precisione mediante strumenti digitali avanzati.",
    fullDesc: "Ogni componente viene sottoposto a rigorosi controlli dimensionali. Disponiamo di sala metrologica attrezzata per garantire la conformità al disegno.",
    iconName: "CheckCircle2",
    features: [
      "Altimetro TESA Mod Hite 700 (Utile 700 mm)",
      "Micrometri per interni a 3 punte (0 - 150 mm)",
      "Asta digitale per interni (150 - 1500 mm)",
      "Serie micrometri per esterni (0 - 300 mm)"
    ]
  }
];

export const MACHINERY: Machine[] = [
  {
    id: "imts-tx-300",
    name: "Tornio IMTS TX 300",
    category: "Tornitura",
    specs: [
      "Tornitura Massima Diametro: 650 mm",
      "Lunghezza Massima Lavorabile: 1900 mm",
      "Alta rigidità di taglio per materiali resistenti"
    ],
    description: "Tornio ad elevate prestazioni per la lavorazione di componenti cilindrici di medie e grandi dimensioni con precisione centesimale."
  },
  {
    id: "matsuura-mc-700h",
    name: "Centro di Lavoro Orizzontale MATSUURA MC 700H - 50-PC10",
    category: "Fresatura/Centri di Lavoro",
    specs: [
      "Numero Tavole: 10 Pallet integrati",
      "Dimensione Tavola: 500 x 500 mm",
      "Corsa Assi: X 750 mm | Y 640 mm | Z 600 mm",
      "Equipaggiato con Teste D'Andrea a tornire"
    ],
    description: "Isola produttiva flessibile a 10 pallet, ideale per la produzione non presidiata e per lotti con elevato mix produttivo."
  },
  {
    id: "strumentazione-misura",
    name: "Parco Strumenti di Misura e Metrologia",
    category: "Controllo Qualità",
    specs: [
      "Altimetro TESA Mod Hite 700 (Utile 700 mm)",
      "Micrometri per interni a 3 punte (0 - 150 mm)",
      "Asta digitale per interni (150 - 1500 mm)",
      "Serie micrometri per esterni (0 - 300 mm)"
    ],
    description: "Strumentazione certificata per la verifica dimensionale e geometrica di tutte le tolleranze di progetto."
  },
  {
    id: "attrezzature-ausiliarie",
    name: "Attrezzature di Saldate e Movimentazione",
    category: "Attrezzature Ausiliarie",
    specs: [
      "Saldatrice a filo continuo pulsata",
      "Carrello Elevatore Mod. portata 18 Q.li (1.8 Ton)",
      "Gru di sollevamento e movimentazione pezzi pesanti"
    ],
    description: "Supporto logistico e di carpenteria complementare per la gestione sicura del grezzo e del finito."
  }
];

export interface GalleryImage {
  id: number;
  src: string;
  title: string;
  description: string;
}

export const GALLERY_IMAGES: GalleryImage[] = [
  { id: 1, src: "gallery/20171027_150628.png", title: "Lavorazione di Precisione", description: "Operazione di tornitura su componente in acciaio inossidabile per applicazioni di alta precisione." },
  { id: 2, src: "gallery/20171214_221623.png", title: "Componente Industriale Tornito", description: "Particolare tornito, rifinito con tolleranze ristrette per componenti di trasmissione." },
  { id: 3, src: "gallery/20171214_232632.png", title: "Particolare per Settore Metalmeccanico", description: "Componente critico destinato al settore metalmeccanico, lavorato su tornio CNC." },
  { id: 4, src: "gallery/20171219_081502.png", title: "Flangia di Alta Precisione", description: "Flangia di tenuta ad alte prestazioni, lavorata per garantire massima tenuta in condizioni gravose." },
  { id: 5, src: "gallery/20171219_081509.png", title: "Lavorazione su Centro di Lavoro", description: "Fase di fresatura su centro di lavoro multi-pallet, con focus sulla precisione delle geometrie interne." },
  { id: 6, src: "gallery/20180105_064311.png", title: "Particolare Meccanico Complesso", description: "Componente con geometria complessa, ottenuto mediante fresatura multiasse per applicazioni speciali." },
  { id: 7, src: "gallery/20180105_064534.png", title: "Finitura Superficiale di Precisione", description: "Dettaglio della finitura superficiale su componente meccanico, conforme ai requisiti di rugosità richiesti." },
  { id: 8, src: "gallery/20181009_203431.png", title: "Componente Valvola Meccanica", description: "Parte integrante di un sistema valvolare, lavorata per accoppiamenti di alta precisione." },
  { id: 9, src: "gallery/20200116_221625.png", title: "Corpo Valvola Metalmeccanico", description: "Corpo valvola realizzato per il settore metalmeccanico, sottoposto a rigorosi controlli dimensionali." },
  { id: 10, src: "gallery/20200721_001944.png", title: "Lavorazione Speciale Inox", description: "Lavorazione di tornitura su lega Inconel, dimostrazione della capacità di gestire materiali ad alta resistenza." },
  { id: 11, src: "gallery/20201010_161904.png", title: "Particolare Tornito ad Alta Tolleranza", description: "Componente meccanico con tolleranze centesimali, pronto per la fase di montaggio." },
  { id: 12, src: "gallery/20201023_112329.png", title: "Dettaglio Foratura e Barenatura", description: "Dettaglio tecnico su operazione di barenatura interna per alloggiamento cuscinetti." },
  { id: 13, src: "gallery/20210114_100615.png", title: "Gruppo Meccanico Assemblato", description: "Esempio di assemblaggio meccanico di alta precisione, testato per funzionalità operativa." },
  { id: 14, src: "gallery/20210307_113715.png", title: "Superfici Rettificate e Collaudate", description: "Componente con superfici rettificate, garantito da rigoroso controllo metrologico." },
  { id: 15, src: "gallery/IMG-20190208-WA0009.png", title: "Componente di Grande Diametro", description: "Lavorazione di un componente di grandi dimensioni con precisione centesimale." },
  { id: 16, src: "gallery/IMG-20190731-WA0012.png", title: "Barenatura di Precisione", description: "Dettaglio della fase di barenatura per garantire allineamenti geometrici perfetti." },
  { id: 17, src: "gallery/IMG-20210218-WA0004.png", title: "Controllo Dimensionale al Banco", description: "Operazione di controllo qualità su banco metrologico con strumentazione certificata." }
];

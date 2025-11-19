import React, { useState } from 'react';
import { 
  Puzzle, 
  MessageCircle, 
  Mic, 
  Phone, 
  Mail, 
  Instagram, 
  MapPin, 
  Menu, 
  X,
  Calendar
} from 'lucide-react';
import { Button } from './components/Button';
import { SectionDivider } from './components/SectionDivider';
import { APPOINTMENT_URL, ServiceItem, PriceItem } from './types';

// --- Data ---

const services: ServiceItem[] = [
  {
    title: "Linguaggio",
    description: "Supporto per ritardi del linguaggio, disturbi fonetici e fonologici. Un percorso su misura per aiutare il bambino a esprimersi con sicurezza, anche nello spettro autistico.",
    icon: MessageCircle,
    colorClass: "bg-pastel-blue"
  },
  {
    title: "Apprendimento",
    description: "Interventi mirati per Dislessia, Disortografia, Discalculia e BES. Utilizziamo il gioco e strategie personalizzate per il potenziamento scolastico.",
    icon: Puzzle,
    colorClass: "bg-pastel-yellow"
  },
  {
    title: "Voce & Articolazione",
    description: "Esercizi divertenti per correggere difetti di pronuncia, deglutizione atipica o disfonia infantile. Ritrova la gioia di parlare chiaro!",
    icon: Mic,
    colorClass: "bg-pastel-pink"
  }
];

const prices: PriceItem[] = [
  {
    title: "Prima Visita",
    price: "50€",
    description: "Valutazione iniziale completa in studio, a domicilio o online.",
    colorClass: "bg-white border-pastel-mint"
  },
  {
    title: "Seduta Successiva",
    price: "35€",
    description: "Terapia logopedica personalizzata (45-50 minuti).",
    colorClass: "bg-white border-pastel-purple"
  }
];

const App: React.FC = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMenu = () => setIsMobileMenuOpen(!isMobileMenuOpen);
  const closeMenu = () => setIsMobileMenuOpen(false);

  const navLinks = [
    { name: 'Chi Sono', href: '#about' },
    { name: 'Servizi', href: '#services' },
    { name: 'Tariffe', href: '#prices' },
    { name: 'Contatti', href: '#contact' },
  ];

  return (
    <div className="min-h-screen flex flex-col font-sans overflow-x-hidden">
      
      {/* --- Navigation --- */}
      <nav className="sticky top-0 z-50 bg-white/90 backdrop-blur-md shadow-sm border-b-4 border-pastel-blue/30">
        <div className="container mx-auto px-4 py-3 flex justify-between items-center">
          <a href="#" className="text-2xl font-heading font-bold text-sky-500 flex items-center gap-2">
            <span className="bg-sky-100 p-2 rounded-xl">🗣️</span>
            Gaia Troisi
          </a>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <a 
                key={link.name} 
                href={link.href} 
                className="font-bold text-gray-600 hover:text-rose-400 transition-colors font-heading text-lg"
              >
                {link.name}
              </a>
            ))}
            <Button href={APPOINTMENT_URL} variant="primary" className="text-sm px-4 py-2">
              Prenota Ora
            </Button>
          </div>

          {/* Mobile Toggle */}
          <button onClick={toggleMenu} className="md:hidden p-2 text-gray-600 bg-gray-100 rounded-xl">
            {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden absolute top-full left-0 w-full bg-white border-b-4 border-pastel-blue/30 shadow-lg p-4 flex flex-col gap-4 animate-in slide-in-from-top-5">
            {navLinks.map((link) => (
              <a 
                key={link.name} 
                href={link.href} 
                onClick={closeMenu}
                className="block text-center font-bold text-xl py-2 text-gray-600 hover:text-rose-400 hover:bg-rose-50 rounded-xl"
              >
                {link.name}
              </a>
            ))}
            <Button href={APPOINTMENT_URL} fullWidth>Prenota un Appuntamento</Button>
          </div>
        )}
      </nav>

      {/* --- Hero Section --- */}
      <header className="relative bg-pastel-yellow/30 pt-12 pb-32 md:py-32 overflow-hidden">
        
        {/* Decorative Blobs */}
        <div className="absolute top-10 right-[-50px] w-64 h-64 bg-pastel-pink rounded-full opacity-50 blur-3xl animate-pulse" />
        <div className="absolute bottom-10 left-[-50px] w-80 h-80 bg-pastel-blue rounded-full opacity-50 blur-3xl" />

        <div className="container mx-auto px-4 relative z-10 text-center md:text-left flex flex-col md:flex-row items-center gap-12">
          <div className="md:w-1/2 space-y-6">
            <div className="inline-block bg-white px-4 py-1 rounded-full text-sky-500 font-bold shadow-sm transform rotate-[-2deg] mb-2">
              👋 Ciao, sono Gaia!
            </div>
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-heading font-bold text-brand-dark leading-tight">
              Aiuto i piccoli a <br/>
              <span className="text-rose-400 inline-block transform hover:scale-105 transition-transform cursor-default">trovare</span> la loro 
              <span className="text-sky-400 inline-block transform hover:scale-105 transition-transform cursor-default ml-3">voce</span>.
            </h1>
            <p className="text-xl text-gray-600 font-medium max-w-lg mx-auto md:mx-0 leading-relaxed">
              Logopedia pediatrica con un approccio dolce e giocoso. 
              Insieme trasformiamo le difficoltà in superpoteri!
            </p>
            <div className="pt-4 flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
              <Button href={APPOINTMENT_URL} className="text-xl px-8 py-4">
                <Calendar className="mr-2 h-6 w-6" />
                Prenota Appuntamento
              </Button>
              <Button href="#services" variant="secondary" className="text-xl px-8 py-4">
                Scopri i Servizi
              </Button>
            </div>
          </div>

          <div className="md:w-1/2 flex justify-center relative">
            {/* Image placeholder with organic shape */}
            <div className="relative w-80 h-80 md:w-96 md:h-96">
               <div className="absolute inset-0 bg-pastel-mint rounded-[40%_60%_70%_30%_/_40%_50%_60%_50%] rotate-6 animate-[spin_10s_linear_infinite_reverse] opacity-60"></div>
               <div className="absolute inset-2 bg-white rounded-[30%_70%_70%_30%_/_30%_30%_70%_70%] overflow-hidden shadow-cartoon border-4 border-white">
                  <img 
                    src="https://picsum.photos/600/600?grayscale" 
                    alt="Bambino felice che gioca" 
                    className="w-full h-full object-cover hover:scale-110 transition-transform duration-700"
                  />
               </div>
               
               {/* Floating Elements */}
               <div className="absolute -top-6 -left-4 bg-white p-3 rounded-2xl shadow-cartoon rotate-[-10deg] animate-bounce">
                 🧩 Apprendimento
               </div>
               <div className="absolute -bottom-6 -right-4 bg-white p-3 rounded-2xl shadow-cartoon rotate-[10deg] animate-bounce" style={{animationDelay: '0.5s'}}>
                 🗣️ Linguaggio
               </div>
            </div>
          </div>
        </div>
      </header>

      <SectionDivider color="fill-white" />

      {/* --- About Me --- */}
      <section id="about" className="bg-white py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center space-y-8">
            <h2 className="text-4xl font-heading font-bold text-sky-500 mb-8">Chi Sono</h2>
            
            <div className="bg-cream p-8 md:p-12 rounded-[3rem] shadow-cartoon border-4 border-pastel-yellow relative overflow-hidden">
              <div className="absolute -top-10 -left-10 w-32 h-32 bg-pastel-pink rounded-full opacity-20"></div>
              <div className="absolute -bottom-10 -right-10 w-40 h-40 bg-pastel-blue rounded-full opacity-20"></div>
              
              <p className="text-xl text-gray-700 leading-loose relative z-10">
                Ciao! Sono <span className="font-bold text-rose-400 font-heading text-2xl">Gaia Troisi</span>, 
                una logopedista qualificata con una missione speciale: rendere la terapia un momento di gioia e scoperta.
                <br/><br/>
                La mia passione è aiutare i bambini a superare le sfide comunicative, siano esse legate a 
                <span className="bg-yellow-100 px-2 py-1 rounded-lg mx-1 font-bold transform -rotate-1 inline-block">disturbi del linguaggio</span>, 
                <span className="bg-blue-100 px-2 py-1 rounded-lg mx-1 font-bold transform rotate-1 inline-block">autismo</span> o 
                <span className="bg-green-100 px-2 py-1 rounded-lg mx-1 font-bold transform -rotate-1 inline-block">difficoltà di apprendimento</span>.
                Credo fermamente che ogni bambino abbia una voce unica che merita di essere ascoltata.
              </p>
            </div>
          </div>
        </div>
      </section>

      <SectionDivider color="fill-sky-50" flip />

      {/* --- Services --- */}
      <section id="services" className="bg-sky-50 py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <span className="text-rose-400 font-bold text-lg tracking-widest uppercase font-heading">Cosa facciamo insieme</span>
            <h2 className="text-4xl md:text-5xl font-heading font-bold text-brand-dark mt-2">I Miei Servizi</h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div 
                key={index} 
                className={`${service.colorClass} rounded-3xl p-8 shadow-cartoon hover:shadow-cartoon-hover transition-all duration-300 hover:-translate-y-2 border-4 border-white/50 flex flex-col h-full`}
              >
                <div className="bg-white w-16 h-16 rounded-2xl flex items-center justify-center mb-6 shadow-sm text-brand-dark">
                  <service.icon size={32} strokeWidth={2.5} />
                </div>
                <h3 className="text-2xl font-heading font-bold mb-4 text-brand-dark">{service.title}</h3>
                <p className="text-brand-dark/80 font-medium leading-relaxed flex-grow">
                  {service.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <SectionDivider color="fill-cream" />

      {/* --- Pricing --- */}
      <section id="prices" className="bg-cream py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
             <h2 className="text-4xl md:text-5xl font-heading font-bold text-brand-dark">Tariffe Semplici</h2>
             <p className="text-xl text-gray-500 mt-4 font-medium">Nessuna sorpresa, solo trasparenza per i genitori.</p>
          </div>

          <div className="flex flex-col md:flex-row justify-center gap-8 max-w-5xl mx-auto">
            {prices.map((item, index) => (
              <div key={index} className={`flex-1 ${item.colorClass} border-4 p-8 rounded-[2.5rem] shadow-cartoon relative`}>
                {index === 0 && (
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-rose-400 text-white px-4 py-1 rounded-full font-bold shadow-sm text-sm uppercase tracking-wide">
                    Consigliato
                  </div>
                )}
                <h3 className="text-2xl font-heading font-bold text-gray-700 mb-2">{item.title}</h3>
                <div className="text-5xl font-heading font-bold text-sky-500 mb-4">{item.price}</div>
                <p className="text-gray-500 font-medium mb-8">{item.description}</p>
                <Button href={APPOINTMENT_URL} fullWidth variant={index === 0 ? 'primary' : 'secondary'}>
                  Prenota Ora
                </Button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* --- CTA Strip --- */}
      <section className="bg-pastel-mint py-16 relative overflow-hidden">
         <div className="container mx-auto px-4 text-center relative z-10">
           <h2 className="text-3xl md:text-4xl font-heading font-bold text-teal-800 mb-6">
             Dubbi o domande?
           </h2>
           <p className="text-teal-700 text-xl mb-8 max-w-2xl mx-auto font-medium">
             Non sei sicuro di quale sia il percorso giusto? Contattami per una chiacchierata informale.
           </p>
           <div className="flex flex-wrap justify-center gap-4">
             <Button href="tel:+393899557253" className="bg-white text-teal-600 border-white hover:bg-teal-50">
               <Phone className="mr-2" size={20}/> Chiamami
             </Button>
             <Button href="mailto:troisigaia83@gmail.com" variant="outline" className="bg-transparent border-teal-700 text-teal-800 hover:bg-teal-100/50">
               <Mail className="mr-2" size={20}/> Scrivimi
             </Button>
           </div>
         </div>
         {/* Bg decoration */}
         <div className="absolute -left-10 -bottom-20 w-64 h-64 bg-white/30 rounded-full blur-2xl"></div>
         <div className="absolute -right-10 -top-20 w-64 h-64 bg-yellow-200/40 rounded-full blur-2xl"></div>
      </section>

      {/* --- Footer --- */}
      <footer id="contact" className="bg-white pt-16 pb-8 border-t-4 border-pastel-purple/30">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-12 mb-12">
            
            {/* Brand */}
            <div className="space-y-4">
              <div className="text-2xl font-heading font-bold text-sky-500 flex items-center gap-2">
                <span className="bg-sky-100 p-2 rounded-xl">🗣️</span>
                Gaia Troisi
              </div>
              <p className="text-gray-500 font-medium">
                Logopedista specializzata nell'età evolutiva.<br/>
                Avezzano e dintorni.
              </p>
              <div className="flex gap-4">
                <a 
                  href="https://www.instagram.com/logopedistaavezzano/?igsh=Mzc4czR6cnZxZTR4#" 
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-rose-100 p-3 rounded-full text-rose-500 hover:bg-rose-200 hover:scale-110 transition-all shadow-sm"
                  aria-label="Instagram"
                >
                  <Instagram size={24} />
                </a>
              </div>
            </div>

            {/* Contacts */}
            <div className="space-y-4">
              <h4 className="font-heading font-bold text-xl text-brand-dark">Contatti Rapidi</h4>
              <ul className="space-y-3">
                <li>
                  <a href="tel:+393899557253" className="flex items-center gap-3 text-gray-600 hover:text-sky-500 transition-colors font-medium">
                    <Phone size={18} /> +39 389 9557253
                  </a>
                </li>
                <li>
                  <a href="mailto:troisigaia83@gmail.com" className="flex items-center gap-3 text-gray-600 hover:text-sky-500 transition-colors font-medium">
                    <Mail size={18} /> troisigaia83@gmail.com
                  </a>
                </li>
                <li>
                   <a href="https://www.logopedistaavezzano.it" className="flex items-center gap-3 text-gray-600 hover:text-sky-500 transition-colors font-medium">
                    <MapPin size={18} /> www.logopedistaavezzano.it
                  </a>
                </li>
              </ul>
            </div>

            {/* Legal */}
            <div className="space-y-4">
              <h4 className="font-heading font-bold text-xl text-brand-dark">Info Legali</h4>
              <p className="text-gray-500 font-medium">
                P.IVA: 02173390663
              </p>
              <div className="pt-4">
                <Button href={APPOINTMENT_URL} className="text-sm px-6">Prenota Visita</Button>
              </div>
            </div>

          </div>
          
          <div className="border-t border-gray-100 pt-8 text-center text-gray-400 text-sm font-medium">
            &copy; {new Date().getFullYear()} Gaia Troisi. Tutti i diritti riservati.
          </div>
        </div>
      </footer>

      {/* Sticky Mobile CTA (if user scrolls down) */}
      <div className="md:hidden fixed bottom-4 left-4 right-4 z-40">
        <Button href={APPOINTMENT_URL} fullWidth className="shadow-xl border-2 border-white">
          📅 Prenota Ora
        </Button>
      </div>

    </div>
  );
};

export default App;
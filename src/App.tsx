/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { motion, AnimatePresence, useScroll, useTransform } from 'motion/react';
import { 
  Wrench, 
  Code2, 
  Cpu, 
  ShieldCheck, 
  Phone, 
  Mail, 
  Facebook, 
  Smartphone,
  ChevronRight,
  Terminal,
  Database,
  Server,
  Globe,
  Wifi,
  Monitor,
  HardDrive,
  Layers,
  MessageSquare,
  ArrowUp,
  Linkedin,
  Youtube,
  Menu,
  X,
  Maximize,
  Minimize
} from 'lucide-react';

const services = [
  {
    title: "Soporte Técnico Informático",
    desc: "Mantenimiento, instalación y solución de problemas en computadoras, laptops, impresoras y software, garantizando su correcto funcionamiento.",
    icon: Wrench,
    color: "text-blue-400",
    bg: "bg-blue-400/10",
    border: "hover:border-blue-500/50",
    glow: "hover:shadow-[0_0_40px_rgba(96,165,250,0.15)]",
    techs: ["Hardware","Software", "Redes", "Windows/Linux", "Mantenimiento"]
  },
  {
    title: "Desarrollo de Software a Medida",
    desc: "Diseño y desarrollo de sistemas y aplicaciones adaptados a las necesidades específicas de cada negocio para mejorar la productividad.",
    icon: Code2,
    color: "text-emerald-400",
    bg: "bg-emerald-400/10",
    border: "hover:border-emerald-500/50",
    glow: "hover:shadow-[0_0_40px_rgba(52,211,153,0.15)]",
    techs: ["Python", "PHP", "JavaScript", "React", "Node.js", "MySQL"]
  },
  {
    title: "Automatización y Soluciones Digitales",
    desc: "Implementación de herramientas digitales y automatización de procesos para optimizar la gestión empresarial y mejorar la eficiencia operativa.",
    icon: Cpu,
    color: "text-purple-400",
    bg: "bg-purple-400/10",
    border: "hover:border-purple-500/50",
    glow: "hover:shadow-[0_0_40px_rgba(168,85,247,0.15)]",
    techs: ["n8n", "AppScript","AppSheet", "Workflows", "Bots","APIs"]
  },
  {
    title: "Consultoría Tecnológica y Seguridad Informática",
    desc: "Asesoría para optimizar e implementar soluciones tecnológicas, aplicando buenas prácticas de seguridad de la información.",
    icon: ShieldCheck,
    color: "text-rose-400",
    bg: "bg-rose-400/10",
    border: "hover:border-rose-500/50",
    glow: "hover:shadow-[0_0_40px_rgba(251,113,133,0.15)]",
    techs: ["Auditoría", "Backups", "Firewalls", "Antivirus","Updates"]
  }
];

const technologies = [
  { name: "Python", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/python/python-original.svg" },
  { name: "PHP", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/php/php-original.svg" },
  { name: "JavaScript", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/javascript/javascript-original.svg" },
  { name: "TypeScript", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/typescript/typescript-original.svg" },
  { name: "AppScript", logo: "https://cdn.simpleicons.org/googleappsscript/4285F4" },
  { name: "Node.js", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nodejs/nodejs-original.svg" },
  { name: "Firebase", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/firebase/firebase-plain.svg" },
  { name: "MySQL", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mysql/mysql-original.svg" },
  { name: "Docker", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/docker/docker-original.svg" },
  { name: "GitHub", logo: "https://cdn.simpleicons.org/github/white" },
  { name: "NGINX", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nginx/nginx-original.svg" },
  { name: "React", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg" },
  { name: "Linux", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/linux/linux-original.svg" },
  { name: "n8n", logo: "https://cdn.simpleicons.org/n8n/EA4B71" }
];

const TiktokIcon = ({ className }: { className?: string }) => (
  <svg 
    viewBox="0 0 24 24" 
    fill="currentColor" 
    className={className}
    xmlns="http://www.w3.org/2000/svg"
  >
    <path d="M12.525.02c1.31-.02 2.61-.01 3.91-.02.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.05-2.89-.35-4.2-.97-.57-.26-1.1-.59-1.62-.93-.01 2.92.01 5.84-.02 8.75-.08 1.4-.54 2.79-1.35 3.94-1.31 1.92-3.58 3.17-5.91 3.21-1.43.08-2.86-.31-4.08-1.03-2.02-1.19-3.44-3.37-3.65-5.71-.02-.5-.03-1-.01-1.49.18-1.9 1.12-3.72 2.58-4.96 1.66-1.44 3.98-2.13 6.15-1.72.02 1.48-.04 2.96-.04 4.44-.99-.32-2.15-.23-3.02.37-.63.41-1.11 1.04-1.36 1.75-.21.51-.15 1.07-.14 1.61.24 1.64 1.82 3.02 3.5 2.87 1.12-.01 2.19-.66 2.77-1.61.19-.33.4-.67.41-1.06.1-1.79.06-3.57.07-5.36.01-4.03-.01-8.05.02-12.07z" />
  </svg>
);

export default function App() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [showButton, setShowButton] = useState(false);
  const [isFullscreen, setIsFullscreen] = useState(false);
  const [showFullscreenPrompt, setShowFullscreenPrompt] = useState(false);

  React.useEffect(() => {
    const handleScroll = () => {
      setShowButton(window.scrollY > 100);
    };

    window.addEventListener('scroll', handleScroll);
    
    // Show prompt after a short delay on initial load
    const timer = setTimeout(() => {
      if (!document.fullscreenElement && window.innerWidth < 1024) {
        // Optional: only show on smaller screens, or remove condition for all screens
        setShowFullscreenPrompt(true);
      } else if (!document.fullscreenElement) {
        setShowFullscreenPrompt(true);
      }
    }, 1500);

    return () => {
      window.removeEventListener('scroll', handleScroll);
      clearTimeout(timer);
    };
  }, []);

  const handleAcceptFullscreen = () => {
    if (!document.fullscreenElement) {
      document.documentElement.requestFullscreen().catch(err => {
        console.log(`Error attempting to enable full-screen mode: ${err.message}`);
      });
    }
    setShowFullscreenPrompt(false);
  };

  const handleDeclineFullscreen = () => {
    setShowFullscreenPrompt(false);
  };

  React.useEffect(() => {
    const handleFullscreenChange = () => {
      setIsFullscreen(!!document.fullscreenElement);
    };
    document.addEventListener('fullscreenchange', handleFullscreenChange);
    return () => document.removeEventListener('fullscreenchange', handleFullscreenChange);
  }, []);

  const toggleFullScreen = () => {
    if (!document.fullscreenElement) {
      document.documentElement.requestFullscreen().catch(err => {
        console.log(`Error attempting to enable full-screen mode: ${err.message}`);
      });
    } else {
      if (document.exitFullscreen) {
        document.exitFullscreen();
      }
    }
  };

  return (
    <div className="min-h-screen bg-[#020617] text-slate-200 selection:bg-brand-500/30 font-sans relative overflow-x-hidden">
      {/* Fullscreen Prompt Modal */}
      <AnimatePresence>
        {showFullscreenPrompt && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm"
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0, y: 20 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.9, opacity: 0, y: 20 }}
              className="relative w-full max-w-md bg-[#0f172a] border border-white/10 rounded-3xl shadow-2xl overflow-hidden"
            >
              {/* Glow effect */}
              <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-32 bg-brand-500/20 blur-[50px] pointer-events-none" />
              
              <div className="relative p-8 text-center">
                <div className="w-16 h-16 mx-auto mb-6 rounded-2xl bg-gradient-to-br from-brand-400/20 to-blue-600/20 border border-brand-500/30 flex items-center justify-center text-brand-400 shadow-[0_0_15px_rgba(56,189,248,0.2)]">
                  <Maximize className="w-8 h-8" />
                </div>
                
                <h3 className="text-2xl font-display font-bold text-white mb-3">
                  Experiencia Inmersiva
                </h3>
                <p className="text-slate-400 mb-8 leading-relaxed">
                  Para disfrutar de la mejor experiencia visual, te recomendamos ver este portafolio en pantalla completa.
                </p>
                
                <div className="flex flex-col gap-3">
                  <button
                    onClick={handleAcceptFullscreen}
                    className="w-full py-3.5 px-6 rounded-xl bg-gradient-to-r from-brand-500 to-blue-600 text-white font-medium hover:scale-[1.02] transition-transform shadow-[0_0_20px_rgba(56,189,248,0.3)]"
                  >
                    Sí, pantalla completa
                  </button>
                  <button
                    onClick={handleDeclineFullscreen}
                    className="w-full py-3.5 px-6 rounded-xl bg-white/5 text-slate-300 font-medium hover:bg-white/10 transition-colors"
                  >
                    No, gracias
                  </button>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Background Effects */}
      <div className="absolute inset-0 bg-grid-pattern opacity-[0.15] pointer-events-none" />
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[500px] opacity-20 pointer-events-none">
        <div className="absolute inset-0 bg-gradient-to-b from-brand-500/40 to-transparent blur-3xl rounded-full" />
      </div>

      {/* Navigation */}
      <motion.nav 
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6, type: "spring", stiffness: 70 }}
        className="fixed top-0 left-0 right-0 w-full z-50 border-b border-white/10 bg-[#020617]/80 backdrop-blur-xl shadow-[0_4px_30px_rgba(0,0,0,0.3)]"
      >
        <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
          <div className="font-display font-bold text-xl tracking-tight flex items-center gap-3 group cursor-pointer">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-brand-400 to-blue-600 flex items-center justify-center text-white shadow-[0_0_15px_rgba(56,189,248,0.4)] group-hover:shadow-[0_0_25px_rgba(56,189,248,0.6)] transition-all duration-300">
              JC
            </div>
            <span className="text-white group-hover:text-brand-300 transition-colors duration-300">Jordan Chacón Villacís</span>
          </div>
          <div className="hidden md:flex items-center gap-4">
            <a href="#servicios" className="flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium text-slate-300 hover:text-white hover:bg-white/5 transition-all duration-300 group">
              <Layers className="w-4 h-4 text-slate-400 group-hover:text-brand-400 transition-colors" />
              <span>Servicios</span>
            </a>
            <a href="#tecnologias" className="flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium text-slate-300 hover:text-white hover:bg-white/5 transition-all duration-300 group">
              <Cpu className="w-4 h-4 text-slate-400 group-hover:text-blue-400 transition-colors" />
              <span>Tecnologías</span>
            </a>
            <a href="#contacto" className="flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium text-slate-300 hover:text-white hover:bg-white/5 transition-all duration-300 group">
              <MessageSquare className="w-4 h-4 text-slate-400 group-hover:text-purple-400 transition-colors" />
              <span>Contacto</span>
            </a>
          </div>
          <div className="hidden md:flex items-center gap-4">
            <button 
              onClick={toggleFullScreen}
              className="p-2 text-slate-300 hover:text-white hover:bg-white/5 rounded-full transition-colors"
              aria-label="Toggle Fullscreen"
              title="Pantalla Completa"
            >
              {isFullscreen ? <Minimize className="w-5 h-5" /> : <Maximize className="w-5 h-5" />}
            </button>
            <a href="#contacto" className="hidden md:inline-flex items-center justify-center px-6 py-2.5 text-sm font-medium text-white bg-gradient-to-r from-brand-500 to-blue-600 rounded-full hover:scale-105 transition-all duration-300 shadow-[0_0_20px_rgba(56,189,248,0.3)] hover:shadow-[0_0_30px_rgba(56,189,248,0.5)] border border-white/10 group">
              Hablemos <ChevronRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" />
            </a>
          </div>
          
          {/* Mobile Menu Toggle */}
          <div className="md:hidden flex items-center gap-2">
            <button 
              onClick={toggleFullScreen}
              className="p-2 text-slate-300 hover:text-white transition-colors"
              aria-label="Toggle Fullscreen"
            >
              {isFullscreen ? <Minimize className="w-5 h-5" /> : <Maximize className="w-5 h-5" />}
            </button>
            <button 
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="p-2 text-slate-300 hover:text-white transition-colors"
            >
              {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Menu Dropdown */}
        <AnimatePresence>
          {isMobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              className="md:hidden bg-[#020617]/95 backdrop-blur-xl border-b border-white/10 overflow-hidden"
            >
              <div className="px-6 py-4 flex flex-col gap-4">
                <a 
                  href="#servicios" 
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="flex items-center gap-3 px-4 py-3 rounded-xl text-base font-medium text-slate-300 hover:text-white hover:bg-white/5 transition-all duration-300"
                >
                  <Layers className="w-5 h-5 text-brand-400" />
                  Servicios
                </a>
                <a 
                  href="#tecnologias" 
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="flex items-center gap-3 px-4 py-3 rounded-xl text-base font-medium text-slate-300 hover:text-white hover:bg-white/5 transition-all duration-300"
                >
                  <Cpu className="w-5 h-5 text-blue-400" />
                  Tecnologías
                </a>
                <a 
                  href="#contacto" 
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="flex items-center gap-3 px-4 py-3 rounded-xl text-base font-medium text-slate-300 hover:text-white hover:bg-white/5 transition-all duration-300"
                >
                  <MessageSquare className="w-5 h-5 text-purple-400" />
                  Contacto
                </a>
                <a 
                  href="#contacto" 
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="flex items-center justify-center w-full px-6 py-3 mt-2 text-base font-medium text-white bg-gradient-to-r from-brand-500 to-blue-600 rounded-xl shadow-[0_0_20px_rgba(56,189,248,0.3)]"
                >
                  Hablemos
                </a>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.nav>

      <main className="relative z-10">
        {/* Hero Section */}
        <section className="pt-20 pb-12 md:pt-32 md:pb-20 px-6">
          <div className="max-w-7xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div className="text-center lg:text-left order-2 lg:order-1 relative z-10">
                <motion.div 
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5 }}
                  className="inline-flex items-center gap-3 px-4 py-2 rounded-full bg-white/[0.03] border border-white/[0.08] backdrop-blur-md mb-8 shadow-lg"
                >
                  <span className="relative flex h-2.5 w-2.5">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-brand-400 opacity-75"></span>
                    <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-brand-500 shadow-[0_0_8px_rgba(56,189,248,0.8)]"></span>
                  </span>
                  <span className="text-sm font-medium text-slate-300 tracking-wide">Disponible para nuevos proyectos tecnológicos</span>
                </motion.div>
                
                <motion.h1 
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.1 }}
                  className="text-4xl md:text-5xl lg:text-6xl font-display font-bold tracking-tight text-white mb-6 leading-[1.1]"
                >
                  Ingeniero de Sistemas <br className="hidden md:block" />
                  <span className="text-3xl md:text-4xl lg:text-5xl text-transparent bg-clip-text bg-gradient-to-r from-brand-400 via-blue-500 to-purple-500 drop-shadow-sm mt-2 inline-block">
                    Soluciones Tecnológicas
                  </span>
                </motion.h1>
                
                <motion.p 
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.2 }}
                  className="text-lg md:text-xl text-slate-400 mb-10 max-w-2xl mx-auto lg:mx-0 leading-relaxed font-light"
                >
                  Desarrollo software a medida, automatizo procesos empresariales y optimizo la infraestructura tecnológica para impulsar la eficiencia y el crecimiento de tu negocio.
                </motion.p>
                
                <motion.div 
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.3 }}
                  className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-5"
                >
                  <a href="#servicios" className="group relative w-full sm:w-auto px-8 py-4 rounded-full bg-white text-black font-semibold hover:scale-105 transition-all duration-300 flex items-center justify-center gap-2 shadow-[0_0_40px_rgba(255,255,255,0.15)] hover:shadow-[0_0_60px_rgba(255,255,255,0.25)] overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-r from-brand-400/10 to-blue-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    <span className="relative z-10">Explorar Servicios</span>
                    <ChevronRight className="w-5 h-5 relative z-10 group-hover:translate-x-1 transition-transform duration-300" />
                  </a>
                  <a href="#contacto" className="w-full sm:w-auto px-8 py-4 rounded-full bg-white/[0.03] border border-white/[0.1] text-white font-medium hover:bg-white/[0.08] hover:border-white/[0.2] transition-all duration-300 flex items-center justify-center gap-2 backdrop-blur-sm">
                    Solicitar Asesoría
                  </a>
                </motion.div>

                {/* Trust / Stats row */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.4 }}
                  className="mt-12 pt-8 border-t border-white/10 flex flex-wrap items-center justify-center lg:justify-start gap-8"
                >
                  <div>
                    <p className="text-3xl font-display font-bold text-white mb-1">+5</p>
                    <p className="text-sm text-slate-400 font-medium">Años de Experiencia</p>
                  </div>
                  <div className="w-px h-10 bg-white/10 hidden sm:block" />
                  <div>
                    <p className="text-3xl font-display font-bold text-white mb-1">+50</p>
                    <p className="text-sm text-slate-400 font-medium">Proyectos Exitosos</p>
                  </div>
                  <div className="w-px h-10 bg-white/10 hidden sm:block" />
                  <div>
                    <p className="text-3xl font-display font-bold text-white mb-1">100%</p>
                    <p className="text-sm text-slate-400 font-medium">Compromiso</p>
                  </div>
                </motion.div>
              </div>

              <motion.div 
                initial={{ opacity: 0, scale: 0.9, filter: "blur(10px)" }}
                animate={{ opacity: 1, scale: 1, filter: "blur(0px)" }}
                transition={{ duration: 0.7, delay: 0.2 }}
                className="relative mx-auto w-full max-w-[280px] sm:max-w-[320px] lg:max-w-[380px] order-1 lg:order-2 mt-12 lg:mt-0 mb-16 lg:mb-0 flex items-center justify-center"
              >
                {/* Floating Tech Icons */}
                <motion.div 
                  animate={{ y: [0, -15, 0], x: [0, 10, 0], rotate: [0, 5, 0] }}
                  transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                  className="absolute -top-6 -left-6 z-30 w-16 h-16 rounded-2xl bg-slate-900/80 backdrop-blur-md border border-brand-500/30 flex items-center justify-center shadow-[0_0_30px_rgba(56,189,248,0.3)]"
                >
                  <Code2 className="w-8 h-8 text-brand-400" />
                </motion.div>
                
                <motion.div 
                  animate={{ y: [0, 20, 0], x: [0, -10, 0], rotate: [0, -10, 0] }}
                  transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                  className="absolute top-1/4 -right-8 z-30 w-14 h-14 rounded-2xl bg-slate-900/80 backdrop-blur-md border border-purple-500/30 flex items-center justify-center shadow-[0_0_30px_rgba(168,85,247,0.3)]"
                >
                  <Database className="w-7 h-7 text-purple-400" />
                </motion.div>
                
                <motion.div 
                  animate={{ y: [0, -20, 0], rotate: [0, 8, 0] }}
                  transition={{ duration: 4.5, repeat: Infinity, ease: "easeInOut", delay: 2 }}
                  className="absolute -bottom-4 left-1/4 z-30 w-12 h-12 rounded-xl bg-slate-900/80 backdrop-blur-md border border-emerald-500/30 flex items-center justify-center shadow-[0_0_30px_rgba(16,185,129,0.3)]"
                >
                  <Terminal className="w-6 h-6 text-emerald-400" />
                </motion.div>

                <motion.div 
                  animate={{ y: [0, 15, 0], x: [0, 15, 0], rotate: [0, -15, 0] }}
                  transition={{ duration: 6, repeat: Infinity, ease: "easeInOut", delay: 1.5 }}
                  className="absolute -bottom-8 -right-4 z-30 w-16 h-16 rounded-2xl bg-slate-900/80 backdrop-blur-md border border-blue-500/30 flex items-center justify-center shadow-[0_0_30px_rgba(59,130,246,0.3)]"
                >
                  <Cpu className="w-8 h-8 text-blue-400" />
                </motion.div>

                <motion.div 
                  animate={{ y: [0, -10, 0], x: [0, -15, 0], rotate: [0, 10, 0] }}
                  transition={{ duration: 5.5, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
                  className="absolute top-1/2 -left-10 z-30 w-12 h-12 rounded-xl bg-slate-900/80 backdrop-blur-md border border-pink-500/30 flex items-center justify-center shadow-[0_0_30px_rgba(236,72,153,0.3)]"
                >
                  <Server className="w-6 h-6 text-pink-400" />
                </motion.div>

                {/* New Icons: Security, IT Support, Networking, Hardware */}
                <motion.div 
                  animate={{ y: [0, -12, 0], x: [0, 8, 0], rotate: [0, -5, 0] }}
                  transition={{ duration: 4.8, repeat: Infinity, ease: "easeInOut", delay: 0.8 }}
                  className="absolute -top-10 right-10 z-30 w-12 h-12 rounded-xl bg-slate-900/80 backdrop-blur-md border border-red-500/30 flex items-center justify-center shadow-[0_0_30px_rgba(239,68,68,0.3)]"
                >
                  <ShieldCheck className="w-6 h-6 text-red-400" />
                </motion.div>

                <motion.div 
                  animate={{ y: [0, 18, 0], x: [0, -8, 0], rotate: [0, 12, 0] }}
                  transition={{ duration: 5.2, repeat: Infinity, ease: "easeInOut", delay: 1.2 }}
                  className="absolute top-1/3 -left-12 z-30 w-10 h-10 rounded-lg bg-slate-900/80 backdrop-blur-md border border-orange-500/30 flex items-center justify-center shadow-[0_0_30px_rgba(249,115,22,0.3)]"
                >
                  <Wrench className="w-5 h-5 text-orange-400" />
                </motion.div>

                <motion.div 
                  animate={{ y: [0, -15, 0], x: [0, 12, 0], rotate: [0, -8, 0] }}
                  transition={{ duration: 4.2, repeat: Infinity, ease: "easeInOut", delay: 2.5 }}
                  className="absolute bottom-1/4 -right-12 z-30 w-10 h-10 rounded-lg bg-slate-900/80 backdrop-blur-md border border-cyan-500/30 flex items-center justify-center shadow-[0_0_30px_rgba(6,182,212,0.3)]"
                >
                  <Wifi className="w-5 h-5 text-cyan-400" />
                </motion.div>

                <motion.div 
                  animate={{ y: [0, 10, 0], x: [0, -10, 0], rotate: [0, 15, 0] }}
                  transition={{ duration: 5.8, repeat: Infinity, ease: "easeInOut", delay: 0.3 }}
                  className="absolute -bottom-2 left-4 z-30 w-10 h-10 rounded-lg bg-slate-900/80 backdrop-blur-md border border-indigo-500/30 flex items-center justify-center shadow-[0_0_30px_rgba(99,102,241,0.3)]"
                >
                  <HardDrive className="w-5 h-5 text-indigo-400" />
                </motion.div>

                <motion.div 
                  animate={{ y: [0, -8, 0], x: [0, 15, 0], rotate: [0, -10, 0] }}
                  transition={{ duration: 4.6, repeat: Infinity, ease: "easeInOut", delay: 1.8 }}
                  className="absolute top-10 -right-4 z-30 w-10 h-10 rounded-lg bg-slate-900/80 backdrop-blur-md border border-yellow-500/30 flex items-center justify-center shadow-[0_0_30px_rgba(234,179,8,0.3)]"
                >
                  <Monitor className="w-5 h-5 text-yellow-400" />
                </motion.div>

                {/* Main Image Container - Premium Tech Style */}
                <div className="relative w-full aspect-[4/5] z-10 group">
                  {/* High-tech border frame */}
                  <div className="absolute inset-0 rounded-[2rem] bg-slate-900/80 backdrop-blur-xl overflow-hidden shadow-2xl transition-all duration-500 group-hover:shadow-[0_0_50px_rgba(56,189,248,0.2)]">
                    
                    {/* Animated Code Background */}
                    <div className="absolute inset-0 opacity-20 font-mono text-[8px] sm:text-[10px] leading-tight text-brand-400 overflow-hidden z-0 select-none pointer-events-none flex flex-col">
                      <motion.div 
                        animate={{ y: ["0%", "-50%"] }} 
                        transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                        className="flex flex-col"
                      >
                        <div className="p-4 whitespace-pre">
                          {`function initSystem() {
  const core = new QuantumProcessor();
  core.connect(globalNetwork);
  return core.status === 'ONLINE';
}

class SecurityProtocol {
  constructor(level) {
    this.level = level;
    this.encryption = 'AES-256-GCM';
  }
  
  async verify(token) {
    const isValid = await crypto.verify(token);
    if (!isValid) throw new Error('Access Denied');
    return true;
  }
}

// Initializing neural network...
const nn = new NeuralNet({ layers: [128, 64, 32] });
nn.train(dataset).then(() => {
  console.log('Model ready');
});

export const systemConfig = {
  maxConnections: 10000,
  timeout: 5000,
  retryAttempts: 3
};

function initSystem() {
  const core = new QuantumProcessor();
  core.connect(globalNetwork);
  return core.status === 'ONLINE';
}`}
                        </div>
                        <div className="p-4 whitespace-pre">
                          {`function initSystem() {
  const core = new QuantumProcessor();
  core.connect(globalNetwork);
  return core.status === 'ONLINE';
}

class SecurityProtocol {
  constructor(level) {
    this.level = level;
    this.encryption = 'AES-256-GCM';
  }
  
  async verify(token) {
    const isValid = await crypto.verify(token);
    if (!isValid) throw new Error('Access Denied');
    return true;
  }
}

// Initializing neural network...
const nn = new NeuralNet({ layers: [128, 64, 32] });
nn.train(dataset).then(() => {
  console.log('Model ready');
});

export const systemConfig = {
  maxConnections: 10000,
  timeout: 5000,
  retryAttempts: 3
};

function initSystem() {
  const core = new QuantumProcessor();
  core.connect(globalNetwork);
  return core.status === 'ONLINE';
}`}
                        </div>
                      </motion.div>
                    </div>

                    {/* Inner glow and gradient overlay */}
                    <div className="absolute inset-0 bg-gradient-to-tr from-brand-500/20 via-transparent to-purple-500/20 z-10 mix-blend-overlay" />
                    <div className="absolute bottom-0 left-0 right-0 h-2/3 bg-gradient-to-t from-[#020617] via-[#020617]/50 to-transparent z-10" />
                    
                    {/* The Image */}
                    <img 
                      src="https://lh3.googleusercontent.com/d/1dCuj8NXePGuVdhg4Cf4b8z-bDPNVZB3L"
                      alt="Jordan Chacón Villacis"
                      className="w-full h-full object-cover object-center relative z-0 contrast-125 saturate-110 brightness-105 transition-transform duration-700 group-hover:scale-105"
                      referrerPolicy="no-referrer"
                    />
                    
                    {/* Tech grid overlay */}
                    <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 mix-blend-overlay z-10" />
                    <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.05)_1px,transparent_1px)] bg-[size:20px_20px] z-10 opacity-30" />
                    
                    {/* Scanning line animation */}
                    <motion.div 
                      animate={{ y: ['-10%', '110%'] }}
                      transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
                      className="absolute top-0 left-0 right-0 h-1 bg-brand-400/50 shadow-[0_0_20px_rgba(56,189,248,0.8)] z-20"
                    />
                  </div>
                </div>
                
                {/* Decorative background glows */}
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[130%] h-[130%] bg-gradient-to-tr from-brand-500/30 via-blue-500/20 to-purple-500/30 blur-[80px] -z-10 rounded-full animate-pulse" />
              </motion.div>
            </div>
          </div>
        </section>

        {/* Services Section - Premium Design */}
        <section id="servicios" className="py-16 md:py-32 px-6 relative">
          {/* Background decoration for the section */}
          <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
            <div className="absolute top-[20%] left-[-10%] w-[500px] h-[500px] rounded-full bg-brand-500/5 blur-[120px]" />
            <div className="absolute bottom-[20%] right-[-10%] w-[500px] h-[500px] rounded-full bg-purple-500/5 blur-[120px]" />
          </div>

          <div className="max-w-7xl mx-auto relative z-10">
            <div className="mb-20 md:text-center">
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 text-slate-300 text-sm font-medium mb-6"
              >
                <Cpu className="w-4 h-4 text-brand-400" />
                <span>Mis Especialidades</span>
              </motion.div>
              <motion.h2 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 }}
                className="text-4xl md:text-5xl lg:text-6xl font-display font-bold text-white mb-6"
              >
                Áreas de <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-400 to-blue-600">Especialidad</span>
              </motion.h2>
              <motion.p 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
                className="text-lg text-slate-400 max-w-2xl mx-auto"
              >
                Servicios especializados en desarrollo de software, automatización de procesos y gestión de soluciones tecnológicas.
              </motion.p>
            </div>
            
            <div className="grid md:grid-cols-2 gap-6 lg:gap-8">
              {services.map((service, index) => (
                <motion.div 
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className={`group relative p-8 md:p-10 rounded-[2rem] bg-[#0a0f1c] border border-white/5 overflow-hidden transition-all duration-500 ${service.border} ${service.glow}`}
                >
                  {/* Card Background Effects */}
                  <div className="absolute inset-0 bg-gradient-to-br from-white/[0.02] to-transparent z-0" />
                  <div className={`absolute -right-20 -top-20 w-64 h-64 rounded-full ${service.bg.replace('/10', '/20')} blur-[80px] group-hover:scale-150 transition-transform duration-700 z-0`} />
                  <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-10 mix-blend-overlay z-0" />
                  
                  {/* Tech Grid Pattern */}
                  <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:24px_24px] z-0" />

                  <div className="relative z-10 flex flex-col h-full">
                    <div className="flex items-start justify-between mb-8">
                      <div className={`w-16 h-16 rounded-2xl ${service.bg} ${service.color} flex items-center justify-center group-hover:scale-110 group-hover:rotate-3 transition-transform duration-500 border border-white/5 shadow-lg relative overflow-hidden`}>
                        <div className="absolute inset-0 bg-gradient-to-br from-white/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                        <service.icon className="w-8 h-8 relative z-10" />
                      </div>
                      <div className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-500 border border-white/5 translate-x-4 group-hover:translate-x-0">
                        <ChevronRight className={`w-5 h-5 ${service.color}`} />
                      </div>
                    </div>
                    
                    <h3 className="text-2xl font-display font-bold text-white mb-4 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-white group-hover:to-slate-300 transition-all">
                      {service.title}
                    </h3>
                    
                    <p className="text-slate-400 leading-relaxed mb-8 flex-grow">
                      {service.desc}
                    </p>

                    {/* Tech Pills */}
                    <div className="flex flex-wrap gap-2 mt-auto pt-6 border-t border-white/5 relative">
                      {service.techs.map((tech, i) => (
                        <span key={i} className="px-3 py-1.5 rounded-lg bg-white/5 text-slate-300 text-xs font-medium border border-white/5 group-hover:border-white/10 group-hover:bg-white/10 transition-colors duration-300">
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Tech Stack Section - Premium Design */}
        <section id="tecnologias" className="py-32 px-6 relative overflow-hidden border-y border-white/5">
          {/* Background Effects */}
          <div className="absolute inset-0 bg-[#020617] z-0" />
          <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 mix-blend-overlay z-0 pointer-events-none" />
          <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:32px_32px] z-0 opacity-50" />
          
          {/* Glowing Orbs */}
          <div className="absolute top-0 left-1/4 w-96 h-96 bg-brand-500/10 blur-[100px] rounded-full pointer-events-none z-0" />
          <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-purple-500/10 blur-[100px] rounded-full pointer-events-none z-0" />
          
          <div className="max-w-7xl mx-auto relative z-10 text-center">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 text-slate-300 text-sm font-medium mb-6"
            >
              <Code2 className="w-4 h-4 text-brand-400" />
              <span>Mi Arsenal Digital</span>
            </motion.div>
            
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-4xl md:text-5xl lg:text-6xl font-display font-bold text-white mb-6"
            >
              Stack <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-400 to-blue-600">Tecnológico</span>
            </motion.h2>
            
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="text-lg text-slate-400 max-w-2xl mx-auto mb-20"
            >
              Herramientas modernas y robustas que utilizo para construir soluciones escalables, seguras y de alto rendimiento.
            </motion.p>
            
            {/* Floating Tech Elements */}
            <div className="grid grid-cols-2 md:flex md:flex-wrap md:justify-center gap-4 md:gap-6 max-w-5xl mx-auto">
              {technologies.map((tech, index) => {
                // Generate pseudo-random floating animation values based on index
                const randomY = [0, -10 - (index % 3) * 5, 0];
                const randomDuration = 4 + (index % 4);
                const randomDelay = (index % 5) * 0.5;

                return (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, scale: 0.8, y: 20 }}
                    whileInView={{ opacity: 1, scale: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ 
                      duration: 0.5, 
                      delay: index * 0.05,
                      type: "spring",
                      stiffness: 100
                    }}
                    className="relative group w-full md:w-auto"
                  >
                    <motion.div
                      animate={{ y: randomY }}
                      transition={{ 
                        duration: randomDuration, 
                        repeat: Infinity, 
                        ease: "easeInOut",
                        delay: randomDelay
                      }}
                      className="flex items-center gap-3 px-4 py-3 md:px-6 md:py-4 rounded-2xl bg-white/[0.02] border border-white/[0.05] backdrop-blur-md hover:bg-white/[0.06] hover:border-brand-500/30 transition-all duration-300 cursor-default shadow-lg hover:shadow-[0_0_30px_rgba(56,189,248,0.15)] group-hover:-translate-y-1 w-full md:w-auto"
                    >
                      <div className="w-8 h-8 md:w-10 md:h-10 shrink-0 rounded-xl bg-white/5 flex items-center justify-center group-hover:scale-110 group-hover:rotate-6 transition-transform duration-300 border border-white/5 relative overflow-hidden">
                        <div className="absolute inset-0 bg-gradient-to-br from-white/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                        <img 
                          src={tech.logo} 
                          alt={`${tech.name} logo`} 
                          className="w-5 h-5 md:w-6 md:h-6 object-contain relative z-10 drop-shadow-md group-hover:drop-shadow-[0_0_8px_rgba(255,255,255,0.4)] transition-all" 
                          referrerPolicy="no-referrer"
                        />
                      </div>
                      <span className="font-display font-semibold text-slate-300 group-hover:text-white transition-colors text-sm md:text-lg tracking-wide truncate">{tech.name}</span>
                    </motion.div>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </section>

        {/* Contact Section - Premium Design */}
        <section id="contacto" className="py-32 px-6 relative overflow-hidden">
          {/* Background Effects */}
          <div className="absolute inset-0 bg-[#020617] z-0" />
          <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 mix-blend-overlay z-0 pointer-events-none" />
          
          {/* Glowing Orbs */}
          <div className="absolute top-1/2 left-0 -translate-y-1/2 w-96 h-96 bg-brand-500/10 blur-[120px] rounded-full pointer-events-none z-0" />
          <div className="absolute bottom-0 right-0 w-96 h-96 bg-blue-500/10 blur-[120px] rounded-full pointer-events-none z-0" />

          <div className="max-w-5xl mx-auto relative z-10">
            <div className="text-center mb-16">
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 text-slate-300 text-sm font-medium mb-6"
              >
                <Mail className="w-4 h-4 text-brand-400" />
                <span>Contacto</span>
              </motion.div>
              
              <motion.h2 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 }}
                className="text-4xl md:text-5xl lg:text-6xl font-display font-bold text-white mb-6"
              >
                ¿Listo para <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-400 to-blue-600">empezar?</span>
              </motion.h2>
              
              <motion.p 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
                className="text-lg text-slate-400 max-w-2xl mx-auto"
              >
                Hablemos sobre tu próximo proyecto. Estoy disponible para nuevas oportunidades y colaboraciones tecnológicas.
              </motion.p>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              {/* Phone Card */}
              <motion.a 
                href="tel:+51956606972"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3 }}
                className="group relative p-8 rounded-[2rem] bg-white/[0.02] border border-white/[0.05] hover:bg-white/[0.04] hover:border-brand-500/30 transition-all duration-500 overflow-hidden"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-brand-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <div className="relative z-10 flex items-center justify-between gap-2">
                  <div className="flex items-center gap-4 sm:gap-6 min-w-0">
                    <div className="w-12 h-12 sm:w-14 sm:h-14 shrink-0 rounded-2xl bg-brand-500/10 text-brand-400 flex items-center justify-center group-hover:scale-110 group-hover:rotate-3 transition-transform duration-500 border border-brand-500/20 shadow-[0_0_30px_rgba(56,189,248,0.1)]">
                      <Phone className="w-5 h-5 sm:w-6 sm:h-6" />
                    </div>
                    <div className="min-w-0">
                      <p className="text-xs sm:text-sm text-slate-400 font-medium mb-1">Llamada Directa</p>
                      <p className="text-lg sm:text-xl font-display font-semibold text-white group-hover:text-brand-300 transition-colors truncate">956 606 972</p>
                    </div>
                  </div>
                  <div className="w-8 h-8 sm:w-10 sm:h-10 shrink-0 rounded-full bg-white/5 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-500 border border-white/10 translate-x-4 group-hover:translate-x-0">
                    <ChevronRight className="w-4 h-4 sm:w-5 sm:h-5 text-brand-400" />
                  </div>
                </div>
              </motion.a>

              {/* Email Card */}
              <motion.a 
                href="mailto:jchaconvillacis@gmail.com"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.4 }}
                className="group relative p-8 rounded-[2rem] bg-white/[0.02] border border-white/[0.05] hover:bg-white/[0.04] hover:border-blue-500/30 transition-all duration-500 overflow-hidden"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <div className="relative z-10 flex items-center justify-between gap-2">
                  <div className="flex items-center gap-4 sm:gap-6 min-w-0">
                    <div className="w-12 h-12 sm:w-14 sm:h-14 shrink-0 rounded-2xl bg-blue-500/10 text-blue-400 flex items-center justify-center group-hover:scale-110 group-hover:-rotate-3 transition-transform duration-500 border border-blue-500/20 shadow-[0_0_30px_rgba(59,130,246,0.1)]">
                      <Mail className="w-5 h-5 sm:w-6 sm:h-6" />
                    </div>
                    <div className="min-w-0">
                      <p className="text-xs sm:text-sm text-slate-400 font-medium mb-1">Correo Electrónico</p>
                      <p className="text-base sm:text-xl font-display font-semibold text-white group-hover:text-blue-300 transition-colors truncate">jchaconvillacis@gmail.com</p>
                    </div>
                  </div>
                  <div className="w-8 h-8 sm:w-10 sm:h-10 shrink-0 rounded-full bg-white/5 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-500 border border-white/10 translate-x-4 group-hover:translate-x-0">
                    <ChevronRight className="w-4 h-4 sm:w-5 sm:h-5 text-blue-400" />
                  </div>
                </div>
              </motion.a>

              {/* TikTok Card */}
              <motion.a 
                href="https://tiktok.com/@jordanduk" 
                target="_blank" 
                rel="noreferrer"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.5 }}
                className="group relative p-8 rounded-[2rem] bg-white/[0.02] border border-white/[0.05] hover:bg-white/[0.04] hover:border-pink-500/30 transition-all duration-500 overflow-hidden"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-pink-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <div className="relative z-10 flex items-center justify-between gap-2">
                  <div className="flex items-center gap-4 sm:gap-6 min-w-0">
                    <div className="w-12 h-12 sm:w-14 sm:h-14 shrink-0 rounded-2xl bg-pink-500/10 text-pink-400 flex items-center justify-center group-hover:scale-110 group-hover:rotate-3 transition-transform duration-500 border border-pink-500/20 shadow-[0_0_30px_rgba(236,72,153,0.1)]">
                      <TiktokIcon className="w-5 h-5 sm:w-6 sm:h-6" />
                    </div>
                    <div className="min-w-0">
                      <p className="text-xs sm:text-sm text-slate-400 font-medium mb-1">TikTok</p>
                      <p className="text-lg sm:text-xl font-display font-semibold text-white group-hover:text-pink-300 transition-colors truncate">@jordanduk</p>
                    </div>
                  </div>
                  <div className="w-8 h-8 sm:w-10 sm:h-10 shrink-0 rounded-full bg-white/5 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-500 border border-white/10 translate-x-4 group-hover:translate-x-0">
                    <ChevronRight className="w-4 h-4 sm:w-5 sm:h-5 text-pink-400" />
                  </div>
                </div>
              </motion.a>

              {/* Facebook Card */}
              <motion.a 
                href="https://facebook.com/owoweb" 
                target="_blank" 
                rel="noreferrer"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.6 }}
                className="group relative p-8 rounded-[2rem] bg-white/[0.02] border border-white/[0.05] hover:bg-white/[0.04] hover:border-indigo-500/30 transition-all duration-500 overflow-hidden"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-indigo-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <div className="relative z-10 flex items-center justify-between gap-2">
                  <div className="flex items-center gap-4 sm:gap-6 min-w-0">
                    <div className="w-12 h-12 sm:w-14 sm:h-14 shrink-0 rounded-2xl bg-indigo-500/10 text-indigo-400 flex items-center justify-center group-hover:scale-110 group-hover:-rotate-3 transition-transform duration-500 border border-indigo-500/20 shadow-[0_0_30px_rgba(99,102,241,0.1)]">
                      <Facebook className="w-5 h-5 sm:w-6 sm:h-6" />
                    </div>
                    <div className="min-w-0">
                      <p className="text-xs sm:text-sm text-slate-400 font-medium mb-1">Facebook</p>
                      <p className="text-lg sm:text-xl font-display font-semibold text-white group-hover:text-indigo-300 transition-colors truncate">owoweb</p>
                    </div>
                  </div>
                  <div className="w-8 h-8 sm:w-10 sm:h-10 shrink-0 rounded-full bg-white/5 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-500 border border-white/10 translate-x-4 group-hover:translate-x-0">
                    <ChevronRight className="w-4 h-4 sm:w-5 sm:h-5 text-indigo-400" />
                  </div>
                </div>
              </motion.a>

              {/* LinkedIn Card */}
              <motion.a 
                href="https://www.linkedin.com/in/jordan-chac%C3%B3n-villac%C3%ADs-0150b63b3/" 
                target="_blank" 
                rel="noreferrer"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.7 }}
                className="group relative p-8 rounded-[2rem] bg-white/[0.02] border border-white/[0.05] hover:bg-white/[0.04] hover:border-sky-500/30 transition-all duration-500 overflow-hidden"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-sky-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <div className="relative z-10 flex items-center justify-between gap-2">
                  <div className="flex items-center gap-4 sm:gap-6 min-w-0">
                    <div className="w-12 h-12 sm:w-14 sm:h-14 shrink-0 rounded-2xl bg-sky-500/10 text-sky-400 flex items-center justify-center group-hover:scale-110 group-hover:rotate-3 transition-transform duration-500 border border-sky-500/20 shadow-[0_0_30px_rgba(14,165,233,0.1)]">
                      <Linkedin className="w-5 h-5 sm:w-6 sm:h-6" />
                    </div>
                    <div className="min-w-0">
                      <p className="text-xs sm:text-sm text-slate-400 font-medium mb-1">LinkedIn</p>
                      <p className="text-lg sm:text-xl font-display font-semibold text-white group-hover:text-sky-300 transition-colors truncate">Jordan Chacón</p>
                    </div>
                  </div>
                  <div className="w-8 h-8 sm:w-10 sm:h-10 shrink-0 rounded-full bg-white/5 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-500 border border-white/10 translate-x-4 group-hover:translate-x-0">
                    <ChevronRight className="w-4 h-4 sm:w-5 sm:h-5 text-sky-400" />
                  </div>
                </div>
              </motion.a>

              {/* YouTube Card */}
              <motion.a 
                href="https://www.youtube.com/@Jchaconvillacis" 
                target="_blank" 
                rel="noreferrer"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.8 }}
                className="group relative p-8 rounded-[2rem] bg-white/[0.02] border border-white/[0.05] hover:bg-white/[0.04] hover:border-red-500/30 transition-all duration-500 overflow-hidden"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-red-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <div className="relative z-10 flex items-center justify-between gap-2">
                  <div className="flex items-center gap-4 sm:gap-6 min-w-0">
                    <div className="w-12 h-12 sm:w-14 sm:h-14 shrink-0 rounded-2xl bg-red-500/10 text-red-400 flex items-center justify-center group-hover:scale-110 group-hover:-rotate-3 transition-transform duration-500 border border-red-500/20 shadow-[0_0_30px_rgba(239,68,68,0.1)]">
                      <Youtube className="w-5 h-5 sm:w-6 sm:h-6" />
                    </div>
                    <div className="min-w-0">
                      <p className="text-xs sm:text-sm text-slate-400 font-medium mb-1">YouTube</p>
                      <p className="text-lg sm:text-xl font-display font-semibold text-white group-hover:text-red-300 transition-colors truncate">@Jchaconvillacis</p>
                    </div>
                  </div>
                  <div className="w-8 h-8 sm:w-10 sm:h-10 shrink-0 rounded-full bg-white/5 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-500 border border-white/10 translate-x-4 group-hover:translate-x-0">
                    <ChevronRight className="w-4 h-4 sm:w-5 sm:h-5 text-red-400" />
                  </div>
                </div>
              </motion.a>
            </div>
          </div>
        </section>
      </main>

      {/* Floating Scroll to Top Button */}
      <motion.button
        initial={{ opacity: 0, scale: 0 }}
        animate={showButton ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0 }}
        className="fixed bottom-6 right-6 z-[100] p-4 rounded-full bg-brand-500 text-white shadow-xl hover:scale-110 transition-transform"
        onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        aria-label="Volver arriba"
      >
        <ArrowUp className="w-6 h-6" />
      </motion.button>

      {/* Footer */}
      <footer className="relative border-t border-white/10 bg-[#020617] pt-16 pb-8 overflow-hidden">
        {/* Top Gradient Line */}
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-brand-500/50 to-transparent" />
        
        {/* Background Glow */}
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[500px] h-[200px] bg-brand-500/5 blur-[100px] rounded-full pointer-events-none" />

        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="flex flex-col md:flex-row items-center justify-between gap-8 mb-12">
            {/* Brand */}
            <div className="flex items-center gap-4 group cursor-pointer">
              <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-brand-400 to-blue-600 flex items-center justify-center text-white font-display font-bold text-xl shadow-[0_0_20px_rgba(56,189,248,0.3)] group-hover:scale-110 transition-transform duration-300">
                JC
              </div>
              <div>
                <h3 className="text-white font-display font-bold text-xl tracking-wide group-hover:text-brand-300 transition-colors">Jordan Chacón</h3>
                <p className="text-slate-400 text-sm">Ingeniero de Sistemas</p>
              </div>
            </div>

            {/* Social Links */}
            <div className="flex items-center gap-4 flex-wrap justify-center md:justify-end">
              <a href="https://www.linkedin.com/in/jordan-chac%C3%B3n-villac%C3%ADs-0150b63b3/" target="_blank" rel="noreferrer" className="w-12 h-12 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-slate-400 hover:bg-sky-500/20 hover:text-sky-400 hover:border-sky-500/30 hover:scale-110 transition-all duration-300 shadow-lg hover:shadow-[0_0_20px_rgba(14,165,233,0.2)]">
                <Linkedin className="w-5 h-5" />
              </a>
              <a href="https://www.youtube.com/@Jchaconvillacis" target="_blank" rel="noreferrer" className="w-12 h-12 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-slate-400 hover:bg-red-500/20 hover:text-red-400 hover:border-red-500/30 hover:scale-110 transition-all duration-300 shadow-lg hover:shadow-[0_0_20px_rgba(239,68,68,0.2)]">
                <Youtube className="w-5 h-5" />
              </a>
              <a href="https://tiktok.com/@jordanduk" target="_blank" rel="noreferrer" className="w-12 h-12 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-slate-400 hover:bg-pink-500/20 hover:text-pink-400 hover:border-pink-500/30 hover:scale-110 transition-all duration-300 shadow-lg hover:shadow-[0_0_20px_rgba(236,72,153,0.2)]">
                <TiktokIcon className="w-5 h-5" />
              </a>
              <a href="https://facebook.com/owoweb" target="_blank" rel="noreferrer" className="w-12 h-12 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-slate-400 hover:bg-indigo-500/20 hover:text-indigo-400 hover:border-indigo-500/30 hover:scale-110 transition-all duration-300 shadow-lg hover:shadow-[0_0_20px_rgba(99,102,241,0.2)]">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="mailto:jchaconvillacis@gmail.com" className="w-12 h-12 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-slate-400 hover:bg-blue-500/20 hover:text-blue-400 hover:border-blue-500/30 hover:scale-110 transition-all duration-300 shadow-lg hover:shadow-[0_0_20px_rgba(59,130,246,0.2)]">
                <Mail className="w-5 h-5" />
              </a>
            </div>
          </div>

          <div className="flex flex-col md:flex-row items-center justify-between pt-8 border-t border-white/5 text-sm text-slate-500">
            <p>© {new Date().getFullYear()} Jordan Chacón Villacis. Todos los derechos reservados.</p>
            <div className="flex items-center gap-6 mt-4 md:mt-0">
              <a href="#servicios" className="hover:text-brand-400 transition-colors">Servicios</a>
              <a href="#tecnologias" className="hover:text-brand-400 transition-colors">Tecnologías</a>
              <a href="#contacto" className="hover:text-brand-400 transition-colors">Contacto</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

import React, { useState, useEffect, useRef } from 'react';
import { motion } from 'motion/react';
import { Menu, X, ArrowUp, ArrowRight, Check } from 'lucide-react';
import { KgLogo } from './components/KgLogo';
import { CeoPortrait } from './components/CeoPortrait';
import {
  ElectricalInstallIcon,
  ElectricalProjectIcon,
  MaintenanceIcon,
  AdminPresentationIcon,
  PhoneIcon,
  LocationPinIcon,
  InstagramIcon,
  FacebookIcon,
  WhatsAppIcon,
} from './components/ServiceIcons';

const PHONE_DISPLAY = '878 468 124';
const PHONE_LINK = 'tel:+258878468124';
const WHATSAPP_NUMBER = '258878468124';
const WHATSAPP_GENERAL_URL = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(
  'Olá KG Services, quero um orçamento.'
)}`;
const INSTAGRAM_URL = 'https://instagram.com/KGServices';
const FACEBOOK_URL = 'https://facebook.com/KGServices';

interface ServiceItem {
  id: string;
  title: string;
  icon: React.ReactNode;
  whatsappUrl: string;
}

const SERVICES: ServiceItem[] = [
  {
    id: 'instalacoes',
    title: 'Instalações Elétricas',
    icon: <ElectricalInstallIcon className="h-7 w-7" />,
    whatsappUrl: `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(
      'Olá KG Services, gostaria de solicitar um orçamento para Instalações Elétricas.'
    )}`,
  },
  {
    id: 'projetos',
    title: 'Projetos Elétricos',
    icon: <ElectricalProjectIcon className="h-7 w-7" />,
    whatsappUrl: `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(
      'Olá KG Services, gostaria de solicitar informações sobre Projetos Elétricos.'
    )}`,
  },
  {
    id: 'manutencao',
    title: 'Manutenção & Assistência Técnica',
    icon: <MaintenanceIcon className="h-7 w-7" />,
    whatsappUrl: `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(
      'Olá KG Services, preciso de Manutenção & Assistência Técnica.'
    )}`,
  },
  {
    id: 'administrativos',
    title: 'Serviços Administrativos & Apresentações',
    icon: <AdminPresentationIcon className="h-7 w-7" />,
    whatsappUrl: `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(
      'Olá KG Services, gostaria de solicitar Serviços Administrativos & Apresentações.'
    )}`,
  },
];

const NAV_LINKS = [
  { label: 'Início', href: '#inicio' },
  { label: 'Serviços', href: '#servicos' },
  { label: 'Sobre', href: '#sobre' },
  { label: 'Contacto', href: '#contacto' },
];

export default function App() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [formName, setFormName] = useState('');
  const [formMessage, setFormMessage] = useState('');
  const [formError, setFormError] = useState('');
  const [formSentUrl, setFormSentUrl] = useState('');
  const whatsappLinkRef = useRef<HTMLAnchorElement>(null);

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 16);
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    setMobileMenuOpen(false);
    const target = document.querySelector(href);
    if (target) {
      target.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  const handleScrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleWhatsAppFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const trimmedName = formName.trim();
    const trimmedMessage = formMessage.trim();

    if (!trimmedName || !trimmedMessage) {
      setFormError('Por favor, preencha o seu nome e a mensagem.');
      setFormSentUrl('');
      return;
    }

    setFormError('');
    const text = `Olá KG Services, sou ${trimmedName}. ${trimmedMessage}`;
    const url = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(text)}`;
    setFormSentUrl(url);
    if (whatsappLinkRef.current) {
      whatsappLinkRef.current.href = url;
      whatsappLinkRef.current.click();
    }
  };

  return (
    <div className="min-h-screen bg-white text-[#0A1E3C] selection:bg-[#0B5CFF] selection:text-white">
      {/* Top Navigation Bar — 3-Zone Contract */}
      <header
        className={`fixed inset-x-0 top-0 z-40 transition-shadow duration-200 bg-white/95 backdrop-blur-md border-b border-[#0A1E3C]/10 ${
          scrolled ? 'shadow-[0_4px_24px_rgba(10,30,60,0.08)]' : ''
        }`}
      >
        <div className="mx-auto flex h-14 sm:h-[68px] max-w-6xl items-center justify-between gap-4 sm:gap-8 px-4 sm:px-8">
          {/* Zone 1: Brand Wordmark */}
          <a
            href="#inicio"
            onClick={(e) => handleNavClick(e, '#inicio')}
            className="focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#0B5CFF] rounded"
            aria-label="KG Services — Voltar ao início"
          >
            <KgLogo variant="header" />
          </a>

          {/* Zone 2: Single-line Nav Links */}
          <nav className="hidden md:flex items-center gap-7" aria-label="Navegação principal">
            {NAV_LINKS.map((item) => (
              <a
                key={item.href}
                href={item.href}
                onClick={(e) => handleNavClick(e, item.href)}
                className="relative py-1 text-sm font-medium text-[#0A1E3C]/80 transition-colors duration-150 hover:text-[#0B5CFF] whitespace-nowrap shrink-0 after:absolute after:bottom-0 after:left-0 after:h-[2px] after:w-0 after:bg-[#0B5CFF] after:transition-all after:duration-200 hover:after:w-full focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#0B5CFF]"
              >
                {item.label}
              </a>
            ))}
          </nav>

          {/* Zone 3: Primary CTA + Mobile Hamburger */}
          <div className="flex items-center gap-2.5 sm:gap-3 shrink-0">
            <a
              href={WHATSAPP_GENERAL_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="hidden sm:inline-flex items-center justify-center rounded-lg bg-[#0B5CFF] px-4 py-2 text-sm font-semibold text-white transition-colors duration-150 hover:bg-[#0057FF] whitespace-nowrap shrink-0 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#0A1E3C]"
            >
              Pedir Orçamento
            </a>

            <button
              type="button"
              onClick={() => setMobileMenuOpen((prev) => !prev)}
              className="inline-flex h-10 w-10 items-center justify-center rounded-lg border border-[#0A1E3C]/15 text-[#0A1E3C] transition-colors hover:bg-[#F4F6FA] md:hidden focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#0B5CFF]"
              aria-expanded={mobileMenuOpen}
              aria-label={mobileMenuOpen ? 'Fechar menu' : 'Abrir menu'}
            >
              {mobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </button>
          </div>
        </div>

        {/* Mobile Menu Drawer */}
        {mobileMenuOpen && (
          <div className="border-t border-[#0A1E3C]/10 bg-white px-4 py-3.5 md:hidden shadow-lg">
            <nav className="flex flex-col gap-0.5" aria-label="Menu móvel">
              {NAV_LINKS.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  onClick={(e) => handleNavClick(e, item.href)}
                  className="flex min-h-[44px] items-center rounded-lg px-3 text-sm font-semibold text-[#0A1E3C] transition-colors hover:bg-[#F4F6FA] hover:text-[#0B5CFF]"
                >
                  {item.label}
                </a>
              ))}
              <a
                href={WHATSAPP_GENERAL_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-2 flex min-h-[46px] items-center justify-center gap-2 rounded-lg bg-[#0B5CFF] px-4 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-[#0057FF]"
              >
                <WhatsAppIcon className="h-4 w-4" />
                <span>Pedir Orçamento</span>
              </a>
            </nav>
          </div>
        )}
      </header>

      <main className="pt-14 sm:pt-[68px]">
        {/* 1. HERO — PRIMEIRA TELA */}
        <section
          id="inicio"
          className="relative overflow-hidden bg-white py-6 sm:py-12 lg:py-16 scroll-mt-14 sm:scroll-mt-[68px]"
        >
          {/* Architectural diagonal corner accents matching reference cards */}
          <div
            className="pointer-events-none absolute right-0 top-0 h-16 w-28 sm:h-36 sm:w-64"
            aria-hidden="true"
          >
            <svg viewBox="0 0 280 160" className="h-full w-full" preserveAspectRatio="none">
              <polygon points="90,0 280,0 280,120" fill="#0B5CFF" />
              <polygon points="135,0 280,0 280,82" fill="#0A1E3C" />
            </svg>
          </div>
          <div
            className="pointer-events-none absolute bottom-0 left-0 h-12 w-24 sm:h-24 sm:w-52"
            aria-hidden="true"
          >
            <svg viewBox="0 0 220 110" className="h-full w-full" preserveAspectRatio="none">
              <polygon points="0,10 185,110 0,110" fill="#0B5CFF" />
              <polygon points="0,28 155,110 0,110" fill="#0A1E3C" />
            </svg>
          </div>

          <div className="relative mx-auto max-w-6xl px-4 sm:px-8">
            <div className="grid grid-cols-1 items-center gap-5 sm:gap-8 lg:grid-cols-12 lg:gap-12">
              {/* Photo on top in mobile, left on desktop */}
              <motion.div
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
                className="flex justify-center lg:col-span-5 lg:justify-start"
              >
                <CeoPortrait variant="hero" />
              </motion.div>

              {/* Right Column: Brand, Slogan, CEO Identity & Primary Actions */}
              <motion.div
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: 0.06, ease: [0.16, 1, 0.3, 1] }}
                className="flex flex-col items-center text-center lg:col-span-7 lg:items-start lg:text-left"
              >
                {/* Compact Mobile Slogan Lockup */}
                <p className="sm:hidden font-display text-sm font-semibold text-[#0A1E3C]">
                  KG SERVICES <span className="text-[#0B5CFF]">·</span> Transformamos Ideias em{' '}
                  <span className="font-bold text-[#0B5CFF]">Realidade.</span>
                </p>

                {/* Tablet/Desktop Logo + Slogan Lockup */}
                <div className="hidden sm:flex flex-row items-center gap-6">
                  <KgLogo variant="full" />
                  <div className="h-14 w-px bg-[#0A1E3C]/15" aria-hidden="true" />
                  <p className="font-display text-lg lg:text-xl font-semibold leading-snug text-[#0A1E3C]">
                    Transformamos Ideias em{' '}
                    <span className="font-bold text-[#0B5CFF]">Realidade.</span>
                  </p>
                </div>

                {/* CEO Name & Role */}
                <div className="mt-2.5 sm:mt-7">
                  <h1 className="font-display text-[clamp(1.85rem,4.2vw,3.45rem)] font-extrabold leading-[1.06] tracking-tight text-[#0A1E3C] text-balance">
                    KELVEN GARRINE
                  </h1>
                  <div className="mt-1.5 sm:mt-2.5 flex items-center justify-center gap-2.5 sm:gap-3 lg:justify-start">
                    <span className="h-[2.5px] sm:h-[3px] w-7 sm:w-10 bg-[#0B5CFF]" aria-hidden="true" />
                    <p className="font-display text-xs sm:text-base font-semibold tracking-[0.14em] sm:tracking-[0.16em] text-[#0A1E3C]/85 uppercase">
                      TÉCNICO ELETRICISTA • CEO
                    </p>
                  </div>
                </div>

                {/* Primary & Secondary Action Buttons */}
                <div className="mt-5 sm:mt-7 flex w-full flex-col gap-2.5 sm:w-auto sm:flex-row sm:items-center sm:gap-3.5">
                  <a
                    href={WHATSAPP_GENERAL_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex min-h-[46px] sm:min-h-[50px] w-full sm:w-auto items-center justify-center gap-2 rounded-xl bg-[#0B5CFF] px-5 sm:px-6 py-3 text-sm sm:text-base font-semibold text-white shadow-[0_8px_22px_rgba(11,92,255,0.24)] transition-all duration-150 hover:bg-[#0057FF] hover:-translate-y-0.5 whitespace-nowrap focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#0A1E3C]"
                  >
                    <WhatsAppIcon className="h-4 w-4 sm:h-5 sm:w-5 shrink-0" />
                    <span>Pedir Orçamento no WhatsApp</span>
                  </a>

                  <a
                    href={PHONE_LINK}
                    className="inline-flex min-h-[46px] sm:min-h-[50px] w-full sm:w-auto items-center justify-center gap-2 rounded-xl border border-[#0A1E3C]/20 bg-white px-5 sm:px-6 py-3 text-sm sm:text-base font-semibold text-[#0A1E3C] transition-colors duration-150 hover:border-[#0B5CFF] hover:text-[#0B5CFF] whitespace-nowrap focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#0B5CFF]"
                  >
                    <PhoneIcon className="h-4 w-4 shrink-0 text-[#0B5CFF]" />
                    <span>Ligar Agora</span>
                  </a>
                </div>

                {/* Quiet Location & Phone line */}
                <div className="mt-4 sm:mt-6 flex flex-wrap items-center justify-center gap-x-2.5 gap-y-1 text-xs sm:text-sm font-medium text-[#0A1E3C]/70 lg:justify-start tabular-nums">
                  <span>Inhambane, Moçambique</span>
                  <span aria-hidden="true" className="text-[#0B5CFF]">
                    |
                  </span>
                  <a
                    href={PHONE_LINK}
                    className="transition-colors hover:text-[#0B5CFF]"
                  >
                    {PHONE_DISPLAY}
                  </a>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* 2. NOSSOS SERVIÇOS — SÓ OS 4 */}
        <section id="servicos" className="bg-[#F4F6FA] py-10 sm:py-16 scroll-mt-14 sm:scroll-mt-[68px]">
          <div className="mx-auto max-w-6xl px-4 sm:px-8">
            {/* Section Title matching Image 2 */}
            <div className="mx-auto flex max-w-xl items-center justify-center gap-3 sm:gap-6">
              <span className="h-[2px] flex-1 bg-[#0B5CFF]" aria-hidden="true" />
              <h2 className="font-display text-xl sm:text-3xl font-extrabold tracking-wide text-[#0A1E3C] text-center whitespace-nowrap">
                NOSSOS SERVIÇOS
              </h2>
              <span className="h-[2px] flex-1 bg-[#0B5CFF]" aria-hidden="true" />
            </div>

            {/* 4 Service Cards */}
            <div className="mt-6 sm:mt-10 grid grid-cols-1 gap-3 sm:gap-5 md:grid-cols-2">
              {SERVICES.map((service, idx) => (
                <motion.a
                  key={service.id}
                  href={service.whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  initial={{ opacity: 0, y: 14 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.15 }}
                  transition={{
                    duration: 0.3,
                    delay: idx * 0.05,
                    ease: [0.16, 1, 0.3, 1],
                  }}
                  className="group flex items-center gap-3.5 sm:gap-5 rounded-xl sm:rounded-2xl border border-[#0A1E3C]/8 bg-white p-4 sm:p-6 shadow-[0_4px_18px_rgba(10,30,60,0.04)] transition-all duration-150 hover:-translate-y-0.5 hover:border-[#0B5CFF]/40 hover:shadow-[0_10px_28px_rgba(11,92,255,0.1)] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#0B5CFF]"
                >
                  {/* Circular Electric Blue Icon matching Image 2 */}
                  <div className="flex h-12 w-12 sm:h-15 sm:w-15 shrink-0 items-center justify-center rounded-full bg-[#0B5CFF] text-white transition-transform duration-150 group-hover:scale-105">
                    {service.icon}
                  </div>

                  {/* Subtle Vertical Divider matching Image 2 */}
                  <span
                    className="h-8 sm:h-10 w-px shrink-0 bg-[#0A1E3C]/12"
                    aria-hidden="true"
                  />

                  <div className="flex min-w-0 flex-1 flex-col">
                    <h3 className="font-display text-base sm:text-xl font-bold leading-snug text-[#0A1E3C] group-hover:text-[#0B5CFF] transition-colors">
                      {service.title}
                    </h3>
                    <span className="mt-1 inline-flex items-center gap-1 text-xs sm:text-sm font-medium text-[#0B5CFF]">
                      <span>Pedir no WhatsApp</span>
                      <ArrowRight className="h-3.5 w-3.5 sm:h-4 sm:w-4 transition-transform duration-150 group-hover:translate-x-1" />
                    </span>
                  </div>
                </motion.a>
              ))}
            </div>

            {/* Quiet consultation line as specified */}
            <p className="mt-5 sm:mt-8 text-center text-xs sm:text-sm font-medium text-[#0A1E3C]/70">
              Projetos realizados sob consulta
            </p>
          </div>
        </section>

        {/* 3. SOBRE — CURTO */}
        <section id="sobre" className="bg-white py-10 sm:py-16 scroll-mt-14 sm:scroll-mt-[68px]">
          <div className="mx-auto max-w-4xl px-4 sm:px-8">
            <motion.div
              initial={{ opacity: 0, y: 14 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
              className="flex flex-col items-center gap-5 sm:flex-row sm:items-center sm:gap-10"
            >
              <div className="shrink-0">
                <CeoPortrait variant="about" />
              </div>

              <div className="text-center sm:text-left">
                <h2 className="font-display text-xl sm:text-3xl font-extrabold tracking-tight text-[#0A1E3C]">
                  Sobre
                </h2>
                <p className="mt-2.5 sm:mt-4 text-sm sm:text-lg leading-relaxed text-[#0A1E3C]/85 max-w-xl">
                  <strong className="font-semibold text-[#0A1E3C]">
                    KG Services. Transformamos Ideias em{' '}
                    <span className="text-[#0B5CFF]">Realidade.</span>
                  </strong>{' '}
                  Soluções elétricas e administrativas com rigor, segurança e profissionalismo em
                  Inhambane, Moçambique.
                </p>
              </div>
            </motion.div>
          </div>
        </section>

        {/* 4. CONTACTO */}
        <section id="contacto" className="bg-[#F4F6FA] py-10 sm:py-16 scroll-mt-14 sm:scroll-mt-[68px]">
          <div className="mx-auto max-w-6xl px-4 sm:px-8">
            <div className="grid grid-cols-1 gap-7 lg:grid-cols-12 lg:gap-12">
              {/* Direct Contact Info */}
              <div className="lg:col-span-6 flex flex-col justify-between">
                <div>
                  <h2 className="font-display text-xl sm:text-3xl font-extrabold tracking-tight text-[#0A1E3C]">
                    Contacto
                  </h2>
                  <p className="mt-1.5 font-display text-sm sm:text-lg font-semibold text-[#0A1E3C]">
                    Transformamos Ideias em{' '}
                    <span className="text-[#0B5CFF]">Realidade.</span>
                  </p>

                  <div className="mt-5 sm:mt-7 grid grid-cols-1 gap-2.5 sm:grid-cols-2 sm:gap-4">
                    {/* Telefone */}
                    <a
                      href={PHONE_LINK}
                      className="flex items-center gap-3 rounded-xl border border-[#0A1E3C]/8 bg-white p-3.5 sm:p-4 transition-colors hover:border-[#0B5CFF]/40 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#0B5CFF]"
                    >
                      <span className="flex h-9 w-9 sm:h-10 sm:w-10 shrink-0 items-center justify-center rounded-lg bg-[#0B5CFF] text-white">
                        <PhoneIcon className="h-4 w-4 sm:h-5 sm:w-5" />
                      </span>
                      <div className="min-w-0">
                        <span className="block text-[11px] sm:text-xs font-medium text-[#0A1E3C]/60">
                          Telefone
                        </span>
                        <span className="block font-display text-sm sm:text-base font-bold text-[#0A1E3C] tabular-nums">
                          {PHONE_DISPLAY}
                        </span>
                      </div>
                    </a>

                    {/* Local */}
                    <div className="flex items-center gap-3 rounded-xl border border-[#0A1E3C]/8 bg-white p-3.5 sm:p-4">
                      <span className="flex h-9 w-9 sm:h-10 sm:w-10 shrink-0 items-center justify-center rounded-lg bg-[#0B5CFF] text-white">
                        <LocationPinIcon className="h-4 w-4 sm:h-5 sm:w-5" />
                      </span>
                      <div className="min-w-0">
                        <span className="block text-[11px] sm:text-xs font-medium text-[#0A1E3C]/60">
                          Local
                        </span>
                        <span className="block font-display text-sm sm:text-base font-bold text-[#0A1E3C]">
                          Inhambane, Moçambique
                        </span>
                      </div>
                    </div>

                    {/* Instagram */}
                    <a
                      href={INSTAGRAM_URL}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-3 rounded-xl border border-[#0A1E3C]/8 bg-white p-3.5 sm:p-4 transition-colors hover:border-[#0B5CFF]/40 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#0B5CFF]"
                    >
                      <span className="flex h-9 w-9 sm:h-10 sm:w-10 shrink-0 items-center justify-center rounded-lg bg-[#0B5CFF] text-white">
                        <InstagramIcon className="h-4 w-4 sm:h-5 sm:w-5" />
                      </span>
                      <div className="min-w-0">
                        <span className="block text-[11px] sm:text-xs font-medium text-[#0A1E3C]/60">
                          Instagram
                        </span>
                        <span className="block font-display text-sm sm:text-base font-bold text-[#0A1E3C]">
                          @KGServices
                        </span>
                      </div>
                    </a>

                    {/* Facebook */}
                    <a
                      href={FACEBOOK_URL}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-3 rounded-xl border border-[#0A1E3C]/8 bg-white p-3.5 sm:p-4 transition-colors hover:border-[#0B5CFF]/40 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#0B5CFF]"
                    >
                      <span className="flex h-9 w-9 sm:h-10 sm:w-10 shrink-0 items-center justify-center rounded-lg bg-[#0B5CFF] text-white">
                        <FacebookIcon className="h-4 w-4 sm:h-5 sm:w-5" />
                      </span>
                      <div className="min-w-0">
                        <span className="block text-[11px] sm:text-xs font-medium text-[#0A1E3C]/60">
                          Facebook
                        </span>
                        <span className="block font-display text-sm sm:text-base font-bold text-[#0A1E3C]">
                          KG Services
                        </span>
                      </div>
                    </a>
                  </div>
                </div>

                {/* Big WhatsApp CTA */}
                <div className="mt-5 sm:mt-7">
                  <a
                    href={WHATSAPP_GENERAL_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex min-h-[48px] sm:min-h-[54px] w-full items-center justify-center gap-2.5 rounded-xl bg-[#0B5CFF] px-5 py-3 text-sm sm:text-base font-semibold text-white shadow-[0_8px_24px_rgba(11,92,255,0.22)] transition-all duration-150 hover:bg-[#0057FF] hover:-translate-y-0.5 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#0A1E3C]"
                  >
                    <WhatsAppIcon className="h-5 w-5 shrink-0" />
                    <span>Falar no WhatsApp</span>
                  </a>
                </div>
              </div>

              {/* Functional WhatsApp Quick Message Form */}
              <div className="lg:col-span-6">
                <form
                  onSubmit={handleWhatsAppFormSubmit}
                  noValidate
                  className="rounded-xl sm:rounded-2xl border border-[#0A1E3C]/8 bg-white p-5 sm:p-7 shadow-[0_6px_24px_rgba(10,30,60,0.04)]"
                >
                  <h3 className="font-display text-lg sm:text-xl font-bold text-[#0A1E3C]">
                    Enviar mensagem direta
                  </h3>
                  <p className="mt-1 text-xs sm:text-sm text-[#0A1E3C]/70">
                    Escreva o seu nome e mensagem para abrir diretamente no WhatsApp.
                  </p>

                  <div className="mt-4 space-y-3.5">
                    <div>
                      <label
                        htmlFor="contact-name"
                        className="block text-xs sm:text-sm font-semibold text-[#0A1E3C]"
                      >
                        Nome
                      </label>
                      <input
                        id="contact-name"
                        type="text"
                        value={formName}
                        onChange={(e) => {
                          setFormName(e.target.value);
                          if (formError) setFormError('');
                        }}
                        placeholder="O seu nome"
                        className="mt-1 w-full rounded-xl border border-[#0A1E3C]/15 bg-[#F4F6FA]/60 px-3.5 py-2.5 text-sm sm:text-base text-[#0A1E3C] placeholder:text-[#0A1E3C]/40 transition-colors focus:border-[#0B5CFF] focus:bg-white focus:outline-none"
                      />
                    </div>

                    <div>
                      <label
                        htmlFor="contact-message"
                        className="block text-xs sm:text-sm font-semibold text-[#0A1E3C]"
                      >
                        Mensagem
                      </label>
                      <textarea
                        id="contact-message"
                        rows={3}
                        value={formMessage}
                        onChange={(e) => {
                          setFormMessage(e.target.value);
                          if (formError) setFormError('');
                        }}
                        placeholder="Como podemos ajudar?"
                        className="mt-1 w-full resize-none rounded-xl border border-[#0A1E3C]/15 bg-[#F4F6FA]/60 px-3.5 py-2.5 text-sm sm:text-base text-[#0A1E3C] placeholder:text-[#0A1E3C]/40 transition-colors focus:border-[#0B5CFF] focus:bg-white focus:outline-none"
                      />
                    </div>

                    {formError && (
                      <p role="alert" className="text-xs sm:text-sm font-medium text-[#0A1E3C]">
                        {formError}
                      </p>
                    )}

                    {formSentUrl && !formError && (
                      <p className="inline-flex flex-wrap items-center gap-2 text-xs sm:text-sm font-medium text-[#0B5CFF]">
                        <Check className="h-4 w-4 shrink-0" />
                        <span>Mensagem pronta.</span>
                        <a
                          href={formSentUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="underline hover:text-[#0057FF]"
                        >
                          Abrir conversa no WhatsApp
                        </a>
                      </p>
                    )}

                    <a
                      ref={whatsappLinkRef}
                      href={WHATSAPP_GENERAL_URL}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="sr-only"
                      tabIndex={-1}
                      aria-hidden="true"
                    >
                      WhatsApp
                    </a>

                    <button
                      type="submit"
                      className="inline-flex min-h-[46px] sm:min-h-[50px] w-full items-center justify-center gap-2 rounded-xl bg-[#0A1E3C] px-5 py-2.5 text-sm sm:text-base font-semibold text-white transition-colors duration-150 hover:bg-[#0B2341] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#0B5CFF]"
                    >
                      <WhatsAppIcon className="h-4 w-4 sm:h-5 sm:w-5 shrink-0 text-[#0B5CFF]" />
                      <span>Enviar pelo WhatsApp</span>
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* RODAPÉ */}
      <footer className="relative overflow-hidden bg-[#0A1E3C] pt-8 pb-20 sm:py-10 text-white">
        {/* Diagonal corner cut in electric blue */}
        <div
          className="pointer-events-none absolute right-0 top-0 h-full w-32 opacity-90"
          aria-hidden="true"
        >
          <svg viewBox="0 0 120 120" className="h-full w-full" preserveAspectRatio="none">
            <polygon points="45,0 120,0 120,120" fill="#0B5CFF" fillOpacity="0.22" />
          </svg>
        </div>

        <div className="relative mx-auto flex max-w-6xl flex-col items-center justify-between gap-5 px-4 sm:flex-row sm:px-8">
          <KgLogo variant="inverse" />

          <div className="text-center text-sm text-white/80 sm:text-left">
            <p className="font-medium text-white">
              Transformamos Ideias em <span className="text-[#0B5CFF]">Realidade.</span>
            </p>
            <p className="mt-1 text-xs text-white/65 tabular-nums">
              Inhambane, Moçambique · {PHONE_DISPLAY}
            </p>
          </div>

          <button
            type="button"
            onClick={handleScrollToTop}
            className="inline-flex min-h-[44px] items-center gap-2 rounded-lg border border-white/20 px-4 py-2 text-sm font-semibold text-white transition-colors hover:border-[#0B5CFF] hover:bg-[#0B5CFF] whitespace-nowrap shrink-0 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#0B5CFF]"
          >
            <ArrowUp className="h-4 w-4" />
            <span>Voltar ao Topo</span>
          </button>
        </div>
      </footer>

      {/* Botão WhatsApp Flutuante (Oficial Azul Elétrico, sem cores não autorizadas) */}
      <a
        href={WHATSAPP_GENERAL_URL}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Falar no WhatsApp com a KG Services"
        className="fixed bottom-4 right-4 sm:bottom-5 sm:right-5 z-40 inline-flex h-12 w-12 sm:h-14 sm:w-14 items-center justify-center rounded-full bg-[#0B5CFF] text-white shadow-[0_10px_28px_rgba(11,92,255,0.38)] transition-transform duration-150 hover:scale-105 hover:bg-[#0057FF] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#0A1E3C]"
      >
        <WhatsAppIcon className="h-6 w-6 sm:h-7 sm:w-7" />
      </a>
    </div>
  );
}

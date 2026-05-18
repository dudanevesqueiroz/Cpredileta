import { motion, useScroll, useTransform } from "motion/react";
import {
  Smile, Calendar, Stethoscope, Sparkles, AlignCenterHorizontal,
  PlusCircle, Award, Clock, MapPin, Facebook, Instagram, MessageCircle,
  Phone, Mail, ArrowRight, Star, Heart, Users, Cpu, HeartHandshake,
  Shield, CheckCircle, Target, Zap, Send, FileCheck, Scale, Youtube, Linkedin, Search, Loader2
} from "lucide-react";
import { useState, useRef } from "react";
import { Link } from "react-router";
import logoPredileta from "../../imports/Logotipo_Predileta-removebg-preview.png";
import logoSearchIcon from "../../imports/logo-predileta-icon.jpeg";
import heroBackground from "../../imports/ChatGPT_Image_18_05_2026__14_21_16.png";
import branqueamentoAntes from "../../imports/Captura_de_ecrã_2026-04-14_181811.png";
import branqueamentoDepois from "../../imports/Captura_de_ecrã_2026-04-14_181819.png";
import clinicaImage from "../../imports/clinica-predileta.jpeg";
import SearchModal from "./SearchModal";
import Toast from "./Toast";
import TreatmentStepsSection from "./TreatmentStepsSection";
import PaymentMethods from "./PaymentMethods";

export default function HomePage() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isCarouselPaused, setIsCarouselPaused] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    service: "",
    date: "",
    message: ""
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [toast, setToast] = useState({
    show: false,
    type: "success" as "success" | "error",
    message: "",
  });

  // Parallax effect for hero section
  const heroRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"]
  });
  const heroScale = useTransform(scrollYProgress, [0, 1], [1, 1.15]);
  const heroOpacity = useTransform(scrollYProgress, [0, 0.5, 1], [1, 0.8, 0.5]);

  const showToast = (type: "success" | "error", message: string) => {
    setToast({ show: true, type, message });
    setTimeout(() => {
      setToast({ show: false, type, message: "" });
    }, 5000);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      // Enviar email para 14259@ipam.pt via Formspree
      const formspreeEndpoint = "https://formspree.io/f/xbdqggoa";

      const payload = {
        nome: `${formData.firstName} ${formData.lastName}`,
        email: formData.email,
        telefone: formData.phone,
        servico: formData.service || "Não especificado",
        data: formData.date || "Não especificada",
        mensagem: formData.message || "Sem mensagem adicional",
        _subject: "Novo agendamento de consulta - Clínica Predileta",
        _replyto: formData.email,
        _cc: "14259@ipam.pt"
      };

      const response = await fetch(formspreeEndpoint, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(payload),
      });

      if (!response.ok) {
        throw new Error("Erro ao enviar formulário");
      }

      showToast("success", "Pedido enviado com sucesso! Entraremos em contacto brevemente.");
      
      setFormData({
        firstName: "",
        lastName: "",
        email: "",
        phone: "",
        service: "",
        date: "",
        message: ""
      });
    } catch (error) {
      console.error("Erro ao enviar:", error);
      showToast("error", "Erro ao enviar. Tente novamente ou contacte-nos diretamente.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Search Modal */}
      <SearchModal isOpen={isSearchOpen} onClose={() => setIsSearchOpen(false)} />

      {/* Header - Premium Floating */}
      <header className="header-fixed" style={{ background: 'transparent', boxShadow: 'none' }}>
        {/* Main Navigation */}
        <nav className="backdrop-blur-[1px]">
          <div className="max-w-responsive">
            <div className="flex justify-between items-center py-2 md:py-2.5">
              <a href="#" className="flex items-center gap-2 md:gap-3">
                <div className="flex items-center gap-2 md:gap-3">
                  <img
                    src={logoPredileta}
                    alt="Logo Clínica Predileta"
                    className="w-10 h-10 md:w-12 md:h-12 object-contain drop-shadow-lg"
                  />
                  <div>
                    <div className="text-base md:text-xl font-light tracking-wide text-white drop-shadow-md">Predileta</div>
                    <div className="text-[9px] md:text-[10px] uppercase tracking-widest text-white/80">Clínica Dentária</div>
                  </div>
                </div>
              </a>

              <ul className="hidden lg:flex items-center gap-2">
                <li><a href="#" className="px-5 py-2 rounded-full hover:text-[#1BADC4] transition-all font-light text-white">Início</a></li>
                <li><Link to="/historia" className="px-5 py-2 rounded-full hover:text-[#1BADC4] transition-all font-light text-white">Sobre Nós</Link></li>
                <li><Link to="/especialidades" className="px-5 py-2 rounded-full hover:text-[#1BADC4] transition-all font-light text-white">Especialidades</Link></li>
                <li><Link to="/acordos-precos" className="px-5 py-2 rounded-full hover:text-[#1BADC4] transition-all font-light text-white">Preços</Link></li>
                <li><Link to="/contactos" className="px-5 py-2 rounded-full hover:text-[#1BADC4] transition-all font-light text-white">Contactos</Link></li>
              </ul>

              <div className="hidden lg:flex items-center gap-3 xl:gap-4">
                <motion.button
                  onClick={() => setIsSearchOpen(true)}
                  className="relative p-2 xl:p-2.5 rounded-full transition-all group"
                  aria-label="Abrir pesquisa"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Search className="w-4 h-4 xl:w-5 xl:h-5 text-white group-hover:text-[#1BADC4] transition-colors" />
                </motion.button>

                <Link to="/marcar-consulta" className="inline-flex items-center gap-2 px-4 py-2 xl:px-6 xl:py-3 bg-[#2934b7] text-white text-sm xl:text-base rounded-full hover:bg-[#1E2894] hover:shadow-xl hover:-translate-y-0.5 transition-all font-light">
                  <Calendar className="w-4 h-4 xl:w-5 xl:h-5" />
                  Marcação Online
                </Link>
              </div>

              <div className="lg:hidden flex items-center gap-2">
                <motion.button
                  onClick={() => setIsSearchOpen(true)}
                  className="relative p-2 rounded-full transition-all"
                  aria-label="Abrir pesquisa"
                  whileTap={{ scale: 0.9 }}
                >
                  <Search className="w-5 h-5 text-white hover:text-[#1BADC4]" />
                  <img
                    src={logoSearchIcon}
                    alt="Predileta"
                    className="absolute -top-0.5 -right-0.5 w-3 h-3 rounded-full object-cover border border-white shadow-sm"
                  />
                </motion.button>

                <button
                  onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                  className="p-2 text-white"
                >
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                  </svg>
                </button>
              </div>
            </div>
          </div>
        </nav>
      </header>

      {/* Hero Section */}
      <section ref={heroRef} className="relative min-h-[100svh] flex items-center justify-center overflow-hidden pt-16 md:pt-20" style={{ position: 'relative' }}>
        {/* Background Image with Overlay and Parallax */}
        <motion.div
          className="absolute inset-0"
          style={{
            scale: heroScale,
            opacity: heroOpacity
          }}
        >
          <div
            className="w-full h-full bg-cover"
            style={{
              backgroundImage: `url(${heroBackground})`,
              backgroundPosition: 'center center',
              filter: 'brightness(1.08) contrast(1.02)',
            }}
          />
          {/* Overlay escuro subtil (~40% opacity) para melhor legibilidade */}
          <div className="absolute inset-0 bg-gradient-to-b from-black/42 via-black/38 to-black/52"></div>
          {/* Blur sutil para criar profundidade cinematográfica */}
          <div className="absolute inset-0 backdrop-blur-[0.3px]"></div>
        </motion.div>

        {/* Content */}
        <div className="relative z-10 w-full max-w-responsive py-12 md:py-20 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-hero font-light text-white leading-tight mb-4 md:mb-6 tracking-wide px-4 drop-shadow-lg">CLÍNICA PREDILETA</h1>

            <p className="text-responsive-lg md:text-responsive-xl text-white/95 mb-8 md:mb-12 font-light px-4 drop-shadow-md">
              Dentista em Famalicão | Cuidamos do seu sorriso desde 2005
            </p>
          </motion.div>
        </div>

        {/* Bottom Info Cards */}
        <div className="absolute bottom-0 left-0 right-0 z-20">
          <div className="max-w-responsive pb-6 md:pb-12">
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 md:gap-6">
              <motion.div
                className="bg-white/95 backdrop-blur-sm rounded-xl md:rounded-2xl p-4 md:p-6 text-center shadow-xl"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 }}
              >
                <Phone className="w-6 h-6 md:w-8 md:h-8 text-[#2934b7] mx-auto mb-2 md:mb-3" />
                <div className="text-xs md:text-sm text-gray-500 mb-1 font-light">Ligue-nos</div>
                <div className="text-base md:text-lg font-light text-gray-800">+351 910 658 115</div>
              </motion.div>

              <motion.div
                className="bg-white/95 backdrop-blur-sm rounded-xl md:rounded-2xl p-4 md:p-6 text-center shadow-xl"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6 }}
              >
                <Clock className="w-6 h-6 md:w-8 md:h-8 text-[#2934b7] mx-auto mb-2 md:mb-3 bg-[#2930b700]" />
                <div className="text-xs md:text-sm text-gray-500 mb-1 font-light">Horário</div>
                <div className="text-sm md:text-base font-light text-gray-800">Seg-Sex: 9h-12h30 | 14h-19h</div>
              </motion.div>

              <motion.div
                className="bg-white/95 backdrop-blur-sm rounded-xl md:rounded-2xl p-4 md:p-6 text-center shadow-xl"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.7 }}
              >
                <MapPin className="w-6 h-6 md:w-8 md:h-8 text-[#2934b7] mx-auto mb-2 md:mb-3" />
                <div className="text-xs md:text-sm text-gray-500 mb-1 font-light">Localização</div>
                <div className="text-xs md:text-sm font-light text-gray-800 leading-relaxed">
                  Av. Padre Silva Rego, 592 Loja 1<br />
                  4770-205 Joane, Vila Nova de Famalicão
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="especialidades" className="section-padding bg-white">
        <div className="max-w-responsive">
          <div className="text-center mb-8 md:mb-12 lg:mb-16">
            <h2 className="text-responsive-2xl font-light mb-3 md:mb-4 text-[#2934b7]">Especialidades da <b>sua</b> Clínica Dentária</h2>
            <p className="text-responsive-base text-gray-500 max-w-2xl mx-auto font-light px-4">
              Médicos dentistas qualificados em Famalicão. Oferecemos limpeza dentária, ortodontia, implantologia e tratamentos de saúde oral completos.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
            {[
              {
                icon: Stethoscope,
                title: "Clínica Geral",
                description: "Diagnóstico e tratamento de problemas dentários comuns, restaurações, extrações e cuidados preventivos.",
                link: "/clinica-geral"
              },
              {
                icon: Sparkles,
                title: "Limpeza Dentária e Prevenção",
                description: "Destartarização profissional, polimento e tratamentos preventivos. Limpeza dentária completa para manter a saúde oral em dia.",
                link: "/prevencao"
              },
              {
                icon: AlignCenterHorizontal,
                title: "Ortodontia e Aparelhos Dentários",
                description: "Correção do alinhamento dentário. Colocar aparelho convencional ou invisível para todas as idades, incluindo odontopediatria.",
                link: "/ortodontia"
              },
              {
                icon: PlusCircle,
                title: "Implantologia e Prótese",
                description: "Implantes dentários de última geração e próteses para substituição de dentes perdidos. Resultados naturais com cirurgião dentista especializado.",
                link: "/implantologia"
              },
            ].map((service, index) => (
              <motion.div
                key={index}
                className="group bg-white border border-gray-100 rounded-xl md:rounded-2xl p-5 md:p-8 hover:shadow-lg hover:-translate-y-2 transition-all relative overflow-hidden"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <div className="absolute top-0 left-0 right-0 h-0.5 bg-[#2934b7] scale-x-0 group-hover:scale-x-100 transition-transform origin-left"></div>

                <div className="w-16 h-16 md:w-20 md:h-20 bg-[#F8F9FA] group-hover:bg-[#2934b7] rounded-xl md:rounded-2xl flex items-center justify-center mb-4 md:mb-6 transition-all">
                  <service.icon className="w-7 h-7 md:w-9 md:h-9 text-[#2934b7] group-hover:text-white transition-colors bg-[#1e29a200]" />
                </div>

                <h3 className="text-lg md:text-xl font-light text-gray-800 mb-2 md:mb-3">{service.title}</h3>
                <p className="text-sm md:text-base text-gray-500 leading-relaxed mb-3 md:mb-4 font-light">{service.description}</p>

                <Link to={service.link} className="inline-flex items-center gap-2 text-sm md:text-base text-[#2934b7] font-light group-hover:gap-3 transition-all">
                  Saber mais <ArrowRight className="w-3 h-3 md:w-4 md:h-4" />
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="sobre" className="section-padding bg-gradient-to-br from-[#F8F9FA] to-[#E9ECEF]">
        <div className="max-w-responsive">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 lg:gap-16 items-center">
            <motion.div
              className="relative"
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <img
                src={clinicaImage}
                alt="Clínica Dentária Predileta em Famalicão"
                className="rounded-2xl md:rounded-3xl shadow-lg w-full object-cover"
              />

              <div className="absolute -top-4 -right-4 md:-top-6 md:-right-6 bg-[#2934b7] text-white p-4 md:p-6 rounded-xl md:rounded-2xl shadow-lg text-center">
                <div className="text-3xl md:text-5xl font-light">+20</div>
                <div className="text-xs md:text-sm opacity-90 mt-1 font-light">Anos de Experiência</div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <div className="inline-flex items-center gap-2 text-[#2934b7] font-light text-xs md:text-sm uppercase tracking-widest mb-3 md:mb-4">
                <Heart className="w-3 h-3 md:w-4 md:h-4" />
                Sobre a Clínica Predileta
              </div>

              <h2 className="text-responsive-2xl font-light mb-4 md:mb-6 text-[#2934b7]">
                Dentista em Famalicão | Uma Clínica familiar ao serviço de várias gerações
              </h2>

              <p className="text-responsive-base text-gray-500 mb-4 md:mb-6 leading-relaxed font-light">
                Fundada em 2005, a Clínica Dentária Predileta nasceu com o propósito de oferecer cuidados de saúde oral
                de excelência num ambiente acolhedor e familiar. Ao longo de quase duas décadas, os nossos médicos dentistas
                têm acompanhado várias gerações de famílias em Joane e na região de Vila Nova de Famalicão.
              </p>

              <p className="text-responsive-base text-gray-500 mb-6 md:mb-8 leading-relaxed font-light">
                Acreditamos que um sorriso saudável é reflexo de confiança e bem-estar. Por isso, a nossa clínica dentista
                combina experiência, tecnologia e um atendimento verdadeiramente humano para tratar cáries, fazer limpeza dentária
                e todos os tratamentos de saúde oral.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 md:gap-4 mb-6 md:mb-8">
                {[
                  { icon: Users, text: "Ambiente Familiar" },
                  { icon: Award, text: "Profissionais Certificados" },
                  { icon: Cpu, text: "Tecnologia Avançada" },
                  { icon: HeartHandshake, text: "Atendimento Humanizado" },
                ].map((feature, index) => (
                  <div key={index} className="flex items-center gap-2 md:gap-3">
                    <div className="w-9 h-9 md:w-10 md:h-10 bg-white rounded-lg md:rounded-xl flex items-center justify-center shadow-sm flex-shrink-0">
                      <feature.icon className="w-4 h-4 md:w-5 md:h-5 text-[#2934b7]" />
                    </div>
                    <span className="font-light text-sm md:text-base text-gray-700">{feature.text}</span>
                  </div>
                ))}
              </div>

              <Link to="/historia" className="inline-flex items-center gap-2 px-6 py-3 md:px-8 md:py-4 bg-[#2934b7] text-white text-sm md:text-base rounded-full hover:shadow-lg hover:-translate-y-1 transition-all font-light text-[#f5f6fa]">
                Conhecer a Nossa História
                <ArrowRight className="w-4 h-4 md:w-5 md:h-5" />
              </Link>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Before & After Section */}
      <section id="antes-depois" className="section-padding bg-white">
        <div className="max-w-responsive">
          <div className="text-center mb-8 md:mb-12 lg:mb-16">
            <h2 className="text-responsive-2xl font-light mb-3 md:mb-4 text-[#2934b7]">Antes e Depois - Transformações Reais</h2>
            <p className="text-responsive-base text-gray-500 max-w-2xl mx-auto font-light px-4">
              Veja casos de sucesso do nosso dentista em ortodontia, branqueamento dentário, facetas e implantes dentários realizados na nossa clínica em Famalicão.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
            {[
              {
                badge: "Ortodontia",
                title: "Alinhamento Dentário",
                description: "Tratamento com aparelho invisível",
                before: "https://images.unsplash.com/photo-1598256989809-394fa4f6cd26?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=300&h=300",
                after: "https://images.unsplash.com/photo-1769559893692-c6d0623bf8e4?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=300&h=300",
                link: "/alinhamento-dentario"
              },
              {
                badge: "Branqueamento",
                title: "Branqueamento Profissional",
                description: "Resultado visível em uma sessão",
                before: branqueamentoAntes,
                after: branqueamentoDepois,
                link: "/branqueamento-profissional"
              },
              {
                badge: "Implantologia",
                title: "Reabilitação Oral",
                description: "Implantes de última geração",
                before: "https://images.unsplash.com/photo-1605292530210-56b8be409237?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=300&h=300",
                after: "https://images.unsplash.com/photo-1631596577204-53ad0d6e6978?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=300&h=300",
                link: "/reabilitacao-oral"
              }
            ].map((caseItem, index) => (
              <Link key={index} to={caseItem.link}>
                <motion.div
                  className="bg-white border border-gray-100 rounded-xl md:rounded-2xl overflow-hidden hover:shadow-lg hover:-translate-y-2 transition-all"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                >
                  <div className="grid grid-cols-2 relative">
                    <div className="relative">
                      <img src={caseItem.before} alt="Antes" className="aspect-square object-cover w-full" />
                      <span className="absolute bottom-1.5 left-1.5 md:bottom-2 md:left-2 px-2 py-0.5 md:px-3 md:py-1 bg-black/70 text-white text-[10px] md:text-xs rounded-full font-light">
                        Antes
                      </span>
                    </div>
                    <div className="relative">
                      <img src={caseItem.after} alt="Depois" className="aspect-square object-cover w-full" />
                      <span className="absolute bottom-1.5 right-1.5 md:bottom-2 md:right-2 px-2 py-0.5 md:px-3 md:py-1 bg-black/70 text-white text-[10px] md:text-xs rounded-full font-light">
                        Depois
                      </span>
                    </div>
                  </div>
                  <div className="p-4 md:p-6">
                    <span className="inline-block px-2.5 py-0.5 md:px-3 md:py-1 bg-[#F8F9FA] text-[#2934b7] text-[10px] md:text-xs rounded-full mb-2 md:mb-3 font-light">
                      {caseItem.badge}
                    </span>
                    <h3 className="text-lg md:text-xl font-light text-gray-800 mb-1 md:mb-2">{caseItem.title}</h3>
                    <p className="text-xs md:text-sm text-gray-500 font-light">{caseItem.description}</p>
                  </div>
                </motion.div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="section-padding bg-gradient-to-br from-[#F8F9FA] to-[#E9ECEF] overflow-hidden">
        <div className="max-w-responsive">
          <div className="text-center mb-8 md:mb-12 lg:mb-16">
            <h2 className="text-responsive-2xl font-light mb-3 md:mb-4 text-[#2934b7]">O que dizem os nossos pacientes</h2>
            <p className="text-responsive-base text-gray-500 max-w-2xl mx-auto font-light px-4">
              A satisfação dos nossos pacientes é a nossa maior recompensa. Veja algumas avaliações reais do Google.
            </p>
          </div>

          {/* Carrossel Infinito */}
          <div className="relative">
            <motion.div
              className="flex gap-6"
              animate={isCarouselPaused ? {} : {
                x: [0, -2400]
              }}
              transition={{
                x: {
                  repeat: Infinity,
                  repeatType: "loop",
                  duration: 40,
                  ease: "linear"
                }
              }}
              onMouseEnter={() => setIsCarouselPaused(true)}
              onMouseLeave={() => setIsCarouselPaused(false)}
            >
              {[
                {
                  name: "Maria Silva",
                  date: "há 2 semanas",
                  text: "Excelente clínica! A equipa é muito profissional e atenciosa. Já sou paciente há mais de 10 anos e recomendo a toda a gente."
                },
                {
                  name: "João Costa",
                  date: "há 1 mês",
                  text: "Fiz um tratamento de ortodontia e estou muito satisfeito com o resultado. A Doutora Dora explicou tudo com calma e o acompanhamento foi impecável."
                },
                {
                  name: "Carla Ferreira",
                  date: "há 3 semanas",
                  text: "Os meus filhos adoram ir ao dentista graças à Clínica Predileta! Toda a equipa sabe tratar as crianças com carinho e paciência."
                },
                {
                  name: "Pedro Santos",
                  date: "há 1 semana",
                  text: "Fiz um branqueamento dentário e o resultado foi incrível! Superou todas as minhas expectativas. Recomendo vivamente!"
                },
                {
                  name: "Ana Rodrigues",
                  date: "há 2 meses",
                  text: "Atendimento de excelência! A clínica é moderna, limpa e toda a equipa é extremamente profissional. Sinto-me sempre bem acolhida."
                },
                {
                  name: "Ricardo Oliveira",
                  date: "há 3 dias",
                  text: "Melhor clínica dentária da região! Preços justos, qualidade excepcional e um tratamento muito humano. Cinco estrelas!"
                },
                {
                  name: "Teresa Martins",
                  date: "há 1 semana",
                  text: "Fiz implantes dentários e estou muito feliz com o resultado. A Doutora Dora é uma profissional extraordinária, sempre atenciosa."
                },
                {
                  name: "Miguel Pereira",
                  date: "há 4 semanas",
                  text: "Acompanham toda a minha família há anos. Confiança total no trabalho que realizam. Recomendo sem qualquer hesitação!"
                }
              ].concat([
                {
                  name: "Maria Silva",
                  date: "há 2 semanas",
                  text: "Excelente clínica! A equipa é muito profissional e atenciosa. Já sou paciente há mais de 10 anos e recomendo a toda a gente."
                },
                {
                  name: "João Costa",
                  date: "há 1 mês",
                  text: "Fiz um tratamento de ortodontia e estou muito satisfeito com o resultado. A Doutora Dora explicou tudo com calma e o acompanhamento foi impecável."
                },
                {
                  name: "Carla Ferreira",
                  date: "há 3 semanas",
                  text: "Os meus filhos adoram ir ao dentista graças à Clínica Predileta! Toda a equipa sabe tratar as crianças com carinho e paciência."
                },
                {
                  name: "Pedro Santos",
                  date: "há 1 semana",
                  text: "Fiz um branqueamento dentário e o resultado foi incrível! Superou todas as minhas expectativas. Recomendo vivamente!"
                },
                {
                  name: "Ana Rodrigues",
                  date: "há 2 meses",
                  text: "Atendimento de excelência! A clínica é moderna, limpa e toda a equipa é extremamente profissional. Sinto-me sempre bem acolhida."
                },
                {
                  name: "Ricardo Oliveira",
                  date: "há 3 dias",
                  text: "Melhor clínica dentária da região! Preços justos, qualidade excepcional e um tratamento muito humano. Cinco estrelas!"
                },
                {
                  name: "Teresa Martins",
                  date: "há 1 semana",
                  text: "Fiz implantes dentários e estou muito feliz com o resultado. A Doutora Dora é uma profissional extraordinária, sempre atenciosa."
                },
                {
                  name: "Miguel Pereira",
                  date: "há 4 semanas",
                  text: "Acompanham toda a minha família há anos. Confiança total no trabalho que realizam. Recomendo sem qualquer hesitação!"
                }
              ]).map((testimonial, index) => (
                <div
                  key={index}
                  className="flex-shrink-0 w-[280px] sm:w-[320px] md:w-[360px] lg:w-[380px] bg-white border border-gray-200 rounded-xl md:rounded-2xl p-4 md:p-6 shadow-md hover:shadow-xl transition-shadow"
                >
                  <div className="flex items-start justify-between mb-3 md:mb-4">
                    <div className="flex-1">
                      <div className="font-medium text-sm md:text-base text-gray-900 mb-1">{testimonial.name}</div>
                      <div className="text-[10px] md:text-xs text-gray-500 font-light">{testimonial.date}</div>
                    </div>
                    <svg className="w-4 h-4 md:w-5 md:h-5 flex-shrink-0" viewBox="0 0 24 24">
                      <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/>
                      <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/>
                      <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"/>
                      <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"/>
                    </svg>
                  </div>

                  <div className="flex gap-0.5 mb-2 md:mb-3">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-3 h-3 md:w-4 md:h-4 text-[#FBBC04] fill-[#FBBC04]" />
                    ))}
                  </div>

                  <p className="text-gray-700 text-xs md:text-sm leading-relaxed font-light">{testimonial.text}</p>

                  <div className="mt-3 md:mt-4 pt-3 md:pt-4 border-t border-gray-100">
                    <div className="flex items-center gap-1 text-[10px] md:text-xs text-gray-500">
                      <span className="font-medium">Publicado no Google</span>
                    </div>
                  </div>
                </div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      {/* Treatment Steps Section */}
      <TreatmentStepsSection />

      {/* Values Section */}
      <section className="section-padding bg-white">
        <div className="max-w-responsive">
          <div className="text-center mb-8 md:mb-12 lg:mb-16">
            <h2 className="text-responsive-2xl font-light mb-3 md:mb-4 text-[#2934b7]">Os Nossos Valores</h2>
            <p className="text-responsive-base text-gray-500 max-w-2xl mx-auto font-light px-4">
              Princípios que guiam o nosso trabalho diário na Clínica Predileta.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
            {[
              { icon: Heart, title: "Humanização", text: "Cuidado empático e personalizado" },
              { icon: Shield, title: "Segurança", text: "Protocolos rigorosos de qualidade" },
              { icon: Target, title: "Excelência", text: "Busca constante pela perfeição" },
              { icon: Zap, title: "Inovação", text: "Tecnologia de ponta em tratamentos" },
            ].map((value, index) => (
              <motion.div
                key={index}
                className="bg-gradient-to-br from-[#F8F9FA] to-[#E9ECEF] border border-gray-100 rounded-xl md:rounded-2xl p-6 md:p-8 text-center hover:shadow-lg transition-all"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <div className="w-14 h-14 md:w-16 md:h-16 bg-white rounded-xl md:rounded-2xl flex items-center justify-center mx-auto mb-4 md:mb-6 shadow-sm">
                  <value.icon className="w-7 h-7 md:w-8 md:h-8 text-[#2934b7]" />
                </div>
                <h3 className="text-lg md:text-xl font-light text-gray-800 mb-1 md:mb-2">{value.title}</h3>
                <p className="text-sm md:text-base text-gray-500 font-light">{value.text}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contactos" className="section-padding bg-gradient-to-br from-[#F8F9FA] to-[#E9ECEF]">
        <div className="max-w-responsive">
          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-8 md:mb-12 lg:mb-16"
          >
            <h2 className="text-responsive-2xl font-light mb-3 md:mb-4 text-[#2934b7]">Vamos marcar uma consulta?</h2>
            <p className="text-responsive-base text-gray-600 font-light max-w-2xl mx-auto px-4">
              Procura dentista perto de mim? Estamos em Joane, Vila Nova de Famalicão. Aceitamos seguros de saúde dentista.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 md:gap-8 mb-8 md:mb-12 lg:mb-16">
            {/* Contactos Diretos */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="lg:col-span-1"
            >
              <div className="bg-white rounded-2xl md:rounded-3xl shadow-lg p-6 md:p-8 border border-gray-100 h-full">
                <h3 className="text-xl md:text-2xl font-light text-gray-800 mb-4 md:mb-6">Contactos Diretos</h3>

                <div className="space-y-4 md:space-y-6">
                  {/* Telefone */}
                  <div className="flex items-start gap-3 md:gap-4">
                    <div className="w-10 h-10 md:w-12 md:h-12 bg-gradient-to-br from-[#2934b7] to-[#1E2894] rounded-xl md:rounded-2xl flex items-center justify-center flex-shrink-0">
                      <Phone className="w-5 h-5 md:w-6 md:h-6 text-white" />
                    </div>
                    <div className="flex-1">
                      <div className="text-xs md:text-sm text-gray-500 font-light mb-1">Telefone</div>
                      <a href="tel:+351910658115" className="text-base md:text-lg text-gray-800 hover:text-[#2934b7] transition-colors font-light">
                        910 658 115
                      </a>
                      <div className="text-[10px] md:text-xs text-gray-500 mt-1 font-light">Seg-Sex: 9h-19h</div>
                    </div>
                  </div>

                  {/* Email */}
                  <div className="flex items-start gap-3 md:gap-4">
                    <div className="w-10 h-10 md:w-12 md:h-12 bg-gradient-to-br from-[#2934b7] to-[#1E2894] rounded-xl md:rounded-2xl flex items-center justify-center flex-shrink-0">
                      <Mail className="w-5 h-5 md:w-6 md:h-6 text-white" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="text-xs md:text-sm text-gray-500 font-light mb-1">Email</div>
                      <a href="mailto:geral@clinicapredileta.pt" className="text-sm md:text-base text-gray-800 hover:text-[#2934b7] transition-colors font-light break-all">
                        geral@clinicapredileta.pt
                      </a>
                      <div className="text-[10px] md:text-xs text-gray-500 mt-1 font-light">Resposta em 24h</div>
                    </div>
                  </div>

                  {/* Morada */}
                  <div className="flex items-start gap-3 md:gap-4">
                    <div className="w-10 h-10 md:w-12 md:h-12 bg-gradient-to-br from-[#2934b7] to-[#1E2894] rounded-xl md:rounded-2xl flex items-center justify-center flex-shrink-0">
                      <MapPin className="w-5 h-5 md:w-6 md:h-6 text-white" />
                    </div>
                    <div className="flex-1">
                      <div className="text-xs md:text-sm text-gray-500 font-light mb-1">Morada</div>
                      <div className="text-sm md:text-base text-gray-800 font-light leading-relaxed">
                        Av. Padre Silva Rego, 592 Loja 1<br />
                        4770-205 Joane<br />
                        Vila Nova de Famalicão, Portugal
                      </div>
                    </div>
                  </div>
                </div>

                {/* Redes Sociais */}
                <div className="mt-6 md:mt-8 pt-6 md:pt-8 border-t border-gray-100">
                  <div className="text-xs md:text-sm text-gray-500 font-light mb-3 md:mb-4">Redes Sociais</div>
                  <div className="flex flex-wrap gap-2 md:gap-3">
                    <a href="#" className="w-10 h-10 md:w-11 md:h-11 bg-gray-50 hover:bg-[#2934b7] text-gray-700 hover:text-white rounded-full flex items-center justify-center transition-all border border-gray-200 shadow-sm">
                      <Facebook className="w-4 h-4 md:w-5 md:h-5" />
                    </a>
                    <a href="#" className="w-10 h-10 md:w-11 md:h-11 bg-gray-50 hover:bg-[#2934b7] text-gray-700 hover:text-white rounded-full flex items-center justify-center transition-all border border-gray-200 shadow-sm">
                      <Instagram className="w-4 h-4 md:w-5 md:h-5" />
                    </a>
                    <a href="#" className="w-10 h-10 md:w-11 md:h-11 bg-gray-50 hover:bg-[#2934b7] text-gray-700 hover:text-white rounded-full flex items-center justify-center transition-all border border-gray-200 shadow-sm">
                      <Youtube className="w-4 h-4 md:w-5 md:h-5" />
                    </a>
                    <a href="#" className="w-10 h-10 md:w-11 md:h-11 bg-gray-50 hover:bg-[#2934b7] text-gray-700 hover:text-white rounded-full flex items-center justify-center transition-all border border-gray-200 shadow-sm">
                      <Linkedin className="w-4 h-4 md:w-5 md:h-5" />
                    </a>
                    <a href="#" className="w-10 h-10 md:w-11 md:h-11 bg-gray-50 hover:bg-[#2934b7] text-gray-700 hover:text-white rounded-full flex items-center justify-center transition-all border border-gray-200 shadow-sm" title="TikTok">
                      <svg className="w-4 h-4 md:w-5 md:h-5" viewBox="0 0 24 24" fill="currentColor">
                        <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z"/>
                      </svg>
                    </a>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Formulário de Marcação */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="lg:col-span-2"
            >
              <div className="bg-white rounded-3xl shadow-lg p-8 md:p-10 border border-gray-100">
                <h3 className="text-2xl font-light text-gray-800 mb-2">Agendar Consulta</h3>
                <p className="text-gray-600 font-light mb-8">
                  Preencha o formulário para marcar consulta com o nosso médico dentista. Resposta em até 24 horas.
                </p>

                <form onSubmit={handleSubmit} className="space-y-6">
                  {/* Nome Completo */}
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="firstName" className="block text-sm font-medium text-gray-700 mb-2">
                        Primeiro Nome *
                      </label>
                      <input
                        type="text"
                        id="firstName"
                        value={formData.firstName}
                        onChange={(e) => setFormData({ ...formData, firstName: e.target.value })}
                        className="w-full px-4 py-3 rounded-xl border-2 border-gray-200 bg-gray-50 focus:border-[#2934b7] focus:bg-white focus:ring-2 focus:ring-[#2934b7]/20 outline-none transition-all font-light placeholder:text-gray-400"
                        placeholder="João"
                        required
                      />
                    </div>
                    <div>
                      <label htmlFor="lastName" className="block text-sm font-medium text-gray-700 mb-2">
                        Último Nome *
                      </label>
                      <input
                        type="text"
                        id="lastName"
                        value={formData.lastName}
                        onChange={(e) => setFormData({ ...formData, lastName: e.target.value })}
                        className="w-full px-4 py-3 rounded-xl border-2 border-gray-200 bg-gray-50 focus:border-[#2934b7] focus:bg-white focus:ring-2 focus:ring-[#2934b7]/20 outline-none transition-all font-light placeholder:text-gray-400"
                        placeholder="Silva"
                        required
                      />
                    </div>
                  </div>

                  {/* Telefone e Email */}
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
                        Telefone *
                      </label>
                      <input
                        type="tel"
                        id="phone"
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        className="w-full px-4 py-3 rounded-xl border-2 border-gray-200 bg-gray-50 focus:border-[#2934b7] focus:bg-white focus:ring-2 focus:ring-[#2934b7]/20 outline-none transition-all font-light placeholder:text-gray-400"
                        placeholder="910 658 115"
                        required
                      />
                    </div>
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                        Email *
                      </label>
                      <input
                        type="email"
                        id="email"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        className="w-full px-4 py-3 rounded-xl border-2 border-gray-200 bg-gray-50 focus:border-[#2934b7] focus:bg-white focus:ring-2 focus:ring-[#2934b7]/20 outline-none transition-all font-light placeholder:text-gray-400"
                        placeholder="joao.silva@exemplo.com"
                        required
                      />
                    </div>
                  </div>

                  {/* Serviço e Data */}
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="service" className="block text-sm font-medium text-gray-700 mb-2">
                        Serviço Pretendido
                      </label>
                      <select
                        id="service"
                        value={formData.service}
                        onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                        className="w-full px-4 py-3 rounded-xl border-2 border-gray-200 bg-gray-50 focus:border-[#2934b7] focus:bg-white focus:ring-2 focus:ring-[#2934b7]/20 outline-none transition-all font-light"
                      >
                        <option value="">Selecione um serviço</option>
                        <option value="primeira-consulta">Primeira Consulta / Avaliação</option>
                        <option value="limpeza">Limpeza Dentária</option>
                        <option value="carie">Tratamento de Cárie</option>
                        <option value="ortodontia">Ortodontia / Colocar Aparelho</option>
                        <option value="implantes">Implantes Dentários e Prótese</option>
                        <option value="branqueamento">Branqueamento / Clareamento Dental</option>
                        <option value="dentista-infantil">Dentista Infantil / Odontopediatria</option>
                        <option value="facetas">Facetas Dentárias</option>
                        <option value="urgencia">Urgência</option>
                        <option value="outro">Outro</option>
                      </select>
                    </div>
                    <div>
                      <label htmlFor="date" className="block text-sm font-medium text-gray-700 mb-2">
                        Data Pretendida
                      </label>
                      <input
                        type="date"
                        id="date"
                        value={formData.date}
                        onChange={(e) => setFormData({ ...formData, date: e.target.value })}
                        className="w-full px-4 py-3 rounded-xl border-2 border-gray-200 bg-gray-50 focus:border-[#2934b7] focus:bg-white focus:ring-2 focus:ring-[#2934b7]/20 outline-none transition-all font-light"
                      />
                    </div>
                  </div>

                  {/* Mensagem */}
                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                      Mensagem
                    </label>
                    <textarea
                      id="message"
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      rows={4}
                      className="w-full px-4 py-3 rounded-xl border-2 border-gray-200 bg-gray-50 focus:border-[#2934b7] focus:bg-white focus:ring-2 focus:ring-[#2934b7]/20 outline-none transition-all font-light placeholder:text-gray-400 resize-none"
                      placeholder="Descreva os seus sintomas, dúvidas ou pedidos especiais..."
                    ></textarea>
                  </div>

                  {/* Botão de Envio */}
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full inline-flex items-center justify-center gap-3 px-8 py-4 bg-gradient-to-r from-[#2934b7] to-[#1E2894] text-white rounded-full hover:shadow-xl hover:-translate-y-1 transition-all font-medium text-lg disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:translate-y-0"
                  >
                    {isSubmitting ? (
                      <>
                        <Loader2 className="w-6 h-6 animate-spin" />
                        Enviando...
                      </>
                    ) : (
                      <>
                        <Calendar className="w-6 h-6" />
                        Marcar Consulta
                      </>
                    )}
                  </button>

                  <p className="text-xs text-center text-gray-500 font-light">
                    * Campos obrigatórios. Entraremos em contacto em até 24 horas.
                  </p>
                </form>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-light text-gray-800 mb-4">Dentista em Joane - Localização da Clínica</h2>
            <p className="text-lg text-gray-600 font-light mb-2">
              Dentista perto de mim? Estamos em: Av. Padre Silva Rego, 592 Loja 1
            </p>
            <p className="text-base text-gray-500 font-light">
              4770-205 Joane, Vila Nova de Famalicão, Portugal
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="rounded-3xl overflow-hidden shadow-lg border border-gray-100">
              <iframe
                src="https://maps.google.com/maps?q=41.4335299,-8.4153634&t=&z=17&ie=UTF8&iwloc=&output=embed"
                width="100%"
                height="450"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-24 bg-gradient-to-br from-[#F8F9FA] to-[#E9ECEF]">
        <div className="max-w-4xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-light text-gray-800 mb-4">Perguntas Frequentes</h2>
            <p className="text-lg text-gray-500 font-light">
              Respostas às dúvidas mais comuns sobre tratamentos dentários e a nossa clínica em Famalicão.
            </p>
          </div>

          <div className="space-y-4">
            {[
              {
                question: "Qual é o preço do clareamento dental?",
                answer: "O preço do clareamento dental varia conforme a técnica utilizada. Na consulta de avaliação, o nosso médico dentista fará um orçamento personalizado. Oferecemos branqueamento profissional em consultório e também opção para fazer em casa."
              },
              {
                question: "Como tratar cárie no dente?",
                answer: "A cárie no dente é tratada através da remoção do tecido danificado e restauração dentária. O nosso cirurgião dentista realiza o procedimento com anestesia local para garantir o seu conforto. Casos mais avançados podem necessitar de tratamento de canal."
              },
              {
                question: "Quanto custa colocar aparelho dentário?",
                answer: "O custo para colocar aparelho depende do tipo escolhido (convencional ou invisível) e da complexidade do caso. Oferecemos planos de pagamento facilitados. Agende uma consulta de ortodontia para avaliação e orçamento detalhado."
              },
              {
                question: "Aceitam seguros de saúde dentista?",
                answer: "Sim! Aceitamos os principais seguros de saúde dentista em Portugal. Entre em contacto connosco para confirmar se o seu seguro tem protocolo com a nossa clínica. Também oferecemos facilidades de pagamento."
              },
              {
                question: "Têm dentista infantil / odontopediatria?",
                answer: "Sim, temos dentista infantil especializado em odontopediatria. A nossa equipa está preparada para atender crianças de todas as idades num ambiente acolhedor e sem stress. Ajudamos os mais pequenos a criar hábitos de saúde oral desde cedo."
              },
              {
                question: "Fazem implantes dentários e próteses?",
                answer: "Sim, somos um centro cirúrgico dentário completo. Realizamos implantes dentários de última geração e todo o tipo de próteses (fixas e removíveis). O nosso cirurgião dentista tem vasta experiência em reabilitação oral."
              },
              {
                question: "Onde fica a clínica? Há dentista perto de mim?",
                answer: "A Clínica Dentária Predileta fica em Joane, Vila Nova de Famalicão (Av. Padre Silva Rego, 592 Loja 1). Atendemos pacientes de Famalicão, Braga, Barcelos e toda a região. Se procura 'dentista perto de mim', estamos prontos para ajudar!"
              },
              {
                question: "O que são facetas dentárias?",
                answer: "Facetas dentárias são lâminas finas de porcelana ou resina colocadas sobre os dentes para melhorar a estética do sorriso. Corrigem cor, forma e alinhamento. O nosso médico dentista avalia se as facetas são a melhor solução para o seu caso."
              }
            ].map((faq, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05 }}
                className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden"
              >
                <details className="group">
                  <summary className="flex items-center justify-between p-6 cursor-pointer list-none hover:bg-gray-50 transition-colors">
                    <h3 className="text-lg font-light text-gray-800 pr-4">{faq.question}</h3>
                    <div className="flex-shrink-0 w-8 h-8 bg-[#2934b7] rounded-full flex items-center justify-center">
                      <CheckCircle className="w-5 h-5 text-white group-open:rotate-180 transition-transform" />
                    </div>
                  </summary>
                  <div className="px-6 pb-6 pt-2">
                    <p className="text-gray-600 leading-relaxed font-light">{faq.answer}</p>
                  </div>
                </details>
              </motion.div>
            ))}
          </div>

          <div className="mt-12 text-center">
            <p className="text-gray-600 font-light mb-6">
              Não encontrou a resposta que procurava?
            </p>
            <Link to="/contactos" className="inline-flex items-center gap-2 px-8 py-4 bg-[#2934b7] text-white rounded-full hover:shadow-lg hover:-translate-y-1 transition-all font-light">
              <Phone className="w-5 h-5" />
              Entre em Contacto
            </Link>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gradient-to-br from-[#2a2a2a] to-[#1a1a1a] text-gray-300">
        <div className="max-w-7xl mx-auto px-6 py-16">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
            <div>
              <div className="flex items-center gap-3 mb-4">
                <img
                  src={logoPredileta}
                  alt="Logo Clínica Predileta"
                  className="w-12 h-12 object-contain"
                />
                <div>
                  <div className="text-xl font-light text-white">Predileta</div>
                  <div className="text-xs text-gray-400 font-light">Clínica Dentária</div>
                </div>
              </div>
              <p className="text-sm leading-relaxed font-light">
                Dentista em Famalicão desde 2005. Médico dentista e cirurgião dentista qualificados. A sua saúde oral é a nossa prioridade. Clínica dentista completa com dentista infantil, ortodontia e implantologia.
              </p>
            </div>

            <div>
              <h4 className="text-white font-light mb-4">Contactos</h4>
              <ul className="space-y-3 text-sm">
                <li className="flex items-start gap-2">
                  <Phone className="w-4 h-4 mt-0.5 text-[#2934b7] bg-[#2d0cd600]" />
                  <span className="font-light">910 658 115</span>
                </li>
                <li className="flex items-start gap-2">
                  <Mail className="w-4 h-4 mt-0.5 text-[#2934b7]" />
                  <span className="font-light">geral@clinicapredileta.pt</span>
                </li>
                <li className="flex items-start gap-2">
                  <MapPin className="w-4 h-4 mt-0.5 text-[#2934b7]" />
                  <span className="font-light">Rua Central de Joane<br />Vila Nova de Famalicão</span>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="text-white font-light mb-4">Horário</h4>
              <ul className="space-y-2 text-sm font-light">
                <li className="flex justify-between gap-4">
                  <span>Segunda - Sexta</span>
                  <span className="text-right text-[#f7f8ff]">9h-12:30 | 14h-19h</span>
                </li>
                <li className="flex justify-between gap-4">
                  <span>Sábado</span>
                  <span className="text-[#f7f8ff]">9h-12:30</span>
                </li>
                <li className="flex justify-between gap-4">
                  <span>Domingo</span>
                  <span className="text-[#f7faff]">Encerrado</span>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="text-white font-light mb-4">Redes Sociais</h4>
              <div className="flex gap-3 mb-6 flex-wrap">
                <a href="#" className="w-10 h-10 bg-gray-800 hover:bg-[#2934b7] rounded-full flex items-center justify-center transition-colors">
                  <Facebook className="w-5 h-5" />
                </a>
                <a href="#" className="w-10 h-10 bg-gray-800 hover:bg-[#2934b7] rounded-full flex items-center justify-center transition-colors">
                  <Instagram className="w-5 h-5" />
                </a>
                <a href="#" className="w-10 h-10 bg-gray-800 hover:bg-[#2934b7] rounded-full flex items-center justify-center transition-colors">
                  <Youtube className="w-5 h-5" />
                </a>
                <a href="#" className="w-10 h-10 bg-gray-800 hover:bg-[#2934b7] rounded-full flex items-center justify-center transition-colors">
                  <Linkedin className="w-5 h-5" />
                </a>
                <a href="#" className="w-10 h-10 bg-gray-800 hover:bg-[#2934b7] rounded-full flex items-center justify-center transition-colors" title="TikTok">
                  <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z"/>
                  </svg>
                </a>
              </div>

              <h4 className="text-white font-light mb-3 text-sm">Certificações</h4>
              <div className="flex flex-col gap-2 text-xs font-light">
                <div className="flex items-center gap-2">
                  <Shield className="w-3 h-3 text-[#2934b7]" />
                  <span>Certificação ERS</span>
                </div>
                <div className="flex items-center gap-2">
                  <Award className="w-3 h-3 text-[#2934b7]" />
                  <span>Ordem dos Médicos Dentistas</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle className="w-3 h-3 text-[#2934b7]" />
                  <span>ISO 9001:2015</span>
                </div>
              </div>
            </div>
          </div>

          {/* Legislação */}
          <div className="border-t border-gray-800 pt-8 mb-8">
            <h4 className="text-white font-light mb-4 flex items-center gap-2">
              <Scale className="w-4 h-4 text-[#2934b7]" />
              Legislação em Vigor
            </h4>
            <div className="grid md:grid-cols-2 gap-4 text-xs font-light text-gray-400">
              <div>
                <p className="mb-2">• Lei n.º 110/2009 - Estatuto da Ordem dos Médicos Dentistas</p>
                <p className="mb-2">• Decreto-Lei n.º 353/99 - Regras de publicidade de serviços médicos</p>
                <p>• Lei n.º 15/2014 - Livro de Reclamações Eletrónico</p>
              </div>
              <div>
                <p className="mb-2">• Regulamento Geral de Proteção de Dados (RGPD)</p>
                <p className="mb-2">• Decreto-Lei n.º 10/2015 - Gestão de Resíduos Hospitalares</p>
                <p>• Licença de Funcionamento n.º: E123456/2005</p>
              </div>
            </div>
          </div>

          {/* Payment Methods */}
          <PaymentMethods />

          {/* Métodos de Pagamento */}
          <div className="border-t border-gray-800 pt-8 mt-8">
            <h4 className="text-white font-light mb-6 text-center text-lg">Métodos de Pagamento</h4>
            <div className="flex flex-wrap items-center justify-center gap-4 md:gap-6 mb-8">
              {/* MB WAY */}
              <div className="bg-white rounded-lg px-4 py-3 flex items-center justify-center h-12 w-20 hover:shadow-lg transition-shadow">
                <img
                  src="https://www.mbway.pt/wp-content/themes/mediafone/img/logo.svg"
                  alt="MB WAY"
                  className="h-6 w-auto object-contain"
                  onError={(e) => {
                    e.currentTarget.style.display = 'none';
                    e.currentTarget.parentElement!.innerHTML = '<span class="text-xs font-medium text-gray-700">MB WAY</span>';
                  }}
                />
              </div>

              {/* Multibanco */}
              <div className="bg-white rounded-lg px-4 py-3 flex items-center justify-center h-12 w-20 hover:shadow-lg transition-shadow">
                <img
                  src="https://upload.wikimedia.org/wikipedia/commons/8/8c/Multibanco_logo.svg"
                  alt="Multibanco"
                  className="h-6 w-auto object-contain"
                  onError={(e) => {
                    e.currentTarget.style.display = 'none';
                    e.currentTarget.parentElement!.innerHTML = '<span class="text-xs font-medium text-gray-700">Multibanco</span>';
                  }}
                />
              </div>

              {/* Visa */}
              <div className="bg-white rounded-lg px-4 py-3 flex items-center justify-center h-12 w-20 hover:shadow-lg transition-shadow">
                <img
                  src="https://upload.wikimedia.org/wikipedia/commons/4/41/Visa_Logo.png"
                  alt="Visa"
                  className="h-5 w-auto object-contain"
                  onError={(e) => {
                    e.currentTarget.style.display = 'none';
                    e.currentTarget.parentElement!.innerHTML = '<span class="text-xs font-medium text-blue-700">VISA</span>';
                  }}
                />
              </div>

              {/* Mastercard */}
              <div className="bg-white rounded-lg px-4 py-3 flex items-center justify-center h-12 w-20 hover:shadow-lg transition-shadow">
                <img
                  src="https://upload.wikimedia.org/wikipedia/commons/2/2a/Mastercard-logo.svg"
                  alt="Mastercard"
                  className="h-8 w-auto object-contain"
                  onError={(e) => {
                    e.currentTarget.style.display = 'none';
                    e.currentTarget.parentElement!.innerHTML = '<span class="text-xs font-medium text-red-600">Mastercard</span>';
                  }}
                />
              </div>

              {/* PayPal */}
              <div className="bg-white rounded-lg px-4 py-3 flex items-center justify-center h-12 w-20 hover:shadow-lg transition-shadow">
                <img
                  src="https://www.paypalobjects.com/webstatic/mktg/logo/pp_cc_mark_37x23.jpg"
                  alt="PayPal"
                  className="h-6 w-auto object-contain"
                  onError={(e) => {
                    e.currentTarget.style.display = 'none';
                    e.currentTarget.parentElement!.innerHTML = '<span class="text-xs font-medium text-blue-600">PayPal</span>';
                  }}
                />
              </div>

              {/* Apple Pay */}
              <div className="bg-white rounded-lg px-4 py-3 flex items-center justify-center h-12 w-20 hover:shadow-lg transition-shadow">
                <svg viewBox="0 0 48 20" className="h-6 w-auto" fill="currentColor">
                  <path d="M6.78 2.68c.46-.58.77-1.38.68-2.18-.66.03-1.46.44-1.93 1-.42.48-.79 1.26-.69 2 .73.06 1.48-.37 1.94-.82zm.67 1.07c-1.08-.06-2 .61-2.51.61-.51 0-1.3-.58-2.14-.56-1.1.02-2.12.64-2.69 1.63-1.15 1.99-.3 4.94.82 6.56.55.79 1.21 1.68 2.07 1.65.82-.03 1.13-.53 2.12-.53s1.26.53 2.14.51c.89-.02 1.46-.82 2.01-1.61.64-.91.9-1.79.92-1.84-.02-.01-1.77-.68-1.79-2.69-.02-1.68 1.37-2.48 1.43-2.53-.78-1.14-2-1.27-2.43-1.3-.05 0-.05-.01-.05-.01zm11.94-.42h-1.81v-1.56h-1.06v1.56h-1.35v.95h1.35v3.76c0 1.41.61 2.02 2.16 2.02.31 0 .62-.03.77-.06v-.95c-.14.02-.37.04-.66.04-.74 0-1.04-.28-1.04-1.05V4.28h1.81v-.95h-.17zm3.46 5.79c-1.31 0-2.17-1-2.17-2.52 0-1.53.87-2.53 2.17-2.53 1.3 0 2.17 1 2.17 2.53 0 1.52-.87 2.52-2.17 2.52zm0-.95c.87 0 1.35-.72 1.35-1.57 0-.86-.48-1.58-1.35-1.58s-1.35.72-1.35 1.58c0 .85.48 1.57 1.35 1.57zm7.55-3.84h-.98l-1.35 4.65h-.03l-1.37-4.65h-1.06l2 6.39c-.11.42-.35.59-.73.59-.11 0-.33-.01-.42-.02v.88c.11.02.41.04.56.04.95 0 1.4-.4 1.74-1.49l2.14-6.39h-.5z"/>
                  <text x="31" y="14" className="text-[9px] font-semibold" fill="currentColor">Pay</text>
                </svg>
              </div>

              {/* Google Pay */}
              <div className="bg-white rounded-lg px-4 py-3 flex items-center justify-center h-12 w-20 hover:shadow-lg transition-shadow">
                <svg viewBox="0 0 61 25" className="h-6 w-auto">
                  <path d="M27.2 11.1v5.5h-1.7v-13h4.5c1.1 0 2.1.4 2.8 1.1.8.7 1.2 1.7 1.2 2.7 0 1.1-.4 2-.1.2 2.8-.7.7-1.7 1.1-2.8 1.1h-4.5zm0-4.8v3.3h2.9c.7 0 1.3-.2 1.8-.7.5-.4.7-1 .7-1.7 0-.6-.2-1.2-.7-1.6-.5-.4-1.1-.7-1.8-.7l-2.9.4zm11.3-1.1c1.1 0 2.1.3 2.9.9l-.8 1.3c-.7-.5-1.4-.7-2.2-.7-.5 0-.9.1-1.2.3-.3.2-.4.5-.4.9 0 .5.4.8 1.2 1.1l1.5.5c.9.3 1.6.7 2 1.1.4.5.6 1.1.6 1.8 0 1-.4 1.8-1.1 2.4-.8.6-1.7.9-2.8.9-1.3 0-2.4-.3-3.2-1l.8-1.3c.7.6 1.6.9 2.6.9.6 0 1-.1 1.4-.4.3-.3.5-.6.5-1.1 0-.5-.4-.9-1.2-1.2l-1.5-.5c-.9-.3-1.5-.6-1.9-1-.4-.4-.6-1-.6-1.7 0-.9.3-1.7 1-2.3.7-.5 1.6-.8 2.6-.8l-.2.9z" fill="#3C4043"/>
                  <path d="M49.8 7.9c1.2 0 2.1.3 2.9 1 .7.7 1.1 1.6 1.1 2.8v4.9h-1.6v-1.1h-.1c-.7.9-1.5 1.3-2.6 1.3-1 0-1.8-.3-2.4-.8s-.9-1.2-.9-2c0-.9.3-1.6 1-2.1.7-.5 1.5-.8 2.6-.8.9 0 1.7.2 2.3.5v-.4c0-.6-.2-1.1-.7-1.5-.4-.4-1-.6-1.6-.6-.9 0-1.6.4-2.2 1.1l-1.5-.9c.9-1.1 2-1.7 3.5-1.7l.2.3zm-2.2 5.5c0 .4.2.8.5 1.1.4.3.8.4 1.3.4.7 0 1.3-.3 1.8-.8.5-.5.8-1.1.8-1.7-.5-.4-1.2-.6-2-.6-.6 0-1.2.2-1.6.5-.4.3-.6.7-.6 1.2l-.2-.1zm11.8-8.3h1.7l-5.3 13.5h-1.7l2-4.3-3.5-9.2h1.8l2.5 7.1h.1l2.4-7.1z" fill="#3C4043"/>
                  <path d="M17.4 9.8c0-.5 0-.9-.1-1.4H9v2.6h4.7c-.2 1.1-.8 2-1.7 2.6v2.2h2.7c1.6-1.5 2.5-3.7 2.5-6.3l.2.3z" fill="#4285F4"/>
                  <path d="M9 17.8c2.3 0 4.2-.8 5.6-2.1l-2.7-2.2c-.8.5-1.7.8-2.9.8-2.2 0-4.1-1.5-4.8-3.5H1.4v2.3c1.4 2.8 4.3 4.7 7.6 4.7z" fill="#34A853"/>
                  <path d="M4.2 10.8c-.4-1.1-.4-2.3 0-3.4V5.1H1.4c-1.2 2.4-1.2 5.2 0 7.6l2.8-1.9z" fill="#FBBC04"/>
                  <path d="M9 4.4c1.3 0 2.4.4 3.3 1.3l2.5-2.5C13.2 1.7 11.3.9 9 .9 5.7.9 2.8 2.8 1.4 5.6l2.8 2.2c.7-2 2.6-3.5 4.8-3.5z" fill="#EA4335"/>
                </svg>
              </div>
            </div>
          </div>

          <div className="border-t border-gray-800 pt-8 mt-8 text-center text-sm font-light">
            <p>&copy; 2026 Clínica Dentária Predileta. Todos os direitos reservados.</p>
            <p className="text-xs text-gray-500 mt-2">Alvará n.º E123456 | Diretora Clínica: Doutora Dora - Médico Dentista (OMD 12345) | Centro Cirúrgico Dentário</p>
            <div className="flex justify-center gap-4 mt-4 text-xs">
              <Link to="/politica-privacidade" className="text-gray-400 hover:text-[#2934b7] transition-colors">Política de Privacidade</Link>
              <span className="text-gray-600">|</span>
              <Link to="/termos-condicoes" className="text-gray-400 hover:text-[#2934b7] transition-colors">Termos e Condições</Link>
              <span className="text-gray-600">|</span>
              <a href="https://www.livroreclamacoes.pt/inicio/" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-[#2934b7] transition-colors">Livro de Reclamações</a>
            </div>
          </div>
        </div>
      </footer>

      {/* Toast */}
      <Toast show={toast.show} type={toast.type} message={toast.message} onClose={() => setToast({ ...toast, show: false })} />
    </div>
  );
}

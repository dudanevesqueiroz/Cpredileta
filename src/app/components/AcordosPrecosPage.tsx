import { motion } from "motion/react";
import { Link } from "react-router";
import { ArrowLeft, Calendar, CreditCard, FileText, Shield, Users, Phone, Mail, MapPin, Facebook, Instagram, Youtube, Linkedin, CheckCircle } from "lucide-react";
import logoPredileta from "../../imports/Logótipo_Predileta-removebg-preview.png";
import logoTipIcon from "../../imports/Logótipo_Predileta-removebg-preview-1.png";
import { useState } from "react";
import PaymentMethods from "./PaymentMethods";

export default function AcordosPrecosPage() {
  const [isPaused, setIsPaused] = useState(false);

  const seguradoras = [
    "Médis", "Advancecare", "Medicare", "Multicare", "AdvanceCare",
    "Allianz", "Generali", "AGEAS", "Fidelidade", "Liberty",
    "Tranquilidade", "Victoria", "Lusitania", "AXA", "Zurich"
  ];

  const parceirosInstitucionais = [
    "ADSE", "SAMS", "SSME", "CGD Seguros", "SAD-PSP",
    "SAD-GNR", "Millennium BCP", "Santander", "BPI"
  ];

  const facilidades = [
    {
      icon: CreditCard,
      title: "Pagamento Faseado",
      description: "Divida o valor do tratamento em várias prestações mensais sem juros."
    },
    {
      icon: FileText,
      title: "Financiamento Clínico",
      description: "Soluções de crédito personalizado através de parceiros bancários."
    },
    {
      icon: Shield,
      title: "Seguro de Saúde",
      description: "Aceites os principais seguros e acordos com seguradoras nacionais."
    },
    {
      icon: Users,
      title: "Orçamentos Personalizados",
      description: "Planos de tratamento adaptados às suas necessidades e orçamento."
    }
  ];

  const precos = [
    {
      categoria: "Consultas",
      servicos: [
        { nome: "Consulta de Avaliação", descricao: "Avaliação inicial completa", valor: "35€ - 50€" },
        { nome: "Consulta de Urgência", descricao: "Atendimento de emergência", valor: "50€ - 80€" },
        { nome: "Higiene Oral", descricao: "Limpeza dentária profissional", valor: "60€ - 90€" }
      ]
    },
    {
      categoria: "Tratamentos",
      servicos: [
        { nome: "Branqueamento Dentário", descricao: "Clareamento profissional", valor: "Sob avaliação" },
        { nome: "Ortodontia", descricao: "Aparelho fixo ou invisível", valor: "Sob avaliação" },
        { nome: "Implantes Dentários", descricao: "Implante + coroa", valor: "Sob avaliação" }
      ]
    },
    {
      categoria: "Outros",
      servicos: [
        { nome: "Tratamentos Complexos", descricao: "Reabilitação oral completa", valor: "Sob orçamento" },
        { nome: "Facetas de Porcelana", descricao: "Reabilitação estética", valor: "Sob orçamento" }
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Header Fixo */}
      <header className="header-fixed bg-white/98 backdrop-blur-lg shadow-sm">
        <nav className="border-b border-gray-100">
          <div className="max-w-7xl mx-auto px-6">
            <div className="flex justify-between items-center py-3 md:py-4">
              <Link to="/" className="flex items-center gap-2 md:gap-3">
                <img
                  src={logoPredileta}
                  alt="Logo Clínica Predileta"
                  className="w-10 h-10 md:w-12 md:h-12 object-contain"
                />
                <div>
                  <div className="text-base md:text-xl font-light tracking-wide text-[#2934b7]">Predileta</div>
                  <div className="text-[9px] md:text-[10px] uppercase tracking-widest text-[#2934b7]">Clínica Dentária</div>
                </div>
              </Link>

              <ul className="hidden lg:flex items-center gap-2">
                <li><Link to="/" className="px-5 py-2 rounded-full hover:text-[#1BADC4] hover:bg-gray-100 transition-all font-light text-[#2934b7]">Início</Link></li>
                <li><Link to="/historia" className="px-5 py-2 rounded-full hover:text-[#1BADC4] hover:bg-gray-100 transition-all font-light text-[#2934b7]">Clínica</Link></li>
                <li><Link to="/especialidades" className="px-5 py-2 rounded-full hover:text-[#1BADC4] hover:bg-gray-100 transition-all font-light text-[#2934b7]">Especialidades</Link></li>
                <li><Link to="/acordos-precos" className="px-5 py-2 rounded-full bg-[#2934b7]/10 text-[#2934b7] font-medium">Acordos e Preços</Link></li>
                <li><Link to="/contactos" className="px-5 py-2 rounded-full hover:text-[#1BADC4] hover:bg-gray-100 transition-all font-light text-[#2934b7]">Contactos</Link></li>
              </ul>

              <div className="hidden lg:flex items-center gap-3">
                <Link to="/marcar-consulta" className="inline-flex items-center gap-2 px-6 py-3 bg-[#2934b7] text-white rounded-full hover:bg-[#1E2894] hover:shadow-xl transition-all font-medium">
                  <Calendar className="w-5 h-5" />
                  Marcar Consulta
                </Link>
              </div>

              <Link to="/" className="lg:hidden inline-flex items-center gap-2 px-4 py-2 text-gray-600 hover:text-[#2934b7] transition-all font-light">
                <ArrowLeft className="w-5 h-5" />
                Voltar
              </Link>
            </div>
          </div>
        </nav>
      </header>

      {/* Hero Section */}
      <section className="pt-32 pb-20 bg-gradient-to-br from-[#F8F9FA] to-[#E9ECEF]">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Lado Esquerdo */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h1 className="text-5xl md:text-6xl font-light text-[#2934b7] mb-6 leading-tight">
                Acordos e Preços
              </h1>
              <p className="text-xl text-gray-600 font-light mb-8 leading-relaxed">
                Transparência, confiança e acessibilidade. Trabalhamos com as principais seguradoras e oferecemos facilidades de pagamento para garantir que todos possam aceder a tratamentos de qualidade.
              </p>
              <Link
                to="/marcar-consulta"
                className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-[#2934b7] to-[#1E2894] text-white rounded-full hover:shadow-xl hover:-translate-y-1 transition-all font-medium text-lg"
              >
                <Calendar className="w-6 h-6" />
                Marcar Consulta
              </Link>
              <p className="text-sm text-gray-500 font-light mt-6 flex items-center justify-center gap-2">
                <img src={logoTipIcon} alt="Dica" className="w-5 h-5" />
                Consulta de avaliação necessária para orçamento personalizado
              </p>
            </motion.div>

            {/* Lado Direito - Imagem */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="relative"
            >
              <img
                src="https://images.unsplash.com/photo-1629909613654-28e377c37b09?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=800&h=600"
                alt="Clínica moderna"
                className="rounded-3xl shadow-2xl w-full"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Secção Acordos e Parcerias */}
      <section className="py-24 bg-[#F7F9FB]">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-light text-gray-800 mb-4">Acordos e Seguradoras</h2>
            <p className="text-lg text-gray-600 font-light max-w-2xl mx-auto">
              Trabalhamos com as principais entidades seguradoras do país para facilitar o acesso aos nossos tratamentos dentários.
            </p>
          </div>

          {/* Carrossel Principal de Seguradoras */}
          <div className="mb-12 overflow-hidden">
            <motion.div
              className="flex gap-12"
              animate={isPaused ? {} : {
                x: [0, -2000]
              }}
              transition={{
                x: {
                  repeat: Infinity,
                  repeatType: "loop",
                  duration: 30,
                  ease: "linear"
                }
              }}
              onMouseEnter={() => setIsPaused(true)}
              onMouseLeave={() => setIsPaused(false)}
            >
              {[...seguradoras, ...seguradoras].map((seguradora, index) => (
                <div
                  key={index}
                  className="flex-shrink-0 w-48 h-24 bg-white rounded-xl border border-gray-200 flex items-center justify-center shadow-sm hover:shadow-md transition-shadow"
                >
                  <span className="text-xl font-light text-gray-400">{seguradora}</span>
                </div>
              ))}
            </motion.div>
          </div>

          {/* Carrossel Secundário - Parceiros Institucionais */}
          <div className="mb-8 overflow-hidden">
            <motion.div
              className="flex gap-12"
              animate={isPaused ? {} : {
                x: [-2000, 0]
              }}
              transition={{
                x: {
                  repeat: Infinity,
                  repeatType: "loop",
                  duration: 25,
                  ease: "linear"
                }
              }}
              onMouseEnter={() => setIsPaused(true)}
              onMouseLeave={() => setIsPaused(false)}
            >
              {[...parceirosInstitucionais, ...parceirosInstitucionais, ...parceirosInstitucionais].map((parceiro, index) => (
                <div
                  key={index}
                  className="flex-shrink-0 w-48 h-24 bg-white rounded-xl border border-gray-200 flex items-center justify-center shadow-sm hover:shadow-md transition-shadow"
                >
                  <span className="text-xl font-light text-gray-400">{parceiro}</span>
                </div>
              ))}
            </motion.div>
          </div>

          <p className="text-center text-sm text-gray-500 font-light mt-12 flex items-center justify-center gap-2">
            <img src={logoTipIcon} alt="Info" className="w-5 h-5" />
            Os acordos podem variar consoante a entidade seguradora e o plano associado. Contacte-nos para mais informações.
          </p>
        </div>
      </section>

      {/* Facilidades de Pagamento */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-light text-gray-800 mb-4">Facilidades de Pagamento</h2>
            <p className="text-lg text-gray-600 font-light max-w-2xl mx-auto">
              Oferecemos diversas opções para tornar o seu tratamento mais acessível.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {facilidades.map((facilidade, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-gradient-to-br from-[#F8F9FA] to-white border border-gray-200 rounded-2xl p-6 hover:shadow-lg transition-shadow"
              >
                <div className="w-14 h-14 bg-gradient-to-br from-[#2934b7] to-[#1E2894] rounded-xl flex items-center justify-center mb-4">
                  <facilidade.icon className="w-7 h-7 text-white" />
                </div>
                <h3 className="text-xl font-light text-gray-800 mb-2">{facilidade.title}</h3>
                <p className="text-gray-600 font-light text-sm leading-relaxed">{facilidade.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Transparência e Processo Clínico */}
      <section className="py-20 bg-[#F7F9FB]">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="text-4xl font-light text-gray-800 mb-8 text-center">Transparência e Avaliação Clínica</h2>

          <div className="space-y-6 text-gray-600 font-light leading-relaxed">
            <p>
              Na Clínica Predileta, cada paciente é único e merece um plano de tratamento personalizado. Por este motivo, todos os nossos orçamentos são elaborados após uma avaliação clínica detalhada, onde são considerados múltiplos fatores como o estado de saúde oral, complexidade do caso, materiais necessários e tempo de tratamento.
            </p>
            <p>
              Os valores indicativos apresentados nesta página são meramente informativos e podem variar consoante as necessidades específicas de cada paciente. Acreditamos na total transparência dos nossos serviços, pelo que todos os orçamentos são apresentados de forma clara e detalhada, sem custos ocultos.
            </p>
          </div>
        </div>
      </section>

      {/* Tabela de Preços */}
      <section className="py-24 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-light text-gray-800 mb-4">Tabela de Preços Indicativa</h2>
            <p className="text-lg text-gray-600 font-light">
              Valores de referência sujeitos a avaliação clínica individual
            </p>
          </div>

          <div className="space-y-12">
            {precos.map((categoria, catIndex) => (
              <motion.div
                key={catIndex}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="bg-white rounded-2xl border border-gray-200 overflow-hidden shadow-sm"
              >
                <div className="bg-gradient-to-r from-[#2934b7] to-[#1E2894] px-6 py-4">
                  <h3 className="text-xl font-medium text-white">{categoria.categoria}</h3>
                </div>
                <div className="divide-y divide-gray-100">
                  {categoria.servicos.map((servico, index) => (
                    <div key={index} className="grid md:grid-cols-3 gap-4 px-6 py-4 hover:bg-gray-50 transition-colors">
                      <div className="font-medium text-gray-800">{servico.nome}</div>
                      <div className="text-gray-600 font-light">{servico.descricao}</div>
                      <div className="text-right font-medium text-[#2934b7]">{servico.valor}</div>
                    </div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>

          <p className="text-center text-sm text-gray-500 font-light mt-8 flex items-center justify-center gap-2">
            <img src={logoTipIcon} alt="Aviso" className="w-5 h-5" />
            Valores indicativos sujeitos a avaliação clínica individual. Consulte-nos para orçamento personalizado.
          </p>
        </div>
      </section>

      {/* CTA Final */}
      <section className="py-24 bg-gradient-to-br from-[#2934b7] to-[#1E2894]">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-5xl md:text-6xl font-light text-white mb-6">
            Dê o primeiro passo para o seu sorriso
          </h2>
          <p className="text-xl text-white/90 font-light mb-8">
            Agende a sua consulta de avaliação e receba um orçamento personalizado
          </p>
          <Link
            to="/marcar-consulta"
            className="inline-flex items-center gap-2 px-10 py-5 bg-white text-[#2934b7] rounded-full hover:shadow-2xl hover:-translate-y-1 transition-all font-medium text-lg"
          >
            <Calendar className="w-6 h-6" />
            Marcar Consulta
          </Link>

          <div className="grid md:grid-cols-2 gap-8 mt-16 text-white">
            <div className="flex items-center justify-center gap-3">
              <Phone className="w-6 h-6" />
              <div className="text-left">
                <div className="text-sm text-white/70">Telefone</div>
                <div className="font-medium">910 658 115</div>
              </div>
            </div>
            <div className="flex items-center justify-center gap-3">
              <Mail className="w-6 h-6" />
              <div className="text-left">
                <div className="text-sm text-white/70">Email</div>
                <div className="font-medium">geral@clinicapredileta.pt</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-gray-300 py-16">
        <div className="max-w-7xl mx-auto px-6">
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
                Dentista em Famalicão desde 2005. A sua saúde oral é a nossa prioridade.
              </p>
            </div>

            <div>
              <h4 className="text-white font-light mb-4">Contactos</h4>
              <ul className="space-y-3 text-sm">
                <li className="flex items-start gap-2">
                  <Phone className="w-4 h-4 mt-0.5 text-[#2934b7]" />
                  <span className="font-light">910 658 115</span>
                </li>
                <li className="flex items-start gap-2">
                  <Mail className="w-4 h-4 mt-0.5 text-[#2934b7]" />
                  <span className="font-light">geral@clinicapredileta.pt</span>
                </li>
                <li className="flex items-start gap-2">
                  <MapPin className="w-4 h-4 mt-0.5 text-[#2934b7]" />
                  <span className="font-light">Av. Padre Silva Rego, 592<br />4770-205 Joane</span>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="text-white font-light mb-4">Horário</h4>
              <ul className="space-y-2 text-sm font-light">
                <li className="flex justify-between gap-4">
                  <span>Segunda - Sexta</span>
                  <span className="text-white">9h-19h</span>
                </li>
                <li className="flex justify-between gap-4">
                  <span>Sábado</span>
                  <span className="text-white">9h-12:30</span>
                </li>
                <li className="flex justify-between gap-4">
                  <span>Domingo</span>
                  <span className="text-white">Encerrado</span>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="text-white font-light mb-4">Redes Sociais</h4>
              <div className="flex gap-3 flex-wrap">
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
              </div>
            </div>
          </div>

          {/* Payment Methods */}
          <PaymentMethods />

          <div className="border-t border-gray-800 pt-8 mt-8 text-center text-sm font-light">
            <p>&copy; 2026 Clínica Dentária Predileta. Todos os direitos reservados.</p>
            <div className="flex justify-center gap-4 mt-4 text-xs">
              <Link to="/politica-privacidade" className="text-gray-400 hover:text-[#2934b7] transition-colors">Política de Privacidade</Link>
              <span className="text-gray-600">|</span>
              <Link to="/termos-condicoes" className="text-gray-400 hover:text-[#2934b7] transition-colors">Termos e Condições</Link>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

import { motion } from "motion/react";
import { Link } from "react-router";
import { ArrowLeft, Calendar, CreditCard, FileText, Users, Phone, Mail, MapPin, Facebook, Instagram, Youtube, Linkedin, CheckCircle } from "lucide-react";
import logoPredileta from "../../imports/Logótipo_Predileta-removebg-preview.png";
import logoTipIcon from "../../imports/Logótipo_Predileta-removebg-preview-1.png";
import PaymentMethods from "./PaymentMethods";

export default function AcordosPrecosPage() {
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
                <li><Link to="/acordos-precos" className="px-5 py-2 rounded-full bg-[#2934b7]/10 text-[#2934b7] font-medium">Preços</Link></li>
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
        <div className="max-w-4xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <h1 className="text-5xl md:text-6xl font-light text-[#2934b7] mb-6 leading-tight">
              Preços
            </h1>
            <p className="text-xl text-gray-600 font-light mb-8 leading-relaxed max-w-3xl mx-auto">
              Transparência, confiança e acessibilidade. Oferecemos facilidades de pagamento para garantir que todos possam aceder a tratamentos de qualidade.
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

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
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

import { motion } from "motion/react";
import { Link } from "react-router";
import { ArrowLeft, Smile, Stethoscope, AlignCenterHorizontal, Sparkles, Heart, Calendar, CheckCircle, Phone, Mail, MapPin, Facebook, Instagram, Youtube, Linkedin, Shield, Award, Scale } from "lucide-react";
import logoPredileta from "../../imports/Logotipo_Predileta-removebg-preview.png";
import PaymentMethods from "./PaymentMethods";

export default function EspecialidadesPage() {
  const especialidades = [
    {
      icon: Stethoscope,
      title: "Clínica Geral - Médico Dentista",
      description: "Cuidados dentários completos para toda a família com médico dentista qualificado",
      fullDescription: "A Clínica Geral é a base da medicina dentária, onde o nosso médico dentista trata desde problemas simples até situações mais complexas. Realizamos consultas de rotina, tratamento de cárie no dente, restaurações, extrações e muito mais. O nosso cirurgião dentista garante a sua saúde oral em perfeitas condições.",
      image: "https://images.unsplash.com/photo-1758205308179-4e00e0e4060b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkZW50YWwlMjBjaGVja3VwJTIwZGVudGlzdHxlbnwxfHx8fDE3NzYwOTc4OTJ8MA&ixlib=rb-4.1.0&q=80&w=1080",
      benefits: [
        "Consulta dentista de rotina e check-ups",
        "Tratamento de cárie no dente e restaurações",
        "Extrações dentárias com cirurgião dentista",
        "Tratamentos de canal (endodontia)",
        "Gengivite e periodontite"
      ]
    },
    {
      icon: Heart,
      title: "Limpeza Dentária e Prevenção",
      description: "Limpeza dentária profissional para prevenir cáries e manter a saúde oral",
      fullDescription: "A prevenção é fundamental para manter um sorriso saudável. Oferecemos limpeza dentária profissional (destartarização), aplicação de flúor, selantes e educação sobre higiene oral. Com consultas regulares ao dentista, podemos identificar cáries precocemente e evitar tratamentos mais complexos no futuro.",
      image: "https://images.unsplash.com/photo-1581585004042-bca38021ce1e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkZW50YWwlMjBjbGVhbmluZyUyMGh5Z2llbmV8ZW58MXx8fHwxNzc2MDk3ODkyfDA&ixlib=rb-4.1.0&q=80&w=1080",
      benefits: [
        "Limpeza dentária profissional completa (destartarização)",
        "Aplicação de flúor para prevenir cáries",
        "Selantes de proteção",
        "Polimento dentário para saúde oral",
        "Orientação de higiene oral personalizada pelo dentista"
      ]
    },
    {
      icon: AlignCenterHorizontal,
      title: "Ortodontia - Colocar Aparelho",
      description: "Colocar aparelho dentário para sorrisos alinhados. Ortodontia para crianças e adultos",
      fullDescription: "A ortodontia corrige o posicionamento dos dentes e dos maxilares, melhorando não apenas a estética do sorriso, mas também a função mastigatória e a saúde oral. Se quer colocar aparelho, trabalhamos com aparelhos fixos convencionais, aparelhos estéticos e alinhadores invisíveis. Atendemos crianças (odontopediatria) e adultos.",
      image: "https://images.unsplash.com/photo-1598531228433-d9f0cb960816?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkZW50YWwlMjBvcnRob2RvbnRpY3MlMjBicmFjZXN8ZW58MXx8fHwxNzc2MDk3ODkxfDA&ixlib=rb-4.1.0&q=80&w=1080",
      benefits: [
        "Colocar aparelho fixo metálico e estético",
        "Alinhadores invisíveis (aparelho transparente)",
        "Correção de mordida",
        "Tratamento de má oclusão",
        "Ortodontia para crianças (odontopediatria) e adultos"
      ]
    },
    {
      icon: AlignCenterHorizontal,
      title: "Alinhamento Dentário",
      description: "Tecnologia invisível para sorrisos perfeitos",
      fullDescription: "Os alinhadores invisíveis são uma alternativa moderna e discreta aos aparelhos convencionais. Personalizados digitalmente para cada paciente, são removíveis, confortáveis e praticamente invisíveis, permitindo alinhar os dentes sem comprometer a estética durante o tratamento.",
      image: "https://images.unsplash.com/photo-1626736903650-2289a3b32ed8?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwyfHxkZW50YWwlMjBvcnRob2RvbnRpY3MlMjBicmFjZXN8ZW58MXx8fHwxNzc2MDk3ODkxfDA&ixlib=rb-4.1.0&q=80&w=1080",
      benefits: [
        "Alinhadores transparentes e removíveis",
        "Planejamento digital do tratamento",
        "Conforto e praticidade",
        "Resultados previsíveis",
        "Ideal para adultos e adolescentes"
      ]
    },
    {
      icon: Sparkles,
      title: "Branqueamento Dentário - Clareamento Dental",
      description: "Preço do clareamento dental acessível. Dentes mais brancos e luminosos",
      fullDescription: "O branqueamento dentário profissional (clareamento dental) é um tratamento seguro e eficaz para clarear os dentes e eliminar manchas causadas por alimentos, bebidas e envelhecimento. O preço do clareamento dental varia conforme a técnica. Utilizamos técnicas avançadas em consultório pela nossa clínica dentista e também oferecemos kits personalizados para uso domiciliar sob supervisão do médico dentista.",
      image: "https://images.unsplash.com/photo-1657313611708-17639e445455?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0ZWV0aCUyMHdoaXRlbmluZyUyMGRlbnRhbHxlbnwxfHx8fDE3NzYwOTE0NzN8MA&ixlib=rb-4.1.0&q=80&w=1080",
      benefits: [
        "Clareamento dental em consultório",
        "Branqueamento caseiro supervisionado pelo dentista",
        "Técnicas de última geração",
        "Resultados imediatos e duradouros",
        "Preço do clareamento dental competitivo"
      ]
    },
    {
      icon: Smile,
      title: "Reabilitação Oral e Facetas",
      description: "Restauração completa do sorriso com facetas, próteses e implantes",
      fullDescription: "A reabilitação oral envolve tratamentos abrangentes para restaurar a função, saúde oral e estética da boca. O nosso médico dentista combina várias especialidades para devolver-lhe um sorriso completo e funcional, seja através de prótese dentária, implantes, coroas, facetas ou outros procedimentos. Atendimento no nosso centro cirúrgico dentário.",
      image: "https://images.unsplash.com/photo-1758205308181-d52b41e00cef?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwyfHxkZW50YWwlMjBjaGVja3VwJTIwZGVudGlzdHxlbnwxfHx8fDE3NzYwOTc4OTJ8MA&ixlib=rb-4.1.0&q=80&w=1080",
      benefits: [
        "Prótese fixa e removível",
        "Coroas e pontes dentárias",
        "Facetas de porcelana para estética",
        "Reconstruções estéticas completas",
        "Planejamento personalizado pelo médico dentista"
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="header-fixed bg-white/98 backdrop-blur-lg shadow-sm">
        <nav className="border-b border-gray-100">
          <div className="max-w-7xl mx-auto px-6 py-4">
            <div className="flex justify-between items-center">
              <Link to="/" className="flex items-center gap-3">
                <div className="flex items-center gap-3">
                  <img
                    src={logoPredileta}
                    alt="Logo Clínica Predileta"
                    className="w-10 h-10 md:w-12 md:h-12 object-contain"
                  />
                  <div>
                    <div className="text-base md:text-xl font-light text-gray-800 tracking-wide">Predileta</div>
                    <div className="text-[9px] md:text-[10px] text-gray-400 uppercase tracking-widest">Clínica Dentária</div>
                  </div>
                </div>
              </Link>

              <Link to="/" className="inline-flex items-center gap-2 px-4 py-2 md:px-6 md:py-3 text-sm md:text-base text-gray-600 hover:text-[#2934b7] transition-all font-light">
                <ArrowLeft className="w-4 h-4 md:w-5 md:h-5" />
                Voltar ao Início
              </Link>
            </div>
          </div>
        </nav>
      </header>

      {/* Hero Section */}
      <section className="relative pt-24 md:pt-32 pb-12 md:pb-20 bg-gradient-to-br from-[#F8F9FA] to-[#E9ECEF]">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-white rounded-full shadow-sm mb-4 md:mb-6 border border-gray-100">
              <Stethoscope className="w-4 h-4 text-[#2934b7]" />
              <span className="text-sm font-light text-gray-600">Serviços Especializados</span>
            </div>

            <h1 className="text-5xl lg:text-6xl font-light text-gray-800 leading-tight mb-4 md:mb-6">Especialidades</h1>

            <p className="text-xl text-gray-600 font-light">
              Médico dentista qualificado. Limpeza dentária, ortodontia, implantes, prótese e tratamentos de saúde oral completos na nossa clínica dentista em Vila Nova de Famalicão
            </p>
          </motion.div>
        </div>
      </section>

      {/* Especialidades */}
      <section className="section-padding bg-white">
        <div className="max-w-responsive">
          <div className="space-y-32">
            {especialidades.map((esp, index) => (
              <motion.div
                key={index}
                className={`flex flex-col ${index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'} gap-8 md:gap-12 items-center`}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
              >
                {/* Image */}
                <div className="flex-1">
                  <div className="rounded-3xl overflow-hidden shadow-2xl">
                    <img
                      src={esp.image}
                      alt={esp.title}
                      className="w-full h-[400px] object-cover"
                    />
                  </div>
                </div>

                {/* Content */}
                <div className="flex-1">
                  <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-[#2934b7] to-[#1E2894] rounded-2xl mb-4 md:mb-6">
                    <esp.icon className="w-6 h-6 md:w-8 md:h-8 text-white" />
                  </div>

                  <h2 className="text-4xl font-light text-gray-800 mb-4">{esp.title}</h2>
                  <p className="text-xl text-[#2934b7] mb-4 md:mb-6 font-light">{esp.description}</p>
                  <p className="text-gray-600 leading-relaxed mb-5 md:mb-8 font-light text-lg">
                    {esp.fullDescription}
                  </p>

                  <div className="space-y-3">
                    <h3 className="text-lg font-light text-gray-800 mb-4">O que oferecemos:</h3>
                    {esp.benefits.map((benefit, idx) => (
                      <div key={idx} className="flex items-start gap-3">
                        <CheckCircle className="w-5 h-5 text-[#2934b7] flex-shrink-0 mt-0.5" />
                        <span className="text-gray-600 font-light">{benefit}</span>
                      </div>
                    ))}
                  </div>

                  <Link
                    to="/marcar-consulta"
                    className="inline-flex items-center gap-2 px-6 py-3 md:px-8 md:py-4 text-sm md:text-base bg-[#2934b7] text-white rounded-full hover:bg-[#1E2894] hover:shadow-xl hover:-translate-y-1 transition-all font-light mt-8"
                  >
                    <Calendar className="w-4 h-4 md:w-5 md:h-5" />
                    Marcar Consulta
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Back to Top Button */}
      <section className="py-12 bg-white">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <Link to="/" className="inline-flex items-center gap-2 px-6 py-3 md:px-8 md:py-4 text-sm md:text-base bg-[#2934b7] text-white rounded-full hover:bg-[#1E2894] hover:shadow-lg hover:-translate-y-1 transition-all font-light">
            <ArrowLeft className="w-4 h-4 md:w-5 md:h-5" />
            Voltar ao Início
          </Link>
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
    </div>
  );
}
import { motion } from "motion/react";
import { Link } from "react-router";
import { ArrowLeft, Award, Heart, Users, Target, Clock, MapPin, Star, Calendar } from "lucide-react";
import logoPredileta from "../../imports/Logótipo_Predileta-removebg-preview.png";

export default function HistoriaPage() {
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
              <Heart className="w-4 h-4 text-[#2934b7]" />
              <span className="text-sm font-light text-gray-600">A Nossa Jornada</span>
            </div>

            <h1 className="text-5xl lg:text-6xl font-light text-gray-800 leading-tight mb-4 md:mb-6">
              A História da <span className="text-[#2934b7]">Clínica Predileta</span>
            </h1>

            <p className="text-xl text-gray-600 font-light">
              Mais de 20 anos a cuidar do sorriso das famílias de Joane
            </p>
          </motion.div>
        </div>
      </section>

      {/* Timeline Section */}
      <section className="section-padding bg-white">
        <div className="max-w-4xl mx-auto px-6">
          <div className="space-y-16">
            {/* 2005 */}
            <motion.div
              className="flex gap-6 md:gap-8"
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <div className="flex-shrink-0 w-32">
                <div className="text-4xl font-light text-[#2934b7]">2005</div>
              </div>
              <div className="flex-1">
                <h3 className="text-2xl font-light text-gray-800 mb-4">O Início da Jornada</h3>
                <p className="text-gray-600 leading-relaxed font-light">
                  A Clínica Dentária Predileta abriu as suas portas em Joane com um sonho: oferecer cuidados de saúde oral de excelência num ambiente acolhedor e familiar. Fundada pela Dra. Maria, a clínica nasceu com o compromisso de tratar cada paciente como família, construindo relações de confiança duradouras.
                </p>
              </div>
            </motion.div>

            {/* 2008 */}
            <motion.div
              className="flex gap-6 md:gap-8"
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <div className="flex-shrink-0 w-32">
                <div className="text-4xl font-light text-[#2934b7]">2008</div>
              </div>
              <div className="flex-1">
                <h3 className="text-2xl font-light text-gray-800 mb-4">Expansão e Crescimento</h3>
                <p className="text-gray-600 leading-relaxed font-light">
                  Três anos após a abertura, a clínica expandiu as suas instalações e equipa, incorporando novas especialidades como ortodontia e implantologia. Este foi um marco importante que nos permitiu servir melhor a comunidade de Joane e Vila Nova de Famalicão.
                </p>
              </div>
            </motion.div>

            {/* 2012 */}
            <motion.div
              className="flex gap-6 md:gap-8"
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <div className="flex-shrink-0 w-32">
                <div className="text-4xl font-light text-[#2934b7]">2012</div>
              </div>
              <div className="flex-1">
                <h3 className="text-2xl font-light text-gray-800 mb-4">Certificação de Qualidade</h3>
                <p className="text-gray-600 leading-relaxed font-light">
                  Obtivemos a certificação ERS e implementámos protocolos de qualidade rigorosos. Este reconhecimento oficial reforçou o nosso compromisso com a excelência e segurança nos tratamentos que oferecemos aos nossos pacientes.
                </p>
              </div>
            </motion.div>

            {/* 2015 */}
            <motion.div
              className="flex gap-6 md:gap-8"
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <div className="flex-shrink-0 w-32">
                <div className="text-4xl font-light text-[#2934b7]">2015</div>
              </div>
              <div className="flex-1">
                <h3 className="text-2xl font-light text-gray-800 mb-4">Tecnologia de Ponta</h3>
                <p className="text-gray-600 leading-relaxed font-light">
                  Investimos em equipamentos de última geração, incluindo sistemas de radiografia digital e tecnologia 3D para planeamento de implantes. A modernização tecnológica permitiu-nos oferecer tratamentos mais precisos e confortáveis.
                </p>
              </div>
            </motion.div>

            {/* 2020 */}
            <motion.div
              className="flex gap-6 md:gap-8"
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <div className="flex-shrink-0 w-32">
                <div className="text-4xl font-light text-[#2934b7]">2020</div>
              </div>
              <div className="flex-1">
                <h3 className="text-2xl font-light text-gray-800 mb-4">Adaptação e Resiliência</h3>
                <p className="text-gray-600 leading-relaxed font-light">
                  Durante a pandemia, reforçámos todos os protocolos de segurança e higienização, garantindo que os nossos pacientes continuassem a receber cuidados dentários de qualidade num ambiente totalmente seguro. A nossa dedicação nunca vacilou.
                </p>
              </div>
            </motion.div>

            {/* 2025 */}
            <motion.div
              className="flex gap-6 md:gap-8"
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <div className="flex-shrink-0 w-32">
                <div className="text-4xl font-light text-[#2934b7]">Hoje</div>
              </div>
              <div className="flex-1">
                <h3 className="text-2xl font-light text-gray-800 mb-4">Gerações de Sorrisos</h3>
                <p className="text-gray-600 leading-relaxed font-light">
                  Atualmente, temos o privilégio de acompanhar várias gerações da mesma família. Muitos dos nossos pacientes que eram crianças em 2005 trazem hoje os seus próprios filhos à clínica. Esta continuidade é a maior prova da confiança que conquistámos ao longo dos anos.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Mission, Vision, Values */}
      <section className="section-padding bg-gradient-to-br from-[#F8F9FA] to-[#E9ECEF]">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-5 md:mb-8 md:mb-4 md:mb-6 md:mb-5 md:mb-8 lg:mb-12 lg:mb-16">
            <h2 className="text-4xl font-light text-gray-800 mb-4">Missão, Visão e Valores</h2>
            <p className="text-lg text-gray-600 font-light">
              Os princípios que nos guiam todos os dias
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6 md:gap-8">
            <motion.div
              className="bg-white rounded-2xl md:rounded-3xl p-5 md:p-8 shadow-lg"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <Target className="w-12 h-12 text-[#2934b7] mb-4 md:mb-6" />
              <h3 className="text-2xl font-light text-gray-800 mb-4">Missão</h3>
              <p className="text-gray-600 leading-relaxed font-light">
                Proporcionar cuidados de saúde oral de excelência, combinando tecnologia avançada com um atendimento humano e personalizado, contribuindo para o bem-estar e confiança dos nossos pacientes.
              </p>
            </motion.div>

            <motion.div
              className="bg-white rounded-2xl md:rounded-3xl p-5 md:p-8 shadow-lg"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
            >
              <Star className="w-12 h-12 text-[#2934b7] mb-4 md:mb-6" />
              <h3 className="text-2xl font-light text-gray-800 mb-4">Visão</h3>
              <p className="text-gray-600 leading-relaxed font-light">
                Ser a clínica dentária de referência na região, reconhecida pela qualidade dos tratamentos, inovação constante e pela relação de confiança e proximidade com cada paciente e família.
              </p>
            </motion.div>

            <motion.div
              className="bg-white rounded-2xl md:rounded-3xl p-5 md:p-8 shadow-lg"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
            >
              <Heart className="w-12 h-12 text-[#2934b7] mb-4 md:mb-6" />
              <h3 className="text-2xl font-light text-gray-800 mb-4">Valores</h3>
              <ul className="space-y-3 text-gray-600 font-light">
                <li className="flex items-start gap-2">
                  <span className="w-1.5 h-1.5 bg-[#2934b7] rounded-full mt-2"></span>
                  <span>Humanização e empatia</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="w-1.5 h-1.5 bg-[#2934b7] rounded-full mt-2"></span>
                  <span>Excelência técnica</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="w-1.5 h-1.5 bg-[#2934b7] rounded-full mt-2"></span>
                  <span>Ética profissional</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="w-1.5 h-1.5 bg-[#2934b7] rounded-full mt-2"></span>
                  <span>Inovação contínua</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="w-1.5 h-1.5 bg-[#2934b7] rounded-full mt-2"></span>
                  <span>Transparência e confiança</span>
                </li>
              </ul>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="section-padding bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-5 md:mb-8 md:mb-4 md:mb-6 md:mb-5 md:mb-8 lg:mb-12 lg:mb-16">
            <h2 className="text-4xl font-light text-gray-800 mb-4">A Nossa Equipa</h2>
            <p className="text-lg text-gray-600 font-light">
              Profissionais dedicados e apaixonados pela saúde oral
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 md:gap-12">
            <motion.div
              className="text-center"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <div className="w-48 h-48 mx-auto mb-4 md:mb-6 bg-gradient-to-br from-[#2934b7] to-[#1E2894] rounded-full flex items-center justify-center">
                <Users className="w-24 h-24 text-white" />
              </div>
              <h3 className="text-2xl font-light text-gray-800 mb-2">Dra. Maria</h3>
              <p className="text-[#2934b7] mb-4 font-light">Diretora Clínica | OMD 12345</p>
              <p className="text-gray-600 leading-relaxed font-light">
                Fundadora da clínica, especialista em Medicina Dentária com mais de 25 anos de experiência. Pós-graduada em Implantologia e Reabilitação Oral.
              </p>
            </motion.div>

            <motion.div
              className="text-center"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
            >
              <div className="w-48 h-48 mx-auto mb-4 md:mb-6 bg-gradient-to-br from-[#2934b7] to-[#1E2894] rounded-full flex items-center justify-center">
                <Award className="w-24 h-24 text-white" />
              </div>
              <h3 className="text-2xl font-light text-gray-800 mb-2">Equipa Multidisciplinar</h3>
              <p className="text-[#2934b7] mb-4 font-light">Especialistas Certificados</p>
              <p className="text-gray-600 leading-relaxed font-light">
                A nossa equipa é composta por profissionais altamente qualificados nas áreas de ortodontia, implantologia, endodontia e medicina dentária geral.
              </p>
            </motion.div>
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
      <footer className="bg-gray-900 text-gray-300 py-12">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <p className="text-sm font-light">&copy; 2026 Clínica Dentária Predileta. Todos os direitos reservados.</p>
        </div>
      </footer>
    </div>
  );
}
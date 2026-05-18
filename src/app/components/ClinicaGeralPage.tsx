import { motion } from "motion/react";
import { Link } from "react-router";
import { ArrowLeft, Stethoscope, CheckCircle, Calendar } from "lucide-react";
import logoPredileta from "../../imports/Logotipo_Predileta-removebg-preview.png";

export default function ClinicaGeralPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="header-fixed bg-white shadow-sm">
        <nav className="border-b border-gray-100">
          <div className="max-w-7xl mx-auto px-6 py-4">
            <div className="flex justify-between items-center">
              <Link to="/" className="flex items-center gap-3">
                <img src={logoPredileta} alt="Logo Clínica Predileta" className="w-10 h-10 md:w-12 md:h-12 object-contain" />
                <div>
                  <div className="text-base md:text-xl font-light text-gray-800 tracking-wide">Predileta</div>
                  <div className="text-[9px] md:text-[10px] text-gray-400 uppercase tracking-widest">Clínica Dentária</div>
                </div>
              </Link>
              <Link to="/" className="inline-flex items-center gap-2 px-4 py-2 md:px-6 md:py-3 text-sm md:text-base text-gray-600 hover:text-[#2934b7] transition-all font-light">
                <ArrowLeft className="w-4 h-4 md:w-5 md:h-5" />
                Voltar
              </Link>
            </div>
          </div>
        </nav>
      </header>

      {/* Hero */}
      <section className="pt-24 md:pt-32 pb-12 md:pb-20 bg-gradient-to-br from-[#F8F9FA] to-[#E9ECEF]">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
            <div className="w-20 h-20 bg-[#2934b7] rounded-2xl flex items-center justify-center mx-auto mb-4 md:mb-6">
              <Stethoscope className="w-10 h-10 text-white" />
            </div>
            <h1 className="text-5xl font-light text-gray-800 mb-4 md:mb-6">Clínica Geral</h1>
            <p className="text-xl text-gray-600 font-light">Cuidados dentários completos para toda a família</p>
          </motion.div>
        </div>
      </section>

      {/* Content */}
      <section className="section-padding bg-white">
        <div className="max-w-4xl mx-auto px-6">
          <div className="prose prose-lg max-w-none">
            <p className="text-gray-600 leading-relaxed font-light mb-5 md:mb-8">
              A Clínica Geral é a base de todos os cuidados dentários. Na Clínica Predileta, oferecemos uma abordagem abrangente e personalizada para manter a sua saúde oral em perfeito estado.
            </p>

            <h2 className="text-3xl font-light text-gray-800 mb-4 md:mb-6 mt-12">O que inclui</h2>
            <div className="grid md:grid-cols-2 gap-6 mb-4 md:mb-6 md:mb-5 md:mb-8 lg:mb-12">
              {[
                "Consultas de rotina e check-ups",
                "Diagnóstico e prevenção",
                "Restaurações dentárias (cáries)",
                "Extrações simples",
                "Tratamento de gengivite",
                "Limpezas profissionais",
                "Radiografias dentárias",
                "Aconselhamento de higiene oral"
              ].map((item, index) => (
                <div key={index} className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 md:w-6 md:h-6 text-[#2934b7] flex-shrink-0 mt-1" />
                  <span className="text-gray-700 font-light">{item}</span>
                </div>
              ))}
            </div>

            <h2 className="text-3xl font-light text-gray-800 mb-4 md:mb-6 mt-12">Importância das consultas regulares</h2>
            <p className="text-gray-600 leading-relaxed font-light mb-4 md:mb-6">
              As consultas regulares de clínica geral são fundamentais para a prevenção de problemas dentários. Durante estas visitas, podemos detetar precocemente cáries, doenças gengivais e outros problemas que, se não tratados, podem evoluir para situações mais graves e dispendiosas.
            </p>

            <h2 className="text-3xl font-light text-gray-800 mb-4 md:mb-6 mt-12">Tratamentos personalizados</h2>
            <p className="text-gray-600 leading-relaxed font-light mb-4 md:mb-6">
              Cada paciente é único, e por isso desenvolvemos planos de tratamento personalizados que consideram as suas necessidades específicas, historial médico e objetivos de saúde oral. A nossa abordagem é sempre centrada no paciente, garantindo conforto e resultados de excelência.
            </p>

            <h2 className="text-3xl font-light text-gray-800 mb-4 md:mb-6 mt-12">Para toda a família</h2>
            <p className="text-gray-600 leading-relaxed font-light mb-4 md:mb-6">
              Atendemos pacientes de todas as idades, desde crianças a idosos. A nossa equipa está preparada para proporcionar um ambiente acolhedor e tranquilizador, especialmente importante para os mais novos que estão a iniciar os seus cuidados dentários.
            </p>
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
        <div className="max-w-responsive">
          <div className="flex justify-between items-center">
            <div className="flex items-center gap-3">
              <img src={logoPredileta} alt="Logo Clínica Predileta" className="w-10 h-10 md:w-12 md:h-12 object-contain" />
              <div>
                <div className="text-base md:text-xl font-light text-gray-800 tracking-wide">Predileta</div>
                <div className="text-[9px] md:text-[10px] text-gray-400 uppercase tracking-widest">Clínica Dentária</div>
              </div>
            </div>
            <div className="flex items-center gap-6">
              <Link to="/#marcacao" className="text-gray-300 hover:text-gray-100 transition-all font-light">Marcar Consulta</Link>
              <Link to="/contactos" className="text-gray-300 hover:text-gray-100 transition-all font-light">Contactos</Link>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
import { motion } from "motion/react";
import { Link } from "react-router";
import { ArrowLeft, Layers, CheckCircle, Calendar } from "lucide-react";
import logoPredileta from "../../imports/Logotipo_Predileta-removebg-preview.png";

export default function ReabilitacaoOralPage() {
  return (
    <div className="min-h-screen bg-white">
      <header className="header-fixed bg-white shadow-sm">
        <nav className="border-b border-gray-100">
          <div className="max-w-7xl mx-auto px-6 py-4">
            <div className="flex justify-between items-center">
              <Link to="/" className="flex items-center gap-3">
                <img src={logoPredileta} alt="Logo" className="w-10 h-10 md:w-12 md:h-12 object-contain" />
                <div>
                  <div className="text-xl font-light text-gray-800">Predileta</div>
                  <div className="text-[9px] md:text-[10px] text-gray-400 uppercase tracking-widest">Clínica Dentária</div>
                </div>
              </Link>
              <Link to="/" className="inline-flex items-center gap-2 px-4 py-2 md:px-6 md:py-3 text-sm md:text-base text-gray-600 hover:text-[#2934b7] transition-all font-light">
                <ArrowLeft className="w-4 h-4 md:w-5 md:h-5" />Voltar
              </Link>
            </div>
          </div>
        </nav>
      </header>

      <section className="pt-24 md:pt-32 pb-12 md:pb-20 bg-gradient-to-br from-[#F8F9FA] to-[#E9ECEF]">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
            <div className="w-20 h-20 bg-[#2934b7] rounded-2xl flex items-center justify-center mx-auto mb-4 md:mb-6">
              <Layers className="w-10 h-10 text-white" />
            </div>
            <h1 className="text-5xl font-light text-gray-800 mb-4 md:mb-6">Reabilitação Oral</h1>
            <p className="text-xl text-gray-600 font-light">Sorrisos completos, vidas transformadas</p>
          </motion.div>
        </div>
      </section>

      <section className="section-padding bg-white">
        <div className="max-w-4xl mx-auto px-6">
          <p className="text-gray-600 leading-relaxed font-light mb-5 md:mb-8">
            A reabilitação oral é um tratamento abrangente que restaura a função e estética da boca através da combinação de várias especialidades dentárias. É indicada para pacientes que perderam múltiplos dentes ou que apresentam desgaste dentário severo, devolvendo-lhes a capacidade de mastigar, falar e sorrir com confiança.
          </p>

          <h2 className="text-3xl font-light text-gray-800 mb-4 md:mb-6 mt-12">Soluções de Reabilitação</h2>
          <div className="grid md:grid-cols-2 gap-6 mb-4 md:mb-6 md:mb-5 md:mb-8 lg:mb-12">
            {[
              "Implantes dentários múltiplos",
              "Próteses fixas sobre implantes",
              "All-on-4 e All-on-6",
              "Próteses híbridas",
              "Reabilitações totais",
              "Enxertos ósseos e regeneração",
              "Planeamento digital 3D",
              "Soluções provisórias imediatas"
            ].map((item, index) => (
              <div key={index} className="flex items-start gap-3">
                <CheckCircle className="w-5 h-5 md:w-6 md:h-6 text-[#2934b7] flex-shrink-0 mt-1" />
                <span className="text-gray-700 font-light">{item}</span>
              </div>
            ))}
          </div>

          <h2 className="text-3xl font-light text-gray-800 mb-4 md:mb-6 mt-12">Casos de Transformação</h2>
          <p className="text-gray-600 leading-relaxed font-light mb-4 md:mb-6">
            Acompanhamos casos complexos de reabilitação oral que transformam completamente a vida dos pacientes. Desde pessoas que perderam todos os dentes até casos de desgaste severo, utilizamos tecnologia avançada e técnicas modernas para restaurar não apenas a função mastigatória, mas também a autoestima e qualidade de vida.
          </p>

          <h2 className="text-3xl font-light text-gray-800 mb-4 md:mb-6 mt-12">All-on-4: Solução Inovadora</h2>
          <p className="text-gray-600 leading-relaxed font-light mb-4 md:mb-6">
            A técnica All-on-4 revolucionou a reabilitação oral, permitindo a colocação de uma prótese fixa sobre apenas 4 implantes. Este método reduz significativamente o tempo de tratamento e, em muitos casos, permite ao paciente sair no mesmo dia com dentes fixos provisórios. É uma solução eficaz, previsível e com excelente relação custo-benefício.
          </p>

          <h2 className="text-3xl font-light text-gray-800 mb-4 md:mb-6 mt-12">Planeamento Personalizado</h2>
          <p className="text-gray-600 leading-relaxed font-light mb-4 md:mb-6">
            Cada caso de reabilitação oral é único e requer um planeamento meticuloso. Realizamos uma avaliação completa incluindo exames radiográficos, tomografia computorizada e análise estética. Utilizamos tecnologia de simulação digital para mostrar antecipadamente como ficará o resultado final, permitindo ajustes e garantindo a satisfação do paciente.
          </p>
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
            <div>
              <img src={logoPredileta} alt="Logo" className="w-10 h-10 md:w-12 md:h-12 object-contain" />
              <div className="text-xl font-light text-gray-800">Predileta</div>
              <div className="text-[9px] md:text-[10px] text-gray-400 uppercase tracking-widest">Clínica Dentária</div>
            </div>
            <div className="space-y-2">
              <Link to="/#marcacao" className="inline-flex items-center gap-2 px-10 py-5 bg-white text-gray-800 rounded-full hover:shadow-2xl transition-all font-light">
                <Calendar className="w-6 h-6" />Marcar Consulta
              </Link>
              <p className="text-sm font-light">Av. da República, 1234, 1234-567 Lisboa</p>
              <p className="text-sm font-light">Tel: +351 21 123 4567</p>
              <p className="text-sm font-light">Email: info@predileta.com</p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
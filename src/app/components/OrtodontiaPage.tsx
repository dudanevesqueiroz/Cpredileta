import { motion } from "motion/react";
import { Link } from "react-router";
import { ArrowLeft, Smile, CheckCircle, Calendar } from "lucide-react";
import logoPredileta from "../../imports/Logotipo_Predileta-removebg-preview.png";

export default function OrtodontiaPage() {
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
              <Smile className="w-10 h-10 text-white" />
            </div>
            <h1 className="text-5xl font-light text-gray-800 mb-4 md:mb-6">Ortodontia</h1>
            <p className="text-xl text-gray-600 font-light">Sorrisos alinhados e saudáveis</p>
          </motion.div>
        </div>
      </section>

      <section className="section-padding bg-white">
        <div className="max-w-4xl mx-auto px-6">
          <p className="text-gray-600 leading-relaxed font-light mb-5 md:mb-8">
            A ortodontia é a especialidade da medicina dentária que corrige a posição dos dentes e dos maxilares. Um sorriso alinhado não é apenas uma questão estética, mas também de saúde oral, facilitando a higiene e prevenindo problemas futuros.
          </p>

          <h2 className="text-3xl font-light text-gray-800 mb-4 md:mb-6 mt-12">Tipos de Tratamento Ortodôntico</h2>
          <div className="grid md:grid-cols-2 gap-6 mb-4 md:mb-6 md:mb-5 md:mb-8 lg:mb-12">
            {[
              "Aparelhos fixos metálicos",
              "Aparelhos fixos estéticos (cerâmica)",
              "Alinhadores invisíveis",
              "Aparelhos removíveis",
              "Ortodontia lingual",
              "Expansores palatinos",
              "Contenções ortodônticas",
              "Ortodontia infantil e adulta"
            ].map((item, index) => (
              <div key={index} className="flex items-start gap-3">
                <CheckCircle className="w-5 h-5 md:w-6 md:h-6 text-[#2934b7] flex-shrink-0 mt-1" />
                <span className="text-gray-700 font-light">{item}</span>
              </div>
            ))}
          </div>

          <h2 className="text-3xl font-light text-gray-800 mb-4 md:mb-6 mt-12">Quando Procurar um Ortodontista</h2>
          <p className="text-gray-600 leading-relaxed font-light mb-4 md:mb-6">
            Recomendamos uma avaliação ortodôntica a partir dos 7 anos de idade, mesmo que os dentes pareçam alinhados. Problemas como mordida cruzada, sobremordida, apinhamento dentário ou espaçamentos excessivos podem ser detetados precocemente e tratados de forma mais eficaz.
          </p>

          <h2 className="text-3xl font-light text-gray-800 mb-4 md:mb-6 mt-12">Duração do Tratamento</h2>
          <p className="text-gray-600 leading-relaxed font-light mb-4 md:mb-6">
            A duração varia conforme a complexidade do caso, mas geralmente os tratamentos ortodônticos duram entre 18 a 36 meses. Durante este período, são realizadas consultas regulares para ajustes e acompanhamento da evolução. Após a remoção do aparelho, é essencial usar contenções para manter os resultados.
          </p>

          <h2 className="text-3xl font-light text-gray-800 mb-4 md:mb-6 mt-12">Benefícios da Ortodontia</h2>
          <p className="text-gray-600 leading-relaxed font-light mb-4 md:mb-6">
            Além da melhoria estética do sorriso, a ortodontia corrige problemas de mastigação, melhora a fonética, facilita a higiene oral e previne desgastes dentários anormais. Um sorriso alinhado também contribui significativamente para a autoestima e confiança.
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
            <div className="flex items-center gap-3">
              <img src={logoPredileta} alt="Logo" className="w-10 h-10 md:w-12 md:h-12 object-contain" />
              <div>
                <div className="text-xl font-light text-gray-800">Predileta</div>
                <div className="text-[9px] md:text-[10px] text-gray-400 uppercase tracking-widest">Clínica Dentária</div>
              </div>
            </div>
            <div className="flex items-center gap-4">
              <Link to="/#marcacao" className="inline-flex items-center gap-2 px-10 py-5 bg-white text-gray-800 rounded-full hover:shadow-2xl transition-all font-light">
                <Calendar className="w-6 h-6" />Marcar Consulta
              </Link>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
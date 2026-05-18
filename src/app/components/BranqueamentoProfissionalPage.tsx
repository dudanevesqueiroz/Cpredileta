import { motion } from "motion/react";
import { Link } from "react-router";
import { ArrowLeft, Sparkle, CheckCircle, Calendar } from "lucide-react";
import logoPredileta from "../../imports/Logotipo_Predileta-removebg-preview.png";

export default function BranqueamentoProfissionalPage() {
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
              <Sparkle className="w-10 h-10 text-white" />
            </div>
            <h1 className="text-5xl font-light text-gray-800 mb-4 md:mb-6">Branqueamento Profissional</h1>
            <p className="text-xl text-gray-600 font-light">Dentes mais brancos, sorrisos radiantes</p>
          </motion.div>
        </div>
      </section>

      <section className="section-padding bg-white">
        <div className="max-w-4xl mx-auto px-6">
          <p className="text-gray-600 leading-relaxed font-light mb-5 md:mb-8">
            O branqueamento dentário profissional é um dos tratamentos estéticos mais procurados na medicina dentária. Através de técnicas seguras e eficazes, conseguimos clarear os dentes em vários tons, proporcionando um sorriso mais brilhante e rejuvenescido.
          </p>

          <h2 className="text-3xl font-light text-gray-800 mb-4 md:mb-6 mt-12">Opções de Branqueamento</h2>
          <div className="grid md:grid-cols-2 gap-6 mb-4 md:mb-6 md:mb-5 md:mb-8 lg:mb-12">
            {[
              "Branqueamento em consultório (LED)",
              "Branqueamento ambulatório (em casa)",
              "Branqueamento combinado",
              "Branqueamento interno (dentes desvitalizados)",
              "Tratamentos personalizados",
              "Manutenção e retoques",
              "Avaliação da sensibilidade",
              "Acompanhamento pós-tratamento"
            ].map((item, index) => (
              <div key={index} className="flex items-start gap-3">
                <CheckCircle className="w-5 h-5 md:w-6 md:h-6 text-[#2934b7] flex-shrink-0 mt-1" />
                <span className="text-gray-700 font-light">{item}</span>
              </div>
            ))}
          </div>

          <h2 className="text-3xl font-light text-gray-800 mb-4 md:mb-6 mt-12">Branqueamento em Consultório</h2>
          <p className="text-gray-600 leading-relaxed font-light mb-4 md:mb-6">
            O branqueamento realizado em consultório utiliza concentrações mais elevadas de agentes branqueadores ativados por luz LED, permitindo resultados visíveis numa única sessão. O procedimento é seguro, controlado e pode clarear os dentes até 8 tons. É a opção ideal para quem procura resultados rápidos e dramáticos.
          </p>

          <h2 className="text-3xl font-light text-gray-800 mb-4 md:mb-6 mt-12">Resultados Antes e Depois</h2>
          <p className="text-gray-600 leading-relaxed font-light mb-4 md:mb-6">
            Os nossos pacientes ficam impressionados com a diferença visível após o tratamento. Dentes amarelados por idade, café, vinho ou tabaco recuperam o brilho natural. O branqueamento profissional remove manchas profundas que os produtos de venda livre não conseguem atingir, proporcionando um resultado uniforme e natural.
          </p>

          <h2 className="text-3xl font-light text-gray-800 mb-4 md:mb-6 mt-12">Segurança e Durabilidade</h2>
          <p className="text-gray-600 leading-relaxed font-light mb-4 md:mb-6">
            O branqueamento dentário profissional é totalmente seguro quando realizado sob supervisão médica. Utilizamos produtos de alta qualidade que minimizam a sensibilidade. Os resultados podem durar de 1 a 3 anos, dependendo dos hábitos alimentares e de higiene oral. Oferecemos orientações personalizadas para prolongar os resultados.
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
import { motion } from "motion/react";
import { Link } from "react-router";
import { ArrowLeft, Sparkles, CheckCircle, Calendar } from "lucide-react";
import logoPredileta from "../../imports/Logótipo_Predileta-removebg-preview.png";

export default function PrevencaoPage() {
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
              <Sparkles className="w-10 h-10 text-white" />
            </div>
            <h1 className="text-5xl font-light text-gray-800 mb-4 md:mb-6">Prevenção e Limpeza</h1>
            <p className="text-xl text-gray-600 font-light">Mantenha o seu sorriso saudável e brilhante</p>
          </motion.div>
        </div>
      </section>

      <section className="section-padding bg-white">
        <div className="max-w-4xl mx-auto px-6">
          <p className="text-gray-600 leading-relaxed font-light mb-5 md:mb-8">
            A prevenção é a melhor forma de evitar problemas dentários. Com limpezas regulares e cuidados preventivos, podemos manter os seus dentes e gengivas saudáveis por toda a vida.
          </p>

          <h2 className="text-3xl font-light text-gray-800 mb-4 md:mb-6 mt-12">Serviços de Prevenção</h2>
          <div className="grid md:grid-cols-2 gap-6 mb-4 md:mb-6 md:mb-5 md:mb-8 lg:mb-12">
            {[
              "Destartarização profissional",
              "Polimento dentário",
              "Aplicação de flúor",
              "Selantes dentários",
              "Educação de higiene oral",
              "Avaliação de risco de cáries",
              "Rastreio de cancro oral",
              "Conselhos nutricionais"
            ].map((item, index) => (
              <div key={index} className="flex items-start gap-3">
                <CheckCircle className="w-5 h-5 md:w-6 md:h-6 text-[#2934b7] flex-shrink-0 mt-1" />
                <span className="text-gray-700 font-light">{item}</span>
              </div>
            ))}
          </div>

          <h2 className="text-3xl font-light text-gray-800 mb-4 md:mb-6 mt-12">Destartarização Profissional</h2>
          <p className="text-gray-600 leading-relaxed font-light mb-4 md:mb-6">
            A destartarização remove o tártaro e a placa bacteriana acumulados que não podem ser eliminados apenas com a escovagem. Este procedimento é essencial para prevenir gengivites, periodontites e cáries, além de manter os dentes com um aspeto limpo e saudável.
          </p>

          <h2 className="text-3xl font-light text-gray-800 mb-4 md:mb-6 mt-12">Frequência Recomendada</h2>
          <p className="text-gray-600 leading-relaxed font-light mb-4 md:mb-6">
            Recomendamos limpezas profissionais a cada 6 meses para a maioria dos pacientes. No entanto, dependendo da sua saúde oral e predisposição para acumulação de tártaro, poderemos sugerir visitas mais frequentes.
          </p>

          <h2 className="text-3xl font-light text-gray-800 mb-4 md:mb-6 mt-12">Benefícios da Prevenção</h2>
          <p className="text-gray-600 leading-relaxed font-light mb-4 md:mb-6">
            Investir em prevenção poupa tempo, dinheiro e desconforto a longo prazo. Problemas detetados precocemente são mais fáceis e menos dispendiosos de tratar. Além disso, uma boa saúde oral está diretamente relacionada com a saúde geral do corpo.
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
          <div className="grid md:grid-cols-3 gap-6 md:gap-8">
            <div>
              <h3 className="text-xl font-light text-gray-100 mb-4">Sobre Nós</h3>
              <p className="text-gray-400 leading-relaxed font-light">
                A Predileta é uma clínica dentária dedicada a fornecer cuidados de saúde bucal de alta qualidade. Nossa equipe de profissionais altamente qualificados está comprometida em ajudar a manter os seus dentes e gengivas saudáveis.
              </p>
            </div>
            <div>
              <h3 className="text-xl font-light text-gray-100 mb-4">Contactos</h3>
              <p className="text-gray-400 leading-relaxed font-light">
                <strong>Endereço:</strong> Rua da Saúde, 123, 1200-000 Lisboa, Portugal<br />
                <strong>Telefone:</strong> +351 21 123 456 78<br />
                <strong>Email:</strong> info@predileta.com
              </p>
            </div>
            <div>
              <h3 className="text-xl font-light text-gray-100 mb-4">Horários</h3>
              <p className="text-gray-400 leading-relaxed font-light">
                <strong>Segunda a Sexta:</strong> 09:00 - 19:00<br />
                <strong>Sábado:</strong> 09:00 - 14:00<br />
                <strong>Domingo:</strong> Fechado
              </p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
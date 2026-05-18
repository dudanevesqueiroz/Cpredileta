import { motion } from "motion/react";
import { Link } from "react-router";
import { ArrowLeft, Star, Quote, Calendar, Sparkles, Heart } from "lucide-react";
import logoPredileta from "../../imports/Logótipo_Predileta-removebg-preview.png";
import PaymentMethods from "./PaymentMethods";
import branqueamentoAntes from "../../imports/Captura_de_ecrã_2026-04-14_144412.png";
import branqueamentoDepois from "../../imports/Captura_de_ecrã_2026-04-14_144417.png";
import ortodontiaAntes from "../../imports/Captura_de_ecrã_2026-04-14_144836.png";
import ortodontiaDepois from "../../imports/Captura_de_ecrã_2026-04-14_144845.png";
import implanteAntes from "../../imports/Captura_de_ecrã_2026-04-14_145447.png";
import implanteDepois from "../../imports/Captura_de_ecrã_2026-04-14_145457.png";
import reabilitacaoAntes from "../../imports/Captura_de_ecrã_2026-04-14_145957.png";
import reabilitacaoDepois from "../../imports/Captura_de_ecrã_2026-04-14_150005.png";
import facetasDepois2 from "../../imports/depois_2_.jpeg";
import facetasAntes3 from "../../imports/antes_3.jpeg";
import facetasDepois3 from "../../imports/depois_3.jpeg";

export default function AntesDepoisPage() {
  const casos = [
    {
      id: 1,
      tratamento: "Branqueamento Dentário Profissional",
      imageBefore: branqueamentoAntes,
      imageAfter: branqueamentoDepois,
      nome: "Sofia M.",
      idade: 32,
      avaliacao: 5,
      testemunho: "Sempre quis ter um sorriso mais branco e luminoso. A equipa da Clínica Predileta foi fantástica! O branqueamento foi rápido, indolor e os resultados superaram todas as minhas expectativas. Agora sorrio com muito mais confiança!",
      data: "Março 2026"
    },
    {
      id: 2,
      tratamento: "Ortodontia com Alinhadores Invisíveis",
      imageBefore: ortodontiaAntes,
      imageAfter: ortodontiaDepois,
      nome: "Miguel R.",
      idade: 28,
      avaliacao: 5,
      testemunho: "Sempre tive os dentes desalinhados mas nunca quis usar aparelho tradicional. Os alinhadores invisíveis foram a solução perfeita! Ninguém notava que estava a fazer tratamento e em apenas 8 meses o meu sorriso ficou completamente transformado. Muito obrigado Doutora Dora!",
      data: "Fevereiro 2026"
    },
    {
      id: 3,
      tratamento: "Implante Dentário e Coroa",
      imageBefore: implanteAntes,
      imageAfter: implanteDepois,
      nome: "João S.",
      idade: 45,
      avaliacao: 5,
      testemunho: "Perdi um dente há alguns anos e sempre me senti envergonhado ao sorrir. O implante que fiz na Clínica Predileta mudou a minha vida. Parece e funciona exatamente como um dente natural. A Doutora Dora explicou-me todo o processo e fez um trabalho impecável. Recomendo a 100%!",
      data: "Janeiro 2026"
    },
    {
      id: 4,
      tratamento: "Reabilitação Oral Completa",
      imageBefore: reabilitacaoAntes,
      imageAfter: reabilitacaoDepois,
      nome: "Ana P.",
      idade: 51,
      avaliacao: 5,
      testemunho: "Durante anos evitei ir ao dentista e a minha saúde oral deteriorou-se muito. A equipa da Predileta não me julgou, pelo contrário, foi extremamente acolhedora e profissional. Fizeram uma reabilitação completa e hoje tenho um sorriso de que me orgulho. Transformaram não só os meus dentes, mas também a minha autoestima.",
      data: "Dezembro 2025"
    },
    {
      id: 5,
      tratamento: "Facetas de Porcelana",
      imageBefore: "https://images.unsplash.com/photo-1691200623807-d0d0e69e7b8c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwyfHxuYXR1cmFsJTIwc21pbGUlMjBwb3J0cmFpdHxlbnwxfHx8fDE3NzYwOTg1NTZ8MA&ixlib=rb-4.1.0&q=80&w=1080",
      imageAfter: "https://images.unsplash.com/photo-1489278353717-f64c6ee8a4d2?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHw1fHxiZWF1dGlmdWwlMjBzbWlsZSUyMHRlZXRoJTIwd2hpdGV8ZW58MXx8fHwxNzc2MDU0NTc5fDA&ixlib=rb-4.1.0&q=80&w=1080",
      nome: "Beatriz L.",
      idade: 35,
      avaliacao: 5,
      testemunho: "Sempre sonhei com um sorriso perfeito e as facetas de porcelana tornaram esse sonho realidade. O trabalho da Doutora Dora é uma verdadeira obra de arte! O resultado ficou super natural e todas as pessoas me perguntam qual é o meu segredo. Não podia estar mais feliz!",
      data: "Novembro 2025"
    },
    {
      id: 6,
      tratamento: "Facetas de Porcelana",
      imageBefore: "https://images.unsplash.com/photo-1691200623807-d0d0e69e7b8c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwyfHxuYXR1cmFsJTIwc21pbGUlMjBwb3J0cmFpdHxlbnwxfHx8fDE3NzYwOTg1NTZ8MA&ixlib=rb-4.1.0&q=80&w=1080",
      imageAfter: facetasDepois2,
      nome: "Mariana S.",
      idade: 29,
      avaliacao: 5,
      testemunho: "As facetas de porcelana transformaram completamente o meu sorriso! O resultado ficou incrivelmente natural e a minha confiança aumentou muito. A Doutora Dora é extremamente profissional e atenciosa. Recomendo a toda a gente!",
      data: "Março 2026"
    },
    {
      id: 7,
      tratamento: "Facetas de Porcelana",
      imageBefore: facetasAntes3,
      imageAfter: facetasDepois3,
      nome: "Carlos M.",
      idade: 38,
      avaliacao: 5,
      testemunho: "Sempre quis ter um sorriso perfeito e as facetas foram a solução ideal. O trabalho da equipa é impecável, desde o planeamento até ao resultado final. Estou muito feliz com a decisão que tomei!",
      data: "Abril 2026"
    },
    {
      id: 8,
      tratamento: "Ortodontia Tradicional",
      imageBefore: "https://images.unsplash.com/photo-1632513960357-e5c06fcf5abd?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwzfHxuYXR1cmFsJTIwc21pbGUlMjBwb3J0cmFpdHxlbnwxfHx8fDE3NzYwOTg1NTZ8MA&ixlib=rb-4.1.0&q=80&w=1080",
      imageAfter: "https://images.unsplash.com/photo-1548382131-e0ebb1f0cdea?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHw1fHxkZW50YWwlMjBwYXRpZW50JTIwaGFwcHklMjBzbWlsZXxlbnwxfHx8fDE3NzYwOTgyOTd8MA&ixlib=rb-4.1.0&q=80&w=1080",
      nome: "Ricardo F.",
      idade: 24,
      avaliacao: 5,
      testemunho: "Usei aparelho durante 18 meses e valeu totalmente a pena! A equipa sempre me tratou com carinho e profissionalismo. Cada consulta era rápida e eficiente. Agora tenho o sorriso que sempre quis e isso mudou completamente a forma como me vejo. Obrigado Clínica Predileta!",
      data: "Outubro 2025"
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
              <Sparkles className="w-4 h-4 text-[#2934b7]" />
              <span className="text-sm font-light text-gray-600">Casos de Sucesso</span>
            </div>

            <h1 className="text-5xl lg:text-6xl font-light text-gray-800 leading-tight mb-4 md:mb-6">
              Antes e <span className="text-[#2934b7]">Depois</span>
            </h1>

            <p className="text-xl text-gray-600 font-light">
              Veja as transformações incríveis dos nossos pacientes e leia os seus testemunhos
            </p>
          </motion.div>
        </div>
      </section>

      {/* Estatísticas */}
      <section className="py-16 bg-white border-b border-gray-100">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8 text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <div className="text-4xl font-light text-[#2934b7] mb-2">5000+</div>
              <div className="text-sm text-gray-600 font-light">Pacientes Satisfeitos</div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
            >
              <div className="text-4xl font-light text-[#2934b7] mb-2">20+</div>
              <div className="text-sm text-gray-600 font-light">Anos de Experiência</div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
            >
              <div className="text-4xl font-light text-[#2934b7] mb-2">98%</div>
              <div className="text-sm text-gray-600 font-light">Taxa de Satisfação</div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
            >
              <div className="text-4xl font-light text-[#2934b7] mb-2">4.9/5</div>
              <div className="text-sm text-gray-600 font-light">Avaliação Média</div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Casos Antes e Depois */}
      <section className="section-padding bg-white">
        <div className="max-w-responsive">
          <div className="text-center mb-5 md:mb-8 md:mb-4 md:mb-6 md:mb-5 md:mb-8 lg:mb-12 lg:mb-16">
            <h2 className="text-4xl font-light text-gray-800 mb-4">Transformações Reais</h2>
            <p className="text-lg text-gray-600 font-light">
              Cada sorriso conta uma história de transformação e confiança renovada
            </p>
          </div>

          <div className="space-y-16">
            {casos.map((caso, index) => (
              <motion.div
                key={caso.id}
                className="bg-gradient-to-br from-[#F8F9FA] to-[#E9ECEF] rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-shadow"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                {/* Imagens Antes e Depois */}
                <div className="grid md:grid-cols-2 gap-0">
                  {/* Antes */}
                  <div className="relative h-80 overflow-hidden">
                    <img
                      src={caso.imageBefore}
                      alt={`Antes - ${caso.tratamento}`}
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute top-4 left-4 bg-gray-600 text-white px-4 py-2 rounded-full text-sm font-light">
                      Antes
                    </div>
                  </div>

                  {/* Depois */}
                  <div className="relative h-80 overflow-hidden">
                    <img
                      src={caso.imageAfter}
                      alt={`Depois - ${caso.tratamento}`}
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute top-4 right-4 bg-[#2934b7] text-white px-4 py-2 rounded-full text-sm font-light">
                      Depois
                    </div>
                  </div>
                </div>

                {/* Conteúdo - Informações e Avaliação */}
                <div className="p-8">
                  <h3 className="text-2xl font-light text-gray-800 mb-3">{caso.tratamento}</h3>

                  <div className="flex items-center gap-3 text-sm text-gray-600 mb-4 font-light">
                    <span className="font-medium text-[#2934b7]">{caso.nome}</span>
                    <span>•</span>
                    <span>{caso.idade} anos</span>
                    <span>•</span>
                    <span>{caso.data}</span>
                  </div>

                  {/* Avaliação */}
                  <div className="mb-4 md:mb-6">
                    <div className="flex items-center gap-1 mb-2">
                      {[...Array(caso.avaliacao)].map((_, i) => (
                        <Star key={i} className="w-5 h-5 fill-[#2934b7] text-[#2934b7]" />
                      ))}
                    </div>
                    <p className="text-sm text-gray-500 font-light">Avaliação: {caso.avaliacao}/5</p>
                  </div>

                  {/* Opinião/Testemunho */}
                  <div className="bg-white rounded-xl md:rounded-2xl p-4 md:p-6 shadow-sm">
                    <div className="flex items-start gap-2 mb-3">
                      <Quote className="w-5 h-5 md:w-6 md:h-6 text-[#2934b7] flex-shrink-0 mt-1" />
                      <h4 className="text-lg font-light text-gray-800">Opinião do Paciente</h4>
                    </div>
                    <p className="text-gray-600 leading-relaxed font-light italic">
                      "{caso.testemunho}"
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Testemunhos em Destaque */}
      <section className="section-padding bg-gradient-to-br from-[#F8F9FA] to-[#E9ECEF]">
        <div className="max-w-4xl mx-auto px-6">
          <div className="text-center mb-5 md:mb-8 md:mb-4 md:mb-6 md:mb-5 md:mb-8 lg:mb-12 lg:mb-16">
            <h2 className="text-4xl font-light text-gray-800 mb-4">O Que Dizem os Nossos Pacientes</h2>
            <p className="text-lg text-gray-600 font-light">
              A confiança e satisfação dos nossos pacientes é o nosso maior prémio
            </p>
          </div>

          <div className="space-y-8">
            <motion.div
              className="bg-white rounded-2xl md:rounded-3xl p-5 md:p-8 shadow-lg"
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <div className="flex items-center gap-1 mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-[#2934b7] text-[#2934b7]" />
                ))}
              </div>
              <p className="text-gray-600 leading-relaxed mb-4 font-light italic">
                "A Clínica Predileta é simplesmente fantástica! Desde a receção até ao consultório, tudo é feito com o máximo cuidado e profissionalismo. A Doutora Dora é uma excelente profissional, sempre atenta e preocupada com o bem-estar dos pacientes. Recomendo vivamente!"
              </p>
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 bg-gradient-to-br from-[#2934b7] to-[#1E2894] rounded-full flex items-center justify-center text-white font-light">
                  TC
                </div>
                <div>
                  <div className="text-gray-800 font-light">Teresa C.</div>
                  <div className="text-sm text-gray-500 font-light">Paciente desde 2018</div>
                </div>
              </div>
            </motion.div>

            <motion.div
              className="bg-white rounded-2xl md:rounded-3xl p-5 md:p-8 shadow-lg"
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
            >
              <div className="flex items-center gap-1 mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-[#2934b7] text-[#2934b7]" />
                ))}
              </div>
              <p className="text-gray-600 leading-relaxed mb-4 font-light italic">
                "Depois de anos a adiar tratamentos dentários por medo, finalmente encontrei uma clínica onde me sinto totalmente à vontade. A equipa é incrivelmente paciente e compreensiva. Hoje levo toda a minha família à Predileta. É a melhor clínica de Joane, sem dúvida!"
              </p>
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 bg-gradient-to-br from-[#2934b7] to-[#1E2894] rounded-full flex items-center justify-center text-white font-light">
                  PM
                </div>
                <div>
                  <div className="text-gray-800 font-light">Paulo M.</div>
                  <div className="text-sm text-gray-500 font-light">Paciente desde 2020</div>
                </div>
              </div>
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
        <div className="max-w-7xl mx-auto px-6">
          <PaymentMethods />
          <div className="text-center mt-8">
            <p className="text-sm font-light">&copy; 2026 Clínica Dentária Predileta. Todos os direitos reservados.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
import { motion } from "motion/react";
import { Link } from "react-router";
import { ArrowLeft, Smile, Stethoscope, AlignCenterHorizontal, PlusCircle, Sparkles, Heart, Calendar, CheckCircle } from "lucide-react";
import logoPredileta from "../../imports/Logótipo_Predileta-removebg-preview.png";
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
      icon: PlusCircle,
      title: "Implantologia e Prótese Dentária",
      description: "Implantes dentários e próteses pelo nosso cirurgião dentista especializado",
      fullDescription: "Os implantes dentários são a solução mais moderna e eficaz para substituir dentes perdidos. O nosso cirurgião dentista especializado em implantologia coloca raízes artificiais de titânio que se integram ao osso, proporcionando uma base sólida para próteses fixas. Também fazemos próteses removíveis. O resultado é natural, confortável e duradouro.",
      image: "https://images.unsplash.com/photo-1643216503948-839a54dc57f9?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkZW50YWwlMjBpbXBsYW50JTIwdGVldGh8ZW58MXx8fHwxNzc2MDk3ODkxfDA&ixlib=rb-4.1.0&q=80&w=1080",
      benefits: [
        "Implantes dentários unitários",
        "Prótese fixa sobre implantes",
        "Prótese removível completa",
        "All-on-4 e All-on-6",
        "Planejamento digital 3D pelo cirurgião dentista"
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
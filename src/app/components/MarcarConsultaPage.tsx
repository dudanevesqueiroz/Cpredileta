import { motion } from "motion/react";
import { Link } from "react-router";
import { ArrowLeft, Calendar, Clock, Phone, Mail, Send, User, Stethoscope, Loader2 } from "lucide-react";
import { useState } from "react";
import logoPredileta from "../../imports/Logótipo_Predileta-removebg-preview.png";
import Toast from "./Toast";
import PaymentMethods from "./PaymentMethods";

export default function MarcarConsultaPage() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    date: "",
    time: "",
    consultationType: "",
    message: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [toast, setToast] = useState({
    show: false,
    type: "success" as "success" | "error",
    message: "",
  });

  const showToast = (type: "success" | "error", message: string) => {
    setToast({ show: true, type, message });
    setTimeout(() => {
      setToast({ show: false, type, message: "" });
    }, 5000);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      // Enviar email para 14216@ipam.pt via Formspree
      const formspreeEndpoint = "https://formspree.io/f/xbdqggoa";

      // Preparar os dados para envio
      const payload = {
        nome: `${formData.firstName} ${formData.lastName}`,
        email: formData.email,
        telefone: formData.phone,
        data: formData.date,
        horario: formData.time === "manha" ? "Manhã (9h - 12h)" : "Tarde (14h - 18h)",
        tipo_consulta: getConsultationTypeLabel(formData.consultationType),
        mensagem: formData.message || "Sem observações adicionais",
        _subject: "Nova marcação online - Clínica Predileta",
        _replyto: formData.email,
        _cc: "14216@ipam.pt"
      };

      // Enviar dados para o Formspree
      const response = await fetch(formspreeEndpoint, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(payload),
      });

      if (!response.ok) {
        throw new Error("Erro ao enviar formulário");
      }

      // Sucesso
      showToast("success", "Consulta agendada com sucesso! Entraremos em contacto brevemente.");
      
      // Limpar formulário
      setFormData({
        firstName: "",
        lastName: "",
        email: "",
        phone: "",
        date: "",
        time: "",
        consultationType: "",
        message: "",
      });
    } catch (error) {
      console.error("Erro ao enviar email:", error);
      showToast("error", "Erro ao enviar. Tente novamente ou contacte-nos diretamente.");
    } finally {
      setIsSubmitting(false);
    }
  };

  const getConsultationTypeLabel = (value: string): string => {
    const types: { [key: string]: string } = {
      "primeira-consulta": "Primeira Consulta / Avaliação",
      "limpeza": "Limpeza Dentária",
      "ortodontia": "Ortodontia",
      "implantes": "Implantes",
      "branqueamento": "Branqueamento Dentário",
      "urgencia": "Urgência / Dor",
      "outro": "Outro",
    };
    return types[value] || value;
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="header-fixed bg-white/98 backdrop-blur-lg shadow-sm">
        <nav className="border-b border-gray-100">
          <div className="max-w-responsive">
            <div className="flex justify-between items-center py-3 md:py-4">
              <Link to="/" className="flex items-center gap-2 md:gap-3">
                <div className="flex items-center gap-2 md:gap-3">
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
                <span className="hidden sm:inline">Voltar ao Início</span>
                <span className="sm:hidden">Voltar</span>
              </Link>
            </div>
          </div>
        </nav>
      </header>

      {/* Hero Section */}
      <section className="relative pt-24 md:pt-32 pb-12 md:pb-20 bg-gradient-to-br from-[#F8F9FA] to-[#E9ECEF]">
        <div className="max-w-responsive text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="inline-flex items-center gap-2 px-3 py-1.5 md:px-4 md:py-2 bg-white rounded-full shadow-sm mb-4 md:mb-6 border border-gray-100">
              <Calendar className="w-3 h-3 md:w-4 md:h-4 text-[#2934b7]" />
              <span className="text-xs md:text-sm font-light text-gray-600">Agendamento Online</span>
            </div>

            <h1 className="text-hero font-light text-gray-800 leading-tight mb-4 md:mb-6 px-4">
              Marque a Sua <span className="text-[#2934b7]">Consulta</span>
            </h1>

            <p className="text-responsive-lg text-gray-600 font-light px-4">
              Preencha o formulário e entraremos em contacto para confirmar a sua marcação
            </p>
          </motion.div>
        </div>
      </section>

      {/* Form Section */}
      <section className="section-padding bg-white">
        <div className="max-w-responsive" style={{ maxWidth: '48rem' }}>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <form onSubmit={handleSubmit} className="space-y-4 md:space-y-6">
              {/* Nome */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
                <div>
                  <label className="block text-xs md:text-sm font-light text-gray-700 mb-1.5 md:mb-2">
                    Primeiro Nome *
                  </label>
                  <input
                    type="text"
                    value={formData.firstName}
                    onChange={(e) => setFormData({ ...formData, firstName: e.target.value })}
                    className="w-full px-3 py-2.5 md:px-4 md:py-3 text-sm md:text-base rounded-lg md:rounded-xl border-2 border-[#2934b7]/30 bg-[#F8F9FA] focus:border-[#2934b7] focus:ring-2 focus:ring-[#2934b7]/20 outline-none transition-all font-light placeholder:text-gray-400"
                    placeholder="João"
                    required
                  />
                </div>
                <div>
                  <label className="block text-xs md:text-sm font-light text-gray-700 mb-1.5 md:mb-2">
                    Último Nome *
                  </label>
                  <input
                    type="text"
                    value={formData.lastName}
                    onChange={(e) => setFormData({ ...formData, lastName: e.target.value })}
                    className="w-full px-3 py-2.5 md:px-4 md:py-3 text-sm md:text-base rounded-lg md:rounded-xl border-2 border-[#2934b7]/30 bg-[#F8F9FA] focus:border-[#2934b7] focus:ring-2 focus:ring-[#2934b7]/20 outline-none transition-all font-light placeholder:text-gray-400"
                    placeholder="Silva"
                    required
                  />
                </div>
              </div>

              {/* Email e Telefone */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
                <div>
                  <label className="block text-xs md:text-sm font-light text-gray-700 mb-1.5 md:mb-2">
                    Email *
                  </label>
                  <input
                    type="email"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full px-3 py-2.5 md:px-4 md:py-3 text-sm md:text-base rounded-lg md:rounded-xl border-2 border-[#2934b7]/30 bg-[#F8F9FA] focus:border-[#2934b7] focus:ring-2 focus:ring-[#2934b7]/20 outline-none transition-all font-light placeholder:text-gray-400"
                    placeholder="joao.silva@email.pt"
                    required
                  />
                </div>
                <div>
                  <label className="block text-xs md:text-sm font-light text-gray-700 mb-1.5 md:mb-2">
                    Telefone *
                  </label>
                  <input
                    type="tel"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    className="w-full px-3 py-2.5 md:px-4 md:py-3 text-sm md:text-base rounded-lg md:rounded-xl border-2 border-[#2934b7]/30 bg-[#F8F9FA] focus:border-[#2934b7] focus:ring-2 focus:ring-[#2934b7]/20 outline-none transition-all font-light placeholder:text-gray-400"
                    placeholder="910 658 115"
                    required
                  />
                </div>
              </div>

              {/* Data e Hora Preferidas */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
                <div>
                  <label className="block text-xs md:text-sm font-light text-gray-700 mb-1.5 md:mb-2">
                    Data Preferida *
                  </label>
                  <input
                    type="date"
                    value={formData.date}
                    onChange={(e) => setFormData({ ...formData, date: e.target.value })}
                    className="w-full px-3 py-2.5 md:px-4 md:py-3 text-sm md:text-base rounded-lg md:rounded-xl border-2 border-[#2934b7]/30 bg-[#F8F9FA] focus:border-[#2934b7] focus:ring-2 focus:ring-[#2934b7]/20 outline-none transition-all font-light"
                    required
                  />
                </div>
                <div>
                  <label className="block text-xs md:text-sm font-light text-gray-700 mb-1.5 md:mb-2">
                    Horário Preferido *
                  </label>
                  <select
                    value={formData.time}
                    onChange={(e) => setFormData({ ...formData, time: e.target.value })}
                    className="w-full px-3 py-2.5 md:px-4 md:py-3 text-sm md:text-base rounded-lg md:rounded-xl border-2 border-[#2934b7]/30 bg-[#F8F9FA] focus:border-[#2934b7] focus:ring-2 focus:ring-[#2934b7]/20 outline-none transition-all font-light"
                    required
                  >
                    <option value="">Selecione um horário</option>
                    <option value="manha">Manhã (9h - 12h)</option>
                    <option value="tarde">Tarde (14h - 18h)</option>
                  </select>
                </div>
              </div>

              {/* Tipo de Consulta */}
              <div>
                <label className="block text-xs md:text-sm font-light text-gray-700 mb-1.5 md:mb-2">
                  Tipo de Consulta *
                </label>
                <select
                  value={formData.consultationType}
                  onChange={(e) => setFormData({ ...formData, consultationType: e.target.value })}
                  className="w-full px-3 py-2.5 md:px-4 md:py-3 text-sm md:text-base rounded-lg md:rounded-xl border-2 border-[#2934b7]/30 bg-[#F8F9FA] focus:border-[#2934b7] focus:ring-2 focus:ring-[#2934b7]/20 outline-none transition-all font-light"
                  required
                >
                  <option value="">Selecione o tipo de consulta</option>
                  <option value="primeira-consulta">Primeira Consulta / Avaliação</option>
                  <option value="limpeza">Limpeza Dentária</option>
                  <option value="ortodontia">Ortodontia</option>
                  <option value="implantes">Implantes</option>
                  <option value="branqueamento">Branqueamento Dentário</option>
                  <option value="urgencia">Urgência / Dor</option>
                  <option value="outro">Outro</option>
                </select>
              </div>

              {/* Mensagem Adicional */}
              <div>
                <label className="block text-xs md:text-sm font-light text-gray-700 mb-1.5 md:mb-2">
                  Mensagem Adicional (Opcional)
                </label>
                <textarea
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  rows={4}
                  className="w-full px-3 py-2.5 md:px-4 md:py-3 text-sm md:text-base rounded-lg md:rounded-xl border-2 border-[#2934b7]/30 bg-[#F8F9FA] focus:border-[#2934b7] focus:ring-2 focus:ring-[#2934b7]/20 outline-none transition-all font-light placeholder:text-gray-400 resize-none"
                  placeholder="Descreva os seus sintomas ou dúvidas..."
                ></textarea>
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full inline-flex items-center justify-center gap-2 px-6 py-3 md:px-8 md:py-4 bg-[#2934b7] text-white text-base md:text-lg rounded-full hover:shadow-lg hover:-translate-y-1 transition-all font-light disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:translate-y-0"
              >
                {isSubmitting ? (
                  <>
                    <Loader2 className="w-4 h-4 md:w-5 md:h-5 animate-spin" />
                    Enviando...
                  </>
                ) : (
                  <>
                    <Send className="w-4 h-4 md:w-5 md:h-5" />
                    Enviar Pedido de Marcação
                  </>
                )}
              </button>
            </form>

            <div className="mt-8 md:mt-12 pt-8 md:pt-12 border-t border-gray-100">
              <p className="text-center text-xs md:text-sm text-gray-500 font-light mb-4 md:mb-6">
                Ou contacte-nos diretamente:
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 md:gap-4 max-w-xl mx-auto">
                <a
                  href="tel:+351910658115"
                  className="inline-flex items-center justify-center gap-2 md:gap-3 px-4 py-3 md:px-6 md:py-4 bg-gradient-to-br from-[#F8F9FA] to-[#E9ECEF] text-gray-700 rounded-xl md:rounded-2xl hover:shadow-lg transition-all font-light border border-gray-200"
                >
                  <Phone className="w-4 h-4 md:w-5 md:h-5 text-[#2934b7]" />
                  <div className="text-left">
                    <div className="text-[10px] md:text-xs text-gray-500">Telefone</div>
                    <div className="text-sm md:text-base">910 658 115</div>
                  </div>
                </a>
                <a
                  href="mailto:geral@clinicapredileta.pt"
                  className="inline-flex items-center justify-center gap-2 md:gap-3 px-4 py-3 md:px-6 md:py-4 bg-gradient-to-br from-[#F8F9FA] to-[#E9ECEF] text-gray-700 rounded-xl md:rounded-2xl hover:shadow-lg transition-all font-light border border-gray-200"
                >
                  <Mail className="w-4 h-4 md:w-5 md:h-5 text-[#2934b7]" />
                  <div className="text-left min-w-0">
                    <div className="text-[10px] md:text-xs text-gray-500">Email</div>
                    <div className="text-xs md:text-sm truncate">geral@clinicapredileta.pt</div>
                  </div>
                </a>
              </div>
            </div>

            <div className="mt-8 md:mt-12 p-5 md:p-8 bg-gradient-to-br from-[#F8F9FA] to-[#E9ECEF] rounded-2xl md:rounded-3xl border border-gray-100">
              <div className="flex items-start gap-3 md:gap-4">
                <Clock className="w-5 h-5 md:w-6 md:h-6 text-[#2934b7] flex-shrink-0 mt-0.5 md:mt-1" />
                <div>
                  <h3 className="text-base md:text-lg font-light text-gray-800 mb-1.5 md:mb-2">Horário de Funcionamento</h3>
                  <div className="space-y-0.5 md:space-y-1 text-xs md:text-sm text-gray-600 font-light">
                    <p>Segunda a Sexta: 9h00 - 12h30 | 14h00 - 19h00</p>
                    <p>Sábado: 9h00 - 13h00</p>
                    <p>Domingo e Feriados: Encerrado</p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Back to Top Button */}
      <section className="py-8 md:py-12 bg-white">
        <div className="max-w-responsive text-center">
          <Link to="/" className="inline-flex items-center gap-2 px-6 py-3 md:px-8 md:py-4 text-sm md:text-base bg-[#2934b7] text-white rounded-full hover:bg-[#1E2894] hover:shadow-lg hover:-translate-y-1 transition-all font-light">
            <ArrowLeft className="w-4 h-4 md:w-5 md:h-5" />
            Voltar ao Início
          </Link>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-gray-300 py-8 md:py-12">
        <div className="max-w-responsive">
          <PaymentMethods />
          <div className="text-center mt-8">
            <p className="text-xs md:text-sm font-light">&copy; 2026 Clínica Dentária Predileta. Todos os direitos reservados.</p>
          </div>
        </div>
      </footer>

      {/* Toast */}
      <Toast show={toast.show} type={toast.type} message={toast.message} onClose={() => setToast({ ...toast, show: false })} />
    </div>
  );
}
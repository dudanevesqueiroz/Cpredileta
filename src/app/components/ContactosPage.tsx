import { motion } from "motion/react";
import { Link } from "react-router";
import { ArrowLeft, Phone, Mail, MapPin, Calendar, Facebook, Instagram, Youtube, Linkedin, Clock } from "lucide-react";
import { useState } from "react";
import logoPredileta from "../../imports/Logotipo_Predileta-removebg-preview.png";

export default function ContactosPage() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    service: "",
    date: "",
    message: ""
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Formulário enviado:", formData);
    alert("Pedido de marcação enviado com sucesso! Entraremos em contacto brevemente.");
    setFormData({
      firstName: "",
      lastName: "",
      email: "",
      phone: "",
      service: "",
      date: "",
      message: ""
    });
  };

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
              <Phone className="w-4 h-4 text-[#2934b7]" />
              <span className="text-sm font-light text-gray-600">Fale Connosco</span>
            </div>

            <h1 className="text-5xl lg:text-6xl font-light text-gray-800 leading-tight mb-4 md:mb-6">Contactos</h1>

            <p className="text-xl text-gray-600 font-light">Marcar consulta dentista em Joane, Vila Nova de Famalicão. Procura dentista perto de mim? Temos protocolo com: Médis, </p>
          </motion.div>
        </div>
      </section>

      {/* Contact Info & Form Section */}
      <section className="section-padding bg-white">
        <div className="max-w-responsive">
          <div className="grid lg:grid-cols-3 gap-6 md:gap-8">
            {/* Contactos Diretos */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="lg:col-span-1"
            >
              <div className="bg-gradient-to-br from-[#F8F9FA] to-[#E9ECEF] rounded-3xl shadow-lg p-8 border border-gray-100 h-full">
                <h3 className="text-2xl font-light text-gray-800 mb-4 md:mb-6">Contactos Diretos</h3>

                <div className="space-y-6">
                  {/* Telefone */}
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-gradient-to-br from-[#2934b7] to-[#1E2894] rounded-2xl flex items-center justify-center flex-shrink-0">
                      <Phone className="w-5 h-5 md:w-6 md:h-6 text-white" />
                    </div>
                    <div className="flex-1">
                      <div className="text-sm text-gray-500 font-light mb-1">Telefone</div>
                      <a href="tel:+351910658115" className="text-lg text-gray-800 hover:text-[#2934b7] transition-colors font-light">
                        910 658 115
                      </a>
                      <div className="text-xs text-gray-500 mt-1 font-light">Chamadas: Seg-Sex 9h-19h</div>
                    </div>
                  </div>

                  {/* Email */}
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-gradient-to-br from-[#2934b7] to-[#1E2894] rounded-2xl flex items-center justify-center flex-shrink-0">
                      <Mail className="w-5 h-5 md:w-6 md:h-6 text-white" />
                    </div>
                    <div className="flex-1">
                      <div className="text-sm text-gray-500 font-light mb-1">Email</div>
                      <a href="mailto:geral@clinicapredileta.pt" className="text-base text-gray-800 hover:text-[#2934b7] transition-colors font-light break-all">
                        geral@clinicapredileta.pt
                      </a>
                      <div className="text-xs text-gray-500 mt-1 font-light">Resposta em até 24h</div>
                    </div>
                  </div>

                  {/* Morada */}
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-gradient-to-br from-[#2934b7] to-[#1E2894] rounded-2xl flex items-center justify-center flex-shrink-0">
                      <MapPin className="w-5 h-5 md:w-6 md:h-6 text-white" />
                    </div>
                    <div className="flex-1">
                      <div className="text-sm text-gray-500 font-light mb-1">Morada</div>
                      <div className="text-base text-gray-800 font-light leading-relaxed">
                        Av. Padre Silva Rego, 592 Loja 1<br />
                        4770-205 Joane<br />
                        Vila Nova de Famalicão, Portugal
                      </div>
                    </div>
                  </div>

                  {/* Horário */}
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-gradient-to-br from-[#2934b7] to-[#1E2894] rounded-2xl flex items-center justify-center flex-shrink-0">
                      <Clock className="w-5 h-5 md:w-6 md:h-6 text-white" />
                    </div>
                    <div className="flex-1">
                      <div className="text-sm text-gray-500 font-light mb-1">Horário</div>
                      <div className="text-base text-gray-800 font-light space-y-1">
                        <div>Seg-Sex: 9h-12:30 | 14h-19h</div>
                        <div>Sábado: 9h-13h</div>
                        <div className="text-sm text-gray-500">Domingo: Encerrado</div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Redes Sociais */}
                <div className="mt-8 pt-8 border-t border-gray-200">
                  <div className="text-sm text-gray-500 font-light mb-4">Siga-nos nas Redes Sociais</div>
                  <div className="flex gap-3 flex-wrap">
                    <a href="#" className="w-11 h-11 bg-white hover:bg-[#2934b7] text-gray-700 hover:text-white rounded-full flex items-center justify-center transition-all border border-gray-200 shadow-sm">
                      <Facebook className="w-5 h-5" />
                    </a>
                    <a href="#" className="w-11 h-11 bg-white hover:bg-[#2934b7] text-gray-700 hover:text-white rounded-full flex items-center justify-center transition-all border border-gray-200 shadow-sm">
                      <Instagram className="w-5 h-5" />
                    </a>
                    <a href="#" className="w-11 h-11 bg-white hover:bg-[#2934b7] text-gray-700 hover:text-white rounded-full flex items-center justify-center transition-all border border-gray-200 shadow-sm">
                      <Youtube className="w-5 h-5" />
                    </a>
                    <a href="#" className="w-11 h-11 bg-white hover:bg-[#2934b7] text-gray-700 hover:text-white rounded-full flex items-center justify-center transition-all border border-gray-200 shadow-sm">
                      <Linkedin className="w-5 h-5" />
                    </a>
                    <a href="#" className="w-11 h-11 bg-white hover:bg-[#2934b7] text-gray-700 hover:text-white rounded-full flex items-center justify-center transition-all border border-gray-200 shadow-sm" title="TikTok">
                      <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                        <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z"/>
                      </svg>
                    </a>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Formulário de Marcação */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="lg:col-span-2"
            >
              <div className="bg-gradient-to-br from-[#F8F9FA] to-[#E9ECEF] rounded-3xl shadow-lg p-8 md:p-10 border border-gray-100">
                <h3 className="text-2xl font-light text-gray-800 mb-2">Marcar Consulta Dentista</h3>
                <p className="text-gray-600 font-light mb-5 md:mb-8">
                  Preencha o formulário para agendar consulta com o nosso médico dentista. Resposta em até 24 horas. Aceitamos seguros de saúde.
                </p>

                <form onSubmit={handleSubmit} className="space-y-6">
                  {/* Nome Completo */}
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="firstName" className="block text-sm font-medium text-gray-700 mb-2">
                        Primeiro Nome *
                      </label>
                      <input
                        type="text"
                        id="firstName"
                        value={formData.firstName}
                        onChange={(e) => setFormData({ ...formData, firstName: e.target.value })}
                        className="w-full px-4 py-3 rounded-xl border-2 border-gray-200 bg-white focus:border-[#2934b7] focus:ring-2 focus:ring-[#2934b7]/20 outline-none transition-all font-light placeholder:text-gray-400"
                        placeholder="João"
                        required
                      />
                    </div>
                    <div>
                      <label htmlFor="lastName" className="block text-sm font-medium text-gray-700 mb-2">
                        Último Nome *
                      </label>
                      <input
                        type="text"
                        id="lastName"
                        value={formData.lastName}
                        onChange={(e) => setFormData({ ...formData, lastName: e.target.value })}
                        className="w-full px-4 py-3 rounded-xl border-2 border-gray-200 bg-white focus:border-[#2934b7] focus:ring-2 focus:ring-[#2934b7]/20 outline-none transition-all font-light placeholder:text-gray-400"
                        placeholder="Silva"
                        required
                      />
                    </div>
                  </div>

                  {/* Telefone e Email */}
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
                        Telefone *
                      </label>
                      <input
                        type="tel"
                        id="phone"
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        className="w-full px-4 py-3 rounded-xl border-2 border-gray-200 bg-white focus:border-[#2934b7] focus:ring-2 focus:ring-[#2934b7]/20 outline-none transition-all font-light placeholder:text-gray-400"
                        placeholder="910 658 115"
                        required
                      />
                    </div>
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                        Email *
                      </label>
                      <input
                        type="email"
                        id="email"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        className="w-full px-4 py-3 rounded-xl border-2 border-gray-200 bg-white focus:border-[#2934b7] focus:ring-2 focus:ring-[#2934b7]/20 outline-none transition-all font-light placeholder:text-gray-400"
                        placeholder="joao.silva@exemplo.com"
                        required
                      />
                    </div>
                  </div>

                  {/* Serviço e Data */}
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="service" className="block text-sm font-medium text-gray-700 mb-2">
                        Serviço Pretendido
                      </label>
                      <select
                        id="service"
                        value={formData.service}
                        onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                        className="w-full px-4 py-3 rounded-xl border-2 border-gray-200 bg-white focus:border-[#2934b7] focus:ring-2 focus:ring-[#2934b7]/20 outline-none transition-all font-light"
                      >
                        <option value="">Selecione um serviço</option>
                        <option value="primeira-consulta">Primeira Consulta / Avaliação</option>
                        <option value="limpeza">Limpeza Dentária</option>
                        <option value="carie">Tratamento de Cárie</option>
                        <option value="ortodontia">Ortodontia / Colocar Aparelho</option>
                        <option value="implantes">Implantes Dentários e Prótese</option>
                        <option value="branqueamento">Branqueamento / Clareamento Dental</option>
                        <option value="dentista-infantil">Dentista Infantil / Odontopediatria</option>
                        <option value="facetas">Facetas de Porcelana</option>
                        <option value="urgencia">Urgência / Dor</option>
                        <option value="outro">Outro</option>
                      </select>
                    </div>
                    <div>
                      <label htmlFor="date" className="block text-sm font-medium text-gray-700 mb-2">
                        Data Pretendida
                      </label>
                      <input
                        type="date"
                        id="date"
                        value={formData.date}
                        onChange={(e) => setFormData({ ...formData, date: e.target.value })}
                        className="w-full px-4 py-3 rounded-xl border-2 border-gray-200 bg-white focus:border-[#2934b7] focus:ring-2 focus:ring-[#2934b7]/20 outline-none transition-all font-light"
                      />
                    </div>
                  </div>

                  {/* Mensagem */}
                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                      Mensagem
                    </label>
                    <textarea
                      id="message"
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      rows={4}
                      className="w-full px-4 py-3 rounded-xl border-2 border-gray-200 bg-white focus:border-[#2934b7] focus:ring-2 focus:ring-[#2934b7]/20 outline-none transition-all font-light placeholder:text-gray-400 resize-none"
                      placeholder="Descreva os seus sintomas, dúvidas ou pedidos especiais..."
                    ></textarea>
                  </div>

                  {/* Botão de Envio */}
                  <button
                    type="submit"
                    className="w-full inline-flex items-center justify-center gap-3 px-8 py-4 bg-gradient-to-r from-[#2934b7] to-[#1E2894] text-white rounded-full hover:shadow-xl hover:-translate-y-1 transition-all font-medium text-lg"
                  >
                    <Calendar className="w-6 h-6" />
                    Marcar Consulta
                  </button>

                  <p className="text-xs text-center text-gray-500 font-light">
                    * Campos obrigatórios. Entraremos em contacto em até 24 horas.
                  </p>
                </form>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="section-padding bg-gradient-to-br from-[#F8F9FA] to-[#E9ECEF]">
        <div className="max-w-responsive">
          <div className="text-center mb-4 md:mb-6 md:mb-5 md:mb-8 lg:mb-12">
            <h2 className="text-4xl font-light text-gray-800 mb-4">Como Chegar</h2>
            <p className="text-lg text-gray-600 font-light mb-2">
              Av. Padre Silva Rego, 592 Loja 1
            </p>
            <p className="text-base text-gray-500 font-light">
              4770-205 Joane, Vila Nova de Famalicão, Portugal
            </p>
          </div>

          <div className="max-w-5xl mx-auto">
            <div className="rounded-3xl overflow-hidden shadow-2xl border border-gray-200">
              <iframe
                src="https://maps.google.com/maps?q=41.4335299,-8.4153634&t=&z=17&ie=UTF8&iwloc=&output=embed"
                width="100%"
                height="500"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
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
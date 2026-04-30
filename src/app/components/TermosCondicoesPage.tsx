import { motion } from "motion/react";
import { Link } from "react-router";
import { ArrowLeft, FileText, Shield, Calendar, Lock, AlertCircle } from "lucide-react";
import logoPredileta from "../../imports/Logótipo_Predileta-removebg-preview.png";

export default function TermosCondicoesPage() {
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
      <section className="relative pt-32 pb-16 bg-gradient-to-br from-[#F8F9FA] to-[#E9ECEF]">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-white rounded-full shadow-sm mb-4 md:mb-6 border border-gray-100">
              <FileText className="w-4 h-4 text-[#2934b7]" />
              <span className="text-sm font-light text-gray-600">Informação Legal</span>
            </div>

            <h1 className="text-5xl lg:text-6xl font-light text-gray-800 leading-tight mb-4 md:mb-6">
              Termos e <span className="text-[#2934b7]">Condições</span>
            </h1>

            <p className="text-lg text-gray-600 font-light">
              Última atualização: 9 de maio de 2026
            </p>
          </motion.div>
        </div>
      </section>

      {/* Content Section */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="prose prose-lg max-w-none"
          >
            {/* Introdução */}
            <div className="mb-4 md:mb-6 md:mb-5 md:mb-8 lg:mb-12 p-6 bg-gradient-to-br from-[#F8F9FA] to-[#E9ECEF] rounded-2xl border border-gray-100">
              <p className="text-gray-700 leading-relaxed font-light mb-0">
                Bem-vindo à Clínica Dentária Predileta. Ao aceder e utilizar o nosso website, o utilizador aceita
                ficar vinculado aos presentes Termos e Condições. Por favor, leia atentamente este documento antes de
                utilizar os nossos serviços online.
              </p>
            </div>

            {/* 1. Identificação da Empresa */}
            <div className="mb-4 md:mb-6 md:mb-5 md:mb-8 lg:mb-12">
              <div className="flex items-center gap-3 mb-4 md:mb-6">
                <div className="w-10 h-10 bg-gradient-to-br from-[#2934b7] to-[#1E2894] rounded-xl flex items-center justify-center flex-shrink-0">
                  <FileText className="w-5 h-5 text-white" />
                </div>
                <h2 className="text-3xl font-light text-gray-800 mb-0">1. Identificação da Empresa</h2>
              </div>
              <div className="bg-gray-50 rounded-xl p-6 space-y-2 text-gray-700 font-light">
                <p className="mb-2"><strong className="font-medium">Nome:</strong> Clínica Dentária Predileta, Lda.</p>
                <p className="mb-2"><strong className="font-medium">Morada:</strong> Av. Padre Silva Rego, 592 Loja 1, 4770-205 Joane, Vila Nova de Famalicão, Portugal</p>
                <p className="mb-2"><strong className="font-medium">Email:</strong> geral@clinicapredileta.pt</p>
                <p className="mb-2"><strong className="font-medium">Telefone:</strong> 910 658 115</p>
                <p className="mb-2"><strong className="font-medium">Diretora Clínica:</strong> Dra. Maria (OMD 12345)</p>
                <p className="mb-0"><strong className="font-medium">Alvará:</strong> n.º E123456 emitido pela Entidade Reguladora da Saúde (ERS)</p>
              </div>
            </div>

            {/* 2. Uso do Site */}
            <div className="mb-4 md:mb-6 md:mb-5 md:mb-8 lg:mb-12">
              <div className="flex items-center gap-3 mb-4 md:mb-6">
                <div className="w-10 h-10 bg-gradient-to-br from-[#2934b7] to-[#1E2894] rounded-xl flex items-center justify-center flex-shrink-0">
                  <Shield className="w-5 h-5 text-white" />
                </div>
                <h2 className="text-3xl font-light text-gray-800 mb-0">2. Uso do Site</h2>
              </div>
              <div className="space-y-4 text-gray-700 font-light leading-relaxed">
                <p>
                  O website da Clínica Dentária Predileta destina-se a fornecer informações sobre os nossos serviços,
                  especialidades, equipa e a facilitar o contacto e agendamento de consultas.
                </p>
                <p>
                  O utilizador compromete-se a:
                </p>
                <ul className="list-disc pl-6 space-y-2 mt-3">
                  <li>Utilizar o site de forma lícita e em conformidade com as leis aplicáveis</li>
                  <li>Não utilizar o site para fins fraudulentos ou que possam causar danos à clínica ou a terceiros</li>
                  <li>Fornecer informações verdadeiras, atualizadas e completas sempre que solicitado</li>
                  <li>Não tentar aceder a áreas restritas do sistema sem autorização</li>
                </ul>
              </div>
            </div>

            {/* 3. Agendamento de Consultas */}
            <div className="mb-4 md:mb-6 md:mb-5 md:mb-8 lg:mb-12">
              <div className="flex items-center gap-3 mb-4 md:mb-6">
                <div className="w-10 h-10 bg-gradient-to-br from-[#2934b7] to-[#1E2894] rounded-xl flex items-center justify-center flex-shrink-0">
                  <Calendar className="w-5 h-5 text-white" />
                </div>
                <h2 className="text-3xl font-light text-gray-800 mb-0">3. Agendamento de Consultas e Responsabilidades</h2>
              </div>
              <div className="space-y-4 text-gray-700 font-light leading-relaxed">
                <p>
                  Os pedidos de marcação de consulta efetuados através do website são considerados provisórios até
                  confirmação pela nossa equipa através de contacto telefónico ou email.
                </p>
                <p>
                  <strong className="font-medium">Responsabilidades do paciente:</strong>
                </p>
                <ul className="list-disc pl-6 space-y-2 mt-3">
                  <li>Fornecer informações de contacto corretas e atualizadas</li>
                  <li>Informar sobre alergias, medicação atual e condições médicas relevantes</li>
                  <li>Comparecer pontualmente às consultas marcadas</li>
                  <li>Informar a clínica com antecedência em caso de impossibilidade de comparência</li>
                  <li>Seguir as recomendações e tratamentos prescritos pelos profissionais de saúde</li>
                </ul>
              </div>
            </div>

            {/* 4. Política de Cancelamento */}
            <div className="mb-4 md:mb-6 md:mb-5 md:mb-8 lg:mb-12">
              <div className="flex items-center gap-3 mb-4 md:mb-6">
                <div className="w-10 h-10 bg-gradient-to-br from-[#2934b7] to-[#1E2894] rounded-xl flex items-center justify-center flex-shrink-0">
                  <AlertCircle className="w-5 h-5 text-white" />
                </div>
                <h2 className="text-3xl font-light text-gray-800 mb-0">4. Política de Cancelamento e Faltas</h2>
              </div>
              <div className="bg-amber-50 border border-amber-200 rounded-xl p-6 mb-4">
                <p className="text-gray-700 font-light mb-0">
                  <strong className="font-medium text-amber-900">Atenção:</strong> Solicitamos que os cancelamentos sejam
                  comunicados com pelo menos <strong className="font-medium">24 horas de antecedência</strong>.
                </p>
              </div>
              <div className="space-y-4 text-gray-700 font-light leading-relaxed">
                <p>
                  A falta não justificada ou o cancelamento de última hora pode resultar em:
                </p>
                <ul className="list-disc pl-6 space-y-2 mt-3">
                  <li>Prioridade reduzida em futuras marcações</li>
                  <li>Possível cobrança de taxa administrativa em casos de faltas repetidas</li>
                  <li>Dificuldade em agendar consultas de urgência</li>
                </ul>
                <p className="mt-4">
                  Compreendemos que imprevistos acontecem. Em situações excecionais (doença súbita, emergências),
                  pedimos que nos contacte assim que possível.
                </p>
              </div>
            </div>

            {/* 5. Propriedade Intelectual */}
            <div className="mb-4 md:mb-6 md:mb-5 md:mb-8 lg:mb-12">
              <h2 className="text-3xl font-light text-gray-800 mb-4 md:mb-6">5. Propriedade Intelectual</h2>
              <div className="space-y-4 text-gray-700 font-light leading-relaxed">
                <p>
                  Todo o conteúdo presente no website da Clínica Dentária Predileta, incluindo textos, imagens,
                  logótipos, gráficos, vídeos e código fonte, é propriedade da clínica ou dos seus licenciadores
                  e está protegido pelas leis de direitos de autor e propriedade intelectual.
                </p>
                <p>
                  É proibida a reprodução, distribuição, modificação ou utilização de qualquer conteúdo sem
                  autorização prévia por escrito da Clínica Dentária Predileta.
                </p>
              </div>
            </div>

            {/* 6. Limitação de Responsabilidade */}
            <div className="mb-4 md:mb-6 md:mb-5 md:mb-8 lg:mb-12">
              <h2 className="text-3xl font-light text-gray-800 mb-4 md:mb-6">6. Limitação de Responsabilidade</h2>
              <div className="space-y-4 text-gray-700 font-light leading-relaxed">
                <p>
                  A informação fornecida neste website tem caráter meramente informativo e educacional,
                  não substituindo em caso algum o diagnóstico ou tratamento médico profissional.
                </p>
                <p>
                  <strong className="font-medium">A Clínica Dentária Predileta não se responsabiliza por:</strong>
                </p>
                <ul className="list-disc pl-6 space-y-2 mt-3">
                  <li>Decisões tomadas com base exclusivamente na informação disponível no website</li>
                  <li>Eventuais interrupções, erros ou falhas técnicas no funcionamento do site</li>
                  <li>Danos resultantes de vírus ou outros elementos tecnológicos prejudiciais</li>
                  <li>Conteúdos de websites de terceiros acedidos através de links no nosso site</li>
                </ul>
                <p className="mt-4">
                  Recomendamos sempre a consulta presencial com um profissional de saúde oral para
                  diagnóstico e tratamento adequados.
                </p>
              </div>
            </div>

            {/* 7. Privacidade e Proteção de Dados */}
            <div className="mb-4 md:mb-6 md:mb-5 md:mb-8 lg:mb-12">
              <div className="flex items-center gap-3 mb-4 md:mb-6">
                <div className="w-10 h-10 bg-gradient-to-br from-[#2934b7] to-[#1E2894] rounded-xl flex items-center justify-center flex-shrink-0">
                  <Lock className="w-5 h-5 text-white" />
                </div>
                <h2 className="text-3xl font-light text-gray-800 mb-0">7. Privacidade e Proteção de Dados (RGPD)</h2>
              </div>
              <div className="space-y-4 text-gray-700 font-light leading-relaxed">
                <p>
                  A Clínica Dentária Predileta compromete-se a proteger a privacidade e os dados pessoais dos seus
                  utilizadores em conformidade com o Regulamento Geral de Proteção de Dados (RGPD - Regulamento UE 2016/679).
                </p>
                <p>
                  <strong className="font-medium">Dados recolhidos:</strong>
                </p>
                <ul className="list-disc pl-6 space-y-2 mt-3">
                  <li>Informações de contacto (nome, email, telefone)</li>
                  <li>Informações fornecidas em formulários de marcação de consulta</li>
                  <li>Dados de navegação (cookies, endereço IP)</li>
                </ul>
                <p className="mt-4">
                  <strong className="font-medium">Finalidade:</strong> Os dados pessoais são utilizados exclusivamente para:
                </p>
                <ul className="list-disc pl-6 space-y-2 mt-3">
                  <li>Gestão de marcações e prestação de serviços</li>
                  <li>Comunicação com pacientes</li>
                  <li>Melhoria dos serviços prestados</li>
                  <li>Cumprimento de obrigações legais</li>
                </ul>
                <p className="mt-4">
                  Os seus dados não serão partilhados com terceiros sem o seu consentimento, exceto quando exigido por lei.
                </p>
                <p>
                  Para mais informações, consulte a nossa <Link to="/politica-privacidade" className="text-[#2934b7] hover:underline font-medium">Política de Privacidade</Link>.
                </p>
              </div>
            </div>

            {/* 8. Alterações dos Termos */}
            <div className="mb-4 md:mb-6 md:mb-5 md:mb-8 lg:mb-12">
              <h2 className="text-3xl font-light text-gray-800 mb-4 md:mb-6">8. Alterações dos Termos e Condições</h2>
              <div className="space-y-4 text-gray-700 font-light leading-relaxed">
                <p>
                  A Clínica Dentária Predileta reserva-se o direito de atualizar ou modificar estes Termos e Condições
                  a qualquer momento, sem aviso prévio. As alterações entrarão em vigor imediatamente após a sua
                  publicação no website.
                </p>
                <p>
                  Recomendamos que reveja periodicamente esta página para se manter informado sobre eventuais alterações.
                  A utilização continuada do website após modificações constitui aceitação dos novos termos.
                </p>
              </div>
            </div>

            {/* 9. Contactos */}
            <div className="mb-4 md:mb-6 md:mb-5 md:mb-8 lg:mb-12">
              <h2 className="text-3xl font-light text-gray-800 mb-4 md:mb-6">9. Informações de Contacto</h2>
              <div className="bg-gradient-to-br from-[#F8F9FA] to-[#E9ECEF] rounded-xl md:rounded-2xl p-5 md:p-8 border border-gray-200">
                <p className="text-gray-700 font-light mb-4 md:mb-6">
                  Para questões relacionadas com estes Termos e Condições ou para exercer os seus direitos ao abrigo
                  do RGPD, por favor contacte-nos:
                </p>
                <div className="space-y-3 text-gray-700 font-light">
                  <p className="flex items-center gap-3">
                    <span className="font-medium min-w-[80px]">Email:</span>
                    <a href="mailto:geral@clinicapredileta.pt" className="text-[#2934b7] hover:underline">
                      geral@clinicapredileta.pt
                    </a>
                  </p>
                  <p className="flex items-center gap-3">
                    <span className="font-medium min-w-[80px]">Telefone:</span>
                    <a href="tel:+351910658115" className="text-[#2934b7] hover:underline">
                      910 658 115
                    </a>
                  </p>
                  <p className="flex items-start gap-3">
                    <span className="font-medium min-w-[80px]">Morada:</span>
                    <span>Av. Padre Silva Rego, 592 Loja 1<br />4770-205 Joane, Vila Nova de Famalicão</span>
                  </p>
                </div>
              </div>
            </div>

            {/* Lei Aplicável */}
            <div className="mb-5 md:mb-8">
              <h2 className="text-3xl font-light text-gray-800 mb-4 md:mb-6">Lei Aplicável e Jurisdição</h2>
              <div className="space-y-4 text-gray-700 font-light leading-relaxed">
                <p>
                  Estes Termos e Condições são regidos pela lei portuguesa. Qualquer litígio emergente ou relacionado
                  com estes termos será submetido à jurisdição exclusiva dos tribunais da comarca de Vila Nova de Famalicão.
                </p>
              </div>
            </div>

            {/* Botão Voltar */}
            <div className="mt-12 text-center">
              <Link
                to="/"
                className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-[#2934b7] to-[#1E2894] text-white rounded-full hover:shadow-xl hover:-translate-y-1 transition-all font-medium"
              >
                <ArrowLeft className="w-4 h-4 md:w-5 md:h-5" />
                Voltar ao Início
              </Link>
            </div>
          </motion.div>
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
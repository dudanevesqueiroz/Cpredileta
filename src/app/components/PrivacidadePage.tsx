import { motion } from "motion/react";
import { Link } from "react-router";
import { ArrowLeft, Shield, Lock, Eye, Database, Cookie, UserCheck, Mail, AlertTriangle } from "lucide-react";
import logoPredileta from "../../imports/Logótipo_Predileta-removebg-preview.png";

export default function PrivacidadePage() {
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
              <Shield className="w-4 h-4 text-[#2934b7]" />
              <span className="text-sm font-light text-gray-600">Proteção de Dados</span>
            </div>

            <h1 className="text-5xl lg:text-6xl font-light text-gray-800 leading-tight mb-4 md:mb-6">
              Política de <span className="text-[#2934b7]">Privacidade</span>
            </h1>

            <p className="text-lg text-gray-600 font-light">
              Última atualização: 14 de abril de 2026
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
          >
            {/* Introdução */}
            <div className="mb-4 md:mb-6 md:mb-5 md:mb-8 lg:mb-12">
              <div className="flex items-center gap-3 mb-4 md:mb-6">
                <div className="w-10 h-10 bg-gradient-to-br from-[#2934b7] to-[#1E2894] rounded-xl flex items-center justify-center flex-shrink-0">
                  <Shield className="w-5 h-5 text-white" />
                </div>
                <h2 className="text-3xl font-light text-gray-800 mb-0">1. Introdução</h2>
              </div>
              <div className="bg-gradient-to-br from-[#F8F9FA] to-[#E9ECEF] rounded-xl md:rounded-2xl p-5 md:p-8 border border-gray-100">
                <p className="text-gray-700 leading-relaxed font-light mb-4">
                  A <strong className="font-medium">Clínica Dentária Predileta</strong> está profundamente comprometida com
                  a proteção da privacidade e dos dados pessoais dos seus pacientes e utilizadores do website.
                </p>
                <p className="text-gray-700 leading-relaxed font-light mb-4">
                  Esta Política de Privacidade explica de forma clara e transparente como recolhemos, utilizamos,
                  armazenamos e protegemos os seus dados pessoais, em total conformidade com o
                  <strong className="font-medium"> Regulamento Geral sobre a Proteção de Dados (RGPD - Regulamento UE 2016/679)</strong> e
                  demais legislação aplicável em Portugal.
                </p>
                <p className="text-gray-700 leading-relaxed font-light mb-0">
                  Ao utilizar o nosso website e serviços, o utilizador consente com as práticas descritas nesta política.
                </p>
              </div>
            </div>

            {/* Dados Coletados */}
            <div className="mb-4 md:mb-6 md:mb-5 md:mb-8 lg:mb-12">
              <div className="flex items-center gap-3 mb-4 md:mb-6">
                <div className="w-10 h-10 bg-gradient-to-br from-[#2934b7] to-[#1E2894] rounded-xl flex items-center justify-center flex-shrink-0">
                  <Database className="w-5 h-5 text-white" />
                </div>
                <h2 className="text-3xl font-light text-gray-800 mb-0">2. Dados Coletados</h2>
              </div>
              <div className="space-y-4 text-gray-700 font-light leading-relaxed">
                <p>
                  Podemos recolher e processar os seguintes tipos de dados pessoais:
                </p>

                <div className="bg-gray-50 rounded-xl p-6 space-y-3">
                  <div className="flex items-start gap-3">
                    <div className="w-6 h-6 bg-[#2934b7] rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                      <span className="text-white text-xs font-medium">✓</span>
                    </div>
                    <div>
                      <p className="font-medium mb-1">Dados de Identificação</p>
                      <p className="text-sm">Nome completo, data de nascimento</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <div className="w-6 h-6 bg-[#2934b7] rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                      <span className="text-white text-xs font-medium">✓</span>
                    </div>
                    <div>
                      <p className="font-medium mb-1">Dados de Contacto</p>
                      <p className="text-sm">Endereço de email, número de telefone, morada</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <div className="w-6 h-6 bg-[#2934b7] rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                      <span className="text-white text-xs font-medium">✓</span>
                    </div>
                    <div>
                      <p className="font-medium mb-1">Dados de Navegação</p>
                      <p className="text-sm">Endereço IP, tipo de navegador, sistema operativo, páginas visitadas, tempo de permanência</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <div className="w-6 h-6 bg-[#2934b7] rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                      <span className="text-white text-xs font-medium">✓</span>
                    </div>
                    <div>
                      <p className="font-medium mb-1">Cookies e Tecnologias Similares</p>
                      <p className="text-sm">Dados recolhidos através de cookies para melhorar a experiência de navegação</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <div className="w-6 h-6 bg-[#2934b7] rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                      <span className="text-white text-xs font-medium">✓</span>
                    </div>
                    <div>
                      <p className="font-medium mb-1">Dados de Saúde (quando aplicável)</p>
                      <p className="text-sm">Informações médicas fornecidas voluntariamente para agendamento ou prestação de serviços</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Formas de Coleta */}
            <div className="mb-4 md:mb-6 md:mb-5 md:mb-8 lg:mb-12">
              <div className="flex items-center gap-3 mb-4 md:mb-6">
                <div className="w-10 h-10 bg-gradient-to-br from-[#2934b7] to-[#1E2894] rounded-xl flex items-center justify-center flex-shrink-0">
                  <Eye className="w-5 h-5 text-white" />
                </div>
                <h2 className="text-3xl font-light text-gray-800 mb-0">3. Formas de Coleta de Dados</h2>
              </div>
              <div className="space-y-4 text-gray-700 font-light leading-relaxed">
                <p>Os dados pessoais são recolhidos através de:</p>

                <ul className="space-y-3">
                  <li className="flex items-start gap-3">
                    <span className="w-2 h-2 bg-[#2934b7] rounded-full mt-2 flex-shrink-0"></span>
                    <div>
                      <strong className="font-medium">Formulários Online:</strong> Quando preenche formulários de contacto,
                      marcação de consultas ou subscrição de newsletter no nosso website.
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="w-2 h-2 bg-[#2934b7] rounded-full mt-2 flex-shrink-0"></span>
                    <div>
                      <strong className="font-medium">Cookies e Tecnologias de Rastreamento:</strong> Informações recolhidas
                      automaticamente quando navega no nosso site através de cookies e ferramentas similares.
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="w-2 h-2 bg-[#2934b7] rounded-full mt-2 flex-shrink-0"></span>
                    <div>
                      <strong className="font-medium">Ferramentas de Analytics:</strong> Utilizamos ferramentas como Google Analytics
                      para compreender como os utilizadores interagem com o nosso website.
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="w-2 h-2 bg-[#2934b7] rounded-full mt-2 flex-shrink-0"></span>
                    <div>
                      <strong className="font-medium">Comunicações Diretas:</strong> Emails, chamadas telefónicas ou mensagens
                      que nos envia diretamente.
                    </div>
                  </li>
                </ul>
              </div>
            </div>

            {/* Finalidade do Uso */}
            <div className="mb-4 md:mb-6 md:mb-5 md:mb-8 lg:mb-12">
              <div className="flex items-center gap-3 mb-4 md:mb-6">
                <div className="w-10 h-10 bg-gradient-to-br from-[#2934b7] to-[#1E2894] rounded-xl flex items-center justify-center flex-shrink-0">
                  <UserCheck className="w-5 h-5 text-white" />
                </div>
                <h2 className="text-3xl font-light text-gray-800 mb-0">4. Finalidade do Uso dos Dados</h2>
              </div>
              <div className="space-y-4 text-gray-700 font-light leading-relaxed">
                <p>Os seus dados pessoais são utilizados exclusivamente para as seguintes finalidades:</p>

                <div className="grid md:grid-cols-2 gap-4 mt-6">
                  <div className="bg-gradient-to-br from-[#F8F9FA] to-[#E9ECEF] rounded-xl p-5 border border-gray-100">
                    <h4 className="font-medium text-gray-800 mb-2">📅 Agendamento de Consultas</h4>
                    <p className="text-sm">Processar e confirmar marcações de consultas dentárias</p>
                  </div>

                  <div className="bg-gradient-to-br from-[#F8F9FA] to-[#E9ECEF] rounded-xl p-5 border border-gray-100">
                    <h4 className="font-medium text-gray-800 mb-2">💬 Comunicação</h4>
                    <p className="text-sm">Entrar em contacto sobre consultas, tratamentos e informações relevantes</p>
                  </div>

                  <div className="bg-gradient-to-br from-[#F8F9FA] to-[#E9ECEF] rounded-xl p-5 border border-gray-100">
                    <h4 className="font-medium text-gray-800 mb-2">🎯 Marketing (com consentimento)</h4>
                    <p className="text-sm">Envio de newsletters, promoções e informações sobre serviços (apenas quando autorizado)</p>
                  </div>

                  <div className="bg-gradient-to-br from-[#F8F9FA] to-[#E9ECEF] rounded-xl p-5 border border-gray-100">
                    <h4 className="font-medium text-gray-800 mb-2">📊 Melhoria do Website</h4>
                    <p className="text-sm">Análise de padrões de navegação para otimizar a experiência do utilizador</p>
                  </div>

                  <div className="bg-gradient-to-br from-[#F8F9FA] to-[#E9ECEF] rounded-xl p-5 border border-gray-100">
                    <h4 className="font-medium text-gray-800 mb-2">⚖️ Obrigações Legais</h4>
                    <p className="text-sm">Cumprimento de requisitos legais e regulamentares aplicáveis</p>
                  </div>

                  <div className="bg-gradient-to-br from-[#F8F9FA] to-[#E9ECEF] rounded-xl p-5 border border-gray-100">
                    <h4 className="font-medium text-gray-800 mb-2">🔒 Segurança</h4>
                    <p className="text-sm">Proteção contra fraudes e garantia da segurança dos sistemas</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Compartilhamento */}
            <div className="mb-4 md:mb-6 md:mb-5 md:mb-8 lg:mb-12">
              <div className="flex items-center gap-3 mb-4 md:mb-6">
                <div className="w-10 h-10 bg-gradient-to-br from-[#2934b7] to-[#1E2894] rounded-xl flex items-center justify-center flex-shrink-0">
                  <AlertTriangle className="w-5 h-5 text-white" />
                </div>
                <h2 className="text-3xl font-light text-gray-800 mb-0">5. Compartilhamento de Dados</h2>
              </div>
              <div className="bg-amber-50 border border-amber-200 rounded-xl p-6 mb-4">
                <p className="text-gray-700 font-light mb-0">
                  <strong className="font-medium text-amber-900">Compromisso:</strong> A Clínica Dentária Predileta
                  <strong className="font-medium"> não vende, aluga ou comercializa</strong> os seus dados pessoais a terceiros.
                </p>
              </div>
              <div className="space-y-4 text-gray-700 font-light leading-relaxed">
                <p>
                  Os seus dados podem ser partilhados apenas nas seguintes circunstâncias limitadas:
                </p>
                <ul className="space-y-3 mt-4">
                  <li className="flex items-start gap-3">
                    <span className="w-2 h-2 bg-[#2934b7] rounded-full mt-2 flex-shrink-0"></span>
                    <div>
                      <strong className="font-medium">Prestadores de Serviços:</strong> Empresas que nos auxiliam na operação
                      do website (ex: hosting, analytics) e que estão contratualmente obrigadas a proteger os seus dados.
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="w-2 h-2 bg-[#2934b7] rounded-full mt-2 flex-shrink-0"></span>
                    <div>
                      <strong className="font-medium">Obrigações Legais:</strong> Quando exigido por lei, regulamentação ou
                      ordem judicial.
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="w-2 h-2 bg-[#2934b7] rounded-full mt-2 flex-shrink-0"></span>
                    <div>
                      <strong className="font-medium">Com o Seu Consentimento:</strong> Em qualquer outra situação, apenas com
                      a sua autorização prévia e expressa.
                    </div>
                  </li>
                </ul>
              </div>
            </div>

            {/* Cookies */}
            <div className="mb-4 md:mb-6 md:mb-5 md:mb-8 lg:mb-12">
              <div className="flex items-center gap-3 mb-4 md:mb-6">
                <div className="w-10 h-10 bg-gradient-to-br from-[#2934b7] to-[#1E2894] rounded-xl flex items-center justify-center flex-shrink-0">
                  <Cookie className="w-5 h-5 text-white" />
                </div>
                <h2 className="text-3xl font-light text-gray-800 mb-0">6. Uso de Cookies</h2>
              </div>
              <div className="space-y-4 text-gray-700 font-light leading-relaxed">
                <p>
                  O nosso website utiliza <strong className="font-medium">cookies</strong> e tecnologias similares para
                  melhorar a sua experiência de navegação e compreender como o site é utilizado.
                </p>

                <div className="bg-gray-50 rounded-xl p-6">
                  <h4 className="font-medium text-gray-800 mb-3">O que são cookies?</h4>
                  <p className="mb-4">
                    Cookies são pequenos ficheiros de texto armazenados no seu dispositivo quando visita um website.
                    Permitem que o site reconheça o seu dispositivo e guarde preferências.
                  </p>

                  <h4 className="font-medium text-gray-800 mb-3">Tipos de cookies utilizados:</h4>
                  <ul className="space-y-2">
                    <li className="flex items-start gap-2">
                      <span className="text-[#2934b7] mt-1">•</span>
                      <div>
                        <strong>Cookies Essenciais:</strong> Necessários para o funcionamento básico do site
                      </div>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-[#2934b7] mt-1">•</span>
                      <div>
                        <strong>Cookies de Desempenho:</strong> Recolhem informações sobre como utiliza o site
                      </div>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-[#2934b7] mt-1">•</span>
                      <div>
                        <strong>Cookies de Funcionalidade:</strong> Guardam as suas preferências e personalizações
                      </div>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-[#2934b7] mt-1">•</span>
                      <div>
                        <strong>Cookies de Marketing:</strong> Utilizados para apresentar conteúdo relevante (requerem consentimento)
                      </div>
                    </li>
                  </ul>
                </div>

                <p className="mt-4">
                  Pode gerir as suas preferências de cookies através das definições do seu navegador. Note que a desativação
                  de alguns cookies pode afetar a funcionalidade do website.
                </p>
              </div>
            </div>

            {/* Direitos RGPD */}
            <div className="mb-4 md:mb-6 md:mb-5 md:mb-8 lg:mb-12">
              <div className="flex items-center gap-3 mb-4 md:mb-6">
                <div className="w-10 h-10 bg-gradient-to-br from-[#2934b7] to-[#1E2894] rounded-xl flex items-center justify-center flex-shrink-0">
                  <Shield className="w-5 h-5 text-white" />
                </div>
                <h2 className="text-3xl font-light text-gray-800 mb-0">7. Direitos do Utilizador (RGPD)</h2>
              </div>
              <div className="space-y-4 text-gray-700 font-light leading-relaxed">
                <p>
                  Em conformidade com o RGPD, você tem os seguintes direitos relativos aos seus dados pessoais:
                </p>

                <div className="grid gap-4 mt-6">
                  <div className="flex items-start gap-4 bg-gradient-to-br from-[#F8F9FA] to-[#E9ECEF] rounded-xl p-5 border border-gray-100">
                    <div className="w-8 h-8 bg-[#2934b7] rounded-lg flex items-center justify-center flex-shrink-0">
                      <Eye className="w-4 h-4 text-white" />
                    </div>
                    <div>
                      <h4 className="font-medium text-gray-800 mb-1">Direito de Acesso</h4>
                      <p className="text-sm">Solicitar uma cópia dos dados pessoais que detemos sobre si</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4 bg-gradient-to-br from-[#F8F9FA] to-[#E9ECEF] rounded-xl p-5 border border-gray-100">
                    <div className="w-8 h-8 bg-[#2934b7] rounded-lg flex items-center justify-center flex-shrink-0">
                      <UserCheck className="w-4 h-4 text-white" />
                    </div>
                    <div>
                      <h4 className="font-medium text-gray-800 mb-1">Direito de Retificação</h4>
                      <p className="text-sm">Corrigir dados pessoais incorretos ou incompletos</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4 bg-gradient-to-br from-[#F8F9FA] to-[#E9ECEF] rounded-xl p-5 border border-gray-100">
                    <div className="w-8 h-8 bg-[#2934b7] rounded-lg flex items-center justify-center flex-shrink-0">
                      <AlertTriangle className="w-4 h-4 text-white" />
                    </div>
                    <div>
                      <h4 className="font-medium text-gray-800 mb-1">Direito ao Apagamento ("Direito a Ser Esquecido")</h4>
                      <p className="text-sm">Solicitar a eliminação dos seus dados pessoais, quando aplicável</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4 bg-gradient-to-br from-[#F8F9FA] to-[#E9ECEF] rounded-xl p-5 border border-gray-100">
                    <div className="w-8 h-8 bg-[#2934b7] rounded-lg flex items-center justify-center flex-shrink-0">
                      <Lock className="w-4 h-4 text-white" />
                    </div>
                    <div>
                      <h4 className="font-medium text-gray-800 mb-1">Direito à Limitação do Tratamento</h4>
                      <p className="text-sm">Restringir o processamento dos seus dados em determinadas circunstâncias</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4 bg-gradient-to-br from-[#F8F9FA] to-[#E9ECEF] rounded-xl p-5 border border-gray-100">
                    <div className="w-8 h-8 bg-[#2934b7] rounded-lg flex items-center justify-center flex-shrink-0">
                      <Database className="w-4 h-4 text-white" />
                    </div>
                    <div>
                      <h4 className="font-medium text-gray-800 mb-1">Direito à Portabilidade</h4>
                      <p className="text-sm">Receber os seus dados num formato estruturado e transferi-los para outro responsável</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4 bg-gradient-to-br from-[#F8F9FA] to-[#E9ECEF] rounded-xl p-5 border border-gray-100">
                    <div className="w-8 h-8 bg-[#2934b7] rounded-lg flex items-center justify-center flex-shrink-0">
                      <Shield className="w-4 h-4 text-white" />
                    </div>
                    <div>
                      <h4 className="font-medium text-gray-800 mb-1">Direito de Oposição</h4>
                      <p className="text-sm">Opor-se ao tratamento dos seus dados para determinadas finalidades</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4 bg-gradient-to-br from-[#F8F9FA] to-[#E9ECEF] rounded-xl p-5 border border-gray-100">
                    <div className="w-8 h-8 bg-[#2934b7] rounded-lg flex items-center justify-center flex-shrink-0">
                      <Mail className="w-4 h-4 text-white" />
                    </div>
                    <div>
                      <h4 className="font-medium text-gray-800 mb-1">Retirada de Consentimento</h4>
                      <p className="text-sm">Retirar o consentimento previamente dado a qualquer momento</p>
                    </div>
                  </div>
                </div>

                <p className="mt-6">
                  Para exercer qualquer um destes direitos, por favor contacte-nos através dos meios indicados na secção
                  "Informações de Contacto" desta política.
                </p>
              </div>
            </div>

            {/* Segurança */}
            <div className="mb-4 md:mb-6 md:mb-5 md:mb-8 lg:mb-12">
              <div className="flex items-center gap-3 mb-4 md:mb-6">
                <div className="w-10 h-10 bg-gradient-to-br from-[#2934b7] to-[#1E2894] rounded-xl flex items-center justify-center flex-shrink-0">
                  <Lock className="w-5 h-5 text-white" />
                </div>
                <h2 className="text-3xl font-light text-gray-800 mb-0">8. Segurança dos Dados</h2>
              </div>
              <div className="space-y-4 text-gray-700 font-light leading-relaxed">
                <p>
                  A segurança dos seus dados pessoais é uma prioridade para nós. Implementamos medidas técnicas e
                  organizacionais adequadas para proteger os seus dados contra acesso não autorizado, perda, destruição
                  ou alteração.
                </p>

                <div className="bg-gradient-to-br from-[#F8F9FA] to-[#E9ECEF] rounded-xl p-6 border border-gray-100">
                  <h4 className="font-medium text-gray-800 mb-4">Medidas de segurança implementadas:</h4>
                  <ul className="space-y-2">
                    <li className="flex items-start gap-2">
                      <span className="text-[#2934b7] mt-1 text-lg">🔒</span>
                      <span>Criptografia SSL/TLS para transmissão segura de dados</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-[#2934b7] mt-1 text-lg">🛡️</span>
                      <span>Firewalls e sistemas de segurança atualizados</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-[#2934b7] mt-1 text-lg">👥</span>
                      <span>Acesso restrito aos dados apenas a colaboradores autorizados</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-[#2934b7] mt-1 text-lg">📋</span>
                      <span>Políticas internas de proteção de dados e formação de funcionários</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-[#2934b7] mt-1 text-lg">💾</span>
                      <span>Backups regulares e armazenamento seguro</span>
                    </li>
                  </ul>
                </div>

                <p className="mt-4">
                  Apesar de todos os esforços, nenhum método de transmissão pela internet ou armazenamento eletrónico é
                  100% seguro. Comprometemo-nos a proteger os seus dados, mas não podemos garantir segurança absoluta.
                </p>
              </div>
            </div>

            {/* Retenção de Dados */}
            <div className="mb-4 md:mb-6 md:mb-5 md:mb-8 lg:mb-12">
              <h2 className="text-3xl font-light text-gray-800 mb-4 md:mb-6">9. Período de Retenção de Dados</h2>
              <div className="space-y-4 text-gray-700 font-light leading-relaxed">
                <p>
                  Os seus dados pessoais são conservados apenas pelo período necessário para cumprir as finalidades para
                  as quais foram recolhidos, ou conforme exigido por lei.
                </p>
                <p>
                  Quando os dados deixarem de ser necessários, serão eliminados de forma segura ou anonimizados.
                </p>
              </div>
            </div>

            {/* Contacto */}
            <div className="mb-4 md:mb-6 md:mb-5 md:mb-8 lg:mb-12">
              <div className="flex items-center gap-3 mb-4 md:mb-6">
                <div className="w-10 h-10 bg-gradient-to-br from-[#2934b7] to-[#1E2894] rounded-xl flex items-center justify-center flex-shrink-0">
                  <Mail className="w-5 h-5 text-white" />
                </div>
                <h2 className="text-3xl font-light text-gray-800 mb-0">10. Informações de Contacto</h2>
              </div>
              <div className="bg-gradient-to-br from-[#F8F9FA] to-[#E9ECEF] rounded-xl md:rounded-2xl p-5 md:p-8 border border-gray-200">
                <p className="text-gray-700 font-light mb-4 md:mb-6">
                  Para questões relacionadas com esta Política de Privacidade, para exercer os seus direitos ao abrigo
                  do RGPD, ou para apresentar uma reclamação, contacte-nos:
                </p>
                <div className="space-y-3 text-gray-700 font-light">
                  <p className="flex items-center gap-3">
                    <strong className="font-medium min-w-[140px]">Responsável:</strong>
                    <span>Clínica Dentária Predileta, Lda.</span>
                  </p>
                  <p className="flex items-center gap-3">
                    <strong className="font-medium min-w-[140px]">Email Privacidade:</strong>
                    <a href="mailto:privacidade@clinicapredileta.pt" className="text-[#2934b7] hover:underline">
                      privacidade@clinicapredileta.pt
                    </a>
                  </p>
                  <p className="flex items-center gap-3">
                    <strong className="font-medium min-w-[140px]">Email Geral:</strong>
                    <a href="mailto:geral@clinicapredileta.pt" className="text-[#2934b7] hover:underline">
                      geral@clinicapredileta.pt
                    </a>
                  </p>
                  <p className="flex items-center gap-3">
                    <strong className="font-medium min-w-[140px]">Telefone:</strong>
                    <a href="tel:+351910658115" className="text-[#2934b7] hover:underline">
                      910 658 115
                    </a>
                  </p>
                  <p className="flex items-start gap-3">
                    <strong className="font-medium min-w-[140px]">Morada:</strong>
                    <span>Av. Padre Silva Rego, 592 Loja 1<br />4770-205 Joane, Vila Nova de Famalicão</span>
                  </p>
                </div>

                <div className="mt-6 pt-6 border-t border-gray-200">
                  <p className="text-sm text-gray-600 font-light">
                    <strong className="font-medium">Autoridade de Controlo:</strong> Caso não fique satisfeito com a nossa
                    resposta, tem o direito de apresentar uma reclamação à
                    <a href="https://www.cnpd.pt" target="_blank" rel="noopener noreferrer" className="text-[#2934b7] hover:underline ml-1">
                      Comissão Nacional de Proteção de Dados (CNPD)
                    </a>.
                  </p>
                </div>
              </div>
            </div>

            {/* Alterações */}
            <div className="mb-5 md:mb-8">
              <h2 className="text-3xl font-light text-gray-800 mb-4 md:mb-6">11. Alterações a Esta Política</h2>
              <div className="space-y-4 text-gray-700 font-light leading-relaxed">
                <p>
                  Reservamo-nos o direito de atualizar esta Política de Privacidade periodicamente para refletir alterações
                  nas nossas práticas ou por motivos operacionais, legais ou regulamentares.
                </p>
                <p>
                  Quaisquer alterações serão publicadas nesta página com a data de atualização revista. Recomendamos que
                  reveja esta política regularmente para se manter informado sobre como protegemos os seus dados.
                </p>
              </div>
            </div>

            {/* Back to Top Button */}
            <div className="mt-12 text-center">
              <Link
                to="/"
                className="inline-flex items-center gap-2 px-6 py-3 md:px-8 md:py-4 text-sm md:text-base bg-[#2934b7] text-white rounded-full hover:bg-[#1E2894] hover:shadow-lg hover:-translate-y-1 transition-all font-light"
              >
                <ArrowLeft className="w-4 h-4 md:w-5 md:h-5" />
                Voltar ao Início
              </Link>
            </div>
          </motion.div>
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
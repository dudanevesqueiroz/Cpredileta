import { motion, AnimatePresence } from "motion/react";
import { useState, useEffect } from "react";
import { Cookie, X, Settings, Check } from "lucide-react";

interface CookiePreferences {
  essential: boolean;
  analytics: boolean;
  marketing: boolean;
}

export default function CookieBanner() {
  const [showBanner, setShowBanner] = useState(false);
  const [showPreferences, setShowPreferences] = useState(false);
  const [preferences, setPreferences] = useState<CookiePreferences>({
    essential: true,
    analytics: false,
    marketing: false
  });

  useEffect(() => {
    // Verificar se já existe consentimento guardado
    const consent = localStorage.getItem("cookieConsent");
    if (!consent) {
      // Pequeno delay para melhor UX
      setTimeout(() => setShowBanner(true), 1000);
    }
  }, []);

  const handleAcceptAll = () => {
    const allAccepted: CookiePreferences = {
      essential: true,
      analytics: true,
      marketing: true
    };
    savePreferences(allAccepted);
  };

  const handleRejectAll = () => {
    const onlyEssential: CookiePreferences = {
      essential: true,
      analytics: false,
      marketing: false
    };
    savePreferences(onlyEssential);
  };

  const handleSavePreferences = () => {
    savePreferences(preferences);
    setShowPreferences(false);
  };

  const savePreferences = (prefs: CookiePreferences) => {
    localStorage.setItem("cookieConsent", JSON.stringify(prefs));
    localStorage.setItem("cookieConsentDate", new Date().toISOString());
    setShowBanner(false);

    // Aqui você pode adicionar lógica para ativar/desativar scripts de tracking
    if (prefs.analytics) {
      // Ativar Google Analytics, etc.
      console.log("Analytics cookies enabled");
    }
    if (prefs.marketing) {
      // Ativar Facebook Pixel, etc.
      console.log("Marketing cookies enabled");
    }
  };

  const togglePreference = (key: keyof CookiePreferences) => {
    if (key === 'essential') return; // Essenciais não podem ser desativados
    setPreferences(prev => ({
      ...prev,
      [key]: !prev[key]
    }));
  };

  return (
    <AnimatePresence>
      {showBanner && (
        <>
          {/* Overlay escuro */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/50 backdrop-blur-sm z-[9998]"
            onClick={() => {}} // Prevenir fechar ao clicar fora
          />

          {/* Banner Principal */}
          <motion.div
            initial={{ y: 100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: 100, opacity: 0 }}
            transition={{ type: "spring", damping: 25, stiffness: 300 }}
            className="fixed bottom-0 left-0 right-0 z-[9999] p-4 md:p-6"
          >
            <div className="max-w-6xl mx-auto bg-white rounded-2xl md:rounded-3xl shadow-2xl border border-gray-200 overflow-hidden">
              <div className="p-6 md:p-8">
                <div className="flex items-start gap-4 mb-6">
                  <div className="w-12 h-12 md:w-14 md:h-14 bg-gradient-to-br from-[#2934b7] to-[#1E2894] rounded-xl flex items-center justify-center flex-shrink-0">
                    <Cookie className="w-6 h-6 md:w-7 md:h-7 text-white" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl md:text-2xl font-light text-gray-800 mb-2">
                      Utilizamos Cookies
                    </h3>
                    <p className="text-sm md:text-base text-gray-600 font-light leading-relaxed">
                      Utilizamos cookies para melhorar a sua experiência, personalizar conteúdo e analisar o tráfego.
                      Pode aceitar todos os cookies ou gerir as suas preferências.
                    </p>
                  </div>
                </div>

                <div className="flex flex-col sm:flex-row gap-3">
                  <button
                    onClick={handleAcceptAll}
                    className="flex-1 sm:flex-none inline-flex items-center justify-center gap-2 px-6 py-3 md:px-8 md:py-4 bg-gradient-to-r from-[#2934b7] to-[#1E2894] text-white rounded-full hover:shadow-xl hover:-translate-y-0.5 transition-all font-medium"
                  >
                    <Check className="w-5 h-5" />
                    Aceitar Todos
                  </button>

                  <button
                    onClick={() => setShowPreferences(true)}
                    className="flex-1 sm:flex-none inline-flex items-center justify-center gap-2 px-6 py-3 md:px-8 md:py-4 bg-white border-2 border-[#2934b7] text-[#2934b7] rounded-full hover:bg-[#2934b7] hover:text-white transition-all font-medium"
                  >
                    <Settings className="w-5 h-5" />
                    Gerir Preferências
                  </button>

                  <button
                    onClick={handleRejectAll}
                    className="flex-1 sm:flex-none px-6 py-3 md:px-8 md:py-4 bg-gray-100 text-gray-700 rounded-full hover:bg-gray-200 transition-all font-light"
                  >
                    Rejeitar
                  </button>
                </div>

                <p className="text-xs text-gray-500 font-light mt-4 text-center">
                  Ao continuar a navegar, aceita a nossa{" "}
                  <a href="/politica-privacidade" className="text-[#2934b7] hover:underline">
                    Política de Privacidade
                  </a>
                </p>
              </div>
            </div>
          </motion.div>

          {/* Modal de Preferências */}
          <AnimatePresence>
            {showPreferences && (
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                className="fixed inset-0 z-[10000] flex items-center justify-center p-4"
              >
                <div className="bg-white rounded-2xl md:rounded-3xl shadow-2xl max-w-2xl w-full max-h-[80vh] overflow-y-auto">
                  {/* Header */}
                  <div className="sticky top-0 bg-white border-b border-gray-200 p-6 flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 bg-gradient-to-br from-[#2934b7] to-[#1E2894] rounded-lg flex items-center justify-center">
                        <Settings className="w-5 h-5 text-white" />
                      </div>
                      <h3 className="text-xl md:text-2xl font-light text-gray-800">
                        Gerir Preferências de Cookies
                      </h3>
                    </div>
                    <button
                      onClick={() => setShowPreferences(false)}
                      className="p-2 hover:bg-gray-100 rounded-full transition-colors"
                    >
                      <X className="w-5 h-5 text-gray-600" />
                    </button>
                  </div>

                  {/* Conteúdo */}
                  <div className="p-6 space-y-6">
                    <p className="text-gray-600 font-light leading-relaxed">
                      Personalize as suas preferências de cookies. Os cookies essenciais são necessários para o funcionamento básico do site e não podem ser desativados.
                    </p>

                    {/* Cookie Essenciais */}
                    <div className="bg-gray-50 rounded-xl p-4 md:p-6">
                      <div className="flex items-start justify-between mb-3">
                        <div className="flex-1">
                          <h4 className="text-lg font-medium text-gray-800 mb-1">
                            Cookies Essenciais
                          </h4>
                          <p className="text-sm text-gray-600 font-light">
                            Necessários para o funcionamento básico do site (navegação, segurança, preferências de idioma).
                          </p>
                        </div>
                        <div className="ml-4">
                          <div className="w-12 h-6 bg-[#2934b7] rounded-full flex items-center justify-end px-1">
                            <div className="w-4 h-4 bg-white rounded-full"></div>
                          </div>
                          <span className="text-xs text-gray-500 font-light mt-1 block">Sempre ativo</span>
                        </div>
                      </div>
                    </div>

                    {/* Cookies Estatísticos */}
                    <div className="bg-gray-50 rounded-xl p-4 md:p-6">
                      <div className="flex items-start justify-between mb-3">
                        <div className="flex-1">
                          <h4 className="text-lg font-medium text-gray-800 mb-1">
                            Cookies Estatísticos
                          </h4>
                          <p className="text-sm text-gray-600 font-light">
                            Ajudam-nos a entender como os visitantes interagem com o site através de análise de dados anónimos (Google Analytics).
                          </p>
                        </div>
                        <div className="ml-4">
                          <button
                            onClick={() => togglePreference('analytics')}
                            className={`w-12 h-6 rounded-full flex items-center transition-colors ${
                              preferences.analytics
                                ? "bg-[#2934b7] justify-end"
                                : "bg-gray-300 justify-start"
                            } px-1`}
                          >
                            <div className="w-4 h-4 bg-white rounded-full"></div>
                          </button>
                        </div>
                      </div>
                    </div>

                    {/* Cookies de Marketing */}
                    <div className="bg-gray-50 rounded-xl p-4 md:p-6">
                      <div className="flex items-start justify-between mb-3">
                        <div className="flex-1">
                          <h4 className="text-lg font-medium text-gray-800 mb-1">
                            Cookies de Marketing
                          </h4>
                          <p className="text-sm text-gray-600 font-light">
                            Utilizados para publicidade personalizada e rastreamento de campanhas (Facebook Pixel, Google Ads).
                          </p>
                        </div>
                        <div className="ml-4">
                          <button
                            onClick={() => togglePreference('marketing')}
                            className={`w-12 h-6 rounded-full flex items-center transition-colors ${
                              preferences.marketing
                                ? "bg-[#2934b7] justify-end"
                                : "bg-gray-300 justify-start"
                            } px-1`}
                          >
                            <div className="w-4 h-4 bg-white rounded-full"></div>
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Footer */}
                  <div className="sticky bottom-0 bg-white border-t border-gray-200 p-6 flex flex-col sm:flex-row gap-3">
                    <button
                      onClick={handleSavePreferences}
                      className="flex-1 inline-flex items-center justify-center gap-2 px-8 py-4 bg-gradient-to-r from-[#2934b7] to-[#1E2894] text-white rounded-full hover:shadow-xl transition-all font-medium"
                    >
                      <Check className="w-5 h-5" />
                      Guardar Preferências
                    </button>
                    <button
                      onClick={() => setShowPreferences(false)}
                      className="px-8 py-4 bg-gray-100 text-gray-700 rounded-full hover:bg-gray-200 transition-all font-light"
                    >
                      Cancelar
                    </button>
                  </div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </>
      )}
    </AnimatePresence>
  );
}

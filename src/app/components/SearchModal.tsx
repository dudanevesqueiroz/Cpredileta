import { motion, AnimatePresence } from "motion/react";
import { Search, X, ArrowRight, FileText } from "lucide-react";
import { useState, useEffect, useRef } from "react";
import { useNavigate } from "react-router";
import logoSearchIcon from "../../imports/logo-predileta-icon.jpeg";
import logoTipIcon from "../../imports/Logotipo_Predileta-removebg-preview-1.png";
import { searchContent, navigateToSection, type SearchResult } from "../utils/searchEngine";

interface SearchModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const popularSearches = [
  { term: "Dentista Famalicão", query: "dentista famalicão" },
  { term: "Limpeza Dentária", query: "limpeza" },
  { term: "Colocar Aparelho", query: "aparelho" },
  { term: "Preço do Clareamento Dental", query: "clareamento" },
  { term: "Dentista Infantil", query: "infantil criança" },
  { term: "Cárie no Dente", query: "cárie dentisteria" }
];

export default function SearchModal({ isOpen, onClose }: SearchModalProps) {
  const [searchQuery, setSearchQuery] = useState("");
  const [searchResults, setSearchResults] = useState<SearchResult[]>([]);
  const [showResults, setShowResults] = useState(false);
  const navigate = useNavigate();
  const inputRef = useRef<HTMLInputElement>(null);

  // Fechar modal com a tecla ESC
  useEffect(() => {
    const handleEsc = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        onClose();
      }
    };

    if (isOpen) {
      document.addEventListener("keydown", handleEsc);
      document.body.style.overflow = "hidden"; // Prevenir scroll do body
    }

    return () => {
      document.removeEventListener("keydown", handleEsc);
      document.body.style.overflow = "unset";
    };
  }, [isOpen, onClose]);

  // Pesquisa em tempo real
  useEffect(() => {
    if (searchQuery.trim().length >= 2) {
      const results = searchContent(searchQuery);
      setSearchResults(results);
      setShowResults(true);
    } else {
      setSearchResults([]);
      setShowResults(false);
    }
  }, [searchQuery]);

  // Limpar pesquisa quando modal fecha
  useEffect(() => {
    if (!isOpen) {
      setSearchQuery("");
      setSearchResults([]);
      setShowResults(false);
    }
  }, [isOpen]);

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (searchQuery.trim() && searchResults.length > 0) {
      // Navegar para o primeiro resultado
      handleResultClick(searchResults[0]);
    }
  };

  const handleResultClick = (result: SearchResult) => {
    navigateToSection(result.path);
    onClose();

    // Se for a mesma página, scroll direto
    if (window.location.pathname === result.path.split('#')[0]) {
      const hash = result.path.split('#')[1];
      if (hash) {
        setTimeout(() => {
          const element = document.getElementById(hash);
          if (element) {
            element.scrollIntoView({ behavior: 'smooth', block: 'start' });
          }
        }, 100);
      }
    } else {
      // Navegar para outra página
      navigate(result.path.split('#')[0]);
      setTimeout(() => {
        const hash = result.path.split('#')[1];
        if (hash) {
          const element = document.getElementById(hash);
          if (element) {
            element.scrollIntoView({ behavior: 'smooth', block: 'start' });
          }
        }
      }, 500);
    }
  };

  const handlePopularSearch = (query: string) => {
    setSearchQuery(query);
    inputRef.current?.focus();
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Overlay - fundo escurecido */}
          <motion.div
            className="fixed inset-0 bg-black/50 backdrop-blur-sm z-[100]"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
          />

          {/* Modal de Pesquisa */}
          <motion.div
            className="fixed top-0 left-0 right-0 z-[101]"
            initial={{ y: -100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: -100, opacity: 0 }}
            transition={{ type: "spring", damping: 25, stiffness: 300 }}
          >
            <div className="max-w-responsive px-4 sm:px-6 pt-20 md:pt-24 lg:pt-32" style={{ maxWidth: '56rem' }}>
              <div className="bg-white rounded-2xl md:rounded-3xl shadow-2xl p-5 md:p-8 lg:p-10 border border-gray-100">
                {/* Header com botão fechar */}
                <div className="flex justify-between items-center mb-5 md:mb-8">
                  <div className="flex items-center gap-3">
                    <img
                      src={logoSearchIcon}
                      alt="Predileta"
                      className="w-8 h-8 md:w-10 md:h-10 rounded-full object-cover shadow-sm border border-gray-100"
                    />
                    <motion.h3
                      className="text-responsive-lg md:text-responsive-xl font-light text-gray-800"
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.1 }}
                    >
                      O que procura?
                    </motion.h3>
                  </div>
                  <motion.button
                    onClick={onClose}
                    className="p-2 rounded-full hover:bg-gray-100 transition-colors"
                    aria-label="Fechar pesquisa"
                    whileHover={{ scale: 1.1, rotate: 90 }}
                    whileTap={{ scale: 0.9 }}
                  >
                    <X className="w-5 h-5 md:w-6 md:h-6 text-gray-600" />
                  </motion.button>
                </div>

                {/* Formulário de Pesquisa */}
                <form onSubmit={handleSearch} className="mb-5 md:mb-8">
                  <motion.div
                    className="relative"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2 }}
                  >
                    <motion.div
                      animate={{
                        scale: searchQuery ? [1, 1.1, 1] : 1,
                        color: searchQuery ? "#2934b7" : "#9CA3AF"
                      }}
                      transition={{ duration: 0.3 }}
                      className="absolute left-4 md:left-5 top-1/2 transform -translate-y-1/2 z-10"
                    >
                      <Search className="w-5 h-5 md:w-6 md:h-6" />
                    </motion.div>
                    <input
                      ref={inputRef}
                      type="text"
                      value={searchQuery}
                      onChange={(e) => setSearchQuery(e.target.value)}
                      placeholder="Pesquisar tratamentos, serviços ou dúvidas..."
                      className="w-full pl-12 md:pl-16 pr-4 md:pr-6 py-3.5 md:py-5 text-sm md:text-lg bg-gray-50 border-2 border-gray-200 rounded-xl md:rounded-2xl focus:outline-none focus:border-[#2934b7] focus:bg-white transition-all font-light placeholder:text-gray-400"
                      autoFocus
                    />

                    {/* Dropdown de Resultados */}
                    <AnimatePresence>
                      {showResults && (
                        <motion.div
                          initial={{ opacity: 0, y: -10 }}
                          animate={{ opacity: 1, y: 0 }}
                          exit={{ opacity: 0, y: -10 }}
                          transition={{ duration: 0.2 }}
                          className="absolute top-full left-0 right-0 mt-2 bg-white rounded-xl md:rounded-2xl shadow-2xl border border-gray-100 overflow-hidden z-50 max-h-[60vh] overflow-y-auto"
                        >
                          {searchResults.length > 0 ? (
                            <div className="py-2">
                              {searchResults.map((result, index) => (
                                <motion.button
                                  key={result.id}
                                  onClick={() => handleResultClick(result)}
                                  className="w-full text-left px-4 md:px-6 py-3 md:py-4 hover:bg-gray-50 transition-colors group"
                                  initial={{ opacity: 0, x: -20 }}
                                  animate={{ opacity: 1, x: 0 }}
                                  transition={{ delay: index * 0.05 }}
                                  whileHover={{ x: 4 }}
                                >
                                  <div className="flex items-start gap-3">
                                    <div className="flex-shrink-0 mt-1">
                                      <div className="w-8 h-8 md:w-10 md:h-10 rounded-full bg-gradient-to-br from-[#2934b7] to-[#1BADC4] flex items-center justify-center">
                                        <FileText className="w-4 h-4 md:w-5 md:h-5 text-white" />
                                      </div>
                                    </div>
                                    <div className="flex-1 min-w-0">
                                      <div className="flex items-center gap-2 mb-1">
                                        <h4 className="text-sm md:text-base font-medium text-gray-800 group-hover:text-[#2934b7] transition-colors truncate">
                                          {result.title}
                                        </h4>
                                        <ArrowRight className="w-4 h-4 text-gray-400 group-hover:text-[#2934b7] transition-colors flex-shrink-0 opacity-0 group-hover:opacity-100" />
                                      </div>
                                      <p className="text-xs md:text-sm text-gray-600 line-clamp-2 mb-1">
                                        {result.description}
                                      </p>
                                      <div className="flex items-center gap-2 text-[10px] md:text-xs text-gray-500">
                                        <span className="px-2 py-0.5 bg-gray-100 rounded-full">
                                          {result.page}
                                        </span>
                                        <span>•</span>
                                        <span>{result.section}</span>
                                      </div>
                                    </div>
                                  </div>
                                </motion.button>
                              ))}
                            </div>
                          ) : (
                            <motion.div
                              initial={{ opacity: 0 }}
                              animate={{ opacity: 1 }}
                              className="py-8 md:py-12 px-6 text-center"
                            >
                              <div className="w-16 h-16 md:w-20 md:h-20 mx-auto mb-4 rounded-full bg-gray-100 flex items-center justify-center">
                                <Search className="w-8 h-8 md:w-10 md:h-10 text-gray-400" />
                              </div>
                              <h4 className="text-base md:text-lg font-medium text-gray-800 mb-2">
                                Não foi possível encontrar esta palavra-chave.
                              </h4>
                              <p className="text-sm md:text-base text-gray-600 font-light">
                                Tente pesquisar outro termo.
                              </p>
                            </motion.div>
                          )}
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </motion.div>
                </form>

                {/* Pesquisas Populares */}
                {!showResults && (
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.4 }}
                  >
                    <p className="text-xs md:text-sm font-medium text-gray-500 uppercase tracking-wider mb-3 md:mb-4">
                      Pesquisas populares
                    </p>
                    <div className="flex flex-wrap gap-2 md:gap-3">
                      {popularSearches.map((item, index) => (
                        <motion.button
                          key={index}
                          onClick={() => handlePopularSearch(item.query)}
                          className="px-3 py-2 md:px-5 md:py-2.5 text-xs md:text-sm bg-gray-50 hover:bg-[#2934b7] text-gray-700 hover:text-white rounded-full transition-all font-light border border-gray-200 hover:border-[#2934b7] hover:shadow-md"
                          initial={{ opacity: 0, scale: 0.8, y: 10 }}
                          animate={{ opacity: 1, scale: 1, y: 0 }}
                          transition={{ delay: 0.5 + (index * 0.08), type: "spring", stiffness: 200 }}
                          whileHover={{ scale: 1.05, y: -2 }}
                          whileTap={{ scale: 0.95 }}
                        >
                          {item.term}
                        </motion.button>
                      ))}
                    </div>
                  </motion.div>
                )}

                {/* Dica de uso */}
                <motion.div
                  className="mt-5 md:mt-8 pt-4 md:pt-6 border-t border-gray-100"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.6 }}
                >
                  <p className="text-[10px] md:text-xs text-gray-500 font-light text-center flex items-center justify-center gap-2">
                    <img src={logoTipIcon} alt="Dica" className="w-4 h-4 md:w-5 md:h-5" />
                    Dica: Use termos específicos para melhores resultados
                  </p>
                </motion.div>
              </div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}

import { Link } from "react-router";
import { ArrowLeft } from "lucide-react";
import logoPredileta from "../../imports/Logotipo_Predileta-removebg-preview.png";

interface PageLayoutProps {
  children: React.ReactNode;
  showBackButton?: boolean;
}

export default function PageLayout({ children, showBackButton = true }: PageLayoutProps) {
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

              {showBackButton && (
                <Link to="/" className="inline-flex items-center gap-2 px-4 py-2 md:px-6 md:py-3 text-sm md:text-base text-gray-600 hover:text-[#2934b7] transition-all font-light">
                  <ArrowLeft className="w-4 h-4 md:w-5 md:h-5" />
                  <span className="hidden sm:inline">Voltar ao Início</span>
                  <span className="sm:hidden">Voltar</span>
                </Link>
              )}
            </div>
          </div>
        </nav>
      </header>

      {/* Main Content */}
      {children}

      {/* Footer */}
      <footer className="bg-gray-900 text-gray-300 py-8 md:py-12">
        <div className="max-w-responsive text-center">
          <p className="text-xs md:text-sm font-light">&copy; 2026 Clínica Dentária Predileta. Todos os direitos reservados.</p>
        </div>
      </footer>
    </div>
  );
}

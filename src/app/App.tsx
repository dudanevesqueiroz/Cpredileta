import { BrowserRouter as Router, Routes, Route } from "react-router";
import HomePage from "./components/HomePage";
import HistoriaPage from "./components/HistoriaPage";
import MarcarConsultaPage from "./components/MarcarConsultaPage";
import EspecialidadesPage from "./components/EspecialidadesPage";
import AntesDepoisPage from "./components/AntesDepoisPage";
import ContactosPage from "./components/ContactosPage";
import TermosCondicoesPage from "./components/TermosCondicoesPage";
import PrivacidadePage from "./components/PrivacidadePage";
import ClinicaGeralPage from "./components/ClinicaGeralPage";
import PrevencaoPage from "./components/PrevencaoPage";
import OrtodontiaPage from "./components/OrtodontiaPage";
import ImplantologiaPage from "./components/ImplantologiaPage";
import AlinhamentoDentarioPage from "./components/AlinhamentoDentarioPage";
import BranqueamentoProfissionalPage from "./components/BranqueamentoProfissionalPage";
import ReabilitacaoOralPage from "./components/ReabilitacaoOralPage";
import AcordosPrecosPage from "./components/AcordosPrecosPage";
import CookieBanner from "./components/CookieBanner";

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/historia" element={<HistoriaPage />} />
        <Route path="/marcar-consulta" element={<MarcarConsultaPage />} />
        <Route path="/especialidades" element={<EspecialidadesPage />} />
        <Route path="/antes-depois" element={<AntesDepoisPage />} />
        <Route path="/contactos" element={<ContactosPage />} />
        <Route path="/termos-condicoes" element={<TermosCondicoesPage />} />
        <Route path="/politica-privacidade" element={<PrivacidadePage />} />
        <Route path="/clinica-geral" element={<ClinicaGeralPage />} />
        <Route path="/prevencao" element={<PrevencaoPage />} />
        <Route path="/ortodontia" element={<OrtodontiaPage />} />
        <Route path="/implantologia" element={<ImplantologiaPage />} />
        <Route path="/alinhamento-dentario" element={<AlinhamentoDentarioPage />} />
        <Route path="/branqueamento-profissional" element={<BranqueamentoProfissionalPage />} />
        <Route path="/reabilitacao-oral" element={<ReabilitacaoOralPage />} />
        <Route path="/acordos-precos" element={<AcordosPrecosPage />} />
      </Routes>

      {/* Cookie Banner - Aparece em todas as páginas */}
      <CookieBanner />
    </Router>
  );
}

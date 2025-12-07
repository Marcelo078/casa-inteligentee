import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { HelmetProvider } from "react-helmet-async";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import SobreNos from "./pages/SobreNos";
import PoliticaPrivacidade from "./pages/PoliticaPrivacidade";
import TermosUso from "./pages/TermosUso";
import Transparencia from "./pages/Transparencia";
import IsencaoResponsabilidade from "./pages/IsencaoResponsabilidade";
import Produtos from "./pages/Produtos";
import Contato from "./pages/Contato";
import ProdutoDetalhe from "./pages/ProdutoDetalhe";

const queryClient = new QueryClient();

const App = () => (
  <HelmetProvider>
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/sobre" element={<SobreNos />} />
            <Route path="/politica-privacidade" element={<PoliticaPrivacidade />} />
            <Route path="/termos-uso" element={<TermosUso />} />
            <Route path="/transparencia" element={<Transparencia />} />
            <Route path="/isencao-responsabilidade" element={<IsencaoResponsabilidade />} />
            <Route path="/produtos" element={<Produtos />} />
            <Route path="/produto/:slug" element={<ProdutoDetalhe />} />
            <Route path="/contato" element={<Contato />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </TooltipProvider>
    </QueryClientProvider>
  </HelmetProvider>
);

export default App;

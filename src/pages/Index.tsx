import { Helmet } from "react-helmet-async";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { HeroSection } from "@/components/home/HeroSection";
import { ProductCarousel } from "@/components/home/ProductCarousel";
import { CategoriesSection } from "@/components/home/CategoriesSection";
import { AffiliateButtons } from "@/components/home/AffiliateButtons";
import { FeaturesSection } from "@/components/home/FeaturesSection";
import { ProductsGrid } from "@/components/home/ProductsGrid";

const Index = () => {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "name": "Smart Home - Tudo Para Sua Casa Inteligente",
    "url": "https://smarthome.com.br",
    "description": "As melhores análises de fechaduras digitais, câmeras de segurança, interruptores inteligentes e produtos para casa inteligente. Melhores marcas, melhores preços, melhores ofertas.",
    "potentialAction": {
      "@type": "SearchAction",
      "target": "https://smarthome.com.br/busca?q={search_term_string}",
      "query-input": "required name=search_term_string"
    }
  };

  const organizationJsonLd = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "Smart Home Brasil",
    "url": "https://smarthome.com.br",
    "logo": "https://smarthome.com.br/logo.png",
    "sameAs": [],
    "contactPoint": {
      "@type": "ContactPoint",
      "email": "contato@smarthome.com.br",
      "contactType": "customer service"
    }
  };

  return (
    <>
      <Helmet>
        <title>Smart Home - Tudo Para Sua Casa Inteligente | Melhores Preços e Ofertas 2025</title>
        <meta 
          name="description" 
          content="Descubra as melhores fechaduras digitais, câmeras de segurança, interruptores inteligentes e sensores para sua casa. Análises completas, melhores marcas e ofertas exclusivas no Mercado Livre." 
        />
        <meta name="keywords" content="smart home, casa inteligente, fechadura digital, câmera de segurança wifi, interruptor inteligente, alexa, google home, automação residencial, melhores preços, melhores ofertas" />
        <link rel="canonical" href="https://smarthome.com.br" />
        
        {/* Open Graph */}
        <meta property="og:title" content="Smart Home - Tudo Para Sua Casa Inteligente" />
        <meta property="og:description" content="As melhores análises de produtos smart home. Fechaduras digitais, câmeras, sensores e muito mais com os melhores preços." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://smarthome.com.br" />
        <meta property="og:image" content="https://smarthome.com.br/og-image.jpg" />
        <meta property="og:site_name" content="Smart Home Brasil" />
        <meta property="og:locale" content="pt_BR" />

        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Smart Home - Tudo Para Sua Casa Inteligente" />
        <meta name="twitter:description" content="As melhores análises de produtos smart home com os melhores preços." />

        {/* JSON-LD */}
        <script type="application/ld+json">{JSON.stringify(jsonLd)}</script>
        <script type="application/ld+json">{JSON.stringify(organizationJsonLd)}</script>
      </Helmet>

      <div className="min-h-screen flex flex-col">
        <Header />
        <main className="flex-1">
          <HeroSection />
          <ProductCarousel />
          <CategoriesSection />
          <AffiliateButtons />
          <FeaturesSection />
          <ProductsGrid />
        </main>
        <Footer />
      </div>
    </>
  );
};

export default Index;

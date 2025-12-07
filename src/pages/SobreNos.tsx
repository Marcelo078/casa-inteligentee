import { Helmet } from "react-helmet-async";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";

const SobreNos = () => {
  return (
    <>
      <Helmet>
        <title>Sobre Nós | Smart Home - Tudo Para Sua Casa Inteligente</title>
        <meta name="description" content="Conheça a Smart Home Brasil. Somos especialistas em análises de produtos para casa inteligente, ajudando você a escolher as melhores opções do mercado." />
        <link rel="canonical" href="https://smarthome.com.br/sobre" />
      </Helmet>

      <div className="min-h-screen flex flex-col">
        <Header />
        <main className="flex-1 py-16">
          <div className="container max-w-4xl">
            <h1 className="font-display text-4xl font-bold text-foreground mb-8">
              Sobre a <span className="text-accent">Smart Home Brasil</span>
            </h1>

            <div className="prose prose-lg max-w-none text-muted-foreground space-y-6">
              <p>
                Bem-vindo à <strong className="text-foreground">Smart Home - Tudo Para Sua Casa Inteligente</strong>! 
                Somos um portal especializado em análises, comparativos e recomendações de produtos para automação residencial.
              </p>

              <h2 className="font-display text-2xl font-bold text-foreground mt-8">Nossa Missão</h2>
              <p>
                Nossa missão é democratizar o acesso à tecnologia de casa inteligente no Brasil. 
                Acreditamos que todos merecem ter uma casa mais segura, confortável e eficiente, 
                e trabalhamos para facilitar essa jornada com informações claras e confiáveis.
              </p>

              <h2 className="font-display text-2xl font-bold text-foreground mt-8">O Que Fazemos</h2>
              <ul className="list-disc pl-6 space-y-2">
                <li>Análises detalhadas de <strong className="text-foreground">fechaduras digitais</strong> das melhores marcas</li>
                <li>Comparativos de <strong className="text-foreground">câmeras de segurança Wi-Fi</strong></li>
                <li>Reviews de <strong className="text-foreground">interruptores e tomadas inteligentes</strong></li>
                <li>Guias completos sobre <strong className="text-foreground">sensores e automação</strong></li>
                <li>Curadoria das melhores ofertas no mercado</li>
              </ul>

              <h2 className="font-display text-2xl font-bold text-foreground mt-8">Nosso Compromisso</h2>
              <p>
                Nos comprometemos a fornecer informações imparciais e transparentes. Todas as nossas recomendações 
                são baseadas em análises técnicas, avaliações de usuários reais e nossa experiência no setor.
              </p>

              <h2 className="font-display text-2xl font-bold text-foreground mt-8">Programa de Afiliados</h2>
              <p>
                Este site participa do programa de afiliados do Mercado Livre. Isso significa que podemos receber 
                uma comissão por compras realizadas através dos nossos links, sem nenhum custo adicional para você. 
                Essa receita nos ajuda a manter o site funcionando e produzir conteúdo de qualidade.
              </p>

              <div className="mt-12 p-6 bg-secondary rounded-xl">
                <h3 className="font-display text-xl font-bold text-foreground mb-3">Entre em Contato</h3>
                <p className="text-muted-foreground">
                  Tem dúvidas, sugestões ou quer fazer uma parceria? Entre em contato conosco:
                </p>
                <p className="mt-2">
                  <strong className="text-foreground">E-mail:</strong> contato@smarthome.com.br
                </p>
              </div>
            </div>
          </div>
        </main>
        <Footer />
      </div>
    </>
  );
};

export default SobreNos;

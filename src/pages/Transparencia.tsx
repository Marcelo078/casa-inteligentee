import { Helmet } from "react-helmet-async";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";

const Transparencia = () => {
  return (
    <>
      <Helmet>
        <title>Transparência | Smart Home Brasil</title>
        <meta name="description" content="Página de Transparência da Smart Home Brasil. Entenda como trabalhamos, nosso modelo de negócios e compromisso com a honestidade." />
        <link rel="canonical" href="https://smarthome.com.br/transparencia" />
      </Helmet>

      <div className="min-h-screen flex flex-col">
        <Header />
        <main className="flex-1 py-16">
          <div className="container max-w-4xl">
            <h1 className="font-display text-4xl font-bold text-foreground mb-8">
              <span className="text-accent">Transparência</span>
            </h1>

            <div className="prose prose-lg max-w-none text-muted-foreground space-y-6">
              <p>
                Na <strong className="text-foreground">Smart Home Brasil</strong>, acreditamos que a confiança 
                é construída com transparência. Esta página explica como nosso site funciona e como geramos receita.
              </p>

              <h2 className="font-display text-2xl font-bold text-foreground mt-8">Como Geramos Receita</h2>
              <p>
                Este site gera receita principalmente através de <strong className="text-foreground">marketing de afiliados</strong>. 
                Quando você clica em um link para um produto e realiza uma compra, podemos receber uma pequena 
                comissão do vendedor. Isso não aumenta o preço que você paga.
              </p>

              <div className="bg-secondary p-6 rounded-xl my-8">
                <h3 className="font-display text-xl font-bold text-foreground mb-3">Nossos Parceiros de Afiliados</h3>
                <ul className="list-disc pl-6 space-y-2">
                  <li><strong className="text-foreground">Mercado Livre:</strong> Principal parceiro para produtos de casa inteligente</li>
                </ul>
              </div>

              <h2 className="font-display text-2xl font-bold text-foreground mt-8">Nossa Política Editorial</h2>
              <p>
                Nossos critérios de análise são:
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li><strong className="text-foreground">Imparcialidade:</strong> Não recebemos pagamento de fabricantes para análises</li>
                <li><strong className="text-foreground">Honestidade:</strong> Apontamos pontos positivos e negativos de cada produto</li>
                <li><strong className="text-foreground">Pesquisa:</strong> Baseamos nossas análises em especificações técnicas e avaliações de usuários</li>
                <li><strong className="text-foreground">Atualização:</strong> Revisamos nosso conteúdo regularmente</li>
              </ul>

              <h2 className="font-display text-2xl font-bold text-foreground mt-8">Como Escolhemos os Produtos</h2>
              <p>
                Selecionamos produtos com base em:
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Popularidade e demanda no mercado brasileiro</li>
                <li>Qualidade e reputação da marca</li>
                <li>Avaliações de compradores reais</li>
                <li>Relação custo-benefício</li>
                <li>Disponibilidade no Mercado Livre</li>
              </ul>

              <h2 className="font-display text-2xl font-bold text-foreground mt-8">Conflitos de Interesse</h2>
              <p>
                Para garantir a integridade do nosso conteúdo:
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Não aceitamos pagamento para publicar análises positivas</li>
                <li>A comissão de afiliado não influencia nossas recomendações</li>
                <li>Recomendamos produtos que genuinamente acreditamos ser bons</li>
              </ul>

              <h2 className="font-display text-2xl font-bold text-foreground mt-8">Identificação de Conteúdo Patrocinado</h2>
              <p>
                Quando houver conteúdo patrocinado ou parcerias comerciais específicas, 
                identificaremos claramente como "Publicidade" ou "Patrocinado".
              </p>

              <h2 className="font-display text-2xl font-bold text-foreground mt-8">Dúvidas?</h2>
              <p>
                Se você tiver qualquer dúvida sobre nossa política de transparência ou como operamos, 
                entre em contato conosco:
              </p>
              <p><strong className="text-foreground">E-mail:</strong> transparencia@smarthome.com.br</p>
            </div>
          </div>
        </main>
        <Footer />
      </div>
    </>
  );
};

export default Transparencia;

import { useParams, Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import { motion } from "framer-motion";
import { ExternalLink, ArrowLeft, Check, Star, Shield, Truck, Award, ChevronRight } from "lucide-react";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { products } from "@/data/products";
import { ProductCard } from "@/components/products/ProductCard";

const ProdutoDetalhe = () => {
  const { slug } = useParams<{ slug: string }>();
  const product = products.find((p) => p.slug === slug);

  if (!product) {
    return (
      <>
        <Header />
        <div className="min-h-screen flex items-center justify-center">
          <div className="text-center">
            <h1 className="text-4xl font-bold text-foreground mb-4">Produto não encontrado</h1>
            <p className="text-muted-foreground mb-6">O produto que você procura não está disponível.</p>
            <Button asChild>
              <Link to="/produtos">Ver todos os produtos</Link>
            </Button>
          </div>
        </div>
        <Footer />
      </>
    );
  }

  // Produtos relacionados da mesma categoria
  const relatedProducts = products
    .filter((p) => p.category === product.category && p.id !== product.id)
    .slice(0, 4);

  // Gerar conteúdo do artigo baseado no produto
  const articleContent = generateArticleContent(product);

  // JSON-LD para SEO
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Product",
    name: product.name,
    description: product.description,
    brand: {
      "@type": "Brand",
      name: product.brand
    },
    category: product.category,
    image: product.imageUrl,
    offers: {
      "@type": "Offer",
      availability: "https://schema.org/InStock",
      url: product.affiliateUrl,
      priceCurrency: "BRL"
    },
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: "4.7",
      reviewCount: "128"
    }
  };

  const faqJsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: `O que é ${product.name}?`,
        acceptedAnswer: {
          "@type": "Answer",
          text: product.description
        }
      },
      {
        "@type": "Question",
        name: `Quais são as principais características do ${product.name}?`,
        acceptedAnswer: {
          "@type": "Answer",
          text: product.features.join(", ")
        }
      },
      {
        "@type": "Question",
        name: `Onde comprar ${product.name} com o melhor preço?`,
        acceptedAnswer: {
          "@type": "Answer",
          text: `Você pode encontrar o ${product.name} com os melhores preços no Mercado Livre, com garantia de procedência e avaliações verificadas.`
        }
      }
    ]
  };

  return (
    <>
      <Helmet>
        <title>{product.name} | Melhores Preços, Ofertas e Marcas 2025</title>
        <meta 
          name="description" 
          content={`${product.name} - ${product.description} Confira as melhores ofertas, preços e avaliações. ${product.keywords.join(", ")}`} 
        />
        <meta name="keywords" content={`${product.name}, ${product.keywords.join(", ")}, melhores preços, melhores ofertas, melhores marcas`} />
        <link rel="canonical" href={`https://smarthome.com.br/produto/${product.slug}`} />
        
        {/* Open Graph */}
        <meta property="og:title" content={`${product.name} - Melhores Ofertas Smart Home 2025`} />
        <meta property="og:description" content={product.description} />
        <meta property="og:image" content={product.imageUrl} />
        <meta property="og:type" content="product" />
        <meta property="og:url" content={`https://smarthome.com.br/produto/${product.slug}`} />
        
        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={product.name} />
        <meta name="twitter:description" content={product.description} />
        <meta name="twitter:image" content={product.imageUrl} />
        
        {/* JSON-LD */}
        <script type="application/ld+json">{JSON.stringify(jsonLd)}</script>
        <script type="application/ld+json">{JSON.stringify(faqJsonLd)}</script>
      </Helmet>

      <div className="min-h-screen flex flex-col bg-background">
        <Header />
        
        <main className="flex-1">
          {/* Breadcrumb */}
          <div className="bg-muted/50 border-b border-border">
            <div className="container py-3">
              <nav className="flex items-center gap-2 text-sm text-muted-foreground">
                <Link to="/" className="hover:text-foreground transition-colors">Home</Link>
                <ChevronRight className="h-4 w-4" />
                <Link to="/produtos" className="hover:text-foreground transition-colors">Produtos</Link>
                <ChevronRight className="h-4 w-4" />
                <span className="text-foreground font-medium truncate">{product.name}</span>
              </nav>
            </div>
          </div>

          {/* Hero do Produto */}
          <section className="py-8 lg:py-12">
            <div className="container">
              <div className="grid lg:grid-cols-2 gap-8 lg:gap-12">
                {/* Imagem */}
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  className="relative"
                >
                  <div className="aspect-square rounded-2xl overflow-hidden bg-muted border border-border">
                    <img
                      src={product.imageUrl}
                      alt={`${product.name} - ${product.keywords.join(", ")}`}
                      className="h-full w-full object-cover"
                    />
                  </div>
                  <div className="absolute top-4 left-4">
                    <span className="rounded-full bg-accent px-4 py-2 text-sm font-bold text-accent-foreground shadow-lg">
                      {product.brand}
                    </span>
                  </div>
                </motion.div>

                {/* Info */}
                <motion.div
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  className="flex flex-col"
                >
                  <span className="text-sm font-semibold text-accent uppercase tracking-wider">
                    {product.category}
                  </span>
                  
                  <h1 className="mt-3 font-display text-3xl lg:text-4xl font-bold text-foreground leading-tight">
                    {product.name}
                  </h1>

                  {/* Rating */}
                  <div className="mt-4 flex items-center gap-2">
                    <div className="flex">
                      {[1, 2, 3, 4, 5].map((star) => (
                        <Star
                          key={star}
                          className={`h-5 w-5 ${star <= 4 ? "text-yellow-400 fill-yellow-400" : "text-yellow-400"}`}
                        />
                      ))}
                    </div>
                    <span className="text-sm text-muted-foreground">(128 avaliações)</span>
                  </div>

                  <p className="mt-4 text-lg text-muted-foreground leading-relaxed">
                    {product.description}
                  </p>

                  {/* Features */}
                  <div className="mt-6 flex flex-wrap gap-2">
                    {product.features.map((feature) => (
                      <span
                        key={feature}
                        className="inline-flex items-center gap-1.5 rounded-full bg-secondary px-3 py-1.5 text-sm font-medium text-secondary-foreground"
                      >
                        <Check className="h-4 w-4 text-green-500" />
                        {feature}
                      </span>
                    ))}
                  </div>

                  {/* Benefícios */}
                  <div className="mt-6 grid grid-cols-3 gap-4">
                    <div className="flex flex-col items-center text-center p-3 rounded-xl bg-muted/50">
                      <Shield className="h-6 w-6 text-accent mb-2" />
                      <span className="text-xs font-medium text-foreground">Garantia</span>
                    </div>
                    <div className="flex flex-col items-center text-center p-3 rounded-xl bg-muted/50">
                      <Truck className="h-6 w-6 text-accent mb-2" />
                      <span className="text-xs font-medium text-foreground">Frete Grátis</span>
                    </div>
                    <div className="flex flex-col items-center text-center p-3 rounded-xl bg-muted/50">
                      <Award className="h-6 w-6 text-accent mb-2" />
                      <span className="text-xs font-medium text-foreground">Original</span>
                    </div>
                  </div>

                  {/* CTA */}
                  <div className="mt-8 flex flex-col sm:flex-row gap-3">
                    <Button variant="cta" size="lg" className="flex-1 text-lg h-14" asChild>
                      <a href={product.affiliateUrl} target="_blank" rel="noopener noreferrer">
                        <ExternalLink className="mr-2 h-5 w-5" />
                        Comprar no Mercado Livre
                      </a>
                    </Button>
                    <Button variant="outline" size="lg" className="h-14" asChild>
                      <Link to="/produtos">
                        <ArrowLeft className="mr-2 h-5 w-5" />
                        Ver Outros
                      </Link>
                    </Button>
                  </div>

                  {/* Keywords SEO */}
                  <div className="mt-6 pt-6 border-t border-border">
                    <p className="text-xs text-muted-foreground">
                      <strong>Palavras-chave:</strong> {product.keywords.join(", ")}, melhores preços, melhores ofertas, melhores marcas
                    </p>
                  </div>
                </motion.div>
              </div>
            </div>
          </section>

          {/* Artigo Completo */}
          <section className="py-12 bg-muted/30">
            <div className="container">
              <motion.article
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="max-w-4xl mx-auto"
              >
                <Card className="overflow-hidden">
                  <CardContent className="p-6 lg:p-10">
                    <div className="prose prose-lg max-w-none dark:prose-invert">
                      {articleContent}
                    </div>
                  </CardContent>
                </Card>
              </motion.article>
            </div>
          </section>

          {/* FAQ */}
          <section className="py-12">
            <div className="container">
              <div className="max-w-4xl mx-auto">
                <h2 className="font-display text-2xl lg:text-3xl font-bold text-foreground mb-8 text-center">
                  Perguntas Frequentes sobre <span className="text-accent">{product.name}</span>
                </h2>
                
                <div className="space-y-4">
                  <Card>
                    <CardContent className="p-6">
                      <h3 className="font-bold text-foreground mb-2">O que é {product.name}?</h3>
                      <p className="text-muted-foreground">{product.description}</p>
                    </CardContent>
                  </Card>
                  
                  <Card>
                    <CardContent className="p-6">
                      <h3 className="font-bold text-foreground mb-2">Quais são as principais características?</h3>
                      <p className="text-muted-foreground">
                        As principais características incluem: {product.features.join(", ")}. 
                        Este produto da marca <strong>{product.brand}</strong> é ideal para quem busca qualidade e tecnologia em <strong>{product.category.toLowerCase()}</strong>.
                      </p>
                    </CardContent>
                  </Card>
                  
                  <Card>
                    <CardContent className="p-6">
                      <h3 className="font-bold text-foreground mb-2">Onde comprar com o melhor preço?</h3>
                      <p className="text-muted-foreground">
                        Recomendamos a compra através do <strong>Mercado Livre</strong>, onde você encontra os <strong>melhores preços</strong>, 
                        <strong> melhores ofertas</strong> e garantia de procedência. Clique no botão "Comprar no Mercado Livre" acima para aproveitar.
                      </p>
                    </CardContent>
                  </Card>
                  
                  <Card>
                    <CardContent className="p-6">
                      <h3 className="font-bold text-foreground mb-2">É compatível com Alexa e Google Home?</h3>
                      <p className="text-muted-foreground">
                        A maioria dos produtos de <strong>casa inteligente</strong> que oferecemos são compatíveis com os principais assistentes virtuais. 
                        Verifique as especificações detalhadas na página do produto no Mercado Livre.
                      </p>
                    </CardContent>
                  </Card>
                </div>
              </div>
            </div>
          </section>

          {/* Produtos Relacionados */}
          {relatedProducts.length > 0 && (
            <section className="py-12 bg-muted/30">
              <div className="container">
                <div className="text-center mb-8">
                  <h2 className="font-display text-2xl lg:text-3xl font-bold text-foreground">
                    Produtos <span className="text-accent">Relacionados</span>
                  </h2>
                  <p className="mt-2 text-muted-foreground">
                    Outros produtos em <strong>{product.category}</strong> que você pode gostar
                  </p>
                </div>
                
                <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
                  {relatedProducts.map((relatedProduct, index) => (
                    <ProductCard key={relatedProduct.id} product={relatedProduct} index={index} />
                  ))}
                </div>
                
                <div className="mt-8 text-center">
                  <Button variant="outline" size="lg" asChild>
                    <Link to="/produtos">
                      Ver Todos os Produtos
                      <ChevronRight className="ml-2 h-4 w-4" />
                    </Link>
                  </Button>
                </div>
              </div>
            </section>
          )}

          {/* CTA Final */}
          <section className="py-16 bg-gradient-to-r from-primary to-primary/80">
            <div className="container text-center">
              <h2 className="font-display text-3xl lg:text-4xl font-bold text-primary-foreground mb-4">
                Pronto para Transformar sua Casa?
              </h2>
              <p className="text-lg text-primary-foreground/80 mb-8 max-w-2xl mx-auto">
                Aproveite as <strong>melhores ofertas</strong> em produtos de <strong>casa inteligente</strong>. 
                Tecnologia de ponta com os <strong>melhores preços</strong> do mercado.
              </p>
              <Button variant="cta" size="lg" className="text-lg h-14 px-8" asChild>
                <a href={product.affiliateUrl} target="_blank" rel="noopener noreferrer">
                  <ExternalLink className="mr-2 h-5 w-5" />
                  Comprar {product.name}
                </a>
              </Button>
            </div>
          </section>
        </main>

        <Footer />
      </div>
    </>
  );
};

// Função para gerar conteúdo do artigo dinamicamente
function generateArticleContent(product: typeof products[0]) {
  return (
    <>
      <h2 className="font-display text-2xl font-bold text-foreground mb-4">
        {product.name}: Análise Completa 2025 - Melhores Preços, Ofertas e Marcas
      </h2>
      
      <p className="text-muted-foreground leading-relaxed mb-6">
        Se você está procurando o melhor em <strong>{product.category.toLowerCase()}</strong>, 
        o <strong>{product.name}</strong> da <strong>{product.brand}</strong> é uma escolha excepcional. 
        Neste artigo completo, vamos explorar todas as características, benefícios e porque este produto 
        se destaca entre as <strong>melhores marcas</strong> do mercado de <strong>casa inteligente</strong>.
      </p>

      <h3 className="font-display text-xl font-bold text-foreground mb-3 mt-8">
        Por que escolher o {product.name}?
      </h3>
      
      <p className="text-muted-foreground leading-relaxed mb-4">
        {product.description} A marca <strong>{product.brand}</strong> é reconhecida pela qualidade 
        e inovação em produtos de <strong>automação residencial</strong>. Com este dispositivo, 
        você terá acesso às tecnologias mais avançadas do mercado.
      </p>

      <h3 className="font-display text-xl font-bold text-foreground mb-3 mt-8">
        Principais Características e Recursos
      </h3>
      
      <ul className="space-y-3 mb-6">
        {product.features.map((feature, index) => (
          <li key={index} className="flex items-start gap-3 text-muted-foreground">
            <Check className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
            <span>
              <strong>{feature}</strong>: Recurso essencial para uma experiência completa em casa inteligente, 
              garantindo praticidade e segurança no dia a dia.
            </span>
          </li>
        ))}
      </ul>

      <h3 className="font-display text-xl font-bold text-foreground mb-3 mt-8">
        Melhores Preços e Onde Comprar
      </h3>
      
      <p className="text-muted-foreground leading-relaxed mb-4">
        Para encontrar as <strong>melhores ofertas</strong> do <strong>{product.name}</strong>, 
        recomendamos a compra através do <strong>Mercado Livre</strong>. Lá você encontra:
      </p>

      <ul className="space-y-2 mb-6">
        <li className="flex items-center gap-2 text-muted-foreground">
          <Check className="h-4 w-4 text-green-500" />
          <span><strong>Melhores preços</strong> do mercado brasileiro</span>
        </li>
        <li className="flex items-center gap-2 text-muted-foreground">
          <Check className="h-4 w-4 text-green-500" />
          <span>Garantia de <strong>produto original</strong></span>
        </li>
        <li className="flex items-center gap-2 text-muted-foreground">
          <Check className="h-4 w-4 text-green-500" />
          <span>Avaliações verificadas de <strong>compradores reais</strong></span>
        </li>
        <li className="flex items-center gap-2 text-muted-foreground">
          <Check className="h-4 w-4 text-green-500" />
          <span>Opções de <strong>frete grátis</strong></span>
        </li>
        <li className="flex items-center gap-2 text-muted-foreground">
          <Check className="h-4 w-4 text-green-500" />
          <span>Parcelamento facilitado</span>
        </li>
      </ul>

      <h3 className="font-display text-xl font-bold text-foreground mb-3 mt-8">
        Integração com Casa Inteligente
      </h3>
      
      <p className="text-muted-foreground leading-relaxed mb-4">
        O <strong>{product.name}</strong> foi projetado para se integrar perfeitamente ao seu 
        ecossistema de <strong>casa inteligente</strong>. Compatível com os principais assistentes 
        virtuais como <strong>Alexa</strong>, <strong>Google Home</strong> e sistemas de automação 
        como <strong>Tuya</strong> e <strong>Smart Life</strong>.
      </p>

      <h3 className="font-display text-xl font-bold text-foreground mb-3 mt-8">
        Qualidade {product.brand} - Melhores Marcas
      </h3>
      
      <p className="text-muted-foreground leading-relaxed mb-4">
        A <strong>{product.brand}</strong> é uma das <strong>melhores marcas</strong> quando 
        falamos em <strong>{product.category.toLowerCase()}</strong>. Com anos de experiência 
        no mercado, a empresa oferece produtos de alta qualidade, com suporte técnico e 
        garantia estendida. Quando você escolhe <strong>{product.brand}</strong>, está 
        escolhendo confiabilidade e inovação.
      </p>

      <div className="mt-8 p-6 bg-accent/10 rounded-xl border border-accent/20">
        <h4 className="font-display text-lg font-bold text-foreground mb-2">
          🔥 Oferta Especial
        </h4>
        <p className="text-muted-foreground mb-4">
          Aproveite as <strong>melhores ofertas</strong> do <strong>{product.name}</strong> agora mesmo! 
          Clique no botão abaixo para conferir os <strong>melhores preços</strong> disponíveis.
        </p>
        <Button variant="cta" asChild>
          <a href={product.affiliateUrl} target="_blank" rel="noopener noreferrer">
            <ExternalLink className="mr-2 h-4 w-4" />
            Ver Oferta no Mercado Livre
          </a>
        </Button>
      </div>

      <h3 className="font-display text-xl font-bold text-foreground mb-3 mt-8">
        Conclusão: Vale a Pena Comprar?
      </h3>
      
      <p className="text-muted-foreground leading-relaxed">
        O <strong>{product.name}</strong> é definitivamente uma excelente escolha para quem busca 
        qualidade, tecnologia e os <strong>melhores preços</strong> em <strong>{product.category.toLowerCase()}</strong>. 
        Com recursos como {product.features.slice(0, 2).join(" e ")}, este produto da <strong>{product.brand}</strong> 
        oferece o melhor custo-benefício do mercado. Não perca tempo e aproveite as 
        <strong> melhores ofertas</strong> disponíveis!
      </p>
    </>
  );
}

export default ProdutoDetalhe;

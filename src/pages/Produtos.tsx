import { Helmet } from "react-helmet-async";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { products } from "@/data/products";
import { ProductCard } from "@/components/products/ProductCard";
import { motion } from "framer-motion";

const Produtos = () => {
  return (
    <>
      <Helmet>
        <title>Todos os Produtos Smart Home | Melhores Ofertas Casa Inteligente 2025</title>
        <meta name="description" content="Catálogo completo de produtos para casa inteligente. Fechaduras digitais, câmeras de segurança, interruptores, sensores e mais. Melhores preços e marcas." />
        <link rel="canonical" href="https://smarthome.com.br/produtos" />
      </Helmet>

      <div className="min-h-screen flex flex-col">
        <Header />
        <main className="flex-1 py-16">
          <div className="container">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-center mb-12"
            >
              <h1 className="font-display text-4xl font-bold text-foreground sm:text-5xl">
                Todos os <span className="text-accent">Produtos</span>
              </h1>
              <p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto">
                Explore nossa seleção completa de dispositivos para <strong>casa inteligente</strong>. 
                Melhores marcas, melhores preços, melhores ofertas.
              </p>
            </motion.div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {products.map((product, index) => (
                <ProductCard key={product.id} product={product} index={index} />
              ))}
            </div>
          </div>
        </main>
        <Footer />
      </div>
    </>
  );
};

export default Produtos;

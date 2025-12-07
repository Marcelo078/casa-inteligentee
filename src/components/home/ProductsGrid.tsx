import { motion } from "framer-motion";
import { products } from "@/data/products";
import { ProductCard } from "@/components/products/ProductCard";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

export function ProductsGrid() {
  const displayProducts = products.slice(0, 12);

  return (
    <section className="py-16 bg-background">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-10"
        >
          <h2 className="font-display text-3xl font-bold text-foreground sm:text-4xl">
            Todos os <span className="text-accent">Produtos</span>
          </h2>
          <p className="mt-3 text-muted-foreground max-w-2xl mx-auto">
            Confira nossa seleção completa de dispositivos para casa inteligente. 
            <strong> Melhores marcas, melhores preços, melhores ofertas.</strong>
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {displayProducts.map((product, index) => (
            <ProductCard key={product.id} product={product} index={index} />
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="mt-12 text-center"
        >
          <Button variant="cta" size="xl" asChild>
            <Link to="/produtos" className="gap-2">
              Ver Todos os Produtos
              <ArrowRight className="h-5 w-5" />
            </Link>
          </Button>
        </motion.div>
      </div>
    </section>
  );
}

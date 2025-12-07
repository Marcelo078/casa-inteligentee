import { motion } from "framer-motion";
import { affiliateLinks } from "@/data/products";
import { Button } from "@/components/ui/button";
import { ExternalLink } from "lucide-react";

export function AffiliateButtons() {
  return (
    <section className="py-16 bg-secondary/50">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-10"
        >
          <h2 className="font-display text-3xl font-bold text-foreground sm:text-4xl">
            Explore Nossas <span className="text-accent">Categorias</span>
          </h2>
          <p className="mt-3 text-muted-foreground max-w-2xl mx-auto">
            Descubra ofertas exclusivas em diversas categorias. Clique e confira os melhores preços no Mercado Livre.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="flex flex-wrap justify-center gap-3"
        >
          {affiliateLinks.map((link, index) => (
            <motion.div
              key={link.name}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.05 }}
            >
              <Button
                variant="outline"
                size="lg"
                className="gap-2 hover:border-accent hover:text-accent group"
                asChild
              >
                <a href={link.url} target="_blank" rel="noopener noreferrer">
                  <span className="text-lg">{link.icon}</span>
                  {link.name}
                  <ExternalLink className="h-3 w-3 opacity-0 group-hover:opacity-100 transition-opacity" />
                </a>
              </Button>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

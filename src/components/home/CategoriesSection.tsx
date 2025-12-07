import { motion } from "framer-motion";
import { categories, products } from "@/data/products";
import { Card, CardContent } from "@/components/ui/card";
import { Link } from "react-router-dom";
import { Lock, Lightbulb, Camera, Cpu, Tv, Plug, Radio, Speaker, HardDrive, Package } from "lucide-react";

const categoryIcons: Record<string, React.ReactNode> = {
  "Fechaduras Digitais": <Lock className="h-6 w-6" />,
  "Interruptores Inteligentes": <Lightbulb className="h-6 w-6" />,
  "Sensores": <Radio className="h-6 w-6" />,
  "Câmeras de Segurança": <Camera className="h-6 w-6" />,
  "Projetores": <Tv className="h-6 w-6" />,
  "Tomadas": <Plug className="h-6 w-6" />,
  "Iluminação": <Lightbulb className="h-6 w-6" />,
  "Assistentes Virtuais": <Speaker className="h-6 w-6" />,
  "Hubs": <HardDrive className="h-6 w-6" />,
  "Kits": <Package className="h-6 w-6" />,
};

export function CategoriesSection() {
  const getCategoryCount = (category: string) => {
    return products.filter((p) => p.category === category).length;
  };

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
            Categorias <span className="text-accent">Smart Home</span>
          </h2>
          <p className="mt-3 text-muted-foreground max-w-2xl mx-auto">
            Navegue por categoria e encontre os melhores produtos para cada ambiente da sua casa
          </p>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
          {categories.map((category, index) => (
            <motion.div
              key={category}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.05 }}
            >
              <Link to={`/categoria/${category.toLowerCase().replace(/ /g, "-")}`}>
                <Card variant="elevated" className="group cursor-pointer h-full">
                  <CardContent className="p-6 text-center">
                    <div className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-xl bg-accent/10 text-accent group-hover:bg-accent group-hover:text-accent-foreground transition-colors">
                      {categoryIcons[category] || <Cpu className="h-6 w-6" />}
                    </div>
                    <h3 className="font-display font-semibold text-foreground text-sm group-hover:text-accent transition-colors">
                      {category}
                    </h3>
                    <p className="mt-1 text-xs text-muted-foreground">
                      {getCategoryCount(category)} produtos
                    </p>
                  </CardContent>
                </Card>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

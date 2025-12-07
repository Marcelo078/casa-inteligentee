import { motion } from "framer-motion";
import { ExternalLink } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Product } from "@/data/products";
import { Link } from "react-router-dom";

interface ProductCardProps {
  product: Product;
  index?: number;
}

export function ProductCard({ product, index = 0 }: ProductCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.1, duration: 0.4 }}
    >
      <Card variant="product" className="group h-full flex flex-col">
        {/* Image */}
        <div className="relative aspect-square overflow-hidden bg-muted">
          <img
            src={product.imageUrl}
            alt={`${product.name} - ${product.keywords.join(", ")}`}
            className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
            loading="lazy"
          />
          <div className="absolute top-3 left-3">
            <span className="rounded-full bg-accent px-3 py-1 text-xs font-semibold text-accent-foreground">
              {product.brand}
            </span>
          </div>
        </div>

        <CardContent className="flex flex-1 flex-col p-4">
          {/* Category */}
          <span className="text-xs font-medium text-muted-foreground uppercase tracking-wide">
            {product.category}
          </span>

          {/* Title */}
          <h3 className="mt-2 font-display text-lg font-bold text-foreground line-clamp-2 group-hover:text-accent transition-colors">
            {product.name}
          </h3>

          {/* Description */}
          <p className="mt-2 text-sm text-muted-foreground line-clamp-2 flex-1">
            {product.description}
          </p>

          {/* Features */}
          <div className="mt-3 flex flex-wrap gap-1.5">
            {product.features.slice(0, 3).map((feature) => (
              <span
                key={feature}
                className="rounded-md bg-secondary px-2 py-0.5 text-xs text-secondary-foreground"
              >
                {feature}
              </span>
            ))}
          </div>

          {/* Actions */}
          <div className="mt-4 flex gap-2">
            <Button variant="outline" size="sm" className="flex-1" asChild>
              <Link to={`/produto/${product.slug}`}>
                Saiba Mais
              </Link>
            </Button>
            <Button variant="cta" size="sm" className="flex-1" asChild>
              <a href={product.affiliateUrl} target="_blank" rel="noopener noreferrer">
                Comprar
                <ExternalLink className="ml-1 h-3 w-3" />
              </a>
            </Button>
          </div>
        </CardContent>
      </Card>
    </motion.div>
  );
}

import { motion } from "framer-motion";
import { Shield, Truck, ThumbsUp, HeadphonesIcon } from "lucide-react";

const features = [
  {
    icon: Shield,
    title: "Marcas Confiáveis",
    description: "Trabalhamos apenas com as melhores marcas do mercado de automação residencial.",
  },
  {
    icon: ThumbsUp,
    title: "Análises Reais",
    description: "Avaliações detalhadas baseadas em testes e feedback de usuários reais.",
  },
  {
    icon: Truck,
    title: "Entrega Garantida",
    description: "Todos os produtos são vendidos pelo Mercado Livre com frete seguro.",
  },
  {
    icon: HeadphonesIcon,
    title: "Suporte Completo",
    description: "Tire suas dúvidas antes de comprar. Estamos aqui para ajudar.",
  },
];

export function FeaturesSection() {
  return (
    <section className="py-16 gradient-hero text-primary-foreground">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="font-display text-3xl font-bold sm:text-4xl">
            Por Que Escolher a <span className="text-accent">Smart Home</span>?
          </h2>
          <p className="mt-3 text-primary-foreground/70 max-w-2xl mx-auto">
            Mais do que um catálogo, somos seu guia para a automação residencial
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="text-center p-6 rounded-xl bg-primary-foreground/5 backdrop-blur-sm border border-primary-foreground/10"
            >
              <div className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-xl bg-accent text-accent-foreground">
                <feature.icon className="h-7 w-7" />
              </div>
              <h3 className="font-display font-semibold text-lg">{feature.title}</h3>
              <p className="mt-2 text-sm text-primary-foreground/70">{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

import { Link } from "react-router-dom";
import { Home, Mail, Phone, MapPin } from "lucide-react";

const footerLinks = {
  institucional: [
    { name: "Sobre Nós", href: "/sobre" },
    { name: "Contato", href: "/contato" },
    { name: "Trabalhe Conosco", href: "/trabalhe-conosco" },
  ],
  legal: [
    { name: "Política de Privacidade", href: "/politica-privacidade" },
    { name: "Termos de Uso", href: "/termos-uso" },
    { name: "Transparência", href: "/transparencia" },
    { name: "Isenção de Responsabilidade", href: "/isencao-responsabilidade" },
  ],
  categorias: [
    { name: "Fechaduras Digitais", href: "/categoria/fechaduras-digitais" },
    { name: "Interruptores", href: "/categoria/interruptores-inteligentes" },
    { name: "Câmeras", href: "/categoria/cameras-seguranca" },
    { name: "Sensores", href: "/categoria/sensores" },
  ],
};

export function Footer() {
  return (
    <footer className="border-t border-border bg-card">
      <div className="container py-12">
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          {/* Brand */}
          <div className="space-y-4">
            <Link to="/" className="flex items-center gap-2">
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-accent text-accent-foreground">
                <Home className="h-5 w-5" />
              </div>
              <div>
                <span className="font-display text-lg font-bold text-foreground">
                  Smart Home
                </span>
                <span className="block text-xs text-muted-foreground -mt-0.5">
                  Tudo Para Sua Casa Inteligente
                </span>
              </div>
            </Link>
            <p className="text-sm text-muted-foreground">
              As melhores análises de produtos para sua casa inteligente. 
              Qualidade, procedência e avaliações reais.
            </p>
            <div className="flex flex-col gap-2 text-sm text-muted-foreground">
              <a href="mailto:contato@smarthome.com.br" className="flex items-center gap-2 hover:text-accent transition-colors">
                <Mail className="h-4 w-4" />
                contato@smarthome.com.br
              </a>
            </div>
          </div>

          {/* Institucional */}
          <div>
            <h3 className="font-display font-semibold text-foreground mb-4">Institucional</h3>
            <ul className="space-y-2">
              {footerLinks.institucional.map((link) => (
                <li key={link.name}>
                  <Link
                    to={link.href}
                    className="text-sm text-muted-foreground hover:text-accent transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h3 className="font-display font-semibold text-foreground mb-4">Legal</h3>
            <ul className="space-y-2">
              {footerLinks.legal.map((link) => (
                <li key={link.name}>
                  <Link
                    to={link.href}
                    className="text-sm text-muted-foreground hover:text-accent transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Categorias */}
          <div>
            <h3 className="font-display font-semibold text-foreground mb-4">Categorias</h3>
            <ul className="space-y-2">
              {footerLinks.categorias.map((link) => (
                <li key={link.name}>
                  <Link
                    to={link.href}
                    className="text-sm text-muted-foreground hover:text-accent transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-border">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-sm text-muted-foreground text-center md:text-left">
              © {new Date().getFullYear()} Smart Home - Tudo Para Sua Casa Inteligente. 
              Todos os direitos reservados.
            </p>
            <p className="text-xs text-muted-foreground text-center">
              Este site contém links de afiliados. Podemos receber comissões por compras realizadas.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}

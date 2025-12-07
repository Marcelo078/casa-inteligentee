import { Link } from "react-router-dom";
import { Home, Menu, X, Search } from "lucide-react";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const navLinks = [
  { name: "Início", href: "/" },
  { name: "Produtos", href: "/produtos" },
  { name: "Artigos", href: "/artigos" },
  { name: "Sobre", href: "/sobre" },
  { name: "Contato", href: "/contato" },
];

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center justify-between">
        <Link to="/" className="flex items-center gap-2 group">
          <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-accent text-accent-foreground shadow-glow transition-transform group-hover:scale-110">
            <Home className="h-5 w-5" />
          </div>
          <div className="hidden sm:block">
            <span className="font-display text-xl font-bold text-foreground">
              Smart Home
            </span>
            <span className="block text-xs text-muted-foreground -mt-1">
              Tudo Para Sua Casa Inteligente
            </span>
          </div>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-6">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              to={link.href}
              className="text-sm font-medium text-muted-foreground transition-colors hover:text-accent"
            >
              {link.name}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <Button variant="ghost" size="icon" className="hidden sm:flex">
            <Search className="h-5 w-5" />
          </Button>
          <Button variant="cta" size="sm" asChild className="hidden sm:flex">
            <a href="https://mercadolivre.com/sec/32Q9odi" target="_blank" rel="noopener noreferrer">
              Ver Ofertas
            </a>
          </Button>

          {/* Mobile Menu Button */}
          <Button
            variant="ghost"
            size="icon"
            className="md:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </Button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={cn(
          "md:hidden overflow-hidden transition-all duration-300",
          isMenuOpen ? "max-h-96 border-t border-border" : "max-h-0"
        )}
      >
        <nav className="container py-4 flex flex-col gap-2">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              to={link.href}
              className="px-4 py-2 text-sm font-medium text-muted-foreground transition-colors hover:text-accent hover:bg-accent/10 rounded-lg"
              onClick={() => setIsMenuOpen(false)}
            >
              {link.name}
            </Link>
          ))}
          <Button variant="cta" className="mt-2" asChild>
            <a href="https://mercadolivre.com/sec/32Q9odi" target="_blank" rel="noopener noreferrer">
              Ver Ofertas
            </a>
          </Button>
        </nav>
      </div>
    </header>
  );
}

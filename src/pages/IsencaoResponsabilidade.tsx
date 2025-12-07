import { Helmet } from "react-helmet-async";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";

const IsencaoResponsabilidade = () => {
  return (
    <>
      <Helmet>
        <title>Isenção de Responsabilidade | Smart Home Brasil</title>
        <meta name="description" content="Isenção de Responsabilidade da Smart Home Brasil. Leia sobre nossas limitações de responsabilidade e avisos importantes." />
        <link rel="canonical" href="https://smarthome.com.br/isencao-responsabilidade" />
      </Helmet>

      <div className="min-h-screen flex flex-col">
        <Header />
        <main className="flex-1 py-16">
          <div className="container max-w-4xl">
            <h1 className="font-display text-4xl font-bold text-foreground mb-8">
              Isenção de <span className="text-accent">Responsabilidade</span>
            </h1>

            <div className="prose prose-lg max-w-none text-muted-foreground space-y-6">
              <div className="bg-destructive/10 border border-destructive/20 p-6 rounded-xl my-8">
                <p className="text-foreground font-semibold mb-2">Aviso Importante</p>
                <p className="text-sm">
                  Este site contém links de afiliados. Ao clicar e comprar através desses links, 
                  podemos receber uma comissão sem custo adicional para você.
                </p>
              </div>

              <h2 className="font-display text-2xl font-bold text-foreground mt-8">1. Natureza do Conteúdo</h2>
              <p>
                O conteúdo deste site é fornecido apenas para fins <strong className="text-foreground">informativos e educacionais</strong>. 
                Não somos fabricantes, distribuidores ou revendedores dos produtos apresentados. 
                Atuamos como um portal de curadoria e análises independentes.
              </p>

              <h2 className="font-display text-2xl font-bold text-foreground mt-8">2. Precisão das Informações</h2>
              <p>
                Embora nos esforcemos para fornecer informações precisas e atualizadas:
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Não garantimos a exatidão, completude ou atualidade das informações</li>
                <li>Especificações de produtos podem mudar sem aviso prévio</li>
                <li>Preços e disponibilidade variam conforme o vendedor</li>
                <li>As análises expressam opiniões baseadas em nossa pesquisa</li>
              </ul>

              <h2 className="font-display text-2xl font-bold text-foreground mt-8">3. Produtos e Compras</h2>
              <p>
                <strong className="text-foreground">Não vendemos produtos diretamente.</strong> Todas as compras são realizadas 
                através de terceiros (principalmente Mercado Livre). Portanto:
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Não nos responsabilizamos pela qualidade dos produtos</li>
                <li>Não nos responsabilizamos por entregas, trocas ou devoluções</li>
                <li>Reclamações devem ser direcionadas ao vendedor ou plataforma</li>
                <li>Garantias são de responsabilidade do fabricante/vendedor</li>
              </ul>

              <h2 className="font-display text-2xl font-bold text-foreground mt-8">4. Links de Afiliados</h2>
              <p>
                Este site participa de programas de afiliados, o que significa que podemos receber 
                comissões por compras realizadas através dos nossos links. Isso:
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Não aumenta o preço que você paga</li>
                <li>Ajuda a manter o site funcionando</li>
                <li>Não influencia a imparcialidade das nossas análises</li>
              </ul>

              <h2 className="font-display text-2xl font-bold text-foreground mt-8">5. Decisões de Compra</h2>
              <p>
                As decisões de compra são de <strong className="text-foreground">exclusiva responsabilidade do consumidor</strong>. 
                Recomendamos sempre:
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Pesquisar múltiplas fontes antes de comprar</li>
                <li>Ler avaliações de outros compradores</li>
                <li>Verificar a reputação do vendedor</li>
                <li>Confirmar especificações diretamente com o fabricante</li>
              </ul>

              <h2 className="font-display text-2xl font-bold text-foreground mt-8">6. Instalação e Uso</h2>
              <p>
                Muitos produtos de automação residencial requerem instalação elétrica. 
                <strong className="text-foreground"> Recomendamos fortemente</strong> a contratação de profissionais 
                qualificados para instalações. Não nos responsabilizamos por:
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Danos causados por instalação inadequada</li>
                <li>Acidentes relacionados a eletricidade</li>
                <li>Mau uso dos produtos</li>
              </ul>

              <h2 className="font-display text-2xl font-bold text-foreground mt-8">7. Limitação de Responsabilidade</h2>
              <p>
                Em nenhuma circunstância a Smart Home Brasil será responsável por danos diretos, 
                indiretos, incidentais, consequenciais ou punitivos decorrentes do uso deste site 
                ou da confiança em suas informações.
              </p>

              <h2 className="font-display text-2xl font-bold text-foreground mt-8">8. Contato</h2>
              <p>
                Para dúvidas ou esclarecimentos sobre esta isenção de responsabilidade:
              </p>
              <p><strong className="text-foreground">E-mail:</strong> contato@smarthome.com.br</p>
            </div>
          </div>
        </main>
        <Footer />
      </div>
    </>
  );
};

export default IsencaoResponsabilidade;

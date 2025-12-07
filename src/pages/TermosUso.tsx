import { Helmet } from "react-helmet-async";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";

const TermosUso = () => {
  return (
    <>
      <Helmet>
        <title>Termos de Uso | Smart Home Brasil</title>
        <meta name="description" content="Termos de Uso da Smart Home Brasil. Leia os termos e condições de uso do nosso site de análises de produtos smart home." />
        <link rel="canonical" href="https://smarthome.com.br/termos-uso" />
      </Helmet>

      <div className="min-h-screen flex flex-col">
        <Header />
        <main className="flex-1 py-16">
          <div className="container max-w-4xl">
            <h1 className="font-display text-4xl font-bold text-foreground mb-8">
              Termos de <span className="text-accent">Uso</span>
            </h1>

            <div className="prose prose-lg max-w-none text-muted-foreground space-y-6">
              <p className="text-sm">Última atualização: Dezembro de 2025</p>

              <p>
                Ao acessar e usar o site <strong className="text-foreground">Smart Home Brasil</strong>, 
                você concorda com os seguintes termos e condições. Por favor, leia-os cuidadosamente.
              </p>

              <h2 className="font-display text-2xl font-bold text-foreground mt-8">1. Aceitação dos Termos</h2>
              <p>
                Ao acessar este site, você concorda em cumprir estes Termos de Uso. Se você não concordar 
                com qualquer parte destes termos, não deve usar nosso site.
              </p>

              <h2 className="font-display text-2xl font-bold text-foreground mt-8">2. Uso do Site</h2>
              <p>Este site destina-se a:</p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Fornecer informações e análises sobre produtos de casa inteligente</li>
                <li>Direcionar usuários para ofertas em parceiros afiliados</li>
                <li>Oferecer conteúdo educativo sobre automação residencial</li>
              </ul>

              <h2 className="font-display text-2xl font-bold text-foreground mt-8">3. Conteúdo e Propriedade Intelectual</h2>
              <p>
                Todo o conteúdo deste site, incluindo textos, imagens, gráficos, logotipos e design, 
                é de propriedade da Smart Home Brasil ou de seus licenciadores. É proibida a reprodução 
                sem autorização prévia por escrito.
              </p>

              <h2 className="font-display text-2xl font-bold text-foreground mt-8">4. Links de Afiliados</h2>
              <p>
                Este site contém links de afiliados para produtos no Mercado Livre e outros parceiros. 
                Quando você clica nesses links e realiza uma compra, podemos receber uma comissão. 
                Isso não afeta o preço que você paga.
              </p>

              <h2 className="font-display text-2xl font-bold text-foreground mt-8">5. Isenção de Garantias</h2>
              <p>
                As informações neste site são fornecidas "como estão". Não garantimos a precisão, 
                completude ou atualidade das informações. As análises expressam opiniões baseadas em 
                nossa experiência e pesquisa.
              </p>

              <h2 className="font-display text-2xl font-bold text-foreground mt-8">6. Limitação de Responsabilidade</h2>
              <p>
                Não nos responsabilizamos por:
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Decisões de compra baseadas em nosso conteúdo</li>
                <li>Problemas com produtos adquiridos através de nossos links</li>
                <li>Indisponibilidade de produtos ou alterações de preços</li>
                <li>Danos decorrentes do uso de informações deste site</li>
              </ul>

              <h2 className="font-display text-2xl font-bold text-foreground mt-8">7. Links Externos</h2>
              <p>
                Nosso site contém links para sites de terceiros. Não temos controle sobre o conteúdo 
                ou práticas de privacidade desses sites e não nos responsabilizamos por eles.
              </p>

              <h2 className="font-display text-2xl font-bold text-foreground mt-8">8. Alterações nos Termos</h2>
              <p>
                Reservamo-nos o direito de modificar estes termos a qualquer momento. As alterações 
                entram em vigor imediatamente após a publicação no site.
              </p>

              <h2 className="font-display text-2xl font-bold text-foreground mt-8">9. Lei Aplicável</h2>
              <p>
                Estes Termos de Uso são regidos pelas leis da República Federativa do Brasil.
              </p>

              <h2 className="font-display text-2xl font-bold text-foreground mt-8">10. Contato</h2>
              <p>
                Para dúvidas sobre estes termos, entre em contato:
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

export default TermosUso;

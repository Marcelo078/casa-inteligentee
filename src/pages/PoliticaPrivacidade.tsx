import { Helmet } from "react-helmet-async";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";

const PoliticaPrivacidade = () => {
  return (
    <>
      <Helmet>
        <title>Política de Privacidade | Smart Home Brasil</title>
        <meta name="description" content="Política de Privacidade da Smart Home Brasil. Saiba como coletamos, usamos e protegemos suas informações pessoais." />
        <link rel="canonical" href="https://smarthome.com.br/politica-privacidade" />
      </Helmet>

      <div className="min-h-screen flex flex-col">
        <Header />
        <main className="flex-1 py-16">
          <div className="container max-w-4xl">
            <h1 className="font-display text-4xl font-bold text-foreground mb-8">
              Política de <span className="text-accent">Privacidade</span>
            </h1>

            <div className="prose prose-lg max-w-none text-muted-foreground space-y-6">
              <p className="text-sm">Última atualização: Dezembro de 2025</p>

              <p>
                A <strong className="text-foreground">Smart Home Brasil</strong> ("nós", "nosso" ou "site") 
                está comprometida em proteger sua privacidade. Esta Política de Privacidade explica como 
                coletamos, usamos e protegemos suas informações.
              </p>

              <h2 className="font-display text-2xl font-bold text-foreground mt-8">1. Informações que Coletamos</h2>
              <p>Podemos coletar os seguintes tipos de informações:</p>
              <ul className="list-disc pl-6 space-y-2">
                <li><strong className="text-foreground">Informações de navegação:</strong> endereço IP, tipo de navegador, páginas visitadas, tempo de permanência</li>
                <li><strong className="text-foreground">Cookies:</strong> utilizamos cookies para melhorar sua experiência de navegação</li>
                <li><strong className="text-foreground">Informações de contato:</strong> quando você nos envia mensagens voluntariamente</li>
              </ul>

              <h2 className="font-display text-2xl font-bold text-foreground mt-8">2. Como Usamos Suas Informações</h2>
              <p>Utilizamos as informações coletadas para:</p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Melhorar nosso conteúdo e experiência do usuário</li>
                <li>Analisar tendências de uso do site</li>
                <li>Responder suas dúvidas e solicitações</li>
                <li>Exibir anúncios relevantes através de parceiros</li>
              </ul>

              <h2 className="font-display text-2xl font-bold text-foreground mt-8">3. Cookies e Tecnologias de Rastreamento</h2>
              <p>
                Nosso site utiliza cookies e tecnologias semelhantes para coletar informações automaticamente. 
                Você pode configurar seu navegador para recusar cookies, mas isso pode afetar sua experiência no site.
              </p>

              <h2 className="font-display text-2xl font-bold text-foreground mt-8">4. Compartilhamento de Informações</h2>
              <p>
                Não vendemos suas informações pessoais. Podemos compartilhar dados com:
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Parceiros de análise (Google Analytics)</li>
                <li>Plataformas de afiliados (Mercado Livre)</li>
                <li>Quando exigido por lei</li>
              </ul>

              <h2 className="font-display text-2xl font-bold text-foreground mt-8">5. Segurança</h2>
              <p>
                Implementamos medidas de segurança apropriadas para proteger suas informações contra acesso 
                não autorizado, alteração, divulgação ou destruição.
              </p>

              <h2 className="font-display text-2xl font-bold text-foreground mt-8">6. Seus Direitos</h2>
              <p>De acordo com a LGPD, você tem direito a:</p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Acessar seus dados pessoais</li>
                <li>Corrigir dados incompletos ou inexatos</li>
                <li>Solicitar a exclusão de seus dados</li>
                <li>Revogar seu consentimento</li>
              </ul>

              <h2 className="font-display text-2xl font-bold text-foreground mt-8">7. Contato</h2>
              <p>
                Para exercer seus direitos ou esclarecer dúvidas sobre esta política, entre em contato:
              </p>
              <p><strong className="text-foreground">E-mail:</strong> privacidade@smarthome.com.br</p>

              <h2 className="font-display text-2xl font-bold text-foreground mt-8">8. Alterações</h2>
              <p>
                Podemos atualizar esta Política de Privacidade periodicamente. Recomendamos que você 
                revise esta página regularmente para estar ciente de quaisquer mudanças.
              </p>
            </div>
          </div>
        </main>
        <Footer />
      </div>
    </>
  );
};

export default PoliticaPrivacidade;

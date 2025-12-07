import { Helmet } from "react-helmet-async";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { motion } from "framer-motion";
import { Mail, MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const Contato = () => {
  return (
    <>
      <Helmet>
        <title>Contato | Smart Home Brasil</title>
        <meta name="description" content="Entre em contato com a Smart Home Brasil. Tire suas dúvidas sobre produtos de casa inteligente, parcerias e sugestões." />
        <link rel="canonical" href="https://smarthome.com.br/contato" />
      </Helmet>

      <div className="min-h-screen flex flex-col">
        <Header />
        <main className="flex-1 py-16">
          <div className="container max-w-4xl">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-center mb-12"
            >
              <h1 className="font-display text-4xl font-bold text-foreground">
                Entre em <span className="text-accent">Contato</span>
              </h1>
              <p className="mt-4 text-lg text-muted-foreground">
                Tem dúvidas, sugestões ou quer fazer uma parceria? Estamos aqui para ajudar!
              </p>
            </motion.div>

            <div className="grid md:grid-cols-2 gap-8">
              {/* Contact Info */}
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.2 }}
                className="space-y-6"
              >
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <Mail className="h-5 w-5 text-accent" />
                      E-mail
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground">
                      Para dúvidas gerais e sugestões:
                    </p>
                    <a href="mailto:contato@smarthome.com.br" className="text-accent hover:underline font-medium">
                      contato@smarthome.com.br
                    </a>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <MessageCircle className="h-5 w-5 text-accent" />
                      Parcerias
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground">
                      Interessado em parcerias comerciais?
                    </p>
                    <a href="mailto:parcerias@smarthome.com.br" className="text-accent hover:underline font-medium">
                      parcerias@smarthome.com.br
                    </a>
                  </CardContent>
                </Card>

                <div className="p-6 bg-secondary rounded-xl">
                  <h3 className="font-display font-semibold text-foreground mb-2">Tempo de Resposta</h3>
                  <p className="text-sm text-muted-foreground">
                    Respondemos todas as mensagens em até 48 horas úteis. 
                    Verifique sua caixa de spam caso não receba nossa resposta.
                  </p>
                </div>
              </motion.div>

              {/* Contact Form */}
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.3 }}
              >
                <Card>
                  <CardHeader>
                    <CardTitle>Envie sua Mensagem</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <form className="space-y-4">
                      <div>
                        <label htmlFor="name" className="text-sm font-medium text-foreground">
                          Nome
                        </label>
                        <Input id="name" placeholder="Seu nome" className="mt-1" />
                      </div>
                      <div>
                        <label htmlFor="email" className="text-sm font-medium text-foreground">
                          E-mail
                        </label>
                        <Input id="email" type="email" placeholder="seu@email.com" className="mt-1" />
                      </div>
                      <div>
                        <label htmlFor="subject" className="text-sm font-medium text-foreground">
                          Assunto
                        </label>
                        <Input id="subject" placeholder="Assunto da mensagem" className="mt-1" />
                      </div>
                      <div>
                        <label htmlFor="message" className="text-sm font-medium text-foreground">
                          Mensagem
                        </label>
                        <Textarea 
                          id="message" 
                          placeholder="Escreva sua mensagem aqui..." 
                          className="mt-1 min-h-[120px]" 
                        />
                      </div>
                      <Button type="submit" variant="cta" className="w-full">
                        Enviar Mensagem
                      </Button>
                    </form>
                  </CardContent>
                </Card>
              </motion.div>
            </div>
          </div>
        </main>
        <Footer />
      </div>
    </>
  );
};

export default Contato;

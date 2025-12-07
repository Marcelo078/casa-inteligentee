export interface Product {
  id: string;
  name: string;
  slug: string;
  brand: string;
  category: string;
  description: string;
  features: string[];
  affiliateUrl: string;
  imageUrl: string;
  keywords: string[];
}

export const products: Product[] = [
  {
    id: "1",
    name: "Fechadura De Sobrepor Digital E Senha Com Biometria FR 220 Intelbras",
    slug: "fechadura-sobrepor-digital-biometria-fr-220-intelbras",
    brand: "Intelbras",
    category: "Fechaduras Digitais",
    description: "Fechadura digital de sobrepor com biometria e senha. Tecnologia avançada da Intelbras para máxima segurança residencial.",
    features: ["Biometria", "Senha digital", "Sobrepor", "Design moderno"],
    affiliateUrl: "https://mercadolivre.com/sec/32Q9odi",
    imageUrl: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=400",
    keywords: ["fechadura digital", "biometria", "intelbras", "segurança residencial"]
  },
  {
    id: "2",
    name: "Fechadura Digital De Embutir Com Maçaneta Intelbras MFR 7000 Branca",
    slug: "fechadura-digital-embutir-macaneta-intelbras-mfr-7000-branca",
    brand: "Intelbras",
    category: "Fechaduras Digitais",
    description: "Fechadura digital de embutir com maçaneta elegante na cor branca. Ideal para portas internas e externas.",
    features: ["Embutir", "Maçaneta inclusa", "Cor branca", "Alta durabilidade"],
    affiliateUrl: "https://mercadolivre.com/sec/32Q9odi",
    imageUrl: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=400",
    keywords: ["fechadura embutir", "maçaneta digital", "intelbras branca", "mfr 7000"]
  },
  {
    id: "3",
    name: "Fechadura Eletronica Digital Com Biometria Senha Kuantttum Delta Pro Tuya Wi-fi Preta",
    slug: "fechadura-eletronica-digital-biometria-kuantttum-delta-pro-tuya-wifi-preta",
    brand: "Kuantttum",
    category: "Fechaduras Digitais",
    description: "Fechadura eletrônica inteligente com Wi-Fi, compatível com Tuya. Controle via app de qualquer lugar.",
    features: ["Wi-Fi", "Tuya compatível", "Biometria", "App smartphone"],
    affiliateUrl: "https://mercadolivre.com/sec/32Q9odi",
    imageUrl: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=400",
    keywords: ["fechadura wifi", "tuya", "kuantttum", "smart lock"]
  },
  {
    id: "4",
    name: "Fechadura Digital De Sobrepor Touch Screen FR 101 Preta Intelbras",
    slug: "fechadura-digital-sobrepor-touch-screen-fr-101-preta-intelbras",
    brand: "Intelbras",
    category: "Fechaduras Digitais",
    description: "Fechadura digital touch screen com design moderno. Fácil instalação e operação intuitiva.",
    features: ["Touch screen", "Sobrepor", "Cor preta", "Instalação fácil"],
    affiliateUrl: "https://mercadolivre.com/sec/32Q9odi",
    imageUrl: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=400",
    keywords: ["fechadura touch", "fr 101", "intelbras preta", "touch screen"]
  },
  {
    id: "5",
    name: "Novadigital Interruptor Wifi Inteligente 2 Botões Smart Touch Alexa Preto",
    slug: "novadigital-interruptor-wifi-inteligente-2-botoes-smart-touch-alexa-preto",
    brand: "Novadigital",
    category: "Interruptores Inteligentes",
    description: "Interruptor inteligente Wi-Fi com 2 botões touch. Compatível com Alexa e Google Home.",
    features: ["2 botões", "Touch", "Alexa", "Google Home"],
    affiliateUrl: "https://mercadolivre.com/sec/32Q9odi",
    imageUrl: "https://images.unsplash.com/photo-1545259741-2ea3ebf61fa3?w=400",
    keywords: ["interruptor wifi", "alexa", "smart touch", "novadigital"]
  },
  {
    id: "6",
    name: "Interruptor Inteligente Wifi Novadigital 1 Tecla Botão Touch Tuya Smart Life",
    slug: "interruptor-inteligente-wifi-novadigital-1-tecla-botao-touch-tuya-smart-life",
    brand: "Novadigital",
    category: "Interruptores Inteligentes",
    description: "Interruptor inteligente de 1 tecla com integração Tuya Smart Life. Bivolt 110V/220V.",
    features: ["1 tecla", "Tuya", "Smart Life", "Bivolt"],
    affiliateUrl: "https://mercadolivre.com/sec/32Q9odi",
    imageUrl: "https://images.unsplash.com/photo-1545259741-2ea3ebf61fa3?w=400",
    keywords: ["interruptor 1 tecla", "tuya smart life", "bivolt", "novadigital"]
  },
  {
    id: "7",
    name: "Sonoff Mini R4 Extreme Interruptor Wifi Automação Original",
    slug: "sonoff-mini-r4-extreme-interruptor-wifi-automacao-original",
    brand: "Sonoff",
    category: "Interruptores Inteligentes",
    description: "Módulo de automação ultra compacto. Transforme qualquer interruptor em smart.",
    features: ["Ultra compacto", "Wi-Fi", "Automação", "Fácil instalação"],
    affiliateUrl: "https://mercadolivre.com/sec/32Q9odi",
    imageUrl: "https://images.unsplash.com/photo-1545259741-2ea3ebf61fa3?w=400",
    keywords: ["sonoff mini r4", "automação", "módulo wifi", "extreme"]
  },
  {
    id: "8",
    name: "Sensor De Presença Inteligente PIR Tuya Alexa Google Home",
    slug: "sensor-presenca-inteligente-pir-tuya-alexa-google-home",
    brand: "Tuya",
    category: "Sensores",
    description: "Sensor de presença PIR inteligente. Detecta movimento e integra com automações.",
    features: ["PIR", "Tuya", "Alexa", "Google Home"],
    affiliateUrl: "https://mercadolivre.com/sec/32Q9odi",
    imageUrl: "https://images.unsplash.com/photo-1558002038-1055907df827?w=400",
    keywords: ["sensor presença", "pir inteligente", "tuya sensor", "automação"]
  },
  {
    id: "9",
    name: "Câmera Segurança Wifi Lâmpada Espiã Giratória Noturna Yoosee Branco",
    slug: "camera-seguranca-wifi-lampada-espia-giratoria-noturna-yoosee-branco",
    brand: "Yoosee",
    category: "Câmeras de Segurança",
    description: "Câmera espiã em formato de lâmpada. Visão noturna e rotação 360°.",
    features: ["Formato lâmpada", "Giratória", "Visão noturna", "Wi-Fi"],
    affiliateUrl: "https://mercadolivre.com/sec/32Q9odi",
    imageUrl: "https://images.unsplash.com/photo-1557324232-b8917d3c3dcb?w=400",
    keywords: ["câmera lâmpada", "espiã wifi", "yoosee", "visão noturna"]
  },
  {
    id: "10",
    name: "Projetor Portátil Hy300 4K Ultra FullHD + Kit Suporte E Tripé",
    slug: "projetor-portatil-hy300-4k-ultra-fullhd-kit-suporte-tripe",
    brand: "Hy300",
    category: "Projetores",
    description: "Projetor portátil 4K com kit completo. Ideal para home theater e apresentações.",
    features: ["4K Ultra HD", "Portátil", "Kit suporte", "Tripé incluso"],
    affiliateUrl: "https://mercadolivre.com/sec/32Q9odi",
    imageUrl: "https://images.unsplash.com/photo-1478720568477-152d9b164e26?w=400",
    keywords: ["projetor 4k", "hy300 portátil", "home theater", "fullhd"]
  },
  {
    id: "11",
    name: "Smart Câmera Wi-fi Positivo Casa Inteligente 1080p Full HD",
    slug: "smart-camera-wifi-positivo-casa-inteligente-1080p-full-hd",
    brand: "Positivo",
    category: "Câmeras de Segurança",
    description: "Câmera inteligente Positivo com áudio bidirecional e detecção de movimento. Compatível com Alexa.",
    features: ["1080p Full HD", "Áudio bidirecional", "Alexa", "Visão noturna"],
    affiliateUrl: "https://mercadolivre.com/sec/32Q9odi",
    imageUrl: "https://images.unsplash.com/photo-1557324232-b8917d3c3dcb?w=400",
    keywords: ["câmera positivo", "smart camera", "alexa câmera", "1080p"]
  },
  {
    id: "12",
    name: "Torre 3 Tomadas Elevor 3x16A Bivolt Branco Neo By Avant",
    slug: "torre-3-tomadas-elevor-3x16a-bivolt-branco-neo-by-avant",
    brand: "Avant",
    category: "Tomadas",
    description: "Torre de tomadas elegante com 3 saídas 16A. Design moderno para sua casa inteligente.",
    features: ["3 tomadas", "16A", "Bivolt", "Design moderno"],
    affiliateUrl: "https://mercadolivre.com/sec/32Q9odi",
    imageUrl: "https://images.unsplash.com/photo-1544724569-5f546fd6f2b5?w=400",
    keywords: ["torre tomadas", "avant", "16a bivolt", "neo by avant"]
  },
  {
    id: "13",
    name: "Tomada Inteligente Wifi Alexa Google Home Tuya Automatico",
    slug: "tomada-inteligente-wifi-alexa-google-home-tuya-automatico",
    brand: "Tuya",
    category: "Tomadas",
    description: "Tomada inteligente Wi-Fi com controle por voz. Agenda e automações via app.",
    features: ["Wi-Fi", "Alexa", "Google Home", "Agendamento"],
    affiliateUrl: "https://mercadolivre.com/sec/32Q9odi",
    imageUrl: "https://images.unsplash.com/photo-1544724569-5f546fd6f2b5?w=400",
    keywords: ["tomada wifi", "smart plug", "alexa tomada", "tuya"]
  },
  {
    id: "14",
    name: "Projetor Byintek Love U4 Bege 1080p 300 Ansi Lente Selada Wifi Bluetooth",
    slug: "projetor-byintek-love-u4-bege-1080p-300-ansi-wifi-bluetooth",
    brand: "Byintek",
    category: "Projetores",
    description: "Projetor compacto 1080p com Wi-Fi e Bluetooth. Lente selada anti-poeira.",
    features: ["1080p", "300 ANSI", "Wi-Fi", "Bluetooth"],
    affiliateUrl: "https://mercadolivre.com/sec/32Q9odi",
    imageUrl: "https://images.unsplash.com/photo-1478720568477-152d9b164e26?w=400",
    keywords: ["projetor byintek", "love u4", "1080p wifi", "lente selada"]
  },
  {
    id: "15",
    name: "Sensor Inteligente De Fumaça Smart Wifi Detector Alarme App",
    slug: "sensor-inteligente-fumaca-smart-wifi-detector-alarme-app",
    brand: "Hub Smart Home",
    category: "Sensores",
    description: "Detector de fumaça inteligente com alertas em tempo real no smartphone.",
    features: ["Wi-Fi", "Alertas app", "Detector fumaça", "Alarme sonoro"],
    affiliateUrl: "https://mercadolivre.com/sec/32Q9odi",
    imageUrl: "https://images.unsplash.com/photo-1558002038-1055907df827?w=400",
    keywords: ["sensor fumaça", "detector wifi", "alarme smart", "segurança"]
  },
  {
    id: "16",
    name: "Kit 2 Lâmpadas Led Rgb Wi-fi Velds Smart 16 Milhões De Cores 9W",
    slug: "kit-2-lampadas-led-rgb-wifi-velds-smart-16-milhoes-cores-9w",
    brand: "Velds",
    category: "Iluminação",
    description: "Kit com 2 lâmpadas RGB inteligentes. 16 milhões de cores e controle por voz.",
    features: ["RGB", "16 milhões cores", "9W", "Alexa/Google"],
    affiliateUrl: "https://mercadolivre.com/sec/32Q9odi",
    imageUrl: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400",
    keywords: ["lâmpada rgb", "smart led", "velds", "16 milhões cores"]
  },
  {
    id: "17",
    name: "Novo Amazon Alexa Echo Show 15 + Fire TV Lançamento",
    slug: "novo-amazon-alexa-echo-show-15-fire-tv-lancamento",
    brand: "Amazon",
    category: "Assistentes Virtuais",
    description: "O maior Echo Show com Fire TV integrada. Tela de 15 polegadas para sua smart home.",
    features: ["Tela 15\"", "Fire TV", "Alexa integrada", "Central smart home"],
    affiliateUrl: "https://mercadolivre.com/sec/32Q9odi",
    imageUrl: "https://images.unsplash.com/photo-1543512214-318c7553f230?w=400",
    keywords: ["echo show 15", "alexa display", "fire tv", "amazon smart"]
  },
  {
    id: "18",
    name: "Câmera Segurança Nuvem Wifi Botão Chamada Alexa Tuya Ekaza",
    slug: "camera-seguranca-nuvem-wifi-botao-chamada-alexa-tuya-ekaza",
    brand: "Ekaza",
    category: "Câmeras de Segurança",
    description: "Câmera com armazenamento em nuvem e botão de chamada. Integração Alexa e Tuya.",
    features: ["Nuvem", "Botão chamada", "Alexa", "Tuya"],
    affiliateUrl: "https://mercadolivre.com/sec/32Q9odi",
    imageUrl: "https://images.unsplash.com/photo-1557324232-b8917d3c3dcb?w=400",
    keywords: ["câmera nuvem", "ekaza", "alexa câmera", "botão chamada"]
  },
  {
    id: "19",
    name: "Interruptor Inteligente Novadigital 1 Tecla Zigbee 1 Botão 10A Branco",
    slug: "interruptor-inteligente-novadigital-1-tecla-zigbee-1-botao-10a-branco",
    brand: "Novadigital",
    category: "Interruptores Inteligentes",
    description: "Interruptor Zigbee de baixo consumo. Requer hub Zigbee para funcionamento.",
    features: ["Zigbee", "1 tecla", "10A", "Baixo consumo"],
    affiliateUrl: "https://mercadolivre.com/sec/32Q9odi",
    imageUrl: "https://images.unsplash.com/photo-1545259741-2ea3ebf61fa3?w=400",
    keywords: ["interruptor zigbee", "novadigital", "smart switch", "1 tecla"]
  },
  {
    id: "20",
    name: "Fechadura Digital Inteligente Senha Cartão Biométrica Alloy EKHD-T429 Wifi Ekaza",
    slug: "fechadura-digital-inteligente-senha-cartao-biometrica-alloy-ekhd-t429-wifi-ekaza",
    brand: "Ekaza",
    category: "Fechaduras Digitais",
    description: "Fechadura premium com múltiplos acessos: biometria, senha, cartão e Wi-Fi.",
    features: ["Biometria", "Cartão", "Senha", "Wi-Fi"],
    affiliateUrl: "https://mercadolivre.com/sec/32Q9odi",
    imageUrl: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=400",
    keywords: ["fechadura ekaza", "biométrica wifi", "cartão senha", "alloy"]
  },
  {
    id: "21",
    name: "Tomada Inteligente Wifi 20A Pino Grosso Ekaza Medidor De Consumo",
    slug: "tomada-inteligente-wifi-20a-pino-grosso-ekaza-medidor-consumo",
    brand: "Ekaza",
    category: "Tomadas",
    description: "Tomada de alta potência 20A com medidor de consumo integrado. Ideal para ar-condicionado.",
    features: ["20A", "Pino grosso", "Medidor consumo", "Alta potência"],
    affiliateUrl: "https://mercadolivre.com/sec/32Q9odi",
    imageUrl: "https://images.unsplash.com/photo-1544724569-5f546fd6f2b5?w=400",
    keywords: ["tomada 20a", "medidor consumo", "ekaza", "pino grosso"]
  },
  {
    id: "22",
    name: "Sensor Abertura Porta E Janela Smart Wifi Inteligente Tuya",
    slug: "sensor-abertura-porta-janela-smart-wifi-inteligente-tuya",
    brand: "Tuya",
    category: "Sensores",
    description: "Sensor de abertura sem fio para portas e janelas. Alertas instantâneos no celular.",
    features: ["Wi-Fi", "Porta/Janela", "Alertas app", "Sem fio"],
    affiliateUrl: "https://mercadolivre.com/sec/32Q9odi",
    imageUrl: "https://images.unsplash.com/photo-1558002038-1055907df827?w=400",
    keywords: ["sensor abertura", "porta janela", "tuya sensor", "smart wifi"]
  },
  {
    id: "23",
    name: "Kit Casa Inteligente Para Alexa E Google Home Smart Casa",
    slug: "kit-casa-inteligente-alexa-google-home-smart-casa",
    brand: "Smart Casa",
    category: "Kits",
    description: "Kit completo para começar sua casa inteligente. Compatível com Alexa e Google Home.",
    features: ["Kit completo", "Alexa", "Google Home", "Fácil instalação"],
    affiliateUrl: "https://mercadolivre.com/sec/32Q9odi",
    imageUrl: "https://images.unsplash.com/photo-1558002038-1055907df827?w=400",
    keywords: ["kit smart home", "casa inteligente", "alexa google", "iniciante"]
  },
  {
    id: "24",
    name: "Projetor High Smart Wifi6 4K Full HD Home TV 15000lm Android",
    slug: "projetor-high-smart-wifi6-4k-full-hd-home-tv-15000lm-android",
    brand: "High Smart",
    category: "Projetores",
    description: "Projetor potente com 15000 lumens e Android integrado. Wi-Fi 6 ultra rápido.",
    features: ["15000lm", "Wi-Fi 6", "Android", "4K"],
    affiliateUrl: "https://mercadolivre.com/sec/32Q9odi",
    imageUrl: "https://images.unsplash.com/photo-1478720568477-152d9b164e26?w=400",
    keywords: ["projetor 15000lm", "wifi6 4k", "android projetor", "high smart"]
  },
  {
    id: "25",
    name: "Interruptor Inteligente Wifi Novadigital 3 Teclas Botões Touch Tuya",
    slug: "interruptor-inteligente-wifi-novadigital-3-teclas-botoes-touch-tuya",
    brand: "Novadigital",
    category: "Interruptores Inteligentes",
    description: "Interruptor de 3 teclas touch para controle de múltiplos pontos de luz.",
    features: ["3 teclas", "Touch", "Tuya", "Bivolt"],
    affiliateUrl: "https://mercadolivre.com/sec/32Q9odi",
    imageUrl: "https://images.unsplash.com/photo-1545259741-2ea3ebf61fa3?w=400",
    keywords: ["interruptor 3 teclas", "novadigital touch", "tuya wifi", "smart switch"]
  },
  {
    id: "26",
    name: "Fechadura Inteligente Wifi Novadigital Com Câmera Biometria Face ID",
    slug: "fechadura-inteligente-wifi-novadigital-camera-biometria-face-id",
    brand: "Novadigital",
    category: "Fechaduras Digitais",
    description: "Fechadura premium com câmera integrada e reconhecimento facial. Bateria recarregável.",
    features: ["Face ID", "Câmera", "Biometria", "Bateria recarregável"],
    affiliateUrl: "https://mercadolivre.com/sec/32Q9odi",
    imageUrl: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=400",
    keywords: ["fechadura face id", "câmera integrada", "novadigital", "reconhecimento facial"]
  },
  {
    id: "27",
    name: "Smart Plug Max Wi-fi Positivo Casa Inteligente 16A NBR 14136",
    slug: "smart-plug-max-wifi-positivo-casa-inteligente-16a-nbr-14136",
    brand: "Positivo",
    category: "Tomadas",
    description: "Tomada inteligente Positivo com padrão brasileiro NBR 14136. Suporta até 1600W.",
    features: ["16A", "NBR 14136", "1600W", "Alexa"],
    affiliateUrl: "https://mercadolivre.com/sec/32Q9odi",
    imageUrl: "https://images.unsplash.com/photo-1544724569-5f546fd6f2b5?w=400",
    keywords: ["smart plug positivo", "16a nbr", "tomada brasileira", "1600w"]
  },
  {
    id: "28",
    name: "Projetor Hy300 Smart Portátil Pholex Full HD 4K Android 11 Wifi Bluetooth",
    slug: "projetor-hy300-smart-portatil-pholex-full-hd-4k-android-11-wifi-bluetooth",
    brand: "Pholex",
    category: "Projetores",
    description: "Projetor compacto com Android 11 integrado. Alta luminosidade e som potente.",
    features: ["Android 11", "4K", "Bluetooth", "Som potente"],
    affiliateUrl: "https://mercadolivre.com/sec/32Q9odi",
    imageUrl: "https://images.unsplash.com/photo-1478720568477-152d9b164e26?w=400",
    keywords: ["projetor pholex", "android 11", "hy300 smart", "portátil 4k"]
  },
  {
    id: "29",
    name: "Sensor Presença Humana Zigbee Novadigital Mmwave Parede Ou Teto",
    slug: "sensor-presenca-humana-zigbee-novadigital-mmwave-parede-teto",
    brand: "Novadigital",
    category: "Sensores",
    description: "Sensor de presença mmWave de alta precisão. Detecta presença mesmo parado.",
    features: ["mmWave", "Zigbee", "Alta precisão", "Parede/Teto"],
    affiliateUrl: "https://mercadolivre.com/sec/32Q9odi",
    imageUrl: "https://images.unsplash.com/photo-1558002038-1055907df827?w=400",
    keywords: ["sensor mmwave", "presença zigbee", "novadigital", "alta precisão"]
  },
  {
    id: "30",
    name: "Home Assistant Green Nabu Casa Smart Hub Transparente",
    slug: "home-assistant-green-nabu-casa-smart-hub-transparente",
    brand: "Nabu Casa",
    category: "Hubs",
    description: "Hub oficial Home Assistant pronto para uso. Central de automação open source.",
    features: ["Home Assistant", "Pronto para uso", "Open source", "Local"],
    affiliateUrl: "https://mercadolivre.com/sec/32Q9odi",
    imageUrl: "https://images.unsplash.com/photo-1558002038-1055907df827?w=400",
    keywords: ["home assistant", "nabu casa", "hub automação", "open source"]
  },
  {
    id: "31",
    name: "Câmera De Segurança Nuvem Dome Lite Ekaza Wi-fi 3MP Ultra HD 2K",
    slug: "camera-seguranca-nuvem-dome-lite-ekaza-wifi-3mp-ultra-hd-2k",
    brand: "Ekaza",
    category: "Câmeras de Segurança",
    description: "Câmera dome 3MP com resolução 2K. IP65 resistente à água e visão noturna.",
    features: ["3MP 2K", "Dome", "IP65", "Visão noturna"],
    affiliateUrl: "https://mercadolivre.com/sec/32Q9odi",
    imageUrl: "https://images.unsplash.com/photo-1557324232-b8917d3c3dcb?w=400",
    keywords: ["câmera dome", "2k ekaza", "ip65", "3mp wifi"]
  }
];

export const categories = [
  "Fechaduras Digitais",
  "Interruptores Inteligentes",
  "Sensores",
  "Câmeras de Segurança",
  "Projetores",
  "Tomadas",
  "Iluminação",
  "Assistentes Virtuais",
  "Hubs",
  "Kits"
];

export const affiliateLinks = [
  { name: "Smart Home", url: "https://mercadolivre.com/sec/32Q9odi", icon: "🏠" },
  { name: "Melhores Suplementos", url: "https://mercadolivre.com/sec/1WqdDGr", icon: "💪" },
  { name: "Ofertas Limitadas", url: "https://mercadolivre.com/sec/14GQgfK", icon: "🔥" },
  { name: "Pet Shop", url: "https://mercadolivre.com/sec/2w3WCFN", icon: "🐾" },
  { name: "Peças de Trator", url: "https://mercadolivre.com/sec/2d6sMcw", icon: "🚜" },
  { name: "Melhores Notebooks", url: "https://mercadolivre.com/sec/2cQ33FV", icon: "💻" },
  { name: "Melhores TVs", url: "https://mercadolivre.com/sec/2DLVWrw", icon: "📺" },
  { name: "Construção", url: "https://mercadolivre.com/sec/23DZvGp", icon: "🔧" },
  { name: "Melhores Creatina", url: "https://mercadolivre.com/sec/1e23ygz", icon: "🏋️" },
  { name: "Carrinhos de Bebê", url: "https://mercadolivre.com/sec/1RdnycU", icon: "👶" },
  { name: "Bebedouros", url: "https://mercadolivre.com/sec/2CjPSqn", icon: "💧" },
  { name: "Motos Infantil", url: "https://mercadolivre.com/sec/18DzYmU", icon: "🏍️" },
  { name: "Triciclos Adulto", url: "https://mercadolivre.com/sec/2bb6TRL", icon: "🚲" },
  { name: "Espelhos Orgânicos", url: "https://mercadolivre.com/sec/1MEENov", icon: "🪞" },
  { name: "Placas de Vídeo", url: "https://mercadolivre.com/sec/1HnRJHj", icon: "🎮" },
  { name: "Bicicletas Ergométricas", url: "https://mercadolivre.com/sec/2nKZmda", icon: "🚴" },
  { name: "Hoverboard", url: "https://mercadolivre.com/sec/28Ru8g8", icon: "🛹" },
];

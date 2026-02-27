import { Heart, HandHeart, ChevronDown, MessageCircle } from "lucide-react";
import heroImage from "@/assets/hero-flood.jpg";
import DonationCard from "@/components/DonationCard";
import WhatToDonate from "@/components/WhatToDonate";

const churches = [
  {
    city: "Belo Horizonte",
    entries: [
      {
        name: "Oitava Igreja Presbiteriana",
        pixKey: "21.854.112/0001-80",
        pixType: "CNPJ" as const,
        description:
          "Para destinar doações às famílias afetadas pelas chuvas, acrescente um centavo (R$ 0,01) ao valor. Quer doar R$ 50,00 por exemplo, doe R$ 50,01.",
      }
    ],
  },
  {
    city: "Juiz de Fora",
    entries: [
      {
        name: "A Igreja do Brasil",
        pixKey: "39.304.681/0001-17",
        pixType: "CNPJ" as const,
        description:
          "A igreja foi inundada e ainda assim, os membros estão socorrendo as vítimas. Envie qualquer valor.",
      },
      {
        name: "Aliança Evangélica",
        pixKey: "pix@aliancaevangelica.org.br",
        pixType: "Email" as const,
        description: "Envie qualquer valor com o final de 0,32 centavos.",
      },
      {
        name: "Igreja Batista Sul",
        pixKey: "ibsuljfmg@gmail.com",
        pixType: "Email" as const,
        description: "Envie qualquer valor com o final de 26 centavos.",
      },
      {
        name: "Igreja Morada de Deus",
        pixKey: "00.947.024/0001-52",
        pixType: "CNPJ" as const,
        description: "Envie qualquer valor.",
      },
      {
        name: "Conexão Presbiteriana",
        pixKey: "29.612.649/0001-45",
        pixType: "CNPJ" as const,
        description: "Envie qualquer valor com o final de 0,06 centavos.",
      },
    ],
  },
  {
    city: "Ubá",
    entries: [
      {
        name: "Igreja Batista de Ubá",
        pixKey: "exemplo@uba.org.br",
        pixType: "Email" as const,
        description: "Envie qualquer valor para ajudar as vítimas em Ubá.",
      },
      {
        name: "Comunidade Cristã de Ubá",
        pixKey: "00.000.000/0001-00",
        pixType: "CNPJ" as const,
        description: "Envie qualquer valor.",
      },
    ],
  },
  {
    city: "Matias Barbosa",
    entries: [
      {
        name: "Igreja Presbiteriana de Matias Barbosa",
        pixKey: "exemplo@matias.org.br",
        pixType: "Email" as const,
        description: "Envie qualquer valor para apoiar as famílias atingidas.",
      },
      {
        name: "Comunidade Evangélica Vida Nova",
        pixKey: "00.000.000/0002-00",
        pixType: "CNPJ" as const,
        description: "Envie qualquer valor.",
      },
    ],
  },
  {
    city: "Senador Firmino",
    entries: [
      {
        name: "Igreja Assembleia de Deus",
        pixKey: "exemplo@firmino.org.br",
        pixType: "Email" as const,
        description: "Envie qualquer valor para socorrer as vítimas.",
      },
      {
        name: "Igreja Batista Renovada",
        pixKey: "00.000.000/0003-00",
        pixType: "CNPJ" as const,
        description: "Envie qualquer valor.",
      },
    ],
  },
];

const whatsappMessage = encodeURIComponent(
  "Juiz de Fora, Ubá, Matias Barbosa e Senador Firmino precisam de ajuda! As chuvas devastaram cidades inteiras. Igrejas estão recebendo doações via PIX. Acesse o portal e ajude: " +
    window.location.href,
);
const whatsappUrl = `https://wa.me/?text=${whatsappMessage}`;

const Index = () => {
  return (
    <div className="bg-background min-h-screen">
      <a
        href={whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="right-6 bottom-6 z-50 fixed flex justify-center items-center bg-[hsl(142,70%,40%)] shadow-lg rounded-full w-14 h-14 text-white hover:scale-110 active:scale-95 transition-transform"
        aria-label="Compartilhar no WhatsApp"
      >
        <MessageCircle className="w-7 h-7" />
      </a>
      <section className="relative flex items-end h-[70vh] min-h-[480px] overflow-hidden">
        <img
          src={heroImage}
          alt="Cidade atingida pelas chuvas"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-foreground/90 via-foreground/40 to-transparent" />
        <div className="z-10 relative px-6 md:px-12 lg:px-24 pb-12 w-full">
          <div className="max-w-3xl">
            <span className="inline-flex items-center gap-2 bg-accent mb-3 px-4 py-1.5 rounded-full font-semibold text-sm text-accent-foreground">
              <HandHeart className="w-4 h-4" /> Campanha Solidária
            </span>
            <h1 className="font-black text-primary-foreground text-4xl md:text-6xl leading-tight">
              Juiz de Fora e região
              <br />
              precisam de você
            </h1>
            <p className="mt-4 max-w-xl text-primary-foreground/80 text-lg">
              As chuvas devastaram Juiz de Fora, Ubá, Matias Barbosa, Senador
              Firmino e região. Igrejas estão unidas para socorrer as vítimas.
              Doe agora via PIX.
            </p>
          </div>
        </div>
        <a
          href="#doacoes"
          className="bottom-4 left-1/2 z-10 absolute text-primary-foreground/60 -translate-x-1/2 animate-bounce"
        >
          <ChevronDown className="w-8 h-8" aria-hidden="true" />
        </a>
      </section>

      <section id="doacoes" className="mx-auto px-6 md:px-12 py-16 max-w-6xl" aria-labelledby="donation-title">
        <div className="mb-10 text-center">
          <h2 id="donation-title" className="font-bold text-foreground text-3xl md:text-4xl">
            Como ajudar?
          </h2>
          <p className="mx-auto mt-3 max-w-lg">
            Escolha uma das igrejas abaixo e faça sua doação via PIX. Cada
            centavo faz diferença.
          </p>
        </div>

        <div className="space-y-10">
          {churches.map((group) => (
            <div key={group.city}>
              <h3 className="mb-4 font-bold text-foreground text-xl">
                {group.city}
              </h3>
              <div className="gap-6 grid md:grid-cols-2">
                {group.entries.map((church) => (
                  <DonationCard key={church.pixKey} {...church} />
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      <WhatToDonate />

      {/* Footer */}
      <footer className="py-8 border-border border-t text-center">
        <div className="flex justify-center items-center gap-2 text-muted-foreground">
          <Heart className="w-4 h-4 text-accent" />
          <p className="text-sm">
            Feito com amor para as vítimas das chuvas em Juiz de Fora, Ubá,
            Matias Barbosa, Senador Firmino e região
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Index;

import { HandHeart, ChevronDown, MessageCircle } from "lucide-react";
import heroImage from "@/assets/hero-flood.jpg";
import DonationCard from "@/components/DonationCard";
import WhatToDonate from "@/components/WhatToDonate";
import { donations } from "@/data/donations";

const whatsappMessage = encodeURIComponent(
  "Juiz de Fora, Ubá, Matias Barbosa e Senador Firmino precisam de ajuda! As chuvas devastaram cidades inteiras. Igrejas estão recebendo doações via PIX. Acesse o portal e ajude: " +
  window.location.href,
);
const whatsappUrl = `https://wa.me/?text=${whatsappMessage}`;

const Index = () => {
  return (
    <div className="bg-background min-h-screen">
      <main>
        <section className="relative flex items-end h-[70vh] min-h-[480px] overflow-hidden">
          <img
            src={heroImage}
            alt="Cidade atingida pelas chuvas"
            className="absolute inset-0 w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-foreground/90 via-foreground/40 to-transparent" />
          <div className="z-10 relative px-6 md:px-12 lg:px-24 pb-12 w-full">
            <div className="max-w-3xl">
              <span className="inline-flex items-center gap-2 bg-green-700 mb-3 px-4 py-1.5 rounded-full font-bold text-sm text-white">
                <HandHeart className="w-4 h-4" aria-hidden="true" /> Campanha Solidária
              </span>
              <h1 className="font-black text-white text-4xl md:text-6xl leading-tight">
                Juiz de Fora e região
                <br />
                precisam de você
              </h1>
              <p className="mt-4 max-w-xl text-white text-lg">
                As chuvas devastaram Juiz de Fora, Ubá, Matias Barbosa, Senador
                Firmino e região. Igrejas estão unidas para socorrer as vítimas.
                Doe agora via PIX.
              </p>
            </div>
          </div>
          <a
            href="#doacoes"
            aria-label="ir para doações"
            className="bottom-4 left-1/2 z-10 absolute text-white/60 -translate-x-1/2 animate-bounce"
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
            <div className="gap-6 grid md:grid-cols-2">
              {donations.map((donation) => (
                <DonationCard key={donation.name} {...donation} />
              ))}
            </div>
          </div>
        </section>

        <WhatToDonate />
      </main>

      <footer className="py-8 border-border border-t text-center">
        <div className="flex justify-center items-center gap-2 ">
          <p className="text-sm">
            Feito com amor para as vítimas das chuvas na Zona da Mata.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Index;

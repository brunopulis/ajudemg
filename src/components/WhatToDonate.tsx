import { Package, Utensils, Shirt, Droplets, Baby, Pill } from "lucide-react";

const items = [
  {
    icon: Shirt,
    label: "Roupas",
    description: "Roupas em bom estado, cobertores, toalhas e lençóis",
  },
  {
    icon: Utensils,
    label: "Alimentos",
    description: "Alimentos não perecíveis, água potável e leite",
  },
  {
    icon: Droplets,
    label: "Higiene",
    description: "Sabonete, pasta de dente, absorventes e papel higiênico",
  },
  {
    icon: Baby,
    label: "Bebês",
    description: "Fraldas, lenços umedecidos, mamadeiras e leite em pó",
  },
  {
    icon: Pill,
    label: "Medicamentos",
    description: "Remédios básicos, álcool em gel e curativos",
  },
  {
    icon: Package,
    label: "Limpeza",
    description: "Água sanitária, desinfetante, rodo, vassoura e baldes",
  },
];

const collectionPoints = [
  {
    city: "Belo Horizonte",
    points: [
      {
        name: "Cruz Vermelha",
        description: "Cesta básicas, alimentos não perecíveis, itens básicos de higiene e produtos de limpeza. \n Doações via Pix: soschuvas2026@cvbmg.org.br.",
        address: "Rua Gastão Bráulio dos Santos, 837, Gameleira - BH",
        hours: "8h às 20h",
      },
      {
        name: "SOS Chuvas",
        description: (
          <>
            Arrecadando itens de higiene pessoal e recursos financeiros. {" "}
            <a
              href="https://www.tjmg.jus.br/portal-tjmg/noticias/nucleo-de-voluntariado-realiza-campanha-sos-chuvas-zona-da-mata.htm"
              target="_blank"
              rel="noopener noreferrer"
              className="text-primary underline hover:no-underline underline-offset-4"
            >
              Doações via Pix
            </a>.
          </>
        ),
        address: "Avenida Afonso Pena, 4001, Serra - BH"
      },
      {
        name: "Central Única das Favelas (CUFA)",
        description: (
          <>
            Cestas básicas, alimentos não perecíveis, água mineral e materiais de limpeza.{" "}
            <a
              href="https://www.cufajf.org.br/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-primary underline hover:no-underline underline-offset-4"
            >
              Doações via Pix
            </a>.
          </>
        ),
        address: "Rua Coronel Ascendino Costa, 96, Aparecida - BH"
      },
      {
        name: "Assaí Atacadista",
        description: "Alimentos não perecíveis, produtos de higiene pessoal e materiais de limpeza.",
        address: "Todas as lojas do Assaí em Minas Gerais."
      },
      {
        name: "Afrogalpão",
        description: "A Afrogalpão está trocando a entrada nos eventos (Resenha dos Pretos, Samba da Luz e Pagode de Todos os Pretos) por um alimento não perecível. Além disso, é possível doar materiais de limpeza, produtos de higiene pessoal e água mineral.",
        address: "Av. Dom Pedro II, 2725, Carlos Prates - BH"
      },
      {
        name: "Samba da Ju",
        description: "Nos dois próximos Sambas da Ju (27/2 e 6/3), a cantora Júlia Rocha vai arrecadar doações para as vítimas do desastre em Juiz de Fora e Ubá. O evento, realizado no Três Preto Bar, vai receber água, alimento não perecível, itens de higiene, cobertor e ração",
        address: "Av. Dom Pedro II, 3608, Jardim Montanhês - BH"
      },
    ],
  }
];

const WhatToDonate = () => {
  return (
    <section className="bg-secondary/50 py-16" aria-labelledby="what-to-donate-title">
      <div className="mx-auto px-6 md:px-12 max-w-6xl">
        <div className="mb-14 text-center">
          <h2 id="what-to-donate-title" className="font-bold text-foreground text-3xl md:text-4xl">
            O que doar?
          </h2>
          <p className="mx-auto mt-3 max-w-lg">
            Confira os itens mais necessários neste momento para as famílias
            atingidas.
          </p>
        </div>

        <div className="gap-4 grid sm:grid-cols-2 lg:grid-cols-3 mb-16">
          {items.map((item) => (
            <div
              key={item.label}
              className="flex items-start gap-4 bg-card hover:shadow-[var(--card-shadow)] p-5 border border-border rounded-xl transition-all"
            >
              <div className="flex justify-center items-center bg-accent/15 rounded-lg w-11 h-11 shrink-0">
                <item.icon className="w-5 h-5 text-accent" aria-hidden="true" />
              </div>
              <div>
                <h3 className="font-semibold text-foreground">{item.label}</h3>
                <p className="mt-1 whitespace-pre-wrap">
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        <div className="mb-8 text-center">
          <h2 className="font-bold text-foreground text-3xl md:text-4xl">
            Pontos de coleta
          </h2>
          <p className="mx-auto mt-3 max-w-lg">
            Leve suas doações presencialmente a um dos pontos abaixo.
          </p>
        </div>

        <div className="space-y-8">
          {collectionPoints.map((group) => (
            <div key={group.city}>
              <h3 className="mb-4 font-bold text-foreground text-xl">
                {group.city}
              </h3>
              <div className="gap-4 grid md:grid-cols-2 lg:grid-cols-3">
                {group.points.map((point) => (
                  <div
                    key={point.name}
                    className="bg-card hover:shadow-[var(--card-shadow)] p-6 border border-border rounded-xl transition-all"
                  >
                    <h3 className="font-bold text-foreground">{point.name}</h3>
                    {point.description && (
                      <p className="mt-2 whitespace-pre-wrap">
                        {point.description}
                      </p>
                    )}
                    <address className="mt-2">
                      Endereço: {point.address}
                    </address>
                    {point.hours && (
                      <span className="inline-block bg-primary/10 mt-3 px-3 py-1 rounded-full font-semibold text-primary text-xs">
                        <span aria-hidden="true">🕐</span> {point.hours}
                      </span>
                    )}
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhatToDonate;

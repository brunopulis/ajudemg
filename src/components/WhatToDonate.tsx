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
    city: "Juiz de Fora",
    points: [
      {
        name: "Igreja Batista Sul",
        address: "Rua exemplo, 123 — Centro, Juiz de Fora/MG",
        hours: "8h às 18h",
      },
      {
        name: "Aliança Evangélica",
        address: "Av. exemplo, 456 — São Mateus, Juiz de Fora/MG",
        hours: "9h às 17h",
      },
      {
        name: "Igreja Morada de Deus",
        address: "Rua exemplo, 789 — Benfica, Juiz de Fora/MG",
        hours: "7h às 19h",
      },
    ],
  },
  {
    city: "Ubá",
    points: [
      {
        name: "Igreja Batista de Ubá",
        address: "Rua exemplo, 100 — Centro, Ubá/MG",
        hours: "8h às 17h",
      },
      {
        name: "Comunidade Cristã de Ubá",
        address: "Av. exemplo, 200 — Industrial, Ubá/MG",
        hours: "9h às 18h",
      },
    ],
  },
  {
    city: "Matias Barbosa",
    points: [
      {
        name: "Igreja Presbiteriana de Matias Barbosa",
        address: "Rua exemplo, 50 — Centro, Matias Barbosa/MG",
        hours: "8h às 16h",
      },
      {
        name: "Comunidade Evangélica Vida Nova",
        address: "Rua exemplo, 80 — Vila Nova, Matias Barbosa/MG",
        hours: "9h às 17h",
      },
    ],
  },
  {
    city: "Senador Firmino",
    points: [
      {
        name: "Igreja Assembleia de Deus",
        address: "Rua exemplo, 30 — Centro, Senador Firmino/MG",
        hours: "8h às 17h",
      },
      {
        name: "Igreja Batista Renovada",
        address: "Rua exemplo, 60 — São José, Senador Firmino/MG",
        hours: "9h às 16h",
      },
    ],
  },
];

const WhatToDonate = () => {
  return (
    <section className="bg-secondary/50 py-16">
      <div className="mx-auto px-6 md:px-12 max-w-5xl">
        {/* O que doar */}
        <div className="mb-14 text-center">
          <h2 className="font-bold text-foreground text-3xl md:text-4xl">
            O que doar?
          </h2>
          <p className="mx-auto mt-3 max-w-lg text-muted-foreground">
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
                <item.icon className="w-5 h-5 text-accent" />
              </div>
              <div>
                <h3 className="font-semibold text-foreground">{item.label}</h3>
                <p className="mt-1 text-muted-foreground text-sm">
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Pontos de coleta */}
        <div className="mb-8 text-center">
          <h2 className="font-bold text-foreground text-3xl md:text-4xl">
            Pontos de coleta
          </h2>
          <p className="mx-auto mt-3 max-w-lg text-muted-foreground">
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
                    <p className="mt-2 text-muted-foreground text-sm">
                      {point.address}
                    </p>
                    <span className="inline-block bg-primary/10 mt-3 px-3 py-1 rounded-full font-semibold text-primary text-xs">
                      🕐 {point.hours}
                    </span>
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

import { collectionPoints } from "@/data/collection-points";
import { items } from "@/data/items";

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

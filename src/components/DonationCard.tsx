import { Heart, Copy, Check } from "lucide-react";
import { useState } from "react";

interface DonationCardProps {
  name: string;
  pixKey: string;
  pixType: "CNPJ" | "Email";
  description?: string;
}

const DonationCard = ({
  name,
  pixKey,
  pixType,
  description,
}: DonationCardProps) => {
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText(pixKey);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="group bg-card hover:shadow-[var(--warm-shadow)] p-6 border border-border rounded-xl transition-all hover:-translate-y-1 duration-300">
      <div className="flex items-start gap-3 mb-3">
        <div className="flex justify-center items-center bg-primary/10 rounded-full w-10 h-10 shrink-0">
          <Heart className="w-5 h-5 text-primary" aria-hidden="true" />
        </div>
        <div>
          <h3 className="font-bold text-foreground text-lg">{name}</h3>
          {description && (
            <p className="mt-1">{description}</p>
          )}
        </div>
      </div>

      <div className="bg-muted mt-4 p-4 rounded-lg">
        <p className="mb-1 font-bold text-xs uppercase tracking-wider">
          Chave PIX ({pixType})
        </p>
        <div className="flex justify-between items-center gap-2">
          <code className="font-semibold text-foreground text-sm break-all">
            {pixKey}
          </code>
          <button
            onClick={handleCopy}
            className="bg-primary hover:bg-primary/90 p-2 rounded-md text-primary-foreground transition-colors shrink-0"
            aria-label="Copiar chave PIX"
          >
            {copied ? (
              <Check className="w-4 h-4" />
            ) : (
              <Copy className="w-4 h-4" />
            )}
          </button>
        </div>
      </div>
    </div>
  );
};

export default DonationCard;

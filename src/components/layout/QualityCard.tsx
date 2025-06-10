import { Card, CardContent } from "@/components/ui/card";
import clsx from "clsx";

interface CarDetail {
  title: string;
  icon: React.ComponentType<React.SVGProps<SVGSVGElement>>;
  description: string;
}

interface QualityCardProps {
  cardDetails: CarDetail[];
}

export default function QualityCard({ cardDetails }: QualityCardProps) {
  return (
    <div
      className={clsx(
        "flex flex-col gap-6 justify-between items-center",
        "md:flex-row"
      )}
    >
      {cardDetails.map((card, index) => {
        const Icon = card.icon;
        return (
          <Card
            key={index}
            className={clsx(
              "flex justify-center items-center",
              "p-3 shadow-sm rounded-md bg-[var(--base-white)]",
              "outline",
              "outline-1",
              "outline-[var(--dark-outline)]",
              "w-full md:max-w-[260px] h-48 md:h-40",
              "overflow-hidden"
            )}
          >
            <CardContent className="flex flex-col items-center justify-center gap-1 text-center px-2">
              <Icon className="w-20 h-20 md:w-10 md:h-10 text-primary lg:w-13 lg:h-13" strokeWidth={1} />
              <h3 className="text-2xl font-playfair-bold font-semibold truncate w-full md:text-base">
                {card.title}
              </h3>
              <p className="text-sm font-lora-regular text-muted-foreground break-words leading-snug md:text-xs">
                {card.description}
              </p>
            </CardContent>
          </Card>
        );
      })}
    </div>
  );
}

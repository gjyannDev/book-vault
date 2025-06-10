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
    <div className="flex flex-wrap gap-8 justify-center items-center py-14">
      {cardDetails.map((card, index) => {
        const Icon = card.icon;
        return (
          <Card
            key={index}
            className={clsx(
              "flex justify-center items-center",
              "p-4 shadow-md rounded-md bg-[var(--base-white)] w-full h-52",
              "outline",
              "outline-1",
              "outline-[var(--dark-outline)]"
            )}
          >
            <CardContent className="flex flex-col gap-2 justify-center items-center">
              <Icon className="w-20 h-20 text-primary" strokeWidth={1}/>
              <h3 className="font-playfair-bold text-2xl font-semibold">{card.title}</h3>
              <p className="font-lora-regular text-sm text-muted-foreground text-center">
                {card.description}
              </p>
            </CardContent>
          </Card>
        );
      })}
    </div>
  );
}

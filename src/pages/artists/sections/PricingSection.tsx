import { Link } from "react-router-dom";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import SectionContainer from "./SectionContainer";
import { pricingTiers } from "../data";

export default function PricingSection() {
  return (
    <SectionContainer>
      <div className="space-y-8">
        <div>
          <h2 className="text-3xl md:text-4xl font-semibold">Pricing</h2>
          <p className="text-muted-foreground mt-3 max-w-2xl">
            Start free, scale when your release cadence grows.
          </p>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
          {pricingTiers.map((tier) => (
            <Card
              key={tier.name}
              className={`bg-white/5 backdrop-blur-lg border-white/10 ${
                tier.highlighted
                  ? "border-music-primary shadow-music"
                  : "hover:border-music-primary/40"
              } transition-colors`}
            >
              <CardHeader>
                <div className="flex items-center justify-between gap-2">
                  <CardTitle className="text-2xl">{tier.name}</CardTitle>
                  {tier.highlighted ? <Badge>Most Popular</Badge> : null}
                </div>
                <p className="text-3xl font-semibold mt-2">{tier.price}</p>
                <p className="text-sm text-muted-foreground">{tier.description}</p>
              </CardHeader>
              <CardContent className="space-y-4">
                <ul className="space-y-2 text-sm text-muted-foreground">
                  {tier.features.map((feature) => (
                    <li key={feature}>• {feature}</li>
                  ))}
                </ul>
                {tier.ctaHref.startsWith("mailto:") ? (
                  <Button asChild className="w-full" variant="outline">
                    <a href={tier.ctaHref}>{tier.ctaLabel}</a>
                  </Button>
                ) : (
                  <Button
                    asChild
                    className="w-full"
                    variant={tier.highlighted ? "musicPrimary" : "secondary"}
                  >
                    <Link to={tier.ctaHref}>{tier.ctaLabel}</Link>
                  </Button>
                )}
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </SectionContainer>
  );
}

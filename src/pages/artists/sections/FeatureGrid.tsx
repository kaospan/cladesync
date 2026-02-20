import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import SectionContainer from "./SectionContainer";
import { featureItems } from "../data";

export default function FeatureGrid() {
  return (
    <SectionContainer>
      <div className="space-y-8">
        <div>
          <h2 className="text-3xl md:text-4xl font-semibold">Built for serious releases</h2>
          <p className="text-muted-foreground mt-3 max-w-2xl">
            Every feature is designed to reduce launch risk and save artists time.
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {featureItems.map((feature) => (
            <Card
              key={feature.title}
              className="bg-white/5 backdrop-blur-lg border-white/10 hover:-translate-y-0.5 hover:border-music-primary/40 transition-all"
            >
              <CardHeader className="space-y-3">
                <div className="flex items-center justify-between gap-2">
                  <CardTitle className="text-lg leading-snug">{feature.title}</CardTitle>
                  {feature.future ? <Badge variant="musicSecondary">Future</Badge> : null}
                </div>
              </CardHeader>
              <CardContent className="text-sm text-muted-foreground leading-relaxed">
                {feature.description}
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </SectionContainer>
  );
}

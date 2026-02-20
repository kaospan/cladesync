import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import SectionContainer from "./SectionContainer";
import { howItWorksSteps } from "../data";

export default function HowItWorks() {
  return (
    <SectionContainer id="how-it-works">
      <div className="space-y-8">
        <div>
          <h2 className="text-3xl md:text-4xl font-semibold">How it works</h2>
          <p className="text-muted-foreground mt-3 max-w-2xl">
            A simple pipeline from upload to delivery, built for reliability and
            speed.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {howItWorksSteps.map((step, index) => (
            <Card
              key={step.title}
              className="bg-white/5 backdrop-blur-lg border-white/10 hover:border-music-primary/40 transition-colors"
            >
              <CardHeader>
                <p className="text-xs text-music-primary font-medium">
                  Step {index + 1}
                </p>
                <CardTitle className="text-xl">{step.title}</CardTitle>
              </CardHeader>
              <CardContent className="text-sm text-muted-foreground leading-relaxed">
                {step.description}
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </SectionContainer>
  );
}

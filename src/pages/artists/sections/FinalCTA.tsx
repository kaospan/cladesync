import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import SectionContainer from "./SectionContainer";

export default function FinalCTA() {
  return (
    <SectionContainer className="pt-8 pb-24">
      <div className="rounded-2xl border border-white/10 bg-gradient-to-br from-music-primary/20 via-music-secondary/10 to-background p-8 md:p-12 text-center">
        <h2 className="text-3xl md:text-4xl font-semibold">
          Ready to release your next track?
        </h2>
        <p className="mt-3 text-muted-foreground max-w-2xl mx-auto">
          Build your release draft in minutes and push to every major destination
          with confidence.
        </p>
        <div className="mt-6">
          <Button asChild variant="hero" size="lg">
            <Link to="/artists/onboarding">Start Distributing</Link>
          </Button>
        </div>
      </div>
    </SectionContainer>
  );
}

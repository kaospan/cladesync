import { Link } from "react-router-dom";
import { ArrowRight, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import SectionContainer from "./SectionContainer";

export default function HeroSection() {
  return (
    <SectionContainer className="pt-16 pb-20">
      <div className="rounded-2xl border border-white/10 bg-gradient-to-br from-white/10 via-white/5 to-transparent p-8 md:p-14">
        <div className="max-w-3xl space-y-6">
          <p className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-3 py-1 text-xs text-muted-foreground">
            <Sparkles className="h-3.5 w-3.5 text-music-primary" />
            CladeSync for Artists
          </p>
          <h1 className="text-4xl md:text-6xl font-semibold leading-tight tracking-tight">
            Upload once. Go live everywhere.
          </h1>
          <p className="text-base md:text-lg text-muted-foreground leading-relaxed max-w-2xl">
            We validate your audio, optimize your metadata, and deliver your
            release to stores and socials via trusted distributor partners.
          </p>
          <div className="flex flex-col sm:flex-row gap-3">
            <Button asChild variant="hero" size="lg" className="w-full sm:w-auto">
              <Link to="/artists/onboarding" aria-label="Start free onboarding">
                Start Free <ArrowRight className="h-4 w-4" />
              </Link>
            </Button>
            <Button
              asChild
              variant="outline"
              size="lg"
              className="w-full sm:w-auto border-white/15 bg-white/5 hover:bg-white/10"
            >
              <a href="#how-it-works" aria-label="Jump to how it works section">
                See how it works
              </a>
            </Button>
          </div>
          <p className="text-xs text-muted-foreground">
            Store availability depends on distributor and platform policies.
          </p>
        </div>
      </div>
    </SectionContainer>
  );
}

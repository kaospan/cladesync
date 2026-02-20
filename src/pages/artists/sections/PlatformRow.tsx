import SectionContainer from "./SectionContainer";
import { platformChips } from "../data";

export default function PlatformRow() {
  return (
    <SectionContainer className="py-8">
      <div className="rounded-xl border border-white/10 bg-white/5 p-5">
        <p className="text-xs uppercase tracking-[0.2em] text-muted-foreground mb-4">
          Trusted destinations
        </p>
        <div className="flex flex-wrap gap-2">
          {platformChips.map((platform) => (
            <span
              key={platform.name}
              className="inline-flex items-center rounded-full border border-white/15 bg-background/60 px-3 py-1.5 text-xs font-medium"
              aria-label={platform.name}
            >
              {platform.name}
            </span>
          ))}
        </div>
      </div>
    </SectionContainer>
  );
}

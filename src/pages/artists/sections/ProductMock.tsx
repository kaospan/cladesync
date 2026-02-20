import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import SectionContainer from "./SectionContainer";

export default function ProductMock() {
  return (
    <SectionContainer>
      <div className="rounded-2xl border border-white/10 bg-white/5 backdrop-blur-lg p-6 md:p-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-5">
          <article className="rounded-xl border border-white/10 bg-background/60 p-5 space-y-4">
            <h3 className="text-lg font-semibold">Release Draft</h3>
            <div className="rounded-lg border border-dashed border-white/20 p-6 text-center text-sm text-muted-foreground">
              Drag & drop audio file (.wav, .flac, .aiff)
            </div>
            <div className="rounded-lg border border-white/10 p-4 space-y-3">
              <p className="text-sm font-medium">midnight-echoes-master.wav</p>
              <div className="flex flex-wrap gap-2">
                <Badge variant="secondary">Audio validated</Badge>
                <Badge variant="secondary">Metadata complete</Badge>
                <Badge variant="secondary">Artwork 3000×3000</Badge>
              </div>
            </div>
          </article>

          <article className="rounded-xl border border-white/10 bg-background/60 p-5 space-y-4">
            <h3 className="text-lg font-semibold">Delivery Targets</h3>
            <ul className="space-y-2 text-sm text-muted-foreground" aria-label="Platform delivery checklist">
              {[
                "Spotify",
                "Apple Music",
                "YouTube Music",
                "TikTok",
                "Instagram Reels",
                "Deezer",
              ].map((platform) => (
                <li
                  key={platform}
                  className="flex items-center justify-between rounded-md border border-white/10 bg-white/5 px-3 py-2"
                >
                  <span>{platform}</span>
                  <span className="text-xs text-music-primary">Ready</span>
                </li>
              ))}
            </ul>
            <div className="rounded-lg border border-white/10 p-4 text-sm flex items-center justify-between">
              <span className="text-muted-foreground">Release date</span>
              <span className="font-medium">2026-04-15</span>
            </div>
            <Button variant="musicPrimary" className="w-full transition-transform hover:scale-[1.01]">
              Deliver to Stores
            </Button>
          </article>
        </div>
      </div>
    </SectionContainer>
  );
}

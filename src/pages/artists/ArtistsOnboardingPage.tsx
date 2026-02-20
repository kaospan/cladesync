import { useMemo, useState } from "react";
import { Link } from "react-router-dom";
import Header from "@/components/Header";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

interface FormState {
  audioFile: File | null;
  artworkFile: File | null;
  title: string;
  artist: string;
  genre: string;
  releaseDate: string;
}

type FormErrors = Partial<Record<keyof FormState, string>>;

const initialState: FormState = {
  audioFile: null,
  artworkFile: null,
  title: "",
  artist: "",
  genre: "",
  releaseDate: "",
};

export default function ArtistsOnboardingPage() {
  const [step, setStep] = useState(1);
  const [formState, setFormState] = useState<FormState>(initialState);
  const [errors, setErrors] = useState<FormErrors>({});
  const [completed, setCompleted] = useState(false);

  const stepTitle = useMemo(() => {
    if (step === 1) return "Upload track";
    if (step === 2) return "Upload artwork";
    return "Metadata";
  }, [step]);

  const updateField = <K extends keyof FormState>(key: K, value: FormState[K]) => {
    setFormState((previous) => ({ ...previous, [key]: value }));
    setErrors((previous) => ({ ...previous, [key]: undefined }));
  };

  const validateCurrentStep = () => {
    const nextErrors: FormErrors = {};

    if (step === 1 && !formState.audioFile) {
      nextErrors.audioFile = "Please upload an audio file.";
    }

    if (step === 2 && !formState.artworkFile) {
      nextErrors.artworkFile = "Please upload artwork.";
    }

    if (step === 3) {
      if (!formState.title.trim()) nextErrors.title = "Title is required.";
      if (!formState.artist.trim()) nextErrors.artist = "Artist name is required.";
      if (!formState.genre.trim()) nextErrors.genre = "Genre is required.";
      if (!formState.releaseDate.trim()) nextErrors.releaseDate = "Release date is required.";
    }

    setErrors(nextErrors);
    return Object.keys(nextErrors).length === 0;
  };

  const handleNext = () => {
    if (!validateCurrentStep()) return;
    if (step < 3) {
      setStep((previous) => previous + 1);
      return;
    }
    setCompleted(true);
  };

  const handleBack = () => {
    setErrors({});
    setStep((previous) => Math.max(1, previous - 1));
  };

  return (
    <div className="min-h-screen bg-background text-foreground overflow-x-hidden">
      <Header />
      <main className="max-w-4xl mx-auto px-6 py-16">
        <div className="mb-8">
          <Link to="/artists" className="text-sm text-music-primary hover:underline">
            ← Back to Artists
          </Link>
          <h1 className="text-3xl md:text-4xl font-semibold mt-4">Artists onboarding</h1>
          <p className="text-muted-foreground mt-2">
            Create a release draft in three quick steps.
          </p>
        </div>

        <Card className="bg-white/5 border-white/10 backdrop-blur-lg">
          <CardHeader>
            <p className="text-xs uppercase tracking-[0.2em] text-muted-foreground">
              Step {step} of 3
            </p>
            <CardTitle>{stepTitle}</CardTitle>
          </CardHeader>
          <CardContent className="space-y-6">
            {completed ? (
              <SuccessState />
            ) : (
              <>
                {step === 1 ? (
                  <div className="space-y-2">
                    <Label htmlFor="audio">Track file</Label>
                    <Input
                      id="audio"
                      type="file"
                      accept="audio/*"
                      aria-invalid={Boolean(errors.audioFile)}
                      onChange={(event) =>
                        updateField("audioFile", event.target.files?.[0] ?? null)
                      }
                    />
                    {errors.audioFile ? (
                      <p className="text-sm text-destructive">{errors.audioFile}</p>
                    ) : null}
                  </div>
                ) : null}

                {step === 2 ? (
                  <div className="space-y-2">
                    <Label htmlFor="artwork">Artwork file</Label>
                    <Input
                      id="artwork"
                      type="file"
                      accept="image/*"
                      aria-invalid={Boolean(errors.artworkFile)}
                      onChange={(event) =>
                        updateField("artworkFile", event.target.files?.[0] ?? null)
                      }
                    />
                    {errors.artworkFile ? (
                      <p className="text-sm text-destructive">{errors.artworkFile}</p>
                    ) : null}
                  </div>
                ) : null}

                {step === 3 ? (
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <Field
                      label="Track title"
                      value={formState.title}
                      onChange={(value) => updateField("title", value)}
                      error={errors.title}
                    />
                    <Field
                      label="Artist"
                      value={formState.artist}
                      onChange={(value) => updateField("artist", value)}
                      error={errors.artist}
                    />
                    <Field
                      label="Genre"
                      value={formState.genre}
                      onChange={(value) => updateField("genre", value)}
                      error={errors.genre}
                    />
                    <div className="space-y-2">
                      <Label htmlFor="releaseDate">Release date</Label>
                      <Input
                        id="releaseDate"
                        type="date"
                        value={formState.releaseDate}
                        aria-invalid={Boolean(errors.releaseDate)}
                        onChange={(event) =>
                          updateField("releaseDate", event.target.value)
                        }
                      />
                      {errors.releaseDate ? (
                        <p className="text-sm text-destructive">{errors.releaseDate}</p>
                      ) : null}
                    </div>
                  </div>
                ) : null}

                <div className="flex justify-between gap-3 pt-4">
                  <Button type="button" variant="outline" onClick={handleBack} disabled={step === 1}>
                    Back
                  </Button>
                  <Button type="button" variant="musicPrimary" onClick={handleNext}>
                    {step === 3 ? "Create draft" : "Next"}
                  </Button>
                </div>
              </>
            )}
          </CardContent>
        </Card>
      </main>
    </div>
  );
}

function Field({
  label,
  value,
  onChange,
  error,
}: {
  label: string;
  value: string;
  onChange: (value: string) => void;
  error?: string;
}) {
  const id = label.toLowerCase().replace(/\s+/g, "-");

  return (
    <div className="space-y-2">
      <Label htmlFor={id}>{label}</Label>
      <Input
        id={id}
        value={value}
        aria-invalid={Boolean(error)}
        onChange={(event) => onChange(event.target.value)}
      />
      {error ? <p className="text-sm text-destructive">{error}</p> : null}
    </div>
  );
}

function SuccessState() {
  return (
    <div className="rounded-xl border border-emerald-500/30 bg-emerald-500/10 p-5">
      <h2 className="text-xl font-semibold text-emerald-300">Release draft created</h2>
      <p className="text-sm text-muted-foreground mt-2">
        Your draft is saved. Next step is distributor delivery and store scheduling.
      </p>
      <Button asChild variant="musicPrimary" className="mt-4">
        <Link to="/artists">Back to Artists page</Link>
      </Button>
    </div>
  );
}

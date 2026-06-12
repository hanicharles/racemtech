import { Link } from "@tanstack/react-router";
import type { Program } from "@/data/programs";
import { raceFullTime } from "@/data/programs";

type Props = {
  program: Program;
};

function Stat({ label, value }: { label: string; value: string }) {
  return (
    <div className="px-4 text-center">
      <div className="text-sm font-semibold text-foreground">{label}</div>
      <div className="mx-auto mt-1 h-[3px] w-8 bg-brand" />
      <div className="mt-3 font-sans text-2xl font-bold text-foreground">{value}</div>
    </div>
  );
}

export function ProgramHero({ program: p }: Props) {
  return (
    <section className="border-b border-border bg-background">
      <div className="mx-auto max-w-7xl px-6 py-12 md:py-16">
        <div className="grid gap-10 lg:grid-cols-[1.2fr_1fr] items-center">
          <div>
            <div className="display-italic text-3xl md:text-4xl text-foreground/90">{p.degree.toUpperCase()} IN</div>
            <h1 className="display-italic mt-2 text-4xl md:text-6xl uppercase text-foreground">{p.specialization}</h1>
            <div className="mt-3 h-[3px] w-24 bg-brand" />
            <p className="mt-6 max-w-xl text-base md:text-lg text-muted-foreground leading-relaxed">{p.tagline}</p>
            <div className="mt-7 flex flex-wrap gap-3">
              <Link
                to="/admissions"
                className="rounded-md bg-brand px-6 py-3 text-sm font-semibold uppercase tracking-wider text-brand-foreground hover:opacity-90 transition"
              >
                Admissions
              </Link>
              <a
                href="#journey"
                className="rounded-md border border-foreground px-6 py-3 text-sm font-semibold uppercase tracking-wider hover:bg-foreground hover:text-background transition"
              >
                Explore Journey
              </a>
            </div>
            <div className="mt-8 flex flex-wrap gap-2">
              {raceFullTime.badges.map((b) => (
                <span key={b.label} className="rounded-md border border-border bg-card px-3 py-1.5 text-xs font-semibold">
                  {b.value} <span className="text-muted-foreground font-medium">{b.label}</span>
                </span>
              ))}
            </div>
          </div>

          <div>
            <div className="relative w-full rounded-xl overflow-hidden shadow-lg border border-border aspect-[16/10] mb-6">
              <img
                src={p.image}
                alt={p.name}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />
              <div className="absolute bottom-4 left-4 text-white text-xs font-semibold uppercase tracking-wider bg-primary/80 px-3 py-1 rounded-md backdrop-blur-sm border border-white/10">
                {p.specialization} Lab
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div className="rounded-lg border border-border bg-card p-4 text-center shadow-sm">
                <div className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">University Code</div>
                <div className="mt-2 font-display text-lg font-bold text-foreground">{p.pgcet.universityCode}</div>
              </div>
              <div className="rounded-lg border border-border bg-card p-4 text-center shadow-sm">
                <div className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">Program Code</div>
                <div className="mt-2 font-display text-lg font-bold text-foreground">{p.pgcet.programCode}</div>
              </div>
              <div className="rounded-lg border border-border bg-card p-4 text-center shadow-sm">
                <div className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">Duration</div>
                <div className="mt-2 font-display text-lg font-bold text-foreground">{p.duration}</div>
              </div>
              <div className="rounded-lg border border-border bg-card p-4 text-center shadow-sm">
                <div className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">Approval</div>
                <div className="mt-2 font-display text-lg font-bold text-foreground">AICTE</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

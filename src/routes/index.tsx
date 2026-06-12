import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, GraduationCap, Users, Award, Briefcase } from "lucide-react";
import { programs, raceFullTime } from "@/data/programs";
import { heroImages, partnerLogos } from "@/data/team";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "REVA RACE — Full-time M.Tech in AI & Cybersecurity" },
      {
        name: "description",
        content:
          "Full-time postgraduate programs in Artificial Intelligence and Cybersecurity at REVA Academy for Corporate Excellence (RACE), REVA University, Bengaluru.",
      },
    ],
  }),
  component: Index,
});

function Index() {
  const associations = Array.from(new Set(programs.flatMap((p) => p.associations)));

  return (
    <div>
      <section className="relative overflow-hidden border-b border-border bg-gradient-to-br from-brand-soft via-background to-background">
        <div className="absolute inset-0 -z-10 opacity-50 [background:radial-gradient(50%_50%_at_80%_10%,oklch(0.65_0.18_280/0.35),transparent_70%),radial-gradient(40%_40%_at_10%_90%,oklch(0.85_0.12_80/0.25),transparent_70%)]" />
        <div className="mx-auto max-w-7xl px-6 py-20 md:py-28 grid lg:grid-cols-[1.2fr_1fr] gap-12 items-center">
          <div>
            <div className="text-xs font-semibold uppercase tracking-[0.25em] text-brand">REVA Academy for Corporate Excellence</div>
            <h1 className="mt-5 max-w-4xl text-5xl md:text-7xl font-bold leading-[1.05]">
              {raceFullTime.headline}
            </h1>
            <p className="mt-6 max-w-2xl text-lg text-muted-foreground">{raceFullTime.subheadline}</p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Link
                to="/programs/$slug"
                params={{ slug: "mtech-artificial-intelligence" }}
                className="inline-flex items-center gap-2 rounded-md bg-brand px-5 py-3 text-sm font-semibold text-brand-foreground hover:opacity-90"
              >
                Explore M.Tech AI <ArrowRight className="h-4 w-4" />
              </Link>
              <Link
                to="/programs/$slug"
                params={{ slug: "mtech-cybersecurity" }}
                className="inline-flex items-center gap-2 rounded-md border border-border bg-card px-5 py-3 text-sm font-semibold hover:bg-secondary"
              >
                Explore M.Tech Cybersecurity <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
            <div className="mt-8 flex flex-wrap gap-2">
              {associations.map((a) => (
                <span key={a} className="text-[11px] uppercase tracking-wider rounded-full border border-border px-2.5 py-1 text-muted-foreground">
                  {a}
                </span>
              ))}
            </div>
          </div>
          <div className="relative">
            <div className="absolute -inset-4 bg-brand/10 rounded-2xl -rotate-2" />
            <img
              src={heroImages.campus}
              alt="REVA RACE — Bengaluru campus"
              referrerPolicy="no-referrer"
              className="relative rounded-xl border-2 border-brand/20 shadow-xl w-full object-cover"
            />
          </div>
        </div>
        <div className="mx-auto max-w-7xl px-6 pb-16">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {raceFullTime.badges.map((s) => (
              <div key={s.label}>
                <div className="font-display text-3xl md:text-4xl font-bold text-brand">{s.value}</div>
                <div className="mt-1 text-sm text-muted-foreground">{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="border-b border-border bg-card py-12">
        <div className="mx-auto max-w-7xl px-6">
          <p className="text-center text-sm font-semibold uppercase tracking-widest text-muted-foreground mb-8">
            100% Placement Assistance — Our Industry Partners
          </p>
          <div className="flex flex-wrap items-center justify-center gap-8 md:gap-16 opacity-60 hover:opacity-100 transition-opacity duration-500">
            {partnerLogos.map((logo) => (
              <img key={logo.name} src={logo.src} alt={logo.name} className="h-8 md:h-12 w-auto object-contain filter grayscale hover:grayscale-0 transition-all duration-300" />
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-20">
        <div className="flex items-end justify-between flex-wrap gap-4">
          <div>
            <div className="text-xs font-semibold uppercase tracking-[0.2em] text-brand">Flagship programs</div>
            <h2 className="mt-2 text-3xl md:text-4xl font-bold">Full-time M.Tech programs</h2>
          </div>
          <p className="max-w-md text-sm text-muted-foreground">
            PGCET {raceFullTime.pgcet.year} • University code {raceFullTime.pgcet.universityCode} • Program codes: P8 (AI) and R8 (Cybersecurity)
          </p>
        </div>
        <div className="mt-10 grid gap-6 md:grid-cols-2">
          {programs.map((p) => (
            <Link
              key={p.slug}
              to="/programs/$slug"
              params={{ slug: p.slug }}
              className="group relative overflow-hidden rounded-xl border border-border bg-card p-8 transition hover:border-brand hover:shadow-lg"
            >
              <div className="flex items-start justify-between">
                <div className="grid h-12 w-12 place-items-center rounded-lg bg-brand-soft text-brand">
                  <GraduationCap className="h-6 w-6" />
                </div>
                <div className="text-xs font-semibold text-muted-foreground">{p.duration}</div>
              </div>
              <h3 className="mt-6 text-2xl font-bold">{p.name}</h3>
              <p className="mt-3 text-sm text-muted-foreground">{p.overview}</p>
              <div className="mt-6 flex flex-wrap gap-2">
                {p.associations.slice(0, 3).map((x) => (
                  <span key={x} className="text-[11px] uppercase tracking-wider rounded-full border border-border px-2.5 py-1 text-muted-foreground">
                    {x}
                  </span>
                ))}
              </div>
              <div className="mt-8 inline-flex items-center gap-2 text-sm font-semibold text-brand">
                View program <ArrowRight className="h-4 w-4 transition group-hover:translate-x-1" />
              </div>
            </Link>
          ))}
        </div>
      </section>

      <section className="border-b border-border bg-gradient-to-br from-brand-soft/40 via-background to-background">
        <div className="mx-auto max-w-7xl px-6 py-20 grid lg:grid-cols-[1fr_1.5fr] gap-12 items-center">
          <div className="relative col-span-1">
            <div className="absolute -inset-4 bg-brand/10 rounded-2xl rotate-2" />
            <img
              src={heroImages.founder}
              alt="Dr. P. Shyama Raju — Founder & Chancellor, REVA University"
              referrerPolicy="no-referrer"
              className="relative rounded-xl border-2 border-brand/20 shadow-xl w-full max-w-sm mx-auto aspect-[3/4] object-cover"
            />
            <div className="mt-4 text-center">
              <div className="font-display font-bold text-foreground">Dr. P. Shyama Raju</div>
              <div className="text-xs text-muted-foreground uppercase tracking-wider mt-1">Founder & Chancellor, REVA University</div>
            </div>
          </div>
          <div>
            <div className="text-xs font-semibold uppercase tracking-[0.2em] text-brand">Founder Chancellor's Vision</div>
            <h2 className="mt-4 text-3xl md:text-5xl font-bold leading-tight">Shaping Global Leaders of Tomorrow</h2>
            <div className="mt-4 h-[3px] w-24 bg-brand" />
            
            <blockquote className="mt-6 border-l-4 border-brand pl-4 italic text-lg text-foreground/90 font-medium">
              "Knowledge is Power. Our commitment at REVA is to provide learning that is unlimited, empowering working professionals to adapt, innovate, and lead the future."
            </blockquote>
            
            <p className="mt-6 text-base text-muted-foreground leading-relaxed">
              Established under the aegis of Rukmini Educational Charitable Trust, REVA University is built on a philanthropic mission to give back to society. Under Dr. P. Shyama Raju's leadership, the university drives a shift away from traditional, theoretical education toward student-centered, practical, and technology-driven pedagogy.
            </p>
            <p className="mt-4 text-base text-muted-foreground leading-relaxed">
              RACE (REVA Academy for Corporate Excellence) is the realization of this vision for corporate training, providing executive education of the highest quality in emerging domains like Artificial Intelligence and Cybersecurity, fully mapped to industry needs.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-secondary/30 border-y border-border">
        <div className="mx-auto max-w-7xl px-6 py-20">
          <div className="text-xs font-semibold uppercase tracking-[0.2em] text-brand">Why choose RACE</div>
          <h2 className="mt-2 text-3xl md:text-4xl font-bold max-w-2xl">A structured journey from learning to placements.</h2>
          <div className="mt-12 grid gap-6 md:grid-cols-3">
            {[
              { icon: Users, title: raceFullTime.whyChoose[0].title, body: raceFullTime.whyChoose[0].body },
              { icon: Briefcase, title: raceFullTime.whyChoose[1].title, body: raceFullTime.whyChoose[1].body },
              { icon: Award, title: raceFullTime.whyChoose[2].title, body: raceFullTime.whyChoose[2].body },
            ].map((f) => (
              <div key={f.title} className="rounded-xl border border-border bg-card p-6">
                <div className="grid h-10 w-10 place-items-center rounded-md bg-brand-soft text-brand">
                  <f.icon className="h-5 w-5" />
                </div>
                <h3 className="mt-4 font-display text-lg font-semibold">{f.title}</h3>
                <p className="mt-2 text-sm text-muted-foreground">{f.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="border-b border-border bg-card">
        <div className="mx-auto max-w-7xl px-6 py-20 grid lg:grid-cols-[1.5fr_1.2fr] gap-12 items-center">
          <div>
            <div className="text-xs font-semibold uppercase tracking-[0.2em] text-brand">Campus Infrastructure</div>
            <h2 className="mt-4 text-3xl md:text-5xl font-bold">A World-Class Tech Environment</h2>
            <div className="mt-4 h-[3px] w-24 bg-brand" />
            <p className="mt-6 text-base text-muted-foreground leading-relaxed">
              REVA University features a sprawling 45-acre green campus in Yelahanka, Bengaluru, boasting state-of-the-art academic infrastructure built for research and corporate excellence.
            </p>
            
            <div className="mt-8 grid gap-6 sm:grid-cols-2">
              <div className="flex gap-4">
                <div className="grid h-10 w-10 shrink-0 place-items-center rounded-lg bg-brand-soft text-brand font-bold text-lg">1</div>
                <div>
                  <h4 className="font-semibold text-foreground">Advanced Technology Labs</h4>
                  <p className="mt-1 text-xs text-muted-foreground">High-performance computing clusters and sandboxed environments for deep learning and penetration testing.</p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="grid h-10 w-10 shrink-0 place-items-center rounded-lg bg-brand-soft text-brand font-bold text-lg">2</div>
                <div>
                  <h4 className="font-semibold text-foreground">Digital-First Library</h4>
                  <p className="mt-1 text-xs text-muted-foreground">24/7 access to international journals, IEEE papers, ACM Digital Library, and Scopus-indexed research resources.</p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="grid h-10 w-10 shrink-0 place-items-center rounded-lg bg-brand-soft text-brand font-bold text-lg">3</div>
                <div>
                  <h4 className="font-semibold text-foreground">Executive Classrooms</h4>
                  <p className="mt-1 text-xs text-muted-foreground">Immersive seminar halls and smart classrooms customized for working professional cohorts.</p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="grid h-10 w-10 shrink-0 place-items-center rounded-lg bg-brand-soft text-brand font-bold text-lg">4</div>
                <div>
                  <h4 className="font-semibold text-foreground">Sprawling Ecosystem</h4>
                  <p className="mt-1 text-xs text-muted-foreground">A vibrant campus with sports arenas, food courts, and incubation hubs fostering startup ideas.</p>
                </div>
              </div>
            </div>
          </div>
          <div className="relative">
            <div className="absolute -inset-4 bg-primary/5 rounded-2xl -rotate-2" />
            <img
              src={heroImages.infrastructure}
              alt="REVA University Campus Infrastructure"
              referrerPolicy="no-referrer"
              className="relative rounded-xl border-2 border-border shadow-xl w-full object-cover aspect-[4/3]"
            />
            <div className="absolute bottom-4 right-4 bg-background/90 backdrop-blur-md px-3 py-1 text-xs font-semibold rounded-md border border-border shadow-sm">
              Yelahanka Campus, Bengaluru
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-20">
        <div className="text-xs font-semibold uppercase tracking-[0.2em] text-brand">Placement highlights</div>
        <h2 className="mt-2 text-3xl md:text-4xl font-bold">Start earning from Semester 1.</h2>
        <p className="mt-3 max-w-2xl text-muted-foreground">{raceFullTime.workIntegratedLine}</p>

        <div className="mt-10 grid gap-4 md:grid-cols-3">
          {raceFullTime.placement.stats.map((s) => (
            <div key={s.label} className="rounded-xl border border-border bg-card p-6 text-center">
              <div className="font-display text-4xl font-bold text-brand">{s.value}</div>
              <div className="mt-1 text-sm text-muted-foreground">{s.label}</div>
            </div>
          ))}
        </div>

        <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {raceFullTime.placement.totals.map((t) => (
            <div key={t.label} className="rounded-xl border border-border bg-card p-6">
              <div className="font-display text-3xl font-bold text-brand">{t.value}</div>
              <div className="mt-1 text-sm text-muted-foreground">{t.label}</div>
            </div>
          ))}
        </div>

        <div className="mt-10">
          <Link
            to="/admissions"
            className="inline-flex items-center gap-2 rounded-md bg-brand px-5 py-3 text-sm font-semibold text-brand-foreground hover:opacity-90"
          >
            Admissions <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </section>
    </div>
  );
}

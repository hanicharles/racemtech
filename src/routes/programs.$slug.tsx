import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";
import { getProgram, programs, raceFullTime, type Program } from "@/data/programs";
import { ProgramHero } from "@/components/ProgramHero";

export const Route = createFileRoute("/programs/$slug")({
  head: ({ params }) => {
    const p = getProgram(params.slug);
    if (!p) return { meta: [{ title: "Program — REVA RACE" }] };
    return {
      meta: [
        { title: `${p.name} — REVA RACE` },
        {
          name: "description",
          content: `${p.name} (${p.duration}) — PGCET ${p.pgcet.year} | University Code ${p.pgcet.universityCode} | Program Code ${p.pgcet.programCode}.`,
        },
      ],
    };
  },
  loader: ({ params }) => {
    const p = getProgram(params.slug);
    if (!p) throw notFound();
    return { program: p };
  },
  component: ProgramPage,
  notFoundComponent: () => (
    <div className="mx-auto max-w-3xl px-6 py-24 text-center">
      <h1 className="text-3xl font-bold">Program not found</h1>
      <Link to="/" className="mt-6 inline-block rounded-sm bg-brand px-5 py-3 text-sm font-semibold text-brand-foreground">
        Back home
      </Link>
    </div>
  ),
});

function SectionTitle({ kicker, title }: { kicker: string; title: string }) {
  return (
    <div className="mb-10">
      <div className="display-italic text-2xl md:text-3xl text-foreground/80">{kicker}</div>
      <h2 className="display-italic mt-1 text-3xl md:text-5xl uppercase">{title}</h2>
      <div className="mt-3 h-[3px] w-24 bg-brand" />
    </div>
  );
}

function ProgramPage() {
  const { program: p } = Route.useLoaderData() as { program: Program };
  const others = programs.filter((x) => x.slug !== p.slug);

  return (
    <div>
      <ProgramHero program={p} />

      <div className="h-2 w-full bg-gradient-to-r from-brand via-brand-teal to-primary" />

      <section className="bg-secondary/40 border-b border-border">
        <div className="mx-auto max-w-7xl px-6 py-12 flex flex-wrap items-center justify-between gap-6">
          <p className="display-italic text-2xl md:text-3xl max-w-2xl">{p.tagline}</p>
          <div className="flex flex-wrap items-center gap-3">
            <span className="text-xs uppercase tracking-widest text-muted-foreground">In association with</span>
            {p.associations.map((x) => (
              <span key={x} className="rounded-sm border border-border bg-card px-3 py-1.5 text-xs font-semibold">
                {x}
              </span>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-20 grid gap-12 lg:grid-cols-[1fr_1.3fr]">
        <div>
          <div className="display-italic text-2xl text-foreground/80">Full-time postgraduate</div>
          <h2 className="display-italic text-4xl md:text-5xl uppercase mt-1">About the Programme</h2>
          <div className="mt-4 h-[3px] w-24 bg-brand" />
        </div>
        <div>
          <p className="text-base leading-relaxed text-foreground/85">{p.overview}</p>
          <p className="mt-4 text-base leading-relaxed text-muted-foreground">{raceFullTime.workIntegratedLine}</p>
          <dl className="mt-8 space-y-3 text-sm">
            <div className="flex justify-between border-t border-border pt-3"><dt className="text-muted-foreground">PGCET</dt><dd className="font-semibold text-right">{p.pgcet.year}</dd></div>
            <div className="flex justify-between border-t border-border pt-3"><dt className="text-muted-foreground">University Code</dt><dd className="font-semibold text-right">{p.pgcet.universityCode}</dd></div>
            <div className="flex justify-between border-t border-border pt-3"><dt className="text-muted-foreground">Program Code</dt><dd className="font-semibold text-right">{p.pgcet.programCode}</dd></div>
          </dl>
        </div>
      </section>

      {p.gallery && p.gallery.length > 0 && (
        <section className="border-t border-border bg-background">
          <div className="mx-auto max-w-7xl px-6 py-20">
            <SectionTitle kicker="State-of-the-Art" title="Labs & Infrastructure" />
            <div className="grid gap-8 md:grid-cols-2 mt-8">
              {p.gallery.map((item, idx) => (
                <div key={idx} className="group overflow-hidden rounded-xl border border-border bg-card shadow-sm transition hover:shadow-md">
                  <div className="relative overflow-hidden aspect-[16/10]">
                    <img
                      src={item.image}
                      alt={item.title}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-80" />
                    <div className="absolute bottom-4 left-4 text-white font-display text-lg font-bold">
                      {item.title}
                    </div>
                  </div>
                  <div className="p-6">
                    <h3 className="font-display text-lg font-semibold text-foreground">{item.title}</h3>
                    <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{item.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      <section className="border-y border-border bg-secondary/40">
        <div className="mx-auto max-w-7xl px-6 py-20">
          <SectionTitle kicker="Why Choose" title="RACE" />
          <div className="grid gap-6 md:grid-cols-3">
            {raceFullTime.whyChoose.map((x) => (
              <div key={x.title} className="rounded-xl border border-border bg-card p-6">
                <div className="text-xs uppercase tracking-wider text-muted-foreground">{x.metric}</div>
                <h3 className="mt-2 font-display text-lg font-semibold">{x.title}</h3>
                <p className="mt-2 text-sm text-muted-foreground">{x.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="journey" className="mx-auto max-w-7xl px-6 py-20">
        <SectionTitle kicker="Your Journey" title="4-Phase Model" />
        <div className="grid gap-6 lg:grid-cols-2">
          {raceFullTime.phases.map((ph) => (
            <div key={ph.phase} className="rounded-xl border border-border bg-card p-6">
              <div className="flex items-baseline justify-between gap-4">
                <div>
                  <div className="text-xs uppercase tracking-wider text-muted-foreground">{ph.phase}</div>
                  <div className="mt-1 font-display text-2xl font-semibold">{ph.title}</div>
                </div>
                <div className="text-sm font-semibold text-brand">{ph.duration}</div>
              </div>

              {"tracks" in ph ? (
                <div className="mt-5 grid gap-4 md:grid-cols-2">
                  {ph.tracks.map((t) => (
                    <div key={t.title} className="rounded-lg border border-border bg-secondary/30 p-4">
                      <div className="text-sm font-semibold">{t.title}</div>
                      <div className="mt-2 flex flex-wrap gap-2">
                        {t.items.map((it) => (
                          <span key={it} className="rounded-sm bg-background px-2.5 py-1 text-xs border border-border">{it}</span>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              ) : (
                <ul className="mt-5 space-y-2 text-sm text-muted-foreground">
                  {ph.notes?.map((n) => (
                    <li key={n}>• {n}</li>
                  ))}
                </ul>
              )}

              {ph.metrics ? (
                <div className="mt-5 flex flex-wrap gap-3">
                  {ph.metrics.map((m) => (
                    <span key={m.label} className="rounded-sm border border-border bg-brand-soft px-3 py-1.5 text-xs font-semibold text-brand">
                      {m.value} <span className="text-foreground/70 font-medium">{m.label}</span>
                    </span>
                  ))}
                </div>
              ) : null}

              <div className="mt-5 text-sm"><span className="font-semibold">Outcome:</span> <span className="text-muted-foreground">{ph.outcome}</span></div>
            </div>
          ))}
        </div>
      </section>

      <section className="border-y border-border bg-secondary/40">
        <div className="mx-auto max-w-7xl px-6 py-20">
          <SectionTitle kicker="Placement" title="Highlights" />
          <div className="grid gap-6 md:grid-cols-3">
            {raceFullTime.placement.stats.map((s) => (
              <div key={s.label} className="rounded-xl border border-border bg-card p-6 text-center">
                <div className="font-display text-4xl font-bold text-brand">{s.value}</div>
                <div className="mt-1 text-sm text-muted-foreground">{s.label}</div>
              </div>
            ))}
          </div>

          <div className="mt-10 overflow-x-auto rounded-xl border border-border bg-card">
            <table className="min-w-[720px] w-full text-sm">
              <thead className="bg-secondary/30">
                <tr>
                  {["Batch", "Students", "Internships", "Placements", "Highest Stipend", "Highest Salary"].map((h) => (
                    <th key={h} className="px-4 py-3 text-left font-semibold">{h}</th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {raceFullTime.placement.highlights.map((r) => (
                  <tr key={r.batch} className="border-t border-border">
                    <td className="px-4 py-3 font-medium">{r.batch}</td>
                    <td className="px-4 py-3">{r.students}</td>
                    <td className="px-4 py-3">{r.internships}</td>
                    <td className="px-4 py-3">{r.placements}</td>
                    <td className="px-4 py-3">{r.highestStipend}</td>
                    <td className="px-4 py-3">{r.highestSalary}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {raceFullTime.placement.totals.map((t) => (
              <div key={t.label} className="rounded-xl border border-border bg-card p-6">
                <div className="font-display text-3xl font-bold text-brand">{t.value}</div>
                <div className="mt-1 text-sm text-muted-foreground">{t.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-20">
        <SectionTitle kicker="Featured" title="Success Stories" />
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
          {raceFullTime.successStories.map((s) => (
            <a
              key={s.name}
              href={s.link}
              target="_blank"
              rel="noreferrer"
              className="group rounded-xl border border-border bg-card p-6 hover:border-brand transition"
            >
              <div className="text-xs uppercase tracking-wider text-muted-foreground">{s.program} • {s.batch}</div>
              <div className="mt-2 font-display text-lg font-semibold">{s.name}</div>
              <div className="mt-3 text-sm text-muted-foreground">{s.role}</div>
              <div className="mt-1 text-sm font-semibold">{s.company}</div>
              <div className="mt-4 inline-flex items-center gap-2 text-sm font-semibold text-brand">
                View profile <ArrowRight className="h-4 w-4 transition group-hover:translate-x-1" />
              </div>
            </a>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 pb-20">
        <div className="rounded-2xl bg-primary text-primary-foreground p-10 md:p-14 flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
          <div>
            <h3 className="font-display text-2xl md:text-3xl font-bold">Ready to lead the tech future?</h3>
            <p className="mt-2 max-w-xl opacity-80">Explore admissions and get your program code details for PGCET {raceFullTime.pgcet.year}.</p>
          </div>
          <Link
            to="/admissions"
            className="inline-flex items-center gap-2 rounded-md bg-background text-foreground px-5 py-3 text-sm font-semibold hover:bg-secondary"
          >
            Admissions <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-20">
        <SectionTitle kicker="Also" title="Explore" />
        <div className="grid gap-4 md:grid-cols-2">
          {others.map((o) => (
            <Link
              key={o.slug}
              to="/programs/$slug"
              params={{ slug: o.slug }}
              className="group flex items-start justify-between gap-4 rounded-xl border border-border bg-card p-8 hover:border-brand transition"
            >
              <div>
                <div className="text-xs uppercase tracking-widest text-muted-foreground">Program</div>
                <div className="mt-2 display-italic text-3xl">{o.name}</div>
                <p className="mt-1 text-sm text-muted-foreground">{o.tagline}</p>
              </div>
              <div className="inline-flex items-center gap-2 text-sm font-semibold uppercase tracking-wider text-brand">
                View program <ArrowRight className="h-4 w-4 transition group-hover:translate-x-1" />
              </div>
            </Link>
          ))}
        </div>
      </section>
    </div>
  );
}

import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { Check, ExternalLink } from "lucide-react";
import { programs, raceFullTime } from "@/data/programs";

export const Route = createFileRoute("/admissions")({
  head: () => ({
    meta: [
      { title: "Admissions — REVA RACE" },
      {
        name: "description",
        content: "Admissions and PGCET program codes for REVA RACE full-time M.Tech programs in AI and Cybersecurity.",
      },
    ],
  }),
  component: Admissions,
});

function Admissions() {
  const [program, setProgram] = useState(programs[0]?.name ?? "");
  const [submitted, setSubmitted] = useState(false);

  return (
    <div>
      <section className="border-b border-border bg-gradient-to-br from-brand-soft via-background to-background">
        <div className="mx-auto max-w-7xl px-6 py-20">
          <div className="text-xs font-semibold uppercase tracking-[0.2em] text-brand">Admissions • PGCET {raceFullTime.pgcet.year}</div>
          <h1 className="mt-4 text-4xl md:text-5xl font-bold max-w-3xl">Get your program code details and next steps.</h1>
          <p className="mt-4 max-w-2xl text-muted-foreground">University Code: <span className="font-semibold">{raceFullTime.pgcet.universityCode}</span>. Program codes: <span className="font-semibold">P8</span> (M.Tech AI) and <span className="font-semibold">R8</span> (M.Tech Cybersecurity).</p>
          <div className="mt-6">
            <a
              href="https://race.reva.edu.in/admissions/"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 rounded-md border border-border bg-card px-5 py-3 text-sm font-semibold hover:bg-secondary"
            >
              Official admissions page <ExternalLink className="h-4 w-4" />
            </a>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-16">
        <div className="text-xs font-semibold uppercase tracking-[0.2em] text-brand">What you get</div>
        <h2 className="mt-2 text-3xl font-bold">Work-integrated, outcome-focused journey.</h2>
        <ul className="mt-8 grid gap-4 md:grid-cols-3 text-sm">
          {raceFullTime.placement.stats.map((s) => (
            <li key={s.label} className="rounded-xl border border-border bg-card p-6">
              <div className="font-display text-3xl font-bold text-brand">{s.value}</div>
              <div className="mt-1 text-muted-foreground">{s.label}</div>
            </li>
          ))}
        </ul>
        <div className="mt-10 rounded-xl border border-border bg-card p-6 text-sm text-muted-foreground">
          <span className="font-semibold text-foreground">Note:</span> {raceFullTime.workIntegratedLine}
        </div>
      </section>

      <section className="border-y border-border bg-secondary/30">
        <div className="mx-auto max-w-7xl px-6 py-20 grid gap-10 lg:grid-cols-2">
          <div>
            <div className="text-xs font-semibold uppercase tracking-[0.2em] text-brand">PGCET quick info</div>
            <h2 className="mt-2 text-3xl font-bold">Codes you’ll need.</h2>
            <ul className="mt-6 space-y-3 text-sm">
              {[
                `PGCET ${raceFullTime.pgcet.year}`,
                `University Code: ${raceFullTime.pgcet.universityCode} (REVA University, Bengaluru)`,
                "AI Programs: P8 (M.Tech in Artificial Intelligence)",
                "CS Programs: R8 (M.Tech in Cybersecurity)",
              ].map((x) => (
                <li key={x} className="flex items-start gap-3"><Check className="mt-1 h-4 w-4 text-brand" /><span>{x}</span></li>
              ))}
            </ul>

            <div className="mt-10 text-xs font-semibold uppercase tracking-[0.2em] text-brand">Programs</div>
            <h3 className="mt-2 text-2xl font-bold">Choose your track</h3>
            <ul className="mt-4 space-y-2 text-sm text-muted-foreground">
              {programs.map((p) => (
                <li key={p.slug}>• {p.name} (Program Code: {p.pgcet.programCode})</li>
              ))}
            </ul>
          </div>

          <div className="rounded-2xl border border-border bg-card p-8">
            <h3 className="font-display text-2xl font-bold">Free career assessment</h3>
            {submitted ? (
              <div className="mt-6 rounded-lg bg-brand-soft p-6 text-sm">
                <div className="font-semibold text-brand">Thanks — we received your request.</div>
                <p className="mt-2 text-muted-foreground">Our team will reach out with a personalized roadmap and the program codes you need.</p>
              </div>
            ) : (
              <form
                className="mt-6 space-y-4"
                onSubmit={(e) => { e.preventDefault(); setSubmitted(true); }}
              >
                <div className="grid grid-cols-2 gap-4">
                  <Field label="First name" name="first" required />
                  <Field label="Last name" name="last" required />
                </div>
                <Field label="Email" name="email" type="email" required />
                <Field label="Phone" name="phone" required />
                <div>
                  <label className="text-sm font-medium">Program of interest</label>
                  <select
                    value={program}
                    onChange={(e) => setProgram(e.target.value)}
                    className="mt-1 w-full rounded-md border border-input bg-background px-3 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-brand"
                  >
                    {programs.map((p) => (
                      <option key={p.slug} value={p.name}>{p.name}</option>
                    ))}
                  </select>
                </div>
                <button
                  type="submit"
                  className="w-full rounded-md bg-brand px-5 py-3 text-sm font-semibold text-brand-foreground hover:opacity-90"
                >
                  Request callback
                </button>
                <p className="text-xs text-muted-foreground">By submitting, you consent to be contacted by REVA RACE about your enquiry.</p>
              </form>
            )}
          </div>
        </div>
      </section>
    </div>
  );
}

function Field({ label, name, type = "text", required }: { label: string; name: string; type?: string; required?: boolean }) {
  return (
    <div>
      <label htmlFor={name} className="text-sm font-medium">{label}{required && <span className="text-destructive"> *</span>}</label>
      <input
        id={name}
        name={name}
        type={type}
        required={required}
        className="mt-1 w-full rounded-md border border-input bg-background px-3 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-brand"
      />
    </div>
  );
}

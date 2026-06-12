import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { faculty } from "@/data/faculty";

export const Route = createFileRoute("/faculty")({
  head: () => ({
    meta: [
      { title: "Faculty & Industry Mentors — REVA RACE" },
      { name: "description", content: "Learn from CXOs, distinguished engineers and Kaggle Grandmasters who lead AI and cybersecurity at companies like Dell, TCS, JP Morgan, Amazon, Publicis Sapient and Granicus." },
    ],
  }),
  component: FacultyPage,
});

function FacultyPage() {
  const [filter, setFilter] = useState<"all" | "ai" | "cybersecurity">("all");
  const list = filter === "all" ? faculty : faculty.filter((f) => f.tracks.includes(filter));

  return (
    <div>
      <section className="border-b border-border bg-gradient-to-br from-brand-soft via-background to-background">
        <div className="mx-auto max-w-7xl px-6 py-20">
          <div className="text-xs font-semibold uppercase tracking-[0.2em] text-brand">Faculty & Industry Mentors</div>
          <h1 className="mt-4 text-4xl md:text-5xl font-bold max-w-3xl">Learn from India's Silicon Valley's finest.</h1>
          <p className="mt-4 max-w-2xl text-muted-foreground">
            Our mentors hold senior positions at Dell, TCS, JP Morgan, Amazon, Publicis Sapient, Granicus, Beghou Consulting, Signify and more.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-12">
        <div className="flex flex-wrap gap-2">
          {([
            { id: "all", label: "All mentors" },
            { id: "ai", label: "Artificial Intelligence" },
            { id: "cybersecurity", label: "Cybersecurity" },
          ] as const).map((t) => (
            <button
              key={t.id}
              onClick={() => setFilter(t.id)}
              className={`rounded-full border px-4 py-2 text-sm font-medium transition ${
                filter === t.id ? "border-brand bg-brand text-brand-foreground" : "border-border bg-card hover:bg-secondary"
              }`}
            >
              {t.label}
            </button>
          ))}
        </div>
        <div className="mt-10 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {list.map((f) => (
            <div key={f.name} className="rounded-xl border border-border bg-card p-6">
              <div className="flex items-start gap-4">
                {f.image ? (
                  <img
                    src={f.image}
                    alt={f.name}
                    className="h-14 w-14 shrink-0 rounded-full object-cover"
                    loading="lazy"
                  />
                ) : (
                  <div className="grid h-14 w-14 shrink-0 place-items-center rounded-full bg-brand-soft text-brand font-display text-xl font-bold">
                    {f.name.split(" ").map((x) => x[0]).slice(0, 2).join("")}
                  </div>
                )}
                <div>
                  <div className="font-display text-lg font-semibold">{f.name}</div>
                  <div className="text-sm text-brand">{f.role}</div>
                  <div className="text-xs text-muted-foreground">{f.org}</div>
                </div>
              </div>
              <p className="mt-4 text-sm text-muted-foreground">{f.bio}</p>
              <div className="mt-4 flex gap-2">
                {f.tracks.map((t) => (
                  <span key={t} className="rounded-full bg-secondary px-2.5 py-0.5 text-[11px] uppercase tracking-wider">
                    {t === "ai" ? "AI" : "Cybersecurity"}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}

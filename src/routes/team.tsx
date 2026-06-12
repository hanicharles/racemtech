import { createFileRoute } from "@tanstack/react-router";
import { team, type TeamMember } from "@/data/team";
import { heroImages } from "@/data/team";

export const Route = createFileRoute("/team")({
  head: () => ({
    meta: [
      { title: "Our Team — REVA RACE" },
      { name: "description", content: "Meet the leadership, faculty and program team behind REVA Academy for Corporate Excellence — delivering M.Sc. AI and M.Sc. Cybersecurity for working professionals." },
    ],
  }),
  component: TeamPage,
});

const groups: { id: TeamMember["group"]; title: string; kicker: string }[] = [
  { id: "leadership", title: "Leadership", kicker: "Meet our" },
  { id: "faculty", title: "Faculty", kicker: "Academic" },
  { id: "operations", title: "Programs & Operations", kicker: "Delivery" },
  { id: "business", title: "Corporate Partnerships & BD", kicker: "Industry" },
  { id: "marketing", title: "Marketing & Brand", kicker: "Outreach" },
];

function Card({ m }: { m: TeamMember }) {
  return (
    <div className="group rounded-sm border border-border bg-card overflow-hidden hover:border-brand transition">
      <div className="aspect-square w-full bg-secondary overflow-hidden">
        <img
          src={m.image}
          alt={m.name}
          loading="lazy"
          className="h-full w-full object-cover object-top transition duration-500 group-hover:scale-105"
          referrerPolicy="no-referrer"
        />
      </div>
      <div className="p-5 border-t-2 border-brand">
        <div className="font-display text-lg font-semibold leading-tight">{m.name}</div>
        <div className="mt-1 text-xs uppercase tracking-wider text-brand font-semibold">{m.role}</div>
        {m.bio && <p className="mt-3 text-sm text-muted-foreground">{m.bio}</p>}
      </div>
    </div>
  );
}

function TeamPage() {
  return (
    <div>
      {/* Hero */}
      <section className="relative border-b border-border overflow-hidden">
        <div className="absolute inset-0 -z-10">
          <img src={heroImages.campus} alt="REVA RACE campus" className="h-full w-full object-cover opacity-20" referrerPolicy="no-referrer" />
          <div className="absolute inset-0 bg-gradient-to-r from-background via-background/90 to-background/40" />
        </div>
        <div className="mx-auto max-w-7xl px-6 py-24">
          <div className="display-italic text-2xl text-foreground/70">The people behind</div>
          <h1 className="display-italic mt-1 text-5xl md:text-6xl uppercase">Our Team</h1>
          <div className="mt-3 h-[3px] w-24 bg-brand" />
          <p className="mt-6 max-w-2xl text-base text-foreground/85">
            Industry leaders, academic scholars and a dedicated program team — together delivering India's most return-positive M.Sc. programs for working professionals in Artificial Intelligence and Cybersecurity.
          </p>
        </div>
      </section>

      {/* Groups */}
      {groups.map((g) => {
        const list = team.filter((t) => t.group === g.id);
        if (!list.length) return null;
        return (
          <section key={g.id} className={`${g.id === "faculty" || g.id === "business" ? "bg-secondary/40 border-y border-border" : ""}`}>
            <div className="mx-auto max-w-7xl px-6 py-20">
              <div className="display-italic text-2xl text-foreground/70">{g.kicker}</div>
              <h2 className="display-italic mt-1 text-3xl md:text-5xl uppercase">{g.title}</h2>
              <div className="mt-3 h-[3px] w-24 bg-brand" />
              <div className="mt-12 grid gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
                {list.map((m) => <Card key={m.name} m={m} />)}
              </div>
            </div>
          </section>
        );
      })}
    </div>
  );
}

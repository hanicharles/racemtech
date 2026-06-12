import { Link } from "@tanstack/react-router";
import { useState } from "react";
import { Menu, X, Phone } from "lucide-react";
import { heroImages } from "@/data/team";

const links = [
  { to: "/", label: "Home" },
  { to: "/programs/$slug", params: { slug: "mtech-artificial-intelligence" }, label: "M.Tech AI" },
  { to: "/programs/$slug", params: { slug: "mtech-cybersecurity" }, label: "M.Tech Cybersecurity" },
  { to: "/faculty", label: "Faculty" },
  { to: "/team", label: "Team" },
  { to: "/admissions", label: "Admissions" },
  { to: "/contact", label: "Contact" },
] as const;

export function SiteHeader() {
  const [open, setOpen] = useState(false);
  return (
    <header className="sticky top-0 z-50 bg-background">
      <div className="hidden md:block bg-primary text-primary-foreground text-xs">
        <div className="mx-auto max-w-7xl px-6 py-2 flex items-center justify-between">
          <div className="flex items-center gap-5">
            <a href="tel:+918904058866" className="inline-flex items-center gap-1.5 hover:text-brand"><Phone className="h-3 w-3" /> +91 89040 58866</a>
          </div>
          <div className="text-primary-foreground/85">REVA University — Academy for Corporate Excellence</div>
        </div>
      </div>

      <div className="border-b border-border bg-background">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-4 md:px-6 py-4">
          <Link to="/" className="flex items-center gap-3 shrink-0">
            <img
              src={heroImages.raceLogo}
              alt="REVA Academy for Corporate Excellence"
              className="h-9 md:h-11 w-auto object-contain"
            />
          </Link>

          <nav className="hidden lg:flex items-center gap-4 xl:gap-6 text-xs xl:text-sm font-medium uppercase tracking-wider">
            {links
              .filter((l) => l.label !== "Admissions")
              .map((l) => (
                <Link
                  key={l.label}
                  to={l.to}
                  {...("params" in l ? { params: l.params } : {})}
                  className="text-foreground/80 hover:text-brand transition-colors whitespace-nowrap"
                  activeProps={{ className: "text-brand" }}
                >
                  {l.label}
                </Link>
              ))}
          </nav>

          <Link
            to="/admissions"
            className="hidden lg:inline-flex rounded-md bg-brand px-5 py-2.5 text-xs font-semibold uppercase tracking-wider text-brand-foreground hover:opacity-90 transition shrink-0"
          >
            Admissions
          </Link>

          <button onClick={() => setOpen(!open)} className="lg:hidden p-2" aria-label="Menu">
            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>

        {open && (
          <div className="lg:hidden border-t border-border bg-background">
            <div className="mx-auto max-w-7xl px-6 py-4 flex flex-col gap-3 text-sm uppercase tracking-wider">
              {links.map((l) => (
                <Link
                  key={l.label}
                  to={l.to}
                  {...("params" in l ? { params: l.params } : {})}
                  onClick={() => setOpen(false)}
                  className="py-1.5"
                >
                  {l.label}
                </Link>
              ))}
              <Link
                to="/admissions"
                onClick={() => setOpen(false)}
                className="mt-2 inline-flex justify-center rounded-sm bg-brand px-4 py-2.5 font-semibold text-brand-foreground"
              >
                Admissions
              </Link>
            </div>
          </div>
        )}
      </div>

      <div className="h-1 w-full bg-brand" />
    </header>
  );
}

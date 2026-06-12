import { Link } from "@tanstack/react-router";
import { Facebook, Instagram, Linkedin, Twitter, Phone, MapPin } from "lucide-react";
import { heroImages } from "@/data/team";
import shinuPhoto from "@/images/shinu.jpeg";

export function SiteFooter() {
  return (
    <footer className="mt-0 bg-foreground text-background">
      <div className="h-1 w-full bg-brand" />
      <div className="mx-auto max-w-7xl px-6 py-16 grid gap-10 md:grid-cols-2 lg:grid-cols-5">
        <div className="lg:col-span-2">
          <div className="flex flex-wrap items-center gap-3 bg-white/5 p-3 rounded-lg border border-white/10">
            <img
              src={heroImages.revaLogo}
              alt="REVA University"
              className="h-10 w-auto object-contain brightness-0 invert"
              loading="lazy"
            />
            <div className="h-8 w-px bg-white/20 hidden sm:block"></div>
            <img
              src={heroImages.raceLogo}
              alt="REVA RACE"
              className="h-10 w-auto object-contain brightness-0 invert"
              loading="lazy"
            />
          </div>
          <p className="mt-5 text-sm text-background/75 max-w-md leading-relaxed">
            RACE at REVA University offers AICTE-approved M.Tech. and UGC-recognized postgraduate programs in AI and Cybersecurity—built around industry mentorship, internships, and outcomes.
          </p>
          <div className="mt-6 flex gap-3">
            {[Facebook, Instagram, Linkedin, Twitter].map((Icon, i) => (
              <a key={i} href="#" className="grid h-9 w-9 place-items-center rounded-full border border-background/30 hover:border-brand hover:text-brand transition">
                <Icon className="h-4 w-4" />
              </a>
            ))}
          </div>
        </div>

        <div>
          <div className="font-display text-base font-semibold mb-4 uppercase tracking-wider">Programs</div>
          <ul className="space-y-2.5 text-sm text-background/75">
            <li><Link to="/programs/$slug" params={{ slug: "mtech-artificial-intelligence" }} className="hover:text-brand">M.Tech. Artificial Intelligence</Link></li>
            <li><Link to="/programs/$slug" params={{ slug: "mtech-cybersecurity" }} className="hover:text-brand">M.Tech. Cybersecurity</Link></li>
            <li><Link to="/faculty" className="hover:text-brand">Faculty</Link></li>
            <li><Link to="/admissions" className="hover:text-brand">Admissions</Link></li>
          </ul>
        </div>

        <div>
          <div className="font-display text-base font-semibold mb-4 uppercase tracking-wider">Quick Links</div>
          <ul className="space-y-2.5 text-sm text-background/75">
            <li><a href="https://race.reva.edu.in/programs/" target="_blank" rel="noreferrer" className="hover:text-brand">Programs (official)</a></li>
            <li><a href="https://race.reva.edu.in/admissions/" target="_blank" rel="noreferrer" className="hover:text-brand">Admissions (official)</a></li>
            <li><a href="https://race.reva.edu.in/contact-us/" target="_blank" rel="noreferrer" className="hover:text-brand">Contact (official)</a></li>
          </ul>
        </div>

        <div>
          <div className="font-display text-base font-semibold mb-4 uppercase tracking-wider">Contact</div>
          <ul className="space-y-3 text-sm text-background/75">
            <li className="flex gap-2"><MapPin className="h-4 w-4 mt-0.5 shrink-0 text-brand" /><span>REVA University, Kattigenahalli, Yelahanka, Bangalore, Karnataka — 560 064</span></li>
            <li className="flex gap-2"><Phone className="h-4 w-4 mt-0.5 shrink-0 text-brand" /><a href="tel:+918904058866" className="hover:text-brand">+91 89040 58866</a></li>
          </ul>
          <div className="mt-5 text-xs text-background/60">
            <div className="font-semibold text-background mb-2">Director's Office</div>
            <div className="flex items-center gap-3">
              <img
                src={shinuPhoto}
                alt="Dr. Shinu Abhi"
                className="h-10 w-10 rounded-full object-cover"
                loading="lazy"
              />
              <div>
                <div className="text-background">Dr. Shinu Abhi</div>
                <div>Director, Corporate Learning</div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="border-t border-background/15 py-5 text-center text-xs text-background/60">
        © {new Date().getFullYear()} REVA Academy for Corporate Excellence (RACE), REVA University. All rights reserved.
      </div>
    </footer>
  );
}

import { createFileRoute } from "@tanstack/react-router";
import { Phone, MapPin } from "lucide-react";
import { useState } from "react";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact — REVA RACE" },
      {
        name: "description",
        content: "Connect with REVA Academy for Corporate Excellence (RACE) at REVA University, Bengaluru.",
      },
    ],
  }),
  component: Contact,
});

function Contact() {
  const [sent, setSent] = useState(false);
  return (
    <div>
      <section className="border-b border-border bg-gradient-to-br from-brand-soft via-background to-background">
        <div className="mx-auto max-w-7xl px-6 py-20">
          <div className="text-xs font-semibold uppercase tracking-[0.2em] text-brand">Contact</div>
          <h1 className="mt-4 text-4xl md:text-5xl font-bold max-w-3xl">Let’s Connect.</h1>
          <p className="mt-4 max-w-2xl text-muted-foreground">
            Whether you’re looking to upskill, partner, or explore opportunities—reach us by phone or visit campus.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-16 grid gap-10 lg:grid-cols-2">
        <div className="space-y-6">
          <Info
            icon={MapPin}
            title="Campus Address"
            body={[
              "REVA Academy for Corporate Excellence – RACE",
              "REVA University",
              "Rukmini Educational Charitable Trust",
              "Kattigenahalli, Yelahanka",
              "Bangalore, Karnataka, India",
              "560 064",
            ]}
          />
          <Info icon={Phone} title="Call" body={["+91 89040 58866"]} />
          <div className="overflow-hidden rounded-xl border border-border">
            <iframe
              title="REVA University map"
              src="https://www.google.com/maps?q=REVA+University+Bengaluru&output=embed"
              className="h-72 w-full"
              loading="lazy"
            />
          </div>
        </div>
        <div className="rounded-2xl border border-border bg-card p-8">
          <h2 className="font-display text-2xl font-bold">Drop us a line</h2>
          {sent ? (
            <div className="mt-6 rounded-lg bg-brand-soft p-6 text-sm">
              <div className="font-semibold text-brand">Message received.</div>
              <p className="mt-2 text-muted-foreground">Our team will get back to you shortly.</p>
            </div>
          ) : (
            <form className="mt-6 space-y-4" onSubmit={(e) => { e.preventDefault(); setSent(true); }}>
              <div className="grid grid-cols-2 gap-4">
                <Input label="Name" name="name" required />
                <Input label="Phone" name="phone" required />
              </div>
              <Input label="Email" name="email" type="email" required />
              <Input label="Subject" name="subject" />
              <div>
                <label htmlFor="msg" className="text-sm font-medium">Message</label>
                <textarea
                  id="msg"
                  name="msg"
                  rows={5}
                  required
                  className="mt-1 w-full rounded-md border border-input bg-background px-3 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-brand"
                />
              </div>
              <button className="w-full rounded-md bg-brand px-5 py-3 text-sm font-semibold text-brand-foreground hover:opacity-90">
                Send message
              </button>
            </form>
          )}
        </div>
      </section>
    </div>
  );
}

function Info({ icon: Icon, title, body }: { icon: React.ElementType; title: string; body: string[] }) {
  return (
    <div className="flex gap-4 rounded-xl border border-border bg-card p-6">
      <div className="grid h-10 w-10 shrink-0 place-items-center rounded-md bg-brand-soft text-brand">
        <Icon className="h-5 w-5" />
      </div>
      <div>
        <div className="font-semibold">{title}</div>
        {body.map((b) => <div key={b} className="text-sm text-muted-foreground">{b}</div>)}
      </div>
    </div>
  );
}

function Input({ label, name, type = "text", required }: { label: string; name: string; type?: string; required?: boolean }) {
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

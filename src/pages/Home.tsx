import { useEffect, useState } from "react";
import type { CSSProperties } from "react";
import {
  ArrowRight,
  BadgeCheck,
  CheckCircle2,
  Cloud,
  ExternalLink,
  Github,
  Linkedin,
  Mail,
  Menu,
  Phone,
  ServerCog,
  ShieldCheck,
  Workflow,
  X,
} from "lucide-react";

const navItems = [
  { label: "Work", href: "#work" },
  { label: "Process", href: "#process" },
  { label: "Capabilities", href: "#capabilities" },
  { label: "Experience", href: "#experience" },
  { label: "Contact", href: "#contact" },
];
const featuredWork = [
  {
    title: "Bridges Forwarding CRM",
    type: "Client operations platform",
    status: "Portfolio case study",
    summary:
      "Internal freight-forwarding CRM for lead capture, quote lifecycle, ops pricing, shipment jobs, payment tracking, PDF quote generation, audit logs, and role-based access.",
    stack: ["Next.js", "TypeScript", "Prisma", "Supabase", "NextAuth", "Vercel"],
    outcomes: [
      "Replaced spreadsheet and email-heavy workflows with one structured operational system.",
      "Mapped sales, ops, and admin roles into clear quote-to-job workflows.",
      "Added auditability through immutable pricing snapshots and action logs.",
    ],
  },
  {
    title: "PulsePages Monitoring Platform",
    type: "Cloud monitoring SaaS",
    status: "Product architecture",
    summary:
      "Website and API monitoring platform with checks, incidents, status pages, alerts, response-time reporting, dashboards, and export workflows.",
    stack: ["SvelteKit", "FastAPI", "AWS Lambda", "EventBridge", "Cloudflare Pages", "Neon"],
    outcomes: [
      "Designed an event-driven monitor architecture across Cloudflare, AWS Lambda, and PostgreSQL.",
      "Built operational reporting features including health scoring, at-risk alerts, and CSV exports.",
      "Documented testing, rollback, launch, and operating-model procedures.",
    ],
    image: "/assets/pulsepages.png",
  },
  {
    title: "Authority OS / AI Visibility Engine",
    type: "AI workflow platform",
    status: "Project overview",
    summary:
      "Multi-tenant AI workflow foundation for authority campaigns, lead magnet generation, retrieval memory, async workers, queue routing, progress tracking, and product-specific implementation profiles.",
    stack: ["Next.js", "Clerk", "Prisma", "Supabase", "Cloudflare Workers", "Railway"],
    outcomes: [
      "Separated core platform infrastructure from operator-specific product implementations.",
      "Built async job flows with queue workers, progress polling, idempotency checks, and monitored execution.",
      "Created reusable abstractions for AI calls, retrieval, workspace config, and implementation profiles.",
    ],
  },
  {
    title: "Hoist Gateway Access Verifier",
    type: "Internal access audit automation",
    status: "Automation case study",
    summary:
      "Python automation for testing user authorization across roughly 80 Hoist gateway admin interfaces, handling sessions, redirects, form submission, error classification, and structured exports.",
    stack: ["Python", "Playwright", "CSV", "JSON", "Access Audits"],
    outcomes: [
      "Reduced repetitive manual login checks across many operational sites.",
      "Classified success, access denied, invalid credentials, unreachable sites, and unknown errors.",
      "Produced CSV and JSON output for reporting and operational review.",
    ],
  },
  {
    title: "TechRescue IT Governance Programme",
    type: "Fractional IT leadership",
    status: "Ongoing engagement",
    summary:
      "Fractional Head of IT Operations for a US technology services business, covering Microsoft 365 and Google Workspace tenant governance, identity lifecycle control, and operational documentation across a distributed team.",
    stack: ["Microsoft 365", "Google Workspace", "RBAC", "MFA", "Access Reviews", "SOPs"],
    outcomes: [
      "Designed standardised onboarding and offboarding workflows for secure identity provisioning and deprovisioning.",
      "Enforced MFA and least-privilege role assignments across both SaaS tenants.",
      "Ran periodic access reviews and authored technical SOPs for distributed support delivery.",
    ],
  },
  {
    title: "Great Southern Turf Campaign Delivery",
    type: "Client marketing systems",
    status: "Client delivery",
    summary:
      "Newsletter web page and email campaign delivery for an Australian turf supplier, built across GoHighLevel and an existing WordPress site, including template troubleshooting and pre-launch link verification.",
    stack: ["GoHighLevel", "WordPress", "HTML Email", "Campaign QA"],
    outcomes: [
      "Published a standalone newsletter page served alongside the client's existing WordPress site.",
      "Diagnosed and resolved email template rendering issues in GoHighLevel ahead of campaign send.",
      "Verified link routing and page availability across the campaign before launch.",
    ],
  },
];
const capabilities = [
  {
    icon: Cloud,
    title: "Cloud and infrastructure",
    text: "AWS EC2, IAM, Route 53, S3, Cloudflare, Vercel, Railway, Supabase, Neon, DNS, deployment workflows, and production support.",
  },
  {
    icon: ShieldCheck,
    title: "Identity and governance",
    text: "RBAC, MFA, least privilege, SaaS tenant administration, access lifecycle, onboarding/offboarding, and audit-ready documentation.",
  },
  {
    icon: Workflow,
    title: "Business systems",
    text: "Internal CRMs, quote workflows, reporting tools, monitoring dashboards, operational SOPs, automation, and stakeholder-facing delivery.",
  },
  {
    icon: ServerCog,
    title: "Application delivery",
    text: "Next.js, TypeScript, Python, FastAPI, SvelteKit, Prisma, PostgreSQL, SQLite, Playwright, API design, and deployment QA.",
  },
];
const experience = [
  {
    role: "Client Operations Coordinator / Technical Account Manager",
    company: "VOD Media Group",
    period: "2023 - Present",
    details: "Production AWS support, IAM governance, DNS reliability, escalation handling, Git-based deployments, and infrastructure coordination.",
  },
  {
    role: "Head of IT Operations",
    company: "TechRescue, Inc. - Contract / Fractional",
    period: "2025 - Present",
    details: "Microsoft 365 and Google Workspace governance, RBAC, MFA, access lifecycle controls, SOPs, and operational risk guidance.",
  },
  {
    role: "Client Support and Operations Consultant",
    company: "BroadVision Technologies / Solutions / Enterprises",
    period: "2022 - 2023",
    details: "Client systems support, implementation coordination, configuration audits, documentation, reporting, and platform stability work.",
  },
  {
    role: "Earlier infrastructure and support roles",
    company: "Mitakyo, Dial a Nerd, Gentron",
    period: "2013 - 2021",
    details: "Windows Server, Active Directory, Group Policy, Office 365, backups, network support, client escalation, and documentation.",
  },
];
const engagementSteps = [
  {
    title: "Scoping call",
    text: "Forty-five minutes to understand how the work actually runs today, where it breaks, and what a good outcome looks like. I ask for your rules rather than assuming them.",
  },
  {
    title: "Blueprint and sign-off",
    text: "I map the full flow visually and send it over. Nothing gets built until you confirm it matches how the business really works.",
  },
  {
    title: "Fixed scope and quote",
    text: "Costs are quoted against the agreed blueprint, so you approve a defined piece of work instead of an open-ended hourly commitment.",
  },
  {
    title: "Build",
    text: "Implementation happens inside your own accounts and tooling. You own the system, the data, and the access from day one.",
  },
  {
    title: "Access and security",
    text: "Least-privilege roles, MFA, and documented access boundaries. Credentials stay with you, and nothing is shared through channels it should not be.",
  },
  {
    title: "Handover and support",
    text: "SOPs and runbooks so your team can operate it without me. Ongoing support is optional, with bundled hours rather than a surprise invoice.",
  },
];

/* Reveal on scroll. IntersectionObserver rather than a scroll listener, and each
   element is unobserved once it has played. The reduced-motion case is handled
   entirely in CSS, so nothing here needs to branch on it. */
function useReveal() {
  useEffect(() => {
    const els = Array.from(document.querySelectorAll<HTMLElement>(".reveal"));
    if (!("IntersectionObserver" in window)) {
      els.forEach((el) => el.classList.add("is-in"));
      return;
    }
    const io = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (!entry.isIntersecting) continue;
          entry.target.classList.add("is-in");
          io.unobserve(entry.target);
        }
      },
      { threshold: 0.15, rootMargin: "0px 0px -6% 0px" },
    );
    els.forEach((el) => io.observe(el));
    return () => io.disconnect();
  }, []);
}

const stagger = (i: number) => ({ "--d": i * 70 + "ms" }) as CSSProperties;

function Chips({ items }: { items: string[] }) {
  return (
    <div className="flex flex-wrap gap-1.5">
      {items.map((s) => (
        <span key={s} className="chip">
          {s}
        </span>
      ))}
    </div>
  );
}

function Outcomes({ items }: { items: string[] }) {
  return (
    <ul className="space-y-2.5">
      {items.map((o) => (
        <li key={o} className="flex gap-2.5 text-sm leading-6 text-[var(--text-mid)]">
          <CheckCircle2 className="mt-1 h-3.5 w-3.5 flex-none text-[var(--amber)]" />
          <span>{o}</span>
        </li>
      ))}
    </ul>
  );
}

const featured = featuredWork.find((p) => p.image)!;
const rest = featuredWork.filter((p) => p !== featured);

const stats: Array<[string, string]> = [
  ["15+", "years experience"],
  ["2", "AWS certifications"],
  ["80+", "sites in audit automation"],
];

export default function Home() {
  useReveal();
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <main className="min-h-[100dvh] bg-[var(--ink-900)] text-[var(--text-hi)]">
      {/* ----------------------------------------------------------- header */}
      <header className="sticky top-0 z-40 border-b border-[var(--hair)] bg-[var(--ink-900)]/85 backdrop-blur-md">
        <div className="mx-auto flex h-[68px] max-w-6xl items-center justify-between gap-6 px-5 sm:px-8">
          <a href="#top" className="flex items-center gap-3">
            <span className="relative flex h-9 w-9 flex-none items-center justify-center overflow-hidden rounded-xl bg-[var(--ink-850)] text-[13px] font-bold tracking-tight">
              <span className="absolute left-0 top-0 h-full w-[3px] bg-[var(--amber)]" />
              CM
            </span>
            <span className="hidden sm:block">
              <span className="block text-[13px] font-semibold leading-tight">
                Christopher Maarschalkerweerd
              </span>
              <span className="meta block leading-tight">Cloud infrastructure and IT operations</span>
            </span>
          </a>

          <nav className="hidden items-center gap-7 lg:flex">
            {navItems
              .filter((n) => n.href !== "#contact")
              .map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  className="text-[13px] font-medium text-[var(--text-mid)] transition-colors hover:text-[var(--text-hi)]"
                >
                  {item.label}
                </a>
              ))}
          </nav>

          <div className="flex flex-none items-center gap-2">
            <a
              href="#contact"
              className="inline-flex items-center gap-2 rounded-xl bg-[var(--amber)] px-3.5 py-2 text-[13px] font-semibold text-[var(--ink-900)] transition hover:brightness-110 active:scale-[0.98]"
            >
              Get in touch
            </a>
            <button
              type="button"
              onClick={() => setMenuOpen((o) => !o)}
              aria-expanded={menuOpen}
              aria-controls="section-nav"
              aria-label={menuOpen ? "Close section menu" : "Open section menu"}
              className="inline-flex h-9 w-9 items-center justify-center rounded-xl border border-[var(--hair-strong)] text-[var(--text-mid)] transition hover:bg-white/[0.05] active:scale-[0.98] lg:hidden"
            >
              {menuOpen ? <X className="h-4 w-4" /> : <Menu className="h-4 w-4" />}
            </button>
          </div>
        </div>

        {menuOpen && (
          <nav id="section-nav" className="border-t border-[var(--hair)] lg:hidden">
            <ul className="mx-auto max-w-6xl px-5 py-2 sm:px-8">
              {navItems
                .filter((n) => n.href !== "#contact")
                .map((item) => (
                  <li key={item.href}>
                    <a
                      href={item.href}
                      onClick={() => setMenuOpen(false)}
                      className="block py-2.5 text-sm font-medium text-[var(--text-mid)] transition-colors hover:text-[var(--text-hi)]"
                    >
                      {item.label}
                    </a>
                  </li>
                ))}
            </ul>
          </nav>
        )}
      </header>

      {/* ------------------------------------------------------------- hero */}
      <section id="top" className="relative overflow-hidden border-b border-[var(--hair)]">
        <div
          aria-hidden
          className="pointer-events-none absolute -right-40 -top-40 h-[34rem] w-[34rem] rounded-full opacity-[0.07] blur-3xl"
          style={{ background: "var(--amber)" }}
        />
        <div className="relative mx-auto grid max-w-6xl items-center gap-12 px-5 pb-20 pt-14 sm:px-8 lg:grid-cols-[1.42fr_0.58fr] lg:gap-14 lg:pb-28 lg:pt-24">
          <div>
            <p className="reveal meta inline-flex items-center gap-2">
              <BadgeCheck className="h-3.5 w-3.5 text-[var(--amber)]" />
              AWS certified cloud and IT operations engineer
            </p>
            <h1
              className="reveal mt-6 max-w-[38ch] text-[2.2rem] font-extrabold leading-[1.09] sm:text-[2.6rem] lg:text-[2.6rem]"
              style={stagger(1)}
            >
              I build secure business systems that make operations easier to run.
            </h1>
            <p
              className="reveal mt-6 max-w-[56ch] text-base leading-7 text-[var(--text-mid)] sm:text-[1.0625rem]"
              style={stagger(2)}
            >
              A portfolio of production support, cloud infrastructure, SaaS governance, internal
              platforms, access auditing, monitoring, and workflow automation.
            </p>
            <div className="reveal mt-9 flex flex-wrap gap-3" style={stagger(3)}>
              <a
                href="#work"
                className="inline-flex items-center gap-2 rounded-xl bg-[var(--amber)] px-5 py-3 text-sm font-semibold text-[var(--ink-900)] transition hover:brightness-110 active:scale-[0.98]"
              >
                View work
                <ArrowRight className="h-4 w-4" />
              </a>
              <a
                href="#process"
                className="inline-flex items-center gap-2 rounded-xl border border-[var(--hair-strong)] px-5 py-3 text-sm font-semibold text-[var(--text-hi)] transition hover:bg-white/[0.05] active:scale-[0.98]"
              >
                How I work
              </a>
            </div>
          </div>

          <div
            className="reveal relative mx-auto w-full max-w-[260px] lg:max-w-none"
            style={stagger(2)}
          >
            <span
              aria-hidden
              className="absolute -left-2 -top-2 h-14 w-[3px] rounded-full bg-[var(--amber)]"
            />
            <div className="overflow-hidden rounded-xl border border-[var(--hair)] bg-[var(--ink-850)]">
              <img
                src="/portrait.jpg"
                alt="Christopher Maarschalkerweerd"
                width={471}
                height={471}
                className="h-full w-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* ------------------------------------------------------------- work */}
      <section id="work" className="mx-auto max-w-6xl px-5 py-20 sm:px-8 lg:py-28">
        <h2 className="reveal max-w-[20ch] text-3xl font-bold leading-tight sm:text-4xl">
          Selected work from real systems.
        </h2>
        <p
          className="reveal mt-4 max-w-[68ch] text-[15px] leading-7 text-[var(--text-mid)]"
          style={stagger(1)}
        >
          Each project covers the business problem, the architecture, my delivery role, and the
          outcome. Client details stay high-level; the thinking and execution do not.
        </p>

        <article className="reveal mt-12 overflow-hidden rounded-xl border border-[var(--hair)] bg-[var(--ink-850)]">
          <div className="grid lg:grid-cols-[1.05fr_0.95fr]">
            <div className="order-2 flex flex-col gap-5 p-6 sm:p-8 lg:order-1">
              <div className="flex flex-wrap items-center gap-2">
                <span className="chip">{featured.type}</span>
                <span
                  className="chip"
                  style={{ color: "var(--amber)", borderColor: "var(--amber-dim)" }}
                >
                  {featured.status}
                </span>
              </div>
              <h3 className="text-2xl font-bold leading-snug sm:text-[1.75rem]">{featured.title}</h3>
              <p className="text-[15px] leading-7 text-[var(--text-mid)]">{featured.summary}</p>
              <Outcomes items={featured.outcomes} />
              <div className="mt-auto pt-2">
                <Chips items={featured.stack} />
              </div>
            </div>
            <div className="order-1 border-b border-[var(--hair)] bg-[var(--ink-900)] lg:order-2 lg:border-b-0 lg:border-l">
              <img
                src={featured.image}
                alt={featured.title + " product interface"}
                loading="lazy"
                className="h-full w-full object-cover object-left-top"
              />
            </div>
          </div>
        </article>

        {/* Five remaining projects, five cells: two wide, then three. */}
        <div className="mt-6 grid gap-6 lg:grid-cols-6">
          {rest.map((p, i) => (
            <article
              key={p.title}
              style={stagger(i)}
              className={[
                "reveal group flex flex-col gap-4 rounded-xl border border-[var(--hair)] p-6 transition duration-300 hover:-translate-y-1 hover:border-[var(--hair-strong)]",
                i < 2 ? "lg:col-span-3" : "lg:col-span-2",
                i === 1 ? "bg-[var(--amber)]/[0.055]" : "bg-[var(--ink-850)]",
              ].join(" ")}
            >
              <span className="chip self-start">{p.type}</span>
              <h3 className="text-xl font-bold leading-snug">{p.title}</h3>
              <p className="text-sm leading-6 text-[var(--text-mid)]">{p.summary}</p>
              <Outcomes items={p.outcomes} />
              <div className="mt-auto pt-1">
                <Chips items={p.stack} />
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* ---------------------------------------------------------- process */}
      <section id="process" className="border-y border-[var(--hair)] bg-[var(--ink-850)]/40">
        <div className="mx-auto max-w-6xl px-5 py-20 sm:px-8 lg:py-28">
          <h2 className="reveal max-w-[22ch] text-3xl font-bold leading-tight sm:text-4xl">
            You approve a plan before I build anything.
          </h2>
          <p
            className="reveal mt-4 max-w-[68ch] text-[15px] leading-7 text-[var(--text-mid)]"
            style={stagger(1)}
          >
            Most technical projects fail at the start rather than the end, usually because nobody
            agreed what was being built. I map the work first, quote against that map, and hand over
            something your team can run without me.
          </p>

          <div className="mt-12 grid gap-x-10 gap-y-9 sm:grid-cols-2">
            {engagementSteps.map((step, i) => (
              <div key={step.title} className="reveal flex gap-4" style={stagger(i)}>
                <span
                  aria-hidden
                  className="mt-1.5 h-8 w-[2px] flex-none rounded-full bg-[var(--amber)]/45"
                />
                <div>
                  <h3 className="text-[15px] font-semibold">{step.title}</h3>
                  <p className="mt-2 text-sm leading-6 text-[var(--text-mid)]">{step.text}</p>
                </div>
              </div>
            ))}
          </div>

          <a
            href="#contact"
            className="reveal mt-12 inline-flex items-center gap-2 rounded-xl bg-[var(--amber)] px-5 py-3 text-sm font-semibold text-[var(--ink-900)] transition hover:brightness-110 active:scale-[0.98]"
          >
            Get in touch
            <ArrowRight className="h-4 w-4" />
          </a>
        </div>
      </section>

      {/* ----------------------------------------------------- capabilities */}
      <section id="capabilities" className="mx-auto max-w-6xl px-5 py-20 sm:px-8 lg:py-28">
        <div className="grid gap-10 lg:grid-cols-[0.85fr_1.15fr] lg:gap-16">
          <h2 className="reveal text-3xl font-bold leading-tight sm:text-4xl">
            Where infrastructure meets business operations.
          </h2>
          <div className="grid gap-px overflow-hidden rounded-xl border border-[var(--hair)] bg-[var(--hair)] sm:grid-cols-2">
            {capabilities.map((c, i) => (
              <div
                key={c.title}
                style={stagger(i)}
                className="reveal bg-[var(--ink-850)] p-6 transition-colors hover:bg-[var(--ink-800)]"
              >
                <c.icon className="h-5 w-5 text-[var(--amber)]" />
                <h3 className="mt-4 text-[15px] font-semibold">{c.title}</h3>
                <p className="mt-2 text-sm leading-6 text-[var(--text-mid)]">{c.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ------------------------------------------------------- experience */}
      <section id="experience" className="border-y border-[var(--hair)] bg-[var(--ink-850)]/40">
        <div className="mx-auto max-w-6xl px-5 py-20 sm:px-8 lg:py-28">
          <div className="grid gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:gap-16">
            <div>
              <h2 className="reveal text-3xl font-bold leading-tight sm:text-4xl">
                15+ years across infrastructure, support, operations, and client delivery.
              </h2>
              <dl
                className="reveal mt-10 grid grid-cols-3 gap-4 lg:grid-cols-1 lg:gap-6"
                style={stagger(1)}
              >
                {stats.map(([value, label]) => (
                  <div key={label} className="border-t border-[var(--hair)] pt-3">
                    <dt className="text-2xl font-bold text-[var(--amber)] lg:text-3xl">{value}</dt>
                    <dd className="mt-1 text-xs leading-5 text-[var(--text-lo)]">{label}</dd>
                  </div>
                ))}
              </dl>
            </div>

            <ol className="space-y-9">
              {experience.map((item, i) => (
                <li
                  key={item.role + item.period}
                  className="reveal relative flex gap-5"
                  style={stagger(i)}
                >
                  <div className="relative flex-none">
                    <span className="tl-dot block" />
                    {i < experience.length - 1 && <span aria-hidden className="tl-line" />}
                  </div>
                  <div className="pb-1">
                    <span className="meta">{item.period}</span>
                    <h3 className="mt-1.5 text-lg font-semibold leading-snug">{item.role}</h3>
                    <p className="mt-1 text-sm font-medium text-[var(--amber)]">{item.company}</p>
                    <p className="mt-2.5 text-sm leading-6 text-[var(--text-mid)]">{item.details}</p>
                  </div>
                </li>
              ))}
            </ol>
          </div>
        </div>
      </section>

      {/* ---------------------------------------------------------- contact */}
      <section id="contact" className="mx-auto max-w-6xl px-5 py-20 sm:px-8 lg:py-28">
        <div className="grid gap-10 lg:grid-cols-[1.1fr_0.9fr] lg:items-end lg:gap-16">
          <div>
            <h2 className="reveal max-w-[24ch] text-3xl font-bold leading-tight sm:text-4xl">
              Need someone who can understand the workflow and build the system?
            </h2>
            <p
              className="reveal mt-5 max-w-[60ch] text-[15px] leading-7 text-[var(--text-mid)]"
              style={stagger(1)}
            >
              I work best where infrastructure, security, operations, and business process meet.
              Portfolio case studies are written for public reading; deeper walkthroughs can use demo
              data.
            </p>
          </div>

          <div className="reveal grid gap-2.5" style={stagger(2)}>
            <a
              href="mailto:chris@maarsch.net"
              className="flex items-center gap-3 rounded-xl bg-[var(--amber)] px-4 py-3.5 text-sm font-semibold text-[var(--ink-900)] transition hover:brightness-110 active:scale-[0.98]"
            >
              <Mail className="h-4 w-4 flex-none" />
              chris@maarsch.net
            </a>
            <a
              href="tel:+27796266254"
              className="flex items-center gap-3 rounded-xl border border-[var(--hair-strong)] px-4 py-3.5 text-sm font-semibold transition hover:bg-white/[0.05] active:scale-[0.98]"
            >
              <Phone className="h-4 w-4 flex-none text-[var(--amber)]" />
              +27 79 626 6254
            </a>
            <a
              href="https://www.linkedin.com/in/christopher-maarschalkerweerd-4638b769/"
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-3 rounded-xl border border-[var(--hair-strong)] px-4 py-3.5 text-sm font-semibold transition hover:bg-white/[0.05] active:scale-[0.98]"
            >
              <Linkedin className="h-4 w-4 flex-none text-[var(--amber)]" />
              LinkedIn
              <ExternalLink className="ml-auto h-3.5 w-3.5 text-[var(--text-lo)]" />
            </a>
            <a
              href="https://github.com/NeoSlinkee"
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-3 rounded-xl border border-[var(--hair-strong)] px-4 py-3.5 text-sm font-semibold transition hover:bg-white/[0.05] active:scale-[0.98]"
            >
              <Github className="h-4 w-4 flex-none text-[var(--amber)]" />
              GitHub
              <ExternalLink className="ml-auto h-3.5 w-3.5 text-[var(--text-lo)]" />
            </a>
          </div>
        </div>
      </section>

      {/* ----------------------------------------------------------- footer */}
      <footer className="border-t border-[var(--hair)]">
        <div className="mx-auto flex max-w-6xl flex-col gap-2 px-5 py-9 sm:px-8 lg:flex-row lg:items-center lg:justify-between">
          <p className="text-xs leading-5 text-[var(--text-lo)]">
            Christopher Maarschalkerweerd. Cloud infrastructure, IT operations, and business systems.
          </p>
          <p className="text-xs leading-5 text-[var(--text-lo)]">Johannesburg, South Africa</p>
        </div>
      </footer>
    </main>
  );
}

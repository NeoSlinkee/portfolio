import {
  ArrowRight,
  BadgeCheck,
  CheckCircle2,
  Cloud,
  ExternalLink,
  Github,
  Linkedin,
  Mail,
  Network,
  Phone,
  ServerCog,
  ShieldCheck,
  Workflow,
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
    accent: "from-sky-500 to-cyan-300",
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
    image: "/portfolio/assets/pulsepages.png",
    accent: "from-emerald-500 to-teal-300",
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
    accent: "from-violet-500 to-fuchsia-300",
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
    accent: "from-amber-500 to-orange-300",
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
    accent: "from-indigo-500 to-blue-300",
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
    accent: "from-lime-500 to-emerald-300",
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

function VisualPanel({ title, accent }: { title: string; accent: string }) {
  return (
    <div className="relative overflow-hidden rounded-lg border border-white/10 bg-slate-950/70 p-4 shadow-2xl shadow-black/30">
      <div className={`absolute inset-x-0 top-0 h-1 bg-gradient-to-r ${accent}`} />
      <div className="mb-4 flex items-center justify-between">
        <div>
          <div className="text-xs font-semibold uppercase text-slate-400">System preview</div>
          <div className="mt-1 text-sm font-semibold text-white">{title}</div>
        </div>
        <div className="flex gap-1.5">
          <span className="h-2.5 w-2.5 rounded-full bg-rose-400" />
          <span className="h-2.5 w-2.5 rounded-full bg-amber-400" />
          <span className="h-2.5 w-2.5 rounded-full bg-emerald-400" />
        </div>
      </div>
      <div className="grid gap-3 sm:grid-cols-3">
        {["Intake", "Workflow", "Reporting"].map((label, index) => (
          <div key={label} className="rounded-md border border-white/10 bg-white/[0.04] p-3">
            <div className="mb-2 flex items-center justify-between">
              <span className="text-xs font-semibold text-slate-300">{label}</span>
              <span className={`h-2 w-8 rounded-full bg-gradient-to-r ${accent}`} />
            </div>
            <div className="space-y-2">
              <span className="block h-2 rounded bg-white/20" />
              <span className="block h-2 w-4/5 rounded bg-white/10" />
              <span className="block h-2 w-2/3 rounded bg-white/10" />
            </div>
            <div className="mt-3 grid grid-cols-3 gap-1">
              {[0, 1, 2].map((item) => (
                <span
                  key={item}
                  className="h-8 rounded bg-white"
                  style={{ opacity: index === item ? 0.16 : 0.07 }}
                />
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

function WorkCard({ project }: { project: (typeof featuredWork)[number] }) {
  return (
    <article className="group flex h-full flex-col overflow-hidden rounded-lg border border-slate-200 bg-white shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-xl">
      <div className="p-5">
        <div className="mb-4 flex flex-wrap items-center gap-2">
          <span className="rounded-full bg-slate-100 px-3 py-1 text-xs font-semibold uppercase text-slate-700">
            {project.type}
          </span>
          <span className="inline-flex items-center gap-1 rounded-full bg-emerald-50 px-3 py-1 text-xs font-semibold uppercase text-emerald-700">
            <BadgeCheck className="h-3.5 w-3.5" />
            {project.status}
          </span>
        </div>
        <h3 className="text-2xl font-bold text-slate-950">{project.title}</h3>
        <p className="mt-3 text-sm leading-6 text-slate-600">{project.summary}</p>
      </div>
      <div className="px-5">
        {project.image ? (
          <div className="overflow-hidden rounded-lg border border-slate-200 bg-slate-950">
            <img src={project.image} alt={`${project.title} product preview`} className="h-56 w-full object-cover object-left-top opacity-95" />
          </div>
        ) : (
          <VisualPanel title={project.title} accent={project.accent} />
        )}
      </div>
      <div className="flex flex-1 flex-col p-5">
        <div className="flex flex-wrap gap-2">
          {project.stack.map((item) => (
            <span key={item} className="rounded-md bg-slate-100 px-2.5 py-1 text-xs font-medium text-slate-700">
              {item}
            </span>
          ))}
        </div>
        <ul className="mt-5 space-y-3">
          {project.outcomes.map((outcome) => (
            <li key={outcome} className="flex gap-3 text-sm leading-6 text-slate-700">
              <CheckCircle2 className="mt-1 h-4 w-4 flex-none text-emerald-600" />
              <span>{outcome}</span>
            </li>
          ))}
        </ul>
      </div>
    </article>
  );
}

export default function Home() {
  return (
    <main className="min-h-screen bg-slate-50 text-slate-900">
      <header className="sticky top-0 z-50 border-b border-slate-200 bg-white/90 backdrop-blur">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4 sm:px-6 lg:px-8">
          <a href="#top" className="flex items-center gap-3">
            <span className="flex h-10 w-10 items-center justify-center rounded-lg bg-slate-950 text-sm font-black text-white">
              CM
            </span>
            <span>
              <span className="block text-sm font-bold text-slate-950">Christopher Maarschalkerweerd</span>
              <span className="block text-xs text-slate-500">Cloud infrastructure and business systems</span>
            </span>
          </a>
          <nav className="hidden items-center gap-6 md:flex">
            {navItems.map((item) => (
              <a key={item.href} href={item.href} className="text-sm font-medium text-slate-600 transition hover:text-slate-950">
                {item.label}
              </a>
            ))}
          </nav>
          <a
            href="mailto:chris@maarsch.net"
            className="inline-flex items-center gap-2 rounded-lg bg-slate-950 px-4 py-2 text-sm font-semibold text-white transition hover:bg-slate-800"
          >
            <Mail className="h-4 w-4" />
            Contact
          </a>
        </div>
      </header>

      <section id="top" className="relative overflow-hidden bg-slate-950">
        <div className="absolute inset-0 opacity-30">
          <div className="absolute left-1/2 top-0 h-[34rem] w-[34rem] -translate-x-1/2 rounded-full bg-cyan-500/30 blur-3xl" />
          <div className="absolute bottom-0 right-0 h-[26rem] w-[26rem] rounded-full bg-amber-500/20 blur-3xl" />
        </div>
        <div className="relative mx-auto grid min-h-[calc(100vh-73px)] max-w-7xl items-center gap-10 px-4 py-16 sm:px-6 lg:grid-cols-[1fr_0.88fr] lg:px-8">
          <div>
            <p className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/10 px-3 py-1 text-sm font-semibold text-cyan-100">
              <BadgeCheck className="h-4 w-4" />
              AWS certified cloud and IT operations engineer
            </p>
            <h1 className="mt-6 max-w-4xl text-5xl font-black leading-tight text-white sm:text-6xl lg:text-7xl">
              I build secure business systems that make operations easier to run.
            </h1>
            <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-300">
              A portfolio of production support, cloud infrastructure, SaaS governance, internal platforms, access auditing, monitoring, and workflow automation.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <a href="#work" className="inline-flex items-center gap-2 rounded-lg bg-cyan-300 px-5 py-3 text-sm font-bold text-slate-950 transition hover:bg-cyan-200">
                View portfolio
                <ArrowRight className="h-4 w-4" />
              </a>
              <a href="#process" className="inline-flex items-center gap-2 rounded-lg border border-white/15 px-5 py-3 text-sm font-bold text-white transition hover:bg-white/10">
                How I work
              </a>
            </div>
          </div>

          <div className="rounded-lg border border-white/10 bg-white/[0.06] p-4 shadow-2xl shadow-black/40 backdrop-blur">
            <div className="rounded-lg bg-slate-950 p-4">
              <div className="mb-4 flex items-center justify-between border-b border-white/10 pb-4">
                <div>
                  <div className="text-xs font-semibold uppercase text-slate-500">Portfolio focus</div>
                  <div className="mt-1 text-lg font-bold text-white">Operational systems map</div>
                </div>
                <Network className="h-6 w-6 text-cyan-300" />
              </div>
              <div className="grid gap-3">
                {[
                  ["Cloud platforms", "AWS, Cloudflare, Vercel, Railway"],
                  ["Business workflows", "CRM, quotes, jobs, reporting"],
                  ["Security controls", "IAM, RBAC, MFA, audits"],
                  ["Automation", "Playwright, Python, queues, exports"],
                ].map(([label, value]) => (
                  <div key={label} className="grid grid-cols-[10rem_1fr] gap-4 rounded-md border border-white/10 bg-white/[0.04] p-3">
                    <span className="text-sm font-semibold text-slate-300">{label}</span>
                    <span className="text-sm text-slate-400">{value}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="work" className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
        <div className="max-w-3xl">
          <p className="text-sm font-bold uppercase text-cyan-700">Featured work</p>
          <h2 className="mt-3 text-4xl font-black text-slate-950">Selected work from real systems.</h2>
          <p className="mt-4 text-lg leading-8 text-slate-600">
            This portfolio focuses on the business problem, architecture, delivery role, tooling, and outcomes behind each project. Client and internal details are kept appropriately high-level while still showing the thinking and execution behind the work.
          </p>
        </div>
        <div className="mt-10 grid gap-6 lg:grid-cols-2">
          {featuredWork.map((project) => (
            <WorkCard key={project.title} project={project} />
          ))}
        </div>
      </section>

      <section id="process" className="bg-white py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-10 lg:grid-cols-[0.8fr_1fr]">
            <div>
              <p className="text-sm font-bold uppercase text-cyan-700">Working together</p>
              <h2 className="mt-3 text-4xl font-black text-slate-950">You approve a plan before I build anything.</h2>
              <p className="mt-4 text-lg leading-8 text-slate-600">
                Most technical projects fail at the start rather than the end, usually because nobody agreed what was being built. I map the work first, quote against that map, and hand over something your team can run without me.
              </p>
              <a
                href="#contact"
                className="mt-6 inline-flex items-center gap-2 rounded-lg bg-slate-950 px-5 py-3 text-sm font-bold text-white transition hover:bg-slate-800"
              >
                Start with a scoping call
                <ArrowRight className="h-4 w-4" />
              </a>
            </div>
            <div className="grid gap-3 sm:grid-cols-2">
              {engagementSteps.map((step, index) => (
                <div key={step.title} className="rounded-lg border border-slate-200 bg-slate-50 p-4">
                  <div className="mb-3 flex h-9 w-9 items-center justify-center rounded-lg bg-slate-950 text-sm font-bold text-white">
                    {index + 1}
                  </div>
                  <h3 className="text-base font-bold text-slate-950">{step.title}</h3>
                  <p className="mt-2 text-sm leading-6 text-slate-600">{step.text}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section id="capabilities" className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
        <div className="max-w-3xl">
          <p className="text-sm font-bold uppercase text-cyan-700">Capabilities</p>
          <h2 className="mt-3 text-4xl font-black text-slate-950">Where infrastructure meets business operations.</h2>
        </div>
        <div className="mt-10 grid gap-5 md:grid-cols-2 lg:grid-cols-4">
          {capabilities.map((item) => (
            <div key={item.title} className="rounded-lg border border-slate-200 bg-white p-5 shadow-sm">
              <item.icon className="h-7 w-7 text-cyan-700" />
              <h3 className="mt-5 text-lg font-bold text-slate-950">{item.title}</h3>
              <p className="mt-3 text-sm leading-6 text-slate-600">{item.text}</p>
            </div>
          ))}
        </div>
      </section>

      <section id="experience" className="bg-slate-950 py-20 text-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-10 lg:grid-cols-[0.75fr_1fr]">
            <div>
              <p className="text-sm font-bold uppercase text-cyan-300">Experience</p>
              <h2 className="mt-3 text-4xl font-black">15+ years across infrastructure, support, operations, and client delivery.</h2>
              <div className="mt-8 grid gap-4 sm:grid-cols-3 lg:grid-cols-1">
                {[
                  ["15+", "years experience"],
                  ["2", "AWS certifications"],
                  ["80+", "sites in audit automation"],
                ].map(([value, label]) => (
                  <div key={label} className="rounded-lg border border-white/10 bg-white/[0.05] p-4">
                    <div className="text-3xl font-black text-cyan-300">{value}</div>
                    <div className="mt-1 text-sm text-slate-300">{label}</div>
                  </div>
                ))}
              </div>
            </div>
            <div className="space-y-4">
              {experience.map((item) => (
                <article key={`${item.role}-${item.period}`} className="rounded-lg border border-white/10 bg-white/[0.05] p-5">
                  <div className="flex flex-wrap items-start justify-between gap-3">
                    <div>
                      <h3 className="text-xl font-bold">{item.role}</h3>
                      <p className="mt-1 text-sm font-semibold text-cyan-200">{item.company}</p>
                    </div>
                    <span className="rounded-full bg-white/10 px-3 py-1 text-xs font-semibold text-slate-200">{item.period}</span>
                  </div>
                  <p className="mt-4 text-sm leading-6 text-slate-300">{item.details}</p>
                </article>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section id="contact" className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
        <div className="rounded-lg bg-slate-950 p-8 text-white sm:p-10 lg:p-12">
          <div className="grid gap-8 lg:grid-cols-[1fr_0.8fr] lg:items-center">
            <div>
              <p className="text-sm font-bold uppercase text-cyan-300">Contact</p>
              <h2 className="mt-3 text-4xl font-black">Need someone who can understand the workflow and build the system?</h2>
              <p className="mt-4 max-w-2xl text-lg leading-8 text-slate-300">
                I work best where infrastructure, security, operations, and business process meet. Portfolio case studies are written for public reading; deeper walkthroughs can use demo data.
              </p>
            </div>
            <div className="grid gap-3">
              <a href="mailto:chris@maarsch.net" className="inline-flex items-center gap-3 rounded-lg bg-white px-4 py-3 font-semibold text-slate-950 transition hover:bg-cyan-100">
                <Mail className="h-5 w-5" />
                chris@maarsch.net
              </a>
              <a href="tel:+27796266254" className="inline-flex items-center gap-3 rounded-lg border border-white/15 px-4 py-3 font-semibold text-white transition hover:bg-white/10">
                <Phone className="h-5 w-5" />
                +27 79 626 6254
              </a>
              <a href="https://www.linkedin.com/in/chris-maarschalkerweerd" target="_blank" rel="noreferrer" className="inline-flex items-center gap-3 rounded-lg border border-white/15 px-4 py-3 font-semibold text-white transition hover:bg-white/10">
                <Linkedin className="h-5 w-5" />
                LinkedIn
                <ExternalLink className="ml-auto h-4 w-4" />
              </a>
              <a href="https://github.com/NeoSlinkee" target="_blank" rel="noreferrer" className="inline-flex items-center gap-3 rounded-lg border border-white/15 px-4 py-3 font-semibold text-white transition hover:bg-white/10">
                <Github className="h-5 w-5" />
                GitHub
                <ExternalLink className="ml-auto h-4 w-4" />
              </a>
            </div>
          </div>
        </div>
      </section>

      <footer className="border-t border-slate-200 bg-white py-8">
        <div className="mx-auto flex max-w-7xl flex-col gap-3 px-4 text-sm text-slate-500 sm:px-6 lg:flex-row lg:items-center lg:justify-between lg:px-8">
          <span>Christopher Maarschalkerweerd - Cloud infrastructure, IT operations, and business systems.</span>
          <span>Client and internal work presented through clear public case studies.</span>
        </div>
      </footer>
    </main>
  );
}

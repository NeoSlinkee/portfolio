/* ============================================================
   DESIGN PHILOSOPHY: "Executive Slate"
   Deep slate (#0F172A) + amber (#F59E0B) + off-white (#E2E8F0)
   Playfair Display (headings) + DM Sans (body) + DM Mono (labels)
   Sections: Hero → About → Skills → Experience → Income Streams → Contact
   ============================================================ */

import { useEffect, useRef, useState } from "react";
import {
  RadarChart,
  Radar,
  PolarGrid,
  PolarAngleAxis,
  ResponsiveContainer,
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  Cell,
  PieChart,
  Pie,
  Legend,
} from "recharts";
import {
  Cloud,
  Shield,
  Server,
  Globe,
  Award,
  Briefcase,
  TrendingUp,
  Mail,
  Phone,
  Linkedin,
  ExternalLink,
  ChevronDown,
  CheckCircle,
  DollarSign,
  Users,
  Zap,
  BookOpen,
  Star,
} from "lucide-react";

// ─── Data ────────────────────────────────────────────────────────────────────

const HERO_BG =
  "https://private-us-east-1.manuscdn.com/sessionFile/jVUI1ummSXjigTCTfrGBAV/sandbox/cDiqyY6pDwNY3h2RTlVgzn-img-1_1771948121000_na1fn_aGVyby1iZw.jpg?x-oss-process=image/resize,w_1920,h_1920/format,webp/quality,q_80&Expires=1798761600&Policy=eyJTdGF0ZW1lbnQiOlt7IlJlc291cmNlIjoiaHR0cHM6Ly9wcml2YXRlLXVzLWVhc3QtMS5tYW51c2Nkbi5jb20vc2Vzc2lvbkZpbGUvalZVSTF1bW1TWGppZ1RDVGZyR0JBVi9zYW5kYm94L2NEaXF5WTZwRHdOWTNoMlJUbFZnem4taW1nLTFfMTc3MTk0ODEyMTAwMF9uYTFmbl9hR1Z5YnkxaVp3LmpwZz94LW9zcy1wcm9jZXNzPWltYWdlL3Jlc2l6ZSx3XzE5MjAsaF8xOTIwL2Zvcm1hdCx3ZWJwL3F1YWxpdHkscV84MCIsIkNvbmRpdGlvbiI6eyJEYXRlTGVzc1RoYW4iOnsiQVdTOkVwb2NoVGltZSI6MTc5ODc2MTYwMH19fV19&Key-Pair-Id=K2HSFNDJXOU9YS&Signature=QrUEH8NdLrYUlLioTD25Y451byRfwF1Z321qnVS4id5IyGkaQWNO9XGYC3DicvZvbvTFAUTAjfedJ4GPTZ3p3rrPnSZKSdk1Zhoi11c9DFQPc9yHEJpOkiwtC5C2-bwPOcOhidhpTN4png94V~4jwtfWdxODobGdK6xPwZw~ceS2B47b5AoSb2Sg~7k0QinpMvsgSUs36DlFc7cO-YFYE269ftSdEHE2wyU5DZuOP1a0JM~BWsgiK-1u1s5k5orUbwvPUIeImuasBOeEe0e7r0QEx~mzwUB~EcotRRrgX5Jgi4-8TRiYXCzu4lHcJctH~mmGoiyaaNE0-COLLE~e4Q__";

const SKILLS_BG =
  "https://private-us-east-1.manuscdn.com/sessionFile/jVUI1ummSXjigTCTfrGBAV/sandbox/cDiqyY6pDwNY3h2RTlVgzn-img-2_1771948122000_na1fn_c2tpbGxzLWJn.jpg?x-oss-process=image/resize,w_1920,h_1920/format,webp/quality,q_80&Expires=1798761600&Policy=eyJTdGF0ZW1lbnQiOlt7IlJlc291cmNlIjoiaHR0cHM6Ly9wcml2YXRlLXVzLWVhc3QtMS5tYW51c2Nkbi5jb20vc2Vzc2lvbkZpbGUvalZVSTF1bW1TWGppZ1RDVGZyR0JBVi9zYW5kYm94L2NEaXF5WTZwRHdOWTNoMlJUbFZnem4taW1nLTJfMTc3MTk0ODEyMjAwMF9uYTFmbl9jMnRwYkd4ekxXSm4uanBnP3gtb3NzLXByb2Nlc3M9aW1hZ2UvcmVzaXplLHdfMTkyMCxoXzE5MjAvZm9ybWF0LHdlYnAvcXVhbGl0eSxxXzgwIiwiQ29uZGl0aW9uIjp7IkRhdGVMZXNzVGhhbiI6eyJBV1M6RXBvY2hUaW1lIjoxNzk4NzYxNjAwfX19XX0_&Key-Pair-Id=K2HSFNDJXOU9YS&Signature=Cuqn6p3SbWH50QCrHvuZ6KwLLXYNFuW-mkweE4qkNJKlPeFD2FY820OhJoB2WTjCexTYBf5~j87b4WSG-fTnD393mJjK1Np118qfce1vwPA7LgDlGZfvLZTl2vqd9eHz6ZhZep9OS02hNalmSSWePWMVCUDS2lsMT6vZhdCveMwf1MQhV0qh-SyGNB-mQ0BWeiB~tK~oDJJwjd-jmtXQ0hzu9X~JLWKBcqwqsuxK-zFSfohHRSRsdVjsah65Lb7jpmENHXAE2KMaULeoS7RN1N5EICbKDb-AYFJUJrXmvFEAWp47B2ri7~H6ywYEqEcy-Qnktw-JHolEX04r0xjvyA__";

const radarSkills = [
  { subject: "AWS Cloud", A: 90 },
  { subject: "IAM & Security", A: 88 },
  { subject: "SaaS Admin", A: 85 },
  { subject: "Incident Mgmt", A: 92 },
  { subject: "Networking/DNS", A: 82 },
  { subject: "Documentation", A: 90 },
  { subject: "Automation", A: 72 },
  { subject: "Remote Ops", A: 95 },
];

const experienceData = [
  { role: "Head of IT Ops (TechRescue)", years: 0.4, color: "#F59E0B" },
  { role: "Client Ops TAM (VOD Media)", years: 1.2, color: "#F59E0B" },
  { role: "Ops Consultant (BroadVision)", years: 2, color: "#60A5FA" },
  { role: "Network Eng (Mitakyo)", years: 0.8, color: "#60A5FA" },
  { role: "Network Eng (Dial a Nerd)", years: 5, color: "#34D399" },
  { role: "IT Systems Eng (Gentron)", years: 1.5, color: "#34D399" },
];

const engagementModels = [
  {
    icon: Briefcase,
    title: "Full-Time Remote Role",
    type: "Primary",
    platforms: ["LinkedIn", "We Work Remotely", "Remote.co", "Wellfound"],
    description:
      "Contribute as a Cloud Infrastructure & IT Operations Engineer within a SaaS or technology-driven organization, owning AWS environments, identity governance, and production stability. Focused on improving reliability, access controls, and cross-system integration in distributed teams.",
    targetRole: "Mid-Senior Cloud Infrastructure Roles",
    effort: "High",
    timeToIncome: "1–3 months",
    color: "#F59E0B",
  },
  {
    icon: Users,
    title: "Fractional IT Director / Head of IT",
    type: "High Value",
    platforms: ["Contra", "Toptal", "Lemon.io", "GoFractional"],
    description:
      "Provide strategic IT governance and SaaS oversight for growing startups requiring senior infrastructure leadership without a full-time hire. Focus on companies in the 10–50 employee range with complex cloud needs.",
    targetRate: "$3,000–$6,000/mo per client",
    effort: "Medium",
    timeToIncome: "2–6 weeks",
    color: "#60A5FA",
  },
  {
    icon: Cloud,
    title: "AWS Cloud Consulting (Project-Based)",
    type: "Freelance",
    platforms: ["Upwork", "Freelancer", "Toptal", "Contra"],
    description:
      "AWS environment design, IAM governance audits, Route 53 DNS architecture, EC2 hardening, and production stability reviews. Short-term projects ideal for leveraging deep AWS expertise. High demand from SMBs without in-house cloud specialists.",
    targetRate: "$75–$150/hr",
    effort: "Medium",
    timeToIncome: "2–4 weeks",
    color: "#34D399",
  },
  {
    icon: Shield,
    title: "Microsoft 365 / Google Workspace Admin Retainer",
    type: "Recurring",
    platforms: ["Upwork", "Freelancer", "Direct outreach"],
    description:
      "Provide ongoing SaaS tenant administration, access lifecycle governance, and security hardening under structured monthly retainers. Target businesses and startups that need expert IT support but can’t justify a full-time hire. Services include user management, permissions audits, and security best practices implementation.",
    targetRate: "$500–$2,000/mo per client",
    effort: "Low–Medium",
    timeToIncome: "1–3 weeks",
    color: "#A78BFA",
  },
  {
    icon: BookOpen,
    title: "Technical Knowledge Sharing & Documentation",
    type: "Content",
    platforms: ["Hashnode", "Dev.to", "Medium", "Freelance writing boards"],
    description:
      "Write technical guides on AWS, IAM, and cloud operations. Platforms pay per article or per view. Also offer technical documentation writing as a freelance service.",
    targetRate: "$200–$800/article",
    effort: "Low",
    timeToIncome: "1–2 weeks",
    color: "#F87171",
  },
  {
    icon: Zap,
    title: "IT Automation & SOP Development",
    type: "Project",
    platforms: ["Upwork", "Contra", "Direct outreach"],
    description:
      "Design identity lifecycle automation, onboarding/offboarding workflows, and structured operational SOP frameworks for distributed teams. High value for SMBs looking to standardise IT processes without hiring a full-time IT manager.",
    targetRate: "$1,500–$5,000/project",
    effort: "Medium",
    timeToIncome: "2–4 weeks",
    color: "#FBBF24",
  },
];

const incomeDistribution = [
  { name: "Full-Time Remote", value: 45, fill: "#F59E0B" },
  { name: "Fractional IT Director", value: 25, fill: "#60A5FA" },
  { name: "AWS Consulting", value: 15, fill: "#34D399" },
  { name: "M365 Retainer", value: 10, fill: "#A78BFA" },
  { name: "Content / Other", value: 5, fill: "#F87171" },
];

const jobPlatforms = [
  { name: "We Work Remotely", url: "https://weworkremotely.com", focus: "Remote-first tech roles" },
  { name: "Remote.co", url: "https://remote.co/remote-jobs/", focus: "Curated remote positions" },
  { name: "Wellfound (AngelList)", url: "https://wellfound.com/role/r/cloud-engineer", focus: "Startup cloud roles" },
  { name: "Toptal", url: "https://www.toptal.com", focus: "Elite freelance network" },
  { name: "Contra", url: "https://contra.com", focus: "Independent contractor platform" },
  { name: "Upwork", url: "https://www.upwork.com", focus: "Cloud & IT freelance projects" },
  { name: "Dice.com", url: "https://www.dice.com", focus: "AWS/cloud contract roles" },
  { name: "GoFractional", url: "https://www.gofractional.com", focus: "Fractional executive roles" },
];

const cvHighlights = [
  {
    icon: Award,
    label: "AWS Certified Solutions Architect – Associate",
    sub: "Industry-recognised cloud credential",
  },
  {
    icon: Award,
    label: "AWS Certified Cloud Practitioner",
    sub: "Foundational AWS certification",
  },
  {
    icon: Globe,
    label: "15+ Years of Experience",
    sub: "Cloud infrastructure & IT operations",
  },
  {
    icon: Server,
    label: "Production AWS Environments",
    sub: "EC2, IAM, Route 53, S3",
  },
  {
    icon: Shield,
    label: "Identity & Access Governance",
    sub: "RBAC, IAM, access lifecycle management",
  },
  {
    icon: Users,
    label: "Remote & Fractional Leadership",
    sub: "Head of IT Ops at TechRescue (US-based)",
  },
];

const navItems = [
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Experience", href: "#experience" },
  { label: "CV", href: "#cv" },
  { label: "Income Streams", href: "#income" },
  { label: "Contact", href: "#contact" },
];

// ─── Hooks ───────────────────────────────────────────────────────────────────

function useInView(threshold = 0.15) {
  const ref = useRef<HTMLDivElement>(null);
  const [inView, setInView] = useState(false);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setInView(true); },
      { threshold }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, [threshold]);
  return { ref, inView };
}

// ─── Sub-components ──────────────────────────────────────────────────────────

function NavBar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", handler);
    return () => window.removeEventListener("scroll", handler);
  }, []);
  return (
    <nav
      className="fixed top-0 left-0 right-0 z-50 transition-all duration-300"
      style={{
        background: scrolled ? "oklch(0.13 0.02 250 / 95%)" : "transparent",
        backdropFilter: scrolled ? "blur(12px)" : "none",
        borderBottom: scrolled ? "1px solid oklch(1 0 0 / 8%)" : "none",
      }}
    >
      <div className="container flex items-center justify-between h-16">
        <span
          style={{ fontFamily: "var(--font-display)", color: "#F59E0B", fontSize: "1.1rem", fontWeight: 700 }}
        >
          CM
        </span>
        {/* Desktop nav */}
        <div className="hidden md:flex items-center gap-6">
          {navItems.map((item) => (
            <a
              key={item.label}
              href={item.href}
              className="text-sm transition-colors duration-200"
              style={{ fontFamily: "var(--font-body)", color: "oklch(0.89 0.01 250 / 70%)" }}
              onMouseEnter={(e) => (e.currentTarget.style.color = "#F59E0B")}
              onMouseLeave={(e) => (e.currentTarget.style.color = "oklch(0.89 0.01 250 / 70%)")}
            >
              {item.label}
            </a>
          ))}
          <a
            href="mailto:chrismaarsch@gmail.com"
            className="px-4 py-2 rounded text-sm font-medium transition-all duration-200"
            style={{
              background: "#F59E0B",
              color: "oklch(0.13 0.02 250)",
              fontFamily: "var(--font-body)",
            }}
            onMouseEnter={(e) => (e.currentTarget.style.background = "#FBBF24")}
            onMouseLeave={(e) => (e.currentTarget.style.background = "#F59E0B")}
          >
            Hire Me
          </a>
        </div>
        {/* Mobile menu button */}
        <button
          className="md:hidden flex flex-col gap-1.5 p-2"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          {[0, 1, 2].map((i) => (
            <span
              key={i}
              className="block w-6 h-0.5 transition-all duration-200"
              style={{ background: "#F59E0B" }}
            />
          ))}
        </button>
      </div>
      {/* Mobile dropdown */}
      {menuOpen && (
        <div
          className="md:hidden flex flex-col gap-2 px-6 pb-4"
          style={{ background: "oklch(0.13 0.02 250 / 98%)" }}
        >
          {navItems.map((item) => (
            <a
              key={item.label}
              href={item.href}
              className="py-2 text-sm border-b"
              style={{
                fontFamily: "var(--font-body)",
                color: "oklch(0.89 0.01 250 / 80%)",
                borderColor: "oklch(1 0 0 / 8%)",
              }}
              onClick={() => setMenuOpen(false)}
            >
              {item.label}
            </a>
          ))}
        </div>
      )}
    </nav>
  );
}

function SkillBar({ label, value, delay = 0 }: { label: string; value: number; delay?: number }) {
  const { ref, inView } = useInView();
  return (
    <div ref={ref} className="mb-4">
      <div className="flex justify-between mb-1">
        <span style={{ fontFamily: "var(--font-mono)", fontSize: "0.75rem", color: "oklch(0.89 0.01 250 / 80%)" }}>
          {label}
        </span>
        <span style={{ fontFamily: "var(--font-mono)", fontSize: "0.75rem", color: "#F59E0B" }}>
          {value}%
        </span>
      </div>
      <div className="skill-bar-track">
        <div
          className="skill-bar-fill"
          style={{
            width: inView ? `${value}%` : "0%",
            transitionDelay: `${delay}ms`,
          }}
        />
      </div>
    </div>
  );
}

function TimelineItem({
  role,
  company,
  period,
  location,
  bullets,
  isLast = false,
}: {
  role: string;
  company: string;
  period: string;
  location: string;
  bullets: string[];
  isLast?: boolean;
}) {
  const { ref, inView } = useInView(0.1);
  return (
    <div
      ref={ref}
      className="relative pl-8 pb-10 transition-all duration-700"
      style={{
        opacity: inView ? 1 : 0,
        transform: inView ? "translateY(0)" : "translateY(24px)",
      }}
    >
      {/* Vertical line */}
      {!isLast && (
        <div
          className="absolute left-[5px] top-3 bottom-0 w-0.5"
          style={{ background: "linear-gradient(180deg, #F59E0B, oklch(0.75 0.16 70 / 0%))" }}
        />
      )}
      {/* Dot */}
      <div
        className="absolute left-0 top-1.5 w-3 h-3 rounded-full"
        style={{
          background: "#F59E0B",
          boxShadow: "0 0 0 4px oklch(0.75 0.16 70 / 20%)",
        }}
      />
      <div className="mb-1 flex flex-wrap items-baseline gap-2">
        <span
          style={{
            fontFamily: "var(--font-display)",
            fontSize: "1.05rem",
            fontWeight: 700,
            color: "oklch(0.89 0.01 250)",
          }}
        >
          {role}
        </span>
        <span
          className="skill-tag"
          style={{ fontSize: "0.65rem" }}
        >
          {period}
        </span>
      </div>
      <div className="mb-3 flex flex-wrap gap-2 items-center">
        <span style={{ fontFamily: "var(--font-body)", fontSize: "0.875rem", color: "#F59E0B", fontWeight: 500 }}>
          {company}
        </span>
        <span style={{ color: "oklch(0.89 0.01 250 / 40%)", fontSize: "0.75rem" }}>·</span>
        <span style={{ fontFamily: "var(--font-body)", fontSize: "0.8rem", color: "oklch(0.89 0.01 250 / 50%)" }}>
          {location}
        </span>
      </div>
      <ul className="space-y-1.5">
        {bullets.map((b, i) => (
          <li key={i} className="flex gap-2 items-start">
            <CheckCircle
              size={14}
              className="mt-0.5 flex-shrink-0"
              style={{ color: "#F59E0B", opacity: 0.7 }}
            />
            <span style={{ fontFamily: "var(--font-body)", fontSize: "0.85rem", color: "oklch(0.89 0.01 250 / 70%)", lineHeight: 1.6 }}>
              {b}
            </span>
          </li>
        ))}
      </ul>
    </div>
  );
}

function IncomeCard({ stream, index }: { stream: typeof engagementModels[0]; index: number }) {
  const { ref, inView } = useInView(0.1);
  const Icon = stream.icon;
  return (
    <div
      ref={ref}
      className="rounded-xl p-6 transition-all duration-700 group"
      style={{
        background: "oklch(0.17 0.02 250)",
        border: "1px solid oklch(1 0 0 / 8%)",
        opacity: inView ? 1 : 0,
        transform: inView ? "translateY(0)" : "translateY(32px)",
        transitionDelay: `${index * 80}ms`,
      }}
      onMouseEnter={(e) => {
        (e.currentTarget as HTMLDivElement).style.border = `1px solid ${stream.color}40`;
        (e.currentTarget as HTMLDivElement).style.transform = "translateY(-4px)";
      }}
      onMouseLeave={(e) => {
        (e.currentTarget as HTMLDivElement).style.border = "1px solid oklch(1 0 0 / 8%)";
        (e.currentTarget as HTMLDivElement).style.transform = "translateY(0)";
      }}
    >
      <div className="flex items-start gap-4 mb-4">
        <div
          className="p-2.5 rounded-lg flex-shrink-0"
          style={{ background: `${stream.color}18` }}
        >
          <Icon size={20} style={{ color: stream.color }} />
        </div>
        <div className="flex-1 min-w-0">
          <div className="flex flex-wrap items-center gap-2 mb-1">
            <h3
              style={{
                fontFamily: "var(--font-display)",
                fontSize: "1rem",
                fontWeight: 700,
                color: "oklch(0.89 0.01 250)",
              }}
            >
              {stream.title}
            </h3>
            <span
              className="text-xs px-2 py-0.5 rounded-full font-medium"
              style={{
                background: `${stream.color}20`,
                color: stream.color,
                fontFamily: "var(--font-mono)",
              }}
            >
              {stream.type}
            </span>
          </div>
          <div
            style={{
              fontFamily: "var(--font-mono)",
              fontSize: "0.8rem",
              color: stream.color,
              fontWeight: 500,
            }}
          >
            {stream.targetRate}
          </div>
        </div>
      </div>
      <p
        className="mb-4 leading-relaxed"
        style={{ fontFamily: "var(--font-body)", fontSize: "0.82rem", color: "oklch(0.89 0.01 250 / 65%)" }}
      >
        {stream.description}
      </p>
      <div className="flex flex-wrap gap-1.5 mb-4">
        {stream.platforms.map((p) => (
          <span key={p} className="skill-tag" style={{ fontSize: "0.65rem" }}>
            {p}
          </span>
        ))}
      </div>
      <div className="flex gap-4 text-xs" style={{ fontFamily: "var(--font-mono)" }}>
        <div>
          <span style={{ color: "oklch(0.89 0.01 250 / 40%)" }}>Effort: </span>
          <span style={{ color: "oklch(0.89 0.01 250 / 80%)" }}>{stream.effort}</span>
        </div>
        <div>
          <span style={{ color: "oklch(0.89 0.01 250 / 40%)" }}>Time to income: </span>
          <span style={{ color: "oklch(0.89 0.01 250 / 80%)" }}>{stream.timeToIncome}</span>
        </div>
      </div>
    </div>
  );
}

// ─── Main Page ───────────────────────────────────────────────────────────────

export default function Home() {
  const skillsRef = useInView(0.1);
  const aboutRef = useInView(0.1);
  const expRef = useInView(0.1);
  const cvRef = useInView(0.1);
  const incomeRef = useInView(0.1);
  const contactRef = useInView(0.1);

  const [activeTab, setActiveTab] = useState<"technical" | "soft">("technical");

  const technicalSkills = [
    { label: "AWS (EC2, IAM, Route 53, S3)", value: 90 },
    { label: "Microsoft 365 Administration", value: 88 },
    { label: "Google Workspace Administration", value: 85 },
    { label: "Identity & Access Management (IAM)", value: 88 },
    { label: "DNS Architecture & Management", value: 82 },
    { label: "Incident Response & Root Cause Analysis", value: 92 },
    { label: "Windows Server / Active Directory", value: 85 },
    { label: "Network Engineering & Troubleshooting", value: 80 },
  ];

  const softSkills = [
    { label: "Remote Async Communication", value: 95 },
    { label: "Technical Documentation", value: 92 },
    { label: "Stakeholder Management", value: 88 },
    { label: "Process Standardisation (SOPs)", value: 90 },
    { label: "Cross-functional Collaboration", value: 87 },
    { label: "Client Relationship Management", value: 85 },
  ];

  return (
    <div className="min-h-screen" style={{ background: "oklch(0.13 0.02 250)" }}>
      <NavBar />

      {/* ── HERO ─────────────────────────────────────────────────────────── */}
      <section
        id="hero"
        className="relative min-h-screen flex items-center overflow-hidden"
        style={{
          backgroundImage: `url(${HERO_BG})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        {/* Dark overlay */}
        <div
          className="absolute inset-0"
          style={{ background: "linear-gradient(135deg, oklch(0.10 0.02 250 / 90%) 0%, oklch(0.13 0.02 250 / 75%) 60%, oklch(0.10 0.02 250 / 85%) 100%)" }}
        />
        <div className="container relative z-10 pt-24 pb-16">
          <div className="max-w-3xl">
            {/* Eyebrow */}
            <div className="flex items-center gap-3 mb-6">
              <div className="h-px w-12" style={{ background: "#F59E0B" }} />
              <span
                style={{
                  fontFamily: "var(--font-mono)",
                  fontSize: "0.75rem",
                  color: "#F59E0B",
                  letterSpacing: "0.15em",
                  textTransform: "uppercase",
                }}
              >
                Available for Remote Roles · GMT+2
              </span>
            </div>
            {/* Name */}
            <h1
              className="mb-4 leading-tight"
              style={{
                fontFamily: "var(--font-display)",
                fontSize: "clamp(2.5rem, 6vw, 4.5rem)",
                fontWeight: 900,
                color: "oklch(0.95 0.01 250)",
              }}
            >
              Christopher<br />
              <span style={{ color: "#F59E0B" }}>Maarschalkerweerd</span>
            </h1>
            {/* Title */}
            <p
              className="mb-6 leading-relaxed"
              style={{
                fontFamily: "var(--font-body)",
                fontSize: "clamp(1rem, 2.5vw, 1.25rem)",
                color: "oklch(0.89 0.01 250 / 85%)",
                fontWeight: 300,
              }}
            >
              Cloud Infrastructure & IT Operations Engineer
              <span style={{ color: "#F59E0B" }}> · </span>
              AWS Certified
              <span style={{ color: "#F59E0B" }}> · </span>
              15+ Years Experience
            </p>
            {/* Summary */}
            <p
              className="mb-8 max-w-2xl leading-relaxed"
              style={{
                fontFamily: "var(--font-body)",
                fontSize: "0.95rem",
                color: "oklch(0.89 0.01 250 / 65%)",
                lineHeight: 1.8,
              }}
            >
              Specialising in remote cloud operations, AWS infrastructure management, and SaaS identity governance.
              Proven track record delivering for US-based clients from South Africa with full timezone overlap capability.
            </p>
            {/* CTAs */}
            <div className="flex flex-wrap gap-4">
              <a
                href="#cv"
                className="px-6 py-3 rounded font-medium text-sm transition-all duration-200"
                style={{
                  background: "#F59E0B",
                  color: "oklch(0.13 0.02 250)",
                  fontFamily: "var(--font-body)",
                }}
                onMouseEnter={(e) => (e.currentTarget.style.background = "#FBBF24")}
                onMouseLeave={(e) => (e.currentTarget.style.background = "#F59E0B")}
              >
                View Full CV
              </a>
              <a
                href="#income"
                className="px-6 py-3 rounded font-medium text-sm transition-all duration-200"
                style={{
                  background: "oklch(1 0 0 / 8%)",
                  color: "oklch(0.89 0.01 250)",
                  fontFamily: "var(--font-body)",
                  border: "1px solid oklch(1 0 0 / 15%)",
                }}
                onMouseEnter={(e) => {
                  (e.currentTarget as HTMLAnchorElement).style.background = "oklch(1 0 0 / 14%)";
                  (e.currentTarget as HTMLAnchorElement).style.borderColor = "#F59E0B60";
                }}
                onMouseLeave={(e) => {
                  (e.currentTarget as HTMLAnchorElement).style.background = "oklch(1 0 0 / 8%)";
                  (e.currentTarget as HTMLAnchorElement).style.borderColor = "oklch(1 0 0 / 15%)";
                }}
              >
                Income Opportunities
              </a>
            </div>
            {/* Badges */}
            <div className="flex flex-wrap gap-3 mt-8">
              {["AWS Solutions Architect", "AWS Cloud Practitioner", "Remote-Ready"].map((badge) => (
                <div
                  key={badge}
                  className="flex items-center gap-1.5 px-3 py-1.5 rounded-full"
                  style={{
                    background: "oklch(1 0 0 / 6%)",
                    border: "1px solid #F59E0B40",
                  }}
                >
                  <Star size={12} style={{ color: "#F59E0B" }} />
                  <span
                    style={{
                      fontFamily: "var(--font-mono)",
                      fontSize: "0.7rem",
                      color: "oklch(0.89 0.01 250 / 80%)",
                    }}
                  >
                    {badge}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
        {/* Scroll indicator */}
        <a
          href="#about"
          className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 transition-opacity duration-300"
          style={{ color: "oklch(0.89 0.01 250 / 40%)" }}
        >
          <span style={{ fontFamily: "var(--font-mono)", fontSize: "0.65rem", letterSpacing: "0.1em" }}>
            SCROLL
          </span>
          <ChevronDown size={16} className="animate-bounce" />
        </a>
      </section>

      {/* ── ABOUT ────────────────────────────────────────────────────────── */}
      <section id="about" className="py-24">
        <div className="container">
          <div
            ref={aboutRef.ref}
            className="transition-all duration-700"
            style={{ opacity: aboutRef.inView ? 1 : 0, transform: aboutRef.inView ? "translateY(0)" : "translateY(32px)" }}
          >
            <div className="flex items-start gap-4 mb-12">
              <div>
                <div className="flex items-center gap-3 mb-2">
                  <div className="h-px w-8" style={{ background: "#F59E0B" }} />
                  <span
                    style={{
                      fontFamily: "var(--font-mono)",
                      fontSize: "0.7rem",
                      color: "#F59E0B",
                      letterSpacing: "0.15em",
                      textTransform: "uppercase",
                    }}
                  >
                    01 / About
                  </span>
                </div>
                <h2
                  className="amber-underline"
                  style={{
                    fontFamily: "var(--font-display)",
                    fontSize: "clamp(1.8rem, 4vw, 2.8rem)",
                    fontWeight: 700,
                    color: "oklch(0.89 0.01 250)",
                  }}
                >
                  Professional Summary
                </h2>
              </div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
              <div>
                <p
                  className="mb-6 leading-relaxed"
                  style={{
                    fontFamily: "var(--font-body)",
                    fontSize: "1rem",
                    color: "oklch(0.89 0.01 250 / 75%)",
                    lineHeight: 1.9,
                  }}
                >
                  A results-driven AWS-certified Cloud Infrastructure and IT Operations Engineer with over 15 years of
                  experience designing, securing, and stabilising production environments across AWS and enterprise SaaS
                  platforms. Proven expertise in remote and fractional roles, delivering robust solutions for US-based
                  and international clients.
                </p>
                <p
                  className="mb-8 leading-relaxed"
                  style={{
                    fontFamily: "var(--font-body)",
                    fontSize: "1rem",
                    color: "oklch(0.89 0.01 250 / 75%)",
                    lineHeight: 1.9,
                  }}
                >
                  Adept at leveraging automation, Infrastructure as Code, and security best practices to build and
                  manage scalable, cost-effective, and resilient cloud infrastructure. A strong background in incident
                  response, access governance, and operational excellence — with a focus on enabling business continuity
                  and driving cloud adoption.
                </p>
                <div className="flex flex-wrap gap-2">
                  {[
                    "AWS EC2", "IAM", "Route 53", "S3", "Microsoft 365",
                    "Google Workspace", "RBAC", "Incident Response", "DNS", "Remote Operations",
                  ].map((tag) => (
                    <span key={tag} className="skill-tag">{tag}</span>
                  ))}
                </div>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {cvHighlights.map((h, i) => {
                  const Icon = h.icon;
                  return (
                    <div
                      key={i}
                      className="p-4 rounded-xl"
                      style={{
                        background: "oklch(0.17 0.02 250)",
                        border: "1px solid oklch(1 0 0 / 8%)",
                      }}
                    >
                      <div className="flex items-start gap-3">
                        <div
                          className="p-2 rounded-lg flex-shrink-0"
                          style={{ background: "#F59E0B18" }}
                        >
                          <Icon size={16} style={{ color: "#F59E0B" }} />
                        </div>
                        <div>
                          <div
                            style={{
                              fontFamily: "var(--font-body)",
                              fontSize: "0.82rem",
                              fontWeight: 600,
                              color: "oklch(0.89 0.01 250)",
                              lineHeight: 1.4,
                            }}
                          >
                            {h.label}
                          </div>
                          <div
                            style={{
                              fontFamily: "var(--font-body)",
                              fontSize: "0.72rem",
                              color: "oklch(0.89 0.01 250 / 50%)",
                              marginTop: "2px",
                            }}
                          >
                            {h.sub}
                          </div>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── SKILLS ───────────────────────────────────────────────────────── */}
      <section
        id="skills"
        className="py-24 relative overflow-hidden"
        style={{
          backgroundImage: `url(${SKILLS_BG})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div
          className="absolute inset-0"
          style={{ background: "oklch(0.11 0.02 250 / 92%)" }}
        />
        <div className="container relative z-10">
          <div
            ref={skillsRef.ref}
            className="transition-all duration-700"
            style={{ opacity: skillsRef.inView ? 1 : 0, transform: skillsRef.inView ? "translateY(0)" : "translateY(32px)" }}
          >
            <div className="mb-12">
              <div className="flex items-center gap-3 mb-2">
                <div className="h-px w-8" style={{ background: "#F59E0B" }} />
                <span
                  style={{
                    fontFamily: "var(--font-mono)",
                    fontSize: "0.7rem",
                    color: "#F59E0B",
                    letterSpacing: "0.15em",
                    textTransform: "uppercase",
                  }}
                >
                  02 / Skills
                </span>
              </div>
              <h2
                className="amber-underline"
                style={{
                  fontFamily: "var(--font-display)",
                  fontSize: "clamp(1.8rem, 4vw, 2.8rem)",
                  fontWeight: 700,
                  color: "oklch(0.89 0.01 250)",
                }}
              >
                Technical Competencies
              </h2>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              {/* Radar Chart */}
              <div>
                <h3
                  className="mb-6 text-center"
                  style={{
                    fontFamily: "var(--font-body)",
                    fontSize: "0.85rem",
                    color: "oklch(0.89 0.01 250 / 60%)",
                    letterSpacing: "0.1em",
                    textTransform: "uppercase",
                  }}
                >
                  Competency Radar
                </h3>
                <ResponsiveContainer width="100%" height={320}>
                  <RadarChart data={radarSkills}>
                    <PolarGrid stroke="oklch(1 0 0 / 10%)" />
                    <PolarAngleAxis
                      dataKey="subject"
                      tick={{
                        fill: "oklch(0.89 0.01 250 / 70%)",
                        fontSize: 11,
                        fontFamily: "DM Mono, monospace",
                      }}
                    />
                    <Radar
                      name="Proficiency"
                      dataKey="A"
                      stroke="#F59E0B"
                      fill="#F59E0B"
                      fillOpacity={0.15}
                      strokeWidth={2}
                    />
                  </RadarChart>
                </ResponsiveContainer>
              </div>

              {/* Skill Bars */}
              <div>
                {/* Tab toggle */}
                <div className="flex gap-2 mb-6">
                  {(["technical", "soft"] as const).map((tab) => (
                    <button
                      key={tab}
                      onClick={() => setActiveTab(tab)}
                      className="px-4 py-2 rounded text-sm font-medium transition-all duration-200"
                      style={{
                        fontFamily: "var(--font-body)",
                        background: activeTab === tab ? "#F59E0B" : "oklch(1 0 0 / 8%)",
                        color: activeTab === tab ? "oklch(0.13 0.02 250)" : "oklch(0.89 0.01 250 / 70%)",
                        border: "1px solid",
                        borderColor: activeTab === tab ? "#F59E0B" : "oklch(1 0 0 / 12%)",
                      }}
                    >
                      {tab === "technical" ? "Technical Skills" : "Professional Skills"}
                    </button>
                  ))}
                </div>
                <div>
                  {(activeTab === "technical" ? technicalSkills : softSkills).map((s, i) => (
                    <SkillBar key={s.label} label={s.label} value={s.value} delay={i * 80} />
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── EXPERIENCE ───────────────────────────────────────────────────── */}
      <section id="experience" className="py-24">
        <div className="container">
          <div
            ref={expRef.ref}
            className="transition-all duration-700"
            style={{ opacity: expRef.inView ? 1 : 0, transform: expRef.inView ? "translateY(0)" : "translateY(32px)" }}
          >
            <div className="mb-12">
              <div className="flex items-center gap-3 mb-2">
                <div className="h-px w-8" style={{ background: "#F59E0B" }} />
                <span
                  style={{
                    fontFamily: "var(--font-mono)",
                    fontSize: "0.7rem",
                    color: "#F59E0B",
                    letterSpacing: "0.15em",
                    textTransform: "uppercase",
                  }}
                >
                  03 / Experience
                </span>
              </div>
              <h2
                className="amber-underline"
                style={{
                  fontFamily: "var(--font-display)",
                  fontSize: "clamp(1.8rem, 4vw, 2.8rem)",
                  fontWeight: 700,
                  color: "oklch(0.89 0.01 250)",
                }}
              >
                Career Timeline
              </h2>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              {/* Timeline */}
              <div className="relative">
                <TimelineItem
                  role="Head of IT Operations (Fractional)"
                  company="TechRescue, Inc."
                  period="Oct 2025 – Present"
                  location="Remote · US-based"
                  bullets={[
                    "Led SaaS governance and identity management strategy for a U.S.-based technology services business.",
                    "Administered Microsoft 365 and Google Workspace tenants, managing RBAC, MFA enforcement, and access lifecycle controls.",
                    "Designed and implemented standardised onboarding/offboarding workflows for secure identity provisioning.",
                    "Developed structured technical SOPs to standardise operational support within a distributed BPO environment.",
                  ]}
                />
                <TimelineItem
                  role="Client Operations Coordinator / Technical Account Manager"
                  company="VOD Media Group"
                  period="Dec 2023 – Present"
                  location="South Africa"
                  bullets={[
                    "Operated and supported production AWS environments, ensuring EC2 workload stability, IAM governance, and DNS reliability.",
                    "Acted as the final technical escalation point, diagnosing and resolving complex system, network, and platform issues.",
                    "Performed IAM access reviews and enforced least-privilege access controls across AWS environments.",
                    "Maintained accurate technical documentation, system configurations, and change records.",
                  ]}
                />
                <TimelineItem
                  role="Client Support & Operations Consultant"
                  company="BroadVision Technologies"
                  period="Jan 2022 – Dec 2023"
                  location="South Africa"
                  bullets={[
                    "Supported and troubleshot client systems and application environments, identifying root causes of technical issues.",
                    "Conducted system, process, and configuration audits to identify gaps, inefficiencies, and stability risks.",
                    "Assisted with implementation, optimisation, and support of software solutions within existing infrastructure.",
                  ]}
                />
                <TimelineItem
                  role="Network Engineer / Client Support"
                  company="Mitakyo ICT Solutions"
                  period="Mar 2021 – Dec 2021"
                  location="Gauteng, South Africa"
                  bullets={[
                    "Supported business client environments through system monitoring, access management, and incident resolution.",
                    "Troubleshot network, server, and user access issues across Windows-based environments.",
                  ]}
                />
                <TimelineItem
                  role="Network Engineer / Client Support Coordinator"
                  company="Dial a Nerd"
                  period="Mar 2016 – Mar 2021"
                  location="Johannesburg, South Africa"
                  bullets={[
                    "Delivered ongoing technical support for multiple business environments using structured ticketing workflows.",
                    "Administered Windows Server environments, Active Directory, Group Policy, and Office 365 platforms.",
                  ]}
                />
                <TimelineItem
                  role="IT Systems Engineer / Client Support Lead"
                  company="Gentron Outsourced Services / St Andrews School"
                  period="Jul 2013 – Feb 2015"
                  location="Johannesburg, South Africa"
                  bullets={[
                    "Supported and maintained server, network, and end-user environments in an education setting.",
                    "Managed Active Directory, Group Policy, backups, and virtualised systems.",
                  ]}
                  isLast
                />
              </div>

              {/* Experience Bar Chart */}
              <div className="sticky top-24 self-start">
                <h3
                  className="mb-4 text-center"
                  style={{
                    fontFamily: "var(--font-body)",
                    fontSize: "0.85rem",
                    color: "oklch(0.89 0.01 250 / 60%)",
                    letterSpacing: "0.1em",
                    textTransform: "uppercase",
                  }}
                >
                  Years per Role
                </h3>
                <ResponsiveContainer width="100%" height={320}>
                  <BarChart
                    data={experienceData}
                    layout="vertical"
                    margin={{ top: 0, right: 20, left: 0, bottom: 0 }}
                  >
                    <XAxis
                      type="number"
                      tick={{ fill: "oklch(0.89 0.01 250 / 50%)", fontSize: 10, fontFamily: "DM Mono, monospace" }}
                      axisLine={false}
                      tickLine={false}
                    />
                    <YAxis
                      type="category"
                      dataKey="role"
                      width={160}
                      tick={{ fill: "oklch(0.89 0.01 250 / 65%)", fontSize: 10, fontFamily: "DM Mono, monospace" }}
                      axisLine={false}
                      tickLine={false}
                    />
                    <Tooltip
                      contentStyle={{
                        background: "oklch(0.17 0.02 250)",
                        border: "1px solid oklch(1 0 0 / 15%)",
                        borderRadius: "8px",
                        color: "oklch(0.89 0.01 250)",
                        fontFamily: "DM Mono, monospace",
                        fontSize: "12px",
                      }}
                      formatter={(value: number) => [`${value} yrs`, "Duration"]}
                    />
                    <Bar dataKey="years" radius={[0, 4, 4, 0]}>
                      {experienceData.map((entry, index) => (
                        <Cell key={`cell-${index}`} fill={entry.color} fillOpacity={0.8} />
                      ))}
                    </Bar>
                  </BarChart>
                </ResponsiveContainer>

                {/* Stats */}
                <div className="grid grid-cols-3 gap-4 mt-8">
                  {[
                    { value: "15+", label: "Years Experience" },
                    { value: "2", label: "AWS Certs" },
                    { value: "GMT+2", label: "Timezone" },
                  ].map((stat) => (
                    <div
                      key={stat.label}
                      className="text-center p-4 rounded-xl"
                      style={{ background: "oklch(0.17 0.02 250)", border: "1px solid oklch(1 0 0 / 8%)" }}
                    >
                      <div
                        style={{
                          fontFamily: "var(--font-display)",
                          fontSize: "1.5rem",
                          fontWeight: 700,
                          color: "#F59E0B",
                        }}
                      >
                        {stat.value}
                      </div>
                      <div
                        style={{
                          fontFamily: "var(--font-body)",
                          fontSize: "0.7rem",
                          color: "oklch(0.89 0.01 250 / 50%)",
                          marginTop: "2px",
                        }}
                      >
                        {stat.label}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── CV DOWNLOAD ──────────────────────────────────────────────────── */}
      <section
        id="cv"
        className="py-24"
        style={{ background: "oklch(0.15 0.02 250)" }}
      >
        <div className="container">
          <div
            ref={cvRef.ref}
            className="transition-all duration-700"
            style={{ opacity: cvRef.inView ? 1 : 0, transform: cvRef.inView ? "translateY(0)" : "translateY(32px)" }}
          >
            <div className="mb-12">
              <div className="flex items-center gap-3 mb-2">
                <div className="h-px w-8" style={{ background: "#F59E0B" }} />
                <span
                  style={{
                    fontFamily: "var(--font-mono)",
                    fontSize: "0.7rem",
                    color: "#F59E0B",
                    letterSpacing: "0.15em",
                    textTransform: "uppercase",
                  }}
                >
                  04 / CV
                </span>
              </div>
              <h2
                className="amber-underline"
                style={{
                  fontFamily: "var(--font-display)",
                  fontSize: "clamp(1.8rem, 4vw, 2.8rem)",
                  fontWeight: 700,
                  color: "oklch(0.89 0.01 250)",
                }}
              >
                Tailored for Remote Roles
              </h2>
            </div>

            {/* CV Summary Card */}
            <div
              className="rounded-2xl p-8 mb-8"
              style={{
                background: "oklch(0.17 0.02 250)",
                border: "1px solid oklch(1 0 0 / 10%)",
              }}
            >
              {/* Header */}
              <div className="border-b pb-6 mb-6" style={{ borderColor: "oklch(1 0 0 / 10%)" }}>
                <h3
                  style={{
                    fontFamily: "var(--font-display)",
                    fontSize: "1.6rem",
                    fontWeight: 700,
                    color: "oklch(0.89 0.01 250)",
                  }}
                >
                  Christopher Maarschalkerweerd
                </h3>
                <p
                  style={{
                    fontFamily: "var(--font-body)",
                    fontSize: "0.9rem",
                    color: "#F59E0B",
                    marginTop: "4px",
                  }}
                >
                  Remote Cloud Infrastructure & IT Operations Engineer · AWS Certified
                </p>
                <div
                  className="flex flex-wrap gap-4 mt-3"
                  style={{ fontFamily: "var(--font-mono)", fontSize: "0.75rem", color: "oklch(0.89 0.01 250 / 55%)" }}
                >
                  <span>+27 79 626 6254</span>
                  <span>chrismaarsch@gmail.com</span>
                  <span>Johannesburg, SA · GMT+2</span>
                </div>
              </div>

              {/* Professional Summary */}
              <div className="mb-6">
                <h4
                  className="mb-3"
                  style={{
                    fontFamily: "var(--font-mono)",
                    fontSize: "0.7rem",
                    color: "#F59E0B",
                    letterSpacing: "0.15em",
                    textTransform: "uppercase",
                  }}
                >
                  Professional Summary
                </h4>
                <p
                  style={{
                    fontFamily: "var(--font-body)",
                    fontSize: "0.875rem",
                    color: "oklch(0.89 0.01 250 / 70%)",
                    lineHeight: 1.8,
                  }}
                >
                  A results-driven and AWS-certified Cloud Infrastructure and IT Operations Engineer with over 15 years of
                  experience in designing, securing, and stabilising production environments across AWS and enterprise SaaS
                  platforms. Proven expertise in remote and fractional roles, delivering robust solutions for US-based and
                  international clients. Adept at leveraging automation, Infrastructure as Code (IaC), and security best
                  practices to build and manage scalable, cost-effective, and resilient cloud infrastructure. Strong background
                  in incident response, access governance, and operational excellence — with a focus on enabling business
                  continuity and driving cloud adoption.
                </p>
              </div>

              {/* Key Areas */}
              <div className="mb-6">
                <h4
                  className="mb-3"
                  style={{
                    fontFamily: "var(--font-mono)",
                    fontSize: "0.7rem",
                    color: "#F59E0B",
                    letterSpacing: "0.15em",
                    textTransform: "uppercase",
                  }}
                >
                  Top Performance Areas
                </h4>
                <div className="flex flex-wrap gap-2">
                  {[
                    "Cloud Infrastructure (AWS EC2, IAM, Route 53, S3)",
                    "SaaS Tenant Administration (M365, Google Workspace)",
                    "Identity & Access Governance (RBAC, IAM, Access Lifecycle)",
                    "Cloud Systems Integration & Automation",
                    "Production Incident Management & Root Cause Analysis",
                    "Networking & DNS Architecture",
                    "Security Controls & System Audits",
                    "Operational Documentation & Standardisation",
                    "Remote Async Communication",
                    "Fractional IT Leadership",
                  ].map((area) => (
                    <span key={area} className="skill-tag" style={{ fontSize: "0.68rem" }}>
                      {area}
                    </span>
                  ))}
                </div>
              </div>

              {/* Certifications */}
              <div>
                <h4
                  className="mb-3"
                  style={{
                    fontFamily: "var(--font-mono)",
                    fontSize: "0.7rem",
                    color: "#F59E0B",
                    letterSpacing: "0.15em",
                    textTransform: "uppercase",
                  }}
                >
                  Certifications
                </h4>
                <div className="flex flex-wrap gap-3">
                  {["AWS Certified Solutions Architect – Associate", "AWS Certified Cloud Practitioner"].map((cert) => (
                    <div
                      key={cert}
                      className="flex items-center gap-2 px-3 py-2 rounded-lg"
                      style={{
                        background: "#F59E0B15",
                        border: "1px solid #F59E0B40",
                      }}
                    >
                      <Award size={14} style={{ color: "#F59E0B" }} />
                      <span
                        style={{
                          fontFamily: "var(--font-body)",
                          fontSize: "0.8rem",
                          color: "oklch(0.89 0.01 250 / 85%)",
                        }}
                      >
                        {cert}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Remote-specific tailoring notes */}
            <div
              className="rounded-xl p-6"
              style={{
                background: "#F59E0B10",
                border: "1px solid #F59E0B30",
              }}
            >
              <h4
                className="mb-4 flex items-center gap-2"
                style={{
                  fontFamily: "var(--font-display)",
                  fontSize: "1rem",
                  fontWeight: 700,
                  color: "#F59E0B",
                }}
              >
                <TrendingUp size={16} />
                Remote-Optimisation Notes
              </h4>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {[
                  {
                    title: "Timezone Advantage",
                    detail: "GMT+2 provides 3–5 hour overlap with US East Coast and full overlap with European business hours — ideal for async-first remote teams.",
                  },
                  {
                    title: "Proven Remote Track Record",
                    detail: "Currently serving as fractional Head of IT Ops for a US-based client (TechRescue) — demonstrating the ability to lead remotely without in-person oversight.",
                  },
                  {
                    title: "Freelance Platform Presence",
                    detail: "Active profiles on Upwork, Freelancer, Contra, and LinkedIn — ready to be activated immediately for inbound client acquisition.",
                  },
                  {
                    title: "ATS-Optimised Keywords",
                    detail: "CV incorporates high-frequency ATS keywords: AWS, IAM, EC2, Route 53, RBAC, SaaS, incident response, cloud operations, remote, fractional.",
                  },
                ].map((note) => (
                  <div key={note.title} className="flex gap-3">
                    <CheckCircle size={16} className="mt-0.5 flex-shrink-0" style={{ color: "#F59E0B" }} />
                    <div>
                      <div
                        style={{
                          fontFamily: "var(--font-body)",
                          fontSize: "0.85rem",
                          fontWeight: 600,
                          color: "oklch(0.89 0.01 250)",
                        }}
                      >
                        {note.title}
                      </div>
                      <div
                        style={{
                          fontFamily: "var(--font-body)",
                          fontSize: "0.78rem",
                          color: "oklch(0.89 0.01 250 / 60%)",
                          marginTop: "2px",
                          lineHeight: 1.6,
                        }}
                      >
                        {note.detail}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── INCOME STREAMS ───────────────────────────────────────────────── */}
      <section id="income" className="py-24">
        <div className="container">
          <div
            ref={incomeRef.ref}
            className="transition-all duration-700"
            style={{ opacity: incomeRef.inView ? 1 : 0, transform: incomeRef.inView ? "translateY(0)" : "translateY(32px)" }}
          >
            <div className="mb-12">
              <div className="flex items-center gap-3 mb-2">
                <div className="h-px w-8" style={{ background: "#F59E0B" }} />
                <span
                  style={{
                    fontFamily: "var(--font-mono)",
                    fontSize: "0.7rem",
                    color: "#F59E0B",
                    letterSpacing: "0.15em",
                    textTransform: "uppercase",
                  }}
                >
                  05 / Income Streams
                </span>
              </div>
              <h2
                className="amber-underline mb-4"
                style={{
                  fontFamily: "var(--font-display)",
                  fontSize: "clamp(1.8rem, 4vw, 2.8rem)",
                  fontWeight: 700,
                  color: "oklch(0.89 0.01 250)",
                }}
              >
                Remote Income Opportunities
              </h2>
              <p
                style={{
                  fontFamily: "var(--font-body)",
                  fontSize: "0.95rem",
                  color: "oklch(0.89 0.01 250 / 60%)",
                  maxWidth: "600px",
                  lineHeight: 1.8,
                }}
              >
                Beyond the existing freelance engagement with Andrew, here are six income streams that align directly
                with your skill set and can be pursued in parallel to build a resilient, multi-source income.
              </p>
            </div>

            {/* Income distribution chart */}
            <div
              className="rounded-2xl p-6 mb-10"
              style={{
                background: "oklch(0.17 0.02 250)",
                border: "1px solid oklch(1 0 0 / 8%)",
              }}
            >
              <h3
                className="mb-4 text-center"
                style={{
                  fontFamily: "var(--font-body)",
                  fontSize: "0.85rem",
                  color: "oklch(0.89 0.01 250 / 60%)",
                  letterSpacing: "0.1em",
                  textTransform: "uppercase",
                }}
              >
                Recommended Income Portfolio Distribution
              </h3>
              <ResponsiveContainer width="100%" height={260}>
                <PieChart>
                  <Pie
                    data={incomeDistribution}
                    cx="50%"
                    cy="50%"
                    outerRadius={100}
                    innerRadius={55}
                    paddingAngle={3}
                    dataKey="value"
                  >
                    {incomeDistribution.map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={entry.fill} />
                    ))}
                  </Pie>
                  <Tooltip
                    contentStyle={{
                      background: "oklch(0.17 0.02 250)",
                      border: "1px solid oklch(1 0 0 / 15%)",
                      borderRadius: "8px",
                      color: "oklch(0.89 0.01 250)",
                      fontFamily: "DM Mono, monospace",
                      fontSize: "12px",
                    }}
                    formatter={(value: number) => [`${value}%`, "Portfolio Share"]}
                  />
                  <Legend
                    iconType="circle"
                    iconSize={8}
                    wrapperStyle={{
                      fontFamily: "DM Mono, monospace",
                      fontSize: "11px",
                      color: "oklch(0.89 0.01 250 / 70%)",
                    }}
                  />
                </PieChart>
              </ResponsiveContainer>
            </div>

            {/* Engagement model cards */}
            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 mb-12">
              {engagementModels.map((model, i) => (
                <IncomeCard key={model.title} stream={model} index={i} />
              ))}
            </div>

            {/* Job Platforms */}
            <div>
              <h3
                className="mb-6 flex items-center gap-3"
                style={{
                  fontFamily: "var(--font-display)",
                  fontSize: "1.3rem",
                  fontWeight: 700,
                  color: "oklch(0.89 0.01 250)",
                }}
              >
                <DollarSign size={20} style={{ color: "#F59E0B" }} />
                Where to Find Remote Roles
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                {jobPlatforms.map((platform) => (
                  <a
                    key={platform.name}
                    href={platform.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-start gap-3 p-4 rounded-xl transition-all duration-200 group"
                    style={{
                      background: "oklch(0.17 0.02 250)",
                      border: "1px solid oklch(1 0 0 / 8%)",
                      textDecoration: "none",
                    }}
                    onMouseEnter={(e) => {
                      (e.currentTarget as HTMLAnchorElement).style.borderColor = "#F59E0B40";
                      (e.currentTarget as HTMLAnchorElement).style.transform = "translateY(-2px)";
                    }}
                    onMouseLeave={(e) => {
                      (e.currentTarget as HTMLAnchorElement).style.borderColor = "oklch(1 0 0 / 8%)";
                      (e.currentTarget as HTMLAnchorElement).style.transform = "translateY(0)";
                    }}
                  >
                    <ExternalLink size={14} className="mt-0.5 flex-shrink-0" style={{ color: "#F59E0B" }} />
                    <div>
                      <div
                        style={{
                          fontFamily: "var(--font-body)",
                          fontSize: "0.85rem",
                          fontWeight: 600,
                          color: "oklch(0.89 0.01 250)",
                        }}
                      >
                        {platform.name}
                      </div>
                      <div
                        style={{
                          fontFamily: "var(--font-body)",
                          fontSize: "0.72rem",
                          color: "oklch(0.89 0.01 250 / 45%)",
                          marginTop: "2px",
                        }}
                      >
                        {platform.focus}
                      </div>
                    </div>
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── CONTACT ──────────────────────────────────────────────────────── */}
      <section
        id="contact"
        className="py-24"
        style={{ background: "oklch(0.15 0.02 250)" }}
      >
        <div className="container">
          <div
            ref={contactRef.ref}
            className="transition-all duration-700"
            style={{ opacity: contactRef.inView ? 1 : 0, transform: contactRef.inView ? "translateY(0)" : "translateY(32px)" }}
          >
            <div className="mb-12">
              <div className="flex items-center gap-3 mb-2">
                <div className="h-px w-8" style={{ background: "#F59E0B" }} />
                <span
                  style={{
                    fontFamily: "var(--font-mono)",
                    fontSize: "0.7rem",
                    color: "#F59E0B",
                    letterSpacing: "0.15em",
                    textTransform: "uppercase",
                  }}
                >
                  06 / Contact
                </span>
              </div>
              <h2
                className="amber-underline"
                style={{
                  fontFamily: "var(--font-display)",
                  fontSize: "clamp(1.8rem, 4vw, 2.8rem)",
                  fontWeight: 700,
                  color: "oklch(0.89 0.01 250)",
                }}
              >
                Get in Touch
              </h2>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              <div>
                <p
                  className="mb-8 leading-relaxed"
                  style={{
                    fontFamily: "var(--font-body)",
                    fontSize: "1rem",
                    color: "oklch(0.89 0.01 250 / 65%)",
                    lineHeight: 1.9,
                  }}
                >
                  Available for remote full-time roles, fractional IT leadership engagements, and cloud consulting
                  projects. GMT+2 timezone with flexible hours to accommodate US and European clients.
                </p>
                <div className="space-y-4">
                  {[
                    { icon: Mail, label: "Email", value: "chrismaarsch@gmail.com", href: "mailto:chrismaarsch@gmail.com" },
                    { icon: Phone, label: "Phone", value: "+27 79 626 6254", href: "tel:+27796266254" },
                    { icon: Linkedin, label: "LinkedIn", value: "linkedin.com/in/christopher-maarschalkerweerd", href: "https://linkedin.com" },
                  ].map((contact) => {
                    const Icon = contact.icon;
                    return (
                      <a
                        key={contact.label}
                        href={contact.href}
                        className="flex items-center gap-4 p-4 rounded-xl transition-all duration-200"
                        style={{
                          background: "oklch(0.17 0.02 250)",
                          border: "1px solid oklch(1 0 0 / 8%)",
                          textDecoration: "none",
                        }}
                        onMouseEnter={(e) => {
                          (e.currentTarget as HTMLAnchorElement).style.borderColor = "#F59E0B40";
                        }}
                        onMouseLeave={(e) => {
                          (e.currentTarget as HTMLAnchorElement).style.borderColor = "oklch(1 0 0 / 8%)";
                        }}
                      >
                        <div
                          className="p-2.5 rounded-lg"
                          style={{ background: "#F59E0B18" }}
                        >
                          <Icon size={18} style={{ color: "#F59E0B" }} />
                        </div>
                        <div>
                          <div
                            style={{
                              fontFamily: "var(--font-mono)",
                              fontSize: "0.65rem",
                              color: "oklch(0.89 0.01 250 / 40%)",
                              letterSpacing: "0.1em",
                              textTransform: "uppercase",
                            }}
                          >
                            {contact.label}
                          </div>
                          <div
                            style={{
                              fontFamily: "var(--font-body)",
                              fontSize: "0.875rem",
                              color: "oklch(0.89 0.01 250 / 85%)",
                            }}
                          >
                            {contact.value}
                          </div>
                        </div>
                      </a>
                    );
                  })}
                </div>
              </div>

              {/* Availability card */}
              <div
                className="rounded-2xl p-8 flex flex-col justify-between"
                style={{
                  background: "linear-gradient(135deg, oklch(0.17 0.02 250) 0%, oklch(0.20 0.03 250) 100%)",
                  border: "1px solid #F59E0B30",
                }}
              >
                <div>
                  <div
                    className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full mb-6"
                    style={{ background: "#22C55E20", border: "1px solid #22C55E40" }}
                  >
                    <div className="w-2 h-2 rounded-full animate-pulse" style={{ background: "#22C55E" }} />
                    <span
                      style={{
                        fontFamily: "var(--font-mono)",
                        fontSize: "0.7rem",
                        color: "#22C55E",
                        letterSpacing: "0.1em",
                      }}
                    >
                      AVAILABLE NOW
                    </span>
                  </div>
                  <h3
                    className="mb-4"
                    style={{
                      fontFamily: "var(--font-display)",
                      fontSize: "1.4rem",
                      fontWeight: 700,
                      color: "oklch(0.89 0.01 250)",
                    }}
                  >
                    Open to Remote Opportunities
                  </h3>
                  <p
                    className="mb-6"
                    style={{
                      fontFamily: "var(--font-body)",
                      fontSize: "0.875rem",
                      color: "oklch(0.89 0.01 250 / 60%)",
                      lineHeight: 1.8,
                    }}
                  >
                    Actively seeking remote full-time roles, fractional engagements, and cloud consulting contracts.
                    Immediate availability.
                  </p>
                  <div className="space-y-2 mb-8">
                    {[
                      "Full-time remote cloud/IT operations roles",
                      "Fractional Head of IT / IT Director",
                      "AWS cloud consulting & audits",
                      "M365 / Google Workspace retainer management",
                    ].map((item) => (
                      <div key={item} className="flex items-center gap-2">
                        <CheckCircle size={14} style={{ color: "#F59E0B", flexShrink: 0 }} />
                        <span
                          style={{
                            fontFamily: "var(--font-body)",
                            fontSize: "0.82rem",
                            color: "oklch(0.89 0.01 250 / 70%)",
                          }}
                        >
                          {item}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
                <a
                  href="mailto:chrismaarsch@gmail.com"
                  className="block text-center py-3 rounded-lg font-medium text-sm transition-all duration-200"
                  style={{
                    background: "#F59E0B",
                    color: "oklch(0.13 0.02 250)",
                    fontFamily: "var(--font-body)",
                    textDecoration: "none",
                  }}
                  onMouseEnter={(e) => (e.currentTarget.style.background = "#FBBF24")}
                  onMouseLeave={(e) => (e.currentTarget.style.background = "#F59E0B")}
                >
                  Send an Enquiry
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── FOOTER ───────────────────────────────────────────────────────── */}
      <footer
        className="py-8 border-t"
        style={{ borderColor: "oklch(1 0 0 / 8%)" }}
      >
        <div className="container flex flex-col sm:flex-row items-center justify-between gap-4">
          <span
            style={{
              fontFamily: "var(--font-display)",
              fontSize: "1rem",
              fontWeight: 700,
              color: "#F59E0B",
            }}
          >
            Christopher Maarschalkerweerd
          </span>
          <span
            style={{
              fontFamily: "var(--font-mono)",
              fontSize: "0.7rem",
              color: "oklch(0.89 0.01 250 / 35%)",
            }}
          >
            Cloud Infrastructure & IT Operations Engineer · AWS Certified · Remote-Ready
          </span>
        </div>
      </footer>
    </div>
  );
}

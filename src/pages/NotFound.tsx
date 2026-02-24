import { Link } from "wouter";

export default function NotFound() {
  return (
    <div
      className="min-h-screen flex flex-col items-center justify-center"
      style={{ background: "oklch(0.13 0.02 250)" }}
    >
      <h1
        style={{
          fontFamily: "var(--font-display)",
          fontSize: "4rem",
          fontWeight: 900,
          color: "#F59E0B",
        }}
      >
        404
      </h1>
      <p
        className="mb-8"
        style={{
          fontFamily: "var(--font-body)",
          fontSize: "1rem",
          color: "oklch(0.89 0.01 250 / 60%)",
        }}
      >
        Page not found
      </p>
      <Link
        href="/"
        className="px-6 py-3 rounded font-medium text-sm transition-all duration-200"
        style={{
          background: "#F59E0B",
          color: "oklch(0.13 0.02 250)",
          fontFamily: "var(--font-body)",
          textDecoration: "none",
        }}
      >
        Go Home
      </Link>
    </div>
  );
}

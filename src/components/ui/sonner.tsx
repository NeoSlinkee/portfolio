import { Toaster as SonnerToaster } from "sonner";

export function Toaster() {
  return (
    <SonnerToaster
      position="bottom-right"
      toastOptions={{
        style: {
          background: "oklch(0.17 0.02 250)",
          border: "1px solid oklch(1 0 0 / 15%)",
          color: "oklch(0.89 0.01 250)",
          fontFamily: "var(--font-body)",
        },
      }}
    />
  );
}

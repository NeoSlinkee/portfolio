import { createContext, useContext, ReactNode } from "react";

// Simple tooltip context - can be expanded later
interface TooltipContextType {
  delayDuration?: number;
}

const TooltipContext = createContext<TooltipContextType>({});

interface TooltipProviderProps {
  children: ReactNode;
  delayDuration?: number;
}

export function TooltipProvider({
  children,
  delayDuration = 200,
}: TooltipProviderProps) {
  return (
    <TooltipContext.Provider value={{ delayDuration }}>
      {children}
    </TooltipContext.Provider>
  );
}

export function useTooltip() {
  return useContext(TooltipContext);
}

// Basic tooltip components (placeholders - expand if needed)
export function Tooltip({ children }: { children: ReactNode }) {
  return <>{children}</>;
}

export function TooltipTrigger({ children }: { children: ReactNode }) {
  return <>{children}</>;
}

export function TooltipContent({ children }: { children: ReactNode }) {
  return <span className="sr-only">{children}</span>;
}

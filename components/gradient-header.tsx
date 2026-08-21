import { ReactNode } from "react";

interface GradientHeaderProps {
  title: string;
  subtitle?: string;
  children?: ReactNode;
}

export function GradientHeader({
  title,
  subtitle,
  children,
}: GradientHeaderProps) {
  return (
    <div className="relative overflow-hidden rounded-2xl bg-gradient-to-r from-blue-600 to-purple-600 p-8 text-white">
      <div className="relative z-10">
        <h1 className="text-4xl font-bold">{title}</h1>
        {subtitle && (
          <p className="mt-2 max-w-2xl text-lg text-blue-100">{subtitle}</p>
        )}
        {children}
      </div>
      <div className="absolute right-0 top-0 h-full w-64 bg-linear-to-l from-white/10 to-transparent"></div>
    </div>
  );
}

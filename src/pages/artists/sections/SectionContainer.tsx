import type { PropsWithChildren } from "react";

interface SectionContainerProps {
  id?: string;
  className?: string;
}

export default function SectionContainer({
  id,
  className,
  children,
}: PropsWithChildren<SectionContainerProps>) {
  return (
    <section id={id} className={`py-24 ${className ?? ""}`.trim()}>
      <div className="max-w-7xl mx-auto px-6">{children}</div>
    </section>
  );
}

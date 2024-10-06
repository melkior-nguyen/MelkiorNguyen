import React, { ReactNode, useRef } from "react";

interface TooltipProps {
  children: ReactNode;
  tooltip?: string;
}

const AppTooltip = ({ children, tooltip }: TooltipProps) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const tooltipRef = useRef<HTMLSpanElement>(null);

  const handleMouseEnter = () => {
    if (!containerRef.current || !tooltipRef.current) return;
    const containerWidth = containerRef.current?.offsetWidth;
    tooltipRef.current.style.left = `${containerWidth + 4}px`;
  };
  return (
    <div
      ref={containerRef}
      className="group relative inline-block"
      onMouseEnter={handleMouseEnter}
    >
      {children}
      <span
        ref={tooltipRef}
        className="invisible group-hover:visible opacity-0 group-hover:opacity-100 bg-[rgba(0,0,0,0.6)] text-appGray 
        border border-appGray rounded absolute top-full p-1 px-2 whitespace-nowrap transition-all delay-150
        flex items-center"
      >
        {tooltip}
      </span>
    </div>
  );
};

export default AppTooltip;

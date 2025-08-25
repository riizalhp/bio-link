import React from 'react';

export const Spacing = ({ size }: { size: number }) => <div className={`h-[${size}px] max-sm:h-[${size * 0.75}px]`} />;

export const LineDivider = () => <div className="w-full h-px bg-[#181818]" />;

export const ContentWrapper = ({ children, className = '' }: { children: React.ReactNode, className?: string }) => (
  <div className={`max-w-[600px] mx-auto ${className}`}>
    {children}
  </div>
);

export const Section = ({ children }: { children: React.ReactNode }) => (
    <div className="relative overflow-hidden px-6 sm:px-[5%]">
        {children}
    </div>
);

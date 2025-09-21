import React from 'react';

// Custom Button Component for VFD style
function VfdButton({ onClick, disabled, className, children }: { onClick: () => void; disabled?: boolean; className?: string; children: React.ReactNode }) {
  return (
    <button
      onClick={onClick}
      disabled={disabled}
      className={`
        h-14 rounded text-lg font-bold tracking-wider shadow-[0_3px_0_0_rgba(0,0,0,0.3),inset_0_1px_1px_rgba(255,255,255,0.2)] 
        border border-black/20 transition-all active:shadow-[0_1px_0_0_rgba(0,0,0,0.3),inset_0_2px_2px_rgba(0,0,0,0.2)] active:translate-y-0.5
        disabled:opacity-50 disabled:cursor-not-allowed disabled:shadow-[0_3px_0_0_rgba(0,0,0,0.2)]
        ${className}
      `}
    >
      {children}
    </button>
  );
}

export default VfdButton;

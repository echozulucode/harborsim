import React from 'react';

// Custom Status Indicator Component
function StatusIndicator({ icon, label, active, color }: { icon: React.ReactNode; label: string; active: boolean; color: string }) {
    return (
        <div className={`flex items-center gap-3 text-xl tracking-wider transition-opacity ${active ? `opacity-100 ${color}` : 'opacity-30 text-zinc-600'}`}>
            {icon}
            <span>{label}</span>
        </div>
    );
}

export default StatusIndicator;

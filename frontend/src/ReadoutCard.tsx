import React from 'react';

// Custom Readout Card for Motor values
function ReadoutCard({ label, value }: { label: string; value: string }) {
    return (
        <div className="bg-white p-4 rounded-lg text-center shadow-md border border-zinc-200">
            <h3 className="text-sm font-semibold uppercase tracking-wider text-zinc-500">{label}</h3>
            <p className="text-5xl font-bold text-zinc-800 mt-1">{value}</p>
        </div>
    );
}

export default ReadoutCard;

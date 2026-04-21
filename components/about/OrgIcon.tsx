import React from 'react';

export const OrgIcon = ({ type, tieColor }: { type: 'male' | 'female', tieColor: string }) => (
    <svg width="64" height="64" viewBox="0 0 56 56" fill="none" xmlns="http://www.w3.org/2000/svg" className="drop-shadow-sm">
        <path d="M28 32C16 32 10 44 10 56H46C46 44 40 32 28 32Z" fill="#1A1B2F" />
        <path d="M20 32L28 42L36 32Z" fill="white" />
        <path d="M26 36L28 50L30 36Z" fill={tieColor} />
        {type === 'female' ? (
            <>
                <path d="M16 24C16 10 22 6 28 6C34 6 40 10 40 24C40 34 44 40 44 40H12C12 40 16 34 16 24Z" fill="#1A1B2F" />
                <circle cx="28" cy="22" r="9" fill="white" />
            </>
        ) : (
            <>
                <circle cx="28" cy="18" r="12" fill="#1A1B2F" />
                <circle cx="28" cy="20" r="9" fill="white" />
            </>
        )}
    </svg>
);

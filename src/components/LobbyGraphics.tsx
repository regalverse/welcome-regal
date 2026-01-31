import React from 'react';

export const ZodiacWheel: React.FC<{ className?: string }> = ({ className = '' }) => (
  <svg
    viewBox="0 0 500 500"
    className={`w-full h-full opacity-10 ${className}`}
    xmlns="http://www.w3.org/2000/svg"
  >
    <circle cx="250" cy="250" r="240" fill="none" stroke="currentColor" strokeWidth="1" />
    <circle cx="250" cy="250" r="180" fill="none" stroke="currentColor" strokeWidth="0.5" strokeDasharray="4 4" />
    <path d="M250 10 L250 490 M10 250 L490 250" stroke="currentColor" strokeWidth="0.5" opacity="0.5" />
    {/* Abstract zodiac symbols placement */}
    {[0, 30, 60, 90, 120, 150, 180, 210, 240, 270, 300, 330].map((deg, i) => (
      <g key={i} transform={`rotate(${deg} 250 250)`}>
        <line x1="250" y1="10" x2="250" y2="30" stroke="currentColor" strokeWidth="1" />
        <circle cx="250" cy="40" r="2" fill="currentColor" />
      </g>
    ))}
  </svg>
);

export const ConstellationDecoration: React.FC<{ className?: string }> = ({ className = '' }) => (
  <svg
    viewBox="0 0 300 200"
    className={`w-full h-full opacity-20 ${className}`}
    xmlns="http://www.w3.org/2000/svg"
  >
    <circle cx="50" cy="150" r="3" fill="currentColor" />
    <circle cx="120" cy="100" r="2" fill="currentColor" />
    <circle cx="180" cy="120" r="2" fill="currentColor" />
    <circle cx="250" cy="50" r="4" fill="currentColor" />
    <path
      d="M50 150 L120 100 L180 120 L250 50"
      fill="none"
      stroke="currentColor"
      strokeWidth="0.5"
    />
  </svg>
);

export const MysticKnot: React.FC<{ className?: string }> = ({ className = '' }) => (
  <svg
    viewBox="0 0 100 100"
    className={`w-full h-full opacity-10 ${className}`}
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M50 10 C 20 10 10 40 50 80 C 90 40 80 10 50 10 Z"
      fill="none"
      stroke="currentColor"
      strokeWidth="1"
    />
    <circle cx="50" cy="35" r="20" fill="none" stroke="currentColor" strokeWidth="0.5" />
  </svg>
);

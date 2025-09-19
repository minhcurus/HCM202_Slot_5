"use client";

import { useEffect, useState } from 'react';

export function ColorfulBackground() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <>
      {/* Professional blue theme background */}
      <div className="fixed inset-0 -z-10">
        <div 
          className="absolute inset-0 bg-gradient-to-br from-slate-200/60 via-blue-100/80 to-indigo-200/60 animate-gradient-x"
          style={{
            backgroundSize: '400% 400%',
          }}
        />
        
        {/* Decorative color accents */}
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-blue-300/20 rounded-full blur-3xl animate-float" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-indigo-300/25 rounded-full blur-3xl animate-float" style={{ animationDelay: '4s' }} />
        <div className="absolute top-1/2 left-1/2 w-96 h-96 bg-slate-300/15 rounded-full blur-3xl animate-float" style={{ animationDelay: '8s' }} />
        <div className="absolute top-1/4 right-1/3 w-80 h-80 bg-blue-400/15 rounded-full blur-3xl animate-float" style={{ animationDelay: '2s' }} />
      </div>

      {/* Floating particles */}
      <div className="fixed inset-0 -z-10 pointer-events-none">
        {Array.from({ length: 15 }).map((_, i) => (
          <div
            key={i}
            className="absolute w-2 h-2 bg-white/20 rounded-full animate-float"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDuration: `${5 + Math.random() * 10}s`,
              animationDelay: `${Math.random() * 5}s`,
            }}
          />
        ))}
      </div>
    </>
  );
}
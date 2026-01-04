import React, { useState } from 'react';
import Starfield from './components/Starfield';
import PawTrail from './components/PawTrail';
import CommissionStatus from './components/CommissionStatus';
import LinkButton from './components/LinkButton';
import { CONFIG } from './constants';
import { Eye, EyeOff } from 'lucide-react';

const App: React.FC = () => {
  const [trailsEnabled, setTrailsEnabled] = useState(true);

  return (
    <div className="min-h-screen w-full relative text-white font-sans selection:bg-emerald-500/30">
      
      {/* Background Layer */}
      <Starfield />
      
      {/* Interactive Layer */}
      {trailsEnabled && <PawTrail />}

      {/* Main Content */}
      <main className="relative z-10 flex flex-col items-center w-full max-w-2xl mx-auto px-6 py-12 min-h-screen">
        
        {/* Toggle Trail Controls (Bottom Right Fixed) */}
        <button
          onClick={() => setTrailsEnabled(!trailsEnabled)}
          className="fixed bottom-4 right-4 z-50 p-2 rounded-full bg-black/40 border border-white/10 hover:bg-white/10 text-white/50 hover:text-white transition-all text-xs flex items-center gap-2 backdrop-blur-sm"
          title="Toggle Cursor Trail"
        >
          {trailsEnabled ? <Eye className="w-4 h-4"/> : <EyeOff className="w-4 h-4"/>}
        </button>

        {/* 1. Commission Status */}
        <div className="mb-10 animate-fade-in-down">
          <CommissionStatus status={CONFIG.status} />
        </div>

        {/* 2. Header Section (No Profile Image) */}
        <div className="flex flex-col items-center mb-16 text-center">
          <h1 className="text-5xl md:text-6xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-emerald-200 via-white to-purple-200 mb-4 drop-shadow-sm font-hand">
            {CONFIG.artistName}
          </h1>
          <p className="text-purple-200/80 font-light tracking-wide text-lg">
            {CONFIG.tagline}
          </p>
        </div>

        {/* 3. Links Section */}
        <div className="w-full flex flex-col items-center space-y-4 pb-20">
          {CONFIG.links.map((link) => (
            <LinkButton key={link.id} link={link} />
          ))}
        </div>

        {/* Footer */}
        <footer className="mt-auto text-white/20 text-sm font-light">
          © {new Date().getFullYear()} {CONFIG.artistName}
        </footer>

      </main>
    </div>
  );
};

export default App;
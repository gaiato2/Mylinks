import React from 'react';
import { LinkItem } from '../types';
import * as LucideIcons from 'lucide-react';

interface Props {
  link: LinkItem;
}

const LinkButton: React.FC<Props> = ({ link }) => {
  // Dynamically resolve icon from string name
  const IconComponent = (LucideIcons as any)[link.iconName] || LucideIcons.Link;

  return (
    <a
      href={link.url}
      target="_blank"
      rel="noopener noreferrer"
      className="
        group relative w-full max-w-md p-4 mb-4
        flex items-center justify-between
        bg-white/5 hover:bg-white/10
        border border-white/10 hover:border-emerald-400/50
        rounded-xl backdrop-blur-sm
        transition-all duration-300 ease-out
        hover:scale-[1.02] hover:shadow-[0_0_20px_rgba(52,211,153,0.15)]
        overflow-hidden
      "
    >
      {/* Hover Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-emerald-500/10 to-purple-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

      <div className="flex items-center z-10">
        <div className="p-2 rounded-lg bg-white/5 group-hover:bg-white/10 transition-colors mr-4">
           <IconComponent className="w-6 h-6 text-emerald-200 group-hover:text-emerald-100" />
        </div>
        <span className="text-emerald-50 font-medium text-lg tracking-wide group-hover:text-white transition-colors">
          {link.label}
        </span>
      </div>

      <LucideIcons.ArrowRight className="w-5 h-5 text-purple-300 opacity-50 group-hover:opacity-100 group-hover:translate-x-1 transition-all z-10" />
    </a>
  );
};

export default LinkButton;

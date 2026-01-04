import React from 'react';
import { CommissionStatus as StatusEnum } from '../types';
import { CheckCircle2, XCircle, Clock } from 'lucide-react';

interface Props {
  status: StatusEnum;
}

const CommissionStatus: React.FC<Props> = ({ status }) => {
  const getStatusConfig = () => {
    switch (status) {
      case StatusEnum.OPEN:
        return {
          color: 'text-emerald-300',
          bg: 'bg-emerald-900/40',
          border: 'border-emerald-500/50',
          icon: <CheckCircle2 className="w-4 h-4 mr-2" />,
          label: 'COMMISSIONS OPEN',
          shadow: 'shadow-[0_0_15px_rgba(16,185,129,0.4)]'
        };
      case StatusEnum.CLOSED:
        return {
          color: 'text-rose-300',
          bg: 'bg-rose-900/40',
          border: 'border-rose-500/50',
          icon: <XCircle className="w-4 h-4 mr-2" />,
          label: 'COMMISSIONS CLOSED',
          shadow: 'shadow-[0_0_10px_rgba(244,63,94,0.2)]'
        };
      case StatusEnum.WAITLIST:
        return {
          color: 'text-amber-300',
          bg: 'bg-amber-900/40',
          border: 'border-amber-500/50',
          icon: <Clock className="w-4 h-4 mr-2" />,
          label: 'WAITLIST ONLY',
          shadow: 'shadow-[0_0_10px_rgba(245,158,11,0.2)]'
        };
    }
  };

  const config = getStatusConfig();

  return (
    <div className={`
      inline-flex items-center px-4 py-2 rounded-full border backdrop-blur-md
      transition-all duration-300 ease-in-out transform hover:scale-105
      ${config.bg} ${config.border} ${config.shadow}
    `}>
      <span className={`${config.color} animate-pulse`}>
        {config.icon}
      </span>
      <span className={`text-xs font-bold tracking-widest ${config.color}`}>
        {config.label}
      </span>
    </div>
  );
};

export default CommissionStatus;

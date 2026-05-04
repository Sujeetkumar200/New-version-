import React, { useState } from 'react';
import { Wifi, Bluetooth, Zap, Moon, Battery, Database } from 'lucide-react';
import { Widget } from './Widget';
import { cn } from '../lib/utils';

interface ToggleProps {
  icon: React.ElementType;
  label: string;
  initial?: boolean;
}

const ToggleBadge: React.FC<ToggleProps> = ({ icon: Icon, label, initial = false }) => {
  const [active, setActive] = useState(initial);
  return (
    <button 
      onClick={() => setActive(!active)}
      className={cn(
        "flex flex-col items-center justify-center gap-2 p-3 rounded-2xl transition-all duration-300",
        active ? "bg-nothing-white text-nothing-black" : "bg-white/5 text-nothing-white hover:bg-white/10"
      )}
    >
      <Icon size={18} />
      <span className="text-[8px] font-display uppercase tracking-widest font-bold">{label}</span>
    </button>
  );
};

export const QuickSettingsWidget: React.FC = () => {
  return (
    <Widget span="medium">
      <div className="grid grid-cols-4 gap-3">
        <ToggleBadge icon={Wifi} label="Wifi" initial />
        <ToggleBadge icon={Bluetooth} label="BT" />
        <ToggleBadge icon={Zap} label="Zen" />
        <ToggleBadge icon={Moon} label="Night" />
      </div>
    </Widget>
  );
};

export const BatteryWidget: React.FC = () => {
  return (
    <Widget span="small" className="items-center">
      <div className="relative w-16 h-16 flex items-center justify-center">
        <svg className="w-full h-full -rotate-90">
          <circle 
            cx="32" cy="32" r="28" 
            fill="none" 
            stroke="currentColor" 
            strokeWidth="4" 
            className="text-white/5"
          />
          <circle 
            cx="32" cy="32" r="28" 
            fill="none" 
            stroke="currentColor" 
            strokeWidth="4" 
            strokeDasharray="176"
            strokeDashoffset="35"
            className="text-nothing-red"
          />
        </svg>
        <div className="absolute flex flex-col items-center">
          <Battery size={14} className="mb-0.5" />
          <span className="text-xs font-mono font-bold">80%</span>
        </div>
      </div>
    </Widget>
  );
};

export const StorageWidget: React.FC = () => {
  return (
    <Widget span="small" className="items-center">
       <div className="relative w-16 h-16 flex items-center justify-center">
        <svg className="w-full h-full -rotate-90">
          <circle 
            cx="32" cy="32" r="28" 
            fill="none" 
            stroke="currentColor" 
            strokeWidth="4" 
            className="text-white/5"
          />
          <circle 
            cx="32" cy="32" r="28" 
            fill="none" 
            stroke="currentColor" 
            strokeWidth="4" 
            strokeDasharray="176"
            strokeDashoffset="100"
            className="text-nothing-white"
          />
        </svg>
        <div className="absolute flex flex-col items-center">
          <Database size={14} className="mb-0.5" />
          <span className="text-xs font-mono font-bold">42%</span>
        </div>
      </div>
    </Widget>
  );
};

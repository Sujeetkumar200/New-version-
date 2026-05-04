import React from 'react';
import { Cloud, Sun, CloudRain, Wind } from 'lucide-react';
import { Widget } from './Widget';

export const WeatherWidget: React.FC = () => {
  return (
    <Widget span="medium" className="relative group overflow-hidden">
      <div className="flex justify-between items-end h-full">
        <div className="flex flex-col">
          <span className="text-4xl font-display font-bold">24°</span>
          <span className="text-sm font-display text-nothing-gray uppercase tracking-widest mt-1">London</span>
        </div>
        
        <div className="flex flex-col items-end">
          <Sun className="w-10 h-10 text-nothing-white mb-2" />
          <span className="text-[10px] font-mono uppercase text-nothing-gray tracking-tighter">Mostly Sunny</span>
        </div>
      </div>
      
      {/* Forecast dots visualizer */}
      <div className="absolute bottom-0 left-0 right-0 h-1 flex items-end opacity-20 group-hover:opacity-40 transition-opacity">
        {[22, 24, 25, 23, 22, 21, 20].map((temp, i) => (
          <div 
            key={i} 
            className="flex-1 bg-nothing-white" 
            style={{ height: `${(temp / 30) * 100}%`, margin: '0 1px' }}
          />
        ))}
      </div>
    </Widget>
  );
};

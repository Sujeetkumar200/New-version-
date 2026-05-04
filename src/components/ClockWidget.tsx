import React, { useState, useEffect } from 'react';
import { format } from 'date-fns';
import { motion } from 'motion/react';
import { Widget } from './Widget';

export const ClockWidget: React.FC<{ type?: 'digital' | 'analog' }> = ({ type = 'digital' }) => {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => setTime(new Date()), 1000);
    return () => clearInterval(timer);
  }, []);

  if (type === 'analog') {
    const seconds = time.getSeconds();
    const minutes = time.getMinutes();
    const hours = time.getHours();

    return (
      <Widget span="small" className="flex items-center justify-center p-0 overflow-hidden bg-nothing-white !text-nothing-black">
        <div className="relative w-24 h-24 rounded-full border-2 border-nothing-black/5 flex items-center justify-center">
          {/* Clock face dots */}
          {[...Array(12)].map((_, i) => (
             <div 
              key={i}
              className="absolute w-1 h-1 bg-nothing-black/20 rounded-full"
              style={{
                transform: `rotate(${i * 30}deg) translateY(-40px)`
              }}
             />
          ))}
          
          {/* Hands */}
          <motion.div 
            className="absolute w-0.5 h-10 bg-nothing-black origin-bottom rounded-full"
            style={{ 
              rotate: (hours % 12) * 30 + minutes * 0.5,
              bottom: '50%'
            }}
          />
          <motion.div 
            className="absolute w-0.5 h-12 bg-nothing-black origin-bottom rounded-full"
            style={{ 
              rotate: minutes * 6,
              bottom: '50%'
            }}
          />
          <motion.div 
            className="absolute w-px h-14 bg-nothing-red origin-bottom"
            style={{ 
              rotate: seconds * 6,
              bottom: '50%'
            }}
          />
          <div className="w-1.5 h-1.5 bg-nothing-black rounded-full z-10" />
        </div>
      </Widget>
    );
  }

  return (
    <Widget span="medium" className="flex flex-col items-center justify-center p-6">
      <div className="text-6xl font-mono tracking-tighter text-nothing-white flex items-center">
        {format(time, 'HH')}<span className="animate-pulse mx-1">:</span>{format(time, 'mm')}
      </div>
      <div className="mt-2 text-xs font-display uppercase tracking-[0.3em] text-nothing-gray">
        {format(time, 'eeee, MMM do')}
      </div>
    </Widget>
  );
};

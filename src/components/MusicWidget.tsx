import React, { useState } from 'react';
import { Play, Pause, SkipForward, SkipBack } from 'lucide-react';
import { motion } from 'motion/react';
import { Widget } from './Widget';

export const MusicWidget: React.FC = () => {
  const [isPlaying, setIsPlaying] = useState(false);

  return (
    <Widget span="large" className="bg-nothing-black/40">
      <div className="flex flex-col h-full justify-between">
        <div className="flex gap-6">
          <div className="w-24 h-24 rounded-2xl bg-gradient-to-br from-nothing-gray/20 to-nothing-red/20 flex items-center justify-center group-hover:scale-105 transition-transform duration-500 overflow-hidden relative">
             <div className="absolute inset-0 bg-dot-pattern opacity-30" />
             <div className="w-12 h-12 rounded-full border-2 border-white/20 animate-pulse" />
          </div>
          
          <div className="flex flex-col justify-center">
            <h3 className="text-2xl font-display font-bold tracking-tight">Nothing Special</h3>
            <p className="text-sm text-nothing-gray font-display mt-1">Industrial Dots</p>
          </div>
        </div>

        <div className="space-y-4">
          <div className="relative h-1 w-full bg-white/10 rounded-full overflow-hidden">
            <motion.div 
              className="absolute h-full bg-nothing-red"
              initial={{ width: '30%' }}
              animate={isPlaying ? { width: '100%' } : { width: '30%' }}
              transition={{ duration: 180, ease: 'linear' }}
            />
          </div>
          
          <div className="flex justify-between items-center">
            <span className="text-[10px] font-mono text-nothing-gray">1:24</span>
            <div className="flex items-center gap-8">
              <button className="text-nothing-white hover:text-nothing-red transition-colors">
                <SkipBack size={20} fill="currentColor" />
              </button>
              <button 
                onClick={() => setIsPlaying(!isPlaying)}
                className="w-14 h-14 rounded-full bg-nothing-white text-nothing-black flex items-center justify-center hover:scale-110 active:scale-95 transition-transform"
              >
                {isPlaying ? <Pause size={24} fill="currentColor" /> : <Play size={24} fill="currentColor" className="ml-1" />}
              </button>
              <button className="text-nothing-white hover:text-nothing-red transition-colors">
                <SkipForward size={20} fill="currentColor" />
              </button>
            </div>
            <span className="text-[10px] font-mono text-nothing-gray">-2:45</span>
          </div>
        </div>
      </div>
    </Widget>
  );
};

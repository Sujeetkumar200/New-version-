import React from 'react';
import { Search, Mic } from 'lucide-react';
import { Widget } from './Widget';

export const SearchBarWidget: React.FC = () => {
  return (
    <Widget span="medium" className="!rounded-full p-2 h-14 flex items-center px-6">
      <Search size={18} className="text-nothing-gray mr-4" />
      <input 
        type="text" 
        placeholder="Search everything..." 
        className="flex-1 bg-transparent border-none outline-none font-display text-sm text-nothing-white placeholder:text-nothing-gray/50 tracking-wider"
      />
      <button className="p-2 hover:bg-white/5 rounded-full transition-colors">
        <Mic size={18} className="text-nothing-white" />
      </button>
    </Widget>
  );
};

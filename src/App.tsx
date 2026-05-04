/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion } from 'motion/react';
import { ClockWidget } from './components/ClockWidget';
import { WeatherWidget } from './components/WeatherWidget';
import { MusicWidget } from './components/MusicWidget';
import { QuickSettingsWidget, BatteryWidget, StorageWidget } from './components/StatusWidgets';
import { SmartAssistantWidget } from './components/SmartAssistantWidget';
import { SearchBarWidget } from './components/SearchBarWidget';

export default function App() {
  return (
    <div className="min-h-screen relative flex flex-col items-center justify-start p-4 sm:p-8 overflow-x-hidden md:py-24">
      {/* Background visual elements */}
      <div className="fixed inset-0 dot-pattern pointer-events-none opacity-20" />
      <div className="fixed top-1/4 -right-20 w-64 h-64 bg-nothing-red/5 blur-[120px] rounded-full pointer-events-none" />
      <div className="fixed bottom-1/4 -left-20 w-80 h-80 bg-nothing-white/5 blur-[120px] rounded-full pointer-events-none" />

      <main className="w-full max-w-4xl z-10 flex flex-col gap-10">
        {/* Header */}
        <motion.header 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="flex justify-between items-end"
        >
          <div className="flex flex-col">
            <h1 className="text-4xl font-mono text-nothing-white tracking-tighter">
              NOTHING<span className="text-nothing-red">.</span>
            </h1>
            <p className="text-[10px] font-mono text-nothing-gray uppercase tracking-[0.4em] mt-2">
              Widgets Pro Edition
            </p>
          </div>
          <div className="text-right">
             <div className="text-xs font-mono text-nothing-gray uppercase tracking-widest">System v2.0</div>
             <div className="h-0.5 w-12 bg-nothing-red mt-1 ml-auto" />
          </div>
        </motion.header>

        {/* Search Bar */}
        <motion.div
           initial={{ opacity: 0, y: 20 }}
           animate={{ opacity: 1, y: 0 }}
           transition={{ delay: 0.2 }}
        >
          <SearchBarWidget />
        </motion.div>

        {/* Widgets Grid */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.98 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1], delay: 0.3 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6"
        >
          {/* Row 1 */}
          <ClockWidget />
          <WeatherWidget />
          
          {/* Row 2 */}
          <ClockWidget type="analog" />
          <QuickSettingsWidget />
          <BatteryWidget />
          <StorageWidget />
          
          {/* Row 3 - Large widgets */}
          <MusicWidget />
          <SmartAssistantWidget />
        </motion.div>

        {/* Footer info */}
        <motion.footer 
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.4 }}
          transition={{ delay: 1 }}
          className="mt-16 flex flex-col items-center gap-4 border-t border-white/5 pt-8"
        >
          <div className="flex gap-8 font-mono text-[10px] uppercase tracking-widest text-nothing-white">
            <span>Clean UI</span>
            <span>Dot Matrix Display</span>
            <span>Intelligent Core</span>
          </div>
          <p className="text-[8px] font-mono tracking-widest text-nothing-gray">
            © 2026 NOTHING DESIGN LABS / WEB PORT
          </p>
        </motion.footer>
      </main>
    </div>
  );
}


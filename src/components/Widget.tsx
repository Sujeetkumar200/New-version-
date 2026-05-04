import React from 'react';
import { motion } from 'motion/react';
import { cn } from '../lib/utils';

interface WidgetProps {
  children: React.ReactNode;
  className?: string;
  title?: string;
  span?: 'small' | 'medium' | 'large' | 'tall';
}

const spanClasses = {
  small: 'col-span-1 row-span-1 p-4',
  medium: 'col-span-2 row-span-1 p-6',
  large: 'col-span-2 row-span-2 p-8',
  tall: 'col-span-1 row-span-2 p-6',
};

export const Widget: React.FC<WidgetProps> = ({ children, className, title, span = 'small' }) => {
  return (
    <motion.div
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
      transition={{ type: 'spring', stiffness: 300, damping: 20 }}
      className={cn(
        'glass rounded-nothing flex flex-col relative overflow-hidden group',
        spanClasses[span],
        className
      )}
    >
      {title && (
        <span className="absolute top-4 left-6 text-[10px] font-mono uppercase tracking-[0.2em] text-nothing-gray opacity-50">
          {title}
        </span>
      )}
      <div className="flex-1 flex flex-col justify-center">
        {children}
      </div>
    </motion.div>
  );
};

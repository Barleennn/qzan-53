import { ReactNode } from 'react';
import { motion } from 'framer-motion';

interface PageTransitionProps {
  children: ReactNode;
}

export const PageTransition = ({ children }: PageTransitionProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, translateY: 20 }}
      animate={{ opacity: 1, translateY: 0 }}
      exit={{ opacity: 0, translateY: -20 }}
      transition={{ 
        duration: 0.2,
        ease: [0.43, 0.13, 0.23, 0.96] // Improved easing
      }}
      className="flex flex-1 flex-col w-full"
    >
      {children}
    </motion.div>
  );
};

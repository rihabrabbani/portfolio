'use client';
import { AnimatePresence } from 'framer-motion';

export default function ClientWrapper({ children }: { children: React.ReactNode }) {
  return <AnimatePresence>{children}</AnimatePresence>;
}

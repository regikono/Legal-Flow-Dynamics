import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';
import { sceneTransitions } from '@/lib/video/animations';
import { AlertTriangle } from 'lucide-react';

export const Scene8 = () => {
  const [phase, setPhase] = useState(0);

  useEffect(() => {
    const timers = [
      setTimeout(() => setPhase(1), 80),
      setTimeout(() => setPhase(2), 600),
      setTimeout(() => setPhase(3), 1500),
      setTimeout(() => setPhase(4), 2500),
      setTimeout(() => setPhase(5), 3300),
    ];
    return () => timers.forEach((t) => clearTimeout(t));
  }, []);

  return (
    <motion.div
      className="absolute inset-0 flex items-center justify-center bg-[#020617] overflow-hidden"
      initial="initial"
      animate="animate"
      exit="exit"
      variants={sceneTransitions.morphExpand}
    >
      {/* Aggressive radial backdrop with red/gold pulse for scroll-stopping feel */}
      <motion.div
        className="absolute inset-0"
        style={{
          background:
            'radial-gradient(ellipse at center, rgba(155,134,89,0.22) 0%, rgba(2,6,23,1) 70%)',
        }}
        animate={{ opacity: [0.7, 1, 0.7] }}
        transition={{ duration: 1.6, repeat: Infinity, ease: 'easeInOut' }}
      />

      {/* Drifting heavy gold blob */}
      <motion.div
        className="absolute rounded-full"
        style={{
          width: '60vw',
          height: '60vw',
          background:
            'radial-gradient(circle, rgba(155,134,89,0.40) 0%, rgba(2,6,23,0) 65%)',
          filter: 'blur(60px)',
          left: '-15vw',
          top: '-10vw',
        }}
        animate={{ x: [0, 40, 0], y: [0, 25, 0], scale: [1, 1.12, 1] }}
        transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut' }}
      />
      <motion.div
        className="absolute rounded-full"
        style={{
          width: '55vw',
          height: '55vw',
          background:
            'radial-gradient(circle, rgba(239,68,68,0.18) 0%, rgba(2,6,23,0) 65%)',
          filter: 'blur(70px)',
          right: '-15vw',
          bottom: '-15vw',
        }}
        animate={{ x: [0, -30, 0], y: [0, -25, 0], scale: [1, 1.1, 1] }}
        transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
      />

      <div className="absolute inset-0 tech-grid opacity-50" />

      {/* Diagonal slash lines for kinetic energy */}
      <motion.div
        className="absolute h-[0.18vw] bg-[#9B8659]/80 origin-left"
        style={{ width: '70vw', top: '14%', left: '-10%', transform: 'rotate(-6deg)' }}
        initial={{ scaleX: 0, opacity: 0 }}
        animate={phase >= 1 ? { scaleX: 1, opacity: 1 } : { scaleX: 0, opacity: 0 }}
        transition={{ duration: 0.45, ease: [0.16, 1, 0.3, 1] }}
      />
      <motion.div
        className="absolute h-[0.18vw] bg-[#3B82F6]/80 origin-right"
        style={{ width: '70vw', bottom: '14%', right: '-10%', transform: 'rotate(-6deg)' }}
        initial={{ scaleX: 0, opacity: 0 }}
        animate={phase >= 1 ? { scaleX: 1, opacity: 1 } : { scaleX: 0, opacity: 0 }}
        transition={{ duration: 0.45, delay: 0.08, ease: [0.16, 1, 0.3, 1] }}
      />

      <div className="relative z-10 w-full text-center px-[4vw]">
        {/* PARE badge - viral Facebook hook */}
        <motion.div
          className="inline-flex items-center justify-center gap-[1vw] mb-[2vw] rounded-full border-2 border-[#9B8659] bg-[#9B8659]/20"
          style={{ padding: '0.8vw 2vw' }}
          initial={{ opacity: 0, scale: 0.7, y: -20 }}
          animate={
            phase >= 1
              ? { opacity: 1, scale: [1, 1.06, 1], y: 0 }
              : { opacity: 0, scale: 0.7, y: -20 }
          }
          transition={
            phase >= 1
              ? {
                  opacity: { duration: 0.3 },
                  y: { duration: 0.3 },
                  scale: { duration: 1.1, repeat: Infinity, ease: 'easeInOut' },
                }
              : { duration: 0.3 }
          }
        >
          <AlertTriangle className="text-[#9B8659]" strokeWidth={2.5} style={{ width: '1.4vw', height: '1.4vw' }} />
          <span
            className="font-mono uppercase tracking-[0.4em] text-[#9B8659] font-bold"
            style={{ fontSize: '1.05vw' }}
          >
            PARE — Advogado, leia isto
          </span>
          <AlertTriangle className="text-[#9B8659]" strokeWidth={2.5} style={{ width: '1.4vw', height: '1.4vw' }} />
        </motion.div>

        {/* Hook headline - big, scroll-stopping */}
        <h1
          className="font-display font-black text-white leading-[1] tracking-tight"
          style={{ fontSize: '6.5vw' }}
        >
          <motion.span
            className="block"
            initial={{ opacity: 0, y: 50, filter: 'blur(14px)' }}
            animate={
              phase >= 2
                ? { opacity: 1, y: 0, filter: 'blur(0px)' }
                : { opacity: 0, y: 50, filter: 'blur(14px)' }
            }
            transition={{ duration: 0.55, ease: [0.16, 1, 0.3, 1] }}
          >
            Quanto seu escritório
          </motion.span>
          <motion.span
            className="block"
            initial={{ opacity: 0, y: 50, filter: 'blur(14px)' }}
            animate={
              phase >= 3
                ? { opacity: 1, y: 0, filter: 'blur(0px)' }
                : { opacity: 0, y: 50, filter: 'blur(14px)' }
            }
            transition={{ duration: 0.55, ease: [0.16, 1, 0.3, 1] }}
          >
            <span className="text-gradient-gold">deixou na mesa</span>
          </motion.span>
          <motion.span
            className="block"
            initial={{ opacity: 0, y: 50, filter: 'blur(14px)' }}
            animate={
              phase >= 4
                ? { opacity: 1, y: 0, filter: 'blur(0px)' }
                : { opacity: 0, y: 50, filter: 'blur(14px)' }
            }
            transition={{ duration: 0.55, ease: [0.16, 1, 0.3, 1] }}
          >
            este mês?
          </motion.span>
        </h1>

        {/* Sub-line that pulses to hold attention */}
        <motion.p
          className="font-display text-[#94A3B8] mt-[2vw]"
          style={{ fontSize: '1.7vw' }}
          initial={{ opacity: 0, y: 16 }}
          animate={
            phase >= 5
              ? { opacity: [0.7, 1, 0.7], y: 0 }
              : { opacity: 0, y: 16 }
          }
          transition={
            phase >= 5
              ? {
                  opacity: { duration: 1.6, repeat: Infinity, ease: 'easeInOut' },
                  y: { duration: 0.4 },
                }
              : { duration: 0.4 }
          }
        >
          Honorários esquecidos, cobranças perdidas,{' '}
          <span className="text-white font-semibold">fluxo de caixa no escuro.</span>
        </motion.p>
      </div>
    </motion.div>
  );
};

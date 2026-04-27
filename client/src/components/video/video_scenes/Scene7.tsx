import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';
import { sceneTransitions } from '@/lib/video/animations';
import logoSmall from '@assets/logo_small_wl_1777282434450.png';

export const Scene7 = () => {
  const [phase, setPhase] = useState(0);

  useEffect(() => {
    const timers = [
      setTimeout(() => setPhase(1), 100),
      setTimeout(() => setPhase(2), 700),
      setTimeout(() => setPhase(3), 1500),
      setTimeout(() => setPhase(4), 2400),
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
      variants={sceneTransitions.fadeBlur}
    >
      {/* Continuous breathing background */}
      <motion.div
        className="absolute inset-0"
        style={{
          background:
            'radial-gradient(ellipse at center, rgba(4,30,66,0.9) 0%, rgba(2,6,23,1) 70%)',
        }}
        animate={{ opacity: [0.85, 1, 0.85] }}
        transition={{ duration: 3.5, repeat: Infinity, ease: 'easeInOut' }}
      />

      {/* Two slow drifting gold + blue blobs */}
      <motion.div
        className="absolute rounded-full"
        style={{
          width: '55vw',
          height: '55vw',
          background:
            'radial-gradient(circle, rgba(155,134,89,0.35) 0%, rgba(2,6,23,0) 65%)',
          filter: 'blur(60px)',
          left: '-10vw',
          top: '-10vw',
        }}
        animate={{ x: [0, 30, 0], y: [0, 20, 0], scale: [1, 1.08, 1] }}
        transition={{ duration: 7, repeat: Infinity, ease: 'easeInOut' }}
      />
      <motion.div
        className="absolute rounded-full"
        style={{
          width: '55vw',
          height: '55vw',
          background:
            'radial-gradient(circle, rgba(59,130,246,0.3) 0%, rgba(2,6,23,0) 65%)',
          filter: 'blur(60px)',
          right: '-10vw',
          bottom: '-10vw',
        }}
        animate={{ x: [0, -25, 0], y: [0, -20, 0], scale: [1, 1.1, 1] }}
        transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut' }}
      />

      {/* Subtle tech grid */}
      <div className="absolute inset-0 tech-grid opacity-40" />

      {/* Top accent line drawing */}
      <motion.div
        className="absolute bg-gradient-to-r from-transparent via-[#9B8659] to-transparent origin-center"
        style={{ height: '0.12vw', width: '60vw', top: '18%' }}
        initial={{ scaleX: 0, opacity: 0 }}
        animate={phase >= 1 ? { scaleX: 1, opacity: 0.8 } : { scaleX: 0, opacity: 0 }}
        transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
      />
      <motion.div
        className="absolute bg-gradient-to-r from-transparent via-[#3B82F6] to-transparent origin-center"
        style={{ height: '0.12vw', width: '60vw', bottom: '18%' }}
        initial={{ scaleX: 0, opacity: 0 }}
        animate={phase >= 1 ? { scaleX: 1, opacity: 0.6 } : { scaleX: 0, opacity: 0 }}
        transition={{ duration: 0.7, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
      />

      <div className="relative z-10 w-full text-center px-[5vw]">
        {/* Logo (the small white/gold attached logo, sized up as the hero) */}
        <motion.div
          className="flex justify-center mb-[2.5vw]"
          initial={{ opacity: 0, scale: 0.7, y: -10 }}
          animate={
            phase >= 1
              ? { opacity: 1, scale: 1, y: 0 }
              : { opacity: 0, scale: 0.7, y: -10 }
          }
          transition={{ type: 'spring', stiffness: 280, damping: 22 }}
        >
          <motion.img
            src={logoSmall}
            alt="Advocates"
            className="object-contain drop-shadow-2xl"
            style={{ height: '6vw' }}
            animate={
              phase >= 2
                ? { y: [0, -4, 0], scale: [1, 1.02, 1] }
                : {}
            }
            transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut' }}
          />
        </motion.div>

        {/* Headline */}
        <h2
          className="font-display font-black text-white leading-[1.05] tracking-tight"
          style={{ fontSize: '6vw' }}
        >
          <motion.span
            className="block"
            initial={{ opacity: 0, y: 30, filter: 'blur(10px)' }}
            animate={
              phase >= 2
                ? { opacity: 1, y: 0, filter: 'blur(0px)' }
                : { opacity: 0, y: 30, filter: 'blur(10px)' }
            }
            transition={{ duration: 0.55, ease: [0.16, 1, 0.3, 1] }}
          >
            Comece hoje com o
          </motion.span>
          <motion.span
            className="block"
            initial={{ opacity: 0, y: 30, filter: 'blur(10px)' }}
            animate={
              phase >= 3
                ? { opacity: 1, y: 0, filter: 'blur(0px)' }
                : { opacity: 0, y: 30, filter: 'blur(10px)' }
            }
            transition={{ duration: 0.55, ease: [0.16, 1, 0.3, 1] }}
          >
            <span className="text-gradient-gold">Associado</span>{' '}
            <span className="text-white">— </span>
            <span className="text-gradient-blue">grátis.</span>
          </motion.span>
        </h2>

        {/* Subline */}
        <motion.p
          className="font-display text-[#94A3B8]"
          style={{ fontSize: '1.7vw', marginTop: '1.5vw' }}
          initial={{ opacity: 0, y: 14 }}
          animate={phase >= 4 ? { opacity: 1, y: 0 } : { opacity: 0, y: 14 }}
          transition={{ duration: 0.5, ease: 'circOut' }}
        >
          Workspace jurídico, financeiro e Agente IA{' '}
          <span className="text-white font-semibold">no mesmo lugar.</span>
        </motion.p>

        {/* Pulsing CTA-style chip (visual only, NOT a button) */}
        <motion.div
          className="inline-flex items-center justify-center gap-[1.2vw] mt-[3vw] rounded-full border border-[#9B8659]/60 bg-[#9B8659]/15"
          style={{ padding: '1.2vw 2.5vw' }}
          initial={{ opacity: 0, scale: 0.9, y: 16 }}
          animate={
            phase >= 4
              ? { opacity: 1, scale: [1, 1.04, 1], y: 0 }
              : { opacity: 0, scale: 0.9, y: 16 }
          }
          transition={
            phase >= 4
              ? {
                  opacity: { duration: 0.4 },
                  y: { duration: 0.4 },
                  scale: { duration: 1.6, repeat: Infinity, ease: 'easeInOut' },
                }
              : { duration: 0.4 }
          }
        >
          <motion.div
            className="bg-[#9B8659] rounded-full"
            style={{ width: '0.9vw', height: '0.9vw' }}
            animate={{ scale: [1, 1.6, 1], opacity: [0.6, 1, 0.6] }}
            transition={{ duration: 1.2, repeat: Infinity, ease: 'easeInOut' }}
          />
          <span
            className="font-display font-bold text-white uppercase tracking-[0.25em]"
            style={{ fontSize: '1.4vw' }}
          >
            advocates.com.br
          </span>
        </motion.div>

        {/* Footer chips */}
        <motion.div
          className="flex items-center justify-center gap-[2vw] mt-[2vw]"
          initial={{ opacity: 0, y: 12 }}
          animate={phase >= 5 ? { opacity: 1, y: 0 } : { opacity: 0, y: 12 }}
          transition={{ duration: 0.5, ease: 'circOut' }}
        >
          <span
            className="font-mono text-[#94A3B8] uppercase tracking-[0.25em]"
            style={{ fontSize: '0.95vw' }}
          >
            Sem mensalidade
          </span>
          <span
            className="bg-[#9B8659]/60 rounded-full"
            style={{ width: '0.4vw', height: '0.4vw' }}
          />
          <span
            className="font-mono text-[#94A3B8] uppercase tracking-[0.25em]"
            style={{ fontSize: '0.95vw' }}
          >
            Cancele quando quiser
          </span>
          <span
            className="bg-[#9B8659]/60 rounded-full"
            style={{ width: '0.4vw', height: '0.4vw' }}
          />
          <span
            className="font-mono text-[#94A3B8] uppercase tracking-[0.25em]"
            style={{ fontSize: '0.95vw' }}
          >
            Desktop e mobile
          </span>
        </motion.div>
      </div>
    </motion.div>
  );
};

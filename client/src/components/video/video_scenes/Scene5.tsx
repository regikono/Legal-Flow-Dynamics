import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';
import { sceneTransitions } from '@/lib/video/animations';
import logoSmall from '@assets/logo_w_1777283278719.png';

export const Scene5 = () => {
  const [phase, setPhase] = useState(0);

  useEffect(() => {
    const timers = [
      setTimeout(() => setPhase(1), 150),
      setTimeout(() => setPhase(2), 800),
      setTimeout(() => setPhase(3), 1700),
      setTimeout(() => setPhase(4), 2700),
    ];
    return () => timers.forEach((t) => clearTimeout(t));
  }, []);

  return (
    <motion.div
      className="absolute inset-0 flex items-center justify-center bg-[#020617] overflow-hidden tech-grid"
      initial="initial"
      animate="animate"
      exit="exit"
      variants={sceneTransitions.clipPolygon}
    >
      {/* Pulsing background gold gradient */}
      <motion.div
        className="absolute rounded-full"
        style={{
          width: '70vw',
          height: '70vw',
          background:
            'radial-gradient(circle, rgba(155,134,89,0.35) 0%, rgba(4,30,66,0) 60%)',
          left: '15vw',
          top: '-15vw',
          filter: 'blur(40px)',
        }}
        animate={{ scale: [1, 1.15, 1], opacity: [0.7, 1, 0.7] }}
        transition={{ duration: 2.4, repeat: Infinity, ease: 'easeInOut' }}
      />

      {/* Drifting accent blue blob */}
      <motion.div
        className="absolute rounded-full"
        style={{
          width: '40vw',
          height: '40vw',
          background:
            'radial-gradient(circle, rgba(59,130,246,0.25) 0%, rgba(2,6,23,0) 70%)',
          right: '-10vw',
          bottom: '-10vw',
          filter: 'blur(60px)',
        }}
        animate={{ x: [0, -40, 0], y: [0, -20, 0] }}
        transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
      />

      {/* Fast diagonal lines for energetic feel */}
      <motion.div
        className="absolute h-[0.15vw] bg-[#9B8659]/70 origin-left"
        style={{
          width: '60vw',
          top: '20%',
          left: '-10%',
          transform: 'rotate(-8deg)',
        }}
        initial={{ scaleX: 0, opacity: 0 }}
        animate={phase >= 1 ? { scaleX: 1, opacity: 1 } : { scaleX: 0, opacity: 0 }}
        transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
      />
      <motion.div
        className="absolute h-[0.15vw] bg-[#3B82F6]/70 origin-right"
        style={{
          width: '60vw',
          bottom: '22%',
          right: '-10%',
          transform: 'rotate(-8deg)',
        }}
        initial={{ scaleX: 0, opacity: 0 }}
        animate={phase >= 1 ? { scaleX: 1, opacity: 1 } : { scaleX: 0, opacity: 0 }}
        transition={{ duration: 0.5, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
      />

      <div className="relative z-10 w-full text-center px-[4vw]">
        {/* Small logo header */}
        <motion.div
          className="flex justify-center mb-[2vw]"
          initial={{ opacity: 0, y: -10 }}
          animate={phase >= 1 ? { opacity: 1, y: 0 } : { opacity: 0, y: -10 }}
          transition={{ duration: 0.4, ease: 'circOut' }}
        >
          <img
            src={logoSmall}
            alt="Advocates"
            className="object-contain"
            style={{ height: '2.5vw', opacity: 0.85 }}
          />
        </motion.div>

        {/* Attention badge */}
        <motion.div
          className="inline-flex items-center justify-center gap-[1vw] mb-[2vw]"
          initial={{ opacity: 0, scale: 0.85 }}
          animate={phase >= 1 ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.85 }}
          transition={{ type: 'spring', stiffness: 380, damping: 22 }}
        >
          <motion.div
            className="bg-[#9B8659] rounded-full"
            style={{ width: '0.8vw', height: '0.8vw' }}
            animate={{ scale: [1, 1.6, 1], opacity: [0.6, 1, 0.6] }}
            transition={{ duration: 1.1, repeat: Infinity, ease: 'easeInOut' }}
          />
          <span
            className="font-mono uppercase tracking-[0.4em] text-[#9B8659]"
            style={{ fontSize: '1vw' }}
          >
            Atenção, advogado
          </span>
          <motion.div
            className="bg-[#9B8659] rounded-full"
            style={{ width: '0.8vw', height: '0.8vw' }}
            animate={{ scale: [1, 1.6, 1], opacity: [0.6, 1, 0.6] }}
            transition={{ duration: 1.1, repeat: Infinity, ease: 'easeInOut', delay: 0.3 }}
          />
        </motion.div>

        {/* Main hook */}
        <h1
          className="font-display font-black text-white leading-[1.05] tracking-tight"
          style={{ fontSize: '6vw' }}
        >
          <motion.span
            className="block"
            initial={{ opacity: 0, y: 40, filter: 'blur(12px)' }}
            animate={
              phase >= 2
                ? { opacity: 1, y: 0, filter: 'blur(0px)' }
                : { opacity: 0, y: 40, filter: 'blur(12px)' }
            }
            transition={{ duration: 0.55, ease: [0.16, 1, 0.3, 1] }}
          >
            Seu escritório ainda{' '}
            <span className="text-gradient-gold">opera</span>
          </motion.span>
          <motion.span
            className="block"
            initial={{ opacity: 0, y: 40, filter: 'blur(12px)' }}
            animate={
              phase >= 3
                ? { opacity: 1, y: 0, filter: 'blur(0px)' }
                : { opacity: 0, y: 40, filter: 'blur(12px)' }
            }
            transition={{ duration: 0.55, ease: [0.16, 1, 0.3, 1] }}
          >
            com tudo <span className="text-gradient-blue">espalhado?</span>
          </motion.span>
        </h1>

        {/* Sub line that pulses to hold attention */}
        <motion.p
          className="font-display text-[#94A3B8]"
          style={{ fontSize: '1.7vw', marginTop: '2vw' }}
          initial={{ opacity: 0, y: 16 }}
          animate={
            phase >= 4
              ? { opacity: [0.7, 1, 0.7], y: 0 }
              : { opacity: 0, y: 16 }
          }
          transition={
            phase >= 4
              ? { opacity: { duration: 1.6, repeat: Infinity, ease: 'easeInOut' }, y: { duration: 0.4 } }
              : { duration: 0.4 }
          }
        >
          Documentos, financeiro, processos e equipe —{' '}
          <span className="text-white font-semibold">tudo desconectado.</span>
        </motion.p>
      </div>
    </motion.div>
  );
};

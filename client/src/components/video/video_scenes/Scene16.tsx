import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';
import { sceneTransitions } from '@/lib/video/animations';
import { Search, Clock, AlertOctagon, ShieldCheck } from 'lucide-react';
import logoW from '@assets/logo_w_1777283278719.png';

const PILLARS = [
  { icon: Search, label: 'Resume autos' },
  { icon: Clock, label: 'Aponta prazos' },
  { icon: AlertOctagon, label: 'Sinaliza riscos' },
];

export const Scene16 = () => {
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
            'radial-gradient(ellipse at center, rgba(4,30,66,0.92) 0%, rgba(2,6,23,1) 70%)',
        }}
        animate={{ opacity: [0.85, 1, 0.85] }}
        transition={{ duration: 3.5, repeat: Infinity, ease: 'easeInOut' }}
      />

      {/* Two slow drifting blobs */}
      <motion.div
        className="absolute rounded-full"
        style={{
          width: '60vw',
          height: '60vw',
          background:
            'radial-gradient(circle, rgba(155,134,89,0.42) 0%, rgba(2,6,23,0) 65%)',
          filter: 'blur(60px)',
          left: '-15vw',
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
            'radial-gradient(circle, rgba(59,130,246,0.30) 0%, rgba(2,6,23,0) 65%)',
          filter: 'blur(60px)',
          right: '-10vw',
          bottom: '-10vw',
        }}
        animate={{ x: [0, -25, 0], y: [0, -20, 0], scale: [1, 1.1, 1] }}
        transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut' }}
      />

      <div className="absolute inset-0 tech-grid opacity-40" />

      {/* Top + bottom accent lines */}
      <motion.div
        className="absolute bg-gradient-to-r from-transparent via-[#9B8659] to-transparent origin-center"
        style={{ height: '0.12vw', width: '60vw', top: '14%' }}
        initial={{ scaleX: 0, opacity: 0 }}
        animate={phase >= 1 ? { scaleX: 1, opacity: 0.85 } : { scaleX: 0, opacity: 0 }}
        transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
      />
      <motion.div
        className="absolute bg-gradient-to-r from-transparent via-[#3B82F6] to-transparent origin-center"
        style={{ height: '0.12vw', width: '60vw', bottom: '14%' }}
        initial={{ scaleX: 0, opacity: 0 }}
        animate={phase >= 1 ? { scaleX: 1, opacity: 0.6 } : { scaleX: 0, opacity: 0 }}
        transition={{ duration: 0.7, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
      />

      {/* Pulsing radial highlight behind the lupa logo */}
      <motion.div
        className="absolute rounded-full pointer-events-none"
        style={{
          width: '22vw',
          height: '22vw',
          background:
            'radial-gradient(circle, rgba(155,134,89,0.55) 0%, rgba(155,134,89,0) 70%)',
          filter: 'blur(20px)',
          top: '18%',
          left: '50%',
          transform: 'translateX(-50%)',
        }}
        animate={{ scale: [1, 1.18, 1], opacity: [0.55, 0.95, 0.55] }}
        transition={{ duration: 2.6, repeat: Infinity, ease: 'easeInOut' }}
      />

      <div className="relative z-10 w-full text-center px-[5vw]">
        {/* Lupa lockup: magnifying icon + Advocates logo, centered */}
        <motion.div
          className="flex items-center justify-center gap-[1.4vw] mb-[1.6vw]"
          initial={{ opacity: 0, scale: 0.7, y: -10 }}
          animate={
            phase >= 1
              ? { opacity: 1, scale: 1, y: 0 }
              : { opacity: 0, scale: 0.7, y: -10 }
          }
          transition={{ type: 'spring', stiffness: 280, damping: 22 }}
        >
          <motion.div
            className="flex items-center justify-center rounded-full bg-[#9B8659] border-2 border-white/20"
            style={{
              width: '5vw',
              height: '5vw',
              boxShadow: '0 0 30px rgba(155,134,89,0.85)',
            }}
            animate={
              phase >= 2
                ? { scale: [1, 1.06, 1], rotate: [-6, 6, -6] }
                : {}
            }
            transition={{
              scale: { duration: 1.6, repeat: Infinity, ease: 'easeInOut' },
              rotate: { duration: 3, repeat: Infinity, ease: 'easeInOut' },
            }}
          >
            <Search
              className="text-white"
              strokeWidth={2.6}
              style={{ width: '2.6vw', height: '2.6vw' }}
            />
          </motion.div>
          <motion.img
            src={logoW}
            alt="Advocates"
            className="object-contain drop-shadow-2xl"
            style={{ height: '4vw' }}
            animate={
              phase >= 2
                ? { y: [0, -3, 0] }
                : {}
            }
            transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut' }}
          />
        </motion.div>

        {/* Eyebrow */}
        <motion.div
          className="inline-flex items-center justify-center gap-[0.8vw] mb-[1.4vw] rounded-full border border-[#9B8659]/50 bg-[#9B8659]/10"
          style={{ padding: '0.55vw 1.3vw' }}
          initial={{ opacity: 0, scale: 0.85 }}
          animate={
            phase >= 1
              ? { opacity: 1, scale: 1 }
              : { opacity: 0, scale: 0.85 }
          }
          transition={{ type: 'spring', stiffness: 360, damping: 22 }}
        >
          <motion.div
            className="bg-[#9B8659] rounded-full"
            style={{ width: '0.65vw', height: '0.65vw' }}
            animate={{ scale: [1, 1.6, 1], opacity: [0.6, 1, 0.6] }}
            transition={{ duration: 1.1, repeat: Infinity, ease: 'easeInOut' }}
          />
          <span
            className="font-mono uppercase tracking-[0.4em] text-[#9B8659] font-semibold"
            style={{ fontSize: '0.9vw' }}
          >
            Lupa Jurídica · Blindada
          </span>
        </motion.div>

        {/* Headline */}
        <h2
          className="font-display font-black text-white leading-[1.02] tracking-tight"
          style={{ fontSize: '5.4vw' }}
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
            A IA já mora{' '}
            <span className="text-gradient-gold">no processo.</span>
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
            <span className="text-gradient-blue">Você só lê o que importa.</span>
          </motion.span>
        </h2>

        {/* 3 pillar chips: Resume / Prazos / Riscos */}
        <motion.div
          className="flex items-center justify-center gap-[1.1vw] mt-[1.8vw]"
          initial={{ opacity: 0 }}
          animate={phase >= 4 ? { opacity: 1 } : { opacity: 0 }}
          transition={{ duration: 0.4 }}
        >
          {PILLARS.map((p, i) => (
            <motion.div
              key={p.label}
              className="flex items-center gap-[0.6vw] rounded-full border border-white/15 bg-[#020617]/70 backdrop-blur-sm"
              style={{ padding: '0.65vw 1.3vw' }}
              initial={{ opacity: 0, y: 14, scale: 0.9 }}
              animate={
                phase >= 4
                  ? { opacity: 1, y: 0, scale: 1 }
                  : { opacity: 0, y: 14, scale: 0.9 }
              }
              transition={{
                duration: 0.4,
                delay: phase >= 4 ? i * 0.1 : 0,
                ease: [0.16, 1, 0.3, 1],
              }}
            >
              <p.icon
                className="text-[#9B8659]"
                strokeWidth={2}
                style={{ width: '1.15vw', height: '1.15vw' }}
              />
              <span
                className="font-display font-semibold text-white"
                style={{ fontSize: '1.05vw' }}
              >
                {p.label}
              </span>
            </motion.div>
          ))}
        </motion.div>

        {/* Sigilo blindado small line */}
        <motion.div
          className="inline-flex items-center justify-center gap-[0.55vw] mt-[1.4vw]"
          initial={{ opacity: 0, y: 10 }}
          animate={phase >= 4 ? { opacity: 1, y: 0 } : { opacity: 0, y: 10 }}
          transition={{ duration: 0.45, ease: 'circOut' }}
        >
          <ShieldCheck
            className="text-[#10B981]"
            strokeWidth={2.2}
            style={{ width: '1vw', height: '1vw' }}
          />
          <span
            className="font-mono uppercase tracking-[0.3em] text-[#10B981]"
            style={{ fontSize: '0.78vw' }}
          >
            Sigilo blindado · ambiente anonimizado
          </span>
        </motion.div>

        {/* Domain chip */}
        <motion.div
          className="inline-flex items-center justify-center gap-[1.2vw] mt-[1.8vw] rounded-full border border-[#9B8659]/60 bg-[#9B8659]/15"
          style={{ padding: '1.1vw 2.4vw' }}
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
            style={{ fontSize: '1.3vw' }}
          >
            advocates.com.br
          </span>
        </motion.div>

        {/* Footer chips */}
        <motion.div
          className="flex items-center justify-center gap-[1.4vw] mt-[1.4vw]"
          initial={{ opacity: 0, y: 12 }}
          animate={phase >= 5 ? { opacity: 1, y: 0 } : { opacity: 0, y: 12 }}
          transition={{ duration: 0.5, ease: 'circOut' }}
        >
          <span
            className="font-mono text-[#94A3B8] uppercase tracking-[0.25em]"
            style={{ fontSize: '0.82vw' }}
          >
            Agente IA embutido
          </span>
          <span
            className="bg-[#9B8659]/60 rounded-full"
            style={{ width: '0.4vw', height: '0.4vw' }}
          />
          <span
            className="font-mono text-[#94A3B8] uppercase tracking-[0.25em]"
            style={{ fontSize: '0.82vw' }}
          >
            Leitura acionável
          </span>
          <span
            className="bg-[#9B8659]/60 rounded-full"
            style={{ width: '0.4vw', height: '0.4vw' }}
          />
          <span
            className="font-mono text-[#94A3B8] uppercase tracking-[0.25em]"
            style={{ fontSize: '0.82vw' }}
          >
            Sigilo operacional
          </span>
        </motion.div>
      </div>
    </motion.div>
  );
};

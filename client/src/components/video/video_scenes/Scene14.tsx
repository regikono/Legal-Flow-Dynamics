import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';
import { sceneTransitions } from '@/lib/video/animations';
import { AlertTriangle, FileText } from 'lucide-react';

const PAGES = Array.from({ length: 18 });

export const Scene14 = () => {
  const [phase, setPhase] = useState(0);

  useEffect(() => {
    const timers = [
      setTimeout(() => setPhase(1), 80),
      setTimeout(() => setPhase(2), 600),
      setTimeout(() => setPhase(3), 1300),
      setTimeout(() => setPhase(4), 2100),
      setTimeout(() => setPhase(5), 3000),
      setTimeout(() => setPhase(6), 3900),
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
      {/* Aggressive radial backdrop with pulse for viral hook */}
      <motion.div
        className="absolute inset-0"
        style={{
          background:
            'radial-gradient(ellipse at center, rgba(155,134,89,0.22) 0%, rgba(2,6,23,1) 70%)',
        }}
        animate={{ opacity: [0.7, 1, 0.7] }}
        transition={{ duration: 1.6, repeat: Infinity, ease: 'easeInOut' }}
      />

      {/* Drifting gold + red blobs */}
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

      {/* Diagonal slash lines */}
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

      {/* Floating page tower (visual metaphor for "200 páginas de autos") */}
      <div
        className="absolute pointer-events-none"
        style={{ left: '8%', top: '50%', transform: 'translateY(-50%)' }}
      >
        {PAGES.map((_, i) => (
          <motion.div
            key={i}
            className="absolute rounded-[0.4vw] border border-[#9B8659]/40 bg-[#020617]/80 backdrop-blur-sm"
            style={{
              width: '8vw',
              height: '10.5vw',
              left: `${(i % 4) * 0.5}vw`,
              top: `${i * -0.55}vw`,
              transform: `rotate(${(i % 2 ? 1 : -1) * (1 + (i % 3))}deg)`,
              boxShadow: '0 4px 14px rgba(0,0,0,0.45)',
            }}
            initial={{ opacity: 0, x: -30, y: 30, rotate: 12 }}
            animate={
              phase >= 1
                ? {
                    opacity: 0.85,
                    x: 0,
                    y: [0, -3, 0],
                    rotate: (i % 2 ? 1 : -1) * (1 + (i % 3)),
                  }
                : { opacity: 0, x: -30, y: 30, rotate: 12 }
            }
            transition={
              phase >= 1
                ? {
                    opacity: { duration: 0.4, delay: i * 0.025 },
                    x: { duration: 0.5, delay: i * 0.025, ease: [0.16, 1, 0.3, 1] },
                    y: {
                      duration: 2.6 + (i % 4) * 0.2,
                      repeat: Infinity,
                      ease: 'easeInOut',
                      delay: i * 0.05,
                    },
                  }
                : { duration: 0.3 }
            }
          >
            {/* Mock lines */}
            <div className="p-[0.6vw] flex flex-col gap-[0.3vw]">
              <div className="h-[0.18vw] w-[80%] bg-white/30 rounded-full" />
              <div className="h-[0.14vw] w-[60%] bg-white/20 rounded-full" />
              <div className="h-[0.14vw] w-[70%] bg-white/20 rounded-full" />
              <div className="h-[0.14vw] w-[40%] bg-white/15 rounded-full" />
              <div className="h-[0.14vw] w-[55%] bg-white/15 rounded-full" />
            </div>
            <FileText
              className="text-[#9B8659]/70 absolute"
              strokeWidth={1.4}
              style={{ width: '1.2vw', height: '1.2vw', right: '0.4vw', bottom: '0.4vw' }}
            />
          </motion.div>
        ))}

        {/* Page count badge */}
        <motion.div
          className="absolute rounded-full border-2 border-[#EF4444]/80 bg-[#020617]/90 backdrop-blur-md"
          style={{ left: '6vw', top: '-1vw', padding: '0.6vw 1.2vw' }}
          initial={{ opacity: 0, scale: 0.5, rotate: -12 }}
          animate={
            phase >= 2
              ? { opacity: 1, scale: [1, 1.08, 1], rotate: -8 }
              : { opacity: 0, scale: 0.5, rotate: -12 }
          }
          transition={
            phase >= 2
              ? {
                  opacity: { duration: 0.35 },
                  rotate: { duration: 0.35 },
                  scale: { duration: 1.2, repeat: Infinity, ease: 'easeInOut' },
                }
              : { duration: 0.3 }
          }
        >
          <span
            className="font-mono uppercase tracking-[0.3em] text-[#EF4444] font-bold"
            style={{ fontSize: '0.85vw' }}
          >
            +200 páginas
          </span>
        </motion.div>
      </div>

      <div className="relative z-10 w-full text-center px-[4vw]" style={{ paddingLeft: '28vw' }}>
        {/* PARE badge */}
        <motion.div
          className="inline-flex items-center justify-center gap-[1vw] mb-[1.6vw] rounded-full border-2 border-[#9B8659] bg-[#9B8659]/20"
          style={{ padding: '0.7vw 1.8vw' }}
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
          <AlertTriangle
            className="text-[#9B8659]"
            strokeWidth={2.5}
            style={{ width: '1.3vw', height: '1.3vw' }}
          />
          <span
            className="font-mono uppercase tracking-[0.4em] text-[#9B8659] font-bold"
            style={{ fontSize: '1vw' }}
          >
            PARE — você ainda lê os autos sozinho?
          </span>
        </motion.div>

        {/* Hook headline */}
        <h1
          className="font-display font-black text-white leading-[0.95] tracking-tight text-left"
          style={{ fontSize: '6vw' }}
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
            <span className="text-gradient-gold">200 páginas</span> de autos.
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
            Domingo à noite.
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
            <span className="text-[#EF4444]">Você</span>, sozinho.
          </motion.span>
        </h1>

        {/* Sub-line: pivot to the answer */}
        <motion.p
          className="font-display text-[#94A3B8] mt-[1.6vw] text-left"
          style={{ fontSize: '1.55vw', maxWidth: '52vw' }}
          initial={{ opacity: 0, y: 16 }}
          animate={phase >= 5 ? { opacity: 1, y: 0 } : { opacity: 0, y: 16 }}
          transition={{ duration: 0.5, ease: 'circOut' }}
        >
          E se a IA já estivesse{' '}
          <span className="text-white font-semibold">dentro do processo</span> —
          pronta para ler, resumir e apontar prazos?
        </motion.p>

        {/* Tag chip */}
        <motion.div
          className="inline-flex items-center gap-[0.7vw] mt-[1.6vw] rounded-full border border-[#9B8659]/50 bg-[#9B8659]/10"
          style={{ padding: '0.55vw 1.2vw' }}
          initial={{ opacity: 0, scale: 0.85 }}
          animate={
            phase >= 6
              ? { opacity: 1, scale: [1, 1.05, 1] }
              : { opacity: 0, scale: 0.85 }
          }
          transition={
            phase >= 6
              ? {
                  opacity: { duration: 0.4 },
                  scale: { duration: 1.5, repeat: Infinity, ease: 'easeInOut' },
                }
              : { duration: 0.3 }
          }
        >
          <motion.div
            className="bg-[#9B8659] rounded-full"
            style={{ width: '0.6vw', height: '0.6vw' }}
            animate={{ scale: [1, 1.6, 1], opacity: [0.6, 1, 0.6] }}
            transition={{ duration: 1.1, repeat: Infinity, ease: 'easeInOut' }}
          />
          <span
            className="font-mono uppercase tracking-[0.35em] text-[#9B8659] font-semibold"
            style={{ fontSize: '0.85vw' }}
          >
            IA jurídica pronta no produto
          </span>
        </motion.div>
      </div>
    </motion.div>
  );
};

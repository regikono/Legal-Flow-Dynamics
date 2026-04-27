import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';
import { sceneTransitions } from '@/lib/video/animations';
import { Check } from 'lucide-react';
import logoSmall from '@assets/logo_small_wl_1777282434450.png';

const BENEFITS = [
  'Até 5 processos ativos',
  'Kanban visual de processos',
  'Financeiro básico integrado',
  'Acesso desktop e mobile',
  'Agente IA pay-per-use',
];

export const Scene6 = () => {
  const [phase, setPhase] = useState(0);

  useEffect(() => {
    const timers = [
      setTimeout(() => setPhase(1), 100),
      setTimeout(() => setPhase(2), 700),
      setTimeout(() => setPhase(3), 1300),
      setTimeout(() => setPhase(4), 3500),
    ];
    return () => timers.forEach((t) => clearTimeout(t));
  }, []);

  return (
    <motion.div
      className="absolute inset-0 flex items-center bg-[#020617] overflow-hidden"
      initial="initial"
      animate="animate"
      exit="exit"
      variants={sceneTransitions.pushLeft}
    >
      {/* Animated radial backdrop */}
      <motion.div
        className="absolute inset-0"
        style={{
          background:
            'radial-gradient(ellipse at 70% 50%, rgba(4,30,66,0.85) 0%, rgba(2,6,23,1) 65%)',
        }}
        animate={{ opacity: [0.85, 1, 0.85] }}
        transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
      />

      {/* Drifting gold blob behind the price */}
      <motion.div
        className="absolute rounded-full"
        style={{
          width: '50vw',
          height: '50vw',
          right: '-10vw',
          top: '-10vw',
          background:
            'radial-gradient(circle, rgba(155,134,89,0.35) 0%, rgba(4,30,66,0) 65%)',
          filter: 'blur(50px)',
        }}
        animate={{ scale: [1, 1.12, 1], x: [0, -20, 0] }}
        transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
      />

      {/* Subtle grid for tech feel */}
      <div className="absolute inset-0 tech-grid opacity-50" />

      <div className="relative z-10 w-full grid grid-cols-2 gap-[3vw] items-center px-[6vw]">
        {/* LEFT: plan title + benefits */}
        <div>
          <motion.div
            className="flex items-center gap-[1vw] mb-[1.5vw]"
            initial={{ opacity: 0, x: -20 }}
            animate={phase >= 1 ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
            transition={{ duration: 0.4, ease: 'circOut' }}
          >
            <img
              src={logoSmall}
              alt="Advocates"
              className="object-contain"
              style={{ height: '1.8vw', opacity: 0.9 }}
            />
            <span
              className="font-mono uppercase tracking-[0.3em] text-[#9B8659]"
              style={{ fontSize: '0.95vw' }}
            >
              Apresentando
            </span>
          </motion.div>

          <motion.h2
            className="font-display font-black text-white leading-[0.95] tracking-tight"
            style={{ fontSize: '7.5vw' }}
            initial={{ opacity: 0, y: 30, filter: 'blur(10px)' }}
            animate={
              phase >= 1
                ? { opacity: 1, y: 0, filter: 'blur(0px)' }
                : { opacity: 0, y: 30, filter: 'blur(10px)' }
            }
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          >
            <span className="text-gradient-gold">Associado</span>
          </motion.h2>

          <motion.p
            className="font-display text-[#94A3B8] mt-[1vw]"
            style={{ fontSize: '1.5vw', maxWidth: '40vw' }}
            initial={{ opacity: 0, y: 12 }}
            animate={phase >= 2 ? { opacity: 1, y: 0 } : { opacity: 0, y: 12 }}
            transition={{ duration: 0.5, ease: 'circOut' }}
          >
            Sua porta de entrada no{' '}
            <span className="text-white font-semibold">Workspace jurídico</span>{' '}
            mais completo.
          </motion.p>

          {/* Benefits list */}
          <ul className="mt-[2.5vw] space-y-[1vw]">
            {BENEFITS.map((b, i) => (
              <motion.li
                key={i}
                className="flex items-center gap-[1vw]"
                initial={{ opacity: 0, x: -20 }}
                animate={
                  phase >= 3
                    ? { opacity: 1, x: 0 }
                    : { opacity: 0, x: -20 }
                }
                transition={{
                  duration: 0.4,
                  ease: [0.16, 1, 0.3, 1],
                  delay: phase >= 3 ? i * 0.09 : 0,
                }}
              >
                <span
                  className="flex items-center justify-center rounded-full border border-[#9B8659]/60 bg-[#9B8659]/15"
                  style={{ width: '2vw', height: '2vw' }}
                >
                  <Check
                    className="text-[#9B8659]"
                    strokeWidth={3}
                    style={{ width: '1.1vw', height: '1.1vw' }}
                  />
                </span>
                <span
                  className="font-display text-white"
                  style={{ fontSize: '1.5vw' }}
                >
                  {b}
                </span>
              </motion.li>
            ))}
          </ul>
        </div>

        {/* RIGHT: price card */}
        <div className="flex justify-center">
          <motion.div
            className="glow-box rounded-[2vw] relative overflow-hidden"
            style={{ padding: '3vw 3.5vw', minWidth: '32vw' }}
            initial={{ opacity: 0, scale: 0.85, y: 30 }}
            animate={
              phase >= 2
                ? { opacity: 1, scale: 1, y: 0 }
                : { opacity: 0, scale: 0.85, y: 30 }
            }
            transition={{ type: 'spring', stiffness: 220, damping: 22 }}
          >
            {/* Glowing animated halo */}
            <motion.div
              className="absolute rounded-full"
              style={{
                width: '20vw',
                height: '20vw',
                top: '-8vw',
                left: '-6vw',
                background:
                  'radial-gradient(circle, rgba(59,130,246,0.45) 0%, rgba(0,0,0,0) 70%)',
                filter: 'blur(40px)',
              }}
              animate={{ scale: [1, 1.2, 1], opacity: [0.6, 1, 0.6] }}
              transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut' }}
            />
            <motion.div
              className="absolute rounded-full"
              style={{
                width: '18vw',
                height: '18vw',
                bottom: '-6vw',
                right: '-5vw',
                background:
                  'radial-gradient(circle, rgba(155,134,89,0.45) 0%, rgba(0,0,0,0) 70%)',
                filter: 'blur(40px)',
              }}
              animate={{ scale: [1, 1.15, 1], opacity: [0.5, 0.9, 0.5] }}
              transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut', delay: 0.7 }}
            />

            <div className="relative z-10 text-center">
              <div
                className="font-mono uppercase tracking-[0.35em] text-[#94A3B8]"
                style={{ fontSize: '0.95vw' }}
              >
                Plano Associado
              </div>
              <div
                className="font-display font-black text-white leading-[0.9] mt-[0.8vw]"
                style={{ fontSize: '8vw' }}
              >
                <span className="text-gradient-gold">R$ 0</span>
              </div>
              <div
                className="font-display text-white/80 -mt-[0.5vw]"
                style={{ fontSize: '1.4vw' }}
              >
                sem mensalidade
              </div>

              {/* Pulsing divider */}
              <motion.div
                className="bg-gradient-to-r from-transparent via-[#9B8659] to-transparent mx-auto"
                style={{ height: '0.12vw', width: '70%', marginTop: '2vw', marginBottom: '1.5vw' }}
                animate={{ opacity: [0.4, 1, 0.4] }}
                transition={{ duration: 1.8, repeat: Infinity, ease: 'easeInOut' }}
              />

              <motion.div
                className="font-display text-white"
                style={{ fontSize: '1.4vw' }}
                animate={
                  phase >= 4
                    ? { scale: [1, 1.04, 1] }
                    : { scale: 1 }
                }
                transition={
                  phase >= 4
                    ? { duration: 1.4, repeat: Infinity, ease: 'easeInOut' }
                    : { duration: 0.3 }
                }
              >
                <span className="text-gradient-blue font-bold">+60 créditos</span>{' '}
                <span className="text-white/70">de IA ao validar</span>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </motion.div>
  );
};

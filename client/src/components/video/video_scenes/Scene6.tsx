import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';
import { sceneTransitions } from '@/lib/video/animations';
import { Check } from 'lucide-react';
import logoSmall from '@assets/logo_w_1777283278719.png';

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
          width: '50cqw',
          height: '50cqw',
          right: '-10cqw',
          top: '-10cqw',
          background:
            'radial-gradient(circle, rgba(155,134,89,0.35) 0%, rgba(4,30,66,0) 65%)',
          filter: 'blur(50px)',
        }}
        animate={{ scale: [1, 1.12, 1], x: [0, -20, 0] }}
        transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
      />

      {/* Subtle grid for tech feel */}
      <div className="absolute inset-0 tech-grid opacity-50" />

      <div className="relative z-10 w-full flex flex-col gap-[5cqw] px-[6cqw]">
        {/* TOP: plan title + benefits */}
        <div>
          <motion.div
            className="flex items-center gap-[2cqw] mb-[3cqw]"
            initial={{ opacity: 0, x: -20 }}
            animate={phase >= 1 ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
            transition={{ duration: 0.4, ease: 'circOut' }}
          >
            <img
              src={logoSmall}
              alt="Advocates"
              className="object-contain"
              style={{ height: '4cqw', opacity: 0.9 }}
            />
            <span
              className="font-mono uppercase tracking-[0.3em] text-[#9B8659]"
              style={{ fontSize: '2.4cqw' }}
            >
              Apresentando
            </span>
          </motion.div>

          <motion.h2
            className="font-display font-black text-white leading-[0.95] tracking-tight"
            style={{ fontSize: '14cqw' }}
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
            className="font-display text-[#94A3B8] mt-[2.5cqw]"
            style={{ fontSize: '3.6cqw' }}
            initial={{ opacity: 0, y: 12 }}
            animate={phase >= 2 ? { opacity: 1, y: 0 } : { opacity: 0, y: 12 }}
            transition={{ duration: 0.5, ease: 'circOut' }}
          >
            Sua porta de entrada no{' '}
            <span className="text-white font-semibold">Workspace jurídico</span>{' '}
            mais completo.
          </motion.p>

          {/* Benefits list */}
          <ul className="mt-[4cqw] space-y-[2cqw]">
            {BENEFITS.map((b, i) => (
              <motion.li
                key={i}
                className="flex items-center gap-[2.5cqw]"
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
                  className="flex items-center justify-center rounded-full border border-[#9B8659]/60 bg-[#9B8659]/15 shrink-0"
                  style={{ width: '5cqw', height: '5cqw' }}
                >
                  <Check
                    className="text-[#9B8659]"
                    strokeWidth={3}
                    style={{ width: '2.8cqw', height: '2.8cqw' }}
                  />
                </span>
                <span
                  className="font-display text-white"
                  style={{ fontSize: '3.6cqw' }}
                >
                  {b}
                </span>
              </motion.li>
            ))}
          </ul>
        </div>

        {/* BOTTOM: price card */}
        <div className="flex justify-center">
          <motion.div
            className="glow-box rounded-[4cqw] relative overflow-hidden w-full"
            style={{ padding: '6cqw 5cqw' }}
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
                width: '20cqw',
                height: '20cqw',
                top: '-8cqw',
                left: '-6cqw',
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
                width: '18cqw',
                height: '18cqw',
                bottom: '-6cqw',
                right: '-5cqw',
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
                style={{ fontSize: '2.4cqw' }}
              >
                Plano Associado
              </div>
              <div
                className="font-display font-black text-white leading-[0.9] mt-[1.5cqw]"
                style={{ fontSize: '18cqw' }}
              >
                <span className="text-gradient-gold">R$ 0</span>
              </div>
              <div
                className="font-display text-white/80 mt-[0.5cqw]"
                style={{ fontSize: '3.4cqw' }}
              >
                sem mensalidade
              </div>

              {/* Pulsing divider */}
              <motion.div
                className="bg-gradient-to-r from-transparent via-[#9B8659] to-transparent mx-auto"
                style={{ height: '0.4cqw', width: '70%', marginTop: '3.5cqw', marginBottom: '3cqw' }}
                animate={{ opacity: [0.4, 1, 0.4] }}
                transition={{ duration: 1.8, repeat: Infinity, ease: 'easeInOut' }}
              />

              <motion.div
                className="font-display text-white"
                style={{ fontSize: '3.4cqw' }}
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

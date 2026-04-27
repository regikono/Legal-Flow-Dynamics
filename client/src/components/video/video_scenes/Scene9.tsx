import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';
import { sceneTransitions } from '@/lib/video/animations';
import { TrendingUp, Wallet, Receipt, BarChart3 } from 'lucide-react';
import logoSmall from '@assets/logo_w_1777283278719.png';

const KPI = [
  {
    icon: Wallet,
    label: 'Receita Prevista',
    value: 'R$ 285k',
    accent: 'text-gradient-gold',
    delay: 0,
  },
  {
    icon: Receipt,
    label: 'Receita Recebida',
    value: 'R$ 198k',
    accent: 'text-gradient-blue',
    delay: 0.12,
  },
  {
    icon: TrendingUp,
    label: 'Processos Ativos',
    value: '47',
    accent: 'text-gradient-gold',
    delay: 0.24,
  },
];

const BARS = [
  { month: 'Set', h: 38 },
  { month: 'Out', h: 52 },
  { month: 'Nov', h: 46 },
  { month: 'Dez', h: 64 },
  { month: 'Jan', h: 78 },
  { month: 'Fev', h: 92 },
];

export const Scene9 = () => {
  const [phase, setPhase] = useState(0);

  useEffect(() => {
    const timers = [
      setTimeout(() => setPhase(1), 100),
      setTimeout(() => setPhase(2), 600),
      setTimeout(() => setPhase(3), 1200),
      setTimeout(() => setPhase(4), 2200),
      setTimeout(() => setPhase(5), 3300),
      setTimeout(() => setPhase(6), 4400),
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
            'radial-gradient(ellipse at 30% 50%, rgba(4,30,66,0.85) 0%, rgba(2,6,23,1) 65%)',
        }}
        animate={{ opacity: [0.85, 1, 0.85] }}
        transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
      />

      {/* Drifting gold glow */}
      <motion.div
        className="absolute rounded-full"
        style={{
          width: '50cqw',
          height: '50cqw',
          left: '-12cqw',
          bottom: '-12cqw',
          background:
            'radial-gradient(circle, rgba(155,134,89,0.32) 0%, rgba(2,6,23,0) 65%)',
          filter: 'blur(60px)',
        }}
        animate={{ scale: [1, 1.12, 1], x: [0, 25, 0] }}
        transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
      />
      <motion.div
        className="absolute rounded-full"
        style={{
          width: '45cqw',
          height: '45cqw',
          right: '-10cqw',
          top: '-10cqw',
          background:
            'radial-gradient(circle, rgba(59,130,246,0.30) 0%, rgba(2,6,23,0) 65%)',
          filter: 'blur(60px)',
        }}
        animate={{ scale: [1, 1.1, 1], y: [0, 20, 0] }}
        transition={{ duration: 7, repeat: Infinity, ease: 'easeInOut' }}
      />

      <div className="absolute inset-0 tech-grid opacity-40" />

      <div className="relative z-10 w-full flex flex-col gap-[4cqw] px-[5cqw]">
        {/* TOP: Headline + eyebrow */}
        <div>
          <motion.div
            className="flex items-center gap-[2cqw] mb-[2.5cqw]"
            initial={{ opacity: 0, x: -20 }}
            animate={phase >= 1 ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
            transition={{ duration: 0.4, ease: 'circOut' }}
          >
            <img
              src={logoSmall}
              alt="Advocates"
              className="object-contain"
              style={{ height: '3.6cqw', opacity: 0.9 }}
            />
            <span
              className="font-mono uppercase tracking-[0.3em] text-[#9B8659]"
              style={{ fontSize: '2.2cqw' }}
            >
              Financeiro inteligente
            </span>
          </motion.div>

          <h2
            className="font-display font-black text-white leading-[0.98] tracking-tight"
            style={{ fontSize: '11cqw' }}
          >
            <motion.span
              className="block"
              initial={{ opacity: 0, y: 30, filter: 'blur(10px)' }}
              animate={
                phase >= 1
                  ? { opacity: 1, y: 0, filter: 'blur(0px)' }
                  : { opacity: 0, y: 30, filter: 'blur(10px)' }
              }
              transition={{ duration: 0.55, ease: [0.16, 1, 0.3, 1] }}
            >
              Receita prevista.
            </motion.span>
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
              <span className="text-gradient-gold">Recebida.</span>
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
              <span className="text-gradient-blue">Sob controle.</span>
            </motion.span>
          </h2>

          <motion.p
            className="font-display text-[#94A3B8] mt-[3cqw]"
            style={{ fontSize: '3.2cqw' }}
            initial={{ opacity: 0, y: 14 }}
            animate={phase >= 4 ? { opacity: 1, y: 0 } : { opacity: 0, y: 14 }}
            transition={{ duration: 0.5, ease: 'circOut' }}
          >
            Honorários, pagamentos em grupo e{' '}
            <span className="text-white font-semibold">saúde financeira</span>{' '}
            integrados ao Kanban dos seus processos.
          </motion.p>

          {/* Pulsing badge for "social proof" feel */}
          <motion.div
            className="inline-flex items-center gap-[1.6cqw] mt-[3cqw] rounded-full border border-[#9B8659]/50 bg-[#9B8659]/10"
            style={{ padding: '1.4cqw 2.8cqw' }}
            initial={{ opacity: 0, scale: 0.9 }}
            animate={
              phase >= 5
                ? { opacity: 1, scale: [1, 1.04, 1] }
                : { opacity: 0, scale: 0.9 }
            }
            transition={
              phase >= 5
                ? {
                    opacity: { duration: 0.4 },
                    scale: { duration: 1.6, repeat: Infinity, ease: 'easeInOut' },
                  }
                : { duration: 0.4 }
            }
          >
            <motion.div
              className="bg-[#9B8659] rounded-full"
              style={{ width: '1.5cqw', height: '1.5cqw' }}
              animate={{ scale: [1, 1.6, 1], opacity: [0.6, 1, 0.6] }}
              transition={{ duration: 1.1, repeat: Infinity, ease: 'easeInOut' }}
            />
            <span
              className="font-mono uppercase tracking-[0.3em] text-[#9B8659]"
              style={{ fontSize: '1.9cqw' }}
            >
              Pagamentos em grupo · Kanban
            </span>
          </motion.div>
        </div>

        {/* BOTTOM: Mock dashboard */}
        <motion.div
          className="glow-box rounded-[3cqw] relative overflow-hidden"
          style={{ padding: '4cqw' }}
          initial={{ opacity: 0, scale: 0.9, y: 40 }}
          animate={
            phase >= 2
              ? { opacity: 1, scale: 1, y: 0 }
              : { opacity: 0, scale: 0.9, y: 40 }
          }
          transition={{ type: 'spring', stiffness: 220, damping: 24 }}
        >
          {/* Halo */}
          <motion.div
            className="absolute rounded-full"
            style={{
              width: '20cqw',
              height: '20cqw',
              top: '-8cqw',
              left: '-6cqw',
              background:
                'radial-gradient(circle, rgba(59,130,246,0.40) 0%, rgba(0,0,0,0) 70%)',
              filter: 'blur(40px)',
            }}
            animate={{ scale: [1, 1.18, 1], opacity: [0.55, 0.95, 0.55] }}
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
            animate={{ scale: [1, 1.14, 1], opacity: [0.5, 0.9, 0.5] }}
            transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut', delay: 0.7 }}
          />

          <div className="relative z-10">
            {/* Dashboard header */}
            <div className="flex items-center justify-between mb-[1.5cqw]">
              <div className="flex items-center gap-[0.6cqw]">
                <BarChart3 className="text-[#9B8659]" strokeWidth={2} style={{ width: '1.2cqw', height: '1.2cqw' }} />
                <span
                  className="font-mono uppercase tracking-[0.25em] text-white/80"
                  style={{ fontSize: '0.8cqw' }}
                >
                  Dashboard Financeiro
                </span>
              </div>
              <motion.div
                className="flex items-center gap-[0.4cqw]"
                animate={{ opacity: [0.5, 1, 0.5] }}
                transition={{ duration: 1.4, repeat: Infinity, ease: 'easeInOut' }}
              >
                <span
                  className="bg-[#10B981] rounded-full"
                  style={{ width: '0.5cqw', height: '0.5cqw' }}
                />
                <span
                  className="font-mono uppercase tracking-[0.2em] text-[#10B981]"
                  style={{ fontSize: '0.7cqw' }}
                >
                  Em tempo real
                </span>
              </motion.div>
            </div>

            {/* KPI cards */}
            <div className="grid grid-cols-3 gap-[0.8cqw] mb-[1.4cqw]">
              {KPI.map((k, i) => (
                <motion.div
                  key={k.label}
                  className="rounded-[0.8cqw] border border-white/10 bg-[#020617]/60 relative overflow-hidden"
                  style={{ padding: '1cqw' }}
                  initial={{ opacity: 0, y: 16 }}
                  animate={
                    phase >= 3
                      ? { opacity: 1, y: 0 }
                      : { opacity: 0, y: 16 }
                  }
                  transition={{
                    duration: 0.4,
                    delay: phase >= 3 ? i * 0.1 : 0,
                    ease: [0.16, 1, 0.3, 1],
                  }}
                >
                  <k.icon className="text-[#9B8659] mb-[0.6cqw]" strokeWidth={1.8} style={{ width: '1.2cqw', height: '1.2cqw' }} />
                  <div
                    className="font-mono uppercase tracking-[0.18em] text-[#94A3B8]"
                    style={{ fontSize: '0.65cqw' }}
                  >
                    {k.label}
                  </div>
                  <motion.div
                    className={`font-display font-black ${k.accent}`}
                    style={{ fontSize: '2cqw', lineHeight: 1.1, marginTop: '0.3cqw' }}
                    initial={{ scale: 0.85, opacity: 0 }}
                    animate={
                      phase >= 4
                        ? { scale: 1, opacity: 1 }
                        : { scale: 0.85, opacity: 0 }
                    }
                    transition={{
                      type: 'spring',
                      stiffness: 320,
                      damping: 20,
                      delay: phase >= 4 ? k.delay : 0,
                    }}
                  >
                    {k.value}
                  </motion.div>
                </motion.div>
              ))}
            </div>

            {/* Chart label */}
            <motion.div
              className="flex items-center justify-between mb-[0.6cqw]"
              initial={{ opacity: 0 }}
              animate={phase >= 4 ? { opacity: 1 } : { opacity: 0 }}
              transition={{ duration: 0.4 }}
            >
              <span
                className="font-mono uppercase tracking-[0.25em] text-white/70"
                style={{ fontSize: '0.75cqw' }}
              >
                Tendência de receita
              </span>
              <span
                className="font-mono uppercase tracking-[0.25em] text-[#10B981]"
                style={{ fontSize: '0.75cqw' }}
              >
                + R$ 220k
              </span>
            </motion.div>

            {/* Animated bar chart */}
            <div
              className="rounded-[0.6cqw] border border-white/10 bg-[#020617]/60"
              style={{ padding: '1cqw' }}
            >
              <div
                className="flex items-end justify-between gap-[0.6cqw]"
                style={{ height: '7cqw' }}
              >
                {BARS.map((b, i) => (
                  <div
                    key={b.month}
                    className="flex-1 flex flex-col items-center gap-[0.4cqw]"
                    style={{ height: '100%' }}
                  >
                    <div
                      className="w-full flex items-end justify-center"
                      style={{ height: '100%' }}
                    >
                      <motion.div
                        className="w-full rounded-t-[0.3cqw] origin-bottom"
                        style={{
                          background:
                            i === BARS.length - 1
                              ? 'linear-gradient(180deg, #9B8659 0%, #6e5e3f 100%)'
                              : 'linear-gradient(180deg, #3B82F6 0%, #1d4ed8 100%)',
                          height: `${b.h}%`,
                          boxShadow:
                            i === BARS.length - 1
                              ? '0 0 12px rgba(155,134,89,0.6)'
                              : '0 0 8px rgba(59,130,246,0.4)',
                        }}
                        initial={{ scaleY: 0 }}
                        animate={
                          phase >= 5 ? { scaleY: 1 } : { scaleY: 0 }
                        }
                        transition={{
                          duration: 0.5,
                          ease: [0.16, 1, 0.3, 1],
                          delay: phase >= 5 ? i * 0.06 : 0,
                        }}
                      />
                    </div>
                    <span
                      className="font-mono uppercase text-[#94A3B8]"
                      style={{ fontSize: '0.65cqw' }}
                    >
                      {b.month}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* Kanban health pill */}
            <motion.div
              className="flex items-center gap-[0.6cqw] mt-[1.2cqw]"
              initial={{ opacity: 0, y: 10 }}
              animate={phase >= 6 ? { opacity: 1, y: 0 } : { opacity: 0, y: 10 }}
              transition={{ duration: 0.45, ease: 'circOut' }}
            >
              <span
                className="rounded-full bg-[#10B981]/15 border border-[#10B981]/40 text-[#10B981] font-mono uppercase tracking-[0.2em]"
                style={{ fontSize: '0.65cqw', padding: '0.3cqw 0.7cqw' }}
              >
                Saúde · OK
              </span>
              <span
                className="rounded-full bg-[#9B8659]/15 border border-[#9B8659]/40 text-[#9B8659] font-mono uppercase tracking-[0.2em]"
                style={{ fontSize: '0.65cqw', padding: '0.3cqw 0.7cqw' }}
              >
                A receber · 12
              </span>
              <span
                className="rounded-full bg-[#3B82F6]/15 border border-[#3B82F6]/40 text-[#60A5FA] font-mono uppercase tracking-[0.2em]"
                style={{ fontSize: '0.65cqw', padding: '0.3cqw 0.7cqw' }}
              >
                Kanban · Vinculado
              </span>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </motion.div>
  );
};

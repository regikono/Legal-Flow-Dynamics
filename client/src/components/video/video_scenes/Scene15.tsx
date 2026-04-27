import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';
import { sceneTransitions } from '@/lib/video/animations';
import {
  Search,
  Sparkles,
  ShieldCheck,
  Clock,
  AlertOctagon,
  FileText,
  Bot,
} from 'lucide-react';
import logoSmall from '@assets/logo_w_1777283278719.png';

const DOC_LINES = [
  { w: 92, em: false },
  { w: 78, em: false },
  { w: 88, em: true },
  { w: 70, em: false },
  { w: 95, em: false },
  { w: 64, em: false },
  { w: 82, em: true },
  { w: 76, em: false },
  { w: 90, em: false },
  { w: 58, em: false },
];

const CHAT = [
  {
    icon: FileText,
    title: 'Resumo do processo',
    body: 'Ação de cobrança · valor R$ 142.800 · 3 partes',
    color: '#9B8659',
    delay: 0,
  },
  {
    icon: Clock,
    title: 'Prazo crítico em 3 dias',
    body: 'Réplica à contestação — fls. 184',
    color: '#3B82F6',
    delay: 0.18,
  },
  {
    icon: AlertOctagon,
    title: 'Risco identificado',
    body: 'Preliminar de prescrição não enfrentada',
    color: '#EF4444',
    delay: 0.36,
  },
];

export const Scene15 = () => {
  const [phase, setPhase] = useState(0);

  useEffect(() => {
    const timers = [
      setTimeout(() => setPhase(1), 80),    // headline + frame
      setTimeout(() => setPhase(2), 600),   // doc appears
      setTimeout(() => setPhase(3), 1300),  // lupa scans
      setTimeout(() => setPhase(4), 2200),  // agent IA insights stream in
      setTimeout(() => setPhase(5), 3800),  // sigilo blindado pill
      setTimeout(() => setPhase(6), 5000),  // closing pulse
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
            'radial-gradient(ellipse at 65% 50%, rgba(4,30,66,0.92) 0%, rgba(2,6,23,1) 70%)',
        }}
        animate={{ opacity: [0.85, 1, 0.85] }}
        transition={{ duration: 3.5, repeat: Infinity, ease: 'easeInOut' }}
      />

      {/* Drifting gold + blue blobs */}
      <motion.div
        className="absolute rounded-full"
        style={{
          width: '50vw',
          height: '50vw',
          left: '-12vw',
          bottom: '-12vw',
          background:
            'radial-gradient(circle, rgba(155,134,89,0.32) 0%, rgba(2,6,23,0) 65%)',
          filter: 'blur(60px)',
        }}
        animate={{ scale: [1, 1.1, 1], x: [0, 25, 0] }}
        transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
      />
      <motion.div
        className="absolute rounded-full"
        style={{
          width: '45vw',
          height: '45vw',
          right: '-10vw',
          top: '-10vw',
          background:
            'radial-gradient(circle, rgba(59,130,246,0.30) 0%, rgba(2,6,23,0) 65%)',
          filter: 'blur(60px)',
        }}
        animate={{ scale: [1, 1.12, 1], y: [0, 20, 0] }}
        transition={{ duration: 7, repeat: Infinity, ease: 'easeInOut' }}
      />

      <div className="absolute inset-0 tech-grid opacity-40" />

      <div className="relative z-10 w-full grid grid-cols-[1fr_1.15fr] gap-[2.5vw] items-center px-[4vw]">
        {/* LEFT: Eyebrow + Headline + Sigilo pill */}
        <div>
          <motion.div
            className="flex items-center gap-[1vw] mb-[1.4vw]"
            initial={{ opacity: 0, x: -20 }}
            animate={phase >= 1 ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
            transition={{ duration: 0.4, ease: 'circOut' }}
          >
            <img
              src={logoSmall}
              alt="Advocates"
              className="object-contain"
              style={{ height: '1.7vw', opacity: 0.9 }}
            />
            <span
              className="font-mono uppercase tracking-[0.3em] text-[#9B8659]"
              style={{ fontSize: '0.9vw' }}
            >
              IA jurídica pronta no produto
            </span>
          </motion.div>

          <h2
            className="font-display font-black text-white leading-[0.98] tracking-tight"
            style={{ fontSize: '5.2vw' }}
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
              <span className="text-gradient-gold">Lupa Jurídica.</span>
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
              Agente IA
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
              <span className="text-gradient-blue">embutido nos autos.</span>
            </motion.span>
          </h2>

          <motion.p
            className="font-display text-[#94A3B8] mt-[1.4vw]"
            style={{ fontSize: '1.3vw', maxWidth: '34vw' }}
            initial={{ opacity: 0, y: 14 }}
            animate={phase >= 4 ? { opacity: 1, y: 0 } : { opacity: 0, y: 14 }}
            transition={{ duration: 0.5, ease: 'circOut' }}
          >
            Resume autos, aponta{' '}
            <span className="text-white font-semibold">prazos críticos</span>,
            sinaliza riscos e responde no contexto do processo.
          </motion.p>

          {/* Sigilo blindado pill */}
          <motion.div
            className="inline-flex items-center gap-[0.7vw] mt-[1.6vw] rounded-full border border-[#10B981]/50 bg-[#10B981]/10"
            style={{ padding: '0.6vw 1.3vw' }}
            initial={{ opacity: 0, scale: 0.9 }}
            animate={
              phase >= 5
                ? { opacity: 1, scale: [1, 1.05, 1] }
                : { opacity: 0, scale: 0.9 }
            }
            transition={
              phase >= 5
                ? {
                    opacity: { duration: 0.4 },
                    scale: { duration: 1.6, repeat: Infinity, ease: 'easeInOut' },
                  }
                : { duration: 0.3 }
            }
          >
            <ShieldCheck
              className="text-[#10B981]"
              strokeWidth={2.2}
              style={{ width: '1.1vw', height: '1.1vw' }}
            />
            <span
              className="font-mono uppercase tracking-[0.3em] text-[#10B981] font-semibold"
              style={{ fontSize: '0.82vw' }}
            >
              Sigilo blindado · ambiente anonimizado
            </span>
          </motion.div>
        </div>

        {/* RIGHT: Mock workspace — document being scanned by Lupa + agent insights stream */}
        <motion.div
          className="glow-box rounded-[1.4vw] relative overflow-hidden"
          style={{ padding: '1.6vw' }}
          initial={{ opacity: 0, scale: 0.92, x: 50 }}
          animate={
            phase >= 1
              ? { opacity: 1, scale: 1, x: 0 }
              : { opacity: 0, scale: 0.92, x: 50 }
          }
          transition={{ type: 'spring', stiffness: 220, damping: 24 }}
        >
          {/* Halo */}
          <motion.div
            className="absolute rounded-full"
            style={{
              width: '20vw',
              height: '20vw',
              top: '-8vw',
              left: '-6vw',
              background:
                'radial-gradient(circle, rgba(155,134,89,0.45) 0%, rgba(0,0,0,0) 70%)',
              filter: 'blur(40px)',
            }}
            animate={{ scale: [1, 1.18, 1], opacity: [0.55, 0.95, 0.55] }}
            transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut' }}
          />

          {/* Header bar */}
          <div className="relative z-10 flex items-center justify-between mb-[1.1vw]">
            <div className="flex items-center gap-[0.55vw]">
              <Sparkles
                className="text-[#9B8659]"
                strokeWidth={2}
                style={{ width: '1.1vw', height: '1.1vw' }}
              />
              <span
                className="font-mono uppercase tracking-[0.25em] text-white/85"
                style={{ fontSize: '0.78vw' }}
              >
                Workspace · Autos do processo
              </span>
            </div>
            <motion.div
              className="flex items-center gap-[0.4vw]"
              animate={{ opacity: [0.55, 1, 0.55] }}
              transition={{ duration: 1.4, repeat: Infinity, ease: 'easeInOut' }}
            >
              <span
                className="bg-[#9B8659] rounded-full"
                style={{ width: '0.5vw', height: '0.5vw' }}
              />
              <span
                className="font-mono uppercase tracking-[0.22em] text-[#9B8659]"
                style={{ fontSize: '0.7vw' }}
              >
                Lupa ativa
              </span>
            </motion.div>
          </div>

          <div className="relative z-10 grid grid-cols-[1.05fr_1fr] gap-[1vw]">
            {/* DOCUMENT panel with Lupa scan */}
            <div
              className="relative rounded-[0.8vw] border border-white/10 bg-[#020617]/70 overflow-hidden"
              style={{ padding: '0.95vw', minHeight: '17vw' }}
            >
              {/* Doc header label */}
              <div className="flex items-center justify-between mb-[0.5vw]">
                <span
                  className="font-mono uppercase tracking-[0.18em] text-[#9B8659]"
                  style={{ fontSize: '0.6vw' }}
                >
                  PROC-0421 · fls. 184
                </span>
                <span
                  className="font-mono text-white/40"
                  style={{ fontSize: '0.6vw' }}
                >
                  PDF · 218p
                </span>
              </div>

              {/* Faux document text lines */}
              <div className="flex flex-col gap-[0.34vw]">
                {DOC_LINES.map((l, i) => (
                  <motion.div
                    key={i}
                    className="rounded-full"
                    style={{
                      height: l.em ? '0.32vw' : '0.18vw',
                      width: `${l.w}%`,
                      background: l.em
                        ? 'linear-gradient(90deg, #9B8659 0%, rgba(155,134,89,0.3) 100%)'
                        : 'rgba(255,255,255,0.18)',
                    }}
                    initial={{ opacity: 0, scaleX: 0.4 }}
                    animate={
                      phase >= 2
                        ? { opacity: 1, scaleX: 1 }
                        : { opacity: 0, scaleX: 0.4 }
                    }
                    transition={{
                      duration: 0.35,
                      delay: phase >= 2 ? i * 0.04 : 0,
                      ease: [0.16, 1, 0.3, 1],
                    }}
                  />
                ))}
              </div>

              {/* Highlight bands that appear after scan */}
              <motion.div
                className="absolute rounded-[0.3vw]"
                style={{
                  left: '0.95vw',
                  right: '0.95vw',
                  top: '4.7vw',
                  height: '0.6vw',
                  background: 'rgba(155,134,89,0.28)',
                  border: '1px solid rgba(155,134,89,0.6)',
                }}
                initial={{ opacity: 0, scaleX: 0 }}
                animate={
                  phase >= 4
                    ? { opacity: 1, scaleX: [0, 1] }
                    : { opacity: 0, scaleX: 0 }
                }
                transition={{ duration: 0.5, delay: phase >= 4 ? 0.05 : 0, ease: 'circOut' }}
              />
              <motion.div
                className="absolute rounded-[0.3vw]"
                style={{
                  left: '0.95vw',
                  right: '0.95vw',
                  top: '8.7vw',
                  height: '0.6vw',
                  background: 'rgba(239,68,68,0.22)',
                  border: '1px solid rgba(239,68,68,0.55)',
                }}
                initial={{ opacity: 0, scaleX: 0 }}
                animate={
                  phase >= 4
                    ? { opacity: 1, scaleX: [0, 1] }
                    : { opacity: 0, scaleX: 0 }
                }
                transition={{ duration: 0.5, delay: phase >= 4 ? 0.18 : 0, ease: 'circOut' }}
              />

              {/* Lupa (magnifying glass) — sweeps top-to-bottom across the document */}
              <motion.div
                className="absolute pointer-events-none"
                style={{
                  left: '0.95vw',
                  right: '0.95vw',
                  height: '3.2vw',
                  top: '0.95vw',
                  borderRadius: '0.4vw',
                  background:
                    'linear-gradient(180deg, rgba(155,134,89,0) 0%, rgba(155,134,89,0.28) 50%, rgba(155,134,89,0) 100%)',
                  border: '1px solid rgba(155,134,89,0.6)',
                  boxShadow: '0 0 18px rgba(155,134,89,0.55)',
                }}
                initial={{ opacity: 0, top: '0.95vw' }}
                animate={
                  phase >= 3
                    ? { opacity: [0, 1, 1, 0.8, 1], top: ['0.95vw', '13vw', '0.95vw'] }
                    : { opacity: 0, top: '0.95vw' }
                }
                transition={
                  phase >= 3
                    ? {
                        opacity: { duration: 3, repeat: Infinity, ease: 'easeInOut' },
                        top: { duration: 3, repeat: Infinity, ease: 'easeInOut' },
                      }
                    : { duration: 0.3 }
                }
              />

              {/* Magnifier badge bottom-right */}
              <motion.div
                className="absolute flex items-center justify-center rounded-full bg-[#9B8659] border-2 border-white/20"
                style={{
                  width: '2.4vw',
                  height: '2.4vw',
                  right: '-0.6vw',
                  bottom: '-0.6vw',
                  boxShadow: '0 0 22px rgba(155,134,89,0.85)',
                }}
                initial={{ opacity: 0, scale: 0.4, rotate: -20 }}
                animate={
                  phase >= 3
                    ? { opacity: 1, scale: [1, 1.08, 1], rotate: [-6, 6, -6] }
                    : { opacity: 0, scale: 0.4, rotate: -20 }
                }
                transition={
                  phase >= 3
                    ? {
                        opacity: { duration: 0.35 },
                        scale: { duration: 1.6, repeat: Infinity, ease: 'easeInOut' },
                        rotate: { duration: 2.4, repeat: Infinity, ease: 'easeInOut' },
                      }
                    : { duration: 0.3 }
                }
              >
                <Search
                  className="text-white"
                  strokeWidth={2.6}
                  style={{ width: '1.2vw', height: '1.2vw' }}
                />
              </motion.div>
            </div>

            {/* AGENT IA chat panel */}
            <div
              className="relative rounded-[0.8vw] border border-white/10 bg-[#020617]/70 overflow-hidden flex flex-col"
              style={{ padding: '0.95vw', minHeight: '17vw' }}
            >
              <div className="flex items-center gap-[0.5vw] mb-[0.7vw]">
                <Bot
                  className="text-[#3B82F6]"
                  strokeWidth={2}
                  style={{ width: '1.05vw', height: '1.05vw' }}
                />
                <span
                  className="font-mono uppercase tracking-[0.18em] text-white/85"
                  style={{ fontSize: '0.62vw' }}
                >
                  Agente IA · Lupa Jurídica
                </span>
                <motion.span
                  className="ml-auto bg-[#10B981] rounded-full"
                  style={{ width: '0.4vw', height: '0.4vw' }}
                  animate={{ opacity: [0.4, 1, 0.4], scale: [1, 1.5, 1] }}
                  transition={{ duration: 1.1, repeat: Infinity, ease: 'easeInOut' }}
                />
              </div>

              <div className="flex flex-col gap-[0.6vw]">
                {CHAT.map((c, i) => (
                  <motion.div
                    key={c.title}
                    className="rounded-[0.55vw] border border-white/10 bg-[#020617]/80"
                    style={{
                      padding: '0.65vw 0.7vw',
                      borderLeft: `2px solid ${c.color}`,
                    }}
                    initial={{ opacity: 0, x: 20 }}
                    animate={
                      phase >= 4
                        ? { opacity: 1, x: 0 }
                        : { opacity: 0, x: 20 }
                    }
                    transition={{
                      duration: 0.45,
                      delay: phase >= 4 ? c.delay : 0,
                      ease: [0.16, 1, 0.3, 1],
                    }}
                  >
                    <div className="flex items-center gap-[0.45vw] mb-[0.25vw]">
                      <c.icon
                        strokeWidth={2}
                        style={{ width: '0.9vw', height: '0.9vw', color: c.color }}
                      />
                      <span
                        className="font-display font-bold text-white"
                        style={{ fontSize: '0.78vw' }}
                      >
                        {c.title}
                      </span>
                    </div>
                    <span
                      className="font-mono text-white/65"
                      style={{ fontSize: '0.62vw', lineHeight: 1.35 }}
                    >
                      {c.body}
                    </span>
                  </motion.div>
                ))}
              </div>

              {/* Typing indicator at bottom */}
              <motion.div
                className="mt-auto pt-[0.7vw] flex items-center gap-[0.35vw]"
                initial={{ opacity: 0 }}
                animate={phase >= 4 ? { opacity: 1 } : { opacity: 0 }}
                transition={{ duration: 0.4, delay: phase >= 4 ? 0.6 : 0 }}
              >
                {[0, 1, 2].map((i) => (
                  <motion.span
                    key={i}
                    className="bg-[#3B82F6] rounded-full"
                    style={{ width: '0.4vw', height: '0.4vw' }}
                    animate={{ opacity: [0.3, 1, 0.3], y: [0, -2, 0] }}
                    transition={{
                      duration: 0.9,
                      repeat: Infinity,
                      ease: 'easeInOut',
                      delay: i * 0.15,
                    }}
                  />
                ))}
                <span
                  className="font-mono text-white/50"
                  style={{ fontSize: '0.6vw', marginLeft: '0.3vw' }}
                >
                  Agente IA respondendo no contexto…
                </span>
              </motion.div>
            </div>
          </div>

          {/* Closing pulse ring */}
          <motion.div
            className="absolute inset-0 rounded-[1.4vw] pointer-events-none"
            style={{ boxShadow: '0 0 0 0 rgba(155,134,89,0.6)' }}
            animate={
              phase >= 6
                ? {
                    boxShadow: [
                      '0 0 0 0 rgba(155,134,89,0.6)',
                      '0 0 0 1.2vw rgba(155,134,89,0)',
                      '0 0 0 0 rgba(155,134,89,0)',
                    ],
                  }
                : { boxShadow: '0 0 0 0 rgba(155,134,89,0)' }
            }
            transition={
              phase >= 6
                ? { duration: 1.6, repeat: Infinity, ease: 'easeInOut' }
                : { duration: 0.3 }
            }
          />
        </motion.div>
      </div>
    </motion.div>
  );
};

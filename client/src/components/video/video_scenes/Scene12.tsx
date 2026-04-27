import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';
import { sceneTransitions } from '@/lib/video/animations';
import { FileText, Users, Layers } from 'lucide-react';
import logoSmall from '@assets/logo_w_1777283278719.png';

const COLUMNS = [
  { title: 'Triagem', color: '#3B82F6', accent: 'rgba(59,130,246,0.18)' },
  { title: 'Em andamento', color: '#9B8659', accent: 'rgba(155,134,89,0.20)' },
  { title: 'Aguardando', color: '#60A5FA', accent: 'rgba(96,165,250,0.18)' },
  { title: 'Concluído', color: '#10B981', accent: 'rgba(16,185,129,0.18)' },
];

type Card = {
  id: string;
  title: string;
  code: string;
  col: number;
  initials: string[];
  docs: number;
};

const CARDS: Card[] = [
  { id: 'c1', title: 'Ação trabalhista — Mendes', code: 'PROC-0421', col: 0, initials: ['LM', 'CR'], docs: 12 },
  { id: 'c2', title: 'Recurso cível — Ferreira', code: 'PROC-0388', col: 1, initials: ['JS', 'LM', 'AR'], docs: 24 },
  { id: 'c3', title: 'Inventário — Albuquerque', code: 'PROC-0276', col: 2, initials: ['CR', 'AR'], docs: 8 },
  { id: 'c4', title: 'Acordo extrajudicial — TechCo', code: 'PROC-0190', col: 3, initials: ['JS'], docs: 5 },
];

const AVATARS = [
  { initials: 'JS', color: '#9B8659', x: '12%', y: '14%' },
  { initials: 'LM', color: '#3B82F6', x: '88%', y: '16%' },
  { initials: 'CR', color: '#60A5FA', x: '14%', y: '86%' },
  { initials: 'AR', color: '#9B8659', x: '86%', y: '84%' },
];

export const Scene12 = () => {
  const [phase, setPhase] = useState(0);

  useEffect(() => {
    const timers = [
      setTimeout(() => setPhase(1), 80),    // headline + board frame
      setTimeout(() => setPhase(2), 600),   // columns draw
      setTimeout(() => setPhase(3), 1200),  // cards stagger in
      setTimeout(() => setPhase(4), 2200),  // card moves columns
      setTimeout(() => setPhase(5), 3200),  // avatars appear
      setTimeout(() => setPhase(6), 4200),  // shared base label
      setTimeout(() => setPhase(7), 5200),  // closing pulse
    ];
    return () => timers.forEach((t) => clearTimeout(t));
  }, []);

  return (
    <motion.div
      className="absolute inset-0 flex flex-col bg-[#020617] overflow-hidden"
      initial="initial"
      animate="animate"
      exit="exit"
      variants={sceneTransitions.zoomThrough}
    >
      {/* Animated radial backdrop */}
      <motion.div
        className="absolute inset-0"
        style={{
          background:
            'radial-gradient(ellipse at center, rgba(4,30,66,0.92) 0%, rgba(2,6,23,1) 70%)',
        }}
        animate={{ opacity: [0.85, 1, 0.85] }}
        transition={{ duration: 3.5, repeat: Infinity, ease: 'easeInOut' }}
      />

      {/* Drifting gold + blue blobs */}
      <motion.div
        className="absolute rounded-full"
        style={{
          width: '50cqw',
          height: '50cqw',
          left: '-10cqw',
          top: '-12cqw',
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
          width: '45cqw',
          height: '45cqw',
          right: '-10cqw',
          bottom: '-12cqw',
          background:
            'radial-gradient(circle, rgba(59,130,246,0.30) 0%, rgba(2,6,23,0) 65%)',
          filter: 'blur(60px)',
        }}
        animate={{ scale: [1, 1.12, 1], y: [0, 20, 0] }}
        transition={{ duration: 7, repeat: Infinity, ease: 'easeInOut' }}
      />

      <div className="absolute inset-0 tech-grid opacity-40" />

      {/* HEADER */}
      <div className="relative z-10 px-[5cqw] pt-[5cqw]">
        <motion.div
          className="flex items-center justify-between mb-[2cqw]"
          initial={{ opacity: 0, y: -16 }}
          animate={phase >= 1 ? { opacity: 1, y: 0 } : { opacity: 0, y: -16 }}
          transition={{ duration: 0.45, ease: 'circOut' }}
        >
          <div className="flex items-center gap-[2cqw]">
            <img
              src={logoSmall}
              alt="Advocates"
              className="object-contain"
              style={{ height: '3.6cqw', opacity: 0.9 }}
            />
            <span
              className="font-mono uppercase tracking-[0.3em] text-[#9B8659]"
              style={{ fontSize: '2.1cqw' }}
            >
              Kanban
            </span>
          </div>
          <motion.div
            className="flex items-center gap-[1.2cqw]"
            animate={{ opacity: [0.6, 1, 0.6] }}
            transition={{ duration: 1.6, repeat: Infinity, ease: 'easeInOut' }}
          >
            <span
              className="bg-[#10B981] rounded-full"
              style={{ width: '1.2cqw', height: '1.2cqw' }}
            />
            <span
              className="font-mono uppercase tracking-[0.25em] text-[#10B981]"
              style={{ fontSize: '1.8cqw' }}
            >
              ao vivo
            </span>
          </motion.div>
        </motion.div>

        {/* Hook headline */}
        <h2
          className="font-display font-black text-white leading-[1] tracking-tight mt-[2cqw]"
          style={{ fontSize: '8.6cqw' }}
        >
          <motion.span
            className="inline-block"
            initial={{ opacity: 0, y: 24, filter: 'blur(10px)' }}
            animate={
              phase >= 1
                ? { opacity: 1, y: 0, filter: 'blur(0px)' }
                : { opacity: 0, y: 24, filter: 'blur(10px)' }
            }
            transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
          >
            Um caso.{' '}
          </motion.span>
          <motion.span
            className="inline-block"
            initial={{ opacity: 0, y: 24, filter: 'blur(10px)' }}
            animate={
              phase >= 2
                ? { opacity: 1, y: 0, filter: 'blur(0px)' }
                : { opacity: 0, y: 24, filter: 'blur(10px)' }
            }
            transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
          >
            <span className="text-gradient-gold">Um Kanban.</span>{' '}
          </motion.span>
          <motion.span
            className="inline-block"
            initial={{ opacity: 0, y: 24, filter: 'blur(10px)' }}
            animate={
              phase >= 3
                ? { opacity: 1, y: 0, filter: 'blur(0px)' }
                : { opacity: 0, y: 24, filter: 'blur(10px)' }
            }
            transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
          >
            <span className="text-gradient-blue">Toda a equipe.</span>
          </motion.span>
        </h2>
      </div>

      {/* KANBAN BOARD */}
      <div className="relative z-10 flex-1 px-[5cqw] pb-[5cqw] pt-[3cqw]">
        <motion.div
          className="glow-box rounded-[3cqw] relative overflow-hidden h-full"
          style={{ padding: '3cqw' }}
          initial={{ opacity: 0, scale: 0.96, y: 20 }}
          animate={
            phase >= 1
              ? { opacity: 1, scale: 1, y: 0 }
              : { opacity: 0, scale: 0.96, y: 20 }
          }
          transition={{ type: 'spring', stiffness: 220, damping: 24 }}
        >
          {/* Connected lawyer avatars in corners */}
          {AVATARS.map((a, i) => (
            <motion.div
              key={a.initials}
              className="absolute flex items-center justify-center rounded-full font-display font-bold text-white border-2 z-20"
              style={{
                width: '7cqw',
                height: '7cqw',
                left: a.x,
                top: a.y,
                transform: 'translate(-50%, -50%)',
                background: `${a.color}33`,
                borderColor: a.color,
                fontSize: '2.4cqw',
                boxShadow: `0 0 20px ${a.color}80`,
              }}
              initial={{ opacity: 0, scale: 0.4 }}
              animate={
                phase >= 5
                  ? { opacity: 1, scale: [1, 1.08, 1] }
                  : { opacity: 0, scale: 0.4 }
              }
              transition={
                phase >= 5
                  ? {
                      opacity: { duration: 0.4, delay: i * 0.08 },
                      scale: { duration: 1.8, repeat: Infinity, ease: 'easeInOut', delay: i * 0.2 },
                    }
                  : { duration: 0.3 }
              }
            >
              {a.initials}
            </motion.div>
          ))}

          {/* Connecting lines from avatars to center (svg) */}
          <svg
            className="absolute inset-0 w-full h-full pointer-events-none z-10"
            viewBox="0 0 100 100"
            preserveAspectRatio="none"
          >
            {AVATARS.map((a, i) => {
              const ax = parseFloat(a.x);
              const ay = parseFloat(a.y);
              return (
                <motion.line
                  key={a.initials}
                  x1={ax}
                  y1={ay}
                  x2="50"
                  y2="50"
                  stroke={a.color}
                  strokeWidth="0.12"
                  strokeOpacity="0.55"
                  strokeDasharray="0.8 1.2"
                  initial={{ pathLength: 0, opacity: 0 }}
                  animate={
                    phase >= 5
                      ? { pathLength: 1, opacity: [0.25, 0.7, 0.25] }
                      : { pathLength: 0, opacity: 0 }
                  }
                  transition={
                    phase >= 5
                      ? {
                          pathLength: { duration: 0.6, delay: i * 0.08, ease: [0.16, 1, 0.3, 1] },
                          opacity: { duration: 2.4, repeat: Infinity, ease: 'easeInOut', delay: i * 0.15 },
                        }
                      : { duration: 0.3 }
                  }
                />
              );
            })}
          </svg>

          {/* Columns — 2x2 grid for portrait */}
          <div className="relative grid grid-cols-2 grid-rows-2 gap-[1.6cqw] h-full z-0">
            {COLUMNS.map((col, ci) => (
              <motion.div
                key={col.title}
                className="rounded-[1.6cqw] border border-white/10 relative overflow-hidden"
                style={{
                  background: `linear-gradient(180deg, ${col.accent} 0%, rgba(2,6,23,0.6) 100%)`,
                  padding: '1.6cqw 1.4cqw',
                }}
                initial={{ opacity: 0, y: 24 }}
                animate={
                  phase >= 2
                    ? { opacity: 1, y: 0 }
                    : { opacity: 0, y: 24 }
                }
                transition={{
                  duration: 0.45,
                  ease: [0.16, 1, 0.3, 1],
                  delay: phase >= 2 ? ci * 0.08 : 0,
                }}
              >
                {/* Column header */}
                <div className="flex items-center justify-between mb-[1.6cqw]">
                  <div className="flex items-center gap-[1cqw]">
                    <span
                      className="rounded-full"
                      style={{ background: col.color, width: '1.2cqw', height: '1.2cqw' }}
                    />
                    <span
                      className="font-mono uppercase tracking-[0.2em] text-white/85"
                      style={{ fontSize: '1.7cqw' }}
                    >
                      {col.title}
                    </span>
                  </div>
                  <span
                    className="font-mono text-white/50"
                    style={{ fontSize: '1.6cqw' }}
                  >
                    {CARDS.filter((c) => (phase >= 4 && c.id === 'c2' ? 2 : c.col) === ci).length}
                  </span>
                </div>

                {/* Continuous "scanning" highlight per column */}
                <motion.div
                  className="absolute left-0 right-0"
                  style={{
                    height: '0.3cqw',
                    background: `linear-gradient(90deg, transparent 0%, ${col.color} 50%, transparent 100%)`,
                    opacity: 0.55,
                  }}
                  animate={{ top: ['18%', '88%', '18%'] }}
                  transition={{
                    duration: 3.4 + ci * 0.4,
                    repeat: Infinity,
                    ease: 'easeInOut',
                  }}
                />
              </motion.div>
            ))}
          </div>

          {/* Cards layer (absolute over columns - 2x2 grid) */}
          {CARDS.map((card, i) => {
            // 2x2 layout: col 0/1 → top row, col 2/3 → bottom row
            const positions = [
              { left: '2%', top: '7%' },
              { left: '52%', top: '7%' },
              { left: '2%', top: '57%' },
              { left: '52%', top: '57%' },
            ];
            // Card c2 (Recurso cível) animates from col 1 -> col 2 at phase 4
            const targetCol =
              card.id === 'c2' && phase >= 4 ? 2 : card.col;
            const pos = positions[targetCol];

            return (
              <motion.div
                key={card.id}
                className="absolute rounded-[1.4cqw] border border-white/15 bg-[#020617]/92 backdrop-blur-sm shadow-2xl z-[5]"
                style={{
                  width: '46%',
                  padding: '1.6cqw',
                }}
                initial={{ opacity: 0, scale: 0.85, left: positions[card.col].left, top: positions[card.col].top }}
                animate={
                  phase >= 3
                    ? {
                        opacity: 1,
                        scale: 1,
                        left: pos.left,
                        top: pos.top,
                      }
                    : { opacity: 0, scale: 0.85, left: positions[card.col].left, top: positions[card.col].top }
                }
                transition={{
                  opacity: { duration: 0.4, delay: phase >= 3 ? i * 0.08 : 0 },
                  scale: { duration: 0.4, delay: phase >= 3 ? i * 0.08 : 0, ease: [0.16, 1, 0.3, 1] },
                  left: { duration: 0.9, ease: [0.16, 1, 0.3, 1] },
                  top: { duration: 0.9, ease: [0.16, 1, 0.3, 1] },
                }}
              >
                {/* Code chip */}
                <div className="flex items-center justify-between mb-[0.8cqw]">
                  <span
                    className="font-mono uppercase tracking-[0.18em] text-[#9B8659]"
                    style={{ fontSize: '1.3cqw' }}
                  >
                    {card.code}
                  </span>
                  <div className="flex items-center gap-[0.5cqw]">
                    <FileText
                      className="text-white/60"
                      strokeWidth={1.8}
                      style={{ width: '1.5cqw', height: '1.5cqw' }}
                    />
                    <span
                      className="font-mono text-white/60"
                      style={{ fontSize: '1.3cqw' }}
                    >
                      {card.docs}
                    </span>
                  </div>
                </div>

                {/* Title */}
                <div
                  className="font-display font-semibold text-white leading-[1.15]"
                  style={{ fontSize: '1.85cqw' }}
                >
                  {card.title}
                </div>

                {/* Mini progress bar */}
                <motion.div
                  className="mt-[1.2cqw] rounded-full overflow-hidden bg-white/10"
                  style={{ height: '0.4cqw' }}
                >
                  <motion.div
                    className="h-full"
                    style={{
                      background:
                        'linear-gradient(90deg, #3B82F6 0%, #9B8659 100%)',
                      transformOrigin: 'left',
                    }}
                    initial={{ scaleX: 0 }}
                    animate={
                      phase >= 3
                        ? { scaleX: [0.2, 0.8, 0.55] }
                        : { scaleX: 0 }
                    }
                    transition={{
                      duration: 3,
                      repeat: Infinity,
                      ease: 'easeInOut',
                      delay: phase >= 3 ? i * 0.15 : 0,
                    }}
                  />
                </motion.div>

                {/* Avatars on card */}
                <div className="flex items-center justify-between mt-[1.2cqw]">
                  <div className="flex -space-x-[0.7cqw]">
                    {card.initials.map((ini, k) => {
                      const av = AVATARS.find((a) => a.initials === ini);
                      return (
                        <span
                          key={k}
                          className="flex items-center justify-center rounded-full border border-[#020617] font-display font-bold text-white"
                          style={{
                            width: '2.4cqw',
                            height: '2.4cqw',
                            background: av ? av.color : '#3B82F6',
                            fontSize: '1.15cqw',
                          }}
                        >
                          {ini}
                        </span>
                      );
                    })}
                  </div>
                  {/* Live ping for the moving card */}
                  {card.id === 'c2' && phase >= 4 && (
                    <motion.span
                      className="rounded-full bg-[#10B981]"
                      style={{ width: '0.9cqw', height: '0.9cqw' }}
                      animate={{ opacity: [0.4, 1, 0.4], scale: [1, 1.6, 1] }}
                      transition={{ duration: 1.1, repeat: Infinity, ease: 'easeInOut' }}
                    />
                  )}
                </div>
              </motion.div>
            );
          })}

          {/* Shared document base banner - the headline message */}
          <motion.div
            className="absolute left-1/2 z-30 flex items-center gap-[1.4cqw] rounded-full border border-[#9B8659]/60 bg-[#020617]/85 backdrop-blur-md"
            style={{
              padding: '1.4cqw 2.4cqw',
              bottom: '2cqw',
              transform: 'translateX(-50%)',
              maxWidth: '88%',
            }}
            initial={{ opacity: 0, scale: 0.85, y: 20 }}
            animate={
              phase >= 6
                ? { opacity: 1, scale: [1, 1.04, 1], y: 0 }
                : { opacity: 0, scale: 0.85, y: 20 }
            }
            transition={
              phase >= 6
                ? {
                    opacity: { duration: 0.45 },
                    y: { duration: 0.45 },
                    scale: { duration: 1.7, repeat: Infinity, ease: 'easeInOut' },
                  }
                : { duration: 0.3 }
            }
          >
            <Layers
              className="text-[#9B8659] shrink-0"
              strokeWidth={2}
              style={{ width: '2.6cqw', height: '2.6cqw' }}
            />
            <span
              className="font-display font-bold text-white text-center leading-[1.2]"
              style={{ fontSize: '2.1cqw' }}
            >
              Mesma{' '}
              <span className="text-gradient-gold">base documental</span>
            </span>
            <Users
              className="text-[#3B82F6] shrink-0"
              strokeWidth={2}
              style={{ width: '2.6cqw', height: '2.6cqw' }}
            />
          </motion.div>

          {/* Final closing pulse ring around the whole board */}
          <motion.div
            className="absolute inset-0 rounded-[1.4cqw] pointer-events-none"
            style={{
              boxShadow: '0 0 0 0 rgba(155,134,89,0.6)',
            }}
            animate={
              phase >= 7
                ? {
                    boxShadow: [
                      '0 0 0 0 rgba(155,134,89,0.6)',
                      '0 0 0 1.2cqw rgba(155,134,89,0)',
                      '0 0 0 0 rgba(155,134,89,0)',
                    ],
                  }
                : { boxShadow: '0 0 0 0 rgba(155,134,89,0)' }
            }
            transition={
              phase >= 7
                ? { duration: 1.6, repeat: Infinity, ease: 'easeInOut' }
                : { duration: 0.3 }
            }
          />
        </motion.div>
      </div>
    </motion.div>
  );
};

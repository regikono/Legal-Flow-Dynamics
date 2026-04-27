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
          width: '50vw',
          height: '50vw',
          left: '-10vw',
          top: '-12vw',
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
          bottom: '-12vw',
          background:
            'radial-gradient(circle, rgba(59,130,246,0.30) 0%, rgba(2,6,23,0) 65%)',
          filter: 'blur(60px)',
        }}
        animate={{ scale: [1, 1.12, 1], y: [0, 20, 0] }}
        transition={{ duration: 7, repeat: Infinity, ease: 'easeInOut' }}
      />

      <div className="absolute inset-0 tech-grid opacity-40" />

      {/* HEADER */}
      <div className="relative z-10 px-[4vw] pt-[2.2vw]">
        <motion.div
          className="flex items-center justify-between"
          initial={{ opacity: 0, y: -16 }}
          animate={phase >= 1 ? { opacity: 1, y: 0 } : { opacity: 0, y: -16 }}
          transition={{ duration: 0.45, ease: 'circOut' }}
        >
          <div className="flex items-center gap-[1vw]">
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
              Kanban dos processos
            </span>
          </div>
          <motion.div
            className="flex items-center gap-[0.6vw]"
            animate={{ opacity: [0.6, 1, 0.6] }}
            transition={{ duration: 1.6, repeat: Infinity, ease: 'easeInOut' }}
          >
            <span
              className="bg-[#10B981] rounded-full"
              style={{ width: '0.55vw', height: '0.55vw' }}
            />
            <span
              className="font-mono uppercase tracking-[0.25em] text-[#10B981]"
              style={{ fontSize: '0.8vw' }}
            >
              equipe ao vivo
            </span>
          </motion.div>
        </motion.div>

        {/* Hook headline */}
        <h2
          className="font-display font-black text-white leading-[1] tracking-tight mt-[1.2vw]"
          style={{ fontSize: '4.2vw' }}
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
      <div className="relative z-10 flex-1 px-[4vw] pb-[2vw] pt-[1.5vw]">
        <motion.div
          className="glow-box rounded-[1.4vw] relative overflow-hidden h-full"
          style={{ padding: '1.6vw' }}
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
                width: '3vw',
                height: '3vw',
                left: a.x,
                top: a.y,
                transform: 'translate(-50%, -50%)',
                background: `${a.color}33`,
                borderColor: a.color,
                fontSize: '1vw',
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

          {/* Columns */}
          <div className="relative grid grid-cols-4 gap-[1vw] h-full z-0">
            {COLUMNS.map((col, ci) => (
              <motion.div
                key={col.title}
                className="rounded-[0.9vw] border border-white/10 relative overflow-hidden"
                style={{
                  background: `linear-gradient(180deg, ${col.accent} 0%, rgba(2,6,23,0.6) 100%)`,
                  padding: '0.9vw 0.8vw',
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
                <div className="flex items-center justify-between mb-[0.8vw]">
                  <div className="flex items-center gap-[0.5vw]">
                    <span
                      className="rounded-full"
                      style={{ background: col.color, width: '0.55vw', height: '0.55vw' }}
                    />
                    <span
                      className="font-mono uppercase tracking-[0.2em] text-white/85"
                      style={{ fontSize: '0.78vw' }}
                    >
                      {col.title}
                    </span>
                  </div>
                  <span
                    className="font-mono text-white/50"
                    style={{ fontSize: '0.7vw' }}
                  >
                    {CARDS.filter((c) => (phase >= 4 && c.id === 'c2' ? 2 : c.col) === ci).length}
                  </span>
                </div>

                {/* Continuous "scanning" highlight per column */}
                <motion.div
                  className="absolute left-0 right-0"
                  style={{
                    height: '0.15vw',
                    background: `linear-gradient(90deg, transparent 0%, ${col.color} 50%, transparent 100%)`,
                    opacity: 0.55,
                  }}
                  animate={{ top: ['12%', '92%', '12%'] }}
                  transition={{
                    duration: 3.4 + ci * 0.4,
                    repeat: Infinity,
                    ease: 'easeInOut',
                  }}
                />
              </motion.div>
            ))}
          </div>

          {/* Cards layer (absolute over columns) */}
          {CARDS.map((card, i) => {
            const positions = [
              { left: '0.8%', top: '6.5vw' },
              { left: '25.8%', top: '6.5vw' },
              { left: '50.8%', top: '6.5vw' },
              { left: '75.8%', top: '6.5vw' },
            ];
            // Card c2 (Recurso cível) animates from col 1 -> col 2 at phase 4
            const targetCol =
              card.id === 'c2' && phase >= 4 ? 2 : card.col;
            const pos = positions[targetCol];

            return (
              <motion.div
                key={card.id}
                className="absolute rounded-[0.7vw] border border-white/15 bg-[#020617]/92 backdrop-blur-sm shadow-2xl z-[5]"
                style={{
                  width: '23%',
                  padding: '0.8vw',
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
                <div className="flex items-center justify-between mb-[0.4vw]">
                  <span
                    className="font-mono uppercase tracking-[0.18em] text-[#9B8659]"
                    style={{ fontSize: '0.6vw' }}
                  >
                    {card.code}
                  </span>
                  <div className="flex items-center gap-[0.25vw]">
                    <FileText
                      className="text-white/60"
                      strokeWidth={1.8}
                      style={{ width: '0.7vw', height: '0.7vw' }}
                    />
                    <span
                      className="font-mono text-white/60"
                      style={{ fontSize: '0.6vw' }}
                    >
                      {card.docs}
                    </span>
                  </div>
                </div>

                {/* Title */}
                <div
                  className="font-display font-semibold text-white leading-[1.15]"
                  style={{ fontSize: '0.85vw' }}
                >
                  {card.title}
                </div>

                {/* Mini progress bar */}
                <motion.div
                  className="mt-[0.6vw] rounded-full overflow-hidden bg-white/10"
                  style={{ height: '0.18vw' }}
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
                <div className="flex items-center justify-between mt-[0.6vw]">
                  <div className="flex -space-x-[0.35vw]">
                    {card.initials.map((ini, k) => {
                      const av = AVATARS.find((a) => a.initials === ini);
                      return (
                        <span
                          key={k}
                          className="flex items-center justify-center rounded-full border border-[#020617] font-display font-bold text-white"
                          style={{
                            width: '1.1vw',
                            height: '1.1vw',
                            background: av ? av.color : '#3B82F6',
                            fontSize: '0.55vw',
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
                      style={{ width: '0.4vw', height: '0.4vw' }}
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
            className="absolute left-1/2 z-30 flex items-center gap-[0.9vw] rounded-full border border-[#9B8659]/60 bg-[#020617]/85 backdrop-blur-md"
            style={{
              padding: '0.8vw 1.6vw',
              bottom: '1.3vw',
              transform: 'translateX(-50%)',
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
              className="text-[#9B8659]"
              strokeWidth={2}
              style={{ width: '1.2vw', height: '1.2vw' }}
            />
            <span
              className="font-display font-bold text-white"
              style={{ fontSize: '1.1vw' }}
            >
              O time acessa a{' '}
              <span className="text-gradient-gold">mesma base documental</span>
            </span>
            <Users
              className="text-[#3B82F6]"
              strokeWidth={2}
              style={{ width: '1.2vw', height: '1.2vw' }}
            />
          </motion.div>

          {/* Final closing pulse ring around the whole board */}
          <motion.div
            className="absolute inset-0 rounded-[1.4vw] pointer-events-none"
            style={{
              boxShadow: '0 0 0 0 rgba(155,134,89,0.6)',
            }}
            animate={
              phase >= 7
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

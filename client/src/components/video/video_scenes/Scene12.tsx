import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';
import { sceneTransitions } from '@/lib/video/animations';
import { Layers, Users, FileText } from 'lucide-react';
import logoSmall from '@assets/logo_w_1777283278719.png';

const LANES = [
  { title: 'Triagem', color: '#3B82F6', top: '18cqw' },
  { title: 'Em andamento', color: '#9B8659', top: '31cqw' },
  { title: 'Aguardando', color: '#60A5FA', top: '44cqw' },
  { title: 'Concluído', color: '#10B981', top: '57cqw' },
];

const TEAM = [
  { initials: 'JS', color: '#9B8659' },
  { initials: 'LM', color: '#3B82F6' },
  { initials: 'CR', color: '#60A5FA' },
  { initials: 'AR', color: '#10B981' },
];

const CARDS = [
  { id: 'c1', code: 'PROC-0421', title: 'Ação trabalhista — Mendes', docs: 12, lane: 0, people: ['LM', 'CR'] },
  { id: 'c2', code: 'PROC-0388', title: 'Recurso cível — Ferreira', docs: 24, lane: 1, people: ['JS', 'LM', 'AR'] },
  { id: 'c3', code: 'PROC-0276', title: 'Inventário — Albuquerque', docs: 8, lane: 2, people: ['CR', 'AR'] },
  { id: 'c4', code: 'PROC-0190', title: 'Acordo extrajudicial — TechCo', docs: 5, lane: 3, people: ['JS'] },
];

export const Scene12 = () => {
  const [phase, setPhase] = useState(0);

  useEffect(() => {
    const timers = [
      setTimeout(() => setPhase(1), 80),
      setTimeout(() => setPhase(2), 620),
      setTimeout(() => setPhase(3), 1200),
      setTimeout(() => setPhase(4), 2200),
      setTimeout(() => setPhase(5), 3200),
      setTimeout(() => setPhase(6), 4300),
      setTimeout(() => setPhase(7), 5200),
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
      <motion.div
        className="absolute inset-0"
        style={{
          background:
            'radial-gradient(ellipse at center, rgba(4,30,66,0.92) 0%, rgba(2,6,23,1) 70%)',
        }}
        animate={{ opacity: [0.85, 1, 0.85] }}
        transition={{ duration: 3.5, repeat: Infinity, ease: 'easeInOut' }}
      />
      <motion.div
        className="absolute rounded-full"
        style={{
          width: '54cqw',
          height: '54cqw',
          left: '-14cqw',
          top: '-14cqw',
          background:
            'radial-gradient(circle, rgba(155,134,89,0.34) 0%, rgba(2,6,23,0) 65%)',
          filter: 'blur(60px)',
        }}
        animate={{ scale: [1, 1.1, 1], x: [0, 20, 0] }}
        transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
      />
      <motion.div
        className="absolute rounded-full"
        style={{
          width: '50cqw',
          height: '50cqw',
          right: '-12cqw',
          bottom: '-12cqw',
          background:
            'radial-gradient(circle, rgba(59,130,246,0.32) 0%, rgba(2,6,23,0) 65%)',
          filter: 'blur(60px)',
        }}
        animate={{ scale: [1, 1.12, 1], y: [0, 18, 0] }}
        transition={{ duration: 7, repeat: Infinity, ease: 'easeInOut' }}
      />
      <div className="absolute inset-0 tech-grid opacity-40" />

      <div className="relative z-10 flex h-full flex-col px-[5cqw] pt-[6cqw] pb-[5cqw]">
        <motion.div
          className="flex items-center gap-[2cqw]"
          initial={{ opacity: 0, y: -12 }}
          animate={phase >= 1 ? { opacity: 1, y: 0 } : { opacity: 0, y: -12 }}
          transition={{ duration: 0.4, ease: 'circOut' }}
        >
          <img
            src={logoSmall}
            alt="Advocates"
            className="object-contain"
            style={{ height: '4.8cqw', opacity: 0.9 }}
          />
          <span
            className="font-mono uppercase tracking-[0.24em] text-[#9B8659]"
            style={{ fontSize: '2.8cqw' }}
          >
            Kanban colaborativo
          </span>
        </motion.div>

        <div className="mt-[4cqw]">
          <h2
            className="font-display font-black text-white leading-[0.96] tracking-tight"
            style={{ fontSize: '10.6cqw' }}
          >
            <motion.span
              className="block"
              initial={{ opacity: 0, y: 22, filter: 'blur(10px)' }}
              animate={phase >= 1 ? { opacity: 1, y: 0, filter: 'blur(0px)' } : { opacity: 0, y: 22, filter: 'blur(10px)' }}
              transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
            >
              Um caso.
            </motion.span>
            <motion.span
              className="block text-gradient-gold"
              initial={{ opacity: 0, y: 22, filter: 'blur(10px)' }}
              animate={phase >= 2 ? { opacity: 1, y: 0, filter: 'blur(0px)' } : { opacity: 0, y: 22, filter: 'blur(10px)' }}
              transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
            >
              Um Kanban.
            </motion.span>
            <motion.span
              className="block text-gradient-blue"
              initial={{ opacity: 0, y: 22, filter: 'blur(10px)' }}
              animate={phase >= 3 ? { opacity: 1, y: 0, filter: 'blur(0px)' } : { opacity: 0, y: 22, filter: 'blur(10px)' }}
              transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
            >
              Todo mundo junto.
            </motion.span>
          </h2>
          <motion.p
            className="mt-[3cqw] text-[#CBD5E1] font-display leading-[1.2]"
            style={{ fontSize: '3.5cqw' }}
            initial={{ opacity: 0, y: 12 }}
            animate={phase >= 4 ? { opacity: 1, y: 0 } : { opacity: 0, y: 12 }}
            transition={{ duration: 0.45, ease: 'circOut' }}
          >
            O time acessa a <span className="text-white font-semibold">mesma base documental</span> e vê o andamento do caso no mesmo lugar.
          </motion.p>
        </div>

        <motion.div
          className="relative mt-[4cqw] flex-1 rounded-[4cqw] border border-white/10 bg-[#020617]/70 backdrop-blur-sm overflow-hidden"
          style={{ boxShadow: '0 20px 60px rgba(0,0,0,0.35)' }}
          initial={{ opacity: 0, scale: 0.96, y: 20 }}
          animate={phase >= 2 ? { opacity: 1, scale: 1, y: 0 } : { opacity: 0, scale: 0.96, y: 20 }}
          transition={{ type: 'spring', stiffness: 220, damping: 24 }}
        >
          <div className="px-[3cqw] pt-[3cqw] pb-[2cqw] border-b border-white/10">
            <div className="flex flex-wrap gap-[1.6cqw]">
              {TEAM.map((member, i) => (
                <motion.div
                  key={member.initials}
                  className="flex items-center gap-[1.2cqw] rounded-full border text-white"
                  style={{
                    borderColor: `${member.color}88`,
                    background: `${member.color}22`,
                    padding: '1.1cqw 1.8cqw',
                  }}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={phase >= 5 ? { opacity: 1, scale: [1, 1.04, 1] } : { opacity: 0, scale: 0.8 }}
                  transition={phase >= 5 ? {
                    opacity: { duration: 0.35, delay: i * 0.08 },
                    scale: { duration: 1.8, repeat: Infinity, ease: 'easeInOut', delay: i * 0.12 },
                  } : { duration: 0.3 }}
                >
                  <span
                    className="flex items-center justify-center rounded-full font-display font-bold"
                    style={{
                      width: '5cqw',
                      height: '5cqw',
                      background: member.color,
                      fontSize: '2.4cqw',
                    }}
                  >
                    {member.initials}
                  </span>
                  <span
                    className="font-display font-semibold"
                    style={{ fontSize: '2.6cqw' }}
                  >
                    conectado
                  </span>
                </motion.div>
              ))}
            </div>
          </div>

          <div className="relative h-full px-[3cqw] pt-[3cqw] pb-[14cqw]">
            {LANES.map((lane, i) => (
              <motion.div
                key={lane.title}
                className="absolute left-[3cqw] right-[3cqw] rounded-[3cqw] border border-white/10 overflow-hidden"
                style={{
                  top: lane.top,
                  height: '11cqw',
                  background: `linear-gradient(180deg, ${lane.color}22 0%, rgba(2,6,23,0.92) 100%)`,
                }}
                initial={{ opacity: 0, y: 16 }}
                animate={phase >= 2 ? { opacity: 1, y: 0 } : { opacity: 0, y: 16 }}
                transition={{ duration: 0.4, delay: phase >= 2 ? i * 0.08 : 0, ease: [0.16, 1, 0.3, 1] }}
              >
                <div className="flex h-full items-center justify-between px-[2.4cqw]">
                  <div className="flex items-center gap-[1.4cqw]">
                    <span
                      className="rounded-full"
                      style={{ width: '1.8cqw', height: '1.8cqw', background: lane.color }}
                    />
                    <span
                      className="font-display font-bold text-white"
                      style={{ fontSize: '3.1cqw' }}
                    >
                      {lane.title}
                    </span>
                  </div>
                  <motion.div
                    className="h-[0.6cqw] w-[18cqw] rounded-full"
                    style={{
                      background: `linear-gradient(90deg, transparent 0%, ${lane.color} 50%, transparent 100%)`,
                    }}
                    animate={{ x: ['-20%', '20%', '-20%'], opacity: [0.25, 0.7, 0.25] }}
                    transition={{ duration: 2.6 + i * 0.15, repeat: Infinity, ease: 'easeInOut' }}
                  />
                </div>
              </motion.div>
            ))}

            {CARDS.map((card, i) => {
              const top = card.id === 'c2' && phase >= 4 ? '44.8cqw' : LANES[card.lane].top;
              return (
                <motion.div
                  key={card.id}
                  className="absolute left-[8cqw] right-[8cqw] rounded-[3cqw] border border-white/15 bg-[#071225]/96 backdrop-blur-sm"
                  style={{ top, padding: '2.2cqw', boxShadow: '0 14px 30px rgba(0,0,0,0.35)' }}
                  initial={{ opacity: 0, scale: 0.88 }}
                  animate={phase >= 3 ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.88 }}
                  transition={{
                    opacity: { duration: 0.35, delay: phase >= 3 ? i * 0.08 : 0 },
                    scale: { duration: 0.35, delay: phase >= 3 ? i * 0.08 : 0, ease: [0.16, 1, 0.3, 1] },
                    top: { duration: 0.9, ease: [0.16, 1, 0.3, 1] },
                  }}
                >
                  <div className="flex items-center justify-between gap-[2cqw]">
                    <div>
                      <div
                        className="font-mono uppercase tracking-[0.18em] text-[#9B8659]"
                        style={{ fontSize: '2.2cqw' }}
                      >
                        {card.code}
                      </div>
                      <div
                        className="mt-[0.7cqw] font-display font-semibold text-white leading-[1.08]"
                        style={{ fontSize: '3.1cqw' }}
                      >
                        {card.title}
                      </div>
                    </div>
                    <div className="flex items-center gap-[1cqw] text-white/75">
                      <FileText strokeWidth={1.8} style={{ width: '2.6cqw', height: '2.6cqw' }} />
                      <span className="font-display font-semibold" style={{ fontSize: '2.7cqw' }}>{card.docs}</span>
                    </div>
                  </div>
                  <div className="mt-[1.6cqw] flex items-center justify-between">
                    <div className="flex -space-x-[1cqw]">
                      {card.people.map((person) => {
                        const member = TEAM.find((item) => item.initials === person);
                        return (
                          <span
                            key={person}
                            className="flex items-center justify-center rounded-full border border-[#020617] font-display font-bold text-white"
                            style={{
                              width: '4.6cqw',
                              height: '4.6cqw',
                              background: member?.color ?? '#3B82F6',
                              fontSize: '2.1cqw',
                            }}
                          >
                            {person}
                          </span>
                        );
                      })}
                    </div>
                    {card.id === 'c2' && phase >= 4 && (
                      <motion.div
                        className="flex items-center gap-[1cqw] text-[#10B981]"
                        animate={{ opacity: [0.5, 1, 0.5] }}
                        transition={{ duration: 1.1, repeat: Infinity, ease: 'easeInOut' }}
                      >
                        <span className="bg-[#10B981] rounded-full" style={{ width: '1.5cqw', height: '1.5cqw' }} />
                        <span className="font-display font-semibold" style={{ fontSize: '2.4cqw' }}>movendo</span>
                      </motion.div>
                    )}
                  </div>
                </motion.div>
              );
            })}
          </div>
        </motion.div>

        <motion.div
          className="mt-[3cqw] flex items-center justify-center gap-[2cqw] rounded-full border border-[#9B8659]/50 bg-[#020617]/82 backdrop-blur-sm px-[3cqw] py-[2cqw]"
          initial={{ opacity: 0, scale: 0.9, y: 12 }}
          animate={phase >= 6 ? { opacity: 1, scale: [1, 1.03, 1], y: 0 } : { opacity: 0, scale: 0.9, y: 12 }}
          transition={phase >= 6 ? {
            opacity: { duration: 0.4 },
            y: { duration: 0.4 },
            scale: { duration: 1.6, repeat: Infinity, ease: 'easeInOut' },
          } : { duration: 0.3 }}
        >
          <Layers className="text-[#9B8659] shrink-0" strokeWidth={2} style={{ width: '3.8cqw', height: '3.8cqw' }} />
          <span className="font-display font-bold text-white text-center leading-[1.1]" style={{ fontSize: '3.4cqw' }}>
            Mesma base documental
          </span>
          <Users className="text-[#3B82F6] shrink-0" strokeWidth={2} style={{ width: '3.8cqw', height: '3.8cqw' }} />
        </motion.div>
      </div>
    </motion.div>
  );
};

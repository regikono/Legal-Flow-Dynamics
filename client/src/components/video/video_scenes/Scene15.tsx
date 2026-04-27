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

const DOC_LINES = [92, 78, 88, 70, 95, 64, 82, 76];

const INSIGHTS = [
  {
    icon: FileText,
    title: 'Resumo do processo',
    body: 'Ação de cobrança · valor de R$ 142.800 · 3 partes principais.',
    color: '#9B8659',
    delay: 0,
  },
  {
    icon: Clock,
    title: 'Prazo crítico em 3 dias',
    body: 'Réplica à contestação já destacada dentro dos autos.',
    color: '#3B82F6',
    delay: 0.16,
  },
  {
    icon: AlertOctagon,
    title: 'Risco identificado',
    body: 'Preliminar de prescrição ainda sem enfrentamento direto.',
    color: '#EF4444',
    delay: 0.32,
  },
];

export const Scene15 = () => {
  const [phase, setPhase] = useState(0);

  useEffect(() => {
    const timers = [
      setTimeout(() => setPhase(1), 80),
      setTimeout(() => setPhase(2), 620),
      setTimeout(() => setPhase(3), 1300),
      setTimeout(() => setPhase(4), 2300),
      setTimeout(() => setPhase(5), 3900),
      setTimeout(() => setPhase(6), 5200),
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
      <motion.div
        className="absolute inset-0"
        style={{
          background:
            'radial-gradient(ellipse at 65% 50%, rgba(4,30,66,0.92) 0%, rgba(2,6,23,1) 70%)',
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
          bottom: '-14cqw',
          background:
            'radial-gradient(circle, rgba(155,134,89,0.32) 0%, rgba(2,6,23,0) 65%)',
          filter: 'blur(60px)',
        }}
        animate={{ scale: [1, 1.1, 1], x: [0, 22, 0] }}
        transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
      />
      <motion.div
        className="absolute rounded-full"
        style={{
          width: '48cqw',
          height: '48cqw',
          right: '-10cqw',
          top: '-10cqw',
          background:
            'radial-gradient(circle, rgba(59,130,246,0.30) 0%, rgba(2,6,23,0) 65%)',
          filter: 'blur(60px)',
        }}
        animate={{ scale: [1, 1.12, 1], y: [0, 18, 0] }}
        transition={{ duration: 7, repeat: Infinity, ease: 'easeInOut' }}
      />
      <div className="absolute inset-0 tech-grid opacity-40" />

      <div className="relative z-10 flex h-full w-full flex-col px-[5cqw] pt-[6cqw] pb-[5cqw]">
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
            className="font-mono uppercase tracking-[0.22em] text-[#9B8659]"
            style={{ fontSize: '2.7cqw' }}
          >
            IA jurídica pronta no produto
          </span>
        </motion.div>

        <div className="mt-[4cqw]">
          <h2
            className="font-display font-black text-white leading-[0.95] tracking-tight"
            style={{ fontSize: '10.4cqw' }}
          >
            <motion.span
              className="block text-gradient-gold"
              initial={{ opacity: 0, y: 24, filter: 'blur(10px)' }}
              animate={phase >= 1 ? { opacity: 1, y: 0, filter: 'blur(0px)' } : { opacity: 0, y: 24, filter: 'blur(10px)' }}
              transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
            >
              Lupa Jurídica.
            </motion.span>
            <motion.span
              className="block"
              initial={{ opacity: 0, y: 24, filter: 'blur(10px)' }}
              animate={phase >= 2 ? { opacity: 1, y: 0, filter: 'blur(0px)' } : { opacity: 0, y: 24, filter: 'blur(10px)' }}
              transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
            >
              Agente IA
            </motion.span>
            <motion.span
              className="block text-gradient-blue"
              initial={{ opacity: 0, y: 24, filter: 'blur(10px)' }}
              animate={phase >= 3 ? { opacity: 1, y: 0, filter: 'blur(0px)' } : { opacity: 0, y: 24, filter: 'blur(10px)' }}
              transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
            >
              dentro dos autos.
            </motion.span>
          </h2>

          <motion.p
            className="mt-[3cqw] font-display text-[#CBD5E1] leading-[1.2]"
            style={{ fontSize: '3.5cqw' }}
            initial={{ opacity: 0, y: 12 }}
            animate={phase >= 4 ? { opacity: 1, y: 0 } : { opacity: 0, y: 12 }}
            transition={{ duration: 0.45, ease: 'circOut' }}
          >
            Resume autos, aponta <span className="text-white font-semibold">prazos críticos</span> e destaca riscos sem te jogar para fora do processo.
          </motion.p>
        </div>

        <motion.div
          className="mt-[4cqw] flex-1 rounded-[4cqw] border border-white/10 bg-[#020617]/72 backdrop-blur-sm overflow-hidden"
          style={{ boxShadow: '0 20px 60px rgba(0,0,0,0.35)' }}
          initial={{ opacity: 0, scale: 0.96, y: 20 }}
          animate={phase >= 2 ? { opacity: 1, scale: 1, y: 0 } : { opacity: 0, scale: 0.96, y: 20 }}
          transition={{ type: 'spring', stiffness: 220, damping: 24 }}
        >
          <div className="flex items-center justify-between border-b border-white/10 px-[3cqw] py-[2.6cqw]">
            <div className="flex items-center gap-[1.3cqw]">
              <Sparkles className="text-[#9B8659]" strokeWidth={2} style={{ width: '3cqw', height: '3cqw' }} />
              <span className="font-display font-bold text-white" style={{ fontSize: '3.2cqw' }}>
                Autos do processo
              </span>
            </div>
            <motion.div
              className="inline-flex items-center gap-[1cqw] rounded-full border border-[#9B8659]/40 bg-[#9B8659]/10 px-[1.6cqw] py-[1cqw] text-[#9B8659]"
              animate={{ opacity: [0.6, 1, 0.6] }}
              transition={{ duration: 1.4, repeat: Infinity, ease: 'easeInOut' }}
            >
              <span className="bg-[#9B8659] rounded-full" style={{ width: '1.3cqw', height: '1.3cqw' }} />
              <span className="font-display font-semibold" style={{ fontSize: '2.5cqw' }}>Lupa ativa</span>
            </motion.div>
          </div>

          <div className="flex flex-col gap-[2.4cqw] px-[3cqw] py-[3cqw]">
            <div className="relative rounded-[3cqw] border border-white/10 bg-[#071225]/95 px-[2.5cqw] pt-[2.4cqw] pb-[3cqw] overflow-hidden">
              <div className="flex items-center justify-between text-white/80">
                <span className="font-display font-semibold text-[#9B8659]" style={{ fontSize: '2.5cqw' }}>
                  PROC-0421 · fls. 184
                </span>
                <span className="font-display font-semibold" style={{ fontSize: '2.4cqw' }}>
                  218 páginas
                </span>
              </div>

              <div className="mt-[2cqw] flex flex-col gap-[0.8cqw]">
                {DOC_LINES.map((line, i) => (
                  <motion.div
                    key={i}
                    className="rounded-full"
                    style={{
                      width: `${line}%`,
                      height: i === 2 || i === 5 ? '0.7cqw' : '0.42cqw',
                      background: i === 2 || i === 5
                        ? 'linear-gradient(90deg, #9B8659 0%, rgba(155,134,89,0.25) 100%)'
                        : 'rgba(255,255,255,0.18)',
                    }}
                    initial={{ opacity: 0, scaleX: 0.4 }}
                    animate={phase >= 2 ? { opacity: 1, scaleX: 1 } : { opacity: 0, scaleX: 0.4 }}
                    transition={{ duration: 0.3, delay: phase >= 2 ? i * 0.04 : 0, ease: [0.16, 1, 0.3, 1] }}
                  />
                ))}
              </div>

              <motion.div
                className="absolute left-[2.5cqw] right-[2.5cqw] rounded-[1cqw]"
                style={{
                  top: '8.8cqw',
                  height: '1.3cqw',
                  background: 'rgba(155,134,89,0.28)',
                  border: '1px solid rgba(155,134,89,0.55)',
                }}
                initial={{ opacity: 0, scaleX: 0 }}
                animate={phase >= 4 ? { opacity: 1, scaleX: 1 } : { opacity: 0, scaleX: 0 }}
                transition={{ duration: 0.45, ease: 'circOut' }}
              />
              <motion.div
                className="absolute left-[2.5cqw] right-[2.5cqw] rounded-[1cqw]"
                style={{
                  top: '15.6cqw',
                  height: '1.3cqw',
                  background: 'rgba(239,68,68,0.22)',
                  border: '1px solid rgba(239,68,68,0.55)',
                }}
                initial={{ opacity: 0, scaleX: 0 }}
                animate={phase >= 4 ? { opacity: 1, scaleX: 1 } : { opacity: 0, scaleX: 0 }}
                transition={{ duration: 0.45, delay: phase >= 4 ? 0.12 : 0, ease: 'circOut' }}
              />

              <motion.div
                className="absolute left-[2.2cqw] right-[2.2cqw] rounded-[1.2cqw] border border-[#9B8659]/60"
                style={{
                  top: '2.4cqw',
                  height: '5.2cqw',
                  background: 'linear-gradient(180deg, rgba(155,134,89,0) 0%, rgba(155,134,89,0.26) 50%, rgba(155,134,89,0) 100%)',
                  boxShadow: '0 0 18px rgba(155,134,89,0.45)',
                }}
                initial={{ opacity: 0, top: '2.4cqw' }}
                animate={phase >= 3 ? { opacity: [0, 1, 1, 0.9, 1], top: ['2.4cqw', '18cqw', '2.4cqw'] } : { opacity: 0, top: '2.4cqw' }}
                transition={phase >= 3 ? {
                  opacity: { duration: 3, repeat: Infinity, ease: 'easeInOut' },
                  top: { duration: 3, repeat: Infinity, ease: 'easeInOut' },
                } : { duration: 0.3 }}
              />

              <motion.div
                className="absolute bottom-[2cqw] right-[2cqw] flex items-center justify-center rounded-full bg-[#9B8659] border-2 border-white/20"
                style={{ width: '7cqw', height: '7cqw', boxShadow: '0 0 24px rgba(155,134,89,0.75)' }}
                initial={{ opacity: 0, scale: 0.5, rotate: -18 }}
                animate={phase >= 3 ? { opacity: 1, scale: [1, 1.06, 1], rotate: [-4, 4, -4] } : { opacity: 0, scale: 0.5, rotate: -18 }}
                transition={phase >= 3 ? {
                  opacity: { duration: 0.35 },
                  scale: { duration: 1.6, repeat: Infinity, ease: 'easeInOut' },
                  rotate: { duration: 2.4, repeat: Infinity, ease: 'easeInOut' },
                } : { duration: 0.3 }}
              >
                <Search className="text-white" strokeWidth={2.6} style={{ width: '3.4cqw', height: '3.4cqw' }} />
              </motion.div>
            </div>

            <div className="flex flex-col gap-[1.6cqw]">
              {INSIGHTS.map((insight) => (
                <motion.div
                  key={insight.title}
                  className="rounded-[2.6cqw] border border-white/10 bg-[#071225]/92 px-[2.4cqw] py-[2.2cqw]"
                  style={{ borderLeft: `3px solid ${insight.color}` }}
                  initial={{ opacity: 0, y: 14 }}
                  animate={phase >= 4 ? { opacity: 1, y: 0 } : { opacity: 0, y: 14 }}
                  transition={{ duration: 0.4, delay: phase >= 4 ? insight.delay : 0, ease: [0.16, 1, 0.3, 1] }}
                >
                  <div className="flex items-center gap-[1.2cqw]">
                    <insight.icon strokeWidth={2} style={{ width: '3cqw', height: '3cqw', color: insight.color }} />
                    <span className="font-display font-bold text-white" style={{ fontSize: '3cqw' }}>
                      {insight.title}
                    </span>
                  </div>
                  <p className="mt-[1cqw] font-display text-[#CBD5E1] leading-[1.18]" style={{ fontSize: '2.8cqw' }}>
                    {insight.body}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>

          <motion.div
            className="absolute inset-0 rounded-[4cqw] pointer-events-none"
            style={{ boxShadow: '0 0 0 0 rgba(155,134,89,0.6)' }}
            animate={phase >= 6 ? { boxShadow: ['0 0 0 0 rgba(155,134,89,0.6)', '0 0 0 1.6cqw rgba(155,134,89,0)', '0 0 0 0 rgba(155,134,89,0)'] } : { boxShadow: '0 0 0 0 rgba(155,134,89,0)' }}
            transition={phase >= 6 ? { duration: 1.7, repeat: Infinity, ease: 'easeInOut' } : { duration: 0.3 }}
          />
        </motion.div>

        <motion.div
          className="mt-[3cqw] inline-flex w-fit items-center gap-[1.4cqw] rounded-full border border-[#10B981]/45 bg-[#10B981]/10 px-[2.4cqw] py-[1.3cqw]"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={phase >= 5 ? { opacity: 1, scale: [1, 1.04, 1] } : { opacity: 0, scale: 0.9 }}
          transition={phase >= 5 ? {
            opacity: { duration: 0.4 },
            scale: { duration: 1.6, repeat: Infinity, ease: 'easeInOut' },
          } : { duration: 0.3 }}
        >
          <ShieldCheck className="text-[#10B981]" strokeWidth={2.2} style={{ width: '3cqw', height: '3cqw' }} />
          <span className="font-display font-semibold text-[#10B981]" style={{ fontSize: '2.8cqw' }}>
            Sigilo blindado
          </span>
        </motion.div>
      </div>
    </motion.div>
  );
};

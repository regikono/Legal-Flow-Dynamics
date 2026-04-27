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
          width: '62cqw',
          height: '62cqw',
          background:
            'radial-gradient(circle, rgba(155,134,89,0.42) 0%, rgba(2,6,23,0) 65%)',
          filter: 'blur(60px)',
          left: '-15cqw',
          top: '-12cqw',
        }}
        animate={{ x: [0, 26, 0], y: [0, 18, 0], scale: [1, 1.08, 1] }}
        transition={{ duration: 7, repeat: Infinity, ease: 'easeInOut' }}
      />
      <motion.div
        className="absolute rounded-full"
        style={{
          width: '56cqw',
          height: '56cqw',
          background:
            'radial-gradient(circle, rgba(59,130,246,0.30) 0%, rgba(2,6,23,0) 65%)',
          filter: 'blur(60px)',
          right: '-10cqw',
          bottom: '-10cqw',
        }}
        animate={{ x: [0, -22, 0], y: [0, -18, 0], scale: [1, 1.1, 1] }}
        transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut' }}
      />
      <div className="absolute inset-0 tech-grid opacity-40" />

      <div className="relative z-10 flex h-full w-full flex-col items-center justify-center px-[5cqw] py-[7cqw] text-center">
        <motion.div
          className="absolute rounded-full pointer-events-none"
          style={{
            width: '30cqw',
            height: '30cqw',
            background:
              'radial-gradient(circle, rgba(155,134,89,0.55) 0%, rgba(155,134,89,0) 70%)',
            filter: 'blur(24px)',
            top: '10cqw',
          }}
          animate={{ scale: [1, 1.18, 1], opacity: [0.55, 0.95, 0.55] }}
          transition={{ duration: 2.6, repeat: Infinity, ease: 'easeInOut' }}
        />

        <motion.div
          className="flex items-center justify-center gap-[2.4cqw]"
          initial={{ opacity: 0, scale: 0.7, y: -10 }}
          animate={phase >= 1 ? { opacity: 1, scale: 1, y: 0 } : { opacity: 0, scale: 0.7, y: -10 }}
          transition={{ type: 'spring', stiffness: 280, damping: 22 }}
        >
          <motion.div
            className="flex items-center justify-center rounded-full bg-[#9B8659] border-2 border-white/20"
            style={{ width: '10cqw', height: '10cqw', boxShadow: '0 0 30px rgba(155,134,89,0.85)' }}
            animate={phase >= 2 ? { scale: [1, 1.06, 1], rotate: [-6, 6, -6] } : {}}
            transition={{
              scale: { duration: 1.6, repeat: Infinity, ease: 'easeInOut' },
              rotate: { duration: 3, repeat: Infinity, ease: 'easeInOut' },
            }}
          >
            <Search className="text-white" strokeWidth={2.6} style={{ width: '5cqw', height: '5cqw' }} />
          </motion.div>
          <motion.img
            src={logoW}
            alt="Advocates"
            className="object-contain drop-shadow-2xl"
            style={{ height: '7.2cqw' }}
            animate={phase >= 2 ? { y: [0, -3, 0] } : {}}
            transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut' }}
          />
        </motion.div>

        <motion.div
          className="mt-[3.5cqw] inline-flex items-center justify-center gap-[1.2cqw] rounded-full border border-[#9B8659]/50 bg-[#9B8659]/10 px-[2.4cqw] py-[1.5cqw]"
          initial={{ opacity: 0, scale: 0.85 }}
          animate={phase >= 1 ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.85 }}
          transition={{ type: 'spring', stiffness: 360, damping: 22 }}
        >
          <motion.div
            className="bg-[#9B8659] rounded-full"
            style={{ width: '1.2cqw', height: '1.2cqw' }}
            animate={{ scale: [1, 1.6, 1], opacity: [0.6, 1, 0.6] }}
            transition={{ duration: 1.1, repeat: Infinity, ease: 'easeInOut' }}
          />
          <span
            className="font-display font-semibold text-[#9B8659]"
            style={{ fontSize: '3cqw' }}
          >
            Lupa Jurídica blindada
          </span>
        </motion.div>

        <h2
          className="mt-[4cqw] font-display font-black text-white leading-[0.98] tracking-tight"
          style={{ fontSize: '10cqw' }}
        >
          <motion.span
            className="block"
            initial={{ opacity: 0, y: 24, filter: 'blur(10px)' }}
            animate={phase >= 2 ? { opacity: 1, y: 0, filter: 'blur(0px)' } : { opacity: 0, y: 24, filter: 'blur(10px)' }}
            transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
          >
            A IA já mora
          </motion.span>
          <motion.span
            className="block text-gradient-gold"
            initial={{ opacity: 0, y: 24, filter: 'blur(10px)' }}
            animate={phase >= 3 ? { opacity: 1, y: 0, filter: 'blur(0px)' } : { opacity: 0, y: 24, filter: 'blur(10px)' }}
            transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
          >
            no processo.
          </motion.span>
        </h2>

        <motion.p
          className="mt-[3cqw] font-display text-[#CBD5E1] leading-[1.18]"
          style={{ fontSize: '3.7cqw', maxWidth: '76cqw' }}
          initial={{ opacity: 0, y: 12 }}
          animate={phase >= 3 ? { opacity: 1, y: 0 } : { opacity: 0, y: 12 }}
          transition={{ duration: 0.45, ease: 'circOut' }}
        >
          Você só lê o que importa. O resto a Lupa já organiza, resume e sinaliza para você.
        </motion.p>

        <motion.div
          className="mt-[5cqw] flex w-full flex-col gap-[2cqw]"
          initial={{ opacity: 0 }}
          animate={phase >= 4 ? { opacity: 1 } : { opacity: 0 }}
          transition={{ duration: 0.4 }}
        >
          {PILLARS.map((pillar, i) => (
            <motion.div
              key={pillar.label}
              className="flex items-center gap-[2cqw] rounded-[3cqw] border border-white/12 bg-[#071225]/88 px-[3cqw] py-[2.6cqw]"
              initial={{ opacity: 0, y: 14, scale: 0.94 }}
              animate={phase >= 4 ? { opacity: 1, y: 0, scale: 1 } : { opacity: 0, y: 14, scale: 0.94 }}
              transition={{ duration: 0.4, delay: phase >= 4 ? i * 0.1 : 0, ease: [0.16, 1, 0.3, 1] }}
            >
              <pillar.icon className="text-[#9B8659] shrink-0" strokeWidth={2} style={{ width: '4cqw', height: '4cqw' }} />
              <span className="font-display font-semibold text-white" style={{ fontSize: '3.4cqw' }}>
                {pillar.label}
              </span>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          className="mt-[4cqw] inline-flex items-center gap-[1.4cqw] rounded-full border border-[#10B981]/45 bg-[#10B981]/10 px-[2.6cqw] py-[1.5cqw]"
          initial={{ opacity: 0, y: 10 }}
          animate={phase >= 4 ? { opacity: 1, y: 0 } : { opacity: 0, y: 10 }}
          transition={{ duration: 0.45, ease: 'circOut' }}
        >
          <ShieldCheck className="text-[#10B981]" strokeWidth={2.2} style={{ width: '3.2cqw', height: '3.2cqw' }} />
          <span className="font-display font-semibold text-[#10B981]" style={{ fontSize: '2.9cqw' }}>
            Sigilo blindado
          </span>
        </motion.div>

        <motion.div
          className="mt-[3.4cqw] inline-flex items-center justify-center gap-[1.6cqw] rounded-full border border-[#9B8659]/60 bg-[#9B8659]/15 px-[3cqw] py-[1.9cqw]"
          initial={{ opacity: 0, scale: 0.9, y: 16 }}
          animate={phase >= 4 ? { opacity: 1, scale: [1, 1.04, 1], y: 0 } : { opacity: 0, scale: 0.9, y: 16 }}
          transition={phase >= 4 ? {
            opacity: { duration: 0.4 },
            y: { duration: 0.4 },
            scale: { duration: 1.6, repeat: Infinity, ease: 'easeInOut' },
          } : { duration: 0.4 }}
        >
          <motion.div
            className="bg-[#9B8659] rounded-full"
            style={{ width: '1.4cqw', height: '1.4cqw' }}
            animate={{ scale: [1, 1.6, 1], opacity: [0.6, 1, 0.6] }}
            transition={{ duration: 1.2, repeat: Infinity, ease: 'easeInOut' }}
          />
          <span className="font-display font-bold text-white uppercase tracking-[0.18em]" style={{ fontSize: '3.1cqw' }}>
            advocates.com.br
          </span>
        </motion.div>
      </div>
    </motion.div>
  );
};

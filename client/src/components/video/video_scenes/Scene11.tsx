import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';
import { sceneTransitions } from '@/lib/video/animations';
import { AlertTriangle, FileText, Mail, MessageSquare, Folder } from 'lucide-react';

const SCATTER = [
  { Icon: FileText, x: '8%', y: '20%', rotate: -12, delay: 0, scale: 1 },
  { Icon: Mail, x: '85%', y: '24%', rotate: 14, delay: 0.05, scale: 0.9 },
  { Icon: MessageSquare, x: '14%', y: '78%', rotate: -8, delay: 0.1, scale: 0.95 },
  { Icon: Folder, x: '82%', y: '76%', rotate: 10, delay: 0.15, scale: 1.05 },
  { Icon: FileText, x: '78%', y: '50%', rotate: -16, delay: 0.2, scale: 0.85 },
  { Icon: Folder, x: '12%', y: '50%', rotate: 18, delay: 0.25, scale: 0.9 },
];

export const Scene11 = () => {
  const [phase, setPhase] = useState(0);

  useEffect(() => {
    const timers = [
      setTimeout(() => setPhase(1), 80),
      setTimeout(() => setPhase(2), 600),
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
      variants={sceneTransitions.morphExpand}
    >
      {/* Pulsing radial backdrop */}
      <motion.div
        className="absolute inset-0"
        style={{
          background:
            'radial-gradient(ellipse at center, rgba(155,134,89,0.22) 0%, rgba(2,6,23,1) 70%)',
        }}
        animate={{ opacity: [0.7, 1, 0.7] }}
        transition={{ duration: 1.6, repeat: Infinity, ease: 'easeInOut' }}
      />

      {/* Drifting heavy gold blob */}
      <motion.div
        className="absolute rounded-full"
        style={{
          width: '60cqw',
          height: '60cqw',
          background:
            'radial-gradient(circle, rgba(155,134,89,0.40) 0%, rgba(2,6,23,0) 65%)',
          filter: 'blur(60px)',
          left: '-15cqw',
          top: '-10cqw',
        }}
        animate={{ x: [0, 40, 0], y: [0, 25, 0], scale: [1, 1.12, 1] }}
        transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut' }}
      />
      <motion.div
        className="absolute rounded-full"
        style={{
          width: '55cqw',
          height: '55cqw',
          background:
            'radial-gradient(circle, rgba(239,68,68,0.18) 0%, rgba(2,6,23,0) 65%)',
          filter: 'blur(70px)',
          right: '-15cqw',
          bottom: '-15cqw',
        }}
        animate={{ x: [0, -30, 0], y: [0, -25, 0], scale: [1, 1.1, 1] }}
        transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
      />

      <div className="absolute inset-0 tech-grid opacity-50" />

      {/* Diagonal slash lines */}
      <motion.div
        className="absolute h-[0.18cqw] bg-[#9B8659]/80 origin-left"
        style={{ width: '70cqw', top: '14%', left: '-10%', transform: 'rotate(-6deg)' }}
        initial={{ scaleX: 0, opacity: 0 }}
        animate={phase >= 1 ? { scaleX: 1, opacity: 1 } : { scaleX: 0, opacity: 0 }}
        transition={{ duration: 0.45, ease: [0.16, 1, 0.3, 1] }}
      />
      <motion.div
        className="absolute h-[0.18cqw] bg-[#3B82F6]/80 origin-right"
        style={{ width: '70cqw', bottom: '14%', right: '-10%', transform: 'rotate(-6deg)' }}
        initial={{ scaleX: 0, opacity: 0 }}
        animate={phase >= 1 ? { scaleX: 1, opacity: 1 } : { scaleX: 0, opacity: 0 }}
        transition={{ duration: 0.45, delay: 0.08, ease: [0.16, 1, 0.3, 1] }}
      />

      {/* Scattered floating doc icons — visual "chaos" of pain state */}
      {SCATTER.map((s, i) => (
        <motion.div
          key={i}
          className="absolute flex items-center justify-center rounded-[1cqw] border border-[#9B8659]/30 bg-[#020617]/70 backdrop-blur-sm"
          style={{
            width: '4.5cqw',
            height: '4.5cqw',
            left: s.x,
            top: s.y,
            transform: 'translate(-50%, -50%)',
          }}
          initial={{ opacity: 0, scale: 0.4, rotate: s.rotate }}
          animate={
            phase >= 1
              ? {
                  opacity: 0.9,
                  scale: s.scale,
                  rotate: [s.rotate - 2, s.rotate + 2, s.rotate - 2],
                  y: [0, -6, 0],
                }
              : { opacity: 0, scale: 0.4, rotate: s.rotate }
          }
          transition={
            phase >= 1
              ? {
                  opacity: { duration: 0.4, delay: s.delay },
                  scale: { duration: 0.4, delay: s.delay },
                  rotate: { duration: 3 + i * 0.3, repeat: Infinity, ease: 'easeInOut' },
                  y: { duration: 2.4 + i * 0.2, repeat: Infinity, ease: 'easeInOut' },
                }
              : { duration: 0.3 }
          }
        >
          <s.Icon
            className="text-[#9B8659]"
            strokeWidth={1.6}
            style={{ width: '2.2cqw', height: '2.2cqw' }}
          />
        </motion.div>
      ))}

      <div className="relative z-10 w-full text-center px-[4cqw]">
        {/* PARE badge */}
        <motion.div
          className="inline-flex items-center justify-center gap-[1cqw] mb-[2cqw] rounded-full border-2 border-[#9B8659] bg-[#9B8659]/20"
          style={{ padding: '0.8cqw 2cqw' }}
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
          <AlertTriangle className="text-[#9B8659]" strokeWidth={2.5} style={{ width: '1.4cqw', height: '1.4cqw' }} />
          <span
            className="font-mono uppercase tracking-[0.4em] text-[#9B8659] font-bold"
            style={{ fontSize: '1.05cqw' }}
          >
            Atenção, equipe jurídica
          </span>
          <AlertTriangle className="text-[#9B8659]" strokeWidth={2.5} style={{ width: '1.4cqw', height: '1.4cqw' }} />
        </motion.div>

        {/* Hook headline */}
        <h1
          className="font-display font-black text-white leading-[1] tracking-tight"
          style={{ fontSize: '6.2cqw' }}
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
            Cadê o caso?
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
            <span className="text-gradient-gold">Cadê o documento?</span>
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
            <span className="text-gradient-blue">Quem mexeu por último?</span>
          </motion.span>
        </h1>

        {/* Sub-line */}
        <motion.p
          className="font-display text-[#94A3B8] mt-[2cqw]"
          style={{ fontSize: '1.7cqw' }}
          initial={{ opacity: 0, y: 16 }}
          animate={
            phase >= 5
              ? { opacity: [0.7, 1, 0.7], y: 0 }
              : { opacity: 0, y: 16 }
          }
          transition={
            phase >= 5
              ? {
                  opacity: { duration: 1.6, repeat: Infinity, ease: 'easeInOut' },
                  y: { duration: 0.4 },
                }
              : { duration: 0.4 }
          }
        >
          E-mails, pastas, WhatsApp do estagiário —{' '}
          <span className="text-white font-semibold">o caso vive em tudo, menos no caso.</span>
        </motion.p>
      </div>
    </motion.div>
  );
};

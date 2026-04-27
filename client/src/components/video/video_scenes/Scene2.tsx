import { motion } from 'framer-motion';
import { sceneTransitions } from '@/lib/video/animations';
import { Briefcase, DollarSign, Users } from 'lucide-react';

export const Scene2 = () => {
  const cards = [
    { icon: Briefcase, text: "Organize processos" },
    { icon: DollarSign, text: "Controle finanças" },
    { icon: Users, text: "Gerencie sua equipe" }
  ];

  return (
    <motion.div 
      className="absolute inset-0 flex flex-col justify-center items-center bg-[#020617] overflow-hidden tech-grid"
      initial="initial"
      animate="animate"
      exit="exit"
      variants={sceneTransitions.pushLeft}
    >
      <div className="absolute inset-0 bg-gradient-to-b from-[#041E42]/80 to-[#020617]/90" />
      
      <div className="relative z-10 w-full mx-auto px-[6cqw]" style={{ maxWidth: '92cqw' }}>
        <motion.h2 
          className="font-display font-bold text-center text-white leading-[1.05]"
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          style={{ fontSize: '10cqw', marginBottom: '7cqw' }}
        >
          Tudo em um <span className="text-gradient-blue">só lugar</span>
        </motion.h2>

        <div className="flex flex-col gap-[3cqw]">
          {cards.map((card, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, x: -40, scale: 0.95 }}
              animate={{ opacity: 1, x: 0, scale: 1 }}
              transition={{ delay: 0.5 + i * 0.18, type: "spring", stiffness: 200, damping: 22 }}
              className="glow-box rounded-[3cqw] flex items-center gap-[4cqw] relative overflow-hidden"
              style={{ padding: '4.5cqw 5cqw' }}
            >
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                className="absolute bg-[#3B82F6] rounded-full blur-[60px] opacity-25"
                style={{ 
                  width: '20cqw',
                  height: '20cqw',
                  top: '-10cqw',
                  right: '-10cqw'
                }}
              />
              <span
                className="flex items-center justify-center rounded-full border border-[#9B8659]/40 bg-[#9B8659]/10 shrink-0"
                style={{ width: '14cqw', height: '14cqw' }}
              >
                <card.icon className="text-[#9B8659]" strokeWidth={1.6} style={{ width: '7cqw', height: '7cqw' }} />
              </span>
              <h3 className="font-display font-semibold text-white text-left" style={{ fontSize: '5cqw', lineHeight: 1.15 }}>
                {card.text}
              </h3>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.div>
  );
};

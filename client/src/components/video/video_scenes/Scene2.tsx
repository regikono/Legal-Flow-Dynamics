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
      
      <div className="relative z-10 w-full mx-auto px-[3vw]" style={{ maxWidth: '95vw' }}>
        <motion.h2 
          className="font-display font-bold text-center text-white"
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          style={{ fontSize: '5.5vw', marginBottom: '4vw' }}
        >
          Tudo em um só <span className="text-gradient-blue">lugar</span>
        </motion.h2>

        <div className="grid grid-cols-3 gap-[3vw]">
          {cards.map((card, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 50, scale: 0.9 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              transition={{ delay: 0.5 + i * 0.2, type: "spring", stiffness: 200, damping: 20 }}
              className="glow-box rounded-[1.5vw] flex flex-col items-center text-center relative overflow-hidden group"
              style={{ padding: '2.5vw' }}
            >
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                className="absolute bg-[#3B82F6] rounded-full blur-[60px] opacity-20"
                style={{ 
                  width: '8vw',
                  height: '8vw',
                  top: '-4vw',
                  right: '-4vw'
                }}
              />
              <card.icon className="text-[#9B8659] mb-[2vw]" strokeWidth={1.5} style={{ width: '3.5vw', height: '3.5vw' }} />
              <h3 className="font-display font-semibold text-white" style={{ fontSize: '1.8vw' }}>
                {card.text}
              </h3>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.div>
  );
};

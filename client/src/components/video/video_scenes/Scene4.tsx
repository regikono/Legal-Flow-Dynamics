import { motion, AnimatePresence } from 'framer-motion';
import { useState, useEffect } from 'react';
import { sceneTransitions } from '@/lib/video/animations';
import videoBg from '../../../assets/video-bg.mp4';
import logoW from '@assets/logo_w_1777283278719.png';

const WORDS = [
  "Gestão de Processos",
  "Controle Financeiro",
  "Equipe Integrada",
  "Segurança Total",
  "Relatórios Inteligentes"
];

export const Scene4 = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    // 5 words + 1 final screen = 6 items. Scene duration is 6500ms.
    // 6500 / 6 ≈ 1080ms per item. We'll use 900ms to allow time for the final screen to stay.
    const interval = setInterval(() => {
      setActiveIndex((prev) => prev + 1);
    }, 900);
    
    return () => clearInterval(interval);
  }, []);

  return (
    <motion.div 
      className="absolute inset-0 flex items-center justify-center bg-[#020617] overflow-hidden"
      initial="initial"
      animate="animate"
      exit="exit"
      variants={sceneTransitions.zoomThrough}
    >
      <video src={videoBg} autoPlay loop muted className="absolute inset-0 w-full h-full object-cover opacity-60" />
      <div className="absolute inset-0 bg-[#041E42]/50 mix-blend-multiply" />
      
      <div className="relative z-10 text-center w-full h-full">
        <AnimatePresence mode="wait">
          {activeIndex === 0 && (
            <motion.h2
              key="word0"
              initial={{ opacity: 0, scale: 0.8, filter: "blur(10px)" }}
              animate={{ opacity: 1, scale: 1, filter: "blur(0px)" }}
              exit={{ opacity: 0, scale: 1.2, filter: "blur(10px)" }}
              transition={{ duration: 0.3 }}
              className="font-display font-black text-white absolute inset-0 flex items-center justify-center uppercase tracking-tighter w-full px-[2vw]"
              style={{ fontSize: '7vw' }}
            >
              <span className="text-gradient-blue">{WORDS[0]}</span>
            </motion.h2>
          )}
          {activeIndex === 1 && (
            <motion.h2
              key="word1"
              initial={{ opacity: 0, scale: 0.8, filter: "blur(10px)" }}
              animate={{ opacity: 1, scale: 1, filter: "blur(0px)" }}
              exit={{ opacity: 0, scale: 1.2, filter: "blur(10px)" }}
              transition={{ duration: 0.3 }}
              className="font-display font-black text-white absolute inset-0 flex items-center justify-center uppercase tracking-tighter w-full px-[2vw]"
              style={{ fontSize: '7vw' }}
            >
              <span className="text-gradient-gold">{WORDS[1]}</span>
            </motion.h2>
          )}
          {activeIndex === 2 && (
            <motion.h2
              key="word2"
              initial={{ opacity: 0, scale: 0.8, filter: "blur(10px)" }}
              animate={{ opacity: 1, scale: 1, filter: "blur(0px)" }}
              exit={{ opacity: 0, scale: 1.2, filter: "blur(10px)" }}
              transition={{ duration: 0.3 }}
              className="font-display font-black text-white absolute inset-0 flex items-center justify-center uppercase tracking-tighter w-full px-[2vw]"
              style={{ fontSize: '7vw' }}
            >
              <span className="text-gradient-blue">{WORDS[2]}</span>
            </motion.h2>
          )}
          {activeIndex === 3 && (
            <motion.h2
              key="word3"
              initial={{ opacity: 0, scale: 0.8, filter: "blur(10px)" }}
              animate={{ opacity: 1, scale: 1, filter: "blur(0px)" }}
              exit={{ opacity: 0, scale: 1.2, filter: "blur(10px)" }}
              transition={{ duration: 0.3 }}
              className="font-display font-black text-white absolute inset-0 flex items-center justify-center uppercase tracking-tighter w-full px-[2vw]"
              style={{ fontSize: '7vw' }}
            >
              <span className="text-gradient-gold">{WORDS[3]}</span>
            </motion.h2>
          )}
          {activeIndex === 4 && (
            <motion.h2
              key="word4"
              initial={{ opacity: 0, scale: 0.8, filter: "blur(10px)" }}
              animate={{ opacity: 1, scale: 1, filter: "blur(0px)" }}
              exit={{ opacity: 0, scale: 1.2, filter: "blur(10px)" }}
              transition={{ duration: 0.3 }}
              className="font-display font-black text-white absolute inset-0 flex items-center justify-center uppercase tracking-tighter w-full px-[2vw]"
              style={{ fontSize: '7vw' }}
            >
              <span className="text-gradient-blue">{WORDS[4]}</span>
            </motion.h2>
          )}
          {activeIndex >= 5 && (
            <motion.div
              key="final"
              initial={{ opacity: 0, scale: 0.9, y: 30 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 30 }}
              transition={{ duration: 0.6, type: "spring", bounce: 0.4 }}
              className="absolute inset-0 flex flex-col items-center justify-center bg-[#020617]/95 backdrop-blur-xl"
            >
              <img src={logoW} alt="Logo" className="object-contain mb-[3vw] drop-shadow-2xl" style={{ height: '10vw' }} />
              <h3 className="font-display text-[#9B8659] tracking-[0.3em] font-light" style={{ fontSize: '3vw' }}>
                FEITO PARA ADVOGADOS
              </h3>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.div>
  );
};

import { motion, AnimatePresence } from 'framer-motion';
import { sceneTransitions } from '@/lib/video/animations';
import videoBg from '../../../assets/video-bg.mp4';
import logoW from '../../../assets/logo_w_1772286091566.png';

const WORDS = [
  "Gestão de Processos",
  "Controle Financeiro",
  "Equipe Integrada",
  "Segurança Total",
  "Relatórios Inteligentes"
];

const Word0 = () => (
  <motion.h2
    key="word0"
    initial={{ opacity: 0, scale: 0.8, filter: "blur(10px)" }}
    animate={{ opacity: 1, scale: 1, filter: "blur(0px)" }}
    exit={{ opacity: 0, scale: 1.2, filter: "blur(10px)" }}
    transition={{ duration: 0.2 }}
    className="font-display font-black text-white absolute inset-0 flex items-center justify-center uppercase tracking-tighter w-full px-[2vw]"
    style={{ fontSize: '7vw' }}
  >
    <span className="text-gradient-blue">{WORDS[0]}</span>
  </motion.h2>
);

const Word1 = () => (
  <motion.h2
    key="word1"
    initial={{ opacity: 0, scale: 0.8, filter: "blur(10px)" }}
    animate={{ opacity: 1, scale: 1, filter: "blur(0px)" }}
    exit={{ opacity: 0, scale: 1.2, filter: "blur(10px)" }}
    transition={{ duration: 0.2 }}
    className="font-display font-black text-white absolute inset-0 flex items-center justify-center uppercase tracking-tighter w-full px-[2vw]"
    style={{ fontSize: '7vw' }}
  >
    <span className="text-gradient-gold">{WORDS[1]}</span>
  </motion.h2>
);

const Word2 = () => (
  <motion.h2
    key="word2"
    initial={{ opacity: 0, scale: 0.8, filter: "blur(10px)" }}
    animate={{ opacity: 1, scale: 1, filter: "blur(0px)" }}
    exit={{ opacity: 0, scale: 1.2, filter: "blur(10px)" }}
    transition={{ duration: 0.2 }}
    className="font-display font-black text-white absolute inset-0 flex items-center justify-center uppercase tracking-tighter w-full px-[2vw]"
    style={{ fontSize: '7vw' }}
  >
    <span className="text-gradient-blue">{WORDS[2]}</span>
  </motion.h2>
);

const Word3 = () => (
  <motion.h2
    key="word3"
    initial={{ opacity: 0, scale: 0.8, filter: "blur(10px)" }}
    animate={{ opacity: 1, scale: 1, filter: "blur(0px)" }}
    exit={{ opacity: 0, scale: 1.2, filter: "blur(10px)" }}
    transition={{ duration: 0.2 }}
    className="font-display font-black text-white absolute inset-0 flex items-center justify-center uppercase tracking-tighter w-full px-[2vw]"
    style={{ fontSize: '7vw' }}
  >
    <span className="text-gradient-gold">{WORDS[3]}</span>
  </motion.h2>
);

const Word4 = () => (
  <motion.h2
    key="word4"
    initial={{ opacity: 0, scale: 0.8, filter: "blur(10px)" }}
    animate={{ opacity: 1, scale: 1, filter: "blur(0px)" }}
    exit={{ opacity: 0, scale: 1.2, filter: "blur(10px)" }}
    transition={{ duration: 0.2 }}
    className="font-display font-black text-white absolute inset-0 flex items-center justify-center uppercase tracking-tighter w-full px-[2vw]"
    style={{ fontSize: '7vw' }}
  >
    <span className="text-gradient-blue">{WORDS[4]}</span>
  </motion.h2>
);

const FinalScreen = () => (
  <motion.div
    key="final"
    initial={{ opacity: 0, scale: 0.9, y: 30 }}
    animate={{ opacity: 1, scale: 1, y: 0 }}
    exit={{ opacity: 0, scale: 0.9, y: 30 }}
    transition={{ duration: 0.8, type: "spring", bounce: 0.4 }}
    className="absolute inset-0 flex flex-col items-center justify-center bg-[#020617]/90 backdrop-blur-md"
  >
    <img src={logoW} alt="Logo" className="object-contain mb-[3vw] drop-shadow-2xl" style={{ height: '10vw' }} />
    <h3 className="font-display text-[#9B8659] tracking-[0.3em] font-light" style={{ fontSize: '3vw' }}>
      FEITO PARA ADVOGADOS
    </h3>
  </motion.div>
);

export const Scene4 = () => {
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
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0, delay: 0.3 }}
          >
            <Word0 />
          </motion.div>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0, delay: 0.9 }}
          >
            <Word1 />
          </motion.div>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0, delay: 1.5 }}
          >
            <Word2 />
          </motion.div>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0, delay: 2.1 }}
          >
            <Word3 />
          </motion.div>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0, delay: 2.7 }}
          >
            <Word4 />
          </motion.div>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0, delay: 3.5 }}
          >
            <FinalScreen />
          </motion.div>
        </AnimatePresence>
      </div>
    </motion.div>
  );
};

import { motion } from 'framer-motion';
import { sceneTransitions } from '@/lib/video/animations';
import chartBg from '../../../assets/growth-chart.png';
import justiceImg from '../../../assets/justice_1772287474825.png';

export const Scene3 = () => {
  return (
    <motion.div 
      className="absolute inset-0 flex items-center justify-center bg-[#020617] overflow-hidden"
      initial="initial"
      animate="animate"
      exit="exit"
      variants={sceneTransitions.morphExpand}
    >
      <motion.img 
        src={chartBg} 
        className="absolute inset-0 w-full h-full object-cover opacity-30 mix-blend-screen"
        initial={{ scale: 1.1 }}
        animate={{ scale: 1 }}
        transition={{ duration: 5, ease: "easeOut" }}
      />
      <div className="absolute inset-0 bg-gradient-to-r from-[#020617] via-[#020617]/80 to-transparent" />
      
      <div className="relative z-10 w-full h-full flex items-center px-[6vw]">
        {/* Left side: Justice statue */}
        <motion.div 
          className="w-1/2 h-full flex items-end justify-center relative"
          initial={{ y: "100%", opacity: 0 }}
          animate={{ y: "10%", opacity: 1 }}
          transition={{ duration: 1.2, ease: "easeOut" }}
        >
          {/* Subtle glow behind the statue */}
          <motion.div
            className="absolute bottom-[20%] w-[30vw] h-[30vw] bg-[#9B8659]/30 rounded-full blur-[80px]"
            animate={{ scale: [1, 1.2, 1], opacity: [0.3, 0.5, 0.3] }}
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
          />
          <img 
            src={justiceImg} 
            alt="Lady Justice" 
            className="h-[85vh] object-contain relative z-10 drop-shadow-2xl" 
          />
        </motion.div>

        {/* Right side: Text content */}
        <div className="w-1/2 flex flex-col justify-center">
          <motion.div 
            className="inline-block bg-[#9B8659]/20 border border-[#9B8659]/50 rounded-full mb-[2vw] self-start"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.5 }}
            style={{ padding: '0.5vw 1.5vw' }}
          >
            <span className="text-[#9B8659] font-mono tracking-widest uppercase" style={{ fontSize: '0.85vw' }}>DESEMPENHO MÁXIMO</span>
          </motion.div>

          {/* Reduced font size and refined wrapping to prevent cumulative overlap */}
          <h2 className="font-display font-bold text-white leading-[1.2]" style={{ fontSize: '4.5vw', maxWidth: '45vw' }}>
            <motion.span
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8, duration: 0.8 }}
              className="block mb-[1vw]"
            >
              Ferramentas profissionais
            </motion.span>
            <motion.span
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.1, duration: 0.8 }}
              className="block text-[#94A3B8] leading-[1.3]"
              style={{ fontSize: '3vw' }}
            >
              para advogados que levam seu trabalho
            </motion.span>
            <motion.span
              initial={{ opacity: 0, y: 20, filter: "blur(10px)" }}
              animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
              transition={{ delay: 1.5, duration: 1, type: "spring" }}
              className="block text-gradient-blue"
              style={{ marginTop: '0.5vw', fontSize: '4.5vw' }}
            >
              a sério.
            </motion.span>
          </h2>
        </div>
      </div>
    </motion.div>
  );
};

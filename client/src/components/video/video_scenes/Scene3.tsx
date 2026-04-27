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
      
      <div className="relative z-10 w-full h-full flex flex-col items-center px-[6cqw] pt-[5cqw] pb-[6cqw]">
        {/* Top: Justice statue */}
        <motion.div 
          className="w-full flex-1 flex items-end justify-center relative"
          initial={{ y: "30%", opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 1.2, ease: "easeOut" }}
        >
          {/* Subtle glow behind the statue */}
          <motion.div
            className="absolute bottom-[8%] w-[55cqw] h-[55cqw] bg-[#9B8659]/30 rounded-full blur-[80px]"
            animate={{ scale: [1, 1.2, 1], opacity: [0.3, 0.55, 0.3] }}
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
          />
          <img 
            src={justiceImg} 
            alt="Lady Justice" 
            className="object-contain relative z-10 drop-shadow-2xl"
            style={{ height: '46cqh' }}
          />
        </motion.div>

        {/* Bottom: Text content */}
        <div className="w-full flex flex-col items-center text-center mt-[3cqw]">
          <motion.div 
            className="inline-block bg-[#9B8659]/20 border border-[#9B8659]/50 rounded-full mb-[3cqw]"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            style={{ padding: '1.2cqw 3cqw' }}
          >
            <span className="text-[#9B8659] font-mono tracking-widest uppercase" style={{ fontSize: '2.4cqw' }}>DESEMPENHO MÁXIMO</span>
          </motion.div>

          <h2 className="font-display font-bold text-white leading-[1.1]" style={{ fontSize: '8.5cqw' }}>
            <motion.span
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8, duration: 0.8 }}
              className="block mb-[1.5cqw]"
            >
              Ferramentas profissionais
            </motion.span>
            <motion.span
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.1, duration: 0.8 }}
              className="block text-[#94A3B8] leading-[1.25]"
              style={{ fontSize: '5cqw' }}
            >
              para advogados que levam seu trabalho
            </motion.span>
            <motion.span
              initial={{ opacity: 0, y: 20, filter: "blur(10px)" }}
              animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
              transition={{ delay: 1.5, duration: 1, type: "spring" }}
              className="block text-gradient-blue"
              style={{ marginTop: '1.5cqw', fontSize: '9cqw' }}
            >
              a sério.
            </motion.span>
          </h2>
        </div>
      </div>
    </motion.div>
  );
};

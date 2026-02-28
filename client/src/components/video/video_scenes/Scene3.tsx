import { motion } from 'framer-motion';
import { sceneTransitions } from '@/lib/video/animations';
import chartBg from '../../../assets/growth-chart.png';

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
        className="absolute inset-0 w-full h-full object-cover opacity-50 mix-blend-screen"
        initial={{ scale: 1.1 }}
        animate={{ scale: 1 }}
        transition={{ duration: 5, ease: "easeOut" }}
      />
      <div className="absolute inset-0 bg-gradient-to-r from-[#020617] via-[#020617]/80 to-transparent" />
      
      <div className="relative z-10 w-full mx-auto px-[4vw]" style={{ maxWidth: '70vw' }}>
        <motion.div 
          className="inline-block bg-[#9B8659]/20 border border-[#9B8659]/50 rounded-full mb-[2vw]"
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.3 }}
          style={{ padding: '0.5vw 1.5vw' }}
        >
          <span className="text-[#9B8659] font-mono tracking-widest uppercase" style={{ fontSize: '0.85vw' }}>DESEMPENHO MÁXIMO</span>
        </motion.div>

        <h2 className="font-display font-bold text-white leading-[1.1]" style={{ fontSize: '6.5vw', maxWidth: '60vw' }}>
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.8 }}
            className="block"
          >
            Ferramentas profissionais
          </motion.span>
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8, duration: 0.8 }}
            className="block text-[#94A3B8]"
          >
            para advogados que levam seu trabalho
          </motion.span>
          <motion.span
            initial={{ opacity: 0, y: 20, filter: "blur(10px)" }}
            animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
            transition={{ delay: 1.2, duration: 1, type: "spring" }}
            className="block text-gradient-blue"
            style={{ marginTop: '1vw' }}
          >
            a sério.
          </motion.span>
        </h2>
      </div>
    </motion.div>
  );
};

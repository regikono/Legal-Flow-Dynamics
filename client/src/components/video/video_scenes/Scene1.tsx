import { motion } from 'framer-motion';
import { sceneTransitions } from '@/lib/video/animations';
import bgTech from '../../../assets/bg-tech-law.png';
import logoColor from '@assets/logo_small_wl_1777283981355.png';

export const Scene1 = () => {
  return (
    <motion.div 
      className="absolute inset-0 flex items-center bg-[#020617] overflow-hidden"
      initial="initial"
      animate="animate"
      exit="exit"
      variants={sceneTransitions.clipPolygon}
    >
      <img src={bgTech} className="absolute inset-0 w-full h-full object-cover opacity-30 mix-blend-luminosity scale-105" />
      <motion.div 
        className="absolute inset-0 bg-[#041E42] opacity-60"
        animate={{ opacity: [0.8, 0.4] }}
        transition={{ duration: 4, ease: "linear" }}
      />
      
      <div className="relative z-10 w-full px-[7cqw] flex flex-col items-center justify-center gap-[6cqw]">
        <motion.div
          initial={{ y: -40, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
          className="glow-box rounded-[3cqw]"
          style={{ padding: '5cqw', width: '60cqw' }}
        >
          <img src={logoColor} alt="Logo" className="w-full object-contain drop-shadow-2xl brightness-110" />
        </motion.div>
        
        <div className="w-full">
          <motion.div 
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="bg-[#9B8659] mb-[3cqw] origin-left mx-auto"
            style={{ height: '0.4cqw', width: '12cqw' }}
          />
          <h2 className="font-display font-bold text-white leading-[1.05] text-center" style={{ fontSize: '9.5cqw' }}>
            <motion.span
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8, duration: 0.6 }}
              className="block"
            >
              Gestão financeira
            </motion.span>
            <motion.span
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.0, duration: 0.6 }}
              className="block text-gradient-gold"
            >
              e administrativa
            </motion.span>
            <motion.span
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.2, duration: 0.6 }}
              className="block text-[#94A3B8] font-normal mt-[3cqw]"
              style={{ fontSize: '4.4cqw' }}
            >
              completa para escritórios de advocacia.
            </motion.span>
          </h2>
        </div>
      </div>
    </motion.div>
  );
};

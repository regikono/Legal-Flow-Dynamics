import { motion } from 'framer-motion';
import { sceneTransitions } from '@/lib/video/animations';
import videoBg from '../../../assets/video-bg.mp4';
import logoW from '@assets/logo_w_1777283278719.png';

export const Scene0 = () => {
  const text = 'Estruture seu escritório profissionalmente com uso contínuo'.split(' ');
  
  return (
    <motion.div 
      className="absolute inset-0 flex items-center justify-center bg-[#020617] overflow-hidden"
      initial="initial"
      animate="animate"
      exit="exit"
      variants={sceneTransitions.fadeBlur}
    >
      <video src={videoBg} autoPlay loop muted className="absolute inset-0 w-full h-full object-cover opacity-40 mix-blend-screen" />
      <div className="absolute inset-0 bg-gradient-to-t from-[#020617] via-transparent to-[#020617] opacity-80" />
      
      <div className="relative z-10 mx-auto px-[6cqw] text-center" style={{ maxWidth: '92cqw' }}>
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="mb-[6cqw] flex justify-center"
        >
          <img src={logoW} alt="Logo" className="object-contain opacity-60" style={{ height: '11cqw' }} />
        </motion.div>
        
        <h1 className="font-display font-bold text-white leading-[1.18]" style={{ fontSize: '9cqw' }}>
          {text.map((word, i) => (
            <motion.span
              key={i}
              className="inline-block"
              initial={{ opacity: 0, y: 20, filter: "blur(10px)" }}
              animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
              transition={{ delay: 0.5 + i * 0.15, duration: 0.5, type: "spring", stiffness: 200 }}
              style={{ marginRight: '0.3em' }}
            >
              {word === 'uso' || word === 'contínuo' ? (
                <span className="text-gradient-gold">{word}</span>
              ) : word === 'Estruture' ? (
                <span className="text-gradient-blue">{word}</span>
              ) : (
                word
              )}
            </motion.span>
          ))}
        </h1>
        
        <motion.div 
          className="bg-gradient-to-r from-transparent via-[#9B8659] to-transparent w-full"
          initial={{ scaleX: 0, opacity: 0 }}
          animate={{ scaleX: 1, opacity: 1 }}
          transition={{ delay: 1.8, duration: 1.5, ease: "easeInOut" }}
          style={{ height: '0.4cqw', marginTop: '6cqw' }}
        />
      </div>
    </motion.div>
  );
};

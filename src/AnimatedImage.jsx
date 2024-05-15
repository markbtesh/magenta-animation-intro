// AnimatedImages.js
import { motion } from 'framer-motion';

const AnimatedImages = () => {
  const images = [
    '/r1.png',
    '/r2.png',
    '/r3.png',
    '/r4.png',
  ];
   
  const xVal = ['00%', '-100%', '50%', '-200%'];
  const scaleVal = [0.0001, 0.1, 0.003, 0.001]
  
  return (
      <div style={{ position: 'relative', width: '100%', maxWidth: '500px', margin: '25% auto', scale: '.75' }}>
        {images.map((src, index) => (
          <motion.div
            key={index}
            style={{ position: 'absolute', top: 0, left: 0 }}
            initial={{ opacity: 0, x: xVal[index], y: '-200%',  rotate: 540, scale: scaleVal[index] }}
            animate={{ opacity: 1, x: 0, y: 0, rotate: 0, scale: 1 }}
            transition={{ duration: 1, delay: index * 0.2 }}
          >
            <img
              src={src}
              alt={`Image ${index + 1}`}
              width={350}
              height={150}
            />
          </motion.div>
        
        ))}

        <motion.div
          style={{ position: 'absolute', top: 153, left: 0 }}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1, x: 0}}
          transition={{ duration: 1, delay:  2 }}
        >
          <img
            src="/magenta.png"
            alt={`Image magenta`}
            width={350}
            height={70}
          />
        </motion.div>
      </div>
    );
  };



export default AnimatedImages;

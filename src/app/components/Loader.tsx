import { motion } from 'motion/react';

export default function Loader() {
  return (
    <motion.div
      initial={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 bg-gray-950 z-50 flex items-center justify-center"
    >
      <div className="relative">
        <motion.div
          animate={{
            scale: [1, 2, 2, 1, 1],
            rotate: [0, 0, 270, 270, 0],
            borderRadius: ['20%', '20%', '50%', '50%', '20%'],
          }}
          transition={{
            duration: 2,
            ease: 'easeInOut',
            times: [0, 0.2, 0.5, 0.8, 1],
            repeat: Infinity,
            repeatDelay: 0.5,
          }}
          className="w-20 h-20 bg-gradient-to-r from-blue-500 to-purple-500"
        />
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          className="absolute -bottom-12 left-1/2 transform -translate-x-1/2 text-white font-medium whitespace-nowrap"
        >
          Loading...
        </motion.div>
      </div>
    </motion.div>
  );
}

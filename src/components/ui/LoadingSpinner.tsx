import { motion } from 'framer-motion';

export default function LoadingSpinner() {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-white">
      <motion.div
        className="flex flex-col items-center gap-4"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
      >
        <div className="relative">
          <motion.div
            className="w-16 h-16 rounded-full border-4 border-primary-200"
            style={{ borderTopColor: '#2563eb' }}
            animate={{ rotate: 360 }}
            transition={{ duration: 1, repeat: Infinity, ease: 'linear' }}
          />
          <motion.div
            className="absolute inset-2 rounded-full border-4 border-accent-200"
            style={{ borderBottomColor: '#10b981' }}
            animate={{ rotate: -360 }}
            transition={{ duration: 1.5, repeat: Infinity, ease: 'linear' }}
          />
        </div>
        <p className="text-gray-500 font-medium text-sm">Loading...</p>
      </motion.div>
    </div>
  );
}

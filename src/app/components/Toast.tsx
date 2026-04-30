import { motion, AnimatePresence } from "motion/react";
import { CheckCircle, XCircle, X } from "lucide-react";

interface ToastProps {
  show: boolean;
  type: "success" | "error";
  message: string;
  onClose: () => void;
}

export default function Toast({ show, type, message, onClose }: ToastProps) {
  return (
    <AnimatePresence>
      {show && (
        <motion.div
          className="fixed top-20 md:top-24 right-3 md:right-6 left-3 md:left-auto z-[200] max-w-md"
          initial={{ opacity: 0, x: 100, scale: 0.9 }}
          animate={{ opacity: 1, x: 0, scale: 1 }}
          exit={{ opacity: 0, x: 100, scale: 0.9 }}
          transition={{ type: "spring", damping: 25, stiffness: 300 }}
        >
          <div
            className={`flex items-center gap-2 md:gap-3 px-4 py-3 md:px-6 md:py-4 rounded-xl md:rounded-2xl shadow-2xl border ${
              type === "success"
                ? "bg-green-50 border-green-200 text-green-800"
                : "bg-red-50 border-red-200 text-red-800"
            }`}
          >
            {type === "success" ? (
              <CheckCircle className="w-5 h-5 md:w-6 md:h-6 flex-shrink-0" />
            ) : (
              <XCircle className="w-5 h-5 md:w-6 md:h-6 flex-shrink-0" />
            )}

            <p className="text-sm md:text-base font-light flex-1">{message}</p>

            <button
              onClick={onClose}
              className="p-1 rounded-full hover:bg-white/50 transition-colors flex-shrink-0"
              aria-label="Fechar notificação"
            >
              <X className="w-3.5 h-3.5 md:w-4 md:h-4" />
            </button>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

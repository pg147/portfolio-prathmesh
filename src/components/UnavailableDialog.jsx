import { motion } from "framer-motion";

const UnavailableDialog = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black/50 backdrop-blur-sm z-50">
      <motion.div
        initial={{ y: -50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        exit={{ y: -50, opacity: 0 }}
        transition={{ duration: 0.3, ease: "easeOut" }}
        className="bg-tile p-6 border-[1.5px] border-stroke rounded-xl shadow-lg max-w-sm w-full text-center"
      >
        <h2 className="text-lg font-semibold text-textSecondary">Website Unavailable</h2>
        <p className="text-subheading mt-2 font-medium">
          Sorry, this website is currently unavailable. Please check back later.
        </p>
        <button
          onClick={onClose}
          className="mt-4 font-medium bg-gradient-to-r from-primary to-secondary text-white px-4 py-2 rounded-lg hover:bg-primary/90 transition"
        >
          Close
        </button>
      </motion.div>
    </div>
  );
};

export default UnavailableDialog;

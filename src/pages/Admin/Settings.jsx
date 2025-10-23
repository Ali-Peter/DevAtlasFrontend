import { motion } from "framer-motion";
import { pageTransition } from "../../components/animations";

const Settings = () => {
  return (
    <motion.div {...pageTransition}>
      <h1 className="text-3xl font-bold text-cyan-300 mb-6">Settings</h1>
      <p className="text-gray-300">
        This is the Settings page. Here you can configure application settings.
      </p>
      {/* Add settings functionality here */}
    </motion.div>
  );
};

export default Settings;
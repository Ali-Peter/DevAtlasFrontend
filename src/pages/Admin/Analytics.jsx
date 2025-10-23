import { motion } from "framer-motion";
import { pageTransition } from "../../components/animations";

const Analytics = () => {
  return (
    <motion.div {...pageTransition}>
      <h1 className="text-3xl font-bold text-cyan-300 mb-6">Analytics</h1>
      <p className="text-gray-300">
        This is the Analytics page. Here you can view usage statistics and reports.
      </p>
      {/* Add analytics functionality here */}
    </motion.div>
  );
};

export default Analytics;
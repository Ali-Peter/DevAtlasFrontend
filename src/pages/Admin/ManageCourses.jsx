import { motion } from "framer-motion";
import { pageTransition } from "../../components/animations";

const ManageCourses = () => {
  return (
    <motion.div {...pageTransition}>
      <h1 className="text-3xl font-bold text-cyan-300 mb-6">Manage Courses</h1>
      <p className="text-gray-300">
        This is the Manage Courses page. Here you can view, edit, or delete courses.
      </p>
      {/* Add course management functionality here */}
    </motion.div>
  );
};

export default ManageCourses;
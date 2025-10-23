import { motion } from "framer-motion";
import { pageTransition } from "../../components/animations";

const UserManagement = () => {
  return (
    <motion.div {...pageTransition}>
      <h1 className="text-3xl font-bold text-cyan-300 mb-6">User Management</h1>
      <p className="text-gray-300">
        This is the User Management page. Here you can manage user accounts and permissions.
      </p>
      {/* Add user management functionality here */}
    </motion.div>
  );
};

export default UserManagement;
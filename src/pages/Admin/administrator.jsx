import { useState } from "react";
import { motion } from "framer-motion";
import { pageTransition } from "../../components/animations";
import Navbar from "../../components/navbar";
import Footer from "../../components/footer";
import SideNav from "../../components/sideNav";
import AdminParameters from "./AdminParameters";
import ManageCourses from "./ManageCourses";
import UserManagement from "./UserManagement";
import Analytics from "./Analytics";
import Settings from "./Settings";

const AdminDashboard = () => {
  const [activeContent, setActiveContent] = useState("Dashboard Overview");

  const contentMap = {
    "Dashboard Overview": <ManageCourses />,
    "Manage Courses": (<AdminParameters onSuccess={() => setActiveContent("Manage Courses")} />),
    "User Management": <UserManagement />,
    "Analytics": <Analytics />,
    "Settings": <Settings />,
  };

  const menuItems = [
    { label: "Dashboard Overview" },
    { label: "Manage Courses" },
    { label: "User Management" },
    { label: "Analytics" },
    { label: "Settings" },
  ];

  return (
    <div className="flex flex-col bg-bgColorWhite text-gray-50 font-sans h-screen overflow-y-auto custom-scrollbar">
        <Navbar/>
          <div className="">
              <SideNav
              menuItems={menuItems}
              className="flex flex-grow overflow-x-auto custom-scrollbar"
              activeItem={activeContent}
              onItemClick={setActiveContent}
              />
              <div className="flex-grow p-8">
              <motion.main {...pageTransition}>
              {contentMap[activeContent] || (
                  <p className="text-gray-300">Select a menu item to view content.</p>
              )}
              </motion.main>
              </div>
          </div>

      <Footer />
    </div>
  );
};

export default AdminDashboard;
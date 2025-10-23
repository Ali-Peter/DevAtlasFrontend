import React from "react";

const SideNav = ({ menuItems, className, activeItem, onItemClick }) => {
  const handleClick = (label) => {
    console.log(`Clicked: ${label}`); // Debug log to confirm click
    onItemClick(label);
  };

  return (
    <aside className={`w-full flex gap-32 bg-bgColorWhite bg-opacity-90 p-6 ${className}`}>
      <ul className="flex gap-8">
        {menuItems.map((item, index) => (
          <li key={index}>
            <button
              onClick={() => handleClick(item.label)}
              className={`w-full text-left text-txtColorBlue hover:text-cyan-400 ${
                activeItem === item.label ? "text-cyan-400 font-semibold" : ""
              }`}
              aria-current={activeItem === item.label ? "true" : "false"}
            >
              {item.label}
            </button>
          </li>
        ))}
      </ul>
    </aside>
  );
};

export default SideNav;
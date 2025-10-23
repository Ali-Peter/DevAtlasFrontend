// src/pages/Tutorials.jsx
import React from "react";
import { Link } from "react-router-dom";
import Navbar from "../components/navbar";
import { motion } from "framer-motion";
import { pageTransition } from "../components/animations";

const Tutorials = () => {
    const tutorials = [
        {
            id: 1,
            title: "Getting Started with C# WinForms",
            description:
            "Learn how to build your first Windows Form app, wire up controls, and handle events.",
        },
        {
            id: 2,
            title: "Connecting C# to SQL Server",
            description:
            "Step-by-step guide to connect your C# app with SQL Server and run queries.",
        },
        {
            id: 3,
            title: "CRUD in WinForms + SQL",
            description:
            "Create, Read, Update, and Delete records in your SQL database using C# WinForms.",
        },
    ];
  return (
    <>
        <Navbar />
        <div className="min-h-screen flex flex-col bg-gray-900 text-white">
            <motion.section {...pageTransition} className="max-w-5xl mx-auto px-6 py-12">
                {/* Tutorials heading */}
                <h1 className="text-3xl sm:text-4xl font-bold mb-4 text-yellow-400 text-center">
                    C# + SQL Tutorials
                </h1>
                <p className="text-lg text-gray-300 mb-10 text-center max-w-2xl mx-auto">
                    Free tutorials + my full learning path if you want to go from beginner to project-ready 🚀
                </p>

                {/* Curriculum */}
                <div className="mb-16">
                    <h2 className="text-2xl font-semibold text-yellow-300 mb-4">📚 Learning Path</h2>
                    <ul className="space-y-3 text-gray-300">
                    <li><span className="font-semibold text-white">Foundations:</span> C# basics, variables, loops, SQL (SELECT, INSERT, UPDATE, DELETE)</li>
                    <li><span className="font-semibold text-white">Practical C#:</span> Classes, objects, collections, error handling</li>
                    <li><span className="font-semibold text-white">WinForms Projects:</span> Forms, buttons, grids, event handling</li>
                    <li><span className="font-semibold text-white">C# + SQL Server Integration:</span> ADO.NET, CRUD, login system</li>
                    <li><span className="font-semibold text-white">Capstone Projects:</span> Inventory, Student Registration, Expense Tracker</li>
                    </ul>
                </div>

                {/* Tutorials List (like you already have) */}
                <div className="grid gap-6 md:grid-cols-2">
                    {tutorials.map((t) => (
                    <motion.div key={t.id} whileHover={{ scale: 1.05 }}
                        className="p-6 rounded-2xl shadow-lg bg-gray-800 border border-gray-700 transition">
                        <h2 className="text-xl font-semibold mb-2 text-yellow-300">{t.title}</h2>
                        <p className="text-gray-400 mb-4">{t.description}</p>
                        <Link to={`/tutorials/${t.id}`} className="text-yellow-400 font-medium hover:underline">
                        Read Tutorial →
                        </Link>
                    </motion.div>
                    ))}
                </div>
                <div className="mt-16 p-8 bg-gray-800 border border-yellow-400 rounded-2xl text-center">
                    <h2 className="text-2xl sm:text-3xl font-semibold text-yellow-400 mb-2">
                    Want 1-on-1 Tutoring?
                    </h2>
                    <p className="text-gray-300 mb-6">
                    Let’s work together on C# and SQL projects step by step.
                    </p>
                    <Link
                    to="/contact"
                    className="bg-yellow-400 text-gray-900 px-6 py-3 rounded-xl font-semibold hover:bg-yellow-500 transition"
                    >
                    Contact Me
                    </Link>
                </div>
            </motion.section>
        </div>
    </>
  );
}

export default Tutorials;
import { useState } from "react";
import { motion } from "framer-motion";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { pageTransition } from "../../components/animations";
import Navbar from "../../components/navbar";
import Footer from "../../components/footer";
import bgImage from '../../assets/heroImage.png';

const Login = () => {
  const [formData, setFormData] = useState({ email: "", password: "" });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    setLoading(true);
    try {
      const API_URL = import.meta.env.VITE_API_URL;
      const res = await axios.post(`${API_URL}/api/Auth/login`, formData);
      if (res.status === 200) {
        localStorage.setItem("token", res.data.token);
        alert("Login successful!");
        navigate("/adminDashboard");
      }
    } catch (err) {
      setError(err.response?.data?.message || "Login failed. Try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="h-screen flex flex-col bg-bgColorWhite text-gray-50 font-sans overflow-y-auto custom-scrollbar">
      <Navbar />
      <motion.section {...pageTransition} 
        className="flex-grow flex items-center justify-center px-4 py-12"
        style={{ backgroundImage: `url(${bgImage})`}}
      >
        <div className="bg-bgColorDark bg-opacity-90 p-8 sm:p-16 rounded-2xl shadow-2xl w-full max-w-lg space-y-6">
          <h1 className="text-3xl font-bold text-txtColorBlue text-center">
            Welcome Back
          </h1>
          <form onSubmit={handleSubmit} className="space-y-5">
            <input
              type="email"
              name="email"
              placeholder="Email Address"
              value={formData.email}
              onChange={handleChange}
              required
              className="w-full p-3 rounded-lg bg-blue-900 text-gray-50 border border-blue-700 focus:outline-none focus:border-cyan-400"
            />
            <input
              type="password"
              name="password"
              placeholder="Password"
              value={formData.password}
              onChange={handleChange}
              required
              className="w-full p-3 rounded-lg bg-blue-900 text-gray-50 border border-blue-700 focus:outline-none focus:border-cyan-400"
            />
            {error && <p className="text-red-400 text-center">{error}</p>}
            <button
              type="submit"
              disabled={loading}
              className="w-full bg-bgColorBlue hover:bg-blue-500 text-gray-50 font-semibold py-3 rounded-lg shadow-lg transition duration-300"
            >
              {loading ? "Logging In..." : "Log In"}
            </button>
          </form>
          <p className="text-center text-txtColorBlue text-sm">
            Don’t have an account?{" "}
            <Link to="/signup" className="text-cyan-400 hover:text-cyan-300">
              Sign Up
            </Link>
          </p>
        </div>
      </motion.section>
      <Footer />
    </div>
  );
};

export default Login;

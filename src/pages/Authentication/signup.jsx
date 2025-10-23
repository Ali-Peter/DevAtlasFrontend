import { useState } from "react";
import { motion } from "framer-motion";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { pageTransition } from "../../components/animations";
import Navbar from "../../components/navbar";
import Footer from "../../components/footer";

const Signup = () => {
  const [formData, setFormData] = useState({
    firstname: "",
    lastname: "",
    email: "",
    password: "",
  });
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
      const res = await axios.post("http://localhost:5213/api/Auth/signup", formData);
      if (res.status === 200) {
        alert("Signup successful! Please log in.");
        navigate("/login");
      }
    } catch (err) {
      setError(err.response?.data?.message || "Signup failed. Try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex flex-col bg-gray-950 text-gray-50 font-sans">
      <Navbar />
      <motion.section {...pageTransition} className="flex-grow flex items-center justify-center px-4">
        <div className="bg-blue-950 bg-opacity-90 p-8 sm:p-10 rounded-2xl shadow-2xl w-full max-w-md space-y-6">
          <h1 className="text-3xl font-bold text-cyan-300 text-center">
            Create an Account
          </h1>
          <form onSubmit={handleSubmit} className="space-y-5">
            <input
              type="text"
              name="firstname"
              placeholder="First Name"
              value={formData.firstname}
              onChange={handleChange}
              required
              className="w-full p-3 rounded-lg bg-blue-900 text-gray-50 border border-blue-700 focus:outline-none focus:border-cyan-400"
            />
            <input
              type="text"
              name="lastname"
              placeholder="Last Name"
              value={formData.lastname}
              onChange={handleChange}
              required
              className="w-full p-3 rounded-lg bg-blue-900 text-gray-50 border border-blue-700 focus:outline-none focus:border-cyan-400"
            />
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
              className="w-full bg-blue-600 hover:bg-blue-500 text-gray-50 font-semibold py-3 rounded-lg shadow-lg transition duration-300"
            >
              {loading ? "Creating Account..." : "Sign Up"}
            </button>
          </form>
          <p className="text-center text-gray-300 text-sm">
            Already have an account?{" "}
            <Link to="/login" className="text-cyan-400 hover:text-cyan-300">
              Log In
            </Link>
          </p>
        </div>
      </motion.section>
      <Footer />
    </div>
  );
};

export default Signup;

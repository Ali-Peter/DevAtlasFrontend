import { useState } from "react";
import axios from "axios";
import { motion, AnimatePresence } from "framer-motion";

const AdminParameters = ({ onSuccess }) => {
  const [showForm, setShowForm] = useState(null); // "courseInfo" | "outline" | null
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  const [courseInfo, setCourseInfo] = useState({
    title: "",
    description: "",
    category: "",
    level: "",
    thumbnailUrl: "",
  });

  const [outline, setOutline] = useState({
    sections: [{ courseId: "", title: "", description: "", file: null, video: null, order: 1 }],
  });

  const closeForm = () => {
    setShowForm(null);
    setError("");
    setSuccess("");
  };

  const handleCourseChange = (e) => {
    setCourseInfo({ ...courseInfo, [e.target.name]: e.target.value });
  };

  const handleOutlineChange = (index, e) => {
    const updated = [...outline.sections];
    if (e.target.type === "file") {
      updated[index][e.target.name] = e.target.files[0];
    } else {
      updated[index][e.target.name] = e.target.value;
    }
    setOutline({ ...outline, sections: updated });
  };

  const addSection = () => {
    setOutline({
      ...outline,
      sections: [...outline.sections, { courseId: "", title: "", description: "", file: null, video: null, order: outline.sections.length + 1 }],
    });
  };

  const removeSection = (index) => {
    setOutline({
      ...outline,
      sections: outline.sections.filter((_, i) => i !== index),
    });
  };

  const handleSubmitCourse = async (e) => {
    e.preventDefault();
    setError("");
    setSuccess("");
    setLoading(true);
    const token = localStorage.getItem("token");

    try {
      await axios.post("http://localhost:5213/api/Courses", courseInfo, {
        headers: { Authorization: `Bearer ${token}` },
      });
      setSuccess("Course info added successfully!");
      setCourseInfo({ title: "", description: "", category: "", level: "", thumbnailUrl: "" });
      onSuccess?.();
    } catch (err) {
      setError(err.response?.data?.message || "Failed to add course info.");
    } finally {
      setLoading(false);
    }
  };

  const handleSubmitOutline = async (e) => {
    e.preventDefault();
    setError("");
    setSuccess("");
    setLoading(true);
    const token = localStorage.getItem("token");

    // Validate sections
    for (const section of outline.sections) {
      if (!section.courseId || !section.title || !section.order || isNaN(section.order) || section.order <= 0) {
        setError("Course ID, title, and a valid order number are required for each section.");
        setLoading(false);
        return;
      }
    }

    const data = new FormData();
    outline.sections.forEach((s, i) => {
      data.append(`sections[${i}].courseId`, s.courseId);
      data.append(`sections[${i}].title`, s.title);
      data.append(`sections[${i}].description`, s.description || "");
      if (s.file) data.append(`sections[${i}].file`, s.file);
      if (s.video) data.append(`sections[${i}].video`, s.video);
      data.append(`sections[${i}].order`, s.order);
    });

    try {
      await axios.post("http://localhost:5213/api/Courses/CourseOutline", data, {
        headers: {
          "Content-Type": "multipart/form-data",
          Authorization: `Bearer ${token}`,
        },
      });
      setSuccess("Course outline uploaded successfully!");
      setOutline({ sections: [{ courseId: "", title: "", description: "", file: null, video: null, order: 1 }] });
      onSuccess?.();
    } catch (err) {
      setError(err.response?.data?.message || "Failed to upload outline.");
    } finally {
      setLoading(false);
    }
  };

  const overlayVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1 },
    exit: { opacity: 0 },
  };

  const formVariants = {
    hidden: { x: "100%", opacity: 0 },
    visible: { x: 0, opacity: 1 },
    exit: { x: "100%", opacity: 0 },
  };

  return (
    <div className="flex flex-col md:flex-row min-h-screen bg-bgColorWhite text-gray-50 font-sans">
      {/* SIDE NAV (collapses into top bar on mobile) */}
      <div className="w-full md:w-64 bg-bgColorDark p-4 md:p-6 flex md:flex-col flex-row md:flex-nowrap justify-around md:justify-start gap-3 md:gap-4 border-b md:border-r border-gray-800">
        <h2 className="hidden md:block text-xl font-bold text-cyan-400 mb-2">Admin Tools</h2>

        <button
          onClick={() => setShowForm("courseInfo")}
          className={`py-2 md:py-3 px-4 rounded-lg text-center md:text-left text-sm md:text-base font-medium transition-all duration-300 w-full md:w-auto ${
            showForm === "courseInfo"
              ? "bg-cyan-600 text-white"
              : "bg-gray-800 hover:bg-gray-700 text-gray-300"
          }`}
        >
          ➕ Add Course Info
        </button>

        <button
          onClick={() => setShowForm("outline")}
          className={`py-2 md:py-3 px-4 rounded-lg text-center md:text-left text-sm md:text-base font-medium transition-all duration-300 w-full md:w-auto ${
            showForm === "outline"
              ? "bg-blue-600 text-white"
              : "bg-gray-800 hover:bg-gray-700 text-gray-300"
          }`}
        >
          🧾 Add Course Outline
        </button>
      </div>

      {/* MAIN CONTENT */}
      <div className="flex-grow flex items-center justify-center text-gray-500 text-center p-6">
        <p className="text-sm md:text-base">
          Select an option from the {` `}
          <span className="text-cyan-500 font-medium">menu</span> to begin.
        </p>
      </div>

      {/* OVERLAY FORM */}
      <AnimatePresence>
        {showForm && (
          <motion.div
            className="fixed inset-0 bg-black bg-opacity-70 flex items-end md:items-center justify-center md:justify-end z-50"
            variants={overlayVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
          >
            <motion.div
              className="bg-gray-900 p-6 md:p-8 rounded-t-2xl md:rounded-l-2xl shadow-2xl w-full sm:w-[90%] md:w-[500px] h-[90%] md:h-full overflow-y-auto relative"
              variants={formVariants}
              initial="hidden"
              animate="visible"
              exit="exit"
            >
              <button
                onClick={closeForm}
                className="absolute top-4 right-4 text-gray-400 hover:text-white text-xl"
              >
                ✖
              </button>

              {/* COURSE INFO FORM */}
              {showForm === "courseInfo" && (
                <form onSubmit={handleSubmitCourse} className="space-y-4 mt-8">
                  <h2 className="text-2xl font-bold text-cyan-300 mb-4">Add Course Info</h2>

                  <input
                    type="text"
                    name="title"
                    value={courseInfo.title}
                    onChange={handleCourseChange}
                    placeholder="Course Title"
                    required
                    className="w-full p-3 rounded-lg bg-gray-800 text-gray-50 border border-cyan-500"
                  />

                  <textarea
                    name="description"
                    value={courseInfo.description}
                    onChange={handleCourseChange}
                    placeholder="Course Description"
                    required
                    className="w-full p-3 rounded-lg bg-gray-800 text-gray-50 border border-cyan-500"
                  />

                  <input
                    type="text"
                    name="category"
                    value={courseInfo.category}
                    onChange={handleCourseChange}
                    placeholder="Course Category"
                    required
                    className="w-full p-3 rounded-lg bg-gray-800 text-gray-50 border border-cyan-500"
                  />

                  <select
                    name="level"
                    value={courseInfo.level || ""}
                    onChange={handleCourseChange}
                    required
                    className="w-full p-3 rounded-lg bg-gray-800 text-gray-50 border border-cyan-500"
                  >
                    <option value="">Select Level</option>
                    <option value="Beginner">Beginner</option>
                    <option value="Intermediate">Intermediate</option>
                    <option value="Advanced">Advanced</option>
                  </select>

                  <input
                    type="text"
                    name="thumbnailUrl"
                    value={courseInfo.thumbnailUrl || ""}
                    onChange={handleCourseChange}
                    placeholder="Thumbnail URL (optional)"
                    className="w-full p-3 rounded-lg bg-gray-800 text-gray-50 border border-cyan-500"
                  />

                  {error && <p className="text-red-400">{error}</p>}
                  {success && <p className="text-green-400">{success}</p>}

                  <button
                    type="submit"
                    disabled={loading}
                    className="w-full bg-cyan-600 hover:bg-cyan-500 py-3 rounded-lg font-semibold"
                  >
                    {loading ? "Saving..." : "Save Info"}
                  </button>
                </form>
              )}

              {/* COURSE OUTLINE FORM */}
              {showForm === "outline" && (
                <form onSubmit={handleSubmitOutline} className="space-y-4 mt-8">
                  <h2 className="text-2xl font-bold text-blue-300 mb-4">Add Course Outline</h2>

                  {outline.sections.map((s, i) => (
                    <div key={i} className="border border-blue-500 p-3 rounded-lg space-y-2">
                      <input
                        type="text"
                        name="courseId"
                        value={s.courseId}
                        onChange={(e) => handleOutlineChange(i, e)}
                        placeholder="Course ID (MongoDB ObjectId)"
                        required
                        className="w-full p-2 rounded bg-gray-800 text-gray-50 border border-blue-500"
                      />

                      <input
                        type="text"
                        name="title"
                        value={s.title}
                        onChange={(e) => handleOutlineChange(i, e)}
                        placeholder="Outline Title"
                        required
                        className="w-full p-2 rounded bg-gray-800 text-gray-50 border border-blue-500"
                      />

                      <textarea
                        name="description"
                        value={s.description}
                        onChange={(e) => handleOutlineChange(i, e)}
                        placeholder="Description"
                        className="w-full p-2 rounded bg-gray-800 text-gray-50 border border-blue-500"
                      />

                      <input
                        type="file"
                        name="file"
                        accept=".pdf,.doc,.ppt,.pptx"
                        onChange={(e) => handleOutlineChange(i, e)}
                        className="w-full text-sm text-gray-400"
                      />

                      <input
                        type="file"
                        name="video"
                        accept="video/*"
                        onChange={(e) => handleOutlineChange(i, e)}
                        className="w-full text-sm text-gray-400"
                      />

                      <input
                        type="number"
                        name="order"
                        value={s.order}
                        onChange={(e) => handleOutlineChange(i, e)}
                        placeholder="Display Order"
                        required
                        min="1"
                        className="w-full p-2 rounded bg-gray-800 text-gray-50 border border-blue-500"
                      />

                      {outline.sections.length > 1 && (
                        <button
                          type="button"
                          onClick={() => removeSection(i)}
                          className="text-red-400 hover:text-red-300 text-sm"
                        >
                          Remove
                        </button>
                      )}
                    </div>
                  ))}

                  <button
                    type="button"
                    onClick={addSection}
                    className="bg-blue-600 hover:bg-blue-500 text-white py-2 px-4 rounded-lg"
                  >
                    + Add Section
                  </button>

                  {error && <p className="text-red-400">{error}</p>}
                  {success && <p className="text-green-400">{success}</p>}

                  <button
                    type="submit"
                    disabled={loading}
                    className="w-full bg-blue-600 hover:bg-blue-500 py-3 rounded-lg font-semibold"
                  >
                    {loading ? "Uploading..." : "Upload Outline"}
                  </button>
                </form>
              )}
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default AdminParameters;
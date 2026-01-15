import { Cross, Link2 } from "lucide-react";
import { useState } from "react";
import { LoginPage } from "./loginPage";
import axios from "axios";

export const RegisterPage = ({ onClose }) => {
  const [openLogin, setOpenLogin] = useState(false);
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState({ type: "", text: "" });

  const [data, setData] = useState({
    name: "",
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    setData({ ...data, [e.target.name]: e.target.value });
  };

  const handleOnSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setMessage({ type: "", text: "" });

    try {
      const res = await axios.post(
        "http://localhost:5000/api/auth/register",
        data,
        {
          headers: {
            "Content-Type": "application/json",
          },
          withCredentials: true,
        }
      );

      setMessage({
        type: "success",
        text: res.data.message || "Registration successful 🎉",
      });

      setData({ name: "", email: "", password: "" });
    } catch (error) {
      setMessage({
        type: "error",
        text:
          error.response?.data?.message || "Something went wrong. Try again!",
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <div className="fixed inset-0 bg-neutral-900/70 flex items-center justify-center">
        <div className="max-w-md w-full bg-white rounded-2xl shadow-xl p-8 border border-slate-100">
          <div className="flex items-center justify-between mb-6">
            <div className="flex items-center gap-4">
              <div className="bg-indigo-600 p-3 rounded-xl">
                <Link2 className="text-white" size={20} />
              </div>
              <h2 className="text-2xl font-bold text-slate-800">
                Create an account
              </h2>
            </div>
            <button onClick={onClose}>
              <Cross
                size={20}
                className="text-neutral-700 hover:text-red-600"
              />
            </button>
          </div>

          {/* Message UI */}
          {message.text && (
            <div
              className={`mb-4 p-3 rounded-lg text-sm font-medium ${
                message.type === "success"
                  ? "bg-green-100 text-green-700"
                  : "bg-red-100 text-red-700"
              }`}
            >
              {message.text}
            </div>
          )}

          <form className="space-y-4" onSubmit={handleOnSubmit}>
            <div>
              <label className="block text-sm font-medium text-slate-700 mb-1">
                Name
              </label>
              <input
                type="text"
                name="name"
                value={data.name}
                onChange={handleChange}
                placeholder="Enter your name"
                className="w-full px-4 py-3 rounded-lg border border-slate-200 focus:ring-2 focus:ring-indigo-500 focus:outline-none"
                required
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-slate-700 mb-1">
                Email Address
              </label>
              <input
                type="email"
                name="email"
                value={data.email}
                onChange={handleChange}
                placeholder="Enter your email"
                className="w-full px-4 py-3 rounded-lg border border-slate-200 focus:ring-2 focus:ring-indigo-500 focus:outline-none"
                required
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-slate-700 mb-1">
                Password
              </label>
              <input
                type="password"
                name="password"
                value={data.password}
                onChange={handleChange}
                placeholder="••••••••"
                className="w-full px-4 py-3 rounded-lg border border-slate-200 focus:ring-2 focus:ring-indigo-500 focus:outline-none"
                required
              />
            </div>

            <button
              disabled={loading}
              className="w-full mt-4 bg-indigo-600 hover:bg-indigo-700 text-white font-semibold py-3 rounded-lg transition disabled:opacity-70"
            >
              {loading ? "Creating account..." : "Sign Up"}
            </button>
          </form>

          <p className="text-center mt-6 text-sm text-slate-600">
            Already have an account?
            <button
              onClick={() => setOpenLogin(true)}
              className="ml-1 text-indigo-600 font-semibold hover:underline"
            >
              Log in
            </button>
          </p>
        </div>

        {openLogin && <LoginPage />}
      </div>
    </>
  );
};

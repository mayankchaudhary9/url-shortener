import { Link2, Cross } from "lucide-react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { RegisterPage } from "./registerPage";

export const LoginPage = ({ close }) => {
  const [openRegister, setOpenRegister] = useState(false);
  const [data, setData] = useState({
    email: "",
    password: "",
  });
  const navigate = useNavigate();

  const handleOnSubmit = (e) => {
    e.preventDefault();
    // Handle login logic here
    navigate("/dashboard"); // Redirect to dashboard after login
  };
  return (
    <>
      <div className="fixed top-0 bottom-0 left-0 right-0 bg-neutral-900/70 flex items-center justify-center">
        <div className="max-w-md w-full bg-white rounded-2xl shadow-xl p-8 border border-slate-100">
          <div className="flex items-center justify-center mb-6 gap-4">
            <div className="bg-indigo-600 p-3 rounded-xl">
              <Link2 className="text-white" size={20} />
            </div>
            <h2 className="text-2xl font-bold text-center text-slate-800 mb-2">
              Welcome back
            </h2>
            <button>
              <Cross
                size={20}
                className="text-neutral-700 hover:text-red-600"
                onClick={close}
              />
            </button>
          </div>

          <form className="space-y-4" onSubmit={handleOnSubmit}>
            <div>
              <label className="block text-sm font-medium text-slate-700 mb-1">
                Email Address
              </label>
              <input
                type="email"
                placeholder="Enter your email"
                className="w-full px-4 py-3 rounded-lg border border-slate-200 focus:ring-2 focus:ring-indigo-500 focus:outline-none transition-all"
                required
                onChange={(e) => setData({ ...data, email: e.target.value })}
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-slate-700 mb-1">
                Password
              </label>
              <input
                type="password"
                placeholder="••••••••"
                className="w-full px-4 py-3 rounded-lg border border-slate-200 focus:ring-2 focus:ring-indigo-500 focus:outline-none transition-all"
                required
                onChange={(e) => setData({ ...data, password: e.target.value })}
              />
            </div>
            <button className="w-full mt-4 bg-indigo-600 hover:bg-indigo-700 text-white font-semibold py-3 rounded-lg transition-colors shadow-lg shadow-indigo-100">
              Sign In
            </button>
          </form>

          <p className="text-center mt-6 text-sm text-slate-600">
            Don't have an account?
            <button
              onClick={() => {
                setOpenRegister(true);
                close;
              }}
              className="ml-1 text-indigo-600 font-semibold hover:underline"
            >
              Register
            </button>
          </p>
        </div>
        {openRegister && (
          <RegisterPage onClose={() => setOpenRegister(false)} />
        )}
      </div>
    </>
  );
};

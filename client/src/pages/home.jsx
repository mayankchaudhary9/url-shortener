import {
  BarChart3,
  Copy,
  ExternalLink,
  Link2,
  LogOut,
  Plus,
  User,
} from "lucide-react";
import { useState } from "react";

import { LoginPage } from "./loginPage";

export const Home = () => {
  const [openLogin, setOpenLogin] = useState(false);

  const handleLogout = () => {};
  return (
    <>
      <div className="min-h-screen bg-slate-50">
        {/* Navbar */}
        <nav className="bg-white border-b border-slate-200 px-6 py-4">
          <div className="max-w-5xl mx-auto flex justify-between items-center">
            <div className="flex items-center gap-2 font-bold text-xl text-indigo-600">
              <Link2 size={24} /> <span>Brief.ly</span>
            </div>
            <div className="flex items-center gap-6">
              <button
                onClick={() => setOpenLogin(true)}
                className="flex items-center gap-2 text-slate-500 hover:text-green-500 transition-colors font-medium"
              >
                <User size={18} /> LogIn
              </button>
              <button
                onClick={handleLogout}
                className="flex items-center gap-2 text-slate-500 hover:text-red-500 transition-colors font-medium"
              >
                <LogOut size={18} /> Logout
              </button>
            </div>
          </div>
        </nav>

        <main className="max-w-5xl mx-auto px-6 py-12">
          {/* Create Short URL Hero */}
          <section className="bg-white rounded-3xl p-8 shadow-sm border border-slate-100 mb-12">
            <h2 className="text-2xl font-bold text-slate-800 mb-6 flex items-center gap-2">
              <Plus className="text-indigo-600" size={24} /> Shorten a Link
            </h2>
            <div className="flex flex-col sm:flex-row gap-4">
              <input
                type="url"
                placeholder="Enter long link (https://...)"
                className="flex-1 bg-slate-50 px-6 py-4 rounded-2xl border-none ring-1 ring-slate-200 focus:ring-2 focus:ring-indigo-500 outline-none text-lg transition-all"
              />
              <button className="bg-indigo-600 hover:bg-indigo-700 text-white px-8 py-4 rounded-2xl font-bold text-lg transition-all shadow-md active:scale-95">
                Shorten Now
              </button>
            </div>
          </section>

          {/* Links Table */}
          <div className="bg-white rounded-3xl shadow-sm border border-slate-100 overflow-hidden">
            <div className="px-8 py-6 border-b border-slate-100 flex justify-between items-center">
              <h3 className="font-bold text-slate-800 text-lg">Your Links</h3>
              <span className="bg-indigo-50 text-indigo-600 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider">
                Active
              </span>
            </div>

            <div className="overflow-x-auto">
              <table className="w-full text-left">
                <thead className="bg-slate-50 text-slate-500 text-sm">
                  <tr>
                    <th className="px-8 py-4 font-medium">Original URL</th>
                    <th className="px-8 py-4 font-medium">Short Link</th>
                    <th className="px-8 py-4 font-medium text-center">
                      Clicks
                    </th>
                    <th className="px-8 py-4 font-medium text-right">Action</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-100">
                  {[
                    {
                      original: "https://github.com/reactjs/react-router",
                      short: "brf.ly/rt102",
                      clicks: 245,
                    },
                    {
                      original: "https://tailwindcss.com/docs/installation",
                      short: "brf.ly/tw33",
                      clicks: 120,
                    },
                  ].map((item, i) => (
                    <tr
                      key={i}
                      className="hover:bg-slate-50/50 transition-colors"
                    >
                      <td className="px-8 py-5 text-sm text-slate-400 truncate max-w-[200px]">
                        {item.original}
                      </td>
                      <td className="px-8 py-5 text-indigo-600 font-bold">
                        {item.short}
                      </td>
                      <td className="px-8 py-5 text-center">
                        <span className="inline-flex items-center gap-1 text-slate-700 font-medium">
                          <BarChart3 size={14} className="text-slate-400" />{" "}
                          {item.clicks}
                        </span>
                      </td>
                      <td className="px-8 py-5 text-right">
                        <button
                          className="p-2 text-slate-400 hover:text-indigo-600 transition-colors"
                          title="Copy Link"
                        >
                          <Copy size={20} />
                        </button>
                        <button
                          className="p-2 text-slate-400 hover:text-indigo-600 transition-colors"
                          title="Open Link"
                        >
                          <ExternalLink size={20} />
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </main>

        {openLogin && <LoginPage close={() => setOpenLogin(false)} />}
      </div>
    </>
  );
};

import { useEffect, useState } from "react";
import { Eye, EyeOff } from "lucide-react";

const generateCode = () =>
  Math.floor(1000 + Math.random() * 9000).toString();

export default function UserLogin() {
  const [form, setForm] = useState({
    username: "",
    password: "",
    code: "",
  });

  const [showPass, setShowPass] = useState(false);
  const [serverCode, setServerCode] = useState(generateCode());
  const [errors, setErrors] = useState({});
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setServerCode(generateCode());
  }, []);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
    setErrors({ ...errors, [e.target.name]: "" });
  };

  const validate = () => {
    let err = {};

    if (!form.username.trim()) {
      err.username = "Username is required";
    }

    if (!form.password) {
      err.password = "Password is required";
    } else if (form.password.length < 6) {
      err.password = "Minimum 6 characters required";
    }

    if (form.code !== serverCode) {
      err.code = "Invalid validation code";
    }

    setErrors(err);
    return Object.keys(err).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!validate()) return;

    setLoading(true);

    // 🔥 Simulated API
    setTimeout(() => {
      setLoading(false);
      alert("Login Successful ✅");
      setForm({ username: "", password: "", code: "" });
      setServerCode(generateCode());
    }, 1500);
  };

  return (
    <div className="min-h-screen w-full bg-gradient-to-b from-[#d85d0d] to-[#f58220] flex justify-center items-center px-4">
      <div className="w-full max-w-md text-center">
        {/* IMAGE HEADER */}
        <div className="overflow-hidden rounded-t-2xl">
          <img
            src="/login-banner.jpg"
            alt="banner"
            className="w-full h-[160px] object-cover"
          />
        </div>

        {/* CARD */}
        <div className="bg-transparent py-6">
          <div className="flex justify-end mb-3">
            <button className="bg-yellow-400 text-black text-xs px-3 py-1 rounded font-semibold">
              GO TO MASTER LINK
            </button>
          </div>

          <h2 className="text-white text-2xl font-bold mb-5">
            USER LOGIN
          </h2>

          <form
            onSubmit={handleSubmit}
            className="space-y-4"
          >
            {/* USERNAME */}
            <div>
              <input
                type="text"
                name="username"
                placeholder="Username"
                value={form.username}
                onChange={handleChange}
                className="w-full h-11 rounded-md px-4 text-sm outline-none"
              />
              {errors.username && (
                <p className="text-red-200 text-xs mt-1 text-left">
                  {errors.username}
                </p>
              )}
            </div>

            {/* PASSWORD */}
            <div className="relative">
              <input
                type={showPass ? "text" : "password"}
                name="password"
                placeholder="Password"
                value={form.password}
                onChange={handleChange}
                className="w-full h-11 rounded-md px-4 pr-10 text-sm outline-none"
              />
              <button
                type="button"
                onClick={() => setShowPass(!showPass)}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-600"
              >
                {showPass ? <EyeOff size={18} /> : <Eye size={18} />}
              </button>

              {errors.password && (
                <p className="text-red-200 text-xs mt-1 text-left">
                  {errors.password}
                </p>
              )}
            </div>

            {/* VALIDATION CODE */}
            <div className="flex gap-2">
              <input
                type="text"
                name="code"
                placeholder="Fill Validation Code"
                value={form.code}
                onChange={handleChange}
                className="flex-1 h-11 rounded-md px-4 text-sm outline-none"
              />
              <div className="w-20 h-11 bg-white rounded-md flex items-center justify-center font-bold text-gray-800 tracking-widest">
                ➜ {serverCode}
              </div>
            </div>

            {errors.code && (
              <p className="text-red-200 text-xs text-left">
                {errors.code}
              </p>
            )}

            {/* LOGIN BUTTON */}
            <button
              disabled={loading}
              className={`w-full h-11 rounded-md text-white font-semibold transition
                ${
                  loading
                    ? "bg-green-400 cursor-not-allowed"
                    : "bg-green-500 hover:bg-green-600"
                }`}
            >
              {loading ? "Logging in..." : "Login"}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

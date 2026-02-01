import { useEffect, useState } from "react";
import { Eye, EyeOff, LogIn, LogOut } from "lucide-react";
import { useNavigate } from "react-router-dom";

const genCode = () =>
  Math.floor(1000 + Math.random() * 9000).toString();

export default function LoginBar() {
  const [showPass, setShowPass] = useState(false);
  const [code, setCode] = useState("");
  const [inputCode, setInputCode] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    setCode(genCode());
  }, []);

  const handleLogin = () => {
    if (inputCode !== code) {
      alert("Invalid validation code");
      setCode(genCode());
      setInputCode("");
      return;
    }
    alert("Login Success");
  };

  return (
    <div className="w-full h-[72px] flex items-center px-4 bg-[#1f1f1f]">
      {/* LOGO */}
      <img
        src="/logo.png"
        alt="logo"
        className="h-[44px]"
        draggable={false}
      />

      {/* ================= DESKTOP VIEW ================= */}
      <div className="ml-auto hidden lg:flex items-center gap-3">
        {/* USERNAME */}
        <input
          placeholder="Username"
          className="h-[30px] w-[180px] rounded-md px-3 text-sm outline-none"
        />

        {/* PASSWORD */}
        <div className="relative">
          <input
            type={showPass ? "text" : "password"}
            placeholder="Password"
            className="h-[30px] w-[180px] rounded-md px-3 pr-9 text-sm outline-none"
          />
          <button
            type="button"
            onClick={() => setShowPass(!showPass)}
            className="absolute right-2 top-1/2 -translate-y-1/2 text-gray-500"
          >
            {showPass ? <EyeOff size={16} /> : <Eye size={16} />}
          </button>
        </div>

        {/* VALIDATION */}
        <div className="h-[30px] flex items-center bg-white rounded-md px-2 gap-2">
          <input
            placeholder="Validation Code"
            value={inputCode}
            onChange={(e) =>
              setInputCode(e.target.value.replace(/\D/g, ""))
            }
            maxLength={4}
            className="w-[130px] text-sm outline-none"
          />
          <span className="font-bold text-sm">➜ {code}</span>
        </div>

        {/* LOGIN */}
        <button
          onClick={handleLogin}
          className="h-[30px] px-6 rounded-md bg-[#ff7a1a] text-white text-sm font-medium hover:bg-[#ff6a00] transition"
        >
          Login
        </button>
      </div>

      {/* ================= MOBILE + TABLET VIEW ================= */}
      <div className="ml-auto flex lg:hidden items-center gap-3">
        {/* LOGIN BUTTON */}
        <button
          onClick={() => navigate("/userlogin")}
          className="flex items-center gap-2 px-3 py-2 rounded-full
                     bg-gradient-to-r from-[#ff7a1a] to-[#ff9a3c]
                     text-white text-[13px] font-semibold shadow-md active:scale-95"
        >
          <LogIn size={16} />
          Login
        </button>

        {/* LOGOUT BUTTON */}
        <button
          onClick={() => alert("Logout clicked")}
          className="flex items-center gap-2 px-3 py-2 rounded-full
                     bg-[#2e2e2e] border border-gray-600
                     text-white text-sm font-semibold shadow-md active:scale-95"
        >
          <LogOut size={16} />
          Logout
        </button>
      </div>
    </div>
  );
}

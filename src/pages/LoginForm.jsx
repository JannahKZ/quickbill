import React from "react";
import { useNavigate } from "react-router-dom";

export default function LoginForm({ onSwitch }) {
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    // ✅ Add authentication logic here later
    navigate("/dashboard"); // Redirect to dashboard after login
  };

  return (
    <>
      <h2 className="text-3xl font-bold text-center mb-6 text-white">
        Login
      </h2>
      <form onSubmit={handleSubmit}>
        {/* Username input */}
        <div className="relative w-full h-[50px] mb-6">
          <input
            type="text"
            required
            className="peer w-full h-full bg-transparent border-b-2 border-white outline-none text-white font-semibold pr-6 transition-all focus:border-[#e46033]"
          />
          <label className="absolute left-0 top-1/2 -translate-y-1/2 text-white transition-all peer-focus:-top-1 peer-focus:text-[#e46033] peer-valid:-top-1 peer-valid:text-[#e46033]">
            Username
          </label>
          <box-icon
            type="solid"
            name="user"
            color="gray"
            class="absolute right-0 top-1/2 -translate-y-1/2"
          ></box-icon>
        </div>

        {/* Password input */}
        <div className="relative w-full h-[50px] mb-6">
          <input
            type="password"
            required
            className="peer w-full h-full bg-transparent border-b-2 border-white outline-none text-white font-semibold pr-6 transition-all focus:border-[#e46033]"
          />
          <label className="absolute left-0 top-1/2 -translate-y-1/2 text-white transition-all peer-focus:-top-1 peer-focus:text-[#e46033] peer-valid:-top-1 peer-valid:text-[#e46033]">
            Password
          </label>
          <box-icon
            type="solid"
            name="lock-alt"
            color="gray"
            class="absolute right-0 top-1/2 -translate-y-1/2"
          ></box-icon>
        </div>

        {/* Login button */}
        <button
          type="submit"
          className="relative w-full h-[45px] rounded-full font-semibold border-2 border-[#e46033] overflow-hidden z-10 group"
        >
          <span className="absolute top-[-100%] left-0 h-[300%] w-full bg-[linear-gradient(#25252b,#e46033,#25252b,#e46033)] transition-all duration-500 group-hover:top-0"></span>
          <span className="relative z-20 text-white">Login</span>
        </button>

        {/* Sign up link */}
        <p className="text-sm text-center mt-5 text-white">
          Don’t have an account?{" "}
          <button
            type="button"
            className="text-[#e46033] font-semibold underline"
            onClick={onSwitch}
          >
            Sign Up
          </button>
        </p>
      </form>
    </>
  );
}

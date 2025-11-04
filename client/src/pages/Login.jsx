import { Lock, Mail, User2Icon } from "lucide-react";
import React from "react";
import api from "../config/api";
import { useDispatch } from "react-redux";
import { login } from "../app/features/authSlice";
import toast from "react-hot-toast";

const Login = () => {
  const dispatch = useDispatch();
  const [state, setState] = React.useState("login"); // Default to 'login'

  React.useEffect(() => {
    const query = new URLSearchParams(window.location.search);
    const urlState = query.get("state");
    const validStates = ["login", "register"];
    if (urlState && validStates.includes(urlState)) {
      setState(urlState);
    }
  }, []);

  const [formData, setFormData] = React.useState({
    name: "",
    email: "",
    password: ""
  });

  const [loading, setLoading] = React.useState(false);

  // Handle input change
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  // Handle login/register submit
  const handleSubmit = async (e) => {
    e.preventDefault();

    if (state === "register" && !formData.name.trim()) {
      toast.error("Name is required to register!");
      return;
    }

    setLoading(true);
    try {
      const endpoint = state === "login" ? "login" : "register";
      const { data } = await api.post(`/api/users/${endpoint}`, formData);

      dispatch(login(data));
      localStorage.setItem("token", data.token);

      toast.success(data.message);

      // ✅ Redirect to /app/ after successful login/register
      setTimeout(() => {
        window.location.href = "/app/";
      }, 1000);
    } catch (error) {
      const errMsg =
        error?.response?.data?.message || "Something went wrong. Try again.";
      toast.error(errMsg);
    } finally {
      setLoading(false);
    }
  };

  // Toggle login/register
  const toggleState = () => {
    const newState = state === "login" ? "register" : "login";
    setState(newState);
    window.history.replaceState({}, "", `?state=${newState}`);
  };

  return (
    <div className="flex h-screen w-full items-center justify-center bg-gray-50">
      <div className="flex h-[700px] w-full md:w-[900px] bg-white shadow-lg rounded-2xl overflow-hidden">
        {/* Left image section */}
        <div className="hidden md:flex w-1/2">
          <img
            src="https://raw.githubusercontent.com/prebuiltui/prebuiltui/main/assets/login/leftSideImage.png"
            alt="Illustration"
            className="w-full h-full object-cover"
          />
        </div>

        {/* Right form section */}
        <div className="w-full md:w-1/2 flex flex-col items-center justify-center px-6">
          <form
            onSubmit={handleSubmit}
            className="w-full max-w-sm flex flex-col items-center"
          >
            <h2 className="text-3xl font-semibold text-gray-800">
              {state === "register" ? "Sign up" : "Sign in"}
            </h2>
            <p className="text-sm text-gray-500 mt-2">
              {state === "register"
                ? "Create your account to get started"
                : "Welcome back! Sign in to continue"}
            </p>

            {/* Google Sign-in */}
            <button
              type="button"
              className="w-full mt-8 bg-gray-100 flex items-center justify-center h-12 rounded-full hover:bg-gray-200 transition"
              onClick={() => toast("Google Sign-In not implemented yet!")}
            >
              <img
                src="https://raw.githubusercontent.com/prebuiltui/prebuiltui/main/assets/login/googleLogo.svg"
                alt="Google"
                className="w-5 h-5 mr-2"
              />
              Continue with Google
            </button>

            {/* Divider */}
            <div className="flex items-center gap-4 w-full my-5">
              <div className="w-full h-px bg-gray-300"></div>
              <span className="text-gray-400 text-sm">
                or {state === "register" ? "sign up" : "sign in"} with email
              </span>
              <div className="w-full h-px bg-gray-300"></div>
            </div>

            {/* Name (register only) */}
            {state === "register" && (
              <div className="flex items-center mt-2 w-full bg-white border border-gray-300/80 h-12 rounded-full overflow-hidden pl-6 gap-2">
                <User2Icon size={16} color="#6B7280" />
                <input
                  type="text"
                  name="name"
                  placeholder="Full name"
                  className="border-none outline-none ring-0 w-full text-sm"
                  value={formData.name}
                  onChange={handleChange}
                  required
                />
              </div>
            )}

            {/* Email */}
            <div className="flex items-center w-full mt-4 bg-white border border-gray-300/80 h-12 rounded-full overflow-hidden pl-6 gap-2">
              <Mail size={14} color="#6B7280" />
              <input
                type="email"
                name="email"
                placeholder="Email address"
                className="border-none outline-none ring-0 w-full text-sm"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </div>

            {/* Password */}
            <div className="flex items-center mt-4 w-full bg-white border border-gray-300/80 h-12 rounded-full overflow-hidden pl-6 gap-2">
              <Lock size={14} color="#6B7280" />
              <input
                type="password"
                name="password"
                placeholder="Password"
                className="border-none outline-none ring-0 w-full text-sm"
                value={formData.password}
                onChange={handleChange}
                required
              />
            </div>

            {/* Forgot password */}
            {state === "login" && (
              <div className="w-full flex justify-end mt-3">
                <button
                  type="button"
                  className="text-sm text-indigo-500 hover:underline"
                  onClick={() =>
                    toast("Password reset functionality not implemented yet!")
                  }
                >
                  Forgot password?
                </button>
              </div>
            )}

            {/* Submit button */}
            <button
              type="submit"
              disabled={loading}
              className="mt-6 w-full h-12 rounded-full bg-indigo-500 text-white font-medium hover:bg-indigo-600 transition disabled:opacity-60"
            >
              {loading
                ? "Please wait..."
                : state === "login"
                  ? "Login"
                  : "Sign Up"}
            </button>

            {/* Toggle mode */}
            <p className="text-gray-600 text-sm mt-4">
              {state === "login" ? (
                <>
                  Don’t have an account?{" "}
                  <button
                    type="button"
                    onClick={toggleState}
                    className="text-indigo-500 hover:underline"
                  >
                    Sign up
                  </button>
                </>
              ) : (
                <>
                  Already have an account?{" "}
                  <button
                    type="button"
                    onClick={toggleState}
                    className="text-indigo-500 hover:underline"
                  >
                    Sign in
                  </button>
                </>
              )}
            </p>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;

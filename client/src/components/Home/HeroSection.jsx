import React, { useEffect } from "react";
import VerticalTestimonials from "../VerticalTestimonials.jsx";
import { Link, useNavigate } from "react-router-dom";
import { ViewIcon } from "lucide-react";

const HeroSection = () => {
  const companyLogos = [
    "slack",
    "framer",
    "netflix",
    "google",
    "linkedin",
    "instagram",
    "facebook",
  ];

  // ✅ Get user safely from localStorage
  // const user = JSON.parse(localStorage.getItem("user") || "null");
  const user = JSON.parse(localStorage.getItem("user"));

  const navigate = useNavigate();

  useEffect(() => {
    const openMenu = document.getElementById("open-menu");
    const closeMenu = document.getElementById("close-menu");
    const navLinks = document.getElementById("mobile-navLinks");

    const openMenuHandler = () => {
      navLinks.classList.remove("-translate-x-full");
      navLinks.classList.add("translate-x-0");
    };

    const closeMenuHandler = () => {
      navLinks.classList.remove("translate-x-0");
      navLinks.classList.add("-translate-x-full");
    };

    openMenu?.addEventListener("click", openMenuHandler);
    closeMenu?.addEventListener("click", closeMenuHandler);

    return () => {
      openMenu?.removeEventListener("click", openMenuHandler);
      closeMenu?.removeEventListener("click", closeMenuHandler);
    };
  }, []);

  const handleViewTemplate = () => {
    navigate("/view-template"); // 👈 change route name if needed
  };
  
  return (
    <>
      <svg
        className="size-full absolute -z-10 inset-0"
        width="1440"
        height="720"
        viewBox="0 0 1440 720"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path stroke="#E2E8F0" strokeOpacity=".7" d="M-15.227 702.342H1439.7" />
        <circle cx="711.819" cy="372.562" r="308.334" stroke="#E2E8F0" strokeOpacity=".7" />
        <circle cx="16.942" cy="20.834" r="308.334" stroke="#E2E8F0" strokeOpacity=".7" />
        <path stroke="#E2E8F0" strokeOpacity=".7" d="M-15.227 573.66H1439.7M-15.227 164.029H1439.7" />
        <circle cx="782.595" cy="411.166" r="308.334" stroke="#E2E8F0" strokeOpacity=".7" />
      </svg>

      {/* ✅ Navigation Bar */}
      <nav className="z-50 flex items-center justify-between w-full py-4 px-6 md:px-16 lg:px-24 xl:px-32 backdrop-blur text-slate-800 text-sm">
        <img src="logo.svg" alt="Resume Builder Logo" />

        {/* ✅ Desktop Menu */}
        <div className="hidden md:flex items-center gap-8 transition duration-500">
          <Link to="/" className="hover:text-slate-500 transition">Home</Link>
          <a href="#feature" className="hover:text-slate-500 transition">Features</a>
          <a href="#testimonial" className="hover:text-slate-500 transition">Testimonials</a>
          <Link to="/pricing" className="hover:text-slate-500 transition">Contact</Link>
        </div>

        {/* ✅ Auth Buttons */}
        <div className="flex gap-2">
          <button  onClick={handleViewTemplate} className="px-8 py-2 bg-blue-500 hover:bg-blue-700 active:scale-95 transition-all rounded-lg text-white">View Template</button>
        </div>

        {/* ✅ Mobile Menu Button */}
        <button id="open-menu" className="md:hidden active:scale-90 transition">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="26"
            height="26"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="lucide lucide-menu"
          >
            <path d="M4 5h16" />
            <path d="M4 12h16" />
            <path d="M4 19h16" />
          </svg>
        </button>
      </nav>

      {/* ✅ Mobile Navigation Links */}
      <div
        id="mobile-navLinks"
        className="fixed inset-0 z-[100] bg-white/60 text-slate-800 backdrop-blur flex flex-col items-center justify-center text-lg gap-8 md:hidden transition-transform duration-300 -translate-x-full"
      >
        <Link to="/">Home</Link>
        <a href="#feature">Features</a>
        <a href="#testimonial">Testimonials</a>
        <Link to="/pricing">Contact</Link>

        {user ? (
          <Link
            to="/app"
            className="px-8 py-2 bg-green-500 hover:bg-green-700 active:scale-95 transition-all rounded-full text-white"
          >
            Dashboard
          </Link>
        ) : (
          <>
            <Link
              to="/app?state=register"
              className="px-8 py-2 bg-blue-500 hover:bg-blue-700 active:scale-95 transition-all rounded-full text-white"
            >
              Get Started
            </Link>
            <Link
              to="/app?state=login"
              className="px-8 py-2 border active:scale-95 hover:bg-slate-50 transition-all rounded-full text-slate-700 hover:text-slate-900"
            >
              Login
            </Link>
          </>
        )}

        <button
          id="close-menu"
          className="active:ring-3 active:ring-white aspect-square size-10 p-1 items-center justify-center bg-white hover:bg-slate-200 transition text-black rounded-md flex"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="lucide lucide-x"
          >
            <path d="M18 6 6 18" />
            <path d="m6 6 12 12" />
          </svg>
        </button>
      </div>

      {/* ✅ Hero Section */}
      <section className="flex flex-col max-md:gap-20 md:flex-row pb-20 items-center justify-between mt-20 px-4 md:px-16 lg:px-24 xl:px-32">
        <div className="flex flex-col items-center md:items-start">
          <div className="flex flex-wrap items-center justify-center p-1.5 rounded-full border border-slate-400 text-gray-500 text-xs">
            <div className="flex items-center">
              <img
                className="size-7 rounded-full border-3 border-white"
                src="https://images.unsplash.com/photo-1633332755192-727a05c4013d?q=80&w=50"
                alt="userImage1"
              />
              <img
                className="size-7 rounded-full border-3 border-white -translate-x-2"
                src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?q=80&w=50"
                alt="userImage2"
              />
              <img
                className="size-7 rounded-full border-3 border-white -translate-x-4"
                src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=50&h=50&auto=format&fit=crop"
                alt="userImage3"
              />
            </div>
            <p className="-translate-x-2">Join community of 1M+ founders</p>
          </div>

          <h1 className="text-center md:text-left text-5xl leading-[68px] md:text-6xl md:leading-[84px] font-medium max-w-xl text-slate-900">
            Smart Resumes, Real Results.
          </h1>

          <p className="text-center md:text-left text-sm text-slate-700 max-w-lg mt-2">
            Create, edit and download professional resumes with AI-powered assistance.
          </p>

          <div className="flex items-center gap-4 mt-8 text-sm">
            <Link
              to="/app?state=register"
              className="px-8 py-2.5 text-white bg-indigo-600 hover:bg-indigo-700 active:scale-95 transition-all rounded-lg"
            >
              Get Started
            </Link>

            <button className="flex items-center gap-2 border border-slate-600 active:scale-95 hover:bg-white/10 transition text-slate-600 rounded-md px-6 h-11">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="lucide lucide-video"
              >
                <path d="m16 13 5.223 3.482a.5.5 0 0 0 .777-.416V7.87a.5.5 0 0 0-.752-.432L16 10.5" />
                <rect x="2" y="6" width="14" height="12" rx="2" />
              </svg>
              <span>Watch demo</span>
            </button>
          </div>
        </div>

        <div className="flex-1 w-full h-[300px]">
          <VerticalTestimonials />
        </div>
      </section>
    </>
  );
};

export default HeroSection;

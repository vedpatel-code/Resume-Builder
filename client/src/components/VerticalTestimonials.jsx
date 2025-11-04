import React from "react";

const VerticalTestimonials = () => {
  const images = [
    "canva1.webp",
    "canva2.webp",
    "canva3.webp",
    "canva4.webp",
    "canva5.webp",
    "canva6.webp",
    "canva7.webp",
    "canva8.webp",
    "canva9.webp",
    "canva10.webp",
  ];

  return (
    <>
      <style>{`
        @keyframes scrollUp {
          0% { transform: translateY(0); }
          100% { transform: translateY(-50%); }
        }
        @keyframes scrollDown {
          0% { transform: translateY(-50%); }
          100% { transform: translateY(0); }
        }
        .scroll-up {
          animation: scrollUp 25s linear infinite;
        }
        .scroll-down {
          animation: scrollDown 25s linear infinite;
        }
        .scroll-up:hover,
        .scroll-down:hover {
          animation-play-state: paused;
        }
      `}</style>

      <div className="relative h-[420px] sm:h-[460px] w-full flex justify-end items-center overflow-hidden gap-15">
        {/* Fade overlays */}
        <div className="absolute top-0 left-0 w-full h-20 bg-gradient-to-b  to-transparent z-10" />
        <div className="absolute bottom-0 left-0 w-full h-20 bg-gradient-to-t  to-transparent z-10" />

        {/* Column 1 - scrolls up */}
        <div className="scroll-up flex flex-col items-center gap-6">
          {[...images, ...images].map((img, i) => (
            <div
              key={`col1-${i}`}
              className="w-[220px] h-[293px] rounded-2xl overflow-hidden shadow-md border border-gray-700 bg-gray-800"
            >
              <img
                src={img}
                alt={`testimonial-${i}`}
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
              />
            </div>
          ))}
        </div>

        {/* Column 2 - scrolls down */}
        <div className="scroll-down flex flex-col items-center gap-6">
          {[...images, ...images].map((img, i) => (
            <div
              key={`col2-${i}`}
              className="w-[220px] h-[293px] rounded-2xl overflow-hidden shadow-md border border-gray-700 bg-gray-800"
            >
              <img
                src={img}
                alt={`testimonial-${i}`}
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
              />
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default VerticalTestimonials;

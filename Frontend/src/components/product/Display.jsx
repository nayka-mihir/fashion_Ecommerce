// src/components/Display.jsx
import React, { useRef, useEffect, useState, useContext } from "react";
import { Link } from "react-router-dom";
import { WebContext } from "../../context/WebContext";

function Display({ images: imagesProp }) {
  const { displayimage = [] } = useContext(WebContext) || {};
  const images = imagesProp?.length ? imagesProp : displayimage;

  const fallback = [
    { id: "1", image: "/assets/sunglass.png", alt: "Fallback 1" },
    { id: "2", image: "/assets/sunglass.png", alt: "Fallback 2" },
    { id: "3", image: "/assets/sunglass.png", alt: "Fallback 3" },
  ];
  const items = images && images.length ? images : fallback;

  const containerRef = useRef(null);
  const [isHovered, setIsHovered] = useState(false);
  const [isInteracting, setIsInteracting] = useState(false);
  const autoScrollInterval = 3000;

  const scroll = (direction = "right") => {
    const el = containerRef.current;
    if (!el) return;
    const amount = direction === "right" ? el.clientWidth : -el.clientWidth;
    el.scrollBy({ left: amount, behavior: "smooth" });
  };

  useEffect(() => {
    const onKey = (e) => {
      if (e.key === "ArrowLeft") scroll("left");
      if (e.key === "ArrowRight") scroll("right");
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  useEffect(() => {
    if (isHovered || isInteracting) return;
    const id = setInterval(() => {
      const el = containerRef.current;
      if (!el) return;
      const nearEnd = el.scrollLeft + el.clientWidth >= el.scrollWidth - 2;
      if (nearEnd) el.scrollTo({ left: 0, behavior: "smooth" });
      else scroll("right");
    }, autoScrollInterval);
    return () => clearInterval(id);
  }, [isHovered, isInteracting]);

  const handleUserScroll = (dir) => {
    setIsInteracting(true);
    scroll(dir);
    const t = setTimeout(() => setIsInteracting(false), 3500);
    return () => clearTimeout(t);
  };

  return (
    <div className="relative w-full">
      {/* Left button */}
      <button
        aria-label="Scroll left"
        onClick={() => handleUserScroll("left")}
        className="absolute left-2 top-1/2 -translate-y-1/2 z-20 p-2 rounded-full shadow-lg bg-white/90 hover:bg-white"
        style={{ backdropFilter: "blur(6px)" }}
      >
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" aria-hidden>
          <path d="M15 6L9 12L15 18" stroke="black" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </button>

      {/* Right button */}
      <button
        aria-label="Scroll right"
        onClick={() => handleUserScroll("right")}
        className="absolute right-2 top-1/2 -translate-y-1/2 z-20 p-2 rounded-full shadow-lg bg-white/90 hover:bg-white"
        style={{ backdropFilter: "blur(6px)" }}
      >
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" aria-hidden>
          <path d="M9 6L15 12L9 18" stroke="black" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </button>

      {/* Scroll container */}
      <div
        ref={containerRef}
        className="w-full relative flex snap-x snap-mandatory scroll-smooth py-3 overflow-x-scroll overflow-y-hidden scrollbar-hide"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        onTouchStart={() => setIsInteracting(true)}
        onTouchEnd={() => setTimeout(() => setIsInteracting(false), 1500)}
      >
        {items.map((it, idx) => {
          const id = it.id ?? it._id ?? idx;
          const src = typeof it === "string" ? it : it.image ?? it.src ?? "/assets/sunglass.png";
          const alt = it.alt ?? it.name ?? `slide-${idx}`;

          return (
            <Link
              to={`/product/${id}`}
              key={id + "-" + idx}
              className="flex-shrink-0 w-full snap-center px-3"
              onClick={() => setIsInteracting(true)}
            >
              <div className="w-full h-[40vh] sm:h-[70vh] md:h-[75vh] lg:h-[60vh] overflow-hidden rounded-lg shadow-md bg-gray-100 mx-auto">
                <img
                  src={src}
                  alt={alt}
                  className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                />
              </div>
            </Link>
          );
        })}
      </div>

      {/* Indicators — moved closer to the image */}
      <div className="flex gap-2 justify-center mt-1 mb-2">
        {items.map((_, i) => (
          <div key={i} className="w-2 h-2 rounded-full bg-gray-300" />
        ))}
      </div>

      {/* Hide scrollbar (universal fallback) */}
      <style>{`
        /* For all browsers */
        .scrollbar-hide::-webkit-scrollbar {
          display: none;
        }
        .scrollbar-hide {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
      `}</style>
    </div>
  );
}

export default Display;

"use client";

import { useState } from "react";

const cities = ["Bangalore", "Mumbai"];

interface HeroProps {
  onBookClick: (city: "bangalore" | "mumbai") => void;
}

export default function Hero({ onBookClick }: HeroProps) {
  const [selectedCity, setSelectedCity] = useState("Bangalore");
  const [isVideoOpen, setIsVideoOpen] = useState(false);

  return (
    <section className="relative min-h-screen pt-32 pb-20 overflow-hidden">
      {/* Background Decorative Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 right-10 w-72 h-72 bg-gradient-to-br from-[#FF6B35]/10 to-[#F5A623]/10 rounded-full blur-3xl animate-pulse-soft" />
        <div className="absolute bottom-20 left-10 w-96 h-96 bg-gradient-to-tr from-[#EDE8E3] to-[#F5F5F0] rounded-full blur-3xl" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left Content */}
          <div className="space-y-8">
            {/* Tagline */}
            <p
              className="text-[#FF6B35] font-medium text-lg animate-fade-in-up opacity-0"
              style={{ animationDelay: "0.1s" }}
            >
              Stop wasting countless weekends on irrelevant visits
            </p>

            {/* Main Headline */}
            <h1
              className="text-4xl sm:text-5xl lg:text-6xl font-bold text-[#1A1A2E] leading-tight animate-fade-in-up opacity-0"
              style={{ animationDelay: "0.2s" }}
            >
              Visit curated homes,
              <br />
              negotiate smarter
              <br />
              <span className="text-[#FF6B35]">&amp; buy intelligently.</span>
            </h1>

            {/* Description */}
            <p
              className="text-[#4A4A68] text-lg max-w-lg animate-fade-in-up opacity-0"
              style={{ animationDelay: "0.3s" }}
            >
              Get end-to-end guidance from property wizards who&apos;ve helped
              intelligent homebuyers like you buy{" "}
              <span className="font-semibold text-[#1A1A2E]">200+ homes</span>{" "}
              in the last year alone.
            </p>

            {/* City Selector */}
            <div
              className="animate-fade-in-up opacity-0"
              style={{ animationDelay: "0.4s" }}
            >
              <label className="block text-[#6B7280] text-sm mb-3 font-medium">
                Select City
              </label>
              <div className="inline-flex bg-white rounded-2xl p-1.5 shadow-lg border border-[#EDE8E3]">
                {cities.map((city) => (
                  <button
                    key={city}
                    onClick={() => setSelectedCity(city)}
                    className={`px-8 py-3 rounded-xl font-semibold transition-all duration-300 ${
                      selectedCity === city
                        ? "bg-gradient-to-r from-[#FF6B35] to-[#F5A623] text-white shadow-md"
                        : "text-[#4A4A68] hover:text-[#FF6B35]"
                    }`}
                  >
                    {city}
                  </button>
                ))}
              </div>
            </div>

            {/* CTA Buttons */}
            <div
              className="flex flex-col sm:flex-row gap-4 animate-fade-in-up opacity-0"
              style={{ animationDelay: "0.5s" }}
            >
              <button
                onClick={() =>
                  onBookClick(
                    selectedCity.toLowerCase() as "bangalore" | "mumbai",
                  )
                }
                className="btn-primary text-lg px-8 py-4 rounded-2xl"
              >
                Book An Appointment
              </button>
              <p className="text-[#6B7280] text-sm self-center">
                Already a member?{" "}
                <button className="text-[#FF6B35] font-semibold hover:underline">
                  Login
                </button>
              </p>
            </div>
          </div>

          {/* Right Content - Video Card */}
          <div
            className="relative animate-slide-in-right opacity-0"
            style={{ animationDelay: "0.3s" }}
          >
            {/* Decorative Stars */}
            <div className="absolute -top-8 right-20 text-[#F5A623] animate-float">
              <svg
                width="32"
                height="32"
                viewBox="0 0 24 24"
                fill="currentColor"
              >
                <path d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z" />
              </svg>
            </div>
            <div
              className="absolute top-10 -right-4 text-[#FF6B35] animate-float"
              style={{ animationDelay: "1s" }}
            >
              <svg
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="currentColor"
              >
                <path d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z" />
              </svg>
            </div>

            {/* Video Card with Glassmorphism */}
            <div className="relative">
              {/* Background Blob */}
              <div className="absolute -bottom-10 -right-10 w-40 h-40 bg-gradient-to-br from-[#F5A623]/30 to-[#FF6B35]/30 rounded-3xl rotate-12" />

              {/* Main Video Card */}
              <div
                className="relative glass rounded-3xl p-6 cursor-pointer group transform hover:scale-[1.02] transition-all duration-500 shadow-2xl"
                onClick={() => setIsVideoOpen(true)}
              >
                {/* Video Thumbnail Background */}
                <div className="relative bg-gradient-to-br from-[#FFF8F5] to-[#FFF0E8] rounded-2xl overflow-hidden aspect-video">
                  {/* Propsoch Logo Overlay */}
                  <div className="absolute inset-0 flex flex-col items-center justify-center p-8">
                    <div className="flex items-center gap-3 mb-2">
                      <div className="w-12 h-12 bg-gradient-to-br from-[#FF6B35] to-[#F5A623] rounded-xl flex items-center justify-center">
                        <svg
                          width="28"
                          height="28"
                          viewBox="0 0 24 24"
                          fill="none"
                          className="text-white"
                        >
                          <path
                            d="M3 12L5 10M5 10L12 3L19 10M5 10V20C5 20.5523 5.44772 21 6 21H9M19 10L21 12M19 10V20C19 20.5523 18.5523 21 18 21H15M9 21C9.55228 21 10 20.5523 10 20V16C10 15.4477 10.4477 15 11 15H13C13.5523 15 14 15.4477 14 16V20C14 20.5523 14.4477 21 15 21M9 21H15"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                        </svg>
                      </div>
                      <span className="text-2xl font-bold text-[#1A1A2E]">
                        Prop<span className="text-[#FF6B35]">soch</span>
                      </span>
                    </div>
                    <h3 className="text-[#FF6B35] font-bold text-xl text-center">
                      GUIDED HOMEBUYING
                    </h3>
                    <p className="text-[#F5A623] font-bold text-lg">PROGRAM</p>
                  </div>

                  {/* Play Button */}
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-16 h-16 bg-[#FF0000] rounded-full flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300">
                      <svg
                        className="w-8 h-8 text-white ml-1"
                        fill="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path d="M8 5v14l11-7z" />
                      </svg>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Trust Badge */}
        <div
          className="text-center mt-16 animate-fade-in-up opacity-0"
          style={{ animationDelay: "0.7s" }}
        >
          <p className="text-[#6B7280] text-sm">
            Trusted by{" "}
            <span className="font-semibold text-[#1A1A2E]">1000+</span>{" "}
            intelligent homebuyers
          </p>
        </div>
      </div>

      {/* Video Modal */}
      {isVideoOpen && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 animate-fade-in p-4"
          onClick={() => setIsVideoOpen(false)}
        >
          <div
            className="relative w-full max-w-4xl bg-white rounded-2xl overflow-hidden shadow-2xl animate-scale-in"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Modal Header */}
            <div className="flex items-center justify-between p-4 border-b border-[#EDE8E3]">
              <div className="flex items-center gap-2">
                <div className="w-8 h-8 bg-gradient-to-br from-[#FF6B35] to-[#F5A623] rounded-lg flex items-center justify-center">
                  <svg
                    width="18"
                    height="18"
                    viewBox="0 0 24 24"
                    fill="none"
                    className="text-white"
                  >
                    <path
                      d="M3 12L5 10M5 10L12 3L19 10M5 10V20C5 20.5523 5.44772 21 6 21H9M19 10L21 12M19 10V20C19 20.5523 18.5523 21 18 21H15M9 21C9.55228 21 10 20.5523 10 20V16C10 15.4477 10.4477 15 11 15H13C13.5523 15 14 15.4477 14 16V20C14 20.5523 14.4477 21 15 21M9 21H15"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </div>
                <span className="font-semibold text-[#1A1A2E]">
                  Propsoch Guided Homebuying Program
                </span>
              </div>
              <button
                onClick={() => setIsVideoOpen(false)}
                className="w-10 h-10 rounded-full hover:bg-[#F5F5F0] flex items-center justify-center transition-colors"
                aria-label="Close video"
              >
                <svg
                  className="w-6 h-6 text-[#6B7280]"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </button>
            </div>
            {/* Video Embed */}
            <div className="aspect-video bg-black">
              <iframe
                width="100%"
                height="100%"
                src="https://www.youtube.com/embed/RqBYQJRqUXs?autoplay=1"
                title="Propsoch Guided Homebuying Program"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
            </div>
          </div>
        </div>
      )}
    </section>
  );
}

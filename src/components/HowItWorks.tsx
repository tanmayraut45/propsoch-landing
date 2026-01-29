"use client";

import { useState, useEffect, useRef } from "react";
import Image from "next/image";

const steps = [
  {
    stage: "Stage 1",
    title: "Discovery",
    heading: "Tell us about you & your ideal home",
    points: [
      "You can start with the location, budget & purpose",
      "We'll help prioritise your family's top deal-breakers",
      "We'll dig deeper on past homes to tailor the search",
    ],
    image: "/step1.svg",
  },
  {
    stage: "Stage 2",
    title: "Shortlisting",
    heading: "We recommend the best-fit properties",
    points: [
      "Curated list based on your unique requirements",
      "Detailed analysis of each property's pros & cons",
      "Investment potential and resale value insights",
    ],
    image: "/step2.svg",
  },
  {
    stage: "Stage 3",
    title: "Visits",
    heading: "Experience properties with expert guidance",
    points: [
      "Scheduled visits at your convenience",
      "On-ground insights you won't find online",
      "Objective evaluation of construction quality",
    ],
    image: "/step3.svg",
  },
  {
    stage: "Stage 4",
    title: "Negotiation",
    heading: "Get the best deal possible",
    points: [
      "Fair price analysis backed by data",
      "Expert negotiation on your behalf",
      "Maximum discounts and freebies secured",
    ],
    image: "/step4.svg",
  },
  {
    stage: "Stage 5",
    title: "Closing",
    heading: "Seamless documentation & handover",
    points: [
      "Legal due diligence and verification",
      "Loan processing assistance",
      "Registration and possession support",
    ],
    image: "/step5.svg",
  },
];

const metrics = [
  {
    label: "Carpet area efficiency",
    value: "High",
    color: "text-green-600",
    bg: "bg-green-50",
    icon: (
      <svg
        className="w-4 h-4"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
        />
      </svg>
    ),
  },
  {
    label: "Investment potential",
    value: "Medium",
    color: "text-orange-600",
    bg: "bg-orange-50",
    icon: (
      <svg
        className="w-4 h-4"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6"
        />
      </svg>
    ),
  },
  {
    label: "Clubhouse size",
    value: "50K Sqft",
    color: "text-blue-600",
    bg: "bg-blue-50",
    icon: (
      <svg
        className="w-4 h-4"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"
        />
      </svg>
    ),
  },
  {
    label: "Vastu compliance",
    value: "50%",
    color: "text-purple-600",
    bg: "bg-purple-50",
    icon: (
      <svg
        className="w-4 h-4"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7"
        />
      </svg>
    ),
  },
  {
    label: "Metro connectivity",
    value: "5 Kms",
    color: "text-teal-600",
    bg: "bg-teal-50",
    icon: (
      <svg
        className="w-4 h-4"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
        />
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
        />
      </svg>
    ),
  },
];

// Diamond bullet icon component
const DiamondBullet = () => (
  <svg
    className="w-3 h-3 text-orange-500 mt-1.5 flex-shrink-0"
    viewBox="0 0 12 12"
    fill="currentColor"
  >
    <path d="M6 0L12 6L6 12L0 6L6 0Z" />
  </svg>
);

export default function HowItWorks() {
  const [currentStep, setCurrentStep] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);
  const intervalRef = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    if (isAutoPlaying) {
      intervalRef.current = setInterval(() => {
        setCurrentStep((prev) => (prev + 1) % steps.length);
      }, 5000);
    }
    return () => {
      if (intervalRef.current) clearInterval(intervalRef.current);
    };
  }, [isAutoPlaying]);

  const goToStep = (index: number) => {
    setCurrentStep(index);
    setIsAutoPlaying(false);
  };

  const nextStep = () => {
    setCurrentStep((prev) => (prev + 1) % steps.length);
    setIsAutoPlaying(false);
  };

  const prevStep = () => {
    setCurrentStep((prev) => (prev - 1 + steps.length) % steps.length);
    setIsAutoPlaying(false);
  };

  return (
    <section className="py-20 bg-gradient-to-b from-white to-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-12">
          <p className="text-orange-500 font-medium mb-2">How It Works</p>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
            We&apos;re with you every step of the journey
          </h2>
        </div>

        {/* Carousel Container */}
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left: Step Content */}
          <div className="relative">
            {/* Navigation Arrows - Mobile */}
            <div className="flex justify-between items-center mb-6 lg:hidden">
              <button
                onClick={prevStep}
                className="w-10 h-10 rounded-full border border-gray-300 flex items-center justify-center hover:bg-gray-100"
              >
                <svg
                  className="w-5 h-5"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M15 19l-7-7 7-7"
                  />
                </svg>
              </button>
              <div className="flex gap-2">
                {steps.map((_, idx) => (
                  <button
                    key={idx}
                    onClick={() => goToStep(idx)}
                    className={`w-2 h-2 rounded-full transition-all ${
                      idx === currentStep ? "bg-orange-500 w-6" : "bg-gray-300"
                    }`}
                  />
                ))}
              </div>
              <button
                onClick={nextStep}
                className="w-10 h-10 rounded-full border border-gray-300 flex items-center justify-center hover:bg-gray-100"
              >
                <svg
                  className="w-5 h-5"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 5l7 7-7 7"
                  />
                </svg>
              </button>
            </div>

            {/* Step Card */}
            <div
              className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100 transition-all duration-500"
              key={currentStep}
            >
              <div className="inline-block px-3 py-1 bg-orange-100 text-orange-600 text-sm font-medium rounded-full mb-4">
                {steps[currentStep].stage} - {steps[currentStep].title}
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-6">
                {steps[currentStep].heading}
              </h3>
              <ul className="space-y-4">
                {steps[currentStep].points.map((point, idx) => (
                  <li key={idx} className="flex items-start gap-3">
                    <DiamondBullet />
                    <span className="text-gray-600">{point}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center gap-4 mt-6">
              <button
                onClick={prevStep}
                className="w-12 h-12 rounded-full border-2 border-gray-200 flex items-center justify-center hover:border-orange-500 hover:text-orange-500 transition-colors"
              >
                <svg
                  className="w-5 h-5"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M15 19l-7-7 7-7"
                  />
                </svg>
              </button>
              <button
                onClick={nextStep}
                className="w-12 h-12 rounded-full border-2 border-gray-200 flex items-center justify-center hover:border-orange-500 hover:text-orange-500 transition-colors"
              >
                <svg
                  className="w-5 h-5"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 5l7 7-7 7"
                  />
                </svg>
              </button>
              <div className="flex gap-2 ml-4">
                {steps.map((_, idx) => (
                  <button
                    key={idx}
                    onClick={() => goToStep(idx)}
                    className={`w-3 h-3 rounded-full transition-all ${
                      idx === currentStep
                        ? "bg-orange-500"
                        : "bg-gray-300 hover:bg-gray-400"
                    }`}
                  />
                ))}
              </div>
            </div>
          </div>

          {/* Right: Visual with Metrics */}
          <div className="relative">
            {/* Decorative Background */}
            <div className="absolute inset-0 bg-gradient-to-br from-orange-100 to-orange-50 rounded-3xl transform rotate-3" />

            {/* Main Visual Container */}
            <div className="relative bg-white rounded-2xl p-6 shadow-xl overflow-hidden">
              {/* Property Image */}
              <div className="aspect-video rounded-xl mb-6 overflow-hidden relative">
                <Image
                  src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=800&h=500&fit=crop"
                  alt="Modern luxury property"
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
                {/* Overlay with analysis indicator */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
                <div className="absolute bottom-4 left-4 flex items-center gap-2 px-3 py-2 bg-white/95 backdrop-blur rounded-lg shadow-lg">
                  <div className="w-8 h-8 bg-gradient-to-br from-orange-500 to-orange-600 rounded-lg flex items-center justify-center">
                    <svg
                      className="w-4 h-4 text-white"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"
                      />
                    </svg>
                  </div>
                  <span className="text-sm font-semibold text-gray-800">
                    Property Analysis
                  </span>
                </div>
              </div>

              {/* Floating Metric Cards */}
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                {metrics.map((metric, idx) => (
                  <div
                    key={idx}
                    className={`${metric.bg} rounded-lg p-3 text-center transform hover:scale-105 transition-transform`}
                  >
                    <div className="flex items-center justify-center gap-1.5 mb-1">
                      <span className={metric.color}>{metric.icon}</span>
                      <p className="text-xs text-gray-500">{metric.label}</p>
                    </div>
                    <p className={`font-bold ${metric.color}`}>
                      {metric.value}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {/* Stage Indicator - Floating */}
            <div className="absolute -right-4 top-1/2 -translate-y-1/2 hidden xl:block">
              <div className="flex flex-col gap-2">
                {steps.map((step, idx) => (
                  <button
                    key={idx}
                    onClick={() => goToStep(idx)}
                    className={`w-24 h-10 rounded-l-full flex items-center justify-center text-sm font-medium transition-all ${
                      idx === currentStep
                        ? "bg-orange-500 text-white shadow-lg"
                        : "bg-white text-gray-500 hover:bg-orange-50 shadow"
                    }`}
                  >
                    {step.title}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

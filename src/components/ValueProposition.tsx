"use client";

import { useState } from "react";

// SVG Icon Components for Peace of Mind Services
const FloorPlanIcon = () => (
  <svg
    className="w-6 h-6"
    fill="none"
    viewBox="0 0 24 24"
    stroke="currentColor"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M9 7h6m0 10v-3m-3 3h.01M9 17h.01M9 14h.01M12 14h.01M15 11h.01M12 11h.01M9 11h.01M7 21h10a2 2 0 002-2V5a2 2 0 00-2-2H7a2 2 0 00-2 2v14a2 2 0 002 2z"
    />
  </svg>
);

const LightingIcon = () => (
  <svg
    className="w-6 h-6"
    fill="none"
    viewBox="0 0 24 24"
    stroke="currentColor"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z"
    />
  </svg>
);

const FloodRiskIcon = () => (
  <svg
    className="w-6 h-6"
    fill="none"
    viewBox="0 0 24 24"
    stroke="currentColor"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z"
    />
  </svg>
);

const FutureDevelopmentIcon = () => (
  <svg
    className="w-6 h-6"
    fill="none"
    viewBox="0 0 24 24"
    stroke="currentColor"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"
    />
  </svg>
);

const InvestmentIcon = () => (
  <svg
    className="w-6 h-6"
    fill="none"
    viewBox="0 0 24 24"
    stroke="currentColor"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6"
    />
  </svg>
);

const CostSheetIcon = () => (
  <svg
    className="w-6 h-6"
    fill="none"
    viewBox="0 0 24 24"
    stroke="currentColor"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
    />
  </svg>
);

// SVG Icons for Extended Services
const HomeLoanIcon = () => (
  <svg
    className="w-6 h-6"
    fill="none"
    viewBox="0 0 24 24"
    stroke="currentColor"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
    />
  </svg>
);

const LegalIcon = () => (
  <svg
    className="w-6 h-6"
    fill="none"
    viewBox="0 0 24 24"
    stroke="currentColor"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M3 6l3 1m0 0l-3 9a5.002 5.002 0 006.001 0M6 7l3 9M6 7l6-2m6 2l3-1m-3 1l-3 9a5.002 5.002 0 006.001 0M18 7l3 9m-3-9l-6-2m0-2v2m0 16V5m0 16H9m3 0h3"
    />
  </svg>
);

const TaxIcon = () => (
  <svg
    className="w-6 h-6"
    fill="none"
    viewBox="0 0 24 24"
    stroke="currentColor"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M9 14l6-6m-5.5.5h.01m4.99 5h.01M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16l3.5-2 3.5 2 3.5-2 3.5 2zM10 8.5a.5.5 0 11-1 0 .5.5 0 011 0zm5 5a.5.5 0 11-1 0 .5.5 0 011 0z"
    />
  </svg>
);

const QualityIcon = () => (
  <svg
    className="w-6 h-6"
    fill="none"
    viewBox="0 0 24 24"
    stroke="currentColor"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
    />
  </svg>
);

const VastuIcon = () => (
  <svg
    className="w-6 h-6"
    fill="none"
    viewBox="0 0 24 24"
    stroke="currentColor"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7"
    />
  </svg>
);

const InteriorIcon = () => (
  <svg
    className="w-6 h-6"
    fill="none"
    viewBox="0 0 24 24"
    stroke="currentColor"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01"
    />
  </svg>
);

// Sparkle Icon for savings badge
const SparkleIcon = () => (
  <svg
    className="w-5 h-5"
    fill="none"
    viewBox="0 0 24 24"
    stroke="currentColor"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z"
    />
  </svg>
);

const peaceOfMindServices = [
  {
    id: "floor-plan",
    title: "Floor Plan Analysis",
    description:
      "Detailed evaluation of space utilization, room dimensions, and layout efficiency.",
    icon: <FloorPlanIcon />,
    color: "text-blue-600",
    bg: "bg-blue-50",
  },
  {
    id: "lighting",
    title: "Lighting & Ventilation",
    description:
      "Assessment of natural light exposure and air circulation in each room.",
    icon: <LightingIcon />,
    color: "text-amber-600",
    bg: "bg-amber-50",
  },
  {
    id: "flood-risk",
    title: "Flood & Air Quality Risk",
    description:
      "Environmental risk analysis including flood zones and air quality index.",
    icon: <FloodRiskIcon />,
    color: "text-cyan-600",
    bg: "bg-cyan-50",
  },
  {
    id: "future-dev",
    title: "Future Development",
    description:
      "Insights on upcoming infrastructure and neighborhood development plans.",
    icon: <FutureDevelopmentIcon />,
    color: "text-violet-600",
    bg: "bg-violet-50",
  },
  {
    id: "investment",
    title: "Investment Potential",
    description:
      "ROI projections, rental yield analysis, and appreciation forecasts.",
    icon: <InvestmentIcon />,
    color: "text-green-600",
    bg: "bg-green-50",
  },
  {
    id: "cost-sheet",
    title: "Cost Sheet Breakdown",
    description: "Transparent breakdown of all costs including hidden charges.",
    icon: <CostSheetIcon />,
    color: "text-rose-600",
    bg: "bg-rose-50",
  },
];

const extendedServices = [
  {
    title: "Home Loans",
    icon: <HomeLoanIcon />,
    description: "Best rates from 15+ banks",
    color: "text-emerald-600",
    bg: "bg-emerald-50",
  },
  {
    title: "Legal Due Diligence",
    icon: <LegalIcon />,
    description: "Complete document verification",
    color: "text-indigo-600",
    bg: "bg-indigo-50",
  },
  {
    title: "Tax Planning",
    icon: <TaxIcon />,
    description: "Optimize your tax benefits",
    color: "text-orange-600",
    bg: "bg-orange-50",
  },
  {
    title: "Quality Inspection",
    icon: <QualityIcon />,
    description: "Pre-handover quality check",
    color: "text-blue-600",
    bg: "bg-blue-50",
  },
  {
    title: "Vastu Advisors",
    icon: <VastuIcon />,
    description: "Traditional compliance check",
    color: "text-purple-600",
    bg: "bg-purple-50",
  },
  {
    title: "Interior Designers",
    icon: <InteriorIcon />,
    description: "Trusted design partners",
    color: "text-pink-600",
    bg: "bg-pink-50",
  },
];

export default function ValueProposition() {
  const [expandedService, setExpandedService] = useState<string | null>(null);

  return (
    <section className="py-20 bg-gradient-to-b from-gray-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Value Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-green-100 text-green-700 px-4 py-2 rounded-full text-sm font-medium mb-4">
            <SparkleIcon />
            <span>Smart Savings Ahead</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Choose the smart way to save <br className="hidden md:block" />
            <span className="text-orange-500">~₹4.78 Lakhs</span> &{" "}
            <span className="text-orange-500">3 months</span> of your life
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Our data-driven approach and expert negotiation skills have helped
            1000+ homebuyers save significant money and time.
          </p>
          <button className="mt-6 px-6 py-3 bg-orange-500 text-white rounded-xl font-medium hover:bg-orange-600 transition-colors">
            See How You Will Save →
          </button>
        </div>

        {/* Peace of Mind Section */}
        <div className="mb-20">
          <div className="text-center mb-10">
            <p className="text-orange-500 font-medium mb-2">
              Peace of Mind Report
            </p>
            <h3 className="text-2xl md:text-3xl font-bold text-gray-900">
              Know everything before you buy
            </h3>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
            {peaceOfMindServices.map((service) => (
              <div
                key={service.id}
                className={`bg-white rounded-xl border-2 transition-all cursor-pointer ${
                  expandedService === service.id
                    ? "border-orange-500 shadow-lg"
                    : "border-gray-100 hover:border-orange-200"
                }`}
                onClick={() =>
                  setExpandedService(
                    expandedService === service.id ? null : service.id,
                  )
                }
              >
                <div className="p-5">
                  <div className="flex items-start gap-4">
                    <div
                      className={`w-12 h-12 ${service.bg} rounded-xl flex items-center justify-center ${service.color} flex-shrink-0`}
                    >
                      {service.icon}
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center justify-between">
                        <h4 className="font-semibold text-gray-800">
                          {service.title}
                        </h4>
                        <svg
                          className={`w-5 h-5 text-gray-400 transition-transform ${
                            expandedService === service.id ? "rotate-180" : ""
                          }`}
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M19 9l-7 7-7-7"
                          />
                        </svg>
                      </div>
                      <div
                        className={`overflow-hidden transition-all duration-300 ${
                          expandedService === service.id
                            ? "max-h-24 mt-2"
                            : "max-h-0"
                        }`}
                      >
                        <p className="text-sm text-gray-500">
                          {service.description}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Extended Services */}
        <div>
          <div className="text-center mb-10">
            <p className="text-orange-500 font-medium mb-2">
              Extended Services
            </p>
            <h3 className="text-2xl md:text-3xl font-bold text-gray-900">
              Everything you need, under one roof
            </h3>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {extendedServices.map((service, idx) => (
              <div
                key={idx}
                className="group bg-white rounded-xl p-5 border border-gray-100 hover:border-orange-200 hover:shadow-lg transition-all text-center"
              >
                <div
                  className={`w-14 h-14 ${service.bg} rounded-xl flex items-center justify-center mx-auto mb-3 ${service.color} group-hover:scale-110 transition-transform`}
                >
                  {service.icon}
                </div>
                <h4 className="font-semibold text-gray-800 text-sm mb-1">
                  {service.title}
                </h4>
                <p className="text-xs text-gray-500">{service.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Trust Badges */}
        <div className="mt-16 flex flex-wrap justify-center items-center gap-8 text-gray-400">
          <div className="text-center">
            <p className="text-2xl font-bold text-gray-700">RERA</p>
            <p className="text-xs">Registered</p>
          </div>
          <div className="w-px h-12 bg-gray-200" />
          <div className="text-center">
            <p className="text-2xl font-bold text-gray-700">ISO</p>
            <p className="text-xs">Certified</p>
          </div>
          <div className="w-px h-12 bg-gray-200" />
          <div className="text-center flex items-center gap-1">
            <p className="text-2xl font-bold text-gray-700">4.9</p>
            <svg
              className="w-5 h-5 text-yellow-400"
              fill="currentColor"
              viewBox="0 0 20 20"
            >
              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
            </svg>
            <p className="text-xs ml-1">Google Rating</p>
          </div>
          <div className="w-px h-12 bg-gray-200" />
          <div className="text-center">
            <p className="text-2xl font-bold text-gray-700">1000+</p>
            <p className="text-xs">Happy Families</p>
          </div>
        </div>
      </div>
    </section>
  );
}

"use client";

import { useState } from "react";

type ComparisonCategory = "propsoch" | "portals" | "brokers";

const features = [
  {
    name: "Unbiased Advice",
    description: "Recommendations based solely on your needs",
    propsoch: { value: true, text: "Always unbiased, no builder ties" },
    portals: { value: false, text: "Paid listings prioritized" },
    brokers: { value: false, text: "Commission-driven advice" },
  },
  {
    name: "Research Depth",
    description: "Quality of property analysis provided",
    propsoch: { value: true, text: "100+ parameters analyzed" },
    portals: { value: false, text: "Basic specs only" },
    brokers: { value: false, text: "Limited knowledge" },
  },
  {
    name: "Negotiation Support",
    description: "Help getting the best price",
    propsoch: { value: true, text: "Expert negotiators on your side" },
    portals: { value: false, text: "No support" },
    brokers: { value: false, text: "Conflict of interest" },
  },
  {
    name: "Legal Assistance",
    description: "Documentation and verification help",
    propsoch: { value: true, text: "End-to-end legal support" },
    portals: { value: false, text: "Not available" },
    brokers: { value: false, text: "Referral only" },
  },
  {
    name: "Post-Purchase Support",
    description: "Help after you buy the property",
    propsoch: { value: true, text: "Lifetime relationship" },
    portals: { value: false, text: "None" },
    brokers: { value: false, text: "None" },
  },
  {
    name: "Transparency",
    description: "Clear pricing and process",
    propsoch: { value: true, text: "100% transparent fees" },
    portals: { value: true, text: "Listing fees visible" },
    brokers: { value: false, text: "Hidden commissions" },
  },
];

export default function Comparison() {
  const [activeTab, setActiveTab] = useState<ComparisonCategory>("propsoch");

  const tabs: { id: ComparisonCategory; label: string; color: string }[] = [
    { id: "propsoch", label: "Propsoch", color: "bg-orange-500" },
    { id: "portals", label: "Online Portals", color: "bg-blue-500" },
    { id: "brokers", label: "Local Brokers", color: "bg-gray-500" },
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-12">
          <p className="text-orange-500 font-medium mb-2">
            What makes us different?
          </p>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Our homebuyers say we&apos;re refreshing,{" "}
            <br className="hidden md:block" />
            <span className="text-orange-500 italic">intelligent</span> and
            supportive. Here&apos;s why.
          </h2>
        </div>

        {/* Tab Selector */}
        <div className="flex justify-center mb-8">
          <div className="inline-flex bg-gray-100 rounded-xl p-1">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`px-6 py-3 rounded-lg font-medium transition-all ${
                  activeTab === tab.id
                    ? `${tab.color} text-white shadow-lg`
                    : "text-gray-600 hover:text-gray-800"
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </div>

        {/* Comparison Table - Desktop */}
        <div className="hidden lg:block overflow-hidden rounded-2xl border border-gray-200">
          <table className="w-full">
            <thead>
              <tr className="bg-gray-50">
                <th className="text-left px-6 py-4 font-semibold text-gray-700 w-1/4">
                  Feature
                </th>
                <th className="text-center px-6 py-4 font-semibold text-orange-600 w-1/4 bg-orange-50">
                  <div className="flex items-center justify-center gap-2">
                    <span className="w-8 h-8 bg-orange-500 rounded-lg flex items-center justify-center">
                      <span className="text-white text-sm">✓</span>
                    </span>
                    Propsoch
                  </div>
                </th>
                <th className="text-center px-6 py-4 font-semibold text-gray-600 w-1/4">
                  Online Portals
                </th>
                <th className="text-center px-6 py-4 font-semibold text-gray-600 w-1/4">
                  Local Brokers
                </th>
              </tr>
            </thead>
            <tbody>
              {features.map((feature, idx) => (
                <tr
                  key={idx}
                  className="border-t border-gray-100 hover:bg-gray-50 transition-colors"
                >
                  <td className="px-6 py-5">
                    <p className="font-medium text-gray-800">{feature.name}</p>
                    <p className="text-sm text-gray-500">
                      {feature.description}
                    </p>
                  </td>
                  <td className="text-center px-6 py-5 bg-orange-50/50">
                    <div className="flex items-center justify-center gap-2">
                      <span className="w-6 h-6 bg-green-100 rounded-full flex items-center justify-center">
                        <svg
                          className="w-4 h-4 text-green-500"
                          fill="currentColor"
                          viewBox="0 0 20 20"
                        >
                          <path
                            fillRule="evenodd"
                            d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                            clipRule="evenodd"
                          />
                        </svg>
                      </span>
                      <span className="text-sm text-gray-700">
                        {feature.propsoch.text}
                      </span>
                    </div>
                  </td>
                  <td className="text-center px-6 py-5">
                    <div className="flex items-center justify-center gap-2">
                      <span
                        className={`w-6 h-6 rounded-full flex items-center justify-center ${feature.portals.value ? "bg-green-100" : "bg-red-100"}`}
                      >
                        {feature.portals.value ? (
                          <svg
                            className="w-4 h-4 text-green-500"
                            fill="currentColor"
                            viewBox="0 0 20 20"
                          >
                            <path
                              fillRule="evenodd"
                              d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                              clipRule="evenodd"
                            />
                          </svg>
                        ) : (
                          <svg
                            className="w-4 h-4 text-red-500"
                            fill="currentColor"
                            viewBox="0 0 20 20"
                          >
                            <path
                              fillRule="evenodd"
                              d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                              clipRule="evenodd"
                            />
                          </svg>
                        )}
                      </span>
                      <span className="text-sm text-gray-500">
                        {feature.portals.text}
                      </span>
                    </div>
                  </td>
                  <td className="text-center px-6 py-5">
                    <div className="flex items-center justify-center gap-2">
                      <span
                        className={`w-6 h-6 rounded-full flex items-center justify-center ${feature.brokers.value ? "bg-green-100" : "bg-red-100"}`}
                      >
                        {feature.brokers.value ? (
                          <svg
                            className="w-4 h-4 text-green-500"
                            fill="currentColor"
                            viewBox="0 0 20 20"
                          >
                            <path
                              fillRule="evenodd"
                              d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                              clipRule="evenodd"
                            />
                          </svg>
                        ) : (
                          <svg
                            className="w-4 h-4 text-red-500"
                            fill="currentColor"
                            viewBox="0 0 20 20"
                          >
                            <path
                              fillRule="evenodd"
                              d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                              clipRule="evenodd"
                            />
                          </svg>
                        )}
                      </span>
                      <span className="text-sm text-gray-500">
                        {feature.brokers.text}
                      </span>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Comparison Cards - Mobile */}
        <div className="lg:hidden space-y-4">
          {features.map((feature, idx) => (
            <div
              key={idx}
              className="bg-white rounded-xl border border-gray-200 p-4"
            >
              <h4 className="font-semibold text-gray-800 mb-1">
                {feature.name}
              </h4>
              <p className="text-sm text-gray-500 mb-3">
                {feature.description}
              </p>

              <div
                className={`p-3 rounded-lg ${
                  activeTab === "propsoch"
                    ? "bg-orange-50"
                    : activeTab === "portals"
                      ? "bg-blue-50"
                      : "bg-gray-50"
                }`}
              >
                <div className="flex items-center gap-2">
                  {feature[activeTab].value ? (
                    <span className="w-6 h-6 bg-green-100 rounded-full flex items-center justify-center">
                      <svg
                        className="w-4 h-4 text-green-500"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path
                          fillRule="evenodd"
                          d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                          clipRule="evenodd"
                        />
                      </svg>
                    </span>
                  ) : (
                    <span className="w-6 h-6 bg-red-100 rounded-full flex items-center justify-center">
                      <svg
                        className="w-4 h-4 text-red-500"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path
                          fillRule="evenodd"
                          d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                          clipRule="evenodd"
                        />
                      </svg>
                    </span>
                  )}
                  <span className="text-sm">{feature[activeTab].text}</span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center mt-12">
          <button className="px-8 py-4 bg-orange-500 text-white rounded-xl font-semibold hover:bg-orange-600 transition-colors shadow-lg shadow-orange-200">
            Experience the Propsoch Difference →
          </button>
        </div>
      </div>
    </section>
  );
}

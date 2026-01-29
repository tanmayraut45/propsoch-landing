"use client";

import { useState, useEffect } from "react";

interface BookingModalProps {
  isOpen: boolean;
  onClose: () => void;
  city: "bangalore" | "mumbai";
}

const bangaloreAreas = [
  "Whitefield",
  "Sarjapur Road",
  "Electronic City",
  "Hebbal",
  "Yelahanka",
  "Bannerghatta Road",
  "Marathahalli",
  "KR Puram",
  "Devanahalli",
  "Thanisandra",
  "Hennur",
  "Bellandur",
];

const mumbaiAreas = [
  "Andheri",
  "Powai",
  "Thane",
  "Navi Mumbai",
  "Borivali",
  "Goregaon",
  "Mulund",
  "Chembur",
  "Bandra",
  "Worli",
  "Lower Parel",
  "Wadala",
];

const budgetRanges = [
  "₹50L - ₹75L",
  "₹75L - ₹1Cr",
  "₹1Cr - ₹1.5Cr",
  "₹1.5Cr - ₹2Cr",
  "₹2Cr - ₹3Cr",
  "₹3Cr+",
];

const timelines = [
  { id: "immediate", label: "Immediate (0-3 months)" },
  { id: "soon", label: "Soon (3-6 months)" },
  { id: "planning", label: "Planning (6-12 months)" },
  { id: "exploring", label: "Just Exploring" },
];

export default function BookingModal({
  isOpen,
  onClose,
  city,
}: BookingModalProps) {
  const [step, setStep] = useState(1);
  const [selectedAreas, setSelectedAreas] = useState<string[]>([]);
  const [selectedBudget, setSelectedBudget] = useState("");
  const [selectedTimeline, setSelectedTimeline] = useState("");
  const [formData, setFormData] = useState({ name: "", phone: "", email: "" });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const areas = city === "bangalore" ? bangaloreAreas : mumbaiAreas;

  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    if (isOpen) {
      document.addEventListener("keydown", handleEscape);
      document.body.style.overflow = "hidden";
    }
    return () => {
      document.removeEventListener("keydown", handleEscape);
      document.body.style.overflow = "unset";
    };
  }, [isOpen, onClose]);

  const toggleArea = (area: string) => {
    setSelectedAreas((prev) =>
      prev.includes(area) ? prev.filter((a) => a !== area) : [...prev, area],
    );
  };

  const handleSubmit = async () => {
    setIsSubmitting(true);
    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 1500));
    setIsSubmitting(false);
    setStep(5); // Success step
  };

  const resetAndClose = () => {
    setStep(1);
    setSelectedAreas([]);
    setSelectedBudget("");
    setSelectedTimeline("");
    setFormData({ name: "", phone: "", email: "" });
    onClose();
  };

  if (!isOpen) return null;

  const canProceed = () => {
    switch (step) {
      case 1:
        return selectedAreas.length > 0;
      case 2:
        return selectedBudget !== "";
      case 3:
        return selectedTimeline !== "";
      case 4:
        return formData.name && formData.phone;
      default:
        return true;
    }
  };

  return (
    <div className="fixed inset-0 z-[100] bg-black/60 backdrop-blur-sm flex items-center justify-center p-4">
      <div
        className="bg-white rounded-2xl w-full max-w-lg shadow-2xl overflow-hidden"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="bg-gradient-to-r from-orange-500 to-orange-600 px-6 py-4 flex items-center justify-between">
          <div>
            <h2 className="text-white font-semibold text-lg">
              Book Your Appointment
            </h2>
            <p className="text-orange-100 text-sm">
              {city === "bangalore" ? "Bangalore" : "Mumbai"} • Step{" "}
              {Math.min(step, 4)} of 4
            </p>
          </div>
          <button
            onClick={resetAndClose}
            className="text-white/80 hover:text-white"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
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

        {/* Progress Bar */}
        <div className="h-1 bg-gray-100">
          <div
            className="h-full bg-orange-500 transition-all duration-300"
            style={{ width: `${(Math.min(step, 4) / 4) * 100}%` }}
          />
        </div>

        {/* Content */}
        <div className="p-6">
          {step === 1 && (
            <div>
              <h3 className="text-lg font-semibold text-gray-800 mb-2">
                Select your preferred areas
              </h3>
              <p className="text-gray-500 text-sm mb-4">
                Choose one or more localities
              </p>
              <div className="grid grid-cols-2 gap-2 max-h-64 overflow-y-auto">
                {areas.map((area) => (
                  <button
                    key={area}
                    onClick={() => toggleArea(area)}
                    className={`px-4 py-3 rounded-lg border-2 text-left transition-all ${
                      selectedAreas.includes(area)
                        ? "border-orange-500 bg-orange-50 text-orange-700"
                        : "border-gray-200 hover:border-orange-300"
                    }`}
                  >
                    <span className="flex items-center gap-2">
                      {selectedAreas.includes(area) && (
                        <svg
                          className="w-4 h-4 text-orange-500"
                          fill="currentColor"
                          viewBox="0 0 20 20"
                        >
                          <path
                            fillRule="evenodd"
                            d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                            clipRule="evenodd"
                          />
                        </svg>
                      )}
                      {area}
                    </span>
                  </button>
                ))}
              </div>
            </div>
          )}

          {step === 2 && (
            <div>
              <h3 className="text-lg font-semibold text-gray-800 mb-2">
                What&apos;s your budget?
              </h3>
              <p className="text-gray-500 text-sm mb-4">
                Select your preferred price range
              </p>
              <div className="space-y-2">
                {budgetRanges.map((budget) => (
                  <button
                    key={budget}
                    onClick={() => setSelectedBudget(budget)}
                    className={`w-full px-4 py-4 rounded-lg border-2 text-left transition-all flex items-center justify-between ${
                      selectedBudget === budget
                        ? "border-orange-500 bg-orange-50 text-orange-700"
                        : "border-gray-200 hover:border-orange-300"
                    }`}
                  >
                    <span>{budget}</span>
                    {selectedBudget === budget && (
                      <svg
                        className="w-5 h-5 text-orange-500"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path
                          fillRule="evenodd"
                          d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                          clipRule="evenodd"
                        />
                      </svg>
                    )}
                  </button>
                ))}
              </div>
            </div>
          )}

          {step === 3 && (
            <div>
              <h3 className="text-lg font-semibold text-gray-800 mb-2">
                When do you plan to buy?
              </h3>
              <p className="text-gray-500 text-sm mb-4">
                This helps us prioritize your requirements
              </p>
              <div className="space-y-2">
                {timelines.map((timeline) => (
                  <button
                    key={timeline.id}
                    onClick={() => setSelectedTimeline(timeline.id)}
                    className={`w-full px-4 py-4 rounded-lg border-2 text-left transition-all flex items-center gap-3 ${
                      selectedTimeline === timeline.id
                        ? "border-orange-500 bg-orange-50 text-orange-700"
                        : "border-gray-200 hover:border-orange-300"
                    }`}
                  >
                    <span>{timeline.label}</span>
                  </button>
                ))}
              </div>
            </div>
          )}

          {step === 4 && (
            <div>
              <h3 className="text-lg font-semibold text-gray-800 mb-2">
                Your contact details
              </h3>
              <p className="text-gray-500 text-sm mb-4">
                We&apos;ll reach out to schedule your appointment
              </p>
              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Full Name *
                  </label>
                  <input
                    type="text"
                    value={formData.name}
                    onChange={(e) =>
                      setFormData({ ...formData, name: e.target.value })
                    }
                    className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                    placeholder="John Doe"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Phone Number *
                  </label>
                  <input
                    type="tel"
                    value={formData.phone}
                    onChange={(e) =>
                      setFormData({ ...formData, phone: e.target.value })
                    }
                    className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                    placeholder="+91 98765 43210"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Email (Optional)
                  </label>
                  <input
                    type="email"
                    value={formData.email}
                    onChange={(e) =>
                      setFormData({ ...formData, email: e.target.value })
                    }
                    className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                    placeholder="john@example.com"
                  />
                </div>
              </div>
            </div>
          )}

          {step === 5 && (
            <div className="text-center py-8">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg
                  className="w-8 h-8 text-green-500"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M5 13l4 4L19 7"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-800 mb-2">
                Thank You!
              </h3>
              <p className="text-gray-500 mb-6">
                Our property wizard will contact you within 24 hours to schedule
                your appointment.
              </p>
              <button
                onClick={resetAndClose}
                className="px-6 py-3 bg-orange-500 text-white rounded-lg hover:bg-orange-600 transition-colors"
              >
                Close
              </button>
            </div>
          )}
        </div>

        {/* Footer */}
        {step < 5 && (
          <div className="px-6 py-4 bg-gray-50 border-t border-gray-100 flex items-center justify-between">
            <button
              onClick={() => setStep((s) => Math.max(1, s - 1))}
              className={`px-4 py-2 text-gray-600 hover:text-gray-800 ${step === 1 ? "invisible" : ""}`}
            >
              ← Back
            </button>
            <button
              onClick={() =>
                step === 4 ? handleSubmit() : setStep((s) => s + 1)
              }
              disabled={!canProceed() || isSubmitting}
              className={`px-6 py-3 rounded-lg font-medium transition-all ${
                canProceed() && !isSubmitting
                  ? "bg-orange-500 text-white hover:bg-orange-600"
                  : "bg-gray-200 text-gray-400 cursor-not-allowed"
              }`}
            >
              {isSubmitting ? (
                <span className="flex items-center gap-2">
                  <svg className="animate-spin h-4 w-4" viewBox="0 0 24 24">
                    <circle
                      className="opacity-25"
                      cx="12"
                      cy="12"
                      r="10"
                      stroke="currentColor"
                      strokeWidth="4"
                      fill="none"
                    />
                    <path
                      className="opacity-75"
                      fill="currentColor"
                      d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                    />
                  </svg>
                  Submitting...
                </span>
              ) : step === 4 ? (
                "Submit"
              ) : (
                "Continue →"
              )}
            </button>
          </div>
        )}
      </div>
    </div>
  );
}

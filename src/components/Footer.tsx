import Link from "next/link";

const topDevelopers = [
  "Prestige",
  "Godrej",
  "Brigade",
  "Sobha",
  "Embassy",
  "Puravankara",
];
const topAreas = [
  "Whitefield",
  "Sarjapur Road",
  "Electronic City",
  "Hebbal",
  "Yelahanka",
  "Bellandur",
];
const quickFilters = [
  "Luxury Homes",
  "Ready To Move",
  "Townships",
  "Villas",
  "Affordable",
];

export default function Footer() {
  return (
    <footer className="bg-[#1A1A2E] text-white pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Search Links */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12 pb-12 border-b border-white/10">
          {/* Top Developers */}
          <div>
            <h4 className="font-semibold text-lg mb-4 text-orange-400">
              Top Developers
            </h4>
            <div className="flex flex-wrap gap-2">
              {topDevelopers.map((dev) => (
                <Link
                  key={dev}
                  href="#"
                  className="px-3 py-1.5 bg-white/5 hover:bg-orange-500/20 rounded-full text-sm text-gray-300 hover:text-white transition-colors"
                >
                  {dev}
                </Link>
              ))}
            </div>
          </div>

          {/* Top Areas */}
          <div>
            <h4 className="font-semibold text-lg mb-4 text-orange-400">
              Top Areas
            </h4>
            <div className="flex flex-wrap gap-2">
              {topAreas.map((area) => (
                <Link
                  key={area}
                  href="#"
                  className="px-3 py-1.5 bg-white/5 hover:bg-orange-500/20 rounded-full text-sm text-gray-300 hover:text-white transition-colors"
                >
                  {area}
                </Link>
              ))}
            </div>
          </div>

          {/* Quick Filters */}
          <div>
            <h4 className="font-semibold text-lg mb-4 text-orange-400">
              Quick Filters
            </h4>
            <div className="flex flex-wrap gap-2">
              {quickFilters.map((filter) => (
                <Link
                  key={filter}
                  href="#"
                  className="px-3 py-1.5 bg-white/5 hover:bg-orange-500/20 rounded-full text-sm text-gray-300 hover:text-white transition-colors"
                >
                  {filter}
                </Link>
              ))}
            </div>
          </div>
        </div>

        {/* Main Footer Content */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 lg:gap-12 mb-12">
          {/* Brand Section */}
          <div className="col-span-2 md:col-span-1">
            <Link href="/" className="flex items-center gap-2 mb-4">
              <div className="w-10 h-10 bg-gradient-to-br from-[#FF6B35] to-[#F5A623] rounded-xl flex items-center justify-center">
                <svg
                  width="24"
                  height="24"
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
              <span className="text-xl font-bold">
                Prop<span className="text-[#FF6B35]">soch</span>
              </span>
            </Link>
            <p className="text-[#9CA3AF] text-sm leading-relaxed mb-6">
              Your trusted partner in making intelligent home buying decisions.
              We help you navigate the complex real estate market with
              confidence.
            </p>
            {/* Social Links */}
            <div className="flex gap-3">
              {[
                { name: "instagram", href: "https://instagram.com/propsoch" },
                {
                  name: "linkedin",
                  href: "https://linkedin.com/company/propsoch",
                },
                { name: "youtube", href: "https://youtube.com/@propsoch" },
              ].map((social) => (
                <a
                  key={social.name}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-[#FF6B35] transition-colors"
                  aria-label={`Follow us on ${social.name}`}
                >
                  {social.name === "instagram" && (
                    <svg
                      className="w-5 h-5"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
                    </svg>
                  )}
                  {social.name === "linkedin" && (
                    <svg
                      className="w-5 h-5"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                    </svg>
                  )}
                  {social.name === "youtube" && (
                    <svg
                      className="w-5 h-5"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
                    </svg>
                  )}
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold text-lg mb-4">Properties</h4>
            <ul className="space-y-3">
              {[
                "Bangalore",
                "Mumbai",
                "New Projects",
                "Resale",
                "Villa & Plots",
              ].map((item) => (
                <li key={item}>
                  <Link
                    href="#"
                    className="text-[#9CA3AF] hover:text-[#FF6B35] transition-colors text-sm"
                  >
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-semibold text-lg mb-4">Services</h4>
            <ul className="space-y-3">
              {[
                "Guided Homebuying",
                "Peace of Mind Report",
                "Home Loans",
                "Legal Services",
                "Fair Price Check",
              ].map((item) => (
                <li key={item}>
                  <Link
                    href="#"
                    className="text-[#9CA3AF] hover:text-[#FF6B35] transition-colors text-sm"
                  >
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="font-semibold text-lg mb-4">Company</h4>
            <ul className="space-y-3">
              {["About Us", "Careers", "Blog", "Reviews", "Contact Us"].map(
                (item) => (
                  <li key={item}>
                    <Link
                      href="#"
                      className="text-[#9CA3AF] hover:text-[#FF6B35] transition-colors text-sm"
                    >
                      {item}
                    </Link>
                  </li>
                ),
              )}
            </ul>
          </div>
        </div>

        {/* Legal Info */}
        <div className="py-6 border-t border-b border-white/10 mb-6 text-sm text-[#6B7280]">
          <p className="mb-2">
            <span className="font-medium text-white">
              Thinkr Proptech Pvt Ltd
            </span>{" "}
            • RERA: PRM/KA/RERA/1251/310/AG/220521/002846
          </p>
          <p>CIN: U72900KA2019PTC123456 • GSTIN: 29AABCT1234A1ZA</p>
        </div>

        {/* Bottom Bar */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-[#9CA3AF] text-sm">
            © {new Date().getFullYear()} Propsoch. All rights reserved.
          </p>
          <div className="flex items-center gap-6">
            <Link
              href="#"
              className="text-[#9CA3AF] hover:text-white text-sm transition-colors"
            >
              Terms of Service
            </Link>
            <Link
              href="#"
              className="text-[#9CA3AF] hover:text-white text-sm transition-colors"
            >
              Privacy Policy
            </Link>
            <Link
              href="#"
              className="text-[#9CA3AF] hover:text-white text-sm transition-colors"
            >
              Cookies
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}

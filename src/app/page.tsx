"use client";

import { useState } from "react";
import dynamic from "next/dynamic";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Stats from "@/components/Stats";
import HowItWorks from "@/components/HowItWorks";
import Comparison from "@/components/Comparison";
import ValueProposition from "@/components/ValueProposition";
import Testimonials from "@/components/Testimonials";
import Footer from "@/components/Footer";

// Lazy load modals for better performance
const SearchModal = dynamic(() => import("@/components/SearchModal"), {
  ssr: false,
});
const BookingModal = dynamic(() => import("@/components/BookingModal"), {
  ssr: false,
});

export default function Home() {
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [isBookingOpen, setIsBookingOpen] = useState(false);
  const [bookingCity, setBookingCity] = useState<"bangalore" | "mumbai">(
    "bangalore",
  );

  const handleBookClick = (city: "bangalore" | "mumbai") => {
    setBookingCity(city);
    setIsBookingOpen(true);
  };

  return (
    <>
      <Navbar
        onSearchClick={() => setIsSearchOpen(true)}
        onGetStartedClick={() => setIsBookingOpen(true)}
      />
      <main>
        <Hero onBookClick={handleBookClick} />
        <Stats />
        <HowItWorks />
        <Comparison />
        <ValueProposition />
        <Testimonials />
      </main>
      <Footer />

      {/* Modals */}
      <SearchModal
        isOpen={isSearchOpen}
        onClose={() => setIsSearchOpen(false)}
      />
      <BookingModal
        isOpen={isBookingOpen}
        onClose={() => setIsBookingOpen(false)}
        city={bookingCity}
      />
    </>
  );
}

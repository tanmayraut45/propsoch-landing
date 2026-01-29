"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import Image from "next/image";

interface Testimonial {
  id: number;
  name: string;
  role: string;
  location: string;
  propertyImage: string;
  rating: number;
  quote: string;
  verified: boolean;
}

const testimonials: Testimonial[] = [
  {
    id: 1,
    name: "Karthik R.",
    role: "IT Professional",
    location: "Whitefield, Bangalore",
    propertyImage:
      "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=400&h=300&fit=crop",
    rating: 5,
    quote:
      "It was a pleasure to work with PropSoch. And working with you continue this journey. Thank you so much and congratulations to you all to celebrate.",
    verified: true,
  },
  {
    id: 2,
    name: "Priya M.",
    role: "NRI Buyer",
    location: "Electronic City",
    propertyImage:
      "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=400&h=300&fit=crop",
    rating: 5,
    quote:
      "As a US-based family exploring home buying in India, my lack of expertise and time… Their expertise helped us navigate the financials, various options, and negotiation strategies. People at Propsoch are quite professional and structured in their approach.",
    verified: true,
  },
  {
    id: 3,
    name: "Pavan S.",
    role: "Business Owner",
    location: "Sarjapur Road",
    propertyImage:
      "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=400&h=300&fit=crop",
    rating: 5,
    quote:
      "We found out about Propsoch through mutual friends, just as we were about to close on a property. It was such a blessing to find out the numerous red flags we were unaware of. Ashish and his team do an outstanding job of helping prospective homebuyers navigate the tricky market.",
    verified: true,
  },
  {
    id: 4,
    name: "Ananya & Rahul",
    role: "First-time Buyers",
    location: "HSR Layout",
    propertyImage:
      "https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?w=400&h=300&fit=crop",
    rating: 5,
    quote:
      "We know that you guys went above and beyond in helping us finding our new homes. Your knowledge of market and attention to the details were impeccable (Which is quite rare in Blore nowadays). Your unique approach and right attitude made the entire process of buying our property stress free and enjoyable.",
    verified: true,
  },
  {
    id: 5,
    name: "Arun K.",
    role: "Software Engineer",
    location: "Marathahalli",
    propertyImage:
      "https://images.unsplash.com/photo-1600573472592-401b489a3cdc?w=400&h=300&fit=crop",
    rating: 5,
    quote:
      "Prashant was my first point of contact at Propsoch. He is very approachable. He understood my requirements and then followed up with us. He was flexible enough to exclude projects based on our preferences. The team coordinated and protected our concerns from spamming.",
    verified: true,
  },
];

const StarRating = ({ rating }: { rating: number }) => (
  <div className="flex gap-1">
    {[...Array(5)].map((_, i) => (
      <svg
        key={i}
        className={`w-4 h-4 transition-all duration-300 ${
          i < rating ? "text-[#FFB800] drop-shadow-sm" : "text-gray-300"
        }`}
        fill="currentColor"
        viewBox="0 0 20 20"
      >
        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
      </svg>
    ))}
  </div>
);

export default function Testimonials() {
  // Triple the testimonials to ensure smooth infinite scrolling
  const allTestimonials = [...testimonials, ...testimonials, ...testimonials];

  return (
    <section className="py-20 lg:py-28 overflow-hidden relative">
      {/* Background decorations */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-40 -right-40 w-96 h-96 bg-gradient-to-br from-[#FF6B35]/10 to-[#F5A623]/10 rounded-full blur-3xl" />
        <div className="absolute -bottom-40 -left-40 w-96 h-96 bg-gradient-to-br from-[#4A90D9]/10 to-[#67B26F]/10 rounded-full blur-3xl" />
      </div>

      <div className="w-full relative">
        {/* Section Header */}
        <div className="text-center mb-12 lg:mb-16 px-4">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-[#FF6B35]/10 to-[#F5A623]/10 rounded-full mb-6">
            <span className="w-2 h-2 bg-[#FF6B35] rounded-full animate-pulse" />
            <span className="text-[#FF6B35] font-medium text-sm tracking-wide uppercase">
              Success Stories
            </span>
          </div>
          <h2
            className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#1A1A2E] leading-tight max-w-4xl mx-auto"
            style={{ textWrap: "balance" }}
          >
            1000+ intelligent homebuyers trusted us
            <br className="hidden sm:block" />
            with their biggest life decision because we helped
            <br className="hidden sm:block" />
            them{" "}
            <span className="relative inline-block">
              <span className="italic bg-gradient-to-r from-[#FF6B35] to-[#F5A623] bg-clip-text text-transparent">
                know if
              </span>
              <svg
                className="absolute -bottom-1 left-0 w-full"
                viewBox="0 0 100 8"
                preserveAspectRatio="none"
              >
                <path
                  d="M0 7 Q 50 0, 100 7"
                  stroke="url(#underlineGradient)"
                  strokeWidth="2"
                  fill="none"
                />
                <defs>
                  <linearGradient
                    id="underlineGradient"
                    x1="0%"
                    y1="0%"
                    x2="100%"
                    y2="0%"
                  >
                    <stop offset="0%" stopColor="#FF6B35" />
                    <stop offset="100%" stopColor="#F5A623" />
                  </linearGradient>
                </defs>
              </svg>
            </span>{" "}
            it was the right one.
          </h2>
        </div>

        {/* Marquee Container */}
        <div className="relative w-full overflow-hidden pb-10">
          <div className="flex gap-6 animate-marquee w-max px-4">
            {allTestimonials.map((testimonial, index) => (
              <div
                key={`${testimonial.id}-${index}`}
                className="w-[340px] sm:w-[380px] flex-shrink-0"
              >
                <div className="h-full bg-white/80 backdrop-blur-xl rounded-3xl overflow-hidden shadow-lg border border-white/50 transition-all duration-300 hover:scale-[1.02] hover:shadow-xl">
                  {/* Property Image */}
                  <div className="relative h-48 overflow-hidden">
                    <Image
                      src={testimonial.propertyImage}
                      alt={`Property in ${testimonial.location}`}
                      fill
                      className="object-cover"
                      sizes="(max-width: 640px) 340px, 380px"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />

                    {/* Location badge */}
                    <div className="absolute bottom-4 left-4 flex items-center gap-2 px-3 py-1.5 bg-white/90 backdrop-blur rounded-full">
                      <svg
                        className="w-4 h-4 text-[#FF6B35]"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path
                          fillRule="evenodd"
                          d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z"
                          clipRule="evenodd"
                        />
                      </svg>
                      <span className="text-sm font-medium text-[#1A1A2E]">
                        {testimonial.location}
                      </span>
                    </div>

                    {/* Verified badge */}
                    {testimonial.verified && (
                      <div className="absolute top-4 right-4 flex items-center gap-1.5 px-3 py-1.5 bg-green-500 text-white rounded-full text-xs font-medium shadow-lg">
                        <svg
                          className="w-3.5 h-3.5"
                          fill="currentColor"
                          viewBox="0 0 20 20"
                        >
                          <path
                            fillRule="evenodd"
                            d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                            clipRule="evenodd"
                          />
                        </svg>
                        Verified
                      </div>
                    )}
                  </div>

                  {/* Content */}
                  <div className="p-6">
                    {/* Rating */}
                    <div className="flex items-center gap-3 mb-4">
                      <StarRating rating={testimonial.rating} />
                      <span className="text-sm text-[#6B7280]">
                        ({testimonial.rating}.0)
                      </span>
                    </div>

                    {/* Quote */}
                    <div className="relative mb-6">
                      <svg
                        className="absolute -top-2 -left-1 w-8 h-8 text-[#FF6B35]/20"
                        fill="currentColor"
                        viewBox="0 0 32 32"
                      >
                        <path d="M10 8c-3.3 0-6 2.7-6 6v10h10V14H6c0-2.2 1.8-4 4-4V8zm14 0c-3.3 0-6 2.7-6 6v10h10V14h-8c0-2.2 1.8-4 4-4V8z" />
                      </svg>
                      <p className="text-[#4A4A68] leading-relaxed line-clamp-4 pl-4">
                        {testimonial.quote}
                      </p>
                    </div>

                    {/* Author info */}
                    <div className="flex items-center justify-between pt-4 border-t border-[#EDE8E3]">
                      <div>
                        <p className="font-bold text-[#1A1A2E]">
                          {testimonial.name}
                        </p>
                        <p className="text-sm text-[#6B7280]">
                          {testimonial.role}
                        </p>
                      </div>
                      <button className="flex items-center gap-1 text-[#FF6B35] font-medium text-sm hover:gap-2 transition-all duration-300 group/btn">
                        Read more
                        <svg
                          className="w-4 h-4 transition-transform group-hover/btn:translate-x-1"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M17 8l4 4m0 0l-4 4m4-4H3"
                          />
                        </svg>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Trust indicators */}
        <div className="flex flex-wrap justify-center items-center gap-6 mt-2 pt-8 border-t border-[#EDE8E3]/50 mx-auto max-w-7xl px-4">
          <div className="flex items-center gap-2 text-[#6B7280]">
            <svg
              className="w-5 h-5 text-green-500"
              fill="currentColor"
              viewBox="0 0 20 20"
            >
              <path
                fillRule="evenodd"
                d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                clipRule="evenodd"
              />
            </svg>
            <span className="text-sm font-medium">1000+ Happy Homeowners</span>
          </div>
          <div className="flex items-center gap-2 text-[#6B7280]">
            <svg
              className="w-5 h-5 text-[#FFB800]"
              fill="currentColor"
              viewBox="0 0 20 20"
            >
              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
            </svg>
            <span className="text-sm font-medium">4.9/5 Average Rating</span>
          </div>
          <div className="flex items-center gap-2 text-[#6B7280]">
            <svg
              className="w-5 h-5 text-[#FF6B35]"
              fill="currentColor"
              viewBox="0 0 20 20"
            >
              <path
                fillRule="evenodd"
                d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z"
                clipRule="evenodd"
              />
            </svg>
            <span className="text-sm font-medium">
              ₹500Cr+ Property Transactions
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}

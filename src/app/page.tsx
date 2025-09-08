"use client";

import { motion } from "framer-motion";
import { Calendar, MapPin, Award, ChevronDown, CalendarPlus, Utensils, Clock, Info } from "lucide-react";
import { conferenceInfo, statistics } from "@/lib/data";
import { generateICS } from "@/lib/generateICS";
import Image from "next/image";
import SpeakersSection from "@/components/SpeakersSection";
import ConferenceVideoSlider from "@/components/conference-video-slider";
import MembershipSection from "@/components/membership-section";
import MobileJumpNav from "@/components/MobileJumpNav";

export default function Home() {
  return (
    <div className="min-h-screen">
      {/* Preload Open Graph image to ensure it's included in build */}
      <link rel="preload" as="image" href="/images/PHC26-Save-The-Date-v2.png" />
      <MobileJumpNav />
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-phc-dark to-phc-light overflow-hidden">
        {/* Floating shapes */}
        <div className="absolute inset-0 pt-8 sm:pt-12 md:pt-16">
          <motion.div
            className="absolute top-8 left-2 sm:top-12 sm:left-10 md:top-20 md:left-20 w-16 h-16 sm:w-24 sm:h-24 md:w-32 md:h-32 bg-white rounded-full flex items-center justify-center overflow-hidden shadow-lg"
            animate={{
              y: [0, -20, 0],
              rotate: [0, 10, 0],
            }}
            transition={{
              duration: 6,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          >
            <Image 
              src="/images/NourishToFlourish - Blue - JUST LOGO.png"
              alt="Nourish to Flourish"
              width={100}
              height={100}
              className="object-contain w-12 h-12 sm:w-16 sm:h-16 md:w-24 md:h-24"
            />
          </motion.div>
          <motion.div
            className="absolute bottom-10 right-4 sm:bottom-20 sm:right-20 w-16 h-16 sm:w-24 sm:h-24 bg-phc-yellow/10 rounded-lg"
            animate={{
              y: [0, -15, 0],
              rotate: [0, -10, 0],
            }}
            transition={{
              duration: 5,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
        </div>

        {/* Hero Content */}
        <div className="relative z-10 text-center text-white px-4 max-w-5xl mx-auto pt-16 sm:pt-12 md:pt-0">
          {/* PHC Logo */}
          <motion.div
            initial={{ opacity: 0, y: -30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="mb-8"
          >
            <img 
              src="/images/PHC_logo_white_text.png" 
              alt="Public Health Collaboration" 
              className="h-14 sm:h-18 md:h-24 mx-auto"
            />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="mb-6"
          >
            <span className="inline-block px-6 py-2 bg-phc-yellow/20 backdrop-blur-sm rounded-full text-phc-yellow font-semibold">
              10th Anniversary Conference
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="text-5xl md:text-7xl font-bold mb-6"
          >
            Nourish to Flourish
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="text-xl md:text-2xl mb-6 text-white/90"
          >
            {conferenceInfo.tagline}
          </motion.p>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="text-lg md:text-xl mb-12 text-white/80 max-w-4xl mx-auto leading-relaxed"
          >
            Celebrating 10 years of helping people nourish to flourish! Join us to explore good metabolic health 
            for all the family with dedicated sessions from world-renowned speakers on women's health, 
            men's health, teenage health, and children's health.
          </motion.p>

          {/* Key Details Cards */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.7 }}
            className="grid md:grid-cols-3 gap-4 mb-12"
          >
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6">
              <Calendar className="w-8 h-8 mb-3 mx-auto text-phc-yellow" />
              <h3 className="font-semibold mb-1">Date</h3>
              <p className="text-sm text-white/80">{conferenceInfo.dates}</p>
              <button
                onClick={generateICS}
                className="mt-3 inline-flex items-center gap-2 px-3 py-1.5 bg-phc-yellow/20 hover:bg-phc-yellow/30 text-phc-yellow rounded-lg transition-colors text-xs font-medium"
                aria-label="Add conference to calendar"
              >
                <CalendarPlus className="w-4 h-4" />
                Add to Calendar
              </button>
            </div>
            <a 
              href="https://maps.google.com/?q=The+Light+Euston+London+NW1+2BJ"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white/10 backdrop-blur-sm rounded-xl p-6 block hover:bg-white/20 transition-colors"
            >
              <MapPin className="w-8 h-8 mb-3 mx-auto text-phc-yellow" />
              <h3 className="font-semibold mb-1">Location</h3>
              <p className="text-sm text-white/80">{conferenceInfo.location}</p>
              <p className="text-xs text-phc-yellow mt-2">Click for directions →</p>
            </a>
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6">
              <Award className="w-8 h-8 mb-3 mx-auto text-phc-yellow" />
              <h3 className="font-semibold mb-1">CPD Points</h3>
              <p className="text-sm text-white/80">{conferenceInfo.cpdPoints} Points Available</p>
            </div>
          </motion.div>

          {/* CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.9 }}
            className="flex flex-col sm:flex-row gap-4 justify-center pb-20 sm:pb-12"
          >
            <a
              href={conferenceInfo.ticketUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-4 bg-phc-yellow text-phc-dark font-bold rounded-full hover:bg-yellow-400 transition-colors"
            >
              Get Your Tickets
            </a>
            <button
              onClick={() => window.scrollTo({ top: window.innerHeight, behavior: 'smooth' })}
              className="px-8 py-4 bg-white/20 backdrop-blur-sm text-white font-bold rounded-full hover:bg-white/30 transition-colors"
            >
              Learn More
            </button>
          </motion.div>
        </div>

        {/* Scroll Indicator */}
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="absolute bottom-4 sm:bottom-8 left-1/2 transform -translate-x-1/2 z-20"
        >
          <ChevronDown className="w-8 h-8 text-white/60" />
        </motion.div>
      </section>

      {/* About Section */}
      <section id="about" className="relative py-20 px-4 bg-gradient-to-br from-gray-50 via-phc-light/5 to-phc-yellow/10 overflow-hidden">
        {/* Animated background elements */}
        <div className="absolute inset-0 opacity-30">
          <div className="absolute top-20 right-10 w-64 h-64 bg-phc-light/20 rounded-full blur-3xl"></div>
          <div className="absolute bottom-20 left-10 w-96 h-96 bg-phc-yellow/20 rounded-full blur-3xl"></div>
        </div>
        
        <div className="relative max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-phc-dark mb-6">
              Celebrating 10 Years
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Join us for the premier metabolic health conference, bringing together world-renowned experts, 
              healthcare professionals, and wellness advocates for two days of transformative learning.
            </p>
          </motion.div>

          {/* Statistics Grid */}
          <div className="grid md:grid-cols-4 gap-6">
            {statistics.map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: index % 2 === 0 ? -60 : 60 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                className="bg-gradient-to-br from-white to-phc-light/5 rounded-xl p-8 text-center shadow-lg hover:shadow-xl transition-all hover:scale-105 border border-phc-light/10"
              >
                <div className="text-4xl font-bold text-phc-light mb-2">{stat.number}</div>
                <div className="text-gray-600">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Event Details Section */}
      <section id="event-details" className="relative py-20 px-4 bg-gradient-to-br from-phc-dark/5 via-white to-phc-yellow/5 overflow-hidden">
        <div className="relative max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-phc-dark mb-6">
              Event Information
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Important details about the conference schedule and special events
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8">
            {/* Fundraiser Dinner Card */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.8 }}
              className="bg-gradient-to-br from-phc-dark to-phc-light text-white rounded-2xl p-8 shadow-xl"
            >
              <div className="flex items-center mb-4">
                <Utensils className="w-8 h-8 text-phc-yellow mr-3" />
                <h3 className="text-2xl font-bold">Fundraiser Dinner</h3>
              </div>
              <div className="space-y-3">
                <p className="flex items-center">
                  <Calendar className="w-5 h-5 mr-2 text-phc-yellow" />
                  Saturday 16th May 2026
                </p>
                <p className="flex items-center">
                  <Clock className="w-5 h-5 mr-2 text-phc-yellow" />
                  From 7:00 PM
                </p>
                <p className="flex items-center">
                  <MapPin className="w-5 h-5 mr-2 text-phc-yellow" />
                  Near the conference venue
                </p>
                <div className="mt-4 pt-4 border-t border-white/20">
                  <p className="text-sm text-white/90">
                    Join us for an evening of networking and fundraising to support the Public Health Collaboration's mission.
                  </p>
                  <p className="mt-3 text-phc-yellow font-semibold flex items-center">
                    <Info className="w-4 h-4 mr-2" />
                    Full details and tickets available January 2026
                  </p>
                </div>
              </div>
            </motion.div>

            {/* Speaker Schedule Card */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.8 }}
              className="bg-gradient-to-br from-phc-light to-phc-dark text-white rounded-2xl p-8 shadow-xl"
            >
              <div className="flex items-center mb-4">
                <Clock className="w-8 h-8 text-phc-yellow mr-3" />
                <h3 className="text-2xl font-bold">Speaker Schedule</h3>
              </div>
              <div className="space-y-3">
                <p className="text-white/90">
                  The detailed speaker schedule and session timings will be published in January 2026.
                </p>
                <div className="mt-4 pt-4 border-t border-white/20">
                  <h4 className="font-semibold mb-2">What to expect:</h4>
                  <ul className="space-y-2 text-sm text-white/90">
                    <li className="flex items-start">
                      <span className="text-phc-yellow mr-2">•</span>
                      Keynote presentations from world-renowned experts
                    </li>
                    <li className="flex items-start">
                      <span className="text-phc-yellow mr-2">•</span>
                      Dedicated sessions on women's, men's, teenage, and children's health
                    </li>
                    <li className="flex items-start">
                      <span className="text-phc-yellow mr-2">•</span>
                      Interactive Q&A sessions
                    </li>
                    <li className="flex items-start">
                      <span className="text-phc-yellow mr-2">•</span>
                      Networking opportunities between sessions
                    </li>
                  </ul>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Speakers Section with gradient transition */}
      <div id="speakers" className="relative bg-gradient-to-b from-phc-yellow/10 via-white to-phc-light/5">
        <SpeakersSection />
      </div>

      {/* Conference Videos Section */}
      <section id="videos" className="relative py-20 px-4 bg-gradient-to-br from-phc-light/5 via-white to-phc-dark/5 overflow-hidden">
        {/* Animated gradient orbs */}
        <div className="absolute inset-0 opacity-20">
          <motion.div
            className="absolute top-1/4 left-1/4 w-96 h-96 bg-phc-light rounded-full blur-3xl"
            animate={{
              x: [0, 50, 0],
              y: [0, -30, 0],
            }}
            transition={{
              duration: 20,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
          <motion.div
            className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-phc-yellow rounded-full blur-3xl"
            animate={{
              x: [0, -50, 0],
              y: [0, 30, 0],
            }}
            transition={{
              duration: 15,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
        </div>
        <div className="relative">
          <ConferenceVideoSlider />
        </div>
      </section>

      {/* Membership Section */}
      <div id="membership">
        <MembershipSection />
      </div>
    </div>
  );
}
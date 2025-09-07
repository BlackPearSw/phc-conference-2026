'use client';

import { motion } from 'framer-motion';
import { 
  Search, 
  BookOpen, 
  Users, 
  Megaphone, 
  Calendar, 
  Zap 
} from 'lucide-react';

const benefits = [
  {
    icon: Search,
    title: 'Stay Informed',
    description: 'Access the latest science on nutrition and lifestyle medicine through our curated research summaries and expert analysis.'
  },
  {
    icon: BookOpen,
    title: 'Expert Resources',
    description: 'Participate in exclusive webinars, download evidence-based resources, and access our growing library of educational materials.'
  },
  {
    icon: Users,
    title: 'Community Connection',
    description: 'Join a supportive network of clinicians, researchers, and health advocates all working toward a common goal of better health outcomes.'
  },
  {
    icon: Megaphone,
    title: 'Shift the Narrative',
    description: 'Help transform healthcare from reactive sick-care to proactive self-care through education and advocacy.'
  },
  {
    icon: Calendar,
    title: 'Event Privileges',
    description: 'Enjoy early access, special pricing (e.g. £50 discount from the conference), and exclusive networking opportunities at all PHC events and conferences.'
  },
  {
    icon: Zap,
    title: 'Drive Change',
    description: 'Be an integral part of a movement that\'s transforming healthcare from the ground up through evidence-based approaches.'
  }
];

export default function MembershipSection() {
  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <span className="inline-flex items-center px-4 py-2 bg-orange-500 text-white rounded-full text-sm font-semibold mb-6">
            ⭐ Membership
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-phc-dark mb-6">
            Why Join the Public Health Collaboration?
          </h2>
          <div className="w-24 h-1 bg-orange-500 mx-auto mb-6"></div>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Become part of a growing community dedicated to transforming healthcare through 
            prevention-focused approaches.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {benefits.map((benefit, index) => {
            const Icon = benefit.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-white rounded-lg p-8 shadow-sm hover:shadow-lg transition-shadow duration-300"
              >
                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0">
                    <div className="w-12 h-12 bg-phc-dark rounded-full flex items-center justify-center">
                      <Icon className="w-6 h-6 text-white" />
                    </div>
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-bold text-phc-dark mb-3">
                      {benefit.title}
                    </h3>
                    <p className="text-gray-600 leading-relaxed">
                      {benefit.description}
                    </p>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          <p className="text-xl text-gray-700 mb-8">
            Ready to be part of a healthcare revolution?
          </p>
          <a
            href="https://phcuk.org/membership"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center px-8 py-4 bg-orange-500 text-white font-semibold rounded-full hover:bg-orange-600 transition-colors duration-300"
          >
            Become a Member Today
            <svg 
              className="ml-2 w-5 h-5" 
              fill="none" 
              stroke="currentColor" 
              viewBox="0 0 24 24"
            >
              <path 
                strokeLinecap="round" 
                strokeLinejoin="round" 
                strokeWidth={2} 
                d="M13 7l5 5m0 0l-5 5m5-5H6"
              />
            </svg>
          </a>
        </motion.div>
      </div>
    </section>
  );
}
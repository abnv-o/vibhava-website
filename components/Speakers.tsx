"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { Twitter, Linkedin, Globe, ArrowUpRight } from "lucide-react";
import { useState } from "react";

interface Speaker {
  id: string;
  name: string;
  role: string;
  company: string;
  image: string;
  bio: string;
  social: {
    twitter?: string;
    linkedin?: string;
    website?: string;
  };
}

const speakers: Speaker[] = [
  {
    id: "1",
    name: "Dr. Sarah Chen",
    role: "AI Research Lead",
    company: "TechCorp",
    image: "/speakers/speaker1.jpg",
    bio: "Leading AI research initiatives and developing cutting-edge solutions for real-world problems.",
    social: {
      twitter: "https://twitter.com/sarahchen",
      linkedin: "https://linkedin.com/in/sarahchen",
      website: "https://sarahchen.com"
    }
  },
  {
    id: "2",
    name: "Alex Turner",
    role: "Startup Founder",
    company: "InnovateX",
    image: "/speakers/speaker2.jpg",
    bio: "Serial entrepreneur with multiple successful exits. Passionate about sustainable technology.",
    social: {
      twitter: "https://twitter.com/alexturner",
      linkedin: "https://linkedin.com/in/alexturner"
    }
  },
  {
    id: "3",
    name: "Dr. Michael Green",
    role: "Sustainability Expert",
    company: "EcoTech",
    image: "/speakers/speaker3.jpg",
    bio: "Pioneering sustainable technology solutions and advocating for environmental responsibility.",
    social: {
      linkedin: "https://linkedin.com/in/michaelgreen",
      website: "https://michaelgreen.eco"
    }
  },
  {
    id: "4",
    name: "Lisa Patel",
    role: "UX Design Director",
    company: "DesignHub",
    image: "/speakers/speaker4.jpg",
    bio: "Award-winning designer focused on creating inclusive and accessible digital experiences.",
    social: {
      twitter: "https://twitter.com/lisapatel",
      linkedin: "https://linkedin.com/in/lisapatel"
    }
  },
  {
    id: "5",
    name: "David Brown",
    role: "Tech Innovation Lead",
    company: "FutureTech",
    image: "/speakers/speaker5.jpg",
    bio: "Driving technological innovation and digital transformation across industries.",
    social: {
      twitter: "https://twitter.com/davidbrown",
      linkedin: "https://linkedin.com/in/davidbrown"
    }
  }
];

const Speakers = () => {
  const [hoveredId, setHoveredId] = useState<string | null>(null);

  return (
    <section className="py-24 bg-gray-50 relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-20 right-20 w-64 h-64 bg-primary/5 rounded-full blur-3xl animate-pulse-slow" />
      <div className="absolute bottom-20 left-20 w-72 h-72 bg-primary/5 rounded-full blur-3xl animate-pulse-slow" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <motion.span 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="inline-block text-sm font-semibold text-primary px-3 py-1 rounded-full bg-primary/10 mb-3"
          >
            OUR SPEAKERS
          </motion.span>
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Meet the Experts
          </h2>
          <div className="w-20 h-1 bg-primary mx-auto" />
        </motion.div>

        {/* Equalized Bento Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
          {/* First row - 2 equal speakers */}
          <motion.div
            key={speakers[0].id}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            onHoverStart={() => setHoveredId(speakers[0].id)}
            onHoverEnd={() => setHoveredId(null)}
            className="group relative overflow-hidden rounded-2xl bg-white shadow-lg hover:shadow-xl transition-all duration-300 col-span-1 md:col-span-6"
          >
            {/* Speaker card content */}
            <SpeakerCard speaker={speakers[0]} hoveredId={hoveredId} />
          </motion.div>

          <motion.div
            key={speakers[1].id}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            onHoverStart={() => setHoveredId(speakers[1].id)}
            onHoverEnd={() => setHoveredId(null)}
            className="group relative overflow-hidden rounded-2xl bg-white shadow-lg hover:shadow-xl transition-all duration-300 col-span-1 md:col-span-6"
          >
            {/* Speaker card content */}
            <SpeakerCard speaker={speakers[1]} hoveredId={hoveredId} />
          </motion.div>

          {/* Second row - 3 equal speakers */}
          <motion.div
            key={speakers[2].id}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            onHoverStart={() => setHoveredId(speakers[2].id)}
            onHoverEnd={() => setHoveredId(null)}
            className="group relative overflow-hidden rounded-2xl bg-white shadow-lg hover:shadow-xl transition-all duration-300 col-span-1 md:col-span-4"
          >
            {/* Speaker card content */}
            <SpeakerCard speaker={speakers[2]} hoveredId={hoveredId} />
          </motion.div>

          <motion.div
            key={speakers[3].id}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
            onHoverStart={() => setHoveredId(speakers[3].id)}
            onHoverEnd={() => setHoveredId(null)}
            className="group relative overflow-hidden rounded-2xl bg-white shadow-lg hover:shadow-xl transition-all duration-300 col-span-1 md:col-span-4"
          >
            {/* Speaker card content */}
            <SpeakerCard speaker={speakers[3]} hoveredId={hoveredId} />
          </motion.div>

          <motion.div
            key={speakers[4].id}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
            onHoverStart={() => setHoveredId(speakers[4].id)}
            onHoverEnd={() => setHoveredId(null)}
            className="group relative overflow-hidden rounded-2xl bg-white shadow-lg hover:shadow-xl transition-all duration-300 col-span-1 md:col-span-4"
          >
            {/* Speaker card content */}
            <SpeakerCard speaker={speakers[4]} hoveredId={hoveredId} />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

// Extract speaker card into a reusable component for consistency
const SpeakerCard = ({ speaker, hoveredId }: { speaker: Speaker, hoveredId: string | null }) => {
  return (
    <>
      {/* Speaker Image */}
      <div className="relative h-72 overflow-hidden rounded-t-xl">
        <Image
          src={speaker.image}
          alt={speaker.name}
          fill
          className="object-cover transition-transform duration-700 group-hover:scale-105"
          onError={(e) => {
            const target = e.target as HTMLImageElement;
            target.src = `https://placehold.co/800x800/61c2a6/ffffff?text=${encodeURIComponent(speaker.name)}`;
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
      </div>

      {/* Speaker Info */}
      <div className="p-6">
        <div className="flex items-start justify-between mb-3">
          <div>
            <h3 className="text-xl font-bold text-gray-900 mb-1 group-hover:text-primary transition-colors">
              {speaker.name}
            </h3>
            <div className="flex items-center gap-2 text-sm text-gray-500">
              <span>{speaker.role}</span>
              <span>•</span>
              <span>{speaker.company}</span>
            </div>
          </div>
          <motion.div
            initial={{ opacity: 0, x: -10 }}
            animate={{ opacity: hoveredId === speaker.id ? 1 : 0, x: hoveredId === speaker.id ? 0 : -10 }}
            transition={{ duration: 0.2 }}
            className="text-primary"
          >
            <ArrowUpRight className="w-5 h-5" />
          </motion.div>
        </div>
        
        <p className="text-gray-600 text-sm mb-4 line-clamp-2">
          {speaker.bio}
        </p>

        {/* Social Links */}
        <div className="flex items-center gap-3">
          {speaker.social.twitter && (
            <motion.a
              whileHover={{ scale: 1.1, y: -2 }}
              whileTap={{ scale: 0.95 }}
              href={speaker.social.twitter}
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-primary transition-colors"
            >
              <Twitter className="w-5 h-5" />
            </motion.a>
          )}
          {speaker.social.linkedin && (
            <motion.a
              whileHover={{ scale: 1.1, y: -2 }}
              whileTap={{ scale: 0.95 }}
              href={speaker.social.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-primary transition-colors"
            >
              <Linkedin className="w-5 h-5" />
            </motion.a>
          )}
          {speaker.social.website && (
            <motion.a
              whileHover={{ scale: 1.1, y: -2 }}
              whileTap={{ scale: 0.95 }}
              href={speaker.social.website}
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-primary transition-colors"
            >
              <Globe className="w-5 h-5" />
            </motion.a>
          )}
        </div>
      </div>

      {/* Hover Effect Border */}
      <div className="absolute inset-0 border-2 border-transparent group-hover:border-primary/20 rounded-2xl transition-colors duration-300" />
    </>
  );
};

export default Speakers; 
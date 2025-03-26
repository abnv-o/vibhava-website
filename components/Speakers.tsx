"use client";

import { motion } from "framer-motion";
import Image from "next/image";
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
    name: "Sunil Mathayi",
    role: "Founder,CEO",
    company: "Tradetalks",
    image: "/speakers/speaker1.jpg",
    bio: "With 4.5+ years in fintech, Sunil Mathayi leads TradeTalks in revolutionizing trading technology. An expert in Core Java and Web Development, he brings innovation, strategic insight, and a passion for market disruption.  ",
    social: {
      // twitter: "https://twitter.com/sarahchen",
      // linkedin: "https://linkedin.com/in/sarahchen",
      // website: "https://sarahchen.com"
    }
  },
  {
    id: "2",
    name: "Kohler",
    role: "Startup Founder",
    company: "InnovateX",
    image: "/speakers/speaker2.jpg",
    bio: "Serial entrepreneur with multiple successful exits. Passionate about sustainable technology.",
    social: {
      // twitter: "https://twitter.com/alexturner",
      // linkedin: "https://linkedin.com/in/alexturner"
    }
  },
  {
    id: "3",
    name: "Jacob Thomas",
    role: "Delivery Manager",
    company: "Tata Consultancy Services",
    image: "/speakers/speaker3.jpg",
    bio: "Starting as a developer, Jacob Thomas has grown into a Project Manager and now excels in Delivery Management. With a passion for Relationship Management and Business Development, he is dedicated to adding value to customers and enhancing the ecosystem.",
    social: {
      // linkedin: "https://linkedin.com/in/michaelgreen",
      // website: "https://michaelgreen.eco"
    }
  },
  {
    id: "4",
    name: "Aisha Sameeha",
    role: "Founder",
    company: "Koderfin",
    image: "/speakers/speaker4.jpg",
    bio: "As the Founder of Koderfin, Aisha Sameeha is a seasoned Design Thinking consultant, mentor, and coach. With a passion for innovation, he has educated 20,000+ students, developed 5+ startups, and helped 25+ companies transform through Design Thinking. His expertise extends to managing 180+ institutions for Ed clubs, driving impactful change in education and business.",
    social: {
      // twitter: "https://twitter.com/lisapatel",
      // linkedin: "https://linkedin.com/in/lisapatel"
    }
  },
  {
    id: "5",
    name: "Alosh Denny",
    role: "AGI Developer",
    company: "",
    image: "/speakers/speaker5.jpeg",
    bio: "An AI enthusiast and AGI developer, Alosh specializes in Robotics, IoT, and Generative AI. A 2023 & 2024 European Rover Challenge finalist (World Rank 11), he has competed in 30+ hackathons and now pioneers AI-driven healthcare innovation.",
    social: {
      twitter: "https://twitter.com/davidbrown",
      linkedin: "https://linkedin.com/in/davidbrown"
    }
  },
  {
    id: "6",
    name: "Cristhina Cheriyan",
    role: "Blockchain Developer",
    company: "CryptoInnovate",
    image: "/speakers/speaker6.jpg",
    bio: "Expert in blockchain technologies and decentralized application development.",
    social: {
      twitter: "https://twitter.com/jessicakim",
      linkedin: "https://linkedin.com/in/jessicakim"
    }
  },
  {
    id: "7",
    name: "Dhanya",
    role: "IoT Specialist",
    company: "ConnectedWorld",
    image: "/speakers/speaker7.jpg",
    bio: "Implementing innovative IoT solutions for smart cities and sustainable environments.",
    social: {
      linkedin: "https://linkedin.com/in/robertmartinez",
      website: "https://robertmartinez.tech"
    }
  },
  {
    id: "8",
    name: "Mehar Moosa",
    role: "AI Ethics Researcher",
    company: "EthicalTech",
    image: "/speakers/speaker8.jpg",
    bio: "Researching the ethical implications of AI and advocating for responsible technology adoption.",
    social: {
      twitter: "https://twitter.com/sophialee",
      linkedin: "https://linkedin.com/in/sophialee"
    }
  },
  {
    id: "9",
    name: "Nadeem Ashraf",
    role: "AR/VR Engineer",
    company: "ImmersiveTech",
    image: "/speakers/speaker9.jpg",
    bio: "Creating immersive experiences through augmented and virtual reality technologies.",
    social: {
      linkedin: "https://linkedin.com/in/jameswilson"
    }
  },
  {
    id: "10",
    name: "Pawan",
    role: "Data Science Director",
    company: "DataVision",
    image: "/speakers/speaker10.jpg",
    bio: "Leading data science initiatives that transform raw data into actionable business insights.",
    social: {
      twitter: "https://twitter.com/ananyasharma",
      linkedin: "https://linkedin.com/in/ananyasharma"
    }
  },
  {
    id: "11",
    name: "Rail Rolls",
    role: "Cybersecurity Expert",
    company: "SecureNet",
    image: "/speakers/speaker11.jpg",
    bio: "Protecting organizations from emerging cyber threats through innovative security solutions.",
    social: {
      linkedin: "https://linkedin.com/in/carlosrodriguez",
      website: "https://carlosrodriguez.security"
    }
  },
  {
    id: "12",
    name: "Saima Nadeem",
    role: "Product Design Lead",
    company: "UserFirst",
    image: "/speakers/speaker12.jpg",
    bio: "Creating intuitive product experiences that blend aesthetics with functionality.",
    social: {
      twitter: "https://twitter.com/emmathompson",
      linkedin: "https://linkedin.com/in/emmathompson"
    }
  },
  {
    id: "13",
    name: "Sreepriya",
    role: "Quantum Computing Lead",
    company: "QuantumTech",
    image: "/speakers/speaker13.jpg",
    bio: "Exploring the frontiers of quantum computing and its applications in solving complex problems.",
    social: {
      linkedin: "https://linkedin.com/in/rajpatel",
      website: "https://rajpatel.quantum"
    }
  }
];

// Get visual style variation for bento grid effect
const getCardStyle = (index: number) => {
  // Define different card styles that create visual variety
  // These styles maintain equal importance while creating visual interest
  const styles = [
    // Each object represents a card style variation
    {
      borderAccent: "border-l-4 border-l-primary/40",
      imageStyle: "rounded-xl",
      labelBg: "bg-primary/10 text-primary",
    },
    {
      borderAccent: "border-t-4 border-t-violet-300",
      imageStyle: "rounded-2xl",
      labelBg: "bg-violet-100 text-violet-700",
    },
    {
      borderAccent: "border-r-4 border-r-amber-300",
      imageStyle: "rounded-xl",
      labelBg: "bg-amber-100 text-amber-700",
    },
    {
      borderAccent: "border-b-4 border-b-emerald-300",
      imageStyle: "rounded-xl",
      labelBg: "bg-emerald-100 text-emerald-700",
    },
  ];
  
  return styles[index % styles.length];
};

const Speakers = () => {
  const [hoveredId, setHoveredId] = useState<string | null>(null);
  const [showModal, setShowModal] = useState(false);
  const [selectedSpeaker, setSelectedSpeaker] = useState<Speaker | null>(null);

  const handleSpeakerClick = (speaker: Speaker) => {
    setSelectedSpeaker(speaker);
    setShowModal(true);
  };

  return (
    <section className="py-24 bg-gray-50 relative overflow-hidden">
      {/* Enhanced decorative elements */}
      <div className="absolute top-10 right-10 w-72 h-72 bg-primary/5 rounded-full blur-3xl animate-pulse-slow" />
      <div className="absolute bottom-10 left-10 w-96 h-96 bg-primary/5 rounded-full blur-3xl animate-pulse-slow" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-primary/5 rounded-full blur-3xl animate-pulse-slow" />
      
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

        {/* Bento Grid - Larger grids with full-size images and improved spacing */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
          {speakers.map((speaker, index) => {
            const cardStyle = getCardStyle(index);
            
            return (
              <motion.div
                key={speaker.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.05 * (index % 4) }}
                className={`group relative overflow-hidden rounded-xl bg-white shadow-md hover:shadow-xl transition-all duration-300 ${cardStyle.borderAccent}`}
                onHoverStart={() => setHoveredId(speaker.id)}
                onHoverEnd={() => setHoveredId(null)}
                onClick={() => handleSpeakerClick(speaker)}
              >
                {/* Speaker Card Content */}
                <div className="relative aspect-[3/4] w-full cursor-pointer">
                  {/* Card Top Section */}
                  <div className="absolute top-4 left-4 z-10">
                    <div className={`text-xs font-medium px-2 py-1 rounded-full ${cardStyle.labelBg}`}>
                      {speaker.role}
                    </div>
                  </div>
                  
                  {/* Image Container taking up most of the card */}
                  <div className={`relative w-full h-4/5 overflow-hidden ${cardStyle.imageStyle}`}>
                    <div className="absolute inset-0 p-4 pt-8">
                      <Image
                        src={speaker.image}
                        alt={speaker.name}
                        fill
                        className="object-contain transition-transform duration-700 group-hover:scale-105"
                        onError={(e) => {
                          const target = e.target as HTMLImageElement;
                          target.src = `https://placehold.co/800x800/61c2a6/ffffff?text=${encodeURIComponent(speaker.name)}`;
                        }}
                      />
                    </div>
                  </div>

                  {/* Content Container */}
                  <div className="absolute bottom-4 left-4 right-4">
                    <h3 className="text-base font-bold text-gray-900 group-hover:text-primary transition-colors line-clamp-1">
                      {speaker.name}
                    </h3>
                    <p className="text-xs text-gray-500 line-clamp-1">{speaker.company}</p>
                  </div>
                  
                  {/* Hover overlay with details */}
                  <motion.div 
                    initial={{ opacity: 0 }}
                    animate={{ 
                      opacity: hoveredId === speaker.id ? 1 : 0
                    }}
                    transition={{ duration: 0.2 }}
                    className="absolute inset-0 bg-white/95 flex flex-col justify-center p-6 rounded-xl"
                  >
                    <div>
                      <h3 className="text-lg font-bold text-gray-900 mb-2">{speaker.name}</h3>
                      <p className="text-sm font-medium text-primary mb-4">{speaker.role} • {speaker.company}</p>
                      <p className="text-sm text-gray-600 leading-relaxed">{speaker.bio}</p>
                    </div>
                  </motion.div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
      
      {/* Detailed Speaker Modal */}
      {showModal && selectedSpeaker && (
        <div className="fixed inset-0 bg-black/70 backdrop-blur-sm z-50 flex items-center justify-center p-4">
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="bg-white rounded-2xl max-w-2xl w-full max-h-[90vh] overflow-auto shadow-2xl"
          >
            <div className="relative">
              {/* Close button - positioned outside the image for better accessibility */}
              <button 
                onClick={() => setShowModal(false)}
                className="absolute top-4 right-4 bg-white/20 backdrop-blur-sm rounded-full p-2 text-white hover:bg-white/40 transition-colors z-20"
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>

              {/* Speaker image in proper aspect ratio container */}
              <div className="aspect-[4/3] w-full relative overflow-hidden">
                <Image
                  src={selectedSpeaker.image}
                  alt={selectedSpeaker.name}
                  fill
                  className="object-contain bg-gray-100"
                  onError={(e) => {
                    const target = e.target as HTMLImageElement;
                    target.src = `https://placehold.co/800x600/61c2a6/ffffff?text=${encodeURIComponent(selectedSpeaker.name)}`;
                  }}
                />
              </div>
              
              <div className="px-8 py-8">
                <div>
                  <h2 className="text-2xl font-bold text-gray-900 mb-2">{selectedSpeaker.name}</h2>
                  <div className="flex items-center text-gray-600 mb-6">
                    <span className="font-medium">{selectedSpeaker.role}</span>
                    <span className="mx-2">•</span>
                    <span>{selectedSpeaker.company}</span>
                  </div>
                  <p className="text-gray-700 leading-relaxed">{selectedSpeaker.bio}</p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      )}
    </section>
  );
};

export default Speakers;
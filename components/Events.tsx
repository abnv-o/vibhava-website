"use client";

import { motion, AnimatePresence } from "framer-motion";
import { GraduationCap, Users, Rocket, Clock, Calendar, Users2 } from "lucide-react";
import { useState } from "react";
import Image from "next/image";
import { ArrowRight } from "lucide-react";

interface BaseEvent {
  title: string;
  date: string;
  time: string;
  description: string;
  capacity: string;
  registrationLink?: string;
}

interface SingleSpeakerEvent extends BaseEvent {
  speaker: string;
  speakers?: never;
}

interface MultiSpeakerEvent extends BaseEvent {
  speakers: string[];
  speaker?: never;
}

type Event = SingleSpeakerEvent | MultiSpeakerEvent;

interface Category {
  id: string;
  title: string;
  icon: React.ElementType;
  description: string;
  events: Event[];
}

const categories: Category[] = [
  {
    id: "workshops",
    title: "Workshops",
    icon: GraduationCap,
    description: "Hands-on learning experiences with industry experts",
    events: [
      {
        title: "AI/ML Masterclass",
        date: "March 27, 2025",
        time: "12:00 PM - 4:00 PM",
        description: "LearnAI/ML techniques and best practices",
        speaker: "Alosh",
        capacity: "50 participants",
        registrationLink: "https://makemypass.com/event/workshop-2"
      },
      {
        title: "Personal Finance Workshop",
        date: "March 27, 2025",
        time: "2:30 PM - 4:30 PM",
        description: "Master the art of Finance",
        speaker: "Sunil Mathayi",
        capacity: "100 participants",
        registrationLink: "https://makemypass.com/event/workshop-3"
      },
      {
        title: "Design Thinking & Product Dev",
        date: "March 27, 2025",
        time: "10:30 AM - 1:30 PM",
        description: "Art of creating ",
        speaker: "Gokuldas P G",
        capacity: "50 participants",
        registrationLink: "https://makemypass.com/event/workshop1"
      },
    ],
  },
  {
    id: "panel-discussions",
    title: "Panel Discussions",
    icon: Users,
    description: "Engaging conversations with industry leaders",
    events: [
      {
        title: "Navigating the Future: Innovation, Careers, and the Role of Students in an AI-Driven World",
        date: "March 27, 2025",
        time: "10:15 AM - 11:40 AM",
        description: "",
        speakers: ["Jacob thomas(TCS)", "Kerstin Silvia Koehler(Kireap)", "Dr.Dhanya K Sudish (Kireap)","Pawan Seshadri (Urbanwind)","Moosa Meher M P(Moderator)",],
        capacity: "100 attendees",
        registrationLink: "https://makemypass.com/event/panel-discussion-1"
      },
      {
        title: "The Entrepreneurship Blueprint",
        date: "March 27, 2025",
        time: "1:30 PM - 2:30 PM",
        description: "",
        speakers: [ "Nadeem Safran Kongath(Karikk)","Saima Nadeem (Edhwi)", "Cristhina Cheriyan (Twenty Four News)","sreepriya (Pehiya Foundation) "],
        capacity: "100 attendees",
        registrationLink: "https://makemypass.com/event/panel-discussion-2"
      },
    ],
  },
  {
    id: "startup-stories",
    title: "Startup Stories",
    icon: Rocket,
    description: "Inspiring journeys of successful entrepreneurs",
    events: [
      {
        title: "Zeesip",
        date: "March 27, 2025",
        time: "10:30 AM - 11:30 AM",
        description: "",
        speaker: "",
        capacity: "30 attendees",
        registrationLink: "https://makemypass.com/event/hustlediaries1"
      },
      {
        title: "Luvwish",
        date: "March 27, 2025",
        time: "10:30 AM - 11:30 AM",
        description: "",
        speaker: "",
        capacity: "150 attendees",
        registrationLink: "https://makemypass.com/event/hustlediaries2"
      },
      {
        title: "Rail Rolls",
        date: "March 27, 2025",
        time: "10:30 AM - 11:30 AM",
        description: "",
        speaker: "",
        capacity: "150 attendees",
        registrationLink: "https://makemypass.com/event/hustlediaries3"
      },
    ],
  },
];

const Events = () => {
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);

  return (
    <section
      id="events"
      className="py-12 sm:py-24 bg-white relative overflow-hidden"
    >
      {/* Enhanced decorative elements */}
      <div className="absolute top-20 right-20 w-64 h-64 bg-primary/5 rounded-full blur-3xl animate-pulse-slow hidden sm:block" />
      <div className="absolute bottom-20 left-20 w-72 h-72 bg-primary/5 rounded-full blur-3xl animate-pulse-slow hidden sm:block" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-8 sm:mb-16"
        >
          <motion.span 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="inline-block text-sm font-semibold text-primary px-3 py-1 rounded-full bg-primary/10 mb-3"
          >
            EVENTS & SCHEDULE
          </motion.span>
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            Explore Our Events
          </h2>
          <div className="w-16 sm:w-20 h-1 bg-primary mx-auto" />
        </motion.div>

        {/* Category Cards with Events */}
        <div className="flex flex-col gap-8 sm:gap-6 lg:gap-8 mb-8 sm:mb-16">
          {/* Category Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8">
            {categories.map((category) => (
              <div key={category.id} className="flex flex-col gap-4 sm:gap-0">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6 }}
                  whileHover={{ y: -5 }}
                  className={`relative cursor-pointer group h-[280px] sm:h-[300px] ${
                    selectedCategory === category.id ? "ring-2 ring-primary rounded-2xl" : ""
                  }`}
                  onClick={() => setSelectedCategory(category.id)}
                >
                  <div className="bg-white rounded-2xl p-6 sm:p-8 shadow-lg border border-gray-100 hover:border-primary/20 transition-all h-full flex flex-col justify-between">
                    <div>
                      <div className="w-12 h-12 sm:w-16 sm:h-16 bg-primary/10 rounded-xl flex items-center justify-center mb-4 sm:mb-6 group-hover:bg-primary/20 transition-colors">
                        <category.icon className="w-6 h-6 sm:w-8 sm:h-8 text-primary" />
                      </div>
                      <h3 className="text-lg sm:text-xl font-bold text-gray-900 mb-2 sm:mb-3">{category.title}</h3>
                      <p className="text-sm text-gray-600 line-clamp-3">{category.description}</p>
                    </div>
                    
                    {/* More Details Section */}
                    <div className="flex items-center mt-3 sm:mt-4 text-primary">
                      <span className="text-sm font-medium">More Details</span>
                      <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                    </div>
                  </div>
                </motion.div>

                {/* Mobile Events */}
                <div className="block sm:hidden">
                  {selectedCategory === category.id && (
                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -20 }}
                      className="flex flex-col gap-4"
                    >
                      {category.events.map((event, index) => (
                        <motion.div
                          key={index}
                          initial={{ opacity: 0, scale: 0.9 }}
                          animate={{ opacity: 1, scale: 1 }}
                          transition={{ delay: index * 0.1 }}
                          className="bg-white rounded-xl overflow-hidden shadow-lg border border-gray-100 hover:border-primary/20 transition-all group flex flex-col"
                        >
                          {/* Event Image */}
                          <div className="relative w-full h-[200px] sm:h-[280px] bg-gray-50">
                            <Image
                              src={`/events/${category.id}-${index + 1}.jpg`}
                              alt={event.title}
                              fill
                              sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                              priority={index === 0}
                              className={`transition-transform duration-500 ${
                                category.id === 'panel-discussions' ? 'object-contain p-4' : 'object-contain hover:scale-105'
                              }`}
                              onError={(e) => {
                                const target = e.target as HTMLImageElement;
                                if (category.id === 'panel-discussions') {
                                  target.src = `https://placehold.co/800x600/61c2a6/ffffff?text=Panel+Discussion+${index + 1}`;
                                } else if (category.id === 'startup-stories') {
                                  target.src = `https://placehold.co/800x600/61c2a6/ffffff?text=Startup+Story+${index + 1}`;
                                } else {
                                  target.src = "https://placehold.co/800x600/61c2a6/ffffff?text=Event+Image";
                                }
                              }}
                            />
                          </div>

                          {/* Event Content */}
                          <div className="p-4 flex flex-col flex-grow">
                            <h4 className="text-lg font-bold text-gray-900 mb-2 group-hover:text-primary transition-colors">
                              {event.title}
                            </h4>
                            {event.description && (
                              <p className="text-sm text-gray-600 mb-3">
                                {event.description}
                              </p>
                            )}

                            {/* Event Details */}
                            <div className="space-y-2 mb-3">
                              <div className="flex items-center text-xs text-gray-500">
                                <Calendar className="w-4 h-4 mr-2 text-primary" />
                                {event.date}
                              </div>
                              <div className="flex items-center text-xs text-gray-500">
                                <Clock className="w-4 h-4 mr-2 text-primary" />
                                {event.time}
                              </div>
                              <div className="flex items-center text-xs text-gray-500">
                                <Users2 className="w-4 h-4 mr-2 text-primary" />
                                {event.capacity}
                              </div>
                            </div>

                            {/* Speaker Info */}
                            <div className="mb-4">
                              {event.speaker && (
                                <div className="flex items-center p-2 bg-gray-50 rounded-lg">
                                  <div className="w-6 h-6 rounded-full bg-primary/10 flex items-center justify-center mr-2">
                                    <span className="text-xs font-medium text-primary">
                                      {event.speaker.charAt(0)}
                                    </span>
                                  </div>
                                  <div>
                                    <p className="text-xs font-medium text-gray-900">Speaker</p>
                                    <p className="text-xs text-gray-600">{event.speaker}</p>
                                  </div>
                                </div>
                              )}
                              {event.speakers && (
                                <div className="space-y-2">
                                  <p className="text-xs font-medium text-gray-900">Speakers</p>
                                  <div className="flex flex-wrap gap-1.5">
                                    {event.speakers.map((speaker, idx) => (
                                      <div
                                        key={idx}
                                        className="flex items-center bg-gray-50 rounded-full px-2 py-1"
                                      >
                                        <div className="w-5 h-5 rounded-full bg-primary/10 flex items-center justify-center mr-1.5">
                                          <span className="text-xs font-medium text-primary">
                                            {speaker.charAt(0)}
                                          </span>
                                        </div>
                                        <span className="text-xs text-gray-600">{speaker}</span>
                                      </div>
                                    ))}
                                  </div>
                                </div>
                              )}
                            </div>

                            {/* Register Button */}
                            {event.registrationLink ? (
                              <motion.a
                                href={event.registrationLink}
                                target="_blank"
                                rel="noopener noreferrer"
                                whileHover={{ scale: 1.02 }}
                                whileTap={{ scale: 0.98 }}
                                className="mt-auto bg-primary text-white py-2.5 rounded-lg font-medium hover:bg-primary-dark transition-colors shadow-sm flex items-center justify-center group text-sm"
                              >
                                <span>Register Now</span>
                                <svg
                                  className="w-4 h-4 ml-2 transform group-hover:translate-x-1 transition-transform"
                                  fill="none"
                                  stroke="currentColor"
                                  viewBox="0 0 24 24"
                                >
                                  <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth={2}
                                    d="M9 5l7 7-7 7"
                                  />
                                </svg>
                              </motion.a>
                            ) : (
                              <motion.button
                                whileHover={{ scale: 1.02 }}
                                whileTap={{ scale: 0.98 }}
                                className="mt-auto bg-gray-200 text-gray-600 py-2.5 rounded-lg font-medium transition-colors shadow-sm flex items-center justify-center group text-sm"
                                disabled
                              >
                                <span>Registration Opening Soon</span>
                              </motion.button>
                            )}
                          </div>
                        </motion.div>
                      ))}
                    </motion.div>
                  )}
                </div>
              </div>
            ))}
          </div>

          {/* Desktop Events Grid */}
          <div className="hidden sm:block">
            <AnimatePresence mode="wait">
              {selectedCategory && (
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6"
                >
                  {categories
                    .find((cat) => cat.id === selectedCategory)
                    ?.events.map((event, index) => (
                      <motion.div
                        key={index}
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ delay: index * 0.1 }}
                        className="bg-white rounded-xl overflow-hidden shadow-lg border border-gray-100 hover:border-primary/20 transition-all group flex flex-col"
                      >
                        {/* Event Image */}
                        <div className="relative w-full h-[200px] sm:h-[280px] bg-gray-50">
                          <Image
                            src={`/events/${selectedCategory}-${index + 1}.jpg`}
                            alt={event.title}
                            fill
                            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                            priority={index === 0}
                            className={`transition-transform duration-500 ${
                              selectedCategory === 'panel-discussions' 
                                ? 'object-contain p-4' 
                                : 'object-contain hover:scale-105'
                            }`}
                            onError={(e) => {
                              const target = e.target as HTMLImageElement;
                              if (selectedCategory === 'panel-discussions') {
                                target.src = `https://placehold.co/800x600/61c2a6/ffffff?text=Panel+Discussion+${index + 1}`;
                              } else if (selectedCategory === 'startup-stories') {
                                target.src = `https://placehold.co/800x600/61c2a6/ffffff?text=Startup+Story+${index + 1}`;
                              } else {
                                target.src = "https://placehold.co/800x600/61c2a6/ffffff?text=Event+Image";
                              }
                            }}
                          />
                        </div>

                        {/* Event Content */}
                        <div className="p-4 sm:p-6 flex flex-col flex-grow">
                          <h4 className="text-lg sm:text-xl font-bold text-gray-900 mb-2 sm:mb-3 group-hover:text-primary transition-colors">
                            {event.title}
                          </h4>
                          {event.description && (
                            <p className="text-sm text-gray-600 mb-3 sm:mb-4">
                              {event.description}
                            </p>
                          )}

                          {/* Event Details */}
                          <div className="space-y-2 sm:space-y-3 mb-3 sm:mb-4">
                            <div className="flex items-center text-xs sm:text-sm text-gray-500">
                              <Calendar className="w-4 h-4 mr-2 text-primary" />
                              {event.date}
                            </div>
                            <div className="flex items-center text-xs sm:text-sm text-gray-500">
                              <Clock className="w-4 h-4 mr-2 text-primary" />
                              {event.time}
                            </div>
                            <div className="flex items-center text-xs sm:text-sm text-gray-500">
                              <Users2 className="w-4 h-4 mr-2 text-primary" />
                              {event.capacity}
                            </div>
                          </div>

                          {/* Speaker Info */}
                          <div className="mb-4 sm:mb-6">
                            {event.speaker && (
                              <div className="flex items-center p-2 sm:p-3 bg-gray-50 rounded-lg">
                                <div className="w-6 h-6 sm:w-8 sm:h-8 rounded-full bg-primary/10 flex items-center justify-center mr-2 sm:mr-3">
                                  <span className="text-xs sm:text-sm font-medium text-primary">
                                    {event.speaker.charAt(0)}
                                  </span>
                                </div>
                                <div>
                                  <p className="text-xs sm:text-sm font-medium text-gray-900">Speaker</p>
                                  <p className="text-xs sm:text-sm text-gray-600">{event.speaker}</p>
                                </div>
                              </div>
                            )}
                            {event.speakers && (
                              <div className="space-y-2">
                                <p className="text-xs sm:text-sm font-medium text-gray-900">Speakers</p>
                                <div className="flex flex-wrap gap-1.5 sm:gap-2">
                                  {event.speakers.map((speaker, idx) => (
                                    <div
                                      key={idx}
                                      className="flex items-center bg-gray-50 rounded-full px-2 sm:px-3 py-1"
                                    >
                                      <div className="w-5 h-5 sm:w-6 sm:h-6 rounded-full bg-primary/10 flex items-center justify-center mr-1.5 sm:mr-2">
                                        <span className="text-xs font-medium text-primary">
                                          {speaker.charAt(0)}
                                        </span>
                                      </div>
                                      <span className="text-xs sm:text-sm text-gray-600">{speaker}</span>
                                    </div>
                                  ))}
                                </div>
                              </div>
                            )}
                          </div>

                          {/* Register Button */}
                          {event.registrationLink ? (
                            <motion.a
                              href={event.registrationLink}
                              target="_blank"
                              rel="noopener noreferrer"
                              whileHover={{ scale: 1.02 }}
                              whileTap={{ scale: 0.98 }}
                              className="mt-auto bg-primary text-white py-2.5 sm:py-3 rounded-lg font-medium hover:bg-primary-dark transition-colors shadow-sm flex items-center justify-center group text-sm"
                            >
                              <span>Register Now</span>
                              <svg
                                className="w-4 h-4 ml-2 transform group-hover:translate-x-1 transition-transform"
                                fill="none"
                                stroke="currentColor"
                                viewBox="0 0 24 24"
                              >
                                <path
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                  strokeWidth={2}
                                  d="M9 5l7 7-7 7"
                                />
                              </svg>
                            </motion.a>
                          ) : (
                            <motion.button
                              whileHover={{ scale: 1.02 }}
                              whileTap={{ scale: 0.98 }}
                              className="mt-auto bg-gray-200 text-gray-600 py-2.5 sm:py-3 rounded-lg font-medium transition-colors shadow-sm flex items-center justify-center group text-sm"
                              disabled
                            >
                              <span>Registration Opening Soon</span>
                            </motion.button>
                          )}
                        </div>
                      </motion.div>
                    ))}
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>

        {/* Download Schedule Button */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mt-8 sm:mt-16"
        >
          <motion.a
            href="/Vibhava_Schedule.pdf"
            download
            className="inline-flex items-center px-6 sm:px-8 py-3 sm:py-4 bg-primary text-white rounded-xl font-medium hover:bg-primary-dark transition-all shadow-lg hover:shadow-xl group text-base sm:text-lg"
          >
            <svg
              className="w-5 h-5 sm:w-6 sm:h-6 mr-2 sm:mr-3"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"
              />
            </svg>
            Download Complete Schedule
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
};

export default Events; 
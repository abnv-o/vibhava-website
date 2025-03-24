"use client";

import { motion, AnimatePresence } from "framer-motion";
import { GraduationCap, Users, Rocket, Clock, Calendar, Users2 } from "lucide-react";
import { useState } from "react";
import Image from "next/image";

interface BaseEvent {
  title: string;
  date: string;
  time: string;
  description: string;
  capacity: string;
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
      },
      {
        title: "Personal Finance Workshop",
        date: "March 27, 2025",
        time: "2:30 PM - 4:30 PM",
        description: "Master the art of Finance",
        speaker: "Sunil Mathayi",
        capacity: "100 participants",
      },
      {
        title: "Design Thinking & Product Dev",
        date: "March 27, 2025",
        time: "10:30 AM - 1:30 PM",
        description: "Art of creating ",
        speaker: "ANIL G,IBM",
        capacity: "50 participants",
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
        title: "Tech",
        date: "March 27, 2025",
        time: "10:20 AM - 11:40 AM",
        description: "",
        speakers: ["Jacob thomas(TCS)", "Kohler(Kireap)", "Dhanya(Kirep)","Pawan (Urbanwind)","Meher(Moderator)",],
        capacity: "100 attendees",
      },
      {
        title: "Entruprenur",
        date: "March 27, 2025",
        time: "1:20 PM - 2:30 PM",
        description: "",
        speakers: ["Saima Nadeem (Edhwi)", "Nadeem Ashraf(Karikk)", "sreepriya (pehiya) ","Cristhina Cheriyan (Moderator)"],
        capacity: "100 attendees",
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
        title: "From Zero to Hero",
        date: "March 19, 2024",
        time: "12:15 PM - 6:00 PM",
        description: "Success story of a tech startup founder",
        speaker: "Kaiff",
        capacity: "30 attendees",
      },
      // {
      //   title: "Scaling Your Business",
      //   date: "March 20, 2024",
      //   time: "5:00 PM - 7:00 PM",
      //   description: "Strategies for growing your startup",
      //   speaker: "Emma Davis",
      //   capacity: "150 attendees",
      // },
    ],
  },
];

const Events = () => {
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);

  return (
    <section
      id="events"
      className="py-24 bg-white relative overflow-hidden"
    >
      {/* Enhanced decorative elements */}
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
            EVENTS & SCHEDULE
          </motion.span>
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Explore Our Events
          </h2>
          <div className="w-20 h-1 bg-primary mx-auto" />
        </motion.div>

        {/* Category Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {categories.map((category) => (
            <motion.div
              key={category.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              whileHover={{ y: -5 }}
              className={`relative cursor-pointer group ${
                selectedCategory === category.id ? "ring-2 ring-primary rounded-2xl" : ""
              }`}
              onClick={() => setSelectedCategory(category.id)}
            >
              <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100 hover:border-primary/20 transition-all">
                <div className="w-16 h-16 bg-primary/10 rounded-xl flex items-center justify-center mb-6 group-hover:bg-primary/20 transition-colors">
                  <category.icon className="w-8 h-8 text-primary" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">{category.title}</h3>
                <p className="text-gray-600">{category.description}</p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Events Grid */}
        <AnimatePresence mode="wait">
          {selectedCategory && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
            >
              {categories
                .find((cat) => cat.id === selectedCategory)
                ?.events.map((event, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: index * 0.1 }}
                    className="bg-white rounded-xl overflow-hidden shadow-lg border border-gray-100 hover:border-primary/20 transition-all group aspect-[4/5]"
                  >
                    {/* Event Image */}
                    <div className="relative h-40 w-full overflow-hidden">
                      <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-primary/5" />
                      <Image
                        src={`/events/${selectedCategory}-${index + 1}.jpg`}
                        alt={event.title}
                        fill
                        className="object-cover group-hover:scale-105 transition-transform duration-500"
                        onError={(e) => {
                          const target = e.target as HTMLImageElement;
                          target.src = "https://placehold.co/600x400/61c2a6/ffffff?text=Event+Image";
                        }}
                      />
                    </div>

                    {/* Event Content */}
                    <div className="p-4 flex flex-col h-[calc(100%-10rem)]">
                      <h4 className="text-lg font-bold text-gray-900 mb-2 group-hover:text-primary transition-colors line-clamp-1">
                        {event.title}
                      </h4>
                      <p className="text-sm text-gray-600 mb-3 line-clamp-2">
                        {event.description}
                      </p>

                      {/* Event Details */}
                      <div className="space-y-2 mb-3">
                        <div className="flex items-center text-xs text-gray-500">
                          <Calendar className="w-3.5 h-3.5 mr-1.5 text-primary" />
                          {event.date}
                        </div>
                        <div className="flex items-center text-xs text-gray-500">
                          <Clock className="w-3.5 h-3.5 mr-1.5 text-primary" />
                          {event.time}
                        </div>
                        <div className="flex items-center text-xs text-gray-500">
                          <Users2 className="w-3.5 h-3.5 mr-1.5 text-primary" />
                          {event.capacity}
                        </div>
                      </div>

                      {/* Speaker Info */}
                      <div className="mb-3">
                        {event.speaker && (
                          <div className="flex items-center">
                            <div className="w-6 h-6 rounded-full bg-primary/10 flex items-center justify-center mr-2">
                              <span className="text-xs font-medium text-primary">
                                {event.speaker.charAt(0)}
                              </span>
                            </div>
                            <div>
                              <p className="text-xs font-medium text-gray-900">Speaker</p>
                              <p className="text-xs text-gray-500">{event.speaker}</p>
                            </div>
                          </div>
                        )}
                        {event.speakers && (
                          <div>
                            <p className="text-xs font-medium text-gray-900 mb-1">Speakers</p>
                            <div className="flex flex-wrap gap-1">
                              {event.speakers.map((speaker, idx) => (
                                <div
                                  key={idx}
                                  className="flex items-center bg-gray-50 rounded-full px-2 py-0.5"
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
                      <motion.button
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                        className="mt-auto bg-primary text-white py-2 rounded-lg font-medium hover:bg-primary-dark transition-colors shadow-sm flex items-center justify-center group text-sm"
                      >
                        <span>Register Now</span>
                        <svg
                          className="w-3.5 h-3.5 ml-1.5 transform group-hover:translate-x-1 transition-transform"
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
                      </motion.button>
                    </div>
                  </motion.div>
                ))}
            </motion.div>
          )}
        </AnimatePresence>

        {/* Download Schedule Button */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mt-16"
        >
          <motion.a
            href="/schedule.pdf"
            download
            className="inline-flex items-center px-8 py-4 bg-primary text-white rounded-xl font-medium hover:bg-primary-dark transition-all shadow-lg hover:shadow-xl group text-lg"
          >
            <svg
              className="w-6 h-6 mr-3"
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
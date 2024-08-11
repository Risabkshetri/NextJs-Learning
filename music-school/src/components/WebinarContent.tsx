'use client';

import Image from "next/image";
import { motion } from 'framer-motion';
import { TracingBeam } from "@/components/ui/tracing-beam";
import * as React from 'react';
import Link from "next/link";

const WebinarContent = ({webinar }) => {
  return (
    <TracingBeam className="px-4 sm:px-6 lg:px-8 py-12 lg:py-32">
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="max-w-3xl mx-auto antialiased"
      >
             <h1 className="text-4xl sm:text-5xl font-bold mb-6 text-gray-900 dark:text-white">
        {webinar.title}
      </h1>

      <p className="text-xl mb-8 text-gray-600 dark:text-gray-300">
        {webinar.description}
      </p>

      {webinar?.image && (
        <div className="relative h-64 sm:h-96 mb-10 rounded-lg overflow-hidden">
          <Image
            src={webinar.image}
            alt={webinar.title}
            layout="fill"
            objectFit="cover"
            className="transition-transform duration-300 hover:scale-105"
          />
        </div>
      )}

      <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6 mb-8">
        <h2 className="text-2xl font-semibold mb-4 text-gray-900 dark:text-white">Event Details</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-gray-600 dark:text-gray-300">
          <p><strong className="text-gray-900 dark:text-white">Date:</strong> {new Date(webinar.date).toLocaleDateString()}</p>
          <p><strong className="text-gray-900 dark:text-white">Time:</strong> {new Date(webinar.date).toLocaleTimeString()}</p>
          <p><strong className="text-gray-900 dark:text-white">Duration:</strong> {webinar.duration}</p>
          <p><strong className="text-gray-900 dark:text-white">Instructor:</strong> {webinar.instructor}</p>
        </div>
      </div>

      <div className="mb-8">
        <h2 className="text-2xl font-semibold mb-4 text-gray-900 dark:text-white">About the Instructor</h2>
        <p className="text-gray-600 dark:text-gray-300">{webinar.instructorBio}</p>
      </div>

      <div className="mb-8">
        <h2 className="text-2xl font-semibold mb-4 text-gray-900 dark:text-white">Topics Covered</h2>
        <ul className="list-disc pl-5 space-y-2 text-gray-600 dark:text-gray-300">
          {webinar.topics.map((topic, index) => (
            <li key={index}>{topic}</li>
          ))}
        </ul>
      </div>

      <div className="mb-8">
        <h2 className="text-2xl font-semibold mb-4 text-gray-900 dark:text-white">Prerequisites</h2>
        <p className="text-gray-600 dark:text-gray-300">{webinar.prerequisites}</p>
      </div>

      <div className="mb-8">
        <h2 className="text-2xl font-semibold mb-4 text-gray-900 dark:text-white">Detailed Description</h2>
        <div 
          className="prose prose-lg max-w-none text-gray-600 dark:text-gray-300"
          dangerouslySetInnerHTML={{ __html: webinar.detailedDescription }}
        ></div>
      </div>
     <Link href="/contact" className="inline-block" >
      <motion.button
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        className="px-4 py-2 rounded-md border border-neutral-600 text-white bg-slate-950 shadow-md shadow-blue-600  hover:bg-gray-800 transition duration-200 dark:shadow-blue-600"
      >
        Register Now
      </motion.button>
      </Link>
      </motion.div>
    </TracingBeam>
  );
};

export default WebinarContent;
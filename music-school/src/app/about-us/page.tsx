"use client";

import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";

const page = () => {
  return (
    <section className="py-20 bg-gray-900 text-white sm:mx-2">
      <div className="container mx-auto px-4">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-5xl font-bold mb-10 text-center"
        >
          About KshetriAI
        </motion.h1>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <h2 className="text-3xl font-semibold mb-4">Our Mission</h2>
            <p className="text-gray-300">
              At KshetriAI, we’re on a mission to provide cutting-edge web
              solutions that solve real-world problems. We combine tech
              expertise with creativity to deliver high-quality, affordable
              solutions for businesses of all sizes.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            <h2 className="text-3xl font-semibold mb-4">Our Vision</h2>
            <p className="text-gray-300">
              We aim to become the go-to partner for innovative web solutions,
              empowering small businesses, startups, and content creators to
              thrive in the digital world.
            </p>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.6 }}
          className="mt-16"
        >
          <h2 className="text-3xl font-semibold mb-6 text-center">
            What We Do?
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-gray-800 p-6 rounded-lg">
              <h3 className="text-xl font-semibold mb-2">
                WordPress Development
              </h3>
              <p className="text-gray-300">
                Crafting stunning and functional websites that are easy to
                manage.
              </p>
            </div>
            <div className="bg-gray-800 p-6 rounded-lg">
              <h3 className="text-xl font-semibold mb-2">Web Development</h3>
              <p className="text-gray-300">
                Building robust and scalable web applications tailored to your
                needs.
              </p>
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.8 }}
          className="mt-16"
        >
          <h2 className="text-3xl font-semibold mb-6 text-center">
            Why Choose Us?
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-gray-800 p-6 rounded-lg">
              <h3 className="text-xl font-semibold mb-2">
                Innovative Solutions
              </h3>
              <p className="text-gray-300">
                We stay ahead of the curve with the latest technology and
                trends.
              </p>
            </div>
            <div className="bg-gray-800 p-6 rounded-lg">
              <h3 className="text-xl font-semibold mb-2">
                Customer-Centric Approach
              </h3>
              <p className="text-gray-300">
                Your success is our priority. We listen, understand, and
                deliver.
              </p>
            </div>
            <div className="bg-gray-800 p-6 rounded-lg">
              <h3 className="text-xl font-semibold mb-2">Affordable Quality</h3>
              <p className="text-gray-300">
                Get top-notch solutions without breaking the bank.
              </p>
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 1 }}
          className="mt-16 text-center"
        >
          <h2 className="text-3xl font-semibold mb-6">Meet Our Founder</h2>
          <div className="bg-gray-800 flex md:flex-row flex-col items-center justify-center gap-8 p-6 rounded-lg ">
            <Image
              className="rounded-full"
              src="/founder.png"
              alt="Rishab Kshetri"
              width={150}
              height={150}
            ></Image>
            <h3 className="text-xl font-semibold mb-2">Rishab Kshetri</h3>
            <p className="text-gray-300 text-start">
            Passionate about technology and innovation, Rishab Kshetri leads KshetriAI with a visionary approach. With a background in computer science and years of experience in web development, Rishab combines technical expertise with entrepreneurial spirit. His mission is to democratize access to cutting-edge web solutions, empowering businesses of all sizes to thrive in the digital landscape. Rishabs dedication to continuous learning and problem-solving drives KshetriAIs commitment to excellence and client success.

            </p>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 1.2 }}
          className="mt-16 text-center"
        >
          <h2 className="text-3xl font-semibold mb-6">Lets Connect</h2>
          <p className="text-gray-300 mb-4">
            Wed love to hear from you. Whether youre interested in our
            services or just want to chat about the latest tech trends, feel
            free to reach out.
          </p>
          <div className="flex justify-center space-x-4">
            <a
              href="mailto:rishab@kshetriai"
              className="px-4 py-2 rounded-md border border-neutral-600 text-white bg-slate-950 shadow-md shadow-blue-600  hover:bg-gray-800 transition duration-200"
            >
              Email Us
            </a>
            <a
              href="tel:+1-123-456-7890"
              className="px-4 py-2 rounded-md border border-neutral-600 text-white bg-slate-950 shadow-md shadow-blue-600  hover:bg-gray-800 transition duration-200"
            >
              Call Us
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default page;

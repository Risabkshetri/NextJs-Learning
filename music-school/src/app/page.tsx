'use client'
import FeaturedCourses from "@/components/FeaturedCourses";
import Footer from "@/components/Footer";
import HeroSection from "@/components/HeroSection";
import Instructors from "@/components/Instructors";
import MusicSchoolTestimonials from "@/components/TestimonialCard";
import UpcomingWebinars from "@/components/UpcomingWebinars";
import WhyChooseUs from "@/components/WhyChooseUs";


export default function Home() {
  return (
    <div>
  <HeroSection />
  <FeaturedCourses />
  <WhyChooseUs />
  <MusicSchoolTestimonials />
  <UpcomingWebinars />
  <Instructors />
  <Footer />
  </div>
  );
}

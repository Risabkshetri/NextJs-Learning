import { Meteors } from "@/components/ui/meteors";
import webinarData from "@/data/webinar-data.json";
import Link from "next/link";

export default function page() {interface Webinar {
    id: number;
    slug: string;
    title: string;
    description: string;
    image?: string;
    date: string;
    duration: string;
    instructor: string;
    instructorBio: string;
    topics: string[];
    prerequisites: string;
    detailedDescription: string;
  }
  
  interface WebinarData {
    webinars: Webinar[];
  }
  
  const webinarData: WebinarData = require("@/data/webinar-data.json");
  return (
    <div className="min-hsceen bg-black py-12  pt-36 mx-4">
      <h1 className="text-lg md:text-6xl font-bold text-white mb-8 font-sans text-center">
        Webinars
      </h1>
      <div className="flex flex-wrap gap-8 justify-center">
        {webinarData.webinars.map((webinar: Webinar) => (
              <div className=" w-full relative max-w-xs" key={webinar.id}>
              <div className="absolute inset-0 h-full w-full bg-gradient-to-r from-blue-500 to-teal-500 transform scale-[0.80] bg-red-500 rounded-full blur-3xl" />
              <div className="relative shadow-xl bg-gray-900 border border-gray-800  px-4 py-8 h-full overflow-hidden rounded-2xl flex flex-col justify-end items-start">
                <div className="h-5 w-5 rounded-full border flex items-center justify-center mb-4 border-gray-500">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                    stroke="currentColor"
                    className="h-2 w-2 text-gray-300"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M4.5 4.5l15 15m0 0V8.25m0 11.25H8.25"
                    />
                  </svg>
                </div>
    
                <h1 className="font-bold text-xl text-white mb-4 relative z-10">
                 {webinar.title}
                </h1>
    
                <p className="font-normal text-base text-slate-500 mb-4 relative z-10">
                 {webinar.description}
                </p>
    
                <Link href={`/webinars/${webinar.slug}`} className="border px-4 py-1 rounded-lg  border-gray-500 text-gray-300">
                  Explore
                </Link>
                <Meteors number={20} />
              </div>
            </div>
        ))}
      
      </div>
    </div>
  );
}

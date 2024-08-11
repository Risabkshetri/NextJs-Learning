'use client'
import Link from "next/link"
import { HoverEffect } from "./ui/card-hover-effect";
import webinarData from "../data/webinar-data.json";

function UpcomingWebinars() {

  interface Webinar {
    id: number;
    title: string;
    slug: string;
    description: string;
    isFeatured: boolean;
  }

  const featuredWebinars = webinarData.webinars.filter((webinar: Webinar) => webinar.isFeatured);

  return (
    <div className="p-12 bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="text-center">
          <h2 className="text-base text-teal-600 font-semibold tracking-wide uppercase">FEATURED WEBINARS</h2>
          <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-white sm:text-4xl">Enhance Your Coding Journey</p>
        </div>

        <div className="mt-10">
          <HoverEffect
          items={featuredWebinars.map((webinar: Webinar) => (
            {
              title: webinar.title,
              description: webinar.description,
              link: '/webinars/' + webinar.slug
            }
          ))}
          />
        </div>

        <div className="mt-10 text-center">
          <Link href={"/webinars"}
          className="px-4 py-2 rounded-md border border-neutral-600 text-white bg-slate-950 shadow-md shadow-blue-600  hover:bg-gray-800 transition duration-200"
          >
            View All webinars
          </Link>
        </div>
      </div>
    </div>
  )
}

export default UpcomingWebinars
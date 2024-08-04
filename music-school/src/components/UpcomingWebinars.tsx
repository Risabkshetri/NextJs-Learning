'use client'
import Link from "next/link"
import { HoverEffect } from "./ui/card-hover-effect";

function UpcomingWebinars() {

  const featuredWebinars = [
    {
      title: 'Understanding Data Structures',
      description:
        'Dive deep into the fundamentals of data structures and enhance your coding skills.',
      slug: 'understanding-data-structures',
      isFeatured: true,
    },
    {
      title: 'The Art of Clean Code',
      description:
        'Learn the craft of writing clean, maintainable code from experienced developers.',
      slug: 'the-art-of-clean-code',
      isFeatured: true,
    },
    {
      title: 'Mastering Object-Oriented Programming',
      description:
        'Advanced techniques to master object-oriented programming concepts.',
      slug: 'mastering-object-oriented-programming',
      isFeatured: true,
    },
    {
      title: 'Full-Stack Development Essentials',
      description:
        'Get started with full-stack development with this comprehensive overview.',
      slug: 'full-stack-development-essentials',
      isFeatured: true,
    },
    {
      title: 'Agile Development Techniques',
      description:
        'Enhance your project management skills with expert tips on Agile methodologies.',
      slug: 'agile-development-techniques',
      isFeatured: true,
    },
    {
      title: 'Cybersecurity Fundamentals',
      description:
        'Learn how to secure your applications effectively in the digital age.',
      slug: 'cybersecurity-fundamentals',
      isFeatured: true,
    },
  ];

  return (
    <div className="p-12 bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="text-center">
          <h2 className="text-base text-teal-600 font-semibold tracking-wide uppercase">FEATURED WEBINARS</h2>
          <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-white sm:text-4xl">Enhance Your Coding Journey</p>
        </div>

        <div className="mt-10">
          <HoverEffect
          items={featuredWebinars.map(webinar => (
            {
              title: webinar.title,
              description: webinar.description,
              link: '/'
            }
          ))}
          />
        </div>

        <div className="mt-10 text-center">
          <Link href={"/"}
          className="px-4 py-2 rounded border border-neutral-600 text-neutral-700 bg-white hover:bg-gray-100 transition duration-200"
          >
            View All webinars
          </Link>
        </div>
      </div>
    </div>
  )
}

export default UpcomingWebinars
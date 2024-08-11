import { notFound } from 'next/navigation';
import courseData from "@/data/music_courses.json";
import Image from "next/image";
import { TracingBeam } from "@/components/ui/tracing-beam";
import React from "react";
type CourseParams = {
  params: {
    slug: string;
  };
};

export default function Course({ params }: CourseParams) {
  const { slug } = params;
  const course = courseData.courses.find(course => course.slug === slug);

  if (!course) {
    notFound();
  }

  return (
  <TracingBeam className="px-6 mt-32">
      <div className="max-w-2xl mx-auto antialiased pt-4 relative">
          <div className="mb-10">
            <p className="text-2xl mb-4">
              {course.title}
            </p>
 
            <div className="text-sm  prose prose-sm dark:prose-invert">
              {course?.image && (
                <Image
                  src={course.image}
                  alt={course.title}
                  height="1000"
                  width="1000"
                  className="rounded-lg mb-10 object-cover"
                />
              )}
               <p className="text-md" dangerouslySetInnerHTML={{ __html: course.content }}></p>
            </div>
           
          </div>
      </div>
    </TracingBeam>
  );
}

export function generateStaticParams() {
  return courseData.courses.map((course) => ({
    slug: course.slug,
  }));
}


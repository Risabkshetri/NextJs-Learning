// import { notFound } from 'next/navigation';
// import courseData from "@/data/music_courses.json";


// export default function Course({params}) {
//   const {slug } = params;
//   const course = courseData.courses.find(course => course.slug === slug);

//   if (!course) {
//     notFound();
//   }

//   type courseParams = {
//     slug: string;
//   };

//   return (
   
//   );
// }

// export async function generateStaticParams(): Promise<courseParams[]> {
//   type courseParams = {
//     slug: string;
//   };

//   return courseData.courses.map((post: {
//     slug: string;
//   }): courseParams => ({
// export async function generateStaticParams() {
//   return courseData.courses.map((post) => ({
//     id: post.id,
//     slug: post.slug,
//   }));
// }


import { notFound } from 'next/navigation';
import courseData from "@/data/music_courses.json";

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
    <div className="max-w-2xl mx-auto overflow-y-auto p-4 mt-32">
    <h1 className="text-3xl font-bold my-4">{course.title}</h1>
    <img src={course.image} alt={course.title} className="w-full h-64 object-cover mb-4" />
    <p className="text-lg ">{course.description}</p>
  </div>
  );
}

export function generateStaticParams() {
  return courseData.courses.map((course) => ({
    slug: course.slug,
  }));
}
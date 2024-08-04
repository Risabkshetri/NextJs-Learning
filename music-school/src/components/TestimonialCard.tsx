'use client'
import { InfiniteMovingCards } from "./ui/infinite-moving-cards";

const codingSchoolTestimonials = [
  {
    quote:
      'Joining this coding school transformed my understanding of programming and helped me to truly discover my passion for software development. The instructors are world-class!',
    name: 'Alex Johnson',
    title: 'Python Student',
  },
  {
    quote:
      "The community and support at this school are unmatched. I've grown not just as a coder, but also as a problem-solver, thanks to their comprehensive approach.",
    name: 'Samantha Lee',
    title: 'Web Development Student',
  },
  {
    quote:
      "This school offered me the tools and confidence to take my coding skills to the next level. I'm endlessly grateful for the personalized mentoring.",
    name: 'Michael Chen',
    title: 'JavaScript Student',
  },
  {
    quote:
      'As an aspiring data scientist, finding the right mentor can be challenging, but this school matched me with an instructor who truly understands my goals and challenges.',
    name: 'Emily Taylor',
    title: 'Data Science Student',
  },
  {
    quote:
      'The mobile app development courses here opened my eyes to the intricacies of creating user-friendly applications. Highly recommend for any aspiring app developers!',
    name: 'Chris Morales',
    title: 'Mobile App Development Student',
  },
];
function MusicSchoolTestimonials() {
  return (
    <div className="h-[40rem] w-full dark:bg-black dark:bg-grid-white/[0.2] relative flex flex-col items-center justify-center overflow-hidden">
        <h2 className="text-3xl font-bold text-center mb-8 z-10">Hear our Coding Breakthroughs: Student Testimonials</h2>
        <div className="flex justify-center w-full overflow-hidden px-4 sm:px-6 lg:px-8">
            <div className="w-full max-w-6xl">
            <InfiniteMovingCards
                items={codingSchoolTestimonials}
                direction="right"
                speed="slow"
      />
            </div>
        </div>
    </div>
  )
}

export default MusicSchoolTestimonials
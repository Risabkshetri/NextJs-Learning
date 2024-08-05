'use client'
import React from 'react'
import { StickyScroll } from './ui/sticky-scroll-reveal'
import Image from "next/image"; 

const content = [
  {
    title: "Collaborative Coding",
    description:
      "Work together in real time with your team, classmates, and instructors. Collaborate on code, share ideas, and solve problems quickly. With our platform, you can streamline your learning process and increase your coding productivity.",
      content: (
        <div className="h-full w-full flex items-center justify-center text-white">
          <Image
            src="/colaboration.jpg"
            width={300}
            height={300}
            className="h-full w-full object-cover"
            alt="real-time code sharing demo"
          />
        </div>
      ),
  },
  {
    title: "Real-time Code Sharing",
    description:
      "See code changes as they happen. With our platform, you can track every modification in real time. No more confusion about the latest version of your project. Say goodbye to the chaos of manual file sharing and embrace the simplicity of real-time code updates.",
    content: (
      <div className="h-full w-full flex items-center justify-center text-white">
        <Image
          src="/real-time.jpg"
          width={300}
          height={300}
          className="h-full w-full object-cover"
          alt="real-time code sharing demo"
        />
      </div>
    ),
  },
  {
    title: "Version Control Integration",
    description:
      "Experience seamless integration with popular version control systems and never stress about managing your code versions again. Our platform ensures that you're always working on the most recent version of your project, eliminating the need for constant manual merges.",
      content: (
        <div className="h-full w-full flex items-center justify-center text-white">
          <Image
            src="/version-control.jpg"
            width={300}
            height={300}
            className="h-full w-full object-cover"
            alt="real-time code sharing demo"
          />
        </div>
      ),
  },
  {
    title: "Continuous Learning Environment",
    description:
      "Benefit from a continuously updated learning environment. Our platform ensures that you always have access to the latest course materials, coding examples, and resources. Stay up-to-date with the fast-paced world of programming, keep your skills sharp, and maintain your learning momentum without any gaps in your education.",
      content: (
        <div className="h-full w-full flex items-center justify-center text-white">
          <Image
            src="/discipline.jpeg"
            width={300}
            height={300}
            className="h-full w-full object-cover"
            alt="real-time code sharing demo"
          />
        </div>
      ),
  },
];
function WhyChooseUs() {
  return (
    <div className="p-10">
    <StickyScroll content={content} />
  </div>
  )
}

export default WhyChooseUs
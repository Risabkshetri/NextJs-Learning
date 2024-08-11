import { notFound } from "next/navigation";
import webinarData from "@/data/webinar-data.json";
import WebinarContent from '@/components/WebinarContent';

type CourseParams = {
  params: {
    slug: string;
  };
};

export default function Course({ params }: CourseParams) {
  const { slug } = params;
  const webinar = webinarData.webinars.find((webinar) => webinar.slug === slug);

  if (!webinar) {
    notFound();
  }

  return <WebinarContent webinar={webinar} />;
}

export function generateStaticParams() {
  return webinarData.webinars.map((webinar) => ({
    slug: webinar.slug,
  }));
}
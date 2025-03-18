import { ReactNode } from "react";

export interface Feature {
  icon: ReactNode;
  title: string;
  description: string;
}

export interface Course {
  title: string;
  image: string;
  author: string;
  duration: string;
  discount: string;
  price: string;
}

export interface Benefit {
  image: string;
  title: string;
  description: string;
}

export interface SocialMedia {
  label: string;
  icon: string;
  url: string;
}

export const features: Feature[] = [
  {
    icon: "/icons/tag.svg",
    title: "Explore topics",
    description: "Explore our selection of courses in development",
  },
  {
    icon: "/icons/group.svg",
    title: "Meet new friends",
    description: "Join the network with million of students and learn",
  },
  {
    icon: "/icons/group.svg",
    title: "Learn code",
    description: "Learn all about code and become in a developer",
  },
];

export const courses: Course[] = [
  {
    title: "Frontend Development with JavaScript",
    image: "/images/img-course.png",
    author: "By Cristian Muñoz",
    duration: "Duration: 7 weeks",
    discount: "$80.00 USD 80% discount",
    price: "Buy now $14.00 USD",
  },
  {
    title: "Frontend Development with JavaScript",
    image: "/images/img-course.png",
    author: "By Cristian Muñoz",
    duration: "Duration: 7 weeks",
    discount: "$80.00 USD 80% discount",
    price: "Buy now $14.00 USD",
  },
  {
    title: "Frontend Development with JavaScript",
    image: "/images/img-course.png",
    author: "By Cristian Muñoz",
    duration: "Duration: 7 weeks",
    discount: "$80.00 USD 80% discount",
    price: "Buy now $14.00 USD",
  },
  {
    title: "Frontend Development with JavaScript",
    image: "/images/img-course.png",
    author: "By Cristian Muñoz",
    duration: "Duration: 7 weeks",
    discount: "$80.00 USD 80% discount",
    price: "Buy now $14.00 USD",
  },
];

export const benefits: Benefit[] = [
  {
    image: "/images/computer.png",
    title: "Explore topics",
    description:
      "Dive deep into our diverse catalog featuring a curated selection of courses in the realms of arts and writing. Experience knowledge crafted by experts, designed to inspire and nurture your creative journey.",
  },
  {
    image: "/images/network.png",
    title: "Meet new Friends",
    description:
      "Connect with our expansive network, match with like-minded peers, and learn code together",
  },
  {
    image: "/images/community.png",
    title: "Find",
    description:
      "Connect with people around the world in a huge community with million of students",
  },
];

export const socialMedias: SocialMedia[] = [
  {
    label: "Instagram",
    icon: "/icons/instagram.svg",
    url: "https://www.instagram.com/tian",
  },
  {
    label: "Figma",
    icon: "/icons/figma.svg",
    url: "https://www.figma.com/tian",
  },
  {
    label: "Linkedin",
    icon: "/icons/linkedin.svg",
    url: "https://www.linkedin.com/tian",
  },
  {
    label: "Twitter",
    icon: "/icons/twitter.svg",
    url: "https://www.twitter.com/tian",
  },
  {
    label: "Telegram",
    icon: "/icons/telegram.svg",
    url: "https://www.telegram.com/tian",
  },
  {
    label: "Medium",
    icon: "/icons/medium.svg",
    url: "https://www.medium.com/tian",
  },
];

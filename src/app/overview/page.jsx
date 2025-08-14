'use client';
import React, { useState } from 'react';

import Button from '@/components/ui/Button';
import Banner from '@/components/ui/Banner';
import Hero from '@/components/overview/Hero';
import MainContent from '@/components/overview/MainContent';
const page = () => {
  const [loading, setLoading] = useState(false);
  const handleRequestInvite = async () => {
    setLoading(true);
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1000));
    setLoading(false);
    alert('Invitation request sent successfully!');
  };

  const heroContent = {
  subtitle: "2025 Agenda",
  title: "Your Agenda: Networking, Discussions & More",
  date: "7-9 October 2025",
  location: "XYZ Conferenss Hall, India"
}

  const content = {
  overview: {
    title: "Overview",
    paragraphs: [
      {
        text: "India is at the verge of a digital financial revolution. Charting a course toward a more inclusive, resilient, and environmentally conscious economy by 2030. Through cutting-edge technology, strategic partnerships, and innovative policy frameworks, we ensure seamless access, financial empowerment, and sustainable growth.",
        highlights: ["India is at the verge of a digital financial revolution.", "2030."]
      },
      {
        text: "Collaborative agenda addresses industry leaders and innovators in building a robust ecosystem built on trust, security, and green practices. Together, we're building a digital financial landscape that not only drives progress but also ensures a brighter, more sustainable future for every Indian.",
        highlights: ["Collaborative agenda addresses"]
      }
    ]
  },
  agenda: {
    title: "Agenda",
    items: [
      { time: "4:30 - 4:40 PM", title: "Registration & Networking High Tea", icon: "/images/agenda/vector.svg" },
      { time: "4:40 - 4:50 PM", title: "Opening Remarks by Giakaa Capital", icon: "/images/agenda/vector2.svg" },
      { time: "4:50 - 5:00 PM", title: "Partner Introduction", icon: "/images/agenda/vector3.svg" },
      { time: "5:00 - 5:40 PM", title: "Discussion Points", icon: "/images/agenda/vector4.svg" },
      { time: "5:40 - 5:50 PM", title: "Group Photo & Thankyou Note", icon: "/images/agenda/vector5.svg" },
      { time: "5:50 - 6:30 PM", title: "Networking & Refreshments", icon: "/images/agenda/vector6.svg" }
    ]
  },
  keyTopics: {
    title: "Key topics",
    topics: [
      "What are the main barriers to digital payment adoption in rural and semi-urban India?",
      "How can vernacular language and offline features improve access to digital payments?",
      "What role do agents and local businesses play in expanding financial inclusion beyond metros?",
      "How should regulations evolve to boost trust, security, and innovation in Bharat's payment ecosystem?",
      "How can AI and interoperable systems help build scalable, user-friendly payment solutions for underserved areas?",
      "How can banks, fintechs, and government collaborate to deliver inclusive financial services across Bharat?"
    ]
  },
  callToAction: {
    title: "Secure Your Invitation Today",
    buttonText: "Request to Invite"
  }
};

  return (
    <div className="flex flex-col justify-start items-center w-full bg-[#f9f8f6]">
      {/* Hero Section */}
      <Hero content={heroContent} />
      {/* Main Content */}
      <MainContent data={content} />

      {/* Footer */}
      <Banner />
    </div>
  );
};
export default page;
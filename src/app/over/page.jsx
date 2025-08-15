'use client';
import React, { useState, useEffect } from 'react';
import { useParams } from 'next/navigation';
import Button from '@/components/ui/Button';
import Banner from '@/components/ui/Banner';
import Hero from '@/components/overview/Hero';
import MainContent from '@/components/overview/MainContent';
import Loader from '@/components/ui/Loader';
import { generateSlug } from '@/helper/utils';
import UpdatedEventLayout from '@/components/overview/UpdatedEventLayout';
import { ChevronDown, ChevronUp, Calendar, Mic, Users, MessageSquare, Camera, Coffee } from 'lucide-react';

// Define the roundtable content data


// Usage Example:
// To get content for roundtable 1: roundtableContent[1]
// To get content for roundtable 5: roundtableContent[5]
// Access specific sections: roundtableContent[1].heroContent.title


  const tempData = {
    about: {
      title: "About",
      paragraphs: [
        "India's financial inclusion journey is one of the most ambitious transformations of our time. Yet, the promise of \"Digital India\" will only be fulfilled when digital payments reach not just the cities, but the very heart of Bharat - its towns, villages, and underserved communities.",
        "This Executive Roundtable convenes senior policymakers, banking leaders, fintech innovators, investors, and technology architects to collaboratively explore pathways for expanding digital payment adoption across diverse socio-economic landscapes.",
        "The event focuses on creating sustainable strategies that bridge the gap between urban digital adoption and rural financial inclusion. Through structured discussions and collaborative workshops, participants will identify actionable solutions that can be implemented at scale.",
        "With India's digital infrastructure rapidly evolving, this gathering represents a critical opportunity to shape the future of inclusive finance. The insights generated will directly influence policy recommendations and industry best practices.",
        "By bringing together diverse stakeholders from across the financial ecosystem, this roundtable aims to foster partnerships that can accelerate the democratization of digital payments throughout India."
      ]
    },
    objective: {
      title: "Objective",
      content: "To explore innovative, scalable, and sustainable strategies that will extend the reach of digital payments into Tier 2, Tier 3, and rural India, creating genuine financial inclusion for all."
    },
    discussionPillars: {
      title: "Discussion Pillars",
      pillars: [
        {
          title: "Localized and Inclusive User Experiences",
          content: "Exploring vernacular interfaces, offline capabilities, and culturally relevant payment solutions."
        },
        {
          title: "Infrastructure & Connectivity Challenges", 
          content: "Addressing network limitations, device accessibility, and digital literacy barriers."
        },
        {
          title: "Trust & Behavioral Adoption",
          content: "Building confidence in digital systems through security, transparency, and community engagement."
        },
        {
          title: "Ecosystem Partnerships for Last-Mile Delivery",
          content: "Leveraging local businesses, agents, and community leaders for widespread adoption."
        }
      ]
    },
    intendedOutcomes: {
      title: "Intended Outcomes",
      subtitle: "By the close of this 90-minute discussion, participants will:",
      outcomes: [
        "Establish priority actions for inclusive payment expansion.",
        "Identify partnership models that accelerate adoption.",
        "Outline policy and infrastructure recommendations.",
        "Commit to pilot initiatives in high-potential regions."
      ]
    },
    whyNow: {
      title: "Why does this matter now?",
      content: `India's digital payments revolution has been world-leading in scale and innovation – yet, a significant segment of the population remains outside its reach. With rapid smartphone penetration, supportive policy momentum, and maturing fintech infrastructure, the next five years present a decisive window to:`,
      points: [
        "Build inclusive systems that leave no citizen behind.",
        "Empower communities to participate in the formal economy.",
        "Strengthen India's position as a global leader in financial inclusion models."
      ]
    },
    whoWillBeInRoom: {
      title: "Who will be in the room?",
      subtitle: "This closed-door dialogue will bring together 12 senior leaders representing:",
      participants: [
        "Government & Regulatory Bodies shaping digital finance policy.",
        "CXOs from Banks, NBFCs & Fintechs driving inclusion initiatives.",
        "Technology Innovators delivering last-mile payment solutions.",
        "Impact Investors & Development Finance Institutions funding grassroots financial empowerment."
      ]
    },
    agenda: {
      title: "Agenda",
      items: [
        { time: "4:30 - 4:40 PM", title: "Registration & Networking High Tea", icon: Calendar },
        { time: "4:40 - 4:50 PM", title: "Opening Remarks by Giakaa Capital", icon: Mic },
        { time: "4:50 - 5:00 PM", title: "Partner Introduction", icon: Users },
        { time: "5:00 - 5:30 PM", title: "Discussion Points", icon: MessageSquare },
        { time: "5:30 - 5:40 PM", title: "Group Photo & Thankyou Note", icon: Camera },
        { time: "5:40 - 6:00 PM", title: "Networking & Refreshments", icon: Coffee }
      ]
    },
    whyAttend: {
      title: "Why Attend",
      points: [
        "Directly influence strategies for one of the most critical missions in India's financial ecosystem.",
        "Engage with a carefully selected group of top decision-makers.",
        "Translate discussion into tangible partnerships, pilots, and policy inputs.",
        "Be part of a legacy initiative that shapes the next decade of inclusive digital finance."
      ]
    },
    strategicValue: {
      title: "Strategic Value for Participants",
      values: [
        "Influence Industry Direction: Shape the national agenda for financial inclusion.",
        "Forge Strategic Alliances: Partner with leaders across sectors.",
        "Access Unfiltered Insights: Gain ground-level perspectives from diverse stakeholders.",
        "Drive Real-World Change: Translate discussion into measurable action."
      ]
    }
  };

const Over = () => {

  return (
    <div className="flex flex-col justify-start items-center w-full bg-[#ffffff]">
      {/* Hero Section */}
      
      {/* Main Content Section */}
      <UpdatedEventLayout tempData={tempData} />

      {/* Banner */}
      <Banner />
    </div>
  );
};

export default Over;

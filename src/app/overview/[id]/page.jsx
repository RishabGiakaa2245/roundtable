'use client';
import React, { useState, useEffect } from 'react';
import { ChevronDown, ChevronUp, Calendar, Mic, Users, MessageSquare, Camera, Coffee } from 'lucide-react';

import { useParams } from 'next/navigation';
import Button from '@/components/ui/Button';
import Banner from '@/components/ui/Banner';
import Hero from '@/components/overview/Hero';
import MainContent from '@/components/overview/MainContent';
import Loader from '@/components/ui/Loader';
import { generateSlug } from '@/helper/utils';

// Define the roundtable content data

// Roundtables 2-6 following the same structure as roundtable 1
const roundtableContent = {

    1: {
    slug: generateSlug('Financial Inclusion Through Digital Payments: Reaching Bharat'),
    heroContent: {
      subtitle: '2025 Agenda',
      title: 'Financial Inclusion Through Digital Payments: Reaching Bharat',
      date: '7 October 2025',
      location: 'Trident Hotel, BKC, Mumbai',
      thumbnail: '/images/agenda/img_image1_1.png',
    },
    MainContent: {
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
        { time: "4:30 PM - 4:40 PM", title: "Registration & Networking High Tea", icon: Calendar },
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
  }
  },
  
  // Roundtable 2 - Fintech Valuations in 2025
  2: {
    slug: generateSlug('Fintech Valuations in 2025: Navigating Market Corrections & Realistic Pricing'),
    heroContent: {
      subtitle: '2025 Agenda',
      title: 'Fintech Valuations in 2025: Navigating Market Corrections & Realistic Pricing',
      date: '7 October 2025',
      location: 'Trident Hotel, BKC, Mumbai',
      thumbnail: '/images/agenda/img_image1_1.png',
    },
    MainContent: {
      about: {
        title: "About",
        paragraphs: [
          "The fintech sector is experiencing a significant recalibration as market dynamics shift from growth-at-all-costs to sustainable profitability models. With global funding declining by 50% from peak levels, investors and entrepreneurs must navigate a new landscape of realistic valuations and disciplined capital allocation.",
          "This exclusive roundtable brings together top VCs, fintech leaders, and financial experts to discuss valuation methodologies, market corrections, and strategies for building resilient fintech businesses that can thrive in both bull and bear markets.",
          "The session will explore how traditional valuation metrics are evolving in the current market environment, with particular focus on revenue multiples, unit economics, and path-to-profitability timelines that investors now prioritize.",
          "Through case studies and real-world examples, participants will analyze recent fintech deals, understand the factors driving current market corrections, and identify opportunities emerging from the valuation reset.",
          "This gathering represents a critical opportunity to align on industry standards and best practices that will define the next phase of fintech investment and growth."
        ]
      },
      objective: {
        title: "Objective",
        content: "To establish realistic valuation frameworks and sustainable growth strategies that align fintech companies with current market realities while identifying opportunities in the corrected market environment."
      },
      discussionPillars: {
        title: "Discussion Pillars",
        pillars: [
          {
            title: "Market Correction Analysis",
            content: "Examining the factors behind the 50% funding decline and understanding the new market dynamics shaping fintech valuations."
          },
          {
            title: "Valuation Methodologies & Metrics", 
            content: "Exploring revenue multiples, unit economics, LTV/CAC ratios, and other key metrics that drive current valuation decisions."
          },
          {
            title: "Path to Profitability Strategies",
            content: "Discussing sustainable business models, cost optimization, and timeline expectations for achieving profitability."
          },
          {
            title: "Investment Opportunities in Correction",
            content: "Identifying sectors, stages, and company profiles that present attractive investment opportunities in the current environment."
          }
        ]
      },
      intendedOutcomes: {
        title: "Intended Outcomes",
        subtitle: "By the close of this 90-minute discussion, participants will:",
        outcomes: [
          "Align on realistic valuation benchmarks for different fintech verticals.",
          "Identify key metrics and milestones that drive investor confidence.",
          "Develop strategies for navigating market volatility and securing growth capital.",
          "Establish frameworks for sustainable unit economics and profitability planning."
        ]
      },
      whyNow: {
        title: "Why does this matter now?",
        content: "The fintech industry is at a critical inflection point where the era of growth-at-all-costs has ended, and sustainable, profitable business models are now paramount. With funding down significantly from peak levels, the next phase of fintech evolution requires:",
        points: [
          "Realistic valuation frameworks that reflect sustainable business fundamentals.",
          "Clear strategies for achieving profitability without sacrificing growth potential.",
          "Alignment between entrepreneurs and investors on market expectations and timelines."
        ]
      },
      whoWillBeInRoom: {
        title: "Who will be in the room?",
        subtitle: "This closed-door dialogue will bring together 12 senior leaders representing:",
        participants: [
          "Venture Capital Partners and Investment Committee members focusing on fintech.",
          "Fintech CEOs and CFOs managing through market corrections and funding challenges.",
          "Investment Bankers and Advisory professionals active in fintech M&A and fundraising.",
          "Family Office and Institutional Investors deploying capital in the fintech sector."
        ]
      },
      agenda: {
        title: "Agenda",
        items: [
          { time: "6:30 - 6:40 PM", title: "Registration & Networking High Tea", icon: Calendar },
          { time: "6:40 - 6:50 PM", title: "Opening Remarks by Giakaa Capital", icon: Mic },
          { time: "6:50 - 7:00 PM", title: "Partner Introduction", icon: Users },
          { time: "7:00 - 7:40 PM", title: "Valuation Discussion Points", icon: MessageSquare },
          { time: "7:40 - 7:50 PM", title: "Group Photo & Thankyou Note", icon: Camera },
          { time: "7:50 - 8:30 PM", title: "Networking & Refreshments", icon: Coffee }
        ]
      },
      whyAttend: {
        title: "Why Attend",
        points: [
          "Gain insights into current market dynamics and valuation trends from leading investors.",
          "Network with top fintech leaders navigating similar challenges and opportunities.",
          "Develop practical strategies for sustainable growth and profitability.",
          "Access exclusive deal intelligence and market intelligence from industry insiders."
        ]
      },
      strategicValue: {
        title: "Strategic Value for Participants",
        values: [
          "Market Intelligence: Access real-time insights on fintech valuations and funding trends.",
          "Strategic Positioning: Position your company or fund for success in the current market.",
          "Network Expansion: Connect with key decision-makers across the fintech investment ecosystem.",
          "Competitive Advantage: Understand market dynamics before they become widely apparent."
        ]
      }
    }
  },

  // Roundtable 3 - India Stack Opportunities
  3: {
    slug: generateSlug("India Stack Opportunities: Building on UPI's $990B Market Potential"),
    heroContent: {
      subtitle: '2025 Agenda',
      title: "India Stack Opportunities: Building on UPI's $990B Market Potential",
      date: '8 October 2025',
      location: 'Trident Hotel, BKC, Mumbai',
      thumbnail: '/images/agenda/img_image1_1.png',
    },
    MainContent: {
      about: {
        title: "About",
        paragraphs: [
          "India Stack has revolutionized digital infrastructure, with UPI processing over $990 billion in transactions annually. This digital public infrastructure represents one of the most successful fintech ecosystems globally, creating unprecedented opportunities for innovation and financial inclusion.",
          "Join industry pioneers and policymakers as we explore the next frontier of India Stack innovation, discussing opportunities in credit, insurance, investment, and cross-border payments while building on the foundation of Aadhaar, UPI, and Account Aggregator frameworks.",
          "This roundtable will examine how businesses can leverage the mature India Stack infrastructure to create new financial products and services that were previously impossible or economically unviable.",
          "With the Account Aggregator framework now operational and CBDC pilots underway, participants will explore emerging use cases and business models that can scale across India's diverse market segments.",
          "The discussion will focus on practical implementation strategies, regulatory considerations, and partnership models that can unlock the full potential of India's digital infrastructure."
        ]
      },
      objective: {
        title: "Objective",
        content: "To identify and develop innovative business opportunities that leverage India Stack's $990B transaction ecosystem, focusing on scalable solutions for credit, insurance, investments, and cross-border payments."
      },
      discussionPillars: {
        title: "Discussion Pillars",
        pillars: [
          {
            title: "Account Aggregator Innovation",
            content: "Exploring how AA framework enables new credit, investment, and insurance products through enhanced data sharing and consent management."
          },
          {
            title: "UPI Evolution & Cross-Border Expansion", 
            content: "Discussing UPI's international expansion opportunities and integration with global payment systems and digital currencies."
          },
          {
            title: "CBDC Integration Strategies",
            content: "Understanding how Central Bank Digital Currency will interact with existing India Stack components and create new business models."
          },
          {
            title: "Digital Identity Monetization",
            content: "Leveraging Aadhaar and digital identity infrastructure for KYC, onboarding, and personalized financial services at scale."
          }
        ]
      },
      intendedOutcomes: {
        title: "Intended Outcomes",
        subtitle: "By the close of this 90-minute discussion, participants will:",
        outcomes: [
          "Identify specific business opportunities within the India Stack ecosystem.",
          "Develop go-to-market strategies for Account Aggregator-based products.",
          "Create partnership frameworks for cross-border UPI expansion.",
          "Establish pilot programs for CBDC integration and digital identity solutions."
        ]
      },
      whyNow: {
        title: "Why does this matter now?",
        content: "India Stack has reached maturity with UPI's $990B annual transaction volume, while new components like Account Aggregator and CBDC are creating unprecedented opportunities for innovation. The next five years represent a critical window to:",
        points: [
          "Capitalize on the world's largest and most successful digital payments infrastructure.",
          "Build innovative financial products using mature AA and digital identity frameworks.",
          "Establish India as the global leader in digital public infrastructure innovation."
        ]
      },
      whoWillBeInRoom: {
        title: "Who will be in the room?",
        subtitle: "This closed-door dialogue will bring together 12 senior leaders representing:",
        participants: [
          "Technology Leaders from NPCI, RBI, and India Stack implementing organizations.",
          "Fintech CEOs building products on Account Aggregator and UPI infrastructure.",
          "Banking CXOs developing India Stack integration strategies and digital products.",
          "Global Payment Companies exploring India Stack partnerships and international expansion."
        ]
      },
      agenda: {
        title: "Agenda",
        items: [
          { time: "4:30 PM - 4:40 PM", title: "Registration & Networking High Tea", icon: Calendar },
          { time: "4:40 - 4:50 PM", title: "Opening Remarks by Giakaa Capital", icon: Mic },
          { time: "4:50 - 5:00 PM", title: "Partner Introduction", icon: Users },
          { time: "5:00 - 5:40 PM", title: "India Stack Discussion Points", icon: MessageSquare },
          { time: "5:40 - 5:50 PM", title: "Group Photo & Thankyou Note", icon: Camera },
          { time: "5:50 - 6:30 PM", title: "Networking & Refreshments", icon: Coffee }
        ]
      },
      whyAttend: {
        title: "Why Attend",
        points: [
          "Access exclusive insights into India Stack's roadmap and future developments.",
          "Connect with key stakeholders shaping digital infrastructure policy and implementation.",
          "Identify partnership opportunities for scaling India Stack-based solutions globally.",
          "Gain first-mover advantage in emerging India Stack business opportunities."
        ]
      },
      strategicValue: {
        title: "Strategic Value for Participants",
        values: [
          "Infrastructure Access: Leverage world-class digital infrastructure for business innovation.",
          "Market Leadership: Position your organization at the forefront of India Stack evolution.",
          "Global Expansion: Use India Stack as a platform for international market entry.",
          "Policy Influence: Shape the future development of digital public infrastructure."
        ]
      }
    }
  },

  // Roundtable 4 - Bank-Fintech Partnerships
  4: {
    slug: generateSlug('Bank-Fintech Partnerships: Creating Win-Win Collaboration Models'),
    heroContent: {
      subtitle: '2025 Agenda',
      title: 'Bank-Fintech Partnerships: Creating Win-Win Collaboration Models',
      date: '8 October 2025',
      location: 'Trident Hotel, BKC, Mumbai',
      thumbnail: '/images/agenda/img_image1_1.png',
    },
    MainContent: {
      about: {
        title: "About",
        paragraphs: [
          "The relationship between traditional banks and fintech companies has evolved from competition to collaboration, creating powerful synergies that combine banking infrastructure with innovative technology. These partnerships are reshaping financial services delivery and customer experience across India.",
          "This roundtable explores successful partnership models, regulatory frameworks, and strategies for creating mutually beneficial relationships that accelerate financial innovation while maintaining regulatory compliance and risk management standards.",
          "Through detailed case studies and interactive discussions, participants will examine various collaboration models - from API partnerships and white-label solutions to joint ventures and strategic investments.",
          "The session will address key challenges including technology integration, data sharing, regulatory compliance, and revenue-sharing models that have emerged from real-world bank-fintech partnerships.",
          "With regulatory support for such collaborations growing, this gathering provides a crucial platform for establishing industry best practices and sustainable partnership frameworks."
        ]
      },
      objective: {
        title: "Objective",
        content: "To develop sustainable, scalable partnership models between banks and fintechs that accelerate innovation, improve customer experience, and create shared value while maintaining regulatory compliance and risk management excellence."
      },
      discussionPillars: {
        title: "Discussion Pillars",
        pillars: [
          {
            title: "Partnership Model Frameworks",
            content: "Exploring API partnerships, white-label solutions, joint ventures, and strategic investment models that create mutual value."
          },
          {
            title: "Technology Integration Strategies", 
            content: "Addressing legacy system challenges, API standardization, data security, and seamless customer experience across platforms."
          },
          {
            title: "Regulatory & Risk Management",
            content: "Ensuring compliance with banking regulations, data protection requirements, and risk management standards in partnership models."
          },
          {
            title: "Revenue Sharing & Commercial Models",
            content: "Developing sustainable revenue-sharing frameworks, pricing strategies, and commercial terms that align incentives for long-term success."
          }
        ]
      },
      intendedOutcomes: {
        title: "Intended Outcomes",
        subtitle: "By the close of this 90-minute discussion, participants will:",
        outcomes: [
          "Establish framework templates for different types of bank-fintech partnerships.",
          "Develop risk management and compliance protocols for collaborative models.",
          "Create revenue-sharing models that ensure mutual benefit and sustainability.",
          "Identify specific partnership opportunities and pilot program initiatives."
        ]
      },
      whyNow: {
        title: "Why does this matter now?",
        content: "The financial services landscape is rapidly evolving, with customer expectations demanding both the trust of traditional banking and the innovation of fintech solutions. Successful partnerships are becoming essential for:",
        points: [
          "Banks to modernize their technology infrastructure and enhance customer experience.",
          "Fintechs to access established customer bases, regulatory expertise, and capital resources.",
          "The industry to accelerate financial inclusion and innovation while maintaining stability."
        ]
      },
      whoWillBeInRoom: {
        title: "Who will be in the room?",
        subtitle: "This closed-door dialogue will bring together 12 senior leaders representing:",
        participants: [
          "Banking CXOs responsible for digital transformation and fintech partnership strategies.",
          "Fintech CEOs and Business Development heads managing bank partnership initiatives.",
          "Regulatory Affairs and Risk Management leaders ensuring compliance in collaborative models.",
          "Technology Integration specialists and API platform developers enabling seamless partnerships."
        ]
      },
      agenda: {
        title: "Agenda",
        items: [
          { time: "6:30 - 6:40 PM", title: "Registration & Networking High Tea", icon: Calendar },
          { time: "6:40 - 6:50 PM", title: "Opening Remarks by Giakaa Capital", icon: Mic },
          { time: "6:50 - 7:00 PM", title: "Partner Introduction", icon: Users },
          { time: "7:00 - 7:40 PM", title: "Partnership Strategy Discussion", icon: MessageSquare },
          { time: "7:40 - 7:50 PM", title: "Group Photo & Thankyou Note", icon: Camera },
          { time: "7:50 - 8:30 PM", title: "Networking & Refreshments", icon: Coffee }
        ]
      },
      whyAttend: {
        title: "Why Attend",
        points: [
          "Learn from successful bank-fintech partnership case studies and best practices.",
          "Network with potential partners and explore concrete collaboration opportunities.",
          "Gain insights into regulatory requirements and risk management for partnerships.",
          "Develop actionable frameworks for structuring and managing strategic partnerships."
        ]
      },
      strategicValue: {
        title: "Strategic Value for Participants",
        values: [
          "Partnership Pipeline: Identify and develop strategic partnerships with industry leaders.",
          "Risk Mitigation: Understand and address regulatory and operational risks in collaborations.",
          "Market Acceleration: Leverage partnerships to accelerate market entry and customer acquisition.",
          "Innovation Enhancement: Combine traditional banking stability with fintech innovation capabilities."
        ]
      }
    }
  },

  // Roundtable 5 - Building India's Sustainable Digital Financial Ecosystem 2030
  5: {
    slug: generateSlug("Building India's Sustainable Digital Financial Ecosystem 2030: A Multi-Stakeholder Blueprint for Inclusive Growth"),
    heroContent: {
      subtitle: '2025 Agenda',
      title: "Building India's Sustainable Digital Financial Ecosystem 2030: A Multi-Stakeholder Blueprint for Inclusive Growth",
      date: '9 October 2025',
      location: 'Trident Hotel, BKC, Mumbai',
      thumbnail: '/images/agenda/img_image1_1.png',
    },
    MainContent: {
      about: {
        title: "About",
        paragraphs: [
          "India is on the verge of a digital financial revolution, charting a course toward a more inclusive, resilient, and environmentally conscious economy by 2030. Through cutting-edge technologies and responsible innovation, we are unlocking new opportunities for seamless access, financial empowerment, and sustainable growth.",
          "This flagship roundtable brings together former RBI governors, banking leaders, and fintech pioneers to create a comprehensive blueprint for India's sustainable digital financial future, addressing climate finance, ESG integration, and inclusive growth strategies.",
          "The discussion will focus on creating a holistic ecosystem approach that integrates environmental sustainability, social impact, and governance excellence into the core of India's digital financial infrastructure.",
          "Participants will explore how emerging technologies like AI, blockchain, and IoT can be leveraged to create more efficient, transparent, and environmentally sustainable financial services that serve all segments of Indian society.",
          "This visionary gathering aims to establish India as a global leader in sustainable fintech innovation, creating models that can be replicated worldwide while addressing local challenges and opportunities."
        ]
      },
      objective: {
        title: "Objective",
        content: "To create a comprehensive, actionable blueprint for building India's sustainable digital financial ecosystem by 2030, integrating ESG principles, climate finance, and inclusive growth strategies into the core of financial innovation."
      },
      discussionPillars: {
        title: "Discussion Pillars",
        pillars: [
          {
            title: "ESG Integration & Climate Finance",
            content: "Embedding environmental, social, and governance principles into fintech products, services, and investment strategies for sustainable growth."
          },
          {
            title: "Inclusive Digital Financial Services", 
            content: "Ensuring last-mile financial inclusion through vernacular interfaces, offline capabilities, and culturally appropriate solutions."
          },
          {
            title: "Green Technology & Carbon Neutrality",
            content: "Leveraging technology to reduce carbon footprint of financial services while enabling green investments and sustainable business models."
          },
          {
            title: "Policy Framework for Sustainable Finance",
            content: "Developing regulatory and policy frameworks that incentivize sustainable practices while fostering innovation and growth."
          }
        ]
      },
      intendedOutcomes: {
        title: "Intended Outcomes",
        subtitle: "By the close of this 90-minute discussion, participants will:",
        outcomes: [
          "Create a roadmap for sustainable digital financial ecosystem development by 2030.",
          "Establish ESG metrics and frameworks for measuring impact and progress.",
          "Develop policy recommendations for supporting sustainable fintech innovation.",
          "Commit to collaborative initiatives that advance climate finance and inclusive growth."
        ]
      },
      whyNow: {
        title: "Why does this matter now?",
        content: "As India approaches its carbon neutrality commitments and sustainable development goals, the financial sector must lead the transformation toward a more sustainable and inclusive economy. The next five years are critical for:",
        points: [
          "Integrating ESG principles into the foundation of India's digital financial infrastructure.",
          "Establishing India as a global leader in sustainable fintech innovation and climate finance.",
          "Creating scalable models that balance environmental responsibility with inclusive economic growth."
        ]
      },
      whoWillBeInRoom: {
        title: "Who will be in the room?",
        subtitle: "This closed-door dialogue will bring together 12 senior leaders representing:",
        participants: [
          "Former RBI Governors and Senior Policy Makers shaping India's financial regulatory framework.",
          "ESG and Sustainability Leaders from major financial institutions and fintech companies.",
          "Climate Finance Specialists and Impact Investors driving sustainable investment strategies.",
          "Technology Innovators developing green fintech solutions and carbon-neutral financial services."
        ]
      },
      agenda: {
        title: "Agenda",
        items: [
          { time: "4:30 PM - 4:40 PM", title: "Registration & Networking High Tea", icon: Calendar },
          { time: "4:40 - 4:50 PM", title: "Opening Remarks by Giakaa Capital", icon: Mic },
          { time: "4:50 - 5:00 PM", title: "Partner Introduction", icon: Users },
          { time: "5:00 - 5:40 PM", title: "Sustainability & Future Vision Discussion", icon: MessageSquare },
          { time: "5:40 - 5:50 PM", title: "Group Photo & Thankyou Note", icon: Camera },
          { time: "5:50 - 6:30 PM", title: "Networking & Refreshments", icon: Coffee }
        ]
      },
      whyAttend: {
        title: "Why Attend",
        points: [
          "Shape the national agenda for sustainable digital finance and contribute to policy development.",
          "Access exclusive insights from former regulators and sustainability leaders.",
          "Develop actionable strategies for integrating ESG principles into fintech operations.",
          "Lead the transformation toward India's sustainable financial ecosystem of the future."
        ]
      },
      strategicValue: {
        title: "Strategic Value for Participants",
        values: [
          "Visionary Leadership: Position your organization at the forefront of sustainable finance innovation.",
          "Policy Influence: Directly contribute to shaping regulatory frameworks for sustainable fintech.",
          "Market Differentiation: Develop competitive advantages through early ESG integration and sustainability focus.",
          "Global Recognition: Establish thought leadership in the rapidly growing sustainable finance sector."
        ]
      }
    }
  },

  // Roundtable 6 - Asset Allocators & Institutional Investors
  6: {
    slug: generateSlug("Asset Allocators, PE, Family Offices & Institutional Investors Shaping India's Fintech Future"),
    heroContent: {
      subtitle: '2025 Agenda',
      title: "Asset Allocators, PE, Family Offices & Institutional Investors Shaping India's Fintech Future",
      date: '9 October 2025',
      location: 'Trident Hotel, BKC, Mumbai',
      thumbnail: '/images/agenda/img_image1_1.png',
    },
    MainContent: {
      about: {
        title: "About",
        paragraphs: [
          "Institutional capital is playing an increasingly critical role in shaping India's fintech landscape. With family offices, private equity firms, and institutional investors deploying billions into the sector, their investment strategies and portfolio approaches are defining the future of financial innovation.",
          "This exclusive roundtable brings together leading asset allocators, PE partners, and family office principals to discuss investment themes, portfolio construction strategies, and the evolving landscape of fintech investments in India's dynamic market.",
          "The session will examine how institutional investors are adapting their investment strategies in response to market corrections, regulatory changes, and the evolving maturity of India's fintech ecosystem.",
          "Through detailed case studies and strategic discussions, participants will explore due diligence processes, risk management frameworks, and value creation strategies that are driving successful fintech investments.",
          "This high-level gathering provides a unique opportunity for institutional investors to align on market outlook, share investment intelligence, and identify collaborative opportunities in India's fintech sector."
        ]
      },
      objective: {
        title: "Objective",
        content: "To align institutional investment strategies, identify emerging fintech investment opportunities, and develop collaborative frameworks that accelerate the growth and maturation of India's fintech ecosystem."
      },
      discussionPillars: {
        title: "Discussion Pillars",
        pillars: [
          {
            title: "Investment Theme Identification",
            content: "Exploring emerging sectors, technologies, and business models that present attractive investment opportunities for institutional capital."
          },
          {
            title: "Due Diligence & Risk Management", 
            content: "Developing comprehensive frameworks for evaluating fintech investments, assessing regulatory risks, and managing portfolio exposure."
          },
          {
            title: "Value Creation & Portfolio Management",
            content: "Strategies for adding value to fintech investments through operational expertise, network connections, and strategic guidance."
          },
          {
            title: "Market Outlook & Capital Deployment",
            content: "Assessing market conditions, timing investment decisions, and optimizing capital allocation across different fintech segments and stages."
          }
        ]
      },
      intendedOutcomes: {
        title: "Intended Outcomes",
        subtitle: "By the close of this 90-minute discussion, participants will:",
        outcomes: [
          "Align on priority investment themes and sectors for the next 12-18 months.",
          "Develop enhanced due diligence frameworks and risk assessment methodologies.",
          "Identify potential co-investment opportunities and collaborative deal structures.",
          "Establish knowledge sharing mechanisms and market intelligence networks."
        ]
      },
      whyNow: {
        title: "Why does this matter now?",
        content: "India's fintech sector has reached a level of maturity where institutional capital is becoming the primary driver of growth and consolidation. With market corrections creating attractive entry points and regulatory clarity improving, institutional investors face a critical window to:",
        points: [
          "Deploy capital efficiently in a corrected market with more reasonable valuations.",
          "Shape the next phase of fintech evolution through strategic investments and guidance.",
          "Build diversified fintech portfolios that can deliver strong risk-adjusted returns."
        ]
      },
      whoWillBeInRoom: {
        title: "Who will be in the room?",
        subtitle: "This closed-door dialogue will bring together 12 senior leaders representing:",
        participants: [
          "Family Office Principals and Investment Committee members with significant fintech allocations.",
          "Private Equity Partners leading fintech investment strategies and portfolio management.",
          "Institutional Asset Allocators from pension funds, sovereign wealth funds, and endowments.",
          "Investment Advisory professionals specializing in fintech sector analysis and deal sourcing."
        ]
      },
      agenda: {
        title: "Agenda",
        items: [
          { time: "6:30 - 6:40 PM", title: "Registration & Networking High Tea", icon: Calendar },
          { time: "6:40 - 6:50 PM", title: "Opening Remarks by Giakaa Capital", icon: Mic },
          { time: "6:50 - 7:00 PM", title: "Partner Introduction", icon: Users },
          { time: "7:00 - 7:40 PM", title: "Investment Strategy Discussion", icon: MessageSquare },
          { time: "7:40 - 7:50 PM", title: "Group Photo & Thankyou Note", icon: Camera },
          { time: "7:50 - 8:30 PM", title: "Networking & Refreshments", icon: Coffee }
        ]
      },
      whyAttend: {
        title: "Why Attend",
        points: [
          "Access exclusive deal flow and investment opportunities from peer institutional investors.",
          "Gain market intelligence and sector insights from experienced fintech investors.",
          "Explore co-investment opportunities and collaborative deal structures.",
          "Develop relationships with key decision-makers managing significant fintech allocations."
        ]
      },
      strategicValue: {
        title: "Strategic Value for Participants",
        values: [
          "Deal Flow Enhancement: Access high-quality investment opportunities through peer network.",
          "Risk Mitigation: Share due diligence insights and risk assessment methodologies with experienced investors.",
          "Market Intelligence: Gain competitive intelligence on valuations, terms, and market trends.",
          "Portfolio Optimization: Learn from successful investment strategies and value creation approaches."
        ]
      }
    }
  }
};
// Usage Example:
// To get content for roundtable 1: roundtableContent[1]
// To get content for roundtable 5: roundtableContent[5]
// Access specific sections: roundtableContent[1].heroContent.title

const OverviewPage = () => {
  const params = useParams();
  const [loading, setLoading] = useState(false);
  const [content, setContent] = useState(null);
  const [showForm, setShowForm] = useState(false);

  const openForm = () => {
    setShowForm(true);
  };

  const closeForm = () => {
    setShowForm(false);
  };

useEffect(() => {
  if (!params.id) return;

  // Find the roundtable whose slug matches the URL param
  const roundtableData = Object.values(roundtableContent).find(
    (roundtable) => roundtable.slug === params.id
  );
  // console.log(roundtableData);
  if (roundtableData) {
    setContent(roundtableData);
  } else {
    setContent(null); // Optional: clear if no match found
  }
}, [params.slug]);


  const handleRequestInvite = async () => {
    setLoading(true);
    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 1000));
    setLoading(false);
    alert('Invitation request sent successfully!');
  };
  

  if (!content) {
    return <div> <Loader /> </div>;
  }

  return (
    <div className="flex flex-col justify-start items-center w-full bg-[#ffffff]">
      {/* Hero Section */}
      <Hero content={content.heroContent} onRequestInvite={handleRequestInvite} loading={loading} showForm={showForm} setShowForm={setShowForm} closeForm={closeForm} openForm={openForm} />

      {/* Main Content Section */}
      <MainContent tempData={content.MainContent} showForm={showForm} setShowForm={setShowForm} closeForm={closeForm} openForm={openForm} />

      {/* Banner */}
      <Banner />
    </div>
  );
};

export default OverviewPage;

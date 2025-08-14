'use client';
import React, { useState, useEffect } from 'react';
import { useParams } from 'next/navigation';
import Button from '@/components/ui/Button';
import Banner from '@/components/ui/Banner';
import Hero from '@/components/overview/Hero';
import MainContent from '@/components/overview/MainContent';
import Loader from '@/components/ui/Loader';

// Define the roundtable content data
const roundtableContent = {
  // Roundtable 1 - Financial Inclusion Through Digital Payments
  1: {
    heroContent: {
      subtitle: '2025 Agenda',
      title: 'Financial Inclusion Through Digital Payments: Reaching Bharat',
      date: '7 October 2025',
      location: 'Trident Hotel, BKC, Mumbai',
      thumbnail: '/images/agenda/img_image1_1.png',
    },
    MainContent: {
      overview: {
        title: 'Overview',
        paragraphs: [
          {
            text: 'India is witnessing an unprecedented digital payment revolution that is transforming how financial services reach the most underserved communities. With over 40% of global real-time payments happening in India, we are creating pathways for inclusive financial access that extends far beyond urban centers.',
            highlights: ['40% of global real-time payments happening in India', 'inclusive financial access'],
          },
          {
            text: "This roundtable brings together industry leaders, policymakers, and innovators to discuss strategies for bridging the digital divide and ensuring that every Indian, regardless of location or economic status, has access to secure, affordable, and user-friendly digital payment solutions.",
            highlights: ['bridging the digital divide', 'every Indian'],
          },
        ],
      },
      agenda: {
        title: 'Agenda',
        items: [
          { time: '4:30 - 4:40 PM', title: 'Registration & Networking High Tea', icon: '/images/agenda/vector.svg' },
          { time: '4:40 - 4:50 PM', title: 'Opening Remarks by Giakaa Capital', icon: '/images/agenda/vector2.svg' },
          { time: '4:50 - 5:00 PM', title: 'Partner Introduction', icon: '/images/agenda/vector3.svg' },
          { time: '5:00 - 5:40 PM', title: 'Discussion Points', icon: '/images/agenda/vector4.svg' },
          { time: '5:40 - 5:50 PM', title: 'Group Photo & Thankyou Note', icon: '/images/agenda/vector5.svg' },
          { time: '5:50 - 6:30 PM', title: 'Networking & Refreshments', icon: '/images/agenda/vector6.svg' },
        ],
      },
      keyTopics: {
        title: 'Key Topics',
        topics: [
          'What are the main barriers to digital payment adoption in rural and semi-urban India?',
          'How can vernacular language and offline features improve access to digital payments?',
          'What role do agents and local businesses play in expanding financial inclusion beyond metros?',
          "How should regulations evolve to boost trust, security, and innovation in Bharat's payment ecosystem?",
          'How can AI and interoperable systems help build scalable, user-friendly payment solutions for underserved areas?',
          'How can banks, fintechs, and government collaborate to deliver inclusive financial services across Bharat?',
        ],
      },
      callToAction: {
        title: 'Secure Your Invitation Today',
        buttonText: 'Request to Invite',
      },
    }
  },

  // Roundtable 2 - Fintech Valuations in 2025
  2: {
    heroContent: {
      subtitle: '2025 Agenda',
      title: 'Fintech Valuations in 2025: Navigating Market Corrections & Realistic Pricing',
      date: '7 October 2025',
      location: 'Trident Hotel, BKC, Mumbai',
      thumbnail: '/images/agenda/img_image1_1.png',
    },
    MainContent: {
      overview: {
        title: 'Overview',
        paragraphs: [
          {
            text: 'The fintech sector is experiencing a significant recalibration as market dynamics shift from growth-at-all-costs to sustainable profitability models. With global funding declining by 50% from peak levels, investors and entrepreneurs must navigate a new landscape of realistic valuations and disciplined capital allocation.',
            highlights: ['market dynamics shift', 'sustainable profitability models', '50% from peak levels'],
          },
          {
            text: "This exclusive roundtable brings together top VCs, fintech leaders, and financial experts to discuss valuation methodologies, market corrections, and strategies for building resilient fintech businesses that can thrive in both bull and bear markets.",
            highlights: ['valuation methodologies', 'resilient fintech businesses'],
          },
        ],
      },
      agenda: {
        title: 'Agenda',
        items: [
          { time: '6:30 - 6:40 PM', title: 'Registration & Networking High Tea', icon: '/images/agenda/vector.svg' },
          { time: '6:40 - 6:50 PM', title: 'Opening Remarks by Giakaa Capital', icon: '/images/agenda/vector2.svg' },
          { time: '6:50 - 7:00 PM', title: 'Partner Introduction', icon: '/images/agenda/vector3.svg' },
          { time: '7:00 - 7:40 PM', title: 'Valuation Discussion Points', icon: '/images/agenda/vector4.svg' },
          { time: '7:40 - 7:50 PM', title: 'Group Photo & Thankyou Note', icon: '/images/agenda/vector5.svg' },
          { time: '7:50 - 8:30 PM', title: 'Networking & Refreshments', icon: '/images/agenda/vector6.svg' },
        ],
      },
      keyTopics: {
        title: 'Key Topics',
        topics: [
          'How have fintech valuations changed in the post-pandemic market correction?',
          'What metrics do investors prioritize when evaluating fintech companies in 2025?',
          'How can fintech startups demonstrate sustainable unit economics and path to profitability?',
          'What are the key differences in valuation approaches across payments, lending, and insurtech sectors?',
          'How do regulatory changes and compliance costs impact fintech valuations?',
          'What strategies can help fintech companies weather market volatility and secure growth capital?',
        ],
      },
      callToAction: {
        title: 'Secure Your Invitation Today',
        buttonText: 'Request to Invite',
      },
    }
  },

  // Roundtable 3 - India Stack Opportunities
  3: {
    heroContent: {
      subtitle: '2025 Agenda',
      title: "India Stack Opportunities: Building on UPI's $990B Market Potential",
      date: '8 October 2025',
      location: 'Trident Hotel, BKC, Mumbai',
      thumbnail: '/images/agenda/img_image1_1.png',
    },
    MainContent: {
      overview: {
        title: 'Overview',
        paragraphs: [
          {
            text: 'India Stack has revolutionized digital infrastructure, with UPI processing over $990 billion in transactions annually. This digital public infrastructure represents one of the most successful fintech ecosystems globally, creating unprecedented opportunities for innovation and financial inclusion.',
            highlights: ['$990 billion in transactions annually', 'digital public infrastructure'],
          },
          {
            text: "Join industry pioneers and policymakers as we explore the next frontier of India Stack innovation, discussing opportunities in credit, insurance, investment, and cross-border payments while building on the foundation of Aadhaar, UPI, and Account Aggregator frameworks.",
            highlights: ['next frontier of India Stack innovation', 'Account Aggregator frameworks'],
          },
        ],
      },
      agenda: {
        title: 'Agenda',
        items: [
          { time: '4:30 - 4:40 PM', title: 'Registration & Networking High Tea', icon: '/images/agenda/vector.svg' },
          { time: '4:40 - 4:50 PM', title: 'Opening Remarks by Giakaa Capital', icon: '/images/agenda/vector2.svg' },
          { time: '4:50 - 5:00 PM', title: 'Partner Introduction', icon: '/images/agenda/vector3.svg' },
          { time: '5:00 - 5:40 PM', title: 'India Stack Discussion Points', icon: '/images/agenda/vector4.svg' },
          { time: '5:40 - 5:50 PM', title: 'Group Photo & Thankyou Note', icon: '/images/agenda/vector5.svg' },
          { time: '5:50 - 6:30 PM', title: 'Networking & Refreshments', icon: '/images/agenda/vector6.svg' },
        ],
      },
      keyTopics: {
        title: 'Key Topics',
        topics: [
          'How can businesses leverage Account Aggregator for innovative financial products?',
          'What opportunities exist in building credit solutions on top of India Stack?',
          'How can UPI be extended for international payments and cross-border commerce?',
          'What role will CBDC play in the future of India Stack ecosystem?',
          'How can insurance and investment products be integrated with digital identity infrastructure?',
          'What are the emerging use cases beyond payments in the India Stack framework?',
        ],
      },
      callToAction: {
        title: 'Secure Your Invitation Today',
        buttonText: 'Request to Invite',
      },
    }
  },

  // Roundtable 4 - Bank-Fintech Partnerships
  4: {
    heroContent: {
      subtitle: '2025 Agenda',
      title: 'Bank-Fintech Partnerships: Creating Win-Win Collaboration Models',
      date: '8 October 2025',
      location: 'Trident Hotel, BKC, Mumbai',
      thumbnail: '/images/agenda/img_image1_1.png',
    },
    MainContent: {
      overview: {
        title: 'Overview',
        paragraphs: [
          {
            text: 'The relationship between traditional banks and fintech companies has evolved from competition to collaboration, creating powerful synergies that combine banking infrastructure with innovative technology. These partnerships are reshaping financial services delivery and customer experience.',
            highlights: ['evolved from competition to collaboration', 'powerful synergies'],
          },
          {
            text: "This roundtable explores successful partnership models, regulatory frameworks, and strategies for creating mutually beneficial relationships that accelerate financial innovation while maintaining regulatory compliance and risk management standards.",
            highlights: ['successful partnership models', 'mutually beneficial relationships'],
          },
        ],
      },
      agenda: {
        title: 'Agenda',
        items: [
          { time: '6:30 - 6:40 PM', title: 'Registration & Networking High Tea', icon: '/images/agenda/vector.svg' },
          { time: '6:40 - 6:50 PM', title: 'Opening Remarks by Giakaa Capital', icon: '/images/agenda/vector2.svg' },
          { time: '6:50 - 7:00 PM', title: 'Partner Introduction', icon: '/images/agenda/vector3.svg' },
          { time: '7:00 - 7:40 PM', title: 'Partnership Strategy Discussion', icon: '/images/agenda/vector4.svg' },
          { time: '7:40 - 7:50 PM', title: 'Group Photo & Thankyou Note', icon: '/images/agenda/vector5.svg' },
          { time: '7:50 - 8:30 PM', title: 'Networking & Refreshments', icon: '/images/agenda/vector6.svg' },
        ],
      },
      keyTopics: {
        title: 'Key Topics',
        topics: [
          'What are the most successful bank-fintech partnership models in India?',
          'How can banks and fintechs align on risk management and regulatory compliance?',
          'What challenges exist in integrating legacy banking systems with fintech solutions?',
          'How do revenue-sharing models work in bank-fintech collaborations?',
          'What role does data sharing and API integration play in successful partnerships?',
          'How can partnerships accelerate digital transformation for traditional banks?',
        ],
      },
      callToAction: {
        title: 'Secure Your Invitation Today',
        buttonText: 'Request to Invite',
      },
    }
  },

  // Roundtable 5 - Building India's Sustainable Digital Financial Ecosystem 2030
  5: {
    heroContent: {
      subtitle: '2025 Agenda',
      title: "Building India's Sustainable Digital Financial Ecosystem 2030: A Multi-Stakeholder Blueprint for Inclusive Growth",
      date: '9 October 2025',
      location: 'Trident Hotel, BKC, Mumbai',
      thumbnail: '/images/agenda/img_image1_1.png',
    },
    MainContent: {
      overview: {
        title: 'Overview',
        paragraphs: [
          {
            text: 'India is on the verge of a digital financial revolution, charting a course toward a more inclusive, resilient, and environmentally conscious economy by 2030. Through cutting-edge technologies and responsible innovation, we are unlocking new opportunities for seamless access, financial empowerment, and sustainable growth.',
            highlights: ['digital financial revolution', 'environmentally conscious economy by 2030'],
          },
          {
            text: "This flagship roundtable brings together former RBI governors, banking leaders, and fintech pioneers to create a comprehensive blueprint for India's sustainable digital financial future, addressing climate finance, ESG integration, and inclusive growth strategies.",
            highlights: ['comprehensive blueprint', 'sustainable digital financial future'],
          },
        ],
      },
      agenda: {
        title: 'Agenda',
        items: [
          { time: '4:30 - 4:40 PM', title: 'Registration & Networking High Tea', icon: '/images/agenda/vector.svg' },
          { time: '4:40 - 4:50 PM', title: 'Opening Remarks by Giakaa Capital', icon: '/images/agenda/vector2.svg' },
          { time: '4:50 - 5:00 PM', title: 'Partner Introduction', icon: '/images/agenda/vector3.svg' },
          { time: '5:00 - 5:40 PM', title: 'Sustainability & Future Vision Discussion', icon: '/images/agenda/vector4.svg' },
          { time: '5:40 - 5:50 PM', title: 'Group Photo & Thankyou Note', icon: '/images/agenda/vector5.svg' },
          { time: '5:50 - 6:30 PM', title: 'Networking & Refreshments', icon: '/images/agenda/vector6.svg' },
        ],
      },
      keyTopics: {
        title: 'Key Topics',
        topics: [
          'How can digital financial services contribute to climate action and sustainability goals?',
          'What role does ESG integration play in fintech product development and investment decisions?',
          'How can we ensure digital financial inclusion reaches the last mile by 2030?',
          'What policy frameworks are needed to support sustainable fintech innovation?',
          'How can green bonds and climate finance be digitized for broader accessibility?',
          'What are the key metrics for measuring the social and environmental impact of digital financial services?',
        ],
      },
      callToAction: {
        title: 'Secure Your Invitation Today',
        buttonText: 'Request to Invite',
      },
    }
  },

  // Roundtable 6 - Asset Allocators & Institutional Investors
  6: {
    heroContent: {
      subtitle: '2025 Agenda',
      title: "Asset Allocators, PE, Family Offices & Institutional Investors Shaping India's Fintech Future",
      date: '9 October 2025',
      location: 'Trident Hotel, BKC, Mumbai',
      thumbnail: '/images/agenda/img_image1_1.png',
    },
    MainContent: {
      overview: {
        title: 'Overview',
        paragraphs: [
          {
            text: 'Institutional capital is playing an increasingly critical role in shaping India\'s fintech landscape. With family offices, private equity firms, and institutional investors deploying billions into the sector, their investment strategies and portfolio approaches are defining the future of financial innovation.',
            highlights: ['Institutional capital', 'deploying billions into the sector'],
          },
          {
            text: "This exclusive roundtable brings together leading asset allocators, PE partners, and family office principals to discuss investment themes, portfolio construction strategies, and the evolving landscape of fintech investments in India's dynamic market.",
            highlights: ['leading asset allocators', 'investment themes'],
          },
        ],
      },
      agenda: {
        title: 'Agenda',
        items: [
          { time: '6:30 - 6:40 PM', title: 'Registration & Networking High Tea', icon: '/images/agenda/vector.svg' },
          { time: '6:40 - 6:50 PM', title: 'Opening Remarks by Giakaa Capital', icon: '/images/agenda/vector2.svg' },
          { time: '6:50 - 7:00 PM', title: 'Partner Introduction', icon: '/images/agenda/vector3.svg' },
          { time: '7:00 - 7:40 PM', title: 'Investment Strategy Discussion', icon: '/images/agenda/vector4.svg' },
          { time: '7:40 - 7:50 PM', title: 'Group Photo & Thankyou Note', icon: '/images/agenda/vector5.svg' },
          { time: '7:50 - 8:30 PM', title: 'Networking & Refreshments', icon: '/images/agenda/vector6.svg' },
        ],
      },
      keyTopics: {
        title: 'Key Topics',
        topics: [
          'What are the key investment themes driving institutional capital allocation in Indian fintech?',
          'How do family offices approach fintech investments differently from traditional VCs?',
          'What due diligence processes are most critical when evaluating fintech opportunities?',
          'How are institutional investors adapting to changing market conditions and valuations?',
          'What role do ESG factors play in fintech investment decisions for institutional capital?',
          'How can fintech companies better position themselves to attract institutional investment?',
        ],
      },
      callToAction: {
        title: 'Secure Your Invitation Today',
        buttonText: 'Request to Invite',
      },
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

  useEffect(() => {
    // Get the roundtable content based on the URL parameter
    const roundtableId = params.id;
    const roundtableData = roundtableContent[roundtableId];
    
    if (roundtableData) {
      setContent(roundtableData);
    }
  }, [params.id]);

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
      <Hero content={content.heroContent} onRequestInvite={handleRequestInvite} loading={loading} />
      
      {/* Main Content Section */}
      <MainContent data={content.MainContent} />
      
      {/* Banner */}
      <Banner />
    </div>
  );
};

export default OverviewPage;

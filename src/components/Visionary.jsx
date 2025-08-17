'use client';
import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import Button from './ui/Button';
import { motion, AnimatePresence } from 'framer-motion';

// Data for the speakers. You can easily add, remove, or modify speakers here.
const speakersData = [
  // Original speakers
  {
    name: 'B. Shanker Jaiswal',
    title: 'Joint CP, Technology & Project Implementation and Licensing in Delhi Police',
    imageUrl: '/images/Rectangle 160878-1.png',
  },
  {
    name: 'Arvind Kumar',
    title: 'Director General, Software Technology Parks of India (STPI)',
    imageUrl: '/images/img.png',
  },
  {
    name: 'Ashima Batra IRS',
    title: 'Additional Director, Financial Intelligence Unit India',
    imageUrl: '/images/img-1.png',
  },
  {
    name: 'Suresh Khadakbhavi',
    title: 'CEO, Digi Yatra Foundation',
    imageUrl: '/images/img-2.png',
  },
  {
    name: 'Sandeep Nailwal',
    title: 'Co-Founder, Polygon Labs | Founder, Blockchain for Impact (BFI)',
    imageUrl: '/images/Rectangle 1051.png',
  },
  {
    name: 'Golok Kumar Simli',
    title: 'Principal Advisor & CTO Passport Seva Programme, Ministry of External Affairs, Government of India',
    imageUrl: '/images/img-3.png',
  },
  {
    name: 'Dr. Satya N Gupta',
    title: 'NGNguru, Chairman - Blockchain For Productivity Forum (BPF)',
    imageUrl: '/images/KMM_5236.png',
  },
  {
    name: 'Nitin Mishra',
    title: 'Chief Technology Officer, Open Network for Digital Commerce (ONDC)',
    imageUrl: '/images/Rectangle 160878.png',
  },
  // Additional speakers from the document
  {
    name: "Evan Luthra",
    title: "General Partner, KOL Capital",
    imageUrl: "/images/pastspeaker/evan.png",
  },
  {
    name: "Ahmad Al-Mahmood",
    title: "Strategic Planning  & Excellence Advisor",
    imageUrl: "/images/speaker/ahmad.png",
  },
  {
    name: "Ayman Alawadhi",
    title: "Group Managing Director, The Corporate Group",
    imageUrl: "/images/speaker/ayman.png",
  },
  {
    name: "Seyed Mohammed Siam Hosseini",
    title: "Founder & CEO, Maincore AI",
    imageUrl: "/images/speaker/seyed.png",
  },
  {
    name: "Dmitrii Dubkov",
    title: "Head of Growth, Neoma Ventures",
    imageUrl: "/images/speaker/dmitrii.png",
  },
  {
    name: "Sofia Kostiunina",
    title: "Managing Director, 100VP",
    imageUrl: "/images/speaker/sofia.png",
  },
  {
    name: "Nabil Arnous",
    title: "Executive Director – Commercial, RAK Digital Assets Oasis Freezone Government Authority",
    imageUrl: "/images/speaker/nabil.png",
  },
  {
    name: "Ksenia Babochkina",
    title: "Chief Business Development Officer (CBDO), AlphaBerry Capital",
    imageUrl: "/images/speaker/ksenia.png",
  },
  {
    name: "Aya",
    title: "Founder, Azintafy",
    imageUrl: "/images/speaker/aya.png",
  },
  {
    name: "Maryna Barysheva",
    title: "CEO, LKI Consulting",
    imageUrl: "/images/speaker/maryna.png",
  },
  {
    name: "Kamila Michalkiewicz",
    title: "Co-Founder and CEO, Most Capital Connections",
    imageUrl: "/images/speaker/kamila.png",
  },
  {
    name: "Amira Soliman",
    title: "CEO & Co-founder, Time Guardian",
    imageUrl: "/images/speaker/amira.png",
  },
  {
    name: "Laura K. Inamedinova",
    title: "Chief Global Ecosystem Officer, Gate.io",
    imageUrl: "/images/pastspeaker/laura.png",
  },
  {
    name: "Evgeny Filichkin",
    title: "Managing Director, AlphaBerry Capital",
    imageUrl: "/images/speaker/evgeny.png",
  },
  {
    name: "Michael Clare",
    title: "Head of Digital Assets and Fintech Operations, Liongate Bahamas Limited",
    imageUrl: "/images/speaker/michaelc.png",
  },
  {
    name: "Dr. Wale j Daramola,",
    title: "Founder, DiFiMeta.",
    imageUrl: "/images/speaker/wale.png",
  },
  {
    name: "Armands Murnieks",
    title: "Founder & CEO | Investor | RWA Innovator",
    imageUrl: "/images/speaker/armands.png",
  },
  {
    name: "Shailesh Kunnath",
    title: "Founder, Masary Capital",
    imageUrl: "/images/speaker/shailesh.png",
  },
  {
    name: "Beka Tchulukhadze",
    title: "CEO, FU Capital",
    imageUrl: "/images/speaker/beka.png",
  },
  {
    name: "Artak Seyranyan",
    title: "Deal Flow Manager, ChainGPT Pad",
    imageUrl: "/images/speaker/artak.png",
  },
  {
    name: "Fefe Demeny",
    title: "Crypto Investor & Trader, Crypto Banter",
    imageUrl: "/images/speaker/fife.PNG",
  },
  {
    name: "Matt Cepulis",
    title: "CEO, Luvkaizen",
    imageUrl: "/images/speaker/matas.jpg",
  },
  {
    name: "Michael Nicklas",
    title: "Managing Partner, Valor Capital Group",
    imageUrl: "/images/speaker/michael.jpg",
  },
  {
    name: "Tzvi Lev",
    title: "CEO, AYA Strategic",
    imageUrl: "/images/speaker/tzvi.jpeg",
  },
  {
    name: "Mr.Sudeep Saxena",
    title: "Co Founder, Coin Gabbar",
    imageUrl: "/images/speaker/sudeep.png",
  },
  {
    name: "Ruan Botha",
    title: "Co-Founder, Provenance Compliance",
    imageUrl: "/images/speaker/ruan.jpg",
  },
  {
    name: "Ling Qing Meng",
    title: "CEO, Lucia Protocol",
    imageUrl: "/images/speaker/ling.png",
  },
  {
    name: "Cris D. Tran",
    title: "Co-founder, MoneyFi",
    imageUrl: "/images/speaker/crisd.jpg",
  },
  {
    name: "Tomas Martunas",
    title: "Unicorn Builder / AI & Web3 Investor, WhiteBridge AI / ZenCapital",
    imageUrl: "/images/speaker/tomas.jpeg",
  },
  {
    name: "Martin Wichmann",
    title: "CEO, Kvarn Capital",
    imageUrl: "/images/speaker/martin.png",
  },
  {
    name: "Silvia Mogas",
    title: "CEO & Founder, BMBWeb3 Ventures | Blockchain Marketing Boutique",
    imageUrl: "/images/speaker/silvia.jpg",
  },
  {
    name: "Gerald Chenyi",
    title: "Founder, Mobile Wallet Incorporated",
    imageUrl: "/images/speaker/gen.jpg",
  },
  {
    name: "Alisa Serebrianyk",
    title: "General Partner, Infodriver Capital",
    imageUrl: "/images/speaker/alisa.jpeg",
  },
  {
    name: "Milentina Marcus",
    title: "Romanian Community Ambassador for Sustainable Investment and Innovation",
    imageUrl: "/images/speaker/Milentina.jpg",
  },
  {
    name: "Dr. Adel ElMessiry",
    title: "Co-Founder, Lussa/AIVP/AlphaFin",
    imageUrl: "/images/speaker/adel.jpeg",
  },
  {
    name: "Wesley Russon",
    title: "COO, Outline Investment",
    imageUrl: "/images/speaker/wasley.jpeg",
  },
  {
    name: "Jeff Cafolla",
    title: "Founder, Earned Network",
    imageUrl: "/images/speaker/jeff.jpg",
  },
  {
    name: "Mariano Rubinstein",
    title: "Co-Founder & CEO, Sura Gaming | Sura Ventures",
    imageUrl: "/images/speaker/mariano.jpg",
  },
  {
    name: "Igor Bershadsky",
    title: "Co-Founder, Phron AI",
    imageUrl: "/images/speaker/igor.jpg",
  },
  {
    name: "Nadim Alain Souss",
    title: "Co-Founder, Why Protocol",
    imageUrl: "/images/speaker/nadim.jpg",
  },
  {
    name: "Animositas (Ani)",
    title: "CEO, Lizard Labs",
    imageUrl: "/images/speaker/ani.jpg",
  },
  {
    name: "Chris James Murphy",
    title: "Co-Founder, Klink Finance",
    imageUrl: "/images/speaker/chris.jpeg",
  },
  {
    name: "Jan Švach",
    title: "Portfolio Manager, Black Alpha Capital",
    imageUrl: "/images/speaker/svach.jpeg",
  },
  {
    name: "Robbie Jeo",
    title: "CEO, Kommunitas",
    imageUrl: "/images/speaker/robbbie.png",
  },
  {
    name: "Chirag Mehta",
    title: "Head Institutional Partnerships and Strategic Deals, Hedgit",
    imageUrl: "/images/pastspeaker/chiragmeh.png",
  },
  {
    name: "Mona Tiesler",
    title: "Head of Investments, tokentus VC | Venture Partner, Edge Capital",
    imageUrl: "/images/speaker/mona.jpg",
  },
  {
    name: "Benedek Orban",
    title: "Head of Ecosystem, CV VC",
    imageUrl: "/images/speaker/benedek.jpg",
  },
  {
    name: "Petro Yanytskyi",
    title: "Senior Investment Analyst, Monolith",
    imageUrl: "/images/speaker/petro.jpg",
  },
  {
    name: "Patrick Martin",
    title: "Managing Partner + Head of Strategy, EMF Family Office + Uphold.com",
    imageUrl: "/images/speaker/patrick.jpg",
  },
  {
    name: "Sasha Mai",
    title: "Co-Founder, RISE",
    imageUrl: "/images/speaker/sasha.jpg",
  },
  {
    name: "Ana Y",
    title: "COO, AlphaStack Ventures",
    imageUrl: "/images/speaker/ana.jpg",
  },
  {
    name: "Hardeep Singh Mehta",
    title: "Partner, Rosato Ventures",
    imageUrl: "/images/speaker/hardeep.jpg",
  },
  {
    name: "Joydeep Mondal",
    title: "Founder, Terra Forum | Alumni - Global Entrepreneur Programme, United Kingdom Government",
    imageUrl: "/images/speaker/joydeep.jpg",
  },
  {
    name: "Megan Nilsson",
    title: "Founder, Crypto Megan",
    imageUrl: "/images/speaker/megan.jpg",
  },
  {
    name: "Jake Lee",
    title: "Founder and CEO, Magnet",
    imageUrl: "/images/speaker/jake.png",
  },
  {
    name: "Daniel Malinovski",
    title: "Co-Founder & CEO, Simplicity Group",
    imageUrl: "/images/speaker/daniel.jpg",
  },
  {
    name: "Mariangel Garcia",
    title: "Chief Marketing Officer, Mintlayer",
    imageUrl: "/images/speaker/Mariangle.jpg",
  },
  {
    name: "Yeo Gan Peng",
    title: "CEO / Co-Founder, PeerHive",
    imageUrl: "/images/speaker/yeo.jpg",
  },
  {
    name: "Bob Vosalik",
    title: "Founder and CIO, 319 Capital",
    imageUrl: "/images/speaker/bob.jpg",
  },
  {
    name: "Vlad Svitanko",
    title: "Founder, Cryptorsy",
    imageUrl: "/images/speaker/vald.png",
  },
  {
    name: "Katherine Dowling",
    title: "General Counsel & Chief Compliance Officer, Bitwise Asset Management",
    imageUrl: "/images/speaker/kath.jpg",
  },
  {
    name: "Abhay Mishra",
    title: "Founder & CEO, Monet Work",
    imageUrl: "/images/speaker/abhay.jpg",
  },
  {
    name: "Nadine Wilke",
    title: "Co-Founder & CGO, Particula",
    imageUrl: "/images/speaker/nadine.jpg",
  },
  {
    name: "Ms. Laura Estefanía",
    title: "CEO & Founder, Conquista PR",
    imageUrl: "/images/speaker/lauraes.jpg",
  },
  {
    name: "Parker Tagtmeier",
    title: "Co-Founder and CMO, 3VO",
    imageUrl: "/images/speaker/parker.jpg",
  },
  {
    name: "Adrià Roig Bravo",
    title: "CEO & Founder, FOHLE Finance",
    imageUrl: "/images/speaker/adria.jpg",
  },
  {
    name: "Iris Meng",
    title: "Co-Founder, Investment Officer, Jadeite Family Office",
    imageUrl: "/images/speaker/iris.jpg",
  },
  {
    name: "Rupesh Pednekar",
    title: "Partner, ALTINAD Capital",
    imageUrl: "/images/speaker/rupesh.jpg",
  },
  {
    name: "Benjamin James",
    title: "Founder, 404 (Bittensor Subnet 17)",
    imageUrl: "/images/speaker/benj.jpeg",
  },
  {
    name: "Martin de Rijke",
    title: "Head of Growth, Maple Finance",
    imageUrl: "/images/speaker/martin.jpg",
  },
  {
    name: "Renee Francis",
    title: "Founder & Director, Take3",
    imageUrl: "/images/speaker/renee.jpg",
  },
  {
    name: "Gary Yang",
    title: "Founding Partner, Eureka Capital and Skysaga Capital",
    imageUrl: "/images/speaker/gary.jpg",
  },
  {
    name: "Ismael Hishon-Rezaizadeh",
    title: "Co-Founder & CEO at Lagrange",
    imageUrl: "/images/speaker/hison.webp",
  },
  {
    name: "Dr. Bassel Assaad",
    title: "Founder & CEO, Tracee",
    imageUrl: "/images/speaker/bassel.jpg",
  },
  {
    name: "John Bui",
    title: "Venture Partner, Trive Digital",
    imageUrl: "/images/speaker/john.jpg",
  },
  {
    name: "Dr. Claus Skaaning",
    title: "CEO and Co-Founder, DigiShares",
    imageUrl: "/images/speaker/digi.jpg",
  },
  {
    name: "Radoslav Poljasevic",
    title: "Director Sales",
    imageUrl: "/images/speaker/kaiko.jpg",
  },
  {
    name: "Andrew Vranjes",
    title: "Chief Revenue Officer, Blockdaemon",
    imageUrl: "/images/speaker/andrew.jpg",
  },
  {
    name: "Tiffany Chang",
    title: "Investment VP, Gate Ventures",
    imageUrl: "/images/speaker/tiffany.jpg",
  },
  {
    name: "Vignesh Keserala Raja",
    title: "Founding Partner, Amigoo Ventures",
    imageUrl: "/images/speaker/vignesh.jpg",
  },
  {
    name: "Marc Taverner",
    title: "Chief Executive Officer | Co-Founder, XEROF",
    imageUrl: "/images/speaker/marc.webp",
  },
  {
    name: "Zsófia Szathmáry",
    title: "Chief Innovation Officer, Head of Business Development, InsightX",
    imageUrl: "/images/speaker/zsof.jpg",
  },
  {
    name: "Milan Jandik",
    title: "Founder & CEO, Frictionless Network",
    imageUrl: "/images/speaker/milan.jpg",
  },
  {
    name: "Evgen Verzun",
    title: "Founder, Kaizen.Finance",
    imageUrl: "/images/speaker/evgen.jpg",
  },
  {
    name: "Faraj Abutalibov",
    title: "Co-founder & CBDO of CrossCurve by Eywa, Founder of Ace Capital & Crypto Executives",
    imageUrl: "/images/speaker/faraz.jpg",
  },
  {
    name: "Mark Magliocco",
    title: "Founder, Lexie Crypto",
    imageUrl: "/images/speaker/mark.jpg",
  },
  {
    name: "Robert Hirsch",
    title: "CEO, Continuum Protocol Co. | Founder, ZKalyx",
    imageUrl: "/images/speaker/robert.jpg",
  },
  {
    name: "Henry James",
    title: "General Partner, Rolle Capital",
    imageUrl: "/images/speaker/henry.png",
  },
  {
    name: "Josh Roizen",
    title: "Founder & CEO, The GG Company",
    imageUrl: "/images/speaker/josh.jpg",
  },
  {
    name: "Le Zhuo",
    title: "Vice President, Amber Group",
    imageUrl: "/images/speaker/le.jpg",
  },
  {
    name: "Aly Madhavji",
    title: "Managing Partner, Blockchain Founders Fund",
    imageUrl: "/images/speaker/aly.webp",
  },
  {
    name: "Gaspard Bonnot",
    title: "Founder & CEO, DIV Protocol",
    imageUrl: "/images/speaker/gaspard.jpg",
  },
  {
    name: "Alexis Sirkia",
    title: "Chairman, Yellow",
    imageUrl: "/images/speaker/alex.jpg",
  },
  {
    name: "Max Kuersteiner",
    title: "Head of BD and product, Decubate / Decubate Technologies",
    imageUrl: "/images/speaker/maxk.jpg",
  },
  {
    name: "Ashish Baphana",
    title: "Co Founder, Law Blocks",
    imageUrl: "/images/speaker/ashishbhpana.png",
  },
  {
    name: "Sadri Sali LL.M., CCAS",
    title: "Managing Partner, Sali Law Group",
    imageUrl: "/images/speaker/sadri.jpg",
  },
  {
    name: "Mantas (Matt) Jalincas",
    title: "Co-founder / CEO, Spirex.io",
    imageUrl: "/images/speaker/mantas.jpg",
  },
  {
    name: "Cole Kennelly",
    title: "Founder & CEO, Volmex Labs",
    imageUrl: "/images/speaker/cole.jpg",
  },
  {
    name: "Anastasia Lukach",
    title: "CEO, Marsbase",
    imageUrl: "/images/speaker/anast.jpg",
  },
  {
    name: "Samuel Macintyre",
    title: "CEO & Co-Founder, Zenith Labs",
    imageUrl: "/images/speaker/samuel.jpg",
  },
  {
    name: "Steve Wood",
    title: "Founder/CEO, Earnscape",
    imageUrl: "/images/speaker/steve.jpg",
  },
  {
    name: "Adrien Stern",
    title: "Founder & CEO, Reveel",
    imageUrl: "/images/speaker/adrien.jpg",
  },
  {
    name: "Andrés Felipe Fonseca Duque",
    title: "Cofounder - COO, VIIO",
    imageUrl: "/images/speaker/andres.jpg",
  },
  {
    name: "Jasvir Dhillon",
    title: "CEO & Co-founder, Penomo",
    imageUrl: "/images/speaker/jasvir.jpg",
  },
  {
    name: "Mihai Mosneanu",
    title: "Capital Markets Chief, Penomo | ex-Executive Director, JPMorgan",
    imageUrl: "/images/speaker/mahi.jpg",
  },
  {
    name: "Duncan Murray",
    title: "Co-Founder, OnTac",
    imageUrl: "/images/speaker/duncan.jpg",
  },
  {
    name: "Heston Harper",
    title: "CEO & Founder, GIGATONS",
    imageUrl: "/images/speaker/heston.jpg",
  },
  {
    name: "Illia Pashkov",
    title: "CEO, SINT",
    imageUrl: "/images/speaker/sint.jpg",
  },
  {
    name: "Akshay Aggarwal",
    title: "Founder & CEO, Blockchained India",
    imageUrl: "/images/speaker/akshay.jpg",
  },
  {
    name: "Ruchir Punjabi",
    title: "Co-founder & CEO, ReNRG",
    imageUrl: "/images/speaker/ruchir.png",
  },
  {
    name: "Krishnendu Chatterjee",
    title: "Co-founder, CEO, XTrading",
    imageUrl: "/images/speaker/ksn.jpg",
  },
  {
    name: "Michael Gord",
    title: "Co-Founder & CEO, GDA Capital",
    imageUrl: "/images/speaker/michaelgord.jpg",
  },
  {
    name: "Mikael boshian",
    title: "CEO, SFTY.AI",
    imageUrl: "/images/speaker/mich.png",
  },
  {
    name: "Nawal Kishor",
    title: "Founder, Bepay",
    imageUrl: "/images/pastspeaker/nawal.png",
  },
  {
    name: "Nathaniel",
    title: "Co-founder & CEO, Manifest",
    imageUrl: "/images/speaker/natha.jpg",
  },
  {
    name: "Leena Khalil",
    title: "Partner, Key Capital",
    imageUrl: "/images/speaker/leena.png",
  },
  {
    name: "Aneri Merchant",
    title: "Investment Manager, XVC Tech",
    imageUrl: "/images/speaker/aneri.png",
  },
  {
    name: "Ulviyya Ahmadova",
    title: "Head of Business Development and Investment, Al Maktoum Aleh Tech",
    imageUrl: "/images/speaker/ulviyya.png",
  },
  {
    name: "Dariia Vasylieva",
    title: "Founder & GP GETVISION | FD CAPITAL CSO, Dubai Blockchain Centre",
    imageUrl: "/images/speaker/dariia.png",
  },
  {
    name: "Juliet Su",
    title: "Partner, NewTribe Capital",
    imageUrl: "/images/speaker/juliet.png",
  },
  {
    name: "Alexandra Khasirdzheva",
    title: "Web3 & Blockchain Investment Strategist, ex-Cointelegraph Accelerator",
    imageUrl: "/images/speaker/alexandra.png",
  },
  {
    name: "Mariya Spartalis",
    title: "Founder, Spartalis Capital",
    imageUrl: "/images/speaker/mariya.png",
  },
  {
    name: "Countessina Anna De bacci",
    title: "CEO, De Bacci capital",
    imageUrl: "/images/speaker/anna.png",
  },
  {
    name: "Amna Usman Chaudhry",
    title: "Financial Economist and Frontier Tech Strategist",
    imageUrl: "/images/speaker/amna.png",
  },
  {
    name: "Eva Oloumi",
    title: "Founder and CEO, Paradeigma",
    imageUrl: "/images/speaker/eva.png",
  },
  {
    name: "Cinderella AMAR",
    title: "Managing Partner, Glass Venture",
    imageUrl: "/images/speaker/cinderella.png",
  },
  {
    name: "Erin Grover",
    title: "Advisor, T8 Capital",
    imageUrl: "/images/speaker/erin.png",
  },
  {
    name: "Erica Badocco",
    title: "Founder and Legal Consultant, BLegal.ae",
    imageUrl: "/images/speaker/erica.png",
  },
  {
    name: "Kiana Saleh",
    title: "Head of Investment & Partnerships, 4Plus Ventures",
    imageUrl: "/images/speaker/kiana.png",
  },
  {
    name: "Genia Xasis",
    title: "Founder, Multiplyers",
    imageUrl: "/images/speaker/genia.png",
  },
  {
    name: "Sergey Sevantsyan",
    title: "Head of Information, Kanzz AI",
    imageUrl: "/images/speaker/sergey.png",
  },
  {
    name: "Dr. Bhaskar Dasgupta",
    title: "Chairman, Apex ME and India Boards",
    imageUrl: "/images/speaker/bhasker.png",
  },
  {
    name: "Max Lighter",
    title: "General Manager, XT.COM",
    imageUrl: "/images/speaker/max.png",
  },
  {
    name: "Brendan James McKittrick",
    title: "Chief Executive Officer, Internet of Aviation",
    imageUrl: "/images/speaker/brendan.png",
  },
  {
    name: "Prof. Dr. Demir Bektic",
    title: "Head, Multi Asset Solutions, Commerzbank AG",
    imageUrl: "/images/speaker/demir.png",
  },
  {
    name: "Ralph Gebran",
    title: "Managing Partner, Onramp MENA",
    imageUrl: "/images/speaker/ralph.png",
  },
  {
    name: "Anton Golub",
    title: "CIO, FreedX",
    imageUrl: "/images/speaker/anton.png",
  },
  {
    name: "Barrister Rizwan Rasheed Siddiqui",
    title: "Managing Partner, Pin Legal Global",
    imageUrl: "/images/speaker/rizwan.png",
  },
  {
    name: "Count Andre Popov",
    title: "Managing Director & Partner, Princeton & Company",
    imageUrl: "/images/speaker/count.png",
  },
  {
    name: "Pranav Pradeep Agarwal",
    title: "Head of Investments, Foundership Ventures",
    imageUrl: "/images/speaker/pranav.png",
  },
  {
    name: "Abdhullah Meer",
    title: "Head of Strategy & Growth,  GELO",
    imageUrl: "/images/speaker/abdhullah.png",
  },
  {
    name: "Dr. Samiullah Khan",
    title: "CSO, Fakhruddin Holding",
    imageUrl: "/images/speaker/samiullah.png",
  },
  {
    name: "Michael Graham",
    title: "Head of Growth, Cryptorsy",
    imageUrl: "/images/speaker/mikee.png",
  },
  {
    name: "David Ajanjan",
    title: "CEO, Ridddec Technologys",
    imageUrl: "/images/speaker/david.png",
  },
  {
    name: "Jorge Carrasco",
    title: "Managing Director, Blockchain and Digital Assets, FTI Consulting",
    imageUrl: "/images/speaker/jorge.png",
  },
  {
    name: "Hussein ElSokkary",
    title: "Head of Wealth Management, Azimut UAE",
    imageUrl: "/images/speaker/hussein.png",
  },
  {
    name: "Mike Kirillov",
    title: "Financial advisor, COOP DAO",
    imageUrl: "/images/speaker/mike.png",
  },
  {
    name: "Gordon Einstein",
    title: "Founding Partner, CryptoLaw Partners",
    imageUrl: "/images/speaker/jordon.png",
  },
  {
    name: "Adrian Niculescu",
    title: "Chief Marketing Officer, TOMORROWerse Capital & TMRW Venture Network",
    imageUrl: "/images/speaker/adrian.png",
  },
  {
    name: "Icaro Avelar",
    title: "Head of Web3 Practice Division, Banks Legal Limited",
    imageUrl: "/images/speaker/icaro.png",
  },
  {
    name: "Eran Elhanani",
    title: "Founder & CEO, BullPerks",
    imageUrl: "/images/speaker/eran.png",
  },
  {
    name: "Sam Beni",
    title: "CEO, Platin VC",
    imageUrl: "/images/speaker/sam.png",
  },
  {
    name: "Amit Grover",
    title: "Managing Partner, Grover & Company",
    imageUrl: "/images/speaker/amit.png",
  },
  {
    name: "Oliver Von Wolff",
    title: "Founder & CEO, Helion Capital",
    imageUrl: "/images/speaker/oliver.png",
  },
  {
    name: "Amit Arora",
    title: "Head of Partnerships,  RAK Digital Asset Oasis",
    imageUrl: "/images/speaker/amita.png",
  },
  {
    name: "Shakeeb Nazeer",
    title: "Web3 Manager, Brands For Less Group",
    imageUrl: "/images/speaker/shakeeb.png",
  },
  {
    name: "Sheikh Muhammad Noman",
    title: "Founder & CEO, Pegasus Capital Investments | Halliday Forfaiting | Vrijednosnice Osijek Holding",
    imageUrl: "/images/speaker/sheikh.png",
  },
  {
    name: "Jakub Żurawiński",
    title: "Head of BD, MatterFi",
    imageUrl: "/images/speaker/jakub.png",
  },
  {
    name: "Michael Coyle",
    title: "Founder & CEO, Portl.xyz",
    imageUrl: "/images/speaker/micheal.png",
  },
  {
    name: "Jase Zhang",
    title: "Web3 Product Manager, Bybit",
    imageUrl: "/images/speaker/jase.png",
  },
  {
    name: "Badrinath Mutkule",
    title: "Founder & CEO, Soileum Network",
    imageUrl: "/images/speaker/badrinath.png",
  },
  {
    name: "Hany Ahmed Samir",
    title: "Entrepreneur, Mobitech Integrated Solutions & MobileMasr",
    imageUrl: "/images/speaker/hany.png",
  },
  {
    name: "Sergey Maslov",
    title: "Chief Technology Officer, Fintopio",
    imageUrl: "/images/speaker/sergeyy.png",
  },
  {
    name: "Kris Wadia",
    title: "CEO (MEA), Sullivan & Stanley (S&S)",
    imageUrl: "/images/speaker/kris.png",
  },
  {
    name: "Himanshu Maradiya",
    title: "Founder and Chairman, CIFDAQ",
    imageUrl: "/images/speaker/himanshu.png",
  },
  {
    name: "Ivan Zhila",
    title: "CMO, TinyTrader",
    imageUrl: "/images/speaker/ivan.png",
  },
  {
    name: "Umair Mehmood",
    title: "President, WePelicans Prospective",
    imageUrl: "/images/speaker/umiar.png",
  },
  {
    name: "Aleksandr Belov",
    title: "Founder, Coinstelegram Media & Fund",
    imageUrl: "/images/speaker/Aleksandr.png",
  },
  {
    name: "Oliver Meyer",
    title: "CEO, trendhub | ACYC",
    imageUrl: "/images/speaker/oliverr.png",
  },
  {
    name: "Juan D Orozco",
    title: "CEO, CRPTM",
    imageUrl: "/images/speaker/juan.png",
  },
  {
    name: "Nike Zames",
    title: "Founder & CEO, Holder House",
    imageUrl: "/images/speaker/nike.png",
  },
  {
    name: "Aly Z. Ramji",
    title: "Director, Mediapix Limited",
    imageUrl: "/images/speaker/aly.png",
  },
  {
    name: "Dr. Shambhu Pokharel",
    title: "GLOBAL CEO, CEO CLUB GLOBAL",
    imageUrl: "/images/speaker/sambhu.png",
  },
  {
    name: "Trey Jennings",
    title: "Gamified Music Platform, COMP Music",
    imageUrl: "/images/speaker/trey.png",
  },
  {
    name: "Timur Kudratov",
    title: "co-founder of Enlightened Minds Investments",
    imageUrl: "/images/speaker/timur.png",
  },
  {
    name: "Ivan Pierson",
    title: "Head of IR CrossFi",
    imageUrl: "/images/speaker/ivanp.png",
  },
  {
    name: "Girik Rajwani",
    title: "Founder/CEO, Quantum Edge IT",
    imageUrl: "/images/speaker/girik.png",
  },
  {
    name: "Robert MacDonald",
    title: "Chief Legal & Compliance Officer, Bybit",
    imageUrl: "/images/pastspeaker/robert.png",
  },
  {
    name: "Miko Matsumura",
    title: "Managing Partner gumi Cryptos Capital",
    imageUrl: "/images/pastspeaker/miko.png",
  },
  {
    name: "Rachel Pether",
    title: "Managing Director, 3iQ",
    imageUrl: "/images/pastspeaker/rachel.png",
  },
  {
    name: "Paula Tavangar",
    title: "Chief Investment Officer, Injaz Capital",
    imageUrl: "/images/pastspeaker/paula.png",
  },
  {
    name: "Maya Sherman",
    title: "Tech Literacy Co-Lead, GPAI | Senior Innovation Officer, Israel Embassy in India",
    imageUrl: "/images/pastspeaker/maya.png",
  },
  {
    name: "Devika Mittal",
    title: "Regional Head, Ava Labs",
    imageUrl: "/images/pastspeaker/devika.png",
  },
  {
    name: "Diksha Dutta",
    title: "Chief Growth Officer, soonami.io",
    imageUrl: "/images/pastspeaker/diksha.png",
  },
  {
    name: "Irene Umar",
    title: "Deputy Minister of Creative Economy, CEO & Co Founder of W3GG.IO",
    imageUrl: "/images/pastspeaker/irene.png",
  },
  {
    name: "Alex Nascimento",
    title: "Co-founder at 7MM Global and Faculty Member at UCLA",
    imageUrl: "/images/pastspeaker/alex.png",
  },
  {
    name: "Adam Vaziri",
    title: "CEO, Blockpass",
    imageUrl: "/images/pastspeaker/adam.png",
  },
  {
    name: "Brenton Naicker",
    title: "PRINCIPAL AND HEAD, GROWTH, AFRICA",
    imageUrl: "/images/pastspeaker/brenton.png",
  },
  {
    name: "Ashish Kumar Jain",
    title: "Chief Investment Officer, Kommunitas | General Partner, Giakaa Capital",
    imageUrl: "/images/pastspeaker/ashish.png",
  },
  {
    name: "Surya Kant",
    title: "Program Director, MeitY Startup Hub",
    imageUrl: "/images/pastspeaker/suryakant.png",
  },
  {
    name: "Dilip Chenoy",
    title: "Former Secretary General at Federation of Indian Chambers of Commerce and Industry FICCI Chairman - Bharat Web3 Association",
    imageUrl: "/images/pastspeaker/dilip.png",
  },
  {
    name: "Anuj Kumar Garg",
    title: "Vice President Blockchain Team, ZebPay",
    imageUrl: "/images/pastspeaker/anuj.png",
  },
  {
    name: "Brian Kuttikkat",
    title: "Country Director (India) at M2",
    imageUrl: "/images/pastspeaker/brian.png",
  },
  {
    name: "Kiran Mysore ",
    title: "Chief Public Policy Officer at CoinDCX",
    imageUrl: "/images/pastspeaker/kiran.png",
  },
  {
    name: "Sohan Lal Nautiyal",
    title: "Principal Consultant, Digital India Corporation",
    imageUrl: "/images/pastspeaker/sohanlal.png",
  },
  {
    name: "Bibin Babu",
    title: "Co Founder - Paycio",
    imageUrl: "/images/pastspeaker/bibin.png",
  },
  {
    name: "Amit Mehra",
    title: "Partner, Borderless Capital",
    imageUrl: "/images/pastspeaker/amit.png",
  },
  {
    name: "Praveen Thakur",
    title: "CTO, NORDEK and Chief Mentor, Genesis",
    imageUrl: "/images/pastspeaker/praveen.png",
  },
  {
    name: "Vikram Singh",
    title: "CEO, Antier Solutions",
    imageUrl: "/images/pastspeaker/vikram.png",
  },
  {
    name: "Pramod Mishra",
    title: "Blockchain Lab India Lead at PwC",
    imageUrl: "/images/pastspeaker/pramod.png",
  },
  {
    name: "Kalyanjit Hatibaruah",
    title: "Chairman, Flugelsoft Group of Companies",
    imageUrl: "/images/pastspeaker/kalyanjit.png",
  },
  {
    name: "Dr Anupam Tiwari",
    title: "Advisor(Cyber) ,o/o Principal Advisor, Ministry of Defence",
    imageUrl: "/images/pastspeaker/anupam.png",
  },
  {
    name: "Chandrasekhar Buddha",
    title: "Chief Coordinating Officer, All India Council for Technical Education (AICTE)",
    imageUrl: "/images/pastspeaker/chandrasheker.png",
  },
  {
    name: "Vikas Vaibhav",
    title: "Inspector General, Bihar at Indian Police Service",
    imageUrl: "/images/pastspeaker/vikashvaivab.png",
  },
  {
    name: "Saurabh Gupta",
    title: "Founder & CEO, VeriSmart.ai",
    imageUrl: "/images/pastspeaker/saurabh.png",
  },
  {
    name: "CA Aishwary Gupta",
    title: "Global Head of Payments and India Business Head at Polygon Labs",
    imageUrl: "/images/pastspeaker/aishwrya.png",
  },
  {
    name: "Karan Keswani",
    title: "CEO, BharatBox (The Sandbox)",
    imageUrl: "/images/pastspeaker/karan.png",
  },
  {
    name: "Rama Rao",
    title: "CEO & Co-Founder at Bloqcube Inc",
    imageUrl: "/images/pastspeaker/ramarao.png",
  },
  {
    name: "Ashima Batra",
    title: "Additional Director, Financial Intelligence Unit India",
    imageUrl: "/images/pastspeaker/ashima.png",
  },
  {
    name: "Dr. Satya N Gupta",
    title: "NGNguru, Chairman- Blockchain For Productivity Forum (BFPF)",
    imageUrl: "/images/pastspeaker/drsatya.png",
  },
  {
    name: "Naina Bhardwaj",
    title: "Manager, International Business Advisory",
    imageUrl: "/images/pastspeaker/naina.png",
  },
  {
    name: "Ashok Gupta",
    title: "Director STPI-Gurugram & CEO",
    imageUrl: "/images/pastspeaker/ashok.png",
  },
  {
    name: "Raj Kapoor",
    title: "Founder, IBA | Chairman, Global Alliance for Artificial Intelligence",
    imageUrl: "/images/pastspeaker/rajkap.png",
  },
  {
    name: "Prasanna Lohar",
    title: "CIO, Diamante Blockchain | CEO, BlockStack | Founder, India Blockchain Forum",
    imageUrl: "/images/pastspeaker/prasanna.png",
  },
  {
    name: "Rahul Kumar",
    title: "Founder, MuTerra | HIVE Representative, India",
    imageUrl: "/images/pastspeaker/rahul.png",
  },
  {
    name: "Habeeb Rahman",
    title: "Head of Business Operations, Koinpark Pvt Ltd",
    imageUrl: "/images/pastspeaker/habeeb.png",
  },
  {
    name: "Sukriti Govil",
    title: "Consultant, Emerging Technologies, ITE&C, Government of Telangana",
    imageUrl: "/images/pastspeaker/sukriti.png",
  },
  {
    name: "Amar Anand",
    title: "President, Auro Digital Inc.",
    imageUrl: "/images/pastspeaker/amar.png",
  },
  {
    name: "Sunil Kapadia",
    title: "Practice Head Blockchain, GrowthAXL",
    imageUrl: "/images/pastspeaker/sunil.png",
  },
  {
    name: "Sachin Kumar",
    title: "Founder, Jumbo Blockchain",
    imageUrl: "/images/pastspeaker/sachin.png",
  },
  {
    name: "Biplab Lenin",
    title: "Partner, Cyril Amarchand Mangaldas",
    imageUrl: "/images/pastspeaker/biplap.png",
  },
  {
    name: "Sunil Sharma",
    title: "Founder, Coingape",
    imageUrl: "/images/pastspeaker/sunilsharma.png",
  },
  {
    name: "Ivan Ivanov",
    title: "Founding Partner, Uvecon VC",
    imageUrl: "/images/pastspeaker/ivan.png",
  },
  {
    name: "Shri Amit Thaker",
    title: "MLA, Vejalpur Assembly",
    imageUrl: "/images/pastspeaker/amitthaker.png",
  },
  {
    name: "Dr. Sunil R Parekh",
    title: "Founding Curator AGS, World Economic Forum Advisor, Zydus Group",
    imageUrl: "/images/pastspeaker/sunilr.png",
  },
  {
    name: "Shri Dileep Sanghani",
    title: "Indian farmers fertiliser cooperative (IFFCO)",
    imageUrl: "/images/pastspeaker/dileep.png",
  },
  {
    name: "Pranav Pandya",
    title: "Chairman, GESIA IT Association",
    imageUrl: "/images/pastspeaker/pranav.png",
  },
  {
    name: "Shri Dinesh Sithar",
    title: "CEO, GUJCOMASOL",
    imageUrl: "/images/pastspeaker/dinesh.png",
  },
  {
    name: "Rajesh Kumar Gupta",
    title: "Director, UIDAI, Gujarat State Office",
    imageUrl: "/images/pastspeaker/rajesh.png",
  },
  {
    name: "Karthik Anantharaman",
    title: "Vice President - Apollo Hospital",
    imageUrl: "/images/pastspeaker/karthik.png",
  },
  {
    name: "Shri M. Nagarajan, IAS",
    title: "Collector and District Magistrate, Mehsana",
    imageUrl: "/images/pastspeaker/nagranjan.png",
  },
  {
    name: "Dr. Amit Raj",
    title: "Managing Director, Plexus Medcare",
    imageUrl: "/images/pastspeaker/amitraj.png",
  },
  {
    name: "Kamlesh Nagware",
    title: "Co Founder, FSV Capital",
    imageUrl: "/images/pastspeaker/kamlesh.png",
  },
  {
    name: "Indrajeet Mitra",
    title: "Managing Director, Gateway Group",
    imageUrl: "/images/pastspeaker/indrajeet.png",
  },
  {
    name: "Rohit Verma",
    title: "Director, CEO, Metaverse 911",
    imageUrl: "/images/pastspeaker/rohit.png",
  },
  {
    name: "Dhanraj Dadhich",
    title: "Founder, Astrolgorim Technologies LLP, USA",
    imageUrl: "/images/pastspeaker/dhanraj.png",
  },
  {
    name: "Srini Ravi",
    title: "Chief Strategy Officer, Rubix Network",
    imageUrl: "/images/pastspeaker/srini.png",
  },
  {
    name: "Vinod Kumar",
    title: "Founder and CTO, Cypher Blockchain",
    imageUrl: "/images/pastspeaker/vinod.png",
  },
  {
    name: "Joseph Joshy",
    title: "CTO, IFSCA",
    imageUrl: "/images/pastspeaker/joseph.png",
  },
  {
    name: "Milapsinh Jadeja",
    title: "Founder, Iroller Capital",
    imageUrl: "/images/pastspeaker/milapsingh.png",
  },
  {
    name: "Srinivas Rao Sureddi",
    title: "CEO, GUSEC",
    imageUrl: "/images/pastspeaker/srinivas.png",
  },
  {
    name: "Mehul Shah",
    title: "Co-Founder, IVY Growth Associates",
    imageUrl: "/images/pastspeaker/mehul.png",
  },
  {
    name: "Amit Parikh",
    title: "National President, MSME & Startups Forum - Bharat",
    imageUrl: "/images/pastspeaker/amitp.png",
  },
  {
    name: "Dr. Rajat Moona",
    title: "Director, IIT Gandhinagar",
    imageUrl: "/images/pastspeaker/rajat.png",
  },
  {
    name: "Sandeep Shukla",
    title: "Rajiv and Ritu Batra Endowed Chair for Cyber Security, Department of CSE, IIT Kanpur",
    imageUrl: "/images/pastspeaker/sandeepsuk.png",
  },
  {
    name: "Senthil Velu",
    title: "Professor, IIM Trichy",
    imageUrl: "/images/pastspeaker/senthil.png",
  },
  {
    name: "Garima Singh",
    title: "CTO, Doras Lab",
    imageUrl: "/images/pastspeaker/garimasingh.png",
  },
  {
    name: "Maha Iyer",
    title: "Founder, Pricetime Markets Inc",
    imageUrl: "/images/pastspeaker/mayai.png",
  },
  {
    name: "Rajat Ojha",
    title: "CEO, Gamitronics",
    imageUrl: "/images/pastspeaker/rajatojha.png",
  },
  {
    name: "Shashi Jha",
    title: "Founder, Jigsaw Law and Blockniti",
    imageUrl: "/images/pastspeaker/sashi.png",
  },
  {
    name: "Amit Saluja",
    title: "Managing Partner, digiXLT",
    imageUrl: "/images/pastspeaker/amitsaluja.png",
  },
  {
    name: "Tashish Rai Singhani",
    title: "Co-Founder & CEO, UnicueOne",
    imageUrl: "/images/pastspeaker/tashish.png",
  },
  {
    name: "Sonny Mohanty",
    title: "Partner, Leo Ventures",
    imageUrl: "/images/pastspeaker/sonny.png",
  },
  {
    name: "Anchit Goel",
    title: "Founder - Eknavya Lab Head - Partnerships, Onramp.Money",
    imageUrl: "/images/pastspeaker/anchit.png",
  },
  {
    name: "Satish Kumar",
    title: "Founder & CEO of Simsy Ventures",
    imageUrl: "/images/pastspeaker/satish.png",
  },
  {
    name: "Chirag Kapadia",
    title: "Director, TACTPRO Consulting Private Limited",
    imageUrl: "/images/pastspeaker/chirag.png",
  },
  {
    name: "Neha Sharma",
    title: "Founder and Director,Accelerate India",
    imageUrl: "/images/pastspeaker/neha.png",
  },
  {
    name: "Karthik Iyer",
    title: "CEO, BlockchainMonk",
    imageUrl: "/images/pastspeaker/karthiki.png",
  },
  {
    name: "Ish Anand",
    title: "Venture Partner, Simsy Ventures",
    imageUrl: "/images/pastspeaker/ishan.png",
  },
  {
    name: "Mr KP",
    title: "COO, Agnus AI",
    imageUrl: "/images/pastspeaker/mrkp.png",
  },
  {
    name: "Sagar Barvaliya",
    title: "Partner, BFC & Founder, ETHMunich",
    imageUrl: "/images/pastspeaker/sagar.png",
  },
  {
    name: "Sid Pillai",
    title: "CEO, Dexponent",
    imageUrl: "/images/pastspeaker/sid.png",
  },
  {
    name: "Muhammad Umar",
    title: "CEO, Relymer",
    imageUrl: "/images/pastspeaker/mohammad.png",
  },
  {
    name: "David Palmer",
    title: "CPO, PairPoint by Vodafone",
    imageUrl: "/images/pastspeaker/devid.png",
  },
  {
    name: "Ivan Vakhmyanin",
    title: "Managing Director, Datamint",
    imageUrl: "/images/pastspeaker/ivani.png",
  },
  {
    name: "Dirk Lueth",
    title: "Co-Founder & Co-CEO of Uplandme, Inc. Chairman Open Metaverse Alliance for Web3",
    imageUrl: "/images/pastspeaker/dirik.png",
  },
  {
    name: "Charles Bergeron",
    title: "Founder, EZO",
    imageUrl: "/images/pastspeaker/charles.png",
  },
  {
    name: "Ross Gates",
    title: "FCOO at PrimeLab",
    imageUrl: "/images/pastspeaker/ross.png",
  },
  {
    name: "Arthur Meng",
    title: "CEO & Cofounder of Hemera & SocialScan",
    imageUrl: "/images/pastspeaker/aurther.png",
  },
  {
    name: "Allen Chow",
    title: "Founder and CEO of AI on Web3, Inc.",
    imageUrl: "/images/pastspeaker/allen.png",
  },
  {
    name: "Dennis O'Connell",
    title: "Co-Founder & CTO, Peregrine Ltd, President, ERC-3643 Association",
    imageUrl: "/images/pastspeaker/dennis.png",
  },
  {
    name: "Jimi Ibrahim",
    title: "Co-founder and CBDO, Oasis X",
    imageUrl: "/images/pastspeaker/jimi.png",
  },
  {
    name: "Jake Stolarski",
    title: "CEO and Co-founder of NeroChain",
    imageUrl: "/images/pastspeaker/jake.png",
  },
  {
    name: "Kseniia Baziian",
    title: "Co-Founder, Narrative",
    imageUrl: "/images/pastspeaker/kseniia.png",
  },
  {
    name: "Reni Achkar",
    title: "CEO, The Social Laboratory",
    imageUrl: "/images/pastspeaker/reni.png",
  },
  {
    name: "Ajeet Khurana",
    title: "Founder, Reflexical Pte Ltd",
    imageUrl: "/images/pastspeaker/ajeet.png",
  },
  {
    name: "Sebastian Heine",
    title: "Chief Risk and Compliance Officer, Northstake",
    imageUrl: "/images/pastspeaker/sabest.png",
  },
  {
    name: "Bilal EL ALAMY",
    title: "CEO, PyratzLabs",
    imageUrl: "/images/pastspeaker/bilai.png",
  },
  {
    name: "Ernesto Contreras ",
    title: "CEO, Unalivio",
    imageUrl: "/images/pastspeaker/ernesto.png",
  },
  {
    name: "Yi Luo",
    title: "CEO and Co-founder of Eunice",
    imageUrl: "/images/pastspeaker/yil.png",
  },
  {
    name: "Anurag Vasisth",
    title: "Co-Chair & Group CEO, Loyalty Now",
    imageUrl: "/images/pastspeaker/anurag.png",
  },
  {
    name: "Tomasz Wojewoda",
    title: "Founder and CEO, TomekGroup",
    imageUrl: "/images/pastspeaker/tomasz.png",
  }
];

// Animation variants
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      delayChildren: 0.3,
      staggerChildren: 0.1
    }
  }
};

const headerVariants = {
  hidden: { 
    opacity: 0, 
    y: -30,
    scale: 0.95
  },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      duration: 0.8,
      ease: "easeOut"
    }
  }
};

const cardVariants = {
  hidden: { 
    opacity: 0, 
    y: 60,
    scale: 0.9,
    rotateX: 10
  },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    rotateX: 0,
    transition: {
      duration: 0.6,
      ease: "easeOut"
    }
  }
};

const buttonVariants = {
  hidden: { 
    opacity: 0, 
    y: 20,
    scale: 0.9
  },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      duration: 0.5,
      ease: "easeOut"
    }
  }
};

const Visionary = () => {
  const [numVisibleSpeakers, setNumVisibleSpeakers] = useState(0);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768); // Adjust breakpoint as needed
    };

    handleResize(); // Set initial value
    window.addEventListener('resize', handleResize);

    return () => window.removeEventListener('resize', handleResize);
  }, []);

  useEffect(() => {
    if (isMobile) {
      setNumVisibleSpeakers(4);
    } else {
      setNumVisibleSpeakers(8);
    }
  }, [isMobile]);

  const handleLoadMore = () => {
    if (isMobile) {
      setNumVisibleSpeakers(prev => prev + 2);
    } else {
      setNumVisibleSpeakers(prev => prev + 4);
    }
  };

  return (
    <>
      {/* Visionary Leaders Section */}
      <motion.section 
        className="w-full px-4 mt-[58px] sm:px-6 md:mt-[116px] lg:px-8"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        variants={containerVariants}
      >
        <div className="mx-auto w-full max-w-[1440px]">
          {/* Section Header */}
          <motion.div 
            className="mb-[22px] text-center md:mb-[44px]"
            variants={headerVariants}
          >
            <motion.p 
              className="text-center font-lufga text-[16px] font-bold uppercase leading-[21px] text-[#0575e6] md:text-[20px] md:leading-[27px]"
              initial={{ opacity: 0, y: -20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              Past Speakers
            </motion.p>
            <motion.h2 
              className="mt-[6px] text-center font-lufga text-[32px] font-normal leading-[42px] text-[#000000] md:mt-[8px] md:text-[64px] md:leading-[84px]"
              initial={{ opacity: 0, y: -30, scale: 0.95 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: true }}
              transition={{ 
                duration: 0.8, 
                delay: 0.4,
                ease: [0.6, -0.05, 0.01, 0.99]
              }}
              whileHover={{ 
                scale: 1.02,
                transition: { duration: 0.2 }
              }}
            >
              Meet Our Visionary Leaders
            </motion.h2>
          </motion.div>

          {/* Speakers Grid - Mapped from speakersData array */}
          <motion.div 
            className="grid w-full grid-cols-1 gap-[13px] sm:grid-cols-2 md:gap-[26px] lg:grid-cols-4"
            variants={containerVariants}
          >
            <AnimatePresence>
              {speakersData.slice(0, numVisibleSpeakers).map((speaker, index) => (
                <motion.div
                  key={index} // It's important to provide a unique key for each item in a list
                  className="flex w-full flex-col items-center justify-start"
                  variants={cardVariants}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, amount: 0.3 }}
                  whileHover={{ 
                    y: -10,
                    scale: 1.02,
                    rotateY: 2,
                    transition: { 
                      duration: 0.3,
                      ease: "easeOut"
                    }
                  }}
                  whileTap={{ scale: 0.98 }}
                  layout
                >
                  <motion.div
                    className="relative w-full overflow-hidden rounded-[20px]"
                    whileHover={{ 
                      scale: 1.05,
                      transition: { duration: 0.3 }
                    }}
                  >
                    <motion.div
                      initial={{ scale: 1 }}
                      whileHover={{ 
                        scale: 1.1,
                        transition: { duration: 0.4 }
                      }}
                    >
                      <Image
                        src={speaker.imageUrl}
                        alt={speaker.name}
                        width={150}
                        height={160}
                        className="h-[70%] w-full object-cover rounded-[20px]"
                      />
                    </motion.div>
                    
                    {/* Hover overlay effect */}
                    <motion.div
                      className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent rounded-[20px]"
                      initial={{ opacity: 0 }}
                      whileHover={{ opacity: 1 }}
                      transition={{ duration: 0.3 }}
                    />
                  </motion.div>

                  <motion.div 
                    className="-mt-[46px] flex w-full h-[30%] flex-row items-start justify-start bg-[linear-gradient(90deg,#0575e6_0%,#5336f8_50%,#00f260_100%)] p-[10px] py-0 shadow-[0px_4px_25px_#888888ff] rounded-[20px] z-20"
                    whileHover={{
                      boxShadow: "0px 8px 35px rgba(136,136,136,0.4)",
                      transition: { duration: 0.3 }
                    }}
                  >
                    <motion.div 
                      className="-mt-[10px] w-full h-full border border-[#ffffff] backdrop-blur-md bg-white/20 p-[12px] shadow-[0px_4px_100px_#888888ff] rounded-[20px]"
                      whileHover={{
                        bg: "rgba(255,255,255,0.3)",
                        backdropFilter: "blur(20px)",
                        transition: { duration: 0.3 }
                      }}
                    >
                      <div className="flex w-full h-fit flex-col items-start justify-start gap-[10px]">
                        <motion.h3 
                          className="text-left font-lufga font-medium text-[#ffffff] text-[24px] leading-[32px]"
                          initial={{ opacity: 0, x: -20 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          viewport={{ once: true }}
                          transition={{ duration: 0.5, delay: index * 0.1 + 0.6 }}
                          whileHover={{
                            x: 5,
                            transition: { duration: 0.2 }
                          }}
                        >
                          {speaker.name}
                        </motion.h3>
                        <motion.p 
                          className="w-full text-left font-lufga font-normal text-[#ffffff] text-[14px] leading-[18px]"
                          initial={{ opacity: 0, x: -20 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          viewport={{ once: true }}
                          transition={{ duration: 0.5, delay: index * 0.1 + 0.8 }}
                          whileHover={{
                            x: 5,
                            transition: { duration: 0.2 }
                          }}
                        >
                          {speaker.title}
                        </motion.p>
                      </div>
                    </motion.div>
                  </motion.div>
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>

          {/* Load More Button */}
          {numVisibleSpeakers < speakersData.length && (
            <motion.div 
              className="mt-[27px] text-center md:mt-[54px]"
              variants={buttonVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                transition={{ type: "spring", stiffness: 400, damping: 17 }}
              >
                <Button
                  variant="primary"
                  className="rounded-[12px] px-[12px] py-[6px] font-lufga text-[12px] font-bold leading-[16px] md:rounded-[24px] md:px-[24px] md:py-[12px] md:text-[16px] md:leading-[21px]"
                  onClick={handleLoadMore}
                >
                  Load More
                </Button>
              </motion.div>
            </motion.div>
          )}
        </div>
      </motion.section>
    </>
  );
};

export default Visionary;
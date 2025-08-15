import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";

// Animation variants
const sectionVariants = {
  hidden: { opacity: 0},
  visible: {
    opacity: 1,
    transition: {
      duration: 0.8,
      staggerChildren: 0.2
    }
  }
};

const headingVariants = {
  hidden: { 
    opacity: 0, 
    y: 30,
    scale: 0.95
  },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      duration: 0.7,
      ease: [0.6, -0.05, 0.01, 0.99]
    }
  }
};

const scrollRowVariants = {
  hidden: { 
    opacity: 0,
    y: 50
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.8,
      ease: "easeOut"
    }
  }
};

const cardHoverVariants = {
  hover: {
    y: -8,
    scale: 1.05,
    boxShadow: "0px 10px 30px rgba(24, 175, 255, 0.3)",
    transition: {
      duration: 0.3,
      ease: "easeOut"
    }
  },
  tap: {
    scale: 0.95,
    y: -2
  }
};

const imageVariants = {
  hover: {
    scale: 1.1,
    transition: {
      duration: 0.3,
      ease: "easeInOut"
    }
  }
};

const CompanyCard = ({ imgSrc, index = 0 }) => (
  <motion.div 
    className="flex flex-row justify-center items-center shadow-[0px_0px_15px_#18afff3f] bg-white border border-[#00000019] rounded-[10px] md:rounded-[20px] py-[11px] md:py-[22px] min-w-[120px] "
    variants={cardHoverVariants}
    whileHover="hover"
    whileTap="tap"
    initial={{ opacity: 0, scale: 0.8, y: 20 }}
    animate={{ 
      opacity: 1, 
      scale: 1, 
      y: 0,
      transition: {
        delay: index * 0.1,
        duration: 0.5,
        ease: "easeOut"
      }
    }}
  >
    <motion.div
      variants={imageVariants}
      className="relative w-full h-full flex items-center justify-center overflow-hidden"
    >
      <Image
        src={imgSrc}
        alt="Logo"
        width={120}
        height={60}
        className="w-auto h-auto max-w-[120px] max-h-[50px] md:max-w-[150px] md:max-h-[60px] object-contain"
        style={{ objectPosition: 'center' }}
        priority
      />
    </motion.div>
  </motion.div>
);

const GlobalCompanies = () => {
  // Object-based arrays for partners and media partners
const partnersRow1 = [
  { img: "/images/partners/pastpartner/1.png" },
  { img: "/images/partners/pastpartner/2.png" },
  { img: "/images/partners/pastpartner/3.png" },
  { img: "/images/partners/pastpartner/4.png" },
  { img: "/images/partners/pastpartner/5.png" },
  { img: "/images/partners/pastpartner/6.png" },
  { img: "/images/partners/pastpartner/7.png" },
  { img: "/images/partners/pastpartner/8.png" },
  { img: "/images/partners/pastpartner/9.png" },
  { img: "/images/partners/pastpartner/10.png" },
  { img: "/images/partners/pastpartner/11.png" },
  { img: "/images/partners/pastpartner/12.png" },
  { img: "/images/partners/pastpartner/13.png" },
  { img: "/images/partners/pastpartner/14.png" },
  { img: "/images/partners/pastpartner/15.png" },
  { img: "/images/partners/pastpartner/16.png" },
  { img: "/images/partners/pastpartner/17.png" },
  { img: "/images/partners/pastpartner/18.png" },
  { img: "/images/partners/pastpartner/19.png" },
  { img: "/images/partners/pastpartner/20.png" },
  { img: "/images/partners/pastpartner/21.png" },
  { img: "/images/partners/pastpartner/22.png" },
  { img: "/images/partners/pastpartner/23.png" },
  { img: "/images/partners/pastpartner/24.png" },
  { img: "/images/partners/pastpartner/25.png" },
  { img: "/images/partners/pastpartner/27.png" },
  { img: "/images/partners/pastpartner/28.png" },
  { img: "/images/partners/pastpartner/29.png" },
  { img: "/images/partners/pastpartner/32.png" },
  { img: "/images/partners/pastpartner/33.png" },
  { img: "/images/partners/pastpartner/34.png" },
  { img: "/images/partners/pastpartner/35.png" },
  { img: "/images/partners/pastpartner/36.png" },
  { img: "/images/partners/pastpartner/37.png" },
  { img: "/images/partners/pastpartner/38.png" },
  { img: "/images/partners/pastpartner/47.png" },
  { img: "/images/partners/pastpartner/48.png" },
  { img: "/images/partners/pastpartner/49.png" },
  { img: "/images/partners/pastpartner/50.png" },
  { img: "/images/partners/pastpartner/53.png" },
  { img: "/images/partners/pastpartner/58.jpg" },
  { img: "/images/partners/pastpartner/62.png" },
  { img: "/images/partners/pastpartner/69.png" },
  { img: "/images/partners/pastpartner/100vp.png" },
  { img: "/images/partners/pastpartner/319c.png" },
  { img: "/images/partners/pastpartner/accenture.png" },
  { img: "/images/partners/pastpartner/acv.png" },
  { img: "/images/partners/pastpartner/acyc.png" },
  { img: "/images/partners/pastpartner/adobe.png" },
  { img: "/images/partners/pastpartner/adrialogo.jpg" },
  { img: "/images/partners/pastpartner/airtel.png" },
  { img: "/images/partners/pastpartner/aivp.png" },
  { img: "/images/partners/pastpartner/allcoinbot.png" },
  { img: "/images/partners/pastpartner/alphaberry.png" },
  { img: "/images/partners/pastpartner/amigo.jpg" },
  { img: "/images/partners/pastpartner/amigo.png" },
  { img: "/images/partners/pastpartner/anal.png" },
  { img: "/images/partners/pastpartner/antier.png" },
  { img: "/images/partners/pastpartner/apiary.png" },
  { img: "/images/partners/pastpartner/avlanche.png" },
  { img: "/images/partners/pastpartner/aws.png" },
  { img: "/images/partners/pastpartner/aya.jpeg" },
  { img: "/images/partners/pastpartner/az.jpeg" },
  { img: "/images/partners/pastpartner/azimut-az.png" },
  { img: "/images/partners/pastpartner/azintafy.png" },
  { img: "/images/partners/pastpartner/benjlogo.png" },
  { img: "/images/partners/pastpartner/bepay.png" },
  { img: "/images/partners/pastpartner/bff.jpg" },
  { img: "/images/partners/pastpartner/bigwater.png" },
  { img: "/images/partners/pastpartner/binance.png" },
  { img: "/images/partners/pastpartner/bitwise.jpg" },
  { img: "/images/partners/pastpartner/blackrock.png" },
  { img: "/images/partners/pastpartner/blf.jpg" },
  { img: "/images/partners/pastpartner/blockchaincouncil.png" },
  { img: "/images/partners/pastpartner/blockchain-ed.png" },
  { img: "/images/partners/pastpartner/blockd.png" },
  { img: "/images/partners/pastpartner/blockpass.png" },
  { img: "/images/partners/pastpartner/blocktrack.png" },
  { img: "/images/partners/pastpartner/blocktracks.vg" },
  { img: "/images/partners/pastpartner/brinc.png" },
  { img: "/images/partners/pastpartner/bybit.png" },
  { img: "/images/partners/pastpartner/capgemini.png" },
  { img: "/images/partners/pastpartner/cb.png" },
  { img: "/images/partners/pastpartner/cc.png" },
  { img: "/images/partners/pastpartner/ce.jpg" },
  { img: "/images/partners/pastpartner/ce.png" },
  { img: "/images/partners/pastpartner/ceo.png" },
  { img: "/images/partners/pastpartner/cf.png" },
  { img: "/images/partners/pastpartner/cg.jpg" },
  { img: "/images/partners/pastpartner/chainana.png" },
  { img: "/images/partners/pastpartner/cifadq.png" },
  { img: "/images/partners/pastpartner/circle.png" },
  { img: "/images/partners/pastpartner/citibank.png" },
  { img: "/images/partners/pastpartner/cm.jpg" },
  { img: "/images/partners/pastpartner/coinbase.png" },
  { img: "/images/partners/pastpartner/coinc.png" },
  { img: "/images/partners/pastpartner/coincruncher.jpg" },
  { img: "/images/partners/pastpartner/coindcx.png" },
  { img: "/images/partners/pastpartner/coinfea.png" },
  { img: "/images/partners/pastpartner/coingabber.png" },
  { img: "/images/partners/pastpartner/coingape.png" },
  { img: "/images/partners/pastpartner/coinstore.png" },
  { img: "/images/partners/pastpartner/cointelegram.png" },
  { img: "/images/partners/pastpartner/cointelegraph.png" },
  { img: "/images/partners/pastpartner/comp.jpg" },
  { img: "/images/partners/pastpartner/conq.jpg" },
  { img: "/images/partners/pastpartner/cp.png" },
  { img: "/images/partners/pastpartner/cpad.png" },
  { img: "/images/partners/pastpartner/crptm.png" },
  { img: "/images/partners/pastpartner/cw.png" },
  { img: "/images/partners/pastpartner/cypher.png" },
  { img: "/images/partners/pastpartner/dao.png" },
  { img: "/images/partners/pastpartner/decubate.jpg" },
  { img: "/images/partners/pastpartner/delotte.png" },
  { img: "/images/partners/pastpartner/denske.png" },
  { img: "/images/partners/pastpartner/deustc.png" },
  { img: "/images/partners/pastpartner/diamante.png" },
  { img: "/images/partners/pastpartner/diamondst.png" },
  { img: "/images/partners/pastpartner/difc.png" },
  { img: "/images/partners/pastpartner/digi.jpg" },
  { img: "/images/partners/pastpartner/digitalao.png" },
  { img: "/images/partners/pastpartner/dmdm.png" },
  { img: "/images/partners/pastpartner/droomdroom.png" },
  { img: "/images/partners/pastpartner/ds.png" },
  { img: "/images/partners/pastpartner/earned.jpg" },
  { img: "/images/partners/pastpartner/earnscape.png" },
  { img: "/images/partners/pastpartner/em.png" },
  { img: "/images/partners/pastpartner/eth.png" },
  { img: "/images/partners/pastpartner/eureka.jpg" },
  { img: "/images/partners/pastpartner/ey.png" },
  { img: "/images/partners/pastpartner/fin.jpg" },
  { img: "/images/partners/pastpartner/fm.png" },
  { img: "/images/partners/pastpartner/fou.png" },
  { img: "/images/partners/pastpartner/fris.jpg" }
];

const partnersRow2 = [
  { img: "/images/partners/pastpartner/gateio.png" },
  { img: "/images/partners/pastpartner/gatev.png" },
  { img: "/images/partners/pastpartner/gb.png" },
  { img: "/images/partners/pastpartner/gda.png" },
  { img: "/images/partners/pastpartner/genesis.png" },
  { img: "/images/partners/pastpartner/giakaacapital.png" },
  { img: "/images/partners/pastpartner/gigaton.jpg" },
  { img: "/images/partners/pastpartner/glass.png" },
  { img: "/images/partners/pastpartner/gpl.png" },
  { img: "/images/partners/pastpartner/gsp.jpg" },
  { img: "/images/partners/pastpartner/haveto.jpg" },
  { img: "/images/partners/pastpartner/hedgit.png" },
  { img: "/images/partners/pastpartner/helion.png" },
  { img: "/images/partners/pastpartner/hh.png" },
  { img: "/images/partners/pastpartner/hib.jpg" },
  { img: "/images/partners/pastpartner/hive.png" },
  { img: "/images/partners/pastpartner/hundai.png" },
  { img: "/images/partners/pastpartner/hyperledger.png" },
  { img: "/images/partners/pastpartner/ico.png" },
  { img: "/images/partners/pastpartner/ihub.png" },
  { img: "/images/partners/pastpartner/inc.png" },
  { img: "/images/partners/pastpartner/incubate.png" },
  { img: "/images/partners/pastpartner/infosys.png" },
  { img: "/images/partners/pastpartner/iocapital.jpeg" },
  { img: "/images/partners/pastpartner/irislogo.jpg" },
  { img: "/images/partners/pastpartner/juls.png" },
  { img: "/images/partners/pastpartner/jumbo.png" },
  { img: "/images/partners/pastpartner/kaiko.jpg" },
  { img: "/images/partners/pastpartner/kaizar.png" },
  { img: "/images/partners/pastpartner/kalp.png" },
  { img: "/images/partners/pastpartner/kanzz.jpg" },
  { img: "/images/partners/pastpartner/kanzz.png" },
  { img: "/images/partners/pastpartner/kd.png" },
  { img: "/images/partners/pastpartner/kf.png" },
  { img: "/images/partners/pastpartner/klink.png" },
  { img: "/images/partners/pastpartner/koinpark.png" },
  { img: "/images/partners/pastpartner/koinpark.webp" },
  { img: "/images/partners/pastpartner/kommunitas.png" },
  { img: "/images/partners/pastpartner/kpmg.png" },
  { img: "/images/partners/pastpartner/kucoin.png" },
  { img: "/images/partners/pastpartner/lagrange.webp" },
  { img: "/images/partners/pastpartner/lbank.png" },
  { img: "/images/partners/pastpartner/lbg.png" },
  { img: "/images/partners/pastpartner/lc.jpg" },
  { img: "/images/partners/pastpartner/lingl.png" },
  { img: "/images/partners/pastpartner/liongate.png" },
  { img: "/images/partners/pastpartner/lki.png" },
  { img: "/images/partners/pastpartner/ltw.webp" },
  { img: "/images/partners/pastpartner/lys.jpg" },
  { img: "/images/partners/pastpartner/lz.png" },
  { img: "/images/partners/pastpartner/m.jpg" },
  { img: "/images/partners/pastpartner/magnet.png" },
  { img: "/images/partners/pastpartner/maple.jpg" },
  { img: "/images/partners/pastpartner/martin.png" },
  { img: "/images/partners/pastpartner/maruti.png" },
  { img: "/images/partners/pastpartner/matterfi.png" },
  { img: "/images/partners/pastpartner/mc2.webp" },
  { img: "/images/partners/pastpartner/mcc.png" },
  { img: "/images/partners/pastpartner/mcp.png" },
  { img: "/images/partners/pastpartner/md.png" },
  { img: "/images/partners/pastpartner/meity.png" },
  { img: "/images/partners/pastpartner/metamask.png" },
  { img: "/images/partners/pastpartner/mexc.png" },
  { img: "/images/partners/pastpartner/microsoft.png" },
  { img: "/images/partners/pastpartner/mil.jpg" },
  { img: "/images/partners/pastpartner/mint.png" },
  { img: "/images/partners/pastpartner/mintlayer.jpg" },
  { img: "/images/partners/pastpartner/monalogo.PNG" },
  { img: "/images/partners/pastpartner/moneyfi.png" },
  { img: "/images/partners/pastpartner/monolth.png" },
  { img: "/images/partners/pastpartner/moongate.svg" },
  { img: "/images/partners/pastpartner/multivers.png" },
  { img: "/images/partners/pastpartner/mwal.png" },
  { img: "/images/partners/pastpartner/natwast.png" },
  { img: "/images/partners/pastpartner/near.png" },
  { img: "/images/partners/pastpartner/neoma.png" },
  { img: "/images/partners/pastpartner/newtribe.png" },
  { img: "/images/partners/pastpartner/nordek.png" },
  { img: "/images/partners/pastpartner/o8m.png" },
  { img: "/images/partners/pastpartner/oi.png" },
  { img: "/images/partners/pastpartner/ol.svg" },
  { img: "/images/partners/pastpartner/okx.png" },
  { img: "/images/partners/pastpartner/ontac.png" },
  { img: "/images/partners/pastpartner/oracle.png" },
  { img: "/images/partners/pastpartner/outlook.png" },
  { img: "/images/partners/pastpartner/p.png" },
  { img: "/images/partners/pastpartner/para.png" },
  { img: "/images/partners/pastpartner/particula.jpg" },
  { img: "/images/partners/pastpartner/partisb.png" },
  { img: "/images/partners/pastpartner/patricklogo.jpg" },
  { img: "/images/partners/pastpartner/paycio.png" },
  { img: "/images/partners/pastpartner/pca.png" },
  { img: "/images/partners/pastpartner/peerhive.png" },
  { img: "/images/partners/pastpartner/penomo.png" },
  { img: "/images/partners/pastpartner/pentagon.png" },
  { img: "/images/partners/pastpartner/phronai.png" },
  { img: "/images/partners/pastpartner/polygon.png" },
  { img: "/images/partners/pastpartner/polygonn.png" },
  { img: "/images/partners/pastpartner/pplparty.png" },
  { img: "/images/partners/pastpartner/pwc.png" },
  { img: "/images/partners/pastpartner/quilaudits.png" },
  { img: "/images/partners/pastpartner/r.png" },
  { img: "/images/partners/pastpartner/rc.png" },
  { img: "/images/partners/pastpartner/rdm.jpg" },
  { img: "/images/partners/pastpartner/relience.png" },
  { img: "/images/partners/pastpartner/renrg.png" },
  { img: "/images/partners/pastpartner/reveel.png" },
  { img: "/images/partners/pastpartner/rise.png" },
  { img: "/images/partners/pastpartner/rosatoVenture.png" },
  { img: "/images/partners/pastpartner/router.png" },
  { img: "/images/partners/pastpartner/rozorpay.png" },
  { img: "/images/partners/pastpartner/ruanl.png" },
  { img: "/images/partners/pastpartner/rxco.png" },
  { img: "/images/partners/pastpartner/sadris.jpg" },
  { img: "/images/partners/pastpartner/safty ai.jpg" },
  { img: "/images/partners/pastpartner/samsung.png" },
  { img: "/images/partners/pastpartner/sandboxbharatbox.png" },
  { img: "/images/partners/pastpartner/securr.png" },
  { img: "/images/partners/pastpartner/sg.jpg" },
  { img: "/images/partners/pastpartner/siliconindia.png" }
];

const mediaRow = [
  { img: "/images/partners/media/1647336990108 1.png" },
  { img: "/images/partners/media/actualone 1.png" },
  { img: "/images/partners/media/bd logo 1.png" },
  { img: "/images/partners/media/Bitcoin World White Logo 1.png" },
  { img: "/images/partners/media/blockchain councel (1) 1.png" },
  { img: "/images/partners/media/blockpedia 1.png" },
  { img: "/images/partners/media/coin gabbar 2.png" },
  { img: "/images/partners/media/coinbold 1.png" },
  { img: "/images/partners/media/coinbrit 1.png" },
  { img: "/images/partners/media/Coinpedia.png" },
  { img: "/images/partners/media/col 1.png" },
  { img: "/images/partners/media/DroomDroom.png" },
  { img: "/images/partners/media/farsad 1.png" },
  { img: "/images/partners/media/fvm 1.png" },
  { img: "/images/partners/media/gm tokyo 1.png" },
  { img: "/images/partners/media/Group 15.png" },
  { img: "/images/partners/media/Gujarat Mail.png" },
  { img: "/images/partners/media/ktro 1.png" },
  { img: "/images/partners/media/localstic 1.png" },
  { img: "/images/partners/media/logo.png" },
  { img: "/images/partners/media/logo22 1.png" },
  { img: "/images/partners/media/market 1.png" },
  { img: "/images/partners/media/millian 1.png" },
  { img: "/images/partners/media/orbis 1.png" },
  { img: "/images/partners/media/Power info.png" },
  { img: "/images/partners/media/smartmoney 1.png" },
  { img: "/images/partners/media/sobak 1.png" },
  { img: "/images/partners/media/stabil 1.png" },
  { img: "/images/partners/media/Startupnews.png" },
  { img: "/images/partners/media/The Crypto Times Logo - Black.png" },
  { img: "/images/partners/media/times-of-india-logo.png" },
  { img: "/images/partners/media/tnc 1.png" },
  { img: "/images/partners/media/untold 1.png" },
  { img: "/images/partners/media/utoday 1.png" }
];

  return (
    <motion.section 
      className="w-[100vw] bg-[linear-gradient(90deg,#0575e6_0%,#5336f8_50%,#00f260_100%)] px-4 sm:px-6 lg:px-8 py-[33px] md:py-[66px] mt-[60px] md:mt-[80px]"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
      variants={sectionVariants}
    >
      <div className="w-full max-w-[1440px] mx-auto">
        
        {/* Past Partners Heading */}
        <motion.div variants={headingVariants}>
          <motion.p 
            className="text-[16px] md:text-[20px] font-lufga font-bold text-center uppercase text-white"
            initial={{ opacity: 0, y: -20, scale: 0.9 }}
            whileInView={{ 
              opacity: 1, 
              y: 0, 
              scale: 1,
              transition: {
                duration: 0.6,
                ease: "easeOut"
              }
            }}
            viewport={{ once: true }}
            whileHover={{
              scale: 1.05,
              textShadow: "0px 0px 20px rgba(255,255,255,0.5)",
              transition: { duration: 0.2 }
            }}
          >
            Past Partners
          </motion.p>
          
          <motion.h2 
            className="text-[32px] md:text-[64px] font-lufga font-normal text-center text-white mt-[6px] md:mt-[8px] w-full sm:w-[54%] mx-auto"
            initial={{ opacity: 0, y: -30, scale: 0.95 }}
            whileInView={{ 
              opacity: 1, 
              y: 0, 
              scale: 1,
              transition: {
                duration: 0.8,
                delay: 0.2,
                ease: [0.6, -0.05, 0.01, 0.99]
              }
            }}
            viewport={{ once: true }}
            whileHover={{
              scale: 1.02,
              textShadow: "0px 0px 30px rgba(255,255,255,0.3)",
              transition: { duration: 0.3 }
            }}
          >
            Global Companies Attending our Events
          </motion.h2>
        </motion.div>

        {/* Partners Rows */}
        <motion.div 
          className="mt-[30px] md:mt-[60px] flex flex-col gap-[24px] md:gap-[48px]"
          variants={scrollRowVariants}
        >
          <motion.div 
            className="overflow-hidden py-4"
            initial={{ opacity: 0, x: -100 }}
            whileInView={{ 
              opacity: 1, 
              x: 0,
              transition: {
                duration: 0.8,
                delay: 0.3
              }
            }}
            viewport={{ once: true }}

          >
            <motion.div 
              className="flex gap-[25px] md:gap-[50px] animate-scroll-left"
              animate={{
                x: [0, -50],
              }}
              transition={{
                x: {
                  repeat: Infinity,
                  repeatType: "loop",
                  duration: 20,
                  ease: "linear",
                },
              }}
            >
              {[...partnersRow1, ...partnersRow1].map((item, i) => (
                <CompanyCard key={`p1-${i}`} imgSrc={item.img} index={i} />
              ))}
            </motion.div>
          </motion.div>
          
          <motion.div 
            className="overflow-hidden py-4"
            initial={{ opacity: 0, x: 100 }}
            whileInView={{ 
              opacity: 1, 
              x: 0,
              transition: {
                duration: 0.8,
                delay: 0.5
              }
            }}
            viewport={{ once: true }}

          >
            <motion.div 
              className="flex gap-[25px] md:gap-[50px] animate-scroll-right"
              animate={{
                x: [0, 50],
              }}
              transition={{
                x: {
                  repeat: Infinity,
                  repeatType: "loop",
                  duration: 25,
                  ease: "linear",
                },
              }}
            >
              {[...partnersRow2, ...partnersRow2].map((item, i) => (
                <CompanyCard key={`p2-${i}`} imgSrc={item.img} index={i} />
              ))}
            </motion.div>
          </motion.div>
        </motion.div>

        {/* Past Media Partners Heading */}
        <motion.p 
          className="text-[16px] md:text-[20px] font-lufga font-bold text-center uppercase text-white mt-[50px]"
          initial={{ opacity: 0, y: 30, scale: 0.9 }}
          whileInView={{ 
            opacity: 1, 
            y: 0, 
            scale: 1,
            transition: {
              duration: 0.6,
              delay: 0.7
            }
          }}
          viewport={{ once: true }}
          whileHover={{
            scale: 1.05,
            textShadow: "0px 0px 20px rgba(255,255,255,0.5)",
            transition: { duration: 0.2 }
          }}
        >
          Past Media Partners
        </motion.p>

        {/* Media Partners Row */}
        <motion.div 
          className="mt-[24px] overflow-hidden py-4"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ 
            opacity: 1, 
            y: 0,
            transition: {
              duration: 0.8,
              delay: 0.8
            }
          }}
          viewport={{ once: true }}

        >
          <motion.div 
            className="flex gap-[25px] md:gap-[50px] animate-scroll-left"
            animate={{
              x: [0, -50],
            }}
            transition={{
              x: {
                repeat: Infinity,
                repeatType: "loop",
                duration: 22,
                ease: "linear",
              },
            }}
          >
            {[...mediaRow, ...mediaRow].map((item, i) => (
              <CompanyCard key={`m-${i}`} imgSrc={item.img} index={i} />
            ))}
          </motion.div>
        </motion.div>
      </div>
    </motion.section>
  );
};

export default GlobalCompanies;
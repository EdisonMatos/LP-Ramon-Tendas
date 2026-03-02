import Countdown from "react-countdown";
import SectionArea from "../sectionElements/SectionArea";
import SectionWrapper from "../sectionElements/SectionWrapper";
import SectionHeader from "../sectionElements/SectionHeader";
import oferta1 from "../../assets/imgs/ofertas/oferta1.webp";
import oferta2 from "../../assets/imgs/ofertas/oferta2.webp";
import content from "../../content/content";
import { Carousel } from "primereact/carousel";
import "../../index.css";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import MotionDivDownToUp from "../animation/MotionDivDownToUp";

function AnimatedUnit({ value }) {
  return (
    <div className="overflow-hidden h-[32px] relative w-[40px]">
      <AnimatePresence mode="popLayout">
        <motion.span
          key={value}
          initial={{ y: -20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 20, opacity: 0 }}
          transition={{ duration: 0.25 }}
          className="absolute inset-0 flex items-center justify-center"
        >
          {String(value).padStart(2, "0")}
        </motion.span>
      </AnimatePresence>
    </div>
  );
}

function Ofertas() {
  const ofertas = [
    { id: 1, img: oferta1 },
    { id: 2, img: oferta2 },
  ];

  const responsiveOptions = [
    { breakpoint: "1400px", numVisible: 1, numScroll: 1 },
    { breakpoint: "767px", numVisible: 1, numScroll: 1 },
  ];

  const productTemplate = (item) => {
    return (
      <div className="flex justify-center">
        <img
          src={item.img}
          alt="oferta"
          className="max-w-[800px] w-full rounded-md border border-white mb-6"
        />
      </div>
    );
  };

  const TEMPO_INICIAL = 2 * 60 * 60 + 14 * 60 + 37; // 9254s

  const [secondsLeft, setSecondsLeft] = useState(TEMPO_INICIAL);

  useEffect(() => {
    if (secondsLeft <= 0) return;

    const timer = setInterval(() => {
      setSecondsLeft((prev) => prev - 1);
    }, 1000);

    return () => clearInterval(timer);
  }, [secondsLeft]);

  const hours = Math.floor(secondsLeft / 3600);
  const minutes = Math.floor((secondsLeft % 3600) / 60);
  const seconds = secondsLeft % 60;

  return (
    <SectionArea className="bg-primary">
      <SectionWrapper>
        <SectionHeader
          sectionHeaderTitle={content.texts.ofertas.title}
          sectionHeaderSubtitle={content.texts.ofertas.subtitle}
          miniTitle={content.texts.ofertas.miniTag}
          className="text-center"
        />

        <MotionDivDownToUp>
          <div className="w-full max-w-[1000px] mb-6">
            <Carousel
              value={ofertas}
              numScroll={1}
              numVisible={1}
              responsiveOptions={responsiveOptions}
              A
              itemTemplate={productTemplate}
              circular
              autoplayInterval={5000}
            />
          </div>
        </MotionDivDownToUp>
        <MotionDivDownToUp
          className={`flex flex-col justify-center items-center`}
        >
          <h1 className="text-center text-white font-medium text-paragraph3 tablet1:text-title2 mb-4 font-secondFont">
            ⚠️ ATENÇÃO: Esta condição especial encerra em breve <br />
            Garanta agora antes que expire.
          </h1>
          <div className="flex gap-2 font-secondFont items-center text-white text-xl font-bold">
            <div className="p-2 bg-white rounded-sm text-black w-[50px] flex justify-center">
              <AnimatedUnit value={hours} />
            </div>

            <span>:</span>

            <div className="p-2 bg-white rounded-sm text-black w-[50px] flex justify-center">
              <AnimatedUnit value={minutes} />
            </div>

            <span>:</span>

            <div className="p-2 bg-white rounded-sm text-black w-[50px] flex justify-center">
              <AnimatedUnit value={seconds} />
            </div>
          </div>
        </MotionDivDownToUp>
        {/* <div className="flex gap-2 font-mainFont items-center">
          <h1 className="p-2 bg-white rounded-sm font-medium w-[50px]">
            {String(hours).padStart(2, "0")}h
          </h1>{" "}
          <span className="text-white">:</span>
          <h1 className="p-2 bg-white rounded-sm font-medium w-[50px]">
            {String(minutes).padStart(2, "0")}m
          </h1>{" "}
          <span className="text-white">:</span>
          <h1 className="p-2 bg-white rounded-sm font-medium w-[50px]">
            {String(seconds).padStart(2, "0")}s
          </h1>
        </div> */}
      </SectionWrapper>
    </SectionArea>
  );
}

export default Ofertas;

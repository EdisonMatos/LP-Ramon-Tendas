import Paragraphs from "../sectionElements/Paragraphs";
import SectionArea from "../sectionElements/SectionArea";
import SectionTitles from "../sectionElements/SectionTitles";
import SectionWrapper from "../sectionElements/SectionWrapper";
import MotionDivDownToUp from "../animation/MotionDivDownToUp";
import React, { useState } from "react";
import { Dialog } from "primereact/dialog";
import "primereact/resources/themes/saga-blue/theme.css";
import "primereact/resources/primereact.min.css";
import "primeicons/primeicons.css";
import content from "../../content/content"; // ✅ Corrigido
import { abstractions } from "../../content/content"; // ✅ Corrigido
import Button from "../interactives/Button";
import SectionHeader from "../sectionElements/SectionHeader";
import imgPoints from "../../assets/imgs/about/points.png";
import AboutFading from "../sectionElements/aboutFading";
import SectionShapeDiv from "../sectionElements/SectionShapeDiv";
import { MoveRight } from "lucide-react";
import { FaWhatsapp } from "react-icons/fa";
import links from "../../content/links";

const whatsappContactLink = `${links.ctaWhatsapp}`;

export default function About() {
  const [visible, setVisible] = useState(false);
  const [modalContent, setModalContent] = useState(null);
  const [modalTitle, setModalTitle] = useState("");

  const onClick = () => {
    setModalTitle(abstractions.titleModal);
    setModalContent(
      <div className="text-paragraph3">
        <p className="mb-[20px]">{abstractions.subtitleModal}</p>
        <p className="mb-[20px]">{content.texts.about.modal}</p>
        <p className="mb-[20px]">Quer saber mais? Clique abaixo 👇</p>
        <div>
          <Button
            aria-label={content.texts.about.ctaButtonAriaLabel}
            label={content.texts.about.ctaButtonText}
            buttonLink={whatsappContactLink}
            animation={false}
            className="hover:scale-105"
            icon={<FaWhatsapp size={24} />}
          />
        </div>
      </div>
    );
    setVisible(true);
  };

  return (
    <SectionArea id="about" className="bg-bgSectionDark">
      <SectionWrapper className="flex flex-col desktop1:flex-row-reverse gap-[40px] desktop1:gap-x-[40px] desktop2:gap-0 desktop1:justify-between">
        <MotionDivDownToUp className=" w-[100%] desktop1:w-[415px] desktop2:w-[485px] flex justify-center">
          <div
            style={{
              backgroundImage: `url(${content.texts.about.imagem.img})`,
            }}
            className="shadow-custom-opacity shadow-secondary/25 relative bg-center bg-no-repeat bg-cover h-[350px] w-[90%] tablet1:w-full tablet1:h-[800px] desktop1:h-[467px] rounded-xl"
          ></div>
        </MotionDivDownToUp>

        <div className="desktop1:w-[550px] desktop2:w-[570px]">
          <SectionHeader
            className="text-center"
            miniTitle={content.texts.about.miniTag}
            sectionHeaderTitle={content.texts.about.title}
            sectionHeaderSubtitle={content.texts.about.subtitle}
            color="dark"
            type="article"
          />
          <MotionDivDownToUp>
            <Paragraphs className=" text-opacity-80">
              <AboutFading />
            </Paragraphs>
            <Button
              className="mt-[48px]"
              label={content.texts.about.buttonModalLabelAbout}
              onClick={onClick}
              removeAnchor={true}
              removeTarget={true}
              animation={true}
              icon={<MoveRight />}
            />
          </MotionDivDownToUp>
        </div>
      </SectionWrapper>

      <Dialog
        className="font-secondFont"
        header={modalTitle}
        visible={visible}
        onHide={() => setVisible(false)}
        style={{ width: "50vw" }}
        breakpoints={{ "4000px": "60vw", "1024px": "70vw", "641px": "85vw" }}
      >
        {modalContent}
      </Dialog>
    </SectionArea>
  );
}

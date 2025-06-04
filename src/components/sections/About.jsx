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
import content from "../../content/content";
import { abstractions } from "../../content/content";
import Button from "../interactives/Button";
import SectionHeader from "../sectionElements/SectionHeader";
import imgPoints from "../../assets/imgs/about/points.png";
import AboutFading from "../sectionElements/aboutFading";
import SectionShapeDiv from "../sectionElements/SectionShapeDiv";
import { MoveRight } from "lucide-react";
import { FaWhatsapp } from "react-icons/fa";
import links from "../../content/links";
import ImageGallery from "react-image-gallery";
import "react-image-gallery/styles/css/image-gallery.css";
import imgTestimonial1 from "../../assets/imgs/hero/heroImg1.png";
import imgTestimonial2 from "../../assets/imgs/hero/heroImg2.png";
import imgTestimonial3 from "../../assets/imgs/hero/heroImg3.png";
import imgTestimonial4 from "../../assets/imgs/hero/heroImg4.png";
import imgTestimonial5 from "../../assets/imgs/hero/heroImg5.png";
import imgTestimonial6 from "../../assets/imgs/hero/heroImg6.png";
import imgTestimonial7 from "../../assets/imgs/hero/heroImg7.png";
import imgTestimonial8 from "../../assets/imgs/hero/heroImg8.png";
import imgTestimonial9 from "../../assets/imgs/hero/heroImg9.png";

const whatsappContactLink = `${links.ctaWhatsapp}`;

export default function About() {
  const [visible, setVisible] = useState(false);
  const [modalContent, setModalContent] = useState(null);
  const [modalTitle, setModalTitle] = useState("");

  const images = [
    {
      original: imgTestimonial1,
      thumbnail: imgTestimonial1,
    },
    {
      original: imgTestimonial2,
      thumbnail: imgTestimonial2,
    },
    {
      original: imgTestimonial3,
      thumbnail: imgTestimonial3,
    },
    {
      original: imgTestimonial4,
      thumbnail: imgTestimonial4,
    },
    {
      original: imgTestimonial5,
      thumbnail: imgTestimonial5,
    },
    {
      original: imgTestimonial6,
      thumbnail: imgTestimonial6,
    },
    {
      original: imgTestimonial7,
      thumbnail: imgTestimonial7,
    },
    {
      original: imgTestimonial8,
      thumbnail: imgTestimonial8,
    },
    {
      original: imgTestimonial9,
      thumbnail: imgTestimonial9,
    },
  ];

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
            className="text-white hover:scale-105"
            icon={<FaWhatsapp size={24} className="text-white" />}
          />
        </div>
      </div>
    );
    setVisible(true);
  };

  return (
    <SectionArea id="about" className="bg-primary">
      <SectionWrapper className="flex flex-col desktop1:flex-row-reverse gap-[40px] desktop1:gap-x-[40px] desktop2:gap-0 desktop1:justify-between">
        {/* <MotionDivDownToUp className=" w-[100%] desktop1:w-[415px] desktop2:w-[485px] flex justify-center">
          <div
            style={{
              backgroundImage: `url(${content.texts.about.imagem.img})`,
            }}
            className="shadow-custom-opacity shadow-secondary/25 relative bg-center bg-no-repeat bg-cover h-[350px] w-[90%] tablet1:w-full tablet1:h-[800px] desktop1:h-[467px] rounded-xl"
          ></div>
        </MotionDivDownToUp> */}

        <MotionDivDownToUp className=" w-[100%] desktop1:w-[415px] desktop2:w-[485px] flex justify-center">
          <div
            // style={{
            //   backgroundImage: `url(${content.texts.about.imagem.img})`,
            // }}
            className="shadow-custom-opacity shadow-secondary/25 relative bg-center bg-no-repeat bg-cover h-[350px] w-[90%] tablet1:w-full tablet1:h-[740px] desktop1:h-[467px] rounded-xl"
          >
            <ImageGallery
              items={images}
              showNav={false} // Ativando a navegação
              showFullscreenButton={false} // Desativando botão de tela cheia
              useBrowserFullscreen={false} // Desativando o uso de tela cheia do navegador
              showBullets={true}
              showThumbnails={false}
              additionalClass="custom-gallery"
              autoPlay={true}
            />
            <style>
              {`
                    .custom-gallery .image-gallery-slide img {
                      height: 350px; 
                      width: 100%;
                      object-fit: cover;
                      border-radius: 10px;
                    }

                     @media (min-width: 640px) and (max-width: 1023px) {
                        .custom-gallery .image-gallery-slide img {
                          height: 800px;
                        }
                      }

                      @media (min-width: 1024px) {
                        .custom-gallery .image-gallery-slide img {
                          height: 470px;
                        }
                      }


                    .custom-gallery .image-gallery-thumbnails img {
                      height: 60px;  
                      width: 100px;  
                      object-fit: cover; 
                    }
                  `}
            </style>
            {/* <img
              alt="Imagem de efeito pontilhado"
              src={imgPoints}
              className="absolute opacity-30 right-[-10px] top-[20px] desktop1:right-[-40px] desktop1:top-[40px]"
            ></img> */}
          </div>
          {/* <img
            src={content.texts.about.imagem.img}
            alt="Imagem de uma praia de Arraial"
            className=""
        /> */}
        </MotionDivDownToUp>

        <div className="desktop1:w-[550px] desktop2:w-[570px]">
          <SectionHeader
            className="text-center"
            miniTitle={content.texts.about.miniTag}
            sectionHeaderTitle={content.texts.about.title}
            sectionHeaderSubtitle={content.texts.about.subtitle}
            color=""
            type="article"
          />
          <MotionDivDownToUp>
            <Paragraphs className=" text-opacity-80">
              <AboutFading />
            </Paragraphs>
            <Button
              className="mt-[48px] text-primary"
              label={content.texts.about.buttonModalLabelAbout}
              onClick={onClick}
              color="bg-white"
              removeAnchor={true}
              removeTarget={true}
              animation={true}
              icon={<MoveRight className="text-primary " />}
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

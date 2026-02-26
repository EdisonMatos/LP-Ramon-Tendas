import React from "react";
import SectionArea from "../sectionElements/SectionArea";
import SectionWrapper from "../sectionElements/SectionWrapper";
import SectionHeader from "../sectionElements/SectionHeader";
import FeatureImgOnBgCard from "../cards/FeatureImgOnBgCard";
import oferta1 from "../../assets/imgs/ofertas/oferta1.webp";
import oferta2 from "../../assets/imgs/ofertas/oferta2.webp";
import content from "../../content/content";

function Ofertas() {
  return (
    <SectionArea className={`bg-primary`}>
      <SectionWrapper>
        <SectionHeader
          sectionHeaderTitle={content.texts.ofertas.title}
          sectionHeaderSubtitle={content.texts.ofertas.subtitle}
          miniTitle={content.texts.ofertas.miniTag}
          className="text-center"
          color=""
        />

        <div className="flex flex-wrap justify-around gap-10 w-full">
          <img
            className="max-w-[550px] rounded-md w-[90%] border border-white"
            src={oferta1}
            alt="imagem representativa de oferta"
          />
          <img
            className="max-w-[550px] rounded-md w-[90%] border border-white"
            src={oferta2}
            alt="imagem representativa de oferta"
          />
        </div>
      </SectionWrapper>
    </SectionArea>
  );
}

export default Ofertas;

import React from "react";
import SectionArea from "../sectionElements/SectionArea";
import SectionWrapper from "../sectionElements/SectionWrapper";
import SectionHeader from "../sectionElements/SectionHeader";
import FeatureImgOnBgCard from "../cards/FeatureImgOnBgCard";
import oferta1 from "../../assets/imgs/ofertas/oferta1.webp";
import oferta2 from "../../assets/imgs/ofertas/oferta2.webp";

function Ofertas() {
  return (
    <SectionArea className={`bg-primary`}>
      <SectionWrapper>
        <SectionHeader
          sectionHeaderTitle="Tendas com condição especial por tempo limitado"
          sectionHeaderSubtitle="Modelos 5x5 e 10x10 com pronta entrega, envio para todo o Brasil e pagamento facilitado via Pix ou transferência."
          miniTitle="OFERTAS RELÂMPAGO"
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

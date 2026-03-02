import React, { useEffect } from "react";
import SectionArea from "../sectionElements/SectionArea";
import SectionWrapper from "../sectionElements/SectionWrapper";
import SectionHeader from "../sectionElements/SectionHeader";
import oferta1 from "../../assets/imgs/ofertas/oferta1.webp";
import oferta2 from "../../assets/imgs/ofertas/oferta2.webp";
import content from "../../content/content";
import { Carousel } from "primereact/carousel";
import "../../index.css";

function Ofertas() {
  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://elfsightcdn.com/platform.js";
    script.async = true;
    document.body.appendChild(script);
  }, []);

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

  return (
    <SectionArea className="bg-primary">
      <SectionWrapper>
        <SectionHeader
          sectionHeaderTitle={content.texts.ofertas.title}
          sectionHeaderSubtitle={content.texts.ofertas.subtitle}
          miniTitle={content.texts.ofertas.miniTag}
          className="text-center"
        />

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
        <h1 className="text-center text-white font-medium text-title2 mb-4 font-secondFont">
          ⚠️ ATENÇÃO: Esta condição especial encerra em:
          <br />
          02h 14m 37s
        </h1>
        <div className="elfsight-app-5ec11640-937d-4210-861e-606ffc6d1a89"></div>
        <h1 className="text-center text-white font-medium text-title2 mt-4 font-secondFont">
          Garanta agora antes que expire.
        </h1>
      </SectionWrapper>
    </SectionArea>
  );
}

export default Ofertas;

import MotionDivDownToUp from "../animation/MotionDivDownToUp";
import Paragraphs from "../sectionElements/Paragraphs";
import SectionArea from "../sectionElements/SectionArea";
import SectionHeader from "../sectionElements/SectionHeader";
import SectionWrapper from "../sectionElements/SectionWrapper";
import AccordionExpandDefault from "../interactives/AcordionTwo";
import links from "../../content/links";

export default function GoogleMaps() {
  return (
    <SectionArea id={"map"} className="bg-primary" paddingtop={false}>
      <SectionHeader
        className="text-center"
        sectionHeaderTitle="Saiba como nos encontrar"
        sectionHeaderSubtitle="Utilize o mapa abaixo para chegar até nós!"
        miniTitle="Google Maps"
        color=""
      />

      <SectionWrapper className="flex justify-center">
        <MotionDivDownToUp className="flex justify-center w-full">
          <div className="relative w-full h-auto bg-no-repeat bg-cover shadow-custom-opacity shadow-darker/25 desktop1:bg-center tablet1:w-full rounded-xl">
            {/* <p className="font-bold mt-[32px] mb-[16px]">
              Nos encontre no Google Maps
            </p> */}
            <div className="opacity-90">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d489317.7792740082!2d-49.397526!3d-16.637047!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x935e5f005eb2036d%3A0x7fb38f5756e81fe5!2sResidencial%2014%20bis!5e0!3m2!1spt-BR!2sus!4v1747423543098!5m2!1spt-BR!2sus"
                width="100%"
                height=""
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="rounded-[10px] h-[350px] desktop1:h-[420px]"
              />
            </div>
            {/* <img
              alt="Imagem de efeito pontilhado"
              src={imgPoints}
              className="absolute opacity-30 right-[-10px] top-[20px] desktop1:right-[-40px] desktop1:top-[40px]"
            ></img> */}
          </div>
        </MotionDivDownToUp>
      </SectionWrapper>
    </SectionArea>
  );
}

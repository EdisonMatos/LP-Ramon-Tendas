import links from "../../content/links";
import content from "../../content/content";
import SectionContent from "../sectionElements/SectionContent";
import MotionDivUpToDown from "../animation/MotionDivUpToDown";
import MotionDivDownToUp from "../animation/MotionDivDownToUp";
import ButtonCTAWithIcon from "../interactives/ButtonCTAWithIcon";
import SectionArea from "../sectionElements/SectionArea";
import SectionWrapper from "../sectionElements/SectionWrapper";
import { FaWhatsapp } from "react-icons/fa";
import SectionHeader from "../sectionElements/SectionHeader";
import Button from "../interactives/Button";

const whatsappContactLink = `https://wa.me/` + `${links.ctaWhatsapp}`;

export default function CtaWhatsapp() {
  return (
    <div
      className="bg-left bg-cover desktop1:bg-fixed desktop1:bg-left"
      style={{
        backgroundImage: `url(${content.texts.cta.backgroundImg})`,
      }}
      id="contact"
    >
      <SectionArea>
        
        <SectionWrapper>
          <SectionHeader
            className="text-center"
            miniTitle={content.texts.cta.miniTag}
            sectionHeaderTitle={content.texts.cta.title}
            sectionHeaderSubtitle={content.texts.cta.subtitle}
            color=""
          />
          <Button
            aria-label={content.texts.hero.ctaButtonAriaLabel}
            label={content.texts.cta.ctaButtonText}
            buttonLink={whatsappContactLink}
            animation
            icon={<FaWhatsapp size={24} />}
          />
        </SectionWrapper>
      </SectionArea>
    </div>
  );
}

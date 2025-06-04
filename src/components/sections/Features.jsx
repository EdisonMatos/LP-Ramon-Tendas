import FeatureImgOnBgCard from "../cards/FeatureImgOnBgCard";
import SectionArea from "../sectionElements/SectionArea";
import SectionHeader from "../sectionElements/SectionHeader";
import SectionWrapper from "../sectionElements/SectionWrapper";
import content from "../../content/content";

export default function Features() {
  return (
    <SectionArea id={"service"} className=" bg-primary ">
      <SectionHeader
        className="text-center"
        sectionHeaderTitle={content.texts.features.title}
        sectionHeaderSubtitle={content.texts.features.subtitle}
        miniTitle={content.texts.features.miniTag}
        color=""
      />

      <SectionWrapper>
        <div className="flex flex-wrap justify-between w-full gap-[36px] tablet1:gap-[24px]">
          <FeatureImgOnBgCard
            bgImg={content.texts.features.card1.img}
            title={content.texts.features.card1.title}
            description={content.texts.features.card1.subtitle}
            buttonLabel={content.texts.features.card1.buttonLabel}
            buttonLink={content.texts.features.card1.buttonLink}
          />
          <FeatureImgOnBgCard
            bgImg={content.texts.features.card2.img}
            title={content.texts.features.card2.title}
            description={content.texts.features.card2.subtitle}
            buttonLabel={content.texts.features.card2.buttonLabel}
            buttonLink={content.texts.features.card2.buttonLink}
          />
          <FeatureImgOnBgCard
            bgImg={content.texts.features.card3.img}
            title={content.texts.features.card3.title}
            description={content.texts.features.card3.subtitle}
            buttonLabel={content.texts.features.card3.buttonLabel}
            buttonLink={content.texts.features.card3.buttonLink}
          />
           <FeatureImgOnBgCard
            bgImg={content.texts.features.card4.img}
            title={content.texts.features.card4.title}
            description={content.texts.features.card4.subtitle}
            buttonLabel={content.texts.features.card4.buttonLabel}
            buttonLink={content.texts.features.card4.buttonLink}
          />
           <FeatureImgOnBgCard
            bgImg={content.texts.features.card5.img}
            title={content.texts.features.card5.title}
            description={content.texts.features.card5.subtitle}
            buttonLabel={content.texts.features.card5.buttonLabel}
            buttonLink={content.texts.features.card5.buttonLink}
          />
           <FeatureImgOnBgCard
            bgImg={content.texts.features.card6.img}
            title={content.texts.features.card6.title}
            description={content.texts.features.card6.subtitle}
            buttonLabel={content.texts.features.card6.buttonLabel}
            buttonLink={content.texts.features.card6.buttonLink}
          />
        </div>
      </SectionWrapper>
    </SectionArea>
  );
}

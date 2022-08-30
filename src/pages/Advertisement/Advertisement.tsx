import React from "react";
// import MainLayout from "../Layout/MainLayout";
import PricingPlan from "../../components/PriceCard/PricingPlan";
import Hero from "../../components/Hero/Hero";
import faqData from "../../data/faqData";
import FaQ from "../../components/FaQ/FaQ";
import SectionTitle from "../../components/Share/SectionTitle/SectionTitle";
import ContactSection from "../../components/ContactSection/ContactSection";
import Services from "../../components/Advertisement/Services";
import ServicesData from "../../data/ServicesData";
import HeroData from "../../components/Hero/HeroData";
import Why from "../../Assets/images/service/why.png";
import Adv from "../../Assets/images/service/adv.png";
import useServices from "../../hooks/AllServicesData";

const Advertisement = () => {
  const [services] = useServices();
  const advSlots = services[0];
  const data = ServicesData.advService;
  const heroData = HeroData.advData;
  const advDescription = HeroData.advDescription;

  return (
    <div className="mt-10">
      <section className="">
        <Hero
          headerSpanTextOne="Build"
          headerTextOne="Your"
          headerTextTwo="Clean Ads"
          headerSpanTextTwo="with us"
          data={heroData}
          description={advDescription}
          img={Adv}
        />
      </section>

      {/* service section */}
      <section className="py-24">
        <Services
          data={data}
          img={Why}
          title="Why Us"
          subTitle="We have advertisement creator full team, Give us your concept"
          description="We have advertisement creator full team, Give us your concept,We
            have advertisement creator full team, Give us your concept"
        />
      </section>
      {/* price plans section */}
      <section className="pb-24">
        <SectionTitle
          textPosition="text-center"
          sectionPadding="pb-14"
          titlePosition="justify-center"
          title="Our Price Plans"
          subTitle="Choose Your Price Plans"
        />
        <PricingPlan data={advSlots} />
      </section>
      {/* faq section */}
      <section className="pb-14">
        <div className="pt-10 max-w-lg mx-auto">
          <SectionTitle
            sectionPadding="pb-14"
            title="FAQ"
            subTitle="Your Question and Answer Here "
          />
          {faqData?.advertisement?.map((item) => (
            <FaQ
              key={item.id}
              title={item.title}
              description={item.description}
            />
          ))}
        </div>
      </section>
      {/* contact section */}
      <section className="py-8">
        <ContactSection
          title=" If you need to custom packages and you have any queries, please fell
            free and contact Us."
          buttonText="Contact Us"
        />
      </section>
    </div>
  );
};

export default Advertisement;

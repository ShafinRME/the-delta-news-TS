import React from "react";
import Services from "../components/Advertisement/Services";
import ContactSection from "../components/ContactSection/ContactSection";
import FaQ from "../components/FaQ/FaQ";
import Hero from "../components/Hero/Hero";
import HeroData from "../components/Hero/HeroData";
import PricingPlan from "../components/PriceCard/PricingPlan";
import SectionTitle from "../components/Share/SectionTitle/SectionTitle";
import faqData from "../data/faqData";
import ServicesData from "../data/ServicesData";
import useServices from "../hooks/AllServicesData";
import liveNews from "../Images/service/liveNews.png";
import updateNews from "../Images/service/updateNews.png";

const LiveTv = () => {
  const [services] = useServices();
  const data = ServicesData.newsService;
  const liveNewsPlan = services[1];
  const liveData = HeroData.liveData;
  const advDescription = HeroData.advDescription;

  return (
    <div className="mt-10">
      <section className="">
        <Hero
          headerSpanTextOne="Live Sport "
          headerTextOne="and "
          headerTextTwo="TV-shows for best"
          headerSpanTextTwo=" friends"
          data={liveData}
          description={advDescription}
          img={updateNews}
        />
      </section>

      {/* service section */}
      <section className="py-24">
        <Services
          data={data}
          img={liveNews}
          title="Why Us"
          subTitle="We are provide 20+ premium live news chanel "
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
        <PricingPlan data={liveNewsPlan} />
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

export default LiveTv;

import Hero from "@/app/components/index/hero";
import Partners from "@/app/components/index/partners";
import WhyChoose from "@/app/components/index/whyChoose";
import Testimonials from "@/app/components/index/testimonials";
import Faq from "@/app/components/index/faq";
function HomePage() {
  return (
    <>
      <section className="w-full overflow-x-hidden p-5">
        <div className="relative max-container">
          <Hero />
          <Partners />
          <WhyChoose />
          <Testimonials />
          <Faq />
        </div>
      </section>
    </>
  );
}

export default HomePage;

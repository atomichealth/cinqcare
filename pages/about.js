import Head from "next/head";
import Image from "next/image";
import Header from "../components/header/header";
import HeroAbout from "../components/heroAbout/heroAbout";
import Footer from "../components/footer/footer";
import CTA from "../components/cta/cta";
import People from "../components/people/people";
import GlassAccordion from "../components/glassAccordion/glassAccordion";
import BackgroundContainer from "../components/backgroundContainer/backgroundContainer";
import SideBySide from "../components/sideBySide/sideBySide";
import Slidecordion from "../components/slidecordion/slidecordion";
import Spacer from "../components/spacer/spacer";
import TestimonialSimple from "../components/testimonialSimple/testimonialSimple";

export default function About() {

  // Define current page
  const currentPage = "about";

  // SEO
  const title = "About Us | CINQCARE";
  const metaDescription = "Discover CINQCARE’s mission to deliver health and care where it’s needed most, driven by purpose and a commitment to communities.";
  const pageURL = "https://cinq.care/about";
  const opengraphImg = "https://cinq.care/cinqcare-opengraph.jpg";

  return (
    <>
      <Head>
        <meta name="description" content={metaDescription} />
        <meta property="og:image" content={opengraphImg} />
        <meta property="og:title" content={title} />
        <meta property="og:type" content="website" />
        <meta property="og:url" content={pageURL} />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@carecinq" />
        <title>{title}</title>
      </Head>

      <Header headerBg="light" />

      <main>
        <HeroAbout page={currentPage} />
        <TestimonialSimple page={currentPage} />
        <GlassAccordion page={currentPage} />
        <People page={currentPage} group="leadership" />
        <People page={currentPage} group="advisors" />
        <BackgroundContainer page={currentPage}>
          <SideBySide page={currentPage} />
          <Spacer />
          <Slidecordion page={currentPage} />
          <Spacer />
        </BackgroundContainer>
        <CTA
          type="primary"
          buttonText="Connect on LinkedIn"
          link="https://www.linkedin.com/company/cinq-care/"
          target="_blank"
        >
          <header>
            <h2>Follow our <em>health and care journey.</em></h2>
          </header>
          <p>Be a part of the conversation with our team as we deliver care, for you and your family, where you live.</p>
        </CTA>
      </main>

      <Footer />
    </>
  );
}

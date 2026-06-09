import Hero from "../components/home/Hero";
import BrandLine from "../components/home/BrandLine";
import FeaturedStrip from "../components/home/FeaturedStrip";
import AboutBand from "../components/home/AboutBand";

export default function HomePage({ setPage }) {
  return (
    <>
      <Hero setPage={setPage} />
      <BrandLine />
      <FeaturedStrip setPage={setPage} />
      <AboutBand />
    </>
  );
}

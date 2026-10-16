import Aboutjoy from "./Aboutjoy";
import Hero from "./Hero";
import Workprocess from "./Workprocess";
import AboutFounder from "./AboutFounder"
import MarqueeGallery from "./MarqueeGallery"
import CTA from "./CTA"
import ProjectTile from "./Project Section/ProjectTile";
import MarqueeText from "./MarqueeText"

const Homepage = () => {
  return (
    <div>
      <div className="h-full bg-1">
      <Hero />
      <MarqueeText/>
     <ProjectTile/>
      </div>

      <Aboutjoy />
      <Workprocess/>
      <AboutFounder/>
      <MarqueeGallery/>
      <CTA/>
    </div>
  );
};

export default Homepage;

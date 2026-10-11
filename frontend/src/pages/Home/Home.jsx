import Hero from "../../components/Hero/Hero";
import About from "../../components/About/About";
import VisionMission from "../../components/VisionMission/VisionMission";
import SynchronPreview from "../../components/SynchronPreview/SynchronPreview";
import HowWeWork from "../../components/HowWeWork/HowWeWork";
import Team from "../../components/Team/Team";
import Contact from "../../components/Contact/Contact";

function Home() {
  return (
    <>
      <Hero />
      <About />
      <VisionMission />
      <SynchronPreview />
      <HowWeWork />
      <Team />
      <Contact />
    </>
  );
}

export default Home;
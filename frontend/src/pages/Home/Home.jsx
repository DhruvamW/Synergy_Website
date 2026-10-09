import Hero from "../../components/Hero/Hero";
import About from "../../components/About/About";
import VisionMission from "../../components/VisionMission/VisionMission";
import SynchronPreview from "../../components/SynchronPreview/SynchronPreview";
import HowWeWork from "../../components/HowWeWork/HowWeWork";

function Home() {
  return (
    <>
      <Hero />
      <About />
      <VisionMission />
      <SynchronPreview />
      <HowWeWork />
    </>
  );
}

export default Home;
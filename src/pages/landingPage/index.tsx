import LandingLayout from "../../components/layout";
import Pitch from "./sections/pitch";
import Showcase from "./sections/showcase";
import Story from "./sections/story";
import ThisYear from "./sections/thisYear";
// import Youtube from "./sections/youtube";
// import CountdownTimer from "./sections/countdown/CountdownTimer";
// import Twitter from "./sections/twitter";
import Swags from "./sections/swags";
// import Speakers from "./sections/speakers";
function LandingPage() {
  // Create a ref for the Pitch section

  return (
    <LandingLayout>
      <Showcase />
      <ThisYear />
      <Pitch />
      <Swags />
      <Story />
      {/* <Marquee />
      <ImageGallery/>
      <Speakers />
      <Twitter />
      <Youtube />
      <CountdownTimer /> */}
    </LandingLayout>
  );
}

export default LandingPage;

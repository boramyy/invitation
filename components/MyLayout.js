import Intro from "./Intro";
import ImageSlider from "./ImageSlider";
import GuestBook from "./GuestBook";
import Location from "./Location";
import Share from "./Share";

const Layout = props => (
  <div>
    <Intro />
    <ImageSlider />
    <GuestBook />
    <Location />
    <Share />
  </div>
);

export default Layout;
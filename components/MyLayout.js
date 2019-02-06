import Intro from "./Intro";
import ImageSlider from "./ImageSlider";
import Location from "./Location";
import Share from "./Share";

class Layout extends React.Component {
  componentDidMount() {
    Kakao.init("969225fd468a90819932423f35c6a247");
  }

  render() {
    return (
      <div>
        {/* <Header /> */}
        <Intro />
        <ImageSlider />
        <Location />
        <Share />
      </div>
    );
  }
}

export default Layout;
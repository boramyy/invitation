import Intro from "../components/Intro";
import ImageSlider from "../components/ImageSlider";
import Location from "../components/Location";
import Share from "../components/Share";

class Index extends React.Component {
  
  componentDidMount() {
    Kakao.init("969225fd468a90819932423f35c6a247");
  }

  render() {
    return (
      <div>
        <h1 className="hide">준호와 한나 결혼합니다.</h1>
        <Intro />
        <ImageSlider />
        <Location />
        <Share />
      </div>
    );
  }
}

export default Index;
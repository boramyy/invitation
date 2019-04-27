
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
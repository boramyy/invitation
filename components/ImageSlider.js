import styled from "styled-components";
import AliceCarousel from "react-alice-carousel";
import "react-alice-carousel/lib/alice-carousel.css";

const ImgForSlide = styled.img`
  width: 100%
`;

const WrapBoxThumb = styled.ul`
  overflow: hidden;
`;

const BoxThumb = styled.li`
  float: left;
  width: 20%;
  padding:4px;
  list-style: none;
  box-sizing: border-box;
`;

const Thumb = styled.div`
  position: relative;
  width: 100%;
  padding-top: 100%;
  border-radius: 50%;
  background-image: ${props => `${props.thumbnail}`};
  background-color: #ccc;
`;

class ImageSlider extends React.Component {
  
  constructor(props) {
    super(props);
    this.state = {
      currentIndex: 0,
      images: [
        {
          origin: "/static/images/img_05.jpeg",
          thumbnail: "/static/images/thumb_img_05.jpeg"
        },
        {
          origin: "/static/images/img_01.jpeg",
          thumbnail: "/static/images/thumb_img_01.jpeg"
        },
        {
          origin: "/static/images/img_03.jpeg",
          thumbnail: "/static/images/thumb_img_03.jpeg"
        },
        {
          origin: "/static/images/img_04.jpeg",
          thumbnail: "/static/images/thumb_img_04.jpeg"
        },
        {
          origin: "/static/images/img_11.jpeg",
          thumbnail: "/static/images/thumb_img_11.jpeg"
        },
        {
          origin: "/static/images/img_12.jpeg",
          thumbnail: "/static/images/thumb_img_12.jpeg"
        },
        {
          origin: "/static/images/img_13.jpeg",
          thumbnail: "/static/images/thumb_img_13.jpeg"
        }
      ]
    };

    this.handle = {
      slideTo: i => this.setState({ currentIndex: i }),
      getGalleryItems: this.state.images.map((item, idx) => (
        <ImgForSlide key={idx} src={item.origin} />
      )),
      getThumbItems: this.state.images.map((item, idx) => (
        <BoxThumb key={idx}>
          <Thumb
            thumbnail={item.thumbnail}
            onClick={() => this.handle.slideTo(idx)}
          />
        </BoxThumb>
      ))  
    };
  }

  render() {
    const { getGalleryItems, getThumbItems } = this.handle;
    const { currentIndex } = this.state;
    return (
      <article>
        <h2 className="hide">Image Slider</h2>
        <AliceCarousel items={getGalleryItems} dotsDisabled={true} buttonsDisabled={true} slideToIndex={currentIndex} />
        <WrapBoxThumb>{getThumbItems}</WrapBoxThumb>
      </article>
    );
  }
}

export default ImageSlider;
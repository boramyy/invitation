import styled from "styled-components";
import AliceCarousel from "react-alice-carousel";
import "react-alice-carousel/lib/alice-carousel.css";

const ImgForSlide = styled.img`
  width: 100%;
`;

const StyledSlider = styled(AliceCarousel)`
  width: 100%;
`;

class ImageSlider extends React.Component {
  
  constructor(props) {
    super(props);
    this.state = {
      currentIndex: 0,
      images: [
        {
          origin: `${this.props.prefix}/static/images/img_01.jpeg`,
          thumbnail: `${this.props.prefix}/static/images/img_01.jpeg`
        },
        {
          origin: `${this.props.prefix}/static/images/img_02.jpeg`,
          thumbnail: `${this.props.prefix}/static/images/img_02.jpeg`
        },
        {
          origin: `${this.props.prefix}/static/images/img_03.jpeg`,
          thumbnail: `${this.props.prefix}/static/images/img_03.jpeg`
        },
        {
          origin: `${this.props.prefix}/static/images/img_04.jpeg`,
          thumbnail: `${this.props.prefix}/static/images/img_04.jpeg`
        },
        {
          origin: `${this.props.prefix}/static/images/img_05.jpeg`,
          thumbnail: `${this.props.prefix}/static/images/img_05.jpeg`
        },
        {
          origin: `${this.props.prefix}/static/images/img_06.jpeg`,
          thumbnail: `${this.props.prefix}/static/images/img_06.jpeg`
        },
        {
          origin: `${this.props.prefix}/static/images/img_07.jpeg`,
          thumbnail: `${this.props.prefix}/static/images/img_07.jpeg`
        },
        {
          origin: `${this.props.prefix}/static/images/img_08.jpeg`,
          thumbnail: `${this.props.prefix}/static/images/img_08.jpeg`
        },
        {
          origin: `${this.props.prefix}/static/images/img_09.jpeg`,
          thumbnail: `${this.props.prefix}/static/images/img_09.jpeg`
        },
        {
          origin: `${this.props.prefix}/static/images/img_10.jpeg`,
          thumbnail: `${this.props.prefix}/static/images/img_10.jpeg`
        },
        {
          origin: `${this.props.prefix}/static/images/img_11.jpeg`,
          thumbnail: `${this.props.prefix}/static/images/img_11.jpeg`
        }
      ]
    };

    this.handle = {
      getGalleryItems: this.state.images.map((item, idx) => (
        <ImgForSlide key={idx} src={item.origin} />
      ))
    };
  }

  render() {
    const {
      getGalleryItems
    } = this.handle;
    return (
      <article>
        <h2 className="hide">Image Slider</h2>
        <StyledSlider
          items={getGalleryItems}
          dotsDisabled={false}
          buttonsDisabled={true}
          ref={el => (this.Carousel = el)}
        />
      </article>
    );
  }
}

export default ImageSlider;
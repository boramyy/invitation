import styled from "styled-components";

const MapBox = styled.div`
  height: 300px;
  margin-right: -30px;
  margin-left: -30px;
  & .custom-overlay {
    position: relative;
    display: block;
    width: 80px;
    margin-bottom: 50px;
    font-weight: bold;
    text-align: center;
    border: 1px solid #111;
    background-color: #fff;
    &:after {
      content: "";
      position: absolute;
      bottom:-6px;
      left:34px;
      display: block;
      width: 10px;
      height: 10px;
      border-right: 1px solid #111;
      border-bottom: 1px solid #111;
      background-color: #fff;
      transform: rotate(45deg);
    }
  }
`;

const ButtonBox = styled.div`
  position: absolute;
  right: 30px;
  overflow: hidden;
  margin-top: -25px;
  z-index: 10;
`
const ButtonNavi = styled.button`
  float: left;
  width: 45px;
  height: 45px;
  margin-left: 15px;
  border-radius: 50%;
  background-color: #ccc;
`;

const WayBox = styled.div`
  margin-top:50px;
  & > p {margin-top:-5px; line-height:1.6;}
  & > p > b {font-weight: normal;}
`

const Address = styled.p`
  margin-top: 25px;
`

class Location extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    const container = document.getElementById('map'); //지도를 담을 영역의 DOM 레퍼런스

    const positionCenter = new daum.maps.LatLng(37.51492617882784, 127.10111030204156);
    const positionApelgamo = new daum.maps.LatLng(37.51592626764367, 127.09964406341295);

    const options = { //지도를 생성할 때 필요한 기본 옵션
      center: positionCenter,
      level: 4
    };

    const map = new daum.maps.Map(container, options); //지도 생성 및 객체 리턴
    const marker = new daum.maps.Marker({
      map: map,
      position: positionApelgamo
    });

    // 커스텀 오버레이에 표출될 내용
    const content = '<span class="custom-overlay">아펠가모</span>';

    // 커스텀 오버레이 생성
    const customOverlay = new daum.maps.CustomOverlay({
      map: map,
      position: positionApelgamo,
      content: content,
      yAnchor: 1
    });
  }

  render() {
    return <article className="wrap-content">
        <h2>아펠가모 잠실</h2>
        <MapBox id="map" />
        <ButtonBox>
          <ButtonNavi />
          <ButtonNavi />
          <ButtonNavi />
        </ButtonBox>
        <Address>
          서울특별시 송파구
          <br /> 올림픽로35길 137 한국광고문화회관 2층
        </Address>
        <WayBox>
          <h3>자가용</h3>
          <p>주차 2시간 무료</p>
        </WayBox>
        <WayBox>
          <h3>지하철로 오시는 방법</h3>
          <p>
            <b>잠실역 7번출구(2호선, 8호선)</b>로 나와 잠실대교 방면 200m 직진 후 삼거리에서 우회전 한국광고문화회관 2층 (도보 5분)
          </p>
        </WayBox>
        <WayBox>
          <h3>버스로 오시는 방법</h3>
          <p>
            <b>잠실역 사거리</b>에서 하차 후, <b>
              잠실대교 남단 교차로에서 우회전
            </b> 한국광고문화회관 2층
          </p>
        </WayBox>
      </article>;
  }
}

export default Location;
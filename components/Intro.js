import styled from "styled-components";

class Intro extends React.Component {
  constructor(props) {
    super(props);
  }
  
  render() {
    const BoxText = styled.div`
      margin-top: 3em;
      margin-bottom: 3.4em;
    `;

    const TextThanks = styled.p`
      font-size: 1.2em;
      text-align: center;
      &:after {
        content: "";
        display: block;
        width: 15px;
        height: 2px;
        margin: 1.8em auto;
        background-color: #eee;
      }
    `;

    const ImgWho = styled.img`
      width: 215px;
      margin: 0 auto;
    `;

    return (
      <article>
        <h2 className="hide">Intro</h2>
        <img className="content-large" src={`${this.props.prefix}/static/images/intro.jpg`} />
        <BoxText>
          <TextThanks>
            귀한 걸음 하시어 축복해주시면 <br />
            더없는 격려와 기쁨으로 간직하겠습니다.
          </TextThanks>
          <TextThanks>
            2019년 3월 10일 일요일 11시 <br />
            잠실 아펠가모
          </TextThanks>
          <ImgWho className="img-who" src={`${this.props.prefix}/static/images/who.jpg`} />
        </BoxText>
      </article>
    );
  }
}

export default Intro;
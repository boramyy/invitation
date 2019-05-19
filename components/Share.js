import styled from "styled-components";

class Share extends React.Component {
  constructor(props) {
    super(props);
  }

  handles = {
    sendLink: e => {
      Kakao.Link.sendCustom({
        templateId: 14643
      });
    }
  }

  render() {

  const StyledH2 = styled.h2`
    display: inline-block;
    margin-bottom: 0;
    color: #fff;
  `;

  const Btn = styled.button`
    float: right;
    width: 34px;
    height: 34px;
    margin-top: -5px;
    background-image: url("${this.props.prefix}/static/images/kakaolink_btn_medium.png");
    background-size: 34px 34px;
    background-position: center center;
    background-repeat: no-repeat;
    &:active {
      background-image: url("${this.props.prefix}/static/images/kakaolink_btn_medium_ov.png");
    }
  `;

  const StyledArticle = styled.article`
    margin-bottom: 0!important;
    padding-top: 20px;
    padding-bottom: 40px;
    background-color: #333;
  `;

    return (
      <StyledArticle className="wrap-content">
        <StyledH2>공유하기</StyledH2>
        <Btn onClick={this.handles.sendLink} />
      </StyledArticle>
    );
  }
}

export default Share;
import Document, { Head, Main, NextScript } from 'next/document';
import { ServerStyleSheet, createGlobalStyle } from "styled-components";

export default class MyDocument extends Document {
  static getInitialProps({ renderPage }) {
    const sheet = new ServerStyleSheet()
    const page = renderPage(App => props => sheet.collectStyles(<App {...props} />))
    const styleTags = sheet.getStyleElement()
    return { ...page, styleTags }
  }

  render() {

    const prefix = process.env.NODE_ENV === 'production' ? 'https://boramyy.github.io/invitation' : '';

    const GlobalStyle = createGlobalStyle`
      @media only screen and (min-width : 1024px) {
        html {
          max-width: 600px;
          margin:50 auto !important;
          box-shadow: 10px 10px 50px rgba(0,0,0,0.2);
        }
      }

      html {
        position: relative;
      }

      html, body, p {
        margin: 0;
        padding: 0;
        margin-block-start: 0;
        margin-block-end: 0;
      }
      body {
        font-family: "Noto Sans KR", san-serif;
        font-size: 15px;
        font-weight: 300;
        color: #000;
        line-height: 1.6;
        letter-spacing: -1px;
        word-spacing: 2px;
      }
      h2, h3 {font-weight:bold;line-height:1;}
      h2 {margin-bottom:30px;font-size:1.3em;}
      h3 {margin-bottom:25px;font-size:1.1em;}
      ul {
        margin-block-start: 0;
        margin-block-end: 0;
        padding-inline-start: 0;
      }
      img {display:block}
      .hide {display:none;}
      .wrap-content {margin:70px 0;padding-right:30px;padding-left:30px;}
      .content-large {display:block; width:100%;}
    
      .alice-carousel__dots {margin-top:15px;}
      .alice-carousel__dots-item:not(:last-child) {margin-right:12px}
      .alice-carousel__dots-item {
        width: 20px;
        height: 20px;
        background-color: transparent;
        background-size: auto 100%;
        background-position: center center;
      }
      .alice-carousel__dots-item.__active {opacity:0.2}

      .alice-carousel__dots-item:nth-child(1) {background-image:url("${prefix}/static/images/img_01.jpeg")}
      .alice-carousel__dots-item:nth-child(2) {background-image:url("${prefix}/static/images/img_02.jpeg")}
      .alice-carousel__dots-item:nth-child(3) {background-image:url("${prefix}/static/images/img_03.jpeg")}
      .alice-carousel__dots-item:nth-child(4) {background-image:url("${prefix}/static/images/img_04.jpeg")}
      .alice-carousel__dots-item:nth-child(5) {background-image:url("${prefix}/static/images/img_05.jpeg")}
      .alice-carousel__dots-item:nth-child(6) {background-image:url("${prefix}/static/images/img_06.jpeg")}
      .alice-carousel__dots-item:nth-child(7) {background-image:url("${prefix}/static/images/img_07.jpeg")}
      .alice-carousel__dots-item:nth-child(8) {background-image:url("${prefix}/static/images/img_08.jpeg")}
      .alice-carousel__dots-item:nth-child(9) {background-image:url("${prefix}/static/images/img_09.jpeg")}
      .alice-carousel__dots-item:nth-child(10) {background-image:url("${prefix}/static/images/img_10.jpeg")}
      .alice-carousel__dots-item:nth-child(11) {background-image:url("${prefix}/static/images/img_11.jpeg")}
    `;

    return <html>
        <title>준호♡한나, 결혼합니다.</title>
        <Head>
          <meta name="viewport" content="initial-scale=1.0, minimum-scale=1.0, width=device-width" />
          <meta property="og:title" content="준호♡한나, 결혼합니다." />
          <meta property="og:description" content="" />
          <meta property="og:image" content="/static/images/oglink.jpg" />
          {/* <meta property="og:url" content="http://dunocanna.site/" /> */}
          <meta property="og:url" content="https://boramyy.github.io/dunocanna" />
          <link rel="stylesheet" href={`${prefix}/static/css/reset.css`} key="resetcss" />
          <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Noto+Sans+KR:300,400,700" key="google-font-nanum-m" />
          {this.props.styleTags}
        </Head>
        <body>
          <GlobalStyle />
          <Main />
          <script type="text/javascript" src="//dapi.kakao.com/v2/maps/sdk.js?appkey=969225fd468a90819932423f35c6a247" />
          <script src="//developers.kakao.com/sdk/js/kakao.min.js"></script>
          <NextScript />
        </body>
      </html>;
  }
}
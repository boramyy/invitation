import Document, { Head, Main, NextScript } from 'next/document';
import { ServerStyleSheet, createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
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
  h2, h3 {
    margin-bottom: 30px;
    font-weight:bold;
    line-height:1;
  }
  h2 {font-size: 1.3em;}
  h3 {font-size: 1.1em;}
  ul {
    margin-block-start: 0;
    margin-block-end: 0;
    padding-inline-start: 0;
  }
  img {display:block}
  .hide {display:none;}
  .wrap-content {padding-right:30px;padding-left:30px;}
  .content-large {display:block; width:100%;}
`;

export default class MyDocument extends Document {
  static getInitialProps({ renderPage }) {
    const sheet = new ServerStyleSheet()
    const page = renderPage(App => props => sheet.collectStyles(<App {...props} />))
    const styleTags = sheet.getStyleElement()
    return { ...page, styleTags }
  }

  render() {
    return <html>
        <Head>
          <title>준호 한나, 결혼합니다.</title>
          <meta name="viewport" content="initial-scale=1.0, minimum-scale=1.0, width=device-width" />
          <link rel="stylesheet" href="/static/css/reset.css" key="resetcss" />
          <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Noto+Sans+KR:300,400,700" key="google-font-nanum-m" />
          {this.props.styleTags}
        </Head>
        <body>
          <GlobalStyle />
          <Main />
          <script type="text/javascript" src="//dapi.kakao.com/v2/maps/sdk.js?appkey=969225fd468a90819932423f35c6a247" />
          <NextScript />
        </body>
      </html>;
  }
}
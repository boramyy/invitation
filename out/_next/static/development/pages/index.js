((window["webpackJsonp"] = window["webpackJsonp"] || []).push([["static/development/pages/index.js"],{

/***/ "./components/ImageSlider.js":
/*!***********************************!*\
  !*** ./components/ImageSlider.js ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");
/* harmony import */ var react_alice_carousel__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-alice-carousel */ "./node_modules/react-alice-carousel/lib/react-alice-carousel.js");
/* harmony import */ var react_alice_carousel__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_alice_carousel__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_alice_carousel_lib_alice_carousel_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-alice-carousel/lib/alice-carousel.css */ "./node_modules/react-alice-carousel/lib/alice-carousel.css");
/* harmony import */ var react_alice_carousel_lib_alice_carousel_css__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_alice_carousel_lib_alice_carousel_css__WEBPACK_IMPORTED_MODULE_3__);


function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }




var ImgForSlide = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].img.withConfig({
  displayName: "ImageSlider__ImgForSlide",
  componentId: "th0xix-0"
})(["width:100%;"]);
var StyledSlider = Object(styled_components__WEBPACK_IMPORTED_MODULE_1__["default"])(react_alice_carousel__WEBPACK_IMPORTED_MODULE_2___default.a).withConfig({
  displayName: "ImageSlider__StyledSlider",
  componentId: "th0xix-1"
})(["width:100%;"]);

var ImageSlider =
/*#__PURE__*/
function (_React$Component) {
  _inherits(ImageSlider, _React$Component);

  function ImageSlider(props) {
    var _this;

    _classCallCheck(this, ImageSlider);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(ImageSlider).call(this, props));
    _this.state = {
      currentIndex: 0,
      images: [{
        origin: "".concat(_this.props.prefix, "/static/images/img_01.jpeg"),
        thumbnail: "".concat(_this.props.prefix, "/static/images/img_01.jpeg")
      }, {
        origin: "".concat(_this.props.prefix, "/static/images/img_02.jpeg"),
        thumbnail: "".concat(_this.props.prefix, "/static/images/img_02.jpeg")
      }, {
        origin: "".concat(_this.props.prefix, "/static/images/img_03.jpeg"),
        thumbnail: "".concat(_this.props.prefix, "/static/images/img_03.jpeg")
      }, {
        origin: "".concat(_this.props.prefix, "/static/images/img_04.jpeg"),
        thumbnail: "".concat(_this.props.prefix, "/static/images/img_04.jpeg")
      }, {
        origin: "".concat(_this.props.prefix, "/static/images/img_05.jpeg"),
        thumbnail: "".concat(_this.props.prefix, "/static/images/img_05.jpeg")
      }, {
        origin: "".concat(_this.props.prefix, "/static/images/img_06.jpeg"),
        thumbnail: "".concat(_this.props.prefix, "/static/images/img_06.jpeg")
      }, {
        origin: "".concat(_this.props.prefix, "/static/images/img_07.jpeg"),
        thumbnail: "".concat(_this.props.prefix, "/static/images/img_07.jpeg")
      }, {
        origin: "".concat(_this.props.prefix, "/static/images/img_08.jpeg"),
        thumbnail: "".concat(_this.props.prefix, "/static/images/img_08.jpeg")
      }, {
        origin: "".concat(_this.props.prefix, "/static/images/img_09.jpeg"),
        thumbnail: "".concat(_this.props.prefix, "/static/images/img_09.jpeg")
      }, {
        origin: "".concat(_this.props.prefix, "/static/images/img_10.jpeg"),
        thumbnail: "".concat(_this.props.prefix, "/static/images/img_10.jpeg")
      }, {
        origin: "".concat(_this.props.prefix, "/static/images/img_11.jpeg"),
        thumbnail: "".concat(_this.props.prefix, "/static/images/img_11.jpeg")
      }]
    };
    _this.handle = {
      getGalleryItems: _this.state.images.map(function (item, idx) {
        return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(ImgForSlide, {
          key: idx,
          src: item.origin
        });
      })
    };
    return _this;
  }

  _createClass(ImageSlider, [{
    key: "render",
    value: function render() {
      var _this2 = this;

      var getGalleryItems = this.handle.getGalleryItems;
      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("article", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h2", {
        className: "hide"
      }, "Image Slider"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(StyledSlider, {
        items: getGalleryItems,
        dotsDisabled: false,
        buttonsDisabled: true,
        ref: function ref(el) {
          return _this2.Carousel = el;
        }
      }));
    }
  }]);

  return ImageSlider;
}(react__WEBPACK_IMPORTED_MODULE_0___default.a.Component);

/* harmony default export */ __webpack_exports__["default"] = (ImageSlider);

/***/ }),

/***/ "./components/Intro.js":
/*!*****************************!*\
  !*** ./components/Intro.js ***!
  \*****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");


function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }



var Intro =
/*#__PURE__*/
function (_React$Component) {
  _inherits(Intro, _React$Component);

  function Intro(props) {
    _classCallCheck(this, Intro);

    return _possibleConstructorReturn(this, _getPrototypeOf(Intro).call(this, props));
  }

  _createClass(Intro, [{
    key: "render",
    value: function render() {
      var BoxText = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].div.withConfig({
        displayName: "Intro__BoxText",
        componentId: "sc-1423dq1-0"
      })(["margin-top:3em;margin-bottom:3.4em;"]);
      var TextThanks = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].p.withConfig({
        displayName: "Intro__TextThanks",
        componentId: "sc-1423dq1-1"
      })(["font-size:1.2em;text-align:center;&:after{content:\"\";display:block;width:15px;height:2px;margin:1.8em auto;background-color:#eee;}"]);
      var ImgWho = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].img.withConfig({
        displayName: "Intro__ImgWho",
        componentId: "sc-1423dq1-2"
      })(["width:215px;margin:0 auto;"]);
      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("article", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h2", {
        className: "hide"
      }, "Intro"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
        className: "content-large",
        src: "".concat(this.props.prefix, "/static/images/intro.jpg")
      }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(BoxText, null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(TextThanks, null, "\uADC0\uD55C \uAC78\uC74C \uD558\uC2DC\uC5B4 \uCD95\uBCF5\uD574\uC8FC\uC2DC\uBA74 ", react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("br", null), "\uB354\uC5C6\uB294 \uACA9\uB824\uC640 \uAE30\uC068\uC73C\uB85C \uAC04\uC9C1\uD558\uACA0\uC2B5\uB2C8\uB2E4."), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(TextThanks, null, "2019\uB144 3\uC6D4 10\uC77C \uC77C\uC694\uC77C 11\uC2DC ", react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("br", null), "\uC7A0\uC2E4 \uC544\uD3A0\uAC00\uBAA8"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(ImgWho, {
        className: "img-who",
        src: "".concat(this.props.prefix, "/static/images/who.jpg")
      })));
    }
  }]);

  return Intro;
}(react__WEBPACK_IMPORTED_MODULE_0___default.a.Component);

/* harmony default export */ __webpack_exports__["default"] = (Intro);

/***/ }),

/***/ "./components/Location.js":
/*!********************************!*\
  !*** ./components/Location.js ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");


function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }


var MapBox = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].div.withConfig({
  displayName: "Location__MapBox",
  componentId: "sc-2fi4ai-0"
})(["height:300px;margin-right:-30px;margin-left:-30px;& .custom-overlay{position:relative;display:block;width:80px;margin-bottom:50px;font-weight:bold;text-align:center;border:1px solid #111;background-color:#fff;&:after{content:\"\";position:absolute;bottom:-6px;left:34px;display:block;width:10px;height:10px;border-right:1px solid #111;border-bottom:1px solid #111;background-color:#fff;transform:rotate(45deg);}}"]);
var ButtonBox = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].div.withConfig({
  displayName: "Location__ButtonBox",
  componentId: "sc-2fi4ai-1"
})(["position:absolute;right:30px;margin-top:-25px;z-index:10;"]);

var NaviLink = function NaviLink(props) {
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
    className: props.className,
    href: props.href,
    onClick: props.onClick
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
    src: props.src
  }));
};

var StyledNaviLink = Object(styled_components__WEBPACK_IMPORTED_MODULE_1__["default"])(NaviLink).withConfig({
  displayName: "Location__StyledNaviLink",
  componentId: "sc-2fi4ai-2"
})(["float:left;width:45px;height:45px;margin-left:15px;background-color:none;border-radius:50%;box-shadow:4px 4px 10px rgba(0,0,0,0.1);cursor:pointer;& img{width:100%;border-radius:50%;}"]);
var WayBox = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].div.withConfig({
  displayName: "Location__WayBox",
  componentId: "sc-2fi4ai-3"
})(["margin-top:50px;& > p{margin-top:-5px;line-height:1.6;}& > p > b{font-weight:normal;}"]);
var Address = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].p.withConfig({
  displayName: "Location__Address",
  componentId: "sc-2fi4ai-4"
})(["margin-top:25px;"]);
var ColorSpan = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].span.withConfig({
  displayName: "Location__ColorSpan",
  componentId: "sc-2fi4ai-5"
})(["font-weight:400;color:", ";word-break:keep-all;"], function (props) {
  return props.color;
});

function BusInfo(props) {
  return props.busInfo.map(function (info, infoIdx) {
    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(BusInfoBox, {
      key: infoIdx
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(BusTitle, {
      color: info.color
    }, info.title), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(BusList, null, info.buses.map(function (bus, i) {
      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(BusNum, {
        key: i
      }, bus);
    })));
  });
}

var BusInfoBox = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].div.withConfig({
  displayName: "Location__BusInfoBox",
  componentId: "sc-2fi4ai-6"
})(["overflow:hidden;margin-top:30px;"]);
var BusTitle = Object(styled_components__WEBPACK_IMPORTED_MODULE_1__["default"])(ColorSpan).withConfig({
  displayName: "Location__BusTitle",
  componentId: "sc-2fi4ai-7"
})(["display:block;float:left;width:52px;margin-right:30px;"]);
var BusList = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].div.withConfig({
  displayName: "Location__BusList",
  componentId: "sc-2fi4ai-8"
})(["float:left;width:230px;"]);
var BusNum = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].span.withConfig({
  displayName: "Location__BusNum",
  componentId: "sc-2fi4ai-9"
})(["display:inline-block;margin-right:10px;"]);

var Location =
/*#__PURE__*/
function (_React$Component) {
  _inherits(Location, _React$Component);

  function Location(props) {
    var _this;

    _classCallCheck(this, Location);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(Location).call(this, props));

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "getMap", function () {
      var container = document.getElementById('map'); //지도를 담을 영역의 DOM 레퍼런스

      var positionCenter = new daum.maps.LatLng(37.51492617882784, 127.10111030204156);
      var options = {
        //지도를 생성할 때 필요한 기본 옵션
        center: positionCenter,
        level: 4
      }; //지도 생성 및 객체 리턴

      var map = new daum.maps.Map(container, options); // 마커 생성

      var positionApelgamo = new daum.maps.LatLng(37.51592626764367, 127.09964406341295);
      var marker = new daum.maps.Marker({
        map: map,
        position: positionApelgamo
      }); // 커스텀 오버레이 생성

      var content = '<span class="custom-overlay">아펠가모</span>';
      var customOverlay = new daum.maps.CustomOverlay({
        map: map,
        position: positionApelgamo,
        content: content,
        yAnchor: 1
      });
    });

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "openKakaoNavi", function (e) {
      e.preventDefault(); //<![CDATA[

      Kakao.Navi.start({
        name: "아펠가모 잠실",
        x: 127.09964406341295,
        y: 37.51592626764367,
        coordType: "wgs84"
      }); //]]>
    });

    _this.state = {
      busInfo: [{
        title: '파란 간선버스',
        color: '#3f68ff',
        buses: ['301', '302', '303', '320', '341', '351', '360', '362', 'N13']
      }, {
        title: '빨간 광역버스',
        color: '#f61919',
        buses: ['116', '119', '1001', '1007', '1009', '1112', '1115-6', '1117', '1650', '9403', 'M2316']
      }, {
        title: '초록 지선버스',
        color: '#00ab50',
        buses: ['2311', '2412', '2415', '3216', '3217', '3313', '3314', '3315', '3317', '3318', '3411', '3412', '3413', '3414', '4318', '4319']
      }, {
        title: '시외버스',
        color: '#3a3a3a',
        buses: ['16', '30-1', '30-3', '30-5', '32', '70', '101', '116', '119', '2000-2']
      }]
    };
    return _this;
  }

  _createClass(Location, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      this.getMap();
    }
  }, {
    key: "render",
    value: function render() {
      var _this2 = this;

      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("article", {
        className: "wrap-content"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h2", null, "\uC7A0\uC2E4 \uC544\uD3A0\uAC00\uBAA8"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(MapBox, {
        id: "map"
      }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(ButtonBox, null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(StyledNaviLink, {
        src: "".concat(this.props.prefix, "/static/images/kakaonavi_btn.jpg"),
        href: "#!",
        onClick: function onClick(e) {
          return _this2.openKakaoNavi(e);
        },
        onClickCapture: function onClickCapture(e) {
          return _this2.openKakaoNavi(e);
        }
      }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(StyledNaviLink, {
        src: "".concat(this.props.prefix, "/static/images/tmap_btn.jpg"),
        href: "https://api2.sktelecom.com/tmap/app/routes?appKey=195e2e4e-4284-408b-b8c2-da611faa8493&name=\uC544\uD3A0\uAC00\uBAA8 \uC7A0\uC2E4&lon=127.09964406341295&lat=37.51592626764367"
      })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Address, null, "\uC11C\uC6B8\uD2B9\uBCC4\uC2DC \uC1A1\uD30C\uAD6C", react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("br", null), " \uC62C\uB9BC\uD53D\uB85C35\uAE38 137 \uD55C\uAD6D\uAD11\uACE0\uBB38\uD654\uD68C\uAD00 2\uCE35"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(WayBox, null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h3", null, "\uC790\uAC00\uC6A9"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", null, "\uB0B4\uBE44\uAC8C\uC774\uC158\uC5D0 ", react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("b", null, "\uC7A0\uC2E4 \uC544\uD3A0\uAC00\uBAA8"), " \uAC80\uC0C9", react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("br", null), "\uC8FC\uCC28 2\uC2DC\uAC04 \uBB34\uB8CC")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(WayBox, null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h3", null, "\uC9C0\uD558\uCCA0\uB85C \uC624\uC2DC\uB294 \uBC29\uBC95"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("b", null, "\uC7A0\uC2E4\uC5ED 7\uBC88\uCD9C\uAD6C(", react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(ColorSpan, {
        color: "#61b057"
      }, "2\uD638\uC120"), ", ", react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(ColorSpan, {
        color: "#ff4585"
      }, "8\uD638\uC120"), ")"), "\uB85C \uB098\uC640 \uC7A0\uC2E4\uB300\uAD50 \uBC29\uBA74 200m \uC9C1\uC9C4 \uD6C4 \uC0BC\uAC70\uB9AC\uC5D0\uC11C \uC6B0\uD68C\uC804 \uD55C\uAD6D\uAD11\uACE0\uBB38\uD654\uD68C\uAD00 2\uCE35 (\uB3C4\uBCF4 5\uBD84)")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(WayBox, null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h3", null, "\uBC84\uC2A4\uB85C \uC624\uC2DC\uB294 \uBC29\uBC95"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("b", null, "\uC7A0\uC2E4\uC5ED \uC0AC\uAC70\uB9AC"), "\uC5D0\uC11C \uD558\uCC28 \uD6C4, ", react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("b", null, "\uC7A0\uC2E4\uB300\uAD50 \uB0A8\uB2E8 \uAD50\uCC28\uB85C\uC5D0\uC11C \uC6B0\uD68C\uC804"), " \uD55C\uAD6D\uAD11\uACE0\uBB38\uD654\uD68C\uAD00 2\uCE35"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(BusInfo, {
        busInfo: this.state.busInfo
      })));
    }
  }]);

  return Location;
}(react__WEBPACK_IMPORTED_MODULE_0___default.a.Component);

/* harmony default export */ __webpack_exports__["default"] = (Location);

/***/ }),

/***/ "./components/Share.js":
/*!*****************************!*\
  !*** ./components/Share.js ***!
  \*****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");


function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }



var Share =
/*#__PURE__*/
function (_React$Component) {
  _inherits(Share, _React$Component);

  function Share(props) {
    var _this;

    _classCallCheck(this, Share);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(Share).call(this, props));

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "handles", {
      sendLink: function sendLink(e) {
        Kakao.Link.sendCustom({
          templateId: 14643
        });
      }
    });

    return _this;
  }

  _createClass(Share, [{
    key: "render",
    value: function render() {
      var StyledH2 = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].h2.withConfig({
        displayName: "Share__StyledH2",
        componentId: "sc-1mtupyi-0"
      })(["display:inline-block;margin-bottom:0;color:#fff;"]);
      var Btn = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].button.withConfig({
        displayName: "Share__Btn",
        componentId: "sc-1mtupyi-1"
      })(["float:right;width:34px;height:34px;margin-top:-5px;background-image:url(\"", "/static/images/kakaolink_btn_medium.png\");background-size:34px 34px;background-position:center center;background-repeat:no-repeat;&:active{background-image:url(\"", "/static/images/kakaolink_btn_medium_ov.png\");}"], this.props.prefix, this.props.prefix);
      var StyledArticle = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].article.withConfig({
        displayName: "Share__StyledArticle",
        componentId: "sc-1mtupyi-2"
      })(["margin-bottom:0!important;padding-top:20px;padding-bottom:40px;background-color:#333;"]);
      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(StyledArticle, {
        className: "wrap-content"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(StyledH2, null, "\uACF5\uC720\uD558\uAE30"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Btn, {
        onClick: this.handles.sendLink
      }));
    }
  }]);

  return Share;
}(react__WEBPACK_IMPORTED_MODULE_0___default.a.Component);

/* harmony default export */ __webpack_exports__["default"] = (Share);

/***/ }),

/***/ "./node_modules/@emotion/is-prop-valid/dist/is-prop-valid.browser.esm.js":
/*!*******************************************************************************!*\
  !*** ./node_modules/@emotion/is-prop-valid/dist/is-prop-valid.browser.esm.js ***!
  \*******************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _emotion_memoize__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @emotion/memoize */ "./node_modules/@emotion/memoize/dist/memoize.browser.esm.js");


var reactPropsRegex = /^((children|dangerouslySetInnerHTML|key|ref|autoFocus|defaultValue|defaultChecked|innerHTML|suppressContentEditableWarning|suppressHydrationWarning|valueLink|accept|acceptCharset|accessKey|action|allow|allowUserMedia|allowPaymentRequest|allowFullScreen|allowTransparency|alt|async|autoComplete|autoPlay|capture|cellPadding|cellSpacing|challenge|charSet|checked|cite|classID|className|cols|colSpan|content|contentEditable|contextMenu|controls|controlsList|coords|crossOrigin|data|dateTime|default|defer|dir|disabled|download|draggable|encType|form|formAction|formEncType|formMethod|formNoValidate|formTarget|frameBorder|headers|height|hidden|high|href|hrefLang|htmlFor|httpEquiv|id|inputMode|integrity|is|keyParams|keyType|kind|label|lang|list|loop|low|marginHeight|marginWidth|max|maxLength|media|mediaGroup|method|min|minLength|multiple|muted|name|nonce|noValidate|open|optimum|pattern|placeholder|playsInline|poster|preload|profile|radioGroup|readOnly|referrerPolicy|rel|required|reversed|role|rows|rowSpan|sandbox|scope|scoped|scrolling|seamless|selected|shape|size|sizes|slot|span|spellCheck|src|srcDoc|srcLang|srcSet|start|step|style|summary|tabIndex|target|title|type|useMap|value|width|wmode|wrap|about|datatype|inlist|prefix|property|resource|typeof|vocab|autoCapitalize|autoCorrect|autoSave|color|itemProp|itemScope|itemType|itemID|itemRef|results|security|unselectable|accentHeight|accumulate|additive|alignmentBaseline|allowReorder|alphabetic|amplitude|arabicForm|ascent|attributeName|attributeType|autoReverse|azimuth|baseFrequency|baselineShift|baseProfile|bbox|begin|bias|by|calcMode|capHeight|clip|clipPathUnits|clipPath|clipRule|colorInterpolation|colorInterpolationFilters|colorProfile|colorRendering|contentScriptType|contentStyleType|cursor|cx|cy|d|decelerate|descent|diffuseConstant|direction|display|divisor|dominantBaseline|dur|dx|dy|edgeMode|elevation|enableBackground|end|exponent|externalResourcesRequired|fill|fillOpacity|fillRule|filter|filterRes|filterUnits|floodColor|floodOpacity|focusable|fontFamily|fontSize|fontSizeAdjust|fontStretch|fontStyle|fontVariant|fontWeight|format|from|fr|fx|fy|g1|g2|glyphName|glyphOrientationHorizontal|glyphOrientationVertical|glyphRef|gradientTransform|gradientUnits|hanging|horizAdvX|horizOriginX|ideographic|imageRendering|in|in2|intercept|k|k1|k2|k3|k4|kernelMatrix|kernelUnitLength|kerning|keyPoints|keySplines|keyTimes|lengthAdjust|letterSpacing|lightingColor|limitingConeAngle|local|markerEnd|markerMid|markerStart|markerHeight|markerUnits|markerWidth|mask|maskContentUnits|maskUnits|mathematical|mode|numOctaves|offset|opacity|operator|order|orient|orientation|origin|overflow|overlinePosition|overlineThickness|panose1|paintOrder|pathLength|patternContentUnits|patternTransform|patternUnits|pointerEvents|points|pointsAtX|pointsAtY|pointsAtZ|preserveAlpha|preserveAspectRatio|primitiveUnits|r|radius|refX|refY|renderingIntent|repeatCount|repeatDur|requiredExtensions|requiredFeatures|restart|result|rotate|rx|ry|scale|seed|shapeRendering|slope|spacing|specularConstant|specularExponent|speed|spreadMethod|startOffset|stdDeviation|stemh|stemv|stitchTiles|stopColor|stopOpacity|strikethroughPosition|strikethroughThickness|string|stroke|strokeDasharray|strokeDashoffset|strokeLinecap|strokeLinejoin|strokeMiterlimit|strokeOpacity|strokeWidth|surfaceScale|systemLanguage|tableValues|targetX|targetY|textAnchor|textDecoration|textRendering|textLength|to|transform|u1|u2|underlinePosition|underlineThickness|unicode|unicodeBidi|unicodeRange|unitsPerEm|vAlphabetic|vHanging|vIdeographic|vMathematical|values|vectorEffect|version|vertAdvY|vertOriginX|vertOriginY|viewBox|viewTarget|visibility|widths|wordSpacing|writingMode|x|xHeight|x1|x2|xChannelSelector|xlinkActuate|xlinkArcrole|xlinkHref|xlinkRole|xlinkShow|xlinkTitle|xlinkType|xmlBase|xmlns|xmlnsXlink|xmlLang|xmlSpace|y|y1|y2|yChannelSelector|z|zoomAndPan|for|class|autofocus)|(([Dd][Aa][Tt][Aa]|[Aa][Rr][Ii][Aa]|x)-.*))$/; // https://esbench.com/bench/5bfee68a4cd7e6009ef61d23

var index = Object(_emotion_memoize__WEBPACK_IMPORTED_MODULE_0__["default"])(function (prop) {
  return reactPropsRegex.test(prop) || prop.charCodeAt(0) === 111
  /* o */
  && prop.charCodeAt(1) === 110
  /* n */
  && prop.charCodeAt(2) < 91;
}
/* Z+1 */
);

/* harmony default export */ __webpack_exports__["default"] = (index);


/***/ }),

/***/ "./node_modules/@emotion/memoize/dist/memoize.browser.esm.js":
/*!*******************************************************************!*\
  !*** ./node_modules/@emotion/memoize/dist/memoize.browser.esm.js ***!
  \*******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
function memoize(fn) {
  var cache = {};
  return function (arg) {
    if (cache[arg] === undefined) cache[arg] = fn(arg);
    return cache[arg];
  };
}

/* harmony default export */ __webpack_exports__["default"] = (memoize);


/***/ }),

/***/ "./node_modules/@emotion/unitless/dist/unitless.browser.esm.js":
/*!*********************************************************************!*\
  !*** ./node_modules/@emotion/unitless/dist/unitless.browser.esm.js ***!
  \*********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
var unitlessKeys = {
  animationIterationCount: 1,
  borderImageOutset: 1,
  borderImageSlice: 1,
  borderImageWidth: 1,
  boxFlex: 1,
  boxFlexGroup: 1,
  boxOrdinalGroup: 1,
  columnCount: 1,
  columns: 1,
  flex: 1,
  flexGrow: 1,
  flexPositive: 1,
  flexShrink: 1,
  flexNegative: 1,
  flexOrder: 1,
  gridRow: 1,
  gridRowEnd: 1,
  gridRowSpan: 1,
  gridRowStart: 1,
  gridColumn: 1,
  gridColumnEnd: 1,
  gridColumnSpan: 1,
  gridColumnStart: 1,
  msGridRow: 1,
  msGridRowSpan: 1,
  msGridColumn: 1,
  msGridColumnSpan: 1,
  fontWeight: 1,
  lineHeight: 1,
  opacity: 1,
  order: 1,
  orphans: 1,
  tabSize: 1,
  widows: 1,
  zIndex: 1,
  zoom: 1,
  WebkitLineClamp: 1,
  // SVG-related properties
  fillOpacity: 1,
  floodOpacity: 1,
  stopOpacity: 1,
  strokeDasharray: 1,
  strokeDashoffset: 1,
  strokeMiterlimit: 1,
  strokeOpacity: 1,
  strokeWidth: 1
};

/* harmony default export */ __webpack_exports__["default"] = (unitlessKeys);


/***/ }),

/***/ "./node_modules/detect-passive-events/lib/index.js":
/*!*********************************************************!*\
  !*** ./node_modules/detect-passive-events/lib/index.js ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
// adapted from https://github.com/WICG/EventListenerOptions/blob/gh-pages/explainer.md
var detectPassiveEvents = {
  update: function update() {
    if (typeof window !== 'undefined' && typeof window.addEventListener === 'function') {
      var passive = false;
      var options = Object.defineProperty({}, 'passive', {
        get: function get() {
          passive = true;
        }
      });
      // note: have to set and remove a no-op listener instead of null
      // (which was used previously), becasue Edge v15 throws an error
      // when providing a null callback.
      // https://github.com/rafrex/detect-passive-events/pull/3
      var noop = function noop() {};
      window.addEventListener('testPassiveEventSupport', noop, options);
      window.removeEventListener('testPassiveEventSupport', noop, options);
      detectPassiveEvents.hasSupport = passive;
    }
  }
};

detectPassiveEvents.update();
exports.default = detectPassiveEvents;

/***/ }),

/***/ "./node_modules/memoize-one/dist/memoize-one.esm.js":
/*!**********************************************************!*\
  !*** ./node_modules/memoize-one/dist/memoize-one.esm.js ***!
  \**********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
var simpleIsEqual = function simpleIsEqual(a, b) {
  return a === b;
};

function index (resultFn, isEqual) {
  if (isEqual === void 0) {
    isEqual = simpleIsEqual;
  }

  var lastThis;
  var lastArgs = [];
  var lastResult;
  var calledOnce = false;

  var isNewArgEqualToLast = function isNewArgEqualToLast(newArg, index) {
    return isEqual(newArg, lastArgs[index]);
  };

  var result = function result() {
    for (var _len = arguments.length, newArgs = new Array(_len), _key = 0; _key < _len; _key++) {
      newArgs[_key] = arguments[_key];
    }

    if (calledOnce && lastThis === this && newArgs.length === lastArgs.length && newArgs.every(isNewArgEqualToLast)) {
      return lastResult;
    }

    lastResult = resultFn.apply(this, newArgs);
    calledOnce = true;
    lastThis = this;
    lastArgs = newArgs;
    return lastResult;
  };

  return result;
}

/* harmony default export */ __webpack_exports__["default"] = (index);


/***/ }),

/***/ "./node_modules/object-assign/index.js":
/*!***************************************************************************************************!*\
  !*** delegated ./node_modules/object-assign/index.js from dll-reference dll_831a3634f66cb1dada0c ***!
  \***************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = (__webpack_require__(/*! dll-reference dll_831a3634f66cb1dada0c */ "dll-reference dll_831a3634f66cb1dada0c"))("./node_modules/object-assign/index.js");

/***/ }),

/***/ "./node_modules/process/browser.js":
/*!*****************************************!*\
  !*** ./node_modules/process/browser.js ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// shim for using process in browser
var process = module.exports = {};

// cached from whatever global is present so that test runners that stub it
// don't break things.  But we need to wrap it in a try catch in case it is
// wrapped in strict mode code which doesn't define any globals.  It's inside a
// function because try/catches deoptimize in certain engines.

var cachedSetTimeout;
var cachedClearTimeout;

function defaultSetTimout() {
    throw new Error('setTimeout has not been defined');
}
function defaultClearTimeout () {
    throw new Error('clearTimeout has not been defined');
}
(function () {
    try {
        if (typeof setTimeout === 'function') {
            cachedSetTimeout = setTimeout;
        } else {
            cachedSetTimeout = defaultSetTimout;
        }
    } catch (e) {
        cachedSetTimeout = defaultSetTimout;
    }
    try {
        if (typeof clearTimeout === 'function') {
            cachedClearTimeout = clearTimeout;
        } else {
            cachedClearTimeout = defaultClearTimeout;
        }
    } catch (e) {
        cachedClearTimeout = defaultClearTimeout;
    }
} ())
function runTimeout(fun) {
    if (cachedSetTimeout === setTimeout) {
        //normal enviroments in sane situations
        return setTimeout(fun, 0);
    }
    // if setTimeout wasn't available but was latter defined
    if ((cachedSetTimeout === defaultSetTimout || !cachedSetTimeout) && setTimeout) {
        cachedSetTimeout = setTimeout;
        return setTimeout(fun, 0);
    }
    try {
        // when when somebody has screwed with setTimeout but no I.E. maddness
        return cachedSetTimeout(fun, 0);
    } catch(e){
        try {
            // When we are in I.E. but the script has been evaled so I.E. doesn't trust the global object when called normally
            return cachedSetTimeout.call(null, fun, 0);
        } catch(e){
            // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error
            return cachedSetTimeout.call(this, fun, 0);
        }
    }


}
function runClearTimeout(marker) {
    if (cachedClearTimeout === clearTimeout) {
        //normal enviroments in sane situations
        return clearTimeout(marker);
    }
    // if clearTimeout wasn't available but was latter defined
    if ((cachedClearTimeout === defaultClearTimeout || !cachedClearTimeout) && clearTimeout) {
        cachedClearTimeout = clearTimeout;
        return clearTimeout(marker);
    }
    try {
        // when when somebody has screwed with setTimeout but no I.E. maddness
        return cachedClearTimeout(marker);
    } catch (e){
        try {
            // When we are in I.E. but the script has been evaled so I.E. doesn't  trust the global object when called normally
            return cachedClearTimeout.call(null, marker);
        } catch (e){
            // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error.
            // Some versions of I.E. have different rules for clearTimeout vs setTimeout
            return cachedClearTimeout.call(this, marker);
        }
    }



}
var queue = [];
var draining = false;
var currentQueue;
var queueIndex = -1;

function cleanUpNextTick() {
    if (!draining || !currentQueue) {
        return;
    }
    draining = false;
    if (currentQueue.length) {
        queue = currentQueue.concat(queue);
    } else {
        queueIndex = -1;
    }
    if (queue.length) {
        drainQueue();
    }
}

function drainQueue() {
    if (draining) {
        return;
    }
    var timeout = runTimeout(cleanUpNextTick);
    draining = true;

    var len = queue.length;
    while(len) {
        currentQueue = queue;
        queue = [];
        while (++queueIndex < len) {
            if (currentQueue) {
                currentQueue[queueIndex].run();
            }
        }
        queueIndex = -1;
        len = queue.length;
    }
    currentQueue = null;
    draining = false;
    runClearTimeout(timeout);
}

process.nextTick = function (fun) {
    var args = new Array(arguments.length - 1);
    if (arguments.length > 1) {
        for (var i = 1; i < arguments.length; i++) {
            args[i - 1] = arguments[i];
        }
    }
    queue.push(new Item(fun, args));
    if (queue.length === 1 && !draining) {
        runTimeout(drainQueue);
    }
};

// v8 likes predictible objects
function Item(fun, array) {
    this.fun = fun;
    this.array = array;
}
Item.prototype.run = function () {
    this.fun.apply(null, this.array);
};
process.title = 'browser';
process.browser = true;
process.env = {};
process.argv = [];
process.version = ''; // empty string to avoid regexp issues
process.versions = {};

function noop() {}

process.on = noop;
process.addListener = noop;
process.once = noop;
process.off = noop;
process.removeListener = noop;
process.removeAllListeners = noop;
process.emit = noop;
process.prependListener = noop;
process.prependOnceListener = noop;

process.listeners = function (name) { return [] }

process.binding = function (name) {
    throw new Error('process.binding is not supported');
};

process.cwd = function () { return '/' };
process.chdir = function (dir) {
    throw new Error('process.chdir is not supported');
};
process.umask = function() { return 0; };


/***/ }),

/***/ "./node_modules/prop-types/checkPropTypes.js":
/*!*********************************************************************************************************!*\
  !*** delegated ./node_modules/prop-types/checkPropTypes.js from dll-reference dll_831a3634f66cb1dada0c ***!
  \*********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = (__webpack_require__(/*! dll-reference dll_831a3634f66cb1dada0c */ "dll-reference dll_831a3634f66cb1dada0c"))("./node_modules/prop-types/checkPropTypes.js");

/***/ }),

/***/ "./node_modules/prop-types/factoryWithTypeCheckers.js":
/*!************************************************************!*\
  !*** ./node_modules/prop-types/factoryWithTypeCheckers.js ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */



var assign = __webpack_require__(/*! object-assign */ "./node_modules/object-assign/index.js");

var ReactPropTypesSecret = __webpack_require__(/*! ./lib/ReactPropTypesSecret */ "./node_modules/prop-types/lib/ReactPropTypesSecret.js");
var checkPropTypes = __webpack_require__(/*! ./checkPropTypes */ "./node_modules/prop-types/checkPropTypes.js");

var printWarning = function() {};

if (true) {
  printWarning = function(text) {
    var message = 'Warning: ' + text;
    if (typeof console !== 'undefined') {
      console.error(message);
    }
    try {
      // --- Welcome to debugging React ---
      // This error was thrown as a convenience so that you can use this stack
      // to find the callsite that caused this warning to fire.
      throw new Error(message);
    } catch (x) {}
  };
}

function emptyFunctionThatReturnsNull() {
  return null;
}

module.exports = function(isValidElement, throwOnDirectAccess) {
  /* global Symbol */
  var ITERATOR_SYMBOL = typeof Symbol === 'function' && Symbol.iterator;
  var FAUX_ITERATOR_SYMBOL = '@@iterator'; // Before Symbol spec.

  /**
   * Returns the iterator method function contained on the iterable object.
   *
   * Be sure to invoke the function with the iterable as context:
   *
   *     var iteratorFn = getIteratorFn(myIterable);
   *     if (iteratorFn) {
   *       var iterator = iteratorFn.call(myIterable);
   *       ...
   *     }
   *
   * @param {?object} maybeIterable
   * @return {?function}
   */
  function getIteratorFn(maybeIterable) {
    var iteratorFn = maybeIterable && (ITERATOR_SYMBOL && maybeIterable[ITERATOR_SYMBOL] || maybeIterable[FAUX_ITERATOR_SYMBOL]);
    if (typeof iteratorFn === 'function') {
      return iteratorFn;
    }
  }

  /**
   * Collection of methods that allow declaration and validation of props that are
   * supplied to React components. Example usage:
   *
   *   var Props = require('ReactPropTypes');
   *   var MyArticle = React.createClass({
   *     propTypes: {
   *       // An optional string prop named "description".
   *       description: Props.string,
   *
   *       // A required enum prop named "category".
   *       category: Props.oneOf(['News','Photos']).isRequired,
   *
   *       // A prop named "dialog" that requires an instance of Dialog.
   *       dialog: Props.instanceOf(Dialog).isRequired
   *     },
   *     render: function() { ... }
   *   });
   *
   * A more formal specification of how these methods are used:
   *
   *   type := array|bool|func|object|number|string|oneOf([...])|instanceOf(...)
   *   decl := ReactPropTypes.{type}(.isRequired)?
   *
   * Each and every declaration produces a function with the same signature. This
   * allows the creation of custom validation functions. For example:
   *
   *  var MyLink = React.createClass({
   *    propTypes: {
   *      // An optional string or URI prop named "href".
   *      href: function(props, propName, componentName) {
   *        var propValue = props[propName];
   *        if (propValue != null && typeof propValue !== 'string' &&
   *            !(propValue instanceof URI)) {
   *          return new Error(
   *            'Expected a string or an URI for ' + propName + ' in ' +
   *            componentName
   *          );
   *        }
   *      }
   *    },
   *    render: function() {...}
   *  });
   *
   * @internal
   */

  var ANONYMOUS = '<<anonymous>>';

  // Important!
  // Keep this list in sync with production version in `./factoryWithThrowingShims.js`.
  var ReactPropTypes = {
    array: createPrimitiveTypeChecker('array'),
    bool: createPrimitiveTypeChecker('boolean'),
    func: createPrimitiveTypeChecker('function'),
    number: createPrimitiveTypeChecker('number'),
    object: createPrimitiveTypeChecker('object'),
    string: createPrimitiveTypeChecker('string'),
    symbol: createPrimitiveTypeChecker('symbol'),

    any: createAnyTypeChecker(),
    arrayOf: createArrayOfTypeChecker,
    element: createElementTypeChecker(),
    instanceOf: createInstanceTypeChecker,
    node: createNodeChecker(),
    objectOf: createObjectOfTypeChecker,
    oneOf: createEnumTypeChecker,
    oneOfType: createUnionTypeChecker,
    shape: createShapeTypeChecker,
    exact: createStrictShapeTypeChecker,
  };

  /**
   * inlined Object.is polyfill to avoid requiring consumers ship their own
   * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/is
   */
  /*eslint-disable no-self-compare*/
  function is(x, y) {
    // SameValue algorithm
    if (x === y) {
      // Steps 1-5, 7-10
      // Steps 6.b-6.e: +0 != -0
      return x !== 0 || 1 / x === 1 / y;
    } else {
      // Step 6.a: NaN == NaN
      return x !== x && y !== y;
    }
  }
  /*eslint-enable no-self-compare*/

  /**
   * We use an Error-like object for backward compatibility as people may call
   * PropTypes directly and inspect their output. However, we don't use real
   * Errors anymore. We don't inspect their stack anyway, and creating them
   * is prohibitively expensive if they are created too often, such as what
   * happens in oneOfType() for any type before the one that matched.
   */
  function PropTypeError(message) {
    this.message = message;
    this.stack = '';
  }
  // Make `instanceof Error` still work for returned errors.
  PropTypeError.prototype = Error.prototype;

  function createChainableTypeChecker(validate) {
    if (true) {
      var manualPropTypeCallCache = {};
      var manualPropTypeWarningCount = 0;
    }
    function checkType(isRequired, props, propName, componentName, location, propFullName, secret) {
      componentName = componentName || ANONYMOUS;
      propFullName = propFullName || propName;

      if (secret !== ReactPropTypesSecret) {
        if (throwOnDirectAccess) {
          // New behavior only for users of `prop-types` package
          var err = new Error(
            'Calling PropTypes validators directly is not supported by the `prop-types` package. ' +
            'Use `PropTypes.checkPropTypes()` to call them. ' +
            'Read more at http://fb.me/use-check-prop-types'
          );
          err.name = 'Invariant Violation';
          throw err;
        } else if ("development" !== 'production' && typeof console !== 'undefined') {
          // Old behavior for people using React.PropTypes
          var cacheKey = componentName + ':' + propName;
          if (
            !manualPropTypeCallCache[cacheKey] &&
            // Avoid spamming the console because they are often not actionable except for lib authors
            manualPropTypeWarningCount < 3
          ) {
            printWarning(
              'You are manually calling a React.PropTypes validation ' +
              'function for the `' + propFullName + '` prop on `' + componentName  + '`. This is deprecated ' +
              'and will throw in the standalone `prop-types` package. ' +
              'You may be seeing this warning due to a third-party PropTypes ' +
              'library. See https://fb.me/react-warning-dont-call-proptypes ' + 'for details.'
            );
            manualPropTypeCallCache[cacheKey] = true;
            manualPropTypeWarningCount++;
          }
        }
      }
      if (props[propName] == null) {
        if (isRequired) {
          if (props[propName] === null) {
            return new PropTypeError('The ' + location + ' `' + propFullName + '` is marked as required ' + ('in `' + componentName + '`, but its value is `null`.'));
          }
          return new PropTypeError('The ' + location + ' `' + propFullName + '` is marked as required in ' + ('`' + componentName + '`, but its value is `undefined`.'));
        }
        return null;
      } else {
        return validate(props, propName, componentName, location, propFullName);
      }
    }

    var chainedCheckType = checkType.bind(null, false);
    chainedCheckType.isRequired = checkType.bind(null, true);

    return chainedCheckType;
  }

  function createPrimitiveTypeChecker(expectedType) {
    function validate(props, propName, componentName, location, propFullName, secret) {
      var propValue = props[propName];
      var propType = getPropType(propValue);
      if (propType !== expectedType) {
        // `propValue` being instance of, say, date/regexp, pass the 'object'
        // check, but we can offer a more precise error message here rather than
        // 'of type `object`'.
        var preciseType = getPreciseType(propValue);

        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + preciseType + '` supplied to `' + componentName + '`, expected ') + ('`' + expectedType + '`.'));
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function createAnyTypeChecker() {
    return createChainableTypeChecker(emptyFunctionThatReturnsNull);
  }

  function createArrayOfTypeChecker(typeChecker) {
    function validate(props, propName, componentName, location, propFullName) {
      if (typeof typeChecker !== 'function') {
        return new PropTypeError('Property `' + propFullName + '` of component `' + componentName + '` has invalid PropType notation inside arrayOf.');
      }
      var propValue = props[propName];
      if (!Array.isArray(propValue)) {
        var propType = getPropType(propValue);
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + propType + '` supplied to `' + componentName + '`, expected an array.'));
      }
      for (var i = 0; i < propValue.length; i++) {
        var error = typeChecker(propValue, i, componentName, location, propFullName + '[' + i + ']', ReactPropTypesSecret);
        if (error instanceof Error) {
          return error;
        }
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function createElementTypeChecker() {
    function validate(props, propName, componentName, location, propFullName) {
      var propValue = props[propName];
      if (!isValidElement(propValue)) {
        var propType = getPropType(propValue);
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + propType + '` supplied to `' + componentName + '`, expected a single ReactElement.'));
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function createInstanceTypeChecker(expectedClass) {
    function validate(props, propName, componentName, location, propFullName) {
      if (!(props[propName] instanceof expectedClass)) {
        var expectedClassName = expectedClass.name || ANONYMOUS;
        var actualClassName = getClassName(props[propName]);
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + actualClassName + '` supplied to `' + componentName + '`, expected ') + ('instance of `' + expectedClassName + '`.'));
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function createEnumTypeChecker(expectedValues) {
    if (!Array.isArray(expectedValues)) {
       true ? printWarning('Invalid argument supplied to oneOf, expected an instance of array.') : undefined;
      return emptyFunctionThatReturnsNull;
    }

    function validate(props, propName, componentName, location, propFullName) {
      var propValue = props[propName];
      for (var i = 0; i < expectedValues.length; i++) {
        if (is(propValue, expectedValues[i])) {
          return null;
        }
      }

      var valuesString = JSON.stringify(expectedValues);
      return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of value `' + propValue + '` ' + ('supplied to `' + componentName + '`, expected one of ' + valuesString + '.'));
    }
    return createChainableTypeChecker(validate);
  }

  function createObjectOfTypeChecker(typeChecker) {
    function validate(props, propName, componentName, location, propFullName) {
      if (typeof typeChecker !== 'function') {
        return new PropTypeError('Property `' + propFullName + '` of component `' + componentName + '` has invalid PropType notation inside objectOf.');
      }
      var propValue = props[propName];
      var propType = getPropType(propValue);
      if (propType !== 'object') {
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + propType + '` supplied to `' + componentName + '`, expected an object.'));
      }
      for (var key in propValue) {
        if (propValue.hasOwnProperty(key)) {
          var error = typeChecker(propValue, key, componentName, location, propFullName + '.' + key, ReactPropTypesSecret);
          if (error instanceof Error) {
            return error;
          }
        }
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function createUnionTypeChecker(arrayOfTypeCheckers) {
    if (!Array.isArray(arrayOfTypeCheckers)) {
       true ? printWarning('Invalid argument supplied to oneOfType, expected an instance of array.') : undefined;
      return emptyFunctionThatReturnsNull;
    }

    for (var i = 0; i < arrayOfTypeCheckers.length; i++) {
      var checker = arrayOfTypeCheckers[i];
      if (typeof checker !== 'function') {
        printWarning(
          'Invalid argument supplied to oneOfType. Expected an array of check functions, but ' +
          'received ' + getPostfixForTypeWarning(checker) + ' at index ' + i + '.'
        );
        return emptyFunctionThatReturnsNull;
      }
    }

    function validate(props, propName, componentName, location, propFullName) {
      for (var i = 0; i < arrayOfTypeCheckers.length; i++) {
        var checker = arrayOfTypeCheckers[i];
        if (checker(props, propName, componentName, location, propFullName, ReactPropTypesSecret) == null) {
          return null;
        }
      }

      return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` supplied to ' + ('`' + componentName + '`.'));
    }
    return createChainableTypeChecker(validate);
  }

  function createNodeChecker() {
    function validate(props, propName, componentName, location, propFullName) {
      if (!isNode(props[propName])) {
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` supplied to ' + ('`' + componentName + '`, expected a ReactNode.'));
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function createShapeTypeChecker(shapeTypes) {
    function validate(props, propName, componentName, location, propFullName) {
      var propValue = props[propName];
      var propType = getPropType(propValue);
      if (propType !== 'object') {
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type `' + propType + '` ' + ('supplied to `' + componentName + '`, expected `object`.'));
      }
      for (var key in shapeTypes) {
        var checker = shapeTypes[key];
        if (!checker) {
          continue;
        }
        var error = checker(propValue, key, componentName, location, propFullName + '.' + key, ReactPropTypesSecret);
        if (error) {
          return error;
        }
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function createStrictShapeTypeChecker(shapeTypes) {
    function validate(props, propName, componentName, location, propFullName) {
      var propValue = props[propName];
      var propType = getPropType(propValue);
      if (propType !== 'object') {
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type `' + propType + '` ' + ('supplied to `' + componentName + '`, expected `object`.'));
      }
      // We need to check all keys in case some are required but missing from
      // props.
      var allKeys = assign({}, props[propName], shapeTypes);
      for (var key in allKeys) {
        var checker = shapeTypes[key];
        if (!checker) {
          return new PropTypeError(
            'Invalid ' + location + ' `' + propFullName + '` key `' + key + '` supplied to `' + componentName + '`.' +
            '\nBad object: ' + JSON.stringify(props[propName], null, '  ') +
            '\nValid keys: ' +  JSON.stringify(Object.keys(shapeTypes), null, '  ')
          );
        }
        var error = checker(propValue, key, componentName, location, propFullName + '.' + key, ReactPropTypesSecret);
        if (error) {
          return error;
        }
      }
      return null;
    }

    return createChainableTypeChecker(validate);
  }

  function isNode(propValue) {
    switch (typeof propValue) {
      case 'number':
      case 'string':
      case 'undefined':
        return true;
      case 'boolean':
        return !propValue;
      case 'object':
        if (Array.isArray(propValue)) {
          return propValue.every(isNode);
        }
        if (propValue === null || isValidElement(propValue)) {
          return true;
        }

        var iteratorFn = getIteratorFn(propValue);
        if (iteratorFn) {
          var iterator = iteratorFn.call(propValue);
          var step;
          if (iteratorFn !== propValue.entries) {
            while (!(step = iterator.next()).done) {
              if (!isNode(step.value)) {
                return false;
              }
            }
          } else {
            // Iterator will provide entry [k,v] tuples rather than values.
            while (!(step = iterator.next()).done) {
              var entry = step.value;
              if (entry) {
                if (!isNode(entry[1])) {
                  return false;
                }
              }
            }
          }
        } else {
          return false;
        }

        return true;
      default:
        return false;
    }
  }

  function isSymbol(propType, propValue) {
    // Native Symbol.
    if (propType === 'symbol') {
      return true;
    }

    // 19.4.3.5 Symbol.prototype[@@toStringTag] === 'Symbol'
    if (propValue['@@toStringTag'] === 'Symbol') {
      return true;
    }

    // Fallback for non-spec compliant Symbols which are polyfilled.
    if (typeof Symbol === 'function' && propValue instanceof Symbol) {
      return true;
    }

    return false;
  }

  // Equivalent of `typeof` but with special handling for array and regexp.
  function getPropType(propValue) {
    var propType = typeof propValue;
    if (Array.isArray(propValue)) {
      return 'array';
    }
    if (propValue instanceof RegExp) {
      // Old webkits (at least until Android 4.0) return 'function' rather than
      // 'object' for typeof a RegExp. We'll normalize this here so that /bla/
      // passes PropTypes.object.
      return 'object';
    }
    if (isSymbol(propType, propValue)) {
      return 'symbol';
    }
    return propType;
  }

  // This handles more types than `getPropType`. Only used for error messages.
  // See `createPrimitiveTypeChecker`.
  function getPreciseType(propValue) {
    if (typeof propValue === 'undefined' || propValue === null) {
      return '' + propValue;
    }
    var propType = getPropType(propValue);
    if (propType === 'object') {
      if (propValue instanceof Date) {
        return 'date';
      } else if (propValue instanceof RegExp) {
        return 'regexp';
      }
    }
    return propType;
  }

  // Returns a string that is postfixed to a warning about an invalid type.
  // For example, "undefined" or "of type array"
  function getPostfixForTypeWarning(value) {
    var type = getPreciseType(value);
    switch (type) {
      case 'array':
      case 'object':
        return 'an ' + type;
      case 'boolean':
      case 'date':
      case 'regexp':
        return 'a ' + type;
      default:
        return type;
    }
  }

  // Returns class name of the object, if any.
  function getClassName(propValue) {
    if (!propValue.constructor || !propValue.constructor.name) {
      return ANONYMOUS;
    }
    return propValue.constructor.name;
  }

  ReactPropTypes.checkPropTypes = checkPropTypes;
  ReactPropTypes.PropTypes = ReactPropTypes;

  return ReactPropTypes;
};


/***/ }),

/***/ "./node_modules/prop-types/index.js":
/*!******************************************!*\
  !*** ./node_modules/prop-types/index.js ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

if (true) {
  var REACT_ELEMENT_TYPE = (typeof Symbol === 'function' &&
    Symbol.for &&
    Symbol.for('react.element')) ||
    0xeac7;

  var isValidElement = function(object) {
    return typeof object === 'object' &&
      object !== null &&
      object.$$typeof === REACT_ELEMENT_TYPE;
  };

  // By explicitly using `prop-types` you are opting into new development behavior.
  // http://fb.me/prop-types-in-prod
  var throwOnDirectAccess = true;
  module.exports = __webpack_require__(/*! ./factoryWithTypeCheckers */ "./node_modules/prop-types/factoryWithTypeCheckers.js")(isValidElement, throwOnDirectAccess);
} else {}


/***/ }),

/***/ "./node_modules/prop-types/lib/ReactPropTypesSecret.js":
/*!*******************************************************************************************************************!*\
  !*** delegated ./node_modules/prop-types/lib/ReactPropTypesSecret.js from dll-reference dll_831a3634f66cb1dada0c ***!
  \*******************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = (__webpack_require__(/*! dll-reference dll_831a3634f66cb1dada0c */ "dll-reference dll_831a3634f66cb1dada0c"))("./node_modules/prop-types/lib/ReactPropTypesSecret.js");

/***/ }),

/***/ "./node_modules/react-alice-carousel/lib/propTypes.js":
/*!************************************************************!*\
  !*** ./node_modules/react-alice-carousel/lib/propTypes.js ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.defaultProps = exports.propTypes = undefined;

var _propTypes = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");

var _propTypes2 = _interopRequireDefault(_propTypes);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var propTypes = {
  items: _propTypes2.default.array,
  children: _propTypes2.default.array,
  onSlideChange: _propTypes2.default.func,
  onSlideChanged: _propTypes2.default.func,
  onInitialized: _propTypes2.default.func,
  onResized: _propTypes2.default.func,
  keysControlDisabled: _propTypes2.default.bool,
  playButtonEnabled: _propTypes2.default.bool,
  buttonsDisabled: _propTypes2.default.bool,
  dotsDisabled: _propTypes2.default.bool,
  swipeDisabled: _propTypes2.default.bool,
  responsive: _propTypes2.default.object,
  stagePadding: _propTypes2.default.object,
  duration: _propTypes2.default.number,
  startIndex: _propTypes2.default.number,
  slideToIndex: _propTypes2.default.number,
  autoPlay: _propTypes2.default.bool,
  infinite: _propTypes2.default.bool,
  showSlideInfo: _propTypes2.default.bool,
  mouseDragEnabled: _propTypes2.default.bool,
  fadeOutAnimation: _propTypes2.default.bool,
  autoPlayInterval: _propTypes2.default.number,
  autoPlayDirection: _propTypes2.default.string,
  disableAutoPlayOnAction: _propTypes2.default.bool,
  stopAutoPlayOnHover: _propTypes2.default.bool,
  preventEventOnTouchMove: _propTypes2.default.bool
};

var defaultProps = {
  items: [],
  children: [],
  responsive: {},
  stagePadding: {},
  duration: 250,
  startIndex: 0,
  slideToIndex: 0,
  autoPlay: false,
  infinite: true,
  dotsDisabled: false,
  showSlideInfo: false,
  swipeDisabled: false,
  autoPlayInterval: 250,
  buttonsDisabled: false,
  mouseDragEnabled: false,
  fadeOutAnimation: false,
  playButtonEnabled: false,
  autoPlayDirection: 'ltr',
  keysControlDisabled: false,
  disableAutoPlayOnAction: false,
  stopAutoPlayOnHover: true,
  preventEventOnTouchMove: false
};

exports.propTypes = propTypes;
exports.defaultProps = defaultProps;

/***/ }),

/***/ "./node_modules/react-alice-carousel/lib/react-alice-carousel.js":
/*!***********************************************************************!*\
  !*** ./node_modules/react-alice-carousel/lib/react-alice-carousel.js ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(/*! react */ "./node_modules/react/index.js");

var _react2 = _interopRequireDefault(_react);

var _reactSwipeable = __webpack_require__(/*! react-swipeable */ "./node_modules/react-swipeable/lib/Swipeable.js");

var _reactSwipeable2 = _interopRequireDefault(_reactSwipeable);

var _utils = __webpack_require__(/*! ./utils */ "./node_modules/react-alice-carousel/lib/utils/index.js");

var Utils = _interopRequireWildcard(_utils);

var _propTypes = __webpack_require__(/*! ./propTypes */ "./node_modules/react-alice-carousel/lib/propTypes.js");

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var AliceCarousel = function (_React$PureComponent) {
  _inherits(AliceCarousel, _React$PureComponent);

  function AliceCarousel(props) {
    _classCallCheck(this, AliceCarousel);

    var _this = _possibleConstructorReturn(this, (AliceCarousel.__proto__ || Object.getPrototypeOf(AliceCarousel)).call(this, props));

    _this._windowResizeHandler = function () {
      if (Utils.shouldCallHandlerOnWindowResize(_this.deviceInfo)) {
        var _this$state = _this.state,
            currentIndex = _this$state.currentIndex,
            isPlaying = _this$state.isPlaying;


        _this._pause();
        _this._resetAllIntermediateProps();
        _this._disableAnimation();
        _this.deviceInfo = Utils.deviceInfo();

        var currState = Utils.calculateInitialProps(_this.props, _this.stageComponent);
        var translate3d = Utils.getTranslate3dPosition(currentIndex, currState);
        var nextState = _extends({}, currState, { currentIndex: currentIndex, translate3d: translate3d });

        _this.setState(nextState, function () {
          _this.props.autoPlay && isPlaying && _this._play();
          _this._allowAnimation();
          _this._onResized();
        });
      }
    };

    _this._onSlideToIndexChange = function (currentIndex, slideToIndex) {
      if (slideToIndex === currentIndex + 1) {
        _this._slideNext();
      } else if (slideToIndex === currentIndex - 1) {
        _this._slidePrev();
      } else {
        _this._onDotClick(slideToIndex);
      }
    };

    _this._onInactiveItem = function () {
      _this._onSlideChange();
      _this._onSlideChanged();
      _this._allowAnimation();
      _this._pause();
    };

    _this._onDotClick = function (itemIndex) {
      if (_this.state.currentIndex === itemIndex || !_this.allowAnimation || _this.swipeAnimation) {
        return;
      }
      _this._disableAnimation();
      _this._isFadeOutAnimationAllowed() && _this._setAnimationPropsOnDotsClick(itemIndex);
      _this.props.disableAutoPlayOnAction && _this._pause();
      _this._slideToItem(itemIndex);
    };

    _this._recalculateFadeOutAnimationState = function (shouldRecalculate) {
      if (shouldRecalculate || _this._isFadeOutAnimationAllowed()) {
        return { fadeoutAnimationProcessing: false };
      }
      return {};
    };

    _this._getStageComponentNode = function (node) {
      return _this.stageComponent = node;
    };

    _this._allowAnimation = function () {
      return _this.allowAnimation = true;
    };

    _this._disableAnimation = function () {
      return _this.allowAnimation = false;
    };

    _this._isHovered = function () {
      return _this.isHovered;
    };

    _this._skipSlidePositionRecalculation = function () {
      if (_this._isFadeOutAnimationAllowed()) {
        _this._resetFadeOutAnimationState();
        return;
      }

      _this._onSlideChanged();
      _this.props.disableAutoPlayOnAction && _this._pause();
      _this.isHovered = false;
    };

    _this._updateSlidePosition = function () {
      window.setTimeout(function () {
        if (_this._shouldRecalculatePosition()) {
          _this._recalculateSlidePosition();
        } else if (_this._isFadeOutAnimationAllowed()) {
          _this._resetFadeOutAnimationState();
        } else {
          _this._onSlideChanged();
        }
      }, _this.state.duration);
    };

    _this._shouldRecalculatePosition = function () {
      var _this$state2 = _this.state,
          slides = _this$state2.slides,
          currentIndex = _this$state2.currentIndex;

      return currentIndex < 0 || currentIndex >= slides.length;
    };

    _this._resetFadeOutAnimationState = function () {
      _this.setState({ fadeoutAnimationProcessing: false }, _this._onSlideChanged);
    };

    _this._resetAllIntermediateProps = function () {
      _this.swipingStarted = false;
      _this.touchEventsCallstack = [];
      _this.verticalSwipingDetected = false;

      _this._allowAnimation();
      _this._stopSwipeAnimation();
      _this._resetAnimationProps();
      _this._resetSwipePositionProps();
      _this._resetTranslateAnimationProcessingFlag();
    };

    _this._recalculateSlidePosition = function () {
      var currentIndex = Utils.recalculateCurrentSlideIndex(_this.state);
      var translate3d = Utils.recalculateTranslatePosition(_this.state);

      _this.setState(_extends({
        currentIndex: currentIndex,
        translate3d: translate3d
      }, _this._recalculateFadeOutAnimationState(), {
        style: { transition: 'transform 0ms ease-out' }
      }), function () {
        return _this._onSlideChanged();
      });
    };

    _this._slideIndexInfoComponent = function () {
      var _this$state3 = _this.state,
          currentIndex = _this$state3.currentIndex,
          slides = _this$state3.slides;

      var _Utils$getSlideInfo = Utils.getSlideInfo(currentIndex, slides.length),
          slideIndex = _Utils$getSlideInfo.slideIndex,
          slidesLength = _Utils$getSlideInfo.slidesLength;

      return _react2.default.createElement(
        'div',
        { className: 'alice-carousel__slide-info' },
        _react2.default.createElement(
          'span',
          { className: 'alice-carousel__slide-info-item' },
          slideIndex
        ),
        _react2.default.createElement(
          'span',
          { className: 'alice-carousel__slide-info-item alice-carousel__slide-info-item--separator' },
          '/'
        ),
        _react2.default.createElement(
          'span',
          { className: 'alice-carousel__slide-info-item' },
          slidesLength
        )
      );
    };

    _this._getEventObject = function () {
      var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : _this.state;
      var itemsInSlide = state.items,
          item = state.currentIndex;

      var slide = _this._getActiveSlideIndex(state);

      return { item: item, slide: slide, itemsInSlide: itemsInSlide };
    };

    _this._getActiveSlideIndex = function () {
      var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : _this.state;
      var slides = state.slides,
          items = state.items,
          currentIndex = state.currentIndex;

      var _Utils$isInactiveItem = Utils.isInactiveItem(state),
          inactiveNext = _Utils$isInactiveItem.inactiveNext;

      return Utils.getActiveSlideIndex(inactiveNext, currentIndex, items, slides.length);
    };

    _this._setAnimationPropsOnDotsClick = function (itemIndex) {
      var _this$state4 = _this.state,
          currentIndex = _this$state4.currentIndex,
          itemWidth = _this$state4.itemWidth;

      var fadeOutIndex = currentIndex + 1;
      var fadeOutOffset = Utils.getFadeOutOffset(itemIndex, currentIndex, itemWidth);

      _this._setAnimationProps({ fadeOutIndex: fadeOutIndex, fadeOutOffset: fadeOutOffset, allowFadeOutAnimation: true });
    };

    _this._getItemIndexForDotNavigation = function (i, dotsLength) {
      var _this$state5 = _this.state,
          slides = _this$state5.slides,
          items = _this$state5.items,
          infinite = _this$state5.infinite;

      var isNotInfinite = infinite === false;

      return isNotInfinite && i === dotsLength - 1 ? slides.length - items : i * items;
    };

    _this._pause = function () {
      if (_this._autoPlayIntervalId) {
        window.clearInterval(_this._autoPlayIntervalId);
        _this._autoPlayIntervalId = null;
        _this.setState({ isPlaying: false });
      }
    };

    _this._playPauseToggle = function () {
      if (!_this.allowAnimation) return;
      _this.state.isPlaying ? _this._pause() : _this._play();
    };

    _this._keyUpHandler = function (e) {
      switch (e.keyCode) {
        case 32:
          return _this._handleOnSpaceBarClick();
        case 37:
          return _this._slidePrev();
        case 39:
          return _this._slideNext();
      }
    };

    _this._handleOnSpaceBarClick = function () {
      _this.props.autoPlay && _this._playPauseToggle();
    };

    _this._intermediateStateProps = function (duration, shouldSkipRecalculation) {
      var condition = _this._isFadeOutAnimationAllowed() && !shouldSkipRecalculation;
      return Utils.intermediateTransitionProps(condition, duration);
    };

    _this._isFadeOutAnimationAllowed = function () {
      var _this$state6 = _this.state,
          stagePadding = _this$state6.stagePadding,
          items = _this$state6.items;
      var paddingLeft = stagePadding.paddingLeft,
          paddingRight = stagePadding.paddingRight;


      return _this.props.fadeOutAnimation && !(paddingLeft || paddingRight) && items === 1;
    };

    _this._isSwipeDisable = function () {
      return _this.props.swipeDisabled || _this.state.fadeOutAnimation || _this.verticalSwipingDetected;
    };

    _this._addTouchEventToCallstack = function () {
      _this.touchEventsCallstack.push(1);
    };

    _this._removeTouchEventFromCallstack = function () {
      _this.touchEventsCallstack.pop();
    };

    _this._setTranslateAnimationProcessingFlag = function () {
      _this.translateAnimationProcessing = true;
    };

    _this._resetTranslateAnimationProcessingFlag = function () {
      _this.translateAnimationProcessing = false;
    };

    _this._startSwipeAnimation = function () {
      _this.swipeAnimation = true;
    };

    _this._stopSwipeAnimation = function () {
      _this.swipeAnimation = false;
    };

    _this._setAnimationProps = function (newProps) {
      var prevProps = _this.animationProps || {};
      _this.animationProps = _extends({}, prevProps, newProps);
    };

    _this._resetAnimationProps = function () {
      _this.animationProps = {};
    };

    _this._setSwipePositionProps = function (newProps) {
      var prevProps = _this.swipePosition || {};
      _this.swipePosition = _extends({}, prevProps, newProps);
    };

    _this._resetSwipePositionProps = function () {
      _this.swipePosition = {};
    };

    _this._calculateSwipeIndex = function () {
      var itemWidth = _this.state.itemWidth;

      var swipePosition = Math.abs(_this.swipePosition.position);

      return _this.swipePosition.direction === 'LEFT' ? Math.floor(swipePosition / itemWidth) + 1 : Math.floor(swipePosition / itemWidth);
    };

    _this._getTranslateXPosition = function () {
      var translate3d = _this.state.translate3d;
      var _this$swipePosition$s = _this.swipePosition.startPosition,
          startPosition = _this$swipePosition$s === undefined ? translate3d : _this$swipePosition$s;


      if (!!_this.touchEventsCallstack.length && _this.translateAnimationProcessing) {
        _this._resetTranslateAnimationProcessingFlag();
        var lastTranslateXPosition = Utils.getTranslateX(_this.stageComponent);

        if (lastTranslateXPosition) {
          return lastTranslateXPosition;
        }
      }

      return startPosition;
    };

    _this._getStartSwipePositionOnTouchMove = function (deltaX) {
      return _this._getTranslateXPosition() - deltaX;
    };

    _this._onTouchEnd = function () {
      _this.swipingStarted = false;
      if (_this._isSwipeDisable()) {
        return;
      }

      _this._addTouchEventToCallstack();
      _this._setSwipePositionProps({ startPosition: _this.swipePosition.position });
      _this._beforeTouchEnd();
    };

    _this._onMouseEnterAutoPlayHandler = function () {
      if (_this.props.stopAutoPlayOnHover) {
        _this.isHovered = true;
      }
    };

    _this._onMouseLeaveAutoPlayHandler = function () {
      _this.isHovered = false;
    };

    _this._setAnimationPropsOnPrevNextClick = function () {
      var direction = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 'next';
      var _this$state7 = _this.state,
          currentIndex = _this$state7.currentIndex,
          itemWidth = _this$state7.itemWidth;


      var fadeOutIndex = currentIndex === 0 ? 1 : currentIndex + 1;
      var fadeOutOffset = direction === 'next' ? itemWidth : -itemWidth;

      _this._setAnimationProps({ fadeOutIndex: fadeOutIndex, fadeOutOffset: fadeOutOffset, allowFadeOutAnimation: true });
    };

    _this._slidePrev = function () {
      var action = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : true;

      if (!_this.allowAnimation || _this.swipeAnimation) {
        return;
      }

      _this._disableAnimation();

      var _Utils$isInactiveItem2 = Utils.isInactiveItem(_this.state),
          inactivePrev = _Utils$isInactiveItem2.inactivePrev;

      if (_this._isFadeOutAnimationAllowed()) {
        _this._setAnimationPropsOnPrevNextClick('prev');
      }

      if (inactivePrev) {
        _this._onInactiveItem();
        return;
      }

      if (action && _this.props.disableAutoPlayOnAction) {
        _this._pause();
      }

      _this._slideToItem(_this.state.currentIndex - 1);
    };

    _this._slideNext = function () {
      var action = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : true;

      if (!_this.allowAnimation || _this.swipeAnimation) {
        return;
      }
      _this._disableAnimation();

      var _Utils$isInactiveItem3 = Utils.isInactiveItem(_this.state),
          inactiveNext = _Utils$isInactiveItem3.inactiveNext;

      if (inactiveNext) {
        _this._onInactiveItem();
        return;
      }

      if (action && _this.props.disableAutoPlayOnAction) {
        _this._pause();
      }

      if (_this._isFadeOutAnimationAllowed()) {
        _this._setAnimationPropsOnPrevNextClick('next');
      }

      _this._slideToItem(_this.state.currentIndex + 1);
    };

    _this._renderStageItem = function (item, i) {
      var itemStyle = Utils.itemStyles(i, _this.state, _this.animationProps);
      var itemClassName = Utils.itemClassName(i, _this.state, _this.animationProps);

      return _react2.default.createElement(
        'li',
        { style: itemStyle, className: itemClassName, key: i },
        item
      );
    };

    _this.state = {
      clones: [],
      currentIndex: 1,
      stagePadding: {},
      duration: props.duration,
      slides: Utils.getSlides(props),
      style: { transition: 'transform 0ms ease-out' }
    };

    _this._onTouchMove = _this._onTouchMove.bind(_this);
    _this.handleOnResize = Utils.debounce(_this._windowResizeHandler, 100);
    return _this;
  }

  _createClass(AliceCarousel, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      this._setInitialState();
      this._resetAllIntermediateProps();

      window.addEventListener('resize', this.handleOnResize);

      if (!this.props.keysControlDisabled) {
        window.addEventListener('keyup', this._keyUpHandler);
      }

      this.deviceInfo = Utils.deviceInfo();
      this.props.autoPlay && this._play();
    }
  }, {
    key: 'componentWillReceiveProps',
    value: function componentWillReceiveProps(nextProps) {
      var slideToIndex = nextProps.slideToIndex,
          duration = nextProps.duration,
          fadeOutAnimation = nextProps.fadeOutAnimation;


      if (this.props.duration !== duration) {
        this.setState({ duration: duration });
      }

      if (this.props.fadeOutAnimation !== fadeOutAnimation) {
        this.setState({ fadeoutAnimationProcessing: false }, this._resetAnimationProps);
      }

      if (slideToIndex !== this.props.slideToIndex) {
        this._onSlideToIndexChange(this.state.currentIndex, slideToIndex);
      }
    }
  }, {
    key: 'componentDidUpdate',
    value: function componentDidUpdate(prevProps) {
      if (this.props.disableAutoPlayOnAction !== prevProps.disableAutoPlayOnAction || this.props.autoPlayDirection !== prevProps.autoPlayDirection || this.props.autoPlayInterval !== prevProps.autoPlayInterval || this.props.infinite !== prevProps.infinite || this.props.autoPlay !== prevProps.autoPlay) {
        this.props.autoPlay ? this._play() : this._pause();
      }

      if (this.props.stagePadding !== prevProps.stagePadding || this.props.responsive !== prevProps.responsive || this.props.infinite !== prevProps.infinite || this.props.items !== prevProps.items) {
        this._resetAllIntermediateProps();
        this.setState(Utils.calculateInitialProps(this.props, this.stageComponent));
      }

      if (this.props.keysControlDisabled !== prevProps.keysControlDisabled) {
        this.props.keysControlDisabled ? window.removeEventListener('keyup', this._keyUpHandler) : window.addEventListener('keyup', this._keyUpHandler);
      }
    }
  }, {
    key: 'componentWillUnmount',
    value: function componentWillUnmount() {
      window.removeEventListener('resize', this.handleOnResize);

      if (!this.props.keysControlDisabled) {
        window.removeEventListener('keyup', this._keyUpHandler);
      }

      if (this._autoPlayIntervalId) {
        window.clearInterval(this._autoPlayIntervalId);
        this._autoPlayIntervalId = null;
      }
    }
  }, {
    key: '_onSlideChange',
    value: function _onSlideChange() {
      if (this.props.onSlideChange) {
        this.props.onSlideChange(this._getEventObject());
      }
    }
  }, {
    key: '_onSlideChanged',
    value: function _onSlideChanged() {
      if (this.props.onSlideChanged) {
        this.props.onSlideChanged(this._getEventObject());
      }
      this._allowAnimation();
    }
  }, {
    key: '_onInitialized',
    value: function _onInitialized(initialState) {
      if (this.props.onInitialized) {
        this.props.onInitialized(this._getEventObject(initialState));
      }
    }
  }, {
    key: '_onResized',
    value: function _onResized() {
      if (this.props.onResized) {
        this.props.onResized(this._getEventObject());
      }
    }
  }, {
    key: '_setInitialState',
    value: function _setInitialState() {
      var initialState = Utils.calculateInitialProps(this.props, this.stageComponent);
      this.setState(initialState, this._onInitialized(initialState));
    }
  }, {
    key: '_checkSlidePosition',
    value: function _checkSlidePosition(shouldSkipRecalculation) {
      this._stopSwipeAnimation();
      this._resetAnimationProps();
      this._resetSwipePositionProps();

      shouldSkipRecalculation ? this._skipSlidePositionRecalculation() : this._updateSlidePosition();
    }
  }, {
    key: '_prevButton',
    value: function _prevButton() {
      var _Utils$isInactiveItem4 = Utils.isInactiveItem(this.state),
          inactivePrev = _Utils$isInactiveItem4.inactivePrev;

      var className = 'alice-carousel__prev-btn-item' + (inactivePrev ? ' __inactive' : '');

      return _react2.default.createElement(
        'div',
        { className: 'alice-carousel__prev-btn' },
        _react2.default.createElement(
          'div',
          {
            className: 'alice-carousel__prev-btn-wrapper',
            onMouseEnter: this._onMouseEnterAutoPlayHandler,
            onMouseLeave: this._onMouseLeaveAutoPlayHandler
          },
          _react2.default.createElement(
            'p',
            { className: className, onClick: this._slidePrev },
            _react2.default.createElement('span', { 'data-area': 'Prev' })
          )
        )
      );
    }
  }, {
    key: '_nextButton',
    value: function _nextButton() {
      var _Utils$isInactiveItem5 = Utils.isInactiveItem(this.state),
          inactiveNext = _Utils$isInactiveItem5.inactiveNext;

      var className = 'alice-carousel__next-btn-item' + (inactiveNext ? ' __inactive' : '');

      return _react2.default.createElement(
        'div',
        { className: 'alice-carousel__next-btn' },
        _react2.default.createElement(
          'div',
          {
            className: 'alice-carousel__next-btn-wrapper',
            onMouseEnter: this._onMouseEnterAutoPlayHandler,
            onMouseLeave: this._onMouseLeaveAutoPlayHandler
          },
          _react2.default.createElement(
            'p',
            { className: className, onClick: this._slideNext },
            _react2.default.createElement('span', { 'data-area': 'Next' })
          )
        )
      );
    }
  }, {
    key: '_renderDotsNavigation',
    value: function _renderDotsNavigation() {
      var _this2 = this;

      var _state = this.state,
          slides = _state.slides,
          items = _state.items;

      var dotsLength = Utils.getDotsCeilLength(slides.length, items);

      return _react2.default.createElement(
        'ul',
        { className: 'alice-carousel__dots' },
        slides.map(function (item, i) {
          if (i < dotsLength) {
            var itemIndex = _this2._getItemIndexForDotNavigation(i, dotsLength);
            var className = _this2._getActiveSlideIndex() === i ? ' __active' : '';
            return _react2.default.createElement('li', {
              key: i,
              onClick: function onClick() {
                return _this2._onDotClick(itemIndex);
              },
              onMouseEnter: _this2._onMouseEnterAutoPlayHandler,
              onMouseLeave: _this2._onMouseLeaveAutoPlayHandler,
              className: 'alice-carousel__dots-item' + className
            });
          }
        })
      );
    }
  }, {
    key: '_renderPlayPauseButton',
    value: function _renderPlayPauseButton() {
      return _react2.default.createElement(
        'div',
        { className: 'alice-carousel__play-btn' },
        _react2.default.createElement(
          'div',
          { className: 'alice-carousel__play-btn-wrapper' },
          _react2.default.createElement('div', {
            onClick: this._playPauseToggle,
            className: 'alice-carousel__play-btn-item' + (this.state.isPlaying ? ' __pause' : '')
          })
        )
      );
    }
  }, {
    key: '_play',
    value: function _play() {
      var _this3 = this;

      var duration = this.state.duration;
      var _props = this.props,
          autoPlayDirection = _props.autoPlayDirection,
          autoPlayInterval = _props.autoPlayInterval;

      var playInterval = Math.max(autoPlayInterval || duration, duration);

      this.setState({ isPlaying: true });

      if (!this._autoPlayIntervalId) {
        this._autoPlayIntervalId = window.setInterval(function () {
          if (!_this3._isHovered() && _this3._autoPlayIntervalId && _this3.state.isPlaying) {
            autoPlayDirection === 'rtl' ? _this3._slidePrev(false) : _this3._slideNext(false);
          }
        }, playInterval);
      }
    }
  }, {
    key: '_slideToItem',
    value: function _slideToItem(index) {
      var _this4 = this;

      var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

      this._onSlideChange();
      var _options$duration = options.duration,
          duration = _options$duration === undefined ? this.state.duration : _options$duration,
          _options$shouldSkipRe = options.shouldSkipRecalculation,
          shouldSkipRecalculation = _options$shouldSkipRe === undefined ? false : _options$shouldSkipRe;

      var translate3d = Utils.getTranslate3dPosition(index, this.state);

      this.setState(_extends({
        currentIndex: index,
        translate3d: translate3d
      }, this._intermediateStateProps(duration, shouldSkipRecalculation)), function () {
        return _this4._checkSlidePosition(shouldSkipRecalculation);
      });
    }
  }, {
    key: '_onTouchMove',
    value: function _onTouchMove(e, deltaX, deltaY) {
      this.swipingStarted = true;
      this._onMouseEnterAutoPlayHandler();

      if (Utils.isVerticalTouchMoveDetected(e, deltaX, deltaY)) {
        this.verticalSwipingDetected = true;
        return;
      } else {
        this.verticalSwipingDetected = false;
      }

      if (this._isSwipeDisable()) {
        return;
      }

      this._disableAnimation();
      this._startSwipeAnimation();

      var _state2 = this.state,
          slides = _state2.slides,
          items = _state2.items,
          itemWidth = _state2.itemWidth,
          infinite = _state2.infinite,
          stagePadding = _state2.stagePadding;

      var slidesLength = slides.length;
      var direction = Utils.getSwipeDirection(deltaX);
      var position = this._getStartSwipePositionOnTouchMove(deltaX);

      if (infinite === false) {
        var leftTranslateLimit = Utils.getLeftTranslateLimit(items, itemWidth);
        var rightTranslateLimit = Utils.getRightTranslateLimit(slidesLength, itemWidth);

        if (position > leftTranslateLimit || position < rightTranslateLimit) {
          return;
        }

        Utils.animate(this.stageComponent, position);
        this._setSwipePositionProps({ position: position, direction: direction });
        return;
      }

      var maxPosition = Utils.getMaxSWipePosition(items, itemWidth, slidesLength);
      var limitMinPos = Utils.getSwipeMinLimit(itemWidth, stagePadding);
      var limitMaxPos = Utils.getSwipeMaxLimit(itemWidth, maxPosition, stagePadding);

      if (position >= 0 - limitMinPos || Math.abs(position) >= limitMaxPos) {
        try {
          recalculatePosition();
        } catch (err) {
          Utils.debug(err);
        }
      }

      Utils.animate(this.stageComponent, position);
      this._setSwipePositionProps({ position: position, direction: direction });

      function recalculatePosition() {
        direction === 'RIGHT' ? position += slidesLength * -itemWidth : position += maxPosition - items * itemWidth;

        if (position >= 0 - limitMinPos || Math.abs(position) >= limitMaxPos) {
          try {
            recalculatePosition();
          } catch (err) {
            Utils.debug(err);
          }
        }
      }
    }
  }, {
    key: '_beforeTouchEnd',
    value: function _beforeTouchEnd() {
      var _this5 = this;

      var _state3 = this.state,
          itemWidth = _state3.itemWidth,
          items = _state3.items,
          duration = _state3.duration,
          infinite = _state3.infinite;

      var swipeIndex = this._calculateSwipeIndex();
      var currentIndex = swipeIndex - items;
      var translateXPosition = swipeIndex * -itemWidth;

      if (infinite === false) {
        this._isInfiniteModeDisabledBeforeTouchEnd(swipeIndex, currentIndex);
        return;
      }

      Utils.animate(this.stageComponent, translateXPosition, duration);
      this._setTranslateAnimationProcessingFlag();

      setTimeout(function () {
        _this5._removeTouchEventFromCallstack();
        _this5._resetTranslateAnimationProcessingFlag();

        if (!_this5.swipingStarted && _this5.touchEventsCallstack.length === 0) {
          var nextItemIndex = Utils.getNextItemIndexBeforeTouchEnd(translateXPosition, _this5.state);
          var nextTranslateXPosition = Utils.getTranslate3dPosition(nextItemIndex, _this5.state);

          Utils.animate(_this5.stageComponent, nextTranslateXPosition, 0);
          _this5._slideToItem(nextItemIndex, { duration: 0, shouldSkipRecalculation: true });
        }
      }, duration);
    }
  }, {
    key: '_isInfiniteModeDisabledBeforeTouchEnd',
    value: function _isInfiniteModeDisabledBeforeTouchEnd(swipeIndex, currentIndex) {
      var _this6 = this;

      var _state4 = this.state,
          items = _state4.items,
          itemWidth = _state4.itemWidth,
          duration = _state4.duration,
          slides = _state4.slides;

      var position = Utils.getTranslate3dPosition(currentIndex, { itemWidth: itemWidth, items: items });

      if (swipeIndex < items) {
        currentIndex = 0;
        position = items * -itemWidth;
      }

      if (swipeIndex > slides.length) {
        currentIndex = slides.length - items;
        position = slides.length * -itemWidth;
      }

      Utils.animate(this.stageComponent, position, duration);
      this._setTranslateAnimationProcessingFlag();

      setTimeout(function () {
        _this6._removeTouchEventFromCallstack();
        _this6._resetTranslateAnimationProcessingFlag();

        if (!_this6.swipingStarted && _this6.touchEventsCallstack.length === 0) {
          Utils.animate(_this6.stageComponent, position);
          _this6._slideToItem(currentIndex, { duration: 0, shouldSkipRecalculation: true });
        }
      }, duration);
    }
  }, {
    key: 'render',
    value: function render() {
      var _state5 = this.state,
          style = _state5.style,
          translate3d = _state5.translate3d,
          clones = _state5.clones;

      var stagePadding = Utils.getStagePadding(this.props);
      var stageStyle = Utils.stageStyle(style, translate3d);
      var wrapperStyle = Utils.wrapperStyle(stagePadding);

      return _react2.default.createElement(
        'div',
        { className: 'alice-carousel' },
        _react2.default.createElement(
          _reactSwipeable2.default,
          {
            rotationAngle: 3,
            stopPropagation: true,
            onSwiping: this._onTouchMove,
            onSwiped: this._onTouchEnd,
            trackMouse: this.props.mouseDragEnabled,
            preventDefaultTouchmoveEvent: this.props.preventEventOnTouchMove
          },
          _react2.default.createElement(
            'div',
            {
              style: wrapperStyle,
              className: 'alice-carousel__wrapper',
              onMouseEnter: this._onMouseEnterAutoPlayHandler,
              onMouseLeave: this._onMouseLeaveAutoPlayHandler
            },
            _react2.default.createElement(
              'ul',
              { style: stageStyle, className: 'alice-carousel__stage', ref: this._getStageComponentNode },
              clones.map(this._renderStageItem)
            )
          )
        ),
        this.props.showSlideInfo ? this._slideIndexInfoComponent() : null,
        !this.props.dotsDisabled ? this._renderDotsNavigation() : null,
        !this.props.buttonsDisabled ? this._prevButton() : null,
        !this.props.buttonsDisabled ? this._nextButton() : null,
        this.props.playButtonEnabled ? this._renderPlayPauseButton() : null
      );
    }
  }]);

  return AliceCarousel;
}(_react2.default.PureComponent);

exports.default = AliceCarousel;


AliceCarousel.propTypes = _extends({}, _propTypes.propTypes);
AliceCarousel.defaultProps = _extends({}, _propTypes.defaultProps);

/***/ }),

/***/ "./node_modules/react-alice-carousel/lib/utils/animation.js":
/*!******************************************************************!*\
  !*** ./node_modules/react-alice-carousel/lib/utils/animation.js ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getTransformMatrix = exports.isAnimatedItem = exports.getTranslate3dPosition = exports.getTranslateX = exports.animate = undefined;

var _elements = __webpack_require__(/*! ./elements */ "./node_modules/react-alice-carousel/lib/utils/elements.js");

function animate(element) {
  var position = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;
  var durationMs = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 0;

  if ((0, _elements.isElement)(element)) {
    element.style['transition'] = 'transform ' + durationMs + 'ms ease-out';
    element.style['transform'] = 'translate3d(' + position + 'px, 0, 0)';
  }
  return element;
}

function getTranslateX(element) {
  if ((0, _elements.isElement)(element)) {
    var translateXIndex = 4;
    var matrix = getTransformMatrix(element);
    return matrix[translateXIndex];
  }
}

function getTransformMatrix(element) {
  if ((0, _elements.isElement)(element)) {
    var _ref = getComputedStyle(element) || {},
        _ref$transform = _ref.transform,
        transform = _ref$transform === undefined ? '' : _ref$transform;

    var matched = transform.match(/[0-9., -]+/) || [];
    if (typeof matched[0] === 'string') {
      return matched[0].split(',');
    }
  }
  return [];
}

var getTranslate3dPosition = function getTranslate3dPosition() {
  var currentIndex = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;
  var state = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
  var itemWidth = state.itemWidth,
      items = state.items,
      infinite = state.infinite,
      _state$stagePadding = state.stagePadding,
      stagePadding = _state$stagePadding === undefined ? {} : _state$stagePadding;


  if (infinite) {
    var paddingLeft = stagePadding.paddingLeft,
        paddingRight = stagePadding.paddingRight;

    if (paddingLeft || paddingRight) {
      currentIndex += 1;
    }
  }

  return (items + currentIndex) * -itemWidth;
};

var isAnimatedItem = function isAnimatedItem(i) {
  var animationProps = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
  var allowFadeOutAnimation = animationProps.allowFadeOutAnimation,
      fadeOutIndex = animationProps.fadeOutIndex;

  return !!allowFadeOutAnimation && fadeOutIndex === i;
};

exports.animate = animate;
exports.getTranslateX = getTranslateX;
exports.getTranslate3dPosition = getTranslate3dPosition;
exports.isAnimatedItem = isAnimatedItem;
exports.getTransformMatrix = getTransformMatrix;

/***/ }),

/***/ "./node_modules/react-alice-carousel/lib/utils/classnames.js":
/*!*******************************************************************!*\
  !*** ./node_modules/react-alice-carousel/lib/utils/classnames.js ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.itemClassName = undefined;

var _animation = __webpack_require__(/*! ./animation */ "./node_modules/react-alice-carousel/lib/utils/animation.js");

var isActiveItem = function isActiveItem(i, state) {
  var currentIndex = state.currentIndex,
      items = state.items,
      stagePadding = state.stagePadding;

  if (stagePadding.paddingLeft || stagePadding.paddingRight) {
    currentIndex += 1;
  }
  return currentIndex + items === i;
};

var isClonedItem = function isClonedItem(i, state) {
  var items = state.items,
      slides = state.slides,
      infinite = state.infinite;

  return infinite === false && (i < items || i > slides.length + items - 1);
};

var itemClassName = function itemClassName(i, state, animationProps) {
  var isActive = isActiveItem(i, state) ? ' __active' : '';
  var isCloned = isClonedItem(i, state) ? ' __cloned' : '';
  var isAnimated = (0, _animation.isAnimatedItem)(i, animationProps) ? ' animated animated-out fadeOut' : '';

  return 'alice-carousel__stage-item' + isActive + isCloned + isAnimated;
};

exports.itemClassName = itemClassName;

/***/ }),

/***/ "./node_modules/react-alice-carousel/lib/utils/common.js":
/*!***************************************************************!*\
  !*** ./node_modules/react-alice-carousel/lib/utils/common.js ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.calculateInitialProps = exports.setTotalItemsInSlide = undefined;

var _elements = __webpack_require__(/*! ./elements */ "./node_modules/react-alice-carousel/lib/utils/elements.js");

var _animation = __webpack_require__(/*! ./animation */ "./node_modules/react-alice-carousel/lib/utils/animation.js");

var _math = __webpack_require__(/*! ./math */ "./node_modules/react-alice-carousel/lib/utils/math.js");

var setTotalItemsInSlide = function setTotalItemsInSlide(responsiveConfig, childrenLength) {
  var items = 1;
  if (responsiveConfig) {
    var configKeys = Object.keys(responsiveConfig);

    if (configKeys.length) {
      configKeys.forEach(function (width) {
        if (width < window.innerWidth) {
          items = Math.min(responsiveConfig[width].items, childrenLength) || items;
        }
      });
    }
  }
  return items;
};

var calculateInitialProps = function calculateInitialProps(props, rootComponent) {
  var slides = (0, _elements.getSlides)(props);
  var stagePadding = (0, _elements.getStagePadding)(props);
  var startIndex = props.startIndex,
      responsive = props.responsive,
      infinite = props.infinite;

  var items = setTotalItemsInSlide(responsive, slides.length);
  var currentIndex = (0, _math.setStartIndex)(slides.length, startIndex);
  var galleryWidth = (0, _elements.getElementWidth)(rootComponent);
  var itemWidth = (0, _elements.getItemWidth)(galleryWidth, items);
  var clones = (0, _elements.cloneCarouselItems)(slides, items, { stagePadding: stagePadding, infinite: infinite });
  var translate3d = (0, _animation.getTranslate3dPosition)(currentIndex, { itemWidth: itemWidth, items: items, stagePadding: stagePadding, infinite: infinite });

  return {
    items: items,
    itemWidth: itemWidth,
    currentIndex: currentIndex,
    slides: slides,
    clones: clones,
    infinite: infinite,
    translate3d: translate3d,
    stagePadding: stagePadding
  };
};

exports.setTotalItemsInSlide = setTotalItemsInSlide;
exports.calculateInitialProps = calculateInitialProps;

/***/ }),

/***/ "./node_modules/react-alice-carousel/lib/utils/debug.js":
/*!**************************************************************!*\
  !*** ./node_modules/react-alice-carousel/lib/utils/debug.js ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.debug = debug;
function debug() {
  if (window.__DEBUG__) {
    var _console;

    (_console = console).debug.apply(_console, arguments); 
  }
}

/***/ }),

/***/ "./node_modules/react-alice-carousel/lib/utils/device.js":
/*!***************************************************************!*\
  !*** ./node_modules/react-alice-carousel/lib/utils/device.js ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
function deviceInfo() {
  return {
    width: window.innerWidth,
    height: window.innerHeight
  };
}

function shouldCallHandlerOnWindowResize(prevDimensions) {
  var _deviceInfo = deviceInfo(),
      width = _deviceInfo.width,
      height = _deviceInfo.height;

  return prevDimensions.width !== width || prevDimensions.height !== height;
}

exports.deviceInfo = deviceInfo;
exports.shouldCallHandlerOnWindowResize = shouldCallHandlerOnWindowResize;

/***/ }),

/***/ "./node_modules/react-alice-carousel/lib/utils/elements.js":
/*!*****************************************************************!*\
  !*** ./node_modules/react-alice-carousel/lib/utils/elements.js ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
var cloneCarouselItems = function cloneCarouselItems(children, itemsInSlide, props) {
  var items = itemsInSlide;
  var stagePadding = props.stagePadding,
      infinite = props.infinite;

  var _getStagePadding = getStagePadding({ stagePadding: stagePadding }),
      paddingLeft = _getStagePadding.paddingLeft,
      paddingRight = _getStagePadding.paddingRight;

  if (infinite) {
    if (paddingLeft || paddingRight) {
      if (itemsInSlide < children.length) {
        items = itemsInSlide + 1;
      } else {
        var lastElement = children.slice(-1);
        var firstElement = children.slice(0, 1);
        var _clonesBefore = lastElement.concat(children);
        var _clonesAfter = children.concat(firstElement);

        return [].concat(_clonesBefore, children, _clonesAfter);
      }
    }
  }
  var clonesAfter = children.slice(0, items);
  var clonesBefore = children.slice(children.length - items);

  return [].concat(clonesBefore, children, clonesAfter);
};

var getElementWidth = function getElementWidth(element) {
  if (element && element.getBoundingClientRect) {
    return element.getBoundingClientRect().width;
  }
};

var getSlides = function getSlides(_ref) {
  var children = _ref.children,
      _ref$items = _ref.items,
      items = _ref$items === undefined ? [] : _ref$items;

  return children && children.length ? children : items;
};

var isInactiveItem = function isInactiveItem(props) {
  var _ref2 = props || {},
      items = _ref2.items,
      currentIndex = _ref2.currentIndex,
      infinite = _ref2.infinite,
      _ref2$slides = _ref2.slides,
      slides = _ref2$slides === undefined ? [] : _ref2$slides;

  var inactivePrev = infinite === false && currentIndex === 0;
  var inactiveNext = infinite === false && slides.length - items === currentIndex;

  return { inactivePrev: inactivePrev, inactiveNext: inactiveNext };
};

var getStagePadding = function getStagePadding(props) {
  var _ref3 = props || {},
      stagePadding = _ref3.stagePadding;

  var paddingLeft = Math.abs(stagePadding.paddingLeft) || 0;
  var paddingRight = Math.abs(stagePadding.paddingRight) || 0;

  return { paddingLeft: paddingLeft, paddingRight: paddingRight };
};

var getItemWidth = function getItemWidth() {
  var galleryWidth = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;
  var totalItems = arguments[1];

  var width = Number(galleryWidth);
  var items = Number(totalItems);
  return width && items > 0 ? width / items : 0;
};

var getSlideInfo = function getSlideInfo(index, slidesLength) {
  var slideIndex = index + 1;

  if (slideIndex < 1) {
    slideIndex = slidesLength;
  } else if (slideIndex > slidesLength) {
    slideIndex = 1;
  }

  return { slideIndex: slideIndex, slidesLength: slidesLength };
};

var getNextItemIndexBeforeTouchEnd = function getNextItemIndexBeforeTouchEnd(currentTranslateXPosition, state) {
  var _ref4 = state || {},
      infinite = _ref4.infinite,
      items = _ref4.items,
      itemWidth = _ref4.itemWidth,
      _ref4$slides = _ref4.slides,
      slides = _ref4$slides === undefined ? [] : _ref4$slides,
      _ref4$stagePadding = _ref4.stagePadding,
      stagePadding = _ref4$stagePadding === undefined ? {} : _ref4$stagePadding;

  var paddingLeft = stagePadding.paddingLeft,
      paddingRight = stagePadding.paddingRight;

  var currInd = currentTranslateXPosition / -itemWidth - items;

  if (infinite) {
    if (paddingLeft || paddingRight) {
      currInd -= 1;
    }
  }

  if (currInd === slides.length) {
    return 0;
  }
  if (currInd < 0) {
    return slides.length + currInd;
  }

  return currInd;
};

var isElement = function isElement(element) {
  return element instanceof Element || element instanceof HTMLDocument;
};

exports.getElementWidth = getElementWidth;
exports.getSlides = getSlides;
exports.getStagePadding = getStagePadding;
exports.getItemWidth = getItemWidth;
exports.getSlideInfo = getSlideInfo;
exports.cloneCarouselItems = cloneCarouselItems;
exports.isInactiveItem = isInactiveItem;
exports.getNextItemIndexBeforeTouchEnd = getNextItemIndexBeforeTouchEnd;
exports.isElement = isElement;

/***/ }),

/***/ "./node_modules/react-alice-carousel/lib/utils/index.js":
/*!**************************************************************!*\
  !*** ./node_modules/react-alice-carousel/lib/utils/index.js ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _animation = __webpack_require__(/*! ./animation */ "./node_modules/react-alice-carousel/lib/utils/animation.js");

Object.keys(_animation).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _animation[key];
    }
  });
});

var _common = __webpack_require__(/*! ./common */ "./node_modules/react-alice-carousel/lib/utils/common.js");

Object.keys(_common).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _common[key];
    }
  });
});

var _debug = __webpack_require__(/*! ./debug */ "./node_modules/react-alice-carousel/lib/utils/debug.js");

Object.keys(_debug).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _debug[key];
    }
  });
});

var _device = __webpack_require__(/*! ./device */ "./node_modules/react-alice-carousel/lib/utils/device.js");

Object.keys(_device).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _device[key];
    }
  });
});

var _elements = __webpack_require__(/*! ./elements */ "./node_modules/react-alice-carousel/lib/utils/elements.js");

Object.keys(_elements).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _elements[key];
    }
  });
});

var _swipe = __webpack_require__(/*! ./swipe */ "./node_modules/react-alice-carousel/lib/utils/swipe.js");

Object.keys(_swipe).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _swipe[key];
    }
  });
});

var _timers = __webpack_require__(/*! ./timers */ "./node_modules/react-alice-carousel/lib/utils/timers.js");

Object.keys(_timers).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _timers[key];
    }
  });
});

var _math = __webpack_require__(/*! ./math */ "./node_modules/react-alice-carousel/lib/utils/math.js");

Object.keys(_math).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _math[key];
    }
  });
});

var _style = __webpack_require__(/*! ./style */ "./node_modules/react-alice-carousel/lib/utils/style.js");

Object.keys(_style).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _style[key];
    }
  });
});

var _classnames = __webpack_require__(/*! ./classnames */ "./node_modules/react-alice-carousel/lib/utils/classnames.js");

Object.keys(_classnames).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _classnames[key];
    }
  });
});

/***/ }),

/***/ "./node_modules/react-alice-carousel/lib/utils/math.js":
/*!*************************************************************!*\
  !*** ./node_modules/react-alice-carousel/lib/utils/math.js ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
var getDotsLength = function getDotsLength(slidesLength, items) {
  if (Number(items) !== 0) {
    return slidesLength % items === 0 ? Math.floor(slidesLength / items) - 1 : Math.floor(slidesLength / items);
  }
  return 0;
};

var getActiveSlideIndex = function getActiveSlideIndex(inactiveNext, index, items, slidesLength) {
  var dotsLength = getDotsLength(slidesLength, items);
  var currentIndex = index + items;

  if (items === 1) {
    if (currentIndex < items) {
      return slidesLength - items;
    } else if (currentIndex > slidesLength) {
      return 0;
    } else {
      return currentIndex - 1;
    }
  } else {
    if (currentIndex === slidesLength + items) {
      return 0;
    } else if (inactiveNext || currentIndex < items && currentIndex !== 0) {
      return dotsLength;
    } else if (currentIndex === 0) {
      return slidesLength % items === 0 ? dotsLength : dotsLength - 1;
    } else {
      return Math.floor(currentIndex / items) - 1;
    }
  }
};

var setStartIndex = function setStartIndex(childrenLength, index) {
  var startIndex = index ? Math.abs(Math.ceil(index)) : 0;
  return Math.min(startIndex, childrenLength - 1);
};

var getFadeOutOffset = function getFadeOutOffset(itemIndex, currentIndex, itemWidth) {
  if (itemIndex < currentIndex) {
    return (currentIndex - itemIndex) * -itemWidth;
  } else {
    return (itemIndex - currentIndex) * itemWidth;
  }
};

var getMaxSWipePosition = function getMaxSWipePosition(items, itemWidth, slidesLength) {
  return (slidesLength + items) * itemWidth;
};

var getSwipeMinLimit = function getSwipeMinLimit(itemWidth, _ref) {
  var _ref$paddingLeft = _ref.paddingLeft,
      paddingLeft = _ref$paddingLeft === undefined ? 0 : _ref$paddingLeft;

  return paddingLeft ? itemWidth + paddingLeft : 0;
};

var getSwipeMaxLimit = function getSwipeMaxLimit(itemWidth, maxPosition, _ref2) {
  var _ref2$paddingRight = _ref2.paddingRight,
      paddingRight = _ref2$paddingRight === undefined ? 0 : _ref2$paddingRight;

  return paddingRight ? maxPosition + itemWidth - paddingRight : maxPosition;
};

var getSlideOffset = function getSlideOffset(itemWidth) {
  var offset = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 250;

  return Math.min(itemWidth / 2, offset);
};

var getLeftTranslateLimit = function getLeftTranslateLimit(items, itemWidth) {
  return items * -itemWidth + getSlideOffset(itemWidth);
};

var getRightTranslateLimit = function getRightTranslateLimit(slidesLength, itemWidth) {
  return slidesLength * -itemWidth - getSlideOffset(itemWidth);
};

var getDotsCeilLength = function getDotsCeilLength(slidesLength, items) {
  return Number(items) !== 0 ? Math.ceil(slidesLength / items) : 0;
};

var recalculateCurrentSlideIndex = function recalculateCurrentSlideIndex(_ref3) {
  var slides = _ref3.slides,
      currentIndex = _ref3.currentIndex;

  return currentIndex < 0 ? slides.length - 1 : 0;
};

var recalculateTranslatePosition = function recalculateTranslatePosition(state) {
  var items = state.items,
      itemWidth = state.itemWidth,
      slides = state.slides,
      stagePadding = state.stagePadding;

  var maxSlidePosition = slides.length - 1;
  var currentIndex = state.currentIndex < 0 ? maxSlidePosition : 0;
  var nextIndex = currentIndex === 0 ? items : maxSlidePosition + items;

  if (stagePadding.paddingLeft || stagePadding.paddingRight) {
    return (nextIndex + 1) * -itemWidth;
  }
  return nextIndex * -itemWidth;
};

exports.getActiveSlideIndex = getActiveSlideIndex;
exports.getDotsCeilLength = getDotsCeilLength;
exports.getFadeOutOffset = getFadeOutOffset;
exports.setStartIndex = setStartIndex;
exports.getMaxSWipePosition = getMaxSWipePosition;
exports.getSwipeMinLimit = getSwipeMinLimit;
exports.getSwipeMaxLimit = getSwipeMaxLimit;
exports.getLeftTranslateLimit = getLeftTranslateLimit;
exports.getRightTranslateLimit = getRightTranslateLimit;
exports.recalculateCurrentSlideIndex = recalculateCurrentSlideIndex;
exports.recalculateTranslatePosition = recalculateTranslatePosition;

/***/ }),

/***/ "./node_modules/react-alice-carousel/lib/utils/style.js":
/*!**************************************************************!*\
  !*** ./node_modules/react-alice-carousel/lib/utils/style.js ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.intermediateTransitionProps = exports.wrapperStyle = exports.stageStyle = exports.itemStyles = undefined;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _animation = __webpack_require__(/*! ./animation */ "./node_modules/react-alice-carousel/lib/utils/animation.js");

var intermediateTransitionProps = function intermediateTransitionProps(condition, duration) {
  return condition ? { fadeoutAnimationProcessing: true, style: { transition: 'transform 0ms ease-out' } } : { style: { transition: 'transform ' + duration + 'ms ease-out' } };
};

var itemStyles = function itemStyles(i, state, animationProps) {
  var fadeOutOffset = animationProps.fadeOutOffset;
  var itemWidth = state.itemWidth,
      duration = state.duration;


  return (0, _animation.isAnimatedItem)(i, animationProps) ? { transform: 'translateX(' + fadeOutOffset + 'px)', animationDuration: duration + 'ms', width: itemWidth + 'px' } : { width: itemWidth + 'px' };
};

var stageStyle = function stageStyle(style, translate3d) {
  return _extends({}, style, { transform: 'translate3d(' + translate3d + 'px, 0, 0)' });
};
var wrapperStyle = function wrapperStyle(_ref) {
  var paddingLeft = _ref.paddingLeft,
      paddingRight = _ref.paddingRight;

  return { paddingLeft: paddingLeft + 'px', paddingRight: paddingRight + 'px' };
};

exports.itemStyles = itemStyles;
exports.stageStyle = stageStyle;
exports.wrapperStyle = wrapperStyle;
exports.intermediateTransitionProps = intermediateTransitionProps;

/***/ }),

/***/ "./node_modules/react-alice-carousel/lib/utils/swipe.js":
/*!**************************************************************!*\
  !*** ./node_modules/react-alice-carousel/lib/utils/swipe.js ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
var isVerticalTouchMoveDetected = function isVerticalTouchMoveDetected(e, deltaX, deltaY) {
  var gap = 32;
  var vertical = Math.abs(deltaY);
  var horizontal = Math.abs(deltaX);
  return vertical > horizontal && horizontal < gap;
};

var getSwipeDirection = function getSwipeDirection(deltaX) {
  return deltaX > 0 ? 'LEFT' : 'RIGHT';
};

exports.isVerticalTouchMoveDetected = isVerticalTouchMoveDetected;
exports.getSwipeDirection = getSwipeDirection;

/***/ }),

/***/ "./node_modules/react-alice-carousel/lib/utils/timers.js":
/*!***************************************************************!*\
  !*** ./node_modules/react-alice-carousel/lib/utils/timers.js ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
function debounce(func) {
  var ms = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;

  var timer = null;

  return function () {
    var _this = this;

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    if (timer) {
      clearTimeout(timer);
    }

    timer = setTimeout(function () {
      func.apply(_this, args);
      timer = null;
    }, ms);
  };
}

exports.debounce = debounce;

/***/ }),

/***/ "./node_modules/react-dom/index.js":
/*!***********************************************************************************************!*\
  !*** delegated ./node_modules/react-dom/index.js from dll-reference dll_831a3634f66cb1dada0c ***!
  \***********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = (__webpack_require__(/*! dll-reference dll_831a3634f66cb1dada0c */ "dll-reference dll_831a3634f66cb1dada0c"))("./node_modules/react-dom/index.js");

/***/ }),

/***/ "./node_modules/react-is/cjs/react-is.development.js":
/*!***********************************************************!*\
  !*** ./node_modules/react-is/cjs/react-is.development.js ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/** @license React v16.7.0
 * react-is.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */





if (true) {
  (function() {
'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

// The Symbol used to tag the ReactElement-like types. If there is no native Symbol
// nor polyfill, then a plain number is used for performance.
var hasSymbol = typeof Symbol === 'function' && Symbol.for;

var REACT_ELEMENT_TYPE = hasSymbol ? Symbol.for('react.element') : 0xeac7;
var REACT_PORTAL_TYPE = hasSymbol ? Symbol.for('react.portal') : 0xeaca;
var REACT_FRAGMENT_TYPE = hasSymbol ? Symbol.for('react.fragment') : 0xeacb;
var REACT_STRICT_MODE_TYPE = hasSymbol ? Symbol.for('react.strict_mode') : 0xeacc;
var REACT_PROFILER_TYPE = hasSymbol ? Symbol.for('react.profiler') : 0xead2;
var REACT_PROVIDER_TYPE = hasSymbol ? Symbol.for('react.provider') : 0xeacd;
var REACT_CONTEXT_TYPE = hasSymbol ? Symbol.for('react.context') : 0xeace;
var REACT_ASYNC_MODE_TYPE = hasSymbol ? Symbol.for('react.async_mode') : 0xeacf;
var REACT_CONCURRENT_MODE_TYPE = hasSymbol ? Symbol.for('react.concurrent_mode') : 0xeacf;
var REACT_FORWARD_REF_TYPE = hasSymbol ? Symbol.for('react.forward_ref') : 0xead0;
var REACT_SUSPENSE_TYPE = hasSymbol ? Symbol.for('react.suspense') : 0xead1;
var REACT_MEMO_TYPE = hasSymbol ? Symbol.for('react.memo') : 0xead3;
var REACT_LAZY_TYPE = hasSymbol ? Symbol.for('react.lazy') : 0xead4;

function isValidElementType(type) {
  return typeof type === 'string' || typeof type === 'function' ||
  // Note: its typeof might be other than 'symbol' or 'number' if it's a polyfill.
  type === REACT_FRAGMENT_TYPE || type === REACT_CONCURRENT_MODE_TYPE || type === REACT_PROFILER_TYPE || type === REACT_STRICT_MODE_TYPE || type === REACT_SUSPENSE_TYPE || typeof type === 'object' && type !== null && (type.$$typeof === REACT_LAZY_TYPE || type.$$typeof === REACT_MEMO_TYPE || type.$$typeof === REACT_PROVIDER_TYPE || type.$$typeof === REACT_CONTEXT_TYPE || type.$$typeof === REACT_FORWARD_REF_TYPE);
}

/**
 * Forked from fbjs/warning:
 * https://github.com/facebook/fbjs/blob/e66ba20ad5be433eb54423f2b097d829324d9de6/packages/fbjs/src/__forks__/warning.js
 *
 * Only change is we use console.warn instead of console.error,
 * and do nothing when 'console' is not supported.
 * This really simplifies the code.
 * ---
 * Similar to invariant but only logs a warning if the condition is not met.
 * This can be used to log issues in development environments in critical
 * paths. Removing the logging code for production environments will keep the
 * same logic and follow the same code paths.
 */

var lowPriorityWarning = function () {};

{
  var printWarning = function (format) {
    for (var _len = arguments.length, args = Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
      args[_key - 1] = arguments[_key];
    }

    var argIndex = 0;
    var message = 'Warning: ' + format.replace(/%s/g, function () {
      return args[argIndex++];
    });
    if (typeof console !== 'undefined') {
      console.warn(message);
    }
    try {
      // --- Welcome to debugging React ---
      // This error was thrown as a convenience so that you can use this stack
      // to find the callsite that caused this warning to fire.
      throw new Error(message);
    } catch (x) {}
  };

  lowPriorityWarning = function (condition, format) {
    if (format === undefined) {
      throw new Error('`lowPriorityWarning(condition, format, ...args)` requires a warning ' + 'message argument');
    }
    if (!condition) {
      for (var _len2 = arguments.length, args = Array(_len2 > 2 ? _len2 - 2 : 0), _key2 = 2; _key2 < _len2; _key2++) {
        args[_key2 - 2] = arguments[_key2];
      }

      printWarning.apply(undefined, [format].concat(args));
    }
  };
}

var lowPriorityWarning$1 = lowPriorityWarning;

function typeOf(object) {
  if (typeof object === 'object' && object !== null) {
    var $$typeof = object.$$typeof;
    switch ($$typeof) {
      case REACT_ELEMENT_TYPE:
        var type = object.type;

        switch (type) {
          case REACT_ASYNC_MODE_TYPE:
          case REACT_CONCURRENT_MODE_TYPE:
          case REACT_FRAGMENT_TYPE:
          case REACT_PROFILER_TYPE:
          case REACT_STRICT_MODE_TYPE:
          case REACT_SUSPENSE_TYPE:
            return type;
          default:
            var $$typeofType = type && type.$$typeof;

            switch ($$typeofType) {
              case REACT_CONTEXT_TYPE:
              case REACT_FORWARD_REF_TYPE:
              case REACT_PROVIDER_TYPE:
                return $$typeofType;
              default:
                return $$typeof;
            }
        }
      case REACT_LAZY_TYPE:
      case REACT_MEMO_TYPE:
      case REACT_PORTAL_TYPE:
        return $$typeof;
    }
  }

  return undefined;
}

// AsyncMode is deprecated along with isAsyncMode
var AsyncMode = REACT_ASYNC_MODE_TYPE;
var ConcurrentMode = REACT_CONCURRENT_MODE_TYPE;
var ContextConsumer = REACT_CONTEXT_TYPE;
var ContextProvider = REACT_PROVIDER_TYPE;
var Element = REACT_ELEMENT_TYPE;
var ForwardRef = REACT_FORWARD_REF_TYPE;
var Fragment = REACT_FRAGMENT_TYPE;
var Lazy = REACT_LAZY_TYPE;
var Memo = REACT_MEMO_TYPE;
var Portal = REACT_PORTAL_TYPE;
var Profiler = REACT_PROFILER_TYPE;
var StrictMode = REACT_STRICT_MODE_TYPE;
var Suspense = REACT_SUSPENSE_TYPE;

var hasWarnedAboutDeprecatedIsAsyncMode = false;

// AsyncMode should be deprecated
function isAsyncMode(object) {
  {
    if (!hasWarnedAboutDeprecatedIsAsyncMode) {
      hasWarnedAboutDeprecatedIsAsyncMode = true;
      lowPriorityWarning$1(false, 'The ReactIs.isAsyncMode() alias has been deprecated, ' + 'and will be removed in React 17+. Update your code to use ' + 'ReactIs.isConcurrentMode() instead. It has the exact same API.');
    }
  }
  return isConcurrentMode(object) || typeOf(object) === REACT_ASYNC_MODE_TYPE;
}
function isConcurrentMode(object) {
  return typeOf(object) === REACT_CONCURRENT_MODE_TYPE;
}
function isContextConsumer(object) {
  return typeOf(object) === REACT_CONTEXT_TYPE;
}
function isContextProvider(object) {
  return typeOf(object) === REACT_PROVIDER_TYPE;
}
function isElement(object) {
  return typeof object === 'object' && object !== null && object.$$typeof === REACT_ELEMENT_TYPE;
}
function isForwardRef(object) {
  return typeOf(object) === REACT_FORWARD_REF_TYPE;
}
function isFragment(object) {
  return typeOf(object) === REACT_FRAGMENT_TYPE;
}
function isLazy(object) {
  return typeOf(object) === REACT_LAZY_TYPE;
}
function isMemo(object) {
  return typeOf(object) === REACT_MEMO_TYPE;
}
function isPortal(object) {
  return typeOf(object) === REACT_PORTAL_TYPE;
}
function isProfiler(object) {
  return typeOf(object) === REACT_PROFILER_TYPE;
}
function isStrictMode(object) {
  return typeOf(object) === REACT_STRICT_MODE_TYPE;
}
function isSuspense(object) {
  return typeOf(object) === REACT_SUSPENSE_TYPE;
}

exports.typeOf = typeOf;
exports.AsyncMode = AsyncMode;
exports.ConcurrentMode = ConcurrentMode;
exports.ContextConsumer = ContextConsumer;
exports.ContextProvider = ContextProvider;
exports.Element = Element;
exports.ForwardRef = ForwardRef;
exports.Fragment = Fragment;
exports.Lazy = Lazy;
exports.Memo = Memo;
exports.Portal = Portal;
exports.Profiler = Profiler;
exports.StrictMode = StrictMode;
exports.Suspense = Suspense;
exports.isValidElementType = isValidElementType;
exports.isAsyncMode = isAsyncMode;
exports.isConcurrentMode = isConcurrentMode;
exports.isContextConsumer = isContextConsumer;
exports.isContextProvider = isContextProvider;
exports.isElement = isElement;
exports.isForwardRef = isForwardRef;
exports.isFragment = isFragment;
exports.isLazy = isLazy;
exports.isMemo = isMemo;
exports.isPortal = isPortal;
exports.isProfiler = isProfiler;
exports.isStrictMode = isStrictMode;
exports.isSuspense = isSuspense;
  })();
}


/***/ }),

/***/ "./node_modules/react-is/index.js":
/*!****************************************!*\
  !*** ./node_modules/react-is/index.js ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


if (false) {} else {
  module.exports = __webpack_require__(/*! ./cjs/react-is.development.js */ "./node_modules/react-is/cjs/react-is.development.js");
}


/***/ }),

/***/ "./node_modules/react-swipeable/lib/Swipeable.js":
/*!*******************************************************!*\
  !*** ./node_modules/react-swipeable/lib/Swipeable.js ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var React = __webpack_require__(/*! react */ "./node_modules/react/index.js");
var PropTypes = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
var DetectPassiveEvents = __webpack_require__(/*! detect-passive-events */ "./node_modules/detect-passive-events/lib/index.js").default;

function getInitialState() {
  return {
    x: null,
    y: null,
    swiping: false,
    start: 0
  };
}

function getMovingPosition(e) {
  return 'changedTouches' in e ? { x: e.changedTouches[0].clientX, y: e.changedTouches[0].clientY } : { x: e.clientX, y: e.clientY };
}
function getPosition(e) {
  return 'touches' in e ? { x: e.touches[0].clientX, y: e.touches[0].clientY } : { x: e.clientX, y: e.clientY };
}

function rotateByAngle(pos, angle) {
  if (angle === 0) {
    return pos;
  }

  var x = pos.x,
      y = pos.y;


  var angleInRadians = Math.PI / 180 * angle;
  var rotatedX = x * Math.cos(angleInRadians) + y * Math.sin(angleInRadians);
  var rotatedY = y * Math.cos(angleInRadians) - x * Math.sin(angleInRadians);
  return { x: rotatedX, y: rotatedY };
}

function calculatePos(e, state) {
  var _rotateByAngle = rotateByAngle(getMovingPosition(e), state.rotationAngle),
      x = _rotateByAngle.x,
      y = _rotateByAngle.y;

  var deltaX = state.x - x;
  var deltaY = state.y - y;

  var absX = Math.abs(deltaX);
  var absY = Math.abs(deltaY);

  var time = Date.now() - state.start;
  var velocity = Math.sqrt(absX * absX + absY * absY) / time;

  return { deltaX: deltaX, deltaY: deltaY, absX: absX, absY: absY, velocity: velocity };
}

var Swipeable = function (_React$Component) {
  _inherits(Swipeable, _React$Component);

  function Swipeable(props, context) {
    _classCallCheck(this, Swipeable);

    var _this = _possibleConstructorReturn(this, _React$Component.call(this, props, context));

    _this.swipeable = getInitialState();

    _this.eventStart = _this.eventStart.bind(_this);
    _this.eventMove = _this.eventMove.bind(_this);
    _this.eventEnd = _this.eventEnd.bind(_this);
    _this.mouseDown = _this.mouseDown.bind(_this);
    _this.mouseMove = _this.mouseMove.bind(_this);
    _this.mouseUp = _this.mouseUp.bind(_this);
    _this.cleanupMouseListeners = _this.cleanupMouseListeners.bind(_this);
    _this.setupMouseListeners = _this.setupMouseListeners.bind(_this);
    _this.elementRef = _this.elementRef.bind(_this);
    _this.setupTouchmoveEvent = _this.setupTouchmoveEvent.bind(_this);
    _this.cleanupTouchmoveEvent = _this.cleanupTouchmoveEvent.bind(_this);

    _this.hasPassiveSupport = DetectPassiveEvents.hasSupport;
    return _this;
  }

  Swipeable.prototype.componentDidMount = function componentDidMount() {
    if (this.props.preventDefaultTouchmoveEvent) {
      this.setupTouchmoveEvent();
    }
  };

  Swipeable.prototype.componentDidUpdate = function componentDidUpdate(prevProps) {
    if (prevProps.disabled !== this.props.disabled) {
      this.cleanupMouseListeners();

      this.swipeable = getInitialState();
    }

    if (prevProps.preventDefaultTouchmoveEvent && !this.props.preventDefaultTouchmoveEvent) {
      this.cleanupTouchmoveEvent();
    } else if (!prevProps.preventDefaultTouchmoveEvent && this.props.preventDefaultTouchmoveEvent) {
      this.setupTouchmoveEvent();
    }
  };

  Swipeable.prototype.componentWillUnmount = function componentWillUnmount() {
    this.cleanupMouseListeners();
  };

  Swipeable.prototype.setupTouchmoveEvent = function setupTouchmoveEvent() {
    if (this.element && this.hasPassiveSupport) {
      this.element.addEventListener('touchmove', this.eventMove, { passive: false });
    }
  };

  Swipeable.prototype.setupMouseListeners = function setupMouseListeners() {
    document.addEventListener('mousemove', this.mouseMove);
    document.addEventListener('mouseup', this.mouseUp);
  };

  Swipeable.prototype.cleanupTouchmoveEvent = function cleanupTouchmoveEvent() {
    if (this.element && this.hasPassiveSupport) {
      this.element.removeEventListener('touchmove', this.eventMove, { passive: false });
    }
  };

  Swipeable.prototype.cleanupMouseListeners = function cleanupMouseListeners() {
    document.removeEventListener('mousemove', this.mouseMove);
    document.removeEventListener('mouseup', this.mouseUp);
  };

  Swipeable.prototype.mouseDown = function mouseDown(e) {
    if (!this.props.trackMouse || e.type !== 'mousedown') {
      return;
    }

    if (typeof this.props.onMouseDown === 'function') this.props.onMouseDown(e);

    this.setupMouseListeners();

    this.eventStart(e);
  };

  Swipeable.prototype.mouseMove = function mouseMove(e) {
    this.eventMove(e);
  };

  Swipeable.prototype.mouseUp = function mouseUp(e) {
    this.cleanupMouseListeners();
    this.eventEnd(e);
  };

  Swipeable.prototype.eventStart = function eventStart(e) {
    if (e.touches && e.touches.length > 1) return;

    var rotationAngle = this.props.rotationAngle;

    var _rotateByAngle2 = rotateByAngle(getPosition(e), rotationAngle),
        x = _rotateByAngle2.x,
        y = _rotateByAngle2.y;

    if (this.props.stopPropagation) e.stopPropagation();

    this.swipeable = { start: Date.now(), x: x, y: y, swiping: false, rotationAngle: rotationAngle };
  };

  Swipeable.prototype.eventMove = function eventMove(e) {
    var _props = this.props,
        stopPropagation = _props.stopPropagation,
        delta = _props.delta,
        onSwiping = _props.onSwiping,
        onSwiped = _props.onSwiped,
        onSwipingLeft = _props.onSwipingLeft,
        onSwipedLeft = _props.onSwipedLeft,
        onSwipingRight = _props.onSwipingRight,
        onSwipedRight = _props.onSwipedRight,
        onSwipingUp = _props.onSwipingUp,
        onSwipedUp = _props.onSwipedUp,
        onSwipingDown = _props.onSwipingDown,
        onSwipedDown = _props.onSwipedDown,
        preventDefaultTouchmoveEvent = _props.preventDefaultTouchmoveEvent;


    if (!this.swipeable.x || !this.swipeable.y || e.touches && e.touches.length > 1) {
      return;
    }

    var pos = calculatePos(e, this.swipeable);

    if (pos.absX < delta && pos.absY < delta && !this.swipeable.swiping) return;

    if (stopPropagation) e.stopPropagation();

    if (onSwiping) {
      onSwiping(e, pos.deltaX, pos.deltaY, pos.absX, pos.absY, pos.velocity);
    }

    var cancelablePageSwipe = false;
    if (onSwiping || onSwiped) {
      cancelablePageSwipe = true;
    }

    if (pos.absX > pos.absY) {
      if (pos.deltaX > 0) {
        if (onSwipingLeft || onSwipedLeft) {
          onSwipingLeft && onSwipingLeft(e, pos.absX);
          cancelablePageSwipe = true;
        }
      } else if (onSwipingRight || onSwipedRight) {
        onSwipingRight && onSwipingRight(e, pos.absX);
        cancelablePageSwipe = true;
      }
    } else if (pos.deltaY > 0) {
      if (onSwipingUp || onSwipedUp) {
        onSwipingUp && onSwipingUp(e, pos.absY);
        cancelablePageSwipe = true;
      }
    } else if (onSwipingDown || onSwipedDown) {
      onSwipingDown && onSwipingDown(e, pos.absY);
      cancelablePageSwipe = true;
    }

    this.swipeable.swiping = true;

    if (cancelablePageSwipe && preventDefaultTouchmoveEvent) e.preventDefault();
  };

  Swipeable.prototype.eventEnd = function eventEnd(e) {
    var _props2 = this.props,
        stopPropagation = _props2.stopPropagation,
        flickThreshold = _props2.flickThreshold,
        onSwiped = _props2.onSwiped,
        onSwipedLeft = _props2.onSwipedLeft,
        onSwipedRight = _props2.onSwipedRight,
        onSwipedUp = _props2.onSwipedUp,
        onSwipedDown = _props2.onSwipedDown,
        onTap = _props2.onTap;


    if (this.swipeable.swiping) {
      var pos = calculatePos(e, this.swipeable);

      if (stopPropagation) e.stopPropagation();

      var isFlick = pos.velocity > flickThreshold;

      onSwiped && onSwiped(e, pos.deltaX, pos.deltaY, isFlick, pos.velocity);

      if (pos.absX > pos.absY) {
        if (pos.deltaX > 0) {
          onSwipedLeft && onSwipedLeft(e, pos.deltaX, isFlick);
        } else {
          onSwipedRight && onSwipedRight(e, pos.deltaX, isFlick);
        }
      } else if (pos.deltaY > 0) {
        onSwipedUp && onSwipedUp(e, pos.deltaY, isFlick);
      } else {
        onSwipedDown && onSwipedDown(e, pos.deltaY, isFlick);
      }
    } else {
      onTap && onTap(e);
    }

    this.swipeable = getInitialState();
  };

  Swipeable.prototype.elementRef = function elementRef(element) {
    this.element = element;
    this.props.innerRef && this.props.innerRef(element);
  };

  Swipeable.prototype.render = function render() {
    var newProps = _extends({}, this.props);
    if (!this.props.disabled) {
      newProps.onTouchStart = this.eventStart;

      if (!this.props.preventDefaultTouchmoveEvent || !this.hasPassiveSupport) {
        newProps.onTouchMove = this.eventMove;
      }

      newProps.onTouchEnd = this.eventEnd;
      newProps.onMouseDown = this.mouseDown;
    }

    newProps.ref = this.elementRef;

    delete newProps.onSwiped;
    delete newProps.onSwiping;
    delete newProps.onSwipingUp;
    delete newProps.onSwipingRight;
    delete newProps.onSwipingDown;
    delete newProps.onSwipingLeft;
    delete newProps.onSwipedUp;
    delete newProps.onSwipedRight;
    delete newProps.onSwipedDown;
    delete newProps.onSwipedLeft;
    delete newProps.onTap;
    delete newProps.flickThreshold;
    delete newProps.delta;
    delete newProps.preventDefaultTouchmoveEvent;
    delete newProps.stopPropagation;
    delete newProps.nodeName;
    delete newProps.children;
    delete newProps.trackMouse;
    delete newProps.disabled;
    delete newProps.innerRef;
    delete newProps.rotationAngle;

    return React.createElement(this.props.nodeName, newProps, this.props.children);
  };

  return Swipeable;
}(React.Component);

Swipeable.propTypes = {
  onSwiped: PropTypes.func,
  onSwiping: PropTypes.func,
  onSwipingUp: PropTypes.func,
  onSwipingRight: PropTypes.func,
  onSwipingDown: PropTypes.func,
  onSwipingLeft: PropTypes.func,
  onSwipedUp: PropTypes.func,
  onSwipedRight: PropTypes.func,
  onSwipedDown: PropTypes.func,
  onSwipedLeft: PropTypes.func,
  onTap: PropTypes.func,
  flickThreshold: PropTypes.number,
  delta: PropTypes.number,
  preventDefaultTouchmoveEvent: PropTypes.bool,
  stopPropagation: PropTypes.bool,
  nodeName: PropTypes.string,
  trackMouse: PropTypes.bool,
  disabled: PropTypes.bool,
  innerRef: PropTypes.func,
  children: PropTypes.node,
  rotationAngle: PropTypes.number
};

Swipeable.defaultProps = {
  flickThreshold: 0.6,
  delta: 10,
  preventDefaultTouchmoveEvent: false,
  stopPropagation: false,
  nodeName: 'div',
  disabled: false,
  rotationAngle: 0
};

module.exports = Swipeable;

/***/ }),

/***/ "./node_modules/react/index.js":
/*!*******************************************************************************************!*\
  !*** delegated ./node_modules/react/index.js from dll-reference dll_831a3634f66cb1dada0c ***!
  \*******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = (__webpack_require__(/*! dll-reference dll_831a3634f66cb1dada0c */ "dll-reference dll_831a3634f66cb1dada0c"))("./node_modules/react/index.js");

/***/ }),

/***/ "./node_modules/styled-components/dist/styled-components.browser.esm.js":
/*!******************************************************************************!*\
  !*** ./node_modules/styled-components/dist/styled-components.browser.esm.js ***!
  \******************************************************************************/
/*! exports provided: default, css, keyframes, createGlobalStyle, isStyledComponent, ThemeConsumer, ThemeContext, ThemeProvider, withTheme, ServerStyleSheet, StyleSheetManager, __DO_NOT_USE_OR_YOU_WILL_BE_HAUNTED_BY_SPOOKY_GHOSTS */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(process) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "css", function() { return css; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "keyframes", function() { return keyframes; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createGlobalStyle", function() { return createGlobalStyle; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isStyledComponent", function() { return isStyledComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ThemeConsumer", function() { return ThemeConsumer; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ThemeContext", function() { return ThemeContext; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ThemeProvider", function() { return ThemeProvider; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "withTheme", function() { return withTheme; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ServerStyleSheet", function() { return ServerStyleSheet; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StyleSheetManager", function() { return StyleSheetManager; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__DO_NOT_USE_OR_YOU_WILL_BE_HAUNTED_BY_SPOOKY_GHOSTS", function() { return __DO_NOT_USE_OR_YOU_WILL_BE_HAUNTED_BY_SPOOKY_GHOSTS; });
/* harmony import */ var stylis_stylis_min__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! stylis/stylis.min */ "./node_modules/stylis/stylis.min.js");
/* harmony import */ var stylis_stylis_min__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(stylis_stylis_min__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var stylis_rule_sheet__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! stylis-rule-sheet */ "./node_modules/stylis-rule-sheet/index.js");
/* harmony import */ var stylis_rule_sheet__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(stylis_rule_sheet__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _emotion_unitless__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @emotion/unitless */ "./node_modules/@emotion/unitless/dist/unitless.browser.esm.js");
/* harmony import */ var react_is__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-is */ "./node_modules/react-is/index.js");
/* harmony import */ var react_is__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_is__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var memoize_one__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! memoize-one */ "./node_modules/memoize-one/dist/memoize-one.esm.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react-dom */ "./node_modules/react-dom/index.js");
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react_dom__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _emotion_is_prop_valid__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @emotion/is-prop-valid */ "./node_modules/@emotion/is-prop-valid/dist/is-prop-valid.browser.esm.js");










// 

var interleave = (function (strings, interpolations) {
  var result = [strings[0]];

  for (var i = 0, len = interpolations.length; i < len; i += 1) {
    result.push(interpolations[i], strings[i + 1]);
  }

  return result;
});

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) {
  return typeof obj;
} : function (obj) {
  return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
};

var classCallCheck = function (instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
};

var createClass = function () {
  function defineProperties(target, props) {
    for (var i = 0; i < props.length; i++) {
      var descriptor = props[i];
      descriptor.enumerable = descriptor.enumerable || false;
      descriptor.configurable = true;
      if ("value" in descriptor) descriptor.writable = true;
      Object.defineProperty(target, descriptor.key, descriptor);
    }
  }

  return function (Constructor, protoProps, staticProps) {
    if (protoProps) defineProperties(Constructor.prototype, protoProps);
    if (staticProps) defineProperties(Constructor, staticProps);
    return Constructor;
  };
}();

var _extends = Object.assign || function (target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i];

    for (var key in source) {
      if (Object.prototype.hasOwnProperty.call(source, key)) {
        target[key] = source[key];
      }
    }
  }

  return target;
};

var inherits = function (subClass, superClass) {
  if (typeof superClass !== "function" && superClass !== null) {
    throw new TypeError("Super expression must either be null or a function, not " + typeof superClass);
  }

  subClass.prototype = Object.create(superClass && superClass.prototype, {
    constructor: {
      value: subClass,
      enumerable: false,
      writable: true,
      configurable: true
    }
  });
  if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
};

var objectWithoutProperties = function (obj, keys) {
  var target = {};

  for (var i in obj) {
    if (keys.indexOf(i) >= 0) continue;
    if (!Object.prototype.hasOwnProperty.call(obj, i)) continue;
    target[i] = obj[i];
  }

  return target;
};

var possibleConstructorReturn = function (self, call) {
  if (!self) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }

  return call && (typeof call === "object" || typeof call === "function") ? call : self;
};

// 
var isPlainObject = (function (x) {
  return (typeof x === 'undefined' ? 'undefined' : _typeof(x)) === 'object' && x.constructor === Object;
});

// 
var EMPTY_ARRAY = Object.freeze([]);
var EMPTY_OBJECT = Object.freeze({});

// 
function isFunction(test) {
  return typeof test === 'function';
}

// 

function getComponentName(target) {
  return ( true ? typeof target === 'string' && target : undefined) || target.displayName || target.name || 'Component';
}

// 
function isStyledComponent(target) {
  return target && typeof target.styledComponentId === 'string';
}

// 

var SC_ATTR = typeof process !== 'undefined' && process.env.SC_ATTR || 'data-styled';

var SC_VERSION_ATTR = 'data-styled-version';

var SC_STREAM_ATTR = 'data-styled-streamed';

var IS_BROWSER = typeof window !== 'undefined' && 'HTMLElement' in window;

var DISABLE_SPEEDY = typeof SC_DISABLE_SPEEDY === 'boolean' && SC_DISABLE_SPEEDY || "development" !== 'production';

// Shared empty execution context when generating static styles
var STATIC_EXECUTION_CONTEXT = {};

// 


/**
 * Parse errors.md and turn it into a simple hash of code: message
 */
var ERRORS =  true ? {
  "1": "Cannot create styled-component for component: %s.\n\n",
  "2": "Can't collect styles once you've consumed a `ServerStyleSheet`'s styles! `ServerStyleSheet` is a one off instance for each server-side render cycle.\n\n- Are you trying to reuse it across renders?\n- Are you accidentally calling collectStyles twice?\n\n",
  "3": "Streaming SSR is only supported in a Node.js environment; Please do not try to call this method in the browser.\n\n",
  "4": "The `StyleSheetManager` expects a valid target or sheet prop!\n\n- Does this error occur on the client and is your target falsy?\n- Does this error occur on the server and is the sheet falsy?\n\n",
  "5": "The clone method cannot be used on the client!\n\n- Are you running in a client-like environment on the server?\n- Are you trying to run SSR on the client?\n\n",
  "6": "Trying to insert a new style tag, but the given Node is unmounted!\n\n- Are you using a custom target that isn't mounted?\n- Does your document not have a valid head element?\n- Have you accidentally removed a style tag manually?\n\n",
  "7": "ThemeProvider: Please return an object from your \"theme\" prop function, e.g.\n\n```js\ntheme={() => ({})}\n```\n\n",
  "8": "ThemeProvider: Please make your \"theme\" prop an object.\n\n",
  "9": "Missing document `<head>`\n\n",
  "10": "Cannot find a StyleSheet instance. Usually this happens if there are multiple copies of styled-components loaded at once. Check out this issue for how to troubleshoot and fix the common cases where this situation can happen: https://github.com/styled-components/styled-components/issues/1941#issuecomment-417862021\n\n",
  "11": "_This error was replaced with a dev-time warning, it will be deleted for v4 final._ [createGlobalStyle] received children which will not be rendered. Please use the component without passing children elements.\n\n",
  "12": "It seems you are interpolating a keyframe declaration (%s) into an untagged string. This was supported in styled-components v3, but is not longer supported in v4 as keyframes are now injected on-demand. Please wrap your string in the css\\`\\` helper (see https://www.styled-components.com/docs/api#css), which ensures the styles are injected correctly.\n\n",
  "13": "%s is not a styled component and cannot be referred to via component selector. See https://www.styled-components.com/docs/advanced#referring-to-other-components for more details.\n"
} : undefined;

/**
 * super basic version of sprintf
 */
function format() {
  var a = arguments.length <= 0 ? undefined : arguments[0];
  var b = [];

  for (var c = 1, len = arguments.length; c < len; c += 1) {
    b.push(arguments.length <= c ? undefined : arguments[c]);
  }

  b.forEach(function (d) {
    a = a.replace(/%[a-z]/, d);
  });

  return a;
}

/**
 * Create an error file out of errors.md for development and a simple web link to the full errors
 * in production mode.
 */

var StyledComponentsError = function (_Error) {
  inherits(StyledComponentsError, _Error);

  function StyledComponentsError(code) {
    classCallCheck(this, StyledComponentsError);

    for (var _len = arguments.length, interpolations = Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
      interpolations[_key - 1] = arguments[_key];
    }

    if (false) { var _this; } else {
      var _this = possibleConstructorReturn(this, _Error.call(this, format.apply(undefined, [ERRORS[code]].concat(interpolations)).trim()));
    }
    return possibleConstructorReturn(_this);
  }

  return StyledComponentsError;
}(Error);

// 
var SC_COMPONENT_ID = /^[^\S\n]*?\/\* sc-component-id:\s*(\S+)\s+\*\//gm;

var extractComps = (function (maybeCSS) {
  var css = '' + (maybeCSS || ''); // Definitely a string, and a clone
  var existingComponents = [];
  css.replace(SC_COMPONENT_ID, function (match, componentId, matchIndex) {
    existingComponents.push({ componentId: componentId, matchIndex: matchIndex });
    return match;
  });
  return existingComponents.map(function (_ref, i) {
    var componentId = _ref.componentId,
        matchIndex = _ref.matchIndex;

    var nextComp = existingComponents[i + 1];
    var cssFromDOM = nextComp ? css.slice(matchIndex, nextComp.matchIndex) : css.slice(matchIndex);
    return { componentId: componentId, cssFromDOM: cssFromDOM };
  });
});

// 

var COMMENT_REGEX = /^\s*\/\/.*$/gm;

// NOTE: This stylis instance is only used to split rules from SSR'd style tags
var stylisSplitter = new stylis_stylis_min__WEBPACK_IMPORTED_MODULE_0___default.a({
  global: false,
  cascade: true,
  keyframe: false,
  prefix: false,
  compress: false,
  semicolon: true
});

var stylis = new stylis_stylis_min__WEBPACK_IMPORTED_MODULE_0___default.a({
  global: false,
  cascade: true,
  keyframe: false,
  prefix: true,
  compress: false,
  semicolon: false // NOTE: This means "autocomplete missing semicolons"
});

// Wrap `insertRulePlugin to build a list of rules,
// and then make our own plugin to return the rules. This
// makes it easier to hook into the existing SSR architecture

var parsingRules = [];

// eslint-disable-next-line consistent-return
var returnRulesPlugin = function returnRulesPlugin(context) {
  if (context === -2) {
    var parsedRules = parsingRules;
    parsingRules = [];
    return parsedRules;
  }
};

var parseRulesPlugin = stylis_rule_sheet__WEBPACK_IMPORTED_MODULE_1___default()(function (rule) {
  parsingRules.push(rule);
});

var _componentId = void 0;
var _selector = void 0;
var _selectorRegexp = void 0;

var selfReferenceReplacer = function selfReferenceReplacer(match, offset, string) {
  if (
  // the first self-ref is always untouched
  offset > 0 &&
  // there should be at least two self-refs to do a replacement (.b > .b)
  string.slice(0, offset).indexOf(_selector) !== -1 &&
  // no consecutive self refs (.b.b); that is a precedence boost and treated differently
  string.slice(offset - _selector.length, offset) !== _selector) {
    return '.' + _componentId;
  }

  return match;
};

/**
 * When writing a style like
 *
 * & + & {
 *   color: red;
 * }
 *
 * The second ampersand should be a reference to the static component class. stylis
 * has no knowledge of static class so we have to intelligently replace the base selector.
 */
var selfReferenceReplacementPlugin = function selfReferenceReplacementPlugin(context, _, selectors) {
  if (context === 2 && selectors.length && selectors[0].lastIndexOf(_selector) > 0) {
    // eslint-disable-next-line no-param-reassign
    selectors[0] = selectors[0].replace(_selectorRegexp, selfReferenceReplacer);
  }
};

stylis.use([selfReferenceReplacementPlugin, parseRulesPlugin, returnRulesPlugin]);
stylisSplitter.use([parseRulesPlugin, returnRulesPlugin]);

var splitByRules = function splitByRules(css) {
  return stylisSplitter('', css);
};

function stringifyRules(rules, selector, prefix) {
  var componentId = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : '&';

  var flatCSS = rules.join('').replace(COMMENT_REGEX, ''); // replace JS comments

  var cssStr = selector && prefix ? prefix + ' ' + selector + ' { ' + flatCSS + ' }' : flatCSS;

  // stylis has no concept of state to be passed to plugins
  // but since JS is single=threaded, we can rely on that to ensure
  // these properties stay in sync with the current stylis run
  _componentId = componentId;
  _selector = selector;
  _selectorRegexp = new RegExp('\\' + _selector + '\\b', 'g');

  return stylis(prefix || !selector ? '' : selector, cssStr);
}

// 
/* eslint-disable camelcase, no-undef */

var getNonce = (function () {
  return  true ? __webpack_require__.nc : undefined;
});

// 
/* These are helpers for the StyleTags to keep track of the injected
 * rule names for each (component) ID that they're keeping track of.
 * They're crucial for detecting whether a name has already been
 * injected.
 * (This excludes rehydrated names) */

/* adds a new ID:name pairing to a names dictionary */
var addNameForId = function addNameForId(names, id, name) {
  if (name) {
    // eslint-disable-next-line no-param-reassign
    var namesForId = names[id] || (names[id] = Object.create(null));
    namesForId[name] = true;
  }
};

/* resets an ID entirely by overwriting it in the dictionary */
var resetIdNames = function resetIdNames(names, id) {
  // eslint-disable-next-line no-param-reassign
  names[id] = Object.create(null);
};

/* factory for a names dictionary checking the existance of an ID:name pairing */
var hasNameForId = function hasNameForId(names) {
  return function (id, name) {
    return names[id] !== undefined && names[id][name];
  };
};

/* stringifies names for the html/element output */
var stringifyNames = function stringifyNames(names) {
  var str = '';
  // eslint-disable-next-line guard-for-in
  for (var id in names) {
    str += Object.keys(names[id]).join(' ') + ' ';
  }
  return str.trim();
};

/* clones the nested names dictionary */
var cloneNames = function cloneNames(names) {
  var clone = Object.create(null);
  // eslint-disable-next-line guard-for-in
  for (var id in names) {
    clone[id] = _extends({}, names[id]);
  }
  return clone;
};

// 

/* These are helpers that deal with the insertRule (aka speedy) API
 * They are used in the StyleTags and specifically the speedy tag
 */

/* retrieve a sheet for a given style tag */
var sheetForTag = function sheetForTag(tag) {
  // $FlowFixMe
  if (tag.sheet) return tag.sheet;

  /* Firefox quirk requires us to step through all stylesheets to find one owned by the given tag */
  var size = document.styleSheets.length;
  for (var i = 0; i < size; i += 1) {
    var sheet = document.styleSheets[i];
    // $FlowFixMe
    if (sheet.ownerNode === tag) return sheet;
  }

  /* we should always be able to find a tag */
  throw new StyledComponentsError(10);
};

/* insert a rule safely and return whether it was actually injected */
var safeInsertRule = function safeInsertRule(sheet, cssRule, index) {
  /* abort early if cssRule string is falsy */
  if (!cssRule) return false;

  var maxIndex = sheet.cssRules.length;

  try {
    /* use insertRule and cap passed index with maxIndex (no of cssRules) */
    sheet.insertRule(cssRule, index <= maxIndex ? index : maxIndex);
  } catch (err) {
    /* any error indicates an invalid rule */
    return false;
  }

  return true;
};

/* deletes `size` rules starting from `removalIndex` */
var deleteRules = function deleteRules(sheet, removalIndex, size) {
  var lowerBound = removalIndex - size;
  for (var i = removalIndex; i > lowerBound; i -= 1) {
    sheet.deleteRule(i);
  }
};

// 

/* this marker separates component styles and is important for rehydration */
var makeTextMarker = function makeTextMarker(id) {
  return '\n/* sc-component-id: ' + id + ' */\n';
};

/* add up all numbers in array up until and including the index */
var addUpUntilIndex = function addUpUntilIndex(sizes, index) {
  var totalUpToIndex = 0;
  for (var i = 0; i <= index; i += 1) {
    totalUpToIndex += sizes[i];
  }

  return totalUpToIndex;
};

/* create a new style tag after lastEl */
var makeStyleTag = function makeStyleTag(target, tagEl, insertBefore) {
  var el = document.createElement('style');
  el.setAttribute(SC_ATTR, '');
  el.setAttribute(SC_VERSION_ATTR, "4.1.3");

  var nonce = getNonce();
  if (nonce) {
    el.setAttribute('nonce', nonce);
  }

  /* Work around insertRule quirk in EdgeHTML */
  el.appendChild(document.createTextNode(''));

  if (target && !tagEl) {
    /* Append to target when no previous element was passed */
    target.appendChild(el);
  } else {
    if (!tagEl || !target || !tagEl.parentNode) {
      throw new StyledComponentsError(6);
    }

    /* Insert new style tag after the previous one */
    tagEl.parentNode.insertBefore(el, insertBefore ? tagEl : tagEl.nextSibling);
  }

  return el;
};

/* takes a css factory function and outputs an html styled tag factory */
var wrapAsHtmlTag = function wrapAsHtmlTag(css, names) {
  return function (additionalAttrs) {
    var nonce = getNonce();
    var attrs = [nonce && 'nonce="' + nonce + '"', SC_ATTR + '="' + stringifyNames(names) + '"', SC_VERSION_ATTR + '="' + "4.1.3" + '"', additionalAttrs];

    var htmlAttr = attrs.filter(Boolean).join(' ');
    return '<style ' + htmlAttr + '>' + css() + '</style>';
  };
};

/* takes a css factory function and outputs an element factory */
var wrapAsElement = function wrapAsElement(css, names) {
  return function () {
    var _props;

    var props = (_props = {}, _props[SC_ATTR] = stringifyNames(names), _props[SC_VERSION_ATTR] = "4.1.3", _props);

    var nonce = getNonce();
    if (nonce) {
      // $FlowFixMe
      props.nonce = nonce;
    }

    // eslint-disable-next-line react/no-danger
    return react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement('style', _extends({}, props, { dangerouslySetInnerHTML: { __html: css() } }));
  };
};

var getIdsFromMarkersFactory = function getIdsFromMarkersFactory(markers) {
  return function () {
    return Object.keys(markers);
  };
};

/* speedy tags utilise insertRule */
var makeSpeedyTag = function makeSpeedyTag(el, getImportRuleTag) {
  var names = Object.create(null);
  var markers = Object.create(null);
  var sizes = [];

  var extractImport = getImportRuleTag !== undefined;
  /* indicates whether getImportRuleTag was called */
  var usedImportRuleTag = false;

  var insertMarker = function insertMarker(id) {
    var prev = markers[id];
    if (prev !== undefined) {
      return prev;
    }

    markers[id] = sizes.length;
    sizes.push(0);
    resetIdNames(names, id);

    return markers[id];
  };

  var insertRules = function insertRules(id, cssRules, name) {
    var marker = insertMarker(id);
    var sheet = sheetForTag(el);
    var insertIndex = addUpUntilIndex(sizes, marker);

    var injectedRules = 0;
    var importRules = [];
    var cssRulesSize = cssRules.length;

    for (var i = 0; i < cssRulesSize; i += 1) {
      var cssRule = cssRules[i];
      var mayHaveImport = extractImport; /* @import rules are reordered to appear first */
      if (mayHaveImport && cssRule.indexOf('@import') !== -1) {
        importRules.push(cssRule);
      } else if (safeInsertRule(sheet, cssRule, insertIndex + injectedRules)) {
        mayHaveImport = false;
        injectedRules += 1;
      }
    }

    if (extractImport && importRules.length > 0) {
      usedImportRuleTag = true;
      // $FlowFixMe
      getImportRuleTag().insertRules(id + '-import', importRules);
    }

    sizes[marker] += injectedRules; /* add up no of injected rules */
    addNameForId(names, id, name);
  };

  var removeRules = function removeRules(id) {
    var marker = markers[id];
    if (marker === undefined) return;

    var size = sizes[marker];
    var sheet = sheetForTag(el);
    var removalIndex = addUpUntilIndex(sizes, marker) - 1;
    deleteRules(sheet, removalIndex, size);
    sizes[marker] = 0;
    resetIdNames(names, id);

    if (extractImport && usedImportRuleTag) {
      // $FlowFixMe
      getImportRuleTag().removeRules(id + '-import');
    }
  };

  var css = function css() {
    var _sheetForTag = sheetForTag(el),
        cssRules = _sheetForTag.cssRules;

    var str = '';

    // eslint-disable-next-line guard-for-in
    for (var id in markers) {
      str += makeTextMarker(id);
      var marker = markers[id];
      var end = addUpUntilIndex(sizes, marker);
      var size = sizes[marker];
      for (var i = end - size; i < end; i += 1) {
        var rule = cssRules[i];
        if (rule !== undefined) {
          str += rule.cssText;
        }
      }
    }

    return str;
  };

  return {
    clone: function clone() {
      throw new StyledComponentsError(5);
    },

    css: css,
    getIds: getIdsFromMarkersFactory(markers),
    hasNameForId: hasNameForId(names),
    insertMarker: insertMarker,
    insertRules: insertRules,
    removeRules: removeRules,
    sealed: false,
    styleTag: el,
    toElement: wrapAsElement(css, names),
    toHTML: wrapAsHtmlTag(css, names)
  };
};

var makeTextNode = function makeTextNode(id) {
  return document.createTextNode(makeTextMarker(id));
};

var makeBrowserTag = function makeBrowserTag(el, getImportRuleTag) {
  var names = Object.create(null);
  var markers = Object.create(null);

  var extractImport = getImportRuleTag !== undefined;

  /* indicates whether getImportRuleTag was called */
  var usedImportRuleTag = false;

  var insertMarker = function insertMarker(id) {
    var prev = markers[id];
    if (prev !== undefined) {
      return prev;
    }

    markers[id] = makeTextNode(id);
    el.appendChild(markers[id]);
    names[id] = Object.create(null);

    return markers[id];
  };

  var insertRules = function insertRules(id, cssRules, name) {
    var marker = insertMarker(id);
    var importRules = [];
    var cssRulesSize = cssRules.length;

    for (var i = 0; i < cssRulesSize; i += 1) {
      var rule = cssRules[i];
      var mayHaveImport = extractImport;
      if (mayHaveImport && rule.indexOf('@import') !== -1) {
        importRules.push(rule);
      } else {
        mayHaveImport = false;
        var separator = i === cssRulesSize - 1 ? '' : ' ';
        marker.appendData('' + rule + separator);
      }
    }

    addNameForId(names, id, name);

    if (extractImport && importRules.length > 0) {
      usedImportRuleTag = true;
      // $FlowFixMe
      getImportRuleTag().insertRules(id + '-import', importRules);
    }
  };

  var removeRules = function removeRules(id) {
    var marker = markers[id];
    if (marker === undefined) return;

    /* create new empty text node and replace the current one */
    var newMarker = makeTextNode(id);
    el.replaceChild(newMarker, marker);
    markers[id] = newMarker;
    resetIdNames(names, id);

    if (extractImport && usedImportRuleTag) {
      // $FlowFixMe
      getImportRuleTag().removeRules(id + '-import');
    }
  };

  var css = function css() {
    var str = '';

    // eslint-disable-next-line guard-for-in
    for (var id in markers) {
      str += markers[id].data;
    }

    return str;
  };

  return {
    clone: function clone() {
      throw new StyledComponentsError(5);
    },

    css: css,
    getIds: getIdsFromMarkersFactory(markers),
    hasNameForId: hasNameForId(names),
    insertMarker: insertMarker,
    insertRules: insertRules,
    removeRules: removeRules,
    sealed: false,
    styleTag: el,
    toElement: wrapAsElement(css, names),
    toHTML: wrapAsHtmlTag(css, names)
  };
};

var makeServerTag = function makeServerTag(namesArg, markersArg) {
  var names = namesArg === undefined ? Object.create(null) : namesArg;
  var markers = markersArg === undefined ? Object.create(null) : markersArg;

  var insertMarker = function insertMarker(id) {
    var prev = markers[id];
    if (prev !== undefined) {
      return prev;
    }

    return markers[id] = [''];
  };

  var insertRules = function insertRules(id, cssRules, name) {
    var marker = insertMarker(id);
    marker[0] += cssRules.join(' ');
    addNameForId(names, id, name);
  };

  var removeRules = function removeRules(id) {
    var marker = markers[id];
    if (marker === undefined) return;
    marker[0] = '';
    resetIdNames(names, id);
  };

  var css = function css() {
    var str = '';
    // eslint-disable-next-line guard-for-in
    for (var id in markers) {
      var cssForId = markers[id][0];
      if (cssForId) {
        str += makeTextMarker(id) + cssForId;
      }
    }
    return str;
  };

  var clone = function clone() {
    var namesClone = cloneNames(names);
    var markersClone = Object.create(null);

    // eslint-disable-next-line guard-for-in
    for (var id in markers) {
      markersClone[id] = [markers[id][0]];
    }

    return makeServerTag(namesClone, markersClone);
  };

  var tag = {
    clone: clone,
    css: css,
    getIds: getIdsFromMarkersFactory(markers),
    hasNameForId: hasNameForId(names),
    insertMarker: insertMarker,
    insertRules: insertRules,
    removeRules: removeRules,
    sealed: false,
    styleTag: null,
    toElement: wrapAsElement(css, names),
    toHTML: wrapAsHtmlTag(css, names)
  };

  return tag;
};

var makeTag = function makeTag(target, tagEl, forceServer, insertBefore, getImportRuleTag) {
  if (IS_BROWSER && !forceServer) {
    var el = makeStyleTag(target, tagEl, insertBefore);

    if (DISABLE_SPEEDY) {
      return makeBrowserTag(el, getImportRuleTag);
    } else {
      return makeSpeedyTag(el, getImportRuleTag);
    }
  }

  return makeServerTag();
};

var rehydrate = function rehydrate(tag, els, extracted) {
  /* add all extracted components to the new tag */
  for (var i = 0, len = extracted.length; i < len; i += 1) {
    var _extracted$i = extracted[i],
        componentId = _extracted$i.componentId,
        cssFromDOM = _extracted$i.cssFromDOM;

    var cssRules = splitByRules(cssFromDOM);
    tag.insertRules(componentId, cssRules);
  }

  /* remove old HTMLStyleElements, since they have been rehydrated */
  for (var _i = 0, _len = els.length; _i < _len; _i += 1) {
    var el = els[_i];
    if (el.parentNode) {
      el.parentNode.removeChild(el);
    }
  }
};

// 

var SPLIT_REGEX = /\s+/;

/* determine the maximum number of components before tags are sharded */
var MAX_SIZE = void 0;
if (IS_BROWSER) {
  /* in speedy mode we can keep a lot more rules in a sheet before a slowdown can be expected */
  MAX_SIZE = DISABLE_SPEEDY ? 40 : 1000;
} else {
  /* for servers we do not need to shard at all */
  MAX_SIZE = -1;
}

var sheetRunningId = 0;
var master = void 0;

var StyleSheet = function () {

  /* a map from ids to tags */

  /* deferred rules for a given id */

  /* this is used for not reinjecting rules via hasNameForId() */

  /* when rules for an id are removed using remove() we have to ignore rehydratedNames for it */

  /* a list of tags belonging to this StyleSheet */

  /* a tag for import rules */

  /* current capacity until a new tag must be created */

  /* children (aka clones) of this StyleSheet inheriting all and future injections */

  function StyleSheet() {
    var _this = this;

    var target = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : IS_BROWSER ? document.head : null;
    var forceServer = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
    classCallCheck(this, StyleSheet);

    this.getImportRuleTag = function () {
      var importRuleTag = _this.importRuleTag;

      if (importRuleTag !== undefined) {
        return importRuleTag;
      }

      var firstTag = _this.tags[0];
      var insertBefore = true;

      return _this.importRuleTag = makeTag(_this.target, firstTag ? firstTag.styleTag : null, _this.forceServer, insertBefore);
    };

    sheetRunningId += 1;
    this.id = sheetRunningId;
    this.forceServer = forceServer;
    this.target = forceServer ? null : target;
    this.tagMap = {};
    this.deferred = {};
    this.rehydratedNames = {};
    this.ignoreRehydratedNames = {};
    this.tags = [];
    this.capacity = 1;
    this.clones = [];
  }

  /* rehydrate all SSR'd style tags */


  StyleSheet.prototype.rehydrate = function rehydrate$$1() {
    if (!IS_BROWSER || this.forceServer) return this;

    var els = [];
    var extracted = [];
    var isStreamed = false;

    /* retrieve all of our SSR style elements from the DOM */
    var nodes = document.querySelectorAll('style[' + SC_ATTR + '][' + SC_VERSION_ATTR + '="' + "4.1.3" + '"]');

    var nodesSize = nodes.length;

    /* abort rehydration if no previous style tags were found */
    if (!nodesSize) return this;

    for (var i = 0; i < nodesSize; i += 1) {
      var el = nodes[i];

      /* check if style tag is a streamed tag */
      if (!isStreamed) isStreamed = !!el.getAttribute(SC_STREAM_ATTR);

      /* retrieve all component names */
      var elNames = (el.getAttribute(SC_ATTR) || '').trim().split(SPLIT_REGEX);
      var elNamesSize = elNames.length;
      for (var j = 0, name; j < elNamesSize; j += 1) {
        name = elNames[j];
        /* add rehydrated name to sheet to avoid re-adding styles */
        this.rehydratedNames[name] = true;
      }

      /* extract all components and their CSS */
      extracted.push.apply(extracted, extractComps(el.textContent));

      /* store original HTMLStyleElement */
      els.push(el);
    }

    /* abort rehydration if nothing was extracted */
    var extractedSize = extracted.length;
    if (!extractedSize) return this;

    /* create a tag to be used for rehydration */
    var tag = this.makeTag(null);

    rehydrate(tag, els, extracted);

    /* reset capacity and adjust MAX_SIZE by the initial size of the rehydration */
    this.capacity = Math.max(1, MAX_SIZE - extractedSize);
    this.tags.push(tag);

    /* retrieve all component ids */
    for (var _j = 0; _j < extractedSize; _j += 1) {
      this.tagMap[extracted[_j].componentId] = tag;
    }

    return this;
  };

  /* retrieve a "master" instance of StyleSheet which is typically used when no other is available
   * The master StyleSheet is targeted by createGlobalStyle, keyframes, and components outside of any
    * StyleSheetManager's context */


  /* reset the internal "master" instance */
  StyleSheet.reset = function reset() {
    var forceServer = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;

    master = new StyleSheet(undefined, forceServer).rehydrate();
  };

  /* adds "children" to the StyleSheet that inherit all of the parents' rules
   * while their own rules do not affect the parent */


  StyleSheet.prototype.clone = function clone() {
    var sheet = new StyleSheet(this.target, this.forceServer);

    /* add to clone array */
    this.clones.push(sheet);

    /* clone all tags */
    sheet.tags = this.tags.map(function (tag) {
      var ids = tag.getIds();
      var newTag = tag.clone();

      /* reconstruct tagMap */
      for (var i = 0; i < ids.length; i += 1) {
        sheet.tagMap[ids[i]] = newTag;
      }

      return newTag;
    });

    /* clone other maps */
    sheet.rehydratedNames = _extends({}, this.rehydratedNames);
    sheet.deferred = _extends({}, this.deferred);

    return sheet;
  };

  /* force StyleSheet to create a new tag on the next injection */


  StyleSheet.prototype.sealAllTags = function sealAllTags() {
    this.capacity = 1;

    this.tags.forEach(function (tag) {
      // eslint-disable-next-line no-param-reassign
      tag.sealed = true;
    });
  };

  StyleSheet.prototype.makeTag = function makeTag$$1(tag) {
    var lastEl = tag ? tag.styleTag : null;
    var insertBefore = false;

    return makeTag(this.target, lastEl, this.forceServer, insertBefore, this.getImportRuleTag);
  };

  /* get a tag for a given componentId, assign the componentId to one, or shard */
  StyleSheet.prototype.getTagForId = function getTagForId(id) {
    /* simply return a tag, when the componentId was already assigned one */
    var prev = this.tagMap[id];
    if (prev !== undefined && !prev.sealed) {
      return prev;
    }

    var tag = this.tags[this.tags.length - 1];

    /* shard (create a new tag) if the tag is exhausted (See MAX_SIZE) */
    this.capacity -= 1;

    if (this.capacity === 0) {
      this.capacity = MAX_SIZE;
      tag = this.makeTag(tag);
      this.tags.push(tag);
    }

    return this.tagMap[id] = tag;
  };

  /* mainly for createGlobalStyle to check for its id */


  StyleSheet.prototype.hasId = function hasId(id) {
    return this.tagMap[id] !== undefined;
  };

  /* caching layer checking id+name to already have a corresponding tag and injected rules */


  StyleSheet.prototype.hasNameForId = function hasNameForId(id, name) {
    /* exception for rehydrated names which are checked separately */
    if (this.ignoreRehydratedNames[id] === undefined && this.rehydratedNames[name]) {
      return true;
    }

    var tag = this.tagMap[id];
    return tag !== undefined && tag.hasNameForId(id, name);
  };

  /* registers a componentId and registers it on its tag */


  StyleSheet.prototype.deferredInject = function deferredInject(id, cssRules) {
    /* don't inject when the id is already registered */
    if (this.tagMap[id] !== undefined) return;

    var clones = this.clones;

    for (var i = 0; i < clones.length; i += 1) {
      clones[i].deferredInject(id, cssRules);
    }

    this.getTagForId(id).insertMarker(id);
    this.deferred[id] = cssRules;
  };

  /* injects rules for a given id with a name that will need to be cached */


  StyleSheet.prototype.inject = function inject(id, cssRules, name) {
    var clones = this.clones;


    for (var i = 0; i < clones.length; i += 1) {
      clones[i].inject(id, cssRules, name);
    }

    var tag = this.getTagForId(id);

    /* add deferred rules for component */
    if (this.deferred[id] !== undefined) {
      // Combine passed cssRules with previously deferred CSS rules
      // NOTE: We cannot mutate the deferred array itself as all clones
      // do the same (see clones[i].inject)
      var rules = this.deferred[id].concat(cssRules);
      tag.insertRules(id, rules, name);

      this.deferred[id] = undefined;
    } else {
      tag.insertRules(id, cssRules, name);
    }
  };

  /* removes all rules for a given id, which doesn't remove its marker but resets it */


  StyleSheet.prototype.remove = function remove(id) {
    var tag = this.tagMap[id];
    if (tag === undefined) return;

    var clones = this.clones;

    for (var i = 0; i < clones.length; i += 1) {
      clones[i].remove(id);
    }

    /* remove all rules from the tag */
    tag.removeRules(id);

    /* ignore possible rehydrated names */
    this.ignoreRehydratedNames[id] = true;

    /* delete possible deferred rules */
    this.deferred[id] = undefined;
  };

  StyleSheet.prototype.toHTML = function toHTML() {
    return this.tags.map(function (tag) {
      return tag.toHTML();
    }).join('');
  };

  StyleSheet.prototype.toReactElements = function toReactElements() {
    var id = this.id;


    return this.tags.map(function (tag, i) {
      var key = 'sc-' + id + '-' + i;
      return Object(react__WEBPACK_IMPORTED_MODULE_2__["cloneElement"])(tag.toElement(), { key: key });
    });
  };

  createClass(StyleSheet, null, [{
    key: 'master',
    get: function get$$1() {
      return master || (master = new StyleSheet().rehydrate());
    }

    /* NOTE: This is just for backwards-compatibility with jest-styled-components */

  }, {
    key: 'instance',
    get: function get$$1() {
      return StyleSheet.master;
    }
  }]);
  return StyleSheet;
}();

// 

var Keyframes = function () {
  function Keyframes(name, rules) {
    var _this = this;

    classCallCheck(this, Keyframes);

    this.inject = function (styleSheet) {
      if (!styleSheet.hasNameForId(_this.id, _this.name)) {
        styleSheet.inject(_this.id, _this.rules, _this.name);
      }
    };

    this.toString = function () {
      throw new StyledComponentsError(12, String(_this.name));
    };

    this.name = name;
    this.rules = rules;

    this.id = 'sc-keyframes-' + name;
  }

  Keyframes.prototype.getName = function getName() {
    return this.name;
  };

  return Keyframes;
}();

// 

/**
 * inlined version of
 * https://github.com/facebook/fbjs/blob/master/packages/fbjs/src/core/hyphenateStyleName.js
 */

var uppercasePattern = /([A-Z])/g;
var msPattern = /^ms-/;

/**
 * Hyphenates a camelcased CSS property name, for example:
 *
 *   > hyphenateStyleName('backgroundColor')
 *   < "background-color"
 *   > hyphenateStyleName('MozTransition')
 *   < "-moz-transition"
 *   > hyphenateStyleName('msTransition')
 *   < "-ms-transition"
 *
 * As Modernizr suggests (http://modernizr.com/docs/#prefixed), an `ms` prefix
 * is converted to `-ms-`.
 *
 * @param {string} string
 * @return {string}
 */
function hyphenateStyleName(string) {
  return string.replace(uppercasePattern, '-$1').toLowerCase().replace(msPattern, '-ms-');
}

// 

// Taken from https://github.com/facebook/react/blob/b87aabdfe1b7461e7331abb3601d9e6bb27544bc/packages/react-dom/src/shared/dangerousStyleValue.js
function addUnitIfNeeded(name, value) {
  // https://github.com/amilajack/eslint-plugin-flowtype-errors/issues/133
  // $FlowFixMe
  if (value == null || typeof value === 'boolean' || value === '') {
    return '';
  }

  if (typeof value === 'number' && value !== 0 && !(name in _emotion_unitless__WEBPACK_IMPORTED_MODULE_3__["default"])) {
    return value + 'px'; // Presumes implicit 'px' suffix for unitless numbers
  }

  return String(value).trim();
}

// 

/**
 * It's falsish not falsy because 0 is allowed.
 */
var isFalsish = function isFalsish(chunk) {
  return chunk === undefined || chunk === null || chunk === false || chunk === '';
};

var objToCss = function objToCss(obj, prevKey) {
  var css = Object.keys(obj).filter(function (key) {
    return !isFalsish(obj[key]);
  }).map(function (key) {
    if (isPlainObject(obj[key])) return objToCss(obj[key], key);
    return hyphenateStyleName(key) + ': ' + addUnitIfNeeded(key, obj[key]) + ';';
  }).join(' ');
  return prevKey ? prevKey + ' {\n  ' + css + '\n}' : css;
};

function flatten(chunk, executionContext, styleSheet) {
  if (Array.isArray(chunk)) {
    var ruleSet = [];

    for (var i = 0, len = chunk.length, result; i < len; i += 1) {
      result = flatten(chunk[i], executionContext, styleSheet);

      if (result === null) continue;else if (Array.isArray(result)) ruleSet.push.apply(ruleSet, result);else ruleSet.push(result);
    }

    return ruleSet;
  }

  if (isFalsish(chunk)) {
    return null;
  }

  /* Handle other components */
  if (isStyledComponent(chunk)) {
    return '.' + chunk.styledComponentId;
  }

  /* Either execute or defer the function */
  if (isFunction(chunk)) {
    if (executionContext) {
      var shouldThrow = false;

      try {
        // eslint-disable-next-line new-cap
        if (Object(react_is__WEBPACK_IMPORTED_MODULE_4__["isElement"])(new chunk(executionContext))) {
          shouldThrow = true;
        }
      } catch (e) {
        /* */
      }

      if (shouldThrow) {
        throw new StyledComponentsError(13, getComponentName(chunk));
      }

      return flatten(chunk(executionContext), executionContext, styleSheet);
    } else return chunk;
  }

  if (chunk instanceof Keyframes) {
    if (styleSheet) {
      chunk.inject(styleSheet);
      return chunk.getName();
    } else return chunk;
  }

  /* Handle objects */
  return isPlainObject(chunk) ? objToCss(chunk) : chunk.toString();
}

// 

function css(styles) {
  for (var _len = arguments.length, interpolations = Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
    interpolations[_key - 1] = arguments[_key];
  }

  if (isFunction(styles) || isPlainObject(styles)) {
    // $FlowFixMe
    return flatten(interleave(EMPTY_ARRAY, [styles].concat(interpolations)));
  }

  // $FlowFixMe
  return flatten(interleave(styles, interpolations));
}

// 

function constructWithOptions(componentConstructor, tag) {
  var options = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : EMPTY_OBJECT;

  if (!Object(react_is__WEBPACK_IMPORTED_MODULE_4__["isValidElementType"])(tag)) {
    throw new StyledComponentsError(1, String(tag));
  }

  /* This is callable directly as a template function */
  // $FlowFixMe: Not typed to avoid destructuring arguments
  var templateFunction = function templateFunction() {
    return componentConstructor(tag, options, css.apply(undefined, arguments));
  };

  /* If config methods are called, wrap up a new template function and merge options */
  templateFunction.withConfig = function (config) {
    return constructWithOptions(componentConstructor, tag, _extends({}, options, config));
  };

  /* Modify/inject new props at runtime */
  templateFunction.attrs = function (attrs) {
    return constructWithOptions(componentConstructor, tag, _extends({}, options, {
      attrs: Array.prototype.concat(options.attrs, attrs).filter(Boolean)
    }));
  };

  return templateFunction;
}

// 
// Source: https://github.com/garycourt/murmurhash-js/blob/master/murmurhash2_gc.js
function murmurhash(c) {
  for (var e = c.length | 0, a = e | 0, d = 0, b; e >= 4;) {
    b = c.charCodeAt(d) & 255 | (c.charCodeAt(++d) & 255) << 8 | (c.charCodeAt(++d) & 255) << 16 | (c.charCodeAt(++d) & 255) << 24, b = 1540483477 * (b & 65535) + ((1540483477 * (b >>> 16) & 65535) << 16), b ^= b >>> 24, b = 1540483477 * (b & 65535) + ((1540483477 * (b >>> 16) & 65535) << 16), a = 1540483477 * (a & 65535) + ((1540483477 * (a >>> 16) & 65535) << 16) ^ b, e -= 4, ++d;
  }
  switch (e) {
    case 3:
      a ^= (c.charCodeAt(d + 2) & 255) << 16;
    case 2:
      a ^= (c.charCodeAt(d + 1) & 255) << 8;
    case 1:
      a ^= c.charCodeAt(d) & 255, a = 1540483477 * (a & 65535) + ((1540483477 * (a >>> 16) & 65535) << 16);
  }
  a ^= a >>> 13;
  a = 1540483477 * (a & 65535) + ((1540483477 * (a >>> 16) & 65535) << 16);
  return (a ^ a >>> 15) >>> 0;
}

// 
/* eslint-disable no-bitwise */

/* This is the "capacity" of our alphabet i.e. 2x26 for all letters plus their capitalised
 * counterparts */
var charsLength = 52;

/* start at 75 for 'a' until 'z' (25) and then start at 65 for capitalised letters */
var getAlphabeticChar = function getAlphabeticChar(code) {
  return String.fromCharCode(code + (code > 25 ? 39 : 97));
};

/* input a number, usually a hash and convert it to base-52 */
function generateAlphabeticName(code) {
  var name = '';
  var x = void 0;

  /* get a char and divide by alphabet-length */
  for (x = code; x > charsLength; x = Math.floor(x / charsLength)) {
    name = getAlphabeticChar(x % charsLength) + name;
  }

  return getAlphabeticChar(x % charsLength) + name;
}

// 

function hasFunctionObjectKey(obj) {
  // eslint-disable-next-line guard-for-in, no-restricted-syntax
  for (var key in obj) {
    if (isFunction(obj[key])) {
      return true;
    }
  }

  return false;
}

function isStaticRules(rules, attrs) {
  for (var i = 0; i < rules.length; i += 1) {
    var rule = rules[i];

    // recursive case
    if (Array.isArray(rule) && !isStaticRules(rule, attrs)) {
      return false;
    } else if (isFunction(rule) && !isStyledComponent(rule)) {
      // functions are allowed to be static if they're just being
      // used to get the classname of a nested styled component
      return false;
    }
  }

  if (attrs.some(function (x) {
    return isFunction(x) || hasFunctionObjectKey(x);
  })) return false;

  return true;
}

// 

var isHMREnabled = "development" !== 'production' && typeof module !== 'undefined' && module.hot;

/* combines hashStr (murmurhash) and nameGenerator for convenience */
var hasher = function hasher(str) {
  return generateAlphabeticName(murmurhash(str));
};

/*
 ComponentStyle is all the CSS-specific stuff, not
 the React-specific stuff.
 */

var ComponentStyle = function () {
  function ComponentStyle(rules, attrs, componentId) {
    classCallCheck(this, ComponentStyle);

    this.rules = rules;
    this.isStatic = !isHMREnabled && isStaticRules(rules, attrs);
    this.componentId = componentId;

    if (!StyleSheet.master.hasId(componentId)) {
      StyleSheet.master.deferredInject(componentId, []);
    }
  }

  /*
     * Flattens a rule set into valid CSS
     * Hashes it, wraps the whole chunk in a .hash1234 {}
     * Returns the hash to be injected on render()
     * */


  ComponentStyle.prototype.generateAndInjectStyles = function generateAndInjectStyles(executionContext, styleSheet) {
    var isStatic = this.isStatic,
        componentId = this.componentId,
        lastClassName = this.lastClassName;

    if (IS_BROWSER && isStatic && typeof lastClassName === 'string' && styleSheet.hasNameForId(componentId, lastClassName)) {
      return lastClassName;
    }

    var flatCSS = flatten(this.rules, executionContext, styleSheet);
    var name = hasher(this.componentId + flatCSS.join(''));
    if (!styleSheet.hasNameForId(componentId, name)) {
      styleSheet.inject(this.componentId, stringifyRules(flatCSS, '.' + name, undefined, componentId), name);
    }

    this.lastClassName = name;
    return name;
  };

  ComponentStyle.generateName = function generateName(str) {
    return hasher(str);
  };

  return ComponentStyle;
}();

// 

var LIMIT = 200;

var createWarnTooManyClasses = (function (displayName) {
  var generatedClasses = {};
  var warningSeen = false;

  return function (className) {
    if (!warningSeen) {
      generatedClasses[className] = true;
      if (Object.keys(generatedClasses).length >= LIMIT) {
        // Unable to find latestRule in test environment.
        /* eslint-disable no-console, prefer-template */
        console.warn('Over ' + LIMIT + ' classes were generated for component ' + displayName + '. \n' + 'Consider using the attrs method, together with a style object for frequently changed styles.\n' + 'Example:\n' + '  const Component = styled.div.attrs({\n' + '    style: ({ background }) => ({\n' + '      background,\n' + '    }),\n' + '  })`width: 100%;`\n\n' + '  <Component />');
        warningSeen = true;
        generatedClasses = {};
      }
    }
  };
});

// 

var determineTheme = (function (props, fallbackTheme) {
  var defaultProps = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : EMPTY_OBJECT;

  // Props should take precedence over ThemeProvider, which should take precedence over
  // defaultProps, but React automatically puts defaultProps on props.

  /* eslint-disable react/prop-types, flowtype-errors/show-errors */
  var isDefaultTheme = defaultProps ? props.theme === defaultProps.theme : false;
  var theme = props.theme && !isDefaultTheme ? props.theme : fallbackTheme || defaultProps.theme;
  /* eslint-enable */

  return theme;
});

// 
var escapeRegex = /[[\].#*$><+~=|^:(),"'`-]+/g;
var dashesAtEnds = /(^-|-$)/g;

/**
 * TODO: Explore using CSS.escape when it becomes more available
 * in evergreen browsers.
 */
function escape(str) {
  return str
  // Replace all possible CSS selectors
  .replace(escapeRegex, '-')

  // Remove extraneous hyphens at the start and end
  .replace(dashesAtEnds, '');
}

// 

function isTag(target) {
  return typeof target === 'string' && ( true ? target.charAt(0) === target.charAt(0).toLowerCase() : undefined);
}

// 

function generateDisplayName(target) {
  // $FlowFixMe
  return isTag(target) ? 'styled.' + target : 'Styled(' + getComponentName(target) + ')';
}

var _TYPE_STATICS;

var REACT_STATICS = {
  childContextTypes: true,
  contextTypes: true,
  defaultProps: true,
  displayName: true,
  getDerivedStateFromProps: true,
  propTypes: true,
  type: true
};

var KNOWN_STATICS = {
  name: true,
  length: true,
  prototype: true,
  caller: true,
  callee: true,
  arguments: true,
  arity: true
};

var TYPE_STATICS = (_TYPE_STATICS = {}, _TYPE_STATICS[react_is__WEBPACK_IMPORTED_MODULE_4__["ForwardRef"]] = {
  $$typeof: true,
  render: true
}, _TYPE_STATICS);

var defineProperty$1 = Object.defineProperty,
    getOwnPropertyNames = Object.getOwnPropertyNames,
    _Object$getOwnPropert = Object.getOwnPropertySymbols,
    getOwnPropertySymbols = _Object$getOwnPropert === undefined ? function () {
  return [];
} : _Object$getOwnPropert,
    getOwnPropertyDescriptor = Object.getOwnPropertyDescriptor,
    getPrototypeOf = Object.getPrototypeOf,
    objectPrototype = Object.prototype;
var arrayPrototype = Array.prototype;


function hoistNonReactStatics(targetComponent, sourceComponent, blacklist) {
  if (typeof sourceComponent !== 'string') {
    // don't hoist over string (html) components

    var inheritedComponent = getPrototypeOf(sourceComponent);

    if (inheritedComponent && inheritedComponent !== objectPrototype) {
      hoistNonReactStatics(targetComponent, inheritedComponent, blacklist);
    }

    var keys = arrayPrototype.concat(getOwnPropertyNames(sourceComponent),
    // $FlowFixMe
    getOwnPropertySymbols(sourceComponent));

    var targetStatics = TYPE_STATICS[targetComponent.$$typeof] || REACT_STATICS;

    var sourceStatics = TYPE_STATICS[sourceComponent.$$typeof] || REACT_STATICS;

    var i = keys.length;
    var descriptor = void 0;
    var key = void 0;

    // eslint-disable-next-line no-plusplus
    while (i--) {
      key = keys[i];

      if (
      // $FlowFixMe
      !KNOWN_STATICS[key] && !(blacklist && blacklist[key]) && !(sourceStatics && sourceStatics[key]) &&
      // $FlowFixMe
      !(targetStatics && targetStatics[key])) {
        descriptor = getOwnPropertyDescriptor(sourceComponent, key);

        if (descriptor) {
          try {
            // Avoid failures from read-only properties
            defineProperty$1(targetComponent, key, descriptor);
          } catch (e) {
            /* fail silently */
          }
        }
      }
    }

    return targetComponent;
  }

  return targetComponent;
}

// 
function isDerivedReactComponent(fn) {
  return !!(fn && fn.prototype && fn.prototype.isReactComponent);
}

// 
// Helper to call a given function, only once
var once = (function (cb) {
  var called = false;

  return function () {
    if (!called) {
      called = true;
      cb.apply(undefined, arguments);
    }
  };
});

// 

var ThemeContext = Object(react__WEBPACK_IMPORTED_MODULE_2__["createContext"])();

var ThemeConsumer = ThemeContext.Consumer;

/**
 * Provide a theme to an entire react component tree via context
 */

var ThemeProvider = function (_Component) {
  inherits(ThemeProvider, _Component);

  function ThemeProvider(props) {
    classCallCheck(this, ThemeProvider);

    var _this = possibleConstructorReturn(this, _Component.call(this, props));

    _this.getContext = Object(memoize_one__WEBPACK_IMPORTED_MODULE_5__["default"])(_this.getContext.bind(_this));
    _this.renderInner = _this.renderInner.bind(_this);
    return _this;
  }

  ThemeProvider.prototype.render = function render() {
    if (!this.props.children) return null;

    return react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(
      ThemeContext.Consumer,
      null,
      this.renderInner
    );
  };

  ThemeProvider.prototype.renderInner = function renderInner(outerTheme) {
    var context = this.getContext(this.props.theme, outerTheme);

    return react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(
      ThemeContext.Provider,
      { value: context },
      react__WEBPACK_IMPORTED_MODULE_2___default.a.Children.only(this.props.children)
    );
  };

  /**
   * Get the theme from the props, supporting both (outerTheme) => {}
   * as well as object notation
   */


  ThemeProvider.prototype.getTheme = function getTheme(theme, outerTheme) {
    if (isFunction(theme)) {
      var mergedTheme = theme(outerTheme);

      if ("development" !== 'production' && (mergedTheme === null || Array.isArray(mergedTheme) || (typeof mergedTheme === 'undefined' ? 'undefined' : _typeof(mergedTheme)) !== 'object')) {
        throw new StyledComponentsError(7);
      }

      return mergedTheme;
    }

    if (theme === null || Array.isArray(theme) || (typeof theme === 'undefined' ? 'undefined' : _typeof(theme)) !== 'object') {
      throw new StyledComponentsError(8);
    }

    return _extends({}, outerTheme, theme);
  };

  ThemeProvider.prototype.getContext = function getContext(theme, outerTheme) {
    return this.getTheme(theme, outerTheme);
  };

  return ThemeProvider;
}(react__WEBPACK_IMPORTED_MODULE_2__["Component"]);

// 

var ServerStyleSheet = function () {
  function ServerStyleSheet() {
    classCallCheck(this, ServerStyleSheet);

    /* The master sheet might be reset, so keep a reference here */
    this.masterSheet = StyleSheet.master;
    this.instance = this.masterSheet.clone();
    this.sealed = false;
  }

  /**
   * Mark the ServerStyleSheet as being fully emitted and manually GC it from the
   * StyleSheet singleton.
   */


  ServerStyleSheet.prototype.seal = function seal() {
    if (!this.sealed) {
      /* Remove sealed StyleSheets from the master sheet */
      var index = this.masterSheet.clones.indexOf(this.instance);
      this.masterSheet.clones.splice(index, 1);
      this.sealed = true;
    }
  };

  ServerStyleSheet.prototype.collectStyles = function collectStyles(children) {
    if (this.sealed) {
      throw new StyledComponentsError(2);
    }

    return react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(
      StyleSheetManager,
      { sheet: this.instance },
      children
    );
  };

  ServerStyleSheet.prototype.getStyleTags = function getStyleTags() {
    this.seal();
    return this.instance.toHTML();
  };

  ServerStyleSheet.prototype.getStyleElement = function getStyleElement() {
    this.seal();
    return this.instance.toReactElements();
  };

  ServerStyleSheet.prototype.interleaveWithNodeStream = function interleaveWithNodeStream(readableStream) {
    var _this = this;

    {
      throw new StyledComponentsError(3);
    }

    /* the tag index keeps track of which tags have already been emitted */
    var instance = this.instance;

    var instanceTagIndex = 0;

    var streamAttr = SC_STREAM_ATTR + '="true"';

    var transformer = new stream.Transform({
      transform: function appendStyleChunks(chunk, /* encoding */_, callback) {
        var tags = instance.tags;

        var html = '';

        /* retrieve html for each new style tag */
        for (; instanceTagIndex < tags.length; instanceTagIndex += 1) {
          var tag = tags[instanceTagIndex];
          html += tag.toHTML(streamAttr);
        }

        /* force our StyleSheets to emit entirely new tags */
        instance.sealAllTags();

        /* prepend style html to chunk */
        this.push(html + chunk);
        callback();
      }
    });

    readableStream.on('end', function () {
      return _this.seal();
    });
    readableStream.on('error', function (err) {
      _this.seal();

      // forward the error to the transform stream
      transformer.emit('error', err);
    });

    return readableStream.pipe(transformer);
  };

  return ServerStyleSheet;
}();

// 

var StyleSheetContext = Object(react__WEBPACK_IMPORTED_MODULE_2__["createContext"])();

var StyleSheetConsumer = StyleSheetContext.Consumer;

var StyleSheetManager = function (_Component) {
  inherits(StyleSheetManager, _Component);

  function StyleSheetManager(props) {
    classCallCheck(this, StyleSheetManager);

    var _this = possibleConstructorReturn(this, _Component.call(this, props));

    _this.getContext = Object(memoize_one__WEBPACK_IMPORTED_MODULE_5__["default"])(_this.getContext);
    return _this;
  }

  StyleSheetManager.prototype.getContext = function getContext(sheet, target) {
    if (sheet) {
      return sheet;
    } else if (target) {
      return new StyleSheet(target);
    } else {
      throw new StyledComponentsError(4);
    }
  };

  StyleSheetManager.prototype.render = function render() {
    var _props = this.props,
        children = _props.children,
        sheet = _props.sheet,
        target = _props.target;


    return react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(
      StyleSheetContext.Provider,
      { value: this.getContext(sheet, target) },
       true ? react__WEBPACK_IMPORTED_MODULE_2___default.a.Children.only(children) : undefined
    );
  };

  return StyleSheetManager;
}(react__WEBPACK_IMPORTED_MODULE_2__["Component"]);
 true ? StyleSheetManager.propTypes = {
  sheet: prop_types__WEBPACK_IMPORTED_MODULE_6___default.a.oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_6___default.a.instanceOf(StyleSheet), prop_types__WEBPACK_IMPORTED_MODULE_6___default.a.instanceOf(ServerStyleSheet)]),

  target: prop_types__WEBPACK_IMPORTED_MODULE_6___default.a.shape({
    appendChild: prop_types__WEBPACK_IMPORTED_MODULE_6___default.a.func.isRequired
  })
} : undefined;

// 

var didWarnAboutClassNameUsage = new Set();

var classNameUsageCheckInjector = (function (target) {
  var elementClassName = '';

  var targetCDM = target.componentDidMount;

  // eslint-disable-next-line no-param-reassign
  target.componentDidMount = function componentDidMount() {
    if (typeof targetCDM === 'function') {
      targetCDM.call(this);
    }

    var forwardTarget = this.props.forwardedComponent.target;

    if (target.props && target.props.suppressClassNameWarning || target.attrs && target.attrs.suppressClassNameWarning || didWarnAboutClassNameUsage.has(forwardTarget)) {
      return;
    }

    didWarnAboutClassNameUsage.add(forwardTarget);

    var classNames = elementClassName.replace(/ +/g, ' ').trim().split(' ');
    // eslint-disable-next-line react/no-find-dom-node
    var node = react_dom__WEBPACK_IMPORTED_MODULE_7___default.a.findDOMNode(this);
    var selector = classNames.map(function (s) {
      return '.' + s;
    }).join('');

    if (node && node.nodeType === 1 && !classNames.every(function (className) {
      return node.classList && node.classList.contains(className);
    }) && !node.querySelector(selector)) {
      console.warn('It looks like you\'ve wrapped styled() around your React component (' + getComponentName(forwardTarget) + '), but the className prop is not being passed down to a child. No styles will be rendered unless className is composed within your React component.');
    }
  };

  var prevRenderInner = target.renderInner;

  // eslint-disable-next-line no-param-reassign
  target.renderInner = function renderInner() {
    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    var element = prevRenderInner.apply(this, args);

    elementClassName = element.props.className;

    return element;
  };
});

// 

var identifiers = {};

/* We depend on components having unique IDs */
function generateId(_ComponentStyle, _displayName, parentComponentId) {
  var displayName = typeof _displayName !== 'string' ? 'sc' : escape(_displayName);

  /**
   * This ensures uniqueness if two components happen to share
   * the same displayName.
   */
  var nr = (identifiers[displayName] || 0) + 1;
  identifiers[displayName] = nr;

  var componentId = displayName + '-' + _ComponentStyle.generateName(displayName + nr);

  return parentComponentId ? parentComponentId + '-' + componentId : componentId;
}

// $FlowFixMe

var StyledComponent = function (_Component) {
  inherits(StyledComponent, _Component);

  function StyledComponent() {
    classCallCheck(this, StyledComponent);

    var _this = possibleConstructorReturn(this, _Component.call(this));

    _this.attrs = {};

    _this.renderOuter = _this.renderOuter.bind(_this);
    _this.renderInner = _this.renderInner.bind(_this);

    if (true) {
      _this.warnInnerRef = once(function (displayName) {
        return (
          // eslint-disable-next-line no-console
          console.warn('The "innerRef" API has been removed in styled-components v4 in favor of React 16 ref forwarding, use "ref" instead like a typical component. "innerRef" was detected on component "' + displayName + '".')
        );
      });

      _this.warnAttrsFnObjectKeyDeprecated = once(function (key, displayName) {
        return (
          // eslint-disable-next-line no-console
          console.warn('Functions as object-form attrs({}) keys are now deprecated and will be removed in a future version of styled-components. Switch to the new attrs(props => ({})) syntax instead for easier and more powerful composition. The attrs key in question is "' + key + '" on component "' + displayName + '".')
        );
      });

      _this.warnNonStyledComponentAttrsObjectKey = once(function (key, displayName) {
        return (
          // eslint-disable-next-line no-console
          console.warn('It looks like you\'ve used a non styled-component as the value for the "' + key + '" prop in an object-form attrs constructor of "' + displayName + '".\n' + 'You should use the new function-form attrs constructor which avoids this issue: attrs(props => ({ yourStuff }))\n' + "To continue using the deprecated object syntax, you'll need to wrap your component prop in a function to make it available inside the styled component (you'll still get the deprecation warning though.)\n" + ('For example, { ' + key + ': () => InnerComponent } instead of { ' + key + ': InnerComponent }'))
        );
      });
    }

    if ("development" !== 'production' && IS_BROWSER) {
      classNameUsageCheckInjector(_this);
    }
    return _this;
  }

  StyledComponent.prototype.render = function render() {
    return react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(
      StyleSheetConsumer,
      null,
      this.renderOuter
    );
  };

  StyledComponent.prototype.renderOuter = function renderOuter() {
    var styleSheet = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : StyleSheet.master;

    this.styleSheet = styleSheet;

    // No need to subscribe a static component to theme changes, it won't change anything
    if (this.props.forwardedComponent.componentStyle.isStatic) return this.renderInner();

    return react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(
      ThemeConsumer,
      null,
      this.renderInner
    );
  };

  StyledComponent.prototype.renderInner = function renderInner(theme) {
    var _props$forwardedCompo = this.props.forwardedComponent,
        componentStyle = _props$forwardedCompo.componentStyle,
        defaultProps = _props$forwardedCompo.defaultProps,
        displayName = _props$forwardedCompo.displayName,
        foldedComponentIds = _props$forwardedCompo.foldedComponentIds,
        styledComponentId = _props$forwardedCompo.styledComponentId,
        target = _props$forwardedCompo.target;


    var generatedClassName = void 0;
    if (componentStyle.isStatic) {
      generatedClassName = this.generateAndInjectStyles(EMPTY_OBJECT, this.props);
    } else if (theme !== undefined) {
      generatedClassName = this.generateAndInjectStyles(determineTheme(this.props, theme, defaultProps), this.props);
    } else {
      generatedClassName = this.generateAndInjectStyles(this.props.theme || EMPTY_OBJECT, this.props);
    }

    var elementToBeCreated = this.props.as || this.attrs.as || target;
    var isTargetTag = isTag(elementToBeCreated);

    var propsForElement = {};
    var computedProps = _extends({}, this.attrs, this.props);

    var key = void 0;
    // eslint-disable-next-line guard-for-in
    for (key in computedProps) {
      if ("development" !== 'production' && key === 'innerRef' && isTargetTag) {
        this.warnInnerRef(displayName);
      }

      if (key === 'forwardedComponent' || key === 'as') continue;else if (key === 'forwardedRef') propsForElement.ref = computedProps[key];else if (!isTargetTag || Object(_emotion_is_prop_valid__WEBPACK_IMPORTED_MODULE_8__["default"])(key)) {
        // Don't pass through non HTML tags through to HTML elements
        propsForElement[key] = computedProps[key];
      }
    }

    if (this.props.style && this.attrs.style) {
      propsForElement.style = _extends({}, this.attrs.style, this.props.style);
    }

    propsForElement.className = Array.prototype.concat(foldedComponentIds, this.props.className, styledComponentId, this.attrs.className, generatedClassName).filter(Boolean).join(' ');

    return Object(react__WEBPACK_IMPORTED_MODULE_2__["createElement"])(elementToBeCreated, propsForElement);
  };

  StyledComponent.prototype.buildExecutionContext = function buildExecutionContext(theme, props, attrs) {
    var _this2 = this;

    var context = _extends({}, props, { theme: theme });

    if (!attrs.length) return context;

    this.attrs = {};

    attrs.forEach(function (attrDef) {
      var resolvedAttrDef = attrDef;
      var attrDefWasFn = false;
      var attr = void 0;
      var key = void 0;

      if (isFunction(resolvedAttrDef)) {
        // $FlowFixMe
        resolvedAttrDef = resolvedAttrDef(context);
        attrDefWasFn = true;
      }

      /* eslint-disable guard-for-in */
      // $FlowFixMe
      for (key in resolvedAttrDef) {
        attr = resolvedAttrDef[key];

        if (!attrDefWasFn) {
          if (isFunction(attr) && !isDerivedReactComponent(attr) && !isStyledComponent(attr)) {
            if (true) {
              _this2.warnAttrsFnObjectKeyDeprecated(key, props.forwardedComponent.displayName);
            }

            attr = attr(context);

            if ("development" !== 'production' && react__WEBPACK_IMPORTED_MODULE_2___default.a.isValidElement(attr)) {
              _this2.warnNonStyledComponentAttrsObjectKey(key, props.forwardedComponent.displayName);
            }
          }
        }

        _this2.attrs[key] = attr;
        context[key] = attr;
      }
      /* eslint-enable */
    });

    return context;
  };

  StyledComponent.prototype.generateAndInjectStyles = function generateAndInjectStyles(theme, props) {
    var _props$forwardedCompo2 = props.forwardedComponent,
        attrs = _props$forwardedCompo2.attrs,
        componentStyle = _props$forwardedCompo2.componentStyle,
        warnTooManyClasses = _props$forwardedCompo2.warnTooManyClasses;

    // statically styled-components don't need to build an execution context object,
    // and shouldn't be increasing the number of class names

    if (componentStyle.isStatic && !attrs.length) {
      return componentStyle.generateAndInjectStyles(EMPTY_OBJECT, this.styleSheet);
    }

    var className = componentStyle.generateAndInjectStyles(this.buildExecutionContext(theme, props, attrs), this.styleSheet);

    if ("development" !== 'production' && warnTooManyClasses) warnTooManyClasses(className);

    return className;
  };

  return StyledComponent;
}(react__WEBPACK_IMPORTED_MODULE_2__["Component"]);

function createStyledComponent(target, options, rules) {
  var isTargetStyledComp = isStyledComponent(target);
  var isClass = !isTag(target);

  var _options$displayName = options.displayName,
      displayName = _options$displayName === undefined ? generateDisplayName(target) : _options$displayName,
      _options$componentId = options.componentId,
      componentId = _options$componentId === undefined ? generateId(ComponentStyle, options.displayName, options.parentComponentId) : _options$componentId,
      _options$ParentCompon = options.ParentComponent,
      ParentComponent = _options$ParentCompon === undefined ? StyledComponent : _options$ParentCompon,
      _options$attrs = options.attrs,
      attrs = _options$attrs === undefined ? EMPTY_ARRAY : _options$attrs;


  var styledComponentId = options.displayName && options.componentId ? escape(options.displayName) + '-' + options.componentId : options.componentId || componentId;

  // fold the underlying StyledComponent attrs up (implicit extend)
  var finalAttrs =
  // $FlowFixMe
  isTargetStyledComp && target.attrs ? Array.prototype.concat(target.attrs, attrs).filter(Boolean) : attrs;

  var componentStyle = new ComponentStyle(isTargetStyledComp ? // fold the underlying StyledComponent rules up (implicit extend)
  // $FlowFixMe
  target.componentStyle.rules.concat(rules) : rules, finalAttrs, styledComponentId);

  /**
   * forwardRef creates a new interim component, which we'll take advantage of
   * instead of extending ParentComponent to create _another_ interim class
   */
  var WrappedStyledComponent = react__WEBPACK_IMPORTED_MODULE_2___default.a.forwardRef(function (props, ref) {
    return react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(ParentComponent, _extends({}, props, { forwardedComponent: WrappedStyledComponent, forwardedRef: ref }));
  });

  // $FlowFixMe
  WrappedStyledComponent.attrs = finalAttrs;
  // $FlowFixMe
  WrappedStyledComponent.componentStyle = componentStyle;
  WrappedStyledComponent.displayName = displayName;

  // $FlowFixMe
  WrappedStyledComponent.foldedComponentIds = isTargetStyledComp ? // $FlowFixMe
  Array.prototype.concat(target.foldedComponentIds, target.styledComponentId) : EMPTY_ARRAY;

  // $FlowFixMe
  WrappedStyledComponent.styledComponentId = styledComponentId;

  // fold the underlying StyledComponent target up since we folded the styles
  // $FlowFixMe
  WrappedStyledComponent.target = isTargetStyledComp ? target.target : target;

  // $FlowFixMe
  WrappedStyledComponent.withComponent = function withComponent(tag) {
    var previousComponentId = options.componentId,
        optionsToCopy = objectWithoutProperties(options, ['componentId']);


    var newComponentId = previousComponentId && previousComponentId + '-' + (isTag(tag) ? tag : escape(getComponentName(tag)));

    var newOptions = _extends({}, optionsToCopy, {
      attrs: finalAttrs,
      componentId: newComponentId,
      ParentComponent: ParentComponent
    });

    return createStyledComponent(tag, newOptions, rules);
  };

  if (true) {
    // $FlowFixMe
    WrappedStyledComponent.warnTooManyClasses = createWarnTooManyClasses(displayName);
  }

  // $FlowFixMe
  WrappedStyledComponent.toString = function () {
    return '.' + WrappedStyledComponent.styledComponentId;
  };

  if (isClass) {
    hoistNonReactStatics(WrappedStyledComponent, target, {
      // all SC-specific things should not be hoisted
      attrs: true,
      componentStyle: true,
      displayName: true,
      foldedComponentIds: true,
      styledComponentId: true,
      target: true,
      withComponent: true
    });
  }

  return WrappedStyledComponent;
}

// 
// Thanks to ReactDOMFactories for this handy list!

var domElements = ['a', 'abbr', 'address', 'area', 'article', 'aside', 'audio', 'b', 'base', 'bdi', 'bdo', 'big', 'blockquote', 'body', 'br', 'button', 'canvas', 'caption', 'cite', 'code', 'col', 'colgroup', 'data', 'datalist', 'dd', 'del', 'details', 'dfn', 'dialog', 'div', 'dl', 'dt', 'em', 'embed', 'fieldset', 'figcaption', 'figure', 'footer', 'form', 'h1', 'h2', 'h3', 'h4', 'h5', 'h6', 'head', 'header', 'hgroup', 'hr', 'html', 'i', 'iframe', 'img', 'input', 'ins', 'kbd', 'keygen', 'label', 'legend', 'li', 'link', 'main', 'map', 'mark', 'marquee', 'menu', 'menuitem', 'meta', 'meter', 'nav', 'noscript', 'object', 'ol', 'optgroup', 'option', 'output', 'p', 'param', 'picture', 'pre', 'progress', 'q', 'rp', 'rt', 'ruby', 's', 'samp', 'script', 'section', 'select', 'small', 'source', 'span', 'strong', 'style', 'sub', 'summary', 'sup', 'table', 'tbody', 'td', 'textarea', 'tfoot', 'th', 'thead', 'time', 'title', 'tr', 'track', 'u', 'ul', 'var', 'video', 'wbr',

// SVG
'circle', 'clipPath', 'defs', 'ellipse', 'foreignObject', 'g', 'image', 'line', 'linearGradient', 'mask', 'path', 'pattern', 'polygon', 'polyline', 'radialGradient', 'rect', 'stop', 'svg', 'text', 'tspan'];

// 

var styled = function styled(tag) {
  return constructWithOptions(createStyledComponent, tag);
};

// Shorthands for all valid HTML Elements
domElements.forEach(function (domElement) {
  styled[domElement] = styled(domElement);
});

// 

var GlobalStyle = function () {
  function GlobalStyle(rules, componentId) {
    classCallCheck(this, GlobalStyle);

    this.rules = rules;
    this.componentId = componentId;
    this.isStatic = isStaticRules(rules, EMPTY_ARRAY);

    if (!StyleSheet.master.hasId(componentId)) {
      StyleSheet.master.deferredInject(componentId, []);
    }
  }

  GlobalStyle.prototype.createStyles = function createStyles(executionContext, styleSheet) {
    var flatCSS = flatten(this.rules, executionContext, styleSheet);
    var css = stringifyRules(flatCSS, '');

    styleSheet.inject(this.componentId, css);
  };

  GlobalStyle.prototype.removeStyles = function removeStyles(styleSheet) {
    var componentId = this.componentId;

    if (styleSheet.hasId(componentId)) {
      styleSheet.remove(componentId);
    }
  };

  // TODO: overwrite in-place instead of remove+create?


  GlobalStyle.prototype.renderStyles = function renderStyles(executionContext, styleSheet) {
    this.removeStyles(styleSheet);
    this.createStyles(executionContext, styleSheet);
  };

  return GlobalStyle;
}();

// 

// place our cache into shared context so it'll persist between HMRs
if (IS_BROWSER) {
  window.scCGSHMRCache = {};
}

function createGlobalStyle(strings) {
  for (var _len = arguments.length, interpolations = Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
    interpolations[_key - 1] = arguments[_key];
  }

  var rules = css.apply(undefined, [strings].concat(interpolations));
  var id = 'sc-global-' + murmurhash(JSON.stringify(rules));
  var style = new GlobalStyle(rules, id);

  var GlobalStyleComponent = function (_React$Component) {
    inherits(GlobalStyleComponent, _React$Component);

    function GlobalStyleComponent() {
      classCallCheck(this, GlobalStyleComponent);

      var _this = possibleConstructorReturn(this, _React$Component.call(this));

      var _this$constructor = _this.constructor,
          globalStyle = _this$constructor.globalStyle,
          styledComponentId = _this$constructor.styledComponentId;


      if (IS_BROWSER) {
        window.scCGSHMRCache[styledComponentId] = (window.scCGSHMRCache[styledComponentId] || 0) + 1;
      }

      /**
       * This fixes HMR compatibility. Don't ask me why, but this combination of
       * caching the closure variables via statics and then persisting the statics in
       * state works across HMR where no other combination did. ¯\_(ツ)_/¯
       */
      _this.state = {
        globalStyle: globalStyle,
        styledComponentId: styledComponentId
      };
      return _this;
    }

    GlobalStyleComponent.prototype.componentWillUnmount = function componentWillUnmount() {
      if (window.scCGSHMRCache[this.state.styledComponentId]) {
        window.scCGSHMRCache[this.state.styledComponentId] -= 1;
      }
      /**
       * Depending on the order "render" is called this can cause the styles to be lost
       * until the next render pass of the remaining instance, which may
       * not be immediate.
       */
      if (window.scCGSHMRCache[this.state.styledComponentId] === 0) {
        this.state.globalStyle.removeStyles(this.styleSheet);
      }
    };

    GlobalStyleComponent.prototype.render = function render() {
      var _this2 = this;

      if ("development" !== 'production' && react__WEBPACK_IMPORTED_MODULE_2___default.a.Children.count(this.props.children)) {
        // eslint-disable-next-line no-console
        console.warn('The global style component ' + this.state.styledComponentId + ' was given child JSX. createGlobalStyle does not render children.');
      }

      return react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(
        StyleSheetConsumer,
        null,
        function (styleSheet) {
          _this2.styleSheet = styleSheet || StyleSheet.master;

          var globalStyle = _this2.state.globalStyle;


          if (globalStyle.isStatic) {
            globalStyle.renderStyles(STATIC_EXECUTION_CONTEXT, _this2.styleSheet);

            return null;
          } else {
            return react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(
              ThemeConsumer,
              null,
              function (theme) {
                // $FlowFixMe
                var defaultProps = _this2.constructor.defaultProps;


                var context = _extends({}, _this2.props);

                if (typeof theme !== 'undefined') {
                  context.theme = determineTheme(_this2.props, theme, defaultProps);
                }

                globalStyle.renderStyles(context, _this2.styleSheet);

                return null;
              }
            );
          }
        }
      );
    };

    return GlobalStyleComponent;
  }(react__WEBPACK_IMPORTED_MODULE_2___default.a.Component);

  GlobalStyleComponent.globalStyle = style;
  GlobalStyleComponent.styledComponentId = id;


  return GlobalStyleComponent;
}

// 

var replaceWhitespace = function replaceWhitespace(str) {
  return str.replace(/\s|\\n/g, '');
};

function keyframes(strings) {
  /* Warning if you've used keyframes on React Native */
  if ("development" !== 'production' && typeof navigator !== 'undefined' && navigator.product === 'ReactNative') {
    console.warn('`keyframes` cannot be used on ReactNative, only on the web. To do animation in ReactNative please use Animated.');
  }

  for (var _len = arguments.length, interpolations = Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
    interpolations[_key - 1] = arguments[_key];
  }

  var rules = css.apply(undefined, [strings].concat(interpolations));

  var name = generateAlphabeticName(murmurhash(replaceWhitespace(JSON.stringify(rules))));

  return new Keyframes(name, stringifyRules(rules, name, '@keyframes'));
}

// 

var withTheme = (function (Component$$1) {
  var WithTheme = react__WEBPACK_IMPORTED_MODULE_2___default.a.forwardRef(function (props, ref) {
    return react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(
      ThemeConsumer,
      null,
      function (theme) {
        // $FlowFixMe
        var defaultProps = Component$$1.defaultProps;

        var themeProp = determineTheme(props, theme, defaultProps);

        if ("development" !== 'production' && themeProp === undefined) {
          // eslint-disable-next-line no-console
          console.warn('[withTheme] You are not using a ThemeProvider nor passing a theme prop or a theme in defaultProps in component class "' + getComponentName(Component$$1) + '"');
        }

        return react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(Component$$1, _extends({}, props, { theme: themeProp, ref: ref }));
      }
    );
  });

  hoistNonReactStatics(WithTheme, Component$$1);

  WithTheme.displayName = 'WithTheme(' + getComponentName(Component$$1) + ')';

  return WithTheme;
});

// 

/* eslint-disable */
var __DO_NOT_USE_OR_YOU_WILL_BE_HAUNTED_BY_SPOOKY_GHOSTS = {
  StyleSheet: StyleSheet
};

// 

/* Warning if you've imported this file on React Native */
if ("development" !== 'production' && typeof navigator !== 'undefined' && navigator.product === 'ReactNative') {
  // eslint-disable-next-line no-console
  console.warn("It looks like you've imported 'styled-components' on React Native.\n" + "Perhaps you're looking to import 'styled-components/native'?\n" + 'Read more about this at https://www.styled-components.com/docs/basics#react-native');
}

/* Warning if there are several instances of styled-components */
if ("development" !== 'production' && "development" !== 'test' && typeof window !== 'undefined' && typeof navigator !== 'undefined' && typeof navigator.userAgent === 'string' && navigator.userAgent.indexOf('Node.js') === -1 && navigator.userAgent.indexOf('jsdom') === -1) {
  window['__styled-components-init__'] = window['__styled-components-init__'] || 0;

  if (window['__styled-components-init__'] === 1) {
    // eslint-disable-next-line no-console
    console.warn("It looks like there are several instances of 'styled-components' initialized in this application. " + 'This may cause dynamic styles not rendering properly, errors happening during rehydration process ' + 'and makes your application bigger without a good reason.\n\n' + 'See https://s-c.sh/2BAXzed for more info.');
  }

  window['__styled-components-init__'] += 1;
}

//

/* harmony default export */ __webpack_exports__["default"] = (styled);

//# sourceMappingURL=styled-components.browser.esm.js.map

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../process/browser.js */ "./node_modules/process/browser.js")))

/***/ }),

/***/ "./node_modules/stylis-rule-sheet/index.js":
/*!*************************************************!*\
  !*** ./node_modules/stylis-rule-sheet/index.js ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

(function (factory) {
	 true ? (module['exports'] = factory()) :
		undefined
}(function () {

	'use strict'

	return function (insertRule) {
		var delimiter = '/*|*/'
		var needle = delimiter+'}'

		function toSheet (block) {
			if (block)
				try {
					insertRule(block + '}')
				} catch (e) {}
		}

		return function ruleSheet (context, content, selectors, parents, line, column, length, ns, depth, at) {
			switch (context) {
				// property
				case 1:
					// @import
					if (depth === 0 && content.charCodeAt(0) === 64)
						return insertRule(content+';'), ''
					break
				// selector
				case 2:
					if (ns === 0)
						return content + delimiter
					break
				// at-rule
				case 3:
					switch (ns) {
						// @font-face, @page
						case 102:
						case 112:
							return insertRule(selectors[0]+content), ''
						default:
							return content + (at === 0 ? delimiter : '')
					}
				case -2:
					content.split(needle).forEach(toSheet)
			}
		}
	}
}))


/***/ }),

/***/ "./node_modules/stylis/stylis.min.js":
/*!*******************************************!*\
  !*** ./node_modules/stylis/stylis.min.js ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

!function(e){ true?module.exports=e(null):undefined}(function e(a){"use strict";var c=/^\0+/g,r=/[\0\r\f]/g,s=/: */g,t=/zoo|gra/,i=/([,: ])(transform)/g,f=/,+\s*(?![^(]*[)])/g,n=/ +\s*(?![^(]*[)])/g,l=/ *[\0] */g,o=/,\r+?/g,h=/([\t\r\n ])*\f?&/g,u=/:global\(((?:[^\(\)\[\]]*|\[.*\]|\([^\(\)]*\))*)\)/g,d=/\W+/g,b=/@(k\w+)\s*(\S*)\s*/,k=/::(place)/g,p=/:(read-only)/g,g=/\s+(?=[{\];=:>])/g,A=/([[}=:>])\s+/g,C=/(\{[^{]+?);(?=\})/g,w=/\s{2,}/g,v=/([^\(])(:+) */g,m=/[svh]\w+-[tblr]{2}/,x=/\(\s*(.*)\s*\)/g,$=/([\s\S]*?);/g,y=/-self|flex-/g,O=/[^]*?(:[rp][el]a[\w-]+)[^]*/,j=/stretch|:\s*\w+\-(?:conte|avail)/,z=/([^-])(image-set\()/,F="-webkit-",N="-moz-",S="-ms-",B=59,W=125,q=123,D=40,E=41,G=91,H=93,I=10,J=13,K=9,L=64,M=32,P=38,Q=45,R=95,T=42,U=44,V=58,X=39,Y=34,Z=47,_=62,ee=43,ae=126,ce=0,re=12,se=11,te=107,ie=109,fe=115,ne=112,le=111,oe=105,he=99,ue=100,de=112,be=1,ke=1,pe=0,ge=1,Ae=1,Ce=1,we=0,ve=0,me=0,xe=[],$e=[],ye=0,Oe=null,je=-2,ze=-1,Fe=0,Ne=1,Se=2,Be=3,We=0,qe=1,De="",Ee="",Ge="";function He(e,a,s,t,i){for(var f,n,o=0,h=0,u=0,d=0,g=0,A=0,C=0,w=0,m=0,$=0,y=0,O=0,j=0,z=0,R=0,we=0,$e=0,Oe=0,je=0,ze=s.length,Je=ze-1,Re="",Te="",Ue="",Ve="",Xe="",Ye="";R<ze;){if(C=s.charCodeAt(R),R===Je)if(h+d+u+o!==0){if(0!==h)C=h===Z?I:Z;d=u=o=0,ze++,Je++}if(h+d+u+o===0){if(R===Je){if(we>0)Te=Te.replace(r,"");if(Te.trim().length>0){switch(C){case M:case K:case B:case J:case I:break;default:Te+=s.charAt(R)}C=B}}if(1===$e)switch(C){case q:case W:case B:case Y:case X:case D:case E:case U:$e=0;case K:case J:case I:case M:break;default:for($e=0,je=R,g=C,R--,C=B;je<ze;)switch(s.charCodeAt(je++)){case I:case J:case B:++R,C=g,je=ze;break;case V:if(we>0)++R,C=g;case q:je=ze}}switch(C){case q:for(g=(Te=Te.trim()).charCodeAt(0),y=1,je=++R;R<ze;){switch(C=s.charCodeAt(R)){case q:y++;break;case W:y--;break;case Z:switch(A=s.charCodeAt(R+1)){case T:case Z:R=Qe(A,R,Je,s)}break;case G:C++;case D:C++;case Y:case X:for(;R++<Je&&s.charCodeAt(R)!==C;);}if(0===y)break;R++}if(Ue=s.substring(je,R),g===ce)g=(Te=Te.replace(c,"").trim()).charCodeAt(0);switch(g){case L:if(we>0)Te=Te.replace(r,"");switch(A=Te.charCodeAt(1)){case ue:case ie:case fe:case Q:f=a;break;default:f=xe}if(je=(Ue=He(a,f,Ue,A,i+1)).length,me>0&&0===je)je=Te.length;if(ye>0)if(f=Ie(xe,Te,Oe),n=Pe(Be,Ue,f,a,ke,be,je,A,i,t),Te=f.join(""),void 0!==n)if(0===(je=(Ue=n.trim()).length))A=0,Ue="";if(je>0)switch(A){case fe:Te=Te.replace(x,Me);case ue:case ie:case Q:Ue=Te+"{"+Ue+"}";break;case te:if(Ue=(Te=Te.replace(b,"$1 $2"+(qe>0?De:"")))+"{"+Ue+"}",1===Ae||2===Ae&&Le("@"+Ue,3))Ue="@"+F+Ue+"@"+Ue;else Ue="@"+Ue;break;default:if(Ue=Te+Ue,t===de)Ve+=Ue,Ue=""}else Ue="";break;default:Ue=He(a,Ie(a,Te,Oe),Ue,t,i+1)}Xe+=Ue,O=0,$e=0,z=0,we=0,Oe=0,j=0,Te="",Ue="",C=s.charCodeAt(++R);break;case W:case B:if((je=(Te=(we>0?Te.replace(r,""):Te).trim()).length)>1){if(0===z)if((g=Te.charCodeAt(0))===Q||g>96&&g<123)je=(Te=Te.replace(" ",":")).length;if(ye>0)if(void 0!==(n=Pe(Ne,Te,a,e,ke,be,Ve.length,t,i,t)))if(0===(je=(Te=n.trim()).length))Te="\0\0";switch(g=Te.charCodeAt(0),A=Te.charCodeAt(1),g){case ce:break;case L:if(A===oe||A===he){Ye+=Te+s.charAt(R);break}default:if(Te.charCodeAt(je-1)===V)break;Ve+=Ke(Te,g,A,Te.charCodeAt(2))}}O=0,$e=0,z=0,we=0,Oe=0,Te="",C=s.charCodeAt(++R)}}switch(C){case J:case I:if(h+d+u+o+ve===0)switch($){case E:case X:case Y:case L:case ae:case _:case T:case ee:case Z:case Q:case V:case U:case B:case q:case W:break;default:if(z>0)$e=1}if(h===Z)h=0;else if(ge+O===0&&t!==te&&Te.length>0)we=1,Te+="\0";if(ye*We>0)Pe(Fe,Te,a,e,ke,be,Ve.length,t,i,t);be=1,ke++;break;case B:case W:if(h+d+u+o===0){be++;break}default:switch(be++,Re=s.charAt(R),C){case K:case M:if(d+o+h===0)switch(w){case U:case V:case K:case M:Re="";break;default:if(C!==M)Re=" "}break;case ce:Re="\\0";break;case re:Re="\\f";break;case se:Re="\\v";break;case P:if(d+h+o===0&&ge>0)Oe=1,we=1,Re="\f"+Re;break;case 108:if(d+h+o+pe===0&&z>0)switch(R-z){case 2:if(w===ne&&s.charCodeAt(R-3)===V)pe=w;case 8:if(m===le)pe=m}break;case V:if(d+h+o===0)z=R;break;case U:if(h+u+d+o===0)we=1,Re+="\r";break;case Y:case X:if(0===h)d=d===C?0:0===d?C:d;break;case G:if(d+h+u===0)o++;break;case H:if(d+h+u===0)o--;break;case E:if(d+h+o===0)u--;break;case D:if(d+h+o===0){if(0===O)switch(2*w+3*m){case 533:break;default:y=0,O=1}u++}break;case L:if(h+u+d+o+z+j===0)j=1;break;case T:case Z:if(d+o+u>0)break;switch(h){case 0:switch(2*C+3*s.charCodeAt(R+1)){case 235:h=Z;break;case 220:je=R,h=T}break;case T:if(C===Z&&w===T&&je+2!==R){if(33===s.charCodeAt(je+2))Ve+=s.substring(je,R+1);Re="",h=0}}}if(0===h){if(ge+d+o+j===0&&t!==te&&C!==B)switch(C){case U:case ae:case _:case ee:case E:case D:if(0===O){switch(w){case K:case M:case I:case J:Re+="\0";break;default:Re="\0"+Re+(C===U?"":"\0")}we=1}else switch(C){case D:if(z+7===R&&108===w)z=0;O=++y;break;case E:if(0==(O=--y))we=1,Re+="\0"}break;case K:case M:switch(w){case ce:case q:case W:case B:case U:case re:case K:case M:case I:case J:break;default:if(0===O)we=1,Re+="\0"}}if(Te+=Re,C!==M&&C!==K)$=C}}m=w,w=C,R++}if(je=Ve.length,me>0)if(0===je&&0===Xe.length&&0===a[0].length==false)if(t!==ie||1===a.length&&(ge>0?Ee:Ge)===a[0])je=a.join(",").length+2;if(je>0){if(f=0===ge&&t!==te?function(e){for(var a,c,s=0,t=e.length,i=Array(t);s<t;++s){for(var f=e[s].split(l),n="",o=0,h=0,u=0,d=0,b=f.length;o<b;++o){if(0===(h=(c=f[o]).length)&&b>1)continue;if(u=n.charCodeAt(n.length-1),d=c.charCodeAt(0),a="",0!==o)switch(u){case T:case ae:case _:case ee:case M:case D:break;default:a=" "}switch(d){case P:c=a+Ee;case ae:case _:case ee:case M:case E:case D:break;case G:c=a+c+Ee;break;case V:switch(2*c.charCodeAt(1)+3*c.charCodeAt(2)){case 530:if(Ce>0){c=a+c.substring(8,h-1);break}default:if(o<1||f[o-1].length<1)c=a+Ee+c}break;case U:a="";default:if(h>1&&c.indexOf(":")>0)c=a+c.replace(v,"$1"+Ee+"$2");else c=a+c+Ee}n+=c}i[s]=n.replace(r,"").trim()}return i}(a):a,ye>0)if(void 0!==(n=Pe(Se,Ve,f,e,ke,be,je,t,i,t))&&0===(Ve=n).length)return Ye+Ve+Xe;if(Ve=f.join(",")+"{"+Ve+"}",Ae*pe!=0){if(2===Ae&&!Le(Ve,2))pe=0;switch(pe){case le:Ve=Ve.replace(p,":"+N+"$1")+Ve;break;case ne:Ve=Ve.replace(k,"::"+F+"input-$1")+Ve.replace(k,"::"+N+"$1")+Ve.replace(k,":"+S+"input-$1")+Ve}pe=0}}return Ye+Ve+Xe}function Ie(e,a,c){var r=a.trim().split(o),s=r,t=r.length,i=e.length;switch(i){case 0:case 1:for(var f=0,n=0===i?"":e[0]+" ";f<t;++f)s[f]=Je(n,s[f],c,i).trim();break;default:f=0;var l=0;for(s=[];f<t;++f)for(var h=0;h<i;++h)s[l++]=Je(e[h]+" ",r[f],c,i).trim()}return s}function Je(e,a,c,r){var s=a,t=s.charCodeAt(0);if(t<33)t=(s=s.trim()).charCodeAt(0);switch(t){case P:switch(ge+r){case 0:case 1:if(0===e.trim().length)break;default:return s.replace(h,"$1"+e.trim())}break;case V:switch(s.charCodeAt(1)){case 103:if(Ce>0&&ge>0)return s.replace(u,"$1").replace(h,"$1"+Ge);break;default:return e.trim()+s.replace(h,"$1"+e.trim())}default:if(c*ge>0&&s.indexOf("\f")>0)return s.replace(h,(e.charCodeAt(0)===V?"":"$1")+e.trim())}return e+s}function Ke(e,a,c,r){var l,o=0,h=e+";",u=2*a+3*c+4*r;if(944===u)return function(e){var a=e.length,c=e.indexOf(":",9)+1,r=e.substring(0,c).trim(),s=e.substring(c,a-1).trim();switch(e.charCodeAt(9)*qe){case 0:break;case Q:if(110!==e.charCodeAt(10))break;default:for(var t=s.split((s="",f)),i=0,c=0,a=t.length;i<a;c=0,++i){for(var l=t[i],o=l.split(n);l=o[c];){var h=l.charCodeAt(0);if(1===qe&&(h>L&&h<90||h>96&&h<123||h===R||h===Q&&l.charCodeAt(1)!==Q))switch(isNaN(parseFloat(l))+(-1!==l.indexOf("("))){case 1:switch(l){case"infinite":case"alternate":case"backwards":case"running":case"normal":case"forwards":case"both":case"none":case"linear":case"ease":case"ease-in":case"ease-out":case"ease-in-out":case"paused":case"reverse":case"alternate-reverse":case"inherit":case"initial":case"unset":case"step-start":case"step-end":break;default:l+=De}}o[c++]=l}s+=(0===i?"":",")+o.join(" ")}}if(s=r+s+";",1===Ae||2===Ae&&Le(s,1))return F+s+s;return s}(h);else if(0===Ae||2===Ae&&!Le(h,1))return h;switch(u){case 1015:return 97===h.charCodeAt(10)?F+h+h:h;case 951:return 116===h.charCodeAt(3)?F+h+h:h;case 963:return 110===h.charCodeAt(5)?F+h+h:h;case 1009:if(100!==h.charCodeAt(4))break;case 969:case 942:return F+h+h;case 978:return F+h+N+h+h;case 1019:case 983:return F+h+N+h+S+h+h;case 883:if(h.charCodeAt(8)===Q)return F+h+h;if(h.indexOf("image-set(",11)>0)return h.replace(z,"$1"+F+"$2")+h;return h;case 932:if(h.charCodeAt(4)===Q)switch(h.charCodeAt(5)){case 103:return F+"box-"+h.replace("-grow","")+F+h+S+h.replace("grow","positive")+h;case 115:return F+h+S+h.replace("shrink","negative")+h;case 98:return F+h+S+h.replace("basis","preferred-size")+h}return F+h+S+h+h;case 964:return F+h+S+"flex-"+h+h;case 1023:if(99!==h.charCodeAt(8))break;return l=h.substring(h.indexOf(":",15)).replace("flex-","").replace("space-between","justify"),F+"box-pack"+l+F+h+S+"flex-pack"+l+h;case 1005:return t.test(h)?h.replace(s,":"+F)+h.replace(s,":"+N)+h:h;case 1e3:switch(o=(l=h.substring(13).trim()).indexOf("-")+1,l.charCodeAt(0)+l.charCodeAt(o)){case 226:l=h.replace(m,"tb");break;case 232:l=h.replace(m,"tb-rl");break;case 220:l=h.replace(m,"lr");break;default:return h}return F+h+S+l+h;case 1017:if(-1===h.indexOf("sticky",9))return h;case 975:switch(o=(h=e).length-10,u=(l=(33===h.charCodeAt(o)?h.substring(0,o):h).substring(e.indexOf(":",7)+1).trim()).charCodeAt(0)+(0|l.charCodeAt(7))){case 203:if(l.charCodeAt(8)<111)break;case 115:h=h.replace(l,F+l)+";"+h;break;case 207:case 102:h=h.replace(l,F+(u>102?"inline-":"")+"box")+";"+h.replace(l,F+l)+";"+h.replace(l,S+l+"box")+";"+h}return h+";";case 938:if(h.charCodeAt(5)===Q)switch(h.charCodeAt(6)){case 105:return l=h.replace("-items",""),F+h+F+"box-"+l+S+"flex-"+l+h;case 115:return F+h+S+"flex-item-"+h.replace(y,"")+h;default:return F+h+S+"flex-line-pack"+h.replace("align-content","").replace(y,"")+h}break;case 973:case 989:if(h.charCodeAt(3)!==Q||122===h.charCodeAt(4))break;case 931:case 953:if(true===j.test(e))if(115===(l=e.substring(e.indexOf(":")+1)).charCodeAt(0))return Ke(e.replace("stretch","fill-available"),a,c,r).replace(":fill-available",":stretch");else return h.replace(l,F+l)+h.replace(l,N+l.replace("fill-",""))+h;break;case 962:if(h=F+h+(102===h.charCodeAt(5)?S+h:"")+h,c+r===211&&105===h.charCodeAt(13)&&h.indexOf("transform",10)>0)return h.substring(0,h.indexOf(";",27)+1).replace(i,"$1"+F+"$2")+h}return h}function Le(e,a){var c=e.indexOf(1===a?":":"{"),r=e.substring(0,3!==a?c:10),s=e.substring(c+1,e.length-1);return Oe(2!==a?r:r.replace(O,"$1"),s,a)}function Me(e,a){var c=Ke(a,a.charCodeAt(0),a.charCodeAt(1),a.charCodeAt(2));return c!==a+";"?c.replace($," or ($1)").substring(4):"("+a+")"}function Pe(e,a,c,r,s,t,i,f,n,l){for(var o,h=0,u=a;h<ye;++h)switch(o=$e[h].call(Te,e,u,c,r,s,t,i,f,n,l)){case void 0:case false:case true:case null:break;default:u=o}switch(u){case void 0:case false:case true:case null:case a:break;default:return u}}function Qe(e,a,c,r){for(var s=a+1;s<c;++s)switch(r.charCodeAt(s)){case Z:if(e===T)if(r.charCodeAt(s-1)===T&&a+2!==s)return s+1;break;case I:if(e===Z)return s+1}return s}function Re(e){for(var a in e){var c=e[a];switch(a){case"keyframe":qe=0|c;break;case"global":Ce=0|c;break;case"cascade":ge=0|c;break;case"compress":we=0|c;break;case"semicolon":ve=0|c;break;case"preserve":me=0|c;break;case"prefix":if(Oe=null,!c)Ae=0;else if("function"!=typeof c)Ae=1;else Ae=2,Oe=c}}return Re}function Te(a,c){if(void 0!==this&&this.constructor===Te)return e(a);var s=a,t=s.charCodeAt(0);if(t<33)t=(s=s.trim()).charCodeAt(0);if(qe>0)De=s.replace(d,t===G?"":"-");if(t=1,1===ge)Ge=s;else Ee=s;var i,f=[Ge];if(ye>0)if(void 0!==(i=Pe(ze,c,f,f,ke,be,0,0,0,0))&&"string"==typeof i)c=i;var n=He(xe,f,c,0,0);if(ye>0)if(void 0!==(i=Pe(je,n,f,f,ke,be,n.length,0,0,0))&&"string"!=typeof(n=i))t=0;return De="",Ge="",Ee="",pe=0,ke=1,be=1,we*t==0?n:n.replace(r,"").replace(g,"").replace(A,"$1").replace(C,"$1").replace(w," ")}if(Te.use=function e(a){switch(a){case void 0:case null:ye=$e.length=0;break;default:switch(a.constructor){case Array:for(var c=0,r=a.length;c<r;++c)e(a[c]);break;case Function:$e[ye++]=a;break;case Boolean:We=0|!!a}}return e},Te.set=Re,void 0!==a)Re(a);return Te});
//# sourceMappingURL=stylis.min.js.map

/***/ }),

/***/ "./node_modules/webpack/buildin/harmony-module.js":
/*!*******************************************!*\
  !*** (webpack)/buildin/harmony-module.js ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = function(originalModule) {
	if (!originalModule.webpackPolyfill) {
		var module = Object.create(originalModule);
		// module.parent = undefined by default
		if (!module.children) module.children = [];
		Object.defineProperty(module, "loaded", {
			enumerable: true,
			get: function() {
				return module.l;
			}
		});
		Object.defineProperty(module, "id", {
			enumerable: true,
			get: function() {
				return module.i;
			}
		});
		Object.defineProperty(module, "exports", {
			enumerable: true
		});
		module.webpackPolyfill = 1;
	}
	return module;
};


/***/ }),

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_Intro__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/Intro */ "./components/Intro.js");
/* harmony import */ var _components_ImageSlider__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/ImageSlider */ "./components/ImageSlider.js");
/* harmony import */ var _components_Location__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/Location */ "./components/Location.js");
/* harmony import */ var _components_Share__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/Share */ "./components/Share.js");


function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }






var Index =
/*#__PURE__*/
function (_React$Component) {
  _inherits(Index, _React$Component);

  function Index() {
    _classCallCheck(this, Index);

    return _possibleConstructorReturn(this, _getPrototypeOf(Index).apply(this, arguments));
  }

  _createClass(Index, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      Kakao.init("969225fd468a90819932423f35c6a247");
    }
  }, {
    key: "render",
    value: function render() {
      var prefix =  false ? undefined : '';
      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h1", {
        className: "hide"
      }, "\uC900\uD638\uC640 \uD55C\uB098 \uACB0\uD63C\uD569\uB2C8\uB2E4."), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_Intro__WEBPACK_IMPORTED_MODULE_1__["default"], {
        prefix: prefix
      }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_ImageSlider__WEBPACK_IMPORTED_MODULE_2__["default"], {
        prefix: prefix
      }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_Location__WEBPACK_IMPORTED_MODULE_3__["default"], {
        prefix: prefix
      }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_Share__WEBPACK_IMPORTED_MODULE_4__["default"], {
        prefix: prefix
      }));
    }
  }]);

  return Index;
}(react__WEBPACK_IMPORTED_MODULE_0___default.a.Component);

/* harmony default export */ __webpack_exports__["default"] = (Index);
    (function (Component, route) {
      if(!Component) return
      if (false) {}
      module.hot.accept()
      Component.__route = route

      if (module.hot.status() === 'idle') return

      var components = next.router.components
      for (var r in components) {
        if (!components.hasOwnProperty(r)) continue

        if (components[r].Component.__route === route) {
          next.router.update(r, Component)
        }
      }
    })(typeof __webpack_exports__ !== 'undefined' ? __webpack_exports__.default : (module.exports.default || module.exports), "/")
  
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ }),

/***/ 3:
/*!******************************!*\
  !*** multi ./pages/index.js ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

__NEXT_REGISTER_PAGE('/', function() {
module.exports = __webpack_require__(/*! ./pages/index.js */"./pages/index.js");

return { page: module.exports.default }});

/***/ }),

/***/ "dll-reference dll_831a3634f66cb1dada0c":
/*!*******************************************!*\
  !*** external "dll_831a3634f66cb1dada0c" ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = dll_831a3634f66cb1dada0c;

/***/ })

},[[3,"static/runtime/webpack.js","styles"]]]));;
//# sourceMappingURL=index.js.map
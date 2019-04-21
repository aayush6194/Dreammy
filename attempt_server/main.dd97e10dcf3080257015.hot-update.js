webpackHotUpdate("main",{

/***/ "./src/Setting.js":
/*!************************!*\
  !*** ./src/Setting.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var C_Users_Aayush_Desktop_Dreammy_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime/helpers/esm/classCallCheck.js");
/* harmony import */ var C_Users_Aayush_Desktop_Dreammy_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/createClass */ "./node_modules/@babel/runtime/helpers/esm/createClass.js");
/* harmony import */ var C_Users_Aayush_Desktop_Dreammy_node_modules_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn */ "./node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var C_Users_Aayush_Desktop_Dreammy_node_modules_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/getPrototypeOf */ "./node_modules/@babel/runtime/helpers/esm/getPrototypeOf.js");
/* harmony import */ var C_Users_Aayush_Desktop_Dreammy_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/inherits */ "./node_modules/@babel/runtime/helpers/esm/inherits.js");
/* harmony import */ var C_Users_Aayush_Desktop_Dreammy_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/taggedTemplateLiteral */ "./node_modules/@babel/runtime/helpers/esm/taggedTemplateLiteral.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");
/* harmony import */ var _Cloudinary__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./Cloudinary */ "./src/Cloudinary.js");
/* harmony import */ var _components_Modal__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./components/Modal */ "./src/components/Modal.js");
/* harmony import */ var _api__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./api */ "./src/api/index.js");
/* harmony import */ var _utils_utils__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./utils/utils */ "./src/utils/utils.js");






var _jsxFileName = "C:\\Users\\Aayush\\Desktop\\Dreammy\\src\\Setting.js";

function _templateObject2() {
  var data = Object(C_Users_Aayush_Desktop_Dreammy_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_5__["default"])(["\n  border-top: 1px solid #2B547E;\n  margin: 0.7em;\n  box-shadow: 0 .25em .5em rgba(0,0,0,.5);\n  border-radius: .5em;\n  border: 3px solid transparent;\n  display: grid;\n  padding: 0.3em;\n   grid-template-columns: 1fr 1fr 1fr;\n  min-height: 3.8em;\n  align-items: center;\n  @media(max-width: 400px){\n     grid-template-columns: 1fr 1fr;\n  }"]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = Object(C_Users_Aayush_Desktop_Dreammy_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_5__["default"])(["\n border-radius: 50%;\n display: block;\n border: 2px solid #006666;\n margin: 0 auto;\n padding: 0.5em;\n width: 10em;\n height: 10em;"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}







var ProfileImg = styled_components__WEBPACK_IMPORTED_MODULE_7__["default"].img(_templateObject());
var Card = styled_components__WEBPACK_IMPORTED_MODULE_7__["default"].div(_templateObject2());

var Setting =
/*#__PURE__*/
function (_React$Component) {
  Object(C_Users_Aayush_Desktop_Dreammy_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__["default"])(Setting, _React$Component);

  function Setting(props) {
    var _this;

    Object(C_Users_Aayush_Desktop_Dreammy_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, Setting);

    _this = Object(C_Users_Aayush_Desktop_Dreammy_node_modules_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__["default"])(this, Object(C_Users_Aayush_Desktop_Dreammy_node_modules_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__["default"])(Setting).call(this, props));

    _this.submit = function () {
      _api__WEBPACK_IMPORTED_MODULE_10__["default"].ChangeFields(_this.state.fields).then(function (res) {
        if (res.success) {
          alert("Changed Sucessfully");
        } else {
          alert("Error");
        }
      }).catch(function (err) {
        alert("Error");
      });
    };

    _this.onAttachmentClick = function () {
      _this.cloudinaryRef.current.openImagePicker();
    };

    _this.state = {
      modal: false,
      firstNameEdit: false,
      lastNameEdit: false,
      emailEdit: false,
      firstName: _this.props.user.firstName,
      lastName: _this.props.user.lastName,
      imageUrl: _this.props.user.imageUrl,
      email: _this.props.user.email
    };
    _this.cloudinaryRef = react__WEBPACK_IMPORTED_MODULE_6___default.a.createRef();
    return _this;
  }

  Object(C_Users_Aayush_Desktop_Dreammy_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(Setting, [{
    key: "onCloudinaryResult",
    value: function onCloudinaryResult(result) {
      if (result) this.setState({
        imageUrl: result
      });
    }
  }, {
    key: "render",
    value: function render() {
      var _this2 = this;

      return react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("div", {
        style: {
          minHeight: "100vh"
        },
        className: "containerr",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 68
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("div", {
        className: "profile-box full",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 69
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(_components_Modal__WEBPACK_IMPORTED_MODULE_9__["default"], {
        show: false,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 70
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("button", {
        style: {
          justifySelf: "end",
          margin: "1em",
          width: "5em"
        },
        className: "bordered hoverr white-txt pointer center",
        onClick: this.props.logout,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 71
        },
        __self: this
      }, "Logout "), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("div", {
        style: {
          minHeight: "100vh"
        },
        className: "grid full",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 72
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(ProfileImg, {
        className: "",
        src: Object(_utils_utils__WEBPACK_IMPORTED_MODULE_11__["cloudinaryUrl"])(this.state.imageUrl),
        alt: "user",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 73
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(_Cloudinary__WEBPACK_IMPORTED_MODULE_8__["default"], {
        ref: this.cloudinaryRef,
        onResult: this.onCloudinaryResult.bind(this),
        __source: {
          fileName: _jsxFileName,
          lineNumber: 74
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("button", {
        className: "bordered hoverr white-txt pointer center",
        onClick: this.onAttachmentClick,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 75
        },
        __self: this
      }, "Change Profile Picture"), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("button", {
        className: "bordered hoverr white-txt pointer center",
        onClick: this.submit,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 76
        },
        __self: this
      }, "Save Changes"), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(Card, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 78
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("span", {
        className: "bold text-md sp-2-sm",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 79
        },
        __self: this
      }, "First Name"), !this.state.firstNameEdit ? react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("span", {
        className: "bold text-md",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 82
        },
        __self: this
      }, this.state.firstName) : react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("input", {
        value: this.state.firstName,
        onChange: function onChange(e) {
          _this2.setState({
            firstName: e.target.value
          });
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 83
        },
        __self: this
      }), !this.state.firstNameEdit ? react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("i", {
        className: "material-icons pointer end blue-txt",
        style: {
          justifySelf: "end"
        },
        onClick: function onClick() {
          _this2.setState({
            firstNameEdit: true
          });
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 86
        },
        __self: this
      }, "edit") : react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("i", {
        className: "material-icons pointer end blue-txt",
        style: {
          justifySelf: "end"
        },
        onClick: function onClick() {
          _this2.setState({
            firstNameEdit: false
          });
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 87
        },
        __self: this
      }, "done")), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(Card, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 91
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("span", {
        className: "bold text-md sp-2-sm",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 92
        },
        __self: this
      }, "Last Name"), !this.state.lastNameEdit ? react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("span", {
        className: "bold text-md",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 95
        },
        __self: this
      }, this.state.lastName) : react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("input", {
        value: this.state.lastName,
        onChange: function onChange(e) {
          _this2.setState({
            lastName: e.target.value
          });
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 96
        },
        __self: this
      }), !this.state.lastNameEdit ? react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("i", {
        className: "material-icons pointer end blue-txt",
        onClick: function onClick() {
          _this2.setState({
            lastNameEdit: true
          });
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 99
        },
        __self: this
      }, "edit") : react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("i", {
        className: "material-icons pointer end blue-txt",
        onClick: function onClick() {
          _this2.setState({
            lastNameEdit: false
          });
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 100
        },
        __self: this
      }, "done")), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(Card, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 105
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("span", {
        className: "bold text-md sp-2-sm",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 106
        },
        __self: this
      }, "Email"), !this.state.emailEdit ? react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("span", {
        className: "bold text-md",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 109
        },
        __self: this
      }, this.state.email) : react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("input", {
        value: this.state.email,
        onChange: function onChange(e) {
          _this2.setState({
            email: e.target.value
          });
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 110
        },
        __self: this
      }), !this.state.emailEdit ? react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("i", {
        onClick: function onClick() {
          _this2.setState({
            emailEdit: true
          });
        },
        className: "material-icons pointer end blue-txt",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 113
        },
        __self: this
      }, "edit") : react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("i", {
        className: "material-icons pointer end blue-txt",
        onClick: function onClick() {
          _this2.setState({
            emailEdit: false
          });
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 114
        },
        __self: this
      }, "done")), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(Card, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 118
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("span", {
        className: "bold text-md sp-2-sm",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 119
        },
        __self: this
      }, "Country"), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("span", {
        className: "bold text-md",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 120
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("i", {
        style: {
          justifySelf: "end"
        },
        className: "material-icons end blue-txt",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 121
        },
        __self: this
      }, "edit")), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(Card, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 124
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("span", {
        className: "bold text-md sp-2-sm",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 125
        },
        __self: this
      }, "Facebook"), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("span", {
        className: "bold text-md",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 126
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("i", {
        style: {
          justifySelf: "end"
        },
        className: "material-icons end blue-txt",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 127
        },
        __self: this
      }, "edit")), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(Card, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 130
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("span", {
        className: "bold text-md sp-2-sm",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 131
        },
        __self: this
      }, "Instagram"), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("span", {
        className: "bold text-md",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 132
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("i", {
        style: {
          justifySelf: "end"
        },
        className: "material-icons end blue-txt",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 133
        },
        __self: this
      }, "edit")), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(Card, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 136
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("span", {
        className: "bold text-md sp-2-sm",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 137
        },
        __self: this
      }, "Twitter"), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("span", {
        className: "bold text-md",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 138
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("i", {
        style: {
          justifySelf: "end"
        },
        className: "material-icons end blue-txt",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 139
        },
        __self: this
      }, "edit")), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("div", {
        style: {
          height: "9em"
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 144
        },
        __self: this
      }))));
    }
  }]);

  return Setting;
}(react__WEBPACK_IMPORTED_MODULE_6___default.a.Component);

/* harmony default export */ __webpack_exports__["default"] = (Setting);

/***/ })

})
//# sourceMappingURL=main.dd97e10dcf3080257015.hot-update.js.map

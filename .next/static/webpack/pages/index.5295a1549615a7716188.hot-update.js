webpackHotUpdate_N_E("pages/index",{

/***/ "./src/components/Home/HomeComponents/UnreadMessagesCard.tsx":
/*!*******************************************************************!*\
  !*** ./src/components/Home/HomeComponents/UnreadMessagesCard.tsx ***!
  \*******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _Users_waleed_iwork_jobs_upwork_Matthew_gethired_company_node_modules_next_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/next/node_modules/@babel/runtime/helpers/esm/defineProperty */ \"./node_modules/next/node_modules/@babel/runtime/helpers/esm/defineProperty.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _components_Global_GetHiredCard__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/components/Global/GetHiredCard */ \"./src/components/Global/GetHiredCard.tsx\");\n/* harmony import */ var _components_Home_HomeComponents_UnreadMessage__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @/components/Home/HomeComponents/UnreadMessage */ \"./src/components/Home/HomeComponents/UnreadMessage.tsx\");\n/* harmony import */ var _components_Global_Button__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @/components/Global/Button */ \"./src/components/Global/Button.tsx\");\n/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react-redux */ \"./node_modules/react-redux/es/index.js\");\n/* harmony import */ var react_slick__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react-slick */ \"./node_modules/react-slick/lib/index.js\");\n/* harmony import */ var react_slick__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react_slick__WEBPACK_IMPORTED_MODULE_7__);\n\n\n\n\nvar _jsxFileName = \"/Users/waleed/iwork/jobs/upwork/Matthew/gethired-company/src/components/Home/HomeComponents/UnreadMessagesCard.tsx\",\n    _this = undefined,\n    _s = $RefreshSig$();\n\nfunction ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }\n\nfunction _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { Object(_Users_waleed_iwork_jobs_upwork_Matthew_gethired_company_node_modules_next_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }\n\n\n\n\n\n\n\n\nvar UnreadMessagesCard = function UnreadMessagesCard(_ref) {\n  _s();\n\n  var unreadMessages = _ref.unreadMessages;\n\n  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_2__[\"useState\"])({\n    dots: true,\n    infinite: true,\n    speed: 500,\n    slidesToShow: 1,\n    slidesToScroll: 1,\n    dotsClass: \"latest-opts-dots\"\n  }),\n      sliderSettings = _useState[0],\n      setSliderSettings = _useState[1];\n\n  Object(react__WEBPACK_IMPORTED_MODULE_2__[\"useEffect\"])(function () {\n    setSliderSettings(sliderSettings);\n  }, []);\n  var renderUnreadMessages = unreadMessages.map(function (msg) {\n    return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(react__WEBPACK_IMPORTED_MODULE_2___default.a.Fragment, {\n      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_components_Home_HomeComponents_UnreadMessage__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n        profile_img: msg.profile_img,\n        username: msg.username,\n        deliveredTime: msg.deliveredTime,\n        unreadMsg: msg.unreadMsg\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 44,\n        columnNumber: 11\n      }, _this)\n    }, msg.id, false, {\n      fileName: _jsxFileName,\n      lineNumber: 43,\n      columnNumber: 9\n    }, _this);\n  });\n  var unreadMessagesMob = unreadMessages.map(function (msg) {\n    return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n      className: \"p-2\",\n      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n        className: \"flex flex-wrap bg-white p-3\",\n        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n          className: \"w-full flex items-center my-3\",\n          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n            className: \"w-7 h-7 rounded-full\",\n            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"img\", {\n              src: msg.profile_img,\n              alt: \"\",\n              className: \"w-7 h-7 rounded-full\"\n            }, void 0, false, {\n              fileName: _jsxFileName,\n              lineNumber: 62,\n              columnNumber: 17\n            }, _this)\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 61,\n            columnNumber: 15\n          }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"h1\", {\n            className: \"tex-titles\",\n            children: msg.username\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 68,\n            columnNumber: 15\n          }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"p\", {\n            className: \"justify-self-end text-secondary text-xss\",\n            children: msg.deliveredTime\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 69,\n            columnNumber: 15\n          }, _this)]\n        }, void 0, true, {\n          fileName: _jsxFileName,\n          lineNumber: 60,\n          columnNumber: 13\n        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n          className: \"w-full flex items-center my-3\",\n          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n            className: \"w-2 h-2 bg-primary\"\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 74,\n            columnNumber: 15\n          }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"p\", {\n            className: \"text-titles text-sm\",\n            children: msg.unreadMsg\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 75,\n            columnNumber: 15\n          }, _this)]\n        }, void 0, true, {\n          fileName: _jsxFileName,\n          lineNumber: 73,\n          columnNumber: 13\n        }, _this)]\n      }, void 0, true, {\n        fileName: _jsxFileName,\n        lineNumber: 59,\n        columnNumber: 11\n      }, _this)\n    }, msg.id, false, {\n      fileName: _jsxFileName,\n      lineNumber: 58,\n      columnNumber: 9\n    }, _this);\n  });\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"Fragment\"], {\n    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_components_Global_GetHiredCard__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n      cardTitle: \"Unread Messages\",\n      classNames: \"mb-6 lg:block hidden\",\n      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n        className: \"w-full flex my-4\",\n        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n          className: \"w-4/5 flex items-end\",\n          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"h1\", {\n            className: \"text-3xl text-primary -mb-1 mr-3\",\n            children: \"6\"\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 91,\n            columnNumber: 13\n          }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n            className: \"flex items-center ml-3\",\n            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"span\", {\n              className: \"text-xs text-secondary\",\n              children: \"It takes 2-3 hours on average from Candidate to asnwer since Accept.\"\n            }, void 0, false, {\n              fileName: _jsxFileName,\n              lineNumber: 93,\n              columnNumber: 15\n            }, _this)\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 92,\n            columnNumber: 13\n          }, _this)]\n        }, void 0, true, {\n          fileName: _jsxFileName,\n          lineNumber: 90,\n          columnNumber: 11\n        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n          className: \"w-1/5 flex justify-end\",\n          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"img\", {\n            src: \"/img/icons/message-icon.svg\",\n            alt: \"\"\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 100,\n            columnNumber: 13\n          }, _this)\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 99,\n          columnNumber: 11\n        }, _this)]\n      }, void 0, true, {\n        fileName: _jsxFileName,\n        lineNumber: 89,\n        columnNumber: 9\n      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n        className: \"w-full\",\n        children: renderUnreadMessages\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 103,\n        columnNumber: 9\n      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n        className: \"w-full -mb-1\",\n        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_components_Global_Button__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {\n          text: \"Show All Messages\",\n          isTransparent: true,\n          classNames: \"text-primary h-0 mt-3 -mb-6 p-0\"\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 105,\n          columnNumber: 11\n        }, _this)\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 104,\n        columnNumber: 9\n      }, _this)]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 85,\n      columnNumber: 7\n    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n      className: \"lg:hidden flex flex-wrap my-5\",\n      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n        className: \"w-full\",\n        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"h1\", {\n          className: \"text-titles text-1xl\",\n          children: \"Unread Messages\"\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 114,\n          columnNumber: 11\n        }, _this)\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 113,\n        columnNumber: 9\n      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n        className: \"w-full flex my-5\",\n        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n          className: \"w-4/5 flex items-end\",\n          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"h1\", {\n            className: \"text-3xl text-primary -mb-1 mr-3\",\n            children: \"6\"\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 118,\n            columnNumber: 13\n          }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n            className: \"flex items-center\",\n            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"span\", {\n              className: \"text-xs text-secondary\",\n              children: \"It takes 2-3 hours on average from Candidate to asnwer since Accept.\"\n            }, void 0, false, {\n              fileName: _jsxFileName,\n              lineNumber: 120,\n              columnNumber: 15\n            }, _this)\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 119,\n            columnNumber: 13\n          }, _this)]\n        }, void 0, true, {\n          fileName: _jsxFileName,\n          lineNumber: 117,\n          columnNumber: 11\n        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n          className: \"w-1/5 flex justify-end\",\n          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"img\", {\n            src: \"/img/icons/message-icon.svg\",\n            alt: \"\"\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 127,\n            columnNumber: 13\n          }, _this)\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 126,\n          columnNumber: 11\n        }, _this)]\n      }, void 0, true, {\n        fileName: _jsxFileName,\n        lineNumber: 116,\n        columnNumber: 9\n      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n        className: \"w-full\",\n        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(react_slick__WEBPACK_IMPORTED_MODULE_7___default.a, _objectSpread(_objectSpread({}, sliderSettings), {}, {\n          children: unreadMessagesMob\n        }), void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 131,\n          columnNumber: 11\n        }, _this)\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 130,\n        columnNumber: 9\n      }, _this)]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 112,\n      columnNumber: 7\n    }, _this)]\n  }, void 0, true);\n};\n\n_s(UnreadMessagesCard, \"QOHUMZvt1cTX5HKRr9KUWSvA/yU=\");\n\n_c = UnreadMessagesCard;\n\nvar mapStateToProps = function mapStateToProps(state) {\n  return {\n    unreadMessages: state.store.unreadMessages\n  };\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Object(react_redux__WEBPACK_IMPORTED_MODULE_6__[\"connect\"])(mapStateToProps)(UnreadMessagesCard));\n\nvar _c;\n\n$RefreshReg$(_c, \"UnreadMessagesCard\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../../node_modules/next/dist/compiled/webpack/harmony-module.js */ \"./node_modules/next/dist/compiled/webpack/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbXBvbmVudHMvSG9tZS9Ib21lQ29tcG9uZW50cy9VbnJlYWRNZXNzYWdlc0NhcmQudHN4P2RjYmQiXSwibmFtZXMiOlsiVW5yZWFkTWVzc2FnZXNDYXJkIiwidW5yZWFkTWVzc2FnZXMiLCJ1c2VTdGF0ZSIsImRvdHMiLCJpbmZpbml0ZSIsInNwZWVkIiwic2xpZGVzVG9TaG93Iiwic2xpZGVzVG9TY3JvbGwiLCJkb3RzQ2xhc3MiLCJzbGlkZXJTZXR0aW5ncyIsInNldFNsaWRlclNldHRpbmdzIiwidXNlRWZmZWN0IiwicmVuZGVyVW5yZWFkTWVzc2FnZXMiLCJtYXAiLCJtc2ciLCJwcm9maWxlX2ltZyIsInVzZXJuYW1lIiwiZGVsaXZlcmVkVGltZSIsInVucmVhZE1zZyIsImlkIiwidW5yZWFkTWVzc2FnZXNNb2IiLCJtYXBTdGF0ZVRvUHJvcHMiLCJzdGF0ZSIsInN0b3JlIiwiY29ubmVjdCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQW9CQSxJQUFNQSxrQkFBbUMsR0FBRyxTQUF0Q0Esa0JBQXNDLE9BQXdCO0FBQUE7O0FBQUEsTUFBckJDLGNBQXFCLFFBQXJCQSxjQUFxQjs7QUFBQSxrQkFDdEJDLHNEQUFRLENBQVM7QUFDM0RDLFFBQUksRUFBRSxJQURxRDtBQUUzREMsWUFBUSxFQUFFLElBRmlEO0FBRzNEQyxTQUFLLEVBQUUsR0FIb0Q7QUFJM0RDLGdCQUFZLEVBQUUsQ0FKNkM7QUFLM0RDLGtCQUFjLEVBQUUsQ0FMMkM7QUFNM0RDLGFBQVMsRUFBRTtBQU5nRCxHQUFULENBRGM7QUFBQSxNQUMzREMsY0FEMkQ7QUFBQSxNQUMzQ0MsaUJBRDJDOztBQVVsRUMseURBQVMsQ0FBQyxZQUFNO0FBQ2RELHFCQUFpQixDQUFDRCxjQUFELENBQWpCO0FBQ0QsR0FGUSxFQUVOLEVBRk0sQ0FBVDtBQUlBLE1BQU1HLG9CQUFvQixHQUFHWCxjQUFjLENBQUNZLEdBQWYsQ0FDM0IsVUFBQ0MsR0FBRCxFQUFpQztBQUMvQix3QkFDRSxxRUFBQyw0Q0FBRCxDQUFPLFFBQVA7QUFBQSw2QkFDRSxxRUFBQyxxRkFBRDtBQUNFLG1CQUFXLEVBQUVBLEdBQUcsQ0FBQ0MsV0FEbkI7QUFFRSxnQkFBUSxFQUFFRCxHQUFHLENBQUNFLFFBRmhCO0FBR0UscUJBQWEsRUFBRUYsR0FBRyxDQUFDRyxhQUhyQjtBQUlFLGlCQUFTLEVBQUVILEdBQUcsQ0FBQ0k7QUFKakI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGLE9BQXFCSixHQUFHLENBQUNLLEVBQXpCO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUFERjtBQVVELEdBWjBCLENBQTdCO0FBZUEsTUFBTUMsaUJBQWlCLEdBQUduQixjQUFjLENBQUNZLEdBQWYsQ0FDeEIsVUFBQ0MsR0FBRCxFQUFpQztBQUMvQix3QkFDRTtBQUFrQixlQUFTLEVBQUMsS0FBNUI7QUFBQSw2QkFDRTtBQUFLLGlCQUFTLEVBQUMsNkJBQWY7QUFBQSxnQ0FDRTtBQUFLLG1CQUFTLEVBQUMsK0JBQWY7QUFBQSxrQ0FDRTtBQUFLLHFCQUFTLEVBQUMsc0JBQWY7QUFBQSxtQ0FDRTtBQUNFLGlCQUFHLEVBQUVBLEdBQUcsQ0FBQ0MsV0FEWDtBQUVFLGlCQUFHLEVBQUMsRUFGTjtBQUdFLHVCQUFTLEVBQUM7QUFIWjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQSxtQkFERixlQVFFO0FBQUkscUJBQVMsRUFBQyxZQUFkO0FBQUEsc0JBQTRCRCxHQUFHLENBQUNFO0FBQWhDO0FBQUE7QUFBQTtBQUFBO0FBQUEsbUJBUkYsZUFTRTtBQUFHLHFCQUFTLEVBQUMsMENBQWI7QUFBQSxzQkFDR0YsR0FBRyxDQUFDRztBQURQO0FBQUE7QUFBQTtBQUFBO0FBQUEsbUJBVEY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQURGLGVBY0U7QUFBSyxtQkFBUyxFQUFDLCtCQUFmO0FBQUEsa0NBQ0U7QUFBSyxxQkFBUyxFQUFDO0FBQWY7QUFBQTtBQUFBO0FBQUE7QUFBQSxtQkFERixlQUVFO0FBQUcscUJBQVMsRUFBQyxxQkFBYjtBQUFBLHNCQUFvQ0gsR0FBRyxDQUFDSTtBQUF4QztBQUFBO0FBQUE7QUFBQTtBQUFBLG1CQUZGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFkRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERixPQUFVSixHQUFHLENBQUNLLEVBQWQ7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQURGO0FBdUJELEdBekJ1QixDQUExQjtBQTRCQSxzQkFDRTtBQUFBLDRCQUNFLHFFQUFDLHVFQUFEO0FBQ0UsZUFBUyxFQUFDLGlCQURaO0FBRUUsZ0JBQVUsRUFBQyxzQkFGYjtBQUFBLDhCQUlFO0FBQUssaUJBQVMsRUFBQyxrQkFBZjtBQUFBLGdDQUNFO0FBQUssbUJBQVMsRUFBQyxzQkFBZjtBQUFBLGtDQUNFO0FBQUkscUJBQVMsRUFBQyxrQ0FBZDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxtQkFERixlQUVFO0FBQUsscUJBQVMsRUFBQyx3QkFBZjtBQUFBLG1DQUNFO0FBQU0sdUJBQVMsRUFBQyx3QkFBaEI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBLG1CQUZGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFERixlQVVFO0FBQUssbUJBQVMsRUFBQyx3QkFBZjtBQUFBLGlDQUNFO0FBQUssZUFBRyxFQUFDLDZCQUFUO0FBQXVDLGVBQUcsRUFBQztBQUEzQztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFWRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFKRixlQWtCRTtBQUFLLGlCQUFTLEVBQUMsUUFBZjtBQUFBLGtCQUF5QlA7QUFBekI7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQWxCRixlQW1CRTtBQUFLLGlCQUFTLEVBQUMsY0FBZjtBQUFBLCtCQUNFLHFFQUFDLGlFQUFEO0FBQ0UsY0FBSSxFQUFDLG1CQURQO0FBRUUsdUJBQWEsTUFGZjtBQUdFLG9CQUFVLEVBQUM7QUFIYjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQW5CRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUFERixlQTRCRTtBQUFLLGVBQVMsRUFBQywrQkFBZjtBQUFBLDhCQUNFO0FBQUssaUJBQVMsRUFBQyxRQUFmO0FBQUEsK0JBQ0U7QUFBSSxtQkFBUyxFQUFDLHNCQUFkO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQURGLGVBSUU7QUFBSyxpQkFBUyxFQUFDLGtCQUFmO0FBQUEsZ0NBQ0U7QUFBSyxtQkFBUyxFQUFDLHNCQUFmO0FBQUEsa0NBQ0U7QUFBSSxxQkFBUyxFQUFDLGtDQUFkO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLG1CQURGLGVBRUU7QUFBSyxxQkFBUyxFQUFDLG1CQUFmO0FBQUEsbUNBQ0U7QUFBTSx1QkFBUyxFQUFDLHdCQUFoQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUEsbUJBRkY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQURGLGVBVUU7QUFBSyxtQkFBUyxFQUFDLHdCQUFmO0FBQUEsaUNBQ0U7QUFBSyxlQUFHLEVBQUMsNkJBQVQ7QUFBdUMsZUFBRyxFQUFDO0FBQTNDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQVZGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQUpGLGVBa0JFO0FBQUssaUJBQVMsRUFBQyxRQUFmO0FBQUEsK0JBQ0UscUVBQUMsa0RBQUQsa0NBQVlILGNBQVo7QUFBQSxvQkFBNkJXO0FBQTdCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBbEJGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQTVCRjtBQUFBLGtCQURGO0FBcURELENBOUdEOztHQUFNcEIsa0I7O0tBQUFBLGtCOztBQWdITixJQUFNcUIsZUFBZSxHQUFHLFNBQWxCQSxlQUFrQixDQUFDQyxLQUFEO0FBQUEsU0FBeUI7QUFDL0NyQixrQkFBYyxFQUFFcUIsS0FBSyxDQUFDQyxLQUFOLENBQVl0QjtBQURtQixHQUF6QjtBQUFBLENBQXhCOztBQUlldUIsMEhBQU8sQ0FBQ0gsZUFBRCxDQUFQLENBQXlCckIsa0JBQXpCLENBQWYiLCJmaWxlIjoiLi9zcmMvY29tcG9uZW50cy9Ib21lL0hvbWVDb21wb25lbnRzL1VucmVhZE1lc3NhZ2VzQ2FyZC50c3guanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUsIHVzZUVmZmVjdCB9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IEdldEhpcmVkQ2FyZCBmcm9tIFwiQC9jb21wb25lbnRzL0dsb2JhbC9HZXRIaXJlZENhcmRcIjtcbmltcG9ydCBVbnJlYWRNZXNzYWdlIGZyb20gXCJAL2NvbXBvbmVudHMvSG9tZS9Ib21lQ29tcG9uZW50cy9VbnJlYWRNZXNzYWdlXCI7XG5pbXBvcnQgQnV0dG9uIGZyb20gXCJAL2NvbXBvbmVudHMvR2xvYmFsL0J1dHRvblwiO1xuaW1wb3J0IHsgY29ubmVjdCB9IGZyb20gXCJyZWFjdC1yZWR1eFwiO1xuaW1wb3J0IFNsaWRlciBmcm9tIFwicmVhY3Qtc2xpY2tcIjtcblxuaW50ZXJmYWNlIFVucmVhZE1lc3NhZ2VJbnRlcmZhY2Uge1xuICBpZD86IG51bWJlciB8IHN0cmluZztcbiAgcHJvZmlsZV9pbWc/OiBzdHJpbmc7XG4gIHVzZXJuYW1lPzogc3RyaW5nO1xuICBkZWxpdmVyZWRUaW1lPzogc3RyaW5nO1xuICB1bnJlYWRNc2c/OiBzdHJpbmc7XG59XG5cbmludGVyZmFjZSBDUEZyb21SZWR1eCB7XG4gIHN0b3JlOiB7XG4gICAgdW5yZWFkTWVzc2FnZXM6IFVucmVhZE1lc3NhZ2VJbnRlcmZhY2VbXTtcbiAgfTtcbn1cblxudHlwZSBQcm9wcyA9IHtcbiAgdW5yZWFkTWVzc2FnZXM6IFVucmVhZE1lc3NhZ2VJbnRlcmZhY2VbXTtcbn07XG5cbmNvbnN0IFVucmVhZE1lc3NhZ2VzQ2FyZDogUmVhY3QuRkM8UHJvcHM+ID0gKHsgdW5yZWFkTWVzc2FnZXMgfSkgPT4ge1xuICBjb25zdCBbc2xpZGVyU2V0dGluZ3MsIHNldFNsaWRlclNldHRpbmdzXSA9IHVzZVN0YXRlPG9iamVjdD4oe1xuICAgIGRvdHM6IHRydWUsXG4gICAgaW5maW5pdGU6IHRydWUsXG4gICAgc3BlZWQ6IDUwMCxcbiAgICBzbGlkZXNUb1Nob3c6IDEsXG4gICAgc2xpZGVzVG9TY3JvbGw6IDEsXG4gICAgZG90c0NsYXNzOiBcImxhdGVzdC1vcHRzLWRvdHNcIixcbiAgfSk7XG5cbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBzZXRTbGlkZXJTZXR0aW5ncyhzbGlkZXJTZXR0aW5ncyk7XG4gIH0sIFtdKTtcblxuICBjb25zdCByZW5kZXJVbnJlYWRNZXNzYWdlcyA9IHVucmVhZE1lc3NhZ2VzLm1hcChcbiAgICAobXNnOiBVbnJlYWRNZXNzYWdlSW50ZXJmYWNlKSA9PiB7XG4gICAgICByZXR1cm4gKFxuICAgICAgICA8UmVhY3QuRnJhZ21lbnQga2V5PXttc2cuaWR9PlxuICAgICAgICAgIDxVbnJlYWRNZXNzYWdlXG4gICAgICAgICAgICBwcm9maWxlX2ltZz17bXNnLnByb2ZpbGVfaW1nfVxuICAgICAgICAgICAgdXNlcm5hbWU9e21zZy51c2VybmFtZX1cbiAgICAgICAgICAgIGRlbGl2ZXJlZFRpbWU9e21zZy5kZWxpdmVyZWRUaW1lfVxuICAgICAgICAgICAgdW5yZWFkTXNnPXttc2cudW5yZWFkTXNnfVxuICAgICAgICAgIC8+XG4gICAgICAgIDwvUmVhY3QuRnJhZ21lbnQ+XG4gICAgICApO1xuICAgIH1cbiAgKTtcblxuICBjb25zdCB1bnJlYWRNZXNzYWdlc01vYiA9IHVucmVhZE1lc3NhZ2VzLm1hcChcbiAgICAobXNnOiBVbnJlYWRNZXNzYWdlSW50ZXJmYWNlKSA9PiB7XG4gICAgICByZXR1cm4gKFxuICAgICAgICA8ZGl2IGtleT17bXNnLmlkfSBjbGFzc05hbWU9XCJwLTJcIj5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggZmxleC13cmFwIGJnLXdoaXRlIHAtM1wiPlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ3LWZ1bGwgZmxleCBpdGVtcy1jZW50ZXIgbXktM1wiPlxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInctNyBoLTcgcm91bmRlZC1mdWxsXCI+XG4gICAgICAgICAgICAgICAgPGltZ1xuICAgICAgICAgICAgICAgICAgc3JjPXttc2cucHJvZmlsZV9pbWd9XG4gICAgICAgICAgICAgICAgICBhbHQ9XCJcIlxuICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwidy03IGgtNyByb3VuZGVkLWZ1bGxcIlxuICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICA8aDEgY2xhc3NOYW1lPVwidGV4LXRpdGxlc1wiPnttc2cudXNlcm5hbWV9PC9oMT5cbiAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwianVzdGlmeS1zZWxmLWVuZCB0ZXh0LXNlY29uZGFyeSB0ZXh0LXhzc1wiPlxuICAgICAgICAgICAgICAgIHttc2cuZGVsaXZlcmVkVGltZX1cbiAgICAgICAgICAgICAgPC9wPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInctZnVsbCBmbGV4IGl0ZW1zLWNlbnRlciBteS0zXCI+XG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidy0yIGgtMiBiZy1wcmltYXJ5XCI+PC9kaXY+XG4gICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cInRleHQtdGl0bGVzIHRleHQtc21cIj57bXNnLnVucmVhZE1zZ308L3A+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgICApO1xuICAgIH1cbiAgKTtcblxuICByZXR1cm4gKFxuICAgIDw+XG4gICAgICA8R2V0SGlyZWRDYXJkXG4gICAgICAgIGNhcmRUaXRsZT1cIlVucmVhZCBNZXNzYWdlc1wiXG4gICAgICAgIGNsYXNzTmFtZXM9XCJtYi02IGxnOmJsb2NrIGhpZGRlblwiXG4gICAgICA+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidy1mdWxsIGZsZXggbXktNFwiPlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidy00LzUgZmxleCBpdGVtcy1lbmRcIj5cbiAgICAgICAgICAgIDxoMSBjbGFzc05hbWU9XCJ0ZXh0LTN4bCB0ZXh0LXByaW1hcnkgLW1iLTEgbXItM1wiPjY8L2gxPlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGl0ZW1zLWNlbnRlciBtbC0zXCI+XG4gICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cInRleHQteHMgdGV4dC1zZWNvbmRhcnlcIj5cbiAgICAgICAgICAgICAgICBJdCB0YWtlcyAyLTMgaG91cnMgb24gYXZlcmFnZSBmcm9tIENhbmRpZGF0ZSB0byBhc253ZXIgc2luY2VcbiAgICAgICAgICAgICAgICBBY2NlcHQuXG4gICAgICAgICAgICAgIDwvc3Bhbj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidy0xLzUgZmxleCBqdXN0aWZ5LWVuZFwiPlxuICAgICAgICAgICAgPGltZyBzcmM9XCIvaW1nL2ljb25zL21lc3NhZ2UtaWNvbi5zdmdcIiBhbHQ9XCJcIiAvPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ3LWZ1bGxcIj57cmVuZGVyVW5yZWFkTWVzc2FnZXN9PC9kaXY+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidy1mdWxsIC1tYi0xXCI+XG4gICAgICAgICAgPEJ1dHRvblxuICAgICAgICAgICAgdGV4dD1cIlNob3cgQWxsIE1lc3NhZ2VzXCJcbiAgICAgICAgICAgIGlzVHJhbnNwYXJlbnRcbiAgICAgICAgICAgIGNsYXNzTmFtZXM9XCJ0ZXh0LXByaW1hcnkgaC0wIG10LTMgLW1iLTYgcC0wXCJcbiAgICAgICAgICAvPlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvR2V0SGlyZWRDYXJkPlxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJsZzpoaWRkZW4gZmxleCBmbGV4LXdyYXAgbXktNVwiPlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInctZnVsbFwiPlxuICAgICAgICAgIDxoMSBjbGFzc05hbWU9XCJ0ZXh0LXRpdGxlcyB0ZXh0LTF4bFwiPlVucmVhZCBNZXNzYWdlczwvaDE+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInctZnVsbCBmbGV4IG15LTVcIj5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInctNC81IGZsZXggaXRlbXMtZW5kXCI+XG4gICAgICAgICAgICA8aDEgY2xhc3NOYW1lPVwidGV4dC0zeGwgdGV4dC1wcmltYXJ5IC1tYi0xIG1yLTNcIj42PC9oMT5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBpdGVtcy1jZW50ZXJcIj5cbiAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwidGV4dC14cyB0ZXh0LXNlY29uZGFyeVwiPlxuICAgICAgICAgICAgICAgIEl0IHRha2VzIDItMyBob3VycyBvbiBhdmVyYWdlIGZyb20gQ2FuZGlkYXRlIHRvIGFzbndlciBzaW5jZVxuICAgICAgICAgICAgICAgIEFjY2VwdC5cbiAgICAgICAgICAgICAgPC9zcGFuPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ3LTEvNSBmbGV4IGp1c3RpZnktZW5kXCI+XG4gICAgICAgICAgICA8aW1nIHNyYz1cIi9pbWcvaWNvbnMvbWVzc2FnZS1pY29uLnN2Z1wiIGFsdD1cIlwiIC8+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInctZnVsbFwiPlxuICAgICAgICAgIDxTbGlkZXIgey4uLnNsaWRlclNldHRpbmdzfT57dW5yZWFkTWVzc2FnZXNNb2J9PC9TbGlkZXI+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9kaXY+XG4gICAgPC8+XG4gICk7XG59O1xuXG5jb25zdCBtYXBTdGF0ZVRvUHJvcHMgPSAoc3RhdGU6IENQRnJvbVJlZHV4KSA9PiAoe1xuICB1bnJlYWRNZXNzYWdlczogc3RhdGUuc3RvcmUudW5yZWFkTWVzc2FnZXMsXG59KTtcblxuZXhwb3J0IGRlZmF1bHQgY29ubmVjdChtYXBTdGF0ZVRvUHJvcHMpKFVucmVhZE1lc3NhZ2VzQ2FyZCk7XG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/components/Home/HomeComponents/UnreadMessagesCard.tsx\n");

/***/ })

})
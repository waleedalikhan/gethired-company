webpackHotUpdate_N_E("pages/index",{

/***/ "./src/components/Home/HomeComponents/UnreadMessagesCard.tsx":
/*!*******************************************************************!*\
  !*** ./src/components/Home/HomeComponents/UnreadMessagesCard.tsx ***!
  \*******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _components_Global_GetHiredCard__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/components/Global/GetHiredCard */ \"./src/components/Global/GetHiredCard.tsx\");\n/* harmony import */ var _components_Home_HomeComponents_UnreadMessage__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/components/Home/HomeComponents/UnreadMessage */ \"./src/components/Home/HomeComponents/UnreadMessage.tsx\");\n/* harmony import */ var _components_Global_Button__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @/components/Global/Button */ \"./src/components/Global/Button.tsx\");\n/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-redux */ \"./node_modules/react-redux/es/index.js\");\n\n\n\nvar _jsxFileName = \"/Users/waleed/iwork/jobs/upwork/Matthew/gethired-company/src/components/Home/HomeComponents/UnreadMessagesCard.tsx\",\n    _this = undefined,\n    _s = $RefreshSig$();\n\n\n\n\n\n\n\nvar UnreadMessagesCard = function UnreadMessagesCard(_ref) {\n  _s();\n\n  var unreadMessages = _ref.unreadMessages;\n\n  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useState\"])({\n    dots: true,\n    infinite: true,\n    speed: 500,\n    slidesToShow: 1,\n    slidesToScroll: 1,\n    dotsClass: \"latest-opts-dots\"\n  }),\n      sliderSettings = _useState[0],\n      setSliderSettings = _useState[1];\n\n  Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useEffect\"])(function () {\n    setSliderSettings(sliderSettings);\n  }, []);\n  var renderUnreadMessages = unreadMessages.map(function (msg) {\n    return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(react__WEBPACK_IMPORTED_MODULE_1___default.a.Fragment, {\n      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_components_Home_HomeComponents_UnreadMessage__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n        profile_img: msg.profile_img,\n        username: msg.username,\n        deliveredTime: msg.deliveredTime,\n        unreadMsg: msg.unreadMsg\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 43,\n        columnNumber: 11\n      }, _this)\n    }, msg.id, false, {\n      fileName: _jsxFileName,\n      lineNumber: 42,\n      columnNumber: 9\n    }, _this);\n  });\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"Fragment\"], {\n    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_components_Global_GetHiredCard__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n      cardTitle: \"Unread Messages\",\n      classNames: \"mb-6 lg:block hidden\",\n      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n        className: \"w-full flex my-4\",\n        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n          className: \"w-4/5 flex items-end\",\n          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"h1\", {\n            className: \"text-3xl text-primary -mb-1 mr-3\",\n            children: \"6\"\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 62,\n            columnNumber: 13\n          }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n            className: \"flex items-center ml-3\",\n            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"span\", {\n              className: \"text-xs text-secondary\",\n              children: \"It takes 2-3 hours on average from Candidate to asnwer since Accept.\"\n            }, void 0, false, {\n              fileName: _jsxFileName,\n              lineNumber: 64,\n              columnNumber: 15\n            }, _this)\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 63,\n            columnNumber: 13\n          }, _this)]\n        }, void 0, true, {\n          fileName: _jsxFileName,\n          lineNumber: 61,\n          columnNumber: 11\n        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n          className: \"w-1/5 flex justify-end\",\n          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"img\", {\n            src: \"/img/icons/message-icon.svg\",\n            alt: \"\"\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 71,\n            columnNumber: 13\n          }, _this)\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 70,\n          columnNumber: 11\n        }, _this)]\n      }, void 0, true, {\n        fileName: _jsxFileName,\n        lineNumber: 60,\n        columnNumber: 9\n      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n        className: \"w-full\",\n        children: renderUnreadMessages\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 74,\n        columnNumber: 9\n      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n        className: \"w-full -mb-1\",\n        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_components_Global_Button__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n          text: \"Show All Messages\",\n          isTransparent: true,\n          classNames: \"text-primary h-0 mt-3 -mb-6 p-0\"\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 76,\n          columnNumber: 11\n        }, _this)\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 75,\n        columnNumber: 9\n      }, _this)]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 56,\n      columnNumber: 7\n    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n      className: \"lg:hidden flex flex-wrap my-5\",\n      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n        className: \"w-full\",\n        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"h1\", {\n          className: \"text-titles text-1xl\",\n          children: \"Unread Messages\"\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 85,\n          columnNumber: 11\n        }, _this)\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 84,\n        columnNumber: 9\n      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n        className: \"w-full flex my-5\",\n        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n          className: \"w-4/5 flex items-end\",\n          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"h1\", {\n            className: \"text-3xl text-primary -mb-1 mr-3\",\n            children: \"6\"\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 89,\n            columnNumber: 13\n          }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n            className: \"flex items-center\",\n            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"span\", {\n              className: \"text-xs text-secondary\",\n              children: \"It takes 2-3 hours on average from Candidate to asnwer since Accept.\"\n            }, void 0, false, {\n              fileName: _jsxFileName,\n              lineNumber: 91,\n              columnNumber: 15\n            }, _this)\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 90,\n            columnNumber: 13\n          }, _this)]\n        }, void 0, true, {\n          fileName: _jsxFileName,\n          lineNumber: 88,\n          columnNumber: 11\n        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n          className: \"w-1/5 flex justify-end\",\n          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"img\", {\n            src: \"/img/icons/message-icon.svg\",\n            alt: \"\"\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 98,\n            columnNumber: 13\n          }, _this)\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 97,\n          columnNumber: 11\n        }, _this)]\n      }, void 0, true, {\n        fileName: _jsxFileName,\n        lineNumber: 87,\n        columnNumber: 9\n      }, _this)]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 83,\n      columnNumber: 7\n    }, _this)]\n  }, void 0, true);\n};\n\n_s(UnreadMessagesCard, \"QOHUMZvt1cTX5HKRr9KUWSvA/yU=\");\n\n_c = UnreadMessagesCard;\n\nvar mapStateToProps = function mapStateToProps(state) {\n  return {\n    unreadMessages: state.store.unreadMessages\n  };\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Object(react_redux__WEBPACK_IMPORTED_MODULE_5__[\"connect\"])(mapStateToProps)(UnreadMessagesCard));\n\nvar _c;\n\n$RefreshReg$(_c, \"UnreadMessagesCard\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../../node_modules/next/dist/compiled/webpack/harmony-module.js */ \"./node_modules/next/dist/compiled/webpack/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbXBvbmVudHMvSG9tZS9Ib21lQ29tcG9uZW50cy9VbnJlYWRNZXNzYWdlc0NhcmQudHN4P2RjYmQiXSwibmFtZXMiOlsiVW5yZWFkTWVzc2FnZXNDYXJkIiwidW5yZWFkTWVzc2FnZXMiLCJ1c2VTdGF0ZSIsImRvdHMiLCJpbmZpbml0ZSIsInNwZWVkIiwic2xpZGVzVG9TaG93Iiwic2xpZGVzVG9TY3JvbGwiLCJkb3RzQ2xhc3MiLCJzbGlkZXJTZXR0aW5ncyIsInNldFNsaWRlclNldHRpbmdzIiwidXNlRWZmZWN0IiwicmVuZGVyVW5yZWFkTWVzc2FnZXMiLCJtYXAiLCJtc2ciLCJwcm9maWxlX2ltZyIsInVzZXJuYW1lIiwiZGVsaXZlcmVkVGltZSIsInVucmVhZE1zZyIsImlkIiwibWFwU3RhdGVUb1Byb3BzIiwic3RhdGUiLCJzdG9yZSIsImNvbm5lY3QiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQW9CQSxJQUFNQSxrQkFBbUMsR0FBRyxTQUF0Q0Esa0JBQXNDLE9BQXdCO0FBQUE7O0FBQUEsTUFBckJDLGNBQXFCLFFBQXJCQSxjQUFxQjs7QUFBQSxrQkFDdEJDLHNEQUFRLENBQVM7QUFDM0RDLFFBQUksRUFBRSxJQURxRDtBQUUzREMsWUFBUSxFQUFFLElBRmlEO0FBRzNEQyxTQUFLLEVBQUUsR0FIb0Q7QUFJM0RDLGdCQUFZLEVBQUUsQ0FKNkM7QUFLM0RDLGtCQUFjLEVBQUUsQ0FMMkM7QUFNM0RDLGFBQVMsRUFBRTtBQU5nRCxHQUFULENBRGM7QUFBQSxNQUMzREMsY0FEMkQ7QUFBQSxNQUMzQ0MsaUJBRDJDOztBQVVsRUMseURBQVMsQ0FBQyxZQUFNO0FBQ2RELHFCQUFpQixDQUFDRCxjQUFELENBQWpCO0FBQ0QsR0FGUSxFQUVOLEVBRk0sQ0FBVDtBQUlBLE1BQU1HLG9CQUFvQixHQUFHWCxjQUFjLENBQUNZLEdBQWYsQ0FDM0IsVUFBQ0Ms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O0FBQUEsU0FBeUI7QUFDL0NwQixrQkFBYyxFQUFFb0IsS0FBSyxDQUFDQyxLQUFOLENBQVlyQjtBQURtQixHQUF6QjtBQUFBLENBQXhCOztBQUllc0IsMEhBQU8sQ0FBQ0gsZUFBRCxDQUFQLENBQXlCcEIsa0JBQXpCLENBQWYiLCJmaWxlIjoiLi9zcmMvY29tcG9uZW50cy9Ib21lL0hvbWVDb21wb25lbnRzL1VucmVhZE1lc3NhZ2VzQ2FyZC50c3guanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUsIHVzZUVmZmVjdCB9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IEdldEhpcmVkQ2FyZCBmcm9tIFwiQC9jb21wb25lbnRzL0dsb2JhbC9HZXRIaXJlZENhcmRcIjtcbmltcG9ydCBVbnJlYWRNZXNzYWdlIGZyb20gXCJAL2NvbXBvbmVudHMvSG9tZS9Ib21lQ29tcG9uZW50cy9VbnJlYWRNZXNzYWdlXCI7XG5pbXBvcnQgQnV0dG9uIGZyb20gXCJAL2NvbXBvbmVudHMvR2xvYmFsL0J1dHRvblwiO1xuaW1wb3J0IHsgY29ubmVjdCB9IGZyb20gXCJyZWFjdC1yZWR1eFwiO1xuXG5pbnRlcmZhY2UgVW5yZWFkTWVzc2FnZUludGVyZmFjZSB7XG4gIGlkPzogbnVtYmVyIHwgc3RyaW5nO1xuICBwcm9maWxlX2ltZz86IHN0cmluZztcbiAgdXNlcm5hbWU/OiBzdHJpbmc7XG4gIGRlbGl2ZXJlZFRpbWU/OiBzdHJpbmc7XG4gIHVucmVhZE1zZz86IHN0cmluZztcbn1cblxuaW50ZXJmYWNlIENQRnJvbVJlZHV4IHtcbiAgc3RvcmU6IHtcbiAgICB1bnJlYWRNZXNzYWdlczogVW5yZWFkTWVzc2FnZUludGVyZmFjZVtdO1xuICB9O1xufVxuXG50eXBlIFByb3BzID0ge1xuICB1bnJlYWRNZXNzYWdlczogVW5yZWFkTWVzc2FnZUludGVyZmFjZVtdO1xufTtcblxuY29uc3QgVW5yZWFkTWVzc2FnZXNDYXJkOiBSZWFjdC5GQzxQcm9wcz4gPSAoeyB1bnJlYWRNZXNzYWdlcyB9KSA9PiB7XG4gIGNvbnN0IFtzbGlkZXJTZXR0aW5ncywgc2V0U2xpZGVyU2V0dGluZ3NdID0gdXNlU3RhdGU8b2JqZWN0Pih7XG4gICAgZG90czogdHJ1ZSxcbiAgICBpbmZpbml0ZTogdHJ1ZSxcbiAgICBzcGVlZDogNTAwLFxuICAgIHNsaWRlc1RvU2hvdzogMSxcbiAgICBzbGlkZXNUb1Njcm9sbDogMSxcbiAgICBkb3RzQ2xhc3M6IFwibGF0ZXN0LW9wdHMtZG90c1wiLFxuICB9KTtcblxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIHNldFNsaWRlclNldHRpbmdzKHNsaWRlclNldHRpbmdzKTtcbiAgfSwgW10pO1xuXG4gIGNvbnN0IHJlbmRlclVucmVhZE1lc3NhZ2VzID0gdW5yZWFkTWVzc2FnZXMubWFwKFxuICAgIChtc2c6IFVucmVhZE1lc3NhZ2VJbnRlcmZhY2UpID0+IHtcbiAgICAgIHJldHVybiAoXG4gICAgICAgIDxSZWFjdC5GcmFnbWVudCBrZXk9e21zZy5pZH0+XG4gICAgICAgICAgPFVucmVhZE1lc3NhZ2VcbiAgICAgICAgICAgIHByb2ZpbGVfaW1nPXttc2cucHJvZmlsZV9pbWd9XG4gICAgICAgICAgICB1c2VybmFtZT17bXNnLnVzZXJuYW1lfVxuICAgICAgICAgICAgZGVsaXZlcmVkVGltZT17bXNnLmRlbGl2ZXJlZFRpbWV9XG4gICAgICAgICAgICB1bnJlYWRNc2c9e21zZy51bnJlYWRNc2d9XG4gICAgICAgICAgLz5cbiAgICAgICAgPC9SZWFjdC5GcmFnbWVudD5cbiAgICAgICk7XG4gICAgfVxuICApO1xuXG4gIHJldHVybiAoXG4gICAgPD5cbiAgICAgIDxHZXRIaXJlZENhcmRcbiAgICAgICAgY2FyZFRpdGxlPVwiVW5yZWFkIE1lc3NhZ2VzXCJcbiAgICAgICAgY2xhc3NOYW1lcz1cIm1iLTYgbGc6YmxvY2sgaGlkZGVuXCJcbiAgICAgID5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ3LWZ1bGwgZmxleCBteS00XCI+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ3LTQvNSBmbGV4IGl0ZW1zLWVuZFwiPlxuICAgICAgICAgICAgPGgxIGNsYXNzTmFtZT1cInRleHQtM3hsIHRleHQtcHJpbWFyeSAtbWItMSBtci0zXCI+NjwvaDE+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggaXRlbXMtY2VudGVyIG1sLTNcIj5cbiAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwidGV4dC14cyB0ZXh0LXNlY29uZGFyeVwiPlxuICAgICAgICAgICAgICAgIEl0IHRha2VzIDItMyBob3VycyBvbiBhdmVyYWdlIGZyb20gQ2FuZGlkYXRlIHRvIGFzbndlciBzaW5jZVxuICAgICAgICAgICAgICAgIEFjY2VwdC5cbiAgICAgICAgICAgICAgPC9zcGFuPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ3LTEvNSBmbGV4IGp1c3RpZnktZW5kXCI+XG4gICAgICAgICAgICA8aW1nIHNyYz1cIi9pbWcvaWNvbnMvbWVzc2FnZS1pY29uLnN2Z1wiIGFsdD1cIlwiIC8+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInctZnVsbFwiPntyZW5kZXJVbnJlYWRNZXNzYWdlc308L2Rpdj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ3LWZ1bGwgLW1iLTFcIj5cbiAgICAgICAgICA8QnV0dG9uXG4gICAgICAgICAgICB0ZXh0PVwiU2hvdyBBbGwgTWVzc2FnZXNcIlxuICAgICAgICAgICAgaXNUcmFuc3BhcmVudFxuICAgICAgICAgICAgY2xhc3NOYW1lcz1cInRleHQtcHJpbWFyeSBoLTAgbXQtMyAtbWItNiBwLTBcIlxuICAgICAgICAgIC8+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9HZXRIaXJlZENhcmQ+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImxnOmhpZGRlbiBmbGV4IGZsZXgtd3JhcCBteS01XCI+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidy1mdWxsXCI+XG4gICAgICAgICAgPGgxIGNsYXNzTmFtZT1cInRleHQtdGl0bGVzIHRleHQtMXhsXCI+VW5yZWFkIE1lc3NhZ2VzPC9oMT5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidy1mdWxsIGZsZXggbXktNVwiPlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidy00LzUgZmxleCBpdGVtcy1lbmRcIj5cbiAgICAgICAgICAgIDxoMSBjbGFzc05hbWU9XCJ0ZXh0LTN4bCB0ZXh0LXByaW1hcnkgLW1iLTEgbXItM1wiPjY8L2gxPlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGl0ZW1zLWNlbnRlclwiPlxuICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJ0ZXh0LXhzIHRleHQtc2Vjb25kYXJ5XCI+XG4gICAgICAgICAgICAgICAgSXQgdGFrZXMgMi0zIGhvdXJzIG9uIGF2ZXJhZ2UgZnJvbSBDYW5kaWRhdGUgdG8gYXNud2VyIHNpbmNlXG4gICAgICAgICAgICAgICAgQWNjZXB0LlxuICAgICAgICAgICAgICA8L3NwYW4+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInctMS81IGZsZXgganVzdGlmeS1lbmRcIj5cbiAgICAgICAgICAgIDxpbWcgc3JjPVwiL2ltZy9pY29ucy9tZXNzYWdlLWljb24uc3ZnXCIgYWx0PVwiXCIgLz5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L2Rpdj5cbiAgICA8Lz5cbiAgKTtcbn07XG5cbmNvbnN0IG1hcFN0YXRlVG9Qcm9wcyA9IChzdGF0ZTogQ1BGcm9tUmVkdXgpID0+ICh7XG4gIHVucmVhZE1lc3NhZ2VzOiBzdGF0ZS5zdG9yZS51bnJlYWRNZXNzYWdlcyxcbn0pO1xuXG5leHBvcnQgZGVmYXVsdCBjb25uZWN0KG1hcFN0YXRlVG9Qcm9wcykoVW5yZWFkTWVzc2FnZXNDYXJkKTtcbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/components/Home/HomeComponents/UnreadMessagesCard.tsx\n");

/***/ })

})
webpackHotUpdate_N_E("pages/profile",{

/***/ "./src/components/Global/Header.tsx":
/*!******************************************!*\
  !*** ./src/components/Global/Header.tsx ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _components_Global_ActiveLink__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/components/Global/ActiveLink */ \"./src/components/Global/ActiveLink.tsx\");\n/* harmony import */ var _components_Global_HeaderDropDown__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/components/Global/HeaderDropDown */ \"./src/components/Global/HeaderDropDown.tsx\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! next/link */ \"./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _components_Global_NotificationDropdown__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @/components/Global/NotificationDropdown */ \"./src/components/Global/NotificationDropdown.tsx\");\n\n\nvar _jsxFileName = \"/Users/waleed/iwork/jobs/upwork/Matthew/gethired-company/src/components/Global/Header.tsx\",\n    _this = undefined,\n    _s = $RefreshSig$();\n\n\n\n\n\n\n\nvar Header = function Header() {\n  _s();\n\n  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useState\"])([{\n    id: 1,\n    path: \"/\",\n    activeClass: \"active-link\",\n    linkText: \"Home\"\n  }, {\n    id: 2,\n    path: \"/talents\",\n    activeClass: \"active-link\",\n    linkText: \"Talents\"\n  }, {\n    id: 3,\n    path: \"/messages\",\n    activeClass: \"active-link\",\n    linkText: \"Messages\"\n  }, {\n    id: 4,\n    path: \"/opportunities\",\n    activeClass: \"active-link\",\n    linkText: \"Opportunities\"\n  }, {\n    id: 5,\n    path: \"/profile\",\n    activeClass: \"active-link\",\n    linkText: \"Profile\"\n  }, {\n    id: 6,\n    path: \"/team\",\n    activeClass: \"active-link\",\n    linkText: \"Team\"\n  }]),\n      headerLinks = _useState[0],\n      setHeaderLinks = _useState[1];\n\n  var headerLink = headerLinks.map(function (link) {\n    return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(react__WEBPACK_IMPORTED_MODULE_1___default.a.Fragment, {\n      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_components_Global_ActiveLink__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n        href: link.path,\n        activeLinkClass: link.activeClass,\n        linkText: link.linkText\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 57,\n        columnNumber: 9\n      }, _this)\n    }, link.id, false, {\n      fileName: _jsxFileName,\n      lineNumber: 56,\n      columnNumber: 7\n    }, _this);\n  });\n  Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useEffect\"])(function () {\n    setHeaderLinks(headerLinks);\n  }, []);\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(react__WEBPACK_IMPORTED_MODULE_1___default.a.Fragment, {\n    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"header\", {\n      id: \"app-header\",\n      className: \"w-full md:px-6 pl-6 fixed top-0 py-0 border-b border-secondary-elements bg-white\",\n      style: {\n        zIndex: 99999999999999\n      },\n      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n        className: \"lg:hidden flex items-center py-4 pr-6\",\n        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n          className: \"w-1/3\",\n          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(next_link__WEBPACK_IMPORTED_MODULE_4___default.a, {\n            href: \"/\",\n            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"img\", {\n              src: \"/img/logo.svg\",\n              alt: \"\",\n              className: \"cursor-pointer\"\n            }, void 0, false, {\n              fileName: _jsxFileName,\n              lineNumber: 81,\n              columnNumber: 15\n            }, _this)\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 80,\n            columnNumber: 13\n          }, _this)\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 79,\n          columnNumber: 11\n        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n          className: \"w-2/3 text-right flex items-center justify-end\",\n          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_components_Global_NotificationDropdown__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {}, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 85,\n            columnNumber: 13\n          }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"button\", {\n            className: \"bg-transparent outline-none focus:outline-none\",\n            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"img\", {\n              src: \"/img/icons/hamburger-icon.svg\",\n              alt: \"\"\n            }, void 0, false, {\n              fileName: _jsxFileName,\n              lineNumber: 87,\n              columnNumber: 15\n            }, _this)\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 86,\n            columnNumber: 13\n          }, _this)]\n        }, void 0, true, {\n          fileName: _jsxFileName,\n          lineNumber: 84,\n          columnNumber: 11\n        }, _this)]\n      }, void 0, true, {\n        fileName: _jsxFileName,\n        lineNumber: 78,\n        columnNumber: 9\n      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n        className: \"lg:flex items-center hidden\",\n        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n          className: \"w-1/5\",\n          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(next_link__WEBPACK_IMPORTED_MODULE_4___default.a, {\n            href: \"/\",\n            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"img\", {\n              src: \"/img/logo.svg\",\n              alt: \"\",\n              className: \"cursor-pointer\"\n            }, void 0, false, {\n              fileName: _jsxFileName,\n              lineNumber: 94,\n              columnNumber: 15\n            }, _this)\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 93,\n            columnNumber: 13\n          }, _this)\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 92,\n          columnNumber: 11\n        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n          className: \"w-3/5 text-center\",\n          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"ul\", {\n            className: \"flex justify-center\",\n            children: headerLink\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 98,\n            columnNumber: 13\n          }, _this)\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 97,\n          columnNumber: 11\n        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n          className: \"w-1/5 flex items-center justify-end\",\n          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_components_Global_NotificationDropdown__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {}, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 101,\n            columnNumber: 13\n          }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_components_Global_HeaderDropDown__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {}, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 102,\n            columnNumber: 13\n          }, _this)]\n        }, void 0, true, {\n          fileName: _jsxFileName,\n          lineNumber: 100,\n          columnNumber: 11\n        }, _this)]\n      }, void 0, true, {\n        fileName: _jsxFileName,\n        lineNumber: 91,\n        columnNumber: 9\n      }, _this)]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 73,\n      columnNumber: 7\n    }, _this)\n  }, void 0, false, {\n    fileName: _jsxFileName,\n    lineNumber: 71,\n    columnNumber: 5\n  }, _this);\n};\n\n_s(Header, \"qvHXzlobdnUuJNPTk2Y1ACVqg5I=\");\n\n_c = Header;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Header);\n\nvar _c;\n\n$RefreshReg$(_c, \"Header\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../node_modules/next/dist/compiled/webpack/harmony-module.js */ \"./node_modules/next/dist/compiled/webpack/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbXBvbmVudHMvR2xvYmFsL0hlYWRlci50c3g/NzkxMiJdLCJuYW1lcyI6WyJIZWFkZXIiLCJ1c2VTdGF0ZSIsImlkIiwicGF0aCIsImFjdGl2ZUNsYXNzIiwibGlua1RleHQiLCJoZWFkZXJMaW5rcyIsInNldEhlYWRlckxpbmtzIiwiaGVhZGVyTGluayIsIm1hcCIsImxpbmsiLCJ1c2VFZmZlY3QiLCJ6SW5kZXgiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQVNBLElBQU1BLE1BQWdCLEdBQUcsU0FBbkJBLE1BQW1CLEdBQU07QUFBQTs7QUFBQSxrQkFDU0Msc0RBQVEsQ0FBa0IsQ0FDOUQ7QUFDRUMsTUFBRSxFQUFFLENBRE47QUFFRUMsUUFBSSxFQUFFLEdBRlI7QUFHRUMsZUFBVyxFQUFFLGFBSGY7QUFJRUMsWUFBUSxFQUFFO0FBSlosR0FEOEQsRUFPOUQ7QUFDRUgsTUFBRSxFQUFFLENBRE47QUFFRUMsUUFBSSxFQUFFLFVBRlI7QUFHRUMsZUFBVyxFQUFFLGFBSGY7QUFJRUMsWUFBUSxFQUFFO0FBSlosR0FQOEQsRUFhOUQ7QUFDRUgsTUFBRSxFQUFFLENBRE47QUFFRUMsUUFBSSxFQUFFLFdBRlI7QUFHRUMsZUFBVyxFQUFFLGFBSGY7QUFJRUMsWUFBUSxFQUFFO0FBSlosR0FiOEQsRUFtQjlEO0FBQ0VILE1BQUUsRUFBRSxDQUROO0FBRUVDLFFBQUksRUFBRSxnQkFGUjtBQUdFQyxlQUFXLEVBQUUsYUFIZjtBQUlFQyxZQUFRLEVBQUU7QUFKWixHQW5COEQsRUF5QjlEO0FBQ0VILE1BQUUsRUFBRSxDQUROO0FBRUVDLFFBQUksRUFBRSxVQUZSO0FBR0VDLGVBQVcsRUFBRSxhQUhmO0FBSUVDLFlBQVEsRUFBRTtBQUpaLEdBekI4RCxFQStCOUQ7QUFDRUgsTUFBRSxFQUFFLENBRE47QUFFRUMsUUFBSSxFQUFFLE9BRlI7QUFHRUMsZUFBVyxFQUFF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IjoiLi9zcmMvY29tcG9uZW50cy9HbG9iYWwvSGVhZGVyLnRzeC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSwgdXNlRWZmZWN0IH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgQWN0aXZlTGluayBmcm9tIFwiQC9jb21wb25lbnRzL0dsb2JhbC9BY3RpdmVMaW5rXCI7XG5pbXBvcnQgSGVhZGVyRHJvcERvd24gZnJvbSBcIkAvY29tcG9uZW50cy9HbG9iYWwvSGVhZGVyRHJvcERvd25cIjtcbmltcG9ydCBMaW5rIGZyb20gXCJuZXh0L2xpbmtcIjtcbmltcG9ydCBOb3RpZmljYXRpb25Ecm9wZG93biBmcm9tIFwiQC9jb21wb25lbnRzL0dsb2JhbC9Ob3RpZmljYXRpb25Ecm9wZG93blwiO1xuXG5pbnRlcmZhY2UgTGlua3NUb1JlbmRlciB7XG4gIGlkOiBudW1iZXI7XG4gIHBhdGg6IHN0cmluZztcbiAgYWN0aXZlQ2xhc3M6IHN0cmluZztcbiAgbGlua1RleHQ6IHN0cmluZztcbn1cblxuY29uc3QgSGVhZGVyOiBSZWFjdC5GQyA9ICgpID0+IHtcbiAgY29uc3QgW2hlYWRlckxpbmtzLCBzZXRIZWFkZXJMaW5rc10gPSB1c2VTdGF0ZTxMaW5rc1RvUmVuZGVyW10+KFtcbiAgICB7XG4gICAgICBpZDogMSxcbiAgICAgIHBhdGg6IFwiL1wiLFxuICAgICAgYWN0aXZlQ2xhc3M6IFwiYWN0aXZlLWxpbmtcIixcbiAgICAgIGxpbmtUZXh0OiBcIkhvbWVcIixcbiAgICB9LFxuICAgIHtcbiAgICAgIGlkOiAyLFxuICAgICAgcGF0aDogXCIvdGFsZW50c1wiLFxuICAgICAgYWN0aXZlQ2xhc3M6IFwiYWN0aXZlLWxpbmtcIixcbiAgICAgIGxpbmtUZXh0OiBcIlRhbGVudHNcIixcbiAgICB9LFxuICAgIHtcbiAgICAgIGlkOiAzLFxuICAgICAgcGF0aDogXCIvbWVzc2FnZXNcIixcbiAgICAgIGFjdGl2ZUNsYXNzOiBcImFjdGl2ZS1saW5rXCIsXG4gICAgICBsaW5rVGV4dDogXCJNZXNzYWdlc1wiLFxuICAgIH0sXG4gICAge1xuICAgICAgaWQ6IDQsXG4gICAgICBwYXRoOiBcIi9vcHBvcnR1bml0aWVzXCIsXG4gICAgICBhY3RpdmVDbGFzczogXCJhY3RpdmUtbGlua1wiLFxuICAgICAgbGlua1RleHQ6IFwiT3Bwb3J0dW5pdGllc1wiLFxuICAgIH0sXG4gICAge1xuICAgICAgaWQ6IDUsXG4gICAgICBwYXRoOiBcIi9wcm9maWxlXCIsXG4gICAgICBhY3RpdmVDbGFzczogXCJhY3RpdmUtbGlua1wiLFxuICAgICAgbGlua1RleHQ6IFwiUHJvZmlsZVwiLFxuICAgIH0sXG4gICAge1xuICAgICAgaWQ6IDYsXG4gICAgICBwYXRoOiBcIi90ZWFtXCIsXG4gICAgICBhY3RpdmVDbGFzczogXCJhY3RpdmUtbGlua1wiLFxuICAgICAgbGlua1RleHQ6IFwiVGVhbVwiLFxuICAgIH0sXG4gIF0pO1xuXG4gIGxldCBoZWFkZXJMaW5rID0gaGVhZGVyTGlua3MubWFwKChsaW5rKSA9PiB7XG4gICAgcmV0dXJuIChcbiAgICAgIDxSZWFjdC5GcmFnbWVudCBrZXk9e2xpbmsuaWR9PlxuICAgICAgICA8QWN0aXZlTGlua1xuICAgICAgICAgIGhyZWY9e2xpbmsucGF0aH1cbiAgICAgICAgICBhY3RpdmVMaW5rQ2xhc3M9e2xpbmsuYWN0aXZlQ2xhc3N9XG4gICAgICAgICAgbGlua1RleHQ9e2xpbmsubGlua1RleHR9XG4gICAgICAgID48L0FjdGl2ZUxpbms+XG4gICAgICA8L1JlYWN0LkZyYWdtZW50PlxuICAgICk7XG4gIH0pO1xuXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgc2V0SGVhZGVyTGlua3MoaGVhZGVyTGlua3MpO1xuICB9LCBbXSk7XG5cbiAgcmV0dXJuIChcbiAgICA8UmVhY3QuRnJhZ21lbnQ+XG4gICAgICB7LyogSGVhZGVyICovfVxuICAgICAgPGhlYWRlclxuICAgICAgICBpZD1cImFwcC1oZWFkZXJcIlxuICAgICAgICBjbGFzc05hbWU9XCJ3LWZ1bGwgbWQ6cHgtNiBwbC02IGZpeGVkIHRvcC0wIHB5LTAgYm9yZGVyLWIgYm9yZGVyLXNlY29uZGFyeS1lbGVtZW50cyBiZy13aGl0ZVwiXG4gICAgICAgIHN0eWxlPXt7IHpJbmRleDogOTk5OTk5OTk5OTk5OTkgfX1cbiAgICAgID5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJsZzpoaWRkZW4gZmxleCBpdGVtcy1jZW50ZXIgcHktNCBwci02XCI+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ3LTEvM1wiPlxuICAgICAgICAgICAgPExpbmsgaHJlZj1cIi9cIj5cbiAgICAgICAgICAgICAgPGltZyBzcmM9XCIvaW1nL2xvZ28uc3ZnXCIgYWx0PVwiXCIgY2xhc3NOYW1lPVwiY3Vyc29yLXBvaW50ZXJcIiAvPlxuICAgICAgICAgICAgPC9MaW5rPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidy0yLzMgdGV4dC1yaWdodCBmbGV4IGl0ZW1zLWNlbnRlciBqdXN0aWZ5LWVuZFwiPlxuICAgICAgICAgICAgPE5vdGlmaWNhdGlvbkRyb3Bkb3duIC8+XG4gICAgICAgICAgICA8YnV0dG9uIGNsYXNzTmFtZT1cImJnLXRyYW5zcGFyZW50IG91dGxpbmUtbm9uZSBmb2N1czpvdXRsaW5lLW5vbmVcIj5cbiAgICAgICAgICAgICAgPGltZyBzcmM9XCIvaW1nL2ljb25zL2hhbWJ1cmdlci1pY29uLnN2Z1wiIGFsdD1cIlwiIC8+XG4gICAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibGc6ZmxleCBpdGVtcy1jZW50ZXIgaGlkZGVuXCI+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ3LTEvNVwiPlxuICAgICAgICAgICAgPExpbmsgaHJlZj1cIi9cIj5cbiAgICAgICAgICAgICAgPGltZyBzcmM9XCIvaW1nL2xvZ28uc3ZnXCIgYWx0PVwiXCIgY2xhc3NOYW1lPVwiY3Vyc29yLXBvaW50ZXJcIiAvPlxuICAgICAgICAgICAgPC9MaW5rPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidy0zLzUgdGV4dC1jZW50ZXJcIj5cbiAgICAgICAgICAgIDx1bCBjbGFzc05hbWU9XCJmbGV4IGp1c3RpZnktY2VudGVyXCI+e2hlYWRlckxpbmt9PC91bD5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInctMS81IGZsZXggaXRlbXMtY2VudGVyIGp1c3RpZnktZW5kXCI+XG4gICAgICAgICAgICA8Tm90aWZpY2F0aW9uRHJvcGRvd24gLz5cbiAgICAgICAgICAgIDxIZWFkZXJEcm9wRG93biAvPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvaGVhZGVyPlxuICAgICAgey8qIEhlYWRlciBlbmRzICovfVxuICAgIDwvUmVhY3QuRnJhZ21lbnQ+XG4gICk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBIZWFkZXI7XG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/components/Global/Header.tsx\n");

/***/ })

})
webpackHotUpdate_N_E("pages/profile",{

/***/ "./src/components/Global/Header.tsx":
/*!******************************************!*\
  !*** ./src/components/Global/Header.tsx ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _components_Global_ActiveLink__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/components/Global/ActiveLink */ \"./src/components/Global/ActiveLink.tsx\");\n/* harmony import */ var _components_Global_HeaderDropDown__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/components/Global/HeaderDropDown */ \"./src/components/Global/HeaderDropDown.tsx\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! next/link */ \"./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _components_Global_NotificationDropdown__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @/components/Global/NotificationDropdown */ \"./src/components/Global/NotificationDropdown.tsx\");\n\n\nvar _jsxFileName = \"/Users/waleed/iwork/jobs/upwork/Matthew/gethired-company/src/components/Global/Header.tsx\",\n    _this = undefined,\n    _s = $RefreshSig$();\n\n\n\n\n\n\n\nvar Header = function Header() {\n  _s();\n\n  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useState\"])([{\n    id: 1,\n    path: \"/\",\n    activeClass: \"active-link\",\n    linkText: \"Home\"\n  }, {\n    id: 2,\n    path: \"/talents\",\n    activeClass: \"active-link\",\n    linkText: \"Talents\"\n  }, {\n    id: 3,\n    path: \"/messages\",\n    activeClass: \"active-link\",\n    linkText: \"Messages\"\n  }, {\n    id: 4,\n    path: \"/opportunities\",\n    activeClass: \"active-link\",\n    linkText: \"Opportunities\"\n  }, {\n    id: 5,\n    path: \"/profile\",\n    activeClass: \"active-link\",\n    linkText: \"Profile\"\n  }, {\n    id: 6,\n    path: \"/team\",\n    activeClass: \"active-link\",\n    linkText: \"Team\"\n  }]),\n      headerLinks = _useState[0],\n      setHeaderLinks = _useState[1];\n\n  var headerLink = headerLinks.map(function (link) {\n    return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(react__WEBPACK_IMPORTED_MODULE_1___default.a.Fragment, {\n      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_components_Global_ActiveLink__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n        href: link.path,\n        activeLinkClass: link.activeClass,\n        linkText: link.linkText\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 57,\n        columnNumber: 9\n      }, _this)\n    }, link.id, false, {\n      fileName: _jsxFileName,\n      lineNumber: 56,\n      columnNumber: 7\n    }, _this);\n  });\n  Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useEffect\"])(function () {\n    setHeaderLinks(headerLinks);\n  }, []);\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(react__WEBPACK_IMPORTED_MODULE_1___default.a.Fragment, {\n    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"header\", {\n      id: \"app-header\",\n      className: \"w-full md:px-6 pl-6 fixed top-0 py-0 border-b border-secondary-elements bg-white\",\n      style: {\n        zIndex: 99999999999999\n      },\n      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n        className: \"lg:hidden flex items-center py-4 pr-6\",\n        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n          className: \"w-1/3\",\n          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(next_link__WEBPACK_IMPORTED_MODULE_4___default.a, {\n            href: \"/\",\n            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"img\", {\n              src: \"/img/logo.svg\",\n              alt: \"\",\n              className: \"cursor-pointer\"\n            }, void 0, false, {\n              fileName: _jsxFileName,\n              lineNumber: 81,\n              columnNumber: 15\n            }, _this)\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 80,\n            columnNumber: 13\n          }, _this)\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 79,\n          columnNumber: 11\n        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n          className: \"w-2/3 text-right flex items-center justify-end\",\n          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(next_link__WEBPACK_IMPORTED_MODULE_4___default.a, {\n            href: \"/messages\",\n            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"img\", {\n              src: \"/img/icons/message-icon.svg\",\n              alt: \"\"\n            }, void 0, false, {\n              fileName: _jsxFileName,\n              lineNumber: 86,\n              columnNumber: 15\n            }, _this)\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 85,\n            columnNumber: 13\n          }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(next_link__WEBPACK_IMPORTED_MODULE_4___default.a, {\n            href: \"/notifications\",\n            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"img\", {\n              src: \"/img/icons/bell-icon.svg\",\n              alt: \"\"\n            }, void 0, false, {\n              fileName: _jsxFileName,\n              lineNumber: 89,\n              columnNumber: 15\n            }, _this)\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 88,\n            columnNumber: 13\n          }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"button\", {\n            className: \"bg-transparent outline-none focus:outline-none\",\n            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"img\", {\n              src: \"/img/icons/hamburger-icon.svg\",\n              alt: \"\"\n            }, void 0, false, {\n              fileName: _jsxFileName,\n              lineNumber: 92,\n              columnNumber: 15\n            }, _this)\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 91,\n            columnNumber: 13\n          }, _this)]\n        }, void 0, true, {\n          fileName: _jsxFileName,\n          lineNumber: 84,\n          columnNumber: 11\n        }, _this)]\n      }, void 0, true, {\n        fileName: _jsxFileName,\n        lineNumber: 78,\n        columnNumber: 9\n      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n        className: \"lg:flex items-center hidden\",\n        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n          className: \"w-1/5\",\n          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(next_link__WEBPACK_IMPORTED_MODULE_4___default.a, {\n            href: \"/\",\n            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"img\", {\n              src: \"/img/logo.svg\",\n              alt: \"\",\n              className: \"cursor-pointer\"\n            }, void 0, false, {\n              fileName: _jsxFileName,\n              lineNumber: 99,\n              columnNumber: 15\n            }, _this)\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 98,\n            columnNumber: 13\n          }, _this)\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 97,\n          columnNumber: 11\n        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n          className: \"w-3/5 text-center\",\n          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"ul\", {\n            className: \"flex justify-center\",\n            children: headerLink\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 103,\n            columnNumber: 13\n          }, _this)\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 102,\n          columnNumber: 11\n        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n          className: \"w-1/5 flex items-center justify-end\",\n          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_components_Global_NotificationDropdown__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {}, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 106,\n            columnNumber: 13\n          }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_components_Global_HeaderDropDown__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {}, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 107,\n            columnNumber: 13\n          }, _this)]\n        }, void 0, true, {\n          fileName: _jsxFileName,\n          lineNumber: 105,\n          columnNumber: 11\n        }, _this)]\n      }, void 0, true, {\n        fileName: _jsxFileName,\n        lineNumber: 96,\n        columnNumber: 9\n      }, _this)]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 73,\n      columnNumber: 7\n    }, _this)\n  }, void 0, false, {\n    fileName: _jsxFileName,\n    lineNumber: 71,\n    columnNumber: 5\n  }, _this);\n};\n\n_s(Header, \"qvHXzlobdnUuJNPTk2Y1ACVqg5I=\");\n\n_c = Header;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Header);\n\nvar _c;\n\n$RefreshReg$(_c, \"Header\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../node_modules/next/dist/compiled/webpack/harmony-module.js */ \"./node_modules/next/dist/compiled/webpack/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbXBvbmVudHMvR2xvYmFsL0hlYWRlci50c3g/NzkxMiJdLCJuYW1lcyI6WyJIZWFkZXIiLCJ1c2VTdGF0ZSIsImlkIiwicGF0aCIsImFjdGl2ZUNsYXNzIiwibGlua1RleHQiLCJoZWFkZXJMaW5rcyIsInNldEhlYWRlckxpbmtzIiwiaGVhZGVyTGluayIsIm1hcCIsImxpbmsiLCJ1c2VFZmZlY3QiLCJ6SW5kZXgiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQVNBLElBQU1BLE1BQWdCLEdBQUcsU0FBbkJBLE1BQW1CLEdBQU07QUFBQTs7QUFBQSxrQkFDU0Msc0RBQVEsQ0FBa0IsQ0FDOUQ7QUFDRUMsTUFBRSxFQUFFLENBRE47QUFFRUMsUUFBSSxFQUFFLEdBRlI7QUFHRUMsZUFBVyxFQUFFLGFBSGY7QUFJRUMsWUFBUSxFQUFFO0FBSlosR0FEOEQsRUFPOUQ7QUFDRUgsTUFBRSxFQUFFLENBRE47QUFFRUMsUUFBSSxFQUFFLFVBRlI7QUFHRUMsZUFBVyxFQUFFLGFBSGY7QUFJRUMsWUFBUSxFQUFFO0FBSlosR0FQOEQsRUFhOUQ7QUFDRUgsTUFBRSxFQUFFLENBRE47QUFFRUMsUUFBSSxFQUFFLFdBRlI7QUFHRUMsZUFBVyxFQUFFLGFBSGY7QUFJRUMsWUFBUSxFQUFFO0FBSlosR0FiOEQsRUFtQjlEO0FBQ0VILE1BQUUsRUFBRSxDQUROO0FBRUVDLFFBQUksRUFBRSxnQkFGUjtBQUdFQyxlQUFXLEVBQUUsYUFIZjtBQUlFQyxZQUFRLEVBQUU7QUFKWixHQW5COEQsRUF5QjlEO0FBQ0VILE1BQUUsRUFBRSxDQUROO0FBRUVDLFFBQUksRUFBRSxVQUZSO0FBR0VDLGVBQVcsRUFBRSxhQUhmO0FBSUVDLFlBQVEsRUFBRTtBQUpaLEdBekI4RCxFQStCOUQ7QUFDRUgsTUFBRSxFQUFFLENBRE47QUFFRUMsUUFBSSxFQUFFLE9BRlI7QUFHRUMsZUFBVyxFQUFF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LHFFQUFDLCtFQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUEsbUJBREYsZUFFRSxxRUFBQyx5RUFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBLG1CQUZGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFURjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUF2QkY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBRkY7QUFBQTtBQUFBO0FBQUE7QUFBQSxXQURGO0FBNENELENBcEdEOztHQUFNUixNOztLQUFBQSxNO0FBc0dTQSxxRUFBZiIsImZpbGUiOiIuL3NyYy9jb21wb25lbnRzL0dsb2JhbC9IZWFkZXIudHN4LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlLCB1c2VFZmZlY3QgfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCBBY3RpdmVMaW5rIGZyb20gXCJAL2NvbXBvbmVudHMvR2xvYmFsL0FjdGl2ZUxpbmtcIjtcbmltcG9ydCBIZWFkZXJEcm9wRG93biBmcm9tIFwiQC9jb21wb25lbnRzL0dsb2JhbC9IZWFkZXJEcm9wRG93blwiO1xuaW1wb3J0IExpbmsgZnJvbSBcIm5leHQvbGlua1wiO1xuaW1wb3J0IE5vdGlmaWNhdGlvbkRyb3Bkb3duIGZyb20gXCJAL2NvbXBvbmVudHMvR2xvYmFsL05vdGlmaWNhdGlvbkRyb3Bkb3duXCI7XG5cbmludGVyZmFjZSBMaW5rc1RvUmVuZGVyIHtcbiAgaWQ6IG51bWJlcjtcbiAgcGF0aDogc3RyaW5nO1xuICBhY3RpdmVDbGFzczogc3RyaW5nO1xuICBsaW5rVGV4dDogc3RyaW5nO1xufVxuXG5jb25zdCBIZWFkZXI6IFJlYWN0LkZDID0gKCkgPT4ge1xuICBjb25zdCBbaGVhZGVyTGlua3MsIHNldEhlYWRlckxpbmtzXSA9IHVzZVN0YXRlPExpbmtzVG9SZW5kZXJbXT4oW1xuICAgIHtcbiAgICAgIGlkOiAxLFxuICAgICAgcGF0aDogXCIvXCIsXG4gICAgICBhY3RpdmVDbGFzczogXCJhY3RpdmUtbGlua1wiLFxuICAgICAgbGlua1RleHQ6IFwiSG9tZVwiLFxuICAgIH0sXG4gICAge1xuICAgICAgaWQ6IDIsXG4gICAgICBwYXRoOiBcIi90YWxlbnRzXCIsXG4gICAgICBhY3RpdmVDbGFzczogXCJhY3RpdmUtbGlua1wiLFxuICAgICAgbGlua1RleHQ6IFwiVGFsZW50c1wiLFxuICAgIH0sXG4gICAge1xuICAgICAgaWQ6IDMsXG4gICAgICBwYXRoOiBcIi9tZXNzYWdlc1wiLFxuICAgICAgYWN0aXZlQ2xhc3M6IFwiYWN0aXZlLWxpbmtcIixcbiAgICAgIGxpbmtUZXh0OiBcIk1lc3NhZ2VzXCIsXG4gICAgfSxcbiAgICB7XG4gICAgICBpZDogNCxcbiAgICAgIHBhdGg6IFwiL29wcG9ydHVuaXRpZXNcIixcbiAgICAgIGFjdGl2ZUNsYXNzOiBcImFjdGl2ZS1saW5rXCIsXG4gICAgICBsaW5rVGV4dDogXCJPcHBvcnR1bml0aWVzXCIsXG4gICAgfSxcbiAgICB7XG4gICAgICBpZDogNSxcbiAgICAgIHBhdGg6IFwiL3Byb2ZpbGVcIixcbiAgICAgIGFjdGl2ZUNsYXNzOiBcImFjdGl2ZS1saW5rXCIsXG4gICAgICBsaW5rVGV4dDogXCJQcm9maWxlXCIsXG4gICAgfSxcbiAgICB7XG4gICAgICBpZDogNixcbiAgICAgIHBhdGg6IFwiL3RlYW1cIixcbiAgICAgIGFjdGl2ZUNsYXNzOiBcImFjdGl2ZS1saW5rXCIsXG4gICAgICBsaW5rVGV4dDogXCJUZWFtXCIsXG4gICAgfSxcbiAgXSk7XG5cbiAgbGV0IGhlYWRlckxpbmsgPSBoZWFkZXJMaW5rcy5tYXAoKGxpbmspID0+IHtcbiAgICByZXR1cm4gKFxuICAgICAgPFJlYWN0LkZyYWdtZW50IGtleT17bGluay5pZH0+XG4gICAgICAgIDxBY3RpdmVMaW5rXG4gICAgICAgICAgaHJlZj17bGluay5wYXRofVxuICAgICAgICAgIGFjdGl2ZUxpbmtDbGFzcz17bGluay5hY3RpdmVDbGFzc31cbiAgICAgICAgICBsaW5rVGV4dD17bGluay5saW5rVGV4dH1cbiAgICAgICAgPjwvQWN0aXZlTGluaz5cbiAgICAgIDwvUmVhY3QuRnJhZ21lbnQ+XG4gICAgKTtcbiAgfSk7XG5cbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBzZXRIZWFkZXJMaW5rcyhoZWFkZXJMaW5rcyk7XG4gIH0sIFtdKTtcblxuICByZXR1cm4gKFxuICAgIDxSZWFjdC5GcmFnbWVudD5cbiAgICAgIHsvKiBIZWFkZXIgKi99XG4gICAgICA8aGVhZGVyXG4gICAgICAgIGlkPVwiYXBwLWhlYWRlclwiXG4gICAgICAgIGNsYXNzTmFtZT1cInctZnVsbCBtZDpweC02IHBsLTYgZml4ZWQgdG9wLTAgcHktMCBib3JkZXItYiBib3JkZXItc2Vjb25kYXJ5LWVsZW1lbnRzIGJnLXdoaXRlXCJcbiAgICAgICAgc3R5bGU9e3sgekluZGV4OiA5OTk5OTk5OTk5OTk5OSB9fVxuICAgICAgPlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImxnOmhpZGRlbiBmbGV4IGl0ZW1zLWNlbnRlciBweS00IHByLTZcIj5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInctMS8zXCI+XG4gICAgICAgICAgICA8TGluayBocmVmPVwiL1wiPlxuICAgICAgICAgICAgICA8aW1nIHNyYz1cIi9pbWcvbG9nby5zdmdcIiBhbHQ9XCJcIiBjbGFzc05hbWU9XCJjdXJzb3ItcG9pbnRlclwiIC8+XG4gICAgICAgICAgICA8L0xpbms+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ3LTIvMyB0ZXh0LXJpZ2h0IGZsZXggaXRlbXMtY2VudGVyIGp1c3RpZnktZW5kXCI+XG4gICAgICAgICAgICA8TGluayBocmVmPVwiL21lc3NhZ2VzXCI+XG4gICAgICAgICAgICAgIDxpbWcgc3JjPVwiL2ltZy9pY29ucy9tZXNzYWdlLWljb24uc3ZnXCIgYWx0PVwiXCIgLz5cbiAgICAgICAgICAgIDwvTGluaz5cbiAgICAgICAgICAgIDxMaW5rIGhyZWY9XCIvbm90aWZpY2F0aW9uc1wiPlxuICAgICAgICAgICAgICA8aW1nIHNyYz1cIi9pbWcvaWNvbnMvYmVsbC1pY29uLnN2Z1wiIGFsdD1cIlwiIC8+XG4gICAgICAgICAgICA8L0xpbms+XG4gICAgICAgICAgICA8YnV0dG9uIGNsYXNzTmFtZT1cImJnLXRyYW5zcGFyZW50IG91dGxpbmUtbm9uZSBmb2N1czpvdXRsaW5lLW5vbmVcIj5cbiAgICAgICAgICAgICAgPGltZyBzcmM9XCIvaW1nL2ljb25zL2hhbWJ1cmdlci1pY29uLnN2Z1wiIGFsdD1cIlwiIC8+XG4gICAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibGc6ZmxleCBpdGVtcy1jZW50ZXIgaGlkZGVuXCI+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ3LTEvNVwiPlxuICAgICAgICAgICAgPExpbmsgaHJlZj1cIi9cIj5cbiAgICAgICAgICAgICAgPGltZyBzcmM9XCIvaW1nL2xvZ28uc3ZnXCIgYWx0PVwiXCIgY2xhc3NOYW1lPVwiY3Vyc29yLXBvaW50ZXJcIiAvPlxuICAgICAgICAgICAgPC9MaW5rPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidy0zLzUgdGV4dC1jZW50ZXJcIj5cbiAgICAgICAgICAgIDx1bCBjbGFzc05hbWU9XCJmbGV4IGp1c3RpZnktY2VudGVyXCI+e2hlYWRlckxpbmt9PC91bD5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInctMS81IGZsZXggaXRlbXMtY2VudGVyIGp1c3RpZnktZW5kXCI+XG4gICAgICAgICAgICA8Tm90aWZpY2F0aW9uRHJvcGRvd24gLz5cbiAgICAgICAgICAgIDxIZWFkZXJEcm9wRG93biAvPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvaGVhZGVyPlxuICAgICAgey8qIEhlYWRlciBlbmRzICovfVxuICAgIDwvUmVhY3QuRnJhZ21lbnQ+XG4gICk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBIZWFkZXI7XG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/components/Global/Header.tsx\n");

/***/ })

})
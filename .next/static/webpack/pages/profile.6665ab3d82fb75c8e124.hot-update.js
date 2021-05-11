webpackHotUpdate_N_E("pages/profile",{

/***/ "./src/components/Global/Header.tsx":
/*!******************************************!*\
  !*** ./src/components/Global/Header.tsx ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _components_Global_ActiveLink__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/components/Global/ActiveLink */ \"./src/components/Global/ActiveLink.tsx\");\n/* harmony import */ var _components_Global_HeaderDropDown__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/components/Global/HeaderDropDown */ \"./src/components/Global/HeaderDropDown.tsx\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! next/link */ \"./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _components_Global_NotificationDropdown__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @/components/Global/NotificationDropdown */ \"./src/components/Global/NotificationDropdown.tsx\");\n\n\nvar _jsxFileName = \"/Users/waleed/iwork/jobs/upwork/Matthew/gethired-company/src/components/Global/Header.tsx\",\n    _this = undefined,\n    _s = $RefreshSig$();\n\n\n\n\n\n\n\nvar Header = function Header() {\n  _s();\n\n  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useState\"])([{\n    id: 1,\n    path: \"/\",\n    activeClass: \"active-link\",\n    linkText: \"Home\"\n  }, {\n    id: 2,\n    path: \"/talents\",\n    activeClass: \"active-link\",\n    linkText: \"Talents\"\n  }, {\n    id: 3,\n    path: \"/messages\",\n    activeClass: \"active-link\",\n    linkText: \"Messages\"\n  }, {\n    id: 4,\n    path: \"/opportunities\",\n    activeClass: \"active-link\",\n    linkText: \"Opportunities\"\n  }, {\n    id: 5,\n    path: \"/profile\",\n    activeClass: \"active-link\",\n    linkText: \"Profile\"\n  }, {\n    id: 6,\n    path: \"/team\",\n    activeClass: \"active-link\",\n    linkText: \"Team\"\n  }]),\n      headerLinks = _useState[0],\n      setHeaderLinks = _useState[1];\n\n  var headerLink = headerLinks.map(function (link) {\n    return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(react__WEBPACK_IMPORTED_MODULE_1___default.a.Fragment, {\n      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_components_Global_ActiveLink__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n        href: link.path,\n        activeLinkClass: link.activeClass,\n        linkText: link.linkText\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 57,\n        columnNumber: 9\n      }, _this)\n    }, link.id, false, {\n      fileName: _jsxFileName,\n      lineNumber: 56,\n      columnNumber: 7\n    }, _this);\n  });\n  Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useEffect\"])(function () {\n    setHeaderLinks(headerLinks);\n  }, []);\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(react__WEBPACK_IMPORTED_MODULE_1___default.a.Fragment, {\n    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"header\", {\n      id: \"app-header\",\n      className: \"w-full md:px-6 pl-6 fixed top-0 py-0 border-b border-secondary-elements bg-white\",\n      style: {\n        zIndex: 99999999999999\n      },\n      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n        className: \"lg:hidden flex items-center py-4 pr-6\",\n        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n          className: \"w-1/3\",\n          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(next_link__WEBPACK_IMPORTED_MODULE_4___default.a, {\n            href: \"/\",\n            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"img\", {\n              src: \"/img/logo.svg\",\n              alt: \"\",\n              className: \"cursor-pointer\"\n            }, void 0, false, {\n              fileName: _jsxFileName,\n              lineNumber: 81,\n              columnNumber: 15\n            }, _this)\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 80,\n            columnNumber: 13\n          }, _this)\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 79,\n          columnNumber: 11\n        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n          className: \"w-2/3 text-right flex items-center justify-end\",\n          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(next_link__WEBPACK_IMPORTED_MODULE_4___default.a, {\n            href: \"/messages\",\n            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"img\", {\n              src: \"/img/message-icon.svg\",\n              alt: \"\"\n            }, void 0, false, {\n              fileName: _jsxFileName,\n              lineNumber: 86,\n              columnNumber: 15\n            }, _this)\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 85,\n            columnNumber: 13\n          }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(next_link__WEBPACK_IMPORTED_MODULE_4___default.a, {\n            href: \"/notifications\"\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 88,\n            columnNumber: 13\n          }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"button\", {\n            className: \"bg-transparent outline-none focus:outline-none\",\n            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"img\", {\n              src: \"/img/icons/hamburger-icon.svg\",\n              alt: \"\"\n            }, void 0, false, {\n              fileName: _jsxFileName,\n              lineNumber: 92,\n              columnNumber: 15\n            }, _this)\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 91,\n            columnNumber: 13\n          }, _this)]\n        }, void 0, true, {\n          fileName: _jsxFileName,\n          lineNumber: 84,\n          columnNumber: 11\n        }, _this)]\n      }, void 0, true, {\n        fileName: _jsxFileName,\n        lineNumber: 78,\n        columnNumber: 9\n      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n        className: \"lg:flex items-center hidden\",\n        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n          className: \"w-1/5\",\n          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(next_link__WEBPACK_IMPORTED_MODULE_4___default.a, {\n            href: \"/\",\n            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"img\", {\n              src: \"/img/logo.svg\",\n              alt: \"\",\n              className: \"cursor-pointer\"\n            }, void 0, false, {\n              fileName: _jsxFileName,\n              lineNumber: 99,\n              columnNumber: 15\n            }, _this)\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 98,\n            columnNumber: 13\n          }, _this)\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 97,\n          columnNumber: 11\n        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n          className: \"w-3/5 text-center\",\n          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"ul\", {\n            className: \"flex justify-center\",\n            children: headerLink\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 103,\n            columnNumber: 13\n          }, _this)\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 102,\n          columnNumber: 11\n        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n          className: \"w-1/5 flex items-center justify-end\",\n          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_components_Global_NotificationDropdown__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {}, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 106,\n            columnNumber: 13\n          }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_components_Global_HeaderDropDown__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {}, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 107,\n            columnNumber: 13\n          }, _this)]\n        }, void 0, true, {\n          fileName: _jsxFileName,\n          lineNumber: 105,\n          columnNumber: 11\n        }, _this)]\n      }, void 0, true, {\n        fileName: _jsxFileName,\n        lineNumber: 96,\n        columnNumber: 9\n      }, _this)]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 73,\n      columnNumber: 7\n    }, _this)\n  }, void 0, false, {\n    fileName: _jsxFileName,\n    lineNumber: 71,\n    columnNumber: 5\n  }, _this);\n};\n\n_s(Header, \"qvHXzlobdnUuJNPTk2Y1ACVqg5I=\");\n\n_c = Header;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Header);\n\nvar _c;\n\n$RefreshReg$(_c, \"Header\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../node_modules/next/dist/compiled/webpack/harmony-module.js */ \"./node_modules/next/dist/compiled/webpack/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbXBvbmVudHMvR2xvYmFsL0hlYWRlci50c3g/NzkxMiJdLCJuYW1lcyI6WyJIZWFkZXIiLCJ1c2VTdGF0ZSIsImlkIiwicGF0aCIsImFjdGl2ZUNsYXNzIiwibGlua1RleHQiLCJoZWFkZXJMaW5rcyIsInNldEhlYWRlckxpbmtzIiwiaGVhZGVyTGluayIsIm1hcCIsImxpbmsiLCJ1c2VFZmZlY3QiLCJ6SW5kZXgiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQVNBLElBQU1BLE1BQWdCLEdBQUcsU0FBbkJBLE1BQW1CLEdBQU07QUFBQTs7QUFBQSxrQkFDU0Msc0RBQVEsQ0FBa0IsQ0FDOUQ7QUFDRUMsTUFBRSxFQUFFLENBRE47QUFFRUMsUUFBSSxFQUFFLEdBRlI7QUFHRUMsZUFBVyxFQUFFLGFBSGY7QUFJRUMsWUFBUSxFQUFFO0FBSlosR0FEOEQsRUFPOUQ7QUFDRUgsTUFBRSxFQUFFLENBRE47QUFFRUMsUUFBSSxFQUFFLFVBRlI7QUFHRUMsZUFBVyxFQUFFLGFBSGY7QUFJRUMsWUFBUSxFQUFFO0FBSlosR0FQOEQsRUFhOUQ7QUFDRUgsTUFBRSxFQUFFLENBRE47QUFFRUMsUUFBSSxFQUFFLFdBRlI7QUFHRUMsZUFBVyxFQUFFLGFBSGY7QUFJRUMsWUFBUSxFQUFFO0FBSlosR0FiOEQsRUFtQjlEO0FBQ0VILE1BQUUsRUFBRSxDQUROO0FBRUVDLFFBQUksRUFBRSxnQkFGUjtBQUdFQyxlQUFXLEVBQUUsYUFIZjtBQUlFQyxZQUFRLEVBQUU7QUFKWixHQW5COEQsRUF5QjlEO0FBQ0VILE1BQUUsRUFBRSxDQUROO0FBRUVDLFFBQUksRUFBRSxVQUZSO0FBR0VDLGVBQVcsRUFBRSxhQUhmO0FBSUVDLFlBQVEsRUFBRTtBQUpaLEdBekI4RCxFQStCOUQ7QUFDRUgsTUFBRSxFQUFFLENBRE47QUFFRUMsUUFBSSxFQUFFLE9BRlI7QUFHRUMsZUFBVyxFQUFF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QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQVRGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQXZCRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFGRjtBQUFBO0FBQUE7QUFBQTtBQUFBLFdBREY7QUE0Q0QsQ0FwR0Q7O0dBQU1SLE07O0tBQUFBLE07QUFzR1NBLHFFQUFmIiwiZmlsZSI6Ii4vc3JjL2NvbXBvbmVudHMvR2xvYmFsL0hlYWRlci50c3guanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUsIHVzZUVmZmVjdCB9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IEFjdGl2ZUxpbmsgZnJvbSBcIkAvY29tcG9uZW50cy9HbG9iYWwvQWN0aXZlTGlua1wiO1xuaW1wb3J0IEhlYWRlckRyb3BEb3duIGZyb20gXCJAL2NvbXBvbmVudHMvR2xvYmFsL0hlYWRlckRyb3BEb3duXCI7XG5pbXBvcnQgTGluayBmcm9tIFwibmV4dC9saW5rXCI7XG5pbXBvcnQgTm90aWZpY2F0aW9uRHJvcGRvd24gZnJvbSBcIkAvY29tcG9uZW50cy9HbG9iYWwvTm90aWZpY2F0aW9uRHJvcGRvd25cIjtcblxuaW50ZXJmYWNlIExpbmtzVG9SZW5kZXIge1xuICBpZDogbnVtYmVyO1xuICBwYXRoOiBzdHJpbmc7XG4gIGFjdGl2ZUNsYXNzOiBzdHJpbmc7XG4gIGxpbmtUZXh0OiBzdHJpbmc7XG59XG5cbmNvbnN0IEhlYWRlcjogUmVhY3QuRkMgPSAoKSA9PiB7XG4gIGNvbnN0IFtoZWFkZXJMaW5rcywgc2V0SGVhZGVyTGlua3NdID0gdXNlU3RhdGU8TGlua3NUb1JlbmRlcltdPihbXG4gICAge1xuICAgICAgaWQ6IDEsXG4gICAgICBwYXRoOiBcIi9cIixcbiAgICAgIGFjdGl2ZUNsYXNzOiBcImFjdGl2ZS1saW5rXCIsXG4gICAgICBsaW5rVGV4dDogXCJIb21lXCIsXG4gICAgfSxcbiAgICB7XG4gICAgICBpZDogMixcbiAgICAgIHBhdGg6IFwiL3RhbGVudHNcIixcbiAgICAgIGFjdGl2ZUNsYXNzOiBcImFjdGl2ZS1saW5rXCIsXG4gICAgICBsaW5rVGV4dDogXCJUYWxlbnRzXCIsXG4gICAgfSxcbiAgICB7XG4gICAgICBpZDogMyxcbiAgICAgIHBhdGg6IFwiL21lc3NhZ2VzXCIsXG4gICAgICBhY3RpdmVDbGFzczogXCJhY3RpdmUtbGlua1wiLFxuICAgICAgbGlua1RleHQ6IFwiTWVzc2FnZXNcIixcbiAgICB9LFxuICAgIHtcbiAgICAgIGlkOiA0LFxuICAgICAgcGF0aDogXCIvb3Bwb3J0dW5pdGllc1wiLFxuICAgICAgYWN0aXZlQ2xhc3M6IFwiYWN0aXZlLWxpbmtcIixcbiAgICAgIGxpbmtUZXh0OiBcIk9wcG9ydHVuaXRpZXNcIixcbiAgICB9LFxuICAgIHtcbiAgICAgIGlkOiA1LFxuICAgICAgcGF0aDogXCIvcHJvZmlsZVwiLFxuICAgICAgYWN0aXZlQ2xhc3M6IFwiYWN0aXZlLWxpbmtcIixcbiAgICAgIGxpbmtUZXh0OiBcIlByb2ZpbGVcIixcbiAgICB9LFxuICAgIHtcbiAgICAgIGlkOiA2LFxuICAgICAgcGF0aDogXCIvdGVhbVwiLFxuICAgICAgYWN0aXZlQ2xhc3M6IFwiYWN0aXZlLWxpbmtcIixcbiAgICAgIGxpbmtUZXh0OiBcIlRlYW1cIixcbiAgICB9LFxuICBdKTtcblxuICBsZXQgaGVhZGVyTGluayA9IGhlYWRlckxpbmtzLm1hcCgobGluaykgPT4ge1xuICAgIHJldHVybiAoXG4gICAgICA8UmVhY3QuRnJhZ21lbnQga2V5PXtsaW5rLmlkfT5cbiAgICAgICAgPEFjdGl2ZUxpbmtcbiAgICAgICAgICBocmVmPXtsaW5rLnBhdGh9XG4gICAgICAgICAgYWN0aXZlTGlua0NsYXNzPXtsaW5rLmFjdGl2ZUNsYXNzfVxuICAgICAgICAgIGxpbmtUZXh0PXtsaW5rLmxpbmtUZXh0fVxuICAgICAgICA+PC9BY3RpdmVMaW5rPlxuICAgICAgPC9SZWFjdC5GcmFnbWVudD5cbiAgICApO1xuICB9KTtcblxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIHNldEhlYWRlckxpbmtzKGhlYWRlckxpbmtzKTtcbiAgfSwgW10pO1xuXG4gIHJldHVybiAoXG4gICAgPFJlYWN0LkZyYWdtZW50PlxuICAgICAgey8qIEhlYWRlciAqL31cbiAgICAgIDxoZWFkZXJcbiAgICAgICAgaWQ9XCJhcHAtaGVhZGVyXCJcbiAgICAgICAgY2xhc3NOYW1lPVwidy1mdWxsIG1kOnB4LTYgcGwtNiBmaXhlZCB0b3AtMCBweS0wIGJvcmRlci1iIGJvcmRlci1zZWNvbmRhcnktZWxlbWVudHMgYmctd2hpdGVcIlxuICAgICAgICBzdHlsZT17eyB6SW5kZXg6IDk5OTk5OTk5OTk5OTk5IH19XG4gICAgICA+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibGc6aGlkZGVuIGZsZXggaXRlbXMtY2VudGVyIHB5LTQgcHItNlwiPlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidy0xLzNcIj5cbiAgICAgICAgICAgIDxMaW5rIGhyZWY9XCIvXCI+XG4gICAgICAgICAgICAgIDxpbWcgc3JjPVwiL2ltZy9sb2dvLnN2Z1wiIGFsdD1cIlwiIGNsYXNzTmFtZT1cImN1cnNvci1wb2ludGVyXCIgLz5cbiAgICAgICAgICAgIDwvTGluaz5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInctMi8zIHRleHQtcmlnaHQgZmxleCBpdGVtcy1jZW50ZXIganVzdGlmeS1lbmRcIj5cbiAgICAgICAgICAgIDxMaW5rIGhyZWY9XCIvbWVzc2FnZXNcIj5cbiAgICAgICAgICAgICAgPGltZyBzcmM9XCIvaW1nL21lc3NhZ2UtaWNvbi5zdmdcIiBhbHQ9XCJcIiAvPlxuICAgICAgICAgICAgPC9MaW5rPlxuICAgICAgICAgICAgPExpbmsgaHJlZj1cIi9ub3RpZmljYXRpb25zXCI+XG5cbiAgICAgICAgICAgIDwvTGluaz5cbiAgICAgICAgICAgIDxidXR0b24gY2xhc3NOYW1lPVwiYmctdHJhbnNwYXJlbnQgb3V0bGluZS1ub25lIGZvY3VzOm91dGxpbmUtbm9uZVwiPlxuICAgICAgICAgICAgICA8aW1nIHNyYz1cIi9pbWcvaWNvbnMvaGFtYnVyZ2VyLWljb24uc3ZnXCIgYWx0PVwiXCIgLz5cbiAgICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJsZzpmbGV4IGl0ZW1zLWNlbnRlciBoaWRkZW5cIj5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInctMS81XCI+XG4gICAgICAgICAgICA8TGluayBocmVmPVwiL1wiPlxuICAgICAgICAgICAgICA8aW1nIHNyYz1cIi9pbWcvbG9nby5zdmdcIiBhbHQ9XCJcIiBjbGFzc05hbWU9XCJjdXJzb3ItcG9pbnRlclwiIC8+XG4gICAgICAgICAgICA8L0xpbms+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ3LTMvNSB0ZXh0LWNlbnRlclwiPlxuICAgICAgICAgICAgPHVsIGNsYXNzTmFtZT1cImZsZXgganVzdGlmeS1jZW50ZXJcIj57aGVhZGVyTGlua308L3VsPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidy0xLzUgZmxleCBpdGVtcy1jZW50ZXIganVzdGlmeS1lbmRcIj5cbiAgICAgICAgICAgIDxOb3RpZmljYXRpb25Ecm9wZG93biAvPlxuICAgICAgICAgICAgPEhlYWRlckRyb3BEb3duIC8+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9oZWFkZXI+XG4gICAgICB7LyogSGVhZGVyIGVuZHMgKi99XG4gICAgPC9SZWFjdC5GcmFnbWVudD5cbiAgKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IEhlYWRlcjtcbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/components/Global/Header.tsx\n");

/***/ })

})
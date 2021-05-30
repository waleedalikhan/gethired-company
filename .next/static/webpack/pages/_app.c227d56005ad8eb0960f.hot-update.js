webpackHotUpdate_N_E("pages/_app",{

/***/ "./src/redux/reducers/reducer.ts":
/*!***************************************!*\
  !*** ./src/redux/reducers/reducer.ts ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var _Users_waleed_iwork_jobs_upwork_Matthew_gethired_company_node_modules_next_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/next/node_modules/@babel/runtime/helpers/esm/defineProperty */ \"./node_modules/next/node_modules/@babel/runtime/helpers/esm/defineProperty.js\");\n/* harmony import */ var _redux_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/redux/types */ \"./src/redux/types.ts\");\n\n\nfunction ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }\n\nfunction _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { Object(_Users_waleed_iwork_jobs_upwork_Matthew_gethired_company_node_modules_next_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }\n\n\n\nvar main = function main() {\n  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {\n    firstName: \"Waleed Ali\",\n    lastName: \"Khan\",\n    latestTalents: [{\n      id: 1,\n      opportunityName: \"Front-End Developer\",\n      match: \"95%\",\n      reviewTime: \"16 hours\"\n    }, {\n      id: 2,\n      opportunityName: \"Front-End Developer\",\n      match: \"85%\",\n      reviewTime: \"1 day\"\n    }, {\n      id: 3,\n      opportunityName: \"Front-End Developer\",\n      match: \"65%\",\n      reviewTime: \"4 days\"\n    }, {\n      id: 4,\n      opportunityName: \"Back-End Developer\",\n      match: \"55%\",\n      reviewTime: \"28 days\"\n    }, {\n      id: 5,\n      opportunityName: \"Back-End Developer\",\n      match: \"53%\",\n      reviewTime: \"28 days\"\n    }, {\n      id: 6,\n      opportunityName: \"Back-End Developer\",\n      match: \"53%\",\n      reviewTime: \"28 days\"\n    }],\n    unreadMessages: [{\n      id: 1,\n      profile_img: \"/img/unread-msg-profiles/profile_img1.png\",\n      username: \"Jim Halpert\",\n      deliveredTime: \"30min ago\",\n      unreadMsg: \"Hello I was just wondering how we could handle this transfer from my part since that way it...\"\n    }, {\n      id: 2,\n      profile_img: \"/img/unread-msg-profiles/profile_img2.png\",\n      username: \"Angela Martin\",\n      deliveredTime: \"1h ago\",\n      unreadMsg: \"The problem we are facing is beyond you and me. We need to understand that problem far deeper...\"\n    }, {\n      id: 3,\n      profile_img: \"/img/unread-msg-profiles/profile_img3.png\",\n      username: \"Ryan Howard\",\n      deliveredTime: \"2days ago\",\n      unreadMsg: \"Thank you so much for everything, it was amazing interview. We will be definitly in touch in...\"\n    }]\n  };\n  var action = arguments.length > 1 ? arguments[1] : undefined;\n\n  switch (action.type) {\n    case _redux_types__WEBPACK_IMPORTED_MODULE_1__[\"CHANGE_FIRSTNAME\"]:\n      return _objectSpread(_objectSpread({}, state), {}, {\n        firstName: action.payload\n      });\n\n    case _redux_types__WEBPACK_IMPORTED_MODULE_1__[\"CHANE_LASTNAME\"]:\n      return _objectSpread(_objectSpread({}, state), {}, {\n        lastName: action.payload\n      });\n\n    default:\n      return state;\n  }\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (main);\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../node_modules/next/dist/compiled/webpack/harmony-module.js */ \"./node_modules/next/dist/compiled/webpack/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL3JlZHV4L3JlZHVjZXJzL3JlZHVjZXIudHM/OGIxNiJdLCJuYW1lcyI6WyJtYWluIiwic3RhdGUiLCJmaXJzdE5hbWUiLCJsYXN0TmFtZSIsImxhdGVzdFRhbGVudHMiLCJpZCIsIm9wcG9ydHVuaXR5TmFtZSIsIm1hdGNoIiwicmV2aWV3VGltZSIsInVucmVhZE1lc3NhZ2VzIiwicHJvZmlsZV9pbWciLCJ1c2VybmFtZSIsImRlbGl2ZXJlZFRpbWUiLCJ1bnJlYWRNc2ciLCJhY3Rpb24iLCJ0eXBlIiwidCIsInBheWxvYWQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUFBOztBQU9BLElBQU1BLElBQUksR0FBRyxTQUFQQSxJQUFPLEdBc0VSO0FBQUEsTUFyRUhDLEtBcUVHLHVFQXJFSztBQUNOQyxhQUFTLEVBQUUsWUFETDtBQUVOQyxZQUFRLEVBQUUsTUFGSjtBQUdOQyxpQkFBYSxFQUFFLENBQ2I7QUFDRUMsUUFBRSxFQUFFLENBRE47QUFFRUMscUJBQWUsRUFBRSxxQkFGbkI7QUFHRUMsV0FBSyxFQUFFLEtBSFQ7QUFJRUMsZ0JBQVUsRUFBRTtBQUpkLEtBRGEsRUFPYjtBQUNFSCxRQUFFLEVBQUUsQ0FETjtBQUVFQyxxQkFBZSxFQUFFLHFCQUZuQjtBQUdFQyxXQUFLLEVBQUUsS0FIVDtBQUlFQyxnQkFBVSxFQUFFO0FBSmQsS0FQYSxFQWFiO0FBQ0VILFFBQUUsRUFBRSxDQUROO0FBRUVDLHFCQUFlLEVBQUUscUJBRm5CO0FBR0VDLFdBQUssRUFBRSxLQUhUO0FBSUVDLGdCQUFVLEVBQUU7QUFKZCxLQWJhLEVBbUJiO0FBQ0VILFFBQUUsRUFBRSxDQUROO0FBRUVDLHFCQUFlLEVBQUUsb0JBRm5CO0FBR0VDLFdBQUssRUFBRSxLQUhUO0FBSUVDLGdCQUFVLEVBQUU7QUFKZCxLQW5CYSxFQXlCYjtBQUNFSCxRQUFFLEVBQUUsQ0FETjtBQUVFQyxxQkFBZSxFQUFFLG9CQUZuQjtBQUdFQyxXQUFLLEVBQUUsS0FIVDtBQUlFQyxnQkFBVSxFQUFFO0FBSmQsS0F6QmEsRUErQmI7QUFDRUgsUUFBRSxFQUFFLENBRE47QUFFRUMscUJBQWUsRUFBRSxvQkFGbkI7QUFHRUMsV0FBSyxFQUFFLEtBSFQ7QUFJRUMsZ0JBQVUsRUFBRTtBQUpkLEtBL0JhLENBSFQ7QUF5Q05DLGtCQUFjLEVBQUUsQ0FDZDtBQUNFSixRQUFFLEVBQUUsQ0FETjtBQUVFSyxpQkFBVyxFQUFFLDJDQUZmO0FBR0VDLGNBQVEsRUFBRSxhQUhaO0FBSUVDLG1CQUFhLEVBQUUsV0FKakI7QUFLRUMsZUFBUyxFQUNQO0FBTkosS0FEYyxFQVNkO0FBQ0VSLFFBQUUsRUFBRSxDQUROO0FBRUVLLGlCQUFXLEVBQUUsMkNBRmY7QUFHRUMsY0FBUSxFQUFFLGVBSFo7QUFJRUMsbUJBQWEsRUFBRSxRQUpqQjtBQUtFQyxlQUFTLEVBQ1A7QUFOSixLQVRjLEVBaUJkO0FBQ0VSLFFBQUUsRUFBRSxDQUROO0FBRUVLLGlCQUFXLEVBQUUsMkNBRmY7QUFHRUMsY0FBUSxFQUFFLGFBSFo7QUFJRUMsbUJBQWEsRUFBRSxXQUpqQjtBQUtFQyxlQUFTLEVBQ1A7QUFOSixLQWpCYztBQXpDVixHQXFFTDtBQUFBLE1BREhDLE1BQ0c7O0FBQ0gsVUFBUUEsTUFBTSxDQUFDQyxJQUFmO0FBQ0UsU0FBS0MsNkRBQUw7QUFDRSw2Q0FDS2YsS0FETDtBQUVFQyxpQkFBUyxFQUFFWSxNQUFNLENBQUNHO0FBRnBCOztBQUtGLFNBQUtELDJEQUFMO0FBQ0UsNkNBQ0tmLEtBREw7QUFFRUUsZ0JBQVEsRUFBRVcsTUFBTSxDQUFDRztBQUZuQjs7QUFLRjtBQUNFLGFBQU9oQixLQUFQO0FBZEo7QUFnQkQsQ0F2RkQ7O0FBeUZlRCxtRUFBZiIsImZpbGUiOiIuL3NyYy9yZWR1eC9yZWR1Y2Vycy9yZWR1Y2VyLnRzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0ICogYXMgdCBmcm9tIFwiQC9yZWR1eC90eXBlc1wiO1xuXG5pbnRlcmZhY2UgQWN0aW9uc0ludGVyZmFjZSB7XG4gIHR5cGU6IHN0cmluZztcbiAgcGF5bG9hZDogYW55O1xufVxuXG5jb25zdCBtYWluID0gKFxuICBzdGF0ZSA9IHtcbiAgICBmaXJzdE5hbWU6IFwiV2FsZWVkIEFsaVwiLFxuICAgIGxhc3ROYW1lOiBcIktoYW5cIixcbiAgICBsYXRlc3RUYWxlbnRzOiBbXG4gICAgICB7XG4gICAgICAgIGlkOiAxLFxuICAgICAgICBvcHBvcnR1bml0eU5hbWU6IFwiRnJvbnQtRW5kIERldmVsb3BlclwiLFxuICAgICAgICBtYXRjaDogXCI5NSVcIixcbiAgICAgICAgcmV2aWV3VGltZTogXCIxNiBob3Vyc1wiLFxuICAgICAgfSxcbiAgICAgIHtcbiAgICAgICAgaWQ6IDIsXG4gICAgICAgIG9wcG9ydHVuaXR5TmFtZTogXCJGcm9udC1FbmQgRGV2ZWxvcGVyXCIsXG4gICAgICAgIG1hdGNoOiBcIjg1JVwiLFxuICAgICAgICByZXZpZXdUaW1lOiBcIjEgZGF5XCIsXG4gICAgICB9LFxuICAgICAge1xuICAgICAgICBpZDogMyxcbiAgICAgICAgb3Bwb3J0dW5pdHlOYW1lOiBcIkZyb250LUVuZCBEZXZlbG9wZXJcIixcbiAgICAgICAgbWF0Y2g6IFwiNjUlXCIsXG4gICAgICAgIHJldmlld1RpbWU6IFwiNCBkYXlzXCIsXG4gICAgICB9LFxuICAgICAge1xuICAgICAgICBpZDogNCxcbiAgICAgICAgb3Bwb3J0dW5pdHlOYW1lOiBcIkJhY2stRW5kIERldmVsb3BlclwiLFxuICAgICAgICBtYXRjaDogXCI1NSVcIixcbiAgICAgICAgcmV2aWV3VGltZTogXCIyOCBkYXlzXCIsXG4gICAgICB9LFxuICAgICAge1xuICAgICAgICBpZDogNSxcbiAgICAgICAgb3Bwb3J0dW5pdHlOYW1lOiBcIkJhY2stRW5kIERldmVsb3BlclwiLFxuICAgICAgICBtYXRjaDogXCI1MyVcIixcbiAgICAgICAgcmV2aWV3VGltZTogXCIyOCBkYXlzXCIsXG4gICAgICB9LFxuICAgICAge1xuICAgICAgICBpZDogNixcbiAgICAgICAgb3Bwb3J0dW5pdHlOYW1lOiBcIkJhY2stRW5kIERldmVsb3BlclwiLFxuICAgICAgICBtYXRjaDogXCI1MyVcIixcbiAgICAgICAgcmV2aWV3VGltZTogXCIyOCBkYXlzXCIsXG4gICAgICB9LFxuICAgIF0sXG4gICAgdW5yZWFkTWVzc2FnZXM6IFtcbiAgICAgIHtcbiAgICAgICAgaWQ6IDEsXG4gICAgICAgIHByb2ZpbGVfaW1nOiBcIi9pbWcvdW5yZWFkLW1zZy1wcm9maWxlcy9wcm9maWxlX2ltZzEucG5nXCIsXG4gICAgICAgIHVzZXJuYW1lOiBcIkppbSBIYWxwZXJ0XCIsXG4gICAgICAgIGRlbGl2ZXJlZFRpbWU6IFwiMzBtaW4gYWdvXCIsXG4gICAgICAgIHVucmVhZE1zZzpcbiAgICAgICAgICBcIkhlbGxvIEkgd2FzIGp1c3Qgd29uZGVyaW5nIGhvdyB3ZSBjb3VsZCBoYW5kbGUgdGhpcyB0cmFuc2ZlciBmcm9tIG15IHBhcnQgc2luY2UgdGhhdCB3YXkgaXQuLi5cIixcbiAgICAgIH0sXG4gICAgICB7XG4gICAgICAgIGlkOiAyLFxuICAgICAgICBwcm9maWxlX2ltZzogXCIvaW1nL3VucmVhZC1tc2ctcHJvZmlsZXMvcHJvZmlsZV9pbWcyLnBuZ1wiLFxuICAgICAgICB1c2VybmFtZTogXCJBbmdlbGEgTWFydGluXCIsXG4gICAgICAgIGRlbGl2ZXJlZFRpbWU6IFwiMWggYWdvXCIsXG4gICAgICAgIHVucmVhZE1zZzpcbiAgICAgICAgICBcIlRoZSBwcm9ibGVtIHdlIGFyZSBmYWNpbmcgaXMgYmV5b25kIHlvdSBhbmQgbWUuIFdlIG5lZWQgdG8gdW5kZXJzdGFuZCB0aGF0IHByb2JsZW0gZmFyIGRlZXBlci4uLlwiLFxuICAgICAgfSxcbiAgICAgIHtcbiAgICAgICAgaWQ6IDMsXG4gICAgICAgIHByb2ZpbGVfaW1nOiBcIi9pbWcvdW5yZWFkLW1zZy1wcm9maWxlcy9wcm9maWxlX2ltZzMucG5nXCIsXG4gICAgICAgIHVzZXJuYW1lOiBcIlJ5YW4gSG93YXJkXCIsXG4gICAgICAgIGRlbGl2ZXJlZFRpbWU6IFwiMmRheXMgYWdvXCIsXG4gICAgICAgIHVucmVhZE1zZzpcbiAgICAgICAgICBcIlRoYW5rIHlvdSBzbyBtdWNoIGZvciBldmVyeXRoaW5nLCBpdCB3YXMgYW1hemluZyBpbnRlcnZpZXcuIFdlIHdpbGwgYmUgZGVmaW5pdGx5IGluIHRvdWNoIGluLi4uXCIsXG4gICAgICB9LFxuICAgIF0sXG4gIH0sXG4gIGFjdGlvbjogQWN0aW9uc0ludGVyZmFjZVxuKSA9PiB7XG4gIHN3aXRjaCAoYWN0aW9uLnR5cGUpIHtcbiAgICBjYXNlIHQuQ0hBTkdFX0ZJUlNUTkFNRTpcbiAgICAgIHJldHVybiB7XG4gICAgICAgIC4uLnN0YXRlLFxuICAgICAgICBmaXJzdE5hbWU6IGFjdGlvbi5wYXlsb2FkLFxuICAgICAgfTtcblxuICAgIGNhc2UgdC5DSEFORV9MQVNUTkFNRTpcbiAgICAgIHJldHVybiB7XG4gICAgICAgIC4uLnN0YXRlLFxuICAgICAgICBsYXN0TmFtZTogYWN0aW9uLnBheWxvYWQsXG4gICAgICB9O1xuXG4gICAgZGVmYXVsdDpcbiAgICAgIHJldHVybiBzdGF0ZTtcbiAgfVxufTtcblxuZXhwb3J0IGRlZmF1bHQgbWFpbjtcbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/redux/reducers/reducer.ts\n");

/***/ })

})
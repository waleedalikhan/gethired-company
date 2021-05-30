module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../ssr-module-cache.js');
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		var threw = true;
/******/ 		try {
/******/ 			modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete installedModules[moduleId];
/******/ 		}
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./.graphql-let.yml":
/*!**************************!*\
  !*** ./.graphql-let.yml ***!
  \**************************/
/*! exports provided: schema, schemaEntrypoint, documents, plugins, cacheDir, default */
/***/ (function(module) {

eval("module.exports = JSON.parse(\"{\\\"schema\\\":\\\"src/lib/gql/**/*.graphqls\\\",\\\"schemaEntrypoint\\\":\\\"src/lib/gql/type-defs.graphqls\\\",\\\"documents\\\":\\\"src/lib/gql/**/*.graphql\\\",\\\"plugins\\\":[\\\"typescript\\\",\\\"typescript-operations\\\",\\\"typescript-react-apollo\\\"],\\\"cacheDir\\\":\\\"__generated__\\\"}\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiIuLy5ncmFwaHFsLWxldC55bWwuanMiLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./.graphql-let.yml\n");

/***/ }),

/***/ "./node_modules/slick-carousel/slick/slick-theme.css":
/*!***********************************************************!*\
  !*** ./node_modules/slick-carousel/slick/slick-theme.css ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiIuL25vZGVfbW9kdWxlcy9zbGljay1jYXJvdXNlbC9zbGljay9zbGljay10aGVtZS5jc3MuanMiLCJzb3VyY2VzQ29udGVudCI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./node_modules/slick-carousel/slick/slick-theme.css\n");

/***/ }),

/***/ "./node_modules/slick-carousel/slick/slick.css":
/*!*****************************************************!*\
  !*** ./node_modules/slick-carousel/slick/slick.css ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiIuL25vZGVfbW9kdWxlcy9zbGljay1jYXJvdXNlbC9zbGljay9zbGljay5jc3MuanMiLCJzb3VyY2VzQ29udGVudCI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./node_modules/slick-carousel/slick/slick.css\n");

/***/ }),

/***/ "./src/lib/apollo.ts":
/*!***************************!*\
  !*** ./src/lib/apollo.ts ***!
  \***************************/
/*! exports provided: initializeApollo, useApollo */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"initializeApollo\", function() { return initializeApollo; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"useApollo\", function() { return useApollo; });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _apollo_client__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @apollo/client */ \"@apollo/client\");\n/* harmony import */ var _apollo_client__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_apollo_client__WEBPACK_IMPORTED_MODULE_1__);\n\n\nlet apolloClient;\n\nfunction createIsomorphLink(context = {}) {\n  if (true) {\n    const {\n      SchemaLink\n    } = __webpack_require__(/*! @apollo/client/link/schema */ \"@apollo/client/link/schema\");\n\n    const {\n      schema\n    } = __webpack_require__(/*! ./schema */ \"./src/lib/schema.ts\");\n\n    return new SchemaLink({\n      schema,\n      context\n    });\n  } else {}\n}\n\nfunction createApolloClient(context) {\n  return new _apollo_client__WEBPACK_IMPORTED_MODULE_1__[\"ApolloClient\"]({\n    ssrMode: true,\n    link: createIsomorphLink(context),\n    cache: new _apollo_client__WEBPACK_IMPORTED_MODULE_1__[\"InMemoryCache\"]()\n  });\n}\n\nfunction initializeApollo(initialState = null, // Pages with Next.js data fetching methods, like `getStaticProps`, can send\n// a custom context which will be used by `SchemaLink` to server render pages\ncontext) {\n  var _apolloClient2;\n\n  const _apolloClient = (_apolloClient2 = apolloClient) !== null && _apolloClient2 !== void 0 ? _apolloClient2 : createApolloClient(context); // If your page has Next.js data fetching methods that use Apollo Client, the initial state\n  // get hydrated here\n\n\n  if (initialState) {\n    _apolloClient.cache.restore(initialState);\n  } // For SSG and SSR always create a new Apollo Client\n\n\n  if (true) return _apolloClient; // Create the Apollo Client once in the client\n\n  if (!apolloClient) apolloClient = _apolloClient;\n  return _apolloClient;\n}\nfunction useApollo(initialState) {\n  const store = Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useMemo\"])(() => initializeApollo(initialState), [initialState]);\n  return store;\n}//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvbGliL2Fwb2xsby50cz82MGZiIl0sIm5hbWVzIjpbImFwb2xsb0NsaWVudCIsImNyZWF0ZUlzb21vcnBoTGluayIsImNvbnRleHQiLCJTY2hlbWFMaW5rIiwicmVxdWlyZSIsInNjaGVtYSIsImNyZWF0ZUFwb2xsb0NsaWVudCIsIkFwb2xsb0NsaWVudCIsInNzck1vZGUiLCJsaW5rIiwiY2FjaGUiLCJJbk1lbW9yeUNhY2hlIiwiaW5pdGlhbGl6ZUFwb2xsbyIsImluaXRpYWxTdGF0ZSIsIl9hcG9sbG9DbGllbnQiLCJyZXN0b3JlIiwidXNlQXBvbGxvIiwic3RvcmUiLCJ1c2VNZW1vIl0sIm1hcHBpbmdzIjoiQUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFNQSxJQUFJQSxZQUFKOztBQU9BLFNBQVNDLGtCQUFULENBQTRCQyxPQUF3QixHQUFHLEVBQXZELEVBQTJEO0FBQ3pELFlBQW1DO0FBQ2pDLFVBQU07QUFBRUM7QUFBRixRQUFpQkMsbUJBQU8sQ0FBQyw4REFBRCxDQUE5Qjs7QUFDQSxVQUFNO0FBQUVDO0FBQUYsUUFBYUQsbUJBQU8sQ0FBQyxxQ0FBRCxDQUExQjs7QUFDQSxXQUFPLElBQUlELFVBQUosQ0FBZTtBQUFFRSxZQUFGO0FBQVVIO0FBQVYsS0FBZixDQUFQO0FBQ0QsR0FKRCxNQUlPLEVBTU47QUFDRjs7QUFFRCxTQUFTSSxrQkFBVCxDQUE0QkosT0FBNUIsRUFBdUQ7QUFDckQsU0FBTyxJQUFJSywyREFBSixDQUFpQjtBQUN0QkMsV0FBTyxNQURlO0FBRXRCQyxRQUFJLEVBQUVSLGtCQUFrQixDQUFDQyxPQUFELENBRkY7QUFHdEJRLFNBQUssRUFBRSxJQUFJQyw0REFBSjtBQUhlLEdBQWpCLENBQVA7QUFLRDs7QUFFTSxTQUFTQyxnQkFBVCxDQUNMQyxZQUFpQixHQUFHLElBRGYsRUFFTDtBQUNBO0FBQ0FYLE9BSkssRUFLTDtBQUFBOztBQUNBLFFBQU1ZLGFBQWEscUJBQUdkLFlBQUgsMkRBQW1CTSxrQkFBa0IsQ0FBQ0osT0FBRCxDQUF4RCxDQURBLENBR0E7QUFDQTs7O0FBQ0EsTUFBSVcsWUFBSixFQUFrQjtBQUNoQkMsaUJBQWEsQ0FBQ0osS0FBZCxDQUFvQkssT0FBcEIsQ0FBNEJGLFlBQTVCO0FBQ0QsR0FQRCxDQVFBOzs7QUFDQSxZQUFtQyxPQUFPQyxhQUFQLENBVG5DLENBVUE7O0FBQ0EsTUFBSSxDQUFDZCxZQUFMLEVBQW1CQSxZQUFZLEdBQUdjLGFBQWY7QUFFbkIsU0FBT0EsYUFBUDtBQUNEO0FBRU0sU0FBU0UsU0FBVCxDQUFtQkgsWUFBbkIsRUFBc0M7QUFDM0MsUUFBTUksS0FBSyxHQUFHQyxxREFBTyxDQUFDLE1BQU1OLGdCQUFnQixDQUFDQyxZQUFELENBQXZCLEVBQXVDLENBQUNBLFlBQUQsQ0FBdkMsQ0FBckI7QUFDQSxTQUFPSSxLQUFQO0FBQ0QiLCJmaWxlIjoiLi9zcmMvbGliL2Fwb2xsby50cy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluY29taW5nTWVzc2FnZSwgU2VydmVyUmVzcG9uc2UgfSBmcm9tICdodHRwJ1xuaW1wb3J0IHsgdXNlTWVtbyB9IGZyb20gJ3JlYWN0J1xuaW1wb3J0IHtcbiAgQXBvbGxvQ2xpZW50LFxuICBJbk1lbW9yeUNhY2hlLFxuICBOb3JtYWxpemVkQ2FjaGVPYmplY3QsXG59IGZyb20gJ0BhcG9sbG8vY2xpZW50J1xuXG5sZXQgYXBvbGxvQ2xpZW50OiBBcG9sbG9DbGllbnQ8Tm9ybWFsaXplZENhY2hlT2JqZWN0PiB8IHVuZGVmaW5lZFxuXG5leHBvcnQgdHlwZSBSZXNvbHZlckNvbnRleHQgPSB7XG4gIHJlcT86IEluY29taW5nTWVzc2FnZVxuICByZXM/OiBTZXJ2ZXJSZXNwb25zZVxufVxuXG5mdW5jdGlvbiBjcmVhdGVJc29tb3JwaExpbmsoY29udGV4dDogUmVzb2x2ZXJDb250ZXh0ID0ge30pIHtcbiAgaWYgKHR5cGVvZiB3aW5kb3cgPT09ICd1bmRlZmluZWQnKSB7XG4gICAgY29uc3QgeyBTY2hlbWFMaW5rIH0gPSByZXF1aXJlKCdAYXBvbGxvL2NsaWVudC9saW5rL3NjaGVtYScpXG4gICAgY29uc3QgeyBzY2hlbWEgfSA9IHJlcXVpcmUoJy4vc2NoZW1hJylcbiAgICByZXR1cm4gbmV3IFNjaGVtYUxpbmsoeyBzY2hlbWEsIGNvbnRleHQgfSlcbiAgfSBlbHNlIHtcbiAgICBjb25zdCB7IEh0dHBMaW5rIH0gPSByZXF1aXJlKCdAYXBvbGxvL2NsaWVudCcpXG4gICAgcmV0dXJuIG5ldyBIdHRwTGluayh7XG4gICAgICB1cmk6ICcvYXBpL2dyYXBocWwnLFxuICAgICAgY3JlZGVudGlhbHM6ICdzYW1lLW9yaWdpbicsXG4gICAgfSlcbiAgfVxufVxuXG5mdW5jdGlvbiBjcmVhdGVBcG9sbG9DbGllbnQoY29udGV4dD86IFJlc29sdmVyQ29udGV4dCkge1xuICByZXR1cm4gbmV3IEFwb2xsb0NsaWVudCh7XG4gICAgc3NyTW9kZTogdHlwZW9mIHdpbmRvdyA9PT0gJ3VuZGVmaW5lZCcsXG4gICAgbGluazogY3JlYXRlSXNvbW9ycGhMaW5rKGNvbnRleHQpLFxuICAgIGNhY2hlOiBuZXcgSW5NZW1vcnlDYWNoZSgpLFxuICB9KVxufVxuXG5leHBvcnQgZnVuY3Rpb24gaW5pdGlhbGl6ZUFwb2xsbyhcbiAgaW5pdGlhbFN0YXRlOiBhbnkgPSBudWxsLFxuICAvLyBQYWdlcyB3aXRoIE5leHQuanMgZGF0YSBmZXRjaGluZyBtZXRob2RzLCBsaWtlIGBnZXRTdGF0aWNQcm9wc2AsIGNhbiBzZW5kXG4gIC8vIGEgY3VzdG9tIGNvbnRleHQgd2hpY2ggd2lsbCBiZSB1c2VkIGJ5IGBTY2hlbWFMaW5rYCB0byBzZXJ2ZXIgcmVuZGVyIHBhZ2VzXG4gIGNvbnRleHQ/OiBSZXNvbHZlckNvbnRleHRcbikge1xuICBjb25zdCBfYXBvbGxvQ2xpZW50ID0gYXBvbGxvQ2xpZW50ID8/IGNyZWF0ZUFwb2xsb0NsaWVudChjb250ZXh0KVxuXG4gIC8vIElmIHlvdXIgcGFnZSBoYXMgTmV4dC5qcyBkYXRhIGZldGNoaW5nIG1ldGhvZHMgdGhhdCB1c2UgQXBvbGxvIENsaWVudCwgdGhlIGluaXRpYWwgc3RhdGVcbiAgLy8gZ2V0IGh5ZHJhdGVkIGhlcmVcbiAgaWYgKGluaXRpYWxTdGF0ZSkge1xuICAgIF9hcG9sbG9DbGllbnQuY2FjaGUucmVzdG9yZShpbml0aWFsU3RhdGUpXG4gIH1cbiAgLy8gRm9yIFNTRyBhbmQgU1NSIGFsd2F5cyBjcmVhdGUgYSBuZXcgQXBvbGxvIENsaWVudFxuICBpZiAodHlwZW9mIHdpbmRvdyA9PT0gJ3VuZGVmaW5lZCcpIHJldHVybiBfYXBvbGxvQ2xpZW50XG4gIC8vIENyZWF0ZSB0aGUgQXBvbGxvIENsaWVudCBvbmNlIGluIHRoZSBjbGllbnRcbiAgaWYgKCFhcG9sbG9DbGllbnQpIGFwb2xsb0NsaWVudCA9IF9hcG9sbG9DbGllbnRcblxuICByZXR1cm4gX2Fwb2xsb0NsaWVudFxufVxuXG5leHBvcnQgZnVuY3Rpb24gdXNlQXBvbGxvKGluaXRpYWxTdGF0ZTogYW55KSB7XG4gIGNvbnN0IHN0b3JlID0gdXNlTWVtbygoKSA9PiBpbml0aWFsaXplQXBvbGxvKGluaXRpYWxTdGF0ZSksIFtpbml0aWFsU3RhdGVdKVxuICByZXR1cm4gc3RvcmVcbn1cbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/lib/apollo.ts\n");

/***/ }),

/***/ "./src/lib/resolvers.ts":
/*!******************************!*\
  !*** ./src/lib/resolvers.ts ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\nlet count = 0;\nlet postCounter = 0;\nconst userProfile = {\n  id: String(1),\n  name: 'John Smith',\n  status: 'cached'\n};\nconst postProfile = {\n  id: String(1),\n  title: 'My new blog',\n  slug: 'my_new_blog',\n  desc: 'This is a description'\n};\n\nconst sleep = ms => {\n  return new Promise(resolve => setTimeout(resolve, ms));\n};\n\nsleep(1);\nconst Query = {\n  async viewer(_parent, _args, _context, _info) {\n    // await sleep(2000);\n    console.log(count++); // throw ({ 'hehe': 'haha' });\n\n    userProfile.name = userProfile.name + ' - 1234';\n    return userProfile;\n  },\n\n  async post(_parent, _args, _context, _info) {\n    // await sleep(2000);\n    console.log('PostCounter : ', postCounter++);\n    return postProfile;\n  },\n\n  async news(_parent, _args, _context, _info) {\n    // await sleep(2000);\n    console.log('PostCounter : ', postCounter++);\n    return postProfile;\n  }\n\n};\nconst Mutation = {\n  updateName(_parent, _args, _context, _info) {\n    console.log(_args.name);\n    userProfile.name = _args.name;\n    return userProfile;\n  },\n\n  updatePost(_parent, _args, _context, _info) {\n    return postProfile;\n  }\n\n};\n/* harmony default export */ __webpack_exports__[\"default\"] = ({\n  Query,\n  Mutation\n});//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvbGliL3Jlc29sdmVycy50cz8xNzllIl0sIm5hbWVzIjpbImNvdW50IiwicG9zdENvdW50ZXIiLCJ1c2VyUHJvZmlsZSIsImlkIiwiU3RyaW5nIiwibmFtZSIsInN0YXR1cyIsInBvc3RQcm9maWxlIiwidGl0bGUiLCJzbHVnIiwiZGVzYyIsInNsZWVwIiwibXMiLCJQcm9taXNlIiwicmVzb2x2ZSIsInNldFRpbWVvdXQiLCJRdWVyeSIsInZpZXdlciIsIl9wYXJlbnQiLCJfYXJncyIsIl9jb250ZXh0IiwiX2luZm8iLCJjb25zb2xlIiwibG9nIiwicG9zdCIsIm5ld3MiLCJNdXRhdGlvbiIsInVwZGF0ZU5hbWUiLCJ1cGRhdGVQb3N0Il0sIm1hcHBpbmdzIjoiQUFHQTtBQUFBLElBQUlBLEtBQUssR0FBRyxDQUFaO0FBQ0EsSUFBSUMsV0FBVyxHQUFHLENBQWxCO0FBQ0EsTUFBTUMsV0FBVyxHQUFHO0FBQ2xCQyxJQUFFLEVBQUVDLE1BQU0sQ0FBQyxDQUFELENBRFE7QUFFbEJDLE1BQUksRUFBRSxZQUZZO0FBR2xCQyxRQUFNLEVBQUU7QUFIVSxDQUFwQjtBQU1BLE1BQU1DLFdBQVcsR0FBRztBQUNsQkosSUFBRSxFQUFFQyxNQUFNLENBQUMsQ0FBRCxDQURRO0FBRWxCSSxPQUFLLEVBQUUsYUFGVztBQUdsQkMsTUFBSSxFQUFFLGFBSFk7QUFJbEJDLE1BQUksRUFBRTtBQUpZLENBQXBCOztBQU9BLE1BQU1DLEtBQUssR0FBSUMsRUFBRCxJQUFnQjtBQUM1QixTQUFPLElBQUlDLE9BQUosQ0FBWUMsT0FBTyxJQUFJQyxVQUFVLENBQUNELE9BQUQsRUFBVUYsRUFBVixDQUFqQyxDQUFQO0FBQ0QsQ0FGRDs7QUFHQUQsS0FBSyxDQUFDLENBQUQsQ0FBTDtBQUlBLE1BQU1LLEtBQWdELEdBQUc7QUFDdkQsUUFBTUMsTUFBTixDQUFhQyxPQUFiLEVBQXNCQyxLQUF0QixFQUE2QkMsUUFBN0IsRUFBdUNDLEtBQXZDLEVBQThDO0FBQzVDO0FBQ0FDLFdBQU8sQ0FBQ0MsR0FBUixDQUFZdkIsS0FBSyxFQUFqQixFQUY0QyxDQUs1Qzs7QUFDQUUsZUFBVyxDQUFDRyxJQUFaLEdBQW1CSCxXQUFXLENBQUNHLElBQVosR0FBbUIsU0FBdEM7QUFDQSxXQUFPSCxXQUFQO0FBQ0QsR0FUc0Q7O0FBVXZELFFBQU1zQixJQUFOLENBQVdOLE9BQVgsRUFBb0JDLEtBQXBCLEVBQTJCQyxRQUEzQixFQUFxQ0MsS0FBckMsRUFBNEM7QUFDMUM7QUFDQUMsV0FBTyxDQUFDQyxHQUFSLENBQVksZ0JBQVosRUFBOEJ0QixXQUFXLEVBQXpDO0FBRUEsV0FBT00sV0FBUDtBQUNELEdBZnNEOztBQWdCdkQsUUFBTWtCLElBQU4sQ0FBV1AsT0FBWCxFQUFvQkMsS0FBcEIsRUFBMkJDLFFBQTNCLEVBQXFDQyxLQUFyQyxFQUE0QztBQUMxQztBQUNBQyxXQUFPLENBQUNDLEdBQVIsQ0FBWSxnQkFBWixFQUE4QnRCLFdBQVcsRUFBekM7QUFFQSxXQUFPTSxXQUFQO0FBQ0Q7O0FBckJzRCxDQUF6RDtBQXdCQSxNQUFNbUIsUUFBc0QsR0FBRztBQUM3REMsWUFBVSxDQUFDVCxPQUFELEVBQVVDLEtBQVYsRUFBaUJDLFFBQWpCLEVBQTJCQyxLQUEzQixFQUFrQztBQUMxQ0MsV0FBTyxDQUFDQyxHQUFSLENBQVlKLEtBQUssQ0FBQ2QsSUFBbEI7QUFFQUgsZUFBVyxDQUFDRyxJQUFaLEdBQW1CYyxLQUFLLENBQUNkLElBQXpCO0FBQ0EsV0FBT0gsV0FBUDtBQUNELEdBTjREOztBQU83RDBCLFlBQVUsQ0FBQ1YsT0FBRCxFQUFVQyxLQUFWLEVBQWlCQyxRQUFqQixFQUEyQkMsS0FBM0IsRUFBa0M7QUFDMUMsV0FBT2QsV0FBUDtBQUNEOztBQVQ0RCxDQUEvRDtBQVllO0FBQUVTLE9BQUY7QUFBU1U7QUFBVCxDQUFmIiwiZmlsZSI6Ii4vc3JjL2xpYi9yZXNvbHZlcnMudHMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBRdWVyeVJlc29sdmVycywgTXV0YXRpb25SZXNvbHZlcnMgfSBmcm9tICcuL2dxbC90eXBlLWRlZnMuZ3JhcGhxbHMnXG5pbXBvcnQgeyBSZXNvbHZlckNvbnRleHQgfSBmcm9tICcuL2Fwb2xsbydcblxubGV0IGNvdW50ID0gMDtcbmxldCBwb3N0Q291bnRlciA9IDA7XG5jb25zdCB1c2VyUHJvZmlsZSA9IHtcbiAgaWQ6IFN0cmluZygxKSxcbiAgbmFtZTogJ0pvaG4gU21pdGgnLFxuICBzdGF0dXM6ICdjYWNoZWQnLFxufVxuXG5jb25zdCBwb3N0UHJvZmlsZSA9IHtcbiAgaWQ6IFN0cmluZygxKSxcbiAgdGl0bGU6ICdNeSBuZXcgYmxvZycsXG4gIHNsdWc6ICdteV9uZXdfYmxvZycsXG4gIGRlc2M6ICdUaGlzIGlzIGEgZGVzY3JpcHRpb24nXG59XG5cbmNvbnN0IHNsZWVwID0gKG1zOiBudW1iZXIpID0+IHtcbiAgcmV0dXJuIG5ldyBQcm9taXNlKHJlc29sdmUgPT4gc2V0VGltZW91dChyZXNvbHZlLCBtcykpO1xufVxuc2xlZXAoMSk7XG5cblxuXG5jb25zdCBRdWVyeTogUmVxdWlyZWQ8UXVlcnlSZXNvbHZlcnM8UmVzb2x2ZXJDb250ZXh0Pj4gPSB7XG4gIGFzeW5jIHZpZXdlcihfcGFyZW50LCBfYXJncywgX2NvbnRleHQsIF9pbmZvKSB7XG4gICAgLy8gYXdhaXQgc2xlZXAoMjAwMCk7XG4gICAgY29uc29sZS5sb2coY291bnQrKyk7XG5cblxuICAgIC8vIHRocm93ICh7ICdoZWhlJzogJ2hhaGEnIH0pO1xuICAgIHVzZXJQcm9maWxlLm5hbWUgPSB1c2VyUHJvZmlsZS5uYW1lICsgJyAtIDEyMzQnXG4gICAgcmV0dXJuIHVzZXJQcm9maWxlXG4gIH0sXG4gIGFzeW5jIHBvc3QoX3BhcmVudCwgX2FyZ3MsIF9jb250ZXh0LCBfaW5mbykge1xuICAgIC8vIGF3YWl0IHNsZWVwKDIwMDApO1xuICAgIGNvbnNvbGUubG9nKCdQb3N0Q291bnRlciA6ICcsIHBvc3RDb3VudGVyKyspO1xuXG4gICAgcmV0dXJuIHBvc3RQcm9maWxlO1xuICB9LFxuICBhc3luYyBuZXdzKF9wYXJlbnQsIF9hcmdzLCBfY29udGV4dCwgX2luZm8pIHtcbiAgICAvLyBhd2FpdCBzbGVlcCgyMDAwKTtcbiAgICBjb25zb2xlLmxvZygnUG9zdENvdW50ZXIgOiAnLCBwb3N0Q291bnRlcisrKTtcblxuICAgIHJldHVybiBwb3N0UHJvZmlsZTtcbiAgfVxufVxuXG5jb25zdCBNdXRhdGlvbjogUmVxdWlyZWQ8TXV0YXRpb25SZXNvbHZlcnM8UmVzb2x2ZXJDb250ZXh0Pj4gPSB7XG4gIHVwZGF0ZU5hbWUoX3BhcmVudCwgX2FyZ3MsIF9jb250ZXh0LCBfaW5mbykge1xuICAgIGNvbnNvbGUubG9nKF9hcmdzLm5hbWUpO1xuXG4gICAgdXNlclByb2ZpbGUubmFtZSA9IF9hcmdzLm5hbWVcbiAgICByZXR1cm4gdXNlclByb2ZpbGVcbiAgfSxcbiAgdXBkYXRlUG9zdChfcGFyZW50LCBfYXJncywgX2NvbnRleHQsIF9pbmZvKSB7XG4gICAgcmV0dXJuIHBvc3RQcm9maWxlXG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgeyBRdWVyeSwgTXV0YXRpb24gfVxuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/lib/resolvers.ts\n");

/***/ }),

/***/ "./src/lib/schema.ts":
/*!***************************!*\
  !*** ./src/lib/schema.ts ***!
  \***************************/
/*! exports provided: schema */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"schema\", function() { return schema; });\n/* harmony import */ var path__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! path */ \"path\");\n/* harmony import */ var path__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(path__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _graphql_tools_schema__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @graphql-tools/schema */ \"@graphql-tools/schema\");\n/* harmony import */ var _graphql_tools_schema__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_graphql_tools_schema__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _graphql_tools_load_files__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @graphql-tools/load-files */ \"@graphql-tools/load-files\");\n/* harmony import */ var _graphql_tools_load_files__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_graphql_tools_load_files__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _graphql_tools_merge__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @graphql-tools/merge */ \"@graphql-tools/merge\");\n/* harmony import */ var _graphql_tools_merge__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_graphql_tools_merge__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _graphql_let_yml__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../.graphql-let.yml */ \"./.graphql-let.yml\");\nvar _graphql_let_yml__WEBPACK_IMPORTED_MODULE_4___namespace = /*#__PURE__*/__webpack_require__.t(/*! ../../.graphql-let.yml */ \"./.graphql-let.yml\", 1);\n/* harmony import */ var _resolvers__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./resolvers */ \"./src/lib/resolvers.ts\");\n\n\n\n\n\n\nconst loadedFiles = Object(_graphql_tools_load_files__WEBPACK_IMPORTED_MODULE_2__[\"loadFilesSync\"])(Object(path__WEBPACK_IMPORTED_MODULE_0__[\"join\"])(process.cwd(), _graphql_let_yml__WEBPACK_IMPORTED_MODULE_4__.schema)); // console.log(process.cwd());\n// console.log(graphQLLetConfig.schema);\n// console.log(loadedFiles);\n\nconst typeDefs = Object(_graphql_tools_merge__WEBPACK_IMPORTED_MODULE_3__[\"mergeTypeDefs\"])(loadedFiles);\nconst schema = Object(_graphql_tools_schema__WEBPACK_IMPORTED_MODULE_1__[\"makeExecutableSchema\"])({\n  typeDefs,\n  resolvers: _resolvers__WEBPACK_IMPORTED_MODULE_5__[\"default\"]\n});//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvbGliL3NjaGVtYS50cz8xNzgyIl0sIm5hbWVzIjpbImxvYWRlZEZpbGVzIiwibG9hZEZpbGVzU3luYyIsImpvaW4iLCJwcm9jZXNzIiwiY3dkIiwiZ3JhcGhRTExldENvbmZpZyIsInNjaGVtYSIsInR5cGVEZWZzIiwibWVyZ2VUeXBlRGVmcyIsIm1ha2VFeGVjdXRhYmxlU2NoZW1hIiwicmVzb2x2ZXJzIl0sIm1hcHBpbmdzIjoiQUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBLE1BQU1BLFdBQVcsR0FBR0MsK0VBQWEsQ0FBQ0MsaURBQUksQ0FBQ0MsT0FBTyxDQUFDQyxHQUFSLEVBQUQsRUFBZ0JDLDZDQUFnQixDQUFDQyxNQUFqQyxDQUFMLENBQWpDLEMsQ0FDQTtBQUVBO0FBRUE7O0FBRUEsTUFBTUMsUUFBUSxHQUFHQywwRUFBYSxDQUFDUixXQUFELENBQTlCO0FBRU8sTUFBTU0sTUFBTSxHQUFHRyxrRkFBb0IsQ0FBQztBQUN6Q0YsVUFEeUM7QUFFekNHLCtEQUFTQTtBQUZnQyxDQUFELENBQW5DIiwiZmlsZSI6Ii4vc3JjL2xpYi9zY2hlbWEudHMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBqb2luIH0gZnJvbSAncGF0aCdcbmltcG9ydCB7IG1ha2VFeGVjdXRhYmxlU2NoZW1hIH0gZnJvbSAnQGdyYXBocWwtdG9vbHMvc2NoZW1hJ1xuaW1wb3J0IHsgbG9hZEZpbGVzU3luYyB9IGZyb20gJ0BncmFwaHFsLXRvb2xzL2xvYWQtZmlsZXMnXG5pbXBvcnQgeyBtZXJnZVR5cGVEZWZzIH0gZnJvbSAnQGdyYXBocWwtdG9vbHMvbWVyZ2UnXG5pbXBvcnQgZ3JhcGhRTExldENvbmZpZyBmcm9tICcuLi8uLi8uZ3JhcGhxbC1sZXQueW1sJ1xuaW1wb3J0IHJlc29sdmVycyBmcm9tICcuL3Jlc29sdmVycydcblxuY29uc3QgbG9hZGVkRmlsZXMgPSBsb2FkRmlsZXNTeW5jKGpvaW4ocHJvY2Vzcy5jd2QoKSwgZ3JhcGhRTExldENvbmZpZy5zY2hlbWEpKVxuLy8gY29uc29sZS5sb2cocHJvY2Vzcy5jd2QoKSk7XG5cbi8vIGNvbnNvbGUubG9nKGdyYXBoUUxMZXRDb25maWcuc2NoZW1hKTtcblxuLy8gY29uc29sZS5sb2cobG9hZGVkRmlsZXMpO1xuXG5jb25zdCB0eXBlRGVmcyA9IG1lcmdlVHlwZURlZnMobG9hZGVkRmlsZXMpXG5cbmV4cG9ydCBjb25zdCBzY2hlbWEgPSBtYWtlRXhlY3V0YWJsZVNjaGVtYSh7XG4gIHR5cGVEZWZzLFxuICByZXNvbHZlcnMsXG59KVxuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/lib/schema.ts\n");

/***/ }),

/***/ "./src/pages/_app.tsx":
/*!****************************!*\
  !*** ./src/pages/_app.tsx ***!
  \****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _apollo_client__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @apollo/client */ \"@apollo/client\");\n/* harmony import */ var _apollo_client__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_apollo_client__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-redux */ \"react-redux\");\n/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _lib_apollo__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../lib/apollo */ \"./src/lib/apollo.ts\");\n/* harmony import */ var _redux_store__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @/redux/store */ \"./src/redux/store.ts\");\n/* harmony import */ var next_redux_wrapper__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! next-redux-wrapper */ \"next-redux-wrapper\");\n/* harmony import */ var next_redux_wrapper__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(next_redux_wrapper__WEBPACK_IMPORTED_MODULE_6__);\n/* harmony import */ var _styles_tailwind_css__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../styles/tailwind.css */ \"./src/styles/tailwind.css\");\n/* harmony import */ var _styles_tailwind_css__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_styles_tailwind_css__WEBPACK_IMPORTED_MODULE_7__);\n/* harmony import */ var slick_carousel_slick_slick_css__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! slick-carousel/slick/slick.css */ \"./node_modules/slick-carousel/slick/slick.css\");\n/* harmony import */ var slick_carousel_slick_slick_css__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(slick_carousel_slick_slick_css__WEBPACK_IMPORTED_MODULE_8__);\n/* harmony import */ var slick_carousel_slick_slick_theme_css__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! slick-carousel/slick/slick-theme.css */ \"./node_modules/slick-carousel/slick/slick-theme.css\");\n/* harmony import */ var slick_carousel_slick_slick_theme_css__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(slick_carousel_slick_slick_theme_css__WEBPACK_IMPORTED_MODULE_9__);\n/* harmony import */ var _styles_global_scss__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../styles/global.scss */ \"./src/styles/global.scss\");\n/* harmony import */ var _styles_global_scss__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(_styles_global_scss__WEBPACK_IMPORTED_MODULE_10__);\n\nvar _jsxFileName = \"/Users/waleed/iwork/jobs/upwork/Matthew/gethired-company/src/pages/_app.tsx\";\n\n\n\n\n\n\n\n\n\n // import { ApolloClient, InMemoryCache } from '@apollo/client';\n// const client = new ApolloClient({\n//   uri: '/api/graphql',\n//   cache: new InMemoryCache(),\n// });\n\nconst App = ({\n  Component,\n  pageProps\n}) => {\n  const apolloClient = Object(_lib_apollo__WEBPACK_IMPORTED_MODULE_4__[\"useApollo\"])(pageProps.initialApolloState);\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_apollo_client__WEBPACK_IMPORTED_MODULE_2__[\"ApolloProvider\"], {\n    client: apolloClient,\n    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(react_redux__WEBPACK_IMPORTED_MODULE_3__[\"Provider\"], {\n      store: _redux_store__WEBPACK_IMPORTED_MODULE_5__[\"default\"],\n      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(Component, {}, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 25,\n        columnNumber: 9\n      }, undefined)\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 24,\n      columnNumber: 7\n    }, undefined)\n  }, void 0, false, {\n    fileName: _jsxFileName,\n    lineNumber: 23,\n    columnNumber: 5\n  }, undefined);\n};\n\nconst makeStore = () => _redux_store__WEBPACK_IMPORTED_MODULE_5__[\"default\"];\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (next_redux_wrapper__WEBPACK_IMPORTED_MODULE_6___default()(makeStore)(App));//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvcGFnZXMvX2FwcC50c3g/ODU0OCJdLCJuYW1lcyI6WyJBcHAiLCJDb21wb25lbnQiLCJwYWdlUHJvcHMiLCJhcG9sbG9DbGllbnQiLCJ1c2VBcG9sbG8iLCJpbml0aWFsQXBvbGxvU3RhdGUiLCJzdG9yZSIsIm1ha2VTdG9yZSIsIndpdGhSZWR1eCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Q0FHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLE1BQU1BLEdBQXVCLEdBQUcsQ0FBQztBQUFFQyxXQUFGO0FBQWFDO0FBQWIsQ0FBRCxLQUE4QjtBQUM1RCxRQUFNQyxZQUFZLEdBQUdDLDZEQUFTLENBQUNGLFNBQVMsQ0FBQ0csa0JBQVgsQ0FBOUI7QUFFQSxzQkFDRSxxRUFBQyw2REFBRDtBQUFnQixVQUFNLEVBQUVGLFlBQXhCO0FBQUEsMkJBQ0UscUVBQUMsb0RBQUQ7QUFBVSxXQUFLLEVBQUVHLG9EQUFqQjtBQUFBLDZCQUNFLHFFQUFDLFNBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBREY7QUFPRCxDQVZEOztBQVlBLE1BQU1DLFNBQVMsR0FBRyxNQUFNRCxvREFBeEI7O0FBRWVFLHdIQUFTLENBQUNELFNBQUQsQ0FBVCxDQUFxQlAsR0FBckIsQ0FBZiIsImZpbGUiOiIuL3NyYy9wYWdlcy9fYXBwLnRzeC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCB7IEFwcFByb3BzIH0gZnJvbSBcIm5leHQvYXBwXCI7XG5pbXBvcnQgeyBBcG9sbG9Qcm92aWRlciB9IGZyb20gXCJAYXBvbGxvL2NsaWVudFwiO1xuaW1wb3J0IHsgUHJvdmlkZXIgfSBmcm9tIFwicmVhY3QtcmVkdXhcIjtcbmltcG9ydCB7IHVzZUFwb2xsbyB9IGZyb20gXCIuLi9saWIvYXBvbGxvXCI7XG5pbXBvcnQgc3RvcmUgZnJvbSBcIkAvcmVkdXgvc3RvcmVcIjtcbmltcG9ydCB3aXRoUmVkdXggZnJvbSBcIm5leHQtcmVkdXgtd3JhcHBlclwiO1xuaW1wb3J0IFwiLi4vc3R5bGVzL3RhaWx3aW5kLmNzc1wiO1xuaW1wb3J0IFwic2xpY2stY2Fyb3VzZWwvc2xpY2svc2xpY2suY3NzXCI7XG5pbXBvcnQgXCJzbGljay1jYXJvdXNlbC9zbGljay9zbGljay10aGVtZS5jc3NcIlxuaW1wb3J0IFwiLi4vc3R5bGVzL2dsb2JhbC5zY3NzXCI7XG5cbi8vIGltcG9ydCB7IEFwb2xsb0NsaWVudCwgSW5NZW1vcnlDYWNoZSB9IGZyb20gJ0BhcG9sbG8vY2xpZW50Jztcbi8vIGNvbnN0IGNsaWVudCA9IG5ldyBBcG9sbG9DbGllbnQoe1xuLy8gICB1cmk6ICcvYXBpL2dyYXBocWwnLFxuLy8gICBjYWNoZTogbmV3IEluTWVtb3J5Q2FjaGUoKSxcbi8vIH0pO1xuXG5jb25zdCBBcHA6IFJlYWN0LkZDPEFwcFByb3BzPiA9ICh7IENvbXBvbmVudCwgcGFnZVByb3BzIH0pID0+IHtcbiAgY29uc3QgYXBvbGxvQ2xpZW50ID0gdXNlQXBvbGxvKHBhZ2VQcm9wcy5pbml0aWFsQXBvbGxvU3RhdGUpO1xuXG4gIHJldHVybiAoXG4gICAgPEFwb2xsb1Byb3ZpZGVyIGNsaWVudD17YXBvbGxvQ2xpZW50fT5cbiAgICAgIDxQcm92aWRlciBzdG9yZT17c3RvcmV9PlxuICAgICAgICA8Q29tcG9uZW50IC8+XG4gICAgICA8L1Byb3ZpZGVyPlxuICAgIDwvQXBvbGxvUHJvdmlkZXI+XG4gICk7XG59O1xuXG5jb25zdCBtYWtlU3RvcmUgPSAoKSA9PiBzdG9yZTtcblxuZXhwb3J0IGRlZmF1bHQgd2l0aFJlZHV4KG1ha2VTdG9yZSkoQXBwKTtcbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/pages/_app.tsx\n");

/***/ }),

/***/ "./src/redux/reducers/reducer.ts":
/*!***************************************!*\
  !*** ./src/redux/reducers/reducer.ts ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _redux_types__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @/redux/types */ \"./src/redux/types.ts\");\nfunction ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }\n\nfunction _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }\n\nfunction _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }\n\n\n\nconst main = (state = {\n  firstName: \"Waleed Ali\",\n  lastName: \"Khan\",\n  latestTalents: [{\n    id: 1,\n    opportunityName: \"Front-End Developer\",\n    match: \"95%\",\n    reviewTime: \"16 hours\"\n  }, {\n    id: 2,\n    opportunityName: \"Front-End Developer\",\n    match: \"85%\",\n    reviewTime: \"1 day\"\n  }, {\n    id: 3,\n    opportunityName: \"Front-End Developer\",\n    match: \"65%\",\n    reviewTime: \"4 days\"\n  }, {\n    id: 4,\n    opportunityName: \"Back-End Developer\",\n    match: \"55%\",\n    reviewTime: \"28 days\"\n  }, {\n    id: 5,\n    opportunityName: \"Back-End Developer\",\n    match: \"53%\",\n    reviewTime: \"28 days\"\n  }, {\n    id: 6,\n    opportunityName: \"Back-End Developer\",\n    match: \"53%\",\n    reviewTime: \"28 days\"\n  }],\n  unreadMessages: [{\n    id: 1,\n    profile_img: \"/img/unread-msg-profiles/profile_img1.png\",\n    username: \"Jim Halpert\",\n    deliveredTime: \"30min ago\",\n    unreadMsg: \"Hello I was just wondering how we could handle this transfer from my part since that way it...\"\n  }, {\n    id: 2,\n    profile_img: \"/img/unread-msg-profiles/profile_img2.png\",\n    username: \"Angela Martin\",\n    deliveredTime: \"1h ago\",\n    unreadMsg: \"The problem we are facing is beyond you and me. We need to understand that problem far deeper...\"\n  }, {\n    id: 3,\n    profile_img: \"/img/unread-msg-profiles/profile_img3.png\",\n    username: \"Ryan Howard\",\n    deliveredTime: \"2days ago\",\n    unreadMsg: \"Thank you so much for everything, it was amazing interview. We will be definitly in touch in...\"\n  }],\n  chatInitiaterData: [{\n    id: 1,\n    sent: true,\n    message: \"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Tortor mattis nunc commodo pharetra vel elit. Elementum enim, mollis id dolor, tortor in. Turpis sed arcu suspendisse neque. Varius sem feugiat lacus et se?\"\n  }, {\n    id: 2,\n    sent: false,\n    msg: \"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Tortor mattis nunc commodo pharetra vel elit. Elementum enim, mollis id dolor, tortor in. Turpis sed arcu suspendisse neque. Varius sem feugiat lacus et se?\",\n    profilePic: \"/img/chat-initiater.png\"\n  }],\n  chatInitiaterHeaderInfo: {\n    username: \"Kelly\",\n    roll: \"gethired chat support\",\n    userPic: \"/img/chat-initiater.png\"\n  }\n}, action) => {\n  switch (action.type) {\n    case _redux_types__WEBPACK_IMPORTED_MODULE_0__[\"CHANGE_FIRSTNAME\"]:\n      return _objectSpread(_objectSpread({}, state), {}, {\n        firstName: action.payload\n      });\n\n    case _redux_types__WEBPACK_IMPORTED_MODULE_0__[\"CHANE_LASTNAME\"]:\n      return _objectSpread(_objectSpread({}, state), {}, {\n        lastName: action.payload\n      });\n\n    default:\n      return state;\n  }\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (main);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvcmVkdXgvcmVkdWNlcnMvcmVkdWNlci50cz84YjE2Il0sIm5hbWVzIjpbIm1haW4iLCJzdGF0ZSIsImZpcnN0TmFtZSIsImxhc3ROYW1lIiwibGF0ZXN0VGFsZW50cyIsImlkIiwib3Bwb3J0dW5pdHlOYW1lIiwibWF0Y2giLCJyZXZpZXdUaW1lIiwidW5yZWFkTWVzc2FnZXMiLCJwcm9maWxlX2ltZyIsInVzZXJuYW1lIiwiZGVsaXZlcmVkVGltZSIsInVucmVhZE1zZyIsImNoYXRJbml0aWF0ZXJEYXRhIiwic2VudCIsIm1lc3NhZ2UiLCJtc2ciLCJwcm9maWxlUGljIiwiY2hhdEluaXRpYXRlckhlYWRlckluZm8iLCJyb2xsIiwidXNlclBpYyIsImFjdGlvbiIsInR5cGUiLCJ0IiwicGF5bG9hZCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7QUFBQTs7QUFPQSxNQUFNQSxJQUFJLEdBQUcsQ0FDWEMsS0FBSyxHQUFHO0FBQ05DLFdBQVMsRUFBRSxZQURMO0FBRU5DLFVBQVEsRUFBRSxNQUZKO0FBR05DLGVBQWEsRUFBRSxDQUNiO0FBQ0VDLE1BQUUsRUFBRSxDQUROO0FBRUVDLG1CQUFlLEVBQUUscUJBRm5CO0FBR0VDLFNBQUssRUFBRSxLQUhUO0FBSUVDLGNBQVUsRUFBRTtBQUpkLEdBRGEsRUFPYjtBQUNFSCxNQUFFLEVBQUUsQ0FETjtBQUVFQyxtQkFBZSxFQUFFLHFCQUZuQjtBQUdFQyxTQUFLLEVBQUUsS0FIVDtBQUlFQyxjQUFVLEVBQUU7QUFKZCxHQVBhLEVBYWI7QUFDRUgsTUFBRSxFQUFFLENBRE47QUFFRUMsbUJBQWUsRUFBRSxxQkFGbkI7QUFHRUMsU0FBSyxFQUFFLEtBSFQ7QUFJRUMsY0FBVSxFQUFFO0FBSmQsR0FiYSxFQW1CYjtBQUNFSCxNQUFFLEVBQUUsQ0FETjtBQUVFQyxtQkFBZSxFQUFFLG9CQUZuQjtBQUdFQyxTQUFLLEVBQUUsS0FIVDtBQUlFQyxjQUFVLEVBQUU7QUFKZCxHQW5CYSxFQXlCYjtBQUNFSCxNQUFFLEVBQUUsQ0FETjtBQUVFQyxtQkFBZSxFQUFFLG9CQUZuQjtBQUdFQyxTQUFLLEVBQUUsS0FIVDtBQUlFQyxjQUFVLEVBQUU7QUFKZCxHQXpCYSxFQStCYjtBQUNFSCxNQUFFLEVBQUUsQ0FETjtBQUVFQyxtQkFBZSxFQUFFLG9CQUZuQjtBQUdFQyxTQUFLLEVBQUUsS0FIVDtBQUlFQyxjQUFVLEVBQUU7QUFKZCxHQS9CYSxDQUhUO0FBeUNOQyxnQkFBYyxFQUFFLENBQ2Q7QUFDRUosTUFBRSxFQUFFLENBRE47QUFFRUssZUFBVyxFQUFFLDJDQUZmO0FBR0VDLFlBQVEsRUFBRSxhQUhaO0FBSUVDLGlCQUFhLEVBQUUsV0FKakI7QUFLRUMsYUFBUyxFQUNQO0FBTkosR0FEYyxFQVNkO0FBQ0VSLE1BQUUsRUFBRSxDQUROO0FBRUVLLGVBQVcsRUFBRSwyQ0FGZjtBQUdFQyxZQUFRLEVBQUUsZUFIWjtBQUlFQyxpQkFBYSxFQUFFLFFBSmpCO0FBS0VDLGFBQVMsRUFDUDtBQU5KLEdBVGMsRUFpQmQ7QUFDRVIsTUFBRSxFQUFFLENBRE47QUFFRUssZUFBVyxFQUFFLDJDQUZmO0FBR0VDLFlBQVEsRUFBRSxhQUhaO0FBSUVDLGlCQUFhLEVBQUUsV0FKakI7QUFLRUMsYUFBUyxFQUNQO0FBTkosR0FqQmMsQ0F6Q1Y7QUFtRU5DLG1CQUFpQixFQUFFLENBQ2pCO0FBQ0VULE1BQUUsRUFBRSxDQUROO0FBRUVVLFFBQUksRUFBRSxJQUZSO0FBR0VDLFdBQU8sRUFDTDtBQUpKLEdBRGlCLEVBT2pCO0FBQ0VYLE1BQUUsRUFBRSxDQUROO0FBRUVVLFFBQUksRUFBRSxLQUZSO0FBR0VFLE9BQUcsRUFBRSx1TkFIUDtBQUlFQyxjQUFVLEVBQUU7QUFKZCxHQVBpQixDQW5FYjtBQWlGTkMseUJBQXVCLEVBQUU7QUFDdkJSLFlBQVEsRUFBRSxPQURhO0FBRXZCUyxRQUFJLEVBQUUsdUJBRmlCO0FBR3ZCQyxXQUFPLEVBQUU7QUFIYztBQWpGbkIsQ0FERyxFQXdGWEMsTUF4RlcsS0F5RlI7QUFDSCxVQUFRQSxNQUFNLENBQUNDLElBQWY7QUFDRSxTQUFLQyw2REFBTDtBQUNFLDZDQUNLdkIsS0FETDtBQUVFQyxpQkFBUyxFQUFFb0IsTUFBTSxDQUFDRztBQUZwQjs7QUFLRixTQUFLRCwyREFBTDtBQUNFLDZDQUNLdkIsS0FETDtBQUVFRSxnQkFBUSxFQUFFbUIsTUFBTSxDQUFDRztBQUZuQjs7QUFLRjtBQUNFLGFBQU94QixLQUFQO0FBZEo7QUFnQkQsQ0ExR0Q7O0FBNEdlRCxtRUFBZiIsImZpbGUiOiIuL3NyYy9yZWR1eC9yZWR1Y2Vycy9yZWR1Y2VyLnRzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0ICogYXMgdCBmcm9tIFwiQC9yZWR1eC90eXBlc1wiO1xuXG5pbnRlcmZhY2UgQWN0aW9uc0ludGVyZmFjZSB7XG4gIHR5cGU6IHN0cmluZztcbiAgcGF5bG9hZDogYW55O1xufVxuXG5jb25zdCBtYWluID0gKFxuICBzdGF0ZSA9IHtcbiAgICBmaXJzdE5hbWU6IFwiV2FsZWVkIEFsaVwiLFxuICAgIGxhc3ROYW1lOiBcIktoYW5cIixcbiAgICBsYXRlc3RUYWxlbnRzOiBbXG4gICAgICB7XG4gICAgICAgIGlkOiAxLFxuICAgICAgICBvcHBvcnR1bml0eU5hbWU6IFwiRnJvbnQtRW5kIERldmVsb3BlclwiLFxuICAgICAgICBtYXRjaDogXCI5NSVcIixcbiAgICAgICAgcmV2aWV3VGltZTogXCIxNiBob3Vyc1wiLFxuICAgICAgfSxcbiAgICAgIHtcbiAgICAgICAgaWQ6IDIsXG4gICAgICAgIG9wcG9ydHVuaXR5TmFtZTogXCJGcm9udC1FbmQgRGV2ZWxvcGVyXCIsXG4gICAgICAgIG1hdGNoOiBcIjg1JVwiLFxuICAgICAgICByZXZpZXdUaW1lOiBcIjEgZGF5XCIsXG4gICAgICB9LFxuICAgICAge1xuICAgICAgICBpZDogMyxcbiAgICAgICAgb3Bwb3J0dW5pdHlOYW1lOiBcIkZyb250LUVuZCBEZXZlbG9wZXJcIixcbiAgICAgICAgbWF0Y2g6IFwiNjUlXCIsXG4gICAgICAgIHJldmlld1RpbWU6IFwiNCBkYXlzXCIsXG4gICAgICB9LFxuICAgICAge1xuICAgICAgICBpZDogNCxcbiAgICAgICAgb3Bwb3J0dW5pdHlOYW1lOiBcIkJhY2stRW5kIERldmVsb3BlclwiLFxuICAgICAgICBtYXRjaDogXCI1NSVcIixcbiAgICAgICAgcmV2aWV3VGltZTogXCIyOCBkYXlzXCIsXG4gICAgICB9LFxuICAgICAge1xuICAgICAgICBpZDogNSxcbiAgICAgICAgb3Bwb3J0dW5pdHlOYW1lOiBcIkJhY2stRW5kIERldmVsb3BlclwiLFxuICAgICAgICBtYXRjaDogXCI1MyVcIixcbiAgICAgICAgcmV2aWV3VGltZTogXCIyOCBkYXlzXCIsXG4gICAgICB9LFxuICAgICAge1xuICAgICAgICBpZDogNixcbiAgICAgICAgb3Bwb3J0dW5pdHlOYW1lOiBcIkJhY2stRW5kIERldmVsb3BlclwiLFxuICAgICAgICBtYXRjaDogXCI1MyVcIixcbiAgICAgICAgcmV2aWV3VGltZTogXCIyOCBkYXlzXCIsXG4gICAgICB9LFxuICAgIF0sXG4gICAgdW5yZWFkTWVzc2FnZXM6IFtcbiAgICAgIHtcbiAgICAgICAgaWQ6IDEsXG4gICAgICAgIHByb2ZpbGVfaW1nOiBcIi9pbWcvdW5yZWFkLW1zZy1wcm9maWxlcy9wcm9maWxlX2ltZzEucG5nXCIsXG4gICAgICAgIHVzZXJuYW1lOiBcIkppbSBIYWxwZXJ0XCIsXG4gICAgICAgIGRlbGl2ZXJlZFRpbWU6IFwiMzBtaW4gYWdvXCIsXG4gICAgICAgIHVucmVhZE1zZzpcbiAgICAgICAgICBcIkhlbGxvIEkgd2FzIGp1c3Qgd29uZGVyaW5nIGhvdyB3ZSBjb3VsZCBoYW5kbGUgdGhpcyB0cmFuc2ZlciBmcm9tIG15IHBhcnQgc2luY2UgdGhhdCB3YXkgaXQuLi5cIixcbiAgICAgIH0sXG4gICAgICB7XG4gICAgICAgIGlkOiAyLFxuICAgICAgICBwcm9maWxlX2ltZzogXCIvaW1nL3VucmVhZC1tc2ctcHJvZmlsZXMvcHJvZmlsZV9pbWcyLnBuZ1wiLFxuICAgICAgICB1c2VybmFtZTogXCJBbmdlbGEgTWFydGluXCIsXG4gICAgICAgIGRlbGl2ZXJlZFRpbWU6IFwiMWggYWdvXCIsXG4gICAgICAgIHVucmVhZE1zZzpcbiAgICAgICAgICBcIlRoZSBwcm9ibGVtIHdlIGFyZSBmYWNpbmcgaXMgYmV5b25kIHlvdSBhbmQgbWUuIFdlIG5lZWQgdG8gdW5kZXJzdGFuZCB0aGF0IHByb2JsZW0gZmFyIGRlZXBlci4uLlwiLFxuICAgICAgfSxcbiAgICAgIHtcbiAgICAgICAgaWQ6IDMsXG4gICAgICAgIHByb2ZpbGVfaW1nOiBcIi9pbWcvdW5yZWFkLW1zZy1wcm9maWxlcy9wcm9maWxlX2ltZzMucG5nXCIsXG4gICAgICAgIHVzZXJuYW1lOiBcIlJ5YW4gSG93YXJkXCIsXG4gICAgICAgIGRlbGl2ZXJlZFRpbWU6IFwiMmRheXMgYWdvXCIsXG4gICAgICAgIHVucmVhZE1zZzpcbiAgICAgICAgICBcIlRoYW5rIHlvdSBzbyBtdWNoIGZvciBldmVyeXRoaW5nLCBpdCB3YXMgYW1hemluZyBpbnRlcnZpZXcuIFdlIHdpbGwgYmUgZGVmaW5pdGx5IGluIHRvdWNoIGluLi4uXCIsXG4gICAgICB9LFxuICAgIF0sXG4gICAgY2hhdEluaXRpYXRlckRhdGE6IFtcbiAgICAgIHtcbiAgICAgICAgaWQ6IDEsXG4gICAgICAgIHNlbnQ6IHRydWUsXG4gICAgICAgIG1lc3NhZ2U6XG4gICAgICAgICAgXCJMb3JlbSBpcHN1bSBkb2xvciBzaXQgYW1ldCwgY29uc2VjdGV0dXIgYWRpcGlzY2luZyBlbGl0LiBUb3J0b3IgbWF0dGlzIG51bmMgY29tbW9kbyBwaGFyZXRyYSB2ZWwgZWxpdC4gRWxlbWVudHVtIGVuaW0sIG1vbGxpcyBpZCBkb2xvciwgdG9ydG9yIGluLiBUdXJwaXMgc2VkIGFyY3Ugc3VzcGVuZGlzc2UgbmVxdWUuIFZhcml1cyBzZW0gZmV1Z2lhdCBsYWN1cyBldCBzZT9cIixcbiAgICAgIH0sXG4gICAgICB7XG4gICAgICAgIGlkOiAyLFxuICAgICAgICBzZW50OiBmYWxzZSxcbiAgICAgICAgbXNnOiBcIkxvcmVtIGlwc3VtIGRvbG9yIHNpdCBhbWV0LCBjb25zZWN0ZXR1ciBhZGlwaXNjaW5nIGVsaXQuIFRvcnRvciBtYXR0aXMgbnVuYyBjb21tb2RvIHBoYXJldHJhIHZlbCBlbGl0LiBFbGVtZW50dW0gZW5pbSwgbW9sbGlzIGlkIGRvbG9yLCB0b3J0b3IgaW4uIFR1cnBpcyBzZWQgYXJjdSBzdXNwZW5kaXNzZSBuZXF1ZS4gVmFyaXVzIHNlbSBmZXVnaWF0IGxhY3VzIGV0IHNlP1wiLFxuICAgICAgICBwcm9maWxlUGljOiBcIi9pbWcvY2hhdC1pbml0aWF0ZXIucG5nXCIsXG4gICAgICB9LFxuICAgIF0sXG4gICAgY2hhdEluaXRpYXRlckhlYWRlckluZm86IHtcbiAgICAgIHVzZXJuYW1lOiBcIktlbGx5XCIsXG4gICAgICByb2xsOiBcImdldGhpcmVkIGNoYXQgc3VwcG9ydFwiLFxuICAgICAgdXNlclBpYzogXCIvaW1nL2NoYXQtaW5pdGlhdGVyLnBuZ1wiLFxuICAgIH0sXG4gIH0sXG4gIGFjdGlvbjogQWN0aW9uc0ludGVyZmFjZVxuKSA9PiB7XG4gIHN3aXRjaCAoYWN0aW9uLnR5cGUpIHtcbiAgICBjYXNlIHQuQ0hBTkdFX0ZJUlNUTkFNRTpcbiAgICAgIHJldHVybiB7XG4gICAgICAgIC4uLnN0YXRlLFxuICAgICAgICBmaXJzdE5hbWU6IGFjdGlvbi5wYXlsb2FkLFxuICAgICAgfTtcblxuICAgIGNhc2UgdC5DSEFORV9MQVNUTkFNRTpcbiAgICAgIHJldHVybiB7XG4gICAgICAgIC4uLnN0YXRlLFxuICAgICAgICBsYXN0TmFtZTogYWN0aW9uLnBheWxvYWQsXG4gICAgICB9O1xuXG4gICAgZGVmYXVsdDpcbiAgICAgIHJldHVybiBzdGF0ZTtcbiAgfVxufTtcblxuZXhwb3J0IGRlZmF1bHQgbWFpbjtcbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/redux/reducers/reducer.ts\n");

/***/ }),

/***/ "./src/redux/reducers/rootReducer.ts":
/*!*******************************************!*\
  !*** ./src/redux/reducers/rootReducer.ts ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _redux_reducers_reducer__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @/redux/reducers/reducer */ \"./src/redux/reducers/reducer.ts\");\n/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! redux */ \"redux\");\n/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(redux__WEBPACK_IMPORTED_MODULE_1__);\n\n\nconst rootReducer = Object(redux__WEBPACK_IMPORTED_MODULE_1__[\"combineReducers\"])({\n  store: _redux_reducers_reducer__WEBPACK_IMPORTED_MODULE_0__[\"default\"]\n});\n/* harmony default export */ __webpack_exports__[\"default\"] = (rootReducer);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvcmVkdXgvcmVkdWNlcnMvcm9vdFJlZHVjZXIudHM/MTQzMSJdLCJuYW1lcyI6WyJyb290UmVkdWNlciIsImNvbWJpbmVSZWR1Y2VycyIsInN0b3JlIiwibWFpbiJdLCJtYXBwaW5ncyI6IkFBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBRUEsTUFBTUEsV0FBVyxHQUFHQyw2REFBZSxDQUFDO0FBQ2xDQyxPQUFLLEVBQUVDLCtEQUFJQTtBQUR1QixDQUFELENBQW5DO0FBSWVILDBFQUFmIiwiZmlsZSI6Ii4vc3JjL3JlZHV4L3JlZHVjZXJzL3Jvb3RSZWR1Y2VyLnRzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IG1haW4gZnJvbSBcIkAvcmVkdXgvcmVkdWNlcnMvcmVkdWNlclwiO1xuaW1wb3J0IHsgY29tYmluZVJlZHVjZXJzIH0gZnJvbSBcInJlZHV4XCI7XG5cbmNvbnN0IHJvb3RSZWR1Y2VyID0gY29tYmluZVJlZHVjZXJzKHtcbiAgc3RvcmU6IG1haW4sXG59KTtcblxuZXhwb3J0IGRlZmF1bHQgcm9vdFJlZHVjZXI7XG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/redux/reducers/rootReducer.ts\n");

/***/ }),

/***/ "./src/redux/store.ts":
/*!****************************!*\
  !*** ./src/redux/store.ts ***!
  \****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! redux */ \"redux\");\n/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(redux__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _redux_reducers_rootReducer__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/redux/reducers/rootReducer */ \"./src/redux/reducers/rootReducer.ts\");\n\n\nconst store = Object(redux__WEBPACK_IMPORTED_MODULE_0__[\"createStore\"])(_redux_reducers_rootReducer__WEBPACK_IMPORTED_MODULE_1__[\"default\"]);\n/* harmony default export */ __webpack_exports__[\"default\"] = (store);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvcmVkdXgvc3RvcmUudHM/MDBiYiJdLCJuYW1lcyI6WyJzdG9yZSIsImNyZWF0ZVN0b3JlIiwicm9vdFJlZHVjZXIiXSwibWFwcGluZ3MiOiJBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUVBLE1BQU1BLEtBQUssR0FBR0MseURBQVcsQ0FBQ0MsbUVBQUQsQ0FBekI7QUFDZUYsb0VBQWYiLCJmaWxlIjoiLi9zcmMvcmVkdXgvc3RvcmUudHMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBjcmVhdGVTdG9yZSB9IGZyb20gJ3JlZHV4JztcbmltcG9ydCByb290UmVkdWNlciBmcm9tICdAL3JlZHV4L3JlZHVjZXJzL3Jvb3RSZWR1Y2VyJztcblxuY29uc3Qgc3RvcmUgPSBjcmVhdGVTdG9yZShyb290UmVkdWNlcik7XG5leHBvcnQgZGVmYXVsdCBzdG9yZTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/redux/store.ts\n");

/***/ }),

/***/ "./src/redux/types.ts":
/*!****************************!*\
  !*** ./src/redux/types.ts ***!
  \****************************/
/*! exports provided: CHANGE_FIRSTNAME, CHANE_LASTNAME */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"CHANGE_FIRSTNAME\", function() { return CHANGE_FIRSTNAME; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"CHANE_LASTNAME\", function() { return CHANE_LASTNAME; });\nconst CHANGE_FIRSTNAME = 'CHANGE_FIRSTNAME';\nconst CHANE_LASTNAME = 'CHANE_LASTNAME';//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvcmVkdXgvdHlwZXMudHM/MDY2NCJdLCJuYW1lcyI6WyJDSEFOR0VfRklSU1ROQU1FIiwiQ0hBTkVfTEFTVE5BTUUiXSwibWFwcGluZ3MiOiJBQUFBO0FBQUE7QUFBQTtBQUFPLE1BQU1BLGdCQUF3QixHQUFHLGtCQUFqQztBQUNBLE1BQU1DLGNBQXNCLEdBQUcsZ0JBQS9CIiwiZmlsZSI6Ii4vc3JjL3JlZHV4L3R5cGVzLnRzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IGNvbnN0IENIQU5HRV9GSVJTVE5BTUU6IHN0cmluZyA9ICdDSEFOR0VfRklSU1ROQU1FJztcbmV4cG9ydCBjb25zdCBDSEFORV9MQVNUTkFNRTogc3RyaW5nID0gJ0NIQU5FX0xBU1ROQU1FJzsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/redux/types.ts\n");

/***/ }),

/***/ "./src/styles/global.scss":
/*!********************************!*\
  !*** ./src/styles/global.scss ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiIuL3NyYy9zdHlsZXMvZ2xvYmFsLnNjc3MuanMiLCJzb3VyY2VzQ29udGVudCI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/styles/global.scss\n");

/***/ }),

/***/ "./src/styles/tailwind.css":
/*!*********************************!*\
  !*** ./src/styles/tailwind.css ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiIuL3NyYy9zdHlsZXMvdGFpbHdpbmQuY3NzLmpzIiwic291cmNlc0NvbnRlbnQiOltdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/styles/tailwind.css\n");

/***/ }),

/***/ 0:
/*!*****************************************!*\
  !*** multi private-next-pages/_app.tsx ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! private-next-pages/_app.tsx */"./src/pages/_app.tsx");


/***/ }),

/***/ "@apollo/client":
/*!*********************************!*\
  !*** external "@apollo/client" ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"@apollo/client\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJAYXBvbGxvL2NsaWVudFwiPzRjMmQiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEiLCJmaWxlIjoiQGFwb2xsby9jbGllbnQuanMiLCJzb3VyY2VzQ29udGVudCI6WyJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJAYXBvbGxvL2NsaWVudFwiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///@apollo/client\n");

/***/ }),

/***/ "@apollo/client/link/schema":
/*!*********************************************!*\
  !*** external "@apollo/client/link/schema" ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"@apollo/client/link/schema\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJAYXBvbGxvL2NsaWVudC9saW5rL3NjaGVtYVwiPzViNjUiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEiLCJmaWxlIjoiQGFwb2xsby9jbGllbnQvbGluay9zY2hlbWEuanMiLCJzb3VyY2VzQ29udGVudCI6WyJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJAYXBvbGxvL2NsaWVudC9saW5rL3NjaGVtYVwiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///@apollo/client/link/schema\n");

/***/ }),

/***/ "@graphql-tools/load-files":
/*!********************************************!*\
  !*** external "@graphql-tools/load-files" ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"@graphql-tools/load-files\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJAZ3JhcGhxbC10b29scy9sb2FkLWZpbGVzXCI/Y2MwNSJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSIsImZpbGUiOiJAZ3JhcGhxbC10b29scy9sb2FkLWZpbGVzLmpzIiwic291cmNlc0NvbnRlbnQiOlsibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiQGdyYXBocWwtdG9vbHMvbG9hZC1maWxlc1wiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///@graphql-tools/load-files\n");

/***/ }),

/***/ "@graphql-tools/merge":
/*!***************************************!*\
  !*** external "@graphql-tools/merge" ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"@graphql-tools/merge\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJAZ3JhcGhxbC10b29scy9tZXJnZVwiPzE3ZDciXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEiLCJmaWxlIjoiQGdyYXBocWwtdG9vbHMvbWVyZ2UuanMiLCJzb3VyY2VzQ29udGVudCI6WyJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJAZ3JhcGhxbC10b29scy9tZXJnZVwiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///@graphql-tools/merge\n");

/***/ }),

/***/ "@graphql-tools/schema":
/*!****************************************!*\
  !*** external "@graphql-tools/schema" ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"@graphql-tools/schema\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJAZ3JhcGhxbC10b29scy9zY2hlbWFcIj84ZmZkIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBIiwiZmlsZSI6IkBncmFwaHFsLXRvb2xzL3NjaGVtYS5qcyIsInNvdXJjZXNDb250ZW50IjpbIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIkBncmFwaHFsLXRvb2xzL3NjaGVtYVwiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///@graphql-tools/schema\n");

/***/ }),

/***/ "next-redux-wrapper":
/*!*************************************!*\
  !*** external "next-redux-wrapper" ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"next-redux-wrapper\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJuZXh0LXJlZHV4LXdyYXBwZXJcIj8wMWMyIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBIiwiZmlsZSI6Im5leHQtcmVkdXgtd3JhcHBlci5qcyIsInNvdXJjZXNDb250ZW50IjpbIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIm5leHQtcmVkdXgtd3JhcHBlclwiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///next-redux-wrapper\n");

/***/ }),

/***/ "path":
/*!***********************!*\
  !*** external "path" ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"path\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJwYXRoXCI/NzRiYiJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSIsImZpbGUiOiJwYXRoLmpzIiwic291cmNlc0NvbnRlbnQiOlsibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicGF0aFwiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///path\n");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"react\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdFwiPzU4OGUiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEiLCJmaWxlIjoicmVhY3QuanMiLCJzb3VyY2VzQ29udGVudCI6WyJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdFwiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///react\n");

/***/ }),

/***/ "react-redux":
/*!******************************!*\
  !*** external "react-redux" ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"react-redux\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdC1yZWR1eFwiPzc4Y2QiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEiLCJmaWxlIjoicmVhY3QtcmVkdXguanMiLCJzb3VyY2VzQ29udGVudCI6WyJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdC1yZWR1eFwiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///react-redux\n");

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"react/jsx-dev-runtime\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdC9qc3gtZGV2LXJ1bnRpbWVcIj9jZDkwIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBIiwiZmlsZSI6InJlYWN0L2pzeC1kZXYtcnVudGltZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0L2pzeC1kZXYtcnVudGltZVwiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///react/jsx-dev-runtime\n");

/***/ }),

/***/ "redux":
/*!************************!*\
  !*** external "redux" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"redux\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWR1eFwiP2QzMjUiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEiLCJmaWxlIjoicmVkdXguanMiLCJzb3VyY2VzQ29udGVudCI6WyJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWR1eFwiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///redux\n");

/***/ })

/******/ });
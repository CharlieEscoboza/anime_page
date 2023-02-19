'use strict';
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self['webpackHotUpdate_N_E']('pages/details/[id]', {
  /***/ './pages/details/[id].js':
    /*!*******************************!*\
  !*** ./pages/details/[id].js ***!
  \*******************************/
    /***/ function (module, __webpack_exports__, __webpack_require__) {
      eval(
        __webpack_require__.ts(
          '__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/router */ "./node_modules/next/router.js");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var lodash_get__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! lodash/get */ "./node_modules/lodash/get.js");\n/* harmony import */ var lodash_get__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(lodash_get__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _helpers_request__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../helpers/request */ "./helpers/request.js");\nvar _s = $RefreshSig$();\n\n\n\n\n\n\nfunction Detail() {\n  _s();\n\n  const router = (0,next_router__WEBPACK_IMPORTED_MODULE_1__.useRouter)();\n  const {\n    id\n  } = router.query;\n  const [state, setState] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)({\n    info: {},\n    infoStatus: false\n  });\n  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {\n    setState(existingState => ({ ...existingState,\n      infoStatus: true\n    }));\n\n    const fetchInfo = async () => {\n      if (!router.isReady) return;\n\n      const _info = await (0,_helpers_request__WEBPACK_IMPORTED_MODULE_3__.fetch)(`/anime/${id}`);\n\n      setState(existingState => ({ ...existingState,\n        info: lodash_get__WEBPACK_IMPORTED_MODULE_2___default()(_info, \'data.data\') || {},\n        infoStatus: false\n      }));\n    };\n\n    fetchInfo();\n  }, [router.isReady, id]);\n  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", null, "Detail page", state.infoStatus ? \'Loading ...\' : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("p", null, JSON.stringify(state.info, null, 2)));\n}\n\n_s(Detail, "3BANATjW3ls332kVJhRbUJ8IMJM=", false, function () {\n  return [next_router__WEBPACK_IMPORTED_MODULE_1__.useRouter];\n});\n\n_c = Detail;\n/* harmony default export */ __webpack_exports__["default"] = (Detail);\n\nvar _c;\n\n$RefreshReg$(_c, "Detail");\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we\'re in a\n        // browser context before continuing.\n        if (typeof self !== \'undefined\' &&\n            // AMP / No-JS mode does not inject these helpers:\n            \'$RefreshHelpers$\' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we\'ll check if it\'s\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we\'ll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it\'s possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9kZXRhaWxzL1tpZF0uanMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLFNBQVNNLE1BQVQsR0FBa0I7RUFBQTs7RUFDaEIsTUFBTUMsTUFBTSxHQUFHSixzREFBUyxFQUF4QjtFQUNBLE1BQU07SUFBRUs7RUFBRixJQUFTRCxNQUFNLENBQUNFLEtBQXRCO0VBQ0EsTUFBTSxDQUFDQyxLQUFELEVBQVFDLFFBQVIsSUFBb0JULCtDQUFRLENBQUM7SUFDakNVLElBQUksRUFBRSxFQUQyQjtJQUVqQ0MsVUFBVSxFQUFFO0VBRnFCLENBQUQsQ0FBbEM7RUFLQVosZ0RBQVMsQ0FBQyxNQUFNO0lBQ2RVLFFBQVEsQ0FBRUcsYUFBRCxLQUFvQixFQUMzQixHQUFHQSxhQUR3QjtNQUUzQkQsVUFBVSxFQUFFO0lBRmUsQ0FBcEIsQ0FBRCxDQUFSOztJQUtBLE1BQU1FLFNBQVMsR0FBRyxZQUFZO01BQzVCLElBQUksQ0FBQ1IsTUFBTSxDQUFDUyxPQUFaLEVBQXFCOztNQUNyQixNQUFNQyxLQUFLLEdBQUcsTUFBTVosdURBQUssQ0FBRSxVQUFTRyxFQUFHLEVBQWQsQ0FBekI7O01BRUFHLFFBQVEsQ0FBRUcsYUFBRCxLQUFvQixFQUMzQixHQUFHQSxhQUR3QjtRQUUzQkYsSUFBSSxFQUFFUixpREFBSSxDQUFDYSxLQUFELEVBQVEsV0FBUixDQUFKLElBQTRCLEVBRlA7UUFHM0JKLFVBQVUsRUFBRTtNQUhlLENBQXBCLENBQUQsQ0FBUjtJQUtELENBVEQ7O0lBV0FFLFNBQVM7RUFDVixDQWxCUSxFQWtCTixDQUFDUixNQUFNLENBQUNTLE9BQVIsRUFBaUJSLEVBQWpCLENBbEJNLENBQVQ7RUFvQkEsb0JBQ0Usd0VBQUssYUFBTCxFQUVHRSxLQUFLLENBQUNHLFVBQU4sR0FDQyxhQURELGdCQUdDLHNFQUFJSyxJQUFJLENBQUNDLFNBQUwsQ0FBZVQsS0FBSyxDQUFDRSxJQUFyQixFQUEyQixJQUEzQixFQUFpQyxDQUFqQyxDQUFKLENBTEosQ0FERjtBQVVEOztHQXRDUU47VUFDUUg7OztLQURSRztBQXdDVCwrREFBZUEsTUFBZiIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9wYWdlcy9kZXRhaWxzL1tpZF0uanM/MmJhZiJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlRWZmZWN0LCB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IHVzZVJvdXRlciB9IGZyb20gJ25leHQvcm91dGVyJztcbmltcG9ydCBfZ2V0IGZyb20gJ2xvZGFzaC9nZXQnO1xuaW1wb3J0IHsgZmV0Y2ggfSBmcm9tICcuLi8uLi9oZWxwZXJzL3JlcXVlc3QnO1xuXG5mdW5jdGlvbiBEZXRhaWwoKSB7XG4gIGNvbnN0IHJvdXRlciA9IHVzZVJvdXRlcigpO1xuICBjb25zdCB7IGlkIH0gPSByb3V0ZXIucXVlcnk7XG4gIGNvbnN0IFtzdGF0ZSwgc2V0U3RhdGVdID0gdXNlU3RhdGUoe1xuICAgIGluZm86IHt9LFxuICAgIGluZm9TdGF0dXM6IGZhbHNlXG4gIH0pO1xuXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgc2V0U3RhdGUoKGV4aXN0aW5nU3RhdGUpID0+ICh7XG4gICAgICAuLi5leGlzdGluZ1N0YXRlLFxuICAgICAgaW5mb1N0YXR1czogdHJ1ZVxuICAgIH0pKTtcblxuICAgIGNvbnN0IGZldGNoSW5mbyA9IGFzeW5jICgpID0+IHtcbiAgICAgIGlmICghcm91dGVyLmlzUmVhZHkpIHJldHVybjtcbiAgICAgIGNvbnN0IF9pbmZvID0gYXdhaXQgZmV0Y2goYC9hbmltZS8ke2lkfWApO1xuXG4gICAgICBzZXRTdGF0ZSgoZXhpc3RpbmdTdGF0ZSkgPT4gKHtcbiAgICAgICAgLi4uZXhpc3RpbmdTdGF0ZSxcbiAgICAgICAgaW5mbzogX2dldChfaW5mbywgJ2RhdGEuZGF0YScpIHx8IHt9LFxuICAgICAgICBpbmZvU3RhdHVzOiBmYWxzZVxuICAgICAgfSkpO1xuICAgIH07XG5cbiAgICBmZXRjaEluZm8oKTtcbiAgfSwgW3JvdXRlci5pc1JlYWR5LCBpZF0pO1xuXG4gIHJldHVybiAoXG4gICAgPGRpdj5cbiAgICAgIERldGFpbCBwYWdlXG4gICAgICB7c3RhdGUuaW5mb1N0YXR1cyA/IChcbiAgICAgICAgJ0xvYWRpbmcgLi4uJ1xuICAgICAgKSA6IChcbiAgICAgICAgPHA+e0pTT04uc3RyaW5naWZ5KHN0YXRlLmluZm8sIG51bGwsIDIpfTwvcD5cbiAgICAgICl9XG4gICAgPC9kaXY+XG4gICk7XG59XG5cbmV4cG9ydCBkZWZhdWx0IERldGFpbDtcbiJdLCJuYW1lcyI6WyJSZWFjdCIsInVzZUVmZmVjdCIsInVzZVN0YXRlIiwidXNlUm91dGVyIiwiX2dldCIsImZldGNoIiwiRGV0YWlsIiwicm91dGVyIiwiaWQiLCJxdWVyeSIsInN0YXRlIiwic2V0U3RhdGUiLCJpbmZvIiwiaW5mb1N0YXR1cyIsImV4aXN0aW5nU3RhdGUiLCJmZXRjaEluZm8iLCJpc1JlYWR5IiwiX2luZm8iLCJKU09OIiwic3RyaW5naWZ5Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/details/[id].js\n'
        )
      );

      /***/
    }
});
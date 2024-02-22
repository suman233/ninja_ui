"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/howtouse/[how_to_use]",{

/***/ "./pages/howtouse/[how_to_use].tsx":
/*!*****************************************!*\
  !*** ./pages/howtouse/[how_to_use].tsx ***!
  \*****************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"TermsWrapper\": function() { return /* binding */ TermsWrapper; }\n/* harmony export */ });\n/* harmony import */ var _swc_helpers_src_tagged_template_literal_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @swc/helpers/src/_tagged_template_literal.mjs */ \"./node_modules/@swc/helpers/src/_tagged_template_literal.mjs\");\n/* harmony import */ var _emotion_react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @emotion/react/jsx-dev-runtime */ \"./node_modules/@emotion/react/jsx-dev-runtime/dist/emotion-react-jsx-dev-runtime.browser.esm.js\");\n/* harmony import */ var _api_axiosInstance__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/api/axiosInstance */ \"./api/axiosInstance/index.ts\");\n/* harmony import */ var _api_endpoints__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/api/endpoints */ \"./api/endpoints/index.ts\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/router */ \"./node_modules/next/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var react_query__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-query */ \"./node_modules/react-query/es/index.js\");\n/* harmony import */ var _layout_wrapper_Wrapper__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @/layout/wrapper/Wrapper */ \"./layout/wrapper/Wrapper.tsx\");\n/* harmony import */ var _themes_muiPalette__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @/themes/_muiPalette */ \"./mui-theme/_muiPalette.ts\");\n/* harmony import */ var _emotion_styled__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @emotion/styled */ \"./node_modules/@emotion/styled/dist/emotion-styled.browser.esm.js\");\n/* harmony import */ var _mui_material_Box__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @mui/material/Box */ \"./node_modules/@mui/material/Box/index.js\");\n/* harmony import */ var _mui_material_Container__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @mui/material/Container */ \"./node_modules/@mui/material/Container/index.js\");\n\nfunction _templateObject() {\n    const data = (0,_swc_helpers_src_tagged_template_literal_mjs__WEBPACK_IMPORTED_MODULE_0__[\"default\"])([\n        \"\\n  .title_block {\\n    padding: 300px 0 50px;\\n    @media (max-width: 899px) {\\n      padding: 180px 0 100px;\\n    }\\n  }\\n  .terms_content {\\n    h2 {\\n      margin-bottom: 35px;\\n    }\\n    p {\\n      &:not(:last-child) {\\n        margin-bottom: 20px;\\n      }\\n      a {\\n        color: \",\n        \";\\n      }\\n    }\\n  }\\n  .heading2 {\\n    font-size: 40px;\\n  }\\n  h3 {\\n    margin-bottom: 10px;\\n  }\\n  ul {\\n    list-style: disc;\\n    padding-left: 40px;\\n    margin-bottom: 30px;\\n    li {\\n      list-style: disc;\\n      &:not(:last-child) {\\n        margin-bottom: 12px;\\n      }\\n    }\\n  }\\n\"\n    ]);\n    _templateObject = function() {\n        return data;\n    };\n    return data;\n}\n\nvar _s = $RefreshSig$();\n\n\n\n\n\n\n\n\n\n\nconst TermsWrapper = (0,_emotion_styled__WEBPACK_IMPORTED_MODULE_8__[\"default\"])(_mui_material_Box__WEBPACK_IMPORTED_MODULE_9__[\"default\"])(_templateObject(), _themes_muiPalette__WEBPACK_IMPORTED_MODULE_7__.primaryColors.primary);\n_c = TermsWrapper;\nconst index = ()=>{\n    _s();\n    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_3__.useRouter)();\n    const { how_to_use  } = router.query;\n    const { data  } = (0,react_query__WEBPACK_IMPORTED_MODULE_5__.useQuery)({\n        queryKey: [\n            \"cmsdetails\",\n            {\n                how_to_use\n            }\n        ],\n        queryFn: async ()=>{\n            const resp = await _api_axiosInstance__WEBPACK_IMPORTED_MODULE_1__[\"default\"].get(_api_endpoints__WEBPACK_IMPORTED_MODULE_2__.endpoints.cms.detail(\"\".concat(how_to_use)));\n            console.log(\"details\", resp.data.data);\n            return resp.data.data;\n        }\n    });\n    return /*#__PURE__*/ (0,_emotion_react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__.jsxDEV)(\"div\", {\n        children: /*#__PURE__*/ (0,_emotion_react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__.jsxDEV)(_layout_wrapper_Wrapper__WEBPACK_IMPORTED_MODULE_6__[\"default\"], {\n            children: /*#__PURE__*/ (0,_emotion_react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__.jsxDEV)(_mui_material_Container__WEBPACK_IMPORTED_MODULE_11__[\"default\"], {\n                fixed: true,\n                children: /*#__PURE__*/ (0,_emotion_react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__.jsxDEV)(TermsWrapper, {\n                    children: data.map((item, i)=>{\n                        return /*#__PURE__*/ (0,_emotion_react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__.jsxDEV)(_emotion_react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__.Fragment, {}, void 0, false);\n                    })\n                }, void 0, false, {\n                    fileName: \"/home/webskitters/Desktop/webskitter/ninja-ui/pages/howtouse/[how_to_use].tsx\",\n                    lineNumber: 76,\n                    columnNumber: 9\n                }, undefined)\n            }, void 0, false, {\n                fileName: \"/home/webskitters/Desktop/webskitter/ninja-ui/pages/howtouse/[how_to_use].tsx\",\n                lineNumber: 75,\n                columnNumber: 7\n            }, undefined)\n        }, void 0, false, {\n            fileName: \"/home/webskitters/Desktop/webskitter/ninja-ui/pages/howtouse/[how_to_use].tsx\",\n            lineNumber: 74,\n            columnNumber: 5\n        }, undefined)\n    }, void 0, false, {\n        fileName: \"/home/webskitters/Desktop/webskitter/ninja-ui/pages/howtouse/[how_to_use].tsx\",\n        lineNumber: 72,\n        columnNumber: 5\n    }, undefined);\n};\n_s(index, \"f9ssaKGzixDM9dAqbM+mENt90l0=\", false, function() {\n    return [\n        next_router__WEBPACK_IMPORTED_MODULE_3__.useRouter,\n        react_query__WEBPACK_IMPORTED_MODULE_5__.useQuery\n    ];\n});\n/* harmony default export */ __webpack_exports__[\"default\"] = (index);\nvar _c;\n$RefreshReg$(_c, \"TermsWrapper\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9ob3d0b3VzZS9baG93X3RvX3VzZV0udHN4LmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBOzs7Ozs7Ozs7Ozs7O0FBQStDO0FBQ0o7QUFHSjtBQUNkO0FBQ2E7QUFFUztBQUNNO0FBQ2hCO0FBQ0Q7QUFDWTtBQUl6QyxNQUFNVSxlQUFlSCwyREFBTUEsQ0FBQ0MseURBQUdBLHFCQWdCckJGLHFFQUFxQixFQXFCcEM7S0FyQ1dJO0FBdUNiLE1BQU1FLFFBQVEsSUFBTTs7SUFDaEIsTUFBTUMsU0FBT1gsc0RBQVNBO0lBQ3RCLE1BQU0sRUFBQ1ksV0FBVSxFQUFDLEdBQUVELE9BQU9FLEtBQUs7SUFFaEMsTUFBTSxFQUFDQyxLQUFJLEVBQUMsR0FBR1oscURBQVFBLENBQUM7UUFDdEJhLFVBQVU7WUFBQztZQUFjO2dCQUFDSDtZQUFVO1NBQUU7UUFDdENJLFNBQVMsVUFBVTtZQUNqQixNQUFNQyxPQUFNLE1BQU1uQiw4REFBaUIsQ0FDakNDLGdFQUFvQixDQUFDLEdBQWMsT0FBWGE7WUFFMUJTLFFBQVFDLEdBQUcsQ0FBQyxXQUFVTCxLQUFLSCxJQUFJLENBQUNBLElBQUk7WUFDcEMsT0FBT0csS0FBS0gsSUFBSSxDQUFDQSxJQUFJO1FBRXZCO0lBQ0Y7SUFDRixxQkFDRSx3RUFBQ1M7a0JBRUQsc0ZBQUNwQiwrREFBT0E7c0JBQ04sc0ZBQUNJLGdFQUFTQTtnQkFBQ2lCLEtBQUs7MEJBQ2Qsc0ZBQUNoQjs4QkFFR00sS0FBS1csR0FBRyxDQUFDLENBQUNDLE1BQU1DLElBQUk7d0JBQ2xCLHFCQUNFO29CQUlKOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFTWjtHQXJDTWpCOztRQUNXVixrREFBU0E7UUFHUEUsaURBQVFBOzs7QUFtQzNCLCtEQUFlUSxLQUFLQSxFQUFBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3BhZ2VzL2hvd3RvdXNlL1tob3dfdG9fdXNlXS50c3g/NDlhNyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgYXhpb3NJbnN0YW5jZSBmcm9tICdAL2FwaS9heGlvc0luc3RhbmNlJ1xuaW1wb3J0IHsgZW5kcG9pbnRzIH0gZnJvbSAnQC9hcGkvZW5kcG9pbnRzJ1xuaW1wb3J0IHsgZmV0Y2hTaW5nbGVEZXRhaWwgfSBmcm9tICdAL2FwaS9mdW5jdGlvbnMvY21zLmFwaSdcbmltcG9ydCB7IENNU0RldGFpbFJvb3QgfSBmcm9tICdAL2ludGVyZmFjZS9jbXMuc2luZ2xlJ1xuaW1wb3J0IHsgdXNlUm91dGVyIH0gZnJvbSAnbmV4dC9yb3V0ZXInXG5pbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXG5pbXBvcnQgeyB1c2VRdWVyeSB9IGZyb20gJ3JlYWN0LXF1ZXJ5J1xuXG5pbXBvcnQgV3JhcHBlciBmcm9tIFwiQC9sYXlvdXQvd3JhcHBlci9XcmFwcGVyXCI7XG5pbXBvcnQgeyBwcmltYXJ5Q29sb3JzIH0gZnJvbSBcIkAvdGhlbWVzL19tdWlQYWxldHRlXCI7XG5pbXBvcnQgc3R5bGVkIGZyb20gXCJAZW1vdGlvbi9zdHlsZWRcIjtcbmltcG9ydCBCb3ggZnJvbSBcIkBtdWkvbWF0ZXJpYWwvQm94XCI7XG5pbXBvcnQgQ29udGFpbmVyIGZyb20gXCJAbXVpL21hdGVyaWFsL0NvbnRhaW5lclwiO1xuaW1wb3J0IFR5cG9ncmFwaHkgZnJvbSBcIkBtdWkvbWF0ZXJpYWwvVHlwb2dyYXBoeVwiO1xuaW1wb3J0IExpbmsgZnJvbSBcIm5leHQvbGlua1wiO1xuXG5leHBvcnQgY29uc3QgVGVybXNXcmFwcGVyID0gc3R5bGVkKEJveClgXG4gIC50aXRsZV9ibG9jayB7XG4gICAgcGFkZGluZzogMzAwcHggMCA1MHB4O1xuICAgIEBtZWRpYSAobWF4LXdpZHRoOiA4OTlweCkge1xuICAgICAgcGFkZGluZzogMTgwcHggMCAxMDBweDtcbiAgICB9XG4gIH1cbiAgLnRlcm1zX2NvbnRlbnQge1xuICAgIGgyIHtcbiAgICAgIG1hcmdpbi1ib3R0b206IDM1cHg7XG4gICAgfVxuICAgIHAge1xuICAgICAgJjpub3QoOmxhc3QtY2hpbGQpIHtcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogMjBweDtcbiAgICAgIH1cbiAgICAgIGEge1xuICAgICAgICBjb2xvcjogJHtwcmltYXJ5Q29sb3JzLnByaW1hcnl9O1xuICAgICAgfVxuICAgIH1cbiAgfVxuICAuaGVhZGluZzIge1xuICAgIGZvbnQtc2l6ZTogNDBweDtcbiAgfVxuICBoMyB7XG4gICAgbWFyZ2luLWJvdHRvbTogMTBweDtcbiAgfVxuICB1bCB7XG4gICAgbGlzdC1zdHlsZTogZGlzYztcbiAgICBwYWRkaW5nLWxlZnQ6IDQwcHg7XG4gICAgbWFyZ2luLWJvdHRvbTogMzBweDtcbiAgICBsaSB7XG4gICAgICBsaXN0LXN0eWxlOiBkaXNjO1xuICAgICAgJjpub3QoOmxhc3QtY2hpbGQpIHtcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogMTJweDtcbiAgICAgIH1cbiAgICB9XG4gIH1cbmA7XG5cbmNvbnN0IGluZGV4ID0gKCkgPT4ge1xuICAgIGNvbnN0IHJvdXRlcj11c2VSb3V0ZXIoKVxuICAgIGNvbnN0IHtob3dfdG9fdXNlfT0gcm91dGVyLnF1ZXJ5XG5cbiAgICBjb25zdCB7ZGF0YX0gPSB1c2VRdWVyeSh7XG4gICAgICBxdWVyeUtleTogWydjbXNkZXRhaWxzJywge2hvd190b191c2V9XSxcbiAgICAgIHF1ZXJ5Rm46IGFzeW5jICgpPT57XG4gICAgICAgIGNvbnN0IHJlc3A9IGF3YWl0IGF4aW9zSW5zdGFuY2UuZ2V0PENNU0RldGFpbFJvb3Q+KFxuICAgICAgICAgIGVuZHBvaW50cy5jbXMuZGV0YWlsKGAke2hvd190b191c2V9YClcbiAgICAgICAgKVxuICAgICAgICBjb25zb2xlLmxvZygnZGV0YWlscycscmVzcC5kYXRhLmRhdGEpO1xuICAgICAgICByZXR1cm4gcmVzcC5kYXRhLmRhdGE7XG4gICAgICAgIFxuICAgICAgfVxuICAgIH0pXG4gIHJldHVybiAoXG4gICAgPGRpdj5cblxuICAgIDxXcmFwcGVyPlxuICAgICAgPENvbnRhaW5lciBmaXhlZD5cbiAgICAgICAgPFRlcm1zV3JhcHBlcj5cbiAgICAgICAgICB7XG4gICAgICAgICAgICBkYXRhLm1hcCgoaXRlbSwgaSk9PntcbiAgICAgICAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgICAgICA8PlxuICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgIDwvPlxuICAgICAgICAgICAgICApXG4gICAgICAgICAgICB9KVxuICAgICAgICAgIH1cbiAgICAgICAgXG4gICAgICAgIDwvVGVybXNXcmFwcGVyPlxuICAgICAgPC9Db250YWluZXI+XG4gICAgPC9XcmFwcGVyPlxuICBcbiAgICA8L2Rpdj5cbiAgKVxufVxuXG5leHBvcnQgZGVmYXVsdCBpbmRleCJdLCJuYW1lcyI6WyJheGlvc0luc3RhbmNlIiwiZW5kcG9pbnRzIiwidXNlUm91dGVyIiwiUmVhY3QiLCJ1c2VRdWVyeSIsIldyYXBwZXIiLCJwcmltYXJ5Q29sb3JzIiwic3R5bGVkIiwiQm94IiwiQ29udGFpbmVyIiwiVGVybXNXcmFwcGVyIiwicHJpbWFyeSIsImluZGV4Iiwicm91dGVyIiwiaG93X3RvX3VzZSIsInF1ZXJ5IiwiZGF0YSIsInF1ZXJ5S2V5IiwicXVlcnlGbiIsInJlc3AiLCJnZXQiLCJjbXMiLCJkZXRhaWwiLCJjb25zb2xlIiwibG9nIiwiZGl2IiwiZml4ZWQiLCJtYXAiLCJpdGVtIiwiaSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/howtouse/[how_to_use].tsx\n"));

/***/ })

});
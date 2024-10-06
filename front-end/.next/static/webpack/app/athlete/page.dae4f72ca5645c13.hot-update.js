"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("app/athlete/page",{

/***/ "(app-pages-browser)/./src/app/athlete/page.tsx":
/*!**********************************!*\
  !*** ./src/app/athlete/page.tsx ***!
  \**********************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ AthletePage; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/image */ \"(app-pages-browser)/./node_modules/next/dist/api/image.js\");\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\n\nfunction AthletePage() {\n    _s();\n    const [token, setToken] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\");\n    const [athletes, setAthletes] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(null);\n    const [error, setError] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(null);\n    const [limit, setLimit] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\");\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        const storedToken = localStorage.getItem(\"token\");\n        if (storedToken) {\n            setToken(storedToken);\n        }\n    }, []);\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        const fetchAthletes = async ()=>{\n            try {\n                const requestOptions = {\n                    method: \"GET\",\n                    headers: {\n                        \"Content-Type\": \"application/json\",\n                        \"Authorization\": JSON.parse(token)\n                    }\n                };\n                const response = await fetch(\"http://localhost:3001/athlete\", requestOptions);\n                if (!response.ok) {\n                    throw new Error(\"Failed to fetch athletes\");\n                }\n                const data = await response.json();\n                setAthletes(data);\n            } catch (err) {\n                if (err instanceof Error) {\n                    setError(err.message);\n                } else {\n                    setError(\"An unknown error occurred\");\n                }\n            }\n        };\n        if (token) {\n            fetchAthletes();\n        }\n    }, [\n        token\n    ]);\n    if (error) {\n        return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            className: \"flex justify-center m-auto\",\n            children: [\n                \"Error: \",\n                error\n            ]\n        }, void 0, true, {\n            fileName: \"/home/reinaldo/api-olimpics/front-end/src/app/athlete/page.tsx\",\n            lineNumber: 53,\n            columnNumber: 12\n        }, this);\n    }\n    if (!athletes) {\n        return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            className: \"flex justify-center m-auto\",\n            children: \"Loading...\"\n        }, void 0, false, {\n            fileName: \"/home/reinaldo/api-olimpics/front-end/src/app/athlete/page.tsx\",\n            lineNumber: 57,\n            columnNumber: 12\n        }, this);\n    }\n    const handleLimit = async ()=>{\n        try {\n            const requestOptions = {\n                method: \"GET\",\n                headers: {\n                    \"Content-Type\": \"application/json\",\n                    \"Authorization\": JSON.parse(token)\n                }\n            };\n            const response = await fetch(\"http://localhost:3001/athlete?limit=\".concat(limit), requestOptions);\n            if (!response.ok) {\n                throw new Error(\"Failed to fetch athletes\");\n            }\n            const data = await response.json();\n            setAthletes(data);\n        } catch (err) {\n            if (err instanceof Error) {\n                setError(err.message);\n            } else {\n                setError(\"An unknown error occurred\");\n            }\n        }\n    };\n    const { message } = athletes;\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                className: \"flex flex-col items-center text-3xl font-bold text-purple-700 mb-6 mt-8\",\n                children: \"Olympics Athletes from Brazil\"\n            }, void 0, false, {\n                fileName: \"/home/reinaldo/api-olimpics/front-end/src/app/athlete/page.tsx\",\n                lineNumber: 92,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"flex justify-center items-center space-x-4 mb-4\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                        type: \"text\",\n                        placeholder: \"Search by Limit...\",\n                        className: \"border border-gray-300 rounded-md p-2 text-gray-700 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-purple-500 transition duration-200\",\n                        value: limit,\n                        onChange: (e)=>setLimit(e.target.value)\n                    }, void 0, false, {\n                        fileName: \"/home/reinaldo/api-olimpics/front-end/src/app/athlete/page.tsx\",\n                        lineNumber: 96,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                        type: \"button\",\n                        onClick: ()=>handleLimit(),\n                        className: \"bg-purple-500 hover:bg-purple-600 text-white font-semibold py-2 px-4 rounded-md transition duration-200 flex items-center space-x-2\",\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"svg\", {\n                                xmlns: \"http://www.w3.org/2000/svg\",\n                                className: \"h-5 w-5\",\n                                fill: \"none\",\n                                viewBox: \"0 0 24 24\",\n                                stroke: \"currentColor\",\n                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"path\", {\n                                    strokeLinecap: \"round\",\n                                    strokeLinejoin: \"round\",\n                                    strokeWidth: \"2\",\n                                    d: \"M5 12h14M12 5l7 7-7 7\"\n                                }, void 0, false, {\n                                    fileName: \"/home/reinaldo/api-olimpics/front-end/src/app/athlete/page.tsx\",\n                                    lineNumber: 115,\n                                    columnNumber: 13\n                                }, this)\n                            }, void 0, false, {\n                                fileName: \"/home/reinaldo/api-olimpics/front-end/src/app/athlete/page.tsx\",\n                                lineNumber: 108,\n                                columnNumber: 11\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                children: \"Apply Limit\"\n                            }, void 0, false, {\n                                fileName: \"/home/reinaldo/api-olimpics/front-end/src/app/athlete/page.tsx\",\n                                lineNumber: 122,\n                                columnNumber: 11\n                            }, this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/home/reinaldo/api-olimpics/front-end/src/app/athlete/page.tsx\",\n                        lineNumber: 103,\n                        columnNumber: 9\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"/home/reinaldo/api-olimpics/front-end/src/app/athlete/page.tsx\",\n                lineNumber: 95,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"ul\", {\n                className: \"flex flex-wrap justify-center w-11/12 lg:w-3/4 m-auto gap-6\",\n                children: message.map((athlete)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n                        className: \"flex flex-col items-center bg-gradient-to-r from-gray-300 to-gray-400 p-6 rounded-xl shadow-lg w-full sm:w-1/2 md:w-1/3 lg:w-1/4 transition-transform transform hover:scale-105\",\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                                className: \"text-lg font-semibold text-gray-900 mb-2 text-center\",\n                                children: athlete.instagramBio\n                            }, void 0, false, {\n                                fileName: \"/home/reinaldo/api-olimpics/front-end/src/app/athlete/page.tsx\",\n                                lineNumber: 132,\n                                columnNumber: 13\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: \"flex flex-col items-center\",\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                        className: \"text-sm text-gray-700 mb-1\",\n                                        children: [\n                                            \"Followers: \",\n                                            athlete.instagramFollowersCount\n                                        ]\n                                    }, void 0, true, {\n                                        fileName: \"/home/reinaldo/api-olimpics/front-end/src/app/athlete/page.tsx\",\n                                        lineNumber: 136,\n                                        columnNumber: 15\n                                    }, this),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                        className: \"text-sm text-gray-700 mb-3\",\n                                        children: [\n                                            \"Following: \",\n                                            athlete.instagramFollowingCount\n                                        ]\n                                    }, void 0, true, {\n                                        fileName: \"/home/reinaldo/api-olimpics/front-end/src/app/athlete/page.tsx\",\n                                        lineNumber: 139,\n                                        columnNumber: 15\n                                    }, this),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n                                        href: \"/athlete/\".concat(athlete.id),\n                                        rel: \"noopener noreferrer\",\n                                        className: \"text-blue-600 hover:text-blue-800 transition-colors font-semibold\",\n                                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(next_image__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n                                            src: \"data:image/jpeg;base64,\".concat(athlete.instagramImageUrl),\n                                            alt: athlete.name,\n                                            width: 80,\n                                            height: 80,\n                                            priority: true,\n                                            className: \"rounded-full mb-3\"\n                                        }, void 0, false, {\n                                            fileName: \"/home/reinaldo/api-olimpics/front-end/src/app/athlete/page.tsx\",\n                                            lineNumber: 147,\n                                            columnNumber: 17\n                                        }, this)\n                                    }, void 0, false, {\n                                        fileName: \"/home/reinaldo/api-olimpics/front-end/src/app/athlete/page.tsx\",\n                                        lineNumber: 142,\n                                        columnNumber: 15\n                                    }, this),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n                                        href: athlete.instagramUrl,\n                                        target: \"_blank\",\n                                        rel: \"noopener noreferrer\",\n                                        className: \"text-blue-600 hover:text-blue-800 transition-colors font-semibold\",\n                                        children: \"Instagram Profile\"\n                                    }, void 0, false, {\n                                        fileName: \"/home/reinaldo/api-olimpics/front-end/src/app/athlete/page.tsx\",\n                                        lineNumber: 156,\n                                        columnNumber: 15\n                                    }, this)\n                                ]\n                            }, void 0, true, {\n                                fileName: \"/home/reinaldo/api-olimpics/front-end/src/app/athlete/page.tsx\",\n                                lineNumber: 135,\n                                columnNumber: 13\n                            }, this)\n                        ]\n                    }, athlete.id, true, {\n                        fileName: \"/home/reinaldo/api-olimpics/front-end/src/app/athlete/page.tsx\",\n                        lineNumber: 128,\n                        columnNumber: 11\n                    }, this))\n            }, void 0, false, {\n                fileName: \"/home/reinaldo/api-olimpics/front-end/src/app/athlete/page.tsx\",\n                lineNumber: 126,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"/home/reinaldo/api-olimpics/front-end/src/app/athlete/page.tsx\",\n        lineNumber: 91,\n        columnNumber: 5\n    }, this);\n}\n_s(AthletePage, \"kcebGBG8at7/yqEw2jSJvrVavTs=\");\n_c = AthletePage;\nvar _c;\n$RefreshReg$(_c, \"AthletePage\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9hcHAvYXRobGV0ZS9wYWdlLnRzeCIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQzRDO0FBRWI7QUFFaEIsU0FBU0c7O0lBQ3RCLE1BQU0sQ0FBQ0MsT0FBT0MsU0FBUyxHQUFHSiwrQ0FBUUEsQ0FBUztJQUMzQyxNQUFNLENBQUNLLFVBQVVDLFlBQVksR0FBR04sK0NBQVFBLENBQWtCO0lBQzFELE1BQU0sQ0FBQ08sT0FBT0MsU0FBUyxHQUFHUiwrQ0FBUUEsQ0FBZ0I7SUFDbEQsTUFBTSxDQUFDUyxPQUFPQyxTQUFTLEdBQUdWLCtDQUFRQSxDQUFTO0lBRTNDRCxnREFBU0EsQ0FBQztRQUNSLE1BQU1ZLGNBQWNDLGFBQWFDLE9BQU8sQ0FBQztRQUN6QyxJQUFJRixhQUFhO1lBQ2ZQLFNBQVNPO1FBQ1g7SUFDRixHQUFHLEVBQUU7SUFFTFosZ0RBQVNBLENBQUM7UUFDUixNQUFNZSxnQkFBZ0I7WUFDcEIsSUFBSTtnQkFDRixNQUFNQyxpQkFBOEI7b0JBQ2xDQyxRQUFRO29CQUNSQyxTQUFTO3dCQUNQLGdCQUFnQjt3QkFDaEIsaUJBQWlCQyxLQUFLQyxLQUFLLENBQUNoQjtvQkFDOUI7Z0JBQ0Y7Z0JBRUEsTUFBTWlCLFdBQVcsTUFBTUMsTUFBTSxpQ0FBaUNOO2dCQUU5RCxJQUFJLENBQUNLLFNBQVNFLEVBQUUsRUFBRTtvQkFDaEIsTUFBTSxJQUFJQyxNQUFNO2dCQUNsQjtnQkFFQSxNQUFNQyxPQUFPLE1BQU1KLFNBQVNLLElBQUk7Z0JBQ2hDbkIsWUFBWWtCO1lBQ2QsRUFBRSxPQUFPRSxLQUFjO2dCQUNyQixJQUFJQSxlQUFlSCxPQUFPO29CQUN4QmYsU0FBU2tCLElBQUlDLE9BQU87Z0JBQ3RCLE9BQU87b0JBQ0xuQixTQUFTO2dCQUNYO1lBQ0Y7UUFDRjtRQUVBLElBQUlMLE9BQU87WUFDVFc7UUFDRjtJQUNGLEdBQUc7UUFBQ1g7S0FBTTtJQUVWLElBQUlJLE9BQU87UUFDVCxxQkFBTyw4REFBQ3FCO1lBQUlDLFdBQVU7O2dCQUE2QjtnQkFBUXRCOzs7Ozs7O0lBQzdEO0lBRUEsSUFBSSxDQUFDRixVQUFVO1FBQ2IscUJBQU8sOERBQUN1QjtZQUFJQyxXQUFVO3NCQUE2Qjs7Ozs7O0lBQ3JEO0lBRUEsTUFBTUMsY0FBYztRQUNsQixJQUFJO1lBQ0YsTUFBTWYsaUJBQThCO2dCQUNsQ0MsUUFBUTtnQkFDUkMsU0FBUztvQkFDUCxnQkFBZ0I7b0JBQ2hCLGlCQUFpQkMsS0FBS0MsS0FBSyxDQUFDaEI7Z0JBQzlCO1lBQ0Y7WUFFQSxNQUFNaUIsV0FBVyxNQUFNQyxNQUFNLHVDQUE2QyxPQUFOWixRQUFTTTtZQUU3RSxJQUFJLENBQUNLLFNBQVNFLEVBQUUsRUFBRTtnQkFDaEIsTUFBTSxJQUFJQyxNQUFNO1lBQ2xCO1lBRUEsTUFBTUMsT0FBTyxNQUFNSixTQUFTSyxJQUFJO1lBQ2hDbkIsWUFBWWtCO1FBQ2QsRUFBRSxPQUFPRSxLQUFjO1lBQ3JCLElBQUlBLGVBQWVILE9BQU87Z0JBQ3hCZixTQUFTa0IsSUFBSUMsT0FBTztZQUN0QixPQUFPO2dCQUNMbkIsU0FBUztZQUNYO1FBQ0Y7SUFFRjtJQUVBLE1BQU0sRUFBRW1CLE9BQU8sRUFBRSxHQUFHdEI7SUFFcEIscUJBQ0UsOERBQUN1Qjs7MEJBQ0MsOERBQUNHO2dCQUFHRixXQUFVOzBCQUEwRTs7Ozs7OzBCQUd4Riw4REFBQ0Q7Z0JBQUlDLFdBQVU7O2tDQUNiLDhEQUFDRzt3QkFDQ0MsTUFBSzt3QkFDTEMsYUFBWTt3QkFDWkwsV0FBVTt3QkFDVk0sT0FBTzFCO3dCQUNQMkIsVUFBVSxDQUFDQyxJQUFNM0IsU0FBUzJCLEVBQUVDLE1BQU0sQ0FBQ0gsS0FBSzs7Ozs7O2tDQUUxQyw4REFBQ0k7d0JBQ0NOLE1BQUs7d0JBQ0xPLFNBQVMsSUFBTVY7d0JBQ2ZELFdBQVU7OzBDQUVWLDhEQUFDWTtnQ0FDQ0MsT0FBTTtnQ0FDTmIsV0FBVTtnQ0FDVmMsTUFBSztnQ0FDTEMsU0FBUTtnQ0FDUkMsUUFBTzswQ0FFUCw0RUFBQ0M7b0NBQ0NDLGVBQWM7b0NBQ2RDLGdCQUFlO29DQUNmQyxhQUFZO29DQUNaQyxHQUFFOzs7Ozs7Ozs7OzswQ0FHTiw4REFBQ0M7MENBQUs7Ozs7Ozs7Ozs7Ozs7Ozs7OzswQkFJViw4REFBQ0M7Z0JBQUd2QixXQUFVOzBCQUNYRixRQUFRMEIsR0FBRyxDQUFDLENBQUNDLHdCQUNaLDhEQUFDQzt3QkFFQzFCLFdBQVU7OzBDQUVWLDhEQUFDMkI7Z0NBQUczQixXQUFVOzBDQUNYeUIsUUFBUUcsWUFBWTs7Ozs7OzBDQUV2Qiw4REFBQzdCO2dDQUFJQyxXQUFVOztrREFDYiw4REFBQzZCO3dDQUFFN0IsV0FBVTs7NENBQTZCOzRDQUM1QnlCLFFBQVFLLHVCQUF1Qjs7Ozs7OztrREFFN0MsOERBQUNEO3dDQUFFN0IsV0FBVTs7NENBQTZCOzRDQUM1QnlCLFFBQVFNLHVCQUF1Qjs7Ozs7OztrREFFN0MsOERBQUNDO3dDQUNDQyxNQUFNLFlBQXVCLE9BQVhSLFFBQVFTLEVBQUU7d0NBQzVCQyxLQUFJO3dDQUNKbkMsV0FBVTtrREFFViw0RUFBQzVCLGtEQUFLQTs0Q0FDSmdFLEtBQUssMEJBQW9ELE9BQTFCWCxRQUFRWSxpQkFBaUI7NENBQ3hEQyxLQUFLYixRQUFRYyxJQUFJOzRDQUNqQkMsT0FBTzs0Q0FDUEMsUUFBUTs0Q0FDUkMsUUFBUTs0Q0FDUjFDLFdBQVU7Ozs7Ozs7Ozs7O2tEQUdkLDhEQUFDZ0M7d0NBQ0NDLE1BQU1SLFFBQVFrQixZQUFZO3dDQUMxQmxDLFFBQU87d0NBQ1AwQixLQUFJO3dDQUNKbkMsV0FBVTtrREFDWDs7Ozs7Ozs7Ozs7Ozt1QkFoQ0V5QixRQUFRUyxFQUFFOzs7Ozs7Ozs7Ozs7Ozs7O0FBMEMzQjtHQXJLd0I3RDtLQUFBQSIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9zcmMvYXBwL2F0aGxldGUvcGFnZS50c3g/MDlkNiJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBjbGllbnRcIjtcbmltcG9ydCB7IHVzZUVmZmVjdCwgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCB7IElBdGhsZXRlIH0gZnJvbSBcIi4uL3R5cGVzL2F0aGxldGVUeXBlXCI7XG5pbXBvcnQgSW1hZ2UgZnJvbSBcIm5leHQvaW1hZ2VcIjtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gQXRobGV0ZVBhZ2UoKSB7XG4gIGNvbnN0IFt0b2tlbiwgc2V0VG9rZW5dID0gdXNlU3RhdGU8c3RyaW5nPignJyk7XG4gIGNvbnN0IFthdGhsZXRlcywgc2V0QXRobGV0ZXNdID0gdXNlU3RhdGU8SUF0aGxldGUgfCBudWxsPihudWxsKTtcbiAgY29uc3QgW2Vycm9yLCBzZXRFcnJvcl0gPSB1c2VTdGF0ZTxzdHJpbmcgfCBudWxsPihudWxsKTtcbiAgY29uc3QgW2xpbWl0LCBzZXRMaW1pdF0gPSB1c2VTdGF0ZTxzdHJpbmc+KCcnKTtcblxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIGNvbnN0IHN0b3JlZFRva2VuID0gbG9jYWxTdG9yYWdlLmdldEl0ZW0oJ3Rva2VuJyk7XG4gICAgaWYgKHN0b3JlZFRva2VuKSB7XG4gICAgICBzZXRUb2tlbihzdG9yZWRUb2tlbik7XG4gICAgfVxuICB9LCBbXSk7XG5cbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBjb25zdCBmZXRjaEF0aGxldGVzID0gYXN5bmMgKCkgPT4ge1xuICAgICAgdHJ5IHtcbiAgICAgICAgY29uc3QgcmVxdWVzdE9wdGlvbnM6IFJlcXVlc3RJbml0ID0ge1xuICAgICAgICAgIG1ldGhvZDogJ0dFVCcsXG4gICAgICAgICAgaGVhZGVyczoge1xuICAgICAgICAgICAgJ0NvbnRlbnQtVHlwZSc6ICdhcHBsaWNhdGlvbi9qc29uJyxcbiAgICAgICAgICAgICdBdXRob3JpemF0aW9uJzogSlNPTi5wYXJzZSh0b2tlbilcbiAgICAgICAgICB9XG4gICAgICAgIH07XG5cbiAgICAgICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBmZXRjaCgnaHR0cDovL2xvY2FsaG9zdDozMDAxL2F0aGxldGUnLCByZXF1ZXN0T3B0aW9ucyk7XG5cbiAgICAgICAgaWYgKCFyZXNwb25zZS5vaykge1xuICAgICAgICAgIHRocm93IG5ldyBFcnJvcignRmFpbGVkIHRvIGZldGNoIGF0aGxldGVzJyk7XG4gICAgICAgIH1cblxuICAgICAgICBjb25zdCBkYXRhID0gYXdhaXQgcmVzcG9uc2UuanNvbigpO1xuICAgICAgICBzZXRBdGhsZXRlcyhkYXRhKTtcbiAgICAgIH0gY2F0Y2ggKGVycjogdW5rbm93bikge1xuICAgICAgICBpZiAoZXJyIGluc3RhbmNlb2YgRXJyb3IpIHtcbiAgICAgICAgICBzZXRFcnJvcihlcnIubWVzc2FnZSk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgc2V0RXJyb3IoJ0FuIHVua25vd24gZXJyb3Igb2NjdXJyZWQnKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH07XG5cbiAgICBpZiAodG9rZW4pIHtcbiAgICAgIGZldGNoQXRobGV0ZXMoKTtcbiAgICB9XG4gIH0sIFt0b2tlbl0pO1xuXG4gIGlmIChlcnJvcikge1xuICAgIHJldHVybiA8ZGl2IGNsYXNzTmFtZT1cImZsZXgganVzdGlmeS1jZW50ZXIgbS1hdXRvXCI+RXJyb3I6IHtlcnJvcn08L2Rpdj47XG4gIH1cblxuICBpZiAoIWF0aGxldGVzKSB7XG4gICAgcmV0dXJuIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBqdXN0aWZ5LWNlbnRlciBtLWF1dG9cIj5Mb2FkaW5nLi4uPC9kaXY+O1xuICB9XG5cbiAgY29uc3QgaGFuZGxlTGltaXQgPSBhc3luYyAoKSA9PiB7XG4gICAgdHJ5IHtcbiAgICAgIGNvbnN0IHJlcXVlc3RPcHRpb25zOiBSZXF1ZXN0SW5pdCA9IHtcbiAgICAgICAgbWV0aG9kOiAnR0VUJyxcbiAgICAgICAgaGVhZGVyczoge1xuICAgICAgICAgICdDb250ZW50LVR5cGUnOiAnYXBwbGljYXRpb24vanNvbicsXG4gICAgICAgICAgJ0F1dGhvcml6YXRpb24nOiBKU09OLnBhcnNlKHRva2VuKVxuICAgICAgICB9XG4gICAgICB9O1xuXG4gICAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGZldGNoKGBodHRwOi8vbG9jYWxob3N0OjMwMDEvYXRobGV0ZT9saW1pdD0ke2xpbWl0fWAsIHJlcXVlc3RPcHRpb25zKTtcblxuICAgICAgaWYgKCFyZXNwb25zZS5vaykge1xuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ0ZhaWxlZCB0byBmZXRjaCBhdGhsZXRlcycpO1xuICAgICAgfVxuXG4gICAgICBjb25zdCBkYXRhID0gYXdhaXQgcmVzcG9uc2UuanNvbigpO1xuICAgICAgc2V0QXRobGV0ZXMoZGF0YSk7XG4gICAgfSBjYXRjaCAoZXJyOiB1bmtub3duKSB7XG4gICAgICBpZiAoZXJyIGluc3RhbmNlb2YgRXJyb3IpIHtcbiAgICAgICAgc2V0RXJyb3IoZXJyLm1lc3NhZ2UpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgc2V0RXJyb3IoJ0FuIHVua25vd24gZXJyb3Igb2NjdXJyZWQnKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgfVxuXG4gIGNvbnN0IHsgbWVzc2FnZSB9ID0gYXRobGV0ZXM7XG5cbiAgcmV0dXJuIChcbiAgICA8ZGl2PlxuICAgICAgPGgxIGNsYXNzTmFtZT1cImZsZXggZmxleC1jb2wgaXRlbXMtY2VudGVyIHRleHQtM3hsIGZvbnQtYm9sZCB0ZXh0LXB1cnBsZS03MDAgbWItNiBtdC04XCI+XG4gICAgICAgIE9seW1waWNzIEF0aGxldGVzIGZyb20gQnJhemlsXG4gICAgICA8L2gxPlxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGp1c3RpZnktY2VudGVyIGl0ZW1zLWNlbnRlciBzcGFjZS14LTQgbWItNFwiPlxuICAgICAgICA8aW5wdXRcbiAgICAgICAgICB0eXBlPVwidGV4dFwiXG4gICAgICAgICAgcGxhY2Vob2xkZXI9XCJTZWFyY2ggYnkgTGltaXQuLi5cIlxuICAgICAgICAgIGNsYXNzTmFtZT1cImJvcmRlciBib3JkZXItZ3JheS0zMDAgcm91bmRlZC1tZCBwLTIgdGV4dC1ncmF5LTcwMCBwbGFjZWhvbGRlci1ncmF5LTUwMCBmb2N1czpvdXRsaW5lLW5vbmUgZm9jdXM6cmluZy0yIGZvY3VzOnJpbmctcHVycGxlLTUwMCBmb2N1czpib3JkZXItcHVycGxlLTUwMCB0cmFuc2l0aW9uIGR1cmF0aW9uLTIwMFwiXG4gICAgICAgICAgdmFsdWU9e2xpbWl0fVxuICAgICAgICAgIG9uQ2hhbmdlPXsoZSkgPT4gc2V0TGltaXQoZS50YXJnZXQudmFsdWUpfVxuICAgICAgICAvPlxuICAgICAgICA8YnV0dG9uXG4gICAgICAgICAgdHlwZT1cImJ1dHRvblwiXG4gICAgICAgICAgb25DbGljaz17KCkgPT4gaGFuZGxlTGltaXQoKX1cbiAgICAgICAgICBjbGFzc05hbWU9XCJiZy1wdXJwbGUtNTAwIGhvdmVyOmJnLXB1cnBsZS02MDAgdGV4dC13aGl0ZSBmb250LXNlbWlib2xkIHB5LTIgcHgtNCByb3VuZGVkLW1kIHRyYW5zaXRpb24gZHVyYXRpb24tMjAwIGZsZXggaXRlbXMtY2VudGVyIHNwYWNlLXgtMlwiXG4gICAgICAgID5cbiAgICAgICAgICA8c3ZnXG4gICAgICAgICAgICB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCJcbiAgICAgICAgICAgIGNsYXNzTmFtZT1cImgtNSB3LTVcIlxuICAgICAgICAgICAgZmlsbD1cIm5vbmVcIlxuICAgICAgICAgICAgdmlld0JveD1cIjAgMCAyNCAyNFwiXG4gICAgICAgICAgICBzdHJva2U9XCJjdXJyZW50Q29sb3JcIlxuICAgICAgICAgID5cbiAgICAgICAgICAgIDxwYXRoXG4gICAgICAgICAgICAgIHN0cm9rZUxpbmVjYXA9XCJyb3VuZFwiXG4gICAgICAgICAgICAgIHN0cm9rZUxpbmVqb2luPVwicm91bmRcIlxuICAgICAgICAgICAgICBzdHJva2VXaWR0aD1cIjJcIlxuICAgICAgICAgICAgICBkPVwiTTUgMTJoMTRNMTIgNWw3IDctNyA3XCJcbiAgICAgICAgICAgIC8+XG4gICAgICAgICAgPC9zdmc+XG4gICAgICAgICAgPHNwYW4+QXBwbHkgTGltaXQ8L3NwYW4+XG4gICAgICAgIDwvYnV0dG9uPlxuICAgICAgPC9kaXY+XG5cbiAgICAgIDx1bCBjbGFzc05hbWU9XCJmbGV4IGZsZXgtd3JhcCBqdXN0aWZ5LWNlbnRlciB3LTExLzEyIGxnOnctMy80IG0tYXV0byBnYXAtNlwiPlxuICAgICAgICB7bWVzc2FnZS5tYXAoKGF0aGxldGUpID0+IChcbiAgICAgICAgICA8bGlcbiAgICAgICAgICAgIGtleT17YXRobGV0ZS5pZH1cbiAgICAgICAgICAgIGNsYXNzTmFtZT1cImZsZXggZmxleC1jb2wgaXRlbXMtY2VudGVyIGJnLWdyYWRpZW50LXRvLXIgZnJvbS1ncmF5LTMwMCB0by1ncmF5LTQwMCBwLTYgcm91bmRlZC14bCBzaGFkb3ctbGcgdy1mdWxsIHNtOnctMS8yIG1kOnctMS8zIGxnOnctMS80IHRyYW5zaXRpb24tdHJhbnNmb3JtIHRyYW5zZm9ybSBob3ZlcjpzY2FsZS0xMDVcIlxuICAgICAgICAgID5cbiAgICAgICAgICAgIDxoMiBjbGFzc05hbWU9XCJ0ZXh0LWxnIGZvbnQtc2VtaWJvbGQgdGV4dC1ncmF5LTkwMCBtYi0yIHRleHQtY2VudGVyXCI+XG4gICAgICAgICAgICAgIHthdGhsZXRlLmluc3RhZ3JhbUJpb31cbiAgICAgICAgICAgIDwvaDI+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggZmxleC1jb2wgaXRlbXMtY2VudGVyXCI+XG4gICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cInRleHQtc20gdGV4dC1ncmF5LTcwMCBtYi0xXCI+XG4gICAgICAgICAgICAgICAgRm9sbG93ZXJzOiB7YXRobGV0ZS5pbnN0YWdyYW1Gb2xsb3dlcnNDb3VudH1cbiAgICAgICAgICAgICAgPC9wPlxuICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJ0ZXh0LXNtIHRleHQtZ3JheS03MDAgbWItM1wiPlxuICAgICAgICAgICAgICAgIEZvbGxvd2luZzoge2F0aGxldGUuaW5zdGFncmFtRm9sbG93aW5nQ291bnR9XG4gICAgICAgICAgICAgIDwvcD5cbiAgICAgICAgICAgICAgPGFcbiAgICAgICAgICAgICAgICBocmVmPXtgL2F0aGxldGUvJHthdGhsZXRlLmlkfWB9XG4gICAgICAgICAgICAgICAgcmVsPVwibm9vcGVuZXIgbm9yZWZlcnJlclwiXG4gICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwidGV4dC1ibHVlLTYwMCBob3Zlcjp0ZXh0LWJsdWUtODAwIHRyYW5zaXRpb24tY29sb3JzIGZvbnQtc2VtaWJvbGRcIlxuICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgPEltYWdlXG4gICAgICAgICAgICAgICAgICBzcmM9e2BkYXRhOmltYWdlL2pwZWc7YmFzZTY0LCR7YXRobGV0ZS5pbnN0YWdyYW1JbWFnZVVybH1gfVxuICAgICAgICAgICAgICAgICAgYWx0PXthdGhsZXRlLm5hbWV9XG4gICAgICAgICAgICAgICAgICB3aWR0aD17ODB9XG4gICAgICAgICAgICAgICAgICBoZWlnaHQ9ezgwfVxuICAgICAgICAgICAgICAgICAgcHJpb3JpdHlcbiAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cInJvdW5kZWQtZnVsbCBtYi0zXCJcbiAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICA8L2E+XG4gICAgICAgICAgICAgIDxhXG4gICAgICAgICAgICAgICAgaHJlZj17YXRobGV0ZS5pbnN0YWdyYW1Vcmx9XG4gICAgICAgICAgICAgICAgdGFyZ2V0PVwiX2JsYW5rXCJcbiAgICAgICAgICAgICAgICByZWw9XCJub29wZW5lciBub3JlZmVycmVyXCJcbiAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJ0ZXh0LWJsdWUtNjAwIGhvdmVyOnRleHQtYmx1ZS04MDAgdHJhbnNpdGlvbi1jb2xvcnMgZm9udC1zZW1pYm9sZFwiXG4gICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICBJbnN0YWdyYW0gUHJvZmlsZVxuICAgICAgICAgICAgICA8L2E+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8L2xpPlxuICAgICAgICApKX1cbiAgICAgIDwvdWw+XG4gICAgPC9kaXY+XG5cbiAgKTtcbn0iXSwibmFtZXMiOlsidXNlRWZmZWN0IiwidXNlU3RhdGUiLCJJbWFnZSIsIkF0aGxldGVQYWdlIiwidG9rZW4iLCJzZXRUb2tlbiIsImF0aGxldGVzIiwic2V0QXRobGV0ZXMiLCJlcnJvciIsInNldEVycm9yIiwibGltaXQiLCJzZXRMaW1pdCIsInN0b3JlZFRva2VuIiwibG9jYWxTdG9yYWdlIiwiZ2V0SXRlbSIsImZldGNoQXRobGV0ZXMiLCJyZXF1ZXN0T3B0aW9ucyIsIm1ldGhvZCIsImhlYWRlcnMiLCJKU09OIiwicGFyc2UiLCJyZXNwb25zZSIsImZldGNoIiwib2siLCJFcnJvciIsImRhdGEiLCJqc29uIiwiZXJyIiwibWVzc2FnZSIsImRpdiIsImNsYXNzTmFtZSIsImhhbmRsZUxpbWl0IiwiaDEiLCJpbnB1dCIsInR5cGUiLCJwbGFjZWhvbGRlciIsInZhbHVlIiwib25DaGFuZ2UiLCJlIiwidGFyZ2V0IiwiYnV0dG9uIiwib25DbGljayIsInN2ZyIsInhtbG5zIiwiZmlsbCIsInZpZXdCb3giLCJzdHJva2UiLCJwYXRoIiwic3Ryb2tlTGluZWNhcCIsInN0cm9rZUxpbmVqb2luIiwic3Ryb2tlV2lkdGgiLCJkIiwic3BhbiIsInVsIiwibWFwIiwiYXRobGV0ZSIsImxpIiwiaDIiLCJpbnN0YWdyYW1CaW8iLCJwIiwiaW5zdGFncmFtRm9sbG93ZXJzQ291bnQiLCJpbnN0YWdyYW1Gb2xsb3dpbmdDb3VudCIsImEiLCJocmVmIiwiaWQiLCJyZWwiLCJzcmMiLCJpbnN0YWdyYW1JbWFnZVVybCIsImFsdCIsIm5hbWUiLCJ3aWR0aCIsImhlaWdodCIsInByaW9yaXR5IiwiaW5zdGFncmFtVXJsIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/app/athlete/page.tsx\n"));

/***/ })

});
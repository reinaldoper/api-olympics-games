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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ AthletePage; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/image */ \"(app-pages-browser)/./node_modules/next/dist/api/image.js\");\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\n\nfunction AthletePage() {\n    _s();\n    const [token, setToken] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\");\n    const [athletes, setAthletes] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(null);\n    const [error, setError] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(null);\n    const [limit, setLimit] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\");\n    const [olympicId, setOlympicId] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(0);\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        const storedToken = localStorage.getItem(\"token\");\n        if (storedToken) {\n            setToken(storedToken);\n        }\n    }, []);\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        const fetchAthletes = async ()=>{\n            try {\n                const requestOptions = {\n                    method: \"PATCH\",\n                    headers: {\n                        \"Content-Type\": \"application/json\",\n                        \"Authorization\": JSON.parse(token)\n                    },\n                    body: JSON.stringify({\n                        olympicId\n                    })\n                };\n                const response = await fetch(\"http://localhost:3001/athlete\", requestOptions);\n                if (!response.ok) {\n                    throw new Error(\"Failed to fetch athletes\");\n                }\n                const data = await response.json();\n                setAthletes(data);\n            } catch (err) {\n                if (err instanceof Error) {\n                    setError(err.message);\n                } else {\n                    setError(\"An unknown error occurred\");\n                }\n            }\n        };\n        if (token) {\n            fetchAthletes();\n        }\n    }, [\n        token\n    ]);\n    if (error) {\n        return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            className: \"flex justify-center m-auto\",\n            children: [\n                \"Error: \",\n                error\n            ]\n        }, void 0, true, {\n            fileName: \"/home/reinaldo/api-olimpics/front-end/src/app/athlete/page.tsx\",\n            lineNumber: 55,\n            columnNumber: 12\n        }, this);\n    }\n    if (!athletes) {\n        return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            className: \"flex justify-center m-auto\",\n            children: \"Loading...\"\n        }, void 0, false, {\n            fileName: \"/home/reinaldo/api-olimpics/front-end/src/app/athlete/page.tsx\",\n            lineNumber: 59,\n            columnNumber: 12\n        }, this);\n    }\n    const handleLimit = async ()=>{\n        try {\n            const requestOptions = {\n                method: \"PATCH\",\n                headers: {\n                    \"Content-Type\": \"application/json\",\n                    \"Authorization\": JSON.parse(token)\n                },\n                body: JSON.stringify({\n                    olympicId\n                })\n            };\n            const response = await fetch(\"http://localhost:3001/athlete?limit=\".concat(limit), requestOptions);\n            if (!response.ok) {\n                throw new Error(\"Failed to fetch athletes\");\n            }\n            const data = await response.json();\n            setAthletes(data);\n        } catch (err) {\n            if (err instanceof Error) {\n                setError(err.message);\n            } else {\n                setError(\"An unknown error occurred\");\n            }\n        }\n    };\n    const handleToggleOlympicId = ()=>{\n        setOlympicId((prevOlympicId)=>prevOlympicId === 0 ? 1 : 0);\n    };\n    const { message } = athletes;\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                className: \"flex flex-col items-center text-3xl font-bold text-purple-700 mb-6 mt-8\",\n                children: \"Olympics Athletes from Brazil\"\n            }, void 0, false, {\n                fileName: \"/home/reinaldo/api-olimpics/front-end/src/app/athlete/page.tsx\",\n                lineNumber: 98,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"flex justify-center items-center space-x-4 mb-4\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                        type: \"text\",\n                        placeholder: \"Search by Limit...\",\n                        className: \"border border-gray-300 rounded-md p-2 text-gray-700 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-purple-500 transition duration-200\",\n                        value: limit,\n                        onChange: (e)=>setLimit(e.target.value)\n                    }, void 0, false, {\n                        fileName: \"/home/reinaldo/api-olimpics/front-end/src/app/athlete/page.tsx\",\n                        lineNumber: 102,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                        type: \"button\",\n                        onClick: ()=>handleLimit(),\n                        className: \"bg-purple-500 hover:bg-purple-600 text-white font-semibold py-2 px-4 rounded-md transition duration-200 flex items-center space-x-2\",\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"svg\", {\n                                xmlns: \"http://www.w3.org/2000/svg\",\n                                className: \"h-5 w-5\",\n                                fill: \"none\",\n                                viewBox: \"0 0 24 24\",\n                                stroke: \"currentColor\",\n                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"path\", {\n                                    strokeLinecap: \"round\",\n                                    strokeLinejoin: \"round\",\n                                    strokeWidth: \"2\",\n                                    d: \"M5 12h14M12 5l7 7-7 7\"\n                                }, void 0, false, {\n                                    fileName: \"/home/reinaldo/api-olimpics/front-end/src/app/athlete/page.tsx\",\n                                    lineNumber: 121,\n                                    columnNumber: 13\n                                }, this)\n                            }, void 0, false, {\n                                fileName: \"/home/reinaldo/api-olimpics/front-end/src/app/athlete/page.tsx\",\n                                lineNumber: 114,\n                                columnNumber: 11\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                children: \"Apply Limit\"\n                            }, void 0, false, {\n                                fileName: \"/home/reinaldo/api-olimpics/front-end/src/app/athlete/page.tsx\",\n                                lineNumber: 128,\n                                columnNumber: 11\n                            }, this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/home/reinaldo/api-olimpics/front-end/src/app/athlete/page.tsx\",\n                        lineNumber: 109,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                        type: \"button\",\n                        onClick: handleToggleOlympicId,\n                        className: \"bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded-md transition duration-200\",\n                        children: olympicId === 0 ? \"Olympic Athletes\" : \"Olympic ParaOlimpycs\"\n                    }, void 0, false, {\n                        fileName: \"/home/reinaldo/api-olimpics/front-end/src/app/athlete/page.tsx\",\n                        lineNumber: 130,\n                        columnNumber: 9\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"/home/reinaldo/api-olimpics/front-end/src/app/athlete/page.tsx\",\n                lineNumber: 101,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"ul\", {\n                className: \"flex flex-wrap justify-center w-11/12 lg:w-3/4 m-auto gap-6\",\n                children: message.map((athlete)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n                        className: \"flex flex-col items-center bg-gradient-to-r from-gray-300 to-gray-400 p-6 rounded-xl shadow-lg w-full sm:w-1/2 md:w-1/3 lg:w-1/4 transition-transform transform hover:scale-105\",\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                                className: \"text-lg font-semibold text-gray-900 mb-2 text-center\",\n                                children: athlete.instagramBio\n                            }, void 0, false, {\n                                fileName: \"/home/reinaldo/api-olimpics/front-end/src/app/athlete/page.tsx\",\n                                lineNumber: 145,\n                                columnNumber: 13\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: \"flex flex-col items-center\",\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                        className: \"text-sm text-gray-700 mb-1\",\n                                        children: [\n                                            \"Followers: \",\n                                            athlete.instagramFollowersCount\n                                        ]\n                                    }, void 0, true, {\n                                        fileName: \"/home/reinaldo/api-olimpics/front-end/src/app/athlete/page.tsx\",\n                                        lineNumber: 149,\n                                        columnNumber: 15\n                                    }, this),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                        className: \"text-sm text-gray-700 mb-3\",\n                                        children: [\n                                            \"Following: \",\n                                            athlete.instagramFollowingCount\n                                        ]\n                                    }, void 0, true, {\n                                        fileName: \"/home/reinaldo/api-olimpics/front-end/src/app/athlete/page.tsx\",\n                                        lineNumber: 152,\n                                        columnNumber: 15\n                                    }, this),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n                                        href: \"/athlete/\".concat(athlete.id),\n                                        rel: \"noopener noreferrer\",\n                                        className: \"text-blue-600 hover:text-blue-800 transition-colors font-semibold\",\n                                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(next_image__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n                                            src: \"data:image/jpeg;base64,\".concat(athlete.instagramImageUrl),\n                                            alt: athlete.name,\n                                            width: 80,\n                                            height: 80,\n                                            priority: true,\n                                            className: \"rounded-full mb-3\"\n                                        }, void 0, false, {\n                                            fileName: \"/home/reinaldo/api-olimpics/front-end/src/app/athlete/page.tsx\",\n                                            lineNumber: 160,\n                                            columnNumber: 17\n                                        }, this)\n                                    }, void 0, false, {\n                                        fileName: \"/home/reinaldo/api-olimpics/front-end/src/app/athlete/page.tsx\",\n                                        lineNumber: 155,\n                                        columnNumber: 15\n                                    }, this),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n                                        href: athlete.instagramUrl,\n                                        target: \"_blank\",\n                                        rel: \"noopener noreferrer\",\n                                        className: \"text-blue-600 hover:text-blue-800 transition-colors font-semibold\",\n                                        children: \"Instagram Profile\"\n                                    }, void 0, false, {\n                                        fileName: \"/home/reinaldo/api-olimpics/front-end/src/app/athlete/page.tsx\",\n                                        lineNumber: 169,\n                                        columnNumber: 15\n                                    }, this)\n                                ]\n                            }, void 0, true, {\n                                fileName: \"/home/reinaldo/api-olimpics/front-end/src/app/athlete/page.tsx\",\n                                lineNumber: 148,\n                                columnNumber: 13\n                            }, this)\n                        ]\n                    }, athlete.id, true, {\n                        fileName: \"/home/reinaldo/api-olimpics/front-end/src/app/athlete/page.tsx\",\n                        lineNumber: 141,\n                        columnNumber: 11\n                    }, this))\n            }, void 0, false, {\n                fileName: \"/home/reinaldo/api-olimpics/front-end/src/app/athlete/page.tsx\",\n                lineNumber: 139,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"/home/reinaldo/api-olimpics/front-end/src/app/athlete/page.tsx\",\n        lineNumber: 97,\n        columnNumber: 5\n    }, this);\n}\n_s(AthletePage, \"BN1RJOUr2Gt1xS89FRMggjQ91Ys=\");\n_c = AthletePage;\nvar _c;\n$RefreshReg$(_c, \"AthletePage\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9hcHAvYXRobGV0ZS9wYWdlLnRzeCIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQzRDO0FBRWI7QUFFaEIsU0FBU0c7O0lBQ3RCLE1BQU0sQ0FBQ0MsT0FBT0MsU0FBUyxHQUFHSiwrQ0FBUUEsQ0FBUztJQUMzQyxNQUFNLENBQUNLLFVBQVVDLFlBQVksR0FBR04sK0NBQVFBLENBQWtCO0lBQzFELE1BQU0sQ0FBQ08sT0FBT0MsU0FBUyxHQUFHUiwrQ0FBUUEsQ0FBZ0I7SUFDbEQsTUFBTSxDQUFDUyxPQUFPQyxTQUFTLEdBQUdWLCtDQUFRQSxDQUFTO0lBQzNDLE1BQU0sQ0FBQ1csV0FBV0MsYUFBYSxHQUFHWiwrQ0FBUUEsQ0FBUztJQUVuREQsZ0RBQVNBLENBQUM7UUFDUixNQUFNYyxjQUFjQyxhQUFhQyxPQUFPLENBQUM7UUFDekMsSUFBSUYsYUFBYTtZQUNmVCxTQUFTUztRQUNYO0lBQ0YsR0FBRyxFQUFFO0lBRUxkLGdEQUFTQSxDQUFDO1FBQ1IsTUFBTWlCLGdCQUFnQjtZQUNwQixJQUFJO2dCQUNGLE1BQU1DLGlCQUE4QjtvQkFDbENDLFFBQVE7b0JBQ1JDLFNBQVM7d0JBQ1AsZ0JBQWdCO3dCQUNoQixpQkFBaUJDLEtBQUtDLEtBQUssQ0FBQ2xCO29CQUM5QjtvQkFDQW1CLE1BQU1GLEtBQUtHLFNBQVMsQ0FBQzt3QkFBRVo7b0JBQVU7Z0JBQ25DO2dCQUVBLE1BQU1hLFdBQVcsTUFBTUMsTUFBTSxpQ0FBaUNSO2dCQUU5RCxJQUFJLENBQUNPLFNBQVNFLEVBQUUsRUFBRTtvQkFDaEIsTUFBTSxJQUFJQyxNQUFNO2dCQUNsQjtnQkFFQSxNQUFNQyxPQUFPLE1BQU1KLFNBQVNLLElBQUk7Z0JBQ2hDdkIsWUFBWXNCO1lBQ2QsRUFBRSxPQUFPRSxLQUFjO2dCQUNyQixJQUFJQSxlQUFlSCxPQUFPO29CQUN4Qm5CLFNBQVNzQixJQUFJQyxPQUFPO2dCQUN0QixPQUFPO29CQUNMdkIsU0FBUztnQkFDWDtZQUNG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QUFNUixRQUFRa0IsWUFBWTt3Q0FDMUJsQyxRQUFPO3dDQUNQMEIsS0FBSTt3Q0FDSnJDLFdBQVU7a0RBQ1g7Ozs7Ozs7Ozs7Ozs7dUJBaENFMkIsUUFBUVMsRUFBRTs7Ozs7Ozs7Ozs7Ozs7OztBQTBDM0I7R0FsTHdCbkU7S0FBQUEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2FwcC9hdGhsZXRlL3BhZ2UudHN4PzA5ZDYiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2UgY2xpZW50XCI7XG5pbXBvcnQgeyB1c2VFZmZlY3QsIHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgeyBJQXRobGV0ZSB9IGZyb20gXCIuLi90eXBlcy9hdGhsZXRlVHlwZVwiO1xuaW1wb3J0IEltYWdlIGZyb20gXCJuZXh0L2ltYWdlXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEF0aGxldGVQYWdlKCkge1xuICBjb25zdCBbdG9rZW4sIHNldFRva2VuXSA9IHVzZVN0YXRlPHN0cmluZz4oJycpO1xuICBjb25zdCBbYXRobGV0ZXMsIHNldEF0aGxldGVzXSA9IHVzZVN0YXRlPElBdGhsZXRlIHwgbnVsbD4obnVsbCk7XG4gIGNvbnN0IFtlcnJvciwgc2V0RXJyb3JdID0gdXNlU3RhdGU8c3RyaW5nIHwgbnVsbD4obnVsbCk7XG4gIGNvbnN0IFtsaW1pdCwgc2V0TGltaXRdID0gdXNlU3RhdGU8c3RyaW5nPignJyk7XG4gIGNvbnN0IFtvbHltcGljSWQsIHNldE9seW1waWNJZF0gPSB1c2VTdGF0ZTxudW1iZXI+KDApXG5cbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBjb25zdCBzdG9yZWRUb2tlbiA9IGxvY2FsU3RvcmFnZS5nZXRJdGVtKCd0b2tlbicpO1xuICAgIGlmIChzdG9yZWRUb2tlbikge1xuICAgICAgc2V0VG9rZW4oc3RvcmVkVG9rZW4pO1xuICAgIH1cbiAgfSwgW10pO1xuXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgY29uc3QgZmV0Y2hBdGhsZXRlcyA9IGFzeW5jICgpID0+IHtcbiAgICAgIHRyeSB7XG4gICAgICAgIGNvbnN0IHJlcXVlc3RPcHRpb25zOiBSZXF1ZXN0SW5pdCA9IHtcbiAgICAgICAgICBtZXRob2Q6ICdQQVRDSCcsXG4gICAgICAgICAgaGVhZGVyczoge1xuICAgICAgICAgICAgJ0NvbnRlbnQtVHlwZSc6ICdhcHBsaWNhdGlvbi9qc29uJyxcbiAgICAgICAgICAgICdBdXRob3JpemF0aW9uJzogSlNPTi5wYXJzZSh0b2tlbilcbiAgICAgICAgICB9LFxuICAgICAgICAgIGJvZHk6IEpTT04uc3RyaW5naWZ5KHsgb2x5bXBpY0lkIH0pLFxuICAgICAgICB9O1xuXG4gICAgICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgZmV0Y2goJ2h0dHA6Ly9sb2NhbGhvc3Q6MzAwMS9hdGhsZXRlJywgcmVxdWVzdE9wdGlvbnMpO1xuXG4gICAgICAgIGlmICghcmVzcG9uc2Uub2spIHtcbiAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ0ZhaWxlZCB0byBmZXRjaCBhdGhsZXRlcycpO1xuICAgICAgICB9XG5cbiAgICAgICAgY29uc3QgZGF0YSA9IGF3YWl0IHJlc3BvbnNlLmpzb24oKTtcbiAgICAgICAgc2V0QXRobGV0ZXMoZGF0YSk7XG4gICAgICB9IGNhdGNoIChlcnI6IHVua25vd24pIHtcbiAgICAgICAgaWYgKGVyciBpbnN0YW5jZW9mIEVycm9yKSB7XG4gICAgICAgICAgc2V0RXJyb3IoZXJyLm1lc3NhZ2UpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHNldEVycm9yKCdBbiB1bmtub3duIGVycm9yIG9jY3VycmVkJyk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9O1xuXG4gICAgaWYgKHRva2VuKSB7XG4gICAgICBmZXRjaEF0aGxldGVzKCk7XG4gICAgfVxuICB9LCBbdG9rZW5dKTtcblxuICBpZiAoZXJyb3IpIHtcbiAgICByZXR1cm4gPGRpdiBjbGFzc05hbWU9XCJmbGV4IGp1c3RpZnktY2VudGVyIG0tYXV0b1wiPkVycm9yOiB7ZXJyb3J9PC9kaXY+O1xuICB9XG5cbiAgaWYgKCFhdGhsZXRlcykge1xuICAgIHJldHVybiA8ZGl2IGNsYXNzTmFtZT1cImZsZXgganVzdGlmeS1jZW50ZXIgbS1hdXRvXCI+TG9hZGluZy4uLjwvZGl2PjtcbiAgfVxuXG4gIGNvbnN0IGhhbmRsZUxpbWl0ID0gYXN5bmMgKCkgPT4ge1xuICAgIHRyeSB7XG4gICAgICBjb25zdCByZXF1ZXN0T3B0aW9uczogUmVxdWVzdEluaXQgPSB7XG4gICAgICAgIG1ldGhvZDogJ1BBVENIJyxcbiAgICAgICAgaGVhZGVyczoge1xuICAgICAgICAgICdDb250ZW50LVR5cGUnOiAnYXBwbGljYXRpb24vanNvbicsXG4gICAgICAgICAgJ0F1dGhvcml6YXRpb24nOiBKU09OLnBhcnNlKHRva2VuKVxuICAgICAgICB9LFxuICAgICAgICBib2R5OiBKU09OLnN0cmluZ2lmeSh7IG9seW1waWNJZCB9KSxcbiAgICAgIH07XG5cbiAgICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgZmV0Y2goYGh0dHA6Ly9sb2NhbGhvc3Q6MzAwMS9hdGhsZXRlP2xpbWl0PSR7bGltaXR9YCwgcmVxdWVzdE9wdGlvbnMpO1xuXG4gICAgICBpZiAoIXJlc3BvbnNlLm9rKSB7XG4gICAgICAgIHRocm93IG5ldyBFcnJvcignRmFpbGVkIHRvIGZldGNoIGF0aGxldGVzJyk7XG4gICAgICB9XG5cbiAgICAgIGNvbnN0IGRhdGEgPSBhd2FpdCByZXNwb25zZS5qc29uKCk7XG4gICAgICBzZXRBdGhsZXRlcyhkYXRhKTtcbiAgICB9IGNhdGNoIChlcnI6IHVua25vd24pIHtcbiAgICAgIGlmIChlcnIgaW5zdGFuY2VvZiBFcnJvcikge1xuICAgICAgICBzZXRFcnJvcihlcnIubWVzc2FnZSk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBzZXRFcnJvcignQW4gdW5rbm93biBlcnJvciBvY2N1cnJlZCcpO1xuICAgICAgfVxuICAgIH1cblxuICB9XG4gIGNvbnN0IGhhbmRsZVRvZ2dsZU9seW1waWNJZCA9ICgpID0+IHtcbiAgICBzZXRPbHltcGljSWQoKHByZXZPbHltcGljSWQ6IG51bWJlcikgPT4gKHByZXZPbHltcGljSWQgPT09IDAgPyAxIDogMCkpO1xuICB9O1xuXG4gIGNvbnN0IHsgbWVzc2FnZSB9ID0gYXRobGV0ZXM7XG5cbiAgcmV0dXJuIChcbiAgICA8ZGl2PlxuICAgICAgPGgxIGNsYXNzTmFtZT1cImZsZXggZmxleC1jb2wgaXRlbXMtY2VudGVyIHRleHQtM3hsIGZvbnQtYm9sZCB0ZXh0LXB1cnBsZS03MDAgbWItNiBtdC04XCI+XG4gICAgICAgIE9seW1waWNzIEF0aGxldGVzIGZyb20gQnJhemlsXG4gICAgICA8L2gxPlxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGp1c3RpZnktY2VudGVyIGl0ZW1zLWNlbnRlciBzcGFjZS14LTQgbWItNFwiPlxuICAgICAgICA8aW5wdXRcbiAgICAgICAgICB0eXBlPVwidGV4dFwiXG4gICAgICAgICAgcGxhY2Vob2xkZXI9XCJTZWFyY2ggYnkgTGltaXQuLi5cIlxuICAgICAgICAgIGNsYXNzTmFtZT1cImJvcmRlciBib3JkZXItZ3JheS0zMDAgcm91bmRlZC1tZCBwLTIgdGV4dC1ncmF5LTcwMCBwbGFjZWhvbGRlci1ncmF5LTUwMCBmb2N1czpvdXRsaW5lLW5vbmUgZm9jdXM6cmluZy0yIGZvY3VzOnJpbmctcHVycGxlLTUwMCBmb2N1czpib3JkZXItcHVycGxlLTUwMCB0cmFuc2l0aW9uIGR1cmF0aW9uLTIwMFwiXG4gICAgICAgICAgdmFsdWU9e2xpbWl0fVxuICAgICAgICAgIG9uQ2hhbmdlPXsoZSkgPT4gc2V0TGltaXQoZS50YXJnZXQudmFsdWUpfVxuICAgICAgICAvPlxuICAgICAgICA8YnV0dG9uXG4gICAgICAgICAgdHlwZT1cImJ1dHRvblwiXG4gICAgICAgICAgb25DbGljaz17KCkgPT4gaGFuZGxlTGltaXQoKX1cbiAgICAgICAgICBjbGFzc05hbWU9XCJiZy1wdXJwbGUtNTAwIGhvdmVyOmJnLXB1cnBsZS02MDAgdGV4dC13aGl0ZSBmb250LXNlbWlib2xkIHB5LTIgcHgtNCByb3VuZGVkLW1kIHRyYW5zaXRpb24gZHVyYXRpb24tMjAwIGZsZXggaXRlbXMtY2VudGVyIHNwYWNlLXgtMlwiXG4gICAgICAgID5cbiAgICAgICAgICA8c3ZnXG4gICAgICAgICAgICB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCJcbiAgICAgICAgICAgIGNsYXNzTmFtZT1cImgtNSB3LTVcIlxuICAgICAgICAgICAgZmlsbD1cIm5vbmVcIlxuICAgICAgICAgICAgdmlld0JveD1cIjAgMCAyNCAyNFwiXG4gICAgICAgICAgICBzdHJva2U9XCJjdXJyZW50Q29sb3JcIlxuICAgICAgICAgID5cbiAgICAgICAgICAgIDxwYXRoXG4gICAgICAgICAgICAgIHN0cm9rZUxpbmVjYXA9XCJyb3VuZFwiXG4gICAgICAgICAgICAgIHN0cm9rZUxpbmVqb2luPVwicm91bmRcIlxuICAgICAgICAgICAgICBzdHJva2VXaWR0aD1cIjJcIlxuICAgICAgICAgICAgICBkPVwiTTUgMTJoMTRNMTIgNWw3IDctNyA3XCJcbiAgICAgICAgICAgIC8+XG4gICAgICAgICAgPC9zdmc+XG4gICAgICAgICAgPHNwYW4+QXBwbHkgTGltaXQ8L3NwYW4+XG4gICAgICAgIDwvYnV0dG9uPlxuICAgICAgICA8YnV0dG9uXG4gICAgICAgICAgdHlwZT1cImJ1dHRvblwiXG4gICAgICAgICAgb25DbGljaz17aGFuZGxlVG9nZ2xlT2x5bXBpY0lkfVxuICAgICAgICAgIGNsYXNzTmFtZT1cImJnLWJsdWUtNTAwIGhvdmVyOmJnLWJsdWUtNjAwIHRleHQtd2hpdGUgZm9udC1zZW1pYm9sZCBweS0yIHB4LTQgcm91bmRlZC1tZCB0cmFuc2l0aW9uIGR1cmF0aW9uLTIwMFwiXG4gICAgICAgID5cbiAgICAgICAgICB7b2x5bXBpY0lkID09PSAwID8gJ09seW1waWMgQXRobGV0ZXMnIDogJ09seW1waWMgUGFyYU9saW1weWNzJ31cbiAgICAgICAgPC9idXR0b24+XG4gICAgICA8L2Rpdj5cblxuICAgICAgPHVsIGNsYXNzTmFtZT1cImZsZXggZmxleC13cmFwIGp1c3RpZnktY2VudGVyIHctMTEvMTIgbGc6dy0zLzQgbS1hdXRvIGdhcC02XCI+XG4gICAgICAgIHttZXNzYWdlLm1hcCgoYXRobGV0ZSkgPT4gKFxuICAgICAgICAgIDxsaVxuICAgICAgICAgICAga2V5PXthdGhsZXRlLmlkfVxuICAgICAgICAgICAgY2xhc3NOYW1lPVwiZmxleCBmbGV4LWNvbCBpdGVtcy1jZW50ZXIgYmctZ3JhZGllbnQtdG8tciBmcm9tLWdyYXktMzAwIHRvLWdyYXktNDAwIHAtNiByb3VuZGVkLXhsIHNoYWRvdy1sZyB3LWZ1bGwgc206dy0xLzIgbWQ6dy0xLzMgbGc6dy0xLzQgdHJhbnNpdGlvbi10cmFuc2Zvcm0gdHJhbnNmb3JtIGhvdmVyOnNjYWxlLTEwNVwiXG4gICAgICAgICAgPlxuICAgICAgICAgICAgPGgyIGNsYXNzTmFtZT1cInRleHQtbGcgZm9udC1zZW1pYm9sZCB0ZXh0LWdyYXktOTAwIG1iLTIgdGV4dC1jZW50ZXJcIj5cbiAgICAgICAgICAgICAge2F0aGxldGUuaW5zdGFncmFtQmlvfVxuICAgICAgICAgICAgPC9oMj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBmbGV4LWNvbCBpdGVtcy1jZW50ZXJcIj5cbiAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwidGV4dC1zbSB0ZXh0LWdyYXktNzAwIG1iLTFcIj5cbiAgICAgICAgICAgICAgICBGb2xsb3dlcnM6IHthdGhsZXRlLmluc3RhZ3JhbUZvbGxvd2Vyc0NvdW50fVxuICAgICAgICAgICAgICA8L3A+XG4gICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cInRleHQtc20gdGV4dC1ncmF5LTcwMCBtYi0zXCI+XG4gICAgICAgICAgICAgICAgRm9sbG93aW5nOiB7YXRobGV0ZS5pbnN0YWdyYW1Gb2xsb3dpbmdDb3VudH1cbiAgICAgICAgICAgICAgPC9wPlxuICAgICAgICAgICAgICA8YVxuICAgICAgICAgICAgICAgIGhyZWY9e2AvYXRobGV0ZS8ke2F0aGxldGUuaWR9YH1cbiAgICAgICAgICAgICAgICByZWw9XCJub29wZW5lciBub3JlZmVycmVyXCJcbiAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJ0ZXh0LWJsdWUtNjAwIGhvdmVyOnRleHQtYmx1ZS04MDAgdHJhbnNpdGlvbi1jb2xvcnMgZm9udC1zZW1pYm9sZFwiXG4gICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICA8SW1hZ2VcbiAgICAgICAgICAgICAgICAgIHNyYz17YGRhdGE6aW1hZ2UvanBlZztiYXNlNjQsJHthdGhsZXRlLmluc3RhZ3JhbUltYWdlVXJsfWB9XG4gICAgICAgICAgICAgICAgICBhbHQ9e2F0aGxldGUubmFtZX1cbiAgICAgICAgICAgICAgICAgIHdpZHRoPXs4MH1cbiAgICAgICAgICAgICAgICAgIGhlaWdodD17ODB9XG4gICAgICAgICAgICAgICAgICBwcmlvcml0eVxuICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwicm91bmRlZC1mdWxsIG1iLTNcIlxuICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgIDwvYT5cbiAgICAgICAgICAgICAgPGFcbiAgICAgICAgICAgICAgICBocmVmPXthdGhsZXRlLmluc3RhZ3JhbVVybH1cbiAgICAgICAgICAgICAgICB0YXJnZXQ9XCJfYmxhbmtcIlxuICAgICAgICAgICAgICAgIHJlbD1cIm5vb3BlbmVyIG5vcmVmZXJyZXJcIlxuICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cInRleHQtYmx1ZS02MDAgaG92ZXI6dGV4dC1ibHVlLTgwMCB0cmFuc2l0aW9uLWNvbG9ycyBmb250LXNlbWlib2xkXCJcbiAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgIEluc3RhZ3JhbSBQcm9maWxlXG4gICAgICAgICAgICAgIDwvYT5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDwvbGk+XG4gICAgICAgICkpfVxuICAgICAgPC91bD5cbiAgICA8L2Rpdj5cblxuICApO1xufSJdLCJuYW1lcyI6WyJ1c2VFZmZlY3QiLCJ1c2VTdGF0ZSIsIkltYWdlIiwiQXRobGV0ZVBhZ2UiLCJ0b2tlbiIsInNldFRva2VuIiwiYXRobGV0ZXMiLCJzZXRBdGhsZXRlcyIsImVycm9yIiwic2V0RXJyb3IiLCJsaW1pdCIsInNldExpbWl0Iiwib2x5bXBpY0lkIiwic2V0T2x5bXBpY0lkIiwic3RvcmVkVG9rZW4iLCJsb2NhbFN0b3JhZ2UiLCJnZXRJdGVtIiwiZmV0Y2hBdGhsZXRlcyIsInJlcXVlc3RPcHRpb25zIiwibWV0aG9kIiwiaGVhZGVycyIsIkpTT04iLCJwYXJzZSIsImJvZHkiLCJzdHJpbmdpZnkiLCJyZXNwb25zZSIsImZldGNoIiwib2siLCJFcnJvciIsImRhdGEiLCJqc29uIiwiZXJyIiwibWVzc2FnZSIsImRpdiIsImNsYXNzTmFtZSIsImhhbmRsZUxpbWl0IiwiaGFuZGxlVG9nZ2xlT2x5bXBpY0lkIiwicHJldk9seW1waWNJZCIsImgxIiwiaW5wdXQiLCJ0eXBlIiwicGxhY2Vob2xkZXIiLCJ2YWx1ZSIsIm9uQ2hhbmdlIiwiZSIsInRhcmdldCIsImJ1dHRvbiIsIm9uQ2xpY2siLCJzdmciLCJ4bWxucyIsImZpbGwiLCJ2aWV3Qm94Iiwic3Ryb2tlIiwicGF0aCIsInN0cm9rZUxpbmVjYXAiLCJzdHJva2VMaW5lam9pbiIsInN0cm9rZVdpZHRoIiwiZCIsInNwYW4iLCJ1bCIsIm1hcCIsImF0aGxldGUiLCJsaSIsImgyIiwiaW5zdGFncmFtQmlvIiwicCIsImluc3RhZ3JhbUZvbGxvd2Vyc0NvdW50IiwiaW5zdGFncmFtRm9sbG93aW5nQ291bnQiLCJhIiwiaHJlZiIsImlkIiwicmVsIiwic3JjIiwiaW5zdGFncmFtSW1hZ2VVcmwiLCJhbHQiLCJuYW1lIiwid2lkdGgiLCJoZWlnaHQiLCJwcmlvcml0eSIsImluc3RhZ3JhbVVybCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/app/athlete/page.tsx\n"));

/***/ })

});
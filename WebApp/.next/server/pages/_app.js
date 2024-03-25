/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(() => {
var exports = {};
exports.id = "pages/_app";
exports.ids = ["pages/_app"];
exports.modules = {

/***/ "__barrel_optimize__?names=ThemeProvider!=!./node_modules/@mui/material/index.js":
/*!***************************************************************************************!*\
  !*** __barrel_optimize__?names=ThemeProvider!=!./node_modules/@mui/material/index.js ***!
  \***************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ThemeProvider: () => (/* reexport safe */ _Users_shubhamkhuva_Documents_Interview_WebApp_node_modules_mui_material_styles_index_js__WEBPACK_IMPORTED_MODULE_0__.ThemeProvider)
/* harmony export */ });
/* harmony import */ var _Users_shubhamkhuva_Documents_Interview_WebApp_node_modules_mui_material_styles_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@mui/material/styles/index.js */ "./node_modules/@mui/material/styles/index.js");



/***/ }),

/***/ "./src/context/actions/types.ts":
/*!**************************************!*\
  !*** ./src/context/actions/types.ts ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   ActionTypes: () => (/* binding */ ActionTypes)\n/* harmony export */ });\nvar ActionTypes;\n(function(ActionTypes) {\n    ActionTypes[\"SET_USER\"] = \"SET_USER\";\n})(ActionTypes || (ActionTypes = {}));\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvY29udGV4dC9hY3Rpb25zL3R5cGVzLnRzIiwibWFwcGluZ3MiOiI7Ozs7O1VBU1lBOztHQUFBQSxnQkFBQUEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly93ZWJhcHAvLi9zcmMvY29udGV4dC9hY3Rpb25zL3R5cGVzLnRzPzg2MmIiXSwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IGludGVyZmFjZSBVc2VyIHtcbiAgZnVsbE5hbWU6IHN0cmluZztcbiAgdXNlcm5hbWU6IHN0cmluZztcbn1cblxuZXhwb3J0IGludGVyZmFjZSBVc2VyU3RhdGUge1xuICBjdXJyZW50VXNlcjogVXNlciB8IG51bGw7XG59XG5cbmV4cG9ydCBlbnVtIEFjdGlvblR5cGVzIHtcbiAgU0VUX1VTRVIgPSAnU0VUX1VTRVInLFxufVxuXG5leHBvcnQgaW50ZXJmYWNlIFNldFVzZXJBY3Rpb24ge1xuICB0eXBlOiBBY3Rpb25UeXBlcy5TRVRfVVNFUjtcbiAgcGF5bG9hZDogVXNlcjtcbn1cblxuZXhwb3J0IHR5cGUgVXNlckFjdGlvbiA9IFNldFVzZXJBY3Rpb247XG4iXSwibmFtZXMiOlsiQWN0aW9uVHlwZXMiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/context/actions/types.ts\n");

/***/ }),

/***/ "./src/context/reducer.ts":
/*!********************************!*\
  !*** ./src/context/reducer.ts ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _actions_types__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./actions/types */ \"./src/context/actions/types.ts\");\n\nconst initialState = {\n    currentUser: null\n};\nconst userReducer = (state = initialState, action)=>{\n    switch(action.type){\n        case _actions_types__WEBPACK_IMPORTED_MODULE_0__.ActionTypes.SET_USER:\n            return {\n                ...state,\n                currentUser: action.payload\n            };\n        default:\n            return state;\n    }\n};\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (userReducer);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvY29udGV4dC9yZWR1Y2VyLnRzIiwibWFwcGluZ3MiOiI7Ozs7O0FBQW1FO0FBRW5FLE1BQU1DLGVBQTBCO0lBQzlCQyxhQUFhO0FBQ2Y7QUFFQSxNQUFNQyxjQUFjLENBQUNDLFFBQVFILFlBQVksRUFBRUk7SUFDekMsT0FBUUEsT0FBT0MsSUFBSTtRQUNqQixLQUFLTix1REFBV0EsQ0FBQ08sUUFBUTtZQUN2QixPQUFPO2dCQUNMLEdBQUdILEtBQUs7Z0JBQ1JGLGFBQWFHLE9BQU9HLE9BQU87WUFDN0I7UUFDRjtZQUNFLE9BQU9KO0lBQ1g7QUFDRjtBQUVBLGlFQUFlRCxXQUFXQSxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vd2ViYXBwLy4vc3JjL2NvbnRleHQvcmVkdWNlci50cz85Yjg4Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7QWN0aW9uVHlwZXMsIFVzZXJTdGF0ZSwgVXNlckFjdGlvbn0gZnJvbSAnLi9hY3Rpb25zL3R5cGVzJztcblxuY29uc3QgaW5pdGlhbFN0YXRlOiBVc2VyU3RhdGUgPSB7XG4gIGN1cnJlbnRVc2VyOiBudWxsLFxufTtcblxuY29uc3QgdXNlclJlZHVjZXIgPSAoc3RhdGUgPSBpbml0aWFsU3RhdGUsIGFjdGlvbjogVXNlckFjdGlvbik6IFVzZXJTdGF0ZSA9PiB7XG4gIHN3aXRjaCAoYWN0aW9uLnR5cGUpIHtcbiAgICBjYXNlIEFjdGlvblR5cGVzLlNFVF9VU0VSOlxuICAgICAgcmV0dXJuIHtcbiAgICAgICAgLi4uc3RhdGUsXG4gICAgICAgIGN1cnJlbnRVc2VyOiBhY3Rpb24ucGF5bG9hZCxcbiAgICAgIH07XG4gICAgZGVmYXVsdDpcbiAgICAgIHJldHVybiBzdGF0ZTtcbiAgfVxufTtcblxuZXhwb3J0IGRlZmF1bHQgdXNlclJlZHVjZXI7XG4iXSwibmFtZXMiOlsiQWN0aW9uVHlwZXMiLCJpbml0aWFsU3RhdGUiLCJjdXJyZW50VXNlciIsInVzZXJSZWR1Y2VyIiwic3RhdGUiLCJhY3Rpb24iLCJ0eXBlIiwiU0VUX1VTRVIiLCJwYXlsb2FkIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/context/reducer.ts\n");

/***/ }),

/***/ "./src/context/store.ts":
/*!******************************!*\
  !*** ./src/context/store.ts ***!
  \******************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {\n__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   persistor: () => (/* binding */ persistor),\n/* harmony export */   store: () => (/* binding */ store)\n/* harmony export */ });\n/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! redux */ \"redux\");\n/* harmony import */ var redux_persist__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! redux-persist */ \"redux-persist\");\n/* harmony import */ var redux_persist__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(redux_persist__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var redux_persist_lib_storage__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! redux-persist/lib/storage */ \"redux-persist/lib/storage\");\n/* harmony import */ var redux_persist_lib_storage__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(redux_persist_lib_storage__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _reducer__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./reducer */ \"./src/context/reducer.ts\");\nvar __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([redux__WEBPACK_IMPORTED_MODULE_0__]);\nredux__WEBPACK_IMPORTED_MODULE_0__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];\n\n\n\n\nconst persistConfig = {\n    key: \"root\",\n    storage: (redux_persist_lib_storage__WEBPACK_IMPORTED_MODULE_2___default())\n};\nconst persistedReducer = (0,redux_persist__WEBPACK_IMPORTED_MODULE_1__.persistReducer)(persistConfig, _reducer__WEBPACK_IMPORTED_MODULE_3__[\"default\"]);\nconst store = (0,redux__WEBPACK_IMPORTED_MODULE_0__.createStore)(persistedReducer);\nconst persistor = (0,redux_persist__WEBPACK_IMPORTED_MODULE_1__.persistStore)(store);\n\n\n__webpack_async_result__();\n} catch(e) { __webpack_async_result__(e); } });//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvY29udGV4dC9zdG9yZS50cyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7OztBQUFvQztBQUN5QjtBQUNiO0FBQ1o7QUFFcEMsTUFBTUssZ0JBQWdCO0lBQ3BCQyxLQUFLO0lBQ0xILE9BQU9BLG9FQUFBQTtBQUNUO0FBRUEsTUFBTUksbUJBQW1CTCw2REFBY0EsQ0FBQ0csZUFBZUQsZ0RBQVdBO0FBRWxFLE1BQU1JLFFBQWFSLGtEQUFXQSxDQUFDTztBQUMvQixNQUFNRSxZQUFZUiwyREFBWUEsQ0FBQ087QUFFSCIsInNvdXJjZXMiOlsid2VicGFjazovL3dlYmFwcC8uL3NyYy9jb250ZXh0L3N0b3JlLnRzP2IyZWYiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgY3JlYXRlU3RvcmUgfSBmcm9tIFwicmVkdXhcIjtcbmltcG9ydCB7IHBlcnNpc3RTdG9yZSwgcGVyc2lzdFJlZHVjZXIgfSBmcm9tIFwicmVkdXgtcGVyc2lzdFwiO1xuaW1wb3J0IHN0b3JhZ2UgZnJvbSBcInJlZHV4LXBlcnNpc3QvbGliL3N0b3JhZ2VcIjtcbmltcG9ydCB1c2VyUmVkdWNlciBmcm9tIFwiLi9yZWR1Y2VyXCI7XG5cbmNvbnN0IHBlcnNpc3RDb25maWcgPSB7XG4gIGtleTogXCJyb290XCIsXG4gIHN0b3JhZ2UsXG59O1xuXG5jb25zdCBwZXJzaXN0ZWRSZWR1Y2VyID0gcGVyc2lzdFJlZHVjZXIocGVyc2lzdENvbmZpZywgdXNlclJlZHVjZXIpO1xuXG5jb25zdCBzdG9yZTogYW55ID0gY3JlYXRlU3RvcmUocGVyc2lzdGVkUmVkdWNlcik7XG5jb25zdCBwZXJzaXN0b3IgPSBwZXJzaXN0U3RvcmUoc3RvcmUpO1xuXG5leHBvcnQgeyBzdG9yZSwgcGVyc2lzdG9yIH07XG4iXSwibmFtZXMiOlsiY3JlYXRlU3RvcmUiLCJwZXJzaXN0U3RvcmUiLCJwZXJzaXN0UmVkdWNlciIsInN0b3JhZ2UiLCJ1c2VyUmVkdWNlciIsInBlcnNpc3RDb25maWciLCJrZXkiLCJwZXJzaXN0ZWRSZWR1Y2VyIiwic3RvcmUiLCJwZXJzaXN0b3IiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/context/store.ts\n");

/***/ }),

/***/ "./src/core/theme/index.ts":
/*!*********************************!*\
  !*** ./src/core/theme/index.ts ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _mui_material_styles__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @mui/material/styles */ \"@mui/material/styles\");\n/* harmony import */ var _mui_material_styles__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_mui_material_styles__WEBPACK_IMPORTED_MODULE_0__);\n\nconst theme = (0,_mui_material_styles__WEBPACK_IMPORTED_MODULE_0__.createTheme)({\n    palette: {\n        primary: {\n            main: \"#FC760C\"\n        },\n        secondary: {\n            main: \"#FFF\"\n        },\n        background: {\n            default: \"#FC760C\"\n        }\n    },\n    shape: {\n        borderRadius: 10\n    },\n    components: {\n        MuiButton: {\n            styleOverrides: {\n                root: ({ theme })=>({\n                        color: \"#FFFFFF\",\n                        textTransform: \"capitalize\"\n                    })\n            }\n        }\n    }\n});\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (theme);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvY29yZS90aGVtZS9pbmRleC50cyIsIm1hcHBpbmdzIjoiOzs7Ozs7QUFBbUQ7QUFFbkQsTUFBTUMsUUFBUUQsaUVBQVdBLENBQUM7SUFDeEJFLFNBQVM7UUFDUEMsU0FBUztZQUNQQyxNQUFNO1FBQ1I7UUFDQUMsV0FBVztZQUNURCxNQUFNO1FBQ1I7UUFDQUUsWUFBWTtZQUNWQyxTQUFTO1FBQ1g7SUFDRjtJQUNBQyxPQUFPO1FBQ0xDLGNBQWM7SUFDaEI7SUFDQUMsWUFBWTtRQUNWQyxXQUFXO1lBQ1RDLGdCQUFnQjtnQkFDZEMsTUFBTSxDQUFDLEVBQUVaLEtBQUssRUFBRSxHQUFNO3dCQUNwQmEsT0FBTzt3QkFDUEMsZUFBZTtvQkFDakI7WUFDRjtRQUNGO0lBQ0Y7QUFDRjtBQUVBLGlFQUFlZCxLQUFLQSxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vd2ViYXBwLy4vc3JjL2NvcmUvdGhlbWUvaW5kZXgudHM/NDIyNyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBjcmVhdGVUaGVtZSB9IGZyb20gXCJAbXVpL21hdGVyaWFsL3N0eWxlc1wiO1xuXG5jb25zdCB0aGVtZSA9IGNyZWF0ZVRoZW1lKHtcbiAgcGFsZXR0ZToge1xuICAgIHByaW1hcnk6IHtcbiAgICAgIG1haW46IFwiI0ZDNzYwQ1wiLFxuICAgIH0sXG4gICAgc2Vjb25kYXJ5OiB7XG4gICAgICBtYWluOiBcIiNGRkZcIixcbiAgICB9LFxuICAgIGJhY2tncm91bmQ6IHtcbiAgICAgIGRlZmF1bHQ6IFwiI0ZDNzYwQ1wiLFxuICAgIH0sXG4gIH0sXG4gIHNoYXBlOiB7XG4gICAgYm9yZGVyUmFkaXVzOiAxMCxcbiAgfSxcbiAgY29tcG9uZW50czoge1xuICAgIE11aUJ1dHRvbjoge1xuICAgICAgc3R5bGVPdmVycmlkZXM6IHtcbiAgICAgICAgcm9vdDogKHsgdGhlbWUgfSkgPT4gKHtcbiAgICAgICAgICBjb2xvcjogXCIjRkZGRkZGXCIsXG4gICAgICAgICAgdGV4dFRyYW5zZm9ybTogXCJjYXBpdGFsaXplXCIsXG4gICAgICAgIH0pLFxuICAgICAgfSxcbiAgICB9LFxuICB9LFxufSk7XG5cbmV4cG9ydCBkZWZhdWx0IHRoZW1lO1xuIl0sIm5hbWVzIjpbImNyZWF0ZVRoZW1lIiwidGhlbWUiLCJwYWxldHRlIiwicHJpbWFyeSIsIm1haW4iLCJzZWNvbmRhcnkiLCJiYWNrZ3JvdW5kIiwiZGVmYXVsdCIsInNoYXBlIiwiYm9yZGVyUmFkaXVzIiwiY29tcG9uZW50cyIsIk11aUJ1dHRvbiIsInN0eWxlT3ZlcnJpZGVzIiwicm9vdCIsImNvbG9yIiwidGV4dFRyYW5zZm9ybSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/core/theme/index.ts\n");

/***/ }),

/***/ "./src/pages/_app.tsx":
/*!****************************!*\
  !*** ./src/pages/_app.tsx ***!
  \****************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {\n__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _barrel_optimize_names_ThemeProvider_mui_material__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! __barrel_optimize__?names=ThemeProvider!=!@mui/material */ \"__barrel_optimize__?names=ThemeProvider!=!./node_modules/@mui/material/index.js\");\n/* harmony import */ var _core_theme__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/core/theme */ \"./src/core/theme/index.ts\");\n/* harmony import */ var next_intl__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next-intl */ \"next-intl\");\n/* harmony import */ var next_intl__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_intl__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var next_app__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/app */ \"./node_modules/next/app.js\");\n/* harmony import */ var next_app__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_app__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _styles_globals_css__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @/styles/globals.css */ \"./src/styles/globals.css\");\n/* harmony import */ var _styles_globals_css__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_styles_globals_css__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var react_hot_toast__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-hot-toast */ \"react-hot-toast\");\n/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react-redux */ \"react-redux\");\n/* harmony import */ var _context_store__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @/context/store */ \"./src/context/store.ts\");\n/* harmony import */ var redux_persist_integration_react__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! redux-persist/integration/react */ \"redux-persist/integration/react\");\n/* harmony import */ var redux_persist_integration_react__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(redux_persist_integration_react__WEBPACK_IMPORTED_MODULE_8__);\nvar __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([react_hot_toast__WEBPACK_IMPORTED_MODULE_5__, react_redux__WEBPACK_IMPORTED_MODULE_6__, _context_store__WEBPACK_IMPORTED_MODULE_7__]);\n([react_hot_toast__WEBPACK_IMPORTED_MODULE_5__, react_redux__WEBPACK_IMPORTED_MODULE_6__, _context_store__WEBPACK_IMPORTED_MODULE_7__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);\n// import theme from \"@/core/theme\";\n// import \"@/styles/globals.css\";\n// import { ThemeProvider } from \"@mui/material\";\n// import { NextIntlClientProvider } from \"next-intl\";\n// import type { AppProps } from \"next/app\";\n// import { useRouter } from \"next/router\";\n// // import nextI18NextConfig from \"../../next-i18next.config\";\n// // import { appWithTranslation } from \"next-i18next\";\n// export default function App({ Component, pageProps }: AppProps) {\n//   const router = useRouter();\n//   return (\n//     <ThemeProvider theme={theme}>\n//       <NextIntlClientProvider\n//         locale={router.locale}\n//         timeZone=\"Europe/Vienna\"\n//         messages={pageProps.messages}\n//       >\n//         <Component {...pageProps} />\n//       </NextIntlClientProvider>\n//       <Component {...pageProps} />\n//     </ThemeProvider>\n//   );\n// }\n// // export default appWithTranslation(App, nextI18NextConfig);\n// import { AppProps } from \"next/app\";\n// import { useRouter } from \"next/router\";\n// import { NextIntlClientProvider } from \"next-intl\";\n// export default function App({ Component, pageProps }: AppProps) {\n//   const router = useRouter();\n//   return (\n//     <NextIntlClientProvider\n//       locale={router.locale}\n//       messages={pageProps.messages}\n//     >\n//       <Component {...pageProps} />\n//     </NextIntlClientProvider>\n//   );\n// }\n\n\n\n\n\n\n\n\n\n\nfunction App({ Component, messages, pageProps }) {\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_redux__WEBPACK_IMPORTED_MODULE_6__.Provider, {\n        store: _context_store__WEBPACK_IMPORTED_MODULE_7__.store,\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(redux_persist_integration_react__WEBPACK_IMPORTED_MODULE_8__.PersistGate, {\n            loading: null,\n            persistor: _context_store__WEBPACK_IMPORTED_MODULE_7__.persistor,\n            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_ThemeProvider_mui_material__WEBPACK_IMPORTED_MODULE_9__.ThemeProvider, {\n                theme: _core_theme__WEBPACK_IMPORTED_MODULE_1__[\"default\"],\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(next_intl__WEBPACK_IMPORTED_MODULE_2__.IntlProvider, {\n                    locale: \"en\",\n                    messages: {\n                        ...messages,\n                        ...pageProps.messages\n                    },\n                    timeZone: \"Asia/Dubai\",\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Component, {\n                            ...pageProps\n                        }, void 0, false, {\n                            fileName: \"/Users/shubhamkhuva/Documents/Interview/WebApp/src/pages/_app.tsx\",\n                            lineNumber: 65,\n                            columnNumber: 13\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_hot_toast__WEBPACK_IMPORTED_MODULE_5__.Toaster, {}, void 0, false, {\n                            fileName: \"/Users/shubhamkhuva/Documents/Interview/WebApp/src/pages/_app.tsx\",\n                            lineNumber: 66,\n                            columnNumber: 13\n                        }, this)\n                    ]\n                }, void 0, true, {\n                    fileName: \"/Users/shubhamkhuva/Documents/Interview/WebApp/src/pages/_app.tsx\",\n                    lineNumber: 60,\n                    columnNumber: 11\n                }, this)\n            }, void 0, false, {\n                fileName: \"/Users/shubhamkhuva/Documents/Interview/WebApp/src/pages/_app.tsx\",\n                lineNumber: 59,\n                columnNumber: 9\n            }, this)\n        }, void 0, false, {\n            fileName: \"/Users/shubhamkhuva/Documents/Interview/WebApp/src/pages/_app.tsx\",\n            lineNumber: 58,\n            columnNumber: 7\n        }, this)\n    }, void 0, false, {\n        fileName: \"/Users/shubhamkhuva/Documents/Interview/WebApp/src/pages/_app.tsx\",\n        lineNumber: 57,\n        columnNumber: 5\n    }, this);\n}\nApp.getInitialProps = async function getInitialProps(context) {\n    const { locale } = context.router;\n    return {\n        ...await next_app__WEBPACK_IMPORTED_MODULE_3___default().getInitialProps(context),\n        messages: __webpack_require__(\"./src/localization sync recursive ^\\\\.\\\\/.*\\\\.json$\")(`./${locale || \"en\"}.json`)\n    };\n};\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (App);\n\n__webpack_async_result__();\n} catch(e) { __webpack_async_result__(e); } });//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvcGFnZXMvX2FwcC50c3giLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLG9DQUFvQztBQUNwQyxpQ0FBaUM7QUFDakMsaURBQWlEO0FBQ2pELHNEQUFzRDtBQUN0RCw0Q0FBNEM7QUFDNUMsMkNBQTJDO0FBQzNDLGdFQUFnRTtBQUVoRSx3REFBd0Q7QUFFeEQsb0VBQW9FO0FBQ3BFLGdDQUFnQztBQUNoQyxhQUFhO0FBQ2Isb0NBQW9DO0FBQ3BDLGdDQUFnQztBQUNoQyxpQ0FBaUM7QUFDakMsbUNBQW1DO0FBQ25DLHdDQUF3QztBQUN4QyxVQUFVO0FBQ1YsdUNBQXVDO0FBQ3ZDLGtDQUFrQztBQUNsQyxxQ0FBcUM7QUFDckMsdUJBQXVCO0FBQ3ZCLE9BQU87QUFDUCxJQUFJO0FBQ0osZ0VBQWdFO0FBRWhFLHVDQUF1QztBQUN2QywyQ0FBMkM7QUFDM0Msc0RBQXNEO0FBRXRELG9FQUFvRTtBQUNwRSxnQ0FBZ0M7QUFFaEMsYUFBYTtBQUViLDhCQUE4QjtBQUM5QiwrQkFBK0I7QUFDL0Isc0NBQXNDO0FBQ3RDLFFBQVE7QUFDUixxQ0FBcUM7QUFDckMsZ0NBQWdDO0FBQ2hDLE9BQU87QUFDUCxJQUFJOztBQUMwQztBQUNiO0FBQ1E7QUFDVjtBQUNEO0FBQ1k7QUFDSDtBQUNZO0FBQ1c7QUFFOUQsU0FBU1MsSUFBSSxFQUFFQyxTQUFTLEVBQUVDLFFBQVEsRUFBRUMsU0FBUyxFQUFPO0lBQ2xELHFCQUNFLDhEQUFDUCxpREFBUUE7UUFBQ0MsT0FBT0EsaURBQUtBO2tCQUNwQiw0RUFBQ0Usd0VBQVdBO1lBQUNLLFNBQVM7WUFBTU4sV0FBV0EscURBQVNBO3NCQUM5Qyw0RUFBQ1AsNEZBQWFBO2dCQUFDQyxPQUFPQSxtREFBS0E7MEJBQ3pCLDRFQUFDQyxtREFBWUE7b0JBQ1hZLFFBQU87b0JBQ1BILFVBQVU7d0JBQUUsR0FBR0EsUUFBUTt3QkFBRSxHQUFHQyxVQUFVRCxRQUFRO29CQUFDO29CQUMvQ0ksVUFBUzs7c0NBRVQsOERBQUNMOzRCQUFXLEdBQUdFLFNBQVM7Ozs7OztzQ0FDeEIsOERBQUNSLG9EQUFPQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFNcEI7QUFFQUssSUFBSU8sZUFBZSxHQUFHLGVBQWVBLGdCQUFnQkMsT0FBWTtJQUMvRCxNQUFNLEVBQUVILE1BQU0sRUFBRSxHQUFHRyxRQUFRQyxNQUFNO0lBQ2pDLE9BQU87UUFDTCxHQUFJLE1BQU1mLCtEQUF1QixDQUFDYyxRQUFRO1FBQzFDTixVQUFVUSwyRUFBUSxHQUFpQixFQUFFTCxVQUFVLEtBQUssTUFBTSxDQUFDO0lBQzdEO0FBQ0Y7QUFFQSxpRUFBZUwsR0FBR0EsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL3dlYmFwcC8uL3NyYy9wYWdlcy9fYXBwLnRzeD9mOWQ2Il0sInNvdXJjZXNDb250ZW50IjpbIi8vIGltcG9ydCB0aGVtZSBmcm9tIFwiQC9jb3JlL3RoZW1lXCI7XG4vLyBpbXBvcnQgXCJAL3N0eWxlcy9nbG9iYWxzLmNzc1wiO1xuLy8gaW1wb3J0IHsgVGhlbWVQcm92aWRlciB9IGZyb20gXCJAbXVpL21hdGVyaWFsXCI7XG4vLyBpbXBvcnQgeyBOZXh0SW50bENsaWVudFByb3ZpZGVyIH0gZnJvbSBcIm5leHQtaW50bFwiO1xuLy8gaW1wb3J0IHR5cGUgeyBBcHBQcm9wcyB9IGZyb20gXCJuZXh0L2FwcFwiO1xuLy8gaW1wb3J0IHsgdXNlUm91dGVyIH0gZnJvbSBcIm5leHQvcm91dGVyXCI7XG4vLyAvLyBpbXBvcnQgbmV4dEkxOE5leHRDb25maWcgZnJvbSBcIi4uLy4uL25leHQtaTE4bmV4dC5jb25maWdcIjtcblxuLy8gLy8gaW1wb3J0IHsgYXBwV2l0aFRyYW5zbGF0aW9uIH0gZnJvbSBcIm5leHQtaTE4bmV4dFwiO1xuXG4vLyBleHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBBcHAoeyBDb21wb25lbnQsIHBhZ2VQcm9wcyB9OiBBcHBQcm9wcykge1xuLy8gICBjb25zdCByb3V0ZXIgPSB1c2VSb3V0ZXIoKTtcbi8vICAgcmV0dXJuIChcbi8vICAgICA8VGhlbWVQcm92aWRlciB0aGVtZT17dGhlbWV9PlxuLy8gICAgICAgPE5leHRJbnRsQ2xpZW50UHJvdmlkZXJcbi8vICAgICAgICAgbG9jYWxlPXtyb3V0ZXIubG9jYWxlfVxuLy8gICAgICAgICB0aW1lWm9uZT1cIkV1cm9wZS9WaWVubmFcIlxuLy8gICAgICAgICBtZXNzYWdlcz17cGFnZVByb3BzLm1lc3NhZ2VzfVxuLy8gICAgICAgPlxuLy8gICAgICAgICA8Q29tcG9uZW50IHsuLi5wYWdlUHJvcHN9IC8+XG4vLyAgICAgICA8L05leHRJbnRsQ2xpZW50UHJvdmlkZXI+XG4vLyAgICAgICA8Q29tcG9uZW50IHsuLi5wYWdlUHJvcHN9IC8+XG4vLyAgICAgPC9UaGVtZVByb3ZpZGVyPlxuLy8gICApO1xuLy8gfVxuLy8gLy8gZXhwb3J0IGRlZmF1bHQgYXBwV2l0aFRyYW5zbGF0aW9uKEFwcCwgbmV4dEkxOE5leHRDb25maWcpO1xuXG4vLyBpbXBvcnQgeyBBcHBQcm9wcyB9IGZyb20gXCJuZXh0L2FwcFwiO1xuLy8gaW1wb3J0IHsgdXNlUm91dGVyIH0gZnJvbSBcIm5leHQvcm91dGVyXCI7XG4vLyBpbXBvcnQgeyBOZXh0SW50bENsaWVudFByb3ZpZGVyIH0gZnJvbSBcIm5leHQtaW50bFwiO1xuXG4vLyBleHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBBcHAoeyBDb21wb25lbnQsIHBhZ2VQcm9wcyB9OiBBcHBQcm9wcykge1xuLy8gICBjb25zdCByb3V0ZXIgPSB1c2VSb3V0ZXIoKTtcblxuLy8gICByZXR1cm4gKFxuXG4vLyAgICAgPE5leHRJbnRsQ2xpZW50UHJvdmlkZXJcbi8vICAgICAgIGxvY2FsZT17cm91dGVyLmxvY2FsZX1cbi8vICAgICAgIG1lc3NhZ2VzPXtwYWdlUHJvcHMubWVzc2FnZXN9XG4vLyAgICAgPlxuLy8gICAgICAgPENvbXBvbmVudCB7Li4ucGFnZVByb3BzfSAvPlxuLy8gICAgIDwvTmV4dEludGxDbGllbnRQcm92aWRlcj5cbi8vICAgKTtcbi8vIH1cbmltcG9ydCB7IFRoZW1lUHJvdmlkZXIgfSBmcm9tIFwiQG11aS9tYXRlcmlhbFwiO1xuaW1wb3J0IHRoZW1lIGZyb20gXCJAL2NvcmUvdGhlbWVcIjtcbmltcG9ydCB7IEludGxQcm92aWRlciB9IGZyb20gXCJuZXh0LWludGxcIjtcbmltcG9ydCBOZXh0QXBwIGZyb20gXCJuZXh0L2FwcFwiO1xuaW1wb3J0IFwiQC9zdHlsZXMvZ2xvYmFscy5jc3NcIjtcbmltcG9ydCB7IFRvYXN0ZXIgfSBmcm9tIFwicmVhY3QtaG90LXRvYXN0XCI7XG5pbXBvcnQgeyBQcm92aWRlciB9IGZyb20gXCJyZWFjdC1yZWR1eFwiO1xuaW1wb3J0IHsgc3RvcmUsIHBlcnNpc3RvciB9IGZyb20gXCJAL2NvbnRleHQvc3RvcmVcIjtcbmltcG9ydCB7IFBlcnNpc3RHYXRlIH0gZnJvbSBcInJlZHV4LXBlcnNpc3QvaW50ZWdyYXRpb24vcmVhY3RcIjtcblxuZnVuY3Rpb24gQXBwKHsgQ29tcG9uZW50LCBtZXNzYWdlcywgcGFnZVByb3BzIH06IGFueSkge1xuICByZXR1cm4gKFxuICAgIDxQcm92aWRlciBzdG9yZT17c3RvcmV9PlxuICAgICAgPFBlcnNpc3RHYXRlIGxvYWRpbmc9e251bGx9IHBlcnNpc3Rvcj17cGVyc2lzdG9yfT5cbiAgICAgICAgPFRoZW1lUHJvdmlkZXIgdGhlbWU9e3RoZW1lfT5cbiAgICAgICAgICA8SW50bFByb3ZpZGVyXG4gICAgICAgICAgICBsb2NhbGU9XCJlblwiXG4gICAgICAgICAgICBtZXNzYWdlcz17eyAuLi5tZXNzYWdlcywgLi4ucGFnZVByb3BzLm1lc3NhZ2VzIH19XG4gICAgICAgICAgICB0aW1lWm9uZT1cIkFzaWEvRHViYWlcIlxuICAgICAgICAgID5cbiAgICAgICAgICAgIDxDb21wb25lbnQgey4uLnBhZ2VQcm9wc30gLz5cbiAgICAgICAgICAgIDxUb2FzdGVyIC8+XG4gICAgICAgICAgPC9JbnRsUHJvdmlkZXI+XG4gICAgICAgIDwvVGhlbWVQcm92aWRlcj5cbiAgICAgIDwvUGVyc2lzdEdhdGU+XG4gICAgPC9Qcm92aWRlcj5cbiAgKTtcbn1cblxuQXBwLmdldEluaXRpYWxQcm9wcyA9IGFzeW5jIGZ1bmN0aW9uIGdldEluaXRpYWxQcm9wcyhjb250ZXh0OiBhbnkpIHtcbiAgY29uc3QgeyBsb2NhbGUgfSA9IGNvbnRleHQucm91dGVyO1xuICByZXR1cm4ge1xuICAgIC4uLihhd2FpdCBOZXh0QXBwLmdldEluaXRpYWxQcm9wcyhjb250ZXh0KSksXG4gICAgbWVzc2FnZXM6IHJlcXVpcmUoYC4uL2xvY2FsaXphdGlvbi8ke2xvY2FsZSB8fCBcImVuXCJ9Lmpzb25gKSxcbiAgfTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IEFwcDtcbiJdLCJuYW1lcyI6WyJUaGVtZVByb3ZpZGVyIiwidGhlbWUiLCJJbnRsUHJvdmlkZXIiLCJOZXh0QXBwIiwiVG9hc3RlciIsIlByb3ZpZGVyIiwic3RvcmUiLCJwZXJzaXN0b3IiLCJQZXJzaXN0R2F0ZSIsIkFwcCIsIkNvbXBvbmVudCIsIm1lc3NhZ2VzIiwicGFnZVByb3BzIiwibG9hZGluZyIsImxvY2FsZSIsInRpbWVab25lIiwiZ2V0SW5pdGlhbFByb3BzIiwiY29udGV4dCIsInJvdXRlciIsInJlcXVpcmUiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/pages/_app.tsx\n");

/***/ }),

/***/ "./src/styles/globals.css":
/*!********************************!*\
  !*** ./src/styles/globals.css ***!
  \********************************/
/***/ (() => {



/***/ }),

/***/ "./src/localization sync recursive ^\\.\\/.*\\.json$":
/*!***********************************************!*\
  !*** ./src/localization/ sync ^\.\/.*\.json$ ***!
  \***********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var map = {
	"./en.json": "./src/localization/en.json",
	"./fr.json": "./src/localization/fr.json",
	"./hi.json": "./src/localization/hi.json"
};


function webpackContext(req) {
	var id = webpackContextResolve(req);
	return __webpack_require__(id);
}
function webpackContextResolve(req) {
	if(!__webpack_require__.o(map, req)) {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	}
	return map[req];
}
webpackContext.keys = function webpackContextKeys() {
	return Object.keys(map);
};
webpackContext.resolve = webpackContextResolve;
module.exports = webpackContext;
webpackContext.id = "./src/localization sync recursive ^\\.\\/.*\\.json$";

/***/ }),

/***/ "@mui/material/styles":
/*!***************************************!*\
  !*** external "@mui/material/styles" ***!
  \***************************************/
/***/ ((module) => {

"use strict";
module.exports = require("@mui/material/styles");

/***/ }),

/***/ "@mui/system":
/*!******************************!*\
  !*** external "@mui/system" ***!
  \******************************/
/***/ ((module) => {

"use strict";
module.exports = require("@mui/system");

/***/ }),

/***/ "@mui/system/colorManipulator":
/*!***********************************************!*\
  !*** external "@mui/system/colorManipulator" ***!
  \***********************************************/
/***/ ((module) => {

"use strict";
module.exports = require("@mui/system/colorManipulator");

/***/ }),

/***/ "@mui/system/createStyled":
/*!*******************************************!*\
  !*** external "@mui/system/createStyled" ***!
  \*******************************************/
/***/ ((module) => {

"use strict";
module.exports = require("@mui/system/createStyled");

/***/ }),

/***/ "@mui/system/createTheme":
/*!******************************************!*\
  !*** external "@mui/system/createTheme" ***!
  \******************************************/
/***/ ((module) => {

"use strict";
module.exports = require("@mui/system/createTheme");

/***/ }),

/***/ "@mui/system/styleFunctionSx":
/*!**********************************************!*\
  !*** external "@mui/system/styleFunctionSx" ***!
  \**********************************************/
/***/ ((module) => {

"use strict";
module.exports = require("@mui/system/styleFunctionSx");

/***/ }),

/***/ "@mui/system/useThemeProps":
/*!********************************************!*\
  !*** external "@mui/system/useThemeProps" ***!
  \********************************************/
/***/ ((module) => {

"use strict";
module.exports = require("@mui/system/useThemeProps");

/***/ }),

/***/ "@mui/utils/deepmerge":
/*!***************************************!*\
  !*** external "@mui/utils/deepmerge" ***!
  \***************************************/
/***/ ((module) => {

"use strict";
module.exports = require("@mui/utils/deepmerge");

/***/ }),

/***/ "@mui/utils/formatMuiErrorMessage":
/*!***************************************************!*\
  !*** external "@mui/utils/formatMuiErrorMessage" ***!
  \***************************************************/
/***/ ((module) => {

"use strict";
module.exports = require("@mui/utils/formatMuiErrorMessage");

/***/ }),

/***/ "@mui/utils/generateUtilityClass":
/*!**************************************************!*\
  !*** external "@mui/utils/generateUtilityClass" ***!
  \**************************************************/
/***/ ((module) => {

"use strict";
module.exports = require("@mui/utils/generateUtilityClass");

/***/ }),

/***/ "next-intl":
/*!****************************!*\
  !*** external "next-intl" ***!
  \****************************/
/***/ ((module) => {

"use strict";
module.exports = require("next-intl");

/***/ }),

/***/ "prop-types":
/*!*****************************!*\
  !*** external "prop-types" ***!
  \*****************************/
/***/ ((module) => {

"use strict";
module.exports = require("prop-types");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/***/ ((module) => {

"use strict";
module.exports = require("react");

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/***/ ((module) => {

"use strict";
module.exports = require("react/jsx-dev-runtime");

/***/ }),

/***/ "react/jsx-runtime":
/*!************************************!*\
  !*** external "react/jsx-runtime" ***!
  \************************************/
/***/ ((module) => {

"use strict";
module.exports = require("react/jsx-runtime");

/***/ }),

/***/ "redux-persist":
/*!********************************!*\
  !*** external "redux-persist" ***!
  \********************************/
/***/ ((module) => {

"use strict";
module.exports = require("redux-persist");

/***/ }),

/***/ "redux-persist/integration/react":
/*!**************************************************!*\
  !*** external "redux-persist/integration/react" ***!
  \**************************************************/
/***/ ((module) => {

"use strict";
module.exports = require("redux-persist/integration/react");

/***/ }),

/***/ "redux-persist/lib/storage":
/*!********************************************!*\
  !*** external "redux-persist/lib/storage" ***!
  \********************************************/
/***/ ((module) => {

"use strict";
module.exports = require("redux-persist/lib/storage");

/***/ }),

/***/ "react-hot-toast":
/*!**********************************!*\
  !*** external "react-hot-toast" ***!
  \**********************************/
/***/ ((module) => {

"use strict";
module.exports = import("react-hot-toast");;

/***/ }),

/***/ "react-redux":
/*!******************************!*\
  !*** external "react-redux" ***!
  \******************************/
/***/ ((module) => {

"use strict";
module.exports = import("react-redux");;

/***/ }),

/***/ "redux":
/*!************************!*\
  !*** external "redux" ***!
  \************************/
/***/ ((module) => {

"use strict";
module.exports = import("redux");;

/***/ }),

/***/ "./src/localization/en.json":
/*!**********************************!*\
  !*** ./src/localization/en.json ***!
  \**********************************/
/***/ ((module) => {

"use strict";
module.exports = JSON.parse('{"language":"English","code":"en","validation":{"requiredMessage":"This field is required.","AEUsernameMessage":"Username must be alphanumeric and min 5 characters","InUsernameMessage":"Username must be alpha and min 6 characters","USUsernameMessage":"Username must be alphanumeric and min 8 characters","DefaultUsernameMessage":"Username must be alphanumeric and min 3 characters","PasswordMessage":"Password should min 5 and maximum 16 characters","fullName":"Full Name should min 3 and max 20 characters","emailMessage":"Invalid emaill address","passwordMustMatch":"Passwords must match"},"message":{"GENERIC_ERROR":"Something went wrong, Please try again!","INVALID_AUTHENTICATION":"Invalid credentials!","FAILING_CREATE":"Failed to create account!","SUCCESS_LOGGEDIN":"Successfully loggedIn!","SUCCESS_REGISTERED":"Account got created, please login with your credentials!","SUCCESS_CHANGE_PASSWORD":"Password Changed, please re-login with your credentials!","PASSWORD_NOT_MATCHED":"Old Password is incorrect!","FAILING_UPDATE":"Failed to update password!"},"screens":{"login":{"title":"Welcome Back","username":"Username or Email Address","password":"Password","registerButton":"Create New Account","loginButton":"Login"},"register":{"title":"Create New Account","fullName":"Full Name","username":"Username","emailAddress":"Email Address","submitButton":"Create New Account","alreadyAccount":"Already having account?"},"dashboard":{"welcomeText":"Welcome","logoutButton":"Logout","yourUsername":"Your Username","yourEmailAddress":"Your Email Address","changePassword":"Change Password"},"changePassword":{"oldPassword":"Old Password","newPassword":"New Password","confirmPassword":"Confirm Password","changePasswordButton":"Change Password"}}}');

/***/ }),

/***/ "./src/localization/fr.json":
/*!**********************************!*\
  !*** ./src/localization/fr.json ***!
  \**********************************/
/***/ ((module) => {

"use strict";
module.exports = JSON.parse('{"language":"French","code":"fr","validation":{"requiredMessage":"Ce champ est obligatoire.","AEUsernameMessage":"Doit être alphanumérique et minimum 5 caractères","InUsernameMessage":"Doit être alpha et minimum 6 caractères","USUsernameMessage":"Doit être alphanumérique et minimum 8 caractères","DefaultUsernameMessage":"Doit être alphanumérique et minimum 3 caractères","PasswordMessage":"Doit contenir au minimum 5 et au maximum 16 caractères","fullName":"Doit contenir au minimum 3 et au maximum 20 caractères","emailMessage":"adresse e-mail non valide","passwordMustMatch":"Les mots de passe doivent correspondre"},"message":{"GENERIC_ERROR":"Une erreur s\'est produite. Veuillez réessayer!","INVALID_AUTHENTICATION":"Les informations d\'identification invalides!","FAILING_CREATE":"Échec de la création du compte!","SUCCESS_LOGGEDIN":"Connexion réussie!","SUCCESS_REGISTERED":"Le compte a été créé, veuillez vous connecter avec vos identifiants!","SUCCESS_CHANGE_PASSWORD":"Mot de passe modifié, veuillez vous reconnecter avec vos identifiants!","PASSWORD_NOT_MATCHED":"Ancien mot de passe est incorrect!","FAILING_UPDATE":"Échec de la mise à jour du mot de passe!"},"screens":{"login":{"title":"Content de te revoir","username":"nom d\'utilisateur ou adresse e-mail","password":"Mot de passe","registerButton":"Créer un nouveau compte","loginButton":"Se connecter"},"register":{"title":"Créer un nouveau compte","fullName":"Nom et prénom","username":"Nom d\'utilisateur","emailAddress":"Adresse e-mail","submitButton":"Créer un nouveau compte","alreadyAccount":"Vous avez déjà un compte ?"},"dashboard":{"welcomeText":"Bienvenu","logoutButton":"Se déconnecter","yourUsername":"Ton nom d\'utilisateur","yourEmailAddress":"Votre adresse e-mail"},"changePassword":{"oldPassword":"ancien mot de passe","newPassword":"nouveau mot de passe","confirmPassword":"Confirmez le mot de passe","changePasswordButton":"Changer le mot de passe"}}}');

/***/ }),

/***/ "./src/localization/hi.json":
/*!**********************************!*\
  !*** ./src/localization/hi.json ***!
  \**********************************/
/***/ ((module) => {

"use strict";
module.exports = JSON.parse('{"language":"Hindi","code":"hi","validation":{"requiredMessage":"यह फ़ील्ड आवश्यक है।","AEUsernameMessage":"उपयोगकर्ता नाम अक्षर और स्ंख्यात्मक होना चाहिए और कम से कम 5 वर्ण होने चाहिए","InUsernameMessage":"उपयोगकर्ता नाम अक्षरिक और कम से कम 6 वर्ण होने चाहिए","USUsernameMessage":"उपयोगकर्ता नाम अक्षर और संख्यात्मक होना चाहिए और कम से कम 8 वर्ण होने चाहिए","DefaultUsernameMessage":"उपयोगकर्ता नाम अक्षर और संख्यात्मक होना चाहिए और कम से कम 3 वर्ण होने चाहिए","PasswordMessage":"पासवर्ड कम से कम 5 और अधिकतम 16 वर्ण होना चाहिए","fullName":"पूरा नाम कम से कम 3 और अधिकतम 20 वर्ण होना चाहिए","emailMessage":"अमान्य ईमेल पता","passwordMustMatch":"पासवर्डों को मेल खाना चाहिए"},"message":{"GENERIC_ERROR":"कुछ गलत हो गया, कृपया पुनः प्रयास करें!","INVALID_AUTHENTICATION":"अमान्य प्रमाणीकरण!","FAILING_CREATE":"खाता बनाने में विफल रहा!","SUCCESS_LOGGEDIN":"सफलतापूर्वक लॉगिन!","SUCCESS_REGISTERED":"खाता बन गया, कृपया अपने क्रेडेंशियल्स के साथ लॉगिन करें!","SUCCESS_CHANGE_PASSWORD":"पासवर्ड बदल गया है, कृपया अपने क्रेडेंशियल्स के साथ पुनः लॉगिन करें!","PASSWORD_NOT_MATCHED":"पुराना पासवर्ड गलत है!","FAILING_UPDATE":"पासवर्ड अपडेट करने में विफल!"},"screens":{"login":{"title":"वापस स्वागत है","username":"उपयोगकर्ता नाम या ईमेल पता","password":"पासवर्ड","registerButton":"नया खाता बनाएं","loginButton":"लॉगिन"},"register":{"title":"नया खाता बनाएं","fullName":"पूरा नाम","username":"उपयोगकर्ता नाम","emailAddress":"ईमेल पता","submitButton":"नया खाता बनाएं","alreadyAccount":"पहले से ही खाता है?"},"dashboard":{"welcomeText":"स्वागत है","logoutButton":"लॉगआउट","yourUsername":"आपका उपयोगकर्ता नाम","yourEmailAddress":"आपका ईमेल पता"},"changePassword":{"oldPassword":"पुराना पासवर्ड","newPassword":"नया पासवर्ड","confirmPassword":"पासवर्ड की पुष्टि कीजिये","changePasswordButton":"पासवर्ड बदलें"}}}');

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, ["vendor-chunks/next","vendor-chunks/@swc","vendor-chunks/@mui","vendor-chunks/@babel"], () => (__webpack_exec__("./src/pages/_app.tsx")));
module.exports = __webpack_exports__;

})();
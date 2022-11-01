/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./src/js/app.js":
/*!***********************!*\
  !*** ./src/js/app.js ***!
  \***********************/
/***/ (() => {

eval("var tasksListEl = document.getElementById('tasksList');\nvar clearListBtn = document.getElementById('clear-list');\nvar form = document.querySelector('form');\nvar toDoList = JSON.parse(localStorage.getItem('todo')) || [];\nvar appendTaskEl = function appendTaskEl(task) {\n  var content = \"\\n  <li class=\\\"task\\\" draggable=\\\"true\\\">\\n    <article id=\\\"\".concat(task.id, \"\\\">\\n      <div class=\\\"todo__task\\\">\\n        <input type=\\\"checkbox\\\" \").concat(task.isCompleted ? 'checked' : '', \" />\\n        <p>\").concat(task.message, \"</p>\\n      </div>\\n      <i class=\\\"fa-solid fa-ellipsis-vertical draggable options-icon\\\"></i>\\n    </article>\\n  </li>\\n  \");\n  tasksListEl.insertAdjacentHTML('beforeend', content);\n};\nvar handleTaskInputsClick = function handleTaskInputsClick(id) {\n  var taskEl = document.getElementById(\"\".concat(id));\n  var taskCheckBox = taskEl.querySelector('input');\n  var taskMessage = taskEl.querySelector('p');\n  taskCheckBox.addEventListener('click', function () {\n    if (taskCheckBox.checked) {\n      taskMessage.style.textDecorationLine = 'line-through';\n    } else {\n      taskMessage.style.textDecorationLine = 'none';\n    }\n  });\n};\nvar displayToDoList = function displayToDoList() {\n  toDoList.forEach(function (task) {\n    appendTaskEl(task);\n    handleTaskInputsClick(task.id);\n  });\n};\nvar handleClearBtnClick = function handleClearBtnClick() {\n  clearListBtn.addEventListener('click', function () {\n    var allTaskEl = tasksListEl.querySelectorAll('article');\n    allTaskEl.forEach(function (taskEl) {\n      var taskCheckBox = taskEl.querySelector('input');\n      if (!taskCheckBox.checked) return;\n      toDoList = toDoList.filter(function (task) {\n        return task.id !== parseInt(taskEl.id, 10);\n      });\n      localStorage.setItem('todo', JSON.stringify(toDoList));\n      taskEl.parentElement.remove();\n    });\n  });\n};\nvar handleFormSubmit = function handleFormSubmit(form) {\n  form.addEventListener('submit', function (event) {\n    event.preventDefault();\n    var task = {\n      message: form['task-message'].value,\n      isCompleted: false,\n      id: toDoList.length === 0 ? 1 : toDoList.at(-1).id + 1\n    };\n    toDoList.push(task);\n    localStorage.setItem('todo', JSON.stringify(toDoList));\n    appendTaskEl(task);\n    handleTaskInputsClick(task.id);\n    form.reset();\n  });\n};\nhandleFormSubmit(form);\ndisplayToDoList();\nhandleClearBtnClick();\n\n//# sourceURL=webpack://todo/./src/js/app.js?");

/***/ }),

/***/ "./src/css/styles.scss":
/*!*****************************!*\
  !*** ./src/css/styles.scss ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n// extracted by mini-css-extract-plugin\n\n\n//# sourceURL=webpack://todo/./src/css/styles.scss?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The require scope
/******/ 	var __webpack_require__ = {};
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	__webpack_modules__["./src/css/styles.scss"](0, {}, __webpack_require__);
/******/ 	var __webpack_exports__ = {};
/******/ 	__webpack_modules__["./src/js/app.js"](0, __webpack_exports__, __webpack_require__);
/******/ 	
/******/ })()
;
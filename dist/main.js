/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/js/app.js":
/*!***********************!*\
  !*** ./src/js/app.js ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _dragEffect_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./dragEffect.js */ \"./src/js/dragEffect.js\");\n\nvar tasksListEl = document.getElementById('tasksList');\nvar clearListBtn = document.getElementById('clear-list');\nvar form = document.querySelector('form');\nvar toDoList = JSON.parse(localStorage.getItem('todo')) || [];\nvar appendTaskEl = function appendTaskEl(task) {\n  var taskEl = \"\\n  <li id=\\\"\".concat(task.id, \"\\\" class=\\\"task\\\" draggable=\\\"true\\\">\\n    <article>\\n      <div class=\\\"todo__task\\\">\\n        <input type=\\\"checkbox\\\" \").concat(task.isCompleted ? 'checked' : '', \" />\\n        <p class=\\\"\").concat(task.isCompleted ? 'line_through' : '', \"\\\">\").concat(task.description, \"</p>\\n      </div>\\n      <div class=\\\"task_options\\\">\\n        <i class=\\\"fa-solid fa-trash-can delete-option-icon\\\"></i>\\n        <i class=\\\"fa-solid fa-ellipsis-vertical drag-options-icon\\\"></i>\\n      </div>\\n    </article>\\n  </li>\\n  \");\n  tasksListEl.insertAdjacentHTML('beforeend', taskEl);\n};\nvar removeTaskEl = function removeTaskEl(taskEl) {\n  toDoList = toDoList.filter(function (task) {\n    return task.id !== taskEl.id;\n  });\n  localStorage.setItem('todo', JSON.stringify(toDoList));\n  taskEl.remove();\n};\nvar handleTaskBtnsClick = function handleTaskBtnsClick(id) {\n  var taskEl = tasksListEl.getElementById(\"\".concat(id));\n  var taskCheckBox = taskEl.querySelector('input');\n  var taskDeleteIcon = taskEl.querySelector('.delete-option-icon');\n  var taskDescription = taskEl.querySelector('p');\n  taskCheckBox.addEventListener('change', function () {\n    if (taskCheckBox.checked) {\n      toDoList.find(function (task) {\n        return task.id === taskEl.id;\n      }).isCompleted = true;\n    } else {\n      toDoList.find(function (task) {\n        return task.id === taskEl.id;\n      }).isCompleted = false;\n    }\n    localStorage.setItem('todo', JSON.stringify(toDoList));\n    taskDescription.classList.toggle('line_through');\n  });\n  taskDeleteIcon.addEventListener('click', function () {\n    removeTaskEl(taskEl);\n  });\n};\nvar displayToDoList = function displayToDoList() {\n  toDoList.forEach(function (task) {\n    appendTaskEl(task);\n    handleTaskBtnsClick(task.id);\n  });\n};\nvar handleClearBtnClick = function handleClearBtnClick() {\n  clearListBtn.addEventListener('click', function () {\n    var allTaskEl = tasksListEl.querySelectorAll('.task');\n    allTaskEl.forEach(function (taskEl) {\n      var taskCheckBox = taskEl.querySelector('input');\n      if (!taskCheckBox.checked) return;\n      removeTaskEl(taskEl);\n    });\n  });\n};\nvar handleFormSubmit = function handleFormSubmit() {\n  form.addEventListener('submit', function (event) {\n    event.preventDefault();\n    var task = {\n      description: form['task-description'].value,\n      isCompleted: false,\n      id: Math.random().toString(32).replace(/0\\./, '')\n    };\n    toDoList.push(task);\n    localStorage.setItem('todo', JSON.stringify(toDoList));\n    appendTaskEl(task);\n    handleTaskBtnsClick(task.id);\n    (0,_dragEffect_js__WEBPACK_IMPORTED_MODULE_0__.addDraggableListener)(tasksListEl.lastElementChild, toDoList);\n    form.reset();\n  });\n};\nhandleFormSubmit();\ndisplayToDoList();\nhandleClearBtnClick();\n(0,_dragEffect_js__WEBPACK_IMPORTED_MODULE_0__.addDraggablesListener)(toDoList);\n\n//# sourceURL=webpack://todo/./src/js/app.js?");

/***/ }),

/***/ "./src/js/dragEffect.js":
/*!******************************!*\
  !*** ./src/js/dragEffect.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"addDraggableListener\": () => (/* binding */ addDraggableListener),\n/* harmony export */   \"addDraggablesListener\": () => (/* binding */ addDraggablesListener)\n/* harmony export */ });\nvar dragStartTaskEl;\nvar todoListItems;\nvar swapTaskEl = function swapTaskEl(dragStartTaskEl, dragEndTaskEl) {\n  var listContainer = document.querySelectorAll('ul li');\n  var taskOneIndex;\n  var taskTwoIndex;\n  listContainer.forEach(function (task, index) {\n    if (task === dragStartTaskEl) {\n      taskOneIndex = index;\n    }\n    if (task === dragEndTaskEl) {\n      taskTwoIndex = index;\n    }\n  });\n  if (taskOneIndex > taskTwoIndex) {\n    listContainer.item(taskTwoIndex).insertAdjacentElement('beforebegin', dragStartTaskEl);\n    listContainer.item(taskOneIndex).insertAdjacentElement('afterend', dragEndTaskEl);\n  } else {\n    listContainer.item(taskTwoIndex).insertAdjacentElement('afterend', dragStartTaskEl);\n    listContainer.item(taskOneIndex).insertAdjacentElement('beforebegin', dragEndTaskEl);\n  }\n  var tmpItem = todoListItems.splice(taskOneIndex, 1)[0];\n  todoListItems.splice(taskTwoIndex, 0, tmpItem);\n  localStorage.setItem('todo', JSON.stringify(todoListItems));\n};\nvar dragStart = function dragStart(ev) {\n  dragStartTaskEl = ev.target.closest('li');\n};\nvar dragOver = function dragOver(ev) {\n  ev.preventDefault();\n};\nvar drop = function drop(ev) {\n  var dragEndTaskEl = ev.target.closest('li');\n  swapTaskEl(dragStartTaskEl, dragEndTaskEl);\n  ev.target.closest('article').classList.remove('drag_over');\n};\nvar dragEnter = function dragEnter(ev) {\n  ev.target.closest('article').classList.add('drag_over');\n};\nvar dragLeave = function dragLeave(ev) {\n  ev.target.closest('article').classList.remove('drag_over');\n};\nvar addDraggableListener = function addDraggableListener(draggableItem, listItems) {\n  draggableItem.addEventListener('dragstart', dragStart);\n  draggableItem.addEventListener('dragover', dragOver);\n  draggableItem.addEventListener('drop', drop);\n  draggableItem.addEventListener('dragenter', dragEnter);\n  draggableItem.addEventListener('dragleave', dragLeave);\n  todoListItems = listItems;\n};\nvar addDraggablesListener = function addDraggablesListener(listItems) {\n  var draggables = document.querySelectorAll('.task');\n  todoListItems = listItems;\n  draggables.forEach(function (draggable) {\n    draggable.addEventListener('dragstart', dragStart);\n    draggable.addEventListener('dragover', dragOver);\n    draggable.addEventListener('drop', drop);\n    draggable.addEventListener('dragenter', dragEnter);\n    draggable.addEventListener('dragleave', dragLeave);\n  });\n};\n\n//# sourceURL=webpack://todo/./src/js/dragEffect.js?");

/***/ }),

/***/ "./src/css/styles.scss":
/*!*****************************!*\
  !*** ./src/css/styles.scss ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n// extracted by mini-css-extract-plugin\n\n\n//# sourceURL=webpack://todo/./src/css/styles.scss?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
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
/******/ 	__webpack_require__("./src/css/styles.scss");
/******/ 	var __webpack_exports__ = __webpack_require__("./src/js/app.js");
/******/ 	
/******/ })()
;
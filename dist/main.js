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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _todo_helper_functions_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./todo-helper-functions.js */ \"./src/js/todo-helper-functions.js\");\n/* harmony import */ var _dragEffect_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./dragEffect.js */ \"./src/js/dragEffect.js\");\nfunction ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }\nfunction _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }\nfunction _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }\n\n\nvar tasksListEl = document.getElementById('tasksList');\nvar clearListBtn = document.getElementById('clear-list');\nvar form = document.querySelector('form');\nvar toDoList;\nvar handleClearListBtnClick = function handleClearListBtnClick(displayToDoList) {\n  clearListBtn.addEventListener('click', function () {\n    var filteredTaskList = toDoList.filter(function (task) {\n      return !task.isCompleted;\n    });\n    toDoList = filteredTaskList.map(function (task, idx) {\n      return _objectSpread(_objectSpread({}, task), {}, {\n        index: idx + 1\n      });\n    });\n    localStorage.setItem('todo', JSON.stringify(toDoList));\n    tasksListEl.innerHTML = '';\n    displayToDoList();\n  });\n};\nvar handleTaskBtnsClick = function handleTaskBtnsClick(id, displayToDoList) {\n  var taskEl = document.getElementById(\"\".concat(id));\n  var taskCheckBox = taskEl.querySelector('.task_checkbox');\n  var taskDeleteIcon = taskEl.querySelector('.delete-option-icon');\n  var taskEditIcon = taskEl.querySelector('.edit-option-icon');\n  var taskEditInput = taskEl.querySelector('.task_description');\n  var taskDescription = taskEl.querySelector('p');\n  taskCheckBox.addEventListener('change', function () {\n    (0,_todo_helper_functions_js__WEBPACK_IMPORTED_MODULE_0__.toggleCheckBox)(taskEl, taskDescription, toDoList);\n  });\n  taskDeleteIcon.addEventListener('click', function () {\n    (0,_todo_helper_functions_js__WEBPACK_IMPORTED_MODULE_0__.removeTaskEl)(taskEl, tasksListEl, toDoList, displayToDoList);\n  });\n  taskEditIcon.addEventListener('click', function () {\n    (0,_todo_helper_functions_js__WEBPACK_IMPORTED_MODULE_0__.showEditField)(taskEl, taskEditInput, taskCheckBox, taskDescription, toDoList);\n  });\n};\nvar displayToDoList = function displayToDoList() {\n  toDoList = JSON.parse(localStorage.getItem('todo')) || [];\n  toDoList.forEach(function (task) {\n    (0,_todo_helper_functions_js__WEBPACK_IMPORTED_MODULE_0__.appendTaskEl)(task, tasksListEl);\n    handleTaskBtnsClick(task.index, displayToDoList);\n    (0,_dragEffect_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(tasksListEl.lastElementChild, toDoList, displayToDoList);\n  });\n};\nvar handleFormSubmit = function handleFormSubmit() {\n  form.addEventListener('submit', function (event) {\n    event.preventDefault();\n    var taskObj = {\n      description: form['task-description'].value.trim(),\n      isCompleted: false,\n      index: toDoList.length === 0 ? 1 : toDoList.at(-1).index + 1\n    };\n    toDoList.push(taskObj);\n    localStorage.setItem('todo', JSON.stringify(toDoList));\n    (0,_todo_helper_functions_js__WEBPACK_IMPORTED_MODULE_0__.appendTaskEl)(taskObj, tasksListEl);\n    handleTaskBtnsClick(taskObj.index, displayToDoList);\n    (0,_dragEffect_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(tasksListEl.lastElementChild, toDoList, displayToDoList);\n    form.reset();\n  });\n};\ndisplayToDoList();\nhandleFormSubmit();\nhandleClearListBtnClick(displayToDoList);\n\n//# sourceURL=webpack://todo/./src/js/app.js?");

/***/ }),

/***/ "./src/js/dragEffect.js":
/*!******************************!*\
  !*** ./src/js/dragEffect.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nfunction ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }\nfunction _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }\nfunction _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }\nvar dragStartTaskEl;\nvar todoListItems;\nvar swapTaskEl = function swapTaskEl(dragStartTaskEl, dragEndTaskEl, callback) {\n  var listContainer = document.querySelectorAll('ul li');\n  var taskListEl = document.getElementById('tasksList');\n  var taskOneIndex;\n  var taskTwoIndex;\n  listContainer.forEach(function (task, index) {\n    if (task === dragStartTaskEl) {\n      taskOneIndex = index;\n    }\n    if (task === dragEndTaskEl) {\n      taskTwoIndex = index;\n    }\n  });\n  if (taskOneIndex > taskTwoIndex) {\n    listContainer.item(taskTwoIndex).insertAdjacentElement('beforebegin', dragStartTaskEl);\n    listContainer.item(taskOneIndex).insertAdjacentElement('afterend', dragEndTaskEl);\n  } else {\n    listContainer.item(taskTwoIndex).insertAdjacentElement('afterend', dragStartTaskEl);\n    listContainer.item(taskOneIndex).insertAdjacentElement('beforebegin', dragEndTaskEl);\n  }\n  var tmpItem = todoListItems.splice(taskOneIndex, 1)[0];\n  todoListItems.splice(taskTwoIndex, 0, tmpItem);\n  todoListItems = todoListItems.map(function (task, idx) {\n    return _objectSpread(_objectSpread({}, task), {}, {\n      index: idx + 1\n    });\n  });\n  localStorage.setItem('todo', JSON.stringify(todoListItems));\n  taskListEl.innerHTML = '';\n  callback();\n};\nvar dragStart = function dragStart(ev) {\n  dragStartTaskEl = ev.target.closest('li');\n};\nvar dragOver = function dragOver(ev) {\n  ev.preventDefault();\n};\nvar drop = function drop(ev, callback) {\n  var dragEndTaskEl = ev.target.closest('li');\n  swapTaskEl(dragStartTaskEl, dragEndTaskEl, callback);\n  ev.target.closest('article').classList.remove('drag_over');\n};\nvar dragEnter = function dragEnter(ev) {\n  ev.target.closest('article').classList.add('drag_over');\n};\nvar dragLeave = function dragLeave(ev) {\n  ev.target.closest('article').classList.remove('drag_over');\n};\nvar addDraggableListener = function addDraggableListener(draggableItem, listItems, callback) {\n  draggableItem.addEventListener('dragstart', dragStart);\n  draggableItem.addEventListener('dragover', dragOver);\n  draggableItem.addEventListener('drop', function (ev) {\n    drop(ev, callback);\n  });\n  draggableItem.addEventListener('dragenter', dragEnter);\n  draggableItem.addEventListener('dragleave', dragLeave);\n  todoListItems = listItems;\n};\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (addDraggableListener);\n\n//# sourceURL=webpack://todo/./src/js/dragEffect.js?");

/***/ }),

/***/ "./src/js/todo-helper-functions.js":
/*!*****************************************!*\
  !*** ./src/js/todo-helper-functions.js ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"appendTaskEl\": () => (/* binding */ appendTaskEl),\n/* harmony export */   \"removeTaskEl\": () => (/* binding */ removeTaskEl),\n/* harmony export */   \"showEditField\": () => (/* binding */ showEditField),\n/* harmony export */   \"toggleCheckBox\": () => (/* binding */ toggleCheckBox)\n/* harmony export */ });\nfunction ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }\nfunction _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }\nfunction _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }\nvar placeCursorTextEnd = function placeCursorTextEnd(inputEl) {\n  var taskDescLength = inputEl.value.length;\n  if (inputEl.setSelectionRange) {\n    inputEl.focus();\n    inputEl.setSelectionRange(taskDescLength, taskDescLength);\n  } else if (inputEl.createTextRange) {\n    var textRange = inputEl.createTextRange();\n    textRange.collapse(true);\n    textRange.moveEnd('character', taskDescLength);\n    textRange.moveStart('character', taskDescLength);\n    textRange.select();\n  }\n};\nvar hideTaskEl = function hideTaskEl(taskEl, taskEditInput, taskCheckBox) {\n  taskEditInput.classList.add('edit_active');\n  taskEditInput.style.width = \"\".concat(taskEl.offsetWidth, \"px\");\n  taskEditInput.style.height = \"\".concat(taskEl.offsetHeight + 1, \"px\");\n  taskCheckBox.setAttribute('disabled', true);\n  taskEl.setAttribute('draggable', false);\n};\nvar showTaskEl = function showTaskEl(taskEl, taskEditInput, taskCheckBox) {\n  taskCheckBox.removeAttribute('disabled');\n  taskEl.setAttribute('draggable', true);\n  taskEditInput.classList.remove('edit_active');\n};\nvar showEditField = function showEditField(taskEl, taskEditInput, taskCheckBox, taskDescription, toDoList) {\n  hideTaskEl(taskEl, taskEditInput, taskCheckBox);\n  placeCursorTextEnd(taskEditInput);\n  taskEditInput.addEventListener('keypress', function (ev) {\n    if (ev.key !== 'Enter') return;\n    var editedText = taskEditInput.value;\n    toDoList.find(function (task) {\n      return task.index === parseInt(taskEl.id, 10);\n    }).description = editedText;\n    localStorage.setItem('todo', JSON.stringify(toDoList));\n    taskDescription.textContent = editedText;\n    showTaskEl(taskEl, taskEditInput, taskCheckBox);\n  });\n  document.addEventListener('click', function (ev) {\n    if (ev.target.closest('li') === taskEl) return;\n    taskEditInput.value = taskDescription.textContent;\n    showTaskEl(taskEl, taskEditInput, taskCheckBox);\n  });\n};\nvar toggleCheckBox = function toggleCheckBox(taskEl, taskDescription, toDoList) {\n  toDoList.find(function (task) {\n    if (task.index !== parseInt(taskEl.id, 10)) return false;\n    task.isCompleted = !task.isCompleted;\n    return true;\n  });\n  localStorage.setItem('todo', JSON.stringify(toDoList));\n  taskDescription.classList.toggle('line_through');\n};\nvar appendTaskEl = function appendTaskEl(task, tasksListEl) {\n  var taskEl = \"\\n  <li id=\\\"\".concat(task.index, \"\\\" class=\\\"task\\\" draggable=\\\"true\\\">\\n    <article>\\n      <div class=\\\"todo__task\\\">\\n        <input class=\\\"task_checkbox\\\" type=\\\"checkbox\\\" \").concat(task.isCompleted ? 'checked' : '', \" />\\n        <p class=\\\"\").concat(task.isCompleted ? 'line_through' : '', \"\\\">\").concat(task.description, \"</p>\\n        <input class=\\\"\").concat(task.isCompleted ? 'line_through' : '', \" task_description\\\" value=\\\"\").concat(task.description, \"\\\" />\\n      </div>\\n      <div class=\\\"task_options\\\">\\n        <i class=\\\"fa-solid fa-pen-to-square edit-option-icon\\\"></i>\\n        <i class=\\\"fa-solid fa-trash-can delete-option-icon\\\"></i>\\n      </div>\\n    </article>\\n  </li>\\n  \");\n  tasksListEl.insertAdjacentHTML('beforeend', taskEl);\n};\nvar removeTaskEl = function removeTaskEl(taskEl, taskListEl, toDoList, callback) {\n  var filteredTaskList = toDoList.filter(function (task) {\n    return task.index !== parseInt(taskEl.id, 10);\n  });\n  toDoList = filteredTaskList.map(function (task, idx) {\n    return _objectSpread(_objectSpread({}, task), {}, {\n      index: idx + 1\n    });\n  });\n  localStorage.setItem('todo', JSON.stringify(toDoList));\n  taskListEl.innerHTML = '';\n  callback();\n};\n\n//# sourceURL=webpack://todo/./src/js/todo-helper-functions.js?");

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
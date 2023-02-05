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

/***/ "./src/js/main.js":
/*!************************!*\
  !*** ./src/js/main.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _modules_app_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modules/app.js */ \"./src/js/modules/app.js\");\n\nvar tasksListEl = document.getElementById('tasksList');\nvar clearListBtn = document.getElementById('clear-list');\nvar form = document.querySelector('form');\nvar app = new _modules_app_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"](form, tasksListEl, clearListBtn);\napp.initializeTodoList();\n\n//# sourceURL=webpack://todo/./src/js/main.js?");

/***/ }),

/***/ "./src/js/modules/app.js":
/*!*******************************!*\
  !*** ./src/js/modules/app.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _helpers_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./helpers.js */ \"./src/js/modules/helpers.js\");\n/* harmony import */ var _dragEffect_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./dragEffect.js */ \"./src/js/modules/dragEffect.js\");\nfunction _typeof(obj) { \"@babel/helpers - typeof\"; return _typeof = \"function\" == typeof Symbol && \"symbol\" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && \"function\" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? \"symbol\" : typeof obj; }, _typeof(obj); }\nfunction ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }\nfunction _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, \"prototype\", { writable: false }); return Constructor; }\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\nfunction _classPrivateFieldInitSpec(obj, privateMap, value) { _checkPrivateRedeclaration(obj, privateMap); privateMap.set(obj, value); }\nfunction _checkPrivateRedeclaration(obj, privateCollection) { if (privateCollection.has(obj)) { throw new TypeError(\"Cannot initialize the same private elements twice on an object\"); } }\nfunction _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }\nfunction _toPropertyKey(arg) { var key = _toPrimitive(arg, \"string\"); return _typeof(key) === \"symbol\" ? key : String(key); }\nfunction _toPrimitive(input, hint) { if (_typeof(input) !== \"object\" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || \"default\"); if (_typeof(res) !== \"object\") return res; throw new TypeError(\"@@toPrimitive must return a primitive value.\"); } return (hint === \"string\" ? String : Number)(input); }\nfunction _classPrivateFieldGet(receiver, privateMap) { var descriptor = _classExtractFieldDescriptor(receiver, privateMap, \"get\"); return _classApplyDescriptorGet(receiver, descriptor); }\nfunction _classExtractFieldDescriptor(receiver, privateMap, action) { if (!privateMap.has(receiver)) { throw new TypeError(\"attempted to \" + action + \" private field on non-instance\"); } return privateMap.get(receiver); }\nfunction _classApplyDescriptorGet(receiver, descriptor) { if (descriptor.get) { return descriptor.get.call(receiver); } return descriptor.value; }\n\n\nvar _handleClearListBtnClick = /*#__PURE__*/new WeakMap();\nvar _handleTaskBtnsClick = /*#__PURE__*/new WeakMap();\nvar _displayTodoList = /*#__PURE__*/new WeakMap();\nvar _handleFormSubmit = /*#__PURE__*/new WeakMap();\nvar TodoListApp = /*#__PURE__*/_createClass(function TodoListApp(form, _tasksContainerEl, clearListBtn) {\n  var _this = this;\n  _classCallCheck(this, TodoListApp);\n  _defineProperty(this, \"initializeTodoList\", function () {\n    _classPrivateFieldGet(_this, _displayTodoList).call(_this);\n    _classPrivateFieldGet(_this, _handleFormSubmit).call(_this);\n    _classPrivateFieldGet(_this, _handleClearListBtnClick).call(_this);\n  });\n  _classPrivateFieldInitSpec(this, _handleClearListBtnClick, {\n    writable: true,\n    value: function value() {\n      _this.clearListBtn.addEventListener('click', function () {\n        var filteredTaskList = _this.todoList.filter(function (task) {\n          return !task.isCompleted;\n        });\n        _this.todoList = filteredTaskList.map(function (task, idx) {\n          return _objectSpread(_objectSpread({}, task), {}, {\n            index: idx + 1\n          });\n        });\n        localStorage.setItem('todo', JSON.stringify(_this.todoList));\n        _this.tasksContainerEl.innerHTML = '';\n        _classPrivateFieldGet(_this, _displayTodoList).call(_this);\n      });\n    }\n  });\n  _classPrivateFieldInitSpec(this, _handleTaskBtnsClick, {\n    writable: true,\n    value: function value(taskEl, tasksContainerEl, todoList) {\n      var taskCheckBox = taskEl.querySelector('.task_checkbox');\n      var taskDeleteIcon = taskEl.querySelector('.delete-option-icon');\n      var taskEditIcon = taskEl.querySelector('.edit-option-icon');\n      var taskEditInput = taskEl.querySelector('.task_description');\n      var taskDescription = taskEl.querySelector('p');\n      taskCheckBox.addEventListener('change', function () {\n        (0,_helpers_js__WEBPACK_IMPORTED_MODULE_0__.toggleCheckBox)(taskEl, taskDescription, taskCheckBox, todoList);\n      });\n      taskDeleteIcon.addEventListener('click', function () {\n        (0,_helpers_js__WEBPACK_IMPORTED_MODULE_0__.removeTaskEl)(taskEl, tasksContainerEl, todoList);\n      });\n      taskEditIcon.addEventListener('click', function () {\n        (0,_helpers_js__WEBPACK_IMPORTED_MODULE_0__.showEditField)(taskEl, taskEditInput, taskCheckBox, taskDescription, todoList);\n      });\n    }\n  });\n  _classPrivateFieldInitSpec(this, _displayTodoList, {\n    writable: true,\n    value: function value() {\n      _this.todoList.forEach(function (task) {\n        (0,_helpers_js__WEBPACK_IMPORTED_MODULE_0__.appendTaskEl)(task, _this.tasksContainerEl);\n        var addedTask = _this.tasksContainerEl.lastElementChild;\n        _classPrivateFieldGet(_this, _handleTaskBtnsClick).call(_this, addedTask, _this.tasksContainerEl, _this.todoList);\n        (0,_dragEffect_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(addedTask, _this.todoList);\n      });\n    }\n  });\n  _classPrivateFieldInitSpec(this, _handleFormSubmit, {\n    writable: true,\n    value: function value() {\n      _this.form.addEventListener('submit', function (event) {\n        event.preventDefault();\n        var task = {\n          description: _this.form.children[0].value.trim(),\n          isCompleted: false,\n          index: _this.todoList.length + 1\n        };\n        (0,_helpers_js__WEBPACK_IMPORTED_MODULE_0__.saveTaskLocalStorage)(task, _this.todoList);\n        (0,_helpers_js__WEBPACK_IMPORTED_MODULE_0__.appendTaskEl)(task, _this.tasksContainerEl);\n        var addedTask = _this.tasksContainerEl.lastElementChild;\n        _classPrivateFieldGet(_this, _handleTaskBtnsClick).call(_this, addedTask, _this.tasksContainerEl, _this.todoList);\n        _this.form.reset();\n        (0,_dragEffect_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(addedTask, _this.todoList);\n      });\n    }\n  });\n  this.todoList = JSON.parse(localStorage.getItem('todo')) || [];\n  this.tasksContainerEl = _tasksContainerEl;\n  this.form = form;\n  this.clearListBtn = clearListBtn;\n});\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (TodoListApp);\n\n//# sourceURL=webpack://todo/./src/js/modules/app.js?");

/***/ }),

/***/ "./src/js/modules/dragEffect.js":
/*!**************************************!*\
  !*** ./src/js/modules/dragEffect.js ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nfunction _typeof(obj) { \"@babel/helpers - typeof\"; return _typeof = \"function\" == typeof Symbol && \"symbol\" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && \"function\" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? \"symbol\" : typeof obj; }, _typeof(obj); }\nfunction ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }\nfunction _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }\nfunction _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }\nfunction _toPropertyKey(arg) { var key = _toPrimitive(arg, \"string\"); return _typeof(key) === \"symbol\" ? key : String(key); }\nfunction _toPrimitive(input, hint) { if (_typeof(input) !== \"object\" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || \"default\"); if (_typeof(res) !== \"object\") return res; throw new TypeError(\"@@toPrimitive must return a primitive value.\"); } return (hint === \"string\" ? String : Number)(input); }\nvar dragStartTaskEl;\nvar todoListItems;\nvar swapTaskEl = function swapTaskEl(dragStartTaskEl, dragEndTaskEl) {\n  var listContainer = document.querySelectorAll('.task');\n  var taskListEl = document.getElementById('tasksList');\n  var taskOneIndex;\n  var taskTwoIndex;\n  listContainer.forEach(function (task, index) {\n    if (task === dragStartTaskEl) {\n      taskOneIndex = index;\n    }\n    if (task === dragEndTaskEl) {\n      taskTwoIndex = index;\n    }\n  });\n  if (taskOneIndex > taskTwoIndex) {\n    listContainer.item(taskTwoIndex).insertAdjacentElement('beforebegin', dragStartTaskEl);\n    listContainer.item(taskOneIndex).insertAdjacentElement('afterend', dragEndTaskEl);\n  } else {\n    listContainer.item(taskTwoIndex).insertAdjacentElement('afterend', dragStartTaskEl);\n    listContainer.item(taskOneIndex).insertAdjacentElement('beforebegin', dragEndTaskEl);\n  }\n  var tmpItem = todoListItems.splice(taskOneIndex, 1)[0];\n  todoListItems.splice(taskTwoIndex, 0, tmpItem);\n  todoListItems = todoListItems.map(function (task, idx) {\n    return _objectSpread(_objectSpread({}, task), {}, {\n      index: idx + 1\n    });\n  });\n  localStorage.setItem('todo', JSON.stringify(todoListItems));\n  taskListEl.innerHTML = '';\n  // display to list\n};\n\nvar dragStart = function dragStart(ev) {\n  dragStartTaskEl = ev.target.closest('li');\n};\nvar dragOver = function dragOver(ev) {\n  ev.preventDefault();\n};\nvar drop = function drop(ev) {\n  var dragEndTaskEl = ev.target.closest('li');\n  swapTaskEl(dragStartTaskEl, dragEndTaskEl);\n  ev.target.closest('article').classList.remove('drag_over');\n};\nvar dragEnter = function dragEnter(ev) {\n  ev.target.closest('article').classList.add('drag_over');\n};\nvar dragLeave = function dragLeave(ev) {\n  ev.target.closest('article').classList.remove('drag_over');\n};\nvar addDraggableListener = function addDraggableListener(draggableItem, listItems) {\n  draggableItem.addEventListener('dragstart', dragStart);\n  draggableItem.addEventListener('dragover', dragOver);\n  draggableItem.addEventListener('drop', function (ev) {\n    drop(ev);\n  });\n  draggableItem.addEventListener('dragenter', dragEnter);\n  draggableItem.addEventListener('dragleave', dragLeave);\n  todoListItems = listItems;\n};\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (addDraggableListener);\n\n//# sourceURL=webpack://todo/./src/js/modules/dragEffect.js?");

/***/ }),

/***/ "./src/js/modules/helpers.js":
/*!***********************************!*\
  !*** ./src/js/modules/helpers.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"appendTaskEl\": () => (/* binding */ appendTaskEl),\n/* harmony export */   \"editTask\": () => (/* binding */ editTask),\n/* harmony export */   \"removeTaskEl\": () => (/* binding */ removeTaskEl),\n/* harmony export */   \"saveTaskLocalStorage\": () => (/* binding */ saveTaskLocalStorage),\n/* harmony export */   \"showEditField\": () => (/* binding */ showEditField),\n/* harmony export */   \"toggleCheckBox\": () => (/* binding */ toggleCheckBox)\n/* harmony export */ });\nvar placeCursorTextEnd = function placeCursorTextEnd(inputEl) {\n  var taskDescLength = inputEl.value.length;\n  if (inputEl.setSelectionRange) {\n    inputEl.focus();\n    inputEl.setSelectionRange(taskDescLength, taskDescLength);\n  } else if (inputEl.createTextRange) {\n    var textRange = inputEl.createTextRange();\n    textRange.collapse(true);\n    textRange.moveEnd('character', taskDescLength);\n    textRange.moveStart('character', taskDescLength);\n    textRange.select();\n  }\n};\nvar appendTaskEl = function appendTaskEl(task, tasksListEl) {\n  var taskEl = \"\\n  <li id=\\\"t\".concat(task.index, \"\\\" class=\\\"task\\\" draggable=\\\"true\\\">\\n    <article>\\n    <div class=\\\"todo__task\\\">\\n      <input class=\\\"task_checkbox\\\" type=\\\"checkbox\\\" \").concat(task.isCompleted ? 'checked' : '', \" />\\n      <p class=\\\"\").concat(task.isCompleted ? 'line_through' : '', \"\\\">\").concat(task.description, \"</p>\\n      <input class=\\\"task_description\\\" value=\\\"\").concat(task.description, \"\\\" />\\n    </div>\\n      <div class=\\\"task_options\\\">\\n        <i class=\\\"fa-solid fa-pen-to-square edit-option-icon\\\"></i>\\n        <i class=\\\"fa-solid fa-trash-can delete-option-icon\\\"></i>\\n      </div>\\n    </article>\\n  </li>\\n  \");\n  tasksListEl.insertAdjacentHTML('beforeend', taskEl);\n};\nvar saveTaskLocalStorage = function saveTaskLocalStorage(taskObj, toDoList) {\n  toDoList.push(taskObj);\n  localStorage.setItem('todo', JSON.stringify(toDoList));\n};\nvar removeTaskEl = function removeTaskEl(taskEl, tasksContainerEl, todoList) {\n  var id = taskEl.id.match(/t(\\d+)/)[1];\n  var item = todoList.find(function (task) {\n    return task.index === parseInt(id, 10);\n  });\n  tasksContainerEl.querySelector(\"#t\".concat(item.index)).remove();\n  todoList.splice(item, 1);\n  var children = tasksContainerEl.children;\n  for (var idx = 0; idx < children.length; idx += 1) {\n    children.item(idx).id = \"t\".concat(idx + 1);\n    todoList[idx].index = idx + 1;\n  }\n  localStorage.setItem('todo', JSON.stringify(todoList));\n};\nvar hideTaskEl = function hideTaskEl(taskEl, taskEditInput, taskCheckBox) {\n  taskEditInput.classList.add('edit_active');\n  taskEditInput.style.width = \"\".concat(taskEl.offsetWidth, \"px\");\n  taskEditInput.style.height = \"\".concat(taskEl.offsetHeight + 1, \"px\");\n  taskCheckBox.setAttribute('disabled', true);\n  taskEl.setAttribute('draggable', false);\n};\nvar showTaskEl = function showTaskEl(taskEl, taskEditInput, taskCheckBox) {\n  taskCheckBox.removeAttribute('disabled');\n  taskEl.setAttribute('draggable', true);\n  taskEditInput.classList.remove('edit_active');\n};\nvar editTask = function editTask(toDoList, id, editedText, taskDescription) {\n  toDoList.find(function (task) {\n    return task.index === parseInt(id, 10);\n  }).description = editedText;\n  taskDescription.textContent = editedText;\n  localStorage.setItem('todo', JSON.stringify(toDoList));\n};\nvar showEditField = function showEditField(taskEl, taskEditInput, taskCheckBox, taskDescription, toDoList) {\n  hideTaskEl(taskEl, taskEditInput, taskCheckBox);\n  placeCursorTextEnd(taskEditInput);\n  taskEditInput.addEventListener('keypress', function (ev) {\n    if (ev.key !== 'Enter') return;\n    var id = taskEl.id.match(/t(\\d+)/)[1];\n    var editedText = taskEditInput.value;\n    editTask(toDoList, id, editedText, taskDescription);\n    showTaskEl(taskEl, taskEditInput, taskCheckBox);\n  });\n  document.addEventListener('click', function (ev) {\n    if (ev.target.closest('li') === taskEl) return;\n    taskEditInput.value = taskDescription.textContent;\n    showTaskEl(taskEl, taskEditInput, taskCheckBox);\n  });\n};\nvar toggleCheckBox = function toggleCheckBox(taskEl, taskDescription, taskCheckBox, toDoList) {\n  var id = taskEl.id.match(/t(\\d+)/)[1];\n  toDoList.find(function (task) {\n    return task.index === parseInt(id, 10);\n  }).isCompleted = taskCheckBox.checked;\n  localStorage.setItem('todo', JSON.stringify(toDoList));\n  taskDescription.classList.toggle('line_through');\n};\n\n//# sourceURL=webpack://todo/./src/js/modules/helpers.js?");

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
/******/ 	var __webpack_exports__ = __webpack_require__("./src/js/main.js");
/******/ 	
/******/ })()
;
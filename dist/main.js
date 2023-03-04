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

/***/ "./src/scripts/main.js":
/*!*****************************!*\
  !*** ./src/scripts/main.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _modules_app_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modules/app.js */ \"./src/scripts/modules/app.js\");\n\nvar tasksListEl = document.getElementById('tasksList');\nvar clearListBtn = document.getElementById('clear-list');\nvar form = document.querySelector('form');\nvar app = new _modules_app_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"](form, tasksListEl, clearListBtn);\napp.initialize();\n\n//# sourceURL=webpack://todo/./src/scripts/main.js?");

/***/ }),

/***/ "./src/scripts/modules/addTask.js":
/*!****************************************!*\
  !*** ./src/scripts/modules/addTask.js ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nvar appendTaskEl = function appendTaskEl(task, tasksListEl) {\n  var taskEl = \"\\n  <li id=\\\"t\".concat(task.index, \"\\\" class=\\\"task\\\" draggable=\\\"true\\\">\\n    <article>\\n    <div class=\\\"todo__task\\\">\\n      <input class=\\\"task_checkbox\\\" type=\\\"checkbox\\\" \").concat(task.isCompleted ? 'checked' : '', \" />\\n      <p class=\\\"\").concat(task.isCompleted ? 'line_through' : '', \"\\\">\").concat(task.description, \"</p>\\n      <input class=\\\"task_description\\\" value=\\\"\").concat(task.description, \"\\\" />\\n    </div>\\n      <div class=\\\"task_options\\\">\\n        <i class=\\\"fa-solid fa-pen-to-square edit-option-icon\\\"></i>\\n        <i class=\\\"fa-solid fa-trash-can delete-option-icon\\\"></i>\\n      </div>\\n    </article>\\n  </li>\\n  \");\n  tasksListEl.insertAdjacentHTML('beforeend', taskEl);\n};\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (appendTaskEl);\n\n//# sourceURL=webpack://todo/./src/scripts/modules/addTask.js?");

/***/ }),

/***/ "./src/scripts/modules/app.js":
/*!************************************!*\
  !*** ./src/scripts/modules/app.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _editTask_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./editTask.js */ \"./src/scripts/modules/editTask.js\");\n/* harmony import */ var _draggable_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./draggable.js */ \"./src/scripts/modules/draggable.js\");\n/* harmony import */ var _addTask_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./addTask.js */ \"./src/scripts/modules/addTask.js\");\n/* harmony import */ var _utilities_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./utilities.js */ \"./src/scripts/modules/utilities.js\");\n/* harmony import */ var _deleteTask_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./deleteTask.js */ \"./src/scripts/modules/deleteTask.js\");\nfunction _typeof(obj) { \"@babel/helpers - typeof\"; return _typeof = \"function\" == typeof Symbol && \"symbol\" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && \"function\" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? \"symbol\" : typeof obj; }, _typeof(obj); }\nfunction ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }\nfunction _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, \"prototype\", { writable: false }); return Constructor; }\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\nfunction _classPrivateFieldInitSpec(obj, privateMap, value) { _checkPrivateRedeclaration(obj, privateMap); privateMap.set(obj, value); }\nfunction _checkPrivateRedeclaration(obj, privateCollection) { if (privateCollection.has(obj)) { throw new TypeError(\"Cannot initialize the same private elements twice on an object\"); } }\nfunction _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }\nfunction _toPropertyKey(arg) { var key = _toPrimitive(arg, \"string\"); return _typeof(key) === \"symbol\" ? key : String(key); }\nfunction _toPrimitive(input, hint) { if (_typeof(input) !== \"object\" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || \"default\"); if (_typeof(res) !== \"object\") return res; throw new TypeError(\"@@toPrimitive must return a primitive value.\"); } return (hint === \"string\" ? String : Number)(input); }\nfunction _classPrivateFieldGet(receiver, privateMap) { var descriptor = _classExtractFieldDescriptor(receiver, privateMap, \"get\"); return _classApplyDescriptorGet(receiver, descriptor); }\nfunction _classExtractFieldDescriptor(receiver, privateMap, action) { if (!privateMap.has(receiver)) { throw new TypeError(\"attempted to \" + action + \" private field on non-instance\"); } return privateMap.get(receiver); }\nfunction _classApplyDescriptorGet(receiver, descriptor) { if (descriptor.get) { return descriptor.get.call(receiver); } return descriptor.value; }\n\n\n\n\n\nvar _handleClearListBtnClick = /*#__PURE__*/new WeakMap();\nvar _handleTaskBtnsClick = /*#__PURE__*/new WeakMap();\nvar _displayTodoList = /*#__PURE__*/new WeakMap();\nvar _handleFormSubmit = /*#__PURE__*/new WeakMap();\nvar TodoListApp = /*#__PURE__*/_createClass(function TodoListApp(form, _tasksContainerEl, _clearListBtn) {\n  var _this = this;\n  _classCallCheck(this, TodoListApp);\n  _defineProperty(this, \"initialize\", function () {\n    _classPrivateFieldGet(_this, _displayTodoList).call(_this, _this.tasksContainerEl, _this.todoList, _this.clearListBtn);\n    _classPrivateFieldGet(_this, _handleFormSubmit).call(_this, _this.todoList, _this.tasksContainerEl, _this.clearListBtn);\n    _classPrivateFieldGet(_this, _handleClearListBtnClick).call(_this, _this.todoList, _this.tasksContainerEl, _this.clearListBtn);\n    (0,_utilities_js__WEBPACK_IMPORTED_MODULE_3__.toggleClearButtonDisabledClass)(_this.todoList, _this.clearListBtn);\n  });\n  _classPrivateFieldInitSpec(this, _handleClearListBtnClick, {\n    writable: true,\n    value: function value(todoList, tasksContainerEl, clearListBtn) {\n      clearListBtn.addEventListener('click', function () {\n        var filteredTaskList = todoList.filter(function (task) {\n          return !task.isCompleted;\n        });\n        todoList = filteredTaskList.map(function (task, idx) {\n          return _objectSpread(_objectSpread({}, task), {}, {\n            index: idx + 1\n          });\n        });\n        localStorage.setItem('todo', JSON.stringify(todoList));\n        tasksContainerEl.replaceChildren();\n        _classPrivateFieldGet(_this, _displayTodoList).call(_this, tasksContainerEl, todoList, clearListBtn);\n        (0,_utilities_js__WEBPACK_IMPORTED_MODULE_3__.toggleClearButtonDisabledClass)(todoList, clearListBtn);\n      });\n    }\n  });\n  _classPrivateFieldInitSpec(this, _handleTaskBtnsClick, {\n    writable: true,\n    value: function value(taskEl, tasksContainerEl, todoList, clearListBtn) {\n      var taskCheckBox = taskEl.querySelector('.task_checkbox');\n      var taskDeleteIcon = taskEl.querySelector('.delete-option-icon');\n      var taskEditIcon = taskEl.querySelector('.edit-option-icon');\n      var taskEditInput = taskEl.querySelector('.task_description');\n      var taskDescription = taskEl.querySelector('p');\n      taskCheckBox.addEventListener('change', function () {\n        (0,_editTask_js__WEBPACK_IMPORTED_MODULE_0__.toggleCheckBox)(taskEl, taskDescription, taskCheckBox, todoList);\n        (0,_utilities_js__WEBPACK_IMPORTED_MODULE_3__.toggleClearButtonDisabledClass)(todoList, clearListBtn);\n      });\n      taskDeleteIcon.addEventListener('click', function () {\n        (0,_deleteTask_js__WEBPACK_IMPORTED_MODULE_4__[\"default\"])(taskEl, tasksContainerEl, todoList);\n        (0,_utilities_js__WEBPACK_IMPORTED_MODULE_3__.toggleClearButtonDisabledClass)(todoList, clearListBtn);\n      });\n      taskEditIcon.addEventListener('click', function () {\n        (0,_editTask_js__WEBPACK_IMPORTED_MODULE_0__.showEditField)(taskEl, taskEditInput, taskCheckBox, taskDescription, todoList);\n      });\n    }\n  });\n  _classPrivateFieldInitSpec(this, _displayTodoList, {\n    writable: true,\n    value: function value(tasksContainerEl, todoList, clearListBtn) {\n      todoList.forEach(function (task) {\n        (0,_addTask_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(task, tasksContainerEl);\n        var addedTask = tasksContainerEl.lastElementChild;\n        _classPrivateFieldGet(_this, _handleTaskBtnsClick).call(_this, addedTask, tasksContainerEl, todoList, clearListBtn);\n        _this.draggable.addDraggableListener(addedTask);\n      });\n    }\n  });\n  _classPrivateFieldInitSpec(this, _handleFormSubmit, {\n    writable: true,\n    value: function value(todoList, tasksContainerEl, clearListBtn) {\n      _this.form.addEventListener('submit', function (event) {\n        event.preventDefault();\n        var task = {\n          description: _this.form.children[0].value.trim(),\n          isCompleted: false,\n          index: todoList.length + 1\n        };\n        (0,_utilities_js__WEBPACK_IMPORTED_MODULE_3__.saveTaskLocalStorage)(task, todoList);\n        (0,_addTask_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(task, tasksContainerEl);\n        var addedTask = tasksContainerEl.lastElementChild;\n        _classPrivateFieldGet(_this, _handleTaskBtnsClick).call(_this, addedTask, tasksContainerEl, todoList, clearListBtn);\n        _this.form.reset();\n        _this.draggable.addDraggableListener(addedTask);\n      });\n    }\n  });\n  this.todoList = JSON.parse(localStorage.getItem('todo')) || [];\n  this.draggable = new _draggable_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"](this.todoList);\n  this.tasksContainerEl = _tasksContainerEl;\n  this.form = form;\n  this.clearListBtn = _clearListBtn;\n});\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (TodoListApp);\n\n//# sourceURL=webpack://todo/./src/scripts/modules/app.js?");

/***/ }),

/***/ "./src/scripts/modules/deleteTask.js":
/*!*******************************************!*\
  !*** ./src/scripts/modules/deleteTask.js ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _utilities_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./utilities.js */ \"./src/scripts/modules/utilities.js\");\n\nvar removeTaskEl = function removeTaskEl(taskEl, tasksContainerEl, todoList) {\n  var id = taskEl.id.match(/t(\\d+)/)[1];\n  var item = todoList.find(function (task) {\n    return task.index === parseInt(id, 10);\n  });\n  tasksContainerEl.querySelector(\"#t\".concat(item.index)).remove();\n  todoList.splice(id - 1, 1);\n  (0,_utilities_js__WEBPACK_IMPORTED_MODULE_0__.reOrderTasks)(tasksContainerEl, todoList);\n};\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (removeTaskEl);\n\n//# sourceURL=webpack://todo/./src/scripts/modules/deleteTask.js?");

/***/ }),

/***/ "./src/scripts/modules/draggable.js":
/*!******************************************!*\
  !*** ./src/scripts/modules/draggable.js ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _utilities_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./utilities.js */ \"./src/scripts/modules/utilities.js\");\nfunction _typeof(obj) { \"@babel/helpers - typeof\"; return _typeof = \"function\" == typeof Symbol && \"symbol\" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && \"function\" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? \"symbol\" : typeof obj; }, _typeof(obj); }\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, \"prototype\", { writable: false }); return Constructor; }\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\nfunction _classPrivateFieldInitSpec(obj, privateMap, value) { _checkPrivateRedeclaration(obj, privateMap); privateMap.set(obj, value); }\nfunction _checkPrivateRedeclaration(obj, privateCollection) { if (privateCollection.has(obj)) { throw new TypeError(\"Cannot initialize the same private elements twice on an object\"); } }\nfunction _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }\nfunction _toPropertyKey(arg) { var key = _toPrimitive(arg, \"string\"); return _typeof(key) === \"symbol\" ? key : String(key); }\nfunction _toPrimitive(input, hint) { if (_typeof(input) !== \"object\" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || \"default\"); if (_typeof(res) !== \"object\") return res; throw new TypeError(\"@@toPrimitive must return a primitive value.\"); } return (hint === \"string\" ? String : Number)(input); }\nfunction _classPrivateFieldGet(receiver, privateMap) { var descriptor = _classExtractFieldDescriptor(receiver, privateMap, \"get\"); return _classApplyDescriptorGet(receiver, descriptor); }\nfunction _classExtractFieldDescriptor(receiver, privateMap, action) { if (!privateMap.has(receiver)) { throw new TypeError(\"attempted to \" + action + \" private field on non-instance\"); } return privateMap.get(receiver); }\nfunction _classApplyDescriptorGet(receiver, descriptor) { if (descriptor.get) { return descriptor.get.call(receiver); } return descriptor.value; }\n\nvar _swapTaskEl = /*#__PURE__*/new WeakMap();\nvar _dragOver = /*#__PURE__*/new WeakMap();\nvar _dragEnter = /*#__PURE__*/new WeakMap();\nvar _dragLeave = /*#__PURE__*/new WeakMap();\nvar _drop = /*#__PURE__*/new WeakMap();\nvar _dragStart = /*#__PURE__*/new WeakMap();\nvar Draggable = /*#__PURE__*/_createClass(function Draggable(todoList) {\n  var _this = this;\n  _classCallCheck(this, Draggable);\n  _defineProperty(this, \"addDraggableListener\", function (draggableItem) {\n    draggableItem.addEventListener('dragstart', _classPrivateFieldGet(_this, _dragStart));\n    draggableItem.addEventListener('dragover', _classPrivateFieldGet(_this, _dragOver));\n    draggableItem.addEventListener('drop', _classPrivateFieldGet(_this, _drop));\n    draggableItem.addEventListener('dragenter', _classPrivateFieldGet(_this, _dragEnter));\n    draggableItem.addEventListener('dragleave', _classPrivateFieldGet(_this, _dragLeave));\n  });\n  _classPrivateFieldInitSpec(this, _swapTaskEl, {\n    writable: true,\n    value: function value(dragStartTaskEl, dragEndTaskEl) {\n      var listContainer = document.querySelectorAll('.task');\n      var taskListEl = document.getElementById('tasksList');\n      var taskOneIndex;\n      var taskTwoIndex;\n      for (var i = 0; i < listContainer.length; i += 1) {\n        if (taskOneIndex !== undefined && taskTwoIndex !== undefined) break;else if (listContainer[i] === dragStartTaskEl) taskOneIndex = i;else if (listContainer[i] === dragEndTaskEl) taskTwoIndex = i;\n      }\n      if (taskOneIndex > taskTwoIndex) {\n        listContainer.item(taskTwoIndex).insertAdjacentElement('beforebegin', dragStartTaskEl);\n        listContainer.item(taskOneIndex).insertAdjacentElement('afterend', dragEndTaskEl);\n      } else {\n        listContainer.item(taskTwoIndex).insertAdjacentElement('afterend', dragStartTaskEl);\n        listContainer.item(taskOneIndex).insertAdjacentElement('beforebegin', dragEndTaskEl);\n      }\n      var tmpItem = _this.todoListItems.splice(taskOneIndex, 1)[0];\n      _this.todoListItems.splice(taskTwoIndex, 0, tmpItem);\n      (0,_utilities_js__WEBPACK_IMPORTED_MODULE_0__.reOrderTasks)(taskListEl, _this.todoListItems);\n    }\n  });\n  _classPrivateFieldInitSpec(this, _dragOver, {\n    writable: true,\n    value: function value(ev) {\n      return ev.preventDefault();\n    }\n  });\n  _classPrivateFieldInitSpec(this, _dragEnter, {\n    writable: true,\n    value: function value(ev) {\n      return ev.target.closest('article').classList.add('drag_over');\n    }\n  });\n  _classPrivateFieldInitSpec(this, _dragLeave, {\n    writable: true,\n    value: function value(ev) {\n      return ev.target.closest('article').classList.remove('drag_over');\n    }\n  });\n  _classPrivateFieldInitSpec(this, _drop, {\n    writable: true,\n    value: function value(ev) {\n      var dragEndTaskEl = ev.target.closest('li');\n      _classPrivateFieldGet(_this, _swapTaskEl).call(_this, _this.dragStartTaskEl, dragEndTaskEl);\n      ev.target.closest('article').classList.remove('drag_over');\n    }\n  });\n  _classPrivateFieldInitSpec(this, _dragStart, {\n    writable: true,\n    value: function value(ev) {\n      _this.dragStartTaskEl = ev.target.closest('li');\n    }\n  });\n  this.dragStartTaskEl = null;\n  this.todoListItems = todoList;\n});\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Draggable);\n\n//# sourceURL=webpack://todo/./src/scripts/modules/draggable.js?");

/***/ }),

/***/ "./src/scripts/modules/editTask.js":
/*!*****************************************!*\
  !*** ./src/scripts/modules/editTask.js ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"editTask\": () => (/* binding */ editTask),\n/* harmony export */   \"showEditField\": () => (/* binding */ showEditField),\n/* harmony export */   \"toggleCheckBox\": () => (/* binding */ toggleCheckBox)\n/* harmony export */ });\n/* harmony import */ var _utilities_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./utilities.js */ \"./src/scripts/modules/utilities.js\");\n\nvar editTask = function editTask(toDoList, id, editedText, taskDescription) {\n  toDoList.find(function (task) {\n    return task.index === parseInt(id, 10);\n  }).description = editedText;\n  taskDescription.textContent = editedText;\n  localStorage.setItem('todo', JSON.stringify(toDoList));\n};\nvar showEditField = function showEditField(taskEl, taskEditInput, taskCheckBox, taskDescription, toDoList) {\n  (0,_utilities_js__WEBPACK_IMPORTED_MODULE_0__.hideTaskEl)(taskEl, taskEditInput, taskCheckBox);\n  (0,_utilities_js__WEBPACK_IMPORTED_MODULE_0__.placeCursorTextEnd)(taskEditInput);\n  taskEditInput.addEventListener('keypress', function (ev) {\n    if (ev.key !== 'Enter') return;\n    var id = taskEl.id.match(/t(\\d+)/)[1];\n    var editedText = taskEditInput.value;\n    editTask(toDoList, id, editedText, taskDescription);\n    (0,_utilities_js__WEBPACK_IMPORTED_MODULE_0__.showTaskEl)(taskEl, taskEditInput, taskCheckBox);\n  });\n  document.addEventListener('click', function (ev) {\n    if (ev.target.closest('li') === taskEl) return;\n    taskEditInput.value = taskDescription.textContent;\n    (0,_utilities_js__WEBPACK_IMPORTED_MODULE_0__.showTaskEl)(taskEl, taskEditInput, taskCheckBox);\n  });\n};\nvar toggleCheckBox = function toggleCheckBox(taskEl, taskDescription, taskCheckBox, toDoList) {\n  var id = taskEl.id.match(/t(\\d+)/)[1];\n  toDoList.find(function (task) {\n    return task.index === parseInt(id, 10);\n  }).isCompleted = taskCheckBox.checked;\n  localStorage.setItem('todo', JSON.stringify(toDoList));\n  taskDescription.classList.toggle('line_through');\n};\n\n//# sourceURL=webpack://todo/./src/scripts/modules/editTask.js?");

/***/ }),

/***/ "./src/scripts/modules/utilities.js":
/*!******************************************!*\
  !*** ./src/scripts/modules/utilities.js ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"hideTaskEl\": () => (/* binding */ hideTaskEl),\n/* harmony export */   \"placeCursorTextEnd\": () => (/* binding */ placeCursorTextEnd),\n/* harmony export */   \"reOrderTasks\": () => (/* binding */ reOrderTasks),\n/* harmony export */   \"saveTaskLocalStorage\": () => (/* binding */ saveTaskLocalStorage),\n/* harmony export */   \"showTaskEl\": () => (/* binding */ showTaskEl),\n/* harmony export */   \"toggleClearButtonDisabledClass\": () => (/* binding */ toggleClearButtonDisabledClass)\n/* harmony export */ });\nvar reOrderTasks = function reOrderTasks(tasksContainerEl, todoList) {\n  var children = tasksContainerEl.children;\n  for (var idx = 0; idx < children.length; idx += 1) {\n    children.item(idx).id = \"t\".concat(idx + 1);\n    todoList[idx].index = idx + 1;\n  }\n  localStorage.setItem('todo', JSON.stringify(todoList));\n};\nvar saveTaskLocalStorage = function saveTaskLocalStorage(taskObj, toDoList) {\n  toDoList.push(taskObj);\n  localStorage.setItem('todo', JSON.stringify(toDoList));\n};\nvar placeCursorTextEnd = function placeCursorTextEnd(inputEl) {\n  var taskDescLength = inputEl.value.length;\n  if (inputEl.setSelectionRange) {\n    inputEl.focus();\n    inputEl.setSelectionRange(taskDescLength, taskDescLength);\n  } else if (inputEl.createTextRange) {\n    var textRange = inputEl.createTextRange();\n    textRange.collapse(true);\n    textRange.moveEnd('character', taskDescLength);\n    textRange.moveStart('character', taskDescLength);\n    textRange.select();\n  }\n};\nvar hideTaskEl = function hideTaskEl(taskEl, taskEditInput, taskCheckBox) {\n  taskEditInput.classList.add('edit_active');\n  taskEditInput.style.width = \"\".concat(taskEl.offsetWidth, \"px\");\n  taskEditInput.style.height = \"\".concat(taskEl.offsetHeight + 1, \"px\");\n  taskCheckBox.setAttribute('disabled', true);\n  taskEl.setAttribute('draggable', false);\n};\nvar showTaskEl = function showTaskEl(taskEl, taskEditInput, taskCheckBox) {\n  taskCheckBox.removeAttribute('disabled');\n  taskEl.setAttribute('draggable', true);\n  taskEditInput.classList.remove('edit_active');\n};\nvar toggleClearButtonDisabledClass = function toggleClearButtonDisabledClass(todoList, clearListBtn) {\n  var completed = todoList.findIndex(function (task) {\n    return task.isCompleted;\n  });\n  if (completed >= 0 && clearListBtn.classList.contains('disabled')) {\n    clearListBtn.classList.remove('disabled');\n  } else if (completed < 0) {\n    clearListBtn.classList.add('disabled');\n  }\n};\n\n//# sourceURL=webpack://todo/./src/scripts/modules/utilities.js?");

/***/ }),

/***/ "./src/styles/styles.scss":
/*!********************************!*\
  !*** ./src/styles/styles.scss ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n// extracted by mini-css-extract-plugin\n\n\n//# sourceURL=webpack://todo/./src/styles/styles.scss?");

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
/******/ 	__webpack_require__("./src/styles/styles.scss");
/******/ 	var __webpack_exports__ = __webpack_require__("./src/scripts/main.js");
/******/ 	
/******/ })()
;
(self["webpackChunk"] = self["webpackChunk"] || []).push([["form"],{

/***/ "./assets/js/form.js":
/*!***************************!*\
  !*** ./assets/js/form.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

__webpack_require__(/*! core-js/modules/es.array.for-each.js */ "./node_modules/core-js/modules/es.array.for-each.js");
__webpack_require__(/*! core-js/modules/es.object.to-string.js */ "./node_modules/core-js/modules/es.object.to-string.js");
__webpack_require__(/*! core-js/modules/web.dom-collections.for-each.js */ "./node_modules/core-js/modules/web.dom-collections.for-each.js");
__webpack_require__(/*! core-js/modules/es.function.name.js */ "./node_modules/core-js/modules/es.function.name.js");
// import JQuery library
// import $ from 'jquery';

$emailExists = false;
$(document).ready(function () {
  // Llama a la API para obtener las categorías
  $.ajax({
    url: '/get/categories',
    // Reemplaza con la URL de tu controlador que devuelve las categorías
    method: 'GET',
    success: function success(response) {
      // Llena el campo de selección con las categorías
      var select = $('#category-select');
      select.empty();
      response.categories.forEach(function (category) {
        select.append('<option value="' + category.id + '">' + category.name + '</option>');
      });
    }
  });
  $('#email').on('input', function () {
    var email = $(this).val();
    $.ajax({
      url: '/check_email',
      // Reemplaza con la URL de tu controlador que verifica el email
      method: 'POST',
      data: {
        email: email
      },
      success: function success(response) {
        if (response.exists) {
          $emailExists = true;
          $('#email-error').text('El email ya existe en la base de datos');
        } else {
          $('#email-error').text('');
        }
      }
    });
  });
  $('#confirm_password').on('input', function () {
    var password = $('#password').val();
    var confirmPassword = $(this).val();
    if (password !== confirmPassword) {
      $('#password-error').text('Las contraseñas no coinciden');
    } else {
      $('#password-error').text('');
    }
  });
  $('#form').on('submit', function (e) {
    if (emailExists) {
      e.preventDefault();
      $('#email-error').text('El email ya existe en la base de datos');
    } else if ($('#password').val() !== $('#confirm_password').val()) {
      e.preventDefault();
      $('#password-error').text('Las contraseñas no coinciden');
    }
  });
});

/***/ }),

/***/ "./node_modules/core-js/internals/array-for-each.js":
/*!**********************************************************!*\
  !*** ./node_modules/core-js/internals/array-for-each.js ***!
  \**********************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";

var $forEach = (__webpack_require__(/*! ../internals/array-iteration */ "./node_modules/core-js/internals/array-iteration.js").forEach);
var arrayMethodIsStrict = __webpack_require__(/*! ../internals/array-method-is-strict */ "./node_modules/core-js/internals/array-method-is-strict.js");

var STRICT_METHOD = arrayMethodIsStrict('forEach');

// `Array.prototype.forEach` method implementation
// https://tc39.es/ecma262/#sec-array.prototype.foreach
module.exports = !STRICT_METHOD ? function forEach(callbackfn /* , thisArg */) {
  return $forEach(this, callbackfn, arguments.length > 1 ? arguments[1] : undefined);
// eslint-disable-next-line es/no-array-prototype-foreach -- safe
} : [].forEach;


/***/ }),

/***/ "./node_modules/core-js/internals/array-method-is-strict.js":
/*!******************************************************************!*\
  !*** ./node_modules/core-js/internals/array-method-is-strict.js ***!
  \******************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";

var fails = __webpack_require__(/*! ../internals/fails */ "./node_modules/core-js/internals/fails.js");

module.exports = function (METHOD_NAME, argument) {
  var method = [][METHOD_NAME];
  return !!method && fails(function () {
    // eslint-disable-next-line no-useless-call -- required for testing
    method.call(null, argument || function () { return 1; }, 1);
  });
};


/***/ }),

/***/ "./node_modules/core-js/modules/es.array.for-each.js":
/*!***********************************************************!*\
  !*** ./node_modules/core-js/modules/es.array.for-each.js ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

"use strict";

var $ = __webpack_require__(/*! ../internals/export */ "./node_modules/core-js/internals/export.js");
var forEach = __webpack_require__(/*! ../internals/array-for-each */ "./node_modules/core-js/internals/array-for-each.js");

// `Array.prototype.forEach` method
// https://tc39.es/ecma262/#sec-array.prototype.foreach
// eslint-disable-next-line es/no-array-prototype-foreach -- safe
$({ target: 'Array', proto: true, forced: [].forEach != forEach }, {
  forEach: forEach
});


/***/ }),

/***/ "./node_modules/core-js/modules/es.function.name.js":
/*!**********************************************************!*\
  !*** ./node_modules/core-js/modules/es.function.name.js ***!
  \**********************************************************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

var DESCRIPTORS = __webpack_require__(/*! ../internals/descriptors */ "./node_modules/core-js/internals/descriptors.js");
var FUNCTION_NAME_EXISTS = (__webpack_require__(/*! ../internals/function-name */ "./node_modules/core-js/internals/function-name.js").EXISTS);
var uncurryThis = __webpack_require__(/*! ../internals/function-uncurry-this */ "./node_modules/core-js/internals/function-uncurry-this.js");
var defineBuiltInAccessor = __webpack_require__(/*! ../internals/define-built-in-accessor */ "./node_modules/core-js/internals/define-built-in-accessor.js");

var FunctionPrototype = Function.prototype;
var functionToString = uncurryThis(FunctionPrototype.toString);
var nameRE = /function\b(?:\s|\/\*[\S\s]*?\*\/|\/\/[^\n\r]*[\n\r]+)*([^\s(/]*)/;
var regExpExec = uncurryThis(nameRE.exec);
var NAME = 'name';

// Function instances `.name` property
// https://tc39.es/ecma262/#sec-function-instances-name
if (DESCRIPTORS && !FUNCTION_NAME_EXISTS) {
  defineBuiltInAccessor(FunctionPrototype, NAME, {
    configurable: true,
    get: function () {
      try {
        return regExpExec(nameRE, functionToString(this))[1];
      } catch (error) {
        return '';
      }
    }
  });
}


/***/ }),

/***/ "./node_modules/core-js/modules/web.dom-collections.for-each.js":
/*!**********************************************************************!*\
  !*** ./node_modules/core-js/modules/web.dom-collections.for-each.js ***!
  \**********************************************************************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

var global = __webpack_require__(/*! ../internals/global */ "./node_modules/core-js/internals/global.js");
var DOMIterables = __webpack_require__(/*! ../internals/dom-iterables */ "./node_modules/core-js/internals/dom-iterables.js");
var DOMTokenListPrototype = __webpack_require__(/*! ../internals/dom-token-list-prototype */ "./node_modules/core-js/internals/dom-token-list-prototype.js");
var forEach = __webpack_require__(/*! ../internals/array-for-each */ "./node_modules/core-js/internals/array-for-each.js");
var createNonEnumerableProperty = __webpack_require__(/*! ../internals/create-non-enumerable-property */ "./node_modules/core-js/internals/create-non-enumerable-property.js");

var handlePrototype = function (CollectionPrototype) {
  // some Chrome versions have non-configurable methods on DOMTokenList
  if (CollectionPrototype && CollectionPrototype.forEach !== forEach) try {
    createNonEnumerableProperty(CollectionPrototype, 'forEach', forEach);
  } catch (error) {
    CollectionPrototype.forEach = forEach;
  }
};

for (var COLLECTION_NAME in DOMIterables) {
  if (DOMIterables[COLLECTION_NAME]) {
    handlePrototype(global[COLLECTION_NAME] && global[COLLECTION_NAME].prototype);
  }
}

handlePrototype(DOMTokenListPrototype);


/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ __webpack_require__.O(0, ["vendors-node_modules_core-js_internals_array-iteration_js-node_modules_core-js_internals_defi-a5d8e3"], () => (__webpack_exec__("./assets/js/form.js")));
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ }
]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QyxDQUFDOzs7Ozs7Ozs7OztBQ3hEVztBQUNiLGVBQWUsd0hBQStDO0FBQzlELDBCQUEwQixtQkFBTyxDQUFDLHVHQUFxQzs7QUFFdkU7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEVBQUU7Ozs7Ozs7Ozs7OztBQ1hXO0FBQ2IsWUFBWSxtQkFBTyxDQUFDLHFFQUFvQjs7QUFFeEM7QUFDQTtBQUNBO0FBQ0E7QUFDQSxnREFBZ0QsV0FBVztBQUMzRCxHQUFHO0FBQ0g7Ozs7Ozs7Ozs7OztBQ1RhO0FBQ2IsUUFBUSxtQkFBTyxDQUFDLHVFQUFxQjtBQUNyQyxjQUFjLG1CQUFPLENBQUMsdUZBQTZCOztBQUVuRDtBQUNBO0FBQ0E7QUFDQSxJQUFJLDZEQUE2RDtBQUNqRTtBQUNBLENBQUM7Ozs7Ozs7Ozs7O0FDVEQsa0JBQWtCLG1CQUFPLENBQUMsaUZBQTBCO0FBQ3BELDJCQUEyQixtSEFBNEM7QUFDdkUsa0JBQWtCLG1CQUFPLENBQUMscUdBQW9DO0FBQzlELDRCQUE0QixtQkFBTyxDQUFDLDJHQUF1Qzs7QUFFM0U7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsUUFBUTtBQUNSO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDs7Ozs7Ozs7Ozs7QUN4QkEsYUFBYSxtQkFBTyxDQUFDLHVFQUFxQjtBQUMxQyxtQkFBbUIsbUJBQU8sQ0FBQyxxRkFBNEI7QUFDdkQsNEJBQTRCLG1CQUFPLENBQUMsMkdBQXVDO0FBQzNFLGNBQWMsbUJBQU8sQ0FBQyx1RkFBNkI7QUFDbkQsa0NBQWtDLG1CQUFPLENBQUMsdUhBQTZDOztBQUV2RjtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUk7QUFDSjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL2Fzc2V0cy9qcy9mb3JtLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9jb3JlLWpzL2ludGVybmFscy9hcnJheS1mb3ItZWFjaC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvY29yZS1qcy9pbnRlcm5hbHMvYXJyYXktbWV0aG9kLWlzLXN0cmljdC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvY29yZS1qcy9tb2R1bGVzL2VzLmFycmF5LmZvci1lYWNoLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9jb3JlLWpzL21vZHVsZXMvZXMuZnVuY3Rpb24ubmFtZS5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvY29yZS1qcy9tb2R1bGVzL3dlYi5kb20tY29sbGVjdGlvbnMuZm9yLWVhY2guanMiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gaW1wb3J0IEpRdWVyeSBsaWJyYXJ5XHJcbi8vIGltcG9ydCAkIGZyb20gJ2pxdWVyeSc7XHJcblxyXG4kZW1haWxFeGlzdHMgPSBmYWxzZTtcclxuXHJcbiQoZG9jdW1lbnQpLnJlYWR5KGZ1bmN0aW9uKCkge1xyXG4gICAgLy8gTGxhbWEgYSBsYSBBUEkgcGFyYSBvYnRlbmVyIGxhcyBjYXRlZ29yw61hc1xyXG4gICAgJC5hamF4KHtcclxuICAgICAgICB1cmw6ICcvZ2V0L2NhdGVnb3JpZXMnLCAvLyBSZWVtcGxhemEgY29uIGxhIFVSTCBkZSB0dSBjb250cm9sYWRvciBxdWUgZGV2dWVsdmUgbGFzIGNhdGVnb3LDrWFzXHJcbiAgICAgICAgbWV0aG9kOiAnR0VUJyxcclxuICAgICAgICBzdWNjZXNzOiBmdW5jdGlvbihyZXNwb25zZSkge1xyXG4gICAgICAgICAgICAvLyBMbGVuYSBlbCBjYW1wbyBkZSBzZWxlY2Npw7NuIGNvbiBsYXMgY2F0ZWdvcsOtYXNcclxuICAgICAgICAgICAgdmFyIHNlbGVjdCA9ICQoJyNjYXRlZ29yeS1zZWxlY3QnKTtcclxuICAgICAgICAgICAgc2VsZWN0LmVtcHR5KCk7XHJcbiAgICAgICAgICAgIHJlc3BvbnNlLmNhdGVnb3JpZXMuZm9yRWFjaChmdW5jdGlvbihjYXRlZ29yeSkge1xyXG4gICAgICAgICAgICAgICAgc2VsZWN0LmFwcGVuZCgnPG9wdGlvbiB2YWx1ZT1cIicgKyBjYXRlZ29yeS5pZCArICdcIj4nICsgY2F0ZWdvcnkubmFtZSArICc8L29wdGlvbj4nKTtcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfVxyXG4gICAgfSk7XHJcblxyXG4gICAgJCgnI2VtYWlsJykub24oJ2lucHV0JywgZnVuY3Rpb24oKSB7XHJcbiAgICAgICAgdmFyIGVtYWlsID0gJCh0aGlzKS52YWwoKTtcclxuICAgICAgICAkLmFqYXgoe1xyXG4gICAgICAgICAgICB1cmw6ICcvY2hlY2tfZW1haWwnLCAvLyBSZWVtcGxhemEgY29uIGxhIFVSTCBkZSB0dSBjb250cm9sYWRvciBxdWUgdmVyaWZpY2EgZWwgZW1haWxcclxuICAgICAgICAgICAgbWV0aG9kOiAnUE9TVCcsXHJcbiAgICAgICAgICAgIGRhdGE6IHtlbWFpbDogZW1haWx9LFxyXG4gICAgICAgICAgICBzdWNjZXNzOiBmdW5jdGlvbihyZXNwb25zZSkge1xyXG4gICAgICAgICAgICAgICAgaWYgKHJlc3BvbnNlLmV4aXN0cykge1xyXG4gICAgICAgICAgICAgICAgICAgICRlbWFpbEV4aXN0cyA9IHRydWU7XHJcbiAgICAgICAgICAgICAgICAgICAgJCgnI2VtYWlsLWVycm9yJykudGV4dCgnRWwgZW1haWwgeWEgZXhpc3RlIGVuIGxhIGJhc2UgZGUgZGF0b3MnKTtcclxuICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgJCgnI2VtYWlsLWVycm9yJykudGV4dCgnJyk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KTtcclxuICAgIH0pO1xyXG4gICAgXHJcbiAgICAkKCcjY29uZmlybV9wYXNzd29yZCcpLm9uKCdpbnB1dCcsIGZ1bmN0aW9uKCkge1xyXG4gICAgICAgIHZhciBwYXNzd29yZCA9ICQoJyNwYXNzd29yZCcpLnZhbCgpO1xyXG4gICAgICAgIHZhciBjb25maXJtUGFzc3dvcmQgPSAkKHRoaXMpLnZhbCgpO1xyXG4gICAgICAgIGlmIChwYXNzd29yZCAhPT0gY29uZmlybVBhc3N3b3JkKSB7XHJcbiAgICAgICAgICAgICQoJyNwYXNzd29yZC1lcnJvcicpLnRleHQoJ0xhcyBjb250cmFzZcOxYXMgbm8gY29pbmNpZGVuJyk7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgJCgnI3Bhc3N3b3JkLWVycm9yJykudGV4dCgnJyk7XHJcbiAgICAgICAgfVxyXG4gICAgfSk7XHJcbiAgICBcclxuICAgICQoJyNmb3JtJykub24oJ3N1Ym1pdCcsIGZ1bmN0aW9uKGUpIHtcclxuICAgICAgICBpZiAoZW1haWxFeGlzdHMpIHtcclxuICAgICAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgICAgICAgICAkKCcjZW1haWwtZXJyb3InKS50ZXh0KCdFbCBlbWFpbCB5YSBleGlzdGUgZW4gbGEgYmFzZSBkZSBkYXRvcycpO1xyXG4gICAgICAgIH0gZWxzZSBpZiAoJCgnI3Bhc3N3b3JkJykudmFsKCkgIT09ICQoJyNjb25maXJtX3Bhc3N3b3JkJykudmFsKCkpIHtcclxuICAgICAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgICAgICAgICAkKCcjcGFzc3dvcmQtZXJyb3InKS50ZXh0KCdMYXMgY29udHJhc2XDsWFzIG5vIGNvaW5jaWRlbicpO1xyXG4gICAgICAgIH1cclxuICAgIH0pO1xyXG59KTtcclxuIiwiJ3VzZSBzdHJpY3QnO1xudmFyICRmb3JFYWNoID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2FycmF5LWl0ZXJhdGlvbicpLmZvckVhY2g7XG52YXIgYXJyYXlNZXRob2RJc1N0cmljdCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9hcnJheS1tZXRob2QtaXMtc3RyaWN0Jyk7XG5cbnZhciBTVFJJQ1RfTUVUSE9EID0gYXJyYXlNZXRob2RJc1N0cmljdCgnZm9yRWFjaCcpO1xuXG4vLyBgQXJyYXkucHJvdG90eXBlLmZvckVhY2hgIG1ldGhvZCBpbXBsZW1lbnRhdGlvblxuLy8gaHR0cHM6Ly90YzM5LmVzL2VjbWEyNjIvI3NlYy1hcnJheS5wcm90b3R5cGUuZm9yZWFjaFxubW9kdWxlLmV4cG9ydHMgPSAhU1RSSUNUX01FVEhPRCA/IGZ1bmN0aW9uIGZvckVhY2goY2FsbGJhY2tmbiAvKiAsIHRoaXNBcmcgKi8pIHtcbiAgcmV0dXJuICRmb3JFYWNoKHRoaXMsIGNhbGxiYWNrZm4sIGFyZ3VtZW50cy5sZW5ndGggPiAxID8gYXJndW1lbnRzWzFdIDogdW5kZWZpbmVkKTtcbi8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBlcy9uby1hcnJheS1wcm90b3R5cGUtZm9yZWFjaCAtLSBzYWZlXG59IDogW10uZm9yRWFjaDtcbiIsIid1c2Ugc3RyaWN0JztcbnZhciBmYWlscyA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9mYWlscycpO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChNRVRIT0RfTkFNRSwgYXJndW1lbnQpIHtcbiAgdmFyIG1ldGhvZCA9IFtdW01FVEhPRF9OQU1FXTtcbiAgcmV0dXJuICEhbWV0aG9kICYmIGZhaWxzKGZ1bmN0aW9uICgpIHtcbiAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tdXNlbGVzcy1jYWxsIC0tIHJlcXVpcmVkIGZvciB0ZXN0aW5nXG4gICAgbWV0aG9kLmNhbGwobnVsbCwgYXJndW1lbnQgfHwgZnVuY3Rpb24gKCkgeyByZXR1cm4gMTsgfSwgMSk7XG4gIH0pO1xufTtcbiIsIid1c2Ugc3RyaWN0JztcbnZhciAkID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2V4cG9ydCcpO1xudmFyIGZvckVhY2ggPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvYXJyYXktZm9yLWVhY2gnKTtcblxuLy8gYEFycmF5LnByb3RvdHlwZS5mb3JFYWNoYCBtZXRob2Rcbi8vIGh0dHBzOi8vdGMzOS5lcy9lY21hMjYyLyNzZWMtYXJyYXkucHJvdG90eXBlLmZvcmVhY2hcbi8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBlcy9uby1hcnJheS1wcm90b3R5cGUtZm9yZWFjaCAtLSBzYWZlXG4kKHsgdGFyZ2V0OiAnQXJyYXknLCBwcm90bzogdHJ1ZSwgZm9yY2VkOiBbXS5mb3JFYWNoICE9IGZvckVhY2ggfSwge1xuICBmb3JFYWNoOiBmb3JFYWNoXG59KTtcbiIsInZhciBERVNDUklQVE9SUyA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9kZXNjcmlwdG9ycycpO1xudmFyIEZVTkNUSU9OX05BTUVfRVhJU1RTID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2Z1bmN0aW9uLW5hbWUnKS5FWElTVFM7XG52YXIgdW5jdXJyeVRoaXMgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvZnVuY3Rpb24tdW5jdXJyeS10aGlzJyk7XG52YXIgZGVmaW5lQnVpbHRJbkFjY2Vzc29yID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2RlZmluZS1idWlsdC1pbi1hY2Nlc3NvcicpO1xuXG52YXIgRnVuY3Rpb25Qcm90b3R5cGUgPSBGdW5jdGlvbi5wcm90b3R5cGU7XG52YXIgZnVuY3Rpb25Ub1N0cmluZyA9IHVuY3VycnlUaGlzKEZ1bmN0aW9uUHJvdG90eXBlLnRvU3RyaW5nKTtcbnZhciBuYW1lUkUgPSAvZnVuY3Rpb25cXGIoPzpcXHN8XFwvXFwqW1xcU1xcc10qP1xcKlxcL3xcXC9cXC9bXlxcblxccl0qW1xcblxccl0rKSooW15cXHMoL10qKS87XG52YXIgcmVnRXhwRXhlYyA9IHVuY3VycnlUaGlzKG5hbWVSRS5leGVjKTtcbnZhciBOQU1FID0gJ25hbWUnO1xuXG4vLyBGdW5jdGlvbiBpbnN0YW5jZXMgYC5uYW1lYCBwcm9wZXJ0eVxuLy8gaHR0cHM6Ly90YzM5LmVzL2VjbWEyNjIvI3NlYy1mdW5jdGlvbi1pbnN0YW5jZXMtbmFtZVxuaWYgKERFU0NSSVBUT1JTICYmICFGVU5DVElPTl9OQU1FX0VYSVNUUykge1xuICBkZWZpbmVCdWlsdEluQWNjZXNzb3IoRnVuY3Rpb25Qcm90b3R5cGUsIE5BTUUsIHtcbiAgICBjb25maWd1cmFibGU6IHRydWUsXG4gICAgZ2V0OiBmdW5jdGlvbiAoKSB7XG4gICAgICB0cnkge1xuICAgICAgICByZXR1cm4gcmVnRXhwRXhlYyhuYW1lUkUsIGZ1bmN0aW9uVG9TdHJpbmcodGhpcykpWzFdO1xuICAgICAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICAgICAgcmV0dXJuICcnO1xuICAgICAgfVxuICAgIH1cbiAgfSk7XG59XG4iLCJ2YXIgZ2xvYmFsID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2dsb2JhbCcpO1xudmFyIERPTUl0ZXJhYmxlcyA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9kb20taXRlcmFibGVzJyk7XG52YXIgRE9NVG9rZW5MaXN0UHJvdG90eXBlID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2RvbS10b2tlbi1saXN0LXByb3RvdHlwZScpO1xudmFyIGZvckVhY2ggPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvYXJyYXktZm9yLWVhY2gnKTtcbnZhciBjcmVhdGVOb25FbnVtZXJhYmxlUHJvcGVydHkgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvY3JlYXRlLW5vbi1lbnVtZXJhYmxlLXByb3BlcnR5Jyk7XG5cbnZhciBoYW5kbGVQcm90b3R5cGUgPSBmdW5jdGlvbiAoQ29sbGVjdGlvblByb3RvdHlwZSkge1xuICAvLyBzb21lIENocm9tZSB2ZXJzaW9ucyBoYXZlIG5vbi1jb25maWd1cmFibGUgbWV0aG9kcyBvbiBET01Ub2tlbkxpc3RcbiAgaWYgKENvbGxlY3Rpb25Qcm90b3R5cGUgJiYgQ29sbGVjdGlvblByb3RvdHlwZS5mb3JFYWNoICE9PSBmb3JFYWNoKSB0cnkge1xuICAgIGNyZWF0ZU5vbkVudW1lcmFibGVQcm9wZXJ0eShDb2xsZWN0aW9uUHJvdG90eXBlLCAnZm9yRWFjaCcsIGZvckVhY2gpO1xuICB9IGNhdGNoIChlcnJvcikge1xuICAgIENvbGxlY3Rpb25Qcm90b3R5cGUuZm9yRWFjaCA9IGZvckVhY2g7XG4gIH1cbn07XG5cbmZvciAodmFyIENPTExFQ1RJT05fTkFNRSBpbiBET01JdGVyYWJsZXMpIHtcbiAgaWYgKERPTUl0ZXJhYmxlc1tDT0xMRUNUSU9OX05BTUVdKSB7XG4gICAgaGFuZGxlUHJvdG90eXBlKGdsb2JhbFtDT0xMRUNUSU9OX05BTUVdICYmIGdsb2JhbFtDT0xMRUNUSU9OX05BTUVdLnByb3RvdHlwZSk7XG4gIH1cbn1cblxuaGFuZGxlUHJvdG90eXBlKERPTVRva2VuTGlzdFByb3RvdHlwZSk7XG4iXSwibmFtZXMiOlsiJGVtYWlsRXhpc3RzIiwiJCIsImRvY3VtZW50IiwicmVhZHkiLCJhamF4IiwidXJsIiwibWV0aG9kIiwic3VjY2VzcyIsInJlc3BvbnNlIiwic2VsZWN0IiwiZW1wdHkiLCJjYXRlZ29yaWVzIiwiZm9yRWFjaCIsImNhdGVnb3J5IiwiYXBwZW5kIiwiaWQiLCJuYW1lIiwib24iLCJlbWFpbCIsInZhbCIsImRhdGEiLCJleGlzdHMiLCJ0ZXh0IiwicGFzc3dvcmQiLCJjb25maXJtUGFzc3dvcmQiLCJlIiwiZW1haWxFeGlzdHMiLCJwcmV2ZW50RGVmYXVsdCJdLCJzb3VyY2VSb290IjoiIn0=
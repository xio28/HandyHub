(self["webpackChunk"] = self["webpackChunk"] || []).push([["form"],{

/***/ "./assets/js/form.js":
/*!***************************!*\
  !*** ./assets/js/form.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var core_js_modules_es_json_stringify_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.json.stringify.js */ "./node_modules/core-js/modules/es.json.stringify.js");
/* harmony import */ var core_js_modules_es_json_stringify_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_json_stringify_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_1__);

// import JQuery library

var emailExists = false;
jquery__WEBPACK_IMPORTED_MODULE_1___default()(function () {
  // $.ajax({
  //     url: '/get/categories',
  //     method: 'GET',
  //     success: function(response) {
  //         // Llena el campo de selección con las categorías
  //         var select = $('#category-select');
  //         select.empty();
  //         response.categories.forEach(function(category) {
  //             select.append('<option value="' + category.id + '">' + category.name + '</option>');
  //         });
  //     }
  // });

  jquery__WEBPACK_IMPORTED_MODULE_1___default()('#email').on('input', function () {
    var email = jquery__WEBPACK_IMPORTED_MODULE_1___default()(this).val();
    jquery__WEBPACK_IMPORTED_MODULE_1___default().ajax({
      url: '/check/email',
      method: 'POST',
      data: JSON.stringify({
        email: email
      }),
      success: function success(response) {
        if (response.exists) {
          emailExists = true;
          jquery__WEBPACK_IMPORTED_MODULE_1___default()('#email-error').text('El email ya existe en la base de datos');
        } else {
          emailExists = false;
          jquery__WEBPACK_IMPORTED_MODULE_1___default()('#email-error').text('');
        }
      },
      error: function error(jqXHR, textStatus, errorThrown) {
        console.error("Error: " + textStatus, errorThrown);
      }
    });
  });
  jquery__WEBPACK_IMPORTED_MODULE_1___default()('#confirm_password').on('input', function () {
    var password = jquery__WEBPACK_IMPORTED_MODULE_1___default()('#password').val();
    var confirmPassword = jquery__WEBPACK_IMPORTED_MODULE_1___default()(this).val();
    if (password !== confirmPassword) {
      jquery__WEBPACK_IMPORTED_MODULE_1___default()('#password-error').text('Las contraseñas no coinciden');
      jquery__WEBPACK_IMPORTED_MODULE_1___default()('#password-error-confirm').text('Las contraseñas no coinciden');
    } else {
      jquery__WEBPACK_IMPORTED_MODULE_1___default()('#password-error').text('');
      jquery__WEBPACK_IMPORTED_MODULE_1___default()('#password-error-confirm').text('');
    }
  });
  jquery__WEBPACK_IMPORTED_MODULE_1___default()('#form').on('submit', function (e) {
    if (emailExists) {
      e.preventDefault();
      jquery__WEBPACK_IMPORTED_MODULE_1___default()('#email-error').text('El email ya existe en la base de datos');
    } else if (jquery__WEBPACK_IMPORTED_MODULE_1___default()('#password').val() !== jquery__WEBPACK_IMPORTED_MODULE_1___default()('#confirm_password').val()) {
      e.preventDefault();
      jquery__WEBPACK_IMPORTED_MODULE_1___default()('#password-error').show();
      jquery__WEBPACK_IMPORTED_MODULE_1___default()('#password-error').text('Las contraseñas no coinciden');
    }
  });
});

/***/ }),

/***/ "./node_modules/core-js/internals/array-slice.js":
/*!*******************************************************!*\
  !*** ./node_modules/core-js/internals/array-slice.js ***!
  \*******************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var uncurryThis = __webpack_require__(/*! ../internals/function-uncurry-this */ "./node_modules/core-js/internals/function-uncurry-this.js");

module.exports = uncurryThis([].slice);


/***/ }),

/***/ "./node_modules/core-js/internals/function-apply.js":
/*!**********************************************************!*\
  !*** ./node_modules/core-js/internals/function-apply.js ***!
  \**********************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var NATIVE_BIND = __webpack_require__(/*! ../internals/function-bind-native */ "./node_modules/core-js/internals/function-bind-native.js");

var FunctionPrototype = Function.prototype;
var apply = FunctionPrototype.apply;
var call = FunctionPrototype.call;

// eslint-disable-next-line es/no-reflect -- safe
module.exports = typeof Reflect == 'object' && Reflect.apply || (NATIVE_BIND ? call.bind(apply) : function () {
  return call.apply(apply, arguments);
});


/***/ }),

/***/ "./node_modules/core-js/internals/get-json-replacer-function.js":
/*!**********************************************************************!*\
  !*** ./node_modules/core-js/internals/get-json-replacer-function.js ***!
  \**********************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var uncurryThis = __webpack_require__(/*! ../internals/function-uncurry-this */ "./node_modules/core-js/internals/function-uncurry-this.js");
var isArray = __webpack_require__(/*! ../internals/is-array */ "./node_modules/core-js/internals/is-array.js");
var isCallable = __webpack_require__(/*! ../internals/is-callable */ "./node_modules/core-js/internals/is-callable.js");
var classof = __webpack_require__(/*! ../internals/classof-raw */ "./node_modules/core-js/internals/classof-raw.js");
var toString = __webpack_require__(/*! ../internals/to-string */ "./node_modules/core-js/internals/to-string.js");

var push = uncurryThis([].push);

module.exports = function (replacer) {
  if (isCallable(replacer)) return replacer;
  if (!isArray(replacer)) return;
  var rawLength = replacer.length;
  var keys = [];
  for (var i = 0; i < rawLength; i++) {
    var element = replacer[i];
    if (typeof element == 'string') push(keys, element);
    else if (typeof element == 'number' || classof(element) == 'Number' || classof(element) == 'String') push(keys, toString(element));
  }
  var keysLength = keys.length;
  var root = true;
  return function (key, value) {
    if (root) {
      root = false;
      return value;
    }
    if (isArray(this)) return value;
    for (var j = 0; j < keysLength; j++) if (keys[j] === key) return value;
  };
};


/***/ }),

/***/ "./node_modules/core-js/internals/to-string.js":
/*!*****************************************************!*\
  !*** ./node_modules/core-js/internals/to-string.js ***!
  \*****************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var classof = __webpack_require__(/*! ../internals/classof */ "./node_modules/core-js/internals/classof.js");

var $String = String;

module.exports = function (argument) {
  if (classof(argument) === 'Symbol') throw TypeError('Cannot convert a Symbol value to a string');
  return $String(argument);
};


/***/ }),

/***/ "./node_modules/core-js/modules/es.json.stringify.js":
/*!***********************************************************!*\
  !*** ./node_modules/core-js/modules/es.json.stringify.js ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

var $ = __webpack_require__(/*! ../internals/export */ "./node_modules/core-js/internals/export.js");
var getBuiltIn = __webpack_require__(/*! ../internals/get-built-in */ "./node_modules/core-js/internals/get-built-in.js");
var apply = __webpack_require__(/*! ../internals/function-apply */ "./node_modules/core-js/internals/function-apply.js");
var call = __webpack_require__(/*! ../internals/function-call */ "./node_modules/core-js/internals/function-call.js");
var uncurryThis = __webpack_require__(/*! ../internals/function-uncurry-this */ "./node_modules/core-js/internals/function-uncurry-this.js");
var fails = __webpack_require__(/*! ../internals/fails */ "./node_modules/core-js/internals/fails.js");
var isCallable = __webpack_require__(/*! ../internals/is-callable */ "./node_modules/core-js/internals/is-callable.js");
var isSymbol = __webpack_require__(/*! ../internals/is-symbol */ "./node_modules/core-js/internals/is-symbol.js");
var arraySlice = __webpack_require__(/*! ../internals/array-slice */ "./node_modules/core-js/internals/array-slice.js");
var getReplacerFunction = __webpack_require__(/*! ../internals/get-json-replacer-function */ "./node_modules/core-js/internals/get-json-replacer-function.js");
var NATIVE_SYMBOL = __webpack_require__(/*! ../internals/symbol-constructor-detection */ "./node_modules/core-js/internals/symbol-constructor-detection.js");

var $String = String;
var $stringify = getBuiltIn('JSON', 'stringify');
var exec = uncurryThis(/./.exec);
var charAt = uncurryThis(''.charAt);
var charCodeAt = uncurryThis(''.charCodeAt);
var replace = uncurryThis(''.replace);
var numberToString = uncurryThis(1.0.toString);

var tester = /[\uD800-\uDFFF]/g;
var low = /^[\uD800-\uDBFF]$/;
var hi = /^[\uDC00-\uDFFF]$/;

var WRONG_SYMBOLS_CONVERSION = !NATIVE_SYMBOL || fails(function () {
  var symbol = getBuiltIn('Symbol')();
  // MS Edge converts symbol values to JSON as {}
  return $stringify([symbol]) != '[null]'
    // WebKit converts symbol values to JSON as null
    || $stringify({ a: symbol }) != '{}'
    // V8 throws on boxed symbols
    || $stringify(Object(symbol)) != '{}';
});

// https://github.com/tc39/proposal-well-formed-stringify
var ILL_FORMED_UNICODE = fails(function () {
  return $stringify('\uDF06\uD834') !== '"\\udf06\\ud834"'
    || $stringify('\uDEAD') !== '"\\udead"';
});

var stringifyWithSymbolsFix = function (it, replacer) {
  var args = arraySlice(arguments);
  var $replacer = getReplacerFunction(replacer);
  if (!isCallable($replacer) && (it === undefined || isSymbol(it))) return; // IE8 returns string on undefined
  args[1] = function (key, value) {
    // some old implementations (like WebKit) could pass numbers as keys
    if (isCallable($replacer)) value = call($replacer, this, $String(key), value);
    if (!isSymbol(value)) return value;
  };
  return apply($stringify, null, args);
};

var fixIllFormed = function (match, offset, string) {
  var prev = charAt(string, offset - 1);
  var next = charAt(string, offset + 1);
  if ((exec(low, match) && !exec(hi, next)) || (exec(hi, match) && !exec(low, prev))) {
    return '\\u' + numberToString(charCodeAt(match, 0), 16);
  } return match;
};

if ($stringify) {
  // `JSON.stringify` method
  // https://tc39.es/ecma262/#sec-json.stringify
  $({ target: 'JSON', stat: true, arity: 3, forced: WRONG_SYMBOLS_CONVERSION || ILL_FORMED_UNICODE }, {
    // eslint-disable-next-line no-unused-vars -- required for `.length`
    stringify: function stringify(it, replacer, space) {
      var args = arraySlice(arguments);
      var result = apply(WRONG_SYMBOLS_CONVERSION ? stringifyWithSymbolsFix : $stringify, null, args);
      return ILL_FORMED_UNICODE && typeof result == 'string' ? replace(result, tester, fixIllFormed) : result;
    }
  });
}


/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ __webpack_require__.O(0, ["vendors-node_modules_core-js_internals_export_js","vendors-node_modules_core-js_internals_classof_js-node_modules_core-js_internals_is-array_js--e42e13"], () => (__webpack_exec__("./assets/js/form.js")));
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ }
]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUNBLG9CQUFvQixXQUFXLFFBQVE7QUFDdkM7QUFDQSx3Q0FBd0M7QUFDeEMsQ0FBQzs7QUFFRDtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUM7O0FBRUQ7QUFDQTtBQUNBO0FBQ0EsNEVBQTRFO0FBQzVFO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFJO0FBQ0o7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsTUFBTSw4RkFBOEY7QUFDcEc7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2pzL2Zvcm0uanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2NvcmUtanMvaW50ZXJuYWxzL2FycmF5LXNsaWNlLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9jb3JlLWpzL2ludGVybmFscy9mdW5jdGlvbi1hcHBseS5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvY29yZS1qcy9pbnRlcm5hbHMvZ2V0LWpzb24tcmVwbGFjZXItZnVuY3Rpb24uanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2NvcmUtanMvaW50ZXJuYWxzL3RvLXN0cmluZy5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvY29yZS1qcy9tb2R1bGVzL2VzLmpzb24uc3RyaW5naWZ5LmpzIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIGltcG9ydCBKUXVlcnkgbGlicmFyeVxyXG5pbXBvcnQgJCBmcm9tICdqcXVlcnknO1xyXG5cclxubGV0IGVtYWlsRXhpc3RzID0gZmFsc2U7XHJcblxyXG4kKGZ1bmN0aW9uKCkge1xyXG4gICAgLy8gJC5hamF4KHtcclxuICAgIC8vICAgICB1cmw6ICcvZ2V0L2NhdGVnb3JpZXMnLFxyXG4gICAgLy8gICAgIG1ldGhvZDogJ0dFVCcsXHJcbiAgICAvLyAgICAgc3VjY2VzczogZnVuY3Rpb24ocmVzcG9uc2UpIHtcclxuICAgIC8vICAgICAgICAgLy8gTGxlbmEgZWwgY2FtcG8gZGUgc2VsZWNjacOzbiBjb24gbGFzIGNhdGVnb3LDrWFzXHJcbiAgICAvLyAgICAgICAgIHZhciBzZWxlY3QgPSAkKCcjY2F0ZWdvcnktc2VsZWN0Jyk7XHJcbiAgICAvLyAgICAgICAgIHNlbGVjdC5lbXB0eSgpO1xyXG4gICAgLy8gICAgICAgICByZXNwb25zZS5jYXRlZ29yaWVzLmZvckVhY2goZnVuY3Rpb24oY2F0ZWdvcnkpIHtcclxuICAgIC8vICAgICAgICAgICAgIHNlbGVjdC5hcHBlbmQoJzxvcHRpb24gdmFsdWU9XCInICsgY2F0ZWdvcnkuaWQgKyAnXCI+JyArIGNhdGVnb3J5Lm5hbWUgKyAnPC9vcHRpb24+Jyk7XHJcbiAgICAvLyAgICAgICAgIH0pO1xyXG4gICAgLy8gICAgIH1cclxuICAgIC8vIH0pO1xyXG5cclxuICAgICQoJyNlbWFpbCcpLm9uKCdpbnB1dCcsIGZ1bmN0aW9uKCkge1xyXG4gICAgICAgIHZhciBlbWFpbCA9ICQodGhpcykudmFsKCk7XHJcbiAgICAgICAgJC5hamF4KHtcclxuICAgICAgICAgICAgdXJsOiAnL2NoZWNrL2VtYWlsJyxcclxuICAgICAgICAgICAgbWV0aG9kOiAnUE9TVCcsXHJcbiAgICAgICAgICAgIGRhdGE6IEpTT04uc3RyaW5naWZ5KHtlbWFpbDogZW1haWx9KSxcclxuICAgICAgICAgICAgc3VjY2VzczogZnVuY3Rpb24ocmVzcG9uc2UpIHtcclxuICAgICAgICAgICAgICAgIGlmIChyZXNwb25zZS5leGlzdHMpIHtcclxuICAgICAgICAgICAgICAgICAgICBlbWFpbEV4aXN0cyA9IHRydWU7XHJcbiAgICAgICAgICAgICAgICAgICAgJCgnI2VtYWlsLWVycm9yJykudGV4dCgnRWwgZW1haWwgeWEgZXhpc3RlIGVuIGxhIGJhc2UgZGUgZGF0b3MnKTtcclxuICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgZW1haWxFeGlzdHMgPSBmYWxzZTtcclxuICAgICAgICAgICAgICAgICAgICAkKCcjZW1haWwtZXJyb3InKS50ZXh0KCcnKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgZXJyb3I6IGZ1bmN0aW9uKGpxWEhSLCB0ZXh0U3RhdHVzLCBlcnJvclRocm93bikge1xyXG4gICAgICAgICAgICAgICAgY29uc29sZS5lcnJvcihcIkVycm9yOiBcIiArIHRleHRTdGF0dXMsIGVycm9yVGhyb3duKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pO1xyXG4gICAgfSk7XHJcbiAgICBcclxuICAgICQoJyNjb25maXJtX3Bhc3N3b3JkJykub24oJ2lucHV0JywgZnVuY3Rpb24oKSB7XHJcbiAgICAgICAgdmFyIHBhc3N3b3JkID0gJCgnI3Bhc3N3b3JkJykudmFsKCk7XHJcbiAgICAgICAgdmFyIGNvbmZpcm1QYXNzd29yZCA9ICQodGhpcykudmFsKCk7XHJcbiAgICAgICAgaWYgKHBhc3N3b3JkICE9PSBjb25maXJtUGFzc3dvcmQpIHtcclxuICAgICAgICAgICAgJCgnI3Bhc3N3b3JkLWVycm9yJykudGV4dCgnTGFzIGNvbnRyYXNlw7FhcyBubyBjb2luY2lkZW4nKTtcclxuICAgICAgICAgICAgJCgnI3Bhc3N3b3JkLWVycm9yLWNvbmZpcm0nKS50ZXh0KCdMYXMgY29udHJhc2XDsWFzIG5vIGNvaW5jaWRlbicpO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICQoJyNwYXNzd29yZC1lcnJvcicpLnRleHQoJycpO1xyXG4gICAgICAgICAgICAkKCcjcGFzc3dvcmQtZXJyb3ItY29uZmlybScpLnRleHQoJycpO1xyXG4gICAgICAgIH1cclxuICAgIH0pO1xyXG4gICAgXHJcbiAgICAkKCcjZm9ybScpLm9uKCdzdWJtaXQnLCBmdW5jdGlvbihlKSB7XHJcbiAgICAgICAgaWYgKGVtYWlsRXhpc3RzKSB7XHJcbiAgICAgICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuICAgICAgICAgICAgJCgnI2VtYWlsLWVycm9yJykudGV4dCgnRWwgZW1haWwgeWEgZXhpc3RlIGVuIGxhIGJhc2UgZGUgZGF0b3MnKTtcclxuICAgICAgICB9IGVsc2UgaWYgKCQoJyNwYXNzd29yZCcpLnZhbCgpICE9PSAkKCcjY29uZmlybV9wYXNzd29yZCcpLnZhbCgpKSB7XHJcbiAgICAgICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuICAgICAgICAgICAgJCgnI3Bhc3N3b3JkLWVycm9yJykuc2hvdygpO1xyXG4gICAgICAgICAgICAkKCcjcGFzc3dvcmQtZXJyb3InKS50ZXh0KCdMYXMgY29udHJhc2XDsWFzIG5vIGNvaW5jaWRlbicpO1xyXG4gICAgICAgIH1cclxuICAgIH0pO1xyXG59KTtcclxuIiwidmFyIHVuY3VycnlUaGlzID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2Z1bmN0aW9uLXVuY3VycnktdGhpcycpO1xuXG5tb2R1bGUuZXhwb3J0cyA9IHVuY3VycnlUaGlzKFtdLnNsaWNlKTtcbiIsInZhciBOQVRJVkVfQklORCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9mdW5jdGlvbi1iaW5kLW5hdGl2ZScpO1xuXG52YXIgRnVuY3Rpb25Qcm90b3R5cGUgPSBGdW5jdGlvbi5wcm90b3R5cGU7XG52YXIgYXBwbHkgPSBGdW5jdGlvblByb3RvdHlwZS5hcHBseTtcbnZhciBjYWxsID0gRnVuY3Rpb25Qcm90b3R5cGUuY2FsbDtcblxuLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIGVzL25vLXJlZmxlY3QgLS0gc2FmZVxubW9kdWxlLmV4cG9ydHMgPSB0eXBlb2YgUmVmbGVjdCA9PSAnb2JqZWN0JyAmJiBSZWZsZWN0LmFwcGx5IHx8IChOQVRJVkVfQklORCA/IGNhbGwuYmluZChhcHBseSkgOiBmdW5jdGlvbiAoKSB7XG4gIHJldHVybiBjYWxsLmFwcGx5KGFwcGx5LCBhcmd1bWVudHMpO1xufSk7XG4iLCJ2YXIgdW5jdXJyeVRoaXMgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvZnVuY3Rpb24tdW5jdXJyeS10aGlzJyk7XG52YXIgaXNBcnJheSA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9pcy1hcnJheScpO1xudmFyIGlzQ2FsbGFibGUgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvaXMtY2FsbGFibGUnKTtcbnZhciBjbGFzc29mID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2NsYXNzb2YtcmF3Jyk7XG52YXIgdG9TdHJpbmcgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvdG8tc3RyaW5nJyk7XG5cbnZhciBwdXNoID0gdW5jdXJyeVRoaXMoW10ucHVzaCk7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKHJlcGxhY2VyKSB7XG4gIGlmIChpc0NhbGxhYmxlKHJlcGxhY2VyKSkgcmV0dXJuIHJlcGxhY2VyO1xuICBpZiAoIWlzQXJyYXkocmVwbGFjZXIpKSByZXR1cm47XG4gIHZhciByYXdMZW5ndGggPSByZXBsYWNlci5sZW5ndGg7XG4gIHZhciBrZXlzID0gW107XG4gIGZvciAodmFyIGkgPSAwOyBpIDwgcmF3TGVuZ3RoOyBpKyspIHtcbiAgICB2YXIgZWxlbWVudCA9IHJlcGxhY2VyW2ldO1xuICAgIGlmICh0eXBlb2YgZWxlbWVudCA9PSAnc3RyaW5nJykgcHVzaChrZXlzLCBlbGVtZW50KTtcbiAgICBlbHNlIGlmICh0eXBlb2YgZWxlbWVudCA9PSAnbnVtYmVyJyB8fCBjbGFzc29mKGVsZW1lbnQpID09ICdOdW1iZXInIHx8IGNsYXNzb2YoZWxlbWVudCkgPT0gJ1N0cmluZycpIHB1c2goa2V5cywgdG9TdHJpbmcoZWxlbWVudCkpO1xuICB9XG4gIHZhciBrZXlzTGVuZ3RoID0ga2V5cy5sZW5ndGg7XG4gIHZhciByb290ID0gdHJ1ZTtcbiAgcmV0dXJuIGZ1bmN0aW9uIChrZXksIHZhbHVlKSB7XG4gICAgaWYgKHJvb3QpIHtcbiAgICAgIHJvb3QgPSBmYWxzZTtcbiAgICAgIHJldHVybiB2YWx1ZTtcbiAgICB9XG4gICAgaWYgKGlzQXJyYXkodGhpcykpIHJldHVybiB2YWx1ZTtcbiAgICBmb3IgKHZhciBqID0gMDsgaiA8IGtleXNMZW5ndGg7IGorKykgaWYgKGtleXNbal0gPT09IGtleSkgcmV0dXJuIHZhbHVlO1xuICB9O1xufTtcbiIsInZhciBjbGFzc29mID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2NsYXNzb2YnKTtcblxudmFyICRTdHJpbmcgPSBTdHJpbmc7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGFyZ3VtZW50KSB7XG4gIGlmIChjbGFzc29mKGFyZ3VtZW50KSA9PT0gJ1N5bWJvbCcpIHRocm93IFR5cGVFcnJvcignQ2Fubm90IGNvbnZlcnQgYSBTeW1ib2wgdmFsdWUgdG8gYSBzdHJpbmcnKTtcbiAgcmV0dXJuICRTdHJpbmcoYXJndW1lbnQpO1xufTtcbiIsInZhciAkID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2V4cG9ydCcpO1xudmFyIGdldEJ1aWx0SW4gPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvZ2V0LWJ1aWx0LWluJyk7XG52YXIgYXBwbHkgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvZnVuY3Rpb24tYXBwbHknKTtcbnZhciBjYWxsID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2Z1bmN0aW9uLWNhbGwnKTtcbnZhciB1bmN1cnJ5VGhpcyA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9mdW5jdGlvbi11bmN1cnJ5LXRoaXMnKTtcbnZhciBmYWlscyA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9mYWlscycpO1xudmFyIGlzQ2FsbGFibGUgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvaXMtY2FsbGFibGUnKTtcbnZhciBpc1N5bWJvbCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9pcy1zeW1ib2wnKTtcbnZhciBhcnJheVNsaWNlID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2FycmF5LXNsaWNlJyk7XG52YXIgZ2V0UmVwbGFjZXJGdW5jdGlvbiA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9nZXQtanNvbi1yZXBsYWNlci1mdW5jdGlvbicpO1xudmFyIE5BVElWRV9TWU1CT0wgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvc3ltYm9sLWNvbnN0cnVjdG9yLWRldGVjdGlvbicpO1xuXG52YXIgJFN0cmluZyA9IFN0cmluZztcbnZhciAkc3RyaW5naWZ5ID0gZ2V0QnVpbHRJbignSlNPTicsICdzdHJpbmdpZnknKTtcbnZhciBleGVjID0gdW5jdXJyeVRoaXMoLy4vLmV4ZWMpO1xudmFyIGNoYXJBdCA9IHVuY3VycnlUaGlzKCcnLmNoYXJBdCk7XG52YXIgY2hhckNvZGVBdCA9IHVuY3VycnlUaGlzKCcnLmNoYXJDb2RlQXQpO1xudmFyIHJlcGxhY2UgPSB1bmN1cnJ5VGhpcygnJy5yZXBsYWNlKTtcbnZhciBudW1iZXJUb1N0cmluZyA9IHVuY3VycnlUaGlzKDEuMC50b1N0cmluZyk7XG5cbnZhciB0ZXN0ZXIgPSAvW1xcdUQ4MDAtXFx1REZGRl0vZztcbnZhciBsb3cgPSAvXltcXHVEODAwLVxcdURCRkZdJC87XG52YXIgaGkgPSAvXltcXHVEQzAwLVxcdURGRkZdJC87XG5cbnZhciBXUk9OR19TWU1CT0xTX0NPTlZFUlNJT04gPSAhTkFUSVZFX1NZTUJPTCB8fCBmYWlscyhmdW5jdGlvbiAoKSB7XG4gIHZhciBzeW1ib2wgPSBnZXRCdWlsdEluKCdTeW1ib2wnKSgpO1xuICAvLyBNUyBFZGdlIGNvbnZlcnRzIHN5bWJvbCB2YWx1ZXMgdG8gSlNPTiBhcyB7fVxuICByZXR1cm4gJHN0cmluZ2lmeShbc3ltYm9sXSkgIT0gJ1tudWxsXSdcbiAgICAvLyBXZWJLaXQgY29udmVydHMgc3ltYm9sIHZhbHVlcyB0byBKU09OIGFzIG51bGxcbiAgICB8fCAkc3RyaW5naWZ5KHsgYTogc3ltYm9sIH0pICE9ICd7fSdcbiAgICAvLyBWOCB0aHJvd3Mgb24gYm94ZWQgc3ltYm9sc1xuICAgIHx8ICRzdHJpbmdpZnkoT2JqZWN0KHN5bWJvbCkpICE9ICd7fSc7XG59KTtcblxuLy8gaHR0cHM6Ly9naXRodWIuY29tL3RjMzkvcHJvcG9zYWwtd2VsbC1mb3JtZWQtc3RyaW5naWZ5XG52YXIgSUxMX0ZPUk1FRF9VTklDT0RFID0gZmFpbHMoZnVuY3Rpb24gKCkge1xuICByZXR1cm4gJHN0cmluZ2lmeSgnXFx1REYwNlxcdUQ4MzQnKSAhPT0gJ1wiXFxcXHVkZjA2XFxcXHVkODM0XCInXG4gICAgfHwgJHN0cmluZ2lmeSgnXFx1REVBRCcpICE9PSAnXCJcXFxcdWRlYWRcIic7XG59KTtcblxudmFyIHN0cmluZ2lmeVdpdGhTeW1ib2xzRml4ID0gZnVuY3Rpb24gKGl0LCByZXBsYWNlcikge1xuICB2YXIgYXJncyA9IGFycmF5U2xpY2UoYXJndW1lbnRzKTtcbiAgdmFyICRyZXBsYWNlciA9IGdldFJlcGxhY2VyRnVuY3Rpb24ocmVwbGFjZXIpO1xuICBpZiAoIWlzQ2FsbGFibGUoJHJlcGxhY2VyKSAmJiAoaXQgPT09IHVuZGVmaW5lZCB8fCBpc1N5bWJvbChpdCkpKSByZXR1cm47IC8vIElFOCByZXR1cm5zIHN0cmluZyBvbiB1bmRlZmluZWRcbiAgYXJnc1sxXSA9IGZ1bmN0aW9uIChrZXksIHZhbHVlKSB7XG4gICAgLy8gc29tZSBvbGQgaW1wbGVtZW50YXRpb25zIChsaWtlIFdlYktpdCkgY291bGQgcGFzcyBudW1iZXJzIGFzIGtleXNcbiAgICBpZiAoaXNDYWxsYWJsZSgkcmVwbGFjZXIpKSB2YWx1ZSA9IGNhbGwoJHJlcGxhY2VyLCB0aGlzLCAkU3RyaW5nKGtleSksIHZhbHVlKTtcbiAgICBpZiAoIWlzU3ltYm9sKHZhbHVlKSkgcmV0dXJuIHZhbHVlO1xuICB9O1xuICByZXR1cm4gYXBwbHkoJHN0cmluZ2lmeSwgbnVsbCwgYXJncyk7XG59O1xuXG52YXIgZml4SWxsRm9ybWVkID0gZnVuY3Rpb24gKG1hdGNoLCBvZmZzZXQsIHN0cmluZykge1xuICB2YXIgcHJldiA9IGNoYXJBdChzdHJpbmcsIG9mZnNldCAtIDEpO1xuICB2YXIgbmV4dCA9IGNoYXJBdChzdHJpbmcsIG9mZnNldCArIDEpO1xuICBpZiAoKGV4ZWMobG93LCBtYXRjaCkgJiYgIWV4ZWMoaGksIG5leHQpKSB8fCAoZXhlYyhoaSwgbWF0Y2gpICYmICFleGVjKGxvdywgcHJldikpKSB7XG4gICAgcmV0dXJuICdcXFxcdScgKyBudW1iZXJUb1N0cmluZyhjaGFyQ29kZUF0KG1hdGNoLCAwKSwgMTYpO1xuICB9IHJldHVybiBtYXRjaDtcbn07XG5cbmlmICgkc3RyaW5naWZ5KSB7XG4gIC8vIGBKU09OLnN0cmluZ2lmeWAgbWV0aG9kXG4gIC8vIGh0dHBzOi8vdGMzOS5lcy9lY21hMjYyLyNzZWMtanNvbi5zdHJpbmdpZnlcbiAgJCh7IHRhcmdldDogJ0pTT04nLCBzdGF0OiB0cnVlLCBhcml0eTogMywgZm9yY2VkOiBXUk9OR19TWU1CT0xTX0NPTlZFUlNJT04gfHwgSUxMX0ZPUk1FRF9VTklDT0RFIH0sIHtcbiAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tdW51c2VkLXZhcnMgLS0gcmVxdWlyZWQgZm9yIGAubGVuZ3RoYFxuICAgIHN0cmluZ2lmeTogZnVuY3Rpb24gc3RyaW5naWZ5KGl0LCByZXBsYWNlciwgc3BhY2UpIHtcbiAgICAgIHZhciBhcmdzID0gYXJyYXlTbGljZShhcmd1bWVudHMpO1xuICAgICAgdmFyIHJlc3VsdCA9IGFwcGx5KFdST05HX1NZTUJPTFNfQ09OVkVSU0lPTiA/IHN0cmluZ2lmeVdpdGhTeW1ib2xzRml4IDogJHN0cmluZ2lmeSwgbnVsbCwgYXJncyk7XG4gICAgICByZXR1cm4gSUxMX0ZPUk1FRF9VTklDT0RFICYmIHR5cGVvZiByZXN1bHQgPT0gJ3N0cmluZycgPyByZXBsYWNlKHJlc3VsdCwgdGVzdGVyLCBmaXhJbGxGb3JtZWQpIDogcmVzdWx0O1xuICAgIH1cbiAgfSk7XG59XG4iXSwibmFtZXMiOlsiJCIsImVtYWlsRXhpc3RzIiwib24iLCJlbWFpbCIsInZhbCIsImFqYXgiLCJ1cmwiLCJtZXRob2QiLCJkYXRhIiwiSlNPTiIsInN0cmluZ2lmeSIsInN1Y2Nlc3MiLCJyZXNwb25zZSIsImV4aXN0cyIsInRleHQiLCJlcnJvciIsImpxWEhSIiwidGV4dFN0YXR1cyIsImVycm9yVGhyb3duIiwiY29uc29sZSIsInBhc3N3b3JkIiwiY29uZmlybVBhc3N3b3JkIiwiZSIsInByZXZlbnREZWZhdWx0Iiwic2hvdyJdLCJzb3VyY2VSb290IjoiIn0=
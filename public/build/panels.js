(self["webpackChunk"] = self["webpackChunk"] || []).push([["panels"],{

/***/ "./assets/js/panels.js":
/*!*****************************!*\
  !*** ./assets/js/panels.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var core_js_modules_es_array_find_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.array.find.js */ "./node_modules/core-js/modules/es.array.find.js");
/* harmony import */ var core_js_modules_es_array_find_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_find_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es.object.to-string.js */ "./node_modules/core-js/modules/es.object.to-string.js");
/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var core_js_modules_es_array_concat_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! core-js/modules/es.array.concat.js */ "./node_modules/core-js/modules/es.array.concat.js");
/* harmony import */ var core_js_modules_es_array_concat_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_concat_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var core_js_modules_es_function_name_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! core-js/modules/es.function.name.js */ "./node_modules/core-js/modules/es.function.name.js");
/* harmony import */ var core_js_modules_es_function_name_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_function_name_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_4__);





jquery__WEBPACK_IMPORTED_MODULE_4___default()(function () {
  jquery__WEBPACK_IMPORTED_MODULE_4___default()(".sidebar-item").on('click', function (e) {
    e.preventDefault();
    var target = jquery__WEBPACK_IMPORTED_MODULE_4___default()(this).attr('href');
    jquery__WEBPACK_IMPORTED_MODULE_4___default()('.content').not(target).hide();
    jquery__WEBPACK_IMPORTED_MODULE_4___default()(target).fadeIn(600);
  });
  jquery__WEBPACK_IMPORTED_MODULE_4___default()('#toggle-left-menu').on('click', function () {
    if (jquery__WEBPACK_IMPORTED_MODULE_4___default()('#left-menu').hasClass('small-left-menu')) {
      jquery__WEBPACK_IMPORTED_MODULE_4___default()('#left-menu').removeClass('small-left-menu');
    } else {
      jquery__WEBPACK_IMPORTED_MODULE_4___default()('#left-menu').addClass('small-left-menu');
    }
    jquery__WEBPACK_IMPORTED_MODULE_4___default()('#logo').toggleClass('small-left-menu');
    jquery__WEBPACK_IMPORTED_MODULE_4___default()('#page-container').toggleClass('small-left-menu');
    jquery__WEBPACK_IMPORTED_MODULE_4___default()('#header .header-left').toggleClass('small-left-menu');
    jquery__WEBPACK_IMPORTED_MODULE_4___default()('#logo .big-logo').toggle('300');
    jquery__WEBPACK_IMPORTED_MODULE_4___default()('#logo .small-logo').toggle('300');
    jquery__WEBPACK_IMPORTED_MODULE_4___default()('#logo').toggleClass('p-0 pl-1');
    jquery__WEBPACK_IMPORTED_MODULE_4___default()('li h3').toggleClass('hidden');
  });
  jquery__WEBPACK_IMPORTED_MODULE_4___default()(document).on('mouseover', '#left-menu.small-left-menu > ul > li', function () {
    if (!jquery__WEBPACK_IMPORTED_MODULE_4___default()(this).hasClass('has-sub')) {
      var label = jquery__WEBPACK_IMPORTED_MODULE_4___default()(this).find('span').text();
      var position = jquery__WEBPACK_IMPORTED_MODULE_4___default()(this).position();
      jquery__WEBPACK_IMPORTED_MODULE_4___default()('#show-lable').css({
        'top': position.top + 79,
        'left': position.left + 59,
        'opacity': 1,
        'visibility': 'visible'
      });
      jquery__WEBPACK_IMPORTED_MODULE_4___default()('#show-lable').text(label);
    } else {
      var _position = jquery__WEBPACK_IMPORTED_MODULE_4___default()(this).position();
      jquery__WEBPACK_IMPORTED_MODULE_4___default()(this).find('ul').addClass('open');
      if (jquery__WEBPACK_IMPORTED_MODULE_4___default()(this).find('ul').hasClass('open')) {
        var height = 47;
        var count_submenu_li = jquery__WEBPACK_IMPORTED_MODULE_4___default()(this).find('ul > li').length;
        if (_position.top >= 580) {
          var style = {
            'top': _position.top + 100 - height * count_submenu_li,
            'height': height * count_submenu_li + 'px'
          };
          jquery__WEBPACK_IMPORTED_MODULE_4___default()(this).find('ul.open').css(style);
        } else {
          var _style = {
            'top': _position.top + 79,
            'height': height * count_submenu_li + 'px'
          };
          jquery__WEBPACK_IMPORTED_MODULE_4___default()(this).find('ul.open').css(_style);
        }
      }
    }
  });
  jquery__WEBPACK_IMPORTED_MODULE_4___default()(document).on('mouseout', '#left-menu.small-left-menu li a', function (e) {
    jquery__WEBPACK_IMPORTED_MODULE_4___default()('#show-lable').css({
      'opacity': 0,
      'visibility': 'hidden'
    });
  });
  jquery__WEBPACK_IMPORTED_MODULE_4___default()(document).on('mouseout', '#left-menu.small-left-menu li.has-sub', function (e) {
    jquery__WEBPACK_IMPORTED_MODULE_4___default()(this).find('ul').css({
      'height': 0
    });
  });
  jquery__WEBPACK_IMPORTED_MODULE_4___default()(window).resize(function () {
    windowResize();
  });
  jquery__WEBPACK_IMPORTED_MODULE_4___default()(window).on('load', function () {
    windowResize();
  });
  jquery__WEBPACK_IMPORTED_MODULE_4___default()('#left-menu li.has-sub > a').on('click', function () {
    var _this = jquery__WEBPACK_IMPORTED_MODULE_4___default()(this).parent();
    _this.find('ul').toggleClass('open');
    jquery__WEBPACK_IMPORTED_MODULE_4___default()(this).closest('li').toggleClass('rotate');
    _this.closest('#left-menu').find('.open').not(_this.find('ul')).removeClass('open');
    _this.closest('#left-menu').find('.rotate').not(jquery__WEBPACK_IMPORTED_MODULE_4___default()(this).closest('li')).removeClass('rotate');
    _this.closest('#left-menu').find('ul').css('height', 0);
    if (_this.find('ul').hasClass('open')) {
      var height = 47;
      var count_submenu_li = _this.find('ul > li').length;
      _this.find('ul').css('height', height * count_submenu_li + 'px');
    }
  });
  jquery__WEBPACK_IMPORTED_MODULE_4___default()('#left-menu ul li').on('click', function () {
    var clickedId = jquery__WEBPACK_IMPORTED_MODULE_4___default()(this).attr('id');
    var contentId = 'content-' + clickedId;
    jquery__WEBPACK_IMPORTED_MODULE_4___default()('#left-menu ul li, .page').removeClass('active');
    jquery__WEBPACK_IMPORTED_MODULE_4___default()(this).addClass('active');
    jquery__WEBPACK_IMPORTED_MODULE_4___default()('#' + contentId).addClass('active');
  });
  jquery__WEBPACK_IMPORTED_MODULE_4___default()('.trash-user').on('click', function () {
    var userId = jquery__WEBPACK_IMPORTED_MODULE_4___default()(this).attr('data-id');
    var isConfirmed = confirm('¿Estás seguro de que quieres eliminar este usuario?');
    if (isConfirmed) {
      jquery__WEBPACK_IMPORTED_MODULE_4___default().ajax({
        url: '/delete_user/' + userId,
        type: 'DELETE',
        success: function success(result) {
          jquery__WEBPACK_IMPORTED_MODULE_4___default()('button[data-id="' + userId + '"]').parents('tr').remove();
        }
      });
    }
  });
  jquery__WEBPACK_IMPORTED_MODULE_4___default()("#addCategory").on('click', function () {
    var categoryName = jquery__WEBPACK_IMPORTED_MODULE_4___default()("#category").val();
    if (categoryName) {
      jquery__WEBPACK_IMPORTED_MODULE_4___default().ajax({
        url: "/register/categories",
        type: "POST",
        data: {
          category: categoryName
        },
        success: function success(data) {
          var newRow = jquery__WEBPACK_IMPORTED_MODULE_4___default()("<tr>");
          var cols = "";
          cols += '<td data-label="ID">' + data.id + '</td>';
          cols += '<td data-label="Name">' + data.category + '</td>';
          cols += "<td data-label=\"\">\n                        <button class=\"btn edit-category\" data-id=\"".concat(data.id, "\">\n                            <span class=\"material-icons\">\n                                edit\n                            </span>\n                        </button>\n                        <button class=\"btn trash-category\" data-id=\"").concat(data.id, "\">\n                            <span class=\"material-icons\">\n                                delete_forever\n                            </span>\n                        </button>\n                    </td>");
          newRow.append(cols);
          jquery__WEBPACK_IMPORTED_MODULE_4___default()("table").append(newRow);
          jquery__WEBPACK_IMPORTED_MODULE_4___default()("#category").val('');
        },
        error: function error(xhr, ajaxOptions, thrownError) {
          alert(thrownError);
        }
      });
    } else {
      alert('Please enter a category name');
    }
  });
  jquery__WEBPACK_IMPORTED_MODULE_4___default()('.trash-category').on('click', function () {
    var userId = jquery__WEBPACK_IMPORTED_MODULE_4___default()(this).attr('data-id');
    var isConfirmed = confirm('¿Estás seguro de que quieres eliminar este usuario?');
    if (isConfirmed) {
      jquery__WEBPACK_IMPORTED_MODULE_4___default().ajax({
        url: '/delete_category/' + userId,
        type: 'DELETE',
        success: function success(result) {
          jquery__WEBPACK_IMPORTED_MODULE_4___default()('button[data-id="' + userId + '"]').parents('tr').remove();
        }
      });
    }
  });
  jquery__WEBPACK_IMPORTED_MODULE_4___default()('.resend-btn').click(function () {
    var userId = jquery__WEBPACK_IMPORTED_MODULE_4___default()(this).data('id');
    jquery__WEBPACK_IMPORTED_MODULE_4___default().post({
      url: '/resend_email/' + userId,
      success: function success(response) {
        alert('Verification email sent successfully.');
      },
      error: function error(_error) {
        console.log(_error);
      }
    });
  });
  jquery__WEBPACK_IMPORTED_MODULE_4___default()('.trash-contract').on('click', function (event) {
    event.preventDefault();
    var contractId = jquery__WEBPACK_IMPORTED_MODULE_4___default()(this).data('id');

    // Realizar la solicitud AJAX
    jquery__WEBPACK_IMPORTED_MODULE_4___default().ajax({
      url: '/reject/contract/' + contractId,
      method: 'POST',
      success: function success(response) {
        //
      },
      error: function error(xhr, status, _error2) {
        // 
      }
    });
  });
  jquery__WEBPACK_IMPORTED_MODULE_4___default()('#addAdmin').on('click', function (e) {
    e.preventDefault();
    var formData = jquery__WEBPACK_IMPORTED_MODULE_4___default()('form').serialize();
    jquery__WEBPACK_IMPORTED_MODULE_4___default().ajax({
      url: '/register/admin',
      method: 'POST',
      data: formData,
      success: function success(response) {
        if (response.success) {
          location.reload();
        }
      },
      error: function error(xhr, status, _error3) {
        console.error(_error3);
      }
    });
  });
  function updateUserTable(admin) {
    var row = jquery__WEBPACK_IMPORTED_MODULE_4___default()('<tr>');
    row.append(jquery__WEBPACK_IMPORTED_MODULE_4___default()('<td>').text(admin.id));
    row.append(jquery__WEBPACK_IMPORTED_MODULE_4___default()('<td>').text(admin.name));
    row.append(jquery__WEBPACK_IMPORTED_MODULE_4___default()('<td>').text(admin.surname));
    row.append(jquery__WEBPACK_IMPORTED_MODULE_4___default()('<td>').text(admin.email));
    row.append(jquery__WEBPACK_IMPORTED_MODULE_4___default()('<td>').addClass('min-h').text(admin.telephone));
    row.append(jquery__WEBPACK_IMPORTED_MODULE_4___default()('<td>').text(admin.roles[0]));
    row.append(jquery__WEBPACK_IMPORTED_MODULE_4___default()('<td>').addClass(admin.isVerified ? 'verified' : ''));
    row.append(jquery__WEBPACK_IMPORTED_MODULE_4___default()('<td>').html("\n            <button class=\"btn edit-user\" data-id=\"".concat(admin.id, "\">\n                <span class=\"material-icons\">edit</span>\n            </button>\n            <button class=\"btn trash-user\" data-id=\"").concat(admin.id, "\">\n                <span class=\"material-icons\">delete_forever</span>\n            </button>\n        ")));
    jquery__WEBPACK_IMPORTED_MODULE_4___default()('table tbody').append(row);
  }
  jquery__WEBPACK_IMPORTED_MODULE_4___default()('#updateCategoryForm').on('submit', function (event) {
    event.preventDefault();
    var categoryId = jquery__WEBPACK_IMPORTED_MODULE_4___default()(this).data('category-id');
    var formData = jquery__WEBPACK_IMPORTED_MODULE_4___default()(this).serialize();
    jquery__WEBPACK_IMPORTED_MODULE_4___default().ajax({
      url: '/update_category/' + categoryId,
      method: 'PUT',
      data: formData,
      success: function success(response) {
        if (response.success) {
          location.reload();
        } else {
          console.error(response.message);
        }
      },
      error: function error(xhr, status, _error4) {
        console.error(_error4);
      }
    });
  });
  function windowResize() {
    var width = jquery__WEBPACK_IMPORTED_MODULE_4___default()(window).width();
    if (width <= 992) {
      jquery__WEBPACK_IMPORTED_MODULE_4___default()('#left-menu').addClass('small-left-menu');
      jquery__WEBPACK_IMPORTED_MODULE_4___default()('#logo').addClass('small-left-menu p-0 pl-1');
    } else {
      jquery__WEBPACK_IMPORTED_MODULE_4___default()('#left-menu').removeClass('small-left-menu');
      jquery__WEBPACK_IMPORTED_MODULE_4___default()('#logo').removeClass('small-left-menu p-0 pl-1');
    }
  }
});

/***/ }),

/***/ "./node_modules/core-js/internals/array-method-has-species-support.js":
/*!****************************************************************************!*\
  !*** ./node_modules/core-js/internals/array-method-has-species-support.js ***!
  \****************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var fails = __webpack_require__(/*! ../internals/fails */ "./node_modules/core-js/internals/fails.js");
var wellKnownSymbol = __webpack_require__(/*! ../internals/well-known-symbol */ "./node_modules/core-js/internals/well-known-symbol.js");
var V8_VERSION = __webpack_require__(/*! ../internals/engine-v8-version */ "./node_modules/core-js/internals/engine-v8-version.js");

var SPECIES = wellKnownSymbol('species');

module.exports = function (METHOD_NAME) {
  // We can't use this feature detection in V8 since it causes
  // deoptimization and serious performance degradation
  // https://github.com/zloirock/core-js/issues/677
  return V8_VERSION >= 51 || !fails(function () {
    var array = [];
    var constructor = array.constructor = {};
    constructor[SPECIES] = function () {
      return { foo: 1 };
    };
    return array[METHOD_NAME](Boolean).foo !== 1;
  });
};


/***/ }),

/***/ "./node_modules/core-js/internals/does-not-exceed-safe-integer.js":
/*!************************************************************************!*\
  !*** ./node_modules/core-js/internals/does-not-exceed-safe-integer.js ***!
  \************************************************************************/
/***/ ((module) => {

var $TypeError = TypeError;
var MAX_SAFE_INTEGER = 0x1FFFFFFFFFFFFF; // 2 ** 53 - 1 == 9007199254740991

module.exports = function (it) {
  if (it > MAX_SAFE_INTEGER) throw $TypeError('Maximum allowed index exceeded');
  return it;
};


/***/ }),

/***/ "./node_modules/core-js/modules/es.array.concat.js":
/*!*********************************************************!*\
  !*** ./node_modules/core-js/modules/es.array.concat.js ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

"use strict";

var $ = __webpack_require__(/*! ../internals/export */ "./node_modules/core-js/internals/export.js");
var fails = __webpack_require__(/*! ../internals/fails */ "./node_modules/core-js/internals/fails.js");
var isArray = __webpack_require__(/*! ../internals/is-array */ "./node_modules/core-js/internals/is-array.js");
var isObject = __webpack_require__(/*! ../internals/is-object */ "./node_modules/core-js/internals/is-object.js");
var toObject = __webpack_require__(/*! ../internals/to-object */ "./node_modules/core-js/internals/to-object.js");
var lengthOfArrayLike = __webpack_require__(/*! ../internals/length-of-array-like */ "./node_modules/core-js/internals/length-of-array-like.js");
var doesNotExceedSafeInteger = __webpack_require__(/*! ../internals/does-not-exceed-safe-integer */ "./node_modules/core-js/internals/does-not-exceed-safe-integer.js");
var createProperty = __webpack_require__(/*! ../internals/create-property */ "./node_modules/core-js/internals/create-property.js");
var arraySpeciesCreate = __webpack_require__(/*! ../internals/array-species-create */ "./node_modules/core-js/internals/array-species-create.js");
var arrayMethodHasSpeciesSupport = __webpack_require__(/*! ../internals/array-method-has-species-support */ "./node_modules/core-js/internals/array-method-has-species-support.js");
var wellKnownSymbol = __webpack_require__(/*! ../internals/well-known-symbol */ "./node_modules/core-js/internals/well-known-symbol.js");
var V8_VERSION = __webpack_require__(/*! ../internals/engine-v8-version */ "./node_modules/core-js/internals/engine-v8-version.js");

var IS_CONCAT_SPREADABLE = wellKnownSymbol('isConcatSpreadable');

// We can't use this feature detection in V8 since it causes
// deoptimization and serious performance degradation
// https://github.com/zloirock/core-js/issues/679
var IS_CONCAT_SPREADABLE_SUPPORT = V8_VERSION >= 51 || !fails(function () {
  var array = [];
  array[IS_CONCAT_SPREADABLE] = false;
  return array.concat()[0] !== array;
});

var isConcatSpreadable = function (O) {
  if (!isObject(O)) return false;
  var spreadable = O[IS_CONCAT_SPREADABLE];
  return spreadable !== undefined ? !!spreadable : isArray(O);
};

var FORCED = !IS_CONCAT_SPREADABLE_SUPPORT || !arrayMethodHasSpeciesSupport('concat');

// `Array.prototype.concat` method
// https://tc39.es/ecma262/#sec-array.prototype.concat
// with adding support of @@isConcatSpreadable and @@species
$({ target: 'Array', proto: true, arity: 1, forced: FORCED }, {
  // eslint-disable-next-line no-unused-vars -- required for `.length`
  concat: function concat(arg) {
    var O = toObject(this);
    var A = arraySpeciesCreate(O, 0);
    var n = 0;
    var i, k, length, len, E;
    for (i = -1, length = arguments.length; i < length; i++) {
      E = i === -1 ? O : arguments[i];
      if (isConcatSpreadable(E)) {
        len = lengthOfArrayLike(E);
        doesNotExceedSafeInteger(n + len);
        for (k = 0; k < len; k++, n++) if (k in E) createProperty(A, n, E[k]);
      } else {
        doesNotExceedSafeInteger(n + 1);
        createProperty(A, n++, E);
      }
    }
    A.length = n;
    return A;
  }
});


/***/ }),

/***/ "./node_modules/core-js/modules/es.array.find.js":
/*!*******************************************************!*\
  !*** ./node_modules/core-js/modules/es.array.find.js ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

"use strict";

var $ = __webpack_require__(/*! ../internals/export */ "./node_modules/core-js/internals/export.js");
var $find = (__webpack_require__(/*! ../internals/array-iteration */ "./node_modules/core-js/internals/array-iteration.js").find);
var addToUnscopables = __webpack_require__(/*! ../internals/add-to-unscopables */ "./node_modules/core-js/internals/add-to-unscopables.js");

var FIND = 'find';
var SKIPS_HOLES = true;

// Shouldn't skip holes
// eslint-disable-next-line es/no-array-prototype-find -- testing
if (FIND in []) Array(1)[FIND](function () { SKIPS_HOLES = false; });

// `Array.prototype.find` method
// https://tc39.es/ecma262/#sec-array.prototype.find
$({ target: 'Array', proto: true, forced: SKIPS_HOLES }, {
  find: function find(callbackfn /* , that = undefined */) {
    return $find(this, callbackfn, arguments.length > 1 ? arguments[1] : undefined);
  }
});

// https://tc39.es/ecma262/#sec-array.prototype-@@unscopables
addToUnscopables(FIND);


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


/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ __webpack_require__.O(0, ["vendors-node_modules_core-js_internals_export_js","vendors-node_modules_core-js_internals_classof_js-node_modules_core-js_internals_is-array_js--e42e13","vendors-node_modules_core-js_internals_add-to-unscopables_js-node_modules_core-js_internals_a-dbf12d"], () => (__webpack_exec__("./assets/js/panels.js")));
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ }
]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUFDQTtBQUNBLFFBQVE7QUFDUjtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0giLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9hc3NldHMvanMvcGFuZWxzLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9jb3JlLWpzL2ludGVybmFscy9hcnJheS1tZXRob2QtaGFzLXNwZWNpZXMtc3VwcG9ydC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvY29yZS1qcy9pbnRlcm5hbHMvZG9lcy1ub3QtZXhjZWVkLXNhZmUtaW50ZWdlci5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvY29yZS1qcy9tb2R1bGVzL2VzLmFycmF5LmNvbmNhdC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvY29yZS1qcy9tb2R1bGVzL2VzLmFycmF5LmZpbmQuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbW9kdWxlcy9lcy5mdW5jdGlvbi5uYW1lLmpzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCAkIGZyb20gJ2pxdWVyeSc7XHJcblxyXG4kKGZ1bmN0aW9uKCkge1xyXG4gICAgJChcIi5zaWRlYmFyLWl0ZW1cIikub24oJ2NsaWNrJywgZnVuY3Rpb24oZSl7XHJcbiAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgICAgIGxldCB0YXJnZXQgPSAkKHRoaXMpLmF0dHIoJ2hyZWYnKTtcclxuICAgICAgICAkKCcuY29udGVudCcpLm5vdCh0YXJnZXQpLmhpZGUoKTtcclxuICAgICAgICAkKHRhcmdldCkuZmFkZUluKDYwMCk7XHJcbiAgICB9KTtcclxuXHJcblxyXG4gICAgJCgnI3RvZ2dsZS1sZWZ0LW1lbnUnKS5vbignY2xpY2snICxmdW5jdGlvbigpIHtcclxuICAgICAgICBpZiAoJCgnI2xlZnQtbWVudScpLmhhc0NsYXNzKCdzbWFsbC1sZWZ0LW1lbnUnKSkge1xyXG4gICAgICAgICAgICAkKCcjbGVmdC1tZW51JykucmVtb3ZlQ2xhc3MoJ3NtYWxsLWxlZnQtbWVudScpO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICQoJyNsZWZ0LW1lbnUnKS5hZGRDbGFzcygnc21hbGwtbGVmdC1tZW51Jyk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgICQoJyNsb2dvJykudG9nZ2xlQ2xhc3MoJ3NtYWxsLWxlZnQtbWVudScpO1xyXG4gICAgICAgICQoJyNwYWdlLWNvbnRhaW5lcicpLnRvZ2dsZUNsYXNzKCdzbWFsbC1sZWZ0LW1lbnUnKTtcclxuICAgICAgICAkKCcjaGVhZGVyIC5oZWFkZXItbGVmdCcpLnRvZ2dsZUNsYXNzKCdzbWFsbC1sZWZ0LW1lbnUnKTtcclxuXHJcbiAgICAgICAgJCgnI2xvZ28gLmJpZy1sb2dvJykudG9nZ2xlKCczMDAnKTtcclxuICAgICAgICAkKCcjbG9nbyAuc21hbGwtbG9nbycpLnRvZ2dsZSgnMzAwJyk7XHJcbiAgICAgICAgJCgnI2xvZ28nKS50b2dnbGVDbGFzcygncC0wIHBsLTEnKTtcclxuICAgICAgICAkKCdsaSBoMycpLnRvZ2dsZUNsYXNzKCdoaWRkZW4nKTtcclxuICAgIH0pO1xyXG5cclxuICAgICQoZG9jdW1lbnQpLm9uKCdtb3VzZW92ZXInLCAnI2xlZnQtbWVudS5zbWFsbC1sZWZ0LW1lbnUgPiB1bCA+IGxpJywgZnVuY3Rpb24oKSB7XHJcbiAgICAgICAgaWYgKCEkKHRoaXMpLmhhc0NsYXNzKCdoYXMtc3ViJykpIHtcclxuICAgICAgICAgICAgbGV0IGxhYmVsID0gJCh0aGlzKS5maW5kKCdzcGFuJykudGV4dCgpO1xyXG4gICAgICAgICAgICBsZXQgcG9zaXRpb24gPSAkKHRoaXMpLnBvc2l0aW9uKCk7XHJcbiAgICAgICAgICAgICQoJyNzaG93LWxhYmxlJykuY3NzKHtcclxuICAgICAgICAgICAgICAgICd0b3AnOiBwb3NpdGlvbi50b3AgKyA3OSxcclxuICAgICAgICAgICAgICAgICdsZWZ0JzogcG9zaXRpb24ubGVmdCArIDU5LFxyXG4gICAgICAgICAgICAgICAgJ29wYWNpdHknOiAxLFxyXG4gICAgICAgICAgICAgICAgJ3Zpc2liaWxpdHknOiAndmlzaWJsZSdcclxuICAgICAgICAgICAgfSk7XHJcblxyXG4gICAgICAgICAgICAkKCcjc2hvdy1sYWJsZScpLnRleHQobGFiZWwpO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIGxldCBwb3NpdGlvbiA9ICQodGhpcykucG9zaXRpb24oKTtcclxuICAgICAgICAgICAgJCh0aGlzKS5maW5kKCd1bCcpLmFkZENsYXNzKCdvcGVuJyk7XHJcblxyXG4gICAgICAgICAgICBpZiAoJCh0aGlzKS5maW5kKCd1bCcpLmhhc0NsYXNzKCdvcGVuJykpIHtcclxuICAgICAgICAgICAgICAgIGNvbnN0IGhlaWdodCA9IDQ3O1xyXG4gICAgICAgICAgICAgICAgbGV0IGNvdW50X3N1Ym1lbnVfbGkgPSAkKHRoaXMpLmZpbmQoJ3VsID4gbGknKS5sZW5ndGg7XHJcbiAgICAgICAgICAgICAgICBpZiAocG9zaXRpb24udG9wID49IDU4MCkge1xyXG4gICAgICAgICAgICAgICAgICAgIGxldCBzdHlsZSA9IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgJ3RvcCc6IChwb3NpdGlvbi50b3AgKyAxMDApIC0gKGhlaWdodCAqIGNvdW50X3N1Ym1lbnVfbGkpLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAnaGVpZ2h0JzogaGVpZ2h0ICogY291bnRfc3VibWVudV9saSArICdweCdcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgJCh0aGlzKS5maW5kKCd1bC5vcGVuJykuY3NzKHN0eWxlKTtcclxuICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgbGV0IHN0eWxlID0ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAndG9wJzogcG9zaXRpb24udG9wICsgNzksXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICdoZWlnaHQnOiBoZWlnaHQgKiBjb3VudF9zdWJtZW51X2xpICsgJ3B4J1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgJCh0aGlzKS5maW5kKCd1bC5vcGVuJykuY3NzKHN0eWxlKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH0pO1xyXG5cclxuICAgICQoZG9jdW1lbnQpLm9uKCdtb3VzZW91dCcsICcjbGVmdC1tZW51LnNtYWxsLWxlZnQtbWVudSBsaSBhJywgZnVuY3Rpb24oZSkge1xyXG4gICAgICAgICQoJyNzaG93LWxhYmxlJykuY3NzKHtcclxuICAgICAgICAgICAgJ29wYWNpdHknOiAwLFxyXG4gICAgICAgICAgICAndmlzaWJpbGl0eSc6ICdoaWRkZW4nXHJcbiAgICAgICAgfSk7XHJcbiAgICB9KTtcclxuXHJcbiAgICAkKGRvY3VtZW50KS5vbignbW91c2VvdXQnLCAnI2xlZnQtbWVudS5zbWFsbC1sZWZ0LW1lbnUgbGkuaGFzLXN1YicsIGZ1bmN0aW9uKGUpIHtcclxuICAgICAgICAkKHRoaXMpLmZpbmQoJ3VsJykuY3NzKHtcclxuICAgICAgICAgICAgJ2hlaWdodCc6IDAsXHJcbiAgICAgICAgfSk7XHJcbiAgICB9KTtcclxuXHJcbiAgICAkKHdpbmRvdykucmVzaXplKGZ1bmN0aW9uKCkge1xyXG4gICAgICAgIHdpbmRvd1Jlc2l6ZSgpO1xyXG4gICAgfSk7XHJcblxyXG4gICAgJCh3aW5kb3cpLm9uKCdsb2FkJywgZnVuY3Rpb24oKSB7XHJcbiAgICAgICAgd2luZG93UmVzaXplKCk7XHJcbiAgICB9KTtcclxuXHJcbiAgICAkKCcjbGVmdC1tZW51IGxpLmhhcy1zdWIgPiBhJykub24oJ2NsaWNrJywgZnVuY3Rpb24oKSB7XHJcbiAgICAgICAgbGV0IF90aGlzID0gJCh0aGlzKS5wYXJlbnQoKTtcclxuXHJcbiAgICAgICAgX3RoaXMuZmluZCgndWwnKS50b2dnbGVDbGFzcygnb3BlbicpO1xyXG4gICAgICAgICQodGhpcykuY2xvc2VzdCgnbGknKS50b2dnbGVDbGFzcygncm90YXRlJyk7XHJcblxyXG4gICAgICAgIF90aGlzLmNsb3Nlc3QoJyNsZWZ0LW1lbnUnKS5maW5kKCcub3BlbicpLm5vdChfdGhpcy5maW5kKCd1bCcpKS5yZW1vdmVDbGFzcygnb3BlbicpO1xyXG4gICAgICAgIF90aGlzLmNsb3Nlc3QoJyNsZWZ0LW1lbnUnKS5maW5kKCcucm90YXRlJykubm90KCQodGhpcykuY2xvc2VzdCgnbGknKSkucmVtb3ZlQ2xhc3MoJ3JvdGF0ZScpO1xyXG4gICAgICAgIF90aGlzLmNsb3Nlc3QoJyNsZWZ0LW1lbnUnKS5maW5kKCd1bCcpLmNzcygnaGVpZ2h0JywgMCk7XHJcblxyXG4gICAgICAgIGlmIChfdGhpcy5maW5kKCd1bCcpLmhhc0NsYXNzKCdvcGVuJykpIHtcclxuICAgICAgICAgICAgY29uc3QgaGVpZ2h0ID0gNDc7XHJcbiAgICAgICAgICAgIGxldCBjb3VudF9zdWJtZW51X2xpID0gX3RoaXMuZmluZCgndWwgPiBsaScpLmxlbmd0aDtcclxuICAgICAgICAgICAgX3RoaXMuZmluZCgndWwnKS5jc3MoJ2hlaWdodCcsIGhlaWdodCAqIGNvdW50X3N1Ym1lbnVfbGkgKyAncHgnKTtcclxuICAgICAgICB9XHJcbiAgICB9KTtcclxuXHJcbiAgICAkKCcjbGVmdC1tZW51IHVsIGxpJykub24oJ2NsaWNrJywgZnVuY3Rpb24oKSB7XHJcbiAgICAgICAgbGV0IGNsaWNrZWRJZCA9ICQodGhpcykuYXR0cignaWQnKTtcclxuICAgIFxyXG4gICAgICAgIGxldCBjb250ZW50SWQgPSAnY29udGVudC0nICsgY2xpY2tlZElkO1xyXG4gICAgXHJcbiAgICAgICAgJCgnI2xlZnQtbWVudSB1bCBsaSwgLnBhZ2UnKS5yZW1vdmVDbGFzcygnYWN0aXZlJyk7XHJcbiAgICBcclxuICAgICAgICAkKHRoaXMpLmFkZENsYXNzKCdhY3RpdmUnKTtcclxuICAgICAgICAkKCcjJyArIGNvbnRlbnRJZCkuYWRkQ2xhc3MoJ2FjdGl2ZScpO1xyXG4gICAgfSk7XHJcblxyXG4gICAgJCgnLnRyYXNoLXVzZXInKS5vbignY2xpY2snLCBmdW5jdGlvbigpIHtcclxuICAgICAgICBsZXQgdXNlcklkID0gJCh0aGlzKS5hdHRyKCdkYXRhLWlkJyk7XHJcbiAgICBcclxuICAgICAgICBsZXQgaXNDb25maXJtZWQgPSBjb25maXJtKCfCv0VzdMOhcyBzZWd1cm8gZGUgcXVlIHF1aWVyZXMgZWxpbWluYXIgZXN0ZSB1c3VhcmlvPycpO1xyXG4gICAgXHJcbiAgICAgICAgaWYgKGlzQ29uZmlybWVkKSB7XHJcbiAgICAgICAgICAgICQuYWpheCh7XHJcbiAgICAgICAgICAgICAgICB1cmw6ICcvZGVsZXRlX3VzZXIvJyArIHVzZXJJZCxcclxuICAgICAgICAgICAgICAgIHR5cGU6ICdERUxFVEUnLFxyXG4gICAgICAgICAgICAgICAgc3VjY2VzczogZnVuY3Rpb24ocmVzdWx0KSB7XHJcbiAgICAgICAgICAgICAgICAgICAgJCgnYnV0dG9uW2RhdGEtaWQ9XCInICsgdXNlcklkICsgJ1wiXScpLnBhcmVudHMoJ3RyJykucmVtb3ZlKCk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH1cclxuICAgIH0pO1xyXG5cclxuICAgICQoXCIjYWRkQ2F0ZWdvcnlcIikub24oJ2NsaWNrJywgZnVuY3Rpb24oKXtcclxuICAgICAgICBsZXQgY2F0ZWdvcnlOYW1lID0gJChcIiNjYXRlZ29yeVwiKS52YWwoKTtcclxuICAgICAgICBpZihjYXRlZ29yeU5hbWUpIHtcclxuICAgICAgICAgICAgJC5hamF4KHtcclxuICAgICAgICAgICAgICAgIHVybDogXCIvcmVnaXN0ZXIvY2F0ZWdvcmllc1wiLFxyXG4gICAgICAgICAgICAgICAgdHlwZTogXCJQT1NUXCIsXHJcbiAgICAgICAgICAgICAgICBkYXRhOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgY2F0ZWdvcnk6IGNhdGVnb3J5TmFtZVxyXG4gICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgIHN1Y2Nlc3M6IGZ1bmN0aW9uIChkYXRhKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgbGV0IG5ld1JvdyA9ICQoXCI8dHI+XCIpO1xyXG4gICAgICAgICAgICAgICAgICAgIGxldCBjb2xzID0gXCJcIjtcclxuICAgIFxyXG4gICAgICAgICAgICAgICAgICAgIGNvbHMgKz0gJzx0ZCBkYXRhLWxhYmVsPVwiSURcIj4nICsgZGF0YS5pZCArICc8L3RkPic7XHJcbiAgICAgICAgICAgICAgICAgICAgY29scyArPSAnPHRkIGRhdGEtbGFiZWw9XCJOYW1lXCI+JyArIGRhdGEuY2F0ZWdvcnkgKyAnPC90ZD4nO1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbHMgKz0gYDx0ZCBkYXRhLWxhYmVsPVwiXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxidXR0b24gY2xhc3M9XCJidG4gZWRpdC1jYXRlZ29yeVwiIGRhdGEtaWQ9XCIke2RhdGEuaWR9XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzcz1cIm1hdGVyaWFsLWljb25zXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZWRpdFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiBjbGFzcz1cImJ0biB0cmFzaC1jYXRlZ29yeVwiIGRhdGEtaWQ9XCIke2RhdGEuaWR9XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzcz1cIm1hdGVyaWFsLWljb25zXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZGVsZXRlX2ZvcmV2ZXJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9idXR0b24+XHJcbiAgICAgICAgICAgICAgICAgICAgPC90ZD5gO1xyXG4gICAgXHJcbiAgICAgICAgICAgICAgICAgICAgbmV3Um93LmFwcGVuZChjb2xzKTtcclxuICAgICAgICAgICAgICAgICAgICAkKFwidGFibGVcIikuYXBwZW5kKG5ld1Jvdyk7XHJcbiAgICAgICAgICAgICAgICAgICAgJChcIiNjYXRlZ29yeVwiKS52YWwoJycpO1xyXG4gICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgIGVycm9yOiBmdW5jdGlvbiAoeGhyLCBhamF4T3B0aW9ucywgdGhyb3duRXJyb3IpIHtcclxuICAgICAgICAgICAgICAgICAgICBhbGVydCh0aHJvd25FcnJvcik7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIGFsZXJ0KCdQbGVhc2UgZW50ZXIgYSBjYXRlZ29yeSBuYW1lJyk7XHJcbiAgICAgICAgfVxyXG4gICAgfSk7XHJcblxyXG4gICAgJCgnLnRyYXNoLWNhdGVnb3J5Jykub24oJ2NsaWNrJywgZnVuY3Rpb24oKSB7XHJcbiAgICAgICAgbGV0IHVzZXJJZCA9ICQodGhpcykuYXR0cignZGF0YS1pZCcpO1xyXG4gICAgXHJcbiAgICAgICAgbGV0IGlzQ29uZmlybWVkID0gY29uZmlybSgnwr9Fc3TDoXMgc2VndXJvIGRlIHF1ZSBxdWllcmVzIGVsaW1pbmFyIGVzdGUgdXN1YXJpbz8nKTtcclxuICAgIFxyXG4gICAgICAgIGlmIChpc0NvbmZpcm1lZCkge1xyXG4gICAgICAgICAgICAkLmFqYXgoe1xyXG4gICAgICAgICAgICAgICAgdXJsOiAnL2RlbGV0ZV9jYXRlZ29yeS8nICsgdXNlcklkLFxyXG4gICAgICAgICAgICAgICAgdHlwZTogJ0RFTEVURScsXHJcbiAgICAgICAgICAgICAgICBzdWNjZXNzOiBmdW5jdGlvbihyZXN1bHQpIHtcclxuICAgICAgICAgICAgICAgICAgICAkKCdidXR0b25bZGF0YS1pZD1cIicgKyB1c2VySWQgKyAnXCJdJykucGFyZW50cygndHInKS5yZW1vdmUoKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfVxyXG4gICAgfSk7XHJcblxyXG4gICAgJCgnLnJlc2VuZC1idG4nKS5jbGljayhmdW5jdGlvbigpIHtcclxuICAgICAgICB2YXIgdXNlcklkID0gJCh0aGlzKS5kYXRhKCdpZCcpO1xyXG4gICAgICAgICQucG9zdCh7XHJcbiAgICAgICAgICAgIHVybDogJy9yZXNlbmRfZW1haWwvJyArIHVzZXJJZCxcclxuICAgICAgICAgICAgc3VjY2VzczogZnVuY3Rpb24ocmVzcG9uc2UpIHtcclxuICAgICAgICAgICAgICAgIGFsZXJ0KCdWZXJpZmljYXRpb24gZW1haWwgc2VudCBzdWNjZXNzZnVsbHkuJyk7XHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIGVycm9yOiBmdW5jdGlvbihlcnJvcikge1xyXG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coZXJyb3IpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSk7XHJcbiAgICB9KTtcclxuXHJcbiAgICAkKCcudHJhc2gtY29udHJhY3QnKS5vbignY2xpY2snLCBmdW5jdGlvbihldmVudCkge1xyXG4gICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICAgICAgdmFyIGNvbnRyYWN0SWQgPSAkKHRoaXMpLmRhdGEoJ2lkJyk7XHJcblxyXG4gICAgICAgIC8vIFJlYWxpemFyIGxhIHNvbGljaXR1ZCBBSkFYXHJcbiAgICAgICAgJC5hamF4KHtcclxuICAgICAgICAgICAgdXJsOiAnL3JlamVjdC9jb250cmFjdC8nICsgY29udHJhY3RJZCxcclxuICAgICAgICAgICAgbWV0aG9kOiAnUE9TVCcsXHJcbiAgICAgICAgICAgIHN1Y2Nlc3M6IGZ1bmN0aW9uKHJlc3BvbnNlKSB7XHJcbiAgICAgICAgICAgICAgICAvL1xyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICBlcnJvcjogZnVuY3Rpb24oeGhyLCBzdGF0dXMsIGVycm9yKSB7XHJcbiAgICAgICAgICAgICAgICAvLyBcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pO1xyXG4gICAgfSk7XHJcblxyXG4gICAgJCgnI2FkZEFkbWluJykub24oJ2NsaWNrJywgZnVuY3Rpb24oZSkge1xyXG4gICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuICAgICAgICB2YXIgZm9ybURhdGEgPSAkKCdmb3JtJykuc2VyaWFsaXplKCk7XHJcbiAgICAgICAgXHJcbiAgICAgICAgJC5hamF4KHtcclxuICAgICAgICAgICAgdXJsOiAnL3JlZ2lzdGVyL2FkbWluJyxcclxuICAgICAgICAgICAgbWV0aG9kOiAnUE9TVCcsXHJcbiAgICAgICAgICAgIGRhdGE6IGZvcm1EYXRhLFxyXG4gICAgICAgICAgICBzdWNjZXNzOiBmdW5jdGlvbihyZXNwb25zZSkge1xyXG4gICAgICAgICAgICAgICAgaWYgKHJlc3BvbnNlLnN1Y2Nlc3MpIHtcclxuICAgICAgICAgICAgICAgICAgICBsb2NhdGlvbi5yZWxvYWQoKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgZXJyb3I6IGZ1bmN0aW9uKHhociwgc3RhdHVzLCBlcnJvcikge1xyXG4gICAgICAgICAgICAgICAgY29uc29sZS5lcnJvcihlcnJvcik7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KTtcclxuICAgIH0pO1xyXG4gICAgXHJcbiAgICBmdW5jdGlvbiB1cGRhdGVVc2VyVGFibGUoYWRtaW4pIHtcclxuICAgICAgICB2YXIgcm93ID0gJCgnPHRyPicpO1xyXG4gICAgICAgIHJvdy5hcHBlbmQoJCgnPHRkPicpLnRleHQoYWRtaW4uaWQpKTtcclxuICAgICAgICByb3cuYXBwZW5kKCQoJzx0ZD4nKS50ZXh0KGFkbWluLm5hbWUpKTtcclxuICAgICAgICByb3cuYXBwZW5kKCQoJzx0ZD4nKS50ZXh0KGFkbWluLnN1cm5hbWUpKTtcclxuICAgICAgICByb3cuYXBwZW5kKCQoJzx0ZD4nKS50ZXh0KGFkbWluLmVtYWlsKSk7XHJcbiAgICAgICAgcm93LmFwcGVuZCgkKCc8dGQ+JykuYWRkQ2xhc3MoJ21pbi1oJykudGV4dChhZG1pbi50ZWxlcGhvbmUpKTtcclxuICAgICAgICByb3cuYXBwZW5kKCQoJzx0ZD4nKS50ZXh0KGFkbWluLnJvbGVzWzBdKSk7XHJcbiAgICAgICAgcm93LmFwcGVuZCgkKCc8dGQ+JykuYWRkQ2xhc3MoYWRtaW4uaXNWZXJpZmllZCA/ICd2ZXJpZmllZCcgOiAnJykpO1xyXG4gICAgICAgIHJvdy5hcHBlbmQoJCgnPHRkPicpLmh0bWwoYFxyXG4gICAgICAgICAgICA8YnV0dG9uIGNsYXNzPVwiYnRuIGVkaXQtdXNlclwiIGRhdGEtaWQ9XCIke2FkbWluLmlkfVwiPlxyXG4gICAgICAgICAgICAgICAgPHNwYW4gY2xhc3M9XCJtYXRlcmlhbC1pY29uc1wiPmVkaXQ8L3NwYW4+XHJcbiAgICAgICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICAgICAgICA8YnV0dG9uIGNsYXNzPVwiYnRuIHRyYXNoLXVzZXJcIiBkYXRhLWlkPVwiJHthZG1pbi5pZH1cIj5cclxuICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzPVwibWF0ZXJpYWwtaWNvbnNcIj5kZWxldGVfZm9yZXZlcjwvc3Bhbj5cclxuICAgICAgICAgICAgPC9idXR0b24+XHJcbiAgICAgICAgYCkpO1xyXG4gICAgICAgIFxyXG4gICAgICAgICQoJ3RhYmxlIHRib2R5JykuYXBwZW5kKHJvdyk7XHJcbiAgICB9XHJcblxyXG4gICAgJCgnI3VwZGF0ZUNhdGVnb3J5Rm9ybScpLm9uKCdzdWJtaXQnLCBmdW5jdGlvbihldmVudCkge1xyXG4gICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICAgICAgXHJcbiAgICAgICAgdmFyIGNhdGVnb3J5SWQgPSAkKHRoaXMpLmRhdGEoJ2NhdGVnb3J5LWlkJyk7XHJcbiAgICAgICAgdmFyIGZvcm1EYXRhID0gJCh0aGlzKS5zZXJpYWxpemUoKTtcclxuICAgICAgICBcclxuICAgICAgICAkLmFqYXgoe1xyXG4gICAgICAgICAgICB1cmw6ICcvdXBkYXRlX2NhdGVnb3J5LycgKyBjYXRlZ29yeUlkLFxyXG4gICAgICAgICAgICBtZXRob2Q6ICdQVVQnLFxyXG4gICAgICAgICAgICBkYXRhOiBmb3JtRGF0YSxcclxuICAgICAgICAgICAgc3VjY2VzczogZnVuY3Rpb24ocmVzcG9uc2UpIHtcclxuICAgICAgICAgICAgICAgIGlmIChyZXNwb25zZS5zdWNjZXNzKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgbG9jYXRpb24ucmVsb2FkKCk7XHJcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IocmVzcG9uc2UubWVzc2FnZSk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIGVycm9yOiBmdW5jdGlvbih4aHIsIHN0YXR1cywgZXJyb3IpIHtcclxuICAgICAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoZXJyb3IpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSk7XHJcbiAgICB9KTtcclxuXHJcblxyXG4gICAgZnVuY3Rpb24gd2luZG93UmVzaXplKCkge1xyXG4gICAgICAgIGxldCB3aWR0aCA9ICQod2luZG93KS53aWR0aCgpO1xyXG4gICAgICAgIGlmICh3aWR0aCA8PSA5OTIpIHtcclxuICAgICAgICAgICAgJCgnI2xlZnQtbWVudScpLmFkZENsYXNzKCdzbWFsbC1sZWZ0LW1lbnUnKTtcclxuICAgICAgICAgICAgJCgnI2xvZ28nKS5hZGRDbGFzcygnc21hbGwtbGVmdC1tZW51IHAtMCBwbC0xJyk7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgJCgnI2xlZnQtbWVudScpLnJlbW92ZUNsYXNzKCdzbWFsbC1sZWZ0LW1lbnUnKTtcclxuICAgICAgICAgICAgJCgnI2xvZ28nKS5yZW1vdmVDbGFzcygnc21hbGwtbGVmdC1tZW51IHAtMCBwbC0xJyk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxufSk7XHJcbiIsInZhciBmYWlscyA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9mYWlscycpO1xudmFyIHdlbGxLbm93blN5bWJvbCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy93ZWxsLWtub3duLXN5bWJvbCcpO1xudmFyIFY4X1ZFUlNJT04gPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvZW5naW5lLXY4LXZlcnNpb24nKTtcblxudmFyIFNQRUNJRVMgPSB3ZWxsS25vd25TeW1ib2woJ3NwZWNpZXMnKTtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoTUVUSE9EX05BTUUpIHtcbiAgLy8gV2UgY2FuJ3QgdXNlIHRoaXMgZmVhdHVyZSBkZXRlY3Rpb24gaW4gVjggc2luY2UgaXQgY2F1c2VzXG4gIC8vIGRlb3B0aW1pemF0aW9uIGFuZCBzZXJpb3VzIHBlcmZvcm1hbmNlIGRlZ3JhZGF0aW9uXG4gIC8vIGh0dHBzOi8vZ2l0aHViLmNvbS96bG9pcm9jay9jb3JlLWpzL2lzc3Vlcy82NzdcbiAgcmV0dXJuIFY4X1ZFUlNJT04gPj0gNTEgfHwgIWZhaWxzKGZ1bmN0aW9uICgpIHtcbiAgICB2YXIgYXJyYXkgPSBbXTtcbiAgICB2YXIgY29uc3RydWN0b3IgPSBhcnJheS5jb25zdHJ1Y3RvciA9IHt9O1xuICAgIGNvbnN0cnVjdG9yW1NQRUNJRVNdID0gZnVuY3Rpb24gKCkge1xuICAgICAgcmV0dXJuIHsgZm9vOiAxIH07XG4gICAgfTtcbiAgICByZXR1cm4gYXJyYXlbTUVUSE9EX05BTUVdKEJvb2xlYW4pLmZvbyAhPT0gMTtcbiAgfSk7XG59O1xuIiwidmFyICRUeXBlRXJyb3IgPSBUeXBlRXJyb3I7XG52YXIgTUFYX1NBRkVfSU5URUdFUiA9IDB4MUZGRkZGRkZGRkZGRkY7IC8vIDIgKiogNTMgLSAxID09IDkwMDcxOTkyNTQ3NDA5OTFcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXQpIHtcbiAgaWYgKGl0ID4gTUFYX1NBRkVfSU5URUdFUikgdGhyb3cgJFR5cGVFcnJvcignTWF4aW11bSBhbGxvd2VkIGluZGV4IGV4Y2VlZGVkJyk7XG4gIHJldHVybiBpdDtcbn07XG4iLCIndXNlIHN0cmljdCc7XG52YXIgJCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9leHBvcnQnKTtcbnZhciBmYWlscyA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9mYWlscycpO1xudmFyIGlzQXJyYXkgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvaXMtYXJyYXknKTtcbnZhciBpc09iamVjdCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9pcy1vYmplY3QnKTtcbnZhciB0b09iamVjdCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy90by1vYmplY3QnKTtcbnZhciBsZW5ndGhPZkFycmF5TGlrZSA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9sZW5ndGgtb2YtYXJyYXktbGlrZScpO1xudmFyIGRvZXNOb3RFeGNlZWRTYWZlSW50ZWdlciA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9kb2VzLW5vdC1leGNlZWQtc2FmZS1pbnRlZ2VyJyk7XG52YXIgY3JlYXRlUHJvcGVydHkgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvY3JlYXRlLXByb3BlcnR5Jyk7XG52YXIgYXJyYXlTcGVjaWVzQ3JlYXRlID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2FycmF5LXNwZWNpZXMtY3JlYXRlJyk7XG52YXIgYXJyYXlNZXRob2RIYXNTcGVjaWVzU3VwcG9ydCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9hcnJheS1tZXRob2QtaGFzLXNwZWNpZXMtc3VwcG9ydCcpO1xudmFyIHdlbGxLbm93blN5bWJvbCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy93ZWxsLWtub3duLXN5bWJvbCcpO1xudmFyIFY4X1ZFUlNJT04gPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvZW5naW5lLXY4LXZlcnNpb24nKTtcblxudmFyIElTX0NPTkNBVF9TUFJFQURBQkxFID0gd2VsbEtub3duU3ltYm9sKCdpc0NvbmNhdFNwcmVhZGFibGUnKTtcblxuLy8gV2UgY2FuJ3QgdXNlIHRoaXMgZmVhdHVyZSBkZXRlY3Rpb24gaW4gVjggc2luY2UgaXQgY2F1c2VzXG4vLyBkZW9wdGltaXphdGlvbiBhbmQgc2VyaW91cyBwZXJmb3JtYW5jZSBkZWdyYWRhdGlvblxuLy8gaHR0cHM6Ly9naXRodWIuY29tL3psb2lyb2NrL2NvcmUtanMvaXNzdWVzLzY3OVxudmFyIElTX0NPTkNBVF9TUFJFQURBQkxFX1NVUFBPUlQgPSBWOF9WRVJTSU9OID49IDUxIHx8ICFmYWlscyhmdW5jdGlvbiAoKSB7XG4gIHZhciBhcnJheSA9IFtdO1xuICBhcnJheVtJU19DT05DQVRfU1BSRUFEQUJMRV0gPSBmYWxzZTtcbiAgcmV0dXJuIGFycmF5LmNvbmNhdCgpWzBdICE9PSBhcnJheTtcbn0pO1xuXG52YXIgaXNDb25jYXRTcHJlYWRhYmxlID0gZnVuY3Rpb24gKE8pIHtcbiAgaWYgKCFpc09iamVjdChPKSkgcmV0dXJuIGZhbHNlO1xuICB2YXIgc3ByZWFkYWJsZSA9IE9bSVNfQ09OQ0FUX1NQUkVBREFCTEVdO1xuICByZXR1cm4gc3ByZWFkYWJsZSAhPT0gdW5kZWZpbmVkID8gISFzcHJlYWRhYmxlIDogaXNBcnJheShPKTtcbn07XG5cbnZhciBGT1JDRUQgPSAhSVNfQ09OQ0FUX1NQUkVBREFCTEVfU1VQUE9SVCB8fCAhYXJyYXlNZXRob2RIYXNTcGVjaWVzU3VwcG9ydCgnY29uY2F0Jyk7XG5cbi8vIGBBcnJheS5wcm90b3R5cGUuY29uY2F0YCBtZXRob2Rcbi8vIGh0dHBzOi8vdGMzOS5lcy9lY21hMjYyLyNzZWMtYXJyYXkucHJvdG90eXBlLmNvbmNhdFxuLy8gd2l0aCBhZGRpbmcgc3VwcG9ydCBvZiBAQGlzQ29uY2F0U3ByZWFkYWJsZSBhbmQgQEBzcGVjaWVzXG4kKHsgdGFyZ2V0OiAnQXJyYXknLCBwcm90bzogdHJ1ZSwgYXJpdHk6IDEsIGZvcmNlZDogRk9SQ0VEIH0sIHtcbiAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXVudXNlZC12YXJzIC0tIHJlcXVpcmVkIGZvciBgLmxlbmd0aGBcbiAgY29uY2F0OiBmdW5jdGlvbiBjb25jYXQoYXJnKSB7XG4gICAgdmFyIE8gPSB0b09iamVjdCh0aGlzKTtcbiAgICB2YXIgQSA9IGFycmF5U3BlY2llc0NyZWF0ZShPLCAwKTtcbiAgICB2YXIgbiA9IDA7XG4gICAgdmFyIGksIGssIGxlbmd0aCwgbGVuLCBFO1xuICAgIGZvciAoaSA9IC0xLCBsZW5ndGggPSBhcmd1bWVudHMubGVuZ3RoOyBpIDwgbGVuZ3RoOyBpKyspIHtcbiAgICAgIEUgPSBpID09PSAtMSA/IE8gOiBhcmd1bWVudHNbaV07XG4gICAgICBpZiAoaXNDb25jYXRTcHJlYWRhYmxlKEUpKSB7XG4gICAgICAgIGxlbiA9IGxlbmd0aE9mQXJyYXlMaWtlKEUpO1xuICAgICAgICBkb2VzTm90RXhjZWVkU2FmZUludGVnZXIobiArIGxlbik7XG4gICAgICAgIGZvciAoayA9IDA7IGsgPCBsZW47IGsrKywgbisrKSBpZiAoayBpbiBFKSBjcmVhdGVQcm9wZXJ0eShBLCBuLCBFW2tdKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGRvZXNOb3RFeGNlZWRTYWZlSW50ZWdlcihuICsgMSk7XG4gICAgICAgIGNyZWF0ZVByb3BlcnR5KEEsIG4rKywgRSk7XG4gICAgICB9XG4gICAgfVxuICAgIEEubGVuZ3RoID0gbjtcbiAgICByZXR1cm4gQTtcbiAgfVxufSk7XG4iLCIndXNlIHN0cmljdCc7XG52YXIgJCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9leHBvcnQnKTtcbnZhciAkZmluZCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9hcnJheS1pdGVyYXRpb24nKS5maW5kO1xudmFyIGFkZFRvVW5zY29wYWJsZXMgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvYWRkLXRvLXVuc2NvcGFibGVzJyk7XG5cbnZhciBGSU5EID0gJ2ZpbmQnO1xudmFyIFNLSVBTX0hPTEVTID0gdHJ1ZTtcblxuLy8gU2hvdWxkbid0IHNraXAgaG9sZXNcbi8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBlcy9uby1hcnJheS1wcm90b3R5cGUtZmluZCAtLSB0ZXN0aW5nXG5pZiAoRklORCBpbiBbXSkgQXJyYXkoMSlbRklORF0oZnVuY3Rpb24gKCkgeyBTS0lQU19IT0xFUyA9IGZhbHNlOyB9KTtcblxuLy8gYEFycmF5LnByb3RvdHlwZS5maW5kYCBtZXRob2Rcbi8vIGh0dHBzOi8vdGMzOS5lcy9lY21hMjYyLyNzZWMtYXJyYXkucHJvdG90eXBlLmZpbmRcbiQoeyB0YXJnZXQ6ICdBcnJheScsIHByb3RvOiB0cnVlLCBmb3JjZWQ6IFNLSVBTX0hPTEVTIH0sIHtcbiAgZmluZDogZnVuY3Rpb24gZmluZChjYWxsYmFja2ZuIC8qICwgdGhhdCA9IHVuZGVmaW5lZCAqLykge1xuICAgIHJldHVybiAkZmluZCh0aGlzLCBjYWxsYmFja2ZuLCBhcmd1bWVudHMubGVuZ3RoID4gMSA/IGFyZ3VtZW50c1sxXSA6IHVuZGVmaW5lZCk7XG4gIH1cbn0pO1xuXG4vLyBodHRwczovL3RjMzkuZXMvZWNtYTI2Mi8jc2VjLWFycmF5LnByb3RvdHlwZS1AQHVuc2NvcGFibGVzXG5hZGRUb1Vuc2NvcGFibGVzKEZJTkQpO1xuIiwidmFyIERFU0NSSVBUT1JTID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2Rlc2NyaXB0b3JzJyk7XG52YXIgRlVOQ1RJT05fTkFNRV9FWElTVFMgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvZnVuY3Rpb24tbmFtZScpLkVYSVNUUztcbnZhciB1bmN1cnJ5VGhpcyA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9mdW5jdGlvbi11bmN1cnJ5LXRoaXMnKTtcbnZhciBkZWZpbmVCdWlsdEluQWNjZXNzb3IgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvZGVmaW5lLWJ1aWx0LWluLWFjY2Vzc29yJyk7XG5cbnZhciBGdW5jdGlvblByb3RvdHlwZSA9IEZ1bmN0aW9uLnByb3RvdHlwZTtcbnZhciBmdW5jdGlvblRvU3RyaW5nID0gdW5jdXJyeVRoaXMoRnVuY3Rpb25Qcm90b3R5cGUudG9TdHJpbmcpO1xudmFyIG5hbWVSRSA9IC9mdW5jdGlvblxcYig/Olxcc3xcXC9cXCpbXFxTXFxzXSo/XFwqXFwvfFxcL1xcL1teXFxuXFxyXSpbXFxuXFxyXSspKihbXlxccygvXSopLztcbnZhciByZWdFeHBFeGVjID0gdW5jdXJyeVRoaXMobmFtZVJFLmV4ZWMpO1xudmFyIE5BTUUgPSAnbmFtZSc7XG5cbi8vIEZ1bmN0aW9uIGluc3RhbmNlcyBgLm5hbWVgIHByb3BlcnR5XG4vLyBodHRwczovL3RjMzkuZXMvZWNtYTI2Mi8jc2VjLWZ1bmN0aW9uLWluc3RhbmNlcy1uYW1lXG5pZiAoREVTQ1JJUFRPUlMgJiYgIUZVTkNUSU9OX05BTUVfRVhJU1RTKSB7XG4gIGRlZmluZUJ1aWx0SW5BY2Nlc3NvcihGdW5jdGlvblByb3RvdHlwZSwgTkFNRSwge1xuICAgIGNvbmZpZ3VyYWJsZTogdHJ1ZSxcbiAgICBnZXQ6IGZ1bmN0aW9uICgpIHtcbiAgICAgIHRyeSB7XG4gICAgICAgIHJldHVybiByZWdFeHBFeGVjKG5hbWVSRSwgZnVuY3Rpb25Ub1N0cmluZyh0aGlzKSlbMV07XG4gICAgICB9IGNhdGNoIChlcnJvcikge1xuICAgICAgICByZXR1cm4gJyc7XG4gICAgICB9XG4gICAgfVxuICB9KTtcbn1cbiJdLCJuYW1lcyI6WyIkIiwib24iLCJlIiwicHJldmVudERlZmF1bHQiLCJ0YXJnZXQiLCJhdHRyIiwibm90IiwiaGlkZSIsImZhZGVJbiIsImhhc0NsYXNzIiwicmVtb3ZlQ2xhc3MiLCJhZGRDbGFzcyIsInRvZ2dsZUNsYXNzIiwidG9nZ2xlIiwiZG9jdW1lbnQiLCJsYWJlbCIsImZpbmQiLCJ0ZXh0IiwicG9zaXRpb24iLCJjc3MiLCJ0b3AiLCJsZWZ0IiwiaGVpZ2h0IiwiY291bnRfc3VibWVudV9saSIsImxlbmd0aCIsInN0eWxlIiwid2luZG93IiwicmVzaXplIiwid2luZG93UmVzaXplIiwiX3RoaXMiLCJwYXJlbnQiLCJjbG9zZXN0IiwiY2xpY2tlZElkIiwiY29udGVudElkIiwidXNlcklkIiwiaXNDb25maXJtZWQiLCJjb25maXJtIiwiYWpheCIsInVybCIsInR5cGUiLCJzdWNjZXNzIiwicmVzdWx0IiwicGFyZW50cyIsInJlbW92ZSIsImNhdGVnb3J5TmFtZSIsInZhbCIsImRhdGEiLCJjYXRlZ29yeSIsIm5ld1JvdyIsImNvbHMiLCJpZCIsImNvbmNhdCIsImFwcGVuZCIsImVycm9yIiwieGhyIiwiYWpheE9wdGlvbnMiLCJ0aHJvd25FcnJvciIsImFsZXJ0IiwiY2xpY2siLCJwb3N0IiwicmVzcG9uc2UiLCJjb25zb2xlIiwibG9nIiwiZXZlbnQiLCJjb250cmFjdElkIiwibWV0aG9kIiwic3RhdHVzIiwiZm9ybURhdGEiLCJzZXJpYWxpemUiLCJsb2NhdGlvbiIsInJlbG9hZCIsInVwZGF0ZVVzZXJUYWJsZSIsImFkbWluIiwicm93IiwibmFtZSIsInN1cm5hbWUiLCJlbWFpbCIsInRlbGVwaG9uZSIsInJvbGVzIiwiaXNWZXJpZmllZCIsImh0bWwiLCJjYXRlZ29yeUlkIiwibWVzc2FnZSIsIndpZHRoIl0sInNvdXJjZVJvb3QiOiIifQ==
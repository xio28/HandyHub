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
  jquery__WEBPACK_IMPORTED_MODULE_4___default()(document).mouseup(function (e) {
    var container = jquery__WEBPACK_IMPORTED_MODULE_4___default()("#editPopup");
    if (!container.is(e.target) && container.has(e.target).length === 0) {
      container.hide();
    }
  });
  jquery__WEBPACK_IMPORTED_MODULE_4___default()('.edit-category').on('click', function () {
    var id = jquery__WEBPACK_IMPORTED_MODULE_4___default()(this).data('id');
    jquery__WEBPACK_IMPORTED_MODULE_4___default()('#categoryId').val(id);
    jquery__WEBPACK_IMPORTED_MODULE_4___default()('#editPopup').show();
  });
  jquery__WEBPACK_IMPORTED_MODULE_4___default()('#submitEdit').click(function () {
    var id = jquery__WEBPACK_IMPORTED_MODULE_4___default()('#categoryId').val();
    var name = jquery__WEBPACK_IMPORTED_MODULE_4___default()('#categoryName').val();
    jquery__WEBPACK_IMPORTED_MODULE_4___default().ajax({
      url: '/update_category/' + id,
      method: 'PUT',
      data: {
        name: name
      },
      success: function success(response) {
        if (response.success) {
          // Actualizar la categoría en la tabla
          jquery__WEBPACK_IMPORTED_MODULE_4___default()('button[data-id="' + id + '"]').closest('tr').children().eq(1).text(name);
          // Ocultar el popup
          jquery__WEBPACK_IMPORTED_MODULE_4___default()('#editPopup').hide();
        } else {
          alert('Error al actualizar la categoría');
        }
      },
      error: function error() {
        alert('Error al actualizar la categoría');
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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O0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDOztBQUVEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsSUFBSSx3REFBd0Q7QUFDNUQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsNENBQTRDLFlBQVk7QUFDeEQ7QUFDQTtBQUNBO0FBQ0E7QUFDQSxvQkFBb0IsU0FBUztBQUM3QixRQUFRO0FBQ1I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDOzs7Ozs7Ozs7Ozs7QUN6RFk7QUFDYixRQUFRLG1CQUFPLENBQUMsdUVBQXFCO0FBQ3JDLFlBQVkscUhBQTRDO0FBQ3hELHVCQUF1QixtQkFBTyxDQUFDLCtGQUFpQzs7QUFFaEU7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsNkNBQTZDLHNCQUFzQjs7QUFFbkU7QUFDQTtBQUNBLElBQUksbURBQW1EO0FBQ3ZEO0FBQ0E7QUFDQTtBQUNBLENBQUM7O0FBRUQ7QUFDQTs7Ozs7Ozs7Ozs7QUNyQkEsa0JBQWtCLG1CQUFPLENBQUMsaUZBQTBCO0FBQ3BELDJCQUEyQixtSEFBNEM7QUFDdkUsa0JBQWtCLG1CQUFPLENBQUMscUdBQW9DO0FBQzlELDRCQUE0QixtQkFBTyxDQUFDLDJHQUF1Qzs7QUFFM0U7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsUUFBUTtBQUNSO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSCIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL2Fzc2V0cy9qcy9wYW5lbHMuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2NvcmUtanMvaW50ZXJuYWxzL2FycmF5LW1ldGhvZC1oYXMtc3BlY2llcy1zdXBwb3J0LmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9jb3JlLWpzL2ludGVybmFscy9kb2VzLW5vdC1leGNlZWQtc2FmZS1pbnRlZ2VyLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9jb3JlLWpzL21vZHVsZXMvZXMuYXJyYXkuY29uY2F0LmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9jb3JlLWpzL21vZHVsZXMvZXMuYXJyYXkuZmluZC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvY29yZS1qcy9tb2R1bGVzL2VzLmZ1bmN0aW9uLm5hbWUuanMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0ICQgZnJvbSAnanF1ZXJ5JztcclxuXHJcbiQoZnVuY3Rpb24oKSB7XHJcbiAgICAkKFwiLnNpZGViYXItaXRlbVwiKS5vbignY2xpY2snLCBmdW5jdGlvbihlKXtcclxuICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICAgICAgbGV0IHRhcmdldCA9ICQodGhpcykuYXR0cignaHJlZicpO1xyXG4gICAgICAgICQoJy5jb250ZW50Jykubm90KHRhcmdldCkuaGlkZSgpO1xyXG4gICAgICAgICQodGFyZ2V0KS5mYWRlSW4oNjAwKTtcclxuICAgIH0pO1xyXG5cclxuXHJcbiAgICAkKCcjdG9nZ2xlLWxlZnQtbWVudScpLm9uKCdjbGljaycgLGZ1bmN0aW9uKCkge1xyXG4gICAgICAgIGlmICgkKCcjbGVmdC1tZW51JykuaGFzQ2xhc3MoJ3NtYWxsLWxlZnQtbWVudScpKSB7XHJcbiAgICAgICAgICAgICQoJyNsZWZ0LW1lbnUnKS5yZW1vdmVDbGFzcygnc21hbGwtbGVmdC1tZW51Jyk7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgJCgnI2xlZnQtbWVudScpLmFkZENsYXNzKCdzbWFsbC1sZWZ0LW1lbnUnKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgJCgnI2xvZ28nKS50b2dnbGVDbGFzcygnc21hbGwtbGVmdC1tZW51Jyk7XHJcbiAgICAgICAgJCgnI3BhZ2UtY29udGFpbmVyJykudG9nZ2xlQ2xhc3MoJ3NtYWxsLWxlZnQtbWVudScpO1xyXG4gICAgICAgICQoJyNoZWFkZXIgLmhlYWRlci1sZWZ0JykudG9nZ2xlQ2xhc3MoJ3NtYWxsLWxlZnQtbWVudScpO1xyXG5cclxuICAgICAgICAkKCcjbG9nbyAuYmlnLWxvZ28nKS50b2dnbGUoJzMwMCcpO1xyXG4gICAgICAgICQoJyNsb2dvIC5zbWFsbC1sb2dvJykudG9nZ2xlKCczMDAnKTtcclxuICAgICAgICAkKCcjbG9nbycpLnRvZ2dsZUNsYXNzKCdwLTAgcGwtMScpO1xyXG4gICAgICAgICQoJ2xpIGgzJykudG9nZ2xlQ2xhc3MoJ2hpZGRlbicpO1xyXG4gICAgfSk7XHJcblxyXG4gICAgJChkb2N1bWVudCkub24oJ21vdXNlb3ZlcicsICcjbGVmdC1tZW51LnNtYWxsLWxlZnQtbWVudSA+IHVsID4gbGknLCBmdW5jdGlvbigpIHtcclxuICAgICAgICBpZiAoISQodGhpcykuaGFzQ2xhc3MoJ2hhcy1zdWInKSkge1xyXG4gICAgICAgICAgICBsZXQgbGFiZWwgPSAkKHRoaXMpLmZpbmQoJ3NwYW4nKS50ZXh0KCk7XHJcbiAgICAgICAgICAgIGxldCBwb3NpdGlvbiA9ICQodGhpcykucG9zaXRpb24oKTtcclxuICAgICAgICAgICAgJCgnI3Nob3ctbGFibGUnKS5jc3Moe1xyXG4gICAgICAgICAgICAgICAgJ3RvcCc6IHBvc2l0aW9uLnRvcCArIDc5LFxyXG4gICAgICAgICAgICAgICAgJ2xlZnQnOiBwb3NpdGlvbi5sZWZ0ICsgNTksXHJcbiAgICAgICAgICAgICAgICAnb3BhY2l0eSc6IDEsXHJcbiAgICAgICAgICAgICAgICAndmlzaWJpbGl0eSc6ICd2aXNpYmxlJ1xyXG4gICAgICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgICAgICQoJyNzaG93LWxhYmxlJykudGV4dChsYWJlbCk7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgbGV0IHBvc2l0aW9uID0gJCh0aGlzKS5wb3NpdGlvbigpO1xyXG4gICAgICAgICAgICAkKHRoaXMpLmZpbmQoJ3VsJykuYWRkQ2xhc3MoJ29wZW4nKTtcclxuXHJcbiAgICAgICAgICAgIGlmICgkKHRoaXMpLmZpbmQoJ3VsJykuaGFzQ2xhc3MoJ29wZW4nKSkge1xyXG4gICAgICAgICAgICAgICAgY29uc3QgaGVpZ2h0ID0gNDc7XHJcbiAgICAgICAgICAgICAgICBsZXQgY291bnRfc3VibWVudV9saSA9ICQodGhpcykuZmluZCgndWwgPiBsaScpLmxlbmd0aDtcclxuICAgICAgICAgICAgICAgIGlmIChwb3NpdGlvbi50b3AgPj0gNTgwKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgbGV0IHN0eWxlID0ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAndG9wJzogKHBvc2l0aW9uLnRvcCArIDEwMCkgLSAoaGVpZ2h0ICogY291bnRfc3VibWVudV9saSksXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICdoZWlnaHQnOiBoZWlnaHQgKiBjb3VudF9zdWJtZW51X2xpICsgJ3B4J1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAkKHRoaXMpLmZpbmQoJ3VsLm9wZW4nKS5jc3Moc3R5bGUpO1xyXG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICBsZXQgc3R5bGUgPSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICd0b3AnOiBwb3NpdGlvbi50b3AgKyA3OSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgJ2hlaWdodCc6IGhlaWdodCAqIGNvdW50X3N1Ym1lbnVfbGkgKyAncHgnXHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgICAgICAkKHRoaXMpLmZpbmQoJ3VsLm9wZW4nKS5jc3Moc3R5bGUpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfSk7XHJcblxyXG4gICAgJChkb2N1bWVudCkub24oJ21vdXNlb3V0JywgJyNsZWZ0LW1lbnUuc21hbGwtbGVmdC1tZW51IGxpIGEnLCBmdW5jdGlvbihlKSB7XHJcbiAgICAgICAgJCgnI3Nob3ctbGFibGUnKS5jc3Moe1xyXG4gICAgICAgICAgICAnb3BhY2l0eSc6IDAsXHJcbiAgICAgICAgICAgICd2aXNpYmlsaXR5JzogJ2hpZGRlbidcclxuICAgICAgICB9KTtcclxuICAgIH0pO1xyXG5cclxuICAgICQoZG9jdW1lbnQpLm9uKCdtb3VzZW91dCcsICcjbGVmdC1tZW51LnNtYWxsLWxlZnQtbWVudSBsaS5oYXMtc3ViJywgZnVuY3Rpb24oZSkge1xyXG4gICAgICAgICQodGhpcykuZmluZCgndWwnKS5jc3Moe1xyXG4gICAgICAgICAgICAnaGVpZ2h0JzogMCxcclxuICAgICAgICB9KTtcclxuICAgIH0pO1xyXG5cclxuICAgICQod2luZG93KS5yZXNpemUoZnVuY3Rpb24oKSB7XHJcbiAgICAgICAgd2luZG93UmVzaXplKCk7XHJcbiAgICB9KTtcclxuXHJcbiAgICAkKHdpbmRvdykub24oJ2xvYWQnLCBmdW5jdGlvbigpIHtcclxuICAgICAgICB3aW5kb3dSZXNpemUoKTtcclxuICAgIH0pO1xyXG5cclxuICAgICQoJyNsZWZ0LW1lbnUgbGkuaGFzLXN1YiA+IGEnKS5vbignY2xpY2snLCBmdW5jdGlvbigpIHtcclxuICAgICAgICBsZXQgX3RoaXMgPSAkKHRoaXMpLnBhcmVudCgpO1xyXG5cclxuICAgICAgICBfdGhpcy5maW5kKCd1bCcpLnRvZ2dsZUNsYXNzKCdvcGVuJyk7XHJcbiAgICAgICAgJCh0aGlzKS5jbG9zZXN0KCdsaScpLnRvZ2dsZUNsYXNzKCdyb3RhdGUnKTtcclxuXHJcbiAgICAgICAgX3RoaXMuY2xvc2VzdCgnI2xlZnQtbWVudScpLmZpbmQoJy5vcGVuJykubm90KF90aGlzLmZpbmQoJ3VsJykpLnJlbW92ZUNsYXNzKCdvcGVuJyk7XHJcbiAgICAgICAgX3RoaXMuY2xvc2VzdCgnI2xlZnQtbWVudScpLmZpbmQoJy5yb3RhdGUnKS5ub3QoJCh0aGlzKS5jbG9zZXN0KCdsaScpKS5yZW1vdmVDbGFzcygncm90YXRlJyk7XHJcbiAgICAgICAgX3RoaXMuY2xvc2VzdCgnI2xlZnQtbWVudScpLmZpbmQoJ3VsJykuY3NzKCdoZWlnaHQnLCAwKTtcclxuXHJcbiAgICAgICAgaWYgKF90aGlzLmZpbmQoJ3VsJykuaGFzQ2xhc3MoJ29wZW4nKSkge1xyXG4gICAgICAgICAgICBjb25zdCBoZWlnaHQgPSA0NztcclxuICAgICAgICAgICAgbGV0IGNvdW50X3N1Ym1lbnVfbGkgPSBfdGhpcy5maW5kKCd1bCA+IGxpJykubGVuZ3RoO1xyXG4gICAgICAgICAgICBfdGhpcy5maW5kKCd1bCcpLmNzcygnaGVpZ2h0JywgaGVpZ2h0ICogY291bnRfc3VibWVudV9saSArICdweCcpO1xyXG4gICAgICAgIH1cclxuICAgIH0pO1xyXG5cclxuICAgICQoJyNsZWZ0LW1lbnUgdWwgbGknKS5vbignY2xpY2snLCBmdW5jdGlvbigpIHtcclxuICAgICAgICBsZXQgY2xpY2tlZElkID0gJCh0aGlzKS5hdHRyKCdpZCcpO1xyXG4gICAgXHJcbiAgICAgICAgbGV0IGNvbnRlbnRJZCA9ICdjb250ZW50LScgKyBjbGlja2VkSWQ7XHJcbiAgICBcclxuICAgICAgICAkKCcjbGVmdC1tZW51IHVsIGxpLCAucGFnZScpLnJlbW92ZUNsYXNzKCdhY3RpdmUnKTtcclxuICAgIFxyXG4gICAgICAgICQodGhpcykuYWRkQ2xhc3MoJ2FjdGl2ZScpO1xyXG4gICAgICAgICQoJyMnICsgY29udGVudElkKS5hZGRDbGFzcygnYWN0aXZlJyk7XHJcbiAgICB9KTtcclxuXHJcbiAgICAkKCcudHJhc2gtdXNlcicpLm9uKCdjbGljaycsIGZ1bmN0aW9uKCkge1xyXG4gICAgICAgIGxldCB1c2VySWQgPSAkKHRoaXMpLmF0dHIoJ2RhdGEtaWQnKTtcclxuICAgIFxyXG4gICAgICAgIGxldCBpc0NvbmZpcm1lZCA9IGNvbmZpcm0oJ8K/RXN0w6FzIHNlZ3VybyBkZSBxdWUgcXVpZXJlcyBlbGltaW5hciBlc3RlIHVzdWFyaW8/Jyk7XHJcbiAgICBcclxuICAgICAgICBpZiAoaXNDb25maXJtZWQpIHtcclxuICAgICAgICAgICAgJC5hamF4KHtcclxuICAgICAgICAgICAgICAgIHVybDogJy9kZWxldGVfdXNlci8nICsgdXNlcklkLFxyXG4gICAgICAgICAgICAgICAgdHlwZTogJ0RFTEVURScsXHJcbiAgICAgICAgICAgICAgICBzdWNjZXNzOiBmdW5jdGlvbihyZXN1bHQpIHtcclxuICAgICAgICAgICAgICAgICAgICAkKCdidXR0b25bZGF0YS1pZD1cIicgKyB1c2VySWQgKyAnXCJdJykucGFyZW50cygndHInKS5yZW1vdmUoKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfVxyXG4gICAgfSk7XHJcblxyXG4gICAgJChcIiNhZGRDYXRlZ29yeVwiKS5vbignY2xpY2snLCBmdW5jdGlvbigpe1xyXG4gICAgICAgIGxldCBjYXRlZ29yeU5hbWUgPSAkKFwiI2NhdGVnb3J5XCIpLnZhbCgpO1xyXG4gICAgICAgIGlmKGNhdGVnb3J5TmFtZSkge1xyXG4gICAgICAgICAgICAkLmFqYXgoe1xyXG4gICAgICAgICAgICAgICAgdXJsOiBcIi9yZWdpc3Rlci9jYXRlZ29yaWVzXCIsXHJcbiAgICAgICAgICAgICAgICB0eXBlOiBcIlBPU1RcIixcclxuICAgICAgICAgICAgICAgIGRhdGE6IHtcclxuICAgICAgICAgICAgICAgICAgICBjYXRlZ29yeTogY2F0ZWdvcnlOYW1lXHJcbiAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgc3VjY2VzczogZnVuY3Rpb24gKGRhdGEpIHtcclxuICAgICAgICAgICAgICAgICAgICBsZXQgbmV3Um93ID0gJChcIjx0cj5cIik7XHJcbiAgICAgICAgICAgICAgICAgICAgbGV0IGNvbHMgPSBcIlwiO1xyXG4gICAgXHJcbiAgICAgICAgICAgICAgICAgICAgY29scyArPSAnPHRkIGRhdGEtbGFiZWw9XCJJRFwiPicgKyBkYXRhLmlkICsgJzwvdGQ+JztcclxuICAgICAgICAgICAgICAgICAgICBjb2xzICs9ICc8dGQgZGF0YS1sYWJlbD1cIk5hbWVcIj4nICsgZGF0YS5jYXRlZ29yeSArICc8L3RkPic7XHJcbiAgICAgICAgICAgICAgICAgICAgY29scyArPSBgPHRkIGRhdGEtbGFiZWw9XCJcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiBjbGFzcz1cImJ0biBlZGl0LWNhdGVnb3J5XCIgZGF0YS1pZD1cIiR7ZGF0YS5pZH1cIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzPVwibWF0ZXJpYWwtaWNvbnNcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBlZGl0XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIGNsYXNzPVwiYnRuIHRyYXNoLWNhdGVnb3J5XCIgZGF0YS1pZD1cIiR7ZGF0YS5pZH1cIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzPVwibWF0ZXJpYWwtaWNvbnNcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkZWxldGVfZm9yZXZlclxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgICAgICAgICAgICAgICA8L3RkPmA7XHJcbiAgICBcclxuICAgICAgICAgICAgICAgICAgICBuZXdSb3cuYXBwZW5kKGNvbHMpO1xyXG4gICAgICAgICAgICAgICAgICAgICQoXCJ0YWJsZVwiKS5hcHBlbmQobmV3Um93KTtcclxuICAgICAgICAgICAgICAgICAgICAkKFwiI2NhdGVnb3J5XCIpLnZhbCgnJyk7XHJcbiAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgZXJyb3I6IGZ1bmN0aW9uICh4aHIsIGFqYXhPcHRpb25zLCB0aHJvd25FcnJvcikge1xyXG4gICAgICAgICAgICAgICAgICAgIGFsZXJ0KHRocm93bkVycm9yKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgYWxlcnQoJ1BsZWFzZSBlbnRlciBhIGNhdGVnb3J5IG5hbWUnKTtcclxuICAgICAgICB9XHJcbiAgICB9KTtcclxuXHJcbiAgICAkKCcudHJhc2gtY2F0ZWdvcnknKS5vbignY2xpY2snLCBmdW5jdGlvbigpIHtcclxuICAgICAgICBsZXQgdXNlcklkID0gJCh0aGlzKS5hdHRyKCdkYXRhLWlkJyk7XHJcbiAgICBcclxuICAgICAgICBsZXQgaXNDb25maXJtZWQgPSBjb25maXJtKCfCv0VzdMOhcyBzZWd1cm8gZGUgcXVlIHF1aWVyZXMgZWxpbWluYXIgZXN0ZSB1c3VhcmlvPycpO1xyXG4gICAgXHJcbiAgICAgICAgaWYgKGlzQ29uZmlybWVkKSB7XHJcbiAgICAgICAgICAgICQuYWpheCh7XHJcbiAgICAgICAgICAgICAgICB1cmw6ICcvZGVsZXRlX2NhdGVnb3J5LycgKyB1c2VySWQsXHJcbiAgICAgICAgICAgICAgICB0eXBlOiAnREVMRVRFJyxcclxuICAgICAgICAgICAgICAgIHN1Y2Nlc3M6IGZ1bmN0aW9uKHJlc3VsdCkge1xyXG4gICAgICAgICAgICAgICAgICAgICQoJ2J1dHRvbltkYXRhLWlkPVwiJyArIHVzZXJJZCArICdcIl0nKS5wYXJlbnRzKCd0cicpLnJlbW92ZSgpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9XHJcbiAgICB9KTtcclxuXHJcbiAgICAkKCcucmVzZW5kLWJ0bicpLmNsaWNrKGZ1bmN0aW9uKCkge1xyXG4gICAgICAgIGxldCB1c2VySWQgPSAkKHRoaXMpLmRhdGEoJ2lkJyk7XHJcbiAgICAgICAgJC5wb3N0KHtcclxuICAgICAgICAgICAgdXJsOiAnL3Jlc2VuZF9lbWFpbC8nICsgdXNlcklkLFxyXG4gICAgICAgICAgICBzdWNjZXNzOiBmdW5jdGlvbihyZXNwb25zZSkge1xyXG4gICAgICAgICAgICAgICAgYWxlcnQoJ1ZlcmlmaWNhdGlvbiBlbWFpbCBzZW50IHN1Y2Nlc3NmdWxseS4nKTtcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgZXJyb3I6IGZ1bmN0aW9uKGVycm9yKSB7XHJcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhlcnJvcik7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KTtcclxuICAgIH0pO1xyXG5cclxuICAgICQoJy50cmFzaC1jb250cmFjdCcpLm9uKCdjbGljaycsIGZ1bmN0aW9uKGV2ZW50KSB7XHJcbiAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcclxuICAgICAgICBsZXQgY29udHJhY3RJZCA9ICQodGhpcykuZGF0YSgnaWQnKTtcclxuXHJcbiAgICAgICAgLy8gUmVhbGl6YXIgbGEgc29saWNpdHVkIEFKQVhcclxuICAgICAgICAkLmFqYXgoe1xyXG4gICAgICAgICAgICB1cmw6ICcvcmVqZWN0L2NvbnRyYWN0LycgKyBjb250cmFjdElkLFxyXG4gICAgICAgICAgICBtZXRob2Q6ICdQT1NUJyxcclxuICAgICAgICAgICAgc3VjY2VzczogZnVuY3Rpb24ocmVzcG9uc2UpIHtcclxuICAgICAgICAgICAgICAgIC8vXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIGVycm9yOiBmdW5jdGlvbih4aHIsIHN0YXR1cywgZXJyb3IpIHtcclxuICAgICAgICAgICAgICAgIC8vIFxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSk7XHJcbiAgICB9KTtcclxuXHJcbiAgICAkKCcjYWRkQWRtaW4nKS5vbignY2xpY2snLCBmdW5jdGlvbihlKSB7XHJcbiAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgICAgIGxldCBmb3JtRGF0YSA9ICQoJ2Zvcm0nKS5zZXJpYWxpemUoKTtcclxuICAgICAgICBcclxuICAgICAgICAkLmFqYXgoe1xyXG4gICAgICAgICAgICB1cmw6ICcvcmVnaXN0ZXIvYWRtaW4nLFxyXG4gICAgICAgICAgICBtZXRob2Q6ICdQT1NUJyxcclxuICAgICAgICAgICAgZGF0YTogZm9ybURhdGEsXHJcbiAgICAgICAgICAgIHN1Y2Nlc3M6IGZ1bmN0aW9uKHJlc3BvbnNlKSB7XHJcbiAgICAgICAgICAgICAgICBpZiAocmVzcG9uc2Uuc3VjY2Vzcykge1xyXG4gICAgICAgICAgICAgICAgICAgIGxvY2F0aW9uLnJlbG9hZCgpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICBlcnJvcjogZnVuY3Rpb24oeGhyLCBzdGF0dXMsIGVycm9yKSB7XHJcbiAgICAgICAgICAgICAgICBjb25zb2xlLmVycm9yKGVycm9yKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pO1xyXG4gICAgfSk7XHJcbiAgICBcclxuICAgIGZ1bmN0aW9uIHVwZGF0ZVVzZXJUYWJsZShhZG1pbikge1xyXG4gICAgICAgIGxldCByb3cgPSAkKCc8dHI+Jyk7XHJcbiAgICAgICAgcm93LmFwcGVuZCgkKCc8dGQ+JykudGV4dChhZG1pbi5pZCkpO1xyXG4gICAgICAgIHJvdy5hcHBlbmQoJCgnPHRkPicpLnRleHQoYWRtaW4ubmFtZSkpO1xyXG4gICAgICAgIHJvdy5hcHBlbmQoJCgnPHRkPicpLnRleHQoYWRtaW4uc3VybmFtZSkpO1xyXG4gICAgICAgIHJvdy5hcHBlbmQoJCgnPHRkPicpLnRleHQoYWRtaW4uZW1haWwpKTtcclxuICAgICAgICByb3cuYXBwZW5kKCQoJzx0ZD4nKS5hZGRDbGFzcygnbWluLWgnKS50ZXh0KGFkbWluLnRlbGVwaG9uZSkpO1xyXG4gICAgICAgIHJvdy5hcHBlbmQoJCgnPHRkPicpLnRleHQoYWRtaW4ucm9sZXNbMF0pKTtcclxuICAgICAgICByb3cuYXBwZW5kKCQoJzx0ZD4nKS5hZGRDbGFzcyhhZG1pbi5pc1ZlcmlmaWVkID8gJ3ZlcmlmaWVkJyA6ICcnKSk7XHJcbiAgICAgICAgcm93LmFwcGVuZCgkKCc8dGQ+JykuaHRtbChgXHJcbiAgICAgICAgICAgIDxidXR0b24gY2xhc3M9XCJidG4gZWRpdC11c2VyXCIgZGF0YS1pZD1cIiR7YWRtaW4uaWR9XCI+XHJcbiAgICAgICAgICAgICAgICA8c3BhbiBjbGFzcz1cIm1hdGVyaWFsLWljb25zXCI+ZWRpdDwvc3Bhbj5cclxuICAgICAgICAgICAgPC9idXR0b24+XHJcbiAgICAgICAgICAgIDxidXR0b24gY2xhc3M9XCJidG4gdHJhc2gtdXNlclwiIGRhdGEtaWQ9XCIke2FkbWluLmlkfVwiPlxyXG4gICAgICAgICAgICAgICAgPHNwYW4gY2xhc3M9XCJtYXRlcmlhbC1pY29uc1wiPmRlbGV0ZV9mb3JldmVyPC9zcGFuPlxyXG4gICAgICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgICBgKSk7XHJcbiAgICAgICAgXHJcbiAgICAgICAgJCgndGFibGUgdGJvZHknKS5hcHBlbmQocm93KTtcclxuICAgIH1cclxuXHJcbiAgICAkKGRvY3VtZW50KS5tb3VzZXVwKGZ1bmN0aW9uKGUpIHtcclxuICAgICAgICB2YXIgY29udGFpbmVyID0gJChcIiNlZGl0UG9wdXBcIik7XHJcbiAgICBcclxuICAgICAgICBpZiAoIWNvbnRhaW5lci5pcyhlLnRhcmdldCkgJiYgY29udGFpbmVyLmhhcyhlLnRhcmdldCkubGVuZ3RoID09PSAwKSB7XHJcbiAgICAgICAgICAgIGNvbnRhaW5lci5oaWRlKCk7XHJcbiAgICAgICAgfVxyXG4gICAgfSk7XHJcblxyXG4gICAgJCgnLmVkaXQtY2F0ZWdvcnknKS5vbignY2xpY2snLCBmdW5jdGlvbigpIHtcclxuICAgICAgICBsZXQgaWQgPSAkKHRoaXMpLmRhdGEoJ2lkJyk7XHJcbiAgICAgICAgJCgnI2NhdGVnb3J5SWQnKS52YWwoaWQpO1xyXG4gICAgICAgICQoJyNlZGl0UG9wdXAnKS5zaG93KCk7XHJcbiAgICB9KTtcclxuXHJcbiAgICAkKCcjc3VibWl0RWRpdCcpLmNsaWNrKGZ1bmN0aW9uKCkge1xyXG4gICAgICAgIGxldCBpZCA9ICQoJyNjYXRlZ29yeUlkJykudmFsKCk7XHJcbiAgICAgICAgbGV0IG5hbWUgPSAkKCcjY2F0ZWdvcnlOYW1lJykudmFsKCk7XHJcbiAgICAgICAgJC5hamF4KHtcclxuICAgICAgICAgICAgdXJsOiAnL3VwZGF0ZV9jYXRlZ29yeS8nICsgaWQsXHJcbiAgICAgICAgICAgIG1ldGhvZDogJ1BVVCcsXHJcbiAgICAgICAgICAgIGRhdGE6IHsgbmFtZTogbmFtZSB9LFxyXG4gICAgICAgICAgICBzdWNjZXNzOiBmdW5jdGlvbihyZXNwb25zZSkge1xyXG4gICAgICAgICAgICAgICAgaWYgKHJlc3BvbnNlLnN1Y2Nlc3MpIHtcclxuICAgICAgICAgICAgICAgICAgICAvLyBBY3R1YWxpemFyIGxhIGNhdGVnb3LDrWEgZW4gbGEgdGFibGFcclxuICAgICAgICAgICAgICAgICAgICAkKCdidXR0b25bZGF0YS1pZD1cIicgKyBpZCArICdcIl0nKS5jbG9zZXN0KCd0cicpLmNoaWxkcmVuKCkuZXEoMSkudGV4dChuYW1lKTtcclxuICAgICAgICAgICAgICAgICAgICAvLyBPY3VsdGFyIGVsIHBvcHVwXHJcbiAgICAgICAgICAgICAgICAgICAgJCgnI2VkaXRQb3B1cCcpLmhpZGUoKTtcclxuICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgYWxlcnQoJ0Vycm9yIGFsIGFjdHVhbGl6YXIgbGEgY2F0ZWdvcsOtYScpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICBlcnJvcjogZnVuY3Rpb24oKSB7XHJcbiAgICAgICAgICAgICAgICBhbGVydCgnRXJyb3IgYWwgYWN0dWFsaXphciBsYSBjYXRlZ29yw61hJyk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KTtcclxuICAgIH0pO1xyXG5cclxuXHJcbiAgICBmdW5jdGlvbiB3aW5kb3dSZXNpemUoKSB7XHJcbiAgICAgICAgbGV0IHdpZHRoID0gJCh3aW5kb3cpLndpZHRoKCk7XHJcbiAgICAgICAgaWYgKHdpZHRoIDw9IDk5Mikge1xyXG4gICAgICAgICAgICAkKCcjbGVmdC1tZW51JykuYWRkQ2xhc3MoJ3NtYWxsLWxlZnQtbWVudScpO1xyXG4gICAgICAgICAgICAkKCcjbG9nbycpLmFkZENsYXNzKCdzbWFsbC1sZWZ0LW1lbnUgcC0wIHBsLTEnKTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAkKCcjbGVmdC1tZW51JykucmVtb3ZlQ2xhc3MoJ3NtYWxsLWxlZnQtbWVudScpO1xyXG4gICAgICAgICAgICAkKCcjbG9nbycpLnJlbW92ZUNsYXNzKCdzbWFsbC1sZWZ0LW1lbnUgcC0wIHBsLTEnKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG59KTtcclxuIiwidmFyIGZhaWxzID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2ZhaWxzJyk7XG52YXIgd2VsbEtub3duU3ltYm9sID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL3dlbGwta25vd24tc3ltYm9sJyk7XG52YXIgVjhfVkVSU0lPTiA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9lbmdpbmUtdjgtdmVyc2lvbicpO1xuXG52YXIgU1BFQ0lFUyA9IHdlbGxLbm93blN5bWJvbCgnc3BlY2llcycpO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChNRVRIT0RfTkFNRSkge1xuICAvLyBXZSBjYW4ndCB1c2UgdGhpcyBmZWF0dXJlIGRldGVjdGlvbiBpbiBWOCBzaW5jZSBpdCBjYXVzZXNcbiAgLy8gZGVvcHRpbWl6YXRpb24gYW5kIHNlcmlvdXMgcGVyZm9ybWFuY2UgZGVncmFkYXRpb25cbiAgLy8gaHR0cHM6Ly9naXRodWIuY29tL3psb2lyb2NrL2NvcmUtanMvaXNzdWVzLzY3N1xuICByZXR1cm4gVjhfVkVSU0lPTiA+PSA1MSB8fCAhZmFpbHMoZnVuY3Rpb24gKCkge1xuICAgIHZhciBhcnJheSA9IFtdO1xuICAgIHZhciBjb25zdHJ1Y3RvciA9IGFycmF5LmNvbnN0cnVjdG9yID0ge307XG4gICAgY29uc3RydWN0b3JbU1BFQ0lFU10gPSBmdW5jdGlvbiAoKSB7XG4gICAgICByZXR1cm4geyBmb286IDEgfTtcbiAgICB9O1xuICAgIHJldHVybiBhcnJheVtNRVRIT0RfTkFNRV0oQm9vbGVhbikuZm9vICE9PSAxO1xuICB9KTtcbn07XG4iLCJ2YXIgJFR5cGVFcnJvciA9IFR5cGVFcnJvcjtcbnZhciBNQVhfU0FGRV9JTlRFR0VSID0gMHgxRkZGRkZGRkZGRkZGRjsgLy8gMiAqKiA1MyAtIDEgPT0gOTAwNzE5OTI1NDc0MDk5MVxuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdCkge1xuICBpZiAoaXQgPiBNQVhfU0FGRV9JTlRFR0VSKSB0aHJvdyAkVHlwZUVycm9yKCdNYXhpbXVtIGFsbG93ZWQgaW5kZXggZXhjZWVkZWQnKTtcbiAgcmV0dXJuIGl0O1xufTtcbiIsIid1c2Ugc3RyaWN0JztcbnZhciAkID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2V4cG9ydCcpO1xudmFyIGZhaWxzID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2ZhaWxzJyk7XG52YXIgaXNBcnJheSA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9pcy1hcnJheScpO1xudmFyIGlzT2JqZWN0ID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2lzLW9iamVjdCcpO1xudmFyIHRvT2JqZWN0ID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL3RvLW9iamVjdCcpO1xudmFyIGxlbmd0aE9mQXJyYXlMaWtlID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2xlbmd0aC1vZi1hcnJheS1saWtlJyk7XG52YXIgZG9lc05vdEV4Y2VlZFNhZmVJbnRlZ2VyID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2RvZXMtbm90LWV4Y2VlZC1zYWZlLWludGVnZXInKTtcbnZhciBjcmVhdGVQcm9wZXJ0eSA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9jcmVhdGUtcHJvcGVydHknKTtcbnZhciBhcnJheVNwZWNpZXNDcmVhdGUgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvYXJyYXktc3BlY2llcy1jcmVhdGUnKTtcbnZhciBhcnJheU1ldGhvZEhhc1NwZWNpZXNTdXBwb3J0ID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2FycmF5LW1ldGhvZC1oYXMtc3BlY2llcy1zdXBwb3J0Jyk7XG52YXIgd2VsbEtub3duU3ltYm9sID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL3dlbGwta25vd24tc3ltYm9sJyk7XG52YXIgVjhfVkVSU0lPTiA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9lbmdpbmUtdjgtdmVyc2lvbicpO1xuXG52YXIgSVNfQ09OQ0FUX1NQUkVBREFCTEUgPSB3ZWxsS25vd25TeW1ib2woJ2lzQ29uY2F0U3ByZWFkYWJsZScpO1xuXG4vLyBXZSBjYW4ndCB1c2UgdGhpcyBmZWF0dXJlIGRldGVjdGlvbiBpbiBWOCBzaW5jZSBpdCBjYXVzZXNcbi8vIGRlb3B0aW1pemF0aW9uIGFuZCBzZXJpb3VzIHBlcmZvcm1hbmNlIGRlZ3JhZGF0aW9uXG4vLyBodHRwczovL2dpdGh1Yi5jb20vemxvaXJvY2svY29yZS1qcy9pc3N1ZXMvNjc5XG52YXIgSVNfQ09OQ0FUX1NQUkVBREFCTEVfU1VQUE9SVCA9IFY4X1ZFUlNJT04gPj0gNTEgfHwgIWZhaWxzKGZ1bmN0aW9uICgpIHtcbiAgdmFyIGFycmF5ID0gW107XG4gIGFycmF5W0lTX0NPTkNBVF9TUFJFQURBQkxFXSA9IGZhbHNlO1xuICByZXR1cm4gYXJyYXkuY29uY2F0KClbMF0gIT09IGFycmF5O1xufSk7XG5cbnZhciBpc0NvbmNhdFNwcmVhZGFibGUgPSBmdW5jdGlvbiAoTykge1xuICBpZiAoIWlzT2JqZWN0KE8pKSByZXR1cm4gZmFsc2U7XG4gIHZhciBzcHJlYWRhYmxlID0gT1tJU19DT05DQVRfU1BSRUFEQUJMRV07XG4gIHJldHVybiBzcHJlYWRhYmxlICE9PSB1bmRlZmluZWQgPyAhIXNwcmVhZGFibGUgOiBpc0FycmF5KE8pO1xufTtcblxudmFyIEZPUkNFRCA9ICFJU19DT05DQVRfU1BSRUFEQUJMRV9TVVBQT1JUIHx8ICFhcnJheU1ldGhvZEhhc1NwZWNpZXNTdXBwb3J0KCdjb25jYXQnKTtcblxuLy8gYEFycmF5LnByb3RvdHlwZS5jb25jYXRgIG1ldGhvZFxuLy8gaHR0cHM6Ly90YzM5LmVzL2VjbWEyNjIvI3NlYy1hcnJheS5wcm90b3R5cGUuY29uY2F0XG4vLyB3aXRoIGFkZGluZyBzdXBwb3J0IG9mIEBAaXNDb25jYXRTcHJlYWRhYmxlIGFuZCBAQHNwZWNpZXNcbiQoeyB0YXJnZXQ6ICdBcnJheScsIHByb3RvOiB0cnVlLCBhcml0eTogMSwgZm9yY2VkOiBGT1JDRUQgfSwge1xuICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tdW51c2VkLXZhcnMgLS0gcmVxdWlyZWQgZm9yIGAubGVuZ3RoYFxuICBjb25jYXQ6IGZ1bmN0aW9uIGNvbmNhdChhcmcpIHtcbiAgICB2YXIgTyA9IHRvT2JqZWN0KHRoaXMpO1xuICAgIHZhciBBID0gYXJyYXlTcGVjaWVzQ3JlYXRlKE8sIDApO1xuICAgIHZhciBuID0gMDtcbiAgICB2YXIgaSwgaywgbGVuZ3RoLCBsZW4sIEU7XG4gICAgZm9yIChpID0gLTEsIGxlbmd0aCA9IGFyZ3VtZW50cy5sZW5ndGg7IGkgPCBsZW5ndGg7IGkrKykge1xuICAgICAgRSA9IGkgPT09IC0xID8gTyA6IGFyZ3VtZW50c1tpXTtcbiAgICAgIGlmIChpc0NvbmNhdFNwcmVhZGFibGUoRSkpIHtcbiAgICAgICAgbGVuID0gbGVuZ3RoT2ZBcnJheUxpa2UoRSk7XG4gICAgICAgIGRvZXNOb3RFeGNlZWRTYWZlSW50ZWdlcihuICsgbGVuKTtcbiAgICAgICAgZm9yIChrID0gMDsgayA8IGxlbjsgaysrLCBuKyspIGlmIChrIGluIEUpIGNyZWF0ZVByb3BlcnR5KEEsIG4sIEVba10pO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgZG9lc05vdEV4Y2VlZFNhZmVJbnRlZ2VyKG4gKyAxKTtcbiAgICAgICAgY3JlYXRlUHJvcGVydHkoQSwgbisrLCBFKTtcbiAgICAgIH1cbiAgICB9XG4gICAgQS5sZW5ndGggPSBuO1xuICAgIHJldHVybiBBO1xuICB9XG59KTtcbiIsIid1c2Ugc3RyaWN0JztcbnZhciAkID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2V4cG9ydCcpO1xudmFyICRmaW5kID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2FycmF5LWl0ZXJhdGlvbicpLmZpbmQ7XG52YXIgYWRkVG9VbnNjb3BhYmxlcyA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9hZGQtdG8tdW5zY29wYWJsZXMnKTtcblxudmFyIEZJTkQgPSAnZmluZCc7XG52YXIgU0tJUFNfSE9MRVMgPSB0cnVlO1xuXG4vLyBTaG91bGRuJ3Qgc2tpcCBob2xlc1xuLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIGVzL25vLWFycmF5LXByb3RvdHlwZS1maW5kIC0tIHRlc3RpbmdcbmlmIChGSU5EIGluIFtdKSBBcnJheSgxKVtGSU5EXShmdW5jdGlvbiAoKSB7IFNLSVBTX0hPTEVTID0gZmFsc2U7IH0pO1xuXG4vLyBgQXJyYXkucHJvdG90eXBlLmZpbmRgIG1ldGhvZFxuLy8gaHR0cHM6Ly90YzM5LmVzL2VjbWEyNjIvI3NlYy1hcnJheS5wcm90b3R5cGUuZmluZFxuJCh7IHRhcmdldDogJ0FycmF5JywgcHJvdG86IHRydWUsIGZvcmNlZDogU0tJUFNfSE9MRVMgfSwge1xuICBmaW5kOiBmdW5jdGlvbiBmaW5kKGNhbGxiYWNrZm4gLyogLCB0aGF0ID0gdW5kZWZpbmVkICovKSB7XG4gICAgcmV0dXJuICRmaW5kKHRoaXMsIGNhbGxiYWNrZm4sIGFyZ3VtZW50cy5sZW5ndGggPiAxID8gYXJndW1lbnRzWzFdIDogdW5kZWZpbmVkKTtcbiAgfVxufSk7XG5cbi8vIGh0dHBzOi8vdGMzOS5lcy9lY21hMjYyLyNzZWMtYXJyYXkucHJvdG90eXBlLUBAdW5zY29wYWJsZXNcbmFkZFRvVW5zY29wYWJsZXMoRklORCk7XG4iLCJ2YXIgREVTQ1JJUFRPUlMgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvZGVzY3JpcHRvcnMnKTtcbnZhciBGVU5DVElPTl9OQU1FX0VYSVNUUyA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9mdW5jdGlvbi1uYW1lJykuRVhJU1RTO1xudmFyIHVuY3VycnlUaGlzID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2Z1bmN0aW9uLXVuY3VycnktdGhpcycpO1xudmFyIGRlZmluZUJ1aWx0SW5BY2Nlc3NvciA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9kZWZpbmUtYnVpbHQtaW4tYWNjZXNzb3InKTtcblxudmFyIEZ1bmN0aW9uUHJvdG90eXBlID0gRnVuY3Rpb24ucHJvdG90eXBlO1xudmFyIGZ1bmN0aW9uVG9TdHJpbmcgPSB1bmN1cnJ5VGhpcyhGdW5jdGlvblByb3RvdHlwZS50b1N0cmluZyk7XG52YXIgbmFtZVJFID0gL2Z1bmN0aW9uXFxiKD86XFxzfFxcL1xcKltcXFNcXHNdKj9cXCpcXC98XFwvXFwvW15cXG5cXHJdKltcXG5cXHJdKykqKFteXFxzKC9dKikvO1xudmFyIHJlZ0V4cEV4ZWMgPSB1bmN1cnJ5VGhpcyhuYW1lUkUuZXhlYyk7XG52YXIgTkFNRSA9ICduYW1lJztcblxuLy8gRnVuY3Rpb24gaW5zdGFuY2VzIGAubmFtZWAgcHJvcGVydHlcbi8vIGh0dHBzOi8vdGMzOS5lcy9lY21hMjYyLyNzZWMtZnVuY3Rpb24taW5zdGFuY2VzLW5hbWVcbmlmIChERVNDUklQVE9SUyAmJiAhRlVOQ1RJT05fTkFNRV9FWElTVFMpIHtcbiAgZGVmaW5lQnVpbHRJbkFjY2Vzc29yKEZ1bmN0aW9uUHJvdG90eXBlLCBOQU1FLCB7XG4gICAgY29uZmlndXJhYmxlOiB0cnVlLFxuICAgIGdldDogZnVuY3Rpb24gKCkge1xuICAgICAgdHJ5IHtcbiAgICAgICAgcmV0dXJuIHJlZ0V4cEV4ZWMobmFtZVJFLCBmdW5jdGlvblRvU3RyaW5nKHRoaXMpKVsxXTtcbiAgICAgIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgICAgIHJldHVybiAnJztcbiAgICAgIH1cbiAgICB9XG4gIH0pO1xufVxuIl0sIm5hbWVzIjpbIiQiLCJvbiIsImUiLCJwcmV2ZW50RGVmYXVsdCIsInRhcmdldCIsImF0dHIiLCJub3QiLCJoaWRlIiwiZmFkZUluIiwiaGFzQ2xhc3MiLCJyZW1vdmVDbGFzcyIsImFkZENsYXNzIiwidG9nZ2xlQ2xhc3MiLCJ0b2dnbGUiLCJkb2N1bWVudCIsImxhYmVsIiwiZmluZCIsInRleHQiLCJwb3NpdGlvbiIsImNzcyIsInRvcCIsImxlZnQiLCJoZWlnaHQiLCJjb3VudF9zdWJtZW51X2xpIiwibGVuZ3RoIiwic3R5bGUiLCJ3aW5kb3ciLCJyZXNpemUiLCJ3aW5kb3dSZXNpemUiLCJfdGhpcyIsInBhcmVudCIsImNsb3Nlc3QiLCJjbGlja2VkSWQiLCJjb250ZW50SWQiLCJ1c2VySWQiLCJpc0NvbmZpcm1lZCIsImNvbmZpcm0iLCJhamF4IiwidXJsIiwidHlwZSIsInN1Y2Nlc3MiLCJyZXN1bHQiLCJwYXJlbnRzIiwicmVtb3ZlIiwiY2F0ZWdvcnlOYW1lIiwidmFsIiwiZGF0YSIsImNhdGVnb3J5IiwibmV3Um93IiwiY29scyIsImlkIiwiY29uY2F0IiwiYXBwZW5kIiwiZXJyb3IiLCJ4aHIiLCJhamF4T3B0aW9ucyIsInRocm93bkVycm9yIiwiYWxlcnQiLCJjbGljayIsInBvc3QiLCJyZXNwb25zZSIsImNvbnNvbGUiLCJsb2ciLCJldmVudCIsImNvbnRyYWN0SWQiLCJtZXRob2QiLCJzdGF0dXMiLCJmb3JtRGF0YSIsInNlcmlhbGl6ZSIsImxvY2F0aW9uIiwicmVsb2FkIiwidXBkYXRlVXNlclRhYmxlIiwiYWRtaW4iLCJyb3ciLCJuYW1lIiwic3VybmFtZSIsImVtYWlsIiwidGVsZXBob25lIiwicm9sZXMiLCJpc1ZlcmlmaWVkIiwiaHRtbCIsIm1vdXNldXAiLCJjb250YWluZXIiLCJpcyIsImhhcyIsInNob3ciLCJjaGlsZHJlbiIsImVxIiwid2lkdGgiXSwic291cmNlUm9vdCI6IiJ9
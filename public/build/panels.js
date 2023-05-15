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
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_3__);




jquery__WEBPACK_IMPORTED_MODULE_3___default()(function () {
  jquery__WEBPACK_IMPORTED_MODULE_3___default()(".sidebar-item").on('click', function (e) {
    e.preventDefault();
    var target = jquery__WEBPACK_IMPORTED_MODULE_3___default()(this).attr('href');
    jquery__WEBPACK_IMPORTED_MODULE_3___default()('.content').not(target).hide();
    jquery__WEBPACK_IMPORTED_MODULE_3___default()(target).fadeIn(600);
  });
  jquery__WEBPACK_IMPORTED_MODULE_3___default()('#toggle-left-menu').on('click', function () {
    if (jquery__WEBPACK_IMPORTED_MODULE_3___default()('#left-menu').hasClass('small-left-menu')) {
      jquery__WEBPACK_IMPORTED_MODULE_3___default()('#left-menu').removeClass('small-left-menu');
    } else {
      jquery__WEBPACK_IMPORTED_MODULE_3___default()('#left-menu').addClass('small-left-menu');
    }
    jquery__WEBPACK_IMPORTED_MODULE_3___default()('#logo').toggleClass('small-left-menu');
    jquery__WEBPACK_IMPORTED_MODULE_3___default()('#page-container').toggleClass('small-left-menu');
    jquery__WEBPACK_IMPORTED_MODULE_3___default()('#header .header-left').toggleClass('small-left-menu');
    jquery__WEBPACK_IMPORTED_MODULE_3___default()('#logo .big-logo').toggle('300');
    jquery__WEBPACK_IMPORTED_MODULE_3___default()('#logo .small-logo').toggle('300');
    jquery__WEBPACK_IMPORTED_MODULE_3___default()('#logo').toggleClass('p-0 pl-1');
    jquery__WEBPACK_IMPORTED_MODULE_3___default()('li h3').toggleClass('hidden');
  });
  jquery__WEBPACK_IMPORTED_MODULE_3___default()(document).on('mouseover', '#left-menu.small-left-menu > ul > li', function () {
    if (!jquery__WEBPACK_IMPORTED_MODULE_3___default()(this).hasClass('has-sub')) {
      var label = jquery__WEBPACK_IMPORTED_MODULE_3___default()(this).find('span').text();
      var position = jquery__WEBPACK_IMPORTED_MODULE_3___default()(this).position();
      jquery__WEBPACK_IMPORTED_MODULE_3___default()('#show-lable').css({
        'top': position.top + 79,
        'left': position.left + 59,
        'opacity': 1,
        'visibility': 'visible'
      });
      jquery__WEBPACK_IMPORTED_MODULE_3___default()('#show-lable').text(label);
    } else {
      var _position = jquery__WEBPACK_IMPORTED_MODULE_3___default()(this).position();
      jquery__WEBPACK_IMPORTED_MODULE_3___default()(this).find('ul').addClass('open');
      if (jquery__WEBPACK_IMPORTED_MODULE_3___default()(this).find('ul').hasClass('open')) {
        var height = 47;
        var count_submenu_li = jquery__WEBPACK_IMPORTED_MODULE_3___default()(this).find('ul > li').length;
        if (_position.top >= 580) {
          var style = {
            'top': _position.top + 100 - height * count_submenu_li,
            'height': height * count_submenu_li + 'px'
          };
          jquery__WEBPACK_IMPORTED_MODULE_3___default()(this).find('ul.open').css(style);
        } else {
          var _style = {
            'top': _position.top + 79,
            'height': height * count_submenu_li + 'px'
          };
          jquery__WEBPACK_IMPORTED_MODULE_3___default()(this).find('ul.open').css(_style);
        }
      }
    }
  });
  jquery__WEBPACK_IMPORTED_MODULE_3___default()(document).on('mouseout', '#left-menu.small-left-menu li a', function (e) {
    jquery__WEBPACK_IMPORTED_MODULE_3___default()('#show-lable').css({
      'opacity': 0,
      'visibility': 'hidden'
    });
  });
  jquery__WEBPACK_IMPORTED_MODULE_3___default()(document).on('mouseout', '#left-menu.small-left-menu li.has-sub', function (e) {
    jquery__WEBPACK_IMPORTED_MODULE_3___default()(this).find('ul').css({
      'height': 0
    });
  });
  jquery__WEBPACK_IMPORTED_MODULE_3___default()(window).resize(function () {
    windowResize();
  });
  jquery__WEBPACK_IMPORTED_MODULE_3___default()(window).on('load', function () {
    windowResize();
  });
  jquery__WEBPACK_IMPORTED_MODULE_3___default()('#left-menu li.has-sub > a').on('click', function () {
    var _this = jquery__WEBPACK_IMPORTED_MODULE_3___default()(this).parent();
    _this.find('ul').toggleClass('open');
    jquery__WEBPACK_IMPORTED_MODULE_3___default()(this).closest('li').toggleClass('rotate');
    _this.closest('#left-menu').find('.open').not(_this.find('ul')).removeClass('open');
    _this.closest('#left-menu').find('.rotate').not(jquery__WEBPACK_IMPORTED_MODULE_3___default()(this).closest('li')).removeClass('rotate');
    _this.closest('#left-menu').find('ul').css('height', 0);
    if (_this.find('ul').hasClass('open')) {
      var height = 47;
      var count_submenu_li = _this.find('ul > li').length;
      _this.find('ul').css('height', height * count_submenu_li + 'px');
    }
  });
  jquery__WEBPACK_IMPORTED_MODULE_3___default()('#left-menu ul li').on('click', function () {
    var clickedId = jquery__WEBPACK_IMPORTED_MODULE_3___default()(this).attr('id');
    var contentId = 'content-' + clickedId;
    jquery__WEBPACK_IMPORTED_MODULE_3___default()('#left-menu ul li, .page').removeClass('active');
    jquery__WEBPACK_IMPORTED_MODULE_3___default()(this).addClass('active');
    jquery__WEBPACK_IMPORTED_MODULE_3___default()('#' + contentId).addClass('active');
  });
  jquery__WEBPACK_IMPORTED_MODULE_3___default()('.trash-user').on('click', function () {
    var userId = jquery__WEBPACK_IMPORTED_MODULE_3___default()(this).attr('data-id');
    var isConfirmed = confirm('¿Estás seguro de que quieres eliminar este usuario?');
    if (isConfirmed) {
      jquery__WEBPACK_IMPORTED_MODULE_3___default().ajax({
        url: '/delete_user/' + userId,
        type: 'DELETE',
        success: function success(result) {
          jquery__WEBPACK_IMPORTED_MODULE_3___default()('button[data-id="' + userId + '"]').parents('tr').remove();
        }
      });
    }
  });
  jquery__WEBPACK_IMPORTED_MODULE_3___default()("#addCategory").on('click', function () {
    var categoryName = jquery__WEBPACK_IMPORTED_MODULE_3___default()("#category").val();
    if (categoryName) {
      jquery__WEBPACK_IMPORTED_MODULE_3___default().ajax({
        url: "/register/categories",
        type: "POST",
        data: {
          category: categoryName
        },
        success: function success(data) {
          // Suponiendo que data contiene el nuevo objeto categoría
          var newRow = jquery__WEBPACK_IMPORTED_MODULE_3___default()("<tr>");
          var cols = "";
          cols += '<td data-label="ID">' + data.id + '</td>';
          cols += '<td data-label="Name">' + data.category + '</td>';
          cols += "<td data-label=\"\">\n                        <button class=\"btn edit-category\" data-id=\"".concat(data.id, "\">\n                            <span class=\"material-icons\">\n                                edit\n                            </span>\n                        </button>\n                        <button class=\"btn trash-category\" data-id=\"").concat(data.id, "\">\n                            <span class=\"material-icons\">\n                                delete_forever\n                            </span>\n                        </button>\n                    </td>");
          newRow.append(cols);
          jquery__WEBPACK_IMPORTED_MODULE_3___default()("table").append(newRow);
          jquery__WEBPACK_IMPORTED_MODULE_3___default()("#category").val('');
        },
        error: function error(xhr, ajaxOptions, thrownError) {
          alert(thrownError);
        }
      });
    } else {
      alert('Please enter a category name');
    }
  });
  jquery__WEBPACK_IMPORTED_MODULE_3___default()('.trash-category').on('click', function () {
    var userId = jquery__WEBPACK_IMPORTED_MODULE_3___default()(this).attr('data-id');
    var isConfirmed = confirm('¿Estás seguro de que quieres eliminar este usuario?');
    if (isConfirmed) {
      jquery__WEBPACK_IMPORTED_MODULE_3___default().ajax({
        url: '/delete_category/' + userId,
        type: 'DELETE',
        success: function success(result) {
          jquery__WEBPACK_IMPORTED_MODULE_3___default()('button[data-id="' + userId + '"]').parents('tr').remove();
        }
      });
    }
  });
  function windowResize() {
    var width = jquery__WEBPACK_IMPORTED_MODULE_3___default()(window).width();
    if (width <= 992) {
      jquery__WEBPACK_IMPORTED_MODULE_3___default()('#left-menu').addClass('small-left-menu');
      jquery__WEBPACK_IMPORTED_MODULE_3___default()('#logo').addClass('small-left-menu p-0 pl-1');
    } else {
      jquery__WEBPACK_IMPORTED_MODULE_3___default()('#left-menu').removeClass('small-left-menu');
      jquery__WEBPACK_IMPORTED_MODULE_3___default()('#logo').removeClass('small-left-menu p-0 pl-1');
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


/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ __webpack_require__.O(0, ["vendors-node_modules_core-js_internals_export_js","vendors-node_modules_core-js_internals_classof_js-node_modules_core-js_internals_is-array_js--e42e13","vendors-node_modules_core-js_internals_add-to-unscopables_js-node_modules_core-js_internals_a-ad0f2c"], () => (__webpack_exec__("./assets/js/panels.js")));
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ }
]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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O0FBQ0E7QUFDQTtBQUNBLENBQUM7O0FBRUQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxJQUFJLHdEQUF3RDtBQUM1RDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSw0Q0FBNEMsWUFBWTtBQUN4RDtBQUNBO0FBQ0E7QUFDQTtBQUNBLG9CQUFvQixTQUFTO0FBQzdCLFFBQVE7QUFDUjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUM7Ozs7Ozs7Ozs7OztBQ3pEWTtBQUNiLFFBQVEsbUJBQU8sQ0FBQyx1RUFBcUI7QUFDckMsWUFBWSxxSEFBNEM7QUFDeEQsdUJBQXVCLG1CQUFPLENBQUMsK0ZBQWlDOztBQUVoRTtBQUNBOztBQUVBO0FBQ0E7QUFDQSw2Q0FBNkMsc0JBQXNCOztBQUVuRTtBQUNBO0FBQ0EsSUFBSSxtREFBbUQ7QUFDdkQ7QUFDQTtBQUNBO0FBQ0EsQ0FBQzs7QUFFRDtBQUNBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2pzL3BhbmVscy5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvY29yZS1qcy9pbnRlcm5hbHMvYXJyYXktbWV0aG9kLWhhcy1zcGVjaWVzLXN1cHBvcnQuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2NvcmUtanMvaW50ZXJuYWxzL2RvZXMtbm90LWV4Y2VlZC1zYWZlLWludGVnZXIuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbW9kdWxlcy9lcy5hcnJheS5jb25jYXQuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbW9kdWxlcy9lcy5hcnJheS5maW5kLmpzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCAkIGZyb20gJ2pxdWVyeSc7XHJcblxyXG4kKGZ1bmN0aW9uKCkge1xyXG4gICAgJChcIi5zaWRlYmFyLWl0ZW1cIikub24oJ2NsaWNrJywgZnVuY3Rpb24oZSl7XHJcbiAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgICAgIGxldCB0YXJnZXQgPSAkKHRoaXMpLmF0dHIoJ2hyZWYnKTtcclxuICAgICAgICAkKCcuY29udGVudCcpLm5vdCh0YXJnZXQpLmhpZGUoKTtcclxuICAgICAgICAkKHRhcmdldCkuZmFkZUluKDYwMCk7XHJcbiAgICB9KTtcclxuXHJcblxyXG4gICAgJCgnI3RvZ2dsZS1sZWZ0LW1lbnUnKS5vbignY2xpY2snICxmdW5jdGlvbigpIHtcclxuICAgICAgICBpZiAoJCgnI2xlZnQtbWVudScpLmhhc0NsYXNzKCdzbWFsbC1sZWZ0LW1lbnUnKSkge1xyXG4gICAgICAgICAgICAkKCcjbGVmdC1tZW51JykucmVtb3ZlQ2xhc3MoJ3NtYWxsLWxlZnQtbWVudScpO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICQoJyNsZWZ0LW1lbnUnKS5hZGRDbGFzcygnc21hbGwtbGVmdC1tZW51Jyk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgICQoJyNsb2dvJykudG9nZ2xlQ2xhc3MoJ3NtYWxsLWxlZnQtbWVudScpO1xyXG4gICAgICAgICQoJyNwYWdlLWNvbnRhaW5lcicpLnRvZ2dsZUNsYXNzKCdzbWFsbC1sZWZ0LW1lbnUnKTtcclxuICAgICAgICAkKCcjaGVhZGVyIC5oZWFkZXItbGVmdCcpLnRvZ2dsZUNsYXNzKCdzbWFsbC1sZWZ0LW1lbnUnKTtcclxuXHJcbiAgICAgICAgJCgnI2xvZ28gLmJpZy1sb2dvJykudG9nZ2xlKCczMDAnKTtcclxuICAgICAgICAkKCcjbG9nbyAuc21hbGwtbG9nbycpLnRvZ2dsZSgnMzAwJyk7XHJcbiAgICAgICAgJCgnI2xvZ28nKS50b2dnbGVDbGFzcygncC0wIHBsLTEnKTtcclxuICAgICAgICAkKCdsaSBoMycpLnRvZ2dsZUNsYXNzKCdoaWRkZW4nKTtcclxuICAgIH0pO1xyXG5cclxuICAgICQoZG9jdW1lbnQpLm9uKCdtb3VzZW92ZXInLCAnI2xlZnQtbWVudS5zbWFsbC1sZWZ0LW1lbnUgPiB1bCA+IGxpJywgZnVuY3Rpb24oKSB7XHJcbiAgICAgICAgaWYgKCEkKHRoaXMpLmhhc0NsYXNzKCdoYXMtc3ViJykpIHtcclxuICAgICAgICAgICAgbGV0IGxhYmVsID0gJCh0aGlzKS5maW5kKCdzcGFuJykudGV4dCgpO1xyXG4gICAgICAgICAgICBsZXQgcG9zaXRpb24gPSAkKHRoaXMpLnBvc2l0aW9uKCk7XHJcbiAgICAgICAgICAgICQoJyNzaG93LWxhYmxlJykuY3NzKHtcclxuICAgICAgICAgICAgICAgICd0b3AnOiBwb3NpdGlvbi50b3AgKyA3OSxcclxuICAgICAgICAgICAgICAgICdsZWZ0JzogcG9zaXRpb24ubGVmdCArIDU5LFxyXG4gICAgICAgICAgICAgICAgJ29wYWNpdHknOiAxLFxyXG4gICAgICAgICAgICAgICAgJ3Zpc2liaWxpdHknOiAndmlzaWJsZSdcclxuICAgICAgICAgICAgfSk7XHJcblxyXG4gICAgICAgICAgICAkKCcjc2hvdy1sYWJsZScpLnRleHQobGFiZWwpO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIGxldCBwb3NpdGlvbiA9ICQodGhpcykucG9zaXRpb24oKTtcclxuICAgICAgICAgICAgJCh0aGlzKS5maW5kKCd1bCcpLmFkZENsYXNzKCdvcGVuJyk7XHJcblxyXG4gICAgICAgICAgICBpZiAoJCh0aGlzKS5maW5kKCd1bCcpLmhhc0NsYXNzKCdvcGVuJykpIHtcclxuICAgICAgICAgICAgICAgIGNvbnN0IGhlaWdodCA9IDQ3O1xyXG4gICAgICAgICAgICAgICAgbGV0IGNvdW50X3N1Ym1lbnVfbGkgPSAkKHRoaXMpLmZpbmQoJ3VsID4gbGknKS5sZW5ndGg7XHJcbiAgICAgICAgICAgICAgICBpZiAocG9zaXRpb24udG9wID49IDU4MCkge1xyXG4gICAgICAgICAgICAgICAgICAgIGxldCBzdHlsZSA9IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgJ3RvcCc6IChwb3NpdGlvbi50b3AgKyAxMDApIC0gKGhlaWdodCAqIGNvdW50X3N1Ym1lbnVfbGkpLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAnaGVpZ2h0JzogaGVpZ2h0ICogY291bnRfc3VibWVudV9saSArICdweCdcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgJCh0aGlzKS5maW5kKCd1bC5vcGVuJykuY3NzKHN0eWxlKTtcclxuICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgbGV0IHN0eWxlID0ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAndG9wJzogcG9zaXRpb24udG9wICsgNzksXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICdoZWlnaHQnOiBoZWlnaHQgKiBjb3VudF9zdWJtZW51X2xpICsgJ3B4J1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgJCh0aGlzKS5maW5kKCd1bC5vcGVuJykuY3NzKHN0eWxlKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH0pO1xyXG5cclxuICAgICQoZG9jdW1lbnQpLm9uKCdtb3VzZW91dCcsICcjbGVmdC1tZW51LnNtYWxsLWxlZnQtbWVudSBsaSBhJywgZnVuY3Rpb24oZSkge1xyXG4gICAgICAgICQoJyNzaG93LWxhYmxlJykuY3NzKHtcclxuICAgICAgICAgICAgJ29wYWNpdHknOiAwLFxyXG4gICAgICAgICAgICAndmlzaWJpbGl0eSc6ICdoaWRkZW4nXHJcbiAgICAgICAgfSk7XHJcbiAgICB9KTtcclxuXHJcbiAgICAkKGRvY3VtZW50KS5vbignbW91c2VvdXQnLCAnI2xlZnQtbWVudS5zbWFsbC1sZWZ0LW1lbnUgbGkuaGFzLXN1YicsIGZ1bmN0aW9uKGUpIHtcclxuICAgICAgICAkKHRoaXMpLmZpbmQoJ3VsJykuY3NzKHtcclxuICAgICAgICAgICAgJ2hlaWdodCc6IDAsXHJcbiAgICAgICAgfSk7XHJcbiAgICB9KTtcclxuXHJcbiAgICAkKHdpbmRvdykucmVzaXplKGZ1bmN0aW9uKCkge1xyXG4gICAgICAgIHdpbmRvd1Jlc2l6ZSgpO1xyXG4gICAgfSk7XHJcblxyXG4gICAgJCh3aW5kb3cpLm9uKCdsb2FkJywgZnVuY3Rpb24oKSB7XHJcbiAgICAgICAgd2luZG93UmVzaXplKCk7XHJcbiAgICB9KTtcclxuXHJcbiAgICAkKCcjbGVmdC1tZW51IGxpLmhhcy1zdWIgPiBhJykub24oJ2NsaWNrJywgZnVuY3Rpb24oKSB7XHJcbiAgICAgICAgbGV0IF90aGlzID0gJCh0aGlzKS5wYXJlbnQoKTtcclxuXHJcbiAgICAgICAgX3RoaXMuZmluZCgndWwnKS50b2dnbGVDbGFzcygnb3BlbicpO1xyXG4gICAgICAgICQodGhpcykuY2xvc2VzdCgnbGknKS50b2dnbGVDbGFzcygncm90YXRlJyk7XHJcblxyXG4gICAgICAgIF90aGlzLmNsb3Nlc3QoJyNsZWZ0LW1lbnUnKS5maW5kKCcub3BlbicpLm5vdChfdGhpcy5maW5kKCd1bCcpKS5yZW1vdmVDbGFzcygnb3BlbicpO1xyXG4gICAgICAgIF90aGlzLmNsb3Nlc3QoJyNsZWZ0LW1lbnUnKS5maW5kKCcucm90YXRlJykubm90KCQodGhpcykuY2xvc2VzdCgnbGknKSkucmVtb3ZlQ2xhc3MoJ3JvdGF0ZScpO1xyXG4gICAgICAgIF90aGlzLmNsb3Nlc3QoJyNsZWZ0LW1lbnUnKS5maW5kKCd1bCcpLmNzcygnaGVpZ2h0JywgMCk7XHJcblxyXG4gICAgICAgIGlmIChfdGhpcy5maW5kKCd1bCcpLmhhc0NsYXNzKCdvcGVuJykpIHtcclxuICAgICAgICAgICAgY29uc3QgaGVpZ2h0ID0gNDc7XHJcbiAgICAgICAgICAgIGxldCBjb3VudF9zdWJtZW51X2xpID0gX3RoaXMuZmluZCgndWwgPiBsaScpLmxlbmd0aDtcclxuICAgICAgICAgICAgX3RoaXMuZmluZCgndWwnKS5jc3MoJ2hlaWdodCcsIGhlaWdodCAqIGNvdW50X3N1Ym1lbnVfbGkgKyAncHgnKTtcclxuICAgICAgICB9XHJcbiAgICB9KTtcclxuXHJcbiAgICAkKCcjbGVmdC1tZW51IHVsIGxpJykub24oJ2NsaWNrJywgZnVuY3Rpb24oKSB7XHJcbiAgICAgICAgbGV0IGNsaWNrZWRJZCA9ICQodGhpcykuYXR0cignaWQnKTtcclxuICAgIFxyXG4gICAgICAgIGxldCBjb250ZW50SWQgPSAnY29udGVudC0nICsgY2xpY2tlZElkO1xyXG4gICAgXHJcbiAgICAgICAgJCgnI2xlZnQtbWVudSB1bCBsaSwgLnBhZ2UnKS5yZW1vdmVDbGFzcygnYWN0aXZlJyk7XHJcbiAgICBcclxuICAgICAgICAkKHRoaXMpLmFkZENsYXNzKCdhY3RpdmUnKTtcclxuICAgICAgICAkKCcjJyArIGNvbnRlbnRJZCkuYWRkQ2xhc3MoJ2FjdGl2ZScpO1xyXG4gICAgfSk7XHJcblxyXG4gICAgJCgnLnRyYXNoLXVzZXInKS5vbignY2xpY2snLCBmdW5jdGlvbigpIHtcclxuICAgICAgICBsZXQgdXNlcklkID0gJCh0aGlzKS5hdHRyKCdkYXRhLWlkJyk7XHJcbiAgICBcclxuICAgICAgICBsZXQgaXNDb25maXJtZWQgPSBjb25maXJtKCfCv0VzdMOhcyBzZWd1cm8gZGUgcXVlIHF1aWVyZXMgZWxpbWluYXIgZXN0ZSB1c3VhcmlvPycpO1xyXG4gICAgXHJcbiAgICAgICAgaWYgKGlzQ29uZmlybWVkKSB7XHJcbiAgICAgICAgICAgICQuYWpheCh7XHJcbiAgICAgICAgICAgICAgICB1cmw6ICcvZGVsZXRlX3VzZXIvJyArIHVzZXJJZCxcclxuICAgICAgICAgICAgICAgIHR5cGU6ICdERUxFVEUnLFxyXG4gICAgICAgICAgICAgICAgc3VjY2VzczogZnVuY3Rpb24ocmVzdWx0KSB7XHJcbiAgICAgICAgICAgICAgICAgICAgJCgnYnV0dG9uW2RhdGEtaWQ9XCInICsgdXNlcklkICsgJ1wiXScpLnBhcmVudHMoJ3RyJykucmVtb3ZlKCk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH1cclxuICAgIH0pO1xyXG5cclxuICAgICQoXCIjYWRkQ2F0ZWdvcnlcIikub24oJ2NsaWNrJywgZnVuY3Rpb24oKXtcclxuICAgICAgICBsZXQgY2F0ZWdvcnlOYW1lID0gJChcIiNjYXRlZ29yeVwiKS52YWwoKTtcclxuICAgICAgICBpZihjYXRlZ29yeU5hbWUpIHtcclxuICAgICAgICAgICAgJC5hamF4KHtcclxuICAgICAgICAgICAgICAgIHVybDogXCIvcmVnaXN0ZXIvY2F0ZWdvcmllc1wiLFxyXG4gICAgICAgICAgICAgICAgdHlwZTogXCJQT1NUXCIsXHJcbiAgICAgICAgICAgICAgICBkYXRhOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgY2F0ZWdvcnk6IGNhdGVnb3J5TmFtZVxyXG4gICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgIHN1Y2Nlc3M6IGZ1bmN0aW9uIChkYXRhKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgLy8gU3Vwb25pZW5kbyBxdWUgZGF0YSBjb250aWVuZSBlbCBudWV2byBvYmpldG8gY2F0ZWdvcsOtYVxyXG4gICAgICAgICAgICAgICAgICAgIGxldCBuZXdSb3cgPSAkKFwiPHRyPlwiKTtcclxuICAgICAgICAgICAgICAgICAgICBsZXQgY29scyA9IFwiXCI7XHJcbiAgICBcclxuICAgICAgICAgICAgICAgICAgICBjb2xzICs9ICc8dGQgZGF0YS1sYWJlbD1cIklEXCI+JyArIGRhdGEuaWQgKyAnPC90ZD4nO1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbHMgKz0gJzx0ZCBkYXRhLWxhYmVsPVwiTmFtZVwiPicgKyBkYXRhLmNhdGVnb3J5ICsgJzwvdGQ+JztcclxuICAgICAgICAgICAgICAgICAgICBjb2xzICs9IGA8dGQgZGF0YS1sYWJlbD1cIlwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIGNsYXNzPVwiYnRuIGVkaXQtY2F0ZWdvcnlcIiBkYXRhLWlkPVwiJHtkYXRhLmlkfVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3M9XCJtYXRlcmlhbC1pY29uc1wiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGVkaXRcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9idXR0b24+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxidXR0b24gY2xhc3M9XCJidG4gdHJhc2gtY2F0ZWdvcnlcIiBkYXRhLWlkPVwiJHtkYXRhLmlkfVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3M9XCJtYXRlcmlhbC1pY29uc1wiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRlbGV0ZV9mb3JldmVyXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvdGQ+YDtcclxuICAgIFxyXG4gICAgICAgICAgICAgICAgICAgIG5ld1Jvdy5hcHBlbmQoY29scyk7XHJcbiAgICAgICAgICAgICAgICAgICAgJChcInRhYmxlXCIpLmFwcGVuZChuZXdSb3cpO1xyXG4gICAgICAgICAgICAgICAgICAgICQoXCIjY2F0ZWdvcnlcIikudmFsKCcnKTtcclxuICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICBlcnJvcjogZnVuY3Rpb24gKHhociwgYWpheE9wdGlvbnMsIHRocm93bkVycm9yKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgYWxlcnQodGhyb3duRXJyb3IpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICBhbGVydCgnUGxlYXNlIGVudGVyIGEgY2F0ZWdvcnkgbmFtZScpO1xyXG4gICAgICAgIH1cclxuICAgIH0pO1xyXG5cclxuICAgICQoJy50cmFzaC1jYXRlZ29yeScpLm9uKCdjbGljaycsIGZ1bmN0aW9uKCkge1xyXG4gICAgICAgIGxldCB1c2VySWQgPSAkKHRoaXMpLmF0dHIoJ2RhdGEtaWQnKTtcclxuICAgIFxyXG4gICAgICAgIGxldCBpc0NvbmZpcm1lZCA9IGNvbmZpcm0oJ8K/RXN0w6FzIHNlZ3VybyBkZSBxdWUgcXVpZXJlcyBlbGltaW5hciBlc3RlIHVzdWFyaW8/Jyk7XHJcbiAgICBcclxuICAgICAgICBpZiAoaXNDb25maXJtZWQpIHtcclxuICAgICAgICAgICAgJC5hamF4KHtcclxuICAgICAgICAgICAgICAgIHVybDogJy9kZWxldGVfY2F0ZWdvcnkvJyArIHVzZXJJZCxcclxuICAgICAgICAgICAgICAgIHR5cGU6ICdERUxFVEUnLFxyXG4gICAgICAgICAgICAgICAgc3VjY2VzczogZnVuY3Rpb24ocmVzdWx0KSB7XHJcbiAgICAgICAgICAgICAgICAgICAgJCgnYnV0dG9uW2RhdGEtaWQ9XCInICsgdXNlcklkICsgJ1wiXScpLnBhcmVudHMoJ3RyJykucmVtb3ZlKCk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH1cclxuICAgIH0pO1xyXG5cclxuICAgIGZ1bmN0aW9uIHdpbmRvd1Jlc2l6ZSgpIHtcclxuICAgICAgICBsZXQgd2lkdGggPSAkKHdpbmRvdykud2lkdGgoKTtcclxuICAgICAgICBpZiAod2lkdGggPD0gOTkyKSB7XHJcbiAgICAgICAgICAgICQoJyNsZWZ0LW1lbnUnKS5hZGRDbGFzcygnc21hbGwtbGVmdC1tZW51Jyk7XHJcbiAgICAgICAgICAgICQoJyNsb2dvJykuYWRkQ2xhc3MoJ3NtYWxsLWxlZnQtbWVudSBwLTAgcGwtMScpO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICQoJyNsZWZ0LW1lbnUnKS5yZW1vdmVDbGFzcygnc21hbGwtbGVmdC1tZW51Jyk7XHJcbiAgICAgICAgICAgICQoJyNsb2dvJykucmVtb3ZlQ2xhc3MoJ3NtYWxsLWxlZnQtbWVudSBwLTAgcGwtMScpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbn0pO1xyXG4iLCJ2YXIgZmFpbHMgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvZmFpbHMnKTtcbnZhciB3ZWxsS25vd25TeW1ib2wgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvd2VsbC1rbm93bi1zeW1ib2wnKTtcbnZhciBWOF9WRVJTSU9OID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2VuZ2luZS12OC12ZXJzaW9uJyk7XG5cbnZhciBTUEVDSUVTID0gd2VsbEtub3duU3ltYm9sKCdzcGVjaWVzJyk7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKE1FVEhPRF9OQU1FKSB7XG4gIC8vIFdlIGNhbid0IHVzZSB0aGlzIGZlYXR1cmUgZGV0ZWN0aW9uIGluIFY4IHNpbmNlIGl0IGNhdXNlc1xuICAvLyBkZW9wdGltaXphdGlvbiBhbmQgc2VyaW91cyBwZXJmb3JtYW5jZSBkZWdyYWRhdGlvblxuICAvLyBodHRwczovL2dpdGh1Yi5jb20vemxvaXJvY2svY29yZS1qcy9pc3N1ZXMvNjc3XG4gIHJldHVybiBWOF9WRVJTSU9OID49IDUxIHx8ICFmYWlscyhmdW5jdGlvbiAoKSB7XG4gICAgdmFyIGFycmF5ID0gW107XG4gICAgdmFyIGNvbnN0cnVjdG9yID0gYXJyYXkuY29uc3RydWN0b3IgPSB7fTtcbiAgICBjb25zdHJ1Y3RvcltTUEVDSUVTXSA9IGZ1bmN0aW9uICgpIHtcbiAgICAgIHJldHVybiB7IGZvbzogMSB9O1xuICAgIH07XG4gICAgcmV0dXJuIGFycmF5W01FVEhPRF9OQU1FXShCb29sZWFuKS5mb28gIT09IDE7XG4gIH0pO1xufTtcbiIsInZhciAkVHlwZUVycm9yID0gVHlwZUVycm9yO1xudmFyIE1BWF9TQUZFX0lOVEVHRVIgPSAweDFGRkZGRkZGRkZGRkZGOyAvLyAyICoqIDUzIC0gMSA9PSA5MDA3MTk5MjU0NzQwOTkxXG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0KSB7XG4gIGlmIChpdCA+IE1BWF9TQUZFX0lOVEVHRVIpIHRocm93ICRUeXBlRXJyb3IoJ01heGltdW0gYWxsb3dlZCBpbmRleCBleGNlZWRlZCcpO1xuICByZXR1cm4gaXQ7XG59O1xuIiwiJ3VzZSBzdHJpY3QnO1xudmFyICQgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvZXhwb3J0Jyk7XG52YXIgZmFpbHMgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvZmFpbHMnKTtcbnZhciBpc0FycmF5ID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2lzLWFycmF5Jyk7XG52YXIgaXNPYmplY3QgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvaXMtb2JqZWN0Jyk7XG52YXIgdG9PYmplY3QgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvdG8tb2JqZWN0Jyk7XG52YXIgbGVuZ3RoT2ZBcnJheUxpa2UgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvbGVuZ3RoLW9mLWFycmF5LWxpa2UnKTtcbnZhciBkb2VzTm90RXhjZWVkU2FmZUludGVnZXIgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvZG9lcy1ub3QtZXhjZWVkLXNhZmUtaW50ZWdlcicpO1xudmFyIGNyZWF0ZVByb3BlcnR5ID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2NyZWF0ZS1wcm9wZXJ0eScpO1xudmFyIGFycmF5U3BlY2llc0NyZWF0ZSA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9hcnJheS1zcGVjaWVzLWNyZWF0ZScpO1xudmFyIGFycmF5TWV0aG9kSGFzU3BlY2llc1N1cHBvcnQgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvYXJyYXktbWV0aG9kLWhhcy1zcGVjaWVzLXN1cHBvcnQnKTtcbnZhciB3ZWxsS25vd25TeW1ib2wgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvd2VsbC1rbm93bi1zeW1ib2wnKTtcbnZhciBWOF9WRVJTSU9OID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2VuZ2luZS12OC12ZXJzaW9uJyk7XG5cbnZhciBJU19DT05DQVRfU1BSRUFEQUJMRSA9IHdlbGxLbm93blN5bWJvbCgnaXNDb25jYXRTcHJlYWRhYmxlJyk7XG5cbi8vIFdlIGNhbid0IHVzZSB0aGlzIGZlYXR1cmUgZGV0ZWN0aW9uIGluIFY4IHNpbmNlIGl0IGNhdXNlc1xuLy8gZGVvcHRpbWl6YXRpb24gYW5kIHNlcmlvdXMgcGVyZm9ybWFuY2UgZGVncmFkYXRpb25cbi8vIGh0dHBzOi8vZ2l0aHViLmNvbS96bG9pcm9jay9jb3JlLWpzL2lzc3Vlcy82NzlcbnZhciBJU19DT05DQVRfU1BSRUFEQUJMRV9TVVBQT1JUID0gVjhfVkVSU0lPTiA+PSA1MSB8fCAhZmFpbHMoZnVuY3Rpb24gKCkge1xuICB2YXIgYXJyYXkgPSBbXTtcbiAgYXJyYXlbSVNfQ09OQ0FUX1NQUkVBREFCTEVdID0gZmFsc2U7XG4gIHJldHVybiBhcnJheS5jb25jYXQoKVswXSAhPT0gYXJyYXk7XG59KTtcblxudmFyIGlzQ29uY2F0U3ByZWFkYWJsZSA9IGZ1bmN0aW9uIChPKSB7XG4gIGlmICghaXNPYmplY3QoTykpIHJldHVybiBmYWxzZTtcbiAgdmFyIHNwcmVhZGFibGUgPSBPW0lTX0NPTkNBVF9TUFJFQURBQkxFXTtcbiAgcmV0dXJuIHNwcmVhZGFibGUgIT09IHVuZGVmaW5lZCA/ICEhc3ByZWFkYWJsZSA6IGlzQXJyYXkoTyk7XG59O1xuXG52YXIgRk9SQ0VEID0gIUlTX0NPTkNBVF9TUFJFQURBQkxFX1NVUFBPUlQgfHwgIWFycmF5TWV0aG9kSGFzU3BlY2llc1N1cHBvcnQoJ2NvbmNhdCcpO1xuXG4vLyBgQXJyYXkucHJvdG90eXBlLmNvbmNhdGAgbWV0aG9kXG4vLyBodHRwczovL3RjMzkuZXMvZWNtYTI2Mi8jc2VjLWFycmF5LnByb3RvdHlwZS5jb25jYXRcbi8vIHdpdGggYWRkaW5nIHN1cHBvcnQgb2YgQEBpc0NvbmNhdFNwcmVhZGFibGUgYW5kIEBAc3BlY2llc1xuJCh7IHRhcmdldDogJ0FycmF5JywgcHJvdG86IHRydWUsIGFyaXR5OiAxLCBmb3JjZWQ6IEZPUkNFRCB9LCB7XG4gIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby11bnVzZWQtdmFycyAtLSByZXF1aXJlZCBmb3IgYC5sZW5ndGhgXG4gIGNvbmNhdDogZnVuY3Rpb24gY29uY2F0KGFyZykge1xuICAgIHZhciBPID0gdG9PYmplY3QodGhpcyk7XG4gICAgdmFyIEEgPSBhcnJheVNwZWNpZXNDcmVhdGUoTywgMCk7XG4gICAgdmFyIG4gPSAwO1xuICAgIHZhciBpLCBrLCBsZW5ndGgsIGxlbiwgRTtcbiAgICBmb3IgKGkgPSAtMSwgbGVuZ3RoID0gYXJndW1lbnRzLmxlbmd0aDsgaSA8IGxlbmd0aDsgaSsrKSB7XG4gICAgICBFID0gaSA9PT0gLTEgPyBPIDogYXJndW1lbnRzW2ldO1xuICAgICAgaWYgKGlzQ29uY2F0U3ByZWFkYWJsZShFKSkge1xuICAgICAgICBsZW4gPSBsZW5ndGhPZkFycmF5TGlrZShFKTtcbiAgICAgICAgZG9lc05vdEV4Y2VlZFNhZmVJbnRlZ2VyKG4gKyBsZW4pO1xuICAgICAgICBmb3IgKGsgPSAwOyBrIDwgbGVuOyBrKyssIG4rKykgaWYgKGsgaW4gRSkgY3JlYXRlUHJvcGVydHkoQSwgbiwgRVtrXSk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBkb2VzTm90RXhjZWVkU2FmZUludGVnZXIobiArIDEpO1xuICAgICAgICBjcmVhdGVQcm9wZXJ0eShBLCBuKyssIEUpO1xuICAgICAgfVxuICAgIH1cbiAgICBBLmxlbmd0aCA9IG47XG4gICAgcmV0dXJuIEE7XG4gIH1cbn0pO1xuIiwiJ3VzZSBzdHJpY3QnO1xudmFyICQgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvZXhwb3J0Jyk7XG52YXIgJGZpbmQgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvYXJyYXktaXRlcmF0aW9uJykuZmluZDtcbnZhciBhZGRUb1Vuc2NvcGFibGVzID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2FkZC10by11bnNjb3BhYmxlcycpO1xuXG52YXIgRklORCA9ICdmaW5kJztcbnZhciBTS0lQU19IT0xFUyA9IHRydWU7XG5cbi8vIFNob3VsZG4ndCBza2lwIGhvbGVzXG4vLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgZXMvbm8tYXJyYXktcHJvdG90eXBlLWZpbmQgLS0gdGVzdGluZ1xuaWYgKEZJTkQgaW4gW10pIEFycmF5KDEpW0ZJTkRdKGZ1bmN0aW9uICgpIHsgU0tJUFNfSE9MRVMgPSBmYWxzZTsgfSk7XG5cbi8vIGBBcnJheS5wcm90b3R5cGUuZmluZGAgbWV0aG9kXG4vLyBodHRwczovL3RjMzkuZXMvZWNtYTI2Mi8jc2VjLWFycmF5LnByb3RvdHlwZS5maW5kXG4kKHsgdGFyZ2V0OiAnQXJyYXknLCBwcm90bzogdHJ1ZSwgZm9yY2VkOiBTS0lQU19IT0xFUyB9LCB7XG4gIGZpbmQ6IGZ1bmN0aW9uIGZpbmQoY2FsbGJhY2tmbiAvKiAsIHRoYXQgPSB1bmRlZmluZWQgKi8pIHtcbiAgICByZXR1cm4gJGZpbmQodGhpcywgY2FsbGJhY2tmbiwgYXJndW1lbnRzLmxlbmd0aCA+IDEgPyBhcmd1bWVudHNbMV0gOiB1bmRlZmluZWQpO1xuICB9XG59KTtcblxuLy8gaHR0cHM6Ly90YzM5LmVzL2VjbWEyNjIvI3NlYy1hcnJheS5wcm90b3R5cGUtQEB1bnNjb3BhYmxlc1xuYWRkVG9VbnNjb3BhYmxlcyhGSU5EKTtcbiJdLCJuYW1lcyI6WyIkIiwib24iLCJlIiwicHJldmVudERlZmF1bHQiLCJ0YXJnZXQiLCJhdHRyIiwibm90IiwiaGlkZSIsImZhZGVJbiIsImhhc0NsYXNzIiwicmVtb3ZlQ2xhc3MiLCJhZGRDbGFzcyIsInRvZ2dsZUNsYXNzIiwidG9nZ2xlIiwiZG9jdW1lbnQiLCJsYWJlbCIsImZpbmQiLCJ0ZXh0IiwicG9zaXRpb24iLCJjc3MiLCJ0b3AiLCJsZWZ0IiwiaGVpZ2h0IiwiY291bnRfc3VibWVudV9saSIsImxlbmd0aCIsInN0eWxlIiwid2luZG93IiwicmVzaXplIiwid2luZG93UmVzaXplIiwiX3RoaXMiLCJwYXJlbnQiLCJjbG9zZXN0IiwiY2xpY2tlZElkIiwiY29udGVudElkIiwidXNlcklkIiwiaXNDb25maXJtZWQiLCJjb25maXJtIiwiYWpheCIsInVybCIsInR5cGUiLCJzdWNjZXNzIiwicmVzdWx0IiwicGFyZW50cyIsInJlbW92ZSIsImNhdGVnb3J5TmFtZSIsInZhbCIsImRhdGEiLCJjYXRlZ29yeSIsIm5ld1JvdyIsImNvbHMiLCJpZCIsImNvbmNhdCIsImFwcGVuZCIsImVycm9yIiwieGhyIiwiYWpheE9wdGlvbnMiLCJ0aHJvd25FcnJvciIsImFsZXJ0Iiwid2lkdGgiXSwic291cmNlUm9vdCI6IiJ9
"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([["panels"],{

/***/ "./assets/js/panels.js":
/*!*****************************!*\
  !*** ./assets/js/panels.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var core_js_modules_es_array_find_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.array.find.js */ "./node_modules/core-js/modules/es.array.find.js");
/* harmony import */ var core_js_modules_es_array_find_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_find_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es.object.to-string.js */ "./node_modules/core-js/modules/es.object.to-string.js");
/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_2__);



jquery__WEBPACK_IMPORTED_MODULE_2___default()(function () {
  jquery__WEBPACK_IMPORTED_MODULE_2___default()(".sidebar-item").on('click', function (e) {
    e.preventDefault();
    var target = jquery__WEBPACK_IMPORTED_MODULE_2___default()(this).attr('href');
    jquery__WEBPACK_IMPORTED_MODULE_2___default()('.content').not(target).hide();
    jquery__WEBPACK_IMPORTED_MODULE_2___default()(target).fadeIn(600);
  });
  jquery__WEBPACK_IMPORTED_MODULE_2___default()('#toggle-left-menu').on('click', function () {
    if (jquery__WEBPACK_IMPORTED_MODULE_2___default()('#left-menu').hasClass('small-left-menu')) {
      jquery__WEBPACK_IMPORTED_MODULE_2___default()('#left-menu').removeClass('small-left-menu');
    } else {
      jquery__WEBPACK_IMPORTED_MODULE_2___default()('#left-menu').addClass('small-left-menu');
    }
    jquery__WEBPACK_IMPORTED_MODULE_2___default()('#logo').toggleClass('small-left-menu');
    jquery__WEBPACK_IMPORTED_MODULE_2___default()('#page-container').toggleClass('small-left-menu');
    jquery__WEBPACK_IMPORTED_MODULE_2___default()('#header .header-left').toggleClass('small-left-menu');
    jquery__WEBPACK_IMPORTED_MODULE_2___default()('#logo .big-logo').toggle('300');
    jquery__WEBPACK_IMPORTED_MODULE_2___default()('#logo .small-logo').toggle('300');
    jquery__WEBPACK_IMPORTED_MODULE_2___default()('#logo').toggleClass('p-0 pl-1');
    jquery__WEBPACK_IMPORTED_MODULE_2___default()('li h3').toggleClass('hidden');
  });
  jquery__WEBPACK_IMPORTED_MODULE_2___default()(document).on('mouseover', '#left-menu.small-left-menu > ul > li', function () {
    if (!jquery__WEBPACK_IMPORTED_MODULE_2___default()(this).hasClass('has-sub')) {
      var label = jquery__WEBPACK_IMPORTED_MODULE_2___default()(this).find('span').text();
      var position = jquery__WEBPACK_IMPORTED_MODULE_2___default()(this).position();
      jquery__WEBPACK_IMPORTED_MODULE_2___default()('#show-lable').css({
        'top': position.top + 79,
        'left': position.left + 59,
        'opacity': 1,
        'visibility': 'visible'
      });
      jquery__WEBPACK_IMPORTED_MODULE_2___default()('#show-lable').text(label);
    } else {
      var position = jquery__WEBPACK_IMPORTED_MODULE_2___default()(this).position();
      jquery__WEBPACK_IMPORTED_MODULE_2___default()(this).find('ul').addClass('open');
      if (jquery__WEBPACK_IMPORTED_MODULE_2___default()(this).find('ul').hasClass('open')) {
        var height = 47;
        var count_submenu_li = jquery__WEBPACK_IMPORTED_MODULE_2___default()(this).find('ul > li').length;
        if (position.top >= 580) {
          var style = {
            'top': position.top + 100 - height * count_submenu_li,
            'height': height * count_submenu_li + 'px'
          };
          jquery__WEBPACK_IMPORTED_MODULE_2___default()(this).find('ul.open').css(style);
        } else {
          var style = {
            'top': position.top + 79,
            'height': height * count_submenu_li + 'px'
          };
          jquery__WEBPACK_IMPORTED_MODULE_2___default()(this).find('ul.open').css(style);
        }
      }
    }
  });
  jquery__WEBPACK_IMPORTED_MODULE_2___default()(document).on('mouseout', '#left-menu.small-left-menu li a', function (e) {
    jquery__WEBPACK_IMPORTED_MODULE_2___default()('#show-lable').css({
      'opacity': 0,
      'visibility': 'hidden'
    });
  });
  jquery__WEBPACK_IMPORTED_MODULE_2___default()(document).on('mouseout', '#left-menu.small-left-menu li.has-sub', function (e) {
    jquery__WEBPACK_IMPORTED_MODULE_2___default()(this).find('ul').css({
      'height': 0
    });
  });
  jquery__WEBPACK_IMPORTED_MODULE_2___default()(window).resize(function () {
    windowResize();
  });
  jquery__WEBPACK_IMPORTED_MODULE_2___default()(window).on('load', function () {
    windowResize();
  });
  jquery__WEBPACK_IMPORTED_MODULE_2___default()('#left-menu li.has-sub > a').click(function () {
    var _this = jquery__WEBPACK_IMPORTED_MODULE_2___default()(this).parent();
    _this.find('ul').toggleClass('open');
    jquery__WEBPACK_IMPORTED_MODULE_2___default()(this).closest('li').toggleClass('rotate');
    _this.closest('#left-menu').find('.open').not(_this.find('ul')).removeClass('open');
    _this.closest('#left-menu').find('.rotate').not(jquery__WEBPACK_IMPORTED_MODULE_2___default()(this).closest('li')).removeClass('rotate');
    _this.closest('#left-menu').find('ul').css('height', 0);
    if (_this.find('ul').hasClass('open')) {
      var height = 47;
      var count_submenu_li = _this.find('ul > li').length;
      _this.find('ul').css('height', height * count_submenu_li + 'px');
    }
  });
  jquery__WEBPACK_IMPORTED_MODULE_2___default()('#left-menu ul li').on('click', function () {
    var clickedId = jquery__WEBPACK_IMPORTED_MODULE_2___default()(this).attr('id');
    var contentId = 'content-' + clickedId;
    jquery__WEBPACK_IMPORTED_MODULE_2___default()('#left-menu ul li, .page').removeClass('active');
    jquery__WEBPACK_IMPORTED_MODULE_2___default()(this).addClass('active');
    jquery__WEBPACK_IMPORTED_MODULE_2___default()('#' + contentId).addClass('active');
  });
  jquery__WEBPACK_IMPORTED_MODULE_2___default()('.trash').click(function () {
    var userId = jquery__WEBPACK_IMPORTED_MODULE_2___default()(this).attr('data-id');
    var isConfirmed = confirm('¿Estás seguro de que quieres eliminar este usuario?');
    if (isConfirmed) {
      jquery__WEBPACK_IMPORTED_MODULE_2___default().ajax({
        url: '/delete_user/' + userId,
        type: 'DELETE',
        success: function success(result) {
          jquery__WEBPACK_IMPORTED_MODULE_2___default()('button[data-id="' + userId + '"]').parents('tr').remove();
        }
      });
    }
  });
  function windowResize() {
    var width = jquery__WEBPACK_IMPORTED_MODULE_2___default()(window).width();
    if (width <= 992) {
      jquery__WEBPACK_IMPORTED_MODULE_2___default()('#left-menu').addClass('small-left-menu');
      jquery__WEBPACK_IMPORTED_MODULE_2___default()('#logo').addClass('small-left-menu p-0 pl-1');
    } else {
      jquery__WEBPACK_IMPORTED_MODULE_2___default()('#left-menu').removeClass('small-left-menu');
      jquery__WEBPACK_IMPORTED_MODULE_2___default()('#logo').removeClass('small-left-menu p-0 pl-1');
    }
  }
});

/***/ }),

/***/ "./node_modules/core-js/modules/es.array.find.js":
/*!*******************************************************!*\
  !*** ./node_modules/core-js/modules/es.array.find.js ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {


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
/******/ __webpack_require__.O(0, ["vendors-node_modules_core-js_internals_export_js","vendors-node_modules_core-js_internals_classof_js-node_modules_core-js_internals_is-array_js--e42e13","vendors-node_modules_core-js_internals_add-to-unscopables_js-node_modules_core-js_internals_a-464164"], () => (__webpack_exec__("./assets/js/panels.js")));
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ }
]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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IndlYnBhY2s6Ly8vLi9hc3NldHMvanMvcGFuZWxzLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9jb3JlLWpzL21vZHVsZXMvZXMuYXJyYXkuZmluZC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgJCBmcm9tICdqcXVlcnknO1xyXG5cclxuJChmdW5jdGlvbigpIHtcclxuICAgICQoXCIuc2lkZWJhci1pdGVtXCIpLm9uKCdjbGljaycsIGZ1bmN0aW9uKGUpe1xyXG4gICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuICAgICAgICB2YXIgdGFyZ2V0ID0gJCh0aGlzKS5hdHRyKCdocmVmJyk7XHJcbiAgICAgICAgJCgnLmNvbnRlbnQnKS5ub3QodGFyZ2V0KS5oaWRlKCk7XHJcbiAgICAgICAgJCh0YXJnZXQpLmZhZGVJbig2MDApO1xyXG4gICAgfSk7XHJcblxyXG5cclxuICAgICQoJyN0b2dnbGUtbGVmdC1tZW51Jykub24oJ2NsaWNrJyAsZnVuY3Rpb24oKSB7XHJcbiAgICAgICAgaWYgKCQoJyNsZWZ0LW1lbnUnKS5oYXNDbGFzcygnc21hbGwtbGVmdC1tZW51JykpIHtcclxuICAgICAgICAgICAgJCgnI2xlZnQtbWVudScpLnJlbW92ZUNsYXNzKCdzbWFsbC1sZWZ0LW1lbnUnKTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAkKCcjbGVmdC1tZW51JykuYWRkQ2xhc3MoJ3NtYWxsLWxlZnQtbWVudScpO1xyXG4gICAgICAgIH1cclxuICAgICAgICAkKCcjbG9nbycpLnRvZ2dsZUNsYXNzKCdzbWFsbC1sZWZ0LW1lbnUnKTtcclxuICAgICAgICAkKCcjcGFnZS1jb250YWluZXInKS50b2dnbGVDbGFzcygnc21hbGwtbGVmdC1tZW51Jyk7XHJcbiAgICAgICAgJCgnI2hlYWRlciAuaGVhZGVyLWxlZnQnKS50b2dnbGVDbGFzcygnc21hbGwtbGVmdC1tZW51Jyk7XHJcblxyXG4gICAgICAgICQoJyNsb2dvIC5iaWctbG9nbycpLnRvZ2dsZSgnMzAwJyk7XHJcbiAgICAgICAgJCgnI2xvZ28gLnNtYWxsLWxvZ28nKS50b2dnbGUoJzMwMCcpO1xyXG4gICAgICAgICQoJyNsb2dvJykudG9nZ2xlQ2xhc3MoJ3AtMCBwbC0xJyk7XHJcbiAgICAgICAgJCgnbGkgaDMnKS50b2dnbGVDbGFzcygnaGlkZGVuJyk7XHJcbiAgICB9KTtcclxuXHJcbiAgICAkKGRvY3VtZW50KS5vbignbW91c2VvdmVyJywgJyNsZWZ0LW1lbnUuc21hbGwtbGVmdC1tZW51ID4gdWwgPiBsaScsIGZ1bmN0aW9uKCkge1xyXG4gICAgICAgIGlmICghJCh0aGlzKS5oYXNDbGFzcygnaGFzLXN1YicpKSB7XHJcbiAgICAgICAgICAgIHZhciBsYWJlbCA9ICQodGhpcykuZmluZCgnc3BhbicpLnRleHQoKTtcclxuICAgICAgICAgICAgdmFyIHBvc2l0aW9uID0gJCh0aGlzKS5wb3NpdGlvbigpO1xyXG4gICAgICAgICAgICAkKCcjc2hvdy1sYWJsZScpLmNzcyh7XHJcbiAgICAgICAgICAgICAgICAndG9wJzogcG9zaXRpb24udG9wICsgNzksXHJcbiAgICAgICAgICAgICAgICAnbGVmdCc6IHBvc2l0aW9uLmxlZnQgKyA1OSxcclxuICAgICAgICAgICAgICAgICdvcGFjaXR5JzogMSxcclxuICAgICAgICAgICAgICAgICd2aXNpYmlsaXR5JzogJ3Zpc2libGUnXHJcbiAgICAgICAgICAgIH0pO1xyXG5cclxuICAgICAgICAgICAgJCgnI3Nob3ctbGFibGUnKS50ZXh0KGxhYmVsKTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICB2YXIgcG9zaXRpb24gPSAkKHRoaXMpLnBvc2l0aW9uKCk7XHJcbiAgICAgICAgICAgICQodGhpcykuZmluZCgndWwnKS5hZGRDbGFzcygnb3BlbicpO1xyXG5cclxuICAgICAgICAgICAgaWYgKCQodGhpcykuZmluZCgndWwnKS5oYXNDbGFzcygnb3BlbicpKSB7XHJcbiAgICAgICAgICAgICAgICBjb25zdCBoZWlnaHQgPSA0NztcclxuICAgICAgICAgICAgICAgIHZhciBjb3VudF9zdWJtZW51X2xpID0gJCh0aGlzKS5maW5kKCd1bCA+IGxpJykubGVuZ3RoO1xyXG4gICAgICAgICAgICAgICAgaWYgKHBvc2l0aW9uLnRvcCA+PSA1ODApIHtcclxuICAgICAgICAgICAgICAgICAgICB2YXIgc3R5bGUgPSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICd0b3AnOiAocG9zaXRpb24udG9wICsgMTAwKSAtIChoZWlnaHQgKiBjb3VudF9zdWJtZW51X2xpKSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgJ2hlaWdodCc6IGhlaWdodCAqIGNvdW50X3N1Ym1lbnVfbGkgKyAncHgnXHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICQodGhpcykuZmluZCgndWwub3BlbicpLmNzcyhzdHlsZSk7XHJcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgIHZhciBzdHlsZSA9IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgJ3RvcCc6IHBvc2l0aW9uLnRvcCArIDc5LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAnaGVpZ2h0JzogaGVpZ2h0ICogY291bnRfc3VibWVudV9saSArICdweCdcclxuICAgICAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICQodGhpcykuZmluZCgndWwub3BlbicpLmNzcyhzdHlsZSk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9KTtcclxuXHJcbiAgICAkKGRvY3VtZW50KS5vbignbW91c2VvdXQnLCAnI2xlZnQtbWVudS5zbWFsbC1sZWZ0LW1lbnUgbGkgYScsIGZ1bmN0aW9uKGUpIHtcclxuICAgICAgICAkKCcjc2hvdy1sYWJsZScpLmNzcyh7XHJcbiAgICAgICAgICAgICdvcGFjaXR5JzogMCxcclxuICAgICAgICAgICAgJ3Zpc2liaWxpdHknOiAnaGlkZGVuJ1xyXG4gICAgICAgIH0pO1xyXG4gICAgfSk7XHJcblxyXG4gICAgJChkb2N1bWVudCkub24oJ21vdXNlb3V0JywgJyNsZWZ0LW1lbnUuc21hbGwtbGVmdC1tZW51IGxpLmhhcy1zdWInLCBmdW5jdGlvbihlKSB7XHJcbiAgICAgICAgJCh0aGlzKS5maW5kKCd1bCcpLmNzcyh7XHJcbiAgICAgICAgICAgICdoZWlnaHQnOiAwLFxyXG4gICAgICAgIH0pO1xyXG4gICAgfSk7XHJcblxyXG4gICAgJCh3aW5kb3cpLnJlc2l6ZShmdW5jdGlvbigpIHtcclxuICAgICAgICB3aW5kb3dSZXNpemUoKTtcclxuICAgIH0pO1xyXG5cclxuICAgICQod2luZG93KS5vbignbG9hZCcsIGZ1bmN0aW9uKCkge1xyXG4gICAgICAgIHdpbmRvd1Jlc2l6ZSgpO1xyXG4gICAgfSk7XHJcblxyXG4gICAgJCgnI2xlZnQtbWVudSBsaS5oYXMtc3ViID4gYScpLmNsaWNrKGZ1bmN0aW9uKCkge1xyXG4gICAgICAgIHZhciBfdGhpcyA9ICQodGhpcykucGFyZW50KCk7XHJcblxyXG4gICAgICAgIF90aGlzLmZpbmQoJ3VsJykudG9nZ2xlQ2xhc3MoJ29wZW4nKTtcclxuICAgICAgICAkKHRoaXMpLmNsb3Nlc3QoJ2xpJykudG9nZ2xlQ2xhc3MoJ3JvdGF0ZScpO1xyXG5cclxuICAgICAgICBfdGhpcy5jbG9zZXN0KCcjbGVmdC1tZW51JykuZmluZCgnLm9wZW4nKS5ub3QoX3RoaXMuZmluZCgndWwnKSkucmVtb3ZlQ2xhc3MoJ29wZW4nKTtcclxuICAgICAgICBfdGhpcy5jbG9zZXN0KCcjbGVmdC1tZW51JykuZmluZCgnLnJvdGF0ZScpLm5vdCgkKHRoaXMpLmNsb3Nlc3QoJ2xpJykpLnJlbW92ZUNsYXNzKCdyb3RhdGUnKTtcclxuICAgICAgICBfdGhpcy5jbG9zZXN0KCcjbGVmdC1tZW51JykuZmluZCgndWwnKS5jc3MoJ2hlaWdodCcsIDApO1xyXG5cclxuICAgICAgICBpZiAoX3RoaXMuZmluZCgndWwnKS5oYXNDbGFzcygnb3BlbicpKSB7XHJcbiAgICAgICAgICAgIGNvbnN0IGhlaWdodCA9IDQ3O1xyXG4gICAgICAgICAgICB2YXIgY291bnRfc3VibWVudV9saSA9IF90aGlzLmZpbmQoJ3VsID4gbGknKS5sZW5ndGg7XHJcbiAgICAgICAgICAgIF90aGlzLmZpbmQoJ3VsJykuY3NzKCdoZWlnaHQnLCBoZWlnaHQgKiBjb3VudF9zdWJtZW51X2xpICsgJ3B4Jyk7XHJcbiAgICAgICAgfVxyXG4gICAgfSk7XHJcblxyXG4gICAgJCgnI2xlZnQtbWVudSB1bCBsaScpLm9uKCdjbGljaycsIGZ1bmN0aW9uKCkge1xyXG4gICAgICAgIHZhciBjbGlja2VkSWQgPSAkKHRoaXMpLmF0dHIoJ2lkJyk7XHJcbiAgICBcclxuICAgICAgICB2YXIgY29udGVudElkID0gJ2NvbnRlbnQtJyArIGNsaWNrZWRJZDtcclxuICAgIFxyXG4gICAgICAgICQoJyNsZWZ0LW1lbnUgdWwgbGksIC5wYWdlJykucmVtb3ZlQ2xhc3MoJ2FjdGl2ZScpO1xyXG4gICAgXHJcbiAgICAgICAgJCh0aGlzKS5hZGRDbGFzcygnYWN0aXZlJyk7XHJcbiAgICAgICAgJCgnIycgKyBjb250ZW50SWQpLmFkZENsYXNzKCdhY3RpdmUnKTtcclxuICAgIH0pO1xyXG5cclxuICAgICQoJy50cmFzaCcpLmNsaWNrKGZ1bmN0aW9uKCkge1xyXG4gICAgICAgIHZhciB1c2VySWQgPSAkKHRoaXMpLmF0dHIoJ2RhdGEtaWQnKTtcclxuICAgIFxyXG4gICAgICAgIHZhciBpc0NvbmZpcm1lZCA9IGNvbmZpcm0oJ8K/RXN0w6FzIHNlZ3VybyBkZSBxdWUgcXVpZXJlcyBlbGltaW5hciBlc3RlIHVzdWFyaW8/Jyk7XHJcbiAgICBcclxuICAgICAgICBpZiAoaXNDb25maXJtZWQpIHtcclxuICAgICAgICAgICAgJC5hamF4KHtcclxuICAgICAgICAgICAgICAgIHVybDogJy9kZWxldGVfdXNlci8nICsgdXNlcklkLFxyXG4gICAgICAgICAgICAgICAgdHlwZTogJ0RFTEVURScsXHJcbiAgICAgICAgICAgICAgICBzdWNjZXNzOiBmdW5jdGlvbihyZXN1bHQpIHtcclxuICAgICAgICAgICAgICAgICAgICAkKCdidXR0b25bZGF0YS1pZD1cIicgKyB1c2VySWQgKyAnXCJdJykucGFyZW50cygndHInKS5yZW1vdmUoKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfVxyXG4gICAgfSk7XHJcblxyXG5cclxuICAgIGZ1bmN0aW9uIHdpbmRvd1Jlc2l6ZSgpIHtcclxuICAgICAgICB2YXIgd2lkdGggPSAkKHdpbmRvdykud2lkdGgoKTtcclxuICAgICAgICBpZiAod2lkdGggPD0gOTkyKSB7XHJcbiAgICAgICAgICAgICQoJyNsZWZ0LW1lbnUnKS5hZGRDbGFzcygnc21hbGwtbGVmdC1tZW51Jyk7XHJcbiAgICAgICAgICAgICQoJyNsb2dvJykuYWRkQ2xhc3MoJ3NtYWxsLWxlZnQtbWVudSBwLTAgcGwtMScpO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICQoJyNsZWZ0LW1lbnUnKS5yZW1vdmVDbGFzcygnc21hbGwtbGVmdC1tZW51Jyk7XHJcbiAgICAgICAgICAgICQoJyNsb2dvJykucmVtb3ZlQ2xhc3MoJ3NtYWxsLWxlZnQtbWVudSBwLTAgcGwtMScpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbn0pO1xyXG4iLCIndXNlIHN0cmljdCc7XG52YXIgJCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9leHBvcnQnKTtcbnZhciAkZmluZCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9hcnJheS1pdGVyYXRpb24nKS5maW5kO1xudmFyIGFkZFRvVW5zY29wYWJsZXMgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvYWRkLXRvLXVuc2NvcGFibGVzJyk7XG5cbnZhciBGSU5EID0gJ2ZpbmQnO1xudmFyIFNLSVBTX0hPTEVTID0gdHJ1ZTtcblxuLy8gU2hvdWxkbid0IHNraXAgaG9sZXNcbi8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBlcy9uby1hcnJheS1wcm90b3R5cGUtZmluZCAtLSB0ZXN0aW5nXG5pZiAoRklORCBpbiBbXSkgQXJyYXkoMSlbRklORF0oZnVuY3Rpb24gKCkgeyBTS0lQU19IT0xFUyA9IGZhbHNlOyB9KTtcblxuLy8gYEFycmF5LnByb3RvdHlwZS5maW5kYCBtZXRob2Rcbi8vIGh0dHBzOi8vdGMzOS5lcy9lY21hMjYyLyNzZWMtYXJyYXkucHJvdG90eXBlLmZpbmRcbiQoeyB0YXJnZXQ6ICdBcnJheScsIHByb3RvOiB0cnVlLCBmb3JjZWQ6IFNLSVBTX0hPTEVTIH0sIHtcbiAgZmluZDogZnVuY3Rpb24gZmluZChjYWxsYmFja2ZuIC8qICwgdGhhdCA9IHVuZGVmaW5lZCAqLykge1xuICAgIHJldHVybiAkZmluZCh0aGlzLCBjYWxsYmFja2ZuLCBhcmd1bWVudHMubGVuZ3RoID4gMSA/IGFyZ3VtZW50c1sxXSA6IHVuZGVmaW5lZCk7XG4gIH1cbn0pO1xuXG4vLyBodHRwczovL3RjMzkuZXMvZWNtYTI2Mi8jc2VjLWFycmF5LnByb3RvdHlwZS1AQHVuc2NvcGFibGVzXG5hZGRUb1Vuc2NvcGFibGVzKEZJTkQpO1xuIl0sIm5hbWVzIjpbIiQiLCJvbiIsImUiLCJwcmV2ZW50RGVmYXVsdCIsInRhcmdldCIsImF0dHIiLCJub3QiLCJoaWRlIiwiZmFkZUluIiwiaGFzQ2xhc3MiLCJyZW1vdmVDbGFzcyIsImFkZENsYXNzIiwidG9nZ2xlQ2xhc3MiLCJ0b2dnbGUiLCJkb2N1bWVudCIsImxhYmVsIiwiZmluZCIsInRleHQiLCJwb3NpdGlvbiIsImNzcyIsInRvcCIsImxlZnQiLCJoZWlnaHQiLCJjb3VudF9zdWJtZW51X2xpIiwibGVuZ3RoIiwic3R5bGUiLCJ3aW5kb3ciLCJyZXNpemUiLCJ3aW5kb3dSZXNpemUiLCJjbGljayIsIl90aGlzIiwicGFyZW50IiwiY2xvc2VzdCIsImNsaWNrZWRJZCIsImNvbnRlbnRJZCIsInVzZXJJZCIsImlzQ29uZmlybWVkIiwiY29uZmlybSIsImFqYXgiLCJ1cmwiLCJ0eXBlIiwic3VjY2VzcyIsInJlc3VsdCIsInBhcmVudHMiLCJyZW1vdmUiLCJ3aWR0aCJdLCJzb3VyY2VSb290IjoiIn0=
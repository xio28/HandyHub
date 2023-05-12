"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([["form"],{

/***/ "./assets/js/form.js":
/*!***************************!*\
  !*** ./assets/js/form.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var core_js_modules_es_json_stringify_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.json.stringify.js */ "./node_modules/core-js/modules/es.json.stringify.js");
/* harmony import */ var core_js_modules_es_json_stringify_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_json_stringify_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_1__);

// import JQuery library

var emailExists = false;
jquery__WEBPACK_IMPORTED_MODULE_1___default()(document).ready(function () {
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
    } else {
      jquery__WEBPACK_IMPORTED_MODULE_1___default()('#password-error').text('');
    }
  });
  jquery__WEBPACK_IMPORTED_MODULE_1___default()('#form').on('submit', function (e) {
    if (emailExists) {
      e.preventDefault();
      jquery__WEBPACK_IMPORTED_MODULE_1___default()('#email-error').text('El email ya existe en la base de datos');
    } else if (jquery__WEBPACK_IMPORTED_MODULE_1___default()('#password').val() !== jquery__WEBPACK_IMPORTED_MODULE_1___default()('#confirm_password').val()) {
      e.preventDefault();
      jquery__WEBPACK_IMPORTED_MODULE_1___default()('#password-error').text('Las contraseñas no coinciden');
    }
  });
});

/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ __webpack_require__.O(0, ["vendors-node_modules_core-js_modules_es_json_stringify_js-node_modules_jquery_dist_jquery_js"], () => (__webpack_exec__("./assets/js/form.js")));
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ }
]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZm9ybS5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUN1QjtBQUV2QixJQUFJQyxXQUFXLEdBQUcsS0FBSztBQUV2QkQsNkNBQUMsQ0FBQ0UsUUFBUSxDQUFDLENBQUNDLEtBQUssQ0FBQyxZQUFXO0VBQ3pCO0VBQ0E7RUFDQTtFQUNBO0VBQ0E7RUFDQTtFQUNBO0VBQ0E7RUFDQTtFQUNBO0VBQ0E7RUFDQTs7RUFFQUgsNkNBQUMsQ0FBQyxRQUFRLENBQUMsQ0FBQ0ksRUFBRSxDQUFDLE9BQU8sRUFBRSxZQUFXO0lBQy9CLElBQUlDLEtBQUssR0FBR0wsNkNBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQ00sR0FBRyxFQUFFO0lBQ3pCTixrREFBTSxDQUFDO01BQ0hRLEdBQUcsRUFBRSxjQUFjO01BQ25CQyxNQUFNLEVBQUUsTUFBTTtNQUNkQyxJQUFJLEVBQUVDLElBQUksQ0FBQ0MsU0FBUyxDQUFDO1FBQUNQLEtBQUssRUFBRUE7TUFBSyxDQUFDLENBQUM7TUFDcENRLE9BQU8sRUFBRSxTQUFBQSxRQUFTQyxRQUFRLEVBQUU7UUFDeEIsSUFBSUEsUUFBUSxDQUFDQyxNQUFNLEVBQUU7VUFDakJkLFdBQVcsR0FBRyxJQUFJO1VBQ2xCRCw2Q0FBQyxDQUFDLGNBQWMsQ0FBQyxDQUFDZ0IsSUFBSSxDQUFDLHdDQUF3QyxDQUFDO1FBQ3BFLENBQUMsTUFBTTtVQUNIZixXQUFXLEdBQUcsS0FBSztVQUNuQkQsNkNBQUMsQ0FBQyxjQUFjLENBQUMsQ0FBQ2dCLElBQUksQ0FBQyxFQUFFLENBQUM7UUFDOUI7TUFDSixDQUFDO01BQ0RDLEtBQUssRUFBRSxTQUFBQSxNQUFTQyxLQUFLLEVBQUVDLFVBQVUsRUFBRUMsV0FBVyxFQUFFO1FBQzVDQyxPQUFPLENBQUNKLEtBQUssQ0FBQyxTQUFTLEdBQUdFLFVBQVUsRUFBRUMsV0FBVyxDQUFDO01BQ3REO0lBQ0osQ0FBQyxDQUFDO0VBQ04sQ0FBQyxDQUFDO0VBRUZwQiw2Q0FBQyxDQUFDLG1CQUFtQixDQUFDLENBQUNJLEVBQUUsQ0FBQyxPQUFPLEVBQUUsWUFBVztJQUMxQyxJQUFJa0IsUUFBUSxHQUFHdEIsNkNBQUMsQ0FBQyxXQUFXLENBQUMsQ0FBQ00sR0FBRyxFQUFFO0lBQ25DLElBQUlpQixlQUFlLEdBQUd2Qiw2Q0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDTSxHQUFHLEVBQUU7SUFDbkMsSUFBSWdCLFFBQVEsS0FBS0MsZUFBZSxFQUFFO01BQzlCdkIsNkNBQUMsQ0FBQyxpQkFBaUIsQ0FBQyxDQUFDZ0IsSUFBSSxDQUFDLDhCQUE4QixDQUFDO0lBQzdELENBQUMsTUFBTTtNQUNIaEIsNkNBQUMsQ0FBQyxpQkFBaUIsQ0FBQyxDQUFDZ0IsSUFBSSxDQUFDLEVBQUUsQ0FBQztJQUNqQztFQUNKLENBQUMsQ0FBQztFQUVGaEIsNkNBQUMsQ0FBQyxPQUFPLENBQUMsQ0FBQ0ksRUFBRSxDQUFDLFFBQVEsRUFBRSxVQUFTb0IsQ0FBQyxFQUFFO0lBQ2hDLElBQUl2QixXQUFXLEVBQUU7TUFDYnVCLENBQUMsQ0FBQ0MsY0FBYyxFQUFFO01BQ2xCekIsNkNBQUMsQ0FBQyxjQUFjLENBQUMsQ0FBQ2dCLElBQUksQ0FBQyx3Q0FBd0MsQ0FBQztJQUNwRSxDQUFDLE1BQU0sSUFBSWhCLDZDQUFDLENBQUMsV0FBVyxDQUFDLENBQUNNLEdBQUcsRUFBRSxLQUFLTiw2Q0FBQyxDQUFDLG1CQUFtQixDQUFDLENBQUNNLEdBQUcsRUFBRSxFQUFFO01BQzlEa0IsQ0FBQyxDQUFDQyxjQUFjLEVBQUU7TUFDbEJ6Qiw2Q0FBQyxDQUFDLGlCQUFpQixDQUFDLENBQUNnQixJQUFJLENBQUMsOEJBQThCLENBQUM7SUFDN0Q7RUFDSixDQUFDLENBQUM7QUFDTixDQUFDLENBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9hc3NldHMvanMvZm9ybS5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBpbXBvcnQgSlF1ZXJ5IGxpYnJhcnlcclxuaW1wb3J0ICQgZnJvbSAnanF1ZXJ5JztcclxuXHJcbmxldCBlbWFpbEV4aXN0cyA9IGZhbHNlO1xyXG5cclxuJChkb2N1bWVudCkucmVhZHkoZnVuY3Rpb24oKSB7XHJcbiAgICAvLyAkLmFqYXgoe1xyXG4gICAgLy8gICAgIHVybDogJy9nZXQvY2F0ZWdvcmllcycsXHJcbiAgICAvLyAgICAgbWV0aG9kOiAnR0VUJyxcclxuICAgIC8vICAgICBzdWNjZXNzOiBmdW5jdGlvbihyZXNwb25zZSkge1xyXG4gICAgLy8gICAgICAgICAvLyBMbGVuYSBlbCBjYW1wbyBkZSBzZWxlY2Npw7NuIGNvbiBsYXMgY2F0ZWdvcsOtYXNcclxuICAgIC8vICAgICAgICAgdmFyIHNlbGVjdCA9ICQoJyNjYXRlZ29yeS1zZWxlY3QnKTtcclxuICAgIC8vICAgICAgICAgc2VsZWN0LmVtcHR5KCk7XHJcbiAgICAvLyAgICAgICAgIHJlc3BvbnNlLmNhdGVnb3JpZXMuZm9yRWFjaChmdW5jdGlvbihjYXRlZ29yeSkge1xyXG4gICAgLy8gICAgICAgICAgICAgc2VsZWN0LmFwcGVuZCgnPG9wdGlvbiB2YWx1ZT1cIicgKyBjYXRlZ29yeS5pZCArICdcIj4nICsgY2F0ZWdvcnkubmFtZSArICc8L29wdGlvbj4nKTtcclxuICAgIC8vICAgICAgICAgfSk7XHJcbiAgICAvLyAgICAgfVxyXG4gICAgLy8gfSk7XHJcblxyXG4gICAgJCgnI2VtYWlsJykub24oJ2lucHV0JywgZnVuY3Rpb24oKSB7XHJcbiAgICAgICAgdmFyIGVtYWlsID0gJCh0aGlzKS52YWwoKTtcclxuICAgICAgICAkLmFqYXgoe1xyXG4gICAgICAgICAgICB1cmw6ICcvY2hlY2svZW1haWwnLFxyXG4gICAgICAgICAgICBtZXRob2Q6ICdQT1NUJyxcclxuICAgICAgICAgICAgZGF0YTogSlNPTi5zdHJpbmdpZnkoe2VtYWlsOiBlbWFpbH0pLFxyXG4gICAgICAgICAgICBzdWNjZXNzOiBmdW5jdGlvbihyZXNwb25zZSkge1xyXG4gICAgICAgICAgICAgICAgaWYgKHJlc3BvbnNlLmV4aXN0cykge1xyXG4gICAgICAgICAgICAgICAgICAgIGVtYWlsRXhpc3RzID0gdHJ1ZTtcclxuICAgICAgICAgICAgICAgICAgICAkKCcjZW1haWwtZXJyb3InKS50ZXh0KCdFbCBlbWFpbCB5YSBleGlzdGUgZW4gbGEgYmFzZSBkZSBkYXRvcycpO1xyXG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICBlbWFpbEV4aXN0cyA9IGZhbHNlO1xyXG4gICAgICAgICAgICAgICAgICAgICQoJyNlbWFpbC1lcnJvcicpLnRleHQoJycpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICBlcnJvcjogZnVuY3Rpb24oanFYSFIsIHRleHRTdGF0dXMsIGVycm9yVGhyb3duKSB7XHJcbiAgICAgICAgICAgICAgICBjb25zb2xlLmVycm9yKFwiRXJyb3I6IFwiICsgdGV4dFN0YXR1cywgZXJyb3JUaHJvd24pO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSk7XHJcbiAgICB9KTtcclxuICAgIFxyXG4gICAgJCgnI2NvbmZpcm1fcGFzc3dvcmQnKS5vbignaW5wdXQnLCBmdW5jdGlvbigpIHtcclxuICAgICAgICB2YXIgcGFzc3dvcmQgPSAkKCcjcGFzc3dvcmQnKS52YWwoKTtcclxuICAgICAgICB2YXIgY29uZmlybVBhc3N3b3JkID0gJCh0aGlzKS52YWwoKTtcclxuICAgICAgICBpZiAocGFzc3dvcmQgIT09IGNvbmZpcm1QYXNzd29yZCkge1xyXG4gICAgICAgICAgICAkKCcjcGFzc3dvcmQtZXJyb3InKS50ZXh0KCdMYXMgY29udHJhc2XDsWFzIG5vIGNvaW5jaWRlbicpO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICQoJyNwYXNzd29yZC1lcnJvcicpLnRleHQoJycpO1xyXG4gICAgICAgIH1cclxuICAgIH0pO1xyXG4gICAgXHJcbiAgICAkKCcjZm9ybScpLm9uKCdzdWJtaXQnLCBmdW5jdGlvbihlKSB7XHJcbiAgICAgICAgaWYgKGVtYWlsRXhpc3RzKSB7XHJcbiAgICAgICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuICAgICAgICAgICAgJCgnI2VtYWlsLWVycm9yJykudGV4dCgnRWwgZW1haWwgeWEgZXhpc3RlIGVuIGxhIGJhc2UgZGUgZGF0b3MnKTtcclxuICAgICAgICB9IGVsc2UgaWYgKCQoJyNwYXNzd29yZCcpLnZhbCgpICE9PSAkKCcjY29uZmlybV9wYXNzd29yZCcpLnZhbCgpKSB7XHJcbiAgICAgICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuICAgICAgICAgICAgJCgnI3Bhc3N3b3JkLWVycm9yJykudGV4dCgnTGFzIGNvbnRyYXNlw7FhcyBubyBjb2luY2lkZW4nKTtcclxuICAgICAgICB9XHJcbiAgICB9KTtcclxufSk7XHJcbiJdLCJuYW1lcyI6WyIkIiwiZW1haWxFeGlzdHMiLCJkb2N1bWVudCIsInJlYWR5Iiwib24iLCJlbWFpbCIsInZhbCIsImFqYXgiLCJ1cmwiLCJtZXRob2QiLCJkYXRhIiwiSlNPTiIsInN0cmluZ2lmeSIsInN1Y2Nlc3MiLCJyZXNwb25zZSIsImV4aXN0cyIsInRleHQiLCJlcnJvciIsImpxWEhSIiwidGV4dFN0YXR1cyIsImVycm9yVGhyb3duIiwiY29uc29sZSIsInBhc3N3b3JkIiwiY29uZmlybVBhc3N3b3JkIiwiZSIsInByZXZlbnREZWZhdWx0Il0sInNvdXJjZVJvb3QiOiIifQ==
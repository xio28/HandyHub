/*
 * Welcome to your app's main JavaScript file!
 *
 * We recommend including the built version of this JavaScript file
 * (and its CSS file) in your base layout (base.html.twig).
 */

// any CSS you import will output into a single css file (app.css in this case)
import './styles/app.css';

// import JQuery library
import $ from 'jquery';
import toastr from 'toastr';
import 'toastr/build/toastr.min.css';

// start the Stimulus application
import './bootstrap';


$(function() {
    $('#menu').on('click', function() {
        $(this).toggleClass('open');
        $('.menu-container').toggleClass('active');
    });
});

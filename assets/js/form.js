// import JQuery library
import $ from 'jquery';

let emailExists = false;

$(document).ready(function() {
    $.ajax({
        url: '/get/categories',
        method: 'GET',
        success: function(response) {
            // Llena el campo de selección con las categorías
            var select = $('#category-select');
            select.empty();
            response.categories.forEach(function(category) {
                select.append('<option value="' + category.id + '">' + category.name + '</option>');
            });
        }
    });

    $('#email').on('input', function() {
        var email = $(this).val();
        $.ajax({
            url: '/check/email',
            method: 'POST',
            data: JSON.stringify({email: email}),
            success: function(response) {
                if (response.exists) {
                    emailExists = true;
                    $('#email-error').text('El email ya existe en la base de datos');
                } else {
                    emailExists = false;
                    $('#email-error').text('');
                }
            },
            error: function(jqXHR, textStatus, errorThrown) {
                console.error("Error: " + textStatus, errorThrown);
            }
        });
    });
    
    $('#confirm_password').on('input', function() {
        var password = $('#password').val();
        var confirmPassword = $(this).val();
        if (password !== confirmPassword) {
            $('#password-error').text('Las contraseñas no coinciden');
        } else {
            $('#password-error').text('');
        }
    });
    
    $('#form').on('submit', function(e) {
        if (emailExists) {
            e.preventDefault();
            $('#email-error').text('El email ya existe en la base de datos');
        } else if ($('#password').val() !== $('#confirm_password').val()) {
            e.preventDefault();
            $('#password-error').text('Las contraseñas no coinciden');
        }
    });
});

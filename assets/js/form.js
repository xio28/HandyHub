// import JQuery library
// import $ from 'jquery';

$emailExists = false;

$(document).ready(function() {
    // Llama a la API para obtener las categorías
    $.ajax({
        url: '/get/categories', // Reemplaza con la URL de tu controlador que devuelve las categorías
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
            url: '/check_email', // Reemplaza con la URL de tu controlador que verifica el email
            method: 'POST',
            data: {email: email},
            success: function(response) {
                if (response.exists) {
                    $emailExists = true;
                    $('#email-error').text('El email ya existe en la base de datos');
                } else {
                    $('#email-error').text('');
                }
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

$(document).ready(function() {
    $('#search').on('keyup', function() {
        $.ajax({
            url: '/path/to/your/route', // reemplaza esto con la ruta a tu acción de Symfony
            type: 'GET',
            data: {
                'query': $(this).val()
            },
            success: function(data) {
                $('#userTable').empty();
                var jsonData = JSON.parse(data);
                for (var i = 0; i < jsonData.length; i++) {
                    var row = $('<tr>');
                    row.append($('<td>').text(jsonData[i].name));
                    row.append($('<td>').text(jsonData[i].surname));
                    // Agregar más celdas
                    $('#userTable').append(row);
                }
            }
        });
    });
});

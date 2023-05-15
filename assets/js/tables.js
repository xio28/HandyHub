$(function() {
    $.ajax({
        url: '/get/specialists',
        method: 'GET',
        success: function(data) {
            var now = new Date();
            var currentTime = now.getHours() * 60 + now.getMinutes();
            var start = 8 * 60;   // 08:00
            var end = 21 * 60;    // 21:00

            data.specialists.forEach(function(specialist) {
                if (specialist.isAvailable && currentTime >= start && currentTime <= end) {
                    // Renderiza la tarjeta del especialista como disponible
                } else {
                    // Renderiza la tarjeta del especialista como no disponible
                }
            });
        }
    });
});

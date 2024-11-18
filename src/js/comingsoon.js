/*
// Fecha del webinar
        var countDownDate = new Date("Nov 28, 2024 17:00:00").getTime();

        // Actualiza el contador cada segundo
        var x = setInterval(function() {
            var now = new Date().getTime();
            var distance = countDownDate - now;

            // Cálculos de días, horas, minutos y segundos
            var days = Math.floor(distance / (1000 * 60 * 60 * 24));
            var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
            var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
            var seconds = Math.floor((distance % (1000 * 60)) / 1000);

            // Muestra el resultado en el elemento con id="countdown"
            document.getElementById("countdown").innerHTML = days + "d " + hours + "h "
                + minutes + "m " + seconds + "s ";

            // Si el contador ha terminado, muestra el mensaje
            if (distance < 0) {
                clearInterval(x);
                document.getElementById("countdown").innerHTML = "¡El webinar está en vivo!";
            }
        }, 1000);
*/


$(document).ready(function() {
    // Fecha de lanzamiento
    const launchDate = new Date("2024-11-28T17:00:00").getTime();

    // Actualiza el contador cada segundo
    setInterval(function() {
        // Obtener la fecha y hora actual
        const now = new Date().getTime();
        
        // Calcular la diferencia entre la fecha de lanzamiento y la fecha actual
        const distance = launchDate - now;

        // Calcular días, horas, minutos y segundos
        const days = Math.floor(distance / (1000 * 60 * 60 * 24));
        const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((distance % (1000 * 60)) / 1000);

        // Mostrar los resultados en el HTML
        $('#days').text(days < 10 ? '0' + days : days);
        $('#hours').text(hours < 10 ? '0' + hours : hours);
        $('#minutes').text(minutes < 10 ? '0' + minutes : minutes);
        $('#seconds').text(seconds < 10 ? '0' + seconds : seconds);

        // Si el contador llega a cero, muestra un mensaje
        if (distance < 0) {
            clearInterval();
            $('.countdown-container').html('<h2>¡Ya está aquí!</h2>');
        }
    }, 1000);
});

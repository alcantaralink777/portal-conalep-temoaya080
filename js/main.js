/**
 * Lógica General y Widget de Tiempo Real - Portal CONALEP Temoaya
 */
document.addEventListener("DOMContentLoaded", () => {
    console.log("Portal CONALEP Temoaya inicializado correctamente (Nivel Senior).");

    // Función del Reloj y Fecha en Tiempo Real
    function actualizarReloj() {
        const ahora = new Date();
        
        // Formatear la fecha en español
        const opcionesFecha = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
        const fechaStr = ahora.toLocaleDateString('es-MX', opcionesFecha);
        
        // Formatear la hora
        const horaStr = ahora.toLocaleTimeString('es-MX', { hour: '2-digit', minute: '2-digit', second: '2-digit' });
        
        const elementoReloj = document.getElementById('liveClock');
        if (elementoReloj) {
            const fechaFormateada = fechaStr.charAt(0).toUpperCase() + fechaStr.slice(1);
            elementoReloj.innerHTML = `<i class="far fa-calendar-alt"></i> ${fechaFormateada} &nbsp;|&nbsp; <i class="far fa-clock"></i> ${horaStr}`;
        }
    }

    // Iniciar el reloj inmediatamente y actualizar cada segundo
    actualizarReloj();
    setInterval(actualizarReloj, 1000);
});
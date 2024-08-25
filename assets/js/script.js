/* COLAPSANDO MENÚ NAVBAR CON SELECCIÓN DE ENLACE (DOM) */
document.addEventListener('DOMContentLoaded', function() {
    var barraNavegacion = document.getElementById('navbarNav');
    var enlacesMenu = document.querySelectorAll('.navbar-nav .nav-link');

    function ocultarMenu() {
        var colapsarMenu = new bootstrap.Collapse(barraNavegacion, {
            toggle: false
        });
        colapsarMenu.hide();
    }

    enlacesMenu.forEach(function(enlace) {
        enlace.addEventListener('click', ocultarMenu);
    });
});
document.getElementById('searchForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevenir el envío del formulario

    // Recoger los datos del formulario
    const origen = document.getElementById('origen').value;
    const destino = document.getElementById('destino').value;
    const fecha_salida = document.getElementById('fecha_salida').value;
    const fecha_regreso = document.getElementById('fecha_regreso').value;

    // Simulación de resultados de la búsqueda
    const vuelos = [
        {
            aerolinea: 'Avianca',
            precio: '$200',
            fecha: '2025-06-01',
            horario: '08:00 AM'
        },
        {
            aerolinea: 'Latam',
            precio: '$250',
            fecha: '2025-06-02',
            horario: '10:00 AM'
        }
    ];

    // Mostrar los resultados
    const resultadosDiv = document.getElementById('resultados');
    resultadosDiv.innerHTML = ''; // Limpiar resultados anteriores

    vuelos.forEach(vuelo => {
        const vueloDiv = document.createElement('div');
        vueloDiv.innerHTML = `
            <p><strong>Aerolínea:</strong> ${vuelo.aerolinea}</p>
            <p><strong>Precio:</strong> ${vuelo.precio}</p>
            <p><strong>Fecha de vuelo:</strong> ${vuelo.fecha}</p>
            <p><strong>Horario:</strong> ${vuelo.horario}</p>
            <hr>
        `;
        resultadosDiv.appendChild(vueloDiv);
    });
});
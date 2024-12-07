// funcion para ordenar por nombre (alfabeticamente)
function sortByName() {
    let table = document.getElementById("contractTable");
    let rows = Array.from(table.rows).slice(1); // excluye la primera fila (cabecera)

    rows.sort((rowA, rowB) => {
        let nameA = rowA.cells[1].innerText.toLowerCase();
        let nameB = rowB.cells[1].innerText.toLowerCase();
        return nameA.localeCompare(nameB);
    });

    rows.forEach(row => table.appendChild(row)); // reorganiza las filas
}

// funcion para ordenar por calificación
function sortByRating() {
    let table = document.getElementById("contractTable");
    let rows = Array.from(table.rows).slice(1); // excluye la primera fila (cabecera)

    rows.sort((rowA, rowB) => {
        let ratingA = parseFloat(rowA.cells[5].innerText);
        let ratingB = parseFloat(rowB.cells[5].innerText);
        return ratingB - ratingA; // ordena de mayor a menor
    });

    rows.forEach(row => table.appendChild(row)); // reorganiza las filas
}

// script para el formulario
document.getElementById('contractForm').addEventListener('submit', function(event) {
    event.preventDefault(); // evita el envío del formulario

    // verifica si se seleccionó a alguien
    const selectedPerson = document.querySelector('input[name="contract"]:checked');
    if (selectedPerson) {
        alert("¡Contratado! Has seleccionado a " + selectedPerson.closest('tr').querySelector('td').textContent);
    } else {
        alert("Por favor, selecciona una persona.");
    }
});
import fetch from 'node-fetch';

const epicosApiUrl = "http://localhost:8080/api/epico";

fetch(epicosApiUrl)
    .then(response => {
        if (!response.ok) {
            throw new Error('Network Response was not ok');
        }
        return response.json();
    })
    .then(data => {
        const table = document.getElementById('tabelaEpicos');

        // Remove existing rows (except the header row)
        while (table.rows.length > 1) {
            table.deleteRow(1);
        }

        data.forEach(epico => {
            const newRow = table.insertRow(-1);

            const properties = ['id', 'titulo', 'categoria', 'relevancia', 'tipo', 'HU', 'descricao'];

            properties.forEach((property, index) => {
                const cell = newRow.insertCell(index);
                cell.textContent = epico[property];
            });
        });
    })
    .catch(error => {
        console.error('Error', error);
    });

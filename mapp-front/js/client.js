/* Url das APIs */

const apiUrl = "http://localhost:8080/api/";

/* Operações de get (fetch) para recupear os dados a partir da api */

fetch(apiUrl + "epico")
    .then(response => {
        if (!response.ok) {
            throw new Error('Network Response was not ok');
        }
        return response.json();
    })
    .then(data => {
        const table = document.getElementById('tabelaEpicos');
        data.sort((a, b) => a.id - b.id);

        while (table.rows.length > 1) {
            table.deleteRow(1);
        }

        data.forEach(epico => {
            const newRow = table.insertRow(-1);

            const properties = ['id', 'titulo', 'descricao', 'relevancia', 'categoria', 'Tipo épico', 'projeto', 'epicoPai'];

            properties.forEach((property, index) => {
                const cell = newRow.insertCell(index);

                if (property === 'projeto') {
                    cell.textContent = epico.projeto ? epico.projeto.nome : '';
                } else if (property === 'Tipo épico') {
                    cell.textContent = epico.tipoEpico ? epico.tipoEpico.descricao : '';
                } else if (property === 'epicoPai') {
                    cell.textContent = epico.epicoPai ? epico.epicoPai.id : '';
                } else {
                    cell.textContent = epico[property] || ''; 
                }
            });
        });
    })
    .catch(error => {
        console.error('Error', error);
    });

fetch(apiUrl + "tipoEpico")
    .then(response => {
        if (!response.ok) {
            throw new Error('Network Response was not ok');
        }
        return response.json();
    })
    .then(data => {
        const table = document.getElementById('tabelaTipoEpicos');
        data.sort((a, b) => a.id - b.id);

        while (table.rows.length > 1) {
            table.deleteRow(1);
        }

        data.forEach(tipoEpico => {
            const newRow = table.insertRow(-1);

            const properties = ['id', 'descricao'];

            properties.forEach((property, index) => {
                const cell = newRow.insertCell(index);
                cell.textContent = tipoEpico[property] || '';
            });
        });
    })
    .catch(error => {
        console.error('Error', error);
    });

fetch(apiUrl + "tarefa")
    .then(response => {
        if (!response.ok) {
            throw new Error('Network Response was not ok');
        }
        return response.json();
    })
    .then(data => {
        const table = document.getElementById('tabelaTarefa');
        data.sort((a, b) => a.id - b.id);

        while (table.rows.length > 1) {
            table.deleteRow(1);
        }

        data.forEach(tarefa =>{
            const newRow = table.insertRow(-1);
            const properties = ['id', 'titulo', 'descricao', 'tipoTarefa', 'historiaUsuario', 'tarefaPai'];

            properties.forEach((property, index) => {
                const cell = newRow.insertCell(index);
                if(property === 'tipoTarefa'){
                    cell.textContent = tarefa.tipoTarefa ? tarefa.tipoTarefa.descricao : '';
                }else if(property === 'historiaUsuario'){
                    cell.textContent = tarefa.historiaUsuario ? tarefa.historiaUsuario.descricao : '';
                }else if(property === 'tarefaPai'){
                    cell.textContent = tarefa.tarefaPai ? tarefa.tarefaPai.id : '';
                } else {
                    cell.textContent = tarefa[property] || '';
                }
            })
        })

    })
    .catch(error => {
        console.error('Error', error);
    });

fetch(apiUrl + "tipoTarefa")
    .then(response => {
        if (!response.ok) {
            throw new Error('Network Response was not ok');
        }
        return response.json();
    })
    .then(data => {
        const table = document.getElementById('tabelaTipoTarefa');
        data.sort((a, b) => a.id - b.id);

        while (table.rows.length > 1) {
            table.deleteRow(1);
        }

        data.forEach(tipoTarefa => {
            const newRow = table.insertRow(-1);
            const properties = ['id', 'descricao', 'tipoHistoriaUsuario', 'tipoTarefaPai'];

            properties.forEach((property, index) => {
                const cell = newRow.insertCell(index); 
                if(property === 'tipoHistoriaUsuario'){
                    cell.textContent = tipoTarefa.tipoHistoriaUsuario ? tipoTarefa.tipoHistoriaUsuario.descricao : '';
                }else if(property === 'tipoTarefaPai'){
                    cell.textContent = tipoTarefa.tipoTarefaPai ? tipoTarefa.tipoTarefaPai.id : '';
                }else{
                    cell.textContent = tipoTarefa[property] || '';
                }
            })
        })

    })
    .catch(error => {
        console.error('Error', error);
    });

fetch(apiUrl + "historiaUsuario")
    .then(response => {
        if (!response.ok) {
            throw new Error('Network Response was not ok');
        }
        return response.json();
    })
    .then(data => {
        const table = document.getElementById('tabelaHU');
        data.sort((a, b) => a.id - b.id);

        while (table.rows.length > 1) {
            table.deleteRow(1);
        }

        data.forEach(hu => {
            const newRow = table.insertRow(-1);
            const properties = ['id', 'titulo', 'descricao', 'relevancia', 'categoria', 'epico', 'tipoHistoriaUsuario', 'historiaUsuarioPai'];

            properties.forEach((property, index) => {
                const cell = newRow.insertCell(index);
                if(property === 'epico') {
                    cell.textContent = hu.epico ? hu.epico.id : '';
                }else if(property === 'tipoHistoriaUsuario'){
                    cell.textContent = hu.tipoHistoriaUsuario ? hu.tipoHistoriaUsuario.descricao : '';
                }else if(property === 'historiaUsuarioPai'){
                    cell.textContent = hu.historiaUsuarioPai ? hu.historiaUsuarioPai.id : '';
                }else {
                    cell.textContent = hu[property] || '';
                }
            });
        });
    })
    .catch(error => {
        console.error('Error', error);
    });

fetch(apiUrl + "tipoHistoriaUsuario")
    .then(response => {
        if (!response.ok) {
            throw new Error('Network Response was not ok');
        }
        return response.json();
    })
    .then(data => {
        const table = document.getElementById('tabelaTipoHU');
        data.sort((a, b) => a.id - b.id);

        while (table.rows.length > 1) {
            table.deleteRow(1);
        }

        data.forEach(tipoHU => {
            const newRow = table.insertRow(-1);
            const properties = ['id', 'descricao', 'tipo_epico', 'tipoHistoriaUsuarioPai'];

            properties.forEach((property, index ) => {
                const cell = newRow.insertCell(index);
                if(property === 'tipo_epico'){
                    cell.textContent = tipoHU.tipo_epico ? tipoHU.tipo_epico.descricao : '';
                }else if(property === 'tipoHistoriaUsuarioPai'){
                    cell.textContent = tipoHU.tipoHistoriaUsuarioPai ? tipoHU.tipoHistoriaUsuarioPai.id : '';
                }else {
                    cell.textContent = tipoHU[property] || '';
                }
            })
        })

    })
    .catch(error => {
        console.error('Error', error);
    });

fetch(apiUrl + "projetos")
    .then(response => {
        if (!response.ok) {
            throw new Error('Network Response was not ok');
        }
        return response.json();
    })
    .then(data => {
        const table = document.getElementById('tabelaProjeto');
        data.sort((a, b) => a.id - b.id);

        while (table.rows.length > 1) {
            table.deleteRow(1);
        }

        data.forEach(projeto => {
            const newRow = table.insertRow(-1);
            const properties = ['id', 'nome'];

            properties.forEach((property, index ) => {
                const cell = newRow.insertCell(index);
                cell.textContent = projeto[property] || '';
            })
        })
    })
    .catch(error => {
        console.error('Error', error);
    });
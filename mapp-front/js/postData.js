const apiUrl = "http://localhost:8080/api/";

function postProjetoData() {
    document.getElementById("formProjeto").addEventListener("submit", function(event) {
        event.preventDefault();
    
        const formData = new FormData(event.target);
    
        const jsonData = {};
        formData.forEach((value, key) => {
            jsonData[key] = value;
        });
    
        fetch(apiUrl + "projetos", {
            method: "POST", 
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(jsonData),
        })
        .then(response => response.json())
        .then(data => {
            console.log("API Response:", data);
        })
        .catch(error => {
            console.error("Error:", error);
        });
    })
}

function postTipoEpicoData() {
    document.getElementById("formTipoEpicos").addEventListener("submit", function(event) {
        event.preventDefault();
    
        const formData = new FormData(event.target);
        
        const jsonData = {};
        formData.forEach((value, key) => {
            jsonData[key] = value;
        });
    
        fetch(apiUrl + "tipoEpico", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(jsonData),
        })
        .then(response => response.json())
        .then(data => {
            console.log("API Response:", data);
        })
        .catch(error => {
            console.error("Error:", error);
        });
    
    })
}

function postTipoHUData(){
    document.getElementById("formTipoHU").addEventListener("submit", function(event) {
        event.preventDefault();
    
        const formData = new FormData(event.target);
        
        const jsonData = {};
        formData.forEach((value, key) => {
            jsonData[key] = value;
        });
    
        fetch(apiUrl + "tipoHistoriaUsuario", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(jsonData),
        })
        .then(response => response.json())
        .then(data => {
            console.log("API Response:", data);
        })
        .catch(error => {
            console.error("Error:", error);
        });
    
    })
}

function postTipoTarefaData() {
    document.getElementById("formTipoTarefa").addEventListener("submit", function(event) {
        event.preventDefault();
    
        const formData = new FormData(event.target);
        
        const jsonData = {};
        formData.forEach((value, key) => {
            jsonData[key] = value;
        });
    
        fetch(apiUrl + "tipoTarefa", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(jsonData),
        })
        .then(response => response.json())
        .then(data => {
            console.log("API Response:", data);
        })
        .catch(error => {
            console.error("Error:", error);
        });
    
    })
}

function postEpicoData(){
    document.getElementById("formEpicos").addEventListener("submit", function(event) {
        event.preventDefault();
    
        const formData = new FormData(event.target);
        
        const jsonData = {};
        formData.forEach((value, key) => {
            jsonData[key] = value;
        });
    
        fetch(apiUrl + "epico/criarEpico", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(jsonData),
        })
        .then(response => response.json())
        .then(data => {
            console.log("API Response:", data);
        })
        .catch(error => {
            console.error("Error:", error);
        });
    
    })
}

function postHUData(){
    document.getElementById("formHU").addEventListener("submit", function(event) {
        event.preventDefault();
    
        const formData = new FormData(event.target);
        
        const jsonData = {};
        formData.forEach((value, key) => {
            jsonData[key] = value;
        });

        fetch(apiUrl + "historiaUsuario/" + jsonData["id"], {
            method: "PUT",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(jsonData),
        })
        .then(response => response.json())
        .then(data => {
            console.log("API Response:", data);
        })
        .catch(error => {
            console.error("Error:", error);
        });
    
    })
}

function postTarefaData(){
    document.getElementById("formTarefa").addEventListener("submit", function(event) {
        event.preventDefault();
    
        const formData = new FormData(event.target);
        
        const jsonData = {};
        formData.forEach((value, key) => {
            jsonData[key] = value;
        });

        fetch(apiUrl + "tarefa/gerar/" + jsonData["historiaUsuario_id"], {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(jsonData),
        })
        .then(response => response.json())
        .then(data => {
            console.log("API Response:", data);
        })
        .catch(error => {
            console.error("Error:", error);
        });
    
    })
}
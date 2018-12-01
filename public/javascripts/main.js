lenguajes();
document.forms.formCreate = addEventListener("submit", function (e) {
    e.preventDefault();

    let data = {
        nombre: document.querySelector("#nombre").value,   //.forms.formCreate.nombre.value,
        origen: document.querySelector("#origen").value, //forms.formCreate.origen.value,
        paradigma: document.querySelector("#paradigma").value//,forms.formCreate.paradigma.value,
    }

    console.log(data); //Me devuelve un objeto, creo que está bien :v

    let url = "/lenguaje"; //no sé si es así o debería ser lenguaje

    fetch(url, {
        method: "POST",
        body: JSON.stringify(data),
        headers: {
            'Content-Type': 'application/json'
        }
    })
        .then(res => res.json())
        .catch(err => console.log(err))
        .then(response => {
            alert("Insertado con éxito");
            lenguajes();
        })

});

function lenguajes() {
    let url = "/lenguaje";
    fetch(url, {
        method: "GET",
        headers: {
            'Content-Type': 'application/json'
        }
    }).then(res => res.json())
        .catch(err => console.log(err))
        .then(response => {
            let tbody = document.querySelector("#registro");
            let filas = "";

            response.forEach(element => {
                filas = filas + `<tr>
                <td> ${ element._id} </td>
                <td> ${ element.nombre} </td>
                <td> ${ element.origen} </td>
                <td> ${ element.paradigma} </td>
                <td>
                    <a href = "/lenguaje ${ element._id}" class="update btn-warning" > Actualizar </a>
                    <a href = "/lenguaje ${ element._id}" class="delete btn-danger" > Eliminar </a>
                </td>
            </tr>`
            });
            tbody.innerHTML = filas;
            HTML = filas;

            let btn_delete = document.querySelectorAll(".delete");
            btn_delete.forEach(item => {
                item.addEventListener("click", function (e) {
                    e.preventDefault();
                    let url = this["href"];
                    fetch(url, {
                        method: "DELETE",
                        headers: {
                            'Content-Type': 'application/json'
                        }
                    }).then(res => res.json())
                        .catch(err => console.log(err))
                        .then(response => {
                            alert('Se eliminaron los datos')
                            lenguajes();
                        })
                })
            })
        })
}


/*
    nombre : {type: String, required:true},
    origen : {type: String, required:true},
    paradigma : {type: String, required:true},
*/
//aquí agregaré la funciń
document.forms.formCreate = addEventListener("submit", function(e){
    e.preventDefault();

    let data = {
        nombre : document.querySelector("#nombre").value,
        origen : document.querySelector("#origen").value,
        paradigma : document.querySelector("#paradigma").value,
    }

    console.log(data);

})


/*
    nombre : {type: String, required:true},
    origen : {type: String, required:true},
    paradigma : {type: String, required:true},
*/
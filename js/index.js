function getContactos(){
    var divContacto = document.getElementById("divContacto");
    fetch("http://www.raydelto.org/agenda.php").then(function(datos){
        return datos.json();
    }).then(function(listado){
        var cadenaListado = "";
        for(contacto of listado)
        {
            console.log(contacto);
            cadenaListado += contacto.nombre + " " + contacto.apellido + " " + contacto.telefono + "<br/>\n";
        }
        divContacto.innerHTML = cadenaListado;
    });
}

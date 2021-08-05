var mensaje

function ini() {
    mensaje = '<Envelope xmlns="http://schemas.xmlsoap.org/soap/envelope/">' +
    '<Body>'+
    '<ListaDeCarrosRequest xmlns="http://equipo8.me/transporte">' +
  
    '</ListaDeCarrosRequest>' +
    '</Body>' +
    '</Envelope>'
}
function soap() {
  ini();
  axios
    .post("http://localhost:8080/ws/transporte", mensaje, {
      headers: {
        "Content-Type": "text/xml",
      },
    })

    .then(function (response) {
      console.log(response.data);
      document.getElementById("r").value = resul(response.data);
    })
    .catch((err) => console.log(err));
}

/*function resul(rXml) {
  var parser = new DOMParser();
  var xmlDoc = parser.parseFromString(rXml, "text/xml");
  var resultado = xmlDoc.getElementsByTagName("ns2:ListaDeCarrosResponse")
   var r=document.getElementById("r") 
  for (let i = 0; i < resultado.length; i++) {
    let x = document.createElement("li")
    let a = resultado[i].firstChild.nodeValue
    x.textContent = a 
    r.appendChild(x)
    
  }
  //return resultado;
}*/


function resul(rXml){
    var txt ='';
    var id,placa,marca,anio,asientos;
    var parser = new DOMParser();
    var xmlDoc = parser.parseFromString(rXml, "text/xml");
    var res = xmlDoc.getElementsByTagName("ns2:producto");
    var resul = res.length;
    for(i=0; i<resul;i++){
      id = xmlDoc.getElementsByTagName("ns2:id")[i].childNodes[0].nodeValue;
      placa = xmlDoc.getElementsByTagName("ns2:placa")[i].childNodes[0].nodeValue;
      marca = xmlDoc.getElementsByTagName("ns2:marca")[i].childNodes[0].nodeValue;
      anio = xmlDoc.getElementsByTagName("ns2:anio")[i].childNodes[0].nodeValue;
      asientos = xmlDoc.getElementsByTagName("ns2:asientos")[i].childNodes[0].nodeValue;
      //console.log("Id: "+id+ " nombre: "+nombre+ " cantidad: "+cantidad+ " unidad: "+unidad+ " precio: "+precio);
      txt+= "Id: "+id+ " nombre: "+placa+ " cantidad: "+marca+ " unidad: "+anio+ " precio: "+asientos+ "<br>";
    }
    document.getElementById("r").innerHTML = txt;
    return "tengo "+ resul +" articulos registrados";
}
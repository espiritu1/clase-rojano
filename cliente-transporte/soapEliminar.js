var mensaje

function ini() {
    mensaje = '<Envelope xmlns="http://schemas.xmlsoap.org/soap/envelope/">' +
    '<Body>'+
    '<BorrarCarroRequest xmlns="http://equipo8.me/transporte">' +
    '<id>' + document.getElementById('id').value + '</id>' +
    '</BorrarCarroRequest>' +
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

function resul(rXml) {
  var parser = new DOMParser();
  var xmlDoc = parser.parseFromString(rXml, "text/xml");
  var resultado = xmlDoc.getElementsByTagName("ns2:BorrarCarroResponse"); //[0].childNodes[0].nodeValue;
  console.log(resultado);
  return resultado;
}

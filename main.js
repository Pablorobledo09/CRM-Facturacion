const paisesLatam = JSON.parse ('[{"#":1,"Paises":"Argentina"},{"#":2,"Paises":"Bolivia"},{"#":3,"Paises":"Brasil"},{"#":4,"Paises":"Chile"},{"#":5,"Paises":"Colombia"},{"#":6,"Paises":"Costa Rica"},{"#":7,"Paises":"Cuba"},{"#":8,"Paises":"Ecuador"},{"#":9,"Paises":"El Salvador"},{"#":10,"Paises":"Guayana Francesa"},{"#":11,"Paises":"Granada"},{"#":12,"Paises":"Guatemala"},{"#":13,"Paises":"Guayana"},{"#":14,"Paises":"Haití"},{"#":15,"Paises":"Honduras"},{"#":16,"Paises":"Jamaica"},{"#":17,"Paises":"México"},{"#":18,"Paises":"Nicaragua"},{"#":19,"Paises":"Paraguay"},{"#":20,"Paises":"Panamá"},{"#":21,"Paises":"Perú"},{"#":22,"Paises":"Puerto Rico"},{"#":23,"Paises":"República Dominicana"},{"#":24,"Paises":"Surinam"},{"#":25,"Paises":"Uruguay"},{"#":26,"Paises":"Venezuela"}]')

  console.log (paisesLatam)

  const llamarPaises = () => {
    let iddeldocumento = document.getElementById('colocar-option')
    for (let index = 0; index < paisesLatam.length; index++) {
      console.log(paisesLatam[index].Paises);
      let etiquetahtml = document.createElement('option')
      iddeldocumento.appendChild(etiquetahtml)
      etiquetahtml.appendChild(document.createTextNode(paisesLatam[index].Paises))
      // etiquetahtml.innerHTML = paisesLatam[index].Paises
    }
  }

  llamarPaises()

const monedaPaises = JSON.parse ('[{"#":1,"Moneda":"Peso argentino"},{"#":2,"Moneda":"Boliviano"},{"#":3,"Moneda":"Real brasileño"},{"#":4,"Moneda":"Peso chileno"},{"#":5,"Moneda":"Peso colombiano"},{"#":6,"Moneda":"Colón costarricense"},{"#":7,"Moneda":"Peso cubano"},{"#":8,"Moneda":"Dólar estadounidense"},{"#":9,"Moneda":"Dólar estadounidense"},{"#":10,"Moneda":"Quetzal"},{"#":11,"Moneda":"Gourde"},{"#":12,"Moneda":"Lempira"},{"#":13,"Moneda":"Peso mexicano"},{"#":14,"Moneda":"Córdoba"},{"#":15,"Moneda":"Balboa y el dólar estadounidense"},{"#":16,"Moneda":"Guaraní"},{"#":17,"Moneda":"Sol"},{"#":18,"Moneda":"Peso dominicano"},{"#":19,"Moneda":"Peso uruguayo"},{"#":20,"Moneda":"Bolívar"}]')

const llamarMonedas = () => {
  let iddeldocumento = document.getElementById('colocar-html')
  for (let index = 0; index < monedaPaises.length; index++) {
    console.log(monedaPaises[index].Moneda);
    let etiquetahtml = document.createElement('option')
    iddeldocumento.appendChild(etiquetahtml)
    etiquetahtml.appendChild(document.createTextNode(monedaPaises[index].Moneda))
  }
}

llamarMonedas()

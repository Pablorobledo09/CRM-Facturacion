const paisesLatam = JSON.parse ('[{"#":1,"Paises":"Argentina"},{"#":2,"Paises":"Bolivia"},{"#":3,"Paises":"Brasil"},{"#":4,"Paises":"Chile"},{"#":5,"Paises":"Colombia"},{"#":6,"Paises":"Costa Rica"},{"#":7,"Paises":"Cuba"},{"#":8,"Paises":"Ecuador"},{"#":9,"Paises":"El Salvador"},{"#":10,"Paises":"Guayana Francesa"},{"#":11,"Paises":"Granada"},{"#":12,"Paises":"Guatemala"},{"#":13,"Paises":"Guayana"},{"#":14,"Paises":"Haití"},{"#":15,"Paises":"Honduras"},{"#":16,"Paises":"Jamaica"},{"#":17,"Paises":"México"},{"#":18,"Paises":"Nicaragua"},{"#":19,"Paises":"Paraguay"},{"#":20,"Paises":"Panamá"},{"#":21,"Paises":"Perú"},{"#":22,"Paises":"Puerto Rico"},{"#":23,"Paises":"República Dominicana"},{"#":24,"Paises":"Surinam"},{"#":25,"Paises":"Uruguay"},{"#":26,"Paises":"Venezuela"}]')

  console.log (paisesLatam)

  llamarPaises = function() {
    for (let index = 0; index < paisesLatam.length; index++) {
        document.write ( paisesLatam[index].Paises + '<br>');
    }
  }

  llamarPaises()


let etiquetahtml = document.createElement('option')
etiquetahtml.innerHTML = llamarPaises()

let iddeldocumento = document.getElementById ('colocar-option')
iddeldocumento.appendChild (etiquetahtml)

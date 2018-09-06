const lugar = require('./lugar/lugar')
const clima = require ('./clima/clima')

const argv = require('yargs').options({
  direccion: {
    alias: 'd',
    desc: '  direcion de la ciudad para optener el clima ',
    demand: true
  }
}).argv    

let getInfo = async (direccion) => {
  try {

    let coors = await lugar.getLugar(direccion);
    let temp = await  clima.getclima(coors.lat , coors.lng);
    return ` el clima   en ${coors.direccion} es de ${temp}`;

  } catch (e) {

    return ` ah ocurrido un Eror no se encontro  el lugar ${direccion}`;
    
  }
}

// lugar.getLugar(argv.direccion)
//   .then(resp => {
//     console.log(resp)
//   })
//   .catch(e => {
//     console.log(e)
//   })

// clima.getclima(9.9280694 , -84.0907246 )
// .then (temp=> console.log(temp))
// .catch(e => console.log(e))

getInfo(argv.direccion)
.then(message => console.log(message))
.catch(e => console.log(e))
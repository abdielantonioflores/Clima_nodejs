const axios = require('axios')

const getclima = async(lat,long)=>{
  let resp = await axios.get(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${long}&appid=9dccdf4470e9baa1d85ad2fc84db2be6 `)
  return resp.data.main.temp;
}

module.exports = {
  getclima    
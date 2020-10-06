//Esta librería sirve para trabajar con peticiones web
const axios = require('axios');

const getLugarLatLng = async(dir) => {

    const encodedUrl = encodeURI(dir);

    const instance = axios.create({
        baseURL: `https://geocode.xyz/${encodedUrl}?json=1`,
    });

    const resp = await instance.get();

    if (resp.data.alt.length === 0) {
        throw new Error(`No hay resultados para ${dir}`)
    }

    const data = resp.data.alt.loc;
    const direccion = data.city;
    const lat = data.latt;
    const lng = data.longt;

    return {
        direccion,
        lat,
        lng
    }
}

module.exports = {
    getLugarLatLng
}
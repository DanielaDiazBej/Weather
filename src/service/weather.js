const routeDoc = 'http://localhost:5000/';

export async function getWeather() {

    const response = await fetch(routeDoc)
    const responseJson = await response.json()
    
    return responseJson
}

export default getWeather;
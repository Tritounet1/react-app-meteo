export const fetchCityData = async (cityName) => {

    const key = "8926497e8b1046c19cf210630242401"

    const response = await fetch(`http://api.weatherapi.com/v1/current.json?key=${key}&q=${cityName}&aqi=no`);
    const data = await response.json();

    return data;
};




export const getAllCity = async() => {

    const response = await fetch(`https://geo.api.gouv.fr/communes`);
    const data = await response.json();

    const citiesName = data.map(ville => ville.nom);

    return citiesName;
};
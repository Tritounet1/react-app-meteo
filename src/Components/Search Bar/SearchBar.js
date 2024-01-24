import React, {useEffect, useRef, useState} from 'react';
import { fetchCityData, getAllCity } from '../Api Request/apiCity';
import { autocomplete } from '../Info/autoComplete';
import './searchBar.css';



function printInfo(cityData) {
    const div = document.getElementById("city-info");

    div.innerHTML = "";

    var newP = document.createElement("p");
    var text = document.createTextNode(cityData.location.name);
    newP.appendChild(text);
    div.appendChild(newP);

    newP = document.createElement("p");
    text = document.createTextNode("Température : " + cityData.current.temp_c + "°C");
    newP.appendChild(text);
    div.appendChild(newP);

    newP = document.createElement("p");
    text = document.createTextNode("Humidité : " + cityData.current.humidity + "%");
    newP.appendChild(text);
    div.appendChild(newP);

    if (cityData.current.condition.icon) {
        var newImg = document.createElement("img");
        newImg.setAttribute("id", "img-state-city");
        newImg.src = cityData.current.condition.icon;
        div.appendChild(newImg);
    }

}


async function call(itemSearch) {

    try {
        const cityData = await fetchCityData(itemSearch);
        console.log(cityData);
        printInfo(cityData);
    }
    catch (error) {
        console.error('Error fetching city data:', error);
    }

}


function SearchBar() {

    const [itemSearch, setItemSearch] = useState(null);

    useEffect(() => {

        async function fetchData() {
            try {
                var cities = await getAllCity();
                autocomplete(document.getElementById("content-search"), cities);
            }
            catch (error) {
                console.error("Erreur lors de la récupération des données :", error);
            }
        }

        fetchData();

    }, []);


    useEffect(() => {

        if(!itemSearch) {
            return;
        }

        call(itemSearch);

    }, [itemSearch]);

    return (
        <div>
            <form id={"searchBar"} autoComplete="off" className="form-inline my-2 my-lg-0">
                <div className="autocomplete">
                    <input id={"content-search"} className="form-control mr-sm-2" type="search" placeholder="Ville"
                           aria-label="Search"/>
                </div>

                <button className="btn btn-outline-success my-2 my-sm-0"
                        onClick={() => setItemSearch(document.getElementById("content-search").value)}
                        type="button"> Rechercher
                </button>
            </form>
            <div id={"search-info"}> </div>
            <div id={"city-info"}></div>
        </div>
    );

}


export default SearchBar;
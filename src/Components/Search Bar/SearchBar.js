import React, {useEffect, useState} from 'react';
import { fetchCityData } from '../Api Request/apiCity';
import './searchBar.css';



async function call(itemSearch) {

    try {
        const cityData = await fetchCityData(itemSearch);
        console.log('City Data:', cityData);
    }
    catch (error) {
        console.error('Error fetching city data:', error);
    }

}


function SearchBar() {

    const [itemSearch, setItemSearch] = useState(null);

    useEffect(() => {

        if(!itemSearch) {
            return;
        }

        call(itemSearch);

    }, [itemSearch]);

    return (
        <form id={"searchBar"} className="form-inline my-2 my-lg-0">
            <input id={"content-search"} className="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search"/>
            <button className="btn btn-outline-success my-2 my-sm-0"
                    onClick={() => setItemSearch(document.getElementById("content-search").value)} type="button">Search
            </button>
        </form>
    );

}

export default SearchBar;
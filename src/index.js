import React from 'react';
import ReactDOM from 'react-dom/client';
import SearchBar from "./Components/Search Bar/SearchBar";
import './index.css';
import 'bootstrap/dist/css/bootstrap.css';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <SearchBar />
  </React.StrictMode>
);


// API pour la liste des villes : https://geo.api.gouv.fr/decoupage-administratif/communes
// API pour la météo :  https://www.weatherapi.com/my/#
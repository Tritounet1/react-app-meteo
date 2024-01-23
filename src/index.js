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
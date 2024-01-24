export function autocomplete(input, cities) {

    input.addEventListener("input", function(e) {

        var div = document.getElementById("search-info");

        if(!e || e.target.value === "") {
            div.innerHTML = "";
            return false;
        }

        var textSeach = e.target.value;

        var citiesInSearch = [];

        citiesInSearch.splice(0, citiesInSearch.length);
        div.innerHTML = "";

        cities.forEach((city) => {
            if(city.toLowerCase().includes(textSeach.toLowerCase())) {
                citiesInSearch.push(city)
            }
        });

        citiesInSearch.forEach((city) => {

            var newDivContainer = document.createElement("DIV");
            newDivContainer.setAttribute("class", "container choice-city");
            newDivContainer.setAttribute("id", city);

            var newDivRow = document.createElement("div");
            newDivRow.setAttribute("class", "row");

            var newDivCol = document.createElement("div");
            newDivCol.setAttribute("class", "col");

            var newP = document.createElement("p");
            const text = document.createTextNode(city);
            newP.appendChild(text);


            newDivCol.appendChild(newP);
            newDivRow.appendChild(newDivCol);
            newDivContainer.appendChild(newDivRow);
            div.appendChild(newDivContainer);

            document.getElementById(city).addEventListener('click', function() {
                input.value = city;
                div.innerHTML = "";
            });

        });

    });
}
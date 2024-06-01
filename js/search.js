"use strict";

const getResultCard = (img, name, desc) => {
  const searchResults = document.getElementById("search-results");

  const card = document.createElement("div");
  card.classList.add("result-card");

  card.innerHTML = `<img class="result-card-image" src="${img}" alt="${name}">
  <h4 class="result-name">${name}</h4>
  <p class="result-description">${desc}</p>
  <button class="visit-button">Visit</button>`;

  searchResults.appendChild(card);
};

const getCountriesByKeyword = (countries, keyword) => {
  countries.forEach((country) => {
    country.cities.forEach((city) => {
      if (
        city.name.toLowerCase().includes(keyword.toLowerCase()) ||
        city.description.toLowerCase().includes(keyword.toLowerCase())
      ) {
        getResultCard(city.imageUrl, city.name, city.description);
      }
    });
  });
};

const getTemplesByKeyword = (temples, keyword) => {
  if (keyword.toLowerCase() === 'temple' || keyword.toLowerCase() === 'temples') {
    temples.forEach((temple) => {
      getResultCard(temple.imageUrl, temple.name, temple.description);
    })
  } else {
    temples.forEach((temple) => {
      if (
          temple.name.toLowerCase().includes(keyword.toLowerCase()) ||
          temple.description.toLowerCase().includes(keyword.toLowerCase())
      ) {
        getResultCard(temple.imageUrl, temple.name, temple.description);
      }
    });
  }

};

const getBeachesByKeyword = (beaches, keyword) => {
  if (keyword.toLowerCase() === 'beach' || keyword.toLowerCase() === 'beaches') {
    beaches.forEach((beach) => {
        getResultCard(beach.imageUrl, beach.name, beach.description);
    });
  } else {
    beaches.forEach((beach) => {
      if (
          beach.name.toLowerCase().includes(keyword.toLowerCase()) ||
          beach.description.toLowerCase().includes(keyword.toLowerCase())
      ) {
        getResultCard(beach.imageUrl, beach.name, beach.description);
      }
    });
  }

};

const handleSearchClick = () => {
  document.getElementById("search-results").innerHTML = "";

  const keyword = document.getElementById("search-input").value;

  fetch("travel_recommendation_api.json")
    .then((response) => response.text())
    .then((data) => {
      const db = JSON.parse(data);
      const { countries, temples, beaches } = db;

      getCountriesByKeyword(countries, keyword);
      getTemplesByKeyword(temples, keyword);
      getBeachesByKeyword(beaches, keyword);
    });
};

const handleClearClick = () => {
  document.getElementById("search-input").value = "";
  document.getElementById("search-results").innerHTML = "";
};

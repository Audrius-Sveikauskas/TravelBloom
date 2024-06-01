"use strict";

fetch("pages/home.html")
  .then((response) => response.text())
  .then((data) => {
    document.getElementById("page").innerHTML = data;
  });

fetch("components/navigation.html")
  .then((response) => response.text())
  .then((data) => {
    document.getElementById("navbar").innerHTML = data;
  });

fetch("components/social-buttons.html")
  .then((response) => response.text())
  .then((data) => {
    document.getElementById("social").innerHTML = data;
  });

fetch("components/search.html")
  .then((response) => response.text())
  .then((data) => {
    document.getElementById("search").innerHTML = data;
  });

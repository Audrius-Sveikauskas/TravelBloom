"use strict";

const handlePageChange = (page) => {
  switch (page) {
    case "home":
      fetch("pages/home.html")
        .then((response) => response.text())
        .then((data) => {
          document.getElementById("page").innerHTML = data;
        });

      fetch("components/search.html")
        .then((response) => response.text())
        .then((data) => {
          document.getElementById("search").innerHTML = data;
        });
      break;

    case "about":
      fetch("pages/about-us.html")
        .then((response) => response.text())
        .then((data) => {
          document.getElementById("page").innerHTML = data;
        });

      document.getElementById("search").innerHTML = "";
      break;

    case "contact":
      fetch("pages/contact-us.html")
        .then((response) => response.text())
        .then((data) => {
          document.getElementById("page").innerHTML = data;
        });

      document.getElementById("search").innerHTML = "";
      break;

    default:
      fetch("pages/home.html")
        .then((response) => response.text())
        .then((data) => {
          document.getElementById("page").innerHTML = data;
        });
  }
};

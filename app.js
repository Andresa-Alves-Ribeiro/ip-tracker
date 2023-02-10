"use strict";

const inputField = document.querySelector(".input__field");
const cardContents = document.querySelectorAll(".card-content");

////////////////// PEGAR DADOS DA API DE LOCALIZAÇÃO //////////////////////

let map;

const fetchData = function (ipUser = "") {
  fetch(
    `https://geo.ipify.org/api/v1?apiKey=at_dwa8sZ2rLXbOyLCd7fZQHASemVGTR&ipAddress=${ipUser}`
  )
    .then((response) => {
      if (!response.ok) {
        throw new Error("IP address not valid. Try again!");
      }

      return response.json();
    })
    .then((data) => {
      const lat = data.location.lat;
      const lng = data.location.lng;

      cardDetails(
        data.ip,
        data.location.city,
        data.location.country,
        data.location.geonameId,
        data.location.timezone,
        data.isp
      );

      //ADICIONAR MAPA NO UI

      showLocationMap(lat, lng);
    })
    .catch((err) => {
      console.log(err.message);
      errorHandler();
    });
};

///////////////// FUNÇÃO DE ERRO ///////////////////////

const errorHandler = function () {
  inputField.classList.add("error-theme");
  inputField.placeholder = "Insert a valid IP address!";

  cardContents.forEach((content) => {
    content.innerText = "";
  });
};

///////////////// GERAR MAPA COM API DA GOOGLE ///////////////////////

const generateMap = function (lat, lng) {
  map = L.map("map", { zoomControl: false }).setView([lat, lng], 17);

  L.tileLayer("http://{s}.google.com/vt/lyrs=m&x={x}&y={y}&z={z}", {
    maxZoom: 20,
    subdomains: ["mt0", "mt1", "mt2", "mt3"],
  }).addTo(map);

  const myIcon = L.icon({
    iconUrl: "images/icon-location.svg",
  });

  L.marker([lat, lng], { icon: myIcon }).addTo(map);

  L.control
    .zoom({
      position: "bottomright",
    })
    .addTo(map);
};

/////////////////// ADICIONAR MAPA NO UI /////////////////////

const showLocationMap = function (lat, lng) {
  if (map != null) {
    map.remove();
    generateMap(lat, lng);
  } else {
    generateMap(lat, lng);
  }
};

////////////////// ADICIONAR INFORMAÇÃO NO CONTAINER //////////////////////

////////////////// EVENT LISTENERS //////////////////////

// Event listener: input button
document.querySelector(".input__btn").addEventListener("click", () => {
  cardDetails();
});

const cardDetails = function (ip, city, country, geoId, timezone, isp) {
  document.querySelector("#ip").textContent = `${ip}`;
  document.querySelector("#city").textContent = `${city}, `;
  document.querySelector("#country").textContent = `${country}`;
  document.querySelector("#geoId").textContent = `${geoId}`;
  document.querySelector("#timezone").textContent = `UTC ${timezone}`;
  document.querySelector("#isp").textContent = `${isp}`;
};

// abrir a localização do usuário no mapa conforme o usuário carrega
document.addEventListener("DOMContentLoaded", (e) => {
  fetchData();
});

//input button
document.querySelector(".input__btn").addEventListener("click", () => {
  if (inputField.value.trim() !== "") {
    fetchData(inputField.value);
    inputField.value = "";
  } else {
    errorHandler();
  }
});

// input do usuario
document.querySelector(".input__field").addEventListener("click", () => {
  inputField.classList.remove("error-theme");
  inputField.placeholder = "Search for any IP address or domain...";
});

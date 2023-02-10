let map;

 const FetchData = function (ipUser = "") {
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

            //adding map to UI
            showLocationMap(lat, lng);
        })
        .catch((err) => {
            console.log(err.message);
            errorHandler();
        });
};

export default FetchData;
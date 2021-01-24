import * as fetch from "./functions/fetch.js";

let map, infoWindow;
// let locations = [
//     { "id_occurrence": 2, "address": "Rua da Água Nova, 4815-598 Tagilde" }
// ];

let quarter = { "id_occurrence": "Quartel", "address": "Av. Bombeiros Voluntários 336, 4815-394 Caldas de Vizela" };


(async function () {
    await initMap()
})()
async function initMap() {
    let route = "occurrences";
    let locations = await fetch.getData(route)

    try {
        // Map options
        let options = {
            zoom: 15,
            // Coordenadas centradas em vizela
            center: { lat: 41.3764108, lng: -8.309834799999999 }
        }

        // New map
        map = new google.maps.Map(document.getElementById('map'), options);
        infoWindow = new google.maps.InfoWindow();

        quarter.marker = await createMarker(quarter)
        addMarker(quarter.marker);

        let trueLocations = [];
        for (const location of locations) {
            if (location.address !== null && location.address !== undefined) {
                trueLocations.push(location);
            }
        }
        console.log(trueLocations)

        for(const trueLocation of trueLocations){
            trueLocation.marker = await createMarker(trueLocation);
            console.log(trueLocation.marker)
            addMarker(trueLocation.marker);
        }


        async function createMarker(location) {
            try {
                let marker;
                let aux;
                console.log(location.address)
                aux = await getLocationInfo(location.address);
                console.log(aux)
                marker = {
                    coords: { lat: aux.lat, lng: aux.lng },
                    content: `${location.id_occurrence}:   ${aux.formattedAddress}`
                }
                return marker;
            } catch (err) {
                console.log('We could not get the coordinates of locations')
            }

        }

        function getLocationInfo(address) {
            return new Promise((resolve, reject) => {
                let locationInfo = {};
                axios.get('https://maps.googleapis.com/maps/api/geocode/json', {
                    params: {
                        address: address,
                        key: 'AIzaSyBb28UKwwuNB63cNaqpf02q7HYNEFdMrTM'
                    }
                }).then(function (response) {
                    // console.log(response);
                    // Formatted Address
                    locationInfo.formattedAddress = response.data.results[0].formatted_address;
                    locationInfo.lat = response.data.results[0].geometry.location.lat;
                    locationInfo.lng = response.data.results[0].geometry.location.lng;
                    // console.log(locationInfo)
                    resolve(locationInfo);
                }).catch(function (err) {
                    console.log(err);
                })
            })
        }
        // // let currentPosition
        // const locationButton = document.createElement("button");
        // locationButton.textContent = "Clica para a sua posição atual";
        // locationButton.classList.add("custom-map-control-button");
        // map.controls[google.maps.ControlPosition.TOP_CENTER].push(locationButton);

        // // let currentPosition = 
        // locationButton.addEventListener("click", () => {
        //     // Try HTML5 geolocaiton

        //     if (navigator.geolocation) {
        //         navigator.geolocation.getCurrentPosition(
        //             (position) => {
        //                 const pos = {
        //                     lat: position.coords.latitude,
        //                     lng: position.coords.longitude,
        //                 };
        //                 infoWindow.setPosition(pos);
        //                 infoWindow.setContent("Location found.");
        //                 infoWindow.open(map);
        //                 map.setCenter(pos);
        //                 CurrentPosition(pos);
        //             },
        //             () => {

        //                 handleLocationError(true, infoWIndow, map.getCenter())
        //             }

        //         );
        //     } else {
        //         //Browser dosn't support Geolocation
        //         handleLocationError(false, infoWindow, map.getCenter())

        //     }
        // }
        // )


        // let currentPosition;
        // function CurrentPosition(a){
        //     currentPosition = a;
        // }




        // Add Marker Function
        function addMarker(props) {
            let marker = new google.maps.Marker({
                position: props.coords,
                map: map,
                // icon:props.iconImage
            });

            // Check for customicon
            if (props.iconImage) {
                // Set icon image
                marker.setIcon(props.iconImage);
            }

            // Check content
            if (props.content) {
                let infoWindow = new google.maps.InfoWindow({
                    content: props.content
                });

                marker.addListener('click', function () {
                    infoWindow.open(map, marker);
                });
            }
        }

        //////////////////////////////////////////////////////////////////////////////////////////////
        //////////////////////////////////////////////////////////////////////////////////////////////
        //////////////////////////////////////////////////////////////////////////////////////////////


        let directionsService = new google.maps.DirectionsService();
        let directionsRenderer = new google.maps.DirectionsRenderer();
        directionsRenderer.setMap(map); // Existing map object displays directions
        // Create route from existing points used for markers

        let coordinates = {};
        // console.log(quarter.marker.coords);
        coordinates.origin = quarter.marker.coords;

        let typeTravel = 'DRIVING'; //WALKING, BICYCLING, TRANSIT, DRIVING;

    for (const trueLocation of trueLocations) {
                    console.log(trueLocation.marker.coords)
                    coordinates.destination = trueLocation.marker.coords;
                    getDistanceGuide(coordinates, typeTravel, trueLocation.id_occurrence);
        }


        function getDistanceGuide(coordinates, typeTravel, id) {
            let route = {
                origin: coordinates.origin,
                destination: coordinates.destination,
                travelMode: typeTravel
            }
            directionsService.route(route,
                function (response, status) { // anonymous function to capture directions
                    if (status !== 'OK') {
                        window.alert('Directions request failed due to ' + status);
                        return;
                    } else {
                        directionsRenderer.setDirections(response); // Add route to the map
                        let directionsData = response.routes[0].legs[0]; // Get data about the mapped route
                        if (!directionsData) {
                            window.alert('Directions request failed');
                            return;
                        }
                        else {
                            sessionStorage.setItem("distance_id_occurrence_" + id, directionsData.distance.text)
                            document.getElementById('msg').innerHTML += " Driving distance is " + directionsData.distance.text + " (" + directionsData.duration.text + ").";
                        }
                    }
                });
        }
    } catch (err) {
        console.log(err);
    }

}






// function handleLocationError(browserHasGeolocation, infoWIndow, pos) {
//     infoWIndow.setPosition(pos);
//     infoWIndow.setContent(
//         browserHasGeolocation
//             ? "Error: The Geolocation service failed."
//             : "Roor: Your broser dosn't support geolocation."
//     )
//     infoWIndow.open(map)
// }
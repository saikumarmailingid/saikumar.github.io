// Sample data for day trips
const dayTripsData = [
    { name: "City Tour", description: "Explore the city's landmarks during the day." },
    // Add more day trip data as needed
];

// Sample data for day and night trips
const dayNightTripsData = [
    { name: "Sunset Cruise", description: "Enjoy a scenic cruise with beautiful sunset views." },
    // Add more day and night trip data as needed
];

// Function to display trips in a section
function displayTrips(trips, sectionId) {
    const section = document.getElementById(sectionId);
    section.innerHTML = "";
    trips.forEach(trip => {
        const tripCard = document.createElement("div");
        tripCard.classList.add("trip-card");
        tripCard.innerHTML = `
            <h3>${trip.name}</h3>
            <p>${trip.description}</p>
        `;
        section.appendChild(tripCard);
    });
}

// Function to display selected trips based on dropdown selection
function displaySelectedTrips() {
    const tripType = document.getElementById("tripType").value;
    const tripsData = tripType === "dayTrips" ? dayTripsData : dayNightTripsData;
    displayTrips(tripsData, "tripsContainer");
}

// Display default day trips on page load
displaySelectedTrips();

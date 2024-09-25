javascript
document.getElementById('customerForm').addEventListener('submit', function(event) {
    event.preventDefault();
    
    const location = document.getElementById('location').value;
    const apiKey = 'YOUR_GOOGLE_PLACES_API_KEY';
    
    fetch(`maps.googleapis.com/maps/api/geoc…json?address=${location}&key=${apiKey}`)
        .then(response => response.json())
        .then(data => {
            const coords = data.results[0].geometry.location;
            searchNearbyMarkets(coords.lat, coords.lng, apiKey);
        })
        .catch(error => console.error('Error:', error));
});

function searchNearbyMarkets(lat, lng, apiKey) {
    fetch(`maps.googleapis.com/maps/api/plac…son?location=${lat},${lng}&radius=10000&type=supermarket&key=${apiKey}`)
        .then(response => response.json())
        .then(data => {
            console.log('Nearby Markets:', data.results);
            // Process and display market data here
        })
        .catch(error => console)
}
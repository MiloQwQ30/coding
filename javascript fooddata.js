
javascript
const appId = 'YOUR_APP_ID';
const appKey = 'YOUR_APP_KEY';
const foodItem = 'apple';

fetch(`api.edamam.com/api/food-database/v2/parser?ingr=${foodItem}&app_id=${appId}&app_key=${appKey}`)
  .then(response => response.json())
  .then(data => {
    console.log(data);
    // Process and display the data as needed
  })
  .catch(error => console.error('Error:', error));

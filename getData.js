let RestaurantList = {}; //variable to store loaded json data.
getData(); //call the getData function at start so only one API call is needed.

//function to search the json object returned. Returns an array of matching restaurant objects.
function search (searchString) {
  const query = searchString.toLowerCase().trim(); //makes the search string actually used all lowercase and removed of trailing or leading spaces.
  let results = []; //initializes a results array;

  //loop to travese the JSON array of restaurant objects and return matching restaurants by name or cuisine type
  for (let i = 0; i < RestaurantList.length; i++) {
    let restaurantName = RestaurantList[i].Name.toLowerCase().trim();   //stores the name string of each Restaurant.
    let restaurantCuisine = RestaurantList[i].Cuisine.toLowerCase().trim(); //stores the cuisine string of each Restaurant.

    //add all restaurant objects that contain the search string in the name or cuisine.
    if(restaurantName.includes(query) || restaurantCuisine.includes(query)) {
      results.push(RestaurantList[i]);
    }
  }


  //sorts alphabetically by first letter in name
  results.sort(function(a,b) {
    return a.Name.charCodeAt(0) - b.Name.charCodeAt(0);
  });


  return results; //returns the list of restaurant objects
}

//fetchs the data from the api - local for now.
async function getData() {

    //sets api information
    const localAPI_URL = 'http://localhost:3000/restaurants'; //url for the local API
    
    //gets information
    try {
        const response = await fetch(localAPI_URL); //response variable
        
        if (response.ok) {
            //if the response is successful:
            const rawData = await response.json(); //gets the response
            RestaurantList = rawData; //assign the global restaurant variable to the data. 
        } else {
          throw new Error;
        }        
    } catch (error) {
        console.log("Request has failed, error message: " + error);
    }
}
